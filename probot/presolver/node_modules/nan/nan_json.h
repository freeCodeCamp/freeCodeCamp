/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_JSON_H_
#define NAN_JSON_H_

#if NODE_MODULE_VERSION < NODE_0_12_MODULE_VERSION
#define NAN_JSON_H_NEED_PARSE 1
#else
#define NAN_JSON_H_NEED_PARSE 0
#endif  // NODE_MODULE_VERSION < NODE_0_12_MODULE_VERSION

#if NODE_MODULE_VERSION >= NODE_7_0_MODULE_VERSION
#define NAN_JSON_H_NEED_STRINGIFY 0
#else
#define NAN_JSON_H_NEED_STRINGIFY 1
#endif  // NODE_MODULE_VERSION >= NODE_7_0_MODULE_VERSION

class JSON {
 public:
  JSON() {
#if NAN_JSON_H_NEED_PARSE + NAN_JSON_H_NEED_STRINGIFY
    Nan::HandleScope scope;

    Nan::MaybeLocal<v8::Value> maybe_global_json = Nan::Get(
      Nan::GetCurrentContext()->Global(),
      Nan::New("JSON").ToLocalChecked()
    );

    assert(!maybe_global_json.IsEmpty() && "global JSON is empty");
    v8::Local<v8::Value> val_global_json = maybe_global_json.ToLocalChecked();

    assert(val_global_json->IsObject() && "global JSON is not an object");
    Nan::MaybeLocal<v8::Object> maybe_obj_global_json =
      Nan::To<v8::Object>(val_global_json);

    assert(!maybe_obj_global_json.IsEmpty() && "global JSON object is empty");
    v8::Local<v8::Object> global_json = maybe_obj_global_json.ToLocalChecked();

#if NAN_JSON_H_NEED_PARSE
    Nan::MaybeLocal<v8::Value> maybe_parse_method = Nan::Get(
      global_json, Nan::New("parse").ToLocalChecked()
    );

    assert(!maybe_parse_method.IsEmpty() && "JSON.parse is empty");
    v8::Local<v8::Value> parse_method = maybe_parse_method.ToLocalChecked();

    assert(parse_method->IsFunction() && "JSON.parse is not a function");
    parse_cb_.Reset(parse_method.As<v8::Function>());
#endif  // NAN_JSON_H_NEED_PARSE

#if NAN_JSON_H_NEED_STRINGIFY
    Nan::MaybeLocal<v8::Value> maybe_stringify_method = Nan::Get(
      global_json, Nan::New("stringify").ToLocalChecked()
    );

    assert(!maybe_stringify_method.IsEmpty() && "JSON.stringify is empty");
    v8::Local<v8::Value> stringify_method =
      maybe_stringify_method.ToLocalChecked();

    assert(
      stringify_method->IsFunction() && "JSON.stringify is not a function"
    );
    stringify_cb_.Reset(stringify_method.As<v8::Function>());
#endif  // NAN_JSON_H_NEED_STRINGIFY
#endif  // NAN_JSON_H_NEED_PARSE + NAN_JSON_H_NEED_STRINGIFY
  }

  inline
  Nan::MaybeLocal<v8::Value> Parse(v8::Local<v8::String> json_string) {
    Nan::EscapableHandleScope scope;
#if NAN_JSON_H_NEED_PARSE
    return scope.Escape(parse(json_string));
#else
    Nan::MaybeLocal<v8::Value> result;
#if NODE_MODULE_VERSION >= NODE_0_12_MODULE_VERSION && \
    NODE_MODULE_VERSION <= IOJS_2_0_MODULE_VERSION
    result = v8::JSON::Parse(json_string);
#else
#if NODE_MODULE_VERSION > NODE_6_0_MODULE_VERSION
    v8::Local<v8::Context> context_or_isolate = Nan::GetCurrentContext();
#else
    v8::Isolate* context_or_isolate = v8::Isolate::GetCurrent();
#endif  // NODE_MODULE_VERSION > NODE_6_0_MODULE_VERSION
    result = v8::JSON::Parse(context_or_isolate, json_string);
#endif  // NODE_MODULE_VERSION >= NODE_0_12_MODULE_VERSION &&
        // NODE_MODULE_VERSION <= IOJS_2_0_MODULE_VERSION
    if (result.IsEmpty()) return v8::Local<v8::Value>();
    return scope.Escape(result.ToLocalChecked());
#endif  // NAN_JSON_H_NEED_PARSE
  }

  inline
  Nan::MaybeLocal<v8::String> Stringify(v8::Local<v8::Object> json_object) {
    Nan::EscapableHandleScope scope;
    Nan::MaybeLocal<v8::String> result =
#if NAN_JSON_H_NEED_STRINGIFY
      Nan::To<v8::String>(stringify(json_object));
#else
      v8::JSON::Stringify(Nan::GetCurrentContext(), json_object);
#endif  // NAN_JSON_H_NEED_STRINGIFY
    if (result.IsEmpty()) return v8::Local<v8::String>();
    return scope.Escape(result.ToLocalChecked());
  }

  inline
  Nan::MaybeLocal<v8::String> Stringify(v8::Local<v8::Object> json_object,
    v8::Local<v8::String> gap) {
    Nan::EscapableHandleScope scope;
    Nan::MaybeLocal<v8::String> result =
#if NAN_JSON_H_NEED_STRINGIFY
      Nan::To<v8::String>(stringify(json_object, gap));
#else
      v8::JSON::Stringify(Nan::GetCurrentContext(), json_object, gap);
#endif  // NAN_JSON_H_NEED_STRINGIFY
    if (result.IsEmpty()) return v8::Local<v8::String>();
    return scope.Escape(result.ToLocalChecked());
  }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(JSON)
#if NAN_JSON_H_NEED_PARSE
  Nan::Callback parse_cb_;
#endif  // NAN_JSON_H_NEED_PARSE
#if NAN_JSON_H_NEED_STRINGIFY
  Nan::Callback stringify_cb_;
#endif  // NAN_JSON_H_NEED_STRINGIFY

#if NAN_JSON_H_NEED_PARSE
  inline v8::Local<v8::Value> parse(v8::Local<v8::Value> arg) {
    assert(!parse_cb_.IsEmpty() && "parse_cb_ is empty");
    AsyncResource resource("nan:JSON.parse");
    return parse_cb_.Call(1, &arg, &resource).FromMaybe(v8::Local<v8::Value>());
  }
#endif  // NAN_JSON_H_NEED_PARSE

#if NAN_JSON_H_NEED_STRINGIFY
  inline v8::Local<v8::Value> stringify(v8::Local<v8::Value> arg) {
    assert(!stringify_cb_.IsEmpty() && "stringify_cb_ is empty");
    AsyncResource resource("nan:JSON.stringify");
    return stringify_cb_.Call(1, &arg, &resource)
        .FromMaybe(v8::Local<v8::Value>());
  }

  inline v8::Local<v8::Value> stringify(v8::Local<v8::Value> arg,
    v8::Local<v8::String> gap) {
    assert(!stringify_cb_.IsEmpty() && "stringify_cb_ is empty");

    v8::Local<v8::Value> argv[] = {
      arg,
      Nan::Null(),
      gap
    };
    AsyncResource resource("nan:JSON.stringify");
    return stringify_cb_.Call(3, argv, &resource)
        .FromMaybe(v8::Local<v8::Value>());
  }
#endif  // NAN_JSON_H_NEED_STRINGIFY
};

#endif  // NAN_JSON_H_
