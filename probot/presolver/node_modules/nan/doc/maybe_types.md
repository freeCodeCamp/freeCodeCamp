## Maybe Types

The `Nan::MaybeLocal` and `Nan::Maybe` types are monads that encapsulate `v8::Local` handles that _may be empty_.

* **Maybe Types**
  - <a href="#api_nan_maybe_local"><b><code>Nan::MaybeLocal</code></b></a>
  - <a href="#api_nan_maybe"><b><code>Nan::Maybe</code></b></a>
  - <a href="#api_nan_nothing"><b><code>Nan::Nothing</code></b></a>
  - <a href="#api_nan_just"><b><code>Nan::Just</code></b></a>
* **Maybe Helpers**
  - <a href="#api_nan_call"><b><code>Nan::Call()</code></b></a>
  - <a href="#api_nan_to_detail_string"><b><code>Nan::ToDetailString()</code></b></a>
  - <a href="#api_nan_to_array_index"><b><code>Nan::ToArrayIndex()</code></b></a>
  - <a href="#api_nan_equals"><b><code>Nan::Equals()</code></b></a>
  - <a href="#api_nan_new_instance"><b><code>Nan::NewInstance()</code></b></a>
  - <a href="#api_nan_get_function"><b><code>Nan::GetFunction()</code></b></a>
  - <a href="#api_nan_set"><b><code>Nan::Set()</code></b></a>
  - <a href="#api_nan_define_own_property"><b><code>Nan::DefineOwnProperty()</code></b></a>
  - <a href="#api_nan_force_set"><del><b><code>Nan::ForceSet()</code></b></del></a>
  - <a href="#api_nan_get"><b><code>Nan::Get()</code></b></a>
  - <a href="#api_nan_get_property_attribute"><b><code>Nan::GetPropertyAttributes()</code></b></a>
  - <a href="#api_nan_has"><b><code>Nan::Has()</code></b></a>
  - <a href="#api_nan_delete"><b><code>Nan::Delete()</code></b></a>
  - <a href="#api_nan_get_property_names"><b><code>Nan::GetPropertyNames()</code></b></a>
  - <a href="#api_nan_get_own_property_names"><b><code>Nan::GetOwnPropertyNames()</code></b></a>
  - <a href="#api_nan_set_prototype"><b><code>Nan::SetPrototype()</code></b></a>
  - <a href="#api_nan_object_proto_to_string"><b><code>Nan::ObjectProtoToString()</code></b></a>
  - <a href="#api_nan_has_own_property"><b><code>Nan::HasOwnProperty()</code></b></a>
  - <a href="#api_nan_has_real_named_property"><b><code>Nan::HasRealNamedProperty()</code></b></a>
  - <a href="#api_nan_has_real_indexed_property"><b><code>Nan::HasRealIndexedProperty()</code></b></a>
  - <a href="#api_nan_has_real_named_callback_property"><b><code>Nan::HasRealNamedCallbackProperty()</code></b></a>
  - <a href="#api_nan_get_real_named_property_in_prototype_chain"><b><code>Nan::GetRealNamedPropertyInPrototypeChain()</code></b></a>
  - <a href="#api_nan_get_real_named_property"><b><code>Nan::GetRealNamedProperty()</code></b></a>
  - <a href="#api_nan_call_as_function"><b><code>Nan::CallAsFunction()</code></b></a>
  - <a href="#api_nan_call_as_constructor"><b><code>Nan::CallAsConstructor()</code></b></a>
  - <a href="#api_nan_get_source_line"><b><code>Nan::GetSourceLine()</code></b></a>
  - <a href="#api_nan_get_line_number"><b><code>Nan::GetLineNumber()</code></b></a>
  - <a href="#api_nan_get_start_column"><b><code>Nan::GetStartColumn()</code></b></a>
  - <a href="#api_nan_get_end_column"><b><code>Nan::GetEndColumn()</code></b></a>
  - <a href="#api_nan_clone_element_at"><b><code>Nan::CloneElementAt()</code></b></a>
  - <a href="#api_nan_has_private"><b><code>Nan::HasPrivate()</code></b></a>
  - <a href="#api_nan_get_private"><b><code>Nan::GetPrivate()</code></b></a>
  - <a href="#api_nan_set_private"><b><code>Nan::SetPrivate()</code></b></a>
  - <a href="#api_nan_delete_private"><b><code>Nan::DeletePrivate()</code></b></a>
  - <a href="#api_nan_make_maybe"><b><code>Nan::MakeMaybe()</code></b></a>

<a name="api_nan_maybe_local"></a>
### Nan::MaybeLocal

A `Nan::MaybeLocal<T>` is a wrapper around [`v8::Local<T>`](https://v8docs.nodesource.com/io.js-3.3/de/deb/classv8_1_1_local.html) that enforces a check that determines whether the `v8::Local<T>` is empty before it can be used.

If an API method returns a `Nan::MaybeLocal`, the API method can potentially fail either because an exception is thrown, or because an exception is pending, e.g. because a previous API call threw an exception that hasn't been caught yet, or because a `v8::TerminateExecution` exception was thrown. In that case, an empty `Nan::MaybeLocal` is returned.

Definition:

```c++
template<typename T> class Nan::MaybeLocal {
 public:
  MaybeLocal();

  template<typename S> MaybeLocal(v8::Local<S> that);

  bool IsEmpty() const;

  template<typename S> bool ToLocal(v8::Local<S> *out);

  // Will crash if the MaybeLocal<> is empty.
  v8::Local<T> ToLocalChecked();

  template<typename S> v8::Local<S> FromMaybe(v8::Local<S> default_value) const;
};
```

See the documentation for [`v8::MaybeLocal`](https://v8docs.nodesource.com/io.js-3.3/d8/d7d/classv8_1_1_maybe_local.html) for further details.

<a name="api_nan_maybe"></a>
### Nan::Maybe

A simple `Nan::Maybe` type, representing an object which may or may not have a value, see https://hackage.haskell.org/package/base/docs/Data-Maybe.html.

If an API method returns a `Nan::Maybe<>`, the API method can potentially fail either because an exception is thrown, or because an exception is pending, e.g. because a previous API call threw an exception that hasn't been caught yet, or because a `v8::TerminateExecution` exception was thrown. In that case, a "Nothing" value is returned.

Definition:

```c++
template<typename T> class Nan::Maybe {
 public:
  bool IsNothing() const;
  bool IsJust() const;

  // Will crash if the Maybe<> is nothing.
  T FromJust();

  T FromMaybe(const T& default_value);

  bool operator==(const Maybe &other);

  bool operator!=(const Maybe &other);
};
```

See the documentation for [`v8::Maybe`](https://v8docs.nodesource.com/io.js-3.3/d9/d4b/classv8_1_1_maybe.html) for further details.

<a name="api_nan_nothing"></a>
### Nan::Nothing

Construct an empty `Nan::Maybe` type representing _nothing_.

```c++
template<typename T> Nan::Maybe<T> Nan::Nothing();
```

<a name="api_nan_just"></a>
### Nan::Just

Construct a `Nan::Maybe` type representing _just_ a value.

```c++
template<typename T> Nan::Maybe<T> Nan::Just(const T &t);
```

<a name="api_nan_call"></a>
### Nan::Call()

A helper method for calling a synchronous [`v8::Function#Call()`](https://v8docs.nodesource.com/io.js-3.3/d5/d54/classv8_1_1_function.html#a468a89f737af0612db10132799c827c0) in a way compatible across supported versions of V8.

For asynchronous callbacks, use Nan::Callback::Call along with an AsyncResource.

Signature:

```c++
Nan::MaybeLocal<v8::Value> Nan::Call(v8::Local<v8::Function> fun, v8::Local<v8::Object> recv, int argc, v8::Local<v8::Value> argv[]);
Nan::MaybeLocal<v8::Value> Nan::Call(const Nan::Callback& callback, v8::Local<v8::Object> recv,
 int argc, v8::Local<v8::Value> argv[]);
Nan::MaybeLocal<v8::Value> Nan::Call(const Nan::Callback& callback, int argc, v8::Local<v8::Value> argv[]);
```


<a name="api_nan_to_detail_string"></a>
### Nan::ToDetailString()

A helper method for calling [`v8::Value#ToDetailString()`](https://v8docs.nodesource.com/io.js-3.3/dc/d0a/classv8_1_1_value.html#a2f9770296dc2c8d274bc8cc0dca243e5) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::String> Nan::ToDetailString(v8::Local<v8::Value> val);
```


<a name="api_nan_to_array_index"></a>
### Nan::ToArrayIndex()

A helper method for calling [`v8::Value#ToArrayIndex()`](https://v8docs.nodesource.com/io.js-3.3/dc/d0a/classv8_1_1_value.html#acc5bbef3c805ec458470c0fcd6f13493) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Uint32> Nan::ToArrayIndex(v8::Local<v8::Value> val);
```


<a name="api_nan_equals"></a>
### Nan::Equals()

A helper method for calling [`v8::Value#Equals()`](https://v8docs.nodesource.com/io.js-3.3/dc/d0a/classv8_1_1_value.html#a0d9616ab2de899d4e3047c30a10c9285) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::Equals(v8::Local<v8::Value> a, v8::Local<v8::Value>(b));
```


<a name="api_nan_new_instance"></a>
### Nan::NewInstance()

A helper method for calling [`v8::Function#NewInstance()`](https://v8docs.nodesource.com/io.js-3.3/d5/d54/classv8_1_1_function.html#a691b13f7a553069732cbacf5ac8c62ec) and [`v8::ObjectTemplate#NewInstance()`](https://v8docs.nodesource.com/io.js-3.3/db/d5f/classv8_1_1_object_template.html#ad605a7543cfbc5dab54cdb0883d14ae4) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Object> Nan::NewInstance(v8::Local<v8::Function> h);
Nan::MaybeLocal<v8::Object> Nan::NewInstance(v8::Local<v8::Function> h, int argc, v8::Local<v8::Value> argv[]);
Nan::MaybeLocal<v8::Object> Nan::NewInstance(v8::Local<v8::ObjectTemplate> h);
```


<a name="api_nan_get_function"></a>
### Nan::GetFunction()

A helper method for calling [`v8::FunctionTemplate#GetFunction()`](https://v8docs.nodesource.com/io.js-3.3/d8/d83/classv8_1_1_function_template.html#a56d904662a86eca78da37d9bb0ed3705) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Function> Nan::GetFunction(v8::Local<v8::FunctionTemplate> t);
```


<a name="api_nan_set"></a>
### Nan::Set()

A helper method for calling [`v8::Object#Set()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a67604ea3734f170c66026064ea808f20) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::Set(v8::Local<v8::Object> obj,
                          v8::Local<v8::Value> key,
                          v8::Local<v8::Value> value)
Nan::Maybe<bool> Nan::Set(v8::Local<v8::Object> obj,
                          uint32_t index,
                          v8::Local<v8::Value> value);
```


<a name="api_nan_define_own_property"></a>
### Nan::DefineOwnProperty()

A helper method for calling [`v8::Object#DefineOwnProperty()`](https://v8docs.nodesource.com/node-4.8/db/d85/classv8_1_1_object.html#a6f76b2ed605cb8f9185b92de0033a820) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::DefineOwnProperty(v8::Local<v8::Object> obj,
                                        v8::Local<v8::String> key,
                                        v8::Local<v8::Value> value,
                                        v8::PropertyAttribute attribs = v8::None);
```


<a name="api_nan_force_set"></a>
### <del>Nan::ForceSet()</del>

Deprecated, use <a href="#api_nan_define_own_property"><code>Nan::DefineOwnProperty()</code></a>.

<del>A helper method for calling [`v8::Object#ForceSet()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a796b7b682896fb64bf1872747734e836) in a way compatible across supported versions of V8.</del>

Signature:

```c++
NAN_DEPRECATED Nan::Maybe<bool> Nan::ForceSet(v8::Local<v8::Object> obj,
                                              v8::Local<v8::Value> key,
                                              v8::Local<v8::Value> value,
                                              v8::PropertyAttribute attribs = v8::None);
```


<a name="api_nan_get"></a>
### Nan::Get()

A helper method for calling [`v8::Object#Get()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a2565f03e736694f6b1e1cf22a0b4eac2) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Value> Nan::Get(v8::Local<v8::Object> obj,
                                    v8::Local<v8::Value> key);
Nan::MaybeLocal<v8::Value> Nan::Get(v8::Local<v8::Object> obj, uint32_t index);
```


<a name="api_nan_get_property_attribute"></a>
### Nan::GetPropertyAttributes()

A helper method for calling [`v8::Object#GetPropertyAttributes()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a9b898894da3d1db2714fd9325a54fe57) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<v8::PropertyAttribute> Nan::GetPropertyAttributes(
    v8::Local<v8::Object> obj,
    v8::Local<v8::Value> key);
```


<a name="api_nan_has"></a>
### Nan::Has()

A helper method for calling [`v8::Object#Has()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#ab3c3d89ea7c2f9afd08965bd7299a41d) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::Has(v8::Local<v8::Object> obj, v8::Local<v8::String> key);
Nan::Maybe<bool> Nan::Has(v8::Local<v8::Object> obj, uint32_t index);
```


<a name="api_nan_delete"></a>
### Nan::Delete()

A helper method for calling [`v8::Object#Delete()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a2fa0f5a592582434ed1ceceff7d891ef) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::Delete(v8::Local<v8::Object> obj,
                             v8::Local<v8::String> key);
Nan::Maybe<bool> Nan::Delete(v8::Local<v8::Object> obj, uint32_t index);
```


<a name="api_nan_get_property_names"></a>
### Nan::GetPropertyNames()

A helper method for calling [`v8::Object#GetPropertyNames()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#aced885270cfd2c956367b5eedc7fbfe8) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Array> Nan::GetPropertyNames(v8::Local<v8::Object> obj);
```


<a name="api_nan_get_own_property_names"></a>
### Nan::GetOwnPropertyNames()

A helper method for calling [`v8::Object#GetOwnPropertyNames()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a79a6e4d66049b9aa648ed4dfdb23e6eb) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Array> Nan::GetOwnPropertyNames(v8::Local<v8::Object> obj);
```


<a name="api_nan_set_prototype"></a>
### Nan::SetPrototype()

A helper method for calling [`v8::Object#SetPrototype()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a442706b22fceda6e6d1f632122a9a9f4) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::SetPrototype(v8::Local<v8::Object> obj,
                                   v8::Local<v8::Value> prototype);
```


<a name="api_nan_object_proto_to_string"></a>
### Nan::ObjectProtoToString()

A helper method for calling [`v8::Object#ObjectProtoToString()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#ab7a92b4dcf822bef72f6c0ac6fea1f0b) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::String> Nan::ObjectProtoToString(v8::Local<v8::Object> obj);
```


<a name="api_nan_has_own_property"></a>
### Nan::HasOwnProperty()

A helper method for calling [`v8::Object#HasOwnProperty()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#ab7b7245442ca6de1e1c145ea3fd653ff) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::HasOwnProperty(v8::Local<v8::Object> obj,
                                     v8::Local<v8::String> key);
```


<a name="api_nan_has_real_named_property"></a>
### Nan::HasRealNamedProperty()

A helper method for calling [`v8::Object#HasRealNamedProperty()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#ad8b80a59c9eb3c1e6c3cd6c84571f767) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::HasRealNamedProperty(v8::Local<v8::Object> obj,
                                           v8::Local<v8::String> key);
```


<a name="api_nan_has_real_indexed_property"></a>
### Nan::HasRealIndexedProperty()

A helper method for calling [`v8::Object#HasRealIndexedProperty()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#af94fc1135a5e74a2193fb72c3a1b9855) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::HasRealIndexedProperty(v8::Local<v8::Object> obj,
                                             uint32_t index);
```


<a name="api_nan_has_real_named_callback_property"></a>
### Nan::HasRealNamedCallbackProperty()

A helper method for calling [`v8::Object#HasRealNamedCallbackProperty()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#af743b7ea132b89f84d34d164d0668811) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::HasRealNamedCallbackProperty(
    v8::Local<v8::Object> obj,
    v8::Local<v8::String> key);
```


<a name="api_nan_get_real_named_property_in_prototype_chain"></a>
### Nan::GetRealNamedPropertyInPrototypeChain()

A helper method for calling [`v8::Object#GetRealNamedPropertyInPrototypeChain()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a8700b1862e6b4783716964ba4d5e6172) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Value> Nan::GetRealNamedPropertyInPrototypeChain(
    v8::Local<v8::Object> obj,
    v8::Local<v8::String> key);
```


<a name="api_nan_get_real_named_property"></a>
### Nan::GetRealNamedProperty()

A helper method for calling [`v8::Object#GetRealNamedProperty()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a84471a824576a5994fdd0ffcbf99ccc0) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Value> Nan::GetRealNamedProperty(v8::Local<v8::Object> obj,
                                                     v8::Local<v8::String> key);
```


<a name="api_nan_call_as_function"></a>
### Nan::CallAsFunction()

A helper method for calling [`v8::Object#CallAsFunction()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a9ef18be634e79b4f0cdffa1667a29f58) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Value> Nan::CallAsFunction(v8::Local<v8::Object> obj,
                                               v8::Local<v8::Object> recv,
                                               int argc,
                                               v8::Local<v8::Value> argv[]);
```


<a name="api_nan_call_as_constructor"></a>
### Nan::CallAsConstructor()

A helper method for calling [`v8::Object#CallAsConstructor()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#a50d571de50d0b0dfb28795619d07a01b) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Value> Nan::CallAsConstructor(v8::Local<v8::Object> obj,
                                                  int argc,
                                                  v8::Local<v8::Value> argv[]);
```


<a name="api_nan_get_source_line"></a>
### Nan::GetSourceLine()

A helper method for calling [`v8::Message#GetSourceLine()`](https://v8docs.nodesource.com/io.js-3.3/d9/d28/classv8_1_1_message.html#a849f7a6c41549d83d8159825efccd23a) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::String> Nan::GetSourceLine(v8::Local<v8::Message> msg);
```


<a name="api_nan_get_line_number"></a>
### Nan::GetLineNumber()

A helper method for calling [`v8::Message#GetLineNumber()`](https://v8docs.nodesource.com/io.js-3.3/d9/d28/classv8_1_1_message.html#adbe46c10a88a6565f2732a2d2adf99b9) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<int> Nan::GetLineNumber(v8::Local<v8::Message> msg);
```


<a name="api_nan_get_start_column"></a>
### Nan::GetStartColumn()

A helper method for calling [`v8::Message#GetStartColumn()`](https://v8docs.nodesource.com/io.js-3.3/d9/d28/classv8_1_1_message.html#a60ede616ba3822d712e44c7a74487ba6) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<int> Nan::GetStartColumn(v8::Local<v8::Message> msg);
```


<a name="api_nan_get_end_column"></a>
### Nan::GetEndColumn()

A helper method for calling [`v8::Message#GetEndColumn()`](https://v8docs.nodesource.com/io.js-3.3/d9/d28/classv8_1_1_message.html#aaa004cf19e529da980bc19fcb76d93be) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<int> Nan::GetEndColumn(v8::Local<v8::Message> msg);
```


<a name="api_nan_clone_element_at"></a>
### Nan::CloneElementAt()

A helper method for calling [`v8::Array#CloneElementAt()`](https://v8docs.nodesource.com/io.js-3.3/d3/d32/classv8_1_1_array.html#a1d3a878d4c1c7cae974dd50a1639245e) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Object> Nan::CloneElementAt(v8::Local<v8::Array> array, uint32_t index);
```

<a name="api_nan_has_private"></a>
### Nan::HasPrivate()

A helper method for calling [`v8::Object#HasPrivate()`](https://v8docs.nodesource.com/node-7.2/db/d85/classv8_1_1_object.html#af68a0b98066cfdeb8f943e98a40ba08d) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::HasPrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key);
```

<a name="api_nan_get_private"></a>
### Nan::GetPrivate()

A helper method for calling [`v8::Object#GetPrivate()`](https://v8docs.nodesource.com/node-7.2/db/d85/classv8_1_1_object.html#a169f2da506acbec34deadd9149a1925a) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Value> Nan::GetPrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key);
```

<a name="api_nan_set_private"></a>
### Nan::SetPrivate()

A helper method for calling [`v8::Object#SetPrivate()`](https://v8docs.nodesource.com/node-7.2/db/d85/classv8_1_1_object.html#ace1769b0f3b86bfe9fda1010916360ee) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::SetPrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key, v8::Local<v8::Value> value);
```

<a name="api_nan_delete_private"></a>
### Nan::DeletePrivate()

A helper method for calling [`v8::Object#DeletePrivate()`](https://v8docs.nodesource.com/node-7.2/db/d85/classv8_1_1_object.html#a138bb32a304f3982be02ad499693b8fd) in a way compatible across supported versions of V8.

Signature:

```c++
Nan::Maybe<bool> Nan::DeletePrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key);
```

<a name="api_nan_make_maybe"></a>
### Nan::MakeMaybe()

Wraps a `v8::Local<>` in a `Nan::MaybeLocal<>`. When called with a `Nan::MaybeLocal<>` it just returns its argument. This is useful in generic template code that builds on NAN.

Synopsis:

```c++
  MaybeLocal<v8::Number> someNumber = MakeMaybe(New<v8::Number>(3.141592654));
  MaybeLocal<v8::String> someString = MakeMaybe(New<v8::String>("probably"));
```

Signature:

```c++
template <typename T, template <typename> class MaybeMaybe>
Nan::MaybeLocal<T> Nan::MakeMaybe(MaybeMaybe<T> v);
```
