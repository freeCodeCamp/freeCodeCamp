/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_PERSISTENT_PRE_12_INL_H_
#define NAN_PERSISTENT_PRE_12_INL_H_

template<typename T>
class PersistentBase {
  v8::Persistent<T> persistent;
  template<typename U>
  friend v8::Local<U> New(const PersistentBase<U> &p);
  template<typename U, typename M>
  friend v8::Local<U> New(const Persistent<U, M> &p);
  template<typename U>
  friend v8::Local<U> New(const Global<U> &p);
  template<typename S> friend class ReturnValue;

 public:
  inline PersistentBase() :
      persistent() {}

  inline void Reset() {
    persistent.Dispose();
    persistent.Clear();
  }

  template<typename S>
  inline void Reset(const v8::Local<S> &other) {
    TYPE_CHECK(T, S);

    if (!persistent.IsEmpty()) {
      persistent.Dispose();
    }

    if (other.IsEmpty()) {
      persistent.Clear();
    } else {
      persistent = v8::Persistent<T>::New(other);
    }
  }

  template<typename S>
  inline void Reset(const PersistentBase<S> &other) {
    TYPE_CHECK(T, S);

    if (!persistent.IsEmpty()) {
      persistent.Dispose();
    }

    if (other.IsEmpty()) {
      persistent.Clear();
    } else {
      persistent = v8::Persistent<T>::New(other.persistent);
    }
  }

  inline bool IsEmpty() const { return persistent.IsEmpty(); }

  inline void Empty() { persistent.Clear(); }

  template<typename S>
  inline bool operator==(const PersistentBase<S> &that) const {
    return this->persistent == that.persistent;
  }

  template<typename S>
  inline bool operator==(const v8::Local<S> &that) const {
    return this->persistent == that;
  }

  template<typename S>
  inline bool operator!=(const PersistentBase<S> &that) const {
    return !operator==(that);
  }

  template<typename S>
  inline bool operator!=(const v8::Local<S> &that) const {
    return !operator==(that);
  }

  template<typename P>
  inline void SetWeak(
    P *parameter
    , typename WeakCallbackInfo<P>::Callback callback
    , WeakCallbackType type);

  inline void ClearWeak() { persistent.ClearWeak(); }

  inline void MarkIndependent() { persistent.MarkIndependent(); }

  inline bool IsIndependent() const { return persistent.IsIndependent(); }

  inline bool IsNearDeath() const { return persistent.IsNearDeath(); }

  inline bool IsWeak() const { return persistent.IsWeak(); }

 private:
  inline explicit PersistentBase(v8::Persistent<T> that) :
      persistent(that) { }
  inline explicit PersistentBase(T *val) : persistent(val) {}
  template<typename S, typename M> friend class Persistent;
  template<typename S> friend class Global;
  friend class ObjectWrap;
};

template<typename T>
class NonCopyablePersistentTraits {
 public:
  typedef Persistent<T, NonCopyablePersistentTraits<T> >
      NonCopyablePersistent;
  static const bool kResetInDestructor = false;
  template<typename S, typename M>
  inline static void Copy(const Persistent<S, M> &source,
                             NonCopyablePersistent *dest) {
    Uncompilable<v8::Object>();
  }

  template<typename O> inline static void Uncompilable() {
    TYPE_CHECK(O, v8::Primitive);
  }
};

template<typename T>
struct CopyablePersistentTraits {
  typedef Persistent<T, CopyablePersistentTraits<T> > CopyablePersistent;
  static const bool kResetInDestructor = true;
  template<typename S, typename M>
  static inline void Copy(const Persistent<S, M> &source,
                             CopyablePersistent *dest) {}
};

template<typename T, typename M> class Persistent :
    public PersistentBase<T> {
 public:
  inline Persistent() {}

  template<typename S> inline Persistent(v8::Handle<S> that)
      : PersistentBase<T>(v8::Persistent<T>::New(that)) {
    TYPE_CHECK(T, S);
  }

  inline Persistent(const Persistent &that) : PersistentBase<T>() {
    Copy(that);
  }

  template<typename S, typename M2>
  inline Persistent(const Persistent<S, M2> &that) :
      PersistentBase<T>() {
    Copy(that);
  }

  inline Persistent &operator=(const Persistent &that) {
    Copy(that);
    return *this;
  }

  template <class S, class M2>
  inline Persistent &operator=(const Persistent<S, M2> &that) {
    Copy(that);
    return *this;
  }

  inline ~Persistent() {
    if (M::kResetInDestructor) this->Reset();
  }

 private:
  inline T *operator*() const { return *PersistentBase<T>::persistent; }

  template<typename S, typename M2>
  inline void Copy(const Persistent<S, M2> &that) {
    TYPE_CHECK(T, S);

    this->Reset();

    if (!that.IsEmpty()) {
      this->persistent = v8::Persistent<T>::New(that.persistent);
      M::Copy(that, this);
    }
  }
};

template<typename T>
class Global : public PersistentBase<T> {
  struct RValue {
    inline explicit RValue(Global* obj) : object(obj) {}
    Global* object;
  };

 public:
  inline Global() : PersistentBase<T>(0) { }

  template <typename S>
  inline Global(v8::Local<S> that)  // NOLINT(runtime/explicit)
      : PersistentBase<T>(v8::Persistent<T>::New(that)) {
    TYPE_CHECK(T, S);
  }

  template <typename S>
  inline Global(const PersistentBase<S> &that)  // NOLINT(runtime/explicit)
    : PersistentBase<T>(that) {
    TYPE_CHECK(T, S);
  }
  /**
   * Move constructor.
   */
  inline Global(RValue rvalue)  // NOLINT(runtime/explicit)
    : PersistentBase<T>(rvalue.object->persistent) {
    rvalue.object->Reset();
  }
  inline ~Global() { this->Reset(); }
  /**
   * Move via assignment.
   */
  template<typename S>
  inline Global &operator=(Global<S> rhs) {
    TYPE_CHECK(T, S);
    this->Reset(rhs.persistent);
    rhs.Reset();
    return *this;
  }
  /**
   * Cast operator for moves.
   */
  inline operator RValue() { return RValue(this); }
  /**
   * Pass allows returning uniques from functions, etc.
   */
  Global Pass() { return Global(RValue(this)); }

 private:
  Global(Global &);
  void operator=(Global &);
  template<typename S> friend class ReturnValue;
};

#endif  // NAN_PERSISTENT_PRE_12_INL_H_
