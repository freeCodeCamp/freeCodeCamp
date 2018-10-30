/*
** © 2014 by Philipp Dunkel <pip@pipobscure.com>
** Licensed under MIT License.
*/

#include "nan.h"
#include "uv.h"
#include "v8.h"
#include "pthread.h"
#include "CoreFoundation/CoreFoundation.h"
#include "CoreServices/CoreServices.h"
#include <iostream>
#include <vector>

#include "src/storage.cc"
namespace fse {
  class FSEvents : public Nan::ObjectWrap {
  public:
    explicit FSEvents(const char *path);
    ~FSEvents();

    // locking.cc
    bool lockStarted;
    pthread_mutex_t lockmutex;
    void lockingStart();
    void lock();
    void unlock();
    void lockingStop();

    // async.cc
    uv_async_t async;
    void asyncStart();
    void asyncTrigger();
    void asyncStop();

    // thread.cc
    pthread_t thread;
    CFRunLoopRef threadloop;
    void threadStart();
    static void *threadRun(void *ctx);
    void threadStop();

    // methods.cc - internal
    Nan::AsyncResource async_resource;
    void emitEvent(const char *path, UInt32 flags, UInt64 id);

    // Common
    CFArrayRef paths;
    std::vector<fse_event*> events;
    static void Initialize(v8::Handle<v8::Object> exports);

    // methods.cc - exposed
    static NAN_METHOD(New);
    static NAN_METHOD(Stop);
    static NAN_METHOD(Start);

  };
}

using namespace fse;

FSEvents::FSEvents(const char *path)
   : async_resource("fsevents:FSEvents"), lockStarted(false) {
  CFStringRef dirs[] = { CFStringCreateWithCString(NULL, path, kCFStringEncodingUTF8) };
  paths = CFArrayCreate(NULL, (const void **)&dirs, 1, NULL);
  threadloop = NULL;
  lockingStart();
}
FSEvents::~FSEvents() {
  lockingStop();

  CFRelease(paths);
}

#ifndef kFSEventStreamEventFlagItemCreated
#define kFSEventStreamEventFlagItemCreated 0x00000010
#endif

#include "src/locking.cc"
#include "src/async.cc"
#include "src/thread.cc"
#include "src/constants.cc"
#include "src/methods.cc"

void FSEvents::Initialize(v8::Handle<v8::Object> exports) {
  v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(FSEvents::New);
  tpl->SetClassName(Nan::New<v8::String>("FSEvents").ToLocalChecked());
  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->PrototypeTemplate()->Set(
           Nan::New<v8::String>("start").ToLocalChecked(),
           Nan::New<v8::FunctionTemplate>(FSEvents::Start));
  tpl->PrototypeTemplate()->Set(
           Nan::New<v8::String>("stop").ToLocalChecked(),
           Nan::New<v8::FunctionTemplate>(FSEvents::Stop));
  exports->Set(Nan::New<v8::String>("Constants").ToLocalChecked(), Constants());
  exports->Set(Nan::New<v8::String>("FSEvents").ToLocalChecked(),
               tpl->GetFunction());
}

NODE_MODULE(fse, FSEvents::Initialize)
