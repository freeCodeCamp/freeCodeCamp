## Miscellaneous Node Helpers

 - <a href="#api_nan_asyncresource"><b><code>Nan::AsyncResource</code></b></a>
 - <a href="#api_nan_make_callback"><b><code>Nan::MakeCallback()</code></b></a>
 - <a href="#api_nan_module_init"><b><code>NAN_MODULE_INIT()</code></b></a>
 - <a href="#api_nan_export"><b><code>Nan::Export()</code></b></a>

<a name="api_nan_asyncresource"></a>
### Nan::AsyncResource

This class is analogous to the `AsyncResource` JavaScript class exposed by Node's [async_hooks][] API.

When calling back into JavaScript asynchronously, special care must be taken to ensure that the runtime can properly track
async hops. `Nan::AsyncResource` is a class that provides an RAII wrapper around `node::EmitAsyncInit`, `node::EmitAsyncDestroy`,
and `node::MakeCallback`. Using this mechanism to call back into JavaScript, as opposed to `Nan::MakeCallback` or
`v8::Function::Call` ensures that the callback is executed in the correct async context. This ensures that async mechanisms
such as domains and [async_hooks][] function correctly.

Definition:

```c++
class AsyncResource {
 public:
  AsyncResource(v8::Local<v8::String> name,
                v8::Local<v8::Object> resource = New<v8::Object>());
  AsyncResource(const char* name,
                v8::Local<v8::Object> resource = New<v8::Object>());
  ~AsyncResource();

  v8::MaybeLocal<v8::Value> runInAsyncScope(v8::Local<v8::Object> target,
                                            v8::Local<v8::Function> func,
                                            int argc,
                                            v8::Local<v8::Value>* argv);
  v8::MaybeLocal<v8::Value> runInAsyncScope(v8::Local<v8::Object> target,
                                            v8::Local<v8::String> symbol,
                                            int argc,
                                            v8::Local<v8::Value>* argv);
  v8::MaybeLocal<v8::Value> runInAsyncScope(v8::Local<v8::Object> target,
                                            const char* method,
                                            int argc,
                                            v8::Local<v8::Value>* argv);
};
```

* `name`: Identifier for the kind of resource that is being provided for diagnostics information exposed by the [async_hooks][]
  API. This will be passed to the possible `init` hook as the `type`. To avoid name collisions with other modules we recommend
  that the name include the name of the owning module as a prefix. For example `mysql` module could use something like
  `mysql:batch-db-query-resource`.
* `resource`: An optional object associated with the async work that will be passed to the possible [async_hooks][]
  `init` hook. If this parameter is omitted, or an empty handle is provided, this object will be created automatically.
* When calling JS on behalf of this resource, one can use `runInAsyncScope`. This will ensure that the callback runs in the
  correct async execution context.
* `AsyncDestroy` is automatically called when an AsyncResource object is destroyed.

For more details, see the Node [async_hooks][] documentation. You might also want to take a look at the documentation for the
[N-API counterpart][napi]. For example usage, see the `asyncresource.cpp` example in the `test/cpp` directory.

<a name="api_nan_make_callback"></a>
### Nan::MakeCallback()

Deprecated wrappers around the legacy `node::MakeCallback()` APIs. Node.js 10+
has deprecated these legacy APIs as they do not provide a mechanism to preserve
async context.

We recommend that you use the `AsyncResource` class and `AsyncResource::runInAsyncScope` instead of using `Nan::MakeCallback` or
`v8::Function#Call()` directly. `AsyncResource` properly takes care of running the callback in the correct async execution
context – something that is essential for functionality like domains, async_hooks and async debugging.

Signatures:

```c++
NAN_DEPRECATED
v8::Local<v8::Value> Nan::MakeCallback(v8::Local<v8::Object> target,
                                       v8::Local<v8::Function> func,
                                       int argc,
                                       v8::Local<v8::Value>* argv);
NAN_DEPRECATED
v8::Local<v8::Value> Nan::MakeCallback(v8::Local<v8::Object> target,
                                       v8::Local<v8::String> symbol,
                                       int argc,
                                       v8::Local<v8::Value>* argv);
NAN_DEPRECATED
v8::Local<v8::Value> Nan::MakeCallback(v8::Local<v8::Object> target,
                                       const char* method,
                                       int argc,
                                       v8::Local<v8::Value>* argv);
```


<a name="api_nan_module_init"></a>
### NAN_MODULE_INIT()

Used to define the entry point function to a Node add-on. Creates a function with a given `name` that receives a `target` object representing the equivalent of the JavaScript `exports` object.

See example below.

<a name="api_nan_export"></a>
### Nan::Export()

A simple helper to register a `v8::FunctionTemplate` from a JavaScript-accessible method (see [Methods](./methods.md)) as a property on an object. Can be used in a way similar to assigning properties to `module.exports` in JavaScript.

Signature:

```c++
void Export(v8::Local<v8::Object> target, const char *name, Nan::FunctionCallback f)
```

Also available as the shortcut `NAN_EXPORT` macro.

Example:

```c++
NAN_METHOD(Foo) {
  ...
}

NAN_MODULE_INIT(Init) {
  NAN_EXPORT(target, Foo);
}
```

[async_hooks]: https://nodejs.org/dist/latest-v9.x/docs/api/async_hooks.html
[napi]: https://nodejs.org/dist/latest-v9.x/docs/api/n-api.html#n_api_custom_asynchronous_operations
