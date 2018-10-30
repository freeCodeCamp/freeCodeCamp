## Script

NAN provides a `v8::Script` helpers as the API has changed over the supported versions of V8.

 - <a href="#api_nan_compile_script"><b><code>Nan::CompileScript()</code></b></a>
 - <a href="#api_nan_run_script"><b><code>Nan::RunScript()</code></b></a>


<a name="api_nan_compile_script"></a>
### Nan::CompileScript()

A wrapper around [`v8::Script::Compile()`](https://v8docs.nodesource.com/io.js-3.3/da/da5/classv8_1_1_script_compiler.html#a93f5072a0db55d881b969e9fc98e564b).

Note that `Nan::BoundScript` is an alias for `v8::Script`.

Signature:

```c++
Nan::MaybeLocal<Nan::BoundScript> Nan::CompileScript(
    v8::Local<v8::String> s,
    const v8::ScriptOrigin& origin);
Nan::MaybeLocal<Nan::BoundScript> Nan::CompileScript(v8::Local<v8::String> s);
```


<a name="api_nan_run_script"></a>
### Nan::RunScript()

Calls `script->Run()` or `script->BindToCurrentContext()->Run(Nan::GetCurrentContext())`.

Note that `Nan::BoundScript` is an alias for `v8::Script` and `Nan::UnboundScript` is an alias for `v8::UnboundScript` where available and `v8::Script` on older versions of V8.

Signature:

```c++
Nan::MaybeLocal<v8::Value> Nan::RunScript(v8::Local<Nan::UnboundScript> script)
Nan::MaybeLocal<v8::Value> Nan::RunScript(v8::Local<Nan::BoundScript> script) 
```
