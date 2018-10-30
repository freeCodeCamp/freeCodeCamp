#include "dtrace_provider.h"
#include <nan.h>

namespace node {

  using namespace v8;

  DTraceProbe::DTraceProbe() : Nan::ObjectWrap() {
    argc = 0;
    probedef = NULL;
  }

  DTraceProbe::~DTraceProbe() {
    for (size_t i = 0; i < argc; i++)
      delete(this->arguments[i]);
    usdt_probe_release(probedef);
  }

  Nan::Persistent<FunctionTemplate> DTraceProbe::constructor_template;

  void DTraceProbe::Initialize(v8::Local<Object> target) {
    Nan::HandleScope scope;

    Local<FunctionTemplate> t = Nan::New<FunctionTemplate>(DTraceProbe::New);
    t->InstanceTemplate()->SetInternalFieldCount(2);
    t->SetClassName(Nan::New<String>("DTraceProbe").ToLocalChecked());
    constructor_template.Reset(t);

    Nan::SetPrototypeMethod(t, "fire", DTraceProbe::Fire);

    target->Set(Nan::New<String>("DTraceProbe").ToLocalChecked(), t->GetFunction());
  }

  NAN_METHOD(DTraceProbe::New) {
    Nan::HandleScope scope;
    DTraceProbe *probe = new DTraceProbe();
    probe->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
  }

  NAN_METHOD(DTraceProbe::Fire) {
    Nan::HandleScope scope;

    if (!info[0]->IsFunction()) {
      Nan::ThrowTypeError("Must give probe value callback as first argument");
      return;
    }

    DTraceProbe *pd = Nan::ObjectWrap::Unwrap<DTraceProbe>(info.Holder());
    info.GetReturnValue().Set(pd->_fire(info, 0));
  }

  v8::Local<Value> DTraceProbe::_fire(Nan::NAN_METHOD_ARGS_TYPE argsinfo, size_t fnidx) {
    Nan::HandleScope scope;

    if (usdt_is_enabled(this->probedef->probe) == 0) {
      return Nan::Undefined();
    }

    // invoke fire callback
    Nan::TryCatch try_catch;

    size_t cblen = argsinfo.Length() - fnidx - 1;
    Local<Value> *cbargs = new Local<Value>[cblen];

    for (size_t i = 0; i < cblen; i++) {
        cbargs[i] = argsinfo[i + fnidx + 1];
    }

    Local<Function> cb = Local<Function>::Cast(argsinfo[fnidx]);
    Local<Value> probe_args = cb->Call(this->handle(), cblen, cbargs);

    delete [] cbargs;

    // exception in args callback?
    if (try_catch.HasCaught()) {
      Nan::FatalException(try_catch);
      return Nan::Undefined();
    }

    // check return
    if (!probe_args->IsArray()) {
      return Nan::Undefined();
    }

    Local<Array> a = Local<Array>::Cast(probe_args);
    void *argv[USDT_ARG_MAX];

    // convert each argument value
    for (size_t i = 0; i < argc; i++) {
      argv[i] = this->arguments[i]->ArgumentValue(a->Get(i));
    }

    // finally fire the probe
    usdt_fire_probe(this->probedef->probe, argc, argv);

    // free argument values
    for (size_t i = 0; i < argc; i++) {
      this->arguments[i]->FreeArgument(argv[i]);
    }

    return Nan::True();
  }

} // namespace node
