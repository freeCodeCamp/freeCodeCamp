/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_IMPLEMENTATION_12_INL_H_
#define NAN_IMPLEMENTATION_12_INL_H_
//==============================================================================
// node v0.11 implementation
//==============================================================================

namespace imp {

//=== Array ====================================================================

Factory<v8::Array>::return_t
Factory<v8::Array>::New() {
  return v8::Array::New(v8::Isolate::GetCurrent());
}

Factory<v8::Array>::return_t
Factory<v8::Array>::New(int length) {
  return v8::Array::New(v8::Isolate::GetCurrent(), length);
}

//=== Boolean ==================================================================

Factory<v8::Boolean>::return_t
Factory<v8::Boolean>::New(bool value) {
  return v8::Boolean::New(v8::Isolate::GetCurrent(), value);
}

//=== Boolean Object ===========================================================

Factory<v8::BooleanObject>::return_t
Factory<v8::BooleanObject>::New(bool value) {
#if (NODE_MODULE_VERSION >= NODE_6_0_MODULE_VERSION)
  return v8::BooleanObject::New(
    v8::Isolate::GetCurrent(), value).As<v8::BooleanObject>();
#else
  return v8::BooleanObject::New(value).As<v8::BooleanObject>();
#endif
}

//=== Context ==================================================================

Factory<v8::Context>::return_t
Factory<v8::Context>::New( v8::ExtensionConfiguration* extensions
                         , v8::Local<v8::ObjectTemplate> tmpl
                         , v8::Local<v8::Value> obj) {
  return v8::Context::New(v8::Isolate::GetCurrent(), extensions, tmpl, obj);
}

//=== Date =====================================================================

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::Date>::return_t
Factory<v8::Date>::New(double value) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(v8::Date::New(isolate->GetCurrentContext(), value)
      .FromMaybe(v8::Local<v8::Value>()).As<v8::Date>());
}
#else
Factory<v8::Date>::return_t
Factory<v8::Date>::New(double value) {
  return v8::Date::New(v8::Isolate::GetCurrent(), value).As<v8::Date>();
}
#endif

//=== External =================================================================

Factory<v8::External>::return_t
Factory<v8::External>::New(void * value) {
  return v8::External::New(v8::Isolate::GetCurrent(), value);
}

//=== Function =================================================================

Factory<v8::Function>::return_t
Factory<v8::Function>::New( FunctionCallback callback
                          , v8::Local<v8::Value> data) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  v8::Local<v8::ObjectTemplate> tpl = v8::ObjectTemplate::New(isolate);
  tpl->SetInternalFieldCount(imp::kFunctionFieldCount);
  v8::Local<v8::Object> obj = NewInstance(tpl).ToLocalChecked();

  obj->SetInternalField(
      imp::kFunctionIndex
    , v8::External::New(isolate, reinterpret_cast<void *>(callback)));

  v8::Local<v8::Value> val = v8::Local<v8::Value>::New(isolate, data);

  if (!val.IsEmpty()) {
    obj->SetInternalField(imp::kDataIndex, val);
  }

  return scope.Escape(v8::Function::New( isolate
                          , imp::FunctionCallbackWrapper
                          , obj));
}

//=== Function Template ========================================================

Factory<v8::FunctionTemplate>::return_t
Factory<v8::FunctionTemplate>::New( FunctionCallback callback
                                  , v8::Local<v8::Value> data
                                  , v8::Local<v8::Signature> signature) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  if (callback) {
    v8::EscapableHandleScope scope(isolate);
    v8::Local<v8::ObjectTemplate> tpl = v8::ObjectTemplate::New(isolate);
    tpl->SetInternalFieldCount(imp::kFunctionFieldCount);
    v8::Local<v8::Object> obj = NewInstance(tpl).ToLocalChecked();

    obj->SetInternalField(
        imp::kFunctionIndex
      , v8::External::New(isolate, reinterpret_cast<void *>(callback)));
    v8::Local<v8::Value> val = v8::Local<v8::Value>::New(isolate, data);

    if (!val.IsEmpty()) {
      obj->SetInternalField(imp::kDataIndex, val);
    }

    return scope.Escape(v8::FunctionTemplate::New( isolate
                                    , imp::FunctionCallbackWrapper
                                    , obj
                                    , signature));
  } else {
    return v8::FunctionTemplate::New(isolate, 0, data, signature);
  }
}

//=== Number ===================================================================

Factory<v8::Number>::return_t
Factory<v8::Number>::New(double value) {
  return v8::Number::New(v8::Isolate::GetCurrent(), value);
}

//=== Number Object ============================================================

Factory<v8::NumberObject>::return_t
Factory<v8::NumberObject>::New(double value) {
  return v8::NumberObject::New( v8::Isolate::GetCurrent()
                              , value).As<v8::NumberObject>();
}

//=== Integer, Int32 and Uint32 ================================================

template <typename T>
typename IntegerFactory<T>::return_t
IntegerFactory<T>::New(int32_t value) {
  return To<T>(T::New(v8::Isolate::GetCurrent(), value));
}

template <typename T>
typename IntegerFactory<T>::return_t
IntegerFactory<T>::New(uint32_t value) {
  return To<T>(T::NewFromUnsigned(v8::Isolate::GetCurrent(), value));
}

Factory<v8::Uint32>::return_t
Factory<v8::Uint32>::New(int32_t value) {
  return To<v8::Uint32>(
      v8::Uint32::NewFromUnsigned(v8::Isolate::GetCurrent(), value));
}

Factory<v8::Uint32>::return_t
Factory<v8::Uint32>::New(uint32_t value) {
  return To<v8::Uint32>(
      v8::Uint32::NewFromUnsigned(v8::Isolate::GetCurrent(), value));
}

//=== Object ===================================================================

Factory<v8::Object>::return_t
Factory<v8::Object>::New() {
  return v8::Object::New(v8::Isolate::GetCurrent());
}

//=== Object Template ==========================================================

Factory<v8::ObjectTemplate>::return_t
Factory<v8::ObjectTemplate>::New() {
  return v8::ObjectTemplate::New(v8::Isolate::GetCurrent());
}

//=== RegExp ===================================================================

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::RegExp>::return_t
Factory<v8::RegExp>::New(
    v8::Local<v8::String> pattern
  , v8::RegExp::Flags flags) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(
      v8::RegExp::New(isolate->GetCurrentContext(), pattern, flags)
          .FromMaybe(v8::Local<v8::RegExp>()));
}
#else
Factory<v8::RegExp>::return_t
Factory<v8::RegExp>::New(
    v8::Local<v8::String> pattern
  , v8::RegExp::Flags flags) {
  return v8::RegExp::New(pattern, flags);
}
#endif

//=== Script ===================================================================

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  v8::ScriptCompiler::Source src(source);
  return scope.Escape(
      v8::ScriptCompiler::Compile(isolate->GetCurrentContext(), &src)
          .FromMaybe(v8::Local<v8::Script>()));
}

Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source
                        , v8::ScriptOrigin const& origin) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  v8::ScriptCompiler::Source src(source, origin);
  return scope.Escape(
      v8::ScriptCompiler::Compile(isolate->GetCurrentContext(), &src)
          .FromMaybe(v8::Local<v8::Script>()));
}
#else
Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source) {
  v8::ScriptCompiler::Source src(source);
  return v8::ScriptCompiler::Compile(v8::Isolate::GetCurrent(), &src);
}

Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source
                        , v8::ScriptOrigin const& origin) {
  v8::ScriptCompiler::Source src(source, origin);
  return v8::ScriptCompiler::Compile(v8::Isolate::GetCurrent(), &src);
}
#endif

//=== Signature ================================================================

Factory<v8::Signature>::return_t
Factory<v8::Signature>::New(Factory<v8::Signature>::FTH receiver) {
  return v8::Signature::New(v8::Isolate::GetCurrent(), receiver);
}

//=== String ===================================================================

Factory<v8::String>::return_t
Factory<v8::String>::New() {
  return v8::String::Empty(v8::Isolate::GetCurrent());
}

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::String>::return_t
Factory<v8::String>::New(const char * value, int length) {
  return v8::String::NewFromUtf8(
      v8::Isolate::GetCurrent(), value, v8::NewStringType::kNormal, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(std::string const& value) {
  assert(value.size() <= INT_MAX && "string too long");
  return v8::String::NewFromUtf8(v8::Isolate::GetCurrent(),
      value.data(), v8::NewStringType::kNormal, static_cast<int>(value.size()));
}

Factory<v8::String>::return_t
Factory<v8::String>::New(const uint16_t * value, int length) {
  return v8::String::NewFromTwoByte(v8::Isolate::GetCurrent(), value,
        v8::NewStringType::kNormal, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(v8::String::ExternalStringResource * value) {
  return v8::String::NewExternalTwoByte(v8::Isolate::GetCurrent(), value);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(ExternalOneByteStringResource * value) {
  return v8::String::NewExternalOneByte(v8::Isolate::GetCurrent(), value);
}
#else
Factory<v8::String>::return_t
Factory<v8::String>::New(const char * value, int length) {
  return v8::String::NewFromUtf8(v8::Isolate::GetCurrent(), value,
                                 v8::String::kNormalString, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(
    std::string const& value) /* NOLINT(build/include_what_you_use) */ {
  assert(value.size() <= INT_MAX && "string too long");
  return v8::String::NewFromUtf8(v8::Isolate::GetCurrent(), value.data(),
                                 v8::String::kNormalString,
                                 static_cast<int>(value.size()));
}

Factory<v8::String>::return_t
Factory<v8::String>::New(const uint16_t * value, int length) {
  return v8::String::NewFromTwoByte(v8::Isolate::GetCurrent(), value,
                                    v8::String::kNormalString, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(v8::String::ExternalStringResource * value) {
  return v8::String::NewExternal(v8::Isolate::GetCurrent(), value);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(ExternalOneByteStringResource * value) {
  return v8::String::NewExternal(v8::Isolate::GetCurrent(), value);
}
#endif

//=== String Object ============================================================

Factory<v8::StringObject>::return_t
Factory<v8::StringObject>::New(v8::Local<v8::String> value) {
#if V8_MAJOR_VERSION >= 7
  return v8::StringObject::New(v8::Isolate::GetCurrent(), value).As<v8::StringObject>();
#else
  return v8::StringObject::New(value).As<v8::StringObject>();
#endif
}

//=== Unbound Script ===========================================================

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::UnboundScript>::return_t
Factory<v8::UnboundScript>::New(v8::Local<v8::String> source) {
  v8::ScriptCompiler::Source src(source);
  return v8::ScriptCompiler::CompileUnboundScript(
      v8::Isolate::GetCurrent(), &src);
}

Factory<v8::UnboundScript>::return_t
Factory<v8::UnboundScript>::New( v8::Local<v8::String> source
                               , v8::ScriptOrigin const& origin) {
  v8::ScriptCompiler::Source src(source, origin);
  return v8::ScriptCompiler::CompileUnboundScript(
      v8::Isolate::GetCurrent(), &src);
}
#else
Factory<v8::UnboundScript>::return_t
Factory<v8::UnboundScript>::New(v8::Local<v8::String> source) {
  v8::ScriptCompiler::Source src(source);
  return v8::ScriptCompiler::CompileUnbound(v8::Isolate::GetCurrent(), &src);
}

Factory<v8::UnboundScript>::return_t
Factory<v8::UnboundScript>::New( v8::Local<v8::String> source
                               , v8::ScriptOrigin const& origin) {
  v8::ScriptCompiler::Source src(source, origin);
  return v8::ScriptCompiler::CompileUnbound(v8::Isolate::GetCurrent(), &src);
}
#endif

}  // end of namespace imp

//=== Presistents and Handles ==================================================

#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
template <typename T>
inline v8::Local<T> New(v8::Handle<T> h) {
  return v8::Local<T>::New(v8::Isolate::GetCurrent(), h);
}
#endif

template <typename T, typename M>
inline v8::Local<T> New(v8::Persistent<T, M> const& p) {
  return v8::Local<T>::New(v8::Isolate::GetCurrent(), p);
}

template <typename T, typename M>
inline v8::Local<T> New(Persistent<T, M> const& p) {
  return v8::Local<T>::New(v8::Isolate::GetCurrent(), p);
}

template <typename T>
inline v8::Local<T> New(Global<T> const& p) {
  return v8::Local<T>::New(v8::Isolate::GetCurrent(), p);
}

#endif  // NAN_IMPLEMENTATION_12_INL_H_
