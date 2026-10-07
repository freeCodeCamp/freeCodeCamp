#ifndef PROMISE_RUNNER_H
#define PROMISE_RUNNER_H

#include <node_api.h>
#include "wasm/include.h"
#include <napi.h>

using namespace Napi;

class PromiseRunner {
public:
  const Env env;
  Promise::Deferred deferred;

  PromiseRunner(Env env) : env(env), deferred(Promise::Deferred::New(env)) {
    napi_status status = napi_create_async_work(env, nullptr, env.Undefined(),
                                                onExecute, onWorkComplete, this, &work);
    if (status != napi_ok) {
      work = nullptr;
      const napi_extended_error_info *error_info = 0;
      napi_get_last_error_info(env, &error_info);
      if (error_info->error_message) {
        Error::New(env, error_info->error_message).ThrowAsJavaScriptException();
      } else {
        Error::New(env).ThrowAsJavaScriptException();
      }
    }
  }

  virtual ~PromiseRunner() {}

  Value queue() {
    if (work) {
      napi_status status = napi_queue_async_work(env, work);
      if (status != napi_ok) {
        onError(Error::New(env));
      }
    }

    return deferred.Promise();
  }

private:
  napi_async_work work;
  std::string error;

  static void onExecute(napi_env env, void *this_pointer) {
    PromiseRunner* self = (PromiseRunner*) this_pointer;
    try {
      self->execute();
    } catch (std::exception &err) {
      self->error = err.what();
    }
  }

  static void onWorkComplete(napi_env env, napi_status status, void *this_pointer) {
    PromiseRunner* self = (PromiseRunner*) this_pointer;
    if (status != napi_cancelled) {
      HandleScope scope(self->env);
      if (status == napi_ok) {
        status = napi_delete_async_work(self->env, self->work);
        if (status == napi_ok) {
          if (self->error.size() == 0) {
            self->onOK();
          } else {
            self->onError(Error::New(self->env, self->error));
          }
          delete self;
          return;
        }
      }
    }

    // fallthrough for error handling
    const napi_extended_error_info *error_info = 0;
    napi_get_last_error_info(env, &error_info);
    if (error_info->error_message){
      self->onError(Error::New(env, error_info->error_message));
    } else {
      self->onError(Error::New(env));
    }
    delete self;
  }

  virtual void execute() {}
  virtual Value getResult() {
    return env.Null();
  }

  void onOK() {
    HandleScope scope(env);
    Value result = getResult();
    deferred.Resolve(result);
  }

  void onError(const Error &e) {
    deferred.Reject(e.Value());
  }
};

#endif
