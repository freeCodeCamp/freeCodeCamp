## Scopes

A _local handle_ is a pointer to an object. All V8 objects are accessed using handles, they are necessary because of the way the V8 garbage collector works.

A handle scope can be thought of as a container for any number of handles. When you've finished with your handles, instead of deleting each one individually you can simply delete their scope.

The creation of `HandleScope` objects is different across the supported versions of V8. Therefore, NAN provides its own implementations that can be used safely across these.

 - <a href="#api_nan_handle_scope"><b><code>Nan::HandleScope</code></b></a>
 - <a href="#api_nan_escapable_handle_scope"><b><code>Nan::EscapableHandleScope</code></b></a>

Also see the V8 Embedders Guide section on [Handles and Garbage Collection](https://github.com/v8/v8/wiki/Embedder%27s%20Guide#handles-and-garbage-collection).

<a name="api_nan_handle_scope"></a>
### Nan::HandleScope

A simple wrapper around [`v8::HandleScope`](https://v8docs.nodesource.com/io.js-3.3/d3/d95/classv8_1_1_handle_scope.html).

Definition:

```c++
class Nan::HandleScope {
 public:
  Nan::HandleScope();
  static int NumberOfHandles();
};
```

Allocate a new `Nan::HandleScope` whenever you are creating new V8 JavaScript objects. Note that an implicit `HandleScope` is created for you on JavaScript-accessible methods so you do not need to insert one yourself.

Example:

```c++
// new object is created, it needs a new scope:
void Pointless() {
  Nan::HandleScope scope;
  v8::Local<v8::Object> obj = Nan::New<v8::Object>();
}

// JavaScript-accessible method already has a HandleScope
NAN_METHOD(Pointless2) {
  v8::Local<v8::Object> obj = Nan::New<v8::Object>();
}
```

<a name="api_nan_escapable_handle_scope"></a>
### Nan::EscapableHandleScope

Similar to [`Nan::HandleScope`](#api_nan_handle_scope) but should be used in cases where a function needs to return a V8 JavaScript type that has been created within it.

Definition:

```c++
class Nan::EscapableHandleScope {
 public:
  Nan::EscapableHandleScope();
  static int NumberOfHandles();
  template<typename T> v8::Local<T> Escape(v8::Local<T> value);
}
```

Use `Escape(value)` to return the object.

Example:

```c++
v8::Local<v8::Object> EmptyObj() {
  Nan::EscapableHandleScope scope;
  v8::Local<v8::Object> obj = Nan::New<v8::Object>();
  return scope.Escape(obj);
}
```

