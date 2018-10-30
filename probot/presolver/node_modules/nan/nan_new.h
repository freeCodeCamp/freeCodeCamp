/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_NEW_H_
#define NAN_NEW_H_

namespace imp {  // scnr

// TODO(agnat): Generalize
template <typename T> v8::Local<T> To(v8::Local<v8::Integer> i);

template <>
inline
v8::Local<v8::Integer>
To<v8::Integer>(v8::Local<v8::Integer> i) {
  return Nan::To<v8::Integer>(i).ToLocalChecked();
}

template <>
inline
v8::Local<v8::Int32>
To<v8::Int32>(v8::Local<v8::Integer> i) {
  return Nan::To<v8::Int32>(i).ToLocalChecked();
}

template <>
inline
v8::Local<v8::Uint32>
To<v8::Uint32>(v8::Local<v8::Integer> i) {
  return Nan::To<v8::Uint32>(i).ToLocalChecked();
}

template <typename T> struct FactoryBase {
  typedef v8::Local<T> return_t;
};

template <typename T> struct MaybeFactoryBase {
  typedef MaybeLocal<T> return_t;
};

template <typename T> struct Factory;

template <>
struct Factory<v8::Array> : FactoryBase<v8::Array> {
  static inline return_t New();
  static inline return_t New(int length);
};

template <>
struct Factory<v8::Boolean> : FactoryBase<v8::Boolean> {
  static inline return_t New(bool value);
};

template <>
struct Factory<v8::BooleanObject> : FactoryBase<v8::BooleanObject> {
  static inline return_t New(bool value);
};

template <>
struct Factory<v8::Context> : FactoryBase<v8::Context> {
  static inline
  return_t
  New( v8::ExtensionConfiguration* extensions = NULL
     , v8::Local<v8::ObjectTemplate> tmpl = v8::Local<v8::ObjectTemplate>()
     , v8::Local<v8::Value> obj = v8::Local<v8::Value>());
};

template <>
struct Factory<v8::Date> : MaybeFactoryBase<v8::Date> {
  static inline return_t New(double value);
};

template <>
struct Factory<v8::External> : FactoryBase<v8::External> {
  static inline return_t New(void *value);
};

template <>
struct Factory<v8::Function> : FactoryBase<v8::Function> {
  static inline
  return_t
  New( FunctionCallback callback
     , v8::Local<v8::Value> data = v8::Local<v8::Value>());
};

template <>
struct Factory<v8::FunctionTemplate> : FactoryBase<v8::FunctionTemplate> {
  static inline
  return_t
  New( FunctionCallback callback = NULL
     , v8::Local<v8::Value> data = v8::Local<v8::Value>()
     , v8::Local<v8::Signature> signature = v8::Local<v8::Signature>());
};

template <>
struct Factory<v8::Number> : FactoryBase<v8::Number> {
  static inline return_t New(double value);
};

template <>
struct Factory<v8::NumberObject> : FactoryBase<v8::NumberObject> {
  static inline return_t New(double value);
};

template <typename T>
struct IntegerFactory : FactoryBase<T> {
  typedef typename FactoryBase<T>::return_t return_t;
  static inline return_t New(int32_t value);
  static inline return_t New(uint32_t value);
};

template <>
struct Factory<v8::Integer> : IntegerFactory<v8::Integer> {};

template <>
struct Factory<v8::Int32> : IntegerFactory<v8::Int32> {};

template <>
struct Factory<v8::Uint32> : FactoryBase<v8::Uint32> {
  static inline return_t New(int32_t value);
  static inline return_t New(uint32_t value);
};

template <>
struct Factory<v8::Object> : FactoryBase<v8::Object> {
  static inline return_t New();
};

template <>
struct Factory<v8::ObjectTemplate> : FactoryBase<v8::ObjectTemplate> {
  static inline return_t New();
};

template <>
struct Factory<v8::RegExp> : MaybeFactoryBase<v8::RegExp> {
  static inline return_t New(
      v8::Local<v8::String> pattern, v8::RegExp::Flags flags);
};

template <>
struct Factory<v8::Script> : MaybeFactoryBase<v8::Script> {
  static inline return_t New( v8::Local<v8::String> source);
  static inline return_t New( v8::Local<v8::String> source
                            , v8::ScriptOrigin const& origin);
};

template <>
struct Factory<v8::Signature> : FactoryBase<v8::Signature> {
  typedef v8::Local<v8::FunctionTemplate> FTH;
  static inline return_t New(FTH receiver = FTH());
};

template <>
struct Factory<v8::String> : MaybeFactoryBase<v8::String> {
  static inline return_t New();
  static inline return_t New(const char *value, int length = -1);
  static inline return_t New(const uint16_t *value, int length = -1);
  static inline return_t New(std::string const& value);

  static inline return_t New(v8::String::ExternalStringResource * value);
  static inline return_t New(ExternalOneByteStringResource * value);
};

template <>
struct Factory<v8::StringObject> : FactoryBase<v8::StringObject> {
  static inline return_t New(v8::Local<v8::String> value);
};

}  // end of namespace imp

#if (NODE_MODULE_VERSION >= 12)

namespace imp {

template <>
struct Factory<v8::UnboundScript> : MaybeFactoryBase<v8::UnboundScript> {
  static inline return_t New( v8::Local<v8::String> source);
  static inline return_t New( v8::Local<v8::String> source
                            , v8::ScriptOrigin const& origin);
};

}  // end of namespace imp

# include "nan_implementation_12_inl.h"

#else  // NODE_MODULE_VERSION >= 12

# include "nan_implementation_pre_12_inl.h"

#endif

//=== API ======================================================================

template <typename T>
typename imp::Factory<T>::return_t
New() {
  return imp::Factory<T>::New();
}

template <typename T, typename A0>
typename imp::Factory<T>::return_t
New(A0 arg0) {
  return imp::Factory<T>::New(arg0);
}

template <typename T, typename A0, typename A1>
typename imp::Factory<T>::return_t
New(A0 arg0, A1 arg1) {
  return imp::Factory<T>::New(arg0, arg1);
}

template <typename T, typename A0, typename A1, typename A2>
typename imp::Factory<T>::return_t
New(A0 arg0, A1 arg1, A2 arg2) {
  return imp::Factory<T>::New(arg0, arg1, arg2);
}

template <typename T, typename A0, typename A1, typename A2, typename A3>
typename imp::Factory<T>::return_t
New(A0 arg0, A1 arg1, A2 arg2, A3 arg3) {
  return imp::Factory<T>::New(arg0, arg1, arg2, arg3);
}

// Note(agnat): When passing overloaded function pointers to template functions
// as generic arguments the compiler needs help in picking the right overload.
// These two functions handle New<Function> and New<FunctionTemplate> with
// all argument variations.

// v8::Function and v8::FunctionTemplate with one or two arguments
template <typename T>
typename imp::Factory<T>::return_t
New( FunctionCallback callback
      , v8::Local<v8::Value> data = v8::Local<v8::Value>()) {
    return imp::Factory<T>::New(callback, data);
}

// v8::Function and v8::FunctionTemplate with three arguments
template <typename T, typename A2>
typename imp::Factory<T>::return_t
New( FunctionCallback callback
      , v8::Local<v8::Value> data = v8::Local<v8::Value>()
      , A2 a2 = A2()) {
    return imp::Factory<T>::New(callback, data, a2);
}

// Convenience

#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
template <typename T> inline v8::Local<T> New(v8::Handle<T> h);
#endif

#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
template <typename T, typename M>
    inline v8::Local<T> New(v8::Persistent<T, M> const& p);
#else
template <typename T> inline v8::Local<T> New(v8::Persistent<T> const& p);
#endif
template <typename T, typename M>
inline v8::Local<T> New(Persistent<T, M> const& p);
template <typename T>
inline v8::Local<T> New(Global<T> const& p);

inline
imp::Factory<v8::Boolean>::return_t
New(bool value) {
  return New<v8::Boolean>(value);
}

inline
imp::Factory<v8::Int32>::return_t
New(int32_t value) {
  return New<v8::Int32>(value);
}

inline
imp::Factory<v8::Uint32>::return_t
New(uint32_t value) {
  return New<v8::Uint32>(value);
}

inline
imp::Factory<v8::Number>::return_t
New(double value) {
  return New<v8::Number>(value);
}

inline
imp::Factory<v8::String>::return_t
New(std::string const& value) {  // NOLINT(build/include_what_you_use)
  return New<v8::String>(value);
}

inline
imp::Factory<v8::String>::return_t
New(const char * value, int length) {
  return New<v8::String>(value, length);
}

inline
imp::Factory<v8::String>::return_t
New(const uint16_t * value, int length) {
  return New<v8::String>(value, length);
}

inline
imp::Factory<v8::String>::return_t
New(const char * value) {
  return New<v8::String>(value);
}

inline
imp::Factory<v8::String>::return_t
New(const uint16_t * value) {
  return New<v8::String>(value);
}

inline
imp::Factory<v8::String>::return_t
New(v8::String::ExternalStringResource * value) {
  return New<v8::String>(value);
}

inline
imp::Factory<v8::String>::return_t
New(ExternalOneByteStringResource * value) {
  return New<v8::String>(value);
}

inline
imp::Factory<v8::RegExp>::return_t
New(v8::Local<v8::String> pattern, v8::RegExp::Flags flags) {
  return New<v8::RegExp>(pattern, flags);
}

#endif  // NAN_NEW_H_
