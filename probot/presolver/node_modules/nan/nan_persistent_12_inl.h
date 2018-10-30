/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_PERSISTENT_12_INL_H_
#define NAN_PERSISTENT_12_INL_H_

template<typename T, typename M> class Persistent :
    public v8::Persistent<T, M> {
 public:
  inline Persistent() : v8::Persistent<T, M>() {}

  template<typename S> inline Persistent(v8::Local<S> that) :
      v8::Persistent<T, M>(v8::Isolate::GetCurrent(), that) {}

  template<typename S, typename M2>
  inline
  Persistent(const v8::Persistent<S, M2> &that) :  // NOLINT(runtime/explicit)
      v8::Persistent<T, M2>(v8::Isolate::GetCurrent(), that) {}

  inline void Reset() { v8::PersistentBase<T>::Reset(); }

  template <typename S>
  inline void Reset(const v8::Local<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template <typename S>
  inline void Reset(const v8::PersistentBase<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template<typename P>
  inline void SetWeak(
    P *parameter
    , typename WeakCallbackInfo<P>::Callback callback
    , WeakCallbackType type);

 private:
  inline T *operator*() const { return *PersistentBase<T>::persistent; }

  template<typename S, typename M2>
  inline void Copy(const Persistent<S, M2> &that) {
    TYPE_CHECK(T, S);

    this->Reset();

    if (!that.IsEmpty()) {
      this->Reset(that);
      M::Copy(that, this);
    }
  }
};

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
template<typename T>
class Global : public v8::Global<T> {
 public:
  inline Global() : v8::Global<T>() {}

  template<typename S> inline Global(v8::Local<S> that) :
    v8::Global<T>(v8::Isolate::GetCurrent(), that) {}

  template<typename S>
  inline
  Global(const v8::PersistentBase<S> &that) :  // NOLINT(runtime/explicit)
      v8::Global<S>(v8::Isolate::GetCurrent(), that) {}

  inline void Reset() { v8::PersistentBase<T>::Reset(); }

  template <typename S>
  inline void Reset(const v8::Local<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template <typename S>
  inline void Reset(const v8::PersistentBase<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template<typename P>
  inline void SetWeak(
    P *parameter
    , typename WeakCallbackInfo<P>::Callback callback
    , WeakCallbackType type) {
    reinterpret_cast<Persistent<T>*>(this)->SetWeak(
        parameter, callback, type);
  }
};
#else
template<typename T>
class Global : public v8::UniquePersistent<T> {
 public:
  inline Global() : v8::UniquePersistent<T>() {}

  template<typename S> inline Global(v8::Local<S> that) :
    v8::UniquePersistent<T>(v8::Isolate::GetCurrent(), that) {}

  template<typename S>
  inline
  Global(const v8::PersistentBase<S> &that) :  // NOLINT(runtime/explicit)
      v8::UniquePersistent<S>(v8::Isolate::GetCurrent(), that) {}

  inline void Reset() { v8::PersistentBase<T>::Reset(); }

  template <typename S>
  inline void Reset(const v8::Local<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template <typename S>
  inline void Reset(const v8::PersistentBase<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template<typename P>
  inline void SetWeak(
    P *parameter
    , typename WeakCallbackInfo<P>::Callback callback
    , WeakCallbackType type) {
    reinterpret_cast<Persistent<T>*>(this)->SetWeak(
        parameter, callback, type);
  }
};
#endif

#endif  // NAN_PERSISTENT_12_INL_H_
