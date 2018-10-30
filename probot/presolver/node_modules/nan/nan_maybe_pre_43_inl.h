/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_MAYBE_PRE_43_INL_H_
#define NAN_MAYBE_PRE_43_INL_H_

template<typename T>
class MaybeLocal {
 public:
  inline MaybeLocal() : val_(v8::Local<T>()) {}

  template<typename S>
# if NODE_MODULE_VERSION >= NODE_0_12_MODULE_VERSION
  inline
  MaybeLocal(v8::Local<S> that) : val_(that) {}  // NOLINT(runtime/explicit)
# else
  inline
  MaybeLocal(v8::Local<S> that) :  // NOLINT(runtime/explicit)
      val_(*reinterpret_cast<v8::Local<T>*>(&that)) {}
# endif

  inline bool IsEmpty() const { return val_.IsEmpty(); }

  template<typename S>
  inline bool ToLocal(v8::Local<S> *out) const {
    *out = val_;
    return !IsEmpty();
  }

  inline v8::Local<T> ToLocalChecked() const {
#if defined(V8_ENABLE_CHECKS)
    assert(!IsEmpty() && "ToLocalChecked is Empty");
#endif  // V8_ENABLE_CHECKS
    return val_;
  }

  template<typename S>
  inline v8::Local<S> FromMaybe(v8::Local<S> default_value) const {
    return IsEmpty() ? default_value : v8::Local<S>(val_);
  }

 private:
  v8::Local<T> val_;
};

template<typename T>
class Maybe {
 public:
  inline bool IsNothing() const { return !has_value_; }
  inline bool IsJust() const { return has_value_; }

  inline T FromJust() const {
#if defined(V8_ENABLE_CHECKS)
    assert(IsJust() && "FromJust is Nothing");
#endif  // V8_ENABLE_CHECKS
    return value_;
  }

  inline T FromMaybe(const T& default_value) const {
    return has_value_ ? value_ : default_value;
  }

  inline bool operator==(const Maybe &other) const {
    return (IsJust() == other.IsJust()) &&
        (!IsJust() || FromJust() == other.FromJust());
  }

  inline bool operator!=(const Maybe &other) const {
    return !operator==(other);
  }

 private:
  Maybe() : has_value_(false) {}
  explicit Maybe(const T& t) : has_value_(true), value_(t) {}
  bool has_value_;
  T value_;

  template<typename U>
  friend Maybe<U> Nothing();
  template<typename U>
  friend Maybe<U> Just(const U& u);
};

template<typename T>
inline Maybe<T> Nothing() {
  return Maybe<T>();
}

template<typename T>
inline Maybe<T> Just(const T& t) {
  return Maybe<T>(t);
}

inline
MaybeLocal<v8::String> ToDetailString(v8::Handle<v8::Value> val) {
  return MaybeLocal<v8::String>(val->ToDetailString());
}

inline
MaybeLocal<v8::Uint32> ToArrayIndex(v8::Handle<v8::Value> val) {
  return MaybeLocal<v8::Uint32>(val->ToArrayIndex());
}

inline
Maybe<bool> Equals(v8::Handle<v8::Value> a, v8::Handle<v8::Value>(b)) {
  return Just<bool>(a->Equals(b));
}

inline
MaybeLocal<v8::Object> NewInstance(v8::Handle<v8::Function> h) {
  return MaybeLocal<v8::Object>(h->NewInstance());
}

inline
MaybeLocal<v8::Object> NewInstance(
      v8::Local<v8::Function> h
    , int argc
    , v8::Local<v8::Value> argv[]) {
  return MaybeLocal<v8::Object>(h->NewInstance(argc, argv));
}

inline
MaybeLocal<v8::Object> NewInstance(v8::Handle<v8::ObjectTemplate> h) {
  return MaybeLocal<v8::Object>(h->NewInstance());
}

inline
MaybeLocal<v8::Function> GetFunction(v8::Handle<v8::FunctionTemplate> t) {
  return MaybeLocal<v8::Function>(t->GetFunction());
}

inline Maybe<bool> Set(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> key
  , v8::Handle<v8::Value> value) {
  return Just<bool>(obj->Set(key, value));
}

inline Maybe<bool> Set(
    v8::Handle<v8::Object> obj
  , uint32_t index
  , v8::Handle<v8::Value> value) {
  return Just<bool>(obj->Set(index, value));
}

#include "nan_define_own_property_helper.h"  // NOLINT(build/include)

inline Maybe<bool> DefineOwnProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key
  , v8::Handle<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  v8::PropertyAttribute current = obj->GetPropertyAttributes(key);
  return imp::DefineOwnPropertyHelper(current, obj, key, value, attribs);
}

NAN_DEPRECATED inline Maybe<bool> ForceSet(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> key
  , v8::Handle<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  return Just<bool>(obj->ForceSet(key, value, attribs));
}

inline MaybeLocal<v8::Value> Get(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> key) {
  return MaybeLocal<v8::Value>(obj->Get(key));
}

inline MaybeLocal<v8::Value> Get(
    v8::Handle<v8::Object> obj
  , uint32_t index) {
  return MaybeLocal<v8::Value>(obj->Get(index));
}

inline Maybe<v8::PropertyAttribute> GetPropertyAttributes(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> key) {
  return Just<v8::PropertyAttribute>(obj->GetPropertyAttributes(key));
}

inline Maybe<bool> Has(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->Has(key));
}

inline Maybe<bool> Has(
    v8::Handle<v8::Object> obj
  , uint32_t index) {
  return Just<bool>(obj->Has(index));
}

inline Maybe<bool> Delete(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->Delete(key));
}

inline Maybe<bool> Delete(
    v8::Handle<v8::Object> obj
  , uint32_t index) {
  return Just<bool>(obj->Delete(index));
}

inline
MaybeLocal<v8::Array> GetPropertyNames(v8::Handle<v8::Object> obj) {
  return MaybeLocal<v8::Array>(obj->GetPropertyNames());
}

inline
MaybeLocal<v8::Array> GetOwnPropertyNames(v8::Handle<v8::Object> obj) {
  return MaybeLocal<v8::Array>(obj->GetOwnPropertyNames());
}

inline Maybe<bool> SetPrototype(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> prototype) {
  return Just<bool>(obj->SetPrototype(prototype));
}

inline MaybeLocal<v8::String> ObjectProtoToString(
    v8::Handle<v8::Object> obj) {
  return MaybeLocal<v8::String>(obj->ObjectProtoToString());
}

inline Maybe<bool> HasOwnProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->HasOwnProperty(key));
}

inline Maybe<bool> HasRealNamedProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->HasRealNamedProperty(key));
}

inline Maybe<bool> HasRealIndexedProperty(
    v8::Handle<v8::Object> obj
  , uint32_t index) {
  return Just<bool>(obj->HasRealIndexedProperty(index));
}

inline Maybe<bool> HasRealNamedCallbackProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->HasRealNamedCallbackProperty(key));
}

inline MaybeLocal<v8::Value> GetRealNamedPropertyInPrototypeChain(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return MaybeLocal<v8::Value>(
      obj->GetRealNamedPropertyInPrototypeChain(key));
}

inline MaybeLocal<v8::Value> GetRealNamedProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return MaybeLocal<v8::Value>(obj->GetRealNamedProperty(key));
}

inline MaybeLocal<v8::Value> CallAsFunction(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Object> recv
  , int argc
  , v8::Handle<v8::Value> argv[]) {
  return MaybeLocal<v8::Value>(obj->CallAsFunction(recv, argc, argv));
}

inline MaybeLocal<v8::Value> CallAsConstructor(
    v8::Handle<v8::Object> obj
  , int argc
  , v8::Local<v8::Value> argv[]) {
  return MaybeLocal<v8::Value>(obj->CallAsConstructor(argc, argv));
}

inline
MaybeLocal<v8::String> GetSourceLine(v8::Handle<v8::Message> msg) {
  return MaybeLocal<v8::String>(msg->GetSourceLine());
}

inline Maybe<int> GetLineNumber(v8::Handle<v8::Message> msg) {
  return Just<int>(msg->GetLineNumber());
}

inline Maybe<int> GetStartColumn(v8::Handle<v8::Message> msg) {
  return Just<int>(msg->GetStartColumn());
}

inline Maybe<int> GetEndColumn(v8::Handle<v8::Message> msg) {
  return Just<int>(msg->GetEndColumn());
}

inline MaybeLocal<v8::Object> CloneElementAt(
    v8::Handle<v8::Array> array
  , uint32_t index) {
  return MaybeLocal<v8::Object>(array->CloneElementAt(index));
}

inline MaybeLocal<v8::Value> Call(
    v8::Local<v8::Function> fun
  , v8::Local<v8::Object> recv
  , int argc
  , v8::Local<v8::Value> argv[]) {
  return MaybeLocal<v8::Value>(fun->Call(recv, argc, argv));
}

#endif  // NAN_MAYBE_PRE_43_INL_H_
