## New

NAN provides a `Nan::New()` helper for the creation of new JavaScript objects in a way that's compatible across the supported versions of V8.

 - <a href="#api_nan_new"><b><code>Nan::New()</code></b></a>
 - <a href="#api_nan_undefined"><b><code>Nan::Undefined()</code></b></a>
 - <a href="#api_nan_null"><b><code>Nan::Null()</code></b></a>
 - <a href="#api_nan_true"><b><code>Nan::True()</code></b></a>
 - <a href="#api_nan_false"><b><code>Nan::False()</code></b></a>
 - <a href="#api_nan_empty_string"><b><code>Nan::EmptyString()</code></b></a>


<a name="api_nan_new"></a>
### Nan::New()

`Nan::New()` should be used to instantiate new JavaScript objects.

Refer to the specific V8 type in the [V8 documentation](https://v8docs.nodesource.com/io.js-3.3/d1/d83/classv8_1_1_data.html) for information on the types of arguments required for instantiation.

Signatures:

Return types are mostly omitted from the signatures for simplicity. In most cases the type will be contained within a `v8::Local<T>`. The following types will be contained within a `Nan::MaybeLocal<T>`: `v8::String`, `v8::Date`, `v8::RegExp`, `v8::Script`, `v8::UnboundScript`.

Empty objects:

```c++
Nan::New<T>();
```

Generic single and multiple-argument:

```c++
Nan::New<T>(A0 arg0);
Nan::New<T>(A0 arg0, A1 arg1);
Nan::New<T>(A0 arg0, A1 arg1, A2 arg2);
Nan::New<T>(A0 arg0, A1 arg1, A2 arg2, A3 arg3);
```

For creating `v8::FunctionTemplate` and `v8::Function` objects:

_The definition of `Nan::FunctionCallback` can be found in the [Method declaration](./methods.md#api_nan_method) documentation._

```c++
Nan::New<T>(Nan::FunctionCallback callback,
            v8::Local<v8::Value> data = v8::Local<v8::Value>());
Nan::New<T>(Nan::FunctionCallback callback,
            v8::Local<v8::Value> data = v8::Local<v8::Value>(),
            A2 a2 = A2());
```

Native number types:

```c++
v8::Local<v8::Boolean> Nan::New<T>(bool value);
v8::Local<v8::Int32> Nan::New<T>(int32_t value);
v8::Local<v8::Uint32> Nan::New<T>(uint32_t value);
v8::Local<v8::Number> Nan::New<T>(double value);
```

String types:

```c++
Nan::MaybeLocal<v8::String> Nan::New<T>(std::string const& value);
Nan::MaybeLocal<v8::String> Nan::New<T>(const char * value, int length);
Nan::MaybeLocal<v8::String> Nan::New<T>(const char * value);
Nan::MaybeLocal<v8::String> Nan::New<T>(const uint16_t * value);
Nan::MaybeLocal<v8::String> Nan::New<T>(const uint16_t * value, int length);
```

Specialized types:

```c++
v8::Local<v8::String> Nan::New<T>(v8::String::ExternalStringResource * value);
v8::Local<v8::String> Nan::New<T>(Nan::ExternalOneByteStringResource * value);
v8::Local<v8::RegExp> Nan::New<T>(v8::Local<v8::String> pattern, v8::RegExp::Flags flags);
```

Note that `Nan::ExternalOneByteStringResource` maps to [`v8::String::ExternalOneByteStringResource`](https://v8docs.nodesource.com/io.js-3.3/d9/db3/classv8_1_1_string_1_1_external_one_byte_string_resource.html), and `v8::String::ExternalAsciiStringResource` in older versions of V8.


<a name="api_nan_undefined"></a>
### Nan::Undefined()

A helper method to reference the `v8::Undefined` object in a way that is compatible across all supported versions of V8.

Signature:

```c++
v8::Local<v8::Primitive> Nan::Undefined()
```

<a name="api_nan_null"></a>
### Nan::Null()

A helper method to reference the `v8::Null` object in a way that is compatible across all supported versions of V8.

Signature:

```c++
v8::Local<v8::Primitive> Nan::Null()
```

<a name="api_nan_true"></a>
### Nan::True()

A helper method to reference the `v8::Boolean` object representing the `true` value in a way that is compatible across all supported versions of V8.

Signature:

```c++
v8::Local<v8::Boolean> Nan::True()
```

<a name="api_nan_false"></a>
### Nan::False()

A helper method to reference the `v8::Boolean` object representing the `false` value in a way that is compatible across all supported versions of V8.

Signature:

```c++
v8::Local<v8::Boolean> Nan::False()
```

<a name="api_nan_empty_string"></a>
### Nan::EmptyString()

Call [`v8::String::Empty`](https://v8docs.nodesource.com/io.js-3.3/d2/db3/classv8_1_1_string.html#a7c1bc8886115d7ee46f1d571dd6ebc6d) to reference the empty string in a way that is compatible across all supported versions of V8.

Signature:

```c++
v8::Local<v8::String> Nan::EmptyString()
```


<a name="api_nan_new_one_byte_string"></a>
### Nan::NewOneByteString()

An implementation of [`v8::String::NewFromOneByte()`](https://v8docs.nodesource.com/io.js-3.3/d2/db3/classv8_1_1_string.html#a5264d50b96d2c896ce525a734dc10f09) provided for consistent availability and API across supported versions of V8. Allocates a new string from Latin-1 data.

Signature:

```c++
Nan::MaybeLocal<v8::String> Nan::NewOneByteString(const uint8_t * value,
                                                  int length = -1)
```
