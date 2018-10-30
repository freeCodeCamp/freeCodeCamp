#include "dtrace_provider.h"
#include <nan.h>

namespace node {

  using namespace v8;

  // Integer Argument

#ifdef __x86_64__
# define INTMETHOD ToInteger()
#else
# define INTMETHOD ToInt32()
#endif

  void * DTraceIntegerArgument::ArgumentValue(v8::Local<Value> value) {
    if (value->IsUndefined())
      return 0;
    else
      return (void *)(long) value->INTMETHOD->Value();
  }

  void DTraceIntegerArgument::FreeArgument(void *arg) {
  }

  const char * DTraceIntegerArgument::Type() {
    return "int";
  }

  // String Argument

  void * DTraceStringArgument::ArgumentValue(v8::Local<Value> value) {
    if (value->IsUndefined())
      return (void *) strdup("undefined");

    String::Utf8Value str(value->ToString());
    return (void *) strdup(*str);
  }

  void DTraceStringArgument::FreeArgument(void *arg) {
    free(arg);
  }

  const char * DTraceStringArgument::Type() {
    return "char *";
  }

  // JSON Argument

  DTraceJsonArgument::DTraceJsonArgument() {
    Nan::HandleScope scope;
    v8::Local<Context> context = Nan::GetCurrentContext();
    v8::Local<Object> global = context->Global();
    v8::Local<Object> l_JSON = global->Get(Nan::New<String>("JSON").ToLocalChecked())->ToObject();
    v8::Local<Function> l_JSON_stringify
      = v8::Local<Function>::Cast(l_JSON->Get(Nan::New<String>("stringify").ToLocalChecked()));
    JSON.Reset(l_JSON);
    JSON_stringify.Reset(l_JSON_stringify);
  }

  DTraceJsonArgument::~DTraceJsonArgument() {
    JSON.Reset();
    JSON_stringify.Reset();
  }

  void * DTraceJsonArgument::ArgumentValue(v8::Local<Value> value) {
    Nan::HandleScope scope;

    if (value->IsUndefined())
      return (void *) strdup("undefined");

    v8::Local<Value> info[1];
    info[0] = value;
    v8::Local<Value> j = Nan::New<Function>(JSON_stringify)->Call(
          Nan::New<Object>(JSON), 1, info);

    if (*j == NULL)
      return (void *) strdup("{ \"error\": \"stringify failed\" }");

    String::Utf8Value json(j->ToString());
    return (void *) strdup(*json);
  }

  void DTraceJsonArgument::FreeArgument(void *arg) {
    free(arg);
  }

  const char * DTraceJsonArgument::Type() {
    return "char *";
  }

} // namespace node
