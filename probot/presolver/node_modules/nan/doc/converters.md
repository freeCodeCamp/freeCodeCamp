## Converters

NAN contains functions that convert `v8::Value`s to other `v8::Value` types and native types. Since type conversion is not guaranteed to succeed, they return `Nan::Maybe` types. These converters can be used in place of `value->ToX()` and `value->XValue()` (where `X` is one of the types, e.g. `Boolean`) in a way that provides a consistent interface across V8 versions. Newer versions of V8 use the new `v8::Maybe` and `v8::MaybeLocal` types for these conversions, older versions don't have this functionality so it is provided by NAN.

 - <a href="#api_nan_to"><b><code>Nan::To()</code></b></a>

<a name="api_nan_to"></a>
### Nan::To()

Converts a `v8::Local<v8::Value>` to a different subtype of `v8::Value` or to a native data type. Returns a `Nan::MaybeLocal<>` or a `Nan::Maybe<>` accordingly.

See [maybe_types.md](./maybe_types.md) for more information on `Nan::Maybe` types.

Signatures:

```c++
// V8 types
Nan::MaybeLocal<v8::Boolean> Nan::To<v8::Boolean>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Int32> Nan::To<v8::Int32>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Integer> Nan::To<v8::Integer>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Object> Nan::To<v8::Object>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Number> Nan::To<v8::Number>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::String> Nan::To<v8::String>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Uint32> Nan::To<v8::Uint32>(v8::Local<v8::Value> val);

// Native types
Nan::Maybe<bool> Nan::To<bool>(v8::Local<v8::Value> val);
Nan::Maybe<double> Nan::To<double>(v8::Local<v8::Value> val);
Nan::Maybe<int32_t> Nan::To<int32_t>(v8::Local<v8::Value> val);
Nan::Maybe<int64_t> Nan::To<int64_t>(v8::Local<v8::Value> val);
Nan::Maybe<uint32_t> Nan::To<uint32_t>(v8::Local<v8::Value> val);
```

### Example

```c++
v8::Local<v8::Value> val;
Nan::MaybeLocal<v8::String> str = Nan::To<v8::String>(val);
Nan::Maybe<double> d = Nan::To<double>(val);
```

