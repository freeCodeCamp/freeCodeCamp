/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_CALLBACKS_12_INL_H_
#define NAN_CALLBACKS_12_INL_H_

template<typename T>
class ReturnValue {
  v8::ReturnValue<T> value_;

 public:
  template <class S>
  explicit inline ReturnValue(const v8::ReturnValue<S> &value) :
      value_(value) {}
  template <class S>
  explicit inline ReturnValue(const ReturnValue<S>& that)
      : value_(that.value_) {
    TYPE_CHECK(T, S);
  }

  // Handle setters
  template <typename S> inline void Set(const v8::Local<S> &handle) {
    TYPE_CHECK(T, S);
    value_.Set(handle);
  }

  template <typename S> inline void Set(const Global<S> &handle) {
    TYPE_CHECK(T, S);
#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) &&                       \
  (V8_MINOR_VERSION > 5 || (V8_MINOR_VERSION == 5 &&                           \
  defined(V8_BUILD_NUMBER) && V8_BUILD_NUMBER >= 8))))
    value_.Set(handle);
#else
    value_.Set(*reinterpret_cast<const v8::Persistent<S>*>(&handle));
    const_cast<Global<S> &>(handle).Reset();
#endif
  }

  // Fast primitive setters
  inline void Set(bool value) {
    TYPE_CHECK(T, v8::Boolean);
    value_.Set(value);
  }

  inline void Set(double i) {
    TYPE_CHECK(T, v8::Number);
    value_.Set(i);
  }

  inline void Set(int32_t i) {
    TYPE_CHECK(T, v8::Integer);
    value_.Set(i);
  }

  inline void Set(uint32_t i) {
    TYPE_CHECK(T, v8::Integer);
    value_.Set(i);
  }

  // Fast JS primitive setters
  inline void SetNull() {
    TYPE_CHECK(T, v8::Primitive);
    value_.SetNull();
  }

  inline void SetUndefined() {
    TYPE_CHECK(T, v8::Primitive);
    value_.SetUndefined();
  }

  inline void SetEmptyString() {
    TYPE_CHECK(T, v8::String);
    value_.SetEmptyString();
  }

  // Convenience getter for isolate
  inline v8::Isolate *GetIsolate() const {
    return value_.GetIsolate();
  }

  // Pointer setter: Uncompilable to prevent inadvertent misuse.
  template<typename S>
  inline void Set(S *whatever) { TYPE_CHECK(S*, v8::Primitive); }
};

template<typename T>
class FunctionCallbackInfo {
  const v8::FunctionCallbackInfo<T> &info_;
  const v8::Local<v8::Value> data_;

 public:
  explicit inline FunctionCallbackInfo(
      const v8::FunctionCallbackInfo<T> &info
    , v8::Local<v8::Value> data) :
          info_(info)
        , data_(data) {}

  inline ReturnValue<T> GetReturnValue() const {
    return ReturnValue<T>(info_.GetReturnValue());
  }

#if NODE_MAJOR_VERSION < 10
  inline v8::Local<v8::Function> Callee() const { return info_.Callee(); }
#endif
  inline v8::Local<v8::Value> Data() const { return data_; }
  inline v8::Local<v8::Object> Holder() const { return info_.Holder(); }
  inline bool IsConstructCall() const { return info_.IsConstructCall(); }
  inline int Length() const { return info_.Length(); }
  inline v8::Local<v8::Value> operator[](int i) const { return info_[i]; }
  inline v8::Local<v8::Object> This() const { return info_.This(); }
  inline v8::Isolate *GetIsolate() const { return info_.GetIsolate(); }


 protected:
  static const int kHolderIndex = 0;
  static const int kIsolateIndex = 1;
  static const int kReturnValueDefaultValueIndex = 2;
  static const int kReturnValueIndex = 3;
  static const int kDataIndex = 4;
  static const int kCalleeIndex = 5;
  static const int kContextSaveIndex = 6;
  static const int kArgsLength = 7;

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(FunctionCallbackInfo)
};

template<typename T>
class PropertyCallbackInfo {
  const v8::PropertyCallbackInfo<T> &info_;
  const v8::Local<v8::Value> data_;

 public:
  explicit inline PropertyCallbackInfo(
      const v8::PropertyCallbackInfo<T> &info
    , const v8::Local<v8::Value> data) :
          info_(info)
        , data_(data) {}

  inline v8::Isolate* GetIsolate() const { return info_.GetIsolate(); }
  inline v8::Local<v8::Value> Data() const { return data_; }
  inline v8::Local<v8::Object> This() const { return info_.This(); }
  inline v8::Local<v8::Object> Holder() const { return info_.Holder(); }
  inline ReturnValue<T> GetReturnValue() const {
    return ReturnValue<T>(info_.GetReturnValue());
  }

 protected:
  static const int kHolderIndex = 0;
  static const int kIsolateIndex = 1;
  static const int kReturnValueDefaultValueIndex = 2;
  static const int kReturnValueIndex = 3;
  static const int kDataIndex = 4;
  static const int kThisIndex = 5;
  static const int kArgsLength = 6;

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(PropertyCallbackInfo)
};

namespace imp {
static
void FunctionCallbackWrapper(const v8::FunctionCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  FunctionCallback callback = reinterpret_cast<FunctionCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kFunctionIndex).As<v8::External>()->Value()));
  FunctionCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  callback(cbinfo);
}

typedef void (*NativeFunction)(const v8::FunctionCallbackInfo<v8::Value> &);

#if NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
static
void GetterCallbackWrapper(
    v8::Local<v8::Name> property
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  GetterCallback callback = reinterpret_cast<GetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kGetterIndex).As<v8::External>()->Value()));
  callback(property.As<v8::String>(), cbinfo);
}

typedef void (*NativeGetter)
    (v8::Local<v8::Name>, const v8::PropertyCallbackInfo<v8::Value> &);

static
void SetterCallbackWrapper(
    v8::Local<v8::Name> property
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<void> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<void>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  SetterCallback callback = reinterpret_cast<SetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kSetterIndex).As<v8::External>()->Value()));
  callback(property.As<v8::String>(), value, cbinfo);
}

typedef void (*NativeSetter)(
    v8::Local<v8::Name>
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<void> &);
#else
static
void GetterCallbackWrapper(
    v8::Local<v8::String> property
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  GetterCallback callback = reinterpret_cast<GetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kGetterIndex).As<v8::External>()->Value()));
  callback(property, cbinfo);
}

typedef void (*NativeGetter)
    (v8::Local<v8::String>, const v8::PropertyCallbackInfo<v8::Value> &);

static
void SetterCallbackWrapper(
    v8::Local<v8::String> property
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<void> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<void>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  SetterCallback callback = reinterpret_cast<SetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kSetterIndex).As<v8::External>()->Value()));
  callback(property, value, cbinfo);
}

typedef void (*NativeSetter)(
    v8::Local<v8::String>
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<void> &);
#endif

#if NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
static
void PropertyGetterCallbackWrapper(
    v8::Local<v8::Name> property
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyGetterCallback callback = reinterpret_cast<PropertyGetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyGetterIndex)
              .As<v8::External>()->Value()));
  callback(property.As<v8::String>(), cbinfo);
}

typedef void (*NativePropertyGetter)
    (v8::Local<v8::Name>, const v8::PropertyCallbackInfo<v8::Value> &);

static
void PropertySetterCallbackWrapper(
    v8::Local<v8::Name> property
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertySetterCallback callback = reinterpret_cast<PropertySetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertySetterIndex)
              .As<v8::External>()->Value()));
  callback(property.As<v8::String>(), value, cbinfo);
}

typedef void (*NativePropertySetter)(
    v8::Local<v8::Name>
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<v8::Value> &);

static
void PropertyEnumeratorCallbackWrapper(
    const v8::PropertyCallbackInfo<v8::Array> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Array>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyEnumeratorCallback callback =
      reinterpret_cast<PropertyEnumeratorCallback>(reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyEnumeratorIndex)
              .As<v8::External>()->Value()));
  callback(cbinfo);
}

typedef void (*NativePropertyEnumerator)
    (const v8::PropertyCallbackInfo<v8::Array> &);

static
void PropertyDeleterCallbackWrapper(
    v8::Local<v8::Name> property
  , const v8::PropertyCallbackInfo<v8::Boolean> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Boolean>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyDeleterCallback callback = reinterpret_cast<PropertyDeleterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyDeleterIndex)
              .As<v8::External>()->Value()));
  callback(property.As<v8::String>(), cbinfo);
}

typedef void (NativePropertyDeleter)
    (v8::Local<v8::Name>, const v8::PropertyCallbackInfo<v8::Boolean> &);

static
void PropertyQueryCallbackWrapper(
    v8::Local<v8::Name> property
  , const v8::PropertyCallbackInfo<v8::Integer> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Integer>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyQueryCallback callback = reinterpret_cast<PropertyQueryCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyQueryIndex)
              .As<v8::External>()->Value()));
  callback(property.As<v8::String>(), cbinfo);
}

typedef void (*NativePropertyQuery)
    (v8::Local<v8::Name>, const v8::PropertyCallbackInfo<v8::Integer> &);
#else
static
void PropertyGetterCallbackWrapper(
    v8::Local<v8::String> property
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyGetterCallback callback = reinterpret_cast<PropertyGetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyGetterIndex)
              .As<v8::External>()->Value()));
  callback(property, cbinfo);
}

typedef void (*NativePropertyGetter)
    (v8::Local<v8::String>, const v8::PropertyCallbackInfo<v8::Value> &);

static
void PropertySetterCallbackWrapper(
    v8::Local<v8::String> property
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertySetterCallback callback = reinterpret_cast<PropertySetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertySetterIndex)
              .As<v8::External>()->Value()));
  callback(property, value, cbinfo);
}

typedef void (*NativePropertySetter)(
    v8::Local<v8::String>
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<v8::Value> &);

static
void PropertyEnumeratorCallbackWrapper(
    const v8::PropertyCallbackInfo<v8::Array> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Array>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyEnumeratorCallback callback =
      reinterpret_cast<PropertyEnumeratorCallback>(reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyEnumeratorIndex)
              .As<v8::External>()->Value()));
  callback(cbinfo);
}

typedef void (*NativePropertyEnumerator)
    (const v8::PropertyCallbackInfo<v8::Array> &);

static
void PropertyDeleterCallbackWrapper(
    v8::Local<v8::String> property
  , const v8::PropertyCallbackInfo<v8::Boolean> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Boolean>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyDeleterCallback callback = reinterpret_cast<PropertyDeleterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyDeleterIndex)
              .As<v8::External>()->Value()));
  callback(property, cbinfo);
}

typedef void (NativePropertyDeleter)
    (v8::Local<v8::String>, const v8::PropertyCallbackInfo<v8::Boolean> &);

static
void PropertyQueryCallbackWrapper(
    v8::Local<v8::String> property
  , const v8::PropertyCallbackInfo<v8::Integer> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Integer>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyQueryCallback callback = reinterpret_cast<PropertyQueryCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyQueryIndex)
              .As<v8::External>()->Value()));
  callback(property, cbinfo);
}

typedef void (*NativePropertyQuery)
    (v8::Local<v8::String>, const v8::PropertyCallbackInfo<v8::Integer> &);
#endif

static
void IndexGetterCallbackWrapper(
    uint32_t index, const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexGetterCallback callback = reinterpret_cast<IndexGetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyGetterIndex)
              .As<v8::External>()->Value()));
  callback(index, cbinfo);
}

typedef void (*NativeIndexGetter)
    (uint32_t, const v8::PropertyCallbackInfo<v8::Value> &);

static
void IndexSetterCallbackWrapper(
    uint32_t index
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexSetterCallback callback = reinterpret_cast<IndexSetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertySetterIndex)
              .As<v8::External>()->Value()));
  callback(index, value, cbinfo);
}

typedef void (*NativeIndexSetter)(
    uint32_t
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<v8::Value> &);

static
void IndexEnumeratorCallbackWrapper(
    const v8::PropertyCallbackInfo<v8::Array> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Array>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexEnumeratorCallback callback = reinterpret_cast<IndexEnumeratorCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(
              kIndexPropertyEnumeratorIndex).As<v8::External>()->Value()));
  callback(cbinfo);
}

typedef void (*NativeIndexEnumerator)
    (const v8::PropertyCallbackInfo<v8::Array> &);

static
void IndexDeleterCallbackWrapper(
    uint32_t index, const v8::PropertyCallbackInfo<v8::Boolean> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Boolean>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexDeleterCallback callback = reinterpret_cast<IndexDeleterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyDeleterIndex)
              .As<v8::External>()->Value()));
  callback(index, cbinfo);
}

typedef void (*NativeIndexDeleter)
    (uint32_t, const v8::PropertyCallbackInfo<v8::Boolean> &);

static
void IndexQueryCallbackWrapper(
    uint32_t index, const v8::PropertyCallbackInfo<v8::Integer> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Integer>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexQueryCallback callback = reinterpret_cast<IndexQueryCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyQueryIndex)
              .As<v8::External>()->Value()));
  callback(index, cbinfo);
}

typedef void (*NativeIndexQuery)
    (uint32_t, const v8::PropertyCallbackInfo<v8::Integer> &);
}  // end of namespace imp

#endif  // NAN_CALLBACKS_12_INL_H_
