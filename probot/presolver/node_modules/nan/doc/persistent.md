## Persistent references

An object reference that is independent of any `HandleScope` is a _persistent_ reference. Where a `Local` handle only lives as long as the `HandleScope` in which it was allocated, a `Persistent` handle remains valid until it is explicitly disposed.

Due to the evolution of the V8 API, it is necessary for NAN to provide a wrapper implementation of the `Persistent` classes to supply compatibility across the V8 versions supported.

 - <a href="#api_nan_persistent_base"><b><code>Nan::PersistentBase & v8::PersistentBase</code></b></a>
 - <a href="#api_nan_non_copyable_persistent_traits"><b><code>Nan::NonCopyablePersistentTraits & v8::NonCopyablePersistentTraits</code></b></a>
 - <a href="#api_nan_copyable_persistent_traits"><b><code>Nan::CopyablePersistentTraits & v8::CopyablePersistentTraits</code></b></a>
 - <a href="#api_nan_persistent"><b><code>Nan::Persistent</code></b></a>
 - <a href="#api_nan_global"><b><code>Nan::Global</code></b></a>
 - <a href="#api_nan_weak_callback_info"><b><code>Nan::WeakCallbackInfo</code></b></a>
 - <a href="#api_nan_weak_callback_type"><b><code>Nan::WeakCallbackType</code></b></a>

Also see the V8 Embedders Guide section on [Handles and Garbage Collection](https://developers.google.com/v8/embed#handles).

<a name="api_nan_persistent_base"></a>
### Nan::PersistentBase & v8::PersistentBase

A persistent handle contains a reference to a storage cell in V8 which holds an object value and which is updated by the garbage collector whenever the object is moved. A new storage cell can be created using the constructor or `Nan::PersistentBase::Reset()`. Existing handles can be disposed using an argument-less `Nan::PersistentBase::Reset()`.

Definition:

_(note: this is implemented as `Nan::PersistentBase` for older versions of V8 and the native `v8::PersistentBase` is used for newer versions of V8)_

```c++
template<typename T> class PersistentBase {
 public:
  /**
   * If non-empty, destroy the underlying storage cell
   */
  void Reset();

  /**
   * If non-empty, destroy the underlying storage cell and create a new one with
   * the contents of another if it is also non-empty
   */
  template<typename S> void Reset(const v8::Local<S> &other);

  /**
   * If non-empty, destroy the underlying storage cell and create a new one with
   * the contents of another if it is also non-empty
   */
  template<typename S> void Reset(const PersistentBase<S> &other);

  /** Returns true if the handle is empty. */
  bool IsEmpty() const;

  /**
   * If non-empty, destroy the underlying storage cell
   * IsEmpty() will return true after this call.
   */
  void Empty();

  template<typename S> bool operator==(const PersistentBase<S> &that);

  template<typename S> bool operator==(const v8::Local<S> &that);

  template<typename S> bool operator!=(const PersistentBase<S> &that);

  template<typename S> bool operator!=(const v8::Local<S> &that);

   /**
   *  Install a finalization callback on this object.
   *  NOTE: There is no guarantee as to *when* or even *if* the callback is
   *  invoked. The invocation is performed solely on a best effort basis.
   *  As always, GC-based finalization should *not* be relied upon for any
   *  critical form of resource management! At the moment you can either
   *  specify a parameter for the callback or the location of two internal
   *  fields in the dying object.
   */
  template<typename P>
  void SetWeak(P *parameter,
               typename WeakCallbackInfo<P>::Callback callback,
               WeakCallbackType type);

  void ClearWeak();

  /**
   * Marks the reference to this object independent. Garbage collector is free
   * to ignore any object groups containing this object. Weak callback for an
   * independent handle should not assume that it will be preceded by a global
   * GC prologue callback or followed by a global GC epilogue callback.
   */
  void MarkIndependent() const;

  bool IsIndependent() const;

  /** Checks if the handle holds the only reference to an object. */
  bool IsNearDeath() const;

  /** Returns true if the handle's reference is weak.  */
  bool IsWeak() const
};
```

See the V8 documentation for [`PersistentBase`](https://v8docs.nodesource.com/io.js-3.3/d4/dca/classv8_1_1_persistent_base.html) for further information.

**Tip:** To get a `v8::Local` reference to the original object back from a `PersistentBase` or `Persistent` object:

```c++
v8::Local<v8::Object> object = Nan::New(persistent);
```

<a name="api_nan_non_copyable_persistent_traits"></a>
### Nan::NonCopyablePersistentTraits & v8::NonCopyablePersistentTraits

Default traits for `Nan::Persistent`. This class does not allow use of the a copy constructor or assignment operator. At present `kResetInDestructor` is not set, but that will change in a future version.

Definition:

_(note: this is implemented as `Nan::NonCopyablePersistentTraits` for older versions of V8 and the native `v8::NonCopyablePersistentTraits` is used for newer versions of V8)_

```c++
template<typename T> class NonCopyablePersistentTraits {
 public:
  typedef Persistent<T, NonCopyablePersistentTraits<T> > NonCopyablePersistent;

  static const bool kResetInDestructor = false;

  template<typename S, typename M>
  static void Copy(const Persistent<S, M> &source,
                   NonCopyablePersistent *dest);

  template<typename O> static void Uncompilable();
};
```

See the V8 documentation for [`NonCopyablePersistentTraits`](https://v8docs.nodesource.com/io.js-3.3/de/d73/classv8_1_1_non_copyable_persistent_traits.html) for further information.

<a name="api_nan_copyable_persistent_traits"></a>
### Nan::CopyablePersistentTraits & v8::CopyablePersistentTraits

A helper class of traits to allow copying and assignment of `Persistent`. This will clone the contents of storage cell, but not any of the flags, etc..

Definition:

_(note: this is implemented as `Nan::CopyablePersistentTraits` for older versions of V8 and the native `v8::NonCopyablePersistentTraits` is used for newer versions of V8)_

```c++
template<typename T>
class CopyablePersistentTraits {
 public:
  typedef Persistent<T, CopyablePersistentTraits<T> > CopyablePersistent;

  static const bool kResetInDestructor = true;

  template<typename S, typename M>
  static void Copy(const Persistent<S, M> &source,
                   CopyablePersistent *dest);
};
```

See the V8 documentation for [`CopyablePersistentTraits`](https://v8docs.nodesource.com/io.js-3.3/da/d5c/structv8_1_1_copyable_persistent_traits.html) for further information.

<a name="api_nan_persistent"></a>
### Nan::Persistent

A type of `PersistentBase` which allows copy and assignment. Copy, assignment and destructor behavior is controlled by the traits class `M`.

Definition:

```c++
template<typename T, typename M = NonCopyablePersistentTraits<T> >
class Persistent;

template<typename T, typename M> class Persistent : public PersistentBase<T> {
 public:
 /**
  * A Persistent with no storage cell.
  */
  Persistent();

  /**
   * Construct a Persistent from a v8::Local. When the v8::Local is non-empty, a
   * new storage cell is created pointing to the same object, and no flags are
   * set.
   */
  template<typename S> Persistent(v8::Local<S> that);

  /**
   * Construct a Persistent from a Persistent. When the Persistent is non-empty,
   * a new storage cell is created pointing to the same object, and no flags are
   * set.
   */
  Persistent(const Persistent &that);

  /**
   * The copy constructors and assignment operator create a Persistent exactly
   * as the Persistent constructor, but the Copy function from the traits class
   * is called, allowing the setting of flags based on the copied Persistent.
   */
  Persistent &operator=(const Persistent &that);

  template <typename S, typename M2>
  Persistent &operator=(const Persistent<S, M2> &that);

  /**
   * The destructor will dispose the Persistent based on the kResetInDestructor
   * flags in the traits class.  Since not calling dispose can result in a
   * memory leak, it is recommended to always set this flag.
   */
  ~Persistent();
};
```

See the V8 documentation for [`Persistent`](https://v8docs.nodesource.com/io.js-3.3/d2/d78/classv8_1_1_persistent.html) for further information.

<a name="api_nan_global"></a>
### Nan::Global

A type of `PersistentBase` which has move semantics.

```c++
template<typename T> class Global : public PersistentBase<T> {
 public:
  /**
   * A Global with no storage cell.
   */
  Global();

  /**
   * Construct a Global from a v8::Local. When the v8::Local is non-empty, a new
   * storage cell is created pointing to the same object, and no flags are set.
   */
  template<typename S> Global(v8::Local<S> that);
  /**
   * Construct a Global from a PersistentBase. When the Persistent is non-empty,
   * a new storage cell is created pointing to the same object, and no flags are
   * set.
   */
  template<typename S> Global(const PersistentBase<S> &that);

  /**
   * Pass allows returning globals from functions, etc.
   */
  Global Pass();
};
```

See the V8 documentation for [`Global`](https://v8docs.nodesource.com/io.js-3.3/d5/d40/classv8_1_1_global.html) for further information.

<a name="api_nan_weak_callback_info"></a>
### Nan::WeakCallbackInfo

`Nan::WeakCallbackInfo` is used as an argument when setting a persistent reference as weak. You may need to free any external resources attached to the object. It is a mirror of `v8:WeakCallbackInfo` as found in newer versions of V8.

Definition:

```c++
template<typename T> class WeakCallbackInfo {
 public:
  typedef void (*Callback)(const WeakCallbackInfo<T>& data);

  v8::Isolate *GetIsolate() const;

  /**
   * Get the parameter that was associated with the weak handle.
   */
  T *GetParameter() const;

  /**
   * Get pointer from internal field, index can be 0 or 1.
   */
  void *GetInternalField(int index) const;
};
```

Example usage:

```c++
void weakCallback(const WeakCallbackInfo<int> &data) {
  int *parameter = data.GetParameter();
  delete parameter;
}

Persistent<v8::Object> obj;
int *data = new int(0);
obj.SetWeak(data, callback, WeakCallbackType::kParameter);
```

See the V8 documentation for [`WeakCallbackInfo`](https://v8docs.nodesource.com/io.js-3.3/d8/d06/classv8_1_1_weak_callback_info.html) for further information.

<a name="api_nan_weak_callback_type"></a>
### Nan::WeakCallbackType

Represents the type of a weak callback.
A weak callback of type `kParameter` makes the supplied parameter to `Nan::PersistentBase::SetWeak` available through `WeakCallbackInfo::GetParameter`.
A weak callback of type `kInternalFields` uses up to two internal fields at indices 0 and 1 on the `Nan::PersistentBase<v8::Object>` being made weak.
Note that only `v8::Object`s and derivatives can have internal fields.

Definition:

```c++
enum class WeakCallbackType { kParameter, kInternalFields };
```
