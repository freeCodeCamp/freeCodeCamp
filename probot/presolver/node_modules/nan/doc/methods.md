## JavaScript-accessible methods

A _template_ is a blueprint for JavaScript functions and objects in a context. You can use a template to wrap C++ functions and data structures within JavaScript objects so that they can be manipulated from JavaScript. See the V8 Embedders Guide section on [Templates](https://github.com/v8/v8/wiki/Embedder%27s-Guide#templates) for further information.

In order to expose functionality to JavaScript via a template, you must provide it to V8 in a form that it understands. Across the versions of V8 supported by NAN, JavaScript-accessible method signatures vary widely, NAN fully abstracts method declaration and provides you with an interface that is similar to the most recent V8 API but is backward-compatible with older versions that still use the now-deceased `v8::Argument` type.

* **Method argument types**
 - <a href="#api_nan_function_callback_info"><b><code>Nan::FunctionCallbackInfo</code></b></a>
 - <a href="#api_nan_property_callback_info"><b><code>Nan::PropertyCallbackInfo</code></b></a>
 - <a href="#api_nan_return_value"><b><code>Nan::ReturnValue</code></b></a>
* **Method declarations**
 - <a href="#api_nan_method"><b>Method declaration</b></a>
 - <a href="#api_nan_getter"><b>Getter declaration</b></a>
 - <a href="#api_nan_setter"><b>Setter declaration</b></a>
 - <a href="#api_nan_property_getter"><b>Property getter declaration</b></a>
 - <a href="#api_nan_property_setter"><b>Property setter declaration</b></a>
 - <a href="#api_nan_property_enumerator"><b>Property enumerator declaration</b></a>
 - <a href="#api_nan_property_deleter"><b>Property deleter declaration</b></a>
 - <a href="#api_nan_property_query"><b>Property query declaration</b></a>
 - <a href="#api_nan_index_getter"><b>Index getter declaration</b></a>
 - <a href="#api_nan_index_setter"><b>Index setter declaration</b></a>
 - <a href="#api_nan_index_enumerator"><b>Index enumerator declaration</b></a>
 - <a href="#api_nan_index_deleter"><b>Index deleter declaration</b></a>
 - <a href="#api_nan_index_query"><b>Index query declaration</b></a>
* Method and template helpers
 - <a href="#api_nan_set_method"><b><code>Nan::SetMethod()</code></b></a>
 - <a href="#api_nan_set_prototype_method"><b><code>Nan::SetPrototypeMethod()</code></b></a>
 - <a href="#api_nan_set_accessor"><b><code>Nan::SetAccessor()</code></b></a>
 - <a href="#api_nan_set_named_property_handler"><b><code>Nan::SetNamedPropertyHandler()</code></b></a>
 - <a href="#api_nan_set_indexed_property_handler"><b><code>Nan::SetIndexedPropertyHandler()</code></b></a>
 - <a href="#api_nan_set_template"><b><code>Nan::SetTemplate()</code></b></a>
 - <a href="#api_nan_set_prototype_template"><b><code>Nan::SetPrototypeTemplate()</code></b></a>
 - <a href="#api_nan_set_instance_template"><b><code>Nan::SetInstanceTemplate()</code></b></a>
 - <a href="#api_nan_set_call_handler"><b><code>Nan::SetCallHandler()</code></b></a>
 - <a href="#api_nan_set_call_as_function_handler"><b><code>Nan::SetCallAsFunctionHandler()</code></b></a>

<a name="api_nan_function_callback_info"></a>
### Nan::FunctionCallbackInfo

`Nan::FunctionCallbackInfo` should be used in place of [`v8::FunctionCallbackInfo`](https://v8docs.nodesource.com/node-8.0/dd/d0d/classv8_1_1_function_callback_info.html), even with older versions of Node where `v8::FunctionCallbackInfo` does not exist.

Definition:

```c++
template<typename T> class FunctionCallbackInfo {
 public:
  ReturnValue<T> GetReturnValue() const;
  v8::Local<v8::Function> Callee(); // NOTE: Not available in NodeJS >= 10.0.0
  v8::Local<v8::Value> Data();
  v8::Local<v8::Object> Holder();
  bool IsConstructCall();
  int Length() const;
  v8::Local<v8::Value> operator[](int i) const;
  v8::Local<v8::Object> This() const;
  v8::Isolate *GetIsolate() const;
};
```

See the [`v8::FunctionCallbackInfo`](https://v8docs.nodesource.com/node-8.0/dd/d0d/classv8_1_1_function_callback_info.html) documentation for usage details on these. See [`Nan::ReturnValue`](#api_nan_return_value) for further information on how to set a return value from methods.

**Note:** `FunctionCallbackInfo::Callee` is removed in Node.js after `10.0.0` because it is was deprecated in V8. Consider using `info.Data()` to pass any information you need.

<a name="api_nan_property_callback_info"></a>
### Nan::PropertyCallbackInfo

`Nan::PropertyCallbackInfo` should be used in place of [`v8::PropertyCallbackInfo`](https://v8docs.nodesource.com/node-8.0/d7/dc5/classv8_1_1_property_callback_info.html), even with older versions of Node where `v8::PropertyCallbackInfo` does not exist.

Definition:

```c++
template<typename T> class PropertyCallbackInfo : public PropertyCallbackInfoBase<T> {
 public:
  ReturnValue<T> GetReturnValue() const;
  v8::Isolate* GetIsolate() const;
  v8::Local<v8::Value> Data() const;
  v8::Local<v8::Object> This() const;
  v8::Local<v8::Object> Holder() const;
};
```

See the [`v8::PropertyCallbackInfo`](https://v8docs.nodesource.com/node-8.0/d7/dc5/classv8_1_1_property_callback_info.html) documentation for usage details on these. See [`Nan::ReturnValue`](#api_nan_return_value) for further information on how to set a return value from property accessor methods.

<a name="api_nan_return_value"></a>
### Nan::ReturnValue

`Nan::ReturnValue` is used in place of [`v8::ReturnValue`](https://v8docs.nodesource.com/node-8.0/da/da7/classv8_1_1_return_value.html) on both [`Nan::FunctionCallbackInfo`](#api_nan_function_callback_info) and [`Nan::PropertyCallbackInfo`](#api_nan_property_callback_info) as the return type of `GetReturnValue()`.

Example usage:

```c++
void EmptyArray(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::New<v8::Array>());
}
```

Definition:

```c++
template<typename T> class ReturnValue {
 public:
  // Handle setters
  template <typename S> void Set(const v8::Local<S> &handle);
  template <typename S> void Set(const Nan::Global<S> &handle);

  // Fast primitive setters
  void Set(bool value);
  void Set(double i);
  void Set(int32_t i);
  void Set(uint32_t i);

  // Fast JS primitive setters
  void SetNull();
  void SetUndefined();
  void SetEmptyString();

  // Convenience getter for isolate
  v8::Isolate *GetIsolate() const;
};
```

See the documentation on [`v8::ReturnValue`](https://v8docs.nodesource.com/node-8.0/da/da7/classv8_1_1_return_value.html) for further information on this.

<a name="api_nan_method"></a>
### Method declaration

JavaScript-accessible methods should be declared with the following signature to form a `Nan::FunctionCallback`:

```c++
typedef void(*FunctionCallback)(const FunctionCallbackInfo<v8::Value>&);
```

Example:

```c++
void MethodName(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  ...
}
```

You do not need to declare a new `HandleScope` within a method as one is implicitly created for you.

**Example usage**

```c++
// .h:
class Foo : public Nan::ObjectWrap {
  ...

  static void Bar(const Nan::FunctionCallbackInfo<v8::Value>& info);
  static void Baz(const Nan::FunctionCallbackInfo<v8::Value>& info);
}


// .cc:
void Foo::Bar(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  ...
}

void Foo::Baz(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  ...
}
```

A helper macro `NAN_METHOD(methodname)` exists, compatible with NAN v1 method declarations.

**Example usage with `NAN_METHOD(methodname)`**

```c++
// .h:
class Foo : public Nan::ObjectWrap {
  ...

  static NAN_METHOD(Bar);
  static NAN_METHOD(Baz);
}


// .cc:
NAN_METHOD(Foo::Bar) {
  ...
}

NAN_METHOD(Foo::Baz) {
  ...
}
```

Use [`Nan::SetPrototypeMethod`](#api_nan_set_prototype_method) to attach a method to a JavaScript function prototype or [`Nan::SetMethod`](#api_nan_set_method) to attach a method directly on a JavaScript object.

<a name="api_nan_getter"></a>
### Getter declaration

JavaScript-accessible getters should be declared with the following signature to form a `Nan::GetterCallback`:

```c++
typedef void(*GetterCallback)(v8::Local<v8::String>,
                              const PropertyCallbackInfo<v8::Value>&);
```

Example:

```c++
void GetterName(v8::Local<v8::String> property,
                const Nan::PropertyCallbackInfo<v8::Value>& info) {
  ...
}
```

You do not need to declare a new `HandleScope` within a getter as one is implicitly created for you.

A helper macro `NAN_GETTER(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on [Accessors](https://developers.google.com/v8/embed#accesssors).

<a name="api_nan_setter"></a>
### Setter declaration

JavaScript-accessible setters should be declared with the following signature to form a <b><code>Nan::SetterCallback</code></b>:

```c++
typedef void(*SetterCallback)(v8::Local<v8::String>,
                              v8::Local<v8::Value>,
                              const PropertyCallbackInfo<void>&);
```

Example:

```c++
void SetterName(v8::Local<v8::String> property,
                v8::Local<v8::Value> value,
                const Nan::PropertyCallbackInfo<void>& info) {
  ...
}
```

You do not need to declare a new `HandleScope` within a setter as one is implicitly created for you.

A helper macro `NAN_SETTER(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on [Accessors](https://developers.google.com/v8/embed#accesssors).

<a name="api_nan_property_getter"></a>
### Property getter declaration

JavaScript-accessible property getters should be declared with the following signature to form a <b><code>Nan::PropertyGetterCallback</code></b>:

```c++
typedef void(*PropertyGetterCallback)(v8::Local<v8::String>,
                                      const PropertyCallbackInfo<v8::Value>&);
```

Example:

```c++
void PropertyGetterName(v8::Local<v8::String> property,
                        const Nan::PropertyCallbackInfo<v8::Value>& info) {
  ...
}
```

You do not need to declare a new `HandleScope` within a property getter as one is implicitly created for you.

A helper macro `NAN_PROPERTY_GETTER(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_property_setter"></a>
### Property setter declaration

JavaScript-accessible property setters should be declared with the following signature to form a <b><code>Nan::PropertySetterCallback</code></b>:

```c++
typedef void(*PropertySetterCallback)(v8::Local<v8::String>,
                                      v8::Local<v8::Value>,
                                      const PropertyCallbackInfo<v8::Value>&);
```

Example:

```c++
void PropertySetterName(v8::Local<v8::String> property,
                        v8::Local<v8::Value> value,
                        const Nan::PropertyCallbackInfo<v8::Value>& info);
```

You do not need to declare a new `HandleScope` within a property setter as one is implicitly created for you.

A helper macro `NAN_PROPERTY_SETTER(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_property_enumerator"></a>
### Property enumerator declaration

JavaScript-accessible property enumerators should be declared with the following signature to form a <b><code>Nan::PropertyEnumeratorCallback</code></b>:

```c++
typedef void(*PropertyEnumeratorCallback)(const PropertyCallbackInfo<v8::Array>&);
```

Example:

```c++
void PropertyEnumeratorName(const Nan::PropertyCallbackInfo<v8::Array>& info);
```

You do not need to declare a new `HandleScope` within a property enumerator as one is implicitly created for you.

A helper macro `NAN_PROPERTY_ENUMERATOR(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_property_deleter"></a>
### Property deleter declaration

JavaScript-accessible property deleters should be declared with the following signature to form a <b><code>Nan::PropertyDeleterCallback</code></b>:

```c++
typedef void(*PropertyDeleterCallback)(v8::Local<v8::String>,
                                       const PropertyCallbackInfo<v8::Boolean>&);
```

Example:

```c++
void PropertyDeleterName(v8::Local<v8::String> property,
                         const Nan::PropertyCallbackInfo<v8::Boolean>& info);
```

You do not need to declare a new `HandleScope` within a property deleter as one is implicitly created for you.

A helper macro `NAN_PROPERTY_DELETER(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_property_query"></a>
### Property query declaration

JavaScript-accessible property query methods should be declared with the following signature to form a <b><code>Nan::PropertyQueryCallback</code></b>:

```c++
typedef void(*PropertyQueryCallback)(v8::Local<v8::String>,
                                     const PropertyCallbackInfo<v8::Integer>&);
```

Example:

```c++
void PropertyQueryName(v8::Local<v8::String> property,
                       const Nan::PropertyCallbackInfo<v8::Integer>& info);
```

You do not need to declare a new `HandleScope` within a property query method as one is implicitly created for you.

A helper macro `NAN_PROPERTY_QUERY(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_getter"></a>
### Index getter declaration

JavaScript-accessible index getter methods should be declared with the following signature to form a <b><code>Nan::IndexGetterCallback</code></b>:

```c++
typedef void(*IndexGetterCallback)(uint32_t,
                                   const PropertyCallbackInfo<v8::Value>&);
```

Example:

```c++
void IndexGetterName(uint32_t index, const PropertyCallbackInfo<v8::Value>& info);
```

You do not need to declare a new `HandleScope` within a index getter as one is implicitly created for you.

A helper macro `NAN_INDEX_GETTER(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_setter"></a>
### Index setter declaration

JavaScript-accessible index setter methods should be declared with the following signature to form a <b><code>Nan::IndexSetterCallback</code></b>:

```c++
typedef void(*IndexSetterCallback)(uint32_t,
                                   v8::Local<v8::Value>,
                                   const PropertyCallbackInfo<v8::Value>&);
```

Example:

```c++
void IndexSetterName(uint32_t index,
                     v8::Local<v8::Value> value,
                     const PropertyCallbackInfo<v8::Value>& info);
```

You do not need to declare a new `HandleScope` within a index setter as one is implicitly created for you.

A helper macro `NAN_INDEX_SETTER(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_enumerator"></a>
### Index enumerator declaration

JavaScript-accessible index enumerator methods should be declared with the following signature to form a <b><code>Nan::IndexEnumeratorCallback</code></b>:

```c++
typedef void(*IndexEnumeratorCallback)(const PropertyCallbackInfo<v8::Array>&);
```

Example:

```c++
void IndexEnumeratorName(const PropertyCallbackInfo<v8::Array>& info);
```

You do not need to declare a new `HandleScope` within a index enumerator as one is implicitly created for you.

A helper macro `NAN_INDEX_ENUMERATOR(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_deleter"></a>
### Index deleter declaration

JavaScript-accessible index deleter methods should be declared with the following signature to form a <b><code>Nan::IndexDeleterCallback</code></b>:

```c++
typedef void(*IndexDeleterCallback)(uint32_t,
                                    const PropertyCallbackInfo<v8::Boolean>&);
```

Example:

```c++
void IndexDeleterName(uint32_t index, const PropertyCallbackInfo<v8::Boolean>& info);
```

You do not need to declare a new `HandleScope` within a index deleter as one is implicitly created for you.

A helper macro `NAN_INDEX_DELETER(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_query"></a>
### Index query declaration

JavaScript-accessible index query methods should be declared with the following signature to form a <b><code>Nan::IndexQueryCallback</code></b>:

```c++
typedef void(*IndexQueryCallback)(uint32_t,
                                  const PropertyCallbackInfo<v8::Integer>&);
```

Example:

```c++
void IndexQueryName(uint32_t index, const PropertyCallbackInfo<v8::Integer>& info);
```

You do not need to declare a new `HandleScope` within a index query method as one is implicitly created for you.

A helper macro `NAN_INDEX_QUERY(methodname)` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_set_method"></a>
### Nan::SetMethod()

Sets a method with a given name directly on a JavaScript object where the method has the `Nan::FunctionCallback` signature (see <a href="#api_nan_method">Method declaration</a>).

Signature:

```c++
void Nan::SetMethod(v8::Local<v8::Object> recv,
                    const char *name,
                    Nan::FunctionCallback callback)
void Nan::SetMethod(v8::Local<v8::Template> templ,
                    const char *name,
                    Nan::FunctionCallback callback)
```

<a name="api_nan_set_prototype_method"></a>
### Nan::SetPrototypeMethod()

Sets a method with a given name on a `FunctionTemplate`'s prototype where the method has the `Nan::FunctionCallback` signature (see <a href="#api_nan_method">Method declaration</a>).

Signature:

```c++
void Nan::SetPrototypeMethod(v8::Local<v8::FunctionTemplate> recv,
                             const char* name,
                             Nan::FunctionCallback callback)
```

<a name="api_nan_set_accessor"></a>
### Nan::SetAccessor()

Sets getters and setters for a property with a given name on an `ObjectTemplate` or a plain `Object`. Accepts getters with the `Nan::GetterCallback` signature (see <a href="#api_nan_getter">Getter declaration</a>) and setters with the `Nan::SetterCallback` signature (see <a href="#api_nan_setter">Setter declaration</a>).

Signature:

```c++
void SetAccessor(v8::Local<v8::ObjectTemplate> tpl,
                 v8::Local<v8::String> name,
                 Nan::GetterCallback getter,
                 Nan::SetterCallback setter = 0,
                 v8::Local<v8::Value> data = v8::Local<v8::Value>(),
                 v8::AccessControl settings = v8::DEFAULT,
                 v8::PropertyAttribute attribute = v8::None,
                 imp::Sig signature = imp::Sig());
bool SetAccessor(v8::Local<v8::Object> obj,
                 v8::Local<v8::String> name,
                 Nan::GetterCallback getter,
                 Nan::SetterCallback setter = 0,
                 v8::Local<v8::Value> data = v8::Local<v8::Value>(),
                 v8::AccessControl settings = v8::DEFAULT,
                 v8::PropertyAttribute attribute = v8::None)
```

See the V8 [`ObjectTemplate#SetAccessor()`](https://v8docs.nodesource.com/node-8.0/db/d5f/classv8_1_1_object_template.html#aca0ed196f8a9adb1f68b1aadb6c9cd77) and [`Object#SetAccessor()`](https://v8docs.nodesource.com/node-8.0/db/d85/classv8_1_1_object.html#a3f9dee085f5ec346465f1dc924325043) for further information about how to use `Nan::SetAccessor()`.

<a name="api_nan_set_named_property_handler"></a>
### Nan::SetNamedPropertyHandler()

Sets named property getters, setters, query, deleter and enumerator methods on an `ObjectTemplate`. Accepts:

* Property getters with the `Nan::PropertyGetterCallback` signature (see <a href="#api_nan_property_getter">Property getter declaration</a>)
* Property setters with the `Nan::PropertySetterCallback` signature (see <a href="#api_nan_property_setter">Property setter declaration</a>)
* Property query methods with the `Nan::PropertyQueryCallback` signature (see <a href="#api_nan_property_query">Property query declaration</a>)
* Property deleters with the `Nan::PropertyDeleterCallback` signature (see <a href="#api_nan_property_deleter">Property deleter declaration</a>)
* Property enumerators with the `Nan::PropertyEnumeratorCallback` signature (see <a href="#api_nan_property_enumerator">Property enumerator declaration</a>)

Signature:

```c++
void SetNamedPropertyHandler(v8::Local<v8::ObjectTemplate> tpl,
                             Nan::PropertyGetterCallback getter,
                             Nan::PropertySetterCallback setter = 0,
                             Nan::PropertyQueryCallback query = 0,
                             Nan::PropertyDeleterCallback deleter = 0,
                             Nan::PropertyEnumeratorCallback enumerator = 0,
                             v8::Local<v8::Value> data = v8::Local<v8::Value>())
```

See the V8 [`ObjectTemplate#SetNamedPropertyHandler()`](https://v8docs.nodesource.com/io.js-3.3/db/d5f/classv8_1_1_object_template.html#a34d1cc45b642cd131706663801aadd76) for further information about how to use `Nan::SetNamedPropertyHandler()`.

<a name="api_nan_set_indexed_property_handler"></a>
### Nan::SetIndexedPropertyHandler()

Sets indexed property getters, setters, query, deleter and enumerator methods on an `ObjectTemplate`. Accepts:

* Indexed property getters with the `Nan::IndexGetterCallback` signature (see <a href="#api_nan_index_getter">Index getter declaration</a>)
* Indexed property setters with the `Nan::IndexSetterCallback` signature (see <a href="#api_nan_index_setter">Index setter declaration</a>)
* Indexed property query methods with the `Nan::IndexQueryCallback` signature (see <a href="#api_nan_index_query">Index query declaration</a>)
* Indexed property deleters with the `Nan::IndexDeleterCallback` signature (see <a href="#api_nan_index_deleter">Index deleter declaration</a>)
* Indexed property enumerators with the `Nan::IndexEnumeratorCallback` signature (see <a href="#api_nan_index_enumerator">Index enumerator declaration</a>)

Signature:

```c++
void SetIndexedPropertyHandler(v8::Local<v8::ObjectTemplate> tpl,
                               Nan::IndexGetterCallback getter,
                               Nan::IndexSetterCallback setter = 0,
                               Nan::IndexQueryCallback query = 0,
                               Nan::IndexDeleterCallback deleter = 0,
                               Nan::IndexEnumeratorCallback enumerator = 0,
                               v8::Local<v8::Value> data = v8::Local<v8::Value>())
```

See the V8 [`ObjectTemplate#SetIndexedPropertyHandler()`](https://v8docs.nodesource.com/node-8.0/db/d5f/classv8_1_1_object_template.html#ac89f06d634add0e890452033f7d17ff1) for further information about how to use `Nan::SetIndexedPropertyHandler()`.

<a name="api_nan_set_template"></a>
### Nan::SetTemplate()

Adds properties on an `Object`'s or `Function`'s template.

Signature:

```c++
void Nan::SetTemplate(v8::Local<v8::Template> templ,
                      const char *name,
                      v8::Local<v8::Data> value);
void Nan::SetTemplate(v8::Local<v8::Template> templ,
                      v8::Local<v8::String> name,
                      v8::Local<v8::Data> value,
                      v8::PropertyAttribute attributes)
```

Calls the `Template`'s [`Set()`](https://v8docs.nodesource.com/node-8.0/db/df7/classv8_1_1_template.html#ae3fbaff137557aa6a0233bc7e52214ac).

<a name="api_nan_set_prototype_template"></a>
### Nan::SetPrototypeTemplate()

Adds properties on an `Object`'s or `Function`'s prototype template.

Signature:

```c++
void Nan::SetPrototypeTemplate(v8::Local<v8::FunctionTemplate> templ,
                               const char *name,
                               v8::Local<v8::Data> value);
void Nan::SetPrototypeTemplate(v8::Local<v8::FunctionTemplate> templ,
                               v8::Local<v8::String> name,
                               v8::Local<v8::Data> value,
                               v8::PropertyAttribute attributes)
```

Calls the `FunctionTemplate`'s _PrototypeTemplate's_ [`Set()`](https://v8docs.nodesource.com/io.js-3.3/db/df7/classv8_1_1_template.html#a2db6a56597bf23c59659c0659e564ddf).

<a name="api_nan_set_instance_template"></a>
### Nan::SetInstanceTemplate()

Use to add instance properties on `FunctionTemplate`'s.

Signature:

```c++
void Nan::SetInstanceTemplate(v8::Local<v8::FunctionTemplate> templ,
                              const char *name,
                              v8::Local<v8::Data> value);
void Nan::SetInstanceTemplate(v8::Local<v8::FunctionTemplate> templ,
                              v8::Local<v8::String> name,
                              v8::Local<v8::Data> value,
                              v8::PropertyAttribute attributes)
```

Calls the `FunctionTemplate`'s _InstanceTemplate's_ [`Set()`](https://v8docs.nodesource.com/io.js-3.3/db/df7/classv8_1_1_template.html#a2db6a56597bf23c59659c0659e564ddf).

<a name="api_nan_set_call_handler"></a>
### Nan::SetCallHandler()

Set the call-handler callback for a `v8::FunctionTemplate`.
This callback is called whenever the function created from this FunctionTemplate is called.

Signature:

```c++
void Nan::SetCallHandler(v8::Local<v8::FunctionTemplate> templ, Nan::FunctionCallback callback, v8::Local<v8::Value> data = v8::Local<v8::Value>())
```

Calls the `FunctionTemplate`'s [`SetCallHandler()`](https://v8docs.nodesource.com/node-8.0/d8/d83/classv8_1_1_function_template.html#a2d3845db66392074c5a018a66efbfada).

<a name="api_nan_set_call_as_function_handler"></a>
### Nan::SetCallAsFunctionHandler()

Sets the callback to be used when calling instances created from the `v8::ObjectTemplate` as a function.
If no callback is set, instances behave like normal JavaScript objects that cannot be called as a function.

Signature:

```c++
void Nan::SetCallAsFunctionHandler(v8::Local<v8::ObjectTemplate> templ, Nan::FunctionCallback callback, v8::Local<v8::Value> data = v8::Local<v8::Value>())
```

Calls the `ObjectTemplate`'s [`SetCallAsFunctionHandler()`](https://v8docs.nodesource.com/node-8.0/db/d5f/classv8_1_1_object_template.html#a5e9612fc80bf6db8f2da199b9b0bd04e).

