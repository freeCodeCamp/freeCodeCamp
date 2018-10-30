#include <nan.h>
#include <node_object_wrap.h>

extern "C" {
#include <usdt.h>
}

#include <sys/dtrace.h>
#include <sys/types.h>
#include <sys/mman.h>

#include <errno.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>

#ifndef __APPLE__
#include <stdlib.h>
#ifndef __FreeBSD__
#include <malloc.h>
#endif
#endif

namespace node {

  using namespace v8;

  class DTraceArgument {
  public:
    virtual const char *Type() = 0;
    virtual void *ArgumentValue(v8::Local<Value>) = 0;
    virtual void FreeArgument(void *) = 0;
    virtual ~DTraceArgument() { };
  };

  class DTraceIntegerArgument : public DTraceArgument {
  public:
    const char *Type();
    void *ArgumentValue(v8::Local<Value>);
    void FreeArgument(void *);
  };

  class DTraceStringArgument : public DTraceArgument {
  public:
    const char *Type();
    void *ArgumentValue(v8::Local<Value>);
    void FreeArgument(void *);
  };

  class DTraceJsonArgument : public DTraceArgument {
  public:
    const char *Type();
    void *ArgumentValue(v8::Local<Value>);
    void FreeArgument(void *);
    DTraceJsonArgument();
    ~DTraceJsonArgument();
  private:
    Nan::Persistent<Object> JSON;
    Nan::Persistent<Function> JSON_stringify;
  };

  class DTraceProbe : public Nan::ObjectWrap {

  public:
    static void Initialize(v8::Local<v8::Object> target);
    usdt_probedef_t *probedef;
    size_t argc;
    DTraceArgument *arguments[USDT_ARG_MAX];

    static NAN_METHOD(New);
    static NAN_METHOD(Fire);

    v8::Local<Value> _fire(Nan::NAN_METHOD_ARGS_TYPE, size_t);

    static Nan::Persistent<FunctionTemplate> constructor_template;

    DTraceProbe();
    ~DTraceProbe();
  private:
  };

  class DTraceProvider : public Nan::ObjectWrap {

  public:
    static void Initialize(v8::Local<v8::Object> target);
    usdt_provider_t *provider;

    static NAN_METHOD(New);
    static NAN_METHOD(AddProbe);
    static NAN_METHOD(RemoveProbe);
    static NAN_METHOD(Enable);
    static NAN_METHOD(Disable);
    static NAN_METHOD(Fire);

    DTraceProvider();
    ~DTraceProvider();
  private:
    static Nan::Persistent<FunctionTemplate> constructor_template;
  };

  void InitDTraceProvider(v8::Local<v8::Object> target);
}
