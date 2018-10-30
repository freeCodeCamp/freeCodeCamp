/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_WEAK_H_
#define NAN_WEAK_H_

static const int kInternalFieldsInWeakCallback = 2;
static const int kNoInternalFieldIndex = -1;

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
# define NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ \
    v8::WeakCallbackInfo<WeakCallbackInfo<T> > const&
# define NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ \
    NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_PARAMETER_CALLBACK_SIG_ NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_TWOFIELD_CALLBACK_SIG_ NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
#elif NODE_MODULE_VERSION > IOJS_1_1_MODULE_VERSION
# define NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ \
    v8::PhantomCallbackData<WeakCallbackInfo<T> > const&
# define NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ \
    NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_PARAMETER_CALLBACK_SIG_ NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_TWOFIELD_CALLBACK_SIG_ NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
#elif NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
# define NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ \
    v8::PhantomCallbackData<WeakCallbackInfo<T> > const&
# define NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ \
    v8::InternalFieldsCallbackData<WeakCallbackInfo<T>, void> const&
# define NAN_WEAK_PARAMETER_CALLBACK_SIG_ NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_TWOFIELD_CALLBACK_SIG_ NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
# define NAN_WEAK_CALLBACK_DATA_TYPE_ \
    v8::WeakCallbackData<S, WeakCallbackInfo<T> > const&
# define NAN_WEAK_CALLBACK_SIG_ NAN_WEAK_CALLBACK_DATA_TYPE_
#else
# define NAN_WEAK_CALLBACK_DATA_TYPE_ void *
# define NAN_WEAK_CALLBACK_SIG_ \
    v8::Persistent<v8::Value>, NAN_WEAK_CALLBACK_DATA_TYPE_
#endif

template<typename T>
class WeakCallbackInfo {
 public:
  typedef void (*Callback)(const WeakCallbackInfo<T>& data);
  WeakCallbackInfo(
      Persistent<v8::Value> *persistent
    , Callback callback
    , void *parameter
    , void *field1 = 0
    , void *field2 = 0) :
        callback_(callback), isolate_(0), parameter_(parameter) {
    std::memcpy(&persistent_, persistent, sizeof (v8::Persistent<v8::Value>));
    internal_fields_[0] = field1;
    internal_fields_[1] = field2;
  }
  inline v8::Isolate *GetIsolate() const { return isolate_; }
  inline T *GetParameter() const { return static_cast<T*>(parameter_); }
  inline void *GetInternalField(int index) const {
    assert((index == 0 || index == 1) && "internal field index out of bounds");
    if (index == 0) {
      return internal_fields_[0];
    } else {
      return internal_fields_[1];
    }
  }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(WeakCallbackInfo)
  Callback callback_;
  v8::Isolate *isolate_;
  void *parameter_;
  void *internal_fields_[kInternalFieldsInWeakCallback];
  v8::Persistent<v8::Value> persistent_;
  template<typename S, typename M> friend class Persistent;
  template<typename S> friend class PersistentBase;
#if NODE_MODULE_VERSION <= NODE_0_12_MODULE_VERSION
# if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
  template<typename S>
  static void invoke(NAN_WEAK_CALLBACK_SIG_ data);
  template<typename S>
  static WeakCallbackInfo *unwrap(NAN_WEAK_CALLBACK_DATA_TYPE_ data);
# else
  static void invoke(NAN_WEAK_CALLBACK_SIG_ data);
  static WeakCallbackInfo *unwrap(NAN_WEAK_CALLBACK_DATA_TYPE_ data);
# endif
#else
# if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                     \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
  template<bool isFirstPass>
  static void invokeparameter(NAN_WEAK_PARAMETER_CALLBACK_SIG_ data);
  template<bool isFirstPass>
  static void invoketwofield(NAN_WEAK_TWOFIELD_CALLBACK_SIG_ data);
# else
  static void invokeparameter(NAN_WEAK_PARAMETER_CALLBACK_SIG_ data);
  static void invoketwofield(NAN_WEAK_TWOFIELD_CALLBACK_SIG_ data);
# endif
  static WeakCallbackInfo *unwrapparameter(
      NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ data);
  static WeakCallbackInfo *unwraptwofield(
      NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ data);
#endif
};


#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))

template<typename T>
template<bool isFirstPass>
void
WeakCallbackInfo<T>::invokeparameter(NAN_WEAK_PARAMETER_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwrapparameter(data);
  if (isFirstPass) {
    cbinfo->persistent_.Reset();
    data.SetSecondPassCallback(invokeparameter<false>);
  } else {
    cbinfo->callback_(*cbinfo);
    delete cbinfo;
  }
}

template<typename T>
template<bool isFirstPass>
void
WeakCallbackInfo<T>::invoketwofield(NAN_WEAK_TWOFIELD_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwraptwofield(data);
  if (isFirstPass) {
    cbinfo->persistent_.Reset();
    data.SetSecondPassCallback(invoketwofield<false>);
  } else {
    cbinfo->callback_(*cbinfo);
    delete cbinfo;
  }
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwrapparameter(
    NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
      static_cast<WeakCallbackInfo<T>*>(data.GetParameter());
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwraptwofield(
    NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
      static_cast<WeakCallbackInfo<T>*>(data.GetInternalField(0));
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

#undef NAN_WEAK_PARAMETER_CALLBACK_SIG_
#undef NAN_WEAK_TWOFIELD_CALLBACK_SIG_
#undef NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
#undef NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
# elif NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION

template<typename T>
void
WeakCallbackInfo<T>::invokeparameter(NAN_WEAK_PARAMETER_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwrapparameter(data);
  cbinfo->persistent_.Reset();
  cbinfo->callback_(*cbinfo);
  delete cbinfo;
}

template<typename T>
void
WeakCallbackInfo<T>::invoketwofield(NAN_WEAK_TWOFIELD_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwraptwofield(data);
  cbinfo->persistent_.Reset();
  cbinfo->callback_(*cbinfo);
  delete cbinfo;
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwrapparameter(
    NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
       static_cast<WeakCallbackInfo<T>*>(data.GetParameter());
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwraptwofield(
    NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
       static_cast<WeakCallbackInfo<T>*>(data.GetInternalField1());
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

#undef NAN_WEAK_PARAMETER_CALLBACK_SIG_
#undef NAN_WEAK_TWOFIELD_CALLBACK_SIG_
#undef NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
#undef NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION

template<typename T>
template<typename S>
void WeakCallbackInfo<T>::invoke(NAN_WEAK_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwrap(data);
  cbinfo->persistent_.Reset();
  cbinfo->callback_(*cbinfo);
  delete cbinfo;
}

template<typename T>
template<typename S>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwrap(
    NAN_WEAK_CALLBACK_DATA_TYPE_ data) {
  void *parameter = data.GetParameter();
  WeakCallbackInfo<T> *cbinfo =
      static_cast<WeakCallbackInfo<T>*>(parameter);
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

#undef NAN_WEAK_CALLBACK_SIG_
#undef NAN_WEAK_CALLBACK_DATA_TYPE_
#else

template<typename T>
void WeakCallbackInfo<T>::invoke(NAN_WEAK_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwrap(data);
  cbinfo->persistent_.Dispose();
  cbinfo->persistent_.Clear();
  cbinfo->callback_(*cbinfo);
  delete cbinfo;
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwrap(
    NAN_WEAK_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
      static_cast<WeakCallbackInfo<T>*>(data);
  cbinfo->isolate_ = v8::Isolate::GetCurrent();
  return cbinfo;
}

#undef NAN_WEAK_CALLBACK_SIG_
#undef NAN_WEAK_CALLBACK_DATA_TYPE_
#endif

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
template<typename T, typename M>
template<typename P>
inline void Persistent<T, M>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    v8::PersistentBase<T>::SetWeak(
        wcbd
      , WeakCallbackInfo<P>::template invokeparameter<true>
      , type);
  } else {
    v8::Local<T>* self = reinterpret_cast<v8::Local<T>*>(this);
    assert((*self)->IsObject());
    int count = (*self)->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = (*self)->GetAlignedPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    (*self)->SetAlignedPointerInInternalField(0, wcbd);
    v8::PersistentBase<T>::SetWeak(
        static_cast<WeakCallbackInfo<P>*>(0)
      , WeakCallbackInfo<P>::template invoketwofield<true>
      , type);
  }
}
#elif NODE_MODULE_VERSION > IOJS_1_1_MODULE_VERSION
template<typename T, typename M>
template<typename P>
inline void Persistent<T, M>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    v8::PersistentBase<T>::SetPhantom(
        wcbd
      , WeakCallbackInfo<P>::invokeparameter);
  } else {
    v8::Local<T>* self = reinterpret_cast<v8::Local<T>*>(this);
    assert((*self)->IsObject());
    int count = (*self)->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = (*self)->GetAlignedPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    (*self)->SetAlignedPointerInInternalField(0, wcbd);
    v8::PersistentBase<T>::SetPhantom(
        static_cast<WeakCallbackInfo<P>*>(0)
      , WeakCallbackInfo<P>::invoketwofield
      , 0
      , count > 1 ? 1 : kNoInternalFieldIndex);
  }
}
#elif NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
template<typename T, typename M>
template<typename P>
inline void Persistent<T, M>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    v8::PersistentBase<T>::SetPhantom(
        wcbd
      , WeakCallbackInfo<P>::invokeparameter);
  } else {
    v8::Local<T>* self = reinterpret_cast<v8::Local<T>*>(this);
    assert((*self)->IsObject());
    int count = (*self)->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = (*self)->GetAlignedPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    (*self)->SetAlignedPointerInInternalField(0, wcbd);
    v8::PersistentBase<T>::SetPhantom(
        WeakCallbackInfo<P>::invoketwofield
      , 0
      , count > 1 ? 1 : kNoInternalFieldIndex);
  }
}
#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
template<typename T, typename M>
template<typename P>
inline void Persistent<T, M>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    v8::PersistentBase<T>::SetWeak(wcbd, WeakCallbackInfo<P>::invoke);
  } else {
    v8::Local<T>* self = reinterpret_cast<v8::Local<T>*>(this);
    assert((*self)->IsObject());
    int count = (*self)->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = (*self)->GetAlignedPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    v8::PersistentBase<T>::SetWeak(wcbd, WeakCallbackInfo<P>::invoke);
  }
}
#else
template<typename T>
template<typename P>
inline void PersistentBase<T>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    persistent.MakeWeak(wcbd, WeakCallbackInfo<P>::invoke);
  } else {
    v8::Local<T>* self = reinterpret_cast<v8::Local<T>*>(this);
    assert((*self)->IsObject());
    int count = (*self)->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = (*self)->GetPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    persistent.MakeWeak(wcbd, WeakCallbackInfo<P>::invoke);
  }
}
#endif

#endif  // NAN_WEAK_H_
