/*
** © 2014 by Philipp Dunkel <pip@pipobscure.com>
** Licensed under MIT License.
*/

void FSEvents::emitEvent(const char *path, UInt32 flags, UInt64 id) {
  Nan::HandleScope handle_scope;
  v8::Local<v8::Object> object = handle();
  v8::Local<v8::Value> key = Nan::New<v8::String>("handler").ToLocalChecked();
  Nan::Callback handler(Nan::To<v8::Function>(Nan::Get(object, key).ToLocalChecked()).ToLocalChecked());
  v8::Local<v8::Value> argv[] = {
    Nan::New<v8::String>(path).ToLocalChecked(),
    Nan::New<v8::Number>(flags),
    Nan::New<v8::Number>(id)
  };
  handler.Call(3, argv, &async_resource);
}

NAN_METHOD(FSEvents::New) {
  Nan::Utf8String path(info[0]);

  FSEvents *fse = new FSEvents(*path);
  fse->Wrap(info.This());
  Nan::Set(info.This(), Nan::New<v8::String>("handler").ToLocalChecked(), info[1]);

  info.GetReturnValue().Set(info.This());
}

NAN_METHOD(FSEvents::Stop) {
  FSEvents* fse = Nan::ObjectWrap::Unwrap<FSEvents>(info.This());

  fse->threadStop();
  fse->asyncStop();

  info.GetReturnValue().Set(info.This());
}

NAN_METHOD(FSEvents::Start) {
  FSEvents* fse = Nan::ObjectWrap::Unwrap<FSEvents>(info.This());
  fse->asyncStart();
  fse->threadStart();

  info.GetReturnValue().Set(info.This());
}
