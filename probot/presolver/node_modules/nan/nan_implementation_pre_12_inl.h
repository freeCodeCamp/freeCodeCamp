/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_IMPLEMENTATION_PRE_12_INL_H_
#define NAN_IMPLEMENTATION_PRE_12_INL_H_

//==============================================================================
// node v0.10 implementation
//==============================================================================

namespace imp {

//=== Array ====================================================================

Factory<v8::Array>::return_t
Factory<v8::Array>::New() {
  return v8::Array::New();
}

Factory<v8::Array>::return_t
Factory<v8::Array>::New(int length) {
  return v8::Array::New(length);
}

//=== Boolean ==================================================================

Factory<v8::Boolean>::return_t
Factory<v8::Boolean>::New(bool value) {
  return v8::Boolean::New(value)->ToBoolean();
}

//=== Boolean Object ===========================================================

Factory<v8::BooleanObject>::return_t
Factory<v8::BooleanObject>::New(bool value) {
  return v8::BooleanObject::New(value).As<v8::BooleanObject>();
}

//=== Context ==================================================================

Factory<v8::Context>::return_t
Factory<v8::Context>::New( v8::ExtensionConfiguration* extensions
                         , v8::Local<v8::ObjectTemplate> tmpl
                         , v8::Local<v8::Value> obj) {
  v8::Persistent<v8::Context> ctx = v8::Context::New(extensions, tmpl, obj);
  v8::Local<v8::Context> lctx = v8::Local<v8::Context>::New(ctx);
  ctx.Dispose();
  return lctx;
}

//=== Date =====================================================================

Factory<v8::Date>::return_t
Factory<v8::Date>::New(double value) {
  return v8::Date::New(value).As<v8::Date>();
}

//=== External =================================================================

Factory<v8::External>::return_t
Factory<v8::External>::New(void * value) {
  return v8::External::New(value);
}

//=== Function =================================================================

Factory<v8::Function>::return_t
Factory<v8::Function>::New( FunctionCallback callback
                          , v8::Local<v8::Value> data) {
  v8::HandleScope scope;

  return scope.Close(Factory<v8::FunctionTemplate>::New(
                         callback, data, v8::Local<v8::Signature>())
                         ->GetFunction());
}


//=== FunctionTemplate =========================================================

Factory<v8::FunctionTemplate>::return_t
Factory<v8::FunctionTemplate>::New( FunctionCallback callback
                                  , v8::Local<v8::Value> data
                                  , v8::Local<v8::Signature> signature) {
  if (callback) {
    v8::HandleScope scope;

    v8::Local<v8::ObjectTemplate> tpl = v8::ObjectTemplate::New();
    tpl->SetInternalFieldCount(imp::kFunctionFieldCount);
    v8::Local<v8::Object> obj = tpl->NewInstance();

    obj->SetInternalField(
        imp::kFunctionIndex
      , v8::External::New(reinterpret_cast<void *>(callback)));

    v8::Local<v8::Value> val = v8::Local<v8::Value>::New(data);

    if (!val.IsEmpty()) {
      obj->SetInternalField(imp::kDataIndex, val);
    }

    // Note(agnat): Emulate length argument here. Unfortunately, I couldn't find
    // a way. Have at it though...
    return scope.Close(
        v8::FunctionTemplate::New(imp::FunctionCallbackWrapper
                                 , obj
                                 , signature));
  } else {
    return v8::FunctionTemplate::New(0, data, signature);
  }
}

//=== Number ===================================================================

Factory<v8::Number>::return_t
Factory<v8::Number>::New(double value) {
  return v8::Number::New(value);
}

//=== Number Object ============================================================

Factory<v8::NumberObject>::return_t
Factory<v8::NumberObject>::New(double value) {
  return v8::NumberObject::New(value).As<v8::NumberObject>();
}

//=== Integer, Int32 and Uint32 ================================================

template <typename T>
typename IntegerFactory<T>::return_t
IntegerFactory<T>::New(int32_t value) {
  return To<T>(T::New(value));
}

template <typename T>
typename IntegerFactory<T>::return_t
IntegerFactory<T>::New(uint32_t value) {
  return To<T>(T::NewFromUnsigned(value));
}

Factory<v8::Uint32>::return_t
Factory<v8::Uint32>::New(int32_t value) {
  return To<v8::Uint32>(v8::Uint32::NewFromUnsigned(value));
}

Factory<v8::Uint32>::return_t
Factory<v8::Uint32>::New(uint32_t value) {
  return To<v8::Uint32>(v8::Uint32::NewFromUnsigned(value));
}


//=== Object ===================================================================

Factory<v8::Object>::return_t
Factory<v8::Object>::New() {
  return v8::Object::New();
}

//=== Object Template ==========================================================

Factory<v8::ObjectTemplate>::return_t
Factory<v8::ObjectTemplate>::New() {
  return v8::ObjectTemplate::New();
}

//=== RegExp ===================================================================

Factory<v8::RegExp>::return_t
Factory<v8::RegExp>::New(
    v8::Local<v8::String> pattern
  , v8::RegExp::Flags flags) {
  return v8::RegExp::New(pattern, flags);
}

//=== Script ===================================================================

Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source) {
  return v8::Script::New(source);
}
Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source
                        , v8::ScriptOrigin const& origin) {
  return v8::Script::New(source, const_cast<v8::ScriptOrigin*>(&origin));
}

//=== Signature ================================================================

Factory<v8::Signature>::return_t
Factory<v8::Signature>::New(Factory<v8::Signature>::FTH receiver) {
  return v8::Signature::New(receiver);
}

//=== String ===================================================================

Factory<v8::String>::return_t
Factory<v8::String>::New() {
  return v8::String::Empty();
}

Factory<v8::String>::return_t
Factory<v8::String>::New(const char * value, int length) {
  return v8::String::New(value, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(
    std::string const& value) /* NOLINT(build/include_what_you_use) */ {
  assert(value.size() <= INT_MAX && "string too long");
  return v8::String::New(value.data(), static_cast<int>(value.size()));
}

Factory<v8::String>::return_t
Factory<v8::String>::New(const uint16_t * value, int length) {
  return v8::String::New(value, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(v8::String::ExternalStringResource * value) {
  return v8::String::NewExternal(value);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(v8::String::ExternalAsciiStringResource * value) {
  return v8::String::NewExternal(value);
}

//=== String Object ============================================================

Factory<v8::StringObject>::return_t
Factory<v8::StringObject>::New(v8::Local<v8::String> value) {
  return v8::StringObject::New(value).As<v8::StringObject>();
}

}  // end of namespace imp

//=== Presistents and Handles ==================================================

template <typename T>
inline v8::Local<T> New(v8::Handle<T> h) {
  return v8::Local<T>::New(h);
}

template <typename T>
inline v8::Local<T> New(v8::Persistent<T> const& p) {
  return v8::Local<T>::New(p);
}

template <typename T, typename M>
inline v8::Local<T> New(Persistent<T, M> const& p) {
  return v8::Local<T>::New(p.persistent);
}

template <typename T>
inline v8::Local<T> New(Global<T> const& p) {
  return v8::Local<T>::New(p.persistent);
}

#endif  // NAN_IMPLEMENTATION_PRE_12_INL_H_
