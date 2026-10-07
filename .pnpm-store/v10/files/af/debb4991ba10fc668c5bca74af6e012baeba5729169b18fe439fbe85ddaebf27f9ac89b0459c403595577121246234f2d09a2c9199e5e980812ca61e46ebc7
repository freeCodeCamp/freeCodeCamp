#ifndef SRC_NAPI_INL_H_
#define SRC_NAPI_INL_H_

////////////////////////////////////////////////////////////////////////////////
// Node-API C++ Wrapper Classes
//
// Inline header-only implementations for "Node-API" ABI-stable C APIs for
// Node.js.
////////////////////////////////////////////////////////////////////////////////

// Note: Do not include this file directly! Include "napi.h" instead.

#include <algorithm>
#include <cstring>
#if NAPI_HAS_THREADS
#include <mutex>
#endif  // NAPI_HAS_THREADS
#include <type_traits>
#include <utility>

namespace Napi {

#ifdef NAPI_CPP_CUSTOM_NAMESPACE
namespace NAPI_CPP_CUSTOM_NAMESPACE {
#endif

// Helpers to handle functions exposed from C++ and internal constants.
namespace details {

// New napi_status constants not yet available in all supported versions of
// Node.js releases. Only necessary when they are used in napi.h and napi-inl.h.
constexpr int napi_no_external_buffers_allowed = 22;

template <typename FreeType>
inline void default_finalizer(napi_env /*env*/, void* data, void* /*hint*/) {
  delete static_cast<FreeType*>(data);
}

// Attach a data item to an object and delete it when the object gets
// garbage-collected.
// TODO: Replace this code with `napi_add_finalizer()` whenever it becomes
// available on all supported versions of Node.js.
template <typename FreeType,
          napi_finalize finalizer = default_finalizer<FreeType>>
inline napi_status AttachData(napi_env env,
                              napi_value obj,
                              FreeType* data,
                              void* hint = nullptr) {
  napi_status status;
#if (NAPI_VERSION < 5)
  napi_value symbol, external;
  status = napi_create_symbol(env, nullptr, &symbol);
  if (status == napi_ok) {
    status = napi_create_external(env, data, finalizer, hint, &external);
    if (status == napi_ok) {
      napi_property_descriptor desc = {nullptr,
                                       symbol,
                                       nullptr,
                                       nullptr,
                                       nullptr,
                                       external,
                                       napi_default,
                                       nullptr};
      status = napi_define_properties(env, obj, 1, &desc);
    }
  }
#else  // NAPI_VERSION >= 5
  status = napi_add_finalizer(env, obj, data, finalizer, hint, nullptr);
#endif
  return status;
}

// For use in JS to C++ callback wrappers to catch any Napi::Error exceptions
// and rethrow them as JavaScript exceptions before returning from the callback.
template <typename Callable>
inline napi_value WrapCallback(Callable callback) {
#ifdef NAPI_CPP_EXCEPTIONS
  try {
    return callback();
  } catch (const Error& e) {
    e.ThrowAsJavaScriptException();
    return nullptr;
  }
#else   // NAPI_CPP_EXCEPTIONS
  // When C++ exceptions are disabled, errors are immediately thrown as JS
  // exceptions, so there is no need to catch and rethrow them here.
  return callback();
#endif  // NAPI_CPP_EXCEPTIONS
}

// For use in JS to C++ void callback wrappers to catch any Napi::Error
// exceptions and rethrow them as JavaScript exceptions before returning from
// the callback.
template <typename Callable>
inline void WrapVoidCallback(Callable callback) {
#ifdef NAPI_CPP_EXCEPTIONS
  try {
    callback();
  } catch (const Error& e) {
    e.ThrowAsJavaScriptException();
  }
#else   // NAPI_CPP_EXCEPTIONS
  // When C++ exceptions are disabled, errors are immediately thrown as JS
  // exceptions, so there is no need to catch and rethrow them here.
  callback();
#endif  // NAPI_CPP_EXCEPTIONS
}

template <typename Callable, typename Return>
struct CallbackData {
  static inline napi_value Wrapper(napi_env env, napi_callback_info info) {
    return details::WrapCallback([&] {
      CallbackInfo callbackInfo(env, info);
      CallbackData* callbackData =
          static_cast<CallbackData*>(callbackInfo.Data());
      callbackInfo.SetData(callbackData->data);
      return callbackData->callback(callbackInfo);
    });
  }

  Callable callback;
  void* data;
};

template <typename Callable>
struct CallbackData<Callable, void> {
  static inline napi_value Wrapper(napi_env env, napi_callback_info info) {
    return details::WrapCallback([&] {
      CallbackInfo callbackInfo(env, info);
      CallbackData* callbackData =
          static_cast<CallbackData*>(callbackInfo.Data());
      callbackInfo.SetData(callbackData->data);
      callbackData->callback(callbackInfo);
      return nullptr;
    });
  }

  Callable callback;
  void* data;
};

template <void (*Callback)(const CallbackInfo& info)>
napi_value TemplatedVoidCallback(napi_env env,
                                 napi_callback_info info) NAPI_NOEXCEPT {
  return details::WrapCallback([&] {
    CallbackInfo cbInfo(env, info);
    Callback(cbInfo);
    return nullptr;
  });
}

template <Napi::Value (*Callback)(const CallbackInfo& info)>
napi_value TemplatedCallback(napi_env env,
                             napi_callback_info info) NAPI_NOEXCEPT {
  return details::WrapCallback([&] {
    CallbackInfo cbInfo(env, info);
    return Callback(cbInfo);
  });
}

template <typename T,
          Napi::Value (T::*UnwrapCallback)(const CallbackInfo& info)>
napi_value TemplatedInstanceCallback(napi_env env,
                                     napi_callback_info info) NAPI_NOEXCEPT {
  return details::WrapCallback([&] {
    CallbackInfo cbInfo(env, info);
    T* instance = T::Unwrap(cbInfo.This().As<Object>());
    return instance ? (instance->*UnwrapCallback)(cbInfo) : Napi::Value();
  });
}

template <typename T, void (T::*UnwrapCallback)(const CallbackInfo& info)>
napi_value TemplatedInstanceVoidCallback(napi_env env, napi_callback_info info)
    NAPI_NOEXCEPT {
  return details::WrapCallback([&] {
    CallbackInfo cbInfo(env, info);
    T* instance = T::Unwrap(cbInfo.This().As<Object>());
    if (instance) (instance->*UnwrapCallback)(cbInfo);
    return nullptr;
  });
}

template <typename T, typename Finalizer, typename Hint = void>
struct FinalizeData {
  static inline void Wrapper(napi_env env,
                             void* data,
                             void* finalizeHint) NAPI_NOEXCEPT {
    WrapVoidCallback([&] {
      FinalizeData* finalizeData = static_cast<FinalizeData*>(finalizeHint);
      finalizeData->callback(Env(env), static_cast<T*>(data));
      delete finalizeData;
    });
  }

  static inline void WrapperWithHint(napi_env env,
                                     void* data,
                                     void* finalizeHint) NAPI_NOEXCEPT {
    WrapVoidCallback([&] {
      FinalizeData* finalizeData = static_cast<FinalizeData*>(finalizeHint);
      finalizeData->callback(
          Env(env), static_cast<T*>(data), finalizeData->hint);
      delete finalizeData;
    });
  }

  Finalizer callback;
  Hint* hint;
};

#if (NAPI_VERSION > 3 && NAPI_HAS_THREADS)
template <typename ContextType = void,
          typename Finalizer = std::function<void(Env, void*, ContextType*)>,
          typename FinalizerDataType = void>
struct ThreadSafeFinalize {
  static inline void Wrapper(napi_env env,
                             void* rawFinalizeData,
                             void* /* rawContext */) {
    if (rawFinalizeData == nullptr) return;

    ThreadSafeFinalize* finalizeData =
        static_cast<ThreadSafeFinalize*>(rawFinalizeData);
    finalizeData->callback(Env(env));
    delete finalizeData;
  }

  static inline void FinalizeWrapperWithData(napi_env env,
                                             void* rawFinalizeData,
                                             void* /* rawContext */) {
    if (rawFinalizeData == nullptr) return;

    ThreadSafeFinalize* finalizeData =
        static_cast<ThreadSafeFinalize*>(rawFinalizeData);
    finalizeData->callback(Env(env), finalizeData->data);
    delete finalizeData;
  }

  static inline void FinalizeWrapperWithContext(napi_env env,
                                                void* rawFinalizeData,
                                                void* rawContext) {
    if (rawFinalizeData == nullptr) return;

    ThreadSafeFinalize* finalizeData =
        static_cast<ThreadSafeFinalize*>(rawFinalizeData);
    finalizeData->callback(Env(env), static_cast<ContextType*>(rawContext));
    delete finalizeData;
  }

  static inline void FinalizeFinalizeWrapperWithDataAndContext(
      napi_env env, void* rawFinalizeData, void* rawContext) {
    if (rawFinalizeData == nullptr) return;

    ThreadSafeFinalize* finalizeData =
        static_cast<ThreadSafeFinalize*>(rawFinalizeData);
    finalizeData->callback(
        Env(env), finalizeData->data, static_cast<ContextType*>(rawContext));
    delete finalizeData;
  }

  FinalizerDataType* data;
  Finalizer callback;
};

template <typename ContextType, typename DataType, typename CallJs, CallJs call>
inline typename std::enable_if<call != static_cast<CallJs>(nullptr)>::type
CallJsWrapper(napi_env env, napi_value jsCallback, void* context, void* data) {
  details::WrapVoidCallback([&]() {
    call(env,
         Function(env, jsCallback),
         static_cast<ContextType*>(context),
         static_cast<DataType*>(data));
  });
}

template <typename ContextType, typename DataType, typename CallJs, CallJs call>
inline typename std::enable_if<call == static_cast<CallJs>(nullptr)>::type
CallJsWrapper(napi_env env,
              napi_value jsCallback,
              void* /*context*/,
              void* /*data*/) {
  details::WrapVoidCallback([&]() {
    if (jsCallback != nullptr) {
      Function(env, jsCallback).Call(0, nullptr);
    }
  });
}

#if NAPI_VERSION > 4

template <typename CallbackType, typename TSFN>
napi_value DefaultCallbackWrapper(napi_env /*env*/, std::nullptr_t /*cb*/) {
  return nullptr;
}

template <typename CallbackType, typename TSFN>
napi_value DefaultCallbackWrapper(napi_env /*env*/, Napi::Function cb) {
  return cb;
}

#else
template <typename CallbackType, typename TSFN>
napi_value DefaultCallbackWrapper(napi_env env, Napi::Function cb) {
  if (cb.IsEmpty()) {
    return TSFN::EmptyFunctionFactory(env);
  }
  return cb;
}
#endif  // NAPI_VERSION > 4
#endif  // NAPI_VERSION > 3 && NAPI_HAS_THREADS

template <typename Getter, typename Setter>
struct AccessorCallbackData {
  static inline napi_value GetterWrapper(napi_env env,
                                         napi_callback_info info) {
    return details::WrapCallback([&] {
      CallbackInfo callbackInfo(env, info);
      AccessorCallbackData* callbackData =
          static_cast<AccessorCallbackData*>(callbackInfo.Data());
      callbackInfo.SetData(callbackData->data);
      return callbackData->getterCallback(callbackInfo);
    });
  }

  static inline napi_value SetterWrapper(napi_env env,
                                         napi_callback_info info) {
    return details::WrapCallback([&] {
      CallbackInfo callbackInfo(env, info);
      AccessorCallbackData* callbackData =
          static_cast<AccessorCallbackData*>(callbackInfo.Data());
      callbackInfo.SetData(callbackData->data);
      callbackData->setterCallback(callbackInfo);
      return nullptr;
    });
  }

  Getter getterCallback;
  Setter setterCallback;
  void* data;
};

}  // namespace details

#ifndef NODE_ADDON_API_DISABLE_DEPRECATED
#include "napi-inl.deprecated.h"
#endif  // !NODE_ADDON_API_DISABLE_DEPRECATED

////////////////////////////////////////////////////////////////////////////////
// Module registration
////////////////////////////////////////////////////////////////////////////////

// Register an add-on based on an initializer function.
#define NODE_API_MODULE(modname, regfunc)                                      \
  static napi_value __napi_##regfunc(napi_env env, napi_value exports) {       \
    return Napi::RegisterModule(env, exports, regfunc);                        \
  }                                                                            \
  NAPI_MODULE(modname, __napi_##regfunc)

// Register an add-on based on a subclass of `Addon<T>` with a custom Node.js
// module name.
#define NODE_API_NAMED_ADDON(modname, classname)                               \
  static napi_value __napi_##classname(napi_env env, napi_value exports) {     \
    return Napi::RegisterModule(env, exports, &classname::Init);               \
  }                                                                            \
  NAPI_MODULE(modname, __napi_##classname)

// Register an add-on based on a subclass of `Addon<T>` with the Node.js module
// name given by node-gyp from the `target_name` in binding.gyp.
#define NODE_API_ADDON(classname)                                              \
  NODE_API_NAMED_ADDON(NODE_GYP_MODULE_NAME, classname)

// Adapt the NAPI_MODULE registration function:
//  - Wrap the arguments in NAPI wrappers.
//  - Catch any NAPI errors and rethrow as JS exceptions.
inline napi_value RegisterModule(napi_env env,
                                 napi_value exports,
                                 ModuleRegisterCallback registerCallback) {
  return details::WrapCallback([&] {
    return napi_value(
        registerCallback(Napi::Env(env), Napi::Object(env, exports)));
  });
}

////////////////////////////////////////////////////////////////////////////////
// Maybe class
////////////////////////////////////////////////////////////////////////////////

template <class T>
bool Maybe<T>::IsNothing() const {
  return !_has_value;
}

template <class T>
bool Maybe<T>::IsJust() const {
  return _has_value;
}

template <class T>
void Maybe<T>::Check() const {
  NAPI_CHECK(IsJust(), "Napi::Maybe::Check", "Maybe value is Nothing.");
}

template <class T>
T Maybe<T>::Unwrap() const {
  NAPI_CHECK(IsJust(), "Napi::Maybe::Unwrap", "Maybe value is Nothing.");
  return _value;
}

template <class T>
T Maybe<T>::UnwrapOr(const T& default_value) const {
  return _has_value ? _value : default_value;
}

template <class T>
bool Maybe<T>::UnwrapTo(T* out) const {
  if (IsJust()) {
    *out = _value;
    return true;
  };
  return false;
}

template <class T>
bool Maybe<T>::operator==(const Maybe& other) const {
  return (IsJust() == other.IsJust()) &&
         (!IsJust() || Unwrap() == other.Unwrap());
}

template <class T>
bool Maybe<T>::operator!=(const Maybe& other) const {
  return !operator==(other);
}

template <class T>
Maybe<T>::Maybe() : _has_value(false) {}

template <class T>
Maybe<T>::Maybe(const T& t) : _has_value(true), _value(t) {}

template <class T>
inline Maybe<T> Nothing() {
  return Maybe<T>();
}

template <class T>
inline Maybe<T> Just(const T& t) {
  return Maybe<T>(t);
}

////////////////////////////////////////////////////////////////////////////////
// Env class
////////////////////////////////////////////////////////////////////////////////

inline Env::Env(napi_env env) : _env(env) {}

inline Env::operator napi_env() const {
  return _env;
}

inline Object Env::Global() const {
  napi_value value;
  napi_status status = napi_get_global(*this, &value);
  NAPI_THROW_IF_FAILED(*this, status, Object());
  return Object(*this, value);
}

inline Value Env::Undefined() const {
  napi_value value;
  napi_status status = napi_get_undefined(*this, &value);
  NAPI_THROW_IF_FAILED(*this, status, Value());
  return Value(*this, value);
}

inline Value Env::Null() const {
  napi_value value;
  napi_status status = napi_get_null(*this, &value);
  NAPI_THROW_IF_FAILED(*this, status, Value());
  return Value(*this, value);
}

inline bool Env::IsExceptionPending() const {
  bool result;
  napi_status status = napi_is_exception_pending(_env, &result);
  if (status != napi_ok)
    result = false;  // Checking for a pending exception shouldn't throw.
  return result;
}

inline Error Env::GetAndClearPendingException() const {
  napi_value value;
  napi_status status = napi_get_and_clear_last_exception(_env, &value);
  if (status != napi_ok) {
    // Don't throw another exception when failing to get the exception!
    return Error();
  }
  return Error(_env, value);
}

inline MaybeOrValue<Value> Env::RunScript(const char* utf8script) const {
  String script = String::New(_env, utf8script);
  return RunScript(script);
}

inline MaybeOrValue<Value> Env::RunScript(const std::string& utf8script) const {
  return RunScript(utf8script.c_str());
}

inline MaybeOrValue<Value> Env::RunScript(String script) const {
  napi_value result;
  napi_status status = napi_run_script(_env, script, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(
      _env, status, Napi::Value(_env, result), Napi::Value);
}

#if NAPI_VERSION > 2
template <typename Hook, typename Arg>
void Env::CleanupHook<Hook, Arg>::Wrapper(void* data) NAPI_NOEXCEPT {
  auto* cleanupData =
      static_cast<typename Napi::Env::CleanupHook<Hook, Arg>::CleanupData*>(
          data);
  cleanupData->hook();
  delete cleanupData;
}

template <typename Hook, typename Arg>
void Env::CleanupHook<Hook, Arg>::WrapperWithArg(void* data) NAPI_NOEXCEPT {
  auto* cleanupData =
      static_cast<typename Napi::Env::CleanupHook<Hook, Arg>::CleanupData*>(
          data);
  cleanupData->hook(static_cast<Arg*>(cleanupData->arg));
  delete cleanupData;
}
#endif  // NAPI_VERSION > 2

#if NAPI_VERSION > 5
template <typename T, Env::Finalizer<T> fini>
inline void Env::SetInstanceData(T* data) const {
  napi_status status = napi_set_instance_data(
      _env,
      data,
      [](napi_env env, void* data, void*) { fini(env, static_cast<T*>(data)); },
      nullptr);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

template <typename DataType,
          typename HintType,
          Napi::Env::FinalizerWithHint<DataType, HintType> fini>
inline void Env::SetInstanceData(DataType* data, HintType* hint) const {
  napi_status status = napi_set_instance_data(
      _env,
      data,
      [](napi_env env, void* data, void* hint) {
        fini(env, static_cast<DataType*>(data), static_cast<HintType*>(hint));
      },
      hint);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

template <typename T>
inline T* Env::GetInstanceData() const {
  void* data = nullptr;

  napi_status status = napi_get_instance_data(_env, &data);
  NAPI_THROW_IF_FAILED(_env, status, nullptr);

  return static_cast<T*>(data);
}

template <typename T>
void Env::DefaultFini(Env, T* data) {
  delete data;
}

template <typename DataType, typename HintType>
void Env::DefaultFiniWithHint(Env, DataType* data, HintType*) {
  delete data;
}
#endif  // NAPI_VERSION > 5

#if NAPI_VERSION > 8
inline const char* Env::GetModuleFileName() const {
  const char* result;
  napi_status status = node_api_get_module_file_name(_env, &result);
  NAPI_THROW_IF_FAILED(*this, status, nullptr);
  return result;
}
#endif  // NAPI_VERSION > 8
////////////////////////////////////////////////////////////////////////////////
// Value class
////////////////////////////////////////////////////////////////////////////////

inline Value::Value() : _env(nullptr), _value(nullptr) {}

inline Value::Value(napi_env env, napi_value value)
    : _env(env), _value(value) {}

inline Value::operator napi_value() const {
  return _value;
}

inline bool Value::operator==(const Value& other) const {
  return StrictEquals(other);
}

inline bool Value::operator!=(const Value& other) const {
  return !this->operator==(other);
}

inline bool Value::StrictEquals(const Value& other) const {
  bool result;
  napi_status status = napi_strict_equals(_env, *this, other, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}

inline Napi::Env Value::Env() const {
  return Napi::Env(_env);
}

inline bool Value::IsEmpty() const {
  return _value == nullptr;
}

inline napi_valuetype Value::Type() const {
  if (IsEmpty()) {
    return napi_undefined;
  }

  napi_valuetype type;
  napi_status status = napi_typeof(_env, _value, &type);
  NAPI_THROW_IF_FAILED(_env, status, napi_undefined);
  return type;
}

inline bool Value::IsUndefined() const {
  return Type() == napi_undefined;
}

inline bool Value::IsNull() const {
  return Type() == napi_null;
}

inline bool Value::IsBoolean() const {
  return Type() == napi_boolean;
}

inline bool Value::IsNumber() const {
  return Type() == napi_number;
}

#if NAPI_VERSION > 5
inline bool Value::IsBigInt() const {
  return Type() == napi_bigint;
}
#endif  // NAPI_VERSION > 5

#if (NAPI_VERSION > 4)
inline bool Value::IsDate() const {
  if (IsEmpty()) {
    return false;
  }

  bool result;
  napi_status status = napi_is_date(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}
#endif

inline bool Value::IsString() const {
  return Type() == napi_string;
}

inline bool Value::IsSymbol() const {
  return Type() == napi_symbol;
}

inline bool Value::IsArray() const {
  if (IsEmpty()) {
    return false;
  }

  bool result;
  napi_status status = napi_is_array(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}

inline bool Value::IsArrayBuffer() const {
  if (IsEmpty()) {
    return false;
  }

  bool result;
  napi_status status = napi_is_arraybuffer(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}

inline bool Value::IsTypedArray() const {
  if (IsEmpty()) {
    return false;
  }

  bool result;
  napi_status status = napi_is_typedarray(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}

inline bool Value::IsObject() const {
  return Type() == napi_object || IsFunction();
}

inline bool Value::IsFunction() const {
  return Type() == napi_function;
}

inline bool Value::IsPromise() const {
  if (IsEmpty()) {
    return false;
  }

  bool result;
  napi_status status = napi_is_promise(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}

inline bool Value::IsDataView() const {
  if (IsEmpty()) {
    return false;
  }

  bool result;
  napi_status status = napi_is_dataview(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}

inline bool Value::IsBuffer() const {
  if (IsEmpty()) {
    return false;
  }

  bool result;
  napi_status status = napi_is_buffer(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}

inline bool Value::IsExternal() const {
  return Type() == napi_external;
}

template <typename T>
inline T Value::As() const {
#ifdef NODE_ADDON_API_ENABLE_TYPE_CHECK_ON_AS
  T::CheckCast(_env, _value);
#endif
  return T(_env, _value);
}

inline MaybeOrValue<Boolean> Value::ToBoolean() const {
  napi_value result;
  napi_status status = napi_coerce_to_bool(_env, _value, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(
      _env, status, Napi::Boolean(_env, result), Napi::Boolean);
}

inline MaybeOrValue<Number> Value::ToNumber() const {
  napi_value result;
  napi_status status = napi_coerce_to_number(_env, _value, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(
      _env, status, Napi::Number(_env, result), Napi::Number);
}

inline MaybeOrValue<String> Value::ToString() const {
  napi_value result;
  napi_status status = napi_coerce_to_string(_env, _value, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(
      _env, status, Napi::String(_env, result), Napi::String);
}

inline MaybeOrValue<Object> Value::ToObject() const {
  napi_value result;
  napi_status status = napi_coerce_to_object(_env, _value, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(
      _env, status, Napi::Object(_env, result), Napi::Object);
}

////////////////////////////////////////////////////////////////////////////////
// Boolean class
////////////////////////////////////////////////////////////////////////////////

inline Boolean Boolean::New(napi_env env, bool val) {
  napi_value value;
  napi_status status = napi_get_boolean(env, val, &value);
  NAPI_THROW_IF_FAILED(env, status, Boolean());
  return Boolean(env, value);
}

inline void Boolean::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Boolean::CheckCast", "empty value");

  napi_valuetype type;
  napi_status status = napi_typeof(env, value, &type);
  NAPI_CHECK(status == napi_ok, "Boolean::CheckCast", "napi_typeof failed");
  NAPI_CHECK(
      type == napi_boolean, "Boolean::CheckCast", "value is not napi_boolean");
}

inline Boolean::Boolean() : Napi::Value() {}

inline Boolean::Boolean(napi_env env, napi_value value)
    : Napi::Value(env, value) {}

inline Boolean::operator bool() const {
  return Value();
}

inline bool Boolean::Value() const {
  bool result;
  napi_status status = napi_get_value_bool(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// Number class
////////////////////////////////////////////////////////////////////////////////

inline Number Number::New(napi_env env, double val) {
  napi_value value;
  napi_status status = napi_create_double(env, val, &value);
  NAPI_THROW_IF_FAILED(env, status, Number());
  return Number(env, value);
}

inline void Number::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Number::CheckCast", "empty value");

  napi_valuetype type;
  napi_status status = napi_typeof(env, value, &type);
  NAPI_CHECK(status == napi_ok, "Number::CheckCast", "napi_typeof failed");
  NAPI_CHECK(
      type == napi_number, "Number::CheckCast", "value is not napi_number");
}

inline Number::Number() : Value() {}

inline Number::Number(napi_env env, napi_value value) : Value(env, value) {}

inline Number::operator int32_t() const {
  return Int32Value();
}

inline Number::operator uint32_t() const {
  return Uint32Value();
}

inline Number::operator int64_t() const {
  return Int64Value();
}

inline Number::operator float() const {
  return FloatValue();
}

inline Number::operator double() const {
  return DoubleValue();
}

inline int32_t Number::Int32Value() const {
  int32_t result;
  napi_status status = napi_get_value_int32(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}

inline uint32_t Number::Uint32Value() const {
  uint32_t result;
  napi_status status = napi_get_value_uint32(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}

inline int64_t Number::Int64Value() const {
  int64_t result;
  napi_status status = napi_get_value_int64(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}

inline float Number::FloatValue() const {
  return static_cast<float>(DoubleValue());
}

inline double Number::DoubleValue() const {
  double result;
  napi_status status = napi_get_value_double(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}

#if NAPI_VERSION > 5
////////////////////////////////////////////////////////////////////////////////
// BigInt Class
////////////////////////////////////////////////////////////////////////////////

inline BigInt BigInt::New(napi_env env, int64_t val) {
  napi_value value;
  napi_status status = napi_create_bigint_int64(env, val, &value);
  NAPI_THROW_IF_FAILED(env, status, BigInt());
  return BigInt(env, value);
}

inline BigInt BigInt::New(napi_env env, uint64_t val) {
  napi_value value;
  napi_status status = napi_create_bigint_uint64(env, val, &value);
  NAPI_THROW_IF_FAILED(env, status, BigInt());
  return BigInt(env, value);
}

inline BigInt BigInt::New(napi_env env,
                          int sign_bit,
                          size_t word_count,
                          const uint64_t* words) {
  napi_value value;
  napi_status status =
      napi_create_bigint_words(env, sign_bit, word_count, words, &value);
  NAPI_THROW_IF_FAILED(env, status, BigInt());
  return BigInt(env, value);
}

inline void BigInt::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "BigInt::CheckCast", "empty value");

  napi_valuetype type;
  napi_status status = napi_typeof(env, value, &type);
  NAPI_CHECK(status == napi_ok, "BigInt::CheckCast", "napi_typeof failed");
  NAPI_CHECK(
      type == napi_bigint, "BigInt::CheckCast", "value is not napi_bigint");
}

inline BigInt::BigInt() : Value() {}

inline BigInt::BigInt(napi_env env, napi_value value) : Value(env, value) {}

inline int64_t BigInt::Int64Value(bool* lossless) const {
  int64_t result;
  napi_status status =
      napi_get_value_bigint_int64(_env, _value, &result, lossless);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}

inline uint64_t BigInt::Uint64Value(bool* lossless) const {
  uint64_t result;
  napi_status status =
      napi_get_value_bigint_uint64(_env, _value, &result, lossless);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}

inline size_t BigInt::WordCount() const {
  size_t word_count;
  napi_status status =
      napi_get_value_bigint_words(_env, _value, nullptr, &word_count, nullptr);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return word_count;
}

inline void BigInt::ToWords(int* sign_bit,
                            size_t* word_count,
                            uint64_t* words) {
  napi_status status =
      napi_get_value_bigint_words(_env, _value, sign_bit, word_count, words);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}
#endif  // NAPI_VERSION > 5

#if (NAPI_VERSION > 4)
////////////////////////////////////////////////////////////////////////////////
// Date Class
////////////////////////////////////////////////////////////////////////////////

inline Date Date::New(napi_env env, double val) {
  napi_value value;
  napi_status status = napi_create_date(env, val, &value);
  NAPI_THROW_IF_FAILED(env, status, Date());
  return Date(env, value);
}

inline void Date::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Date::CheckCast", "empty value");

  bool result;
  napi_status status = napi_is_date(env, value, &result);
  NAPI_CHECK(status == napi_ok, "Date::CheckCast", "napi_is_date failed");
  NAPI_CHECK(result, "Date::CheckCast", "value is not date");
}

inline Date::Date() : Value() {}

inline Date::Date(napi_env env, napi_value value) : Value(env, value) {}

inline Date::operator double() const {
  return ValueOf();
}

inline double Date::ValueOf() const {
  double result;
  napi_status status = napi_get_date_value(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}
#endif

////////////////////////////////////////////////////////////////////////////////
// Name class
////////////////////////////////////////////////////////////////////////////////
inline void Name::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Name::CheckCast", "empty value");

  napi_valuetype type;
  napi_status status = napi_typeof(env, value, &type);
  NAPI_CHECK(status == napi_ok, "Name::CheckCast", "napi_typeof failed");
  NAPI_CHECK(type == napi_string || type == napi_symbol,
             "Name::CheckCast",
             "value is not napi_string or napi_symbol");
}

inline Name::Name() : Value() {}

inline Name::Name(napi_env env, napi_value value) : Value(env, value) {}

////////////////////////////////////////////////////////////////////////////////
// String class
////////////////////////////////////////////////////////////////////////////////

inline String String::New(napi_env env, const std::string& val) {
  return String::New(env, val.c_str(), val.size());
}

inline String String::New(napi_env env, const std::u16string& val) {
  return String::New(env, val.c_str(), val.size());
}

inline String String::New(napi_env env, const char* val) {
  // TODO(@gabrielschulhof) Remove if-statement when core's error handling is
  // available in all supported versions.
  if (val == nullptr) {
    // Throw an error that looks like it came from core.
    NAPI_THROW_IF_FAILED(env, napi_invalid_arg, String());
  }
  napi_value value;
  napi_status status =
      napi_create_string_utf8(env, val, std::strlen(val), &value);
  NAPI_THROW_IF_FAILED(env, status, String());
  return String(env, value);
}

inline String String::New(napi_env env, const char16_t* val) {
  napi_value value;
  // TODO(@gabrielschulhof) Remove if-statement when core's error handling is
  // available in all supported versions.
  if (val == nullptr) {
    // Throw an error that looks like it came from core.
    NAPI_THROW_IF_FAILED(env, napi_invalid_arg, String());
  }
  napi_status status =
      napi_create_string_utf16(env, val, std::u16string(val).size(), &value);
  NAPI_THROW_IF_FAILED(env, status, String());
  return String(env, value);
}

inline String String::New(napi_env env, const char* val, size_t length) {
  napi_value value;
  napi_status status = napi_create_string_utf8(env, val, length, &value);
  NAPI_THROW_IF_FAILED(env, status, String());
  return String(env, value);
}

inline String String::New(napi_env env, const char16_t* val, size_t length) {
  napi_value value;
  napi_status status = napi_create_string_utf16(env, val, length, &value);
  NAPI_THROW_IF_FAILED(env, status, String());
  return String(env, value);
}

inline void String::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "String::CheckCast", "empty value");

  napi_valuetype type;
  napi_status status = napi_typeof(env, value, &type);
  NAPI_CHECK(status == napi_ok, "String::CheckCast", "napi_typeof failed");
  NAPI_CHECK(
      type == napi_string, "String::CheckCast", "value is not napi_string");
}

inline String::String() : Name() {}

inline String::String(napi_env env, napi_value value) : Name(env, value) {}

inline String::operator std::string() const {
  return Utf8Value();
}

inline String::operator std::u16string() const {
  return Utf16Value();
}

inline std::string String::Utf8Value() const {
  size_t length;
  napi_status status =
      napi_get_value_string_utf8(_env, _value, nullptr, 0, &length);
  NAPI_THROW_IF_FAILED(_env, status, "");

  std::string value;
  value.reserve(length + 1);
  value.resize(length);
  status = napi_get_value_string_utf8(
      _env, _value, &value[0], value.capacity(), nullptr);
  NAPI_THROW_IF_FAILED(_env, status, "");
  return value;
}

inline std::u16string String::Utf16Value() const {
  size_t length;
  napi_status status =
      napi_get_value_string_utf16(_env, _value, nullptr, 0, &length);
  NAPI_THROW_IF_FAILED(_env, status, NAPI_WIDE_TEXT(""));

  std::u16string value;
  value.reserve(length + 1);
  value.resize(length);
  status = napi_get_value_string_utf16(
      _env, _value, &value[0], value.capacity(), nullptr);
  NAPI_THROW_IF_FAILED(_env, status, NAPI_WIDE_TEXT(""));
  return value;
}

////////////////////////////////////////////////////////////////////////////////
// Symbol class
////////////////////////////////////////////////////////////////////////////////

inline Symbol Symbol::New(napi_env env, const char* description) {
  napi_value descriptionValue = description != nullptr
                                    ? String::New(env, description)
                                    : static_cast<napi_value>(nullptr);
  return Symbol::New(env, descriptionValue);
}

inline Symbol Symbol::New(napi_env env, const std::string& description) {
  napi_value descriptionValue = String::New(env, description);
  return Symbol::New(env, descriptionValue);
}

inline Symbol Symbol::New(napi_env env, String description) {
  napi_value descriptionValue = description;
  return Symbol::New(env, descriptionValue);
}

inline Symbol Symbol::New(napi_env env, napi_value description) {
  napi_value value;
  napi_status status = napi_create_symbol(env, description, &value);
  NAPI_THROW_IF_FAILED(env, status, Symbol());
  return Symbol(env, value);
}

inline MaybeOrValue<Symbol> Symbol::WellKnown(napi_env env,
                                              const std::string& name) {
#if defined(NODE_ADDON_API_ENABLE_MAYBE)
  Value symbol_obj;
  Value symbol_value;
  if (Napi::Env(env).Global().Get("Symbol").UnwrapTo(&symbol_obj) &&
      symbol_obj.As<Object>().Get(name).UnwrapTo(&symbol_value)) {
    return Just<Symbol>(symbol_value.As<Symbol>());
  }
  return Nothing<Symbol>();
#else
  return Napi::Env(env)
      .Global()
      .Get("Symbol")
      .As<Object>()
      .Get(name)
      .As<Symbol>();
#endif
}

inline MaybeOrValue<Symbol> Symbol::For(napi_env env,
                                        const std::string& description) {
  napi_value descriptionValue = String::New(env, description);
  return Symbol::For(env, descriptionValue);
}

inline MaybeOrValue<Symbol> Symbol::For(napi_env env, const char* description) {
  napi_value descriptionValue = String::New(env, description);
  return Symbol::For(env, descriptionValue);
}

inline MaybeOrValue<Symbol> Symbol::For(napi_env env, String description) {
  return Symbol::For(env, static_cast<napi_value>(description));
}

inline MaybeOrValue<Symbol> Symbol::For(napi_env env, napi_value description) {
#if defined(NODE_ADDON_API_ENABLE_MAYBE)
  Value symbol_obj;
  Value symbol_for_value;
  Value symbol_value;
  if (Napi::Env(env).Global().Get("Symbol").UnwrapTo(&symbol_obj) &&
      symbol_obj.As<Object>().Get("for").UnwrapTo(&symbol_for_value) &&
      symbol_for_value.As<Function>()
          .Call(symbol_obj, {description})
          .UnwrapTo(&symbol_value)) {
    return Just<Symbol>(symbol_value.As<Symbol>());
  }
  return Nothing<Symbol>();
#else
  Object symbol_obj = Napi::Env(env).Global().Get("Symbol").As<Object>();
  return symbol_obj.Get("for")
      .As<Function>()
      .Call(symbol_obj, {description})
      .As<Symbol>();
#endif
}

inline void Symbol::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Symbol::CheckCast", "empty value");

  napi_valuetype type;
  napi_status status = napi_typeof(env, value, &type);
  NAPI_CHECK(status == napi_ok, "Symbol::CheckCast", "napi_typeof failed");
  NAPI_CHECK(
      type == napi_symbol, "Symbol::CheckCast", "value is not napi_symbol");
}

inline Symbol::Symbol() : Name() {}

inline Symbol::Symbol(napi_env env, napi_value value) : Name(env, value) {}

////////////////////////////////////////////////////////////////////////////////
// Automagic value creation
////////////////////////////////////////////////////////////////////////////////

namespace details {
template <typename T>
struct vf_number {
  static Number From(napi_env env, T value) {
    return Number::New(env, static_cast<double>(value));
  }
};

template <>
struct vf_number<bool> {
  static Boolean From(napi_env env, bool value) {
    return Boolean::New(env, value);
  }
};

struct vf_utf8_charp {
  static String From(napi_env env, const char* value) {
    return String::New(env, value);
  }
};

struct vf_utf16_charp {
  static String From(napi_env env, const char16_t* value) {
    return String::New(env, value);
  }
};
struct vf_utf8_string {
  static String From(napi_env env, const std::string& value) {
    return String::New(env, value);
  }
};

struct vf_utf16_string {
  static String From(napi_env env, const std::u16string& value) {
    return String::New(env, value);
  }
};

template <typename T>
struct vf_fallback {
  static Value From(napi_env env, const T& value) { return Value(env, value); }
};

template <typename...>
struct disjunction : std::false_type {};
template <typename B>
struct disjunction<B> : B {};
template <typename B, typename... Bs>
struct disjunction<B, Bs...>
    : std::conditional<bool(B::value), B, disjunction<Bs...>>::type {};

template <typename T>
struct can_make_string
    : disjunction<typename std::is_convertible<T, const char*>::type,
                  typename std::is_convertible<T, const char16_t*>::type,
                  typename std::is_convertible<T, std::string>::type,
                  typename std::is_convertible<T, std::u16string>::type> {};
}  // namespace details

template <typename T>
Value Value::From(napi_env env, const T& value) {
  using Helper = typename std::conditional<
      std::is_integral<T>::value || std::is_floating_point<T>::value,
      details::vf_number<T>,
      typename std::conditional<details::can_make_string<T>::value,
                                String,
                                details::vf_fallback<T>>::type>::type;
  return Helper::From(env, value);
}

template <typename T>
String String::From(napi_env env, const T& value) {
  struct Dummy {};
  using Helper = typename std::conditional<
      std::is_convertible<T, const char*>::value,
      details::vf_utf8_charp,
      typename std::conditional<
          std::is_convertible<T, const char16_t*>::value,
          details::vf_utf16_charp,
          typename std::conditional<
              std::is_convertible<T, std::string>::value,
              details::vf_utf8_string,
              typename std::conditional<
                  std::is_convertible<T, std::u16string>::value,
                  details::vf_utf16_string,
                  Dummy>::type>::type>::type>::type;
  return Helper::From(env, value);
}

////////////////////////////////////////////////////////////////////////////////
// TypeTaggable class
////////////////////////////////////////////////////////////////////////////////

inline TypeTaggable::TypeTaggable() : Value() {}

inline TypeTaggable::TypeTaggable(napi_env _env, napi_value _value)
    : Value(_env, _value) {}

#if NAPI_VERSION >= 8

inline void TypeTaggable::TypeTag(const napi_type_tag* type_tag) const {
  napi_status status = napi_type_tag_object(_env, _value, type_tag);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline bool TypeTaggable::CheckTypeTag(const napi_type_tag* type_tag) const {
  bool result;
  napi_status status =
      napi_check_object_type_tag(_env, _value, type_tag, &result);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return result;
}

#endif  // NAPI_VERSION >= 8

////////////////////////////////////////////////////////////////////////////////
// Object class
////////////////////////////////////////////////////////////////////////////////

template <typename Key>
inline Object::PropertyLValue<Key>::operator Value() const {
  MaybeOrValue<Value> val = Object(_env, _object).Get(_key);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  return val.Unwrap();
#else
  return val;
#endif
}

template <typename Key>
template <typename ValueType>
inline Object::PropertyLValue<Key>& Object::PropertyLValue<Key>::operator=(
    ValueType value) {
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  MaybeOrValue<bool> result =
#endif
      Object(_env, _object).Set(_key, value);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  result.Unwrap();
#endif
  return *this;
}

template <typename Key>
inline Object::PropertyLValue<Key>::PropertyLValue(Object object, Key key)
    : _env(object.Env()), _object(object), _key(key) {}

inline Object Object::New(napi_env env) {
  napi_value value;
  napi_status status = napi_create_object(env, &value);
  NAPI_THROW_IF_FAILED(env, status, Object());
  return Object(env, value);
}

inline void Object::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Object::CheckCast", "empty value");

  napi_valuetype type;
  napi_status status = napi_typeof(env, value, &type);
  NAPI_CHECK(status == napi_ok, "Object::CheckCast", "napi_typeof failed");
  NAPI_CHECK(
      type == napi_object, "Object::CheckCast", "value is not napi_object");
}

inline Object::Object() : TypeTaggable() {}

inline Object::Object(napi_env env, napi_value value)
    : TypeTaggable(env, value) {}

inline Object::PropertyLValue<std::string> Object::operator[](
    const char* utf8name) {
  return PropertyLValue<std::string>(*this, utf8name);
}

inline Object::PropertyLValue<std::string> Object::operator[](
    const std::string& utf8name) {
  return PropertyLValue<std::string>(*this, utf8name);
}

inline Object::PropertyLValue<uint32_t> Object::operator[](uint32_t index) {
  return PropertyLValue<uint32_t>(*this, index);
}

inline Object::PropertyLValue<Value> Object::operator[](Value index) const {
  return PropertyLValue<Value>(*this, index);
}

inline MaybeOrValue<Value> Object::operator[](const char* utf8name) const {
  return Get(utf8name);
}

inline MaybeOrValue<Value> Object::operator[](
    const std::string& utf8name) const {
  return Get(utf8name);
}

inline MaybeOrValue<Value> Object::operator[](uint32_t index) const {
  return Get(index);
}

inline MaybeOrValue<bool> Object::Has(napi_value key) const {
  bool result;
  napi_status status = napi_has_property(_env, _value, key, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

inline MaybeOrValue<bool> Object::Has(Value key) const {
  bool result;
  napi_status status = napi_has_property(_env, _value, key, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

inline MaybeOrValue<bool> Object::Has(const char* utf8name) const {
  bool result;
  napi_status status = napi_has_named_property(_env, _value, utf8name, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

inline MaybeOrValue<bool> Object::Has(const std::string& utf8name) const {
  return Has(utf8name.c_str());
}

inline MaybeOrValue<bool> Object::HasOwnProperty(napi_value key) const {
  bool result;
  napi_status status = napi_has_own_property(_env, _value, key, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

inline MaybeOrValue<bool> Object::HasOwnProperty(Value key) const {
  bool result;
  napi_status status = napi_has_own_property(_env, _value, key, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

inline MaybeOrValue<bool> Object::HasOwnProperty(const char* utf8name) const {
  napi_value key;
  napi_status status =
      napi_create_string_utf8(_env, utf8name, std::strlen(utf8name), &key);
  NAPI_MAYBE_THROW_IF_FAILED(_env, status, bool);
  return HasOwnProperty(key);
}

inline MaybeOrValue<bool> Object::HasOwnProperty(
    const std::string& utf8name) const {
  return HasOwnProperty(utf8name.c_str());
}

inline MaybeOrValue<Value> Object::Get(napi_value key) const {
  napi_value result;
  napi_status status = napi_get_property(_env, _value, key, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, Value(_env, result), Value);
}

inline MaybeOrValue<Value> Object::Get(Value key) const {
  napi_value result;
  napi_status status = napi_get_property(_env, _value, key, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, Value(_env, result), Value);
}

inline MaybeOrValue<Value> Object::Get(const char* utf8name) const {
  napi_value result;
  napi_status status = napi_get_named_property(_env, _value, utf8name, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, Value(_env, result), Value);
}

inline MaybeOrValue<Value> Object::Get(const std::string& utf8name) const {
  return Get(utf8name.c_str());
}

template <typename ValueType>
inline MaybeOrValue<bool> Object::Set(napi_value key,
                                      const ValueType& value) const {
  napi_status status =
      napi_set_property(_env, _value, key, Value::From(_env, value));
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, status == napi_ok, bool);
}

template <typename ValueType>
inline MaybeOrValue<bool> Object::Set(Value key, const ValueType& value) const {
  napi_status status =
      napi_set_property(_env, _value, key, Value::From(_env, value));
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, status == napi_ok, bool);
}

template <typename ValueType>
inline MaybeOrValue<bool> Object::Set(const char* utf8name,
                                      const ValueType& value) const {
  napi_status status =
      napi_set_named_property(_env, _value, utf8name, Value::From(_env, value));
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, status == napi_ok, bool);
}

template <typename ValueType>
inline MaybeOrValue<bool> Object::Set(const std::string& utf8name,
                                      const ValueType& value) const {
  return Set(utf8name.c_str(), value);
}

inline MaybeOrValue<bool> Object::Delete(napi_value key) const {
  bool result;
  napi_status status = napi_delete_property(_env, _value, key, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

inline MaybeOrValue<bool> Object::Delete(Value key) const {
  bool result;
  napi_status status = napi_delete_property(_env, _value, key, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

inline MaybeOrValue<bool> Object::Delete(const char* utf8name) const {
  return Delete(String::New(_env, utf8name));
}

inline MaybeOrValue<bool> Object::Delete(const std::string& utf8name) const {
  return Delete(String::New(_env, utf8name));
}

inline MaybeOrValue<bool> Object::Has(uint32_t index) const {
  bool result;
  napi_status status = napi_has_element(_env, _value, index, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

inline MaybeOrValue<Value> Object::Get(uint32_t index) const {
  napi_value value;
  napi_status status = napi_get_element(_env, _value, index, &value);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, Value(_env, value), Value);
}

template <typename ValueType>
inline MaybeOrValue<bool> Object::Set(uint32_t index,
                                      const ValueType& value) const {
  napi_status status =
      napi_set_element(_env, _value, index, Value::From(_env, value));
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, status == napi_ok, bool);
}

inline MaybeOrValue<bool> Object::Delete(uint32_t index) const {
  bool result;
  napi_status status = napi_delete_element(_env, _value, index, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

inline MaybeOrValue<Array> Object::GetPropertyNames() const {
  napi_value result;
  napi_status status = napi_get_property_names(_env, _value, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, Array(_env, result), Array);
}

inline MaybeOrValue<bool> Object::DefineProperty(
    const PropertyDescriptor& property) const {
  napi_status status = napi_define_properties(
      _env,
      _value,
      1,
      reinterpret_cast<const napi_property_descriptor*>(&property));
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, status == napi_ok, bool);
}

inline MaybeOrValue<bool> Object::DefineProperties(
    const std::initializer_list<PropertyDescriptor>& properties) const {
  napi_status status = napi_define_properties(
      _env,
      _value,
      properties.size(),
      reinterpret_cast<const napi_property_descriptor*>(properties.begin()));
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, status == napi_ok, bool);
}

inline MaybeOrValue<bool> Object::DefineProperties(
    const std::vector<PropertyDescriptor>& properties) const {
  napi_status status = napi_define_properties(
      _env,
      _value,
      properties.size(),
      reinterpret_cast<const napi_property_descriptor*>(properties.data()));
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, status == napi_ok, bool);
}

inline MaybeOrValue<bool> Object::InstanceOf(
    const Function& constructor) const {
  bool result;
  napi_status status = napi_instanceof(_env, _value, constructor, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, result, bool);
}

template <typename Finalizer, typename T>
inline void Object::AddFinalizer(Finalizer finalizeCallback, T* data) const {
  details::FinalizeData<T, Finalizer>* finalizeData =
      new details::FinalizeData<T, Finalizer>(
          {std::move(finalizeCallback), nullptr});
  napi_status status =
      details::AttachData<T, details::FinalizeData<T, Finalizer>::Wrapper>(
          _env, *this, data, finalizeData);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED_VOID(_env, status);
  }
}

template <typename Finalizer, typename T, typename Hint>
inline void Object::AddFinalizer(Finalizer finalizeCallback,
                                 T* data,
                                 Hint* finalizeHint) const {
  details::FinalizeData<T, Finalizer, Hint>* finalizeData =
      new details::FinalizeData<T, Finalizer, Hint>(
          {std::move(finalizeCallback), finalizeHint});
  napi_status status = details::
      AttachData<T, details::FinalizeData<T, Finalizer, Hint>::WrapperWithHint>(
          _env, *this, data, finalizeData);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED_VOID(_env, status);
  }
}

#ifdef NAPI_CPP_EXCEPTIONS
inline Object::const_iterator::const_iterator(const Object* object,
                                              const Type type) {
  _object = object;
  _keys = object->GetPropertyNames();
  _index = type == Type::BEGIN ? 0 : _keys.Length();
}

inline Object::const_iterator Napi::Object::begin() const {
  const_iterator it(this, Object::const_iterator::Type::BEGIN);
  return it;
}

inline Object::const_iterator Napi::Object::end() const {
  const_iterator it(this, Object::const_iterator::Type::END);
  return it;
}

inline Object::const_iterator& Object::const_iterator::operator++() {
  ++_index;
  return *this;
}

inline bool Object::const_iterator::operator==(
    const const_iterator& other) const {
  return _index == other._index;
}

inline bool Object::const_iterator::operator!=(
    const const_iterator& other) const {
  return _index != other._index;
}

inline const std::pair<Value, Object::PropertyLValue<Value>>
Object::const_iterator::operator*() const {
  const Value key = _keys[_index];
  const PropertyLValue<Value> value = (*_object)[key];
  return {key, value};
}

inline Object::iterator::iterator(Object* object, const Type type) {
  _object = object;
  _keys = object->GetPropertyNames();
  _index = type == Type::BEGIN ? 0 : _keys.Length();
}

inline Object::iterator Napi::Object::begin() {
  iterator it(this, Object::iterator::Type::BEGIN);
  return it;
}

inline Object::iterator Napi::Object::end() {
  iterator it(this, Object::iterator::Type::END);
  return it;
}

inline Object::iterator& Object::iterator::operator++() {
  ++_index;
  return *this;
}

inline bool Object::iterator::operator==(const iterator& other) const {
  return _index == other._index;
}

inline bool Object::iterator::operator!=(const iterator& other) const {
  return _index != other._index;
}

inline std::pair<Value, Object::PropertyLValue<Value>>
Object::iterator::operator*() {
  Value key = _keys[_index];
  PropertyLValue<Value> value = (*_object)[key];
  return {key, value};
}
#endif  // NAPI_CPP_EXCEPTIONS

#if NAPI_VERSION >= 8
inline MaybeOrValue<bool> Object::Freeze() const {
  napi_status status = napi_object_freeze(_env, _value);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, status == napi_ok, bool);
}

inline MaybeOrValue<bool> Object::Seal() const {
  napi_status status = napi_object_seal(_env, _value);
  NAPI_RETURN_OR_THROW_IF_FAILED(_env, status, status == napi_ok, bool);
}
#endif  // NAPI_VERSION >= 8

////////////////////////////////////////////////////////////////////////////////
// External class
////////////////////////////////////////////////////////////////////////////////

template <typename T>
inline External<T> External<T>::New(napi_env env, T* data) {
  napi_value value;
  napi_status status =
      napi_create_external(env, data, nullptr, nullptr, &value);
  NAPI_THROW_IF_FAILED(env, status, External());
  return External(env, value);
}

template <typename T>
template <typename Finalizer>
inline External<T> External<T>::New(napi_env env,
                                    T* data,
                                    Finalizer finalizeCallback) {
  napi_value value;
  details::FinalizeData<T, Finalizer>* finalizeData =
      new details::FinalizeData<T, Finalizer>(
          {std::move(finalizeCallback), nullptr});
  napi_status status =
      napi_create_external(env,
                           data,
                           details::FinalizeData<T, Finalizer>::Wrapper,
                           finalizeData,
                           &value);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(env, status, External());
  }
  return External(env, value);
}

template <typename T>
template <typename Finalizer, typename Hint>
inline External<T> External<T>::New(napi_env env,
                                    T* data,
                                    Finalizer finalizeCallback,
                                    Hint* finalizeHint) {
  napi_value value;
  details::FinalizeData<T, Finalizer, Hint>* finalizeData =
      new details::FinalizeData<T, Finalizer, Hint>(
          {std::move(finalizeCallback), finalizeHint});
  napi_status status = napi_create_external(
      env,
      data,
      details::FinalizeData<T, Finalizer, Hint>::WrapperWithHint,
      finalizeData,
      &value);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(env, status, External());
  }
  return External(env, value);
}

template <typename T>
inline void External<T>::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "External::CheckCast", "empty value");

  napi_valuetype type;
  napi_status status = napi_typeof(env, value, &type);
  NAPI_CHECK(status == napi_ok, "External::CheckCast", "napi_typeof failed");
  NAPI_CHECK(type == napi_external,
             "External::CheckCast",
             "value is not napi_external");
}

template <typename T>
inline External<T>::External() : TypeTaggable() {}

template <typename T>
inline External<T>::External(napi_env env, napi_value value)
    : TypeTaggable(env, value) {}

template <typename T>
inline T* External<T>::Data() const {
  void* data;
  napi_status status = napi_get_value_external(_env, _value, &data);
  NAPI_THROW_IF_FAILED(_env, status, nullptr);
  return reinterpret_cast<T*>(data);
}

////////////////////////////////////////////////////////////////////////////////
// Array class
////////////////////////////////////////////////////////////////////////////////

inline Array Array::New(napi_env env) {
  napi_value value;
  napi_status status = napi_create_array(env, &value);
  NAPI_THROW_IF_FAILED(env, status, Array());
  return Array(env, value);
}

inline Array Array::New(napi_env env, size_t length) {
  napi_value value;
  napi_status status = napi_create_array_with_length(env, length, &value);
  NAPI_THROW_IF_FAILED(env, status, Array());
  return Array(env, value);
}

inline void Array::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Array::CheckCast", "empty value");

  bool result;
  napi_status status = napi_is_array(env, value, &result);
  NAPI_CHECK(status == napi_ok, "Array::CheckCast", "napi_is_array failed");
  NAPI_CHECK(result, "Array::CheckCast", "value is not array");
}

inline Array::Array() : Object() {}

inline Array::Array(napi_env env, napi_value value) : Object(env, value) {}

inline uint32_t Array::Length() const {
  uint32_t result;
  napi_status status = napi_get_array_length(_env, _value, &result);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// ArrayBuffer class
////////////////////////////////////////////////////////////////////////////////

inline ArrayBuffer ArrayBuffer::New(napi_env env, size_t byteLength) {
  napi_value value;
  void* data;
  napi_status status = napi_create_arraybuffer(env, byteLength, &data, &value);
  NAPI_THROW_IF_FAILED(env, status, ArrayBuffer());

  return ArrayBuffer(env, value);
}

#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
inline ArrayBuffer ArrayBuffer::New(napi_env env,
                                    void* externalData,
                                    size_t byteLength) {
  napi_value value;
  napi_status status = napi_create_external_arraybuffer(
      env, externalData, byteLength, nullptr, nullptr, &value);
  NAPI_THROW_IF_FAILED(env, status, ArrayBuffer());

  return ArrayBuffer(env, value);
}

template <typename Finalizer>
inline ArrayBuffer ArrayBuffer::New(napi_env env,
                                    void* externalData,
                                    size_t byteLength,
                                    Finalizer finalizeCallback) {
  napi_value value;
  details::FinalizeData<void, Finalizer>* finalizeData =
      new details::FinalizeData<void, Finalizer>(
          {std::move(finalizeCallback), nullptr});
  napi_status status = napi_create_external_arraybuffer(
      env,
      externalData,
      byteLength,
      details::FinalizeData<void, Finalizer>::Wrapper,
      finalizeData,
      &value);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(env, status, ArrayBuffer());
  }

  return ArrayBuffer(env, value);
}

template <typename Finalizer, typename Hint>
inline ArrayBuffer ArrayBuffer::New(napi_env env,
                                    void* externalData,
                                    size_t byteLength,
                                    Finalizer finalizeCallback,
                                    Hint* finalizeHint) {
  napi_value value;
  details::FinalizeData<void, Finalizer, Hint>* finalizeData =
      new details::FinalizeData<void, Finalizer, Hint>(
          {std::move(finalizeCallback), finalizeHint});
  napi_status status = napi_create_external_arraybuffer(
      env,
      externalData,
      byteLength,
      details::FinalizeData<void, Finalizer, Hint>::WrapperWithHint,
      finalizeData,
      &value);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(env, status, ArrayBuffer());
  }

  return ArrayBuffer(env, value);
}
#endif  // NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED

inline void ArrayBuffer::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "ArrayBuffer::CheckCast", "empty value");

  bool result;
  napi_status status = napi_is_arraybuffer(env, value, &result);
  NAPI_CHECK(status == napi_ok,
             "ArrayBuffer::CheckCast",
             "napi_is_arraybuffer failed");
  NAPI_CHECK(result, "ArrayBuffer::CheckCast", "value is not arraybuffer");
}

inline ArrayBuffer::ArrayBuffer() : Object() {}

inline ArrayBuffer::ArrayBuffer(napi_env env, napi_value value)
    : Object(env, value) {}

inline void* ArrayBuffer::Data() {
  void* data;
  napi_status status = napi_get_arraybuffer_info(_env, _value, &data, nullptr);
  NAPI_THROW_IF_FAILED(_env, status, nullptr);
  return data;
}

inline size_t ArrayBuffer::ByteLength() {
  size_t length;
  napi_status status =
      napi_get_arraybuffer_info(_env, _value, nullptr, &length);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return length;
}

#if NAPI_VERSION >= 7
inline bool ArrayBuffer::IsDetached() const {
  bool detached;
  napi_status status = napi_is_detached_arraybuffer(_env, _value, &detached);
  NAPI_THROW_IF_FAILED(_env, status, false);
  return detached;
}

inline void ArrayBuffer::Detach() {
  napi_status status = napi_detach_arraybuffer(_env, _value);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}
#endif  // NAPI_VERSION >= 7

////////////////////////////////////////////////////////////////////////////////
// DataView class
////////////////////////////////////////////////////////////////////////////////
inline DataView DataView::New(napi_env env, Napi::ArrayBuffer arrayBuffer) {
  return New(env, arrayBuffer, 0, arrayBuffer.ByteLength());
}

inline DataView DataView::New(napi_env env,
                              Napi::ArrayBuffer arrayBuffer,
                              size_t byteOffset) {
  if (byteOffset > arrayBuffer.ByteLength()) {
    NAPI_THROW(RangeError::New(
                   env, "Start offset is outside the bounds of the buffer"),
               DataView());
  }
  return New(
      env, arrayBuffer, byteOffset, arrayBuffer.ByteLength() - byteOffset);
}

inline DataView DataView::New(napi_env env,
                              Napi::ArrayBuffer arrayBuffer,
                              size_t byteOffset,
                              size_t byteLength) {
  if (byteOffset + byteLength > arrayBuffer.ByteLength()) {
    NAPI_THROW(RangeError::New(env, "Invalid DataView length"), DataView());
  }
  napi_value value;
  napi_status status =
      napi_create_dataview(env, byteLength, arrayBuffer, byteOffset, &value);
  NAPI_THROW_IF_FAILED(env, status, DataView());
  return DataView(env, value);
}

inline void DataView::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "DataView::CheckCast", "empty value");

  bool result;
  napi_status status = napi_is_dataview(env, value, &result);
  NAPI_CHECK(
      status == napi_ok, "DataView::CheckCast", "napi_is_dataview failed");
  NAPI_CHECK(result, "DataView::CheckCast", "value is not dataview");
}

inline DataView::DataView() : Object() {}

inline DataView::DataView(napi_env env, napi_value value) : Object(env, value) {
  napi_status status = napi_get_dataview_info(_env,
                                              _value /* dataView */,
                                              &_length /* byteLength */,
                                              &_data /* data */,
                                              nullptr /* arrayBuffer */,
                                              nullptr /* byteOffset */);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline Napi::ArrayBuffer DataView::ArrayBuffer() const {
  napi_value arrayBuffer;
  napi_status status = napi_get_dataview_info(_env,
                                              _value /* dataView */,
                                              nullptr /* byteLength */,
                                              nullptr /* data */,
                                              &arrayBuffer /* arrayBuffer */,
                                              nullptr /* byteOffset */);
  NAPI_THROW_IF_FAILED(_env, status, Napi::ArrayBuffer());
  return Napi::ArrayBuffer(_env, arrayBuffer);
}

inline size_t DataView::ByteOffset() const {
  size_t byteOffset;
  napi_status status = napi_get_dataview_info(_env,
                                              _value /* dataView */,
                                              nullptr /* byteLength */,
                                              nullptr /* data */,
                                              nullptr /* arrayBuffer */,
                                              &byteOffset /* byteOffset */);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return byteOffset;
}

inline size_t DataView::ByteLength() const {
  return _length;
}

inline void* DataView::Data() const {
  return _data;
}

inline float DataView::GetFloat32(size_t byteOffset) const {
  return ReadData<float>(byteOffset);
}

inline double DataView::GetFloat64(size_t byteOffset) const {
  return ReadData<double>(byteOffset);
}

inline int8_t DataView::GetInt8(size_t byteOffset) const {
  return ReadData<int8_t>(byteOffset);
}

inline int16_t DataView::GetInt16(size_t byteOffset) const {
  return ReadData<int16_t>(byteOffset);
}

inline int32_t DataView::GetInt32(size_t byteOffset) const {
  return ReadData<int32_t>(byteOffset);
}

inline uint8_t DataView::GetUint8(size_t byteOffset) const {
  return ReadData<uint8_t>(byteOffset);
}

inline uint16_t DataView::GetUint16(size_t byteOffset) const {
  return ReadData<uint16_t>(byteOffset);
}

inline uint32_t DataView::GetUint32(size_t byteOffset) const {
  return ReadData<uint32_t>(byteOffset);
}

inline void DataView::SetFloat32(size_t byteOffset, float value) const {
  WriteData<float>(byteOffset, value);
}

inline void DataView::SetFloat64(size_t byteOffset, double value) const {
  WriteData<double>(byteOffset, value);
}

inline void DataView::SetInt8(size_t byteOffset, int8_t value) const {
  WriteData<int8_t>(byteOffset, value);
}

inline void DataView::SetInt16(size_t byteOffset, int16_t value) const {
  WriteData<int16_t>(byteOffset, value);
}

inline void DataView::SetInt32(size_t byteOffset, int32_t value) const {
  WriteData<int32_t>(byteOffset, value);
}

inline void DataView::SetUint8(size_t byteOffset, uint8_t value) const {
  WriteData<uint8_t>(byteOffset, value);
}

inline void DataView::SetUint16(size_t byteOffset, uint16_t value) const {
  WriteData<uint16_t>(byteOffset, value);
}

inline void DataView::SetUint32(size_t byteOffset, uint32_t value) const {
  WriteData<uint32_t>(byteOffset, value);
}

template <typename T>
inline T DataView::ReadData(size_t byteOffset) const {
  if (byteOffset + sizeof(T) > _length ||
      byteOffset + sizeof(T) < byteOffset) {  // overflow
    NAPI_THROW(
        RangeError::New(_env, "Offset is outside the bounds of the DataView"),
        0);
  }

  return *reinterpret_cast<T*>(static_cast<uint8_t*>(_data) + byteOffset);
}

template <typename T>
inline void DataView::WriteData(size_t byteOffset, T value) const {
  if (byteOffset + sizeof(T) > _length ||
      byteOffset + sizeof(T) < byteOffset) {  // overflow
    NAPI_THROW_VOID(
        RangeError::New(_env, "Offset is outside the bounds of the DataView"));
  }

  *reinterpret_cast<T*>(static_cast<uint8_t*>(_data) + byteOffset) = value;
}

////////////////////////////////////////////////////////////////////////////////
// TypedArray class
////////////////////////////////////////////////////////////////////////////////
inline void TypedArray::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "TypedArray::CheckCast", "empty value");

  bool result;
  napi_status status = napi_is_typedarray(env, value, &result);
  NAPI_CHECK(
      status == napi_ok, "TypedArray::CheckCast", "napi_is_typedarray failed");
  NAPI_CHECK(result, "TypedArray::CheckCast", "value is not typedarray");
}

inline TypedArray::TypedArray()
    : Object(), _type(napi_typedarray_type::napi_int8_array), _length(0) {}

inline TypedArray::TypedArray(napi_env env, napi_value value)
    : Object(env, value),
      _type(napi_typedarray_type::napi_int8_array),
      _length(0) {
  if (value != nullptr) {
    napi_status status =
        napi_get_typedarray_info(_env,
                                 _value,
                                 &const_cast<TypedArray*>(this)->_type,
                                 &const_cast<TypedArray*>(this)->_length,
                                 nullptr,
                                 nullptr,
                                 nullptr);
    NAPI_THROW_IF_FAILED_VOID(_env, status);
  }
}

inline TypedArray::TypedArray(napi_env env,
                              napi_value value,
                              napi_typedarray_type type,
                              size_t length)
    : Object(env, value), _type(type), _length(length) {}

inline napi_typedarray_type TypedArray::TypedArrayType() const {
  return _type;
}

inline uint8_t TypedArray::ElementSize() const {
  switch (_type) {
    case napi_int8_array:
    case napi_uint8_array:
    case napi_uint8_clamped_array:
      return 1;
    case napi_int16_array:
    case napi_uint16_array:
      return 2;
    case napi_int32_array:
    case napi_uint32_array:
    case napi_float32_array:
      return 4;
    case napi_float64_array:
#if (NAPI_VERSION > 5)
    case napi_bigint64_array:
    case napi_biguint64_array:
#endif  // (NAPI_VERSION > 5)
      return 8;
    default:
      return 0;
  }
}

inline size_t TypedArray::ElementLength() const {
  return _length;
}

inline size_t TypedArray::ByteOffset() const {
  size_t byteOffset;
  napi_status status = napi_get_typedarray_info(
      _env, _value, nullptr, nullptr, nullptr, nullptr, &byteOffset);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return byteOffset;
}

inline size_t TypedArray::ByteLength() const {
  return ElementSize() * ElementLength();
}

inline Napi::ArrayBuffer TypedArray::ArrayBuffer() const {
  napi_value arrayBuffer;
  napi_status status = napi_get_typedarray_info(
      _env, _value, nullptr, nullptr, nullptr, &arrayBuffer, nullptr);
  NAPI_THROW_IF_FAILED(_env, status, Napi::ArrayBuffer());
  return Napi::ArrayBuffer(_env, arrayBuffer);
}

////////////////////////////////////////////////////////////////////////////////
// TypedArrayOf<T> class
////////////////////////////////////////////////////////////////////////////////
template <typename T>
inline void TypedArrayOf<T>::CheckCast(napi_env env, napi_value value) {
  TypedArray::CheckCast(env, value);
  napi_typedarray_type type;
  napi_status status = napi_get_typedarray_info(
      env, value, &type, nullptr, nullptr, nullptr, nullptr);
  NAPI_CHECK(status == napi_ok,
             "TypedArrayOf::CheckCast",
             "napi_is_typedarray failed");

  NAPI_CHECK(
      (type == TypedArrayTypeForPrimitiveType<T>() ||
       (type == napi_uint8_clamped_array && std::is_same<T, uint8_t>::value)),
      "TypedArrayOf::CheckCast",
      "Array type must match the template parameter. (Uint8 arrays may "
      "optionally have the \"clamped\" array type.)");
}

template <typename T>
inline TypedArrayOf<T> TypedArrayOf<T>::New(napi_env env,
                                            size_t elementLength,
                                            napi_typedarray_type type) {
  Napi::ArrayBuffer arrayBuffer =
      Napi::ArrayBuffer::New(env, elementLength * sizeof(T));
  return New(env, elementLength, arrayBuffer, 0, type);
}

template <typename T>
inline TypedArrayOf<T> TypedArrayOf<T>::New(napi_env env,
                                            size_t elementLength,
                                            Napi::ArrayBuffer arrayBuffer,
                                            size_t bufferOffset,
                                            napi_typedarray_type type) {
  napi_value value;
  napi_status status = napi_create_typedarray(
      env, type, elementLength, arrayBuffer, bufferOffset, &value);
  NAPI_THROW_IF_FAILED(env, status, TypedArrayOf<T>());

  return TypedArrayOf<T>(
      env,
      value,
      type,
      elementLength,
      reinterpret_cast<T*>(reinterpret_cast<uint8_t*>(arrayBuffer.Data()) +
                           bufferOffset));
}

template <typename T>
inline TypedArrayOf<T>::TypedArrayOf() : TypedArray(), _data(nullptr) {}

template <typename T>
inline TypedArrayOf<T>::TypedArrayOf(napi_env env, napi_value value)
    : TypedArray(env, value), _data(nullptr) {
  napi_status status = napi_ok;
  if (value != nullptr) {
    void* data = nullptr;
    status = napi_get_typedarray_info(
        _env, _value, &_type, &_length, &data, nullptr, nullptr);
    _data = static_cast<T*>(data);
  } else {
    _type = TypedArrayTypeForPrimitiveType<T>();
    _length = 0;
  }
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

template <typename T>
inline TypedArrayOf<T>::TypedArrayOf(napi_env env,
                                     napi_value value,
                                     napi_typedarray_type type,
                                     size_t length,
                                     T* data)
    : TypedArray(env, value, type, length), _data(data) {
  if (!(type == TypedArrayTypeForPrimitiveType<T>() ||
        (type == napi_uint8_clamped_array &&
         std::is_same<T, uint8_t>::value))) {
    NAPI_THROW_VOID(TypeError::New(
        env,
        "Array type must match the template parameter. "
        "(Uint8 arrays may optionally have the \"clamped\" array type.)"));
  }
}

template <typename T>
inline T& TypedArrayOf<T>::operator[](size_t index) {
  return _data[index];
}

template <typename T>
inline const T& TypedArrayOf<T>::operator[](size_t index) const {
  return _data[index];
}

template <typename T>
inline T* TypedArrayOf<T>::Data() {
  return _data;
}

template <typename T>
inline const T* TypedArrayOf<T>::Data() const {
  return _data;
}

////////////////////////////////////////////////////////////////////////////////
// Function class
////////////////////////////////////////////////////////////////////////////////

template <typename CbData>
inline napi_status CreateFunction(napi_env env,
                                  const char* utf8name,
                                  napi_callback cb,
                                  CbData* data,
                                  napi_value* result) {
  napi_status status =
      napi_create_function(env, utf8name, NAPI_AUTO_LENGTH, cb, data, result);
  if (status == napi_ok) {
    status = Napi::details::AttachData(env, *result, data);
  }

  return status;
}

template <Function::VoidCallback cb>
inline Function Function::New(napi_env env, const char* utf8name, void* data) {
  napi_value result = nullptr;
  napi_status status = napi_create_function(env,
                                            utf8name,
                                            NAPI_AUTO_LENGTH,
                                            details::TemplatedVoidCallback<cb>,
                                            data,
                                            &result);
  NAPI_THROW_IF_FAILED(env, status, Function());
  return Function(env, result);
}

template <Function::Callback cb>
inline Function Function::New(napi_env env, const char* utf8name, void* data) {
  napi_value result = nullptr;
  napi_status status = napi_create_function(env,
                                            utf8name,
                                            NAPI_AUTO_LENGTH,
                                            details::TemplatedCallback<cb>,
                                            data,
                                            &result);
  NAPI_THROW_IF_FAILED(env, status, Function());
  return Function(env, result);
}

template <Function::VoidCallback cb>
inline Function Function::New(napi_env env,
                              const std::string& utf8name,
                              void* data) {
  return Function::New<cb>(env, utf8name.c_str(), data);
}

template <Function::Callback cb>
inline Function Function::New(napi_env env,
                              const std::string& utf8name,
                              void* data) {
  return Function::New<cb>(env, utf8name.c_str(), data);
}

template <typename Callable>
inline Function Function::New(napi_env env,
                              Callable cb,
                              const char* utf8name,
                              void* data) {
  using ReturnType = decltype(cb(CallbackInfo(nullptr, nullptr)));
  using CbData = details::CallbackData<Callable, ReturnType>;
  auto callbackData = new CbData{std::move(cb), data};

  napi_value value;
  napi_status status =
      CreateFunction(env, utf8name, CbData::Wrapper, callbackData, &value);
  if (status != napi_ok) {
    delete callbackData;
    NAPI_THROW_IF_FAILED(env, status, Function());
  }

  return Function(env, value);
}

template <typename Callable>
inline Function Function::New(napi_env env,
                              Callable cb,
                              const std::string& utf8name,
                              void* data) {
  return New(env, cb, utf8name.c_str(), data);
}

inline void Function::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Function::CheckCast", "empty value");

  napi_valuetype type;
  napi_status status = napi_typeof(env, value, &type);
  NAPI_CHECK(status == napi_ok, "Function::CheckCast", "napi_typeof failed");
  NAPI_CHECK(type == napi_function,
             "Function::CheckCast",
             "value is not napi_function");
}

inline Function::Function() : Object() {}

inline Function::Function(napi_env env, napi_value value)
    : Object(env, value) {}

inline MaybeOrValue<Value> Function::operator()(
    const std::initializer_list<napi_value>& args) const {
  return Call(Env().Undefined(), args);
}

inline MaybeOrValue<Value> Function::Call(
    const std::initializer_list<napi_value>& args) const {
  return Call(Env().Undefined(), args);
}

inline MaybeOrValue<Value> Function::Call(
    const std::vector<napi_value>& args) const {
  return Call(Env().Undefined(), args);
}

inline MaybeOrValue<Value> Function::Call(
    const std::vector<Value>& args) const {
  return Call(Env().Undefined(), args);
}

inline MaybeOrValue<Value> Function::Call(size_t argc,
                                          const napi_value* args) const {
  return Call(Env().Undefined(), argc, args);
}

inline MaybeOrValue<Value> Function::Call(
    napi_value recv, const std::initializer_list<napi_value>& args) const {
  return Call(recv, args.size(), args.begin());
}

inline MaybeOrValue<Value> Function::Call(
    napi_value recv, const std::vector<napi_value>& args) const {
  return Call(recv, args.size(), args.data());
}

inline MaybeOrValue<Value> Function::Call(
    napi_value recv, const std::vector<Value>& args) const {
  const size_t argc = args.size();
  const size_t stackArgsCount = 6;
  napi_value stackArgs[stackArgsCount];
  std::vector<napi_value> heapArgs;
  napi_value* argv;
  if (argc <= stackArgsCount) {
    argv = stackArgs;
  } else {
    heapArgs.resize(argc);
    argv = heapArgs.data();
  }

  for (size_t index = 0; index < argc; index++) {
    argv[index] = static_cast<napi_value>(args[index]);
  }

  return Call(recv, argc, argv);
}

inline MaybeOrValue<Value> Function::Call(napi_value recv,
                                          size_t argc,
                                          const napi_value* args) const {
  napi_value result;
  napi_status status =
      napi_call_function(_env, recv, _value, argc, args, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(
      _env, status, Napi::Value(_env, result), Napi::Value);
}

inline MaybeOrValue<Value> Function::MakeCallback(
    napi_value recv,
    const std::initializer_list<napi_value>& args,
    napi_async_context context) const {
  return MakeCallback(recv, args.size(), args.begin(), context);
}

inline MaybeOrValue<Value> Function::MakeCallback(
    napi_value recv,
    const std::vector<napi_value>& args,
    napi_async_context context) const {
  return MakeCallback(recv, args.size(), args.data(), context);
}

inline MaybeOrValue<Value> Function::MakeCallback(
    napi_value recv,
    size_t argc,
    const napi_value* args,
    napi_async_context context) const {
  napi_value result;
  napi_status status =
      napi_make_callback(_env, context, recv, _value, argc, args, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(
      _env, status, Napi::Value(_env, result), Napi::Value);
}

inline MaybeOrValue<Object> Function::New(
    const std::initializer_list<napi_value>& args) const {
  return New(args.size(), args.begin());
}

inline MaybeOrValue<Object> Function::New(
    const std::vector<napi_value>& args) const {
  return New(args.size(), args.data());
}

inline MaybeOrValue<Object> Function::New(size_t argc,
                                          const napi_value* args) const {
  napi_value result;
  napi_status status = napi_new_instance(_env, _value, argc, args, &result);
  NAPI_RETURN_OR_THROW_IF_FAILED(
      _env, status, Napi::Object(_env, result), Napi::Object);
}

////////////////////////////////////////////////////////////////////////////////
// Promise class
////////////////////////////////////////////////////////////////////////////////

inline Promise::Deferred Promise::Deferred::New(napi_env env) {
  return Promise::Deferred(env);
}

inline Promise::Deferred::Deferred(napi_env env) : _env(env) {
  napi_status status = napi_create_promise(_env, &_deferred, &_promise);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline Promise Promise::Deferred::Promise() const {
  return Napi::Promise(_env, _promise);
}

inline Napi::Env Promise::Deferred::Env() const {
  return Napi::Env(_env);
}

inline void Promise::Deferred::Resolve(napi_value value) const {
  napi_status status = napi_resolve_deferred(_env, _deferred, value);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline void Promise::Deferred::Reject(napi_value value) const {
  napi_status status = napi_reject_deferred(_env, _deferred, value);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline void Promise::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Promise::CheckCast", "empty value");

  bool result;
  napi_status status = napi_is_promise(env, value, &result);
  NAPI_CHECK(status == napi_ok, "Promise::CheckCast", "napi_is_promise failed");
  NAPI_CHECK(result, "Promise::CheckCast", "value is not promise");
}

inline Promise::Promise(napi_env env, napi_value value) : Object(env, value) {}

////////////////////////////////////////////////////////////////////////////////
// Buffer<T> class
////////////////////////////////////////////////////////////////////////////////

template <typename T>
inline Buffer<T> Buffer<T>::New(napi_env env, size_t length) {
  napi_value value;
  void* data;
  napi_status status =
      napi_create_buffer(env, length * sizeof(T), &data, &value);
  NAPI_THROW_IF_FAILED(env, status, Buffer<T>());
  return Buffer(env, value);
}

#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
template <typename T>
inline Buffer<T> Buffer<T>::New(napi_env env, T* data, size_t length) {
  napi_value value;
  napi_status status = napi_create_external_buffer(
      env, length * sizeof(T), data, nullptr, nullptr, &value);
  NAPI_THROW_IF_FAILED(env, status, Buffer<T>());
  return Buffer(env, value);
}

template <typename T>
template <typename Finalizer>
inline Buffer<T> Buffer<T>::New(napi_env env,
                                T* data,
                                size_t length,
                                Finalizer finalizeCallback) {
  napi_value value;
  details::FinalizeData<T, Finalizer>* finalizeData =
      new details::FinalizeData<T, Finalizer>(
          {std::move(finalizeCallback), nullptr});
  napi_status status =
      napi_create_external_buffer(env,
                                  length * sizeof(T),
                                  data,
                                  details::FinalizeData<T, Finalizer>::Wrapper,
                                  finalizeData,
                                  &value);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(env, status, Buffer());
  }
  return Buffer(env, value);
}

template <typename T>
template <typename Finalizer, typename Hint>
inline Buffer<T> Buffer<T>::New(napi_env env,
                                T* data,
                                size_t length,
                                Finalizer finalizeCallback,
                                Hint* finalizeHint) {
  napi_value value;
  details::FinalizeData<T, Finalizer, Hint>* finalizeData =
      new details::FinalizeData<T, Finalizer, Hint>(
          {std::move(finalizeCallback), finalizeHint});
  napi_status status = napi_create_external_buffer(
      env,
      length * sizeof(T),
      data,
      details::FinalizeData<T, Finalizer, Hint>::WrapperWithHint,
      finalizeData,
      &value);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(env, status, Buffer());
  }
  return Buffer(env, value);
}
#endif  // NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED

template <typename T>
inline Buffer<T> Buffer<T>::NewOrCopy(napi_env env, T* data, size_t length) {
#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
  napi_value value;
  napi_status status = napi_create_external_buffer(
      env, length * sizeof(T), data, nullptr, nullptr, &value);
  if (status == details::napi_no_external_buffers_allowed) {
#endif  // NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
    // If we can't create an external buffer, we'll just copy the data.
    return Buffer<T>::Copy(env, data, length);
#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
  }
  NAPI_THROW_IF_FAILED(env, status, Buffer<T>());
  return Buffer(env, value);
#endif  // NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
}

template <typename T>
template <typename Finalizer>
inline Buffer<T> Buffer<T>::NewOrCopy(napi_env env,
                                      T* data,
                                      size_t length,
                                      Finalizer finalizeCallback) {
  details::FinalizeData<T, Finalizer>* finalizeData =
      new details::FinalizeData<T, Finalizer>(
          {std::move(finalizeCallback), nullptr});
#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
  napi_value value;
  napi_status status =
      napi_create_external_buffer(env,
                                  length * sizeof(T),
                                  data,
                                  details::FinalizeData<T, Finalizer>::Wrapper,
                                  finalizeData,
                                  &value);
  if (status == details::napi_no_external_buffers_allowed) {
#endif  // NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
    // If we can't create an external buffer, we'll just copy the data.
    Buffer<T> ret = Buffer<T>::Copy(env, data, length);
    details::FinalizeData<T, Finalizer>::Wrapper(env, data, finalizeData);
    return ret;
#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
  }
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(env, status, Buffer());
  }
  return Buffer(env, value);
#endif  // NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
}

template <typename T>
template <typename Finalizer, typename Hint>
inline Buffer<T> Buffer<T>::NewOrCopy(napi_env env,
                                      T* data,
                                      size_t length,
                                      Finalizer finalizeCallback,
                                      Hint* finalizeHint) {
  details::FinalizeData<T, Finalizer, Hint>* finalizeData =
      new details::FinalizeData<T, Finalizer, Hint>(
          {std::move(finalizeCallback), finalizeHint});
#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
  napi_value value;
  napi_status status = napi_create_external_buffer(
      env,
      length * sizeof(T),
      data,
      details::FinalizeData<T, Finalizer, Hint>::WrapperWithHint,
      finalizeData,
      &value);
  if (status == details::napi_no_external_buffers_allowed) {
#endif
    // If we can't create an external buffer, we'll just copy the data.
    Buffer<T> ret = Buffer<T>::Copy(env, data, length);
    details::FinalizeData<T, Finalizer, Hint>::WrapperWithHint(
        env, data, finalizeData);
    return ret;
#ifndef NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED
  }
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(env, status, Buffer());
  }
  return Buffer(env, value);
#endif
}

template <typename T>
inline Buffer<T> Buffer<T>::Copy(napi_env env, const T* data, size_t length) {
  napi_value value;
  napi_status status =
      napi_create_buffer_copy(env, length * sizeof(T), data, nullptr, &value);
  NAPI_THROW_IF_FAILED(env, status, Buffer<T>());
  return Buffer<T>(env, value);
}

template <typename T>
inline void Buffer<T>::CheckCast(napi_env env, napi_value value) {
  NAPI_CHECK(value != nullptr, "Buffer::CheckCast", "empty value");

  bool result;
  napi_status status = napi_is_buffer(env, value, &result);
  NAPI_CHECK(status == napi_ok, "Buffer::CheckCast", "napi_is_buffer failed");
  NAPI_CHECK(result, "Buffer::CheckCast", "value is not buffer");
}

template <typename T>
inline Buffer<T>::Buffer() : Uint8Array() {}

template <typename T>
inline Buffer<T>::Buffer(napi_env env, napi_value value)
    : Uint8Array(env, value) {}

template <typename T>
inline size_t Buffer<T>::Length() const {
  return ByteLength() / sizeof(T);
}

template <typename T>
inline T* Buffer<T>::Data() const {
  return reinterpret_cast<T*>(const_cast<uint8_t*>(Uint8Array::Data()));
}

////////////////////////////////////////////////////////////////////////////////
// Error class
////////////////////////////////////////////////////////////////////////////////

inline Error Error::New(napi_env env) {
  napi_status status;
  napi_value error = nullptr;
  bool is_exception_pending;
  napi_extended_error_info last_error_info_copy;

  {
    // We must retrieve the last error info before doing anything else because
    // doing anything else will replace the last error info.
    const napi_extended_error_info* last_error_info;
    status = napi_get_last_error_info(env, &last_error_info);
    NAPI_FATAL_IF_FAILED(status, "Error::New", "napi_get_last_error_info");

    // All fields of the `napi_extended_error_info` structure gets reset in
    // subsequent Node-API function calls on the same `env`. This includes a
    // call to `napi_is_exception_pending()`. So here it is necessary to make a
    // copy of the information as the `error_code` field is used later on.
    memcpy(&last_error_info_copy,
           last_error_info,
           sizeof(napi_extended_error_info));
  }

  status = napi_is_exception_pending(env, &is_exception_pending);
  NAPI_FATAL_IF_FAILED(status, "Error::New", "napi_is_exception_pending");

  // A pending exception takes precedence over any internal error status.
  if (is_exception_pending) {
    status = napi_get_and_clear_last_exception(env, &error);
    NAPI_FATAL_IF_FAILED(
        status, "Error::New", "napi_get_and_clear_last_exception");
  } else {
    const char* error_message = last_error_info_copy.error_message != nullptr
                                    ? last_error_info_copy.error_message
                                    : "Error in native callback";

    napi_value message;
    status = napi_create_string_utf8(
        env, error_message, std::strlen(error_message), &message);
    NAPI_FATAL_IF_FAILED(status, "Error::New", "napi_create_string_utf8");

    switch (last_error_info_copy.error_code) {
      case napi_object_expected:
      case napi_string_expected:
      case napi_boolean_expected:
      case napi_number_expected:
        status = napi_create_type_error(env, nullptr, message, &error);
        break;
      default:
        status = napi_create_error(env, nullptr, message, &error);
        break;
    }
    NAPI_FATAL_IF_FAILED(status, "Error::New", "napi_create_error");
  }

  return Error(env, error);
}

inline Error Error::New(napi_env env, const char* message) {
  return Error::New<Error>(
      env, message, std::strlen(message), napi_create_error);
}

inline Error Error::New(napi_env env, const std::string& message) {
  return Error::New<Error>(
      env, message.c_str(), message.size(), napi_create_error);
}

inline NAPI_NO_RETURN void Error::Fatal(const char* location,
                                        const char* message) {
  napi_fatal_error(location, NAPI_AUTO_LENGTH, message, NAPI_AUTO_LENGTH);
}

inline Error::Error() : ObjectReference() {}

inline Error::Error(napi_env env, napi_value value)
    : ObjectReference(env, nullptr) {
  if (value != nullptr) {
    // Attempting to create a reference on the error object.
    // If it's not a Object/Function/Symbol, this call will return an error
    // status.
    napi_status status = napi_create_reference(env, value, 1, &_ref);

    if (status != napi_ok) {
      napi_value wrappedErrorObj;

      // Create an error object
      status = napi_create_object(env, &wrappedErrorObj);
      NAPI_FATAL_IF_FAILED(status, "Error::Error", "napi_create_object");

      // property flag that we attach to show the error object is wrapped
      napi_property_descriptor wrapObjFlag = {
          ERROR_WRAP_VALUE(),  // Unique GUID identifier since Symbol isn't a
                               // viable option
          nullptr,
          nullptr,
          nullptr,
          nullptr,
          Value::From(env, value),
          napi_enumerable,
          nullptr};

      status = napi_define_properties(env, wrappedErrorObj, 1, &wrapObjFlag);
#ifdef NODE_API_SWALLOW_UNTHROWABLE_EXCEPTIONS
      if (status == napi_pending_exception) {
        // Test if the pending exception was reported because the environment is
        // shutting down. We assume that a status of napi_pending_exception
        // coupled with the absence of an actual pending exception means that
        // the environment is shutting down. If so, we replace the
        // napi_pending_exception status with napi_ok.
        bool is_exception_pending = false;
        status = napi_is_exception_pending(env, &is_exception_pending);
        if (status == napi_ok && !is_exception_pending) {
          status = napi_ok;
        } else {
          status = napi_pending_exception;
        }
      }
#endif  // NODE_API_SWALLOW_UNTHROWABLE_EXCEPTIONS
      NAPI_FATAL_IF_FAILED(status, "Error::Error", "napi_define_properties");

      // Create a reference on the newly wrapped object
      status = napi_create_reference(env, wrappedErrorObj, 1, &_ref);
    }

    // Avoid infinite recursion in the failure case.
    NAPI_FATAL_IF_FAILED(status, "Error::Error", "napi_create_reference");
  }
}

inline Object Error::Value() const {
  if (_ref == nullptr) {
    return Object(_env, nullptr);
  }

  napi_value refValue;
  napi_status status = napi_get_reference_value(_env, _ref, &refValue);
  NAPI_THROW_IF_FAILED(_env, status, Object());

  napi_valuetype type;
  status = napi_typeof(_env, refValue, &type);
  NAPI_THROW_IF_FAILED(_env, status, Object());

  // If refValue isn't a symbol, then we proceed to whether the refValue has the
  // wrapped error flag
  if (type != napi_symbol) {
    // We are checking if the object is wrapped
    bool isWrappedObject = false;

    status = napi_has_property(_env,
                               refValue,
                               String::From(_env, ERROR_WRAP_VALUE()),
                               &isWrappedObject);

    // Don't care about status
    if (isWrappedObject) {
      napi_value unwrappedValue;
      status = napi_get_property(_env,
                                 refValue,
                                 String::From(_env, ERROR_WRAP_VALUE()),
                                 &unwrappedValue);
      NAPI_THROW_IF_FAILED(_env, status, Object());

      return Object(_env, unwrappedValue);
    }
  }

  return Object(_env, refValue);
}

inline Error::Error(Error&& other) : ObjectReference(std::move(other)) {}

inline Error& Error::operator=(Error&& other) {
  static_cast<Reference<Object>*>(this)->operator=(std::move(other));
  return *this;
}

inline Error::Error(const Error& other) : ObjectReference(other) {}

inline Error& Error::operator=(const Error& other) {
  Reset();

  _env = other.Env();
  HandleScope scope(_env);

  napi_value value = other.Value();
  if (value != nullptr) {
    napi_status status = napi_create_reference(_env, value, 1, &_ref);
    NAPI_THROW_IF_FAILED(_env, status, *this);
  }

  return *this;
}

inline const std::string& Error::Message() const NAPI_NOEXCEPT {
  if (_message.size() == 0 && _env != nullptr) {
#ifdef NAPI_CPP_EXCEPTIONS
    try {
      _message = Get("message").As<String>();
    } catch (...) {
      // Catch all errors here, to include e.g. a std::bad_alloc from
      // the std::string::operator=, because this method may not throw.
    }
#else  // NAPI_CPP_EXCEPTIONS
#if defined(NODE_ADDON_API_ENABLE_MAYBE)
    Napi::Value message_val;
    if (Get("message").UnwrapTo(&message_val)) {
      _message = message_val.As<String>();
    }
#else
    _message = Get("message").As<String>();
#endif
#endif  // NAPI_CPP_EXCEPTIONS
  }
  return _message;
}

// we created an object on the &_ref
inline void Error::ThrowAsJavaScriptException() const {
  HandleScope scope(_env);
  if (!IsEmpty()) {
#ifdef NODE_API_SWALLOW_UNTHROWABLE_EXCEPTIONS
    bool pendingException = false;

    // check if there is already a pending exception. If so don't try to throw a
    // new one as that is not allowed/possible
    napi_status status = napi_is_exception_pending(_env, &pendingException);

    if ((status != napi_ok) ||
        ((status == napi_ok) && (pendingException == false))) {
      // We intentionally don't use `NAPI_THROW_*` macros here to ensure
      // that there is no possible recursion as `ThrowAsJavaScriptException`
      // is part of `NAPI_THROW_*` macro definition for noexcept.

      status = napi_throw(_env, Value());

      if (status == napi_pending_exception) {
        // The environment must be terminating as we checked earlier and there
        // was no pending exception. In this case continuing will result
        // in a fatal error and there is nothing the author has done incorrectly
        // in their code that is worth flagging through a fatal error
        return;
      }
    } else {
      status = napi_pending_exception;
    }
#else
    // We intentionally don't use `NAPI_THROW_*` macros here to ensure
    // that there is no possible recursion as `ThrowAsJavaScriptException`
    // is part of `NAPI_THROW_*` macro definition for noexcept.

    napi_status status = napi_throw(_env, Value());
#endif

#ifdef NAPI_CPP_EXCEPTIONS
    if (status != napi_ok) {
      throw Error::New(_env);
    }
#else   // NAPI_CPP_EXCEPTIONS
    NAPI_FATAL_IF_FAILED(
        status, "Error::ThrowAsJavaScriptException", "napi_throw");
#endif  // NAPI_CPP_EXCEPTIONS
  }
}

#ifdef NAPI_CPP_EXCEPTIONS

inline const char* Error::what() const NAPI_NOEXCEPT {
  return Message().c_str();
}

#endif  // NAPI_CPP_EXCEPTIONS

inline const char* Error::ERROR_WRAP_VALUE() NAPI_NOEXCEPT {
  return "4bda9e7e-4913-4dbc-95de-891cbf66598e-errorVal";
}

template <typename TError>
inline TError Error::New(napi_env env,
                         const char* message,
                         size_t length,
                         create_error_fn create_error) {
  napi_value str;
  napi_status status = napi_create_string_utf8(env, message, length, &str);
  NAPI_THROW_IF_FAILED(env, status, TError());

  napi_value error;
  status = create_error(env, nullptr, str, &error);
  NAPI_THROW_IF_FAILED(env, status, TError());

  return TError(env, error);
}

inline TypeError TypeError::New(napi_env env, const char* message) {
  return Error::New<TypeError>(
      env, message, std::strlen(message), napi_create_type_error);
}

inline TypeError TypeError::New(napi_env env, const std::string& message) {
  return Error::New<TypeError>(
      env, message.c_str(), message.size(), napi_create_type_error);
}

inline TypeError::TypeError() : Error() {}

inline TypeError::TypeError(napi_env env, napi_value value)
    : Error(env, value) {}

inline RangeError RangeError::New(napi_env env, const char* message) {
  return Error::New<RangeError>(
      env, message, std::strlen(message), napi_create_range_error);
}

inline RangeError RangeError::New(napi_env env, const std::string& message) {
  return Error::New<RangeError>(
      env, message.c_str(), message.size(), napi_create_range_error);
}

inline RangeError::RangeError() : Error() {}

inline RangeError::RangeError(napi_env env, napi_value value)
    : Error(env, value) {}

#if NAPI_VERSION > 8
inline SyntaxError SyntaxError::New(napi_env env, const char* message) {
  return Error::New<SyntaxError>(
      env, message, std::strlen(message), node_api_create_syntax_error);
}

inline SyntaxError SyntaxError::New(napi_env env, const std::string& message) {
  return Error::New<SyntaxError>(
      env, message.c_str(), message.size(), node_api_create_syntax_error);
}

inline SyntaxError::SyntaxError() : Error() {}

inline SyntaxError::SyntaxError(napi_env env, napi_value value)
    : Error(env, value) {}
#endif  // NAPI_VERSION > 8

////////////////////////////////////////////////////////////////////////////////
// Reference<T> class
////////////////////////////////////////////////////////////////////////////////

template <typename T>
inline Reference<T> Reference<T>::New(const T& value,
                                      uint32_t initialRefcount) {
  napi_env env = value.Env();
  napi_value val = value;

  if (val == nullptr) {
    return Reference<T>(env, nullptr);
  }

  napi_ref ref;
  napi_status status = napi_create_reference(env, value, initialRefcount, &ref);
  NAPI_THROW_IF_FAILED(env, status, Reference<T>());

  return Reference<T>(env, ref);
}

template <typename T>
inline Reference<T>::Reference()
    : _env(nullptr), _ref(nullptr), _suppressDestruct(false) {}

template <typename T>
inline Reference<T>::Reference(napi_env env, napi_ref ref)
    : _env(env), _ref(ref), _suppressDestruct(false) {}

template <typename T>
inline Reference<T>::~Reference() {
  if (_ref != nullptr) {
    if (!_suppressDestruct) {
      napi_delete_reference(_env, _ref);
    }

    _ref = nullptr;
  }
}

template <typename T>
inline Reference<T>::Reference(Reference<T>&& other)
    : _env(other._env),
      _ref(other._ref),
      _suppressDestruct(other._suppressDestruct) {
  other._env = nullptr;
  other._ref = nullptr;
  other._suppressDestruct = false;
}

template <typename T>
inline Reference<T>& Reference<T>::operator=(Reference<T>&& other) {
  Reset();
  _env = other._env;
  _ref = other._ref;
  _suppressDestruct = other._suppressDestruct;
  other._env = nullptr;
  other._ref = nullptr;
  other._suppressDestruct = false;
  return *this;
}

template <typename T>
inline Reference<T>::Reference(const Reference<T>& other)
    : _env(other._env), _ref(nullptr), _suppressDestruct(false) {
  HandleScope scope(_env);

  napi_value value = other.Value();
  if (value != nullptr) {
    // Copying is a limited scenario (currently only used for Error object) and
    // always creates a strong reference to the given value even if the incoming
    // reference is weak.
    napi_status status = napi_create_reference(_env, value, 1, &_ref);
    NAPI_FATAL_IF_FAILED(
        status, "Reference<T>::Reference", "napi_create_reference");
  }
}

template <typename T>
inline Reference<T>::operator napi_ref() const {
  return _ref;
}

template <typename T>
inline bool Reference<T>::operator==(const Reference<T>& other) const {
  HandleScope scope(_env);
  return this->Value().StrictEquals(other.Value());
}

template <typename T>
inline bool Reference<T>::operator!=(const Reference<T>& other) const {
  return !this->operator==(other);
}

template <typename T>
inline Napi::Env Reference<T>::Env() const {
  return Napi::Env(_env);
}

template <typename T>
inline bool Reference<T>::IsEmpty() const {
  return _ref == nullptr;
}

template <typename T>
inline T Reference<T>::Value() const {
  if (_ref == nullptr) {
    return T(_env, nullptr);
  }

  napi_value value;
  napi_status status = napi_get_reference_value(_env, _ref, &value);
  NAPI_THROW_IF_FAILED(_env, status, T());
  return T(_env, value);
}

template <typename T>
inline uint32_t Reference<T>::Ref() const {
  uint32_t result;
  napi_status status = napi_reference_ref(_env, _ref, &result);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}

template <typename T>
inline uint32_t Reference<T>::Unref() const {
  uint32_t result;
  napi_status status = napi_reference_unref(_env, _ref, &result);
  NAPI_THROW_IF_FAILED(_env, status, 0);
  return result;
}

template <typename T>
inline void Reference<T>::Reset() {
  if (_ref != nullptr) {
    napi_status status = napi_delete_reference(_env, _ref);
    NAPI_THROW_IF_FAILED_VOID(_env, status);
    _ref = nullptr;
  }
}

template <typename T>
inline void Reference<T>::Reset(const T& value, uint32_t refcount) {
  Reset();
  _env = value.Env();

  napi_value val = value;
  if (val != nullptr) {
    napi_status status = napi_create_reference(_env, value, refcount, &_ref);
    NAPI_THROW_IF_FAILED_VOID(_env, status);
  }
}

template <typename T>
inline void Reference<T>::SuppressDestruct() {
  _suppressDestruct = true;
}

template <typename T>
inline Reference<T> Weak(T value) {
  return Reference<T>::New(value, 0);
}

inline ObjectReference Weak(Object value) {
  return Reference<Object>::New(value, 0);
}

inline FunctionReference Weak(Function value) {
  return Reference<Function>::New(value, 0);
}

template <typename T>
inline Reference<T> Persistent(T value) {
  return Reference<T>::New(value, 1);
}

inline ObjectReference Persistent(Object value) {
  return Reference<Object>::New(value, 1);
}

inline FunctionReference Persistent(Function value) {
  return Reference<Function>::New(value, 1);
}

////////////////////////////////////////////////////////////////////////////////
// ObjectReference class
////////////////////////////////////////////////////////////////////////////////

inline ObjectReference::ObjectReference() : Reference<Object>() {}

inline ObjectReference::ObjectReference(napi_env env, napi_ref ref)
    : Reference<Object>(env, ref) {}

inline ObjectReference::ObjectReference(Reference<Object>&& other)
    : Reference<Object>(std::move(other)) {}

inline ObjectReference& ObjectReference::operator=(Reference<Object>&& other) {
  static_cast<Reference<Object>*>(this)->operator=(std::move(other));
  return *this;
}

inline ObjectReference::ObjectReference(ObjectReference&& other)
    : Reference<Object>(std::move(other)) {}

inline ObjectReference& ObjectReference::operator=(ObjectReference&& other) {
  static_cast<Reference<Object>*>(this)->operator=(std::move(other));
  return *this;
}

inline ObjectReference::ObjectReference(const ObjectReference& other)
    : Reference<Object>(other) {}

inline MaybeOrValue<Napi::Value> ObjectReference::Get(
    const char* utf8name) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().Get(utf8name);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Napi::Value> ObjectReference::Get(
    const std::string& utf8name) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().Get(utf8name);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<bool> ObjectReference::Set(const char* utf8name,
                                               napi_value value) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, value);
}

inline MaybeOrValue<bool> ObjectReference::Set(const char* utf8name,
                                               Napi::Value value) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, value);
}

inline MaybeOrValue<bool> ObjectReference::Set(const char* utf8name,
                                               const char* utf8value) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, utf8value);
}

inline MaybeOrValue<bool> ObjectReference::Set(const char* utf8name,
                                               bool boolValue) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, boolValue);
}

inline MaybeOrValue<bool> ObjectReference::Set(const char* utf8name,
                                               double numberValue) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, numberValue);
}

inline MaybeOrValue<bool> ObjectReference::Set(const std::string& utf8name,
                                               napi_value value) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, value);
}

inline MaybeOrValue<bool> ObjectReference::Set(const std::string& utf8name,
                                               Napi::Value value) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, value);
}

inline MaybeOrValue<bool> ObjectReference::Set(const std::string& utf8name,
                                               std::string& utf8value) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, utf8value);
}

inline MaybeOrValue<bool> ObjectReference::Set(const std::string& utf8name,
                                               bool boolValue) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, boolValue);
}

inline MaybeOrValue<bool> ObjectReference::Set(const std::string& utf8name,
                                               double numberValue) const {
  HandleScope scope(_env);
  return Value().Set(utf8name, numberValue);
}

inline MaybeOrValue<Napi::Value> ObjectReference::Get(uint32_t index) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().Get(index);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<bool> ObjectReference::Set(uint32_t index,
                                               napi_value value) const {
  HandleScope scope(_env);
  return Value().Set(index, value);
}

inline MaybeOrValue<bool> ObjectReference::Set(uint32_t index,
                                               Napi::Value value) const {
  HandleScope scope(_env);
  return Value().Set(index, value);
}

inline MaybeOrValue<bool> ObjectReference::Set(uint32_t index,
                                               const char* utf8value) const {
  HandleScope scope(_env);
  return Value().Set(index, utf8value);
}

inline MaybeOrValue<bool> ObjectReference::Set(
    uint32_t index, const std::string& utf8value) const {
  HandleScope scope(_env);
  return Value().Set(index, utf8value);
}

inline MaybeOrValue<bool> ObjectReference::Set(uint32_t index,
                                               bool boolValue) const {
  HandleScope scope(_env);
  return Value().Set(index, boolValue);
}

inline MaybeOrValue<bool> ObjectReference::Set(uint32_t index,
                                               double numberValue) const {
  HandleScope scope(_env);
  return Value().Set(index, numberValue);
}

////////////////////////////////////////////////////////////////////////////////
// FunctionReference class
////////////////////////////////////////////////////////////////////////////////

inline FunctionReference::FunctionReference() : Reference<Function>() {}

inline FunctionReference::FunctionReference(napi_env env, napi_ref ref)
    : Reference<Function>(env, ref) {}

inline FunctionReference::FunctionReference(Reference<Function>&& other)
    : Reference<Function>(std::move(other)) {}

inline FunctionReference& FunctionReference::operator=(
    Reference<Function>&& other) {
  static_cast<Reference<Function>*>(this)->operator=(std::move(other));
  return *this;
}

inline FunctionReference::FunctionReference(FunctionReference&& other)
    : Reference<Function>(std::move(other)) {}

inline FunctionReference& FunctionReference::operator=(
    FunctionReference&& other) {
  static_cast<Reference<Function>*>(this)->operator=(std::move(other));
  return *this;
}

inline MaybeOrValue<Napi::Value> FunctionReference::operator()(
    const std::initializer_list<napi_value>& args) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value()(args);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Napi::Value> FunctionReference::Call(
    const std::initializer_list<napi_value>& args) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().Call(args);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Napi::Value> FunctionReference::Call(
    const std::vector<napi_value>& args) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().Call(args);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Napi::Value> FunctionReference::Call(
    napi_value recv, const std::initializer_list<napi_value>& args) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().Call(recv, args);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Napi::Value> FunctionReference::Call(
    napi_value recv, const std::vector<napi_value>& args) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().Call(recv, args);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Napi::Value> FunctionReference::Call(
    napi_value recv, size_t argc, const napi_value* args) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().Call(recv, argc, args);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Napi::Value> FunctionReference::MakeCallback(
    napi_value recv,
    const std::initializer_list<napi_value>& args,
    napi_async_context context) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().MakeCallback(recv, args, context);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }

  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Napi::Value> FunctionReference::MakeCallback(
    napi_value recv,
    const std::vector<napi_value>& args,
    napi_async_context context) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result = Value().MakeCallback(recv, args, context);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Napi::Value> FunctionReference::MakeCallback(
    napi_value recv,
    size_t argc,
    const napi_value* args,
    napi_async_context context) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Napi::Value> result =
      Value().MakeCallback(recv, argc, args, context);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()));
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Value();
  }
  return scope.Escape(result);
#endif
}

inline MaybeOrValue<Object> FunctionReference::New(
    const std::initializer_list<napi_value>& args) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Object> result = Value().New(args);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()).As<Object>());
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Object();
  }
  return scope.Escape(result).As<Object>();
#endif
}

inline MaybeOrValue<Object> FunctionReference::New(
    const std::vector<napi_value>& args) const {
  EscapableHandleScope scope(_env);
  MaybeOrValue<Object> result = Value().New(args);
#ifdef NODE_ADDON_API_ENABLE_MAYBE
  if (result.IsJust()) {
    return Just(scope.Escape(result.Unwrap()).As<Object>());
  }
  return result;
#else
  if (scope.Env().IsExceptionPending()) {
    return Object();
  }
  return scope.Escape(result).As<Object>();
#endif
}

////////////////////////////////////////////////////////////////////////////////
// CallbackInfo class
////////////////////////////////////////////////////////////////////////////////

inline CallbackInfo::CallbackInfo(napi_env env, napi_callback_info info)
    : _env(env),
      _info(info),
      _this(nullptr),
      _dynamicArgs(nullptr),
      _data(nullptr) {
  _argc = _staticArgCount;
  _argv = _staticArgs;
  napi_status status =
      napi_get_cb_info(env, info, &_argc, _argv, &_this, &_data);
  NAPI_THROW_IF_FAILED_VOID(_env, status);

  if (_argc > _staticArgCount) {
    // Use either a fixed-size array (on the stack) or a dynamically-allocated
    // array (on the heap) depending on the number of args.
    _dynamicArgs = new napi_value[_argc];
    _argv = _dynamicArgs;

    status = napi_get_cb_info(env, info, &_argc, _argv, nullptr, nullptr);
    NAPI_THROW_IF_FAILED_VOID(_env, status);
  }
}

inline CallbackInfo::~CallbackInfo() {
  if (_dynamicArgs != nullptr) {
    delete[] _dynamicArgs;
  }
}

inline CallbackInfo::operator napi_callback_info() const {
  return _info;
}

inline Value CallbackInfo::NewTarget() const {
  napi_value newTarget;
  napi_status status = napi_get_new_target(_env, _info, &newTarget);
  NAPI_THROW_IF_FAILED(_env, status, Value());
  return Value(_env, newTarget);
}

inline bool CallbackInfo::IsConstructCall() const {
  return !NewTarget().IsEmpty();
}

inline Napi::Env CallbackInfo::Env() const {
  return Napi::Env(_env);
}

inline size_t CallbackInfo::Length() const {
  return _argc;
}

inline const Value CallbackInfo::operator[](size_t index) const {
  return index < _argc ? Value(_env, _argv[index]) : Env().Undefined();
}

inline Value CallbackInfo::This() const {
  if (_this == nullptr) {
    return Env().Undefined();
  }
  return Object(_env, _this);
}

inline void* CallbackInfo::Data() const {
  return _data;
}

inline void CallbackInfo::SetData(void* data) {
  _data = data;
}

////////////////////////////////////////////////////////////////////////////////
// PropertyDescriptor class
////////////////////////////////////////////////////////////////////////////////

template <typename PropertyDescriptor::GetterCallback Getter>
PropertyDescriptor PropertyDescriptor::Accessor(
    const char* utf8name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();

  desc.utf8name = utf8name;
  desc.getter = details::TemplatedCallback<Getter>;
  desc.attributes = attributes;
  desc.data = data;

  return desc;
}

template <typename PropertyDescriptor::GetterCallback Getter>
PropertyDescriptor PropertyDescriptor::Accessor(
    const std::string& utf8name,
    napi_property_attributes attributes,
    void* data) {
  return Accessor<Getter>(utf8name.c_str(), attributes, data);
}

template <typename PropertyDescriptor::GetterCallback Getter>
PropertyDescriptor PropertyDescriptor::Accessor(
    Name name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();

  desc.name = name;
  desc.getter = details::TemplatedCallback<Getter>;
  desc.attributes = attributes;
  desc.data = data;

  return desc;
}

template <typename PropertyDescriptor::GetterCallback Getter,
          typename PropertyDescriptor::SetterCallback Setter>
PropertyDescriptor PropertyDescriptor::Accessor(
    const char* utf8name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();

  desc.utf8name = utf8name;
  desc.getter = details::TemplatedCallback<Getter>;
  desc.setter = details::TemplatedVoidCallback<Setter>;
  desc.attributes = attributes;
  desc.data = data;

  return desc;
}

template <typename PropertyDescriptor::GetterCallback Getter,
          typename PropertyDescriptor::SetterCallback Setter>
PropertyDescriptor PropertyDescriptor::Accessor(
    const std::string& utf8name,
    napi_property_attributes attributes,
    void* data) {
  return Accessor<Getter, Setter>(utf8name.c_str(), attributes, data);
}

template <typename PropertyDescriptor::GetterCallback Getter,
          typename PropertyDescriptor::SetterCallback Setter>
PropertyDescriptor PropertyDescriptor::Accessor(
    Name name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();

  desc.name = name;
  desc.getter = details::TemplatedCallback<Getter>;
  desc.setter = details::TemplatedVoidCallback<Setter>;
  desc.attributes = attributes;
  desc.data = data;

  return desc;
}

template <typename Getter>
inline PropertyDescriptor PropertyDescriptor::Accessor(
    Napi::Env env,
    Napi::Object object,
    const char* utf8name,
    Getter getter,
    napi_property_attributes attributes,
    void* data) {
  using CbData = details::CallbackData<Getter, Napi::Value>;
  auto callbackData = new CbData({getter, data});

  napi_status status = AttachData(env, object, callbackData);
  if (status != napi_ok) {
    delete callbackData;
    NAPI_THROW_IF_FAILED(env, status, napi_property_descriptor());
  }

  return PropertyDescriptor({utf8name,
                             nullptr,
                             nullptr,
                             CbData::Wrapper,
                             nullptr,
                             nullptr,
                             attributes,
                             callbackData});
}

template <typename Getter>
inline PropertyDescriptor PropertyDescriptor::Accessor(
    Napi::Env env,
    Napi::Object object,
    const std::string& utf8name,
    Getter getter,
    napi_property_attributes attributes,
    void* data) {
  return Accessor(env, object, utf8name.c_str(), getter, attributes, data);
}

template <typename Getter>
inline PropertyDescriptor PropertyDescriptor::Accessor(
    Napi::Env env,
    Napi::Object object,
    Name name,
    Getter getter,
    napi_property_attributes attributes,
    void* data) {
  using CbData = details::CallbackData<Getter, Napi::Value>;
  auto callbackData = new CbData({getter, data});

  napi_status status = AttachData(env, object, callbackData);
  if (status != napi_ok) {
    delete callbackData;
    NAPI_THROW_IF_FAILED(env, status, napi_property_descriptor());
  }

  return PropertyDescriptor({nullptr,
                             name,
                             nullptr,
                             CbData::Wrapper,
                             nullptr,
                             nullptr,
                             attributes,
                             callbackData});
}

template <typename Getter, typename Setter>
inline PropertyDescriptor PropertyDescriptor::Accessor(
    Napi::Env env,
    Napi::Object object,
    const char* utf8name,
    Getter getter,
    Setter setter,
    napi_property_attributes attributes,
    void* data) {
  using CbData = details::AccessorCallbackData<Getter, Setter>;
  auto callbackData = new CbData({getter, setter, data});

  napi_status status = AttachData(env, object, callbackData);
  if (status != napi_ok) {
    delete callbackData;
    NAPI_THROW_IF_FAILED(env, status, napi_property_descriptor());
  }

  return PropertyDescriptor({utf8name,
                             nullptr,
                             nullptr,
                             CbData::GetterWrapper,
                             CbData::SetterWrapper,
                             nullptr,
                             attributes,
                             callbackData});
}

template <typename Getter, typename Setter>
inline PropertyDescriptor PropertyDescriptor::Accessor(
    Napi::Env env,
    Napi::Object object,
    const std::string& utf8name,
    Getter getter,
    Setter setter,
    napi_property_attributes attributes,
    void* data) {
  return Accessor(
      env, object, utf8name.c_str(), getter, setter, attributes, data);
}

template <typename Getter, typename Setter>
inline PropertyDescriptor PropertyDescriptor::Accessor(
    Napi::Env env,
    Napi::Object object,
    Name name,
    Getter getter,
    Setter setter,
    napi_property_attributes attributes,
    void* data) {
  using CbData = details::AccessorCallbackData<Getter, Setter>;
  auto callbackData = new CbData({getter, setter, data});

  napi_status status = AttachData(env, object, callbackData);
  if (status != napi_ok) {
    delete callbackData;
    NAPI_THROW_IF_FAILED(env, status, napi_property_descriptor());
  }

  return PropertyDescriptor({nullptr,
                             name,
                             nullptr,
                             CbData::GetterWrapper,
                             CbData::SetterWrapper,
                             nullptr,
                             attributes,
                             callbackData});
}

template <typename Callable>
inline PropertyDescriptor PropertyDescriptor::Function(
    Napi::Env env,
    Napi::Object /*object*/,
    const char* utf8name,
    Callable cb,
    napi_property_attributes attributes,
    void* data) {
  return PropertyDescriptor({utf8name,
                             nullptr,
                             nullptr,
                             nullptr,
                             nullptr,
                             Napi::Function::New(env, cb, utf8name, data),
                             attributes,
                             nullptr});
}

template <typename Callable>
inline PropertyDescriptor PropertyDescriptor::Function(
    Napi::Env env,
    Napi::Object object,
    const std::string& utf8name,
    Callable cb,
    napi_property_attributes attributes,
    void* data) {
  return Function(env, object, utf8name.c_str(), cb, attributes, data);
}

template <typename Callable>
inline PropertyDescriptor PropertyDescriptor::Function(
    Napi::Env env,
    Napi::Object /*object*/,
    Name name,
    Callable cb,
    napi_property_attributes attributes,
    void* data) {
  return PropertyDescriptor({nullptr,
                             name,
                             nullptr,
                             nullptr,
                             nullptr,
                             Napi::Function::New(env, cb, nullptr, data),
                             attributes,
                             nullptr});
}

inline PropertyDescriptor PropertyDescriptor::Value(
    const char* utf8name,
    napi_value value,
    napi_property_attributes attributes) {
  return PropertyDescriptor({utf8name,
                             nullptr,
                             nullptr,
                             nullptr,
                             nullptr,
                             value,
                             attributes,
                             nullptr});
}

inline PropertyDescriptor PropertyDescriptor::Value(
    const std::string& utf8name,
    napi_value value,
    napi_property_attributes attributes) {
  return Value(utf8name.c_str(), value, attributes);
}

inline PropertyDescriptor PropertyDescriptor::Value(
    napi_value name, napi_value value, napi_property_attributes attributes) {
  return PropertyDescriptor(
      {nullptr, name, nullptr, nullptr, nullptr, value, attributes, nullptr});
}

inline PropertyDescriptor PropertyDescriptor::Value(
    Name name, Napi::Value value, napi_property_attributes attributes) {
  napi_value nameValue = name;
  napi_value valueValue = value;
  return PropertyDescriptor::Value(nameValue, valueValue, attributes);
}

inline PropertyDescriptor::PropertyDescriptor(napi_property_descriptor desc)
    : _desc(desc) {}

inline PropertyDescriptor::operator napi_property_descriptor&() {
  return _desc;
}

inline PropertyDescriptor::operator const napi_property_descriptor&() const {
  return _desc;
}

////////////////////////////////////////////////////////////////////////////////
// InstanceWrap<T> class
////////////////////////////////////////////////////////////////////////////////

template <typename T>
inline void InstanceWrap<T>::AttachPropData(
    napi_env env, napi_value value, const napi_property_descriptor* prop) {
  napi_status status;
  if (!(prop->attributes & napi_static)) {
    if (prop->method == T::InstanceVoidMethodCallbackWrapper) {
      status = Napi::details::AttachData(
          env, value, static_cast<InstanceVoidMethodCallbackData*>(prop->data));
      NAPI_THROW_IF_FAILED_VOID(env, status);
    } else if (prop->method == T::InstanceMethodCallbackWrapper) {
      status = Napi::details::AttachData(
          env, value, static_cast<InstanceMethodCallbackData*>(prop->data));
      NAPI_THROW_IF_FAILED_VOID(env, status);
    } else if (prop->getter == T::InstanceGetterCallbackWrapper ||
               prop->setter == T::InstanceSetterCallbackWrapper) {
      status = Napi::details::AttachData(
          env, value, static_cast<InstanceAccessorCallbackData*>(prop->data));
      NAPI_THROW_IF_FAILED_VOID(env, status);
    }
  }
}

template <typename T>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceMethod(
    const char* utf8name,
    InstanceVoidMethodCallback method,
    napi_property_attributes attributes,
    void* data) {
  InstanceVoidMethodCallbackData* callbackData =
      new InstanceVoidMethodCallbackData({method, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.method = T::InstanceVoidMethodCallbackWrapper;
  desc.data = callbackData;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceMethod(
    const char* utf8name,
    InstanceMethodCallback method,
    napi_property_attributes attributes,
    void* data) {
  InstanceMethodCallbackData* callbackData =
      new InstanceMethodCallbackData({method, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.method = T::InstanceMethodCallbackWrapper;
  desc.data = callbackData;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceMethod(
    Symbol name,
    InstanceVoidMethodCallback method,
    napi_property_attributes attributes,
    void* data) {
  InstanceVoidMethodCallbackData* callbackData =
      new InstanceVoidMethodCallbackData({method, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.method = T::InstanceVoidMethodCallbackWrapper;
  desc.data = callbackData;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceMethod(
    Symbol name,
    InstanceMethodCallback method,
    napi_property_attributes attributes,
    void* data) {
  InstanceMethodCallbackData* callbackData =
      new InstanceMethodCallbackData({method, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.method = T::InstanceMethodCallbackWrapper;
  desc.data = callbackData;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
template <typename InstanceWrap<T>::InstanceVoidMethodCallback method>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceMethod(
    const char* utf8name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.method = details::TemplatedInstanceVoidCallback<T, method>;
  desc.data = data;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
template <typename InstanceWrap<T>::InstanceMethodCallback method>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceMethod(
    const char* utf8name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.method = details::TemplatedInstanceCallback<T, method>;
  desc.data = data;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
template <typename InstanceWrap<T>::InstanceVoidMethodCallback method>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceMethod(
    Symbol name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.method = details::TemplatedInstanceVoidCallback<T, method>;
  desc.data = data;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
template <typename InstanceWrap<T>::InstanceMethodCallback method>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceMethod(
    Symbol name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.method = details::TemplatedInstanceCallback<T, method>;
  desc.data = data;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceAccessor(
    const char* utf8name,
    InstanceGetterCallback getter,
    InstanceSetterCallback setter,
    napi_property_attributes attributes,
    void* data) {
  InstanceAccessorCallbackData* callbackData =
      new InstanceAccessorCallbackData({getter, setter, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.getter = getter != nullptr ? T::InstanceGetterCallbackWrapper : nullptr;
  desc.setter = setter != nullptr ? T::InstanceSetterCallbackWrapper : nullptr;
  desc.data = callbackData;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceAccessor(
    Symbol name,
    InstanceGetterCallback getter,
    InstanceSetterCallback setter,
    napi_property_attributes attributes,
    void* data) {
  InstanceAccessorCallbackData* callbackData =
      new InstanceAccessorCallbackData({getter, setter, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.getter = getter != nullptr ? T::InstanceGetterCallbackWrapper : nullptr;
  desc.setter = setter != nullptr ? T::InstanceSetterCallbackWrapper : nullptr;
  desc.data = callbackData;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
template <typename InstanceWrap<T>::InstanceGetterCallback getter,
          typename InstanceWrap<T>::InstanceSetterCallback setter>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceAccessor(
    const char* utf8name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.getter = details::TemplatedInstanceCallback<T, getter>;
  desc.setter = This::WrapSetter(This::SetterTag<setter>());
  desc.data = data;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
template <typename InstanceWrap<T>::InstanceGetterCallback getter,
          typename InstanceWrap<T>::InstanceSetterCallback setter>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceAccessor(
    Symbol name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.getter = details::TemplatedInstanceCallback<T, getter>;
  desc.setter = This::WrapSetter(This::SetterTag<setter>());
  desc.data = data;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceValue(
    const char* utf8name,
    Napi::Value value,
    napi_property_attributes attributes) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.value = value;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> InstanceWrap<T>::InstanceValue(
    Symbol name, Napi::Value value, napi_property_attributes attributes) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.value = value;
  desc.attributes = attributes;
  return desc;
}

template <typename T>
inline napi_value InstanceWrap<T>::InstanceVoidMethodCallbackWrapper(
    napi_env env, napi_callback_info info) {
  return details::WrapCallback([&] {
    CallbackInfo callbackInfo(env, info);
    InstanceVoidMethodCallbackData* callbackData =
        reinterpret_cast<InstanceVoidMethodCallbackData*>(callbackInfo.Data());
    callbackInfo.SetData(callbackData->data);
    T* instance = T::Unwrap(callbackInfo.This().As<Object>());
    auto cb = callbackData->callback;
    if (instance) (instance->*cb)(callbackInfo);
    return nullptr;
  });
}

template <typename T>
inline napi_value InstanceWrap<T>::InstanceMethodCallbackWrapper(
    napi_env env, napi_callback_info info) {
  return details::WrapCallback([&] {
    CallbackInfo callbackInfo(env, info);
    InstanceMethodCallbackData* callbackData =
        reinterpret_cast<InstanceMethodCallbackData*>(callbackInfo.Data());
    callbackInfo.SetData(callbackData->data);
    T* instance = T::Unwrap(callbackInfo.This().As<Object>());
    auto cb = callbackData->callback;
    return instance ? (instance->*cb)(callbackInfo) : Napi::Value();
  });
}

template <typename T>
inline napi_value InstanceWrap<T>::InstanceGetterCallbackWrapper(
    napi_env env, napi_callback_info info) {
  return details::WrapCallback([&] {
    CallbackInfo callbackInfo(env, info);
    InstanceAccessorCallbackData* callbackData =
        reinterpret_cast<InstanceAccessorCallbackData*>(callbackInfo.Data());
    callbackInfo.SetData(callbackData->data);
    T* instance = T::Unwrap(callbackInfo.This().As<Object>());
    auto cb = callbackData->getterCallback;
    return instance ? (instance->*cb)(callbackInfo) : Napi::Value();
  });
}

template <typename T>
inline napi_value InstanceWrap<T>::InstanceSetterCallbackWrapper(
    napi_env env, napi_callback_info info) {
  return details::WrapCallback([&] {
    CallbackInfo callbackInfo(env, info);
    InstanceAccessorCallbackData* callbackData =
        reinterpret_cast<InstanceAccessorCallbackData*>(callbackInfo.Data());
    callbackInfo.SetData(callbackData->data);
    T* instance = T::Unwrap(callbackInfo.This().As<Object>());
    auto cb = callbackData->setterCallback;
    if (instance) (instance->*cb)(callbackInfo, callbackInfo[0]);
    return nullptr;
  });
}

template <typename T>
template <typename InstanceWrap<T>::InstanceSetterCallback method>
inline napi_value InstanceWrap<T>::WrappedMethod(
    napi_env env, napi_callback_info info) NAPI_NOEXCEPT {
  return details::WrapCallback([&] {
    const CallbackInfo cbInfo(env, info);
    T* instance = T::Unwrap(cbInfo.This().As<Object>());
    if (instance) (instance->*method)(cbInfo, cbInfo[0]);
    return nullptr;
  });
}

////////////////////////////////////////////////////////////////////////////////
// ObjectWrap<T> class
////////////////////////////////////////////////////////////////////////////////

template <typename T>
inline ObjectWrap<T>::ObjectWrap(const Napi::CallbackInfo& callbackInfo) {
  napi_env env = callbackInfo.Env();
  napi_value wrapper = callbackInfo.This();
  napi_status status;
  napi_ref ref;
  T* instance = static_cast<T*>(this);
  status = napi_wrap(env, wrapper, instance, FinalizeCallback, nullptr, &ref);
  NAPI_THROW_IF_FAILED_VOID(env, status);

  Reference<Object>* instanceRef = instance;
  *instanceRef = Reference<Object>(env, ref);
}

template <typename T>
inline ObjectWrap<T>::~ObjectWrap() {
  // If the JS object still exists at this point, remove the finalizer added
  // through `napi_wrap()`.
  if (!IsEmpty()) {
    Object object = Value();
    // It is not valid to call `napi_remove_wrap()` with an empty `object`.
    // This happens e.g. during garbage collection.
    if (!object.IsEmpty() && _construction_failed) {
      napi_remove_wrap(Env(), object, nullptr);
    }
  }
}

template <typename T>
inline T* ObjectWrap<T>::Unwrap(Object wrapper) {
  void* unwrapped;
  napi_status status = napi_unwrap(wrapper.Env(), wrapper, &unwrapped);
  NAPI_THROW_IF_FAILED(wrapper.Env(), status, nullptr);
  return static_cast<T*>(unwrapped);
}

template <typename T>
inline Function ObjectWrap<T>::DefineClass(
    Napi::Env env,
    const char* utf8name,
    const size_t props_count,
    const napi_property_descriptor* descriptors,
    void* data) {
  napi_status status;
  std::vector<napi_property_descriptor> props(props_count);

  // We copy the descriptors to a local array because before defining the class
  // we must replace static method property descriptors with value property
  // descriptors such that the value is a function-valued `napi_value` created
  // with `CreateFunction()`.
  //
  // This replacement could be made for instance methods as well, but V8 aborts
  // if we do that, because it expects methods defined on the prototype template
  // to have `FunctionTemplate`s.
  for (size_t index = 0; index < props_count; index++) {
    props[index] = descriptors[index];
    napi_property_descriptor* prop = &props[index];
    if (prop->method == T::StaticMethodCallbackWrapper) {
      status =
          CreateFunction(env,
                         utf8name,
                         prop->method,
                         static_cast<StaticMethodCallbackData*>(prop->data),
                         &(prop->value));
      NAPI_THROW_IF_FAILED(env, status, Function());
      prop->method = nullptr;
      prop->data = nullptr;
    } else if (prop->method == T::StaticVoidMethodCallbackWrapper) {
      status =
          CreateFunction(env,
                         utf8name,
                         prop->method,
                         static_cast<StaticVoidMethodCallbackData*>(prop->data),
                         &(prop->value));
      NAPI_THROW_IF_FAILED(env, status, Function());
      prop->method = nullptr;
      prop->data = nullptr;
    }
  }

  napi_value value;
  status = napi_define_class(env,
                             utf8name,
                             NAPI_AUTO_LENGTH,
                             T::ConstructorCallbackWrapper,
                             data,
                             props_count,
                             props.data(),
                             &value);
  NAPI_THROW_IF_FAILED(env, status, Function());

  // After defining the class we iterate once more over the property descriptors
  // and attach the data associated with accessors and instance methods to the
  // newly created JavaScript class.
  for (size_t idx = 0; idx < props_count; idx++) {
    const napi_property_descriptor* prop = &props[idx];

    if (prop->getter == T::StaticGetterCallbackWrapper ||
        prop->setter == T::StaticSetterCallbackWrapper) {
      status = Napi::details::AttachData(
          env, value, static_cast<StaticAccessorCallbackData*>(prop->data));
      NAPI_THROW_IF_FAILED(env, status, Function());
    } else {
      // InstanceWrap<T>::AttachPropData is responsible for attaching the data
      // of instance methods and accessors.
      T::AttachPropData(env, value, prop);
    }
  }

  return Function(env, value);
}

template <typename T>
inline Function ObjectWrap<T>::DefineClass(
    Napi::Env env,
    const char* utf8name,
    const std::initializer_list<ClassPropertyDescriptor<T>>& properties,
    void* data) {
  return DefineClass(
      env,
      utf8name,
      properties.size(),
      reinterpret_cast<const napi_property_descriptor*>(properties.begin()),
      data);
}

template <typename T>
inline Function ObjectWrap<T>::DefineClass(
    Napi::Env env,
    const char* utf8name,
    const std::vector<ClassPropertyDescriptor<T>>& properties,
    void* data) {
  return DefineClass(
      env,
      utf8name,
      properties.size(),
      reinterpret_cast<const napi_property_descriptor*>(properties.data()),
      data);
}

template <typename T>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticMethod(
    const char* utf8name,
    StaticVoidMethodCallback method,
    napi_property_attributes attributes,
    void* data) {
  StaticVoidMethodCallbackData* callbackData =
      new StaticVoidMethodCallbackData({method, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.method = T::StaticVoidMethodCallbackWrapper;
  desc.data = callbackData;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticMethod(
    const char* utf8name,
    StaticMethodCallback method,
    napi_property_attributes attributes,
    void* data) {
  StaticMethodCallbackData* callbackData =
      new StaticMethodCallbackData({method, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.method = T::StaticMethodCallbackWrapper;
  desc.data = callbackData;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticMethod(
    Symbol name,
    StaticVoidMethodCallback method,
    napi_property_attributes attributes,
    void* data) {
  StaticVoidMethodCallbackData* callbackData =
      new StaticVoidMethodCallbackData({method, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.method = T::StaticVoidMethodCallbackWrapper;
  desc.data = callbackData;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticMethod(
    Symbol name,
    StaticMethodCallback method,
    napi_property_attributes attributes,
    void* data) {
  StaticMethodCallbackData* callbackData =
      new StaticMethodCallbackData({method, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.method = T::StaticMethodCallbackWrapper;
  desc.data = callbackData;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
template <typename ObjectWrap<T>::StaticVoidMethodCallback method>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticMethod(
    const char* utf8name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.method = details::TemplatedVoidCallback<method>;
  desc.data = data;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
template <typename ObjectWrap<T>::StaticVoidMethodCallback method>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticMethod(
    Symbol name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.method = details::TemplatedVoidCallback<method>;
  desc.data = data;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
template <typename ObjectWrap<T>::StaticMethodCallback method>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticMethod(
    const char* utf8name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.method = details::TemplatedCallback<method>;
  desc.data = data;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
template <typename ObjectWrap<T>::StaticMethodCallback method>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticMethod(
    Symbol name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.method = details::TemplatedCallback<method>;
  desc.data = data;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticAccessor(
    const char* utf8name,
    StaticGetterCallback getter,
    StaticSetterCallback setter,
    napi_property_attributes attributes,
    void* data) {
  StaticAccessorCallbackData* callbackData =
      new StaticAccessorCallbackData({getter, setter, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.getter = getter != nullptr ? T::StaticGetterCallbackWrapper : nullptr;
  desc.setter = setter != nullptr ? T::StaticSetterCallbackWrapper : nullptr;
  desc.data = callbackData;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticAccessor(
    Symbol name,
    StaticGetterCallback getter,
    StaticSetterCallback setter,
    napi_property_attributes attributes,
    void* data) {
  StaticAccessorCallbackData* callbackData =
      new StaticAccessorCallbackData({getter, setter, data});

  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.getter = getter != nullptr ? T::StaticGetterCallbackWrapper : nullptr;
  desc.setter = setter != nullptr ? T::StaticSetterCallbackWrapper : nullptr;
  desc.data = callbackData;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
template <typename ObjectWrap<T>::StaticGetterCallback getter,
          typename ObjectWrap<T>::StaticSetterCallback setter>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticAccessor(
    const char* utf8name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.getter = details::TemplatedCallback<getter>;
  desc.setter = This::WrapStaticSetter(This::StaticSetterTag<setter>());
  desc.data = data;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
template <typename ObjectWrap<T>::StaticGetterCallback getter,
          typename ObjectWrap<T>::StaticSetterCallback setter>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticAccessor(
    Symbol name, napi_property_attributes attributes, void* data) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.getter = details::TemplatedCallback<getter>;
  desc.setter = This::WrapStaticSetter(This::StaticSetterTag<setter>());
  desc.data = data;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticValue(
    const char* utf8name,
    Napi::Value value,
    napi_property_attributes attributes) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.utf8name = utf8name;
  desc.value = value;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
inline ClassPropertyDescriptor<T> ObjectWrap<T>::StaticValue(
    Symbol name, Napi::Value value, napi_property_attributes attributes) {
  napi_property_descriptor desc = napi_property_descriptor();
  desc.name = name;
  desc.value = value;
  desc.attributes =
      static_cast<napi_property_attributes>(attributes | napi_static);
  return desc;
}

template <typename T>
inline Value ObjectWrap<T>::OnCalledAsFunction(
    const Napi::CallbackInfo& callbackInfo) {
  NAPI_THROW(
      TypeError::New(callbackInfo.Env(),
                     "Class constructors cannot be invoked without 'new'"),
      Napi::Value());
}

template <typename T>
inline void ObjectWrap<T>::Finalize(Napi::Env /*env*/) {}

template <typename T>
inline napi_value ObjectWrap<T>::ConstructorCallbackWrapper(
    napi_env env, napi_callback_info info) {
  napi_value new_target;
  napi_status status = napi_get_new_target(env, info, &new_target);
  if (status != napi_ok) return nullptr;

  bool isConstructCall = (new_target != nullptr);
  if (!isConstructCall) {
    return details::WrapCallback(
        [&] { return T::OnCalledAsFunction(CallbackInfo(env, info)); });
  }

  napi_value wrapper = details::WrapCallback([&] {
    CallbackInfo callbackInfo(env, info);
    T* instance = new T(callbackInfo);
#ifdef NAPI_CPP_EXCEPTIONS
    instance->_construction_failed = false;
#else
    if (callbackInfo.Env().IsExceptionPending()) {
      // We need to clear the exception so that removing the wrap might work.
      Error e = callbackInfo.Env().GetAndClearPendingException();
      delete instance;
      e.ThrowAsJavaScriptException();
    } else {
      instance->_construction_failed = false;
    }
#endif  // NAPI_CPP_EXCEPTIONS
    return callbackInfo.This();
  });

  return wrapper;
}

template <typename T>
inline napi_value ObjectWrap<T>::StaticVoidMethodCallbackWrapper(
    napi_env env, napi_callback_info info) {
  return details::WrapCallback([&] {
    CallbackInfo callbackInfo(env, info);
    StaticVoidMethodCallbackData* callbackData =
        reinterpret_cast<StaticVoidMethodCallbackData*>(callbackInfo.Data());
    callbackInfo.SetData(callbackData->data);
    callbackData->callback(callbackInfo);
    return nullptr;
  });
}

template <typename T>
inline napi_value ObjectWrap<T>::StaticMethodCallbackWrapper(
    napi_env env, napi_callback_info info) {
  return details::WrapCallback([&] {
    CallbackInfo callbackInfo(env, info);
    StaticMethodCallbackData* callbackData =
        reinterpret_cast<StaticMethodCallbackData*>(callbackInfo.Data());
    callbackInfo.SetData(callbackData->data);
    return callbackData->callback(callbackInfo);
  });
}

template <typename T>
inline napi_value ObjectWrap<T>::StaticGetterCallbackWrapper(
    napi_env env, napi_callback_info info) {
  return details::WrapCallback([&] {
    CallbackInfo callbackInfo(env, info);
    StaticAccessorCallbackData* callbackData =
        reinterpret_cast<StaticAccessorCallbackData*>(callbackInfo.Data());
    callbackInfo.SetData(callbackData->data);
    return callbackData->getterCallback(callbackInfo);
  });
}

template <typename T>
inline napi_value ObjectWrap<T>::StaticSetterCallbackWrapper(
    napi_env env, napi_callback_info info) {
  return details::WrapCallback([&] {
    CallbackInfo callbackInfo(env, info);
    StaticAccessorCallbackData* callbackData =
        reinterpret_cast<StaticAccessorCallbackData*>(callbackInfo.Data());
    callbackInfo.SetData(callbackData->data);
    callbackData->setterCallback(callbackInfo, callbackInfo[0]);
    return nullptr;
  });
}

template <typename T>
inline void ObjectWrap<T>::FinalizeCallback(napi_env env,
                                            void* data,
                                            void* /*hint*/) {
  HandleScope scope(env);
  T* instance = static_cast<T*>(data);
  instance->Finalize(Napi::Env(env));
  delete instance;
}

template <typename T>
template <typename ObjectWrap<T>::StaticSetterCallback method>
inline napi_value ObjectWrap<T>::WrappedMethod(
    napi_env env, napi_callback_info info) NAPI_NOEXCEPT {
  return details::WrapCallback([&] {
    const CallbackInfo cbInfo(env, info);
    method(cbInfo, cbInfo[0]);
    return nullptr;
  });
}

////////////////////////////////////////////////////////////////////////////////
// HandleScope class
////////////////////////////////////////////////////////////////////////////////

inline HandleScope::HandleScope(napi_env env, napi_handle_scope scope)
    : _env(env), _scope(scope) {}

inline HandleScope::HandleScope(Napi::Env env) : _env(env) {
  napi_status status = napi_open_handle_scope(_env, &_scope);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline HandleScope::~HandleScope() {
  napi_status status = napi_close_handle_scope(_env, _scope);
  NAPI_FATAL_IF_FAILED(
      status, "HandleScope::~HandleScope", "napi_close_handle_scope");
}

inline HandleScope::operator napi_handle_scope() const {
  return _scope;
}

inline Napi::Env HandleScope::Env() const {
  return Napi::Env(_env);
}

////////////////////////////////////////////////////////////////////////////////
// EscapableHandleScope class
////////////////////////////////////////////////////////////////////////////////

inline EscapableHandleScope::EscapableHandleScope(
    napi_env env, napi_escapable_handle_scope scope)
    : _env(env), _scope(scope) {}

inline EscapableHandleScope::EscapableHandleScope(Napi::Env env) : _env(env) {
  napi_status status = napi_open_escapable_handle_scope(_env, &_scope);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline EscapableHandleScope::~EscapableHandleScope() {
  napi_status status = napi_close_escapable_handle_scope(_env, _scope);
  NAPI_FATAL_IF_FAILED(status,
                       "EscapableHandleScope::~EscapableHandleScope",
                       "napi_close_escapable_handle_scope");
}

inline EscapableHandleScope::operator napi_escapable_handle_scope() const {
  return _scope;
}

inline Napi::Env EscapableHandleScope::Env() const {
  return Napi::Env(_env);
}

inline Value EscapableHandleScope::Escape(napi_value escapee) {
  napi_value result;
  napi_status status = napi_escape_handle(_env, _scope, escapee, &result);
  NAPI_THROW_IF_FAILED(_env, status, Value());
  return Value(_env, result);
}

#if (NAPI_VERSION > 2)
////////////////////////////////////////////////////////////////////////////////
// CallbackScope class
////////////////////////////////////////////////////////////////////////////////

inline CallbackScope::CallbackScope(napi_env env, napi_callback_scope scope)
    : _env(env), _scope(scope) {}

inline CallbackScope::CallbackScope(napi_env env, napi_async_context context)
    : _env(env) {
  napi_status status =
      napi_open_callback_scope(_env, Object::New(env), context, &_scope);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline CallbackScope::~CallbackScope() {
  napi_status status = napi_close_callback_scope(_env, _scope);
  NAPI_FATAL_IF_FAILED(
      status, "CallbackScope::~CallbackScope", "napi_close_callback_scope");
}

inline CallbackScope::operator napi_callback_scope() const {
  return _scope;
}

inline Napi::Env CallbackScope::Env() const {
  return Napi::Env(_env);
}
#endif

////////////////////////////////////////////////////////////////////////////////
// AsyncContext class
////////////////////////////////////////////////////////////////////////////////

inline AsyncContext::AsyncContext(napi_env env, const char* resource_name)
    : AsyncContext(env, resource_name, Object::New(env)) {}

inline AsyncContext::AsyncContext(napi_env env,
                                  const char* resource_name,
                                  const Object& resource)
    : _env(env), _context(nullptr) {
  napi_value resource_id;
  napi_status status = napi_create_string_utf8(
      _env, resource_name, NAPI_AUTO_LENGTH, &resource_id);
  NAPI_THROW_IF_FAILED_VOID(_env, status);

  status = napi_async_init(_env, resource, resource_id, &_context);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline AsyncContext::~AsyncContext() {
  if (_context != nullptr) {
    napi_async_destroy(_env, _context);
    _context = nullptr;
  }
}

inline AsyncContext::AsyncContext(AsyncContext&& other) {
  _env = other._env;
  other._env = nullptr;
  _context = other._context;
  other._context = nullptr;
}

inline AsyncContext& AsyncContext::operator=(AsyncContext&& other) {
  _env = other._env;
  other._env = nullptr;
  _context = other._context;
  other._context = nullptr;
  return *this;
}

inline AsyncContext::operator napi_async_context() const {
  return _context;
}

inline Napi::Env AsyncContext::Env() const {
  return Napi::Env(_env);
}

////////////////////////////////////////////////////////////////////////////////
// AsyncWorker class
////////////////////////////////////////////////////////////////////////////////

#if NAPI_HAS_THREADS

inline AsyncWorker::AsyncWorker(const Function& callback)
    : AsyncWorker(callback, "generic") {}

inline AsyncWorker::AsyncWorker(const Function& callback,
                                const char* resource_name)
    : AsyncWorker(callback, resource_name, Object::New(callback.Env())) {}

inline AsyncWorker::AsyncWorker(const Function& callback,
                                const char* resource_name,
                                const Object& resource)
    : AsyncWorker(
          Object::New(callback.Env()), callback, resource_name, resource) {}

inline AsyncWorker::AsyncWorker(const Object& receiver,
                                const Function& callback)
    : AsyncWorker(receiver, callback, "generic") {}

inline AsyncWorker::AsyncWorker(const Object& receiver,
                                const Function& callback,
                                const char* resource_name)
    : AsyncWorker(
          receiver, callback, resource_name, Object::New(callback.Env())) {}

inline AsyncWorker::AsyncWorker(const Object& receiver,
                                const Function& callback,
                                const char* resource_name,
                                const Object& resource)
    : _env(callback.Env()),
      _receiver(Napi::Persistent(receiver)),
      _callback(Napi::Persistent(callback)),
      _suppress_destruct(false) {
  napi_value resource_id;
  napi_status status = napi_create_string_latin1(
      _env, resource_name, NAPI_AUTO_LENGTH, &resource_id);
  NAPI_THROW_IF_FAILED_VOID(_env, status);

  status = napi_create_async_work(_env,
                                  resource,
                                  resource_id,
                                  OnAsyncWorkExecute,
                                  OnAsyncWorkComplete,
                                  this,
                                  &_work);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline AsyncWorker::AsyncWorker(Napi::Env env) : AsyncWorker(env, "generic") {}

inline AsyncWorker::AsyncWorker(Napi::Env env, const char* resource_name)
    : AsyncWorker(env, resource_name, Object::New(env)) {}

inline AsyncWorker::AsyncWorker(Napi::Env env,
                                const char* resource_name,
                                const Object& resource)
    : _env(env), _receiver(), _callback(), _suppress_destruct(false) {
  napi_value resource_id;
  napi_status status = napi_create_string_latin1(
      _env, resource_name, NAPI_AUTO_LENGTH, &resource_id);
  NAPI_THROW_IF_FAILED_VOID(_env, status);

  status = napi_create_async_work(_env,
                                  resource,
                                  resource_id,
                                  OnAsyncWorkExecute,
                                  OnAsyncWorkComplete,
                                  this,
                                  &_work);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline AsyncWorker::~AsyncWorker() {
  if (_work != nullptr) {
    napi_delete_async_work(_env, _work);
    _work = nullptr;
  }
}

inline void AsyncWorker::Destroy() {
  delete this;
}

inline AsyncWorker::operator napi_async_work() const {
  return _work;
}

inline Napi::Env AsyncWorker::Env() const {
  return Napi::Env(_env);
}

inline void AsyncWorker::Queue() {
  napi_status status = napi_queue_async_work(_env, _work);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline void AsyncWorker::Cancel() {
  napi_status status = napi_cancel_async_work(_env, _work);
  NAPI_THROW_IF_FAILED_VOID(_env, status);
}

inline ObjectReference& AsyncWorker::Receiver() {
  return _receiver;
}

inline FunctionReference& AsyncWorker::Callback() {
  return _callback;
}

inline void AsyncWorker::SuppressDestruct() {
  _suppress_destruct = true;
}

inline void AsyncWorker::OnOK() {
  if (!_callback.IsEmpty()) {
    _callback.Call(_receiver.Value(), GetResult(_callback.Env()));
  }
}

inline void AsyncWorker::OnError(const Error& e) {
  if (!_callback.IsEmpty()) {
    _callback.Call(_receiver.Value(),
                   std::initializer_list<napi_value>{e.Value()});
  }
}

inline void AsyncWorker::SetError(const std::string& error) {
  _error = error;
}

inline std::vector<napi_value> AsyncWorker::GetResult(Napi::Env /*env*/) {
  return {};
}
// The OnAsyncWorkExecute method receives an napi_env argument. However, do NOT
// use it within this method, as it does not run on the JavaScript thread and
// must not run any method that would cause JavaScript to run. In practice,
// this means that almost any use of napi_env will be incorrect.
inline void AsyncWorker::OnAsyncWorkExecute(napi_env env, void* asyncworker) {
  AsyncWorker* self = static_cast<AsyncWorker*>(asyncworker);
  self->OnExecute(env);
}
// The OnExecute method receives an napi_env argument. However, do NOT
// use it within this method, as it does not run on the JavaScript thread and
// must not run any method that would cause JavaScript to run. In practice,
// this means that almost any use of napi_env will be incorrect.
inline void AsyncWorker::OnExecute(Napi::Env /*DO_NOT_USE*/) {
#ifdef NAPI_CPP_EXCEPTIONS
  try {
    Execute();
  } catch (const std::exception& e) {
    SetError(e.what());
  }
#else   // NAPI_CPP_EXCEPTIONS
  Execute();
#endif  // NAPI_CPP_EXCEPTIONS
}

inline void AsyncWorker::OnAsyncWorkComplete(napi_env env,
                                             napi_status status,
                                             void* asyncworker) {
  AsyncWorker* self = static_cast<AsyncWorker*>(asyncworker);
  self->OnWorkComplete(env, status);
}
inline void AsyncWorker::OnWorkComplete(Napi::Env /*env*/, napi_status status) {
  if (status != napi_cancelled) {
    HandleScope scope(_env);
    details::WrapCallback([&] {
      if (_error.size() == 0) {
        OnOK();
      } else {
        OnError(Error::New(_env, _error));
      }
      return nullptr;
    });
  }
  if (!_suppress_destruct) {
    Destroy();
  }
}

#endif  // NAPI_HAS_THREADS

#if (NAPI_VERSION > 3 && NAPI_HAS_THREADS)
////////////////////////////////////////////////////////////////////////////////
// TypedThreadSafeFunction<ContextType,DataType,CallJs> class
////////////////////////////////////////////////////////////////////////////////

// Starting with NAPI 5, the JavaScript function `func` parameter of
// `napi_create_threadsafe_function` is optional.
#if NAPI_VERSION > 4
// static, with Callback [missing] Resource [missing] Finalizer [missing]
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
template <typename ResourceString>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>
TypedThreadSafeFunction<ContextType, DataType, CallJs>::New(
    napi_env env,
    ResourceString resourceName,
    size_t maxQueueSize,
    size_t initialThreadCount,
    ContextType* context) {
  TypedThreadSafeFunction<ContextType, DataType, CallJs> tsfn;

  napi_status status =
      napi_create_threadsafe_function(env,
                                      nullptr,
                                      nullptr,
                                      String::From(env, resourceName),
                                      maxQueueSize,
                                      initialThreadCount,
                                      nullptr,
                                      nullptr,
                                      context,
                                      CallJsInternal,
                                      &tsfn._tsfn);
  if (status != napi_ok) {
    NAPI_THROW_IF_FAILED(
        env, status, TypedThreadSafeFunction<ContextType, DataType, CallJs>());
  }

  return tsfn;
}

// static, with Callback [missing] Resource [passed] Finalizer [missing]
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
template <typename ResourceString>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>
TypedThreadSafeFunction<ContextType, DataType, CallJs>::New(
    napi_env env,
    const Object& resource,
    ResourceString resourceName,
    size_t maxQueueSize,
    size_t initialThreadCount,
    ContextType* context) {
  TypedThreadSafeFunction<ContextType, DataType, CallJs> tsfn;

  napi_status status =
      napi_create_threadsafe_function(env,
                                      nullptr,
                                      resource,
                                      String::From(env, resourceName),
                                      maxQueueSize,
                                      initialThreadCount,
                                      nullptr,
                                      nullptr,
                                      context,
                                      CallJsInternal,
                                      &tsfn._tsfn);
  if (status != napi_ok) {
    NAPI_THROW_IF_FAILED(
        env, status, TypedThreadSafeFunction<ContextType, DataType, CallJs>());
  }

  return tsfn;
}

// static, with Callback [missing] Resource [missing] Finalizer [passed]
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
template <typename ResourceString,
          typename Finalizer,
          typename FinalizerDataType>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>
TypedThreadSafeFunction<ContextType, DataType, CallJs>::New(
    napi_env env,
    ResourceString resourceName,
    size_t maxQueueSize,
    size_t initialThreadCount,
    ContextType* context,
    Finalizer finalizeCallback,
    FinalizerDataType* data) {
  TypedThreadSafeFunction<ContextType, DataType, CallJs> tsfn;

  auto* finalizeData = new details::
      ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>(
          {data, finalizeCallback});
  napi_status status = napi_create_threadsafe_function(
      env,
      nullptr,
      nullptr,
      String::From(env, resourceName),
      maxQueueSize,
      initialThreadCount,
      finalizeData,
      details::ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>::
          FinalizeFinalizeWrapperWithDataAndContext,
      context,
      CallJsInternal,
      &tsfn._tsfn);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(
        env, status, TypedThreadSafeFunction<ContextType, DataType, CallJs>());
  }

  return tsfn;
}

// static, with Callback [missing] Resource [passed] Finalizer [passed]
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
template <typename ResourceString,
          typename Finalizer,
          typename FinalizerDataType>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>
TypedThreadSafeFunction<ContextType, DataType, CallJs>::New(
    napi_env env,
    const Object& resource,
    ResourceString resourceName,
    size_t maxQueueSize,
    size_t initialThreadCount,
    ContextType* context,
    Finalizer finalizeCallback,
    FinalizerDataType* data) {
  TypedThreadSafeFunction<ContextType, DataType, CallJs> tsfn;

  auto* finalizeData = new details::
      ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>(
          {data, finalizeCallback});
  napi_status status = napi_create_threadsafe_function(
      env,
      nullptr,
      resource,
      String::From(env, resourceName),
      maxQueueSize,
      initialThreadCount,
      finalizeData,
      details::ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>::
          FinalizeFinalizeWrapperWithDataAndContext,
      context,
      CallJsInternal,
      &tsfn._tsfn);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(
        env, status, TypedThreadSafeFunction<ContextType, DataType, CallJs>());
  }

  return tsfn;
}
#endif

// static, with Callback [passed] Resource [missing] Finalizer [missing]
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
template <typename ResourceString>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>
TypedThreadSafeFunction<ContextType, DataType, CallJs>::New(
    napi_env env,
    const Function& callback,
    ResourceString resourceName,
    size_t maxQueueSize,
    size_t initialThreadCount,
    ContextType* context) {
  TypedThreadSafeFunction<ContextType, DataType, CallJs> tsfn;

  napi_status status =
      napi_create_threadsafe_function(env,
                                      callback,
                                      nullptr,
                                      String::From(env, resourceName),
                                      maxQueueSize,
                                      initialThreadCount,
                                      nullptr,
                                      nullptr,
                                      context,
                                      CallJsInternal,
                                      &tsfn._tsfn);
  if (status != napi_ok) {
    NAPI_THROW_IF_FAILED(
        env, status, TypedThreadSafeFunction<ContextType, DataType, CallJs>());
  }

  return tsfn;
}

// static, with Callback [passed] Resource [passed] Finalizer [missing]
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
template <typename ResourceString>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>
TypedThreadSafeFunction<ContextType, DataType, CallJs>::New(
    napi_env env,
    const Function& callback,
    const Object& resource,
    ResourceString resourceName,
    size_t maxQueueSize,
    size_t initialThreadCount,
    ContextType* context) {
  TypedThreadSafeFunction<ContextType, DataType, CallJs> tsfn;

  napi_status status =
      napi_create_threadsafe_function(env,
                                      callback,
                                      resource,
                                      String::From(env, resourceName),
                                      maxQueueSize,
                                      initialThreadCount,
                                      nullptr,
                                      nullptr,
                                      context,
                                      CallJsInternal,
                                      &tsfn._tsfn);
  if (status != napi_ok) {
    NAPI_THROW_IF_FAILED(
        env, status, TypedThreadSafeFunction<ContextType, DataType, CallJs>());
  }

  return tsfn;
}

// static, with Callback [passed] Resource [missing] Finalizer [passed]
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
template <typename ResourceString,
          typename Finalizer,
          typename FinalizerDataType>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>
TypedThreadSafeFunction<ContextType, DataType, CallJs>::New(
    napi_env env,
    const Function& callback,
    ResourceString resourceName,
    size_t maxQueueSize,
    size_t initialThreadCount,
    ContextType* context,
    Finalizer finalizeCallback,
    FinalizerDataType* data) {
  TypedThreadSafeFunction<ContextType, DataType, CallJs> tsfn;

  auto* finalizeData = new details::
      ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>(
          {data, finalizeCallback});
  napi_status status = napi_create_threadsafe_function(
      env,
      callback,
      nullptr,
      String::From(env, resourceName),
      maxQueueSize,
      initialThreadCount,
      finalizeData,
      details::ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>::
          FinalizeFinalizeWrapperWithDataAndContext,
      context,
      CallJsInternal,
      &tsfn._tsfn);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(
        env, status, TypedThreadSafeFunction<ContextType, DataType, CallJs>());
  }

  return tsfn;
}

// static, with: Callback [passed] Resource [passed] Finalizer [passed]
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
template <typename CallbackType,
          typename ResourceString,
          typename Finalizer,
          typename FinalizerDataType>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>
TypedThreadSafeFunction<ContextType, DataType, CallJs>::New(
    napi_env env,
    CallbackType callback,
    const Object& resource,
    ResourceString resourceName,
    size_t maxQueueSize,
    size_t initialThreadCount,
    ContextType* context,
    Finalizer finalizeCallback,
    FinalizerDataType* data) {
  TypedThreadSafeFunction<ContextType, DataType, CallJs> tsfn;

  auto* finalizeData = new details::
      ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>(
          {data, finalizeCallback});
  napi_status status = napi_create_threadsafe_function(
      env,
      details::DefaultCallbackWrapper<
          CallbackType,
          TypedThreadSafeFunction<ContextType, DataType, CallJs>>(env,
                                                                  callback),
      resource,
      String::From(env, resourceName),
      maxQueueSize,
      initialThreadCount,
      finalizeData,
      details::ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>::
          FinalizeFinalizeWrapperWithDataAndContext,
      context,
      CallJsInternal,
      &tsfn._tsfn);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(
        env, status, TypedThreadSafeFunction<ContextType, DataType, CallJs>());
  }

  return tsfn;
}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>::
    TypedThreadSafeFunction()
    : _tsfn() {}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>::
    TypedThreadSafeFunction(napi_threadsafe_function tsfn)
    : _tsfn(tsfn) {}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline TypedThreadSafeFunction<ContextType, DataType, CallJs>::
operator napi_threadsafe_function() const {
  return _tsfn;
}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline napi_status
TypedThreadSafeFunction<ContextType, DataType, CallJs>::BlockingCall(
    DataType* data) const {
  return napi_call_threadsafe_function(_tsfn, data, napi_tsfn_blocking);
}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline napi_status
TypedThreadSafeFunction<ContextType, DataType, CallJs>::NonBlockingCall(
    DataType* data) const {
  return napi_call_threadsafe_function(_tsfn, data, napi_tsfn_nonblocking);
}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline void TypedThreadSafeFunction<ContextType, DataType, CallJs>::Ref(
    napi_env env) const {
  if (_tsfn != nullptr) {
    napi_status status = napi_ref_threadsafe_function(env, _tsfn);
    NAPI_THROW_IF_FAILED_VOID(env, status);
  }
}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline void TypedThreadSafeFunction<ContextType, DataType, CallJs>::Unref(
    napi_env env) const {
  if (_tsfn != nullptr) {
    napi_status status = napi_unref_threadsafe_function(env, _tsfn);
    NAPI_THROW_IF_FAILED_VOID(env, status);
  }
}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline napi_status
TypedThreadSafeFunction<ContextType, DataType, CallJs>::Acquire() const {
  return napi_acquire_threadsafe_function(_tsfn);
}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline napi_status
TypedThreadSafeFunction<ContextType, DataType, CallJs>::Release() const {
  return napi_release_threadsafe_function(_tsfn, napi_tsfn_release);
}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline napi_status
TypedThreadSafeFunction<ContextType, DataType, CallJs>::Abort() const {
  return napi_release_threadsafe_function(_tsfn, napi_tsfn_abort);
}

template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
inline ContextType*
TypedThreadSafeFunction<ContextType, DataType, CallJs>::GetContext() const {
  void* context;
  napi_status status = napi_get_threadsafe_function_context(_tsfn, &context);
  NAPI_FATAL_IF_FAILED(status,
                       "TypedThreadSafeFunction::GetContext",
                       "napi_get_threadsafe_function_context");
  return static_cast<ContextType*>(context);
}

// static
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
void TypedThreadSafeFunction<ContextType, DataType, CallJs>::CallJsInternal(
    napi_env env, napi_value jsCallback, void* context, void* data) {
  details::CallJsWrapper<ContextType, DataType, decltype(CallJs), CallJs>(
      env, jsCallback, context, data);
}

#if NAPI_VERSION == 4
// static
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
Napi::Function
TypedThreadSafeFunction<ContextType, DataType, CallJs>::EmptyFunctionFactory(
    Napi::Env env) {
  return Napi::Function::New(env, [](const CallbackInfo& cb) {});
}

// static
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
Napi::Function
TypedThreadSafeFunction<ContextType, DataType, CallJs>::FunctionOrEmpty(
    Napi::Env env, Napi::Function& callback) {
  if (callback.IsEmpty()) {
    return EmptyFunctionFactory(env);
  }
  return callback;
}

#else
// static
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
std::nullptr_t
TypedThreadSafeFunction<ContextType, DataType, CallJs>::EmptyFunctionFactory(
    Napi::Env /*env*/) {
  return nullptr;
}

// static
template <typename ContextType,
          typename DataType,
          void (*CallJs)(Napi::Env, Napi::Function, ContextType*, DataType*)>
Napi::Function
TypedThreadSafeFunction<ContextType, DataType, CallJs>::FunctionOrEmpty(
    Napi::Env /*env*/, Napi::Function& callback) {
  return callback;
}

#endif

////////////////////////////////////////////////////////////////////////////////
// ThreadSafeFunction class
////////////////////////////////////////////////////////////////////////////////

// static
template <typename ResourceString>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount) {
  return New(
      env, callback, Object(), resourceName, maxQueueSize, initialThreadCount);
}

// static
template <typename ResourceString, typename ContextType>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  ContextType* context) {
  return New(env,
             callback,
             Object(),
             resourceName,
             maxQueueSize,
             initialThreadCount,
             context);
}

// static
template <typename ResourceString, typename Finalizer>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  Finalizer finalizeCallback) {
  return New(env,
             callback,
             Object(),
             resourceName,
             maxQueueSize,
             initialThreadCount,
             finalizeCallback);
}

// static
template <typename ResourceString,
          typename Finalizer,
          typename FinalizerDataType>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  Finalizer finalizeCallback,
                                                  FinalizerDataType* data) {
  return New(env,
             callback,
             Object(),
             resourceName,
             maxQueueSize,
             initialThreadCount,
             finalizeCallback,
             data);
}

// static
template <typename ResourceString, typename ContextType, typename Finalizer>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  ContextType* context,
                                                  Finalizer finalizeCallback) {
  return New(env,
             callback,
             Object(),
             resourceName,
             maxQueueSize,
             initialThreadCount,
             context,
             finalizeCallback);
}

// static
template <typename ResourceString,
          typename ContextType,
          typename Finalizer,
          typename FinalizerDataType>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  ContextType* context,
                                                  Finalizer finalizeCallback,
                                                  FinalizerDataType* data) {
  return New(env,
             callback,
             Object(),
             resourceName,
             maxQueueSize,
             initialThreadCount,
             context,
             finalizeCallback,
             data);
}

// static
template <typename ResourceString>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  const Object& resource,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount) {
  return New(env,
             callback,
             resource,
             resourceName,
             maxQueueSize,
             initialThreadCount,
             static_cast<void*>(nullptr) /* context */);
}

// static
template <typename ResourceString, typename ContextType>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  const Object& resource,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  ContextType* context) {
  return New(env,
             callback,
             resource,
             resourceName,
             maxQueueSize,
             initialThreadCount,
             context,
             [](Env, ContextType*) {} /* empty finalizer */);
}

// static
template <typename ResourceString, typename Finalizer>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  const Object& resource,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  Finalizer finalizeCallback) {
  return New(env,
             callback,
             resource,
             resourceName,
             maxQueueSize,
             initialThreadCount,
             static_cast<void*>(nullptr) /* context */,
             finalizeCallback,
             static_cast<void*>(nullptr) /* data */,
             details::ThreadSafeFinalize<void, Finalizer>::Wrapper);
}

// static
template <typename ResourceString,
          typename Finalizer,
          typename FinalizerDataType>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  const Object& resource,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  Finalizer finalizeCallback,
                                                  FinalizerDataType* data) {
  return New(env,
             callback,
             resource,
             resourceName,
             maxQueueSize,
             initialThreadCount,
             static_cast<void*>(nullptr) /* context */,
             finalizeCallback,
             data,
             details::ThreadSafeFinalize<void, Finalizer, FinalizerDataType>::
                 FinalizeWrapperWithData);
}

// static
template <typename ResourceString, typename ContextType, typename Finalizer>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  const Object& resource,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  ContextType* context,
                                                  Finalizer finalizeCallback) {
  return New(
      env,
      callback,
      resource,
      resourceName,
      maxQueueSize,
      initialThreadCount,
      context,
      finalizeCallback,
      static_cast<void*>(nullptr) /* data */,
      details::ThreadSafeFinalize<ContextType,
                                  Finalizer>::FinalizeWrapperWithContext);
}

// static
template <typename ResourceString,
          typename ContextType,
          typename Finalizer,
          typename FinalizerDataType>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  const Object& resource,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  ContextType* context,
                                                  Finalizer finalizeCallback,
                                                  FinalizerDataType* data) {
  return New(
      env,
      callback,
      resource,
      resourceName,
      maxQueueSize,
      initialThreadCount,
      context,
      finalizeCallback,
      data,
      details::ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>::
          FinalizeFinalizeWrapperWithDataAndContext);
}

inline ThreadSafeFunction::ThreadSafeFunction() : _tsfn() {}

inline ThreadSafeFunction::ThreadSafeFunction(napi_threadsafe_function tsfn)
    : _tsfn(tsfn) {}

inline ThreadSafeFunction::operator napi_threadsafe_function() const {
  return _tsfn;
}

inline napi_status ThreadSafeFunction::BlockingCall() const {
  return CallInternal(nullptr, napi_tsfn_blocking);
}

template <>
inline napi_status ThreadSafeFunction::BlockingCall(void* data) const {
  return napi_call_threadsafe_function(_tsfn, data, napi_tsfn_blocking);
}

template <typename Callback>
inline napi_status ThreadSafeFunction::BlockingCall(Callback callback) const {
  return CallInternal(new CallbackWrapper(callback), napi_tsfn_blocking);
}

template <typename DataType, typename Callback>
inline napi_status ThreadSafeFunction::BlockingCall(DataType* data,
                                                    Callback callback) const {
  auto wrapper = [data, callback](Env env, Function jsCallback) {
    callback(env, jsCallback, data);
  };
  return CallInternal(new CallbackWrapper(wrapper), napi_tsfn_blocking);
}

inline napi_status ThreadSafeFunction::NonBlockingCall() const {
  return CallInternal(nullptr, napi_tsfn_nonblocking);
}

template <>
inline napi_status ThreadSafeFunction::NonBlockingCall(void* data) const {
  return napi_call_threadsafe_function(_tsfn, data, napi_tsfn_nonblocking);
}

template <typename Callback>
inline napi_status ThreadSafeFunction::NonBlockingCall(
    Callback callback) const {
  return CallInternal(new CallbackWrapper(callback), napi_tsfn_nonblocking);
}

template <typename DataType, typename Callback>
inline napi_status ThreadSafeFunction::NonBlockingCall(
    DataType* data, Callback callback) const {
  auto wrapper = [data, callback](Env env, Function jsCallback) {
    callback(env, jsCallback, data);
  };
  return CallInternal(new CallbackWrapper(wrapper), napi_tsfn_nonblocking);
}

inline void ThreadSafeFunction::Ref(napi_env env) const {
  if (_tsfn != nullptr) {
    napi_status status = napi_ref_threadsafe_function(env, _tsfn);
    NAPI_THROW_IF_FAILED_VOID(env, status);
  }
}

inline void ThreadSafeFunction::Unref(napi_env env) const {
  if (_tsfn != nullptr) {
    napi_status status = napi_unref_threadsafe_function(env, _tsfn);
    NAPI_THROW_IF_FAILED_VOID(env, status);
  }
}

inline napi_status ThreadSafeFunction::Acquire() const {
  return napi_acquire_threadsafe_function(_tsfn);
}

inline napi_status ThreadSafeFunction::Release() const {
  return napi_release_threadsafe_function(_tsfn, napi_tsfn_release);
}

inline napi_status ThreadSafeFunction::Abort() const {
  return napi_release_threadsafe_function(_tsfn, napi_tsfn_abort);
}

inline ThreadSafeFunction::ConvertibleContext ThreadSafeFunction::GetContext()
    const {
  void* context;
  napi_status status = napi_get_threadsafe_function_context(_tsfn, &context);
  NAPI_FATAL_IF_FAILED(status,
                       "ThreadSafeFunction::GetContext",
                       "napi_get_threadsafe_function_context");
  return ConvertibleContext({context});
}

// static
template <typename ResourceString,
          typename ContextType,
          typename Finalizer,
          typename FinalizerDataType>
inline ThreadSafeFunction ThreadSafeFunction::New(napi_env env,
                                                  const Function& callback,
                                                  const Object& resource,
                                                  ResourceString resourceName,
                                                  size_t maxQueueSize,
                                                  size_t initialThreadCount,
                                                  ContextType* context,
                                                  Finalizer finalizeCallback,
                                                  FinalizerDataType* data,
                                                  napi_finalize wrapper) {
  static_assert(details::can_make_string<ResourceString>::value ||
                    std::is_convertible<ResourceString, napi_value>::value,
                "Resource name should be convertible to the string type");

  ThreadSafeFunction tsfn;
  auto* finalizeData = new details::
      ThreadSafeFinalize<ContextType, Finalizer, FinalizerDataType>(
          {data, finalizeCallback});
  napi_status status =
      napi_create_threadsafe_function(env,
                                      callback,
                                      resource,
                                      Value::From(env, resourceName),
                                      maxQueueSize,
                                      initialThreadCount,
                                      finalizeData,
                                      wrapper,
                                      context,
                                      CallJS,
                                      &tsfn._tsfn);
  if (status != napi_ok) {
    delete finalizeData;
    NAPI_THROW_IF_FAILED(env, status, ThreadSafeFunction());
  }

  return tsfn;
}

inline napi_status ThreadSafeFunction::CallInternal(
    CallbackWrapper* callbackWrapper,
    napi_threadsafe_function_call_mode mode) const {
  napi_status status =
      napi_call_threadsafe_function(_tsfn, callbackWrapper, mode);
  if (status != napi_ok && callbackWrapper != nullptr) {
    delete callbackWrapper;
  }

  return status;
}

// static
inline void ThreadSafeFunction::CallJS(napi_env env,
                                       napi_value jsCallback,
                                       void* /* context */,
                                       void* data) {
  if (env == nullptr && jsCallback == nullptr) {
    return;
  }

  details::WrapVoidCallback([&]() {
    if (data != nullptr) {
      auto* callbackWrapper = static_cast<CallbackWrapper*>(data);
      (*callbackWrapper)(env, Function(env, jsCallback));
      delete callbackWrapper;
    } else if (jsCallback != nullptr) {
      Function(env, jsCallback).Call({});
    }
  });
}

////////////////////////////////////////////////////////////////////////////////
// Async Progress Worker Base class
////////////////////////////////////////////////////////////////////////////////
template <typename DataType>
inline AsyncProgressWorkerBase<DataType>::AsyncProgressWorkerBase(
    const Object& receiver,
    const Function& callback,
    const char* resource_name,
    const Object& resource,
    size_t queue_size)
    : AsyncWorker(receiver, callback, resource_name, resource) {
  // Fill all possible arguments to work around ambiguous
  // ThreadSafeFunction::New signatures.
  _tsfn = ThreadSafeFunction::New(callback.Env(),
                                  callback,
                                  resource,
                                  resource_name,
                                  queue_size,
                                  /** initialThreadCount */ 1,
                                  /** context */ this,
                                  OnThreadSafeFunctionFinalize,
                                  /** finalizeData */ this);
}

#if NAPI_VERSION > 4
template <typename DataType>
inline AsyncProgressWorkerBase<DataType>::AsyncProgressWorkerBase(
    Napi::Env env,
    const char* resource_name,
    const Object& resource,
    size_t queue_size)
    : AsyncWorker(env, resource_name, resource) {
  // TODO: Once the changes to make the callback optional for threadsafe
  // functions are available on all versions we can remove the dummy Function
  // here.
  Function callback;
  // Fill all possible arguments to work around ambiguous
  // ThreadSafeFunction::New signatures.
  _tsfn = ThreadSafeFunction::New(env,
                                  callback,
                                  resource,
                                  resource_name,
                                  queue_size,
                                  /** initialThreadCount */ 1,
                                  /** context */ this,
                                  OnThreadSafeFunctionFinalize,
                                  /** finalizeData */ this);
}
#endif

template <typename DataType>
inline AsyncProgressWorkerBase<DataType>::~AsyncProgressWorkerBase() {
  // Abort pending tsfn call.
  // Don't send progress events after we've already completed.
  // It's ok to call ThreadSafeFunction::Abort and ThreadSafeFunction::Release
  // duplicated.
  _tsfn.Abort();
}

template <typename DataType>
inline void AsyncProgressWorkerBase<DataType>::OnAsyncWorkProgress(
    Napi::Env /* env */, Napi::Function /* jsCallback */, void* data) {
  ThreadSafeData* tsd = static_cast<ThreadSafeData*>(data);
  tsd->asyncprogressworker()->OnWorkProgress(tsd->data());
  delete tsd;
}

template <typename DataType>
inline napi_status AsyncProgressWorkerBase<DataType>::NonBlockingCall(
    DataType* data) {
  auto tsd = new AsyncProgressWorkerBase::ThreadSafeData(this, data);
  auto ret = _tsfn.NonBlockingCall(tsd, OnAsyncWorkProgress);
  if (ret != napi_ok) {
    delete tsd;
  }
  return ret;
}

template <typename DataType>
inline void AsyncProgressWorkerBase<DataType>::OnWorkComplete(
    Napi::Env /* env */, napi_status status) {
  _work_completed = true;
  _complete_status = status;
  _tsfn.Release();
}

template <typename DataType>
inline void AsyncProgressWorkerBase<DataType>::OnThreadSafeFunctionFinalize(
    Napi::Env env, void* /* data */, AsyncProgressWorkerBase* context) {
  if (context->_work_completed) {
    context->AsyncWorker::OnWorkComplete(env, context->_complete_status);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Async Progress Worker class
////////////////////////////////////////////////////////////////////////////////
template <class T>
inline AsyncProgressWorker<T>::AsyncProgressWorker(const Function& callback)
    : AsyncProgressWorker(callback, "generic") {}

template <class T>
inline AsyncProgressWorker<T>::AsyncProgressWorker(const Function& callback,
                                                   const char* resource_name)
    : AsyncProgressWorker(
          callback, resource_name, Object::New(callback.Env())) {}

template <class T>
inline AsyncProgressWorker<T>::AsyncProgressWorker(const Function& callback,
                                                   const char* resource_name,
                                                   const Object& resource)
    : AsyncProgressWorker(
          Object::New(callback.Env()), callback, resource_name, resource) {}

template <class T>
inline AsyncProgressWorker<T>::AsyncProgressWorker(const Object& receiver,
                                                   const Function& callback)
    : AsyncProgressWorker(receiver, callback, "generic") {}

template <class T>
inline AsyncProgressWorker<T>::AsyncProgressWorker(const Object& receiver,
                                                   const Function& callback,
                                                   const char* resource_name)
    : AsyncProgressWorker(
          receiver, callback, resource_name, Object::New(callback.Env())) {}

template <class T>
inline AsyncProgressWorker<T>::AsyncProgressWorker(const Object& receiver,
                                                   const Function& callback,
                                                   const char* resource_name,
                                                   const Object& resource)
    : AsyncProgressWorkerBase(receiver, callback, resource_name, resource),
      _asyncdata(nullptr),
      _asyncsize(0),
      _signaled(false) {}

#if NAPI_VERSION > 4
template <class T>
inline AsyncProgressWorker<T>::AsyncProgressWorker(Napi::Env env)
    : AsyncProgressWorker(env, "generic") {}

template <class T>
inline AsyncProgressWorker<T>::AsyncProgressWorker(Napi::Env env,
                                                   const char* resource_name)
    : AsyncProgressWorker(env, resource_name, Object::New(env)) {}

template <class T>
inline AsyncProgressWorker<T>::AsyncProgressWorker(Napi::Env env,
                                                   const char* resource_name,
                                                   const Object& resource)
    : AsyncProgressWorkerBase(env, resource_name, resource),
      _asyncdata(nullptr),
      _asyncsize(0) {}
#endif

template <class T>
inline AsyncProgressWorker<T>::~AsyncProgressWorker() {
  {
    std::lock_guard<std::mutex> lock(this->_mutex);
    _asyncdata = nullptr;
    _asyncsize = 0;
  }
}

template <class T>
inline void AsyncProgressWorker<T>::Execute() {
  ExecutionProgress progress(this);
  Execute(progress);
}

template <class T>
inline void AsyncProgressWorker<T>::OnWorkProgress(void*) {
  T* data;
  size_t size;
  bool signaled;
  {
    std::lock_guard<std::mutex> lock(this->_mutex);
    data = this->_asyncdata;
    size = this->_asyncsize;
    signaled = this->_signaled;
    this->_asyncdata = nullptr;
    this->_asyncsize = 0;
    this->_signaled = false;
  }

  /**
   * The callback of ThreadSafeFunction is not been invoked immediately on the
   * callback of uv_async_t (uv io poll), rather the callback of TSFN is
   * invoked on the right next uv idle callback. There are chances that during
   * the deferring the signal of uv_async_t is been sent again, i.e. potential
   * not coalesced two calls of the TSFN callback.
   */
  if (data == nullptr && !signaled) {
    return;
  }

  this->OnProgress(data, size);
  delete[] data;
}

template <class T>
inline void AsyncProgressWorker<T>::SendProgress_(const T* data, size_t count) {
  T* new_data = new T[count];
  std::copy(data, data + count, new_data);

  T* old_data;
  {
    std::lock_guard<std::mutex> lock(this->_mutex);
    old_data = _asyncdata;
    _asyncdata = new_data;
    _asyncsize = count;
    _signaled = false;
  }
  this->NonBlockingCall(nullptr);

  delete[] old_data;
}

template <class T>
inline void AsyncProgressWorker<T>::Signal() {
  {
    std::lock_guard<std::mutex> lock(this->_mutex);
    _signaled = true;
  }
  this->NonBlockingCall(static_cast<T*>(nullptr));
}

template <class T>
inline void AsyncProgressWorker<T>::ExecutionProgress::Signal() const {
  this->_worker->Signal();
}

template <class T>
inline void AsyncProgressWorker<T>::ExecutionProgress::Send(
    const T* data, size_t count) const {
  _worker->SendProgress_(data, count);
}

////////////////////////////////////////////////////////////////////////////////
// Async Progress Queue Worker class
////////////////////////////////////////////////////////////////////////////////
template <class T>
inline AsyncProgressQueueWorker<T>::AsyncProgressQueueWorker(
    const Function& callback)
    : AsyncProgressQueueWorker(callback, "generic") {}

template <class T>
inline AsyncProgressQueueWorker<T>::AsyncProgressQueueWorker(
    const Function& callback, const char* resource_name)
    : AsyncProgressQueueWorker(
          callback, resource_name, Object::New(callback.Env())) {}

template <class T>
inline AsyncProgressQueueWorker<T>::AsyncProgressQueueWorker(
    const Function& callback, const char* resource_name, const Object& resource)
    : AsyncProgressQueueWorker(
          Object::New(callback.Env()), callback, resource_name, resource) {}

template <class T>
inline AsyncProgressQueueWorker<T>::AsyncProgressQueueWorker(
    const Object& receiver, const Function& callback)
    : AsyncProgressQueueWorker(receiver, callback, "generic") {}

template <class T>
inline AsyncProgressQueueWorker<T>::AsyncProgressQueueWorker(
    const Object& receiver, const Function& callback, const char* resource_name)
    : AsyncProgressQueueWorker(
          receiver, callback, resource_name, Object::New(callback.Env())) {}

template <class T>
inline AsyncProgressQueueWorker<T>::AsyncProgressQueueWorker(
    const Object& receiver,
    const Function& callback,
    const char* resource_name,
    const Object& resource)
    : AsyncProgressWorkerBase<std::pair<T*, size_t>>(
          receiver,
          callback,
          resource_name,
          resource,
          /** unlimited queue size */ 0) {}

#if NAPI_VERSION > 4
template <class T>
inline AsyncProgressQueueWorker<T>::AsyncProgressQueueWorker(Napi::Env env)
    : AsyncProgressQueueWorker(env, "generic") {}

template <class T>
inline AsyncProgressQueueWorker<T>::AsyncProgressQueueWorker(
    Napi::Env env, const char* resource_name)
    : AsyncProgressQueueWorker(env, resource_name, Object::New(env)) {}

template <class T>
inline AsyncProgressQueueWorker<T>::AsyncProgressQueueWorker(
    Napi::Env env, const char* resource_name, const Object& resource)
    : AsyncProgressWorkerBase<std::pair<T*, size_t>>(
          env, resource_name, resource, /** unlimited queue size */ 0) {}
#endif

template <class T>
inline void AsyncProgressQueueWorker<T>::Execute() {
  ExecutionProgress progress(this);
  Execute(progress);
}

template <class T>
inline void AsyncProgressQueueWorker<T>::OnWorkProgress(
    std::pair<T*, size_t>* datapair) {
  if (datapair == nullptr) {
    return;
  }

  T* data = datapair->first;
  size_t size = datapair->second;

  this->OnProgress(data, size);
  delete datapair;
  delete[] data;
}

template <class T>
inline void AsyncProgressQueueWorker<T>::SendProgress_(const T* data,
                                                       size_t count) {
  T* new_data = new T[count];
  std::copy(data, data + count, new_data);

  auto pair = new std::pair<T*, size_t>(new_data, count);
  this->NonBlockingCall(pair);
}

template <class T>
inline void AsyncProgressQueueWorker<T>::Signal() const {
  this->SendProgress_(static_cast<T*>(nullptr), 0);
}

template <class T>
inline void AsyncProgressQueueWorker<T>::OnWorkComplete(Napi::Env env,
                                                        napi_status status) {
  // Draining queued items in TSFN.
  AsyncProgressWorkerBase<std::pair<T*, size_t>>::OnWorkComplete(env, status);
}

template <class T>
inline void AsyncProgressQueueWorker<T>::ExecutionProgress::Signal() const {
  _worker->SendProgress_(static_cast<T*>(nullptr), 0);
}

template <class T>
inline void AsyncProgressQueueWorker<T>::ExecutionProgress::Send(
    const T* data, size_t count) const {
  _worker->SendProgress_(data, count);
}
#endif  // NAPI_VERSION > 3 && NAPI_HAS_THREADS

////////////////////////////////////////////////////////////////////////////////
// Memory Management class
////////////////////////////////////////////////////////////////////////////////

inline int64_t MemoryManagement::AdjustExternalMemory(Env env,
                                                      int64_t change_in_bytes) {
  int64_t result;
  napi_status status =
      napi_adjust_external_memory(env, change_in_bytes, &result);
  NAPI_THROW_IF_FAILED(env, status, 0);
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// Version Management class
////////////////////////////////////////////////////////////////////////////////

inline uint32_t VersionManagement::GetNapiVersion(Env env) {
  uint32_t result;
  napi_status status = napi_get_version(env, &result);
  NAPI_THROW_IF_FAILED(env, status, 0);
  return result;
}

inline const napi_node_version* VersionManagement::GetNodeVersion(Env env) {
  const napi_node_version* result;
  napi_status status = napi_get_node_version(env, &result);
  NAPI_THROW_IF_FAILED(env, status, 0);
  return result;
}

#if NAPI_VERSION > 5
////////////////////////////////////////////////////////////////////////////////
// Addon<T> class
////////////////////////////////////////////////////////////////////////////////

template <typename T>
inline Object Addon<T>::Init(Env env, Object exports) {
  T* addon = new T(env, exports);
  env.SetInstanceData(addon);
  return addon->entry_point_;
}

template <typename T>
inline T* Addon<T>::Unwrap(Object wrapper) {
  return wrapper.Env().GetInstanceData<T>();
}

template <typename T>
inline void Addon<T>::DefineAddon(
    Object exports, const std::initializer_list<AddonProp>& props) {
  DefineProperties(exports, props);
  entry_point_ = exports;
}

template <typename T>
inline Napi::Object Addon<T>::DefineProperties(
    Object object, const std::initializer_list<AddonProp>& props) {
  const napi_property_descriptor* properties =
      reinterpret_cast<const napi_property_descriptor*>(props.begin());
  size_t size = props.size();
  napi_status status =
      napi_define_properties(object.Env(), object, size, properties);
  NAPI_THROW_IF_FAILED(object.Env(), status, object);
  for (size_t idx = 0; idx < size; idx++)
    T::AttachPropData(object.Env(), object, &properties[idx]);
  return object;
}
#endif  // NAPI_VERSION > 5

#if NAPI_VERSION > 2
template <typename Hook, typename Arg>
Env::CleanupHook<Hook, Arg> Env::AddCleanupHook(Hook hook, Arg* arg) {
  return CleanupHook<Hook, Arg>(*this, hook, arg);
}

template <typename Hook>
Env::CleanupHook<Hook> Env::AddCleanupHook(Hook hook) {
  return CleanupHook<Hook>(*this, hook);
}

template <typename Hook, typename Arg>
Env::CleanupHook<Hook, Arg>::CleanupHook() {
  data = nullptr;
}

template <typename Hook, typename Arg>
Env::CleanupHook<Hook, Arg>::CleanupHook(Napi::Env env, Hook hook)
    : wrapper(Env::CleanupHook<Hook, Arg>::Wrapper) {
  data = new CleanupData{std::move(hook), nullptr};
  napi_status status = napi_add_env_cleanup_hook(env, wrapper, data);
  if (status != napi_ok) {
    delete data;
    data = nullptr;
  }
}

template <typename Hook, typename Arg>
Env::CleanupHook<Hook, Arg>::CleanupHook(Napi::Env env, Hook hook, Arg* arg)
    : wrapper(Env::CleanupHook<Hook, Arg>::WrapperWithArg) {
  data = new CleanupData{std::move(hook), arg};
  napi_status status = napi_add_env_cleanup_hook(env, wrapper, data);
  if (status != napi_ok) {
    delete data;
    data = nullptr;
  }
}

template <class Hook, class Arg>
bool Env::CleanupHook<Hook, Arg>::Remove(Env env) {
  napi_status status = napi_remove_env_cleanup_hook(env, wrapper, data);
  delete data;
  data = nullptr;
  return status == napi_ok;
}

template <class Hook, class Arg>
bool Env::CleanupHook<Hook, Arg>::IsEmpty() const {
  return data == nullptr;
}
#endif  // NAPI_VERSION > 2

#ifdef NAPI_CPP_CUSTOM_NAMESPACE
}  // namespace NAPI_CPP_CUSTOM_NAMESPACE
#endif

}  // namespace Napi

#endif  // SRC_NAPI_INL_H_
