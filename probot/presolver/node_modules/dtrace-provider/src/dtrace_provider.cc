#include "dtrace_provider.h"
#include <nan.h>

#include <stdio.h>

namespace node {

  using namespace v8;

  DTraceProvider::DTraceProvider() : Nan::ObjectWrap() {
    provider = NULL;
  }

  DTraceProvider::~DTraceProvider() {
    usdt_provider_disable(provider);
    usdt_provider_free(provider);
  }

  Nan::Persistent<FunctionTemplate> DTraceProvider::constructor_template;

  void DTraceProvider::Initialize(v8::Local<Object> target) {
    Nan::HandleScope scope;

    Local<FunctionTemplate> t = Nan::New<FunctionTemplate>(DTraceProvider::New);
    t->InstanceTemplate()->SetInternalFieldCount(1);
    t->SetClassName(Nan::New<String>("DTraceProvider").ToLocalChecked());
    constructor_template.Reset(t);

    Nan::SetPrototypeMethod(t, "addProbe", DTraceProvider::AddProbe);
    Nan::SetPrototypeMethod(t, "removeProbe", DTraceProvider::RemoveProbe);
    Nan::SetPrototypeMethod(t, "enable", DTraceProvider::Enable);
    Nan::SetPrototypeMethod(t, "disable", DTraceProvider::Disable);
    Nan::SetPrototypeMethod(t, "fire", DTraceProvider::Fire);

    target->Set(Nan::New<String>("DTraceProvider").ToLocalChecked(), t->GetFunction());

    DTraceProbe::Initialize(target);
  }

  NAN_METHOD(DTraceProvider::New) {
    Nan::HandleScope scope;
    DTraceProvider *p = new DTraceProvider();
    char module[128];

    p->Wrap(info.This());

    if (info.Length() < 1 || !info[0]->IsString()) {
      Nan::ThrowTypeError("Must give provider name as argument");
      return;
    }

    String::Utf8Value name(info[0]->ToString());

    if (info.Length() == 2) {
      if (!info[1]->IsString()) {
        Nan::ThrowTypeError("Must give module name as argument");
        return;
      }

      String::Utf8Value mod(info[1]->ToString());
      (void) snprintf(module, sizeof (module), "%s", *mod);
    } else if (info.Length() == 1) {
      // If no module name is provided, develop a synthetic module name based
      // on our address
      (void) snprintf(module, sizeof (module), "mod-%p", p);
    } else {
      Nan::ThrowError("Expected only provider name and module as arguments");
      return;
    }

    if ((p->provider = usdt_create_provider(*name, module)) == NULL) {
      Nan::ThrowError("usdt_create_provider failed");
      return;
    }

    info.GetReturnValue().Set(info.This());
  }

  NAN_METHOD(DTraceProvider::AddProbe) {
    Nan::HandleScope scope;
    const char *types[USDT_ARG_MAX];

    v8::Local<Object> obj = info.Holder();
    DTraceProvider *provider = Nan::ObjectWrap::Unwrap<DTraceProvider>(obj);

    // create a DTraceProbe object
    v8::Local<Function> klass =
        Nan::New<FunctionTemplate>(DTraceProbe::constructor_template)->GetFunction();
    v8::Local<Object> pd = Nan::NewInstance(klass).ToLocalChecked();

    // store in provider object
    DTraceProbe *probe = Nan::ObjectWrap::Unwrap<DTraceProbe>(pd->ToObject());
    obj->Set(info[0]->ToString(), pd);

    // reference the provider to avoid GC'ing it when only probes remain in scope.
    Nan::ForceSet(pd, Nan::New<String>("__prov__").ToLocalChecked(), obj,
        static_cast<PropertyAttribute>(DontEnum | ReadOnly | DontDelete));

    // add probe to provider
    for (int i = 0; i < USDT_ARG_MAX; i++) {
      if (i < info.Length() - 1) {
        String::Utf8Value type(info[i + 1]->ToString());

        if (strncmp("json", *type, 4) == 0)
          probe->arguments[i] = new DTraceJsonArgument();
        else if (strncmp("char *", *type, 6) == 0)
          probe->arguments[i] = new DTraceStringArgument();
        else if (strncmp("int", *type, 3) == 0)
          probe->arguments[i] = new DTraceIntegerArgument();
        else
          probe->arguments[i] = new DTraceStringArgument();

        types[i] = strdup(probe->arguments[i]->Type());
        probe->argc++;
      }
    }

    String::Utf8Value name(info[0]->ToString());
    probe->probedef = usdt_create_probe(*name, *name, probe->argc, types);
    Nan::SetInternalFieldPointer(pd, 1, provider);
    usdt_provider_add_probe(provider->provider, probe->probedef);

    for (size_t i = 0; i < probe->argc; i++) {
      free((char *)types[i]);
    }

    info.GetReturnValue().Set(pd);
  }

  NAN_METHOD(DTraceProvider::RemoveProbe) {
    Nan::HandleScope scope;

    v8::Local<Object> provider_obj = info.Holder();
    DTraceProvider *provider = Nan::ObjectWrap::Unwrap<DTraceProvider>(provider_obj);

    v8::Local<Object> probe_obj = Local<Object>::Cast(info[0]);
    DTraceProbe *probe = Nan::ObjectWrap::Unwrap<DTraceProbe>(probe_obj);

    v8::Local<String> name = Nan::New<String>(probe->probedef->name).ToLocalChecked();
    provider_obj->Delete(name);

    if (usdt_provider_remove_probe(provider->provider, probe->probedef) != 0) {
      Nan::ThrowError(usdt_errstr(provider->provider));
      return;
    }

    info.GetReturnValue().Set(Nan::True());
  }

  NAN_METHOD(DTraceProvider::Enable) {
    Nan::HandleScope scope;
    DTraceProvider *provider = Nan::ObjectWrap::Unwrap<DTraceProvider>(info.Holder());

    if (usdt_provider_enable(provider->provider) != 0) {
      Nan::ThrowError(usdt_errstr(provider->provider));
      return;
    }

    return;
  }

  NAN_METHOD(DTraceProvider::Disable) {
    Nan::HandleScope scope;
    DTraceProvider *provider = Nan::ObjectWrap::Unwrap<DTraceProvider>(info.Holder());

    if (usdt_provider_disable(provider->provider) != 0) {
      Nan::ThrowError(usdt_errstr(provider->provider));
      return;
    }

    return;
  }

  NAN_METHOD(DTraceProvider::Fire) {
    Nan::HandleScope scope;

    if (!info[0]->IsString()) {
      Nan::ThrowTypeError("Must give probe name as first argument");
      return;
    }

    if (!info[1]->IsFunction()) {
      Nan::ThrowTypeError("Must give probe value callback as second argument");
      return;
    }

    v8::Local<Object> holder = info.Holder();
    DTraceProvider *provider = Nan::ObjectWrap::Unwrap<DTraceProvider>(holder);

    Nan::MaybeLocal<v8::Value> maybe = Nan::Get(holder, info[0]);
    if (maybe.IsEmpty()) {
      return;
    }

    v8::Local<v8::Value> value = maybe.ToLocalChecked();
    if (!value->IsObject()) {
      return;
    }

    v8::Local<Object> probe = Local<Object>::Cast(value);
    if (probe->InternalFieldCount() != 2) {
      return;
    }

    if (Nan::GetInternalFieldPointer(probe, 1) != provider) {
      return;
    }

    DTraceProbe *p = Nan::ObjectWrap::Unwrap<DTraceProbe>(probe);
    if (p == NULL) {
      return;
    }

    p->_fire(info, 1);

    info.GetReturnValue().Set(Nan::True());
  }

  extern "C" void
  init(v8::Local<Object> target) {
    DTraceProvider::Initialize(target);
  }

  NODE_MODULE(DTraceProviderBindings, init)
} // namespace node
