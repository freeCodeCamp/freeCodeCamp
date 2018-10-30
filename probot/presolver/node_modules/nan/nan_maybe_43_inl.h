/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_MAYBE_43_INL_H_
#define NAN_MAYBE_43_INL_H_

template<typename T>
using MaybeLocal = v8::MaybeLocal<T>;

template<typename T>
using Maybe = v8::Maybe<T>;

template<typename T>
inline Maybe<T> Nothing() {
  return v8::Nothing<T>();
}

template<typename T>
inline Maybe<T> Just(const T& t) {
  return v8::Just<T>(t);
}

inline
MaybeLocal<v8::String> ToDetailString(v8::Local<v8::Value> val) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(val->ToDetailString(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::String>()));
}

inline
MaybeLocal<v8::Uint32> ToArrayIndex(v8::Local<v8::Value> val) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(val->ToArrayIndex(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Uint32>()));
}

inline
Maybe<bool> Equals(v8::Local<v8::Value> a, v8::Local<v8::Value>(b)) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return a->Equals(isolate->GetCurrentContext(), b);
}

inline
MaybeLocal<v8::Object> NewInstance(v8::Local<v8::Function> h) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(h->NewInstance(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Object>()));
}

inline
MaybeLocal<v8::Object> NewInstance(
      v8::Local<v8::Function> h
    , int argc
    , v8::Local<v8::Value> argv[]) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(h->NewInstance(isolate->GetCurrentContext(), argc, argv)
                          .FromMaybe(v8::Local<v8::Object>()));
}

inline
MaybeLocal<v8::Object> NewInstance(v8::Local<v8::ObjectTemplate> h) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(h->NewInstance(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Object>()));
}


inline MaybeLocal<v8::Function> GetFunction(
    v8::Local<v8::FunctionTemplate> t) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(t->GetFunction(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Function>()));
}

inline Maybe<bool> Set(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> key
  , v8::Local<v8::Value> value) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Set(isolate->GetCurrentContext(), key, value);
}

inline Maybe<bool> Set(
    v8::Local<v8::Object> obj
  , uint32_t index
  , v8::Local<v8::Value> value) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Set(isolate->GetCurrentContext(), index, value);
}

#if NODE_MODULE_VERSION < NODE_4_0_MODULE_VERSION
#include "nan_define_own_property_helper.h"  // NOLINT(build/include)
#endif

inline Maybe<bool> DefineOwnProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key
  , v8::Local<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
#if NODE_MODULE_VERSION >= NODE_4_0_MODULE_VERSION
  return obj->DefineOwnProperty(isolate->GetCurrentContext(), key, value,
                                attribs);
#else
  Maybe<v8::PropertyAttribute> maybeCurrent =
      obj->GetPropertyAttributes(isolate->GetCurrentContext(), key);
  if (maybeCurrent.IsNothing()) {
    return Nothing<bool>();
  }
  v8::PropertyAttribute current = maybeCurrent.FromJust();
  return imp::DefineOwnPropertyHelper(current, obj, key, value, attribs);
#endif
}

NAN_DEPRECATED inline Maybe<bool> ForceSet(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> key
  , v8::Local<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
#if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
  return key->IsName()
             ? obj->DefineOwnProperty(isolate->GetCurrentContext(),
                                      key.As<v8::Name>(), value, attribs)
             : Nothing<bool>();
#else
  return obj->ForceSet(isolate->GetCurrentContext(), key, value, attribs);
#endif
}

inline MaybeLocal<v8::Value> Get(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->Get(isolate->GetCurrentContext(), key)
                          .FromMaybe(v8::Local<v8::Value>()));
}

inline
MaybeLocal<v8::Value> Get(v8::Local<v8::Object> obj, uint32_t index) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->Get(isolate->GetCurrentContext(), index)
                          .FromMaybe(v8::Local<v8::Value>()));
}

inline v8::PropertyAttribute GetPropertyAttributes(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->GetPropertyAttributes(isolate->GetCurrentContext(), key)
      .FromJust();
}

inline Maybe<bool> Has(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Has(isolate->GetCurrentContext(), key);
}

inline Maybe<bool> Has(v8::Local<v8::Object> obj, uint32_t index) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Has(isolate->GetCurrentContext(), index);
}

inline Maybe<bool> Delete(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Delete(isolate->GetCurrentContext(), key);
}

inline
Maybe<bool> Delete(v8::Local<v8::Object> obj, uint32_t index) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Delete(isolate->GetCurrentContext(), index);
}

inline
MaybeLocal<v8::Array> GetPropertyNames(v8::Local<v8::Object> obj) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->GetPropertyNames(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Array>()));
}

inline
MaybeLocal<v8::Array> GetOwnPropertyNames(v8::Local<v8::Object> obj) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->GetOwnPropertyNames(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Array>()));
}

inline Maybe<bool> SetPrototype(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> prototype) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->SetPrototype(isolate->GetCurrentContext(), prototype);
}

inline MaybeLocal<v8::String> ObjectProtoToString(
    v8::Local<v8::Object> obj) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->ObjectProtoToString(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::String>()));
}

inline Maybe<bool> HasOwnProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->HasOwnProperty(isolate->GetCurrentContext(), key);
}

inline Maybe<bool> HasRealNamedProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->HasRealNamedProperty(isolate->GetCurrentContext(), key);
}

inline Maybe<bool> HasRealIndexedProperty(
    v8::Local<v8::Object> obj
  , uint32_t index) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->HasRealIndexedProperty(isolate->GetCurrentContext(), index);
}

inline Maybe<bool> HasRealNamedCallbackProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->HasRealNamedCallbackProperty(isolate->GetCurrentContext(), key);
}

inline MaybeLocal<v8::Value> GetRealNamedPropertyInPrototypeChain(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->GetRealNamedPropertyInPrototypeChain(
                             isolate->GetCurrentContext(), key)
                          .FromMaybe(v8::Local<v8::Value>()));
}

inline MaybeLocal<v8::Value> GetRealNamedProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(
      obj->GetRealNamedProperty(isolate->GetCurrentContext(), key)
          .FromMaybe(v8::Local<v8::Value>()));
}

inline MaybeLocal<v8::Value> CallAsFunction(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Object> recv
  , int argc
  , v8::Local<v8::Value> argv[]) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(
      obj->CallAsFunction(isolate->GetCurrentContext(), recv, argc, argv)
          .FromMaybe(v8::Local<v8::Value>()));
}

inline MaybeLocal<v8::Value> CallAsConstructor(
    v8::Local<v8::Object> obj
  , int argc, v8::Local<v8::Value> argv[]) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(
      obj->CallAsConstructor(isolate->GetCurrentContext(), argc, argv)
          .FromMaybe(v8::Local<v8::Value>()));
}

inline
MaybeLocal<v8::String> GetSourceLine(v8::Local<v8::Message> msg) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(msg->GetSourceLine(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::String>()));
}

inline Maybe<int> GetLineNumber(v8::Local<v8::Message> msg) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return msg->GetLineNumber(isolate->GetCurrentContext());
}

inline Maybe<int> GetStartColumn(v8::Local<v8::Message> msg) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return msg->GetStartColumn(isolate->GetCurrentContext());
}

inline Maybe<int> GetEndColumn(v8::Local<v8::Message> msg) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return msg->GetEndColumn(isolate->GetCurrentContext());
}

inline MaybeLocal<v8::Object> CloneElementAt(
    v8::Local<v8::Array> array
  , uint32_t index) {
#if (NODE_MODULE_VERSION >= NODE_6_0_MODULE_VERSION)
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  v8::Local<v8::Context> context = isolate->GetCurrentContext();
  v8::Local<v8::Value> elem;
  v8::Local<v8::Object> obj;
  if (!array->Get(context, index).ToLocal(&elem)) {
    return scope.Escape(obj);
  }
  if (!elem->ToObject(context).ToLocal(&obj)) {
    return scope.Escape(v8::Local<v8::Object>());
  }
  return scope.Escape(obj->Clone());
#else
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(array->CloneElementAt(isolate->GetCurrentContext(), index)
                          .FromMaybe(v8::Local<v8::Object>()));
#endif
}

inline MaybeLocal<v8::Value> Call(
    v8::Local<v8::Function> fun
  , v8::Local<v8::Object> recv
  , int argc
  , v8::Local<v8::Value> argv[]) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(fun->Call(isolate->GetCurrentContext(), recv, argc, argv)
                          .FromMaybe(v8::Local<v8::Value>()));
}

#endif  // NAN_MAYBE_43_INL_H_
