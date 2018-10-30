/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_CONVERTERS_43_INL_H_
#define NAN_CONVERTERS_43_INL_H_

#define X(TYPE)                                                                \
imp::ToFactory<v8::TYPE>::return_t                                             \
imp::ToFactory<v8::TYPE>::convert(v8::Local<v8::Value> val) {                  \
  v8::Isolate *isolate = v8::Isolate::GetCurrent();                            \
  v8::EscapableHandleScope scope(isolate);                                     \
  return scope.Escape(                                                         \
      val->To ## TYPE(isolate->GetCurrentContext())                            \
          .FromMaybe(v8::Local<v8::TYPE>()));                                  \
}

X(Boolean)
X(Number)
X(String)
X(Object)
X(Integer)
X(Uint32)
X(Int32)

#undef X

#define X(TYPE, NAME)                                                          \
imp::ToFactory<TYPE>::return_t                                                 \
imp::ToFactory<TYPE>::convert(v8::Local<v8::Value> val) {                      \
  v8::Isolate *isolate = v8::Isolate::GetCurrent();                            \
  v8::HandleScope scope(isolate);                                              \
  return val->NAME ## Value(isolate->GetCurrentContext());                     \
}

X(bool, Boolean)
X(double, Number)
X(int64_t, Integer)
X(uint32_t, Uint32)
X(int32_t, Int32)

#undef X

#endif  // NAN_CONVERTERS_43_INL_H_
