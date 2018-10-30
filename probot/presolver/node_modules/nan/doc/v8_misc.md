## Miscellaneous V8 Helpers

 - <a href="#api_nan_utf8_string"><b><code>Nan::Utf8String</code></b></a>
 - <a href="#api_nan_get_current_context"><b><code>Nan::GetCurrentContext()</code></b></a>
 - <a href="#api_nan_set_isolate_data"><b><code>Nan::SetIsolateData()</code></b></a>
 - <a href="#api_nan_get_isolate_data"><b><code>Nan::GetIsolateData()</code></b></a>
 - <a href="#api_nan_typedarray_contents"><b><code>Nan::TypedArrayContents</code></b></a>


<a name="api_nan_utf8_string"></a>
### Nan::Utf8String

Converts an object to a UTF-8-encoded character array. If conversion to a string fails (e.g. due to an exception in the toString() method of the object) then the length() method returns 0 and the * operator returns NULL. The underlying memory used for this object is managed by the object.

An implementation of [`v8::String::Utf8Value`](https://v8docs.nodesource.com/io.js-3.3/d4/d1b/classv8_1_1_string_1_1_utf8_value.html) that is consistent across all supported versions of V8.

Definition:

```c++
class Nan::Utf8String {
 public:
  Nan::Utf8String(v8::Local<v8::Value> from);

  int length() const;

  char* operator*();
  const char* operator*() const;
};
```

<a name="api_nan_get_current_context"></a>
### Nan::GetCurrentContext()

A call to [`v8::Isolate::GetCurrent()->GetCurrentContext()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#a81c7a1ed7001ae2a65e89107f75fd053) that works across all supported versions of V8.

Signature:

```c++
v8::Local<v8::Context> Nan::GetCurrentContext()
```

<a name="api_nan_set_isolate_data"></a>
### Nan::SetIsolateData()

A helper to provide a consistent API to [`v8::Isolate#SetData()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#a7acadfe7965997e9c386a05f098fbe36).

Signature:

```c++
void Nan::SetIsolateData(v8::Isolate *isolate, T *data)
```


<a name="api_nan_get_isolate_data"></a>
### Nan::GetIsolateData()

A helper to provide a consistent API to [`v8::Isolate#GetData()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#aabd223436bc1100a787dadaa024c6257).

Signature:

```c++
T *Nan::GetIsolateData(v8::Isolate *isolate)
```

<a name="api_nan_typedarray_contents"></a>
### Nan::TypedArrayContents<T>

A helper class for accessing the contents of an ArrayBufferView (aka a typedarray) from C++.  If the input array is not a valid typedarray, then the data pointer of TypedArrayContents will default to `NULL` and the length will be 0.  If the data pointer is not compatible with the alignment requirements of type, an assertion error will fail.

Note that you must store a reference to the `array` object while you are accessing its contents.

Definition:

```c++
template<typename T>
class Nan::TypedArrayContents {
 public:
  TypedArrayContents(v8::Local<Value> array);

  size_t length() const;

  T* const operator*();
  const T* const operator*() const;
};
```
