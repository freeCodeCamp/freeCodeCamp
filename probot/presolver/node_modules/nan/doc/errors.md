## Errors

NAN includes helpers for creating, throwing and catching Errors as much of this functionality varies across the supported versions of V8 and must be abstracted.

Note that an Error object is simply a specialized form of `v8::Value`.

Also consult the V8 Embedders Guide section on [Exceptions](https://developers.google.com/v8/embed#exceptions) for more information.

 - <a href="#api_nan_error"><b><code>Nan::Error()</code></b></a>
 - <a href="#api_nan_range_error"><b><code>Nan::RangeError()</code></b></a>
 - <a href="#api_nan_reference_error"><b><code>Nan::ReferenceError()</code></b></a>
 - <a href="#api_nan_syntax_error"><b><code>Nan::SyntaxError()</code></b></a>
 - <a href="#api_nan_type_error"><b><code>Nan::TypeError()</code></b></a>
 - <a href="#api_nan_throw_error"><b><code>Nan::ThrowError()</code></b></a>
 - <a href="#api_nan_throw_range_error"><b><code>Nan::ThrowRangeError()</code></b></a>
 - <a href="#api_nan_throw_reference_error"><b><code>Nan::ThrowReferenceError()</code></b></a>
 - <a href="#api_nan_throw_syntax_error"><b><code>Nan::ThrowSyntaxError()</code></b></a>
 - <a href="#api_nan_throw_type_error"><b><code>Nan::ThrowTypeError()</code></b></a>
 - <a href="#api_nan_fatal_exception"><b><code>Nan::FatalException()</code></b></a>
 - <a href="#api_nan_errno_exception"><b><code>Nan::ErrnoException()</code></b></a>
 - <a href="#api_nan_try_catch"><b><code>Nan::TryCatch</code></b></a>


<a name="api_nan_error"></a>
### Nan::Error()

Create a new Error object using the [v8::Exception](https://v8docs.nodesource.com/io.js-3.3/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an Error object is simply a specialized form of `v8::Value`.

Signature:

```c++
v8::Local<v8::Value> Nan::Error(const char *msg);
v8::Local<v8::Value> Nan::Error(v8::Local<v8::String> msg);
```


<a name="api_nan_range_error"></a>
### Nan::RangeError()

Create a new RangeError object using the [v8::Exception](https://v8docs.nodesource.com/io.js-3.3/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an RangeError object is simply a specialized form of `v8::Value`.

Signature:

```c++
v8::Local<v8::Value> Nan::RangeError(const char *msg);
v8::Local<v8::Value> Nan::RangeError(v8::Local<v8::String> msg);
```


<a name="api_nan_reference_error"></a>
### Nan::ReferenceError()

Create a new ReferenceError object using the [v8::Exception](https://v8docs.nodesource.com/io.js-3.3/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an ReferenceError object is simply a specialized form of `v8::Value`.

Signature:

```c++
v8::Local<v8::Value> Nan::ReferenceError(const char *msg);
v8::Local<v8::Value> Nan::ReferenceError(v8::Local<v8::String> msg);
```


<a name="api_nan_syntax_error"></a>
### Nan::SyntaxError()

Create a new SyntaxError object using the [v8::Exception](https://v8docs.nodesource.com/io.js-3.3/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an SyntaxError object is simply a specialized form of `v8::Value`.

Signature:

```c++
v8::Local<v8::Value> Nan::SyntaxError(const char *msg);
v8::Local<v8::Value> Nan::SyntaxError(v8::Local<v8::String> msg);
```


<a name="api_nan_type_error"></a>
### Nan::TypeError()

Create a new TypeError object using the [v8::Exception](https://v8docs.nodesource.com/io.js-3.3/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an TypeError object is simply a specialized form of `v8::Value`.

Signature:

```c++
v8::Local<v8::Value> Nan::TypeError(const char *msg);
v8::Local<v8::Value> Nan::TypeError(v8::Local<v8::String> msg);
```


<a name="api_nan_throw_error"></a>
### Nan::ThrowError()

Throw an Error object (a specialized `v8::Value` as above) in the current context. If a `msg` is provided, a new Error object will be created.

Signature:

```c++
void Nan::ThrowError(const char *msg);
void Nan::ThrowError(v8::Local<v8::String> msg);
void Nan::ThrowError(v8::Local<v8::Value> error);
```


<a name="api_nan_throw_range_error"></a>
### Nan::ThrowRangeError()

Throw an RangeError object (a specialized `v8::Value` as above) in the current context. If a `msg` is provided, a new RangeError object will be created.

Signature:

```c++
void Nan::ThrowRangeError(const char *msg);
void Nan::ThrowRangeError(v8::Local<v8::String> msg);
void Nan::ThrowRangeError(v8::Local<v8::Value> error);
```


<a name="api_nan_throw_reference_error"></a>
### Nan::ThrowReferenceError()

Throw an ReferenceError object (a specialized `v8::Value` as above) in the current context. If a `msg` is provided, a new ReferenceError object will be created.

Signature:

```c++
void Nan::ThrowReferenceError(const char *msg);
void Nan::ThrowReferenceError(v8::Local<v8::String> msg);
void Nan::ThrowReferenceError(v8::Local<v8::Value> error);
```


<a name="api_nan_throw_syntax_error"></a>
### Nan::ThrowSyntaxError()

Throw an SyntaxError object (a specialized `v8::Value` as above) in the current context. If a `msg` is provided, a new SyntaxError object will be created.

Signature:

```c++
void Nan::ThrowSyntaxError(const char *msg);
void Nan::ThrowSyntaxError(v8::Local<v8::String> msg);
void Nan::ThrowSyntaxError(v8::Local<v8::Value> error);
```


<a name="api_nan_throw_type_error"></a>
### Nan::ThrowTypeError()

Throw an TypeError object (a specialized `v8::Value` as above) in the current context. If a `msg` is provided, a new TypeError object will be created.

Signature:

```c++
void Nan::ThrowTypeError(const char *msg);
void Nan::ThrowTypeError(v8::Local<v8::String> msg);
void Nan::ThrowTypeError(v8::Local<v8::Value> error);
```

<a name="api_nan_fatal_exception"></a>
### Nan::FatalException()

Replaces `node::FatalException()` which has a different API across supported versions of Node. For use with [`Nan::TryCatch`](#api_nan_try_catch).

Signature:

```c++
void Nan::FatalException(const Nan::TryCatch& try_catch);
```

<a name="api_nan_errno_exception"></a>
### Nan::ErrnoException()

Replaces `node::ErrnoException()` which has a different API across supported versions of Node. 

Signature:

```c++
v8::Local<v8::Value> Nan::ErrnoException(int errorno,
                                         const char* syscall = NULL,
                                         const char* message = NULL,
                                         const char* path = NULL);
```


<a name="api_nan_try_catch"></a>
### Nan::TryCatch

A simple wrapper around [`v8::TryCatch`](https://v8docs.nodesource.com/io.js-3.3/d4/dc6/classv8_1_1_try_catch.html) compatible with all supported versions of V8. Can be used as a direct replacement in most cases. See also [`Nan::FatalException()`](#api_nan_fatal_exception) for an internal use compatible with `node::FatalException`.

Signature:

```c++
class Nan::TryCatch {
 public:
  Nan::TryCatch();

  bool HasCaught() const;

  bool CanContinue() const;

  v8::Local<v8::Value> ReThrow();

  v8::Local<v8::Value> Exception() const;

  // Nan::MaybeLocal for older versions of V8
  v8::MaybeLocal<v8::Value> StackTrace() const;

  v8::Local<v8::Message> Message() const;

  void Reset();

  void SetVerbose(bool value);

  void SetCaptureMessage(bool value);
};
```

