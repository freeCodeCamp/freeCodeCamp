Native Abstractions for Node.js
===============================

**A header file filled with macro and utility goodness for making add-on development for Node.js easier across versions 0.8, 0.10, 0.12, 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10.**

***Current version: 2.11.1***

*(See [CHANGELOG.md](https://github.com/nodejs/nan/blob/master/CHANGELOG.md) for complete ChangeLog)*

[![NPM](https://nodei.co/npm/nan.png?downloads=true&downloadRank=true)](https://nodei.co/npm/nan/) [![NPM](https://nodei.co/npm-dl/nan.png?months=6&height=3)](https://nodei.co/npm/nan/)

[![Build Status](https://api.travis-ci.org/nodejs/nan.svg?branch=master)](http://travis-ci.org/nodejs/nan)
[![Build status](https://ci.appveyor.com/api/projects/status/kh73pbm9dsju7fgh)](https://ci.appveyor.com/project/RodVagg/nan)

Thanks to the crazy changes in V8 (and some in Node core), keeping native addons compiling happily across versions, particularly 0.10 to 0.12 to 4.0, is a minor nightmare. The goal of this project is to store all logic necessary to develop native Node.js addons without having to inspect `NODE_MODULE_VERSION` and get yourself into a macro-tangle.

This project also contains some helper utilities that make addon development a bit more pleasant.

 * **[News & Updates](#news)**
 * **[Usage](#usage)**
 * **[Example](#example)**
 * **[API](#api)**
 * **[Tests](#tests)**
 * **[Knowns issues](#issues)**
 * **[Governance & Contributing](#governance)**

<a name="news"></a>

## News & Updates

<a name="usage"></a>

## Usage

Simply add **NAN** as a dependency in the *package.json* of your Node addon:

``` bash
$ npm install --save nan
```

Pull in the path to **NAN** in your *binding.gyp* so that you can use `#include <nan.h>` in your *.cpp* files:

``` python
"include_dirs" : [
    "<!(node -e \"require('nan')\")"
]
```

This works like a `-I<path-to-NAN>` when compiling your addon.

<a name="example"></a>

## Example

Just getting started with Nan? Take a look at the **[Node Add-on Examples](https://github.com/nodejs/node-addon-examples)**.

Refer to a [quick-start **Nan** Boilerplate](https://github.com/fcanas/node-native-boilerplate) for a ready-to-go project that utilizes basic Nan functionality.

For a simpler example, see the **[async pi estimation example](https://github.com/nodejs/nan/tree/master/examples/async_pi_estimate)** in the examples directory for full code and an explanation of what this Monte Carlo Pi estimation example does. Below are just some parts of the full example that illustrate the use of **NAN**.

Yet another example is **[nan-example-eol](https://github.com/CodeCharmLtd/nan-example-eol)**. It shows newline detection implemented as a native addon.

Also take a look at our comprehensive **[C++ test suite](https://github.com/nodejs/nan/tree/master/test/cpp)** which has a plethora of code snippets for your pasting pleasure.

<a name="api"></a>

## API

Additional to the NAN documentation below, please consult:

* [The V8 Getting Started * Guide](https://github.com/v8/v8/wiki/Getting%20Started%20with%20Embedding)
* [The V8 Embedders * Guide](https://github.com/v8/v8/wiki/Embedder%27s%20Guide)
* [V8 API Documentation](http://v8docs.nodesource.com/)
* [Node Add-on Documentation](https://nodejs.org/api/addons.html)

<!-- START API -->

### JavaScript-accessible methods

A _template_ is a blueprint for JavaScript functions and objects in a context. You can use a template to wrap C++ functions and data structures within JavaScript objects so that they can be manipulated from JavaScript. See the V8 Embedders Guide section on [Templates](https://github.com/v8/v8/wiki/Embedder%27s-Guide#templates) for further information.

In order to expose functionality to JavaScript via a template, you must provide it to V8 in a form that it understands. Across the versions of V8 supported by NAN, JavaScript-accessible method signatures vary widely, NAN fully abstracts method declaration and provides you with an interface that is similar to the most recent V8 API but is backward-compatible with older versions that still use the now-deceased `v8::Argument` type.

* **Method argument types**
 - <a href="doc/methods.md#api_nan_function_callback_info"><b><code>Nan::FunctionCallbackInfo</code></b></a>
 - <a href="doc/methods.md#api_nan_property_callback_info"><b><code>Nan::PropertyCallbackInfo</code></b></a>
 - <a href="doc/methods.md#api_nan_return_value"><b><code>Nan::ReturnValue</code></b></a>
* **Method declarations**
 - <a href="doc/methods.md#api_nan_method"><b>Method declaration</b></a>
 - <a href="doc/methods.md#api_nan_getter"><b>Getter declaration</b></a>
 - <a href="doc/methods.md#api_nan_setter"><b>Setter declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_getter"><b>Property getter declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_setter"><b>Property setter declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_enumerator"><b>Property enumerator declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_deleter"><b>Property deleter declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_query"><b>Property query declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_getter"><b>Index getter declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_setter"><b>Index setter declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_enumerator"><b>Index enumerator declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_deleter"><b>Index deleter declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_query"><b>Index query declaration</b></a>
* Method and template helpers
 - <a href="doc/methods.md#api_nan_set_method"><b><code>Nan::SetMethod()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_prototype_method"><b><code>Nan::SetPrototypeMethod()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_accessor"><b><code>Nan::SetAccessor()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_named_property_handler"><b><code>Nan::SetNamedPropertyHandler()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_indexed_property_handler"><b><code>Nan::SetIndexedPropertyHandler()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_template"><b><code>Nan::SetTemplate()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_prototype_template"><b><code>Nan::SetPrototypeTemplate()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_instance_template"><b><code>Nan::SetInstanceTemplate()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_call_handler"><b><code>Nan::SetCallHandler()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_call_as_function_handler"><b><code>Nan::SetCallAsFunctionHandler()</code></b></a>

### Scopes

A _local handle_ is a pointer to an object. All V8 objects are accessed using handles, they are necessary because of the way the V8 garbage collector works.

A handle scope can be thought of as a container for any number of handles. When you've finished with your handles, instead of deleting each one individually you can simply delete their scope.

The creation of `HandleScope` objects is different across the supported versions of V8. Therefore, NAN provides its own implementations that can be used safely across these.

 - <a href="doc/scopes.md#api_nan_handle_scope"><b><code>Nan::HandleScope</code></b></a>
 - <a href="doc/scopes.md#api_nan_escapable_handle_scope"><b><code>Nan::EscapableHandleScope</code></b></a>

Also see the V8 Embedders Guide section on [Handles and Garbage Collection](https://github.com/v8/v8/wiki/Embedder%27s%20Guide#handles-and-garbage-collection).

### Persistent references

An object reference that is independent of any `HandleScope` is a _persistent_ reference. Where a `Local` handle only lives as long as the `HandleScope` in which it was allocated, a `Persistent` handle remains valid until it is explicitly disposed.

Due to the evolution of the V8 API, it is necessary for NAN to provide a wrapper implementation of the `Persistent` classes to supply compatibility across the V8 versions supported.

 - <a href="doc/persistent.md#api_nan_persistent_base"><b><code>Nan::PersistentBase & v8::PersistentBase</code></b></a>
 - <a href="doc/persistent.md#api_nan_non_copyable_persistent_traits"><b><code>Nan::NonCopyablePersistentTraits & v8::NonCopyablePersistentTraits</code></b></a>
 - <a href="doc/persistent.md#api_nan_copyable_persistent_traits"><b><code>Nan::CopyablePersistentTraits & v8::CopyablePersistentTraits</code></b></a>
 - <a href="doc/persistent.md#api_nan_persistent"><b><code>Nan::Persistent</code></b></a>
 - <a href="doc/persistent.md#api_nan_global"><b><code>Nan::Global</code></b></a>
 - <a href="doc/persistent.md#api_nan_weak_callback_info"><b><code>Nan::WeakCallbackInfo</code></b></a>
 - <a href="doc/persistent.md#api_nan_weak_callback_type"><b><code>Nan::WeakCallbackType</code></b></a>

Also see the V8 Embedders Guide section on [Handles and Garbage Collection](https://developers.google.com/v8/embed#handles).

### New

NAN provides a `Nan::New()` helper for the creation of new JavaScript objects in a way that's compatible across the supported versions of V8.

 - <a href="doc/new.md#api_nan_new"><b><code>Nan::New()</code></b></a>
 - <a href="doc/new.md#api_nan_undefined"><b><code>Nan::Undefined()</code></b></a>
 - <a href="doc/new.md#api_nan_null"><b><code>Nan::Null()</code></b></a>
 - <a href="doc/new.md#api_nan_true"><b><code>Nan::True()</code></b></a>
 - <a href="doc/new.md#api_nan_false"><b><code>Nan::False()</code></b></a>
 - <a href="doc/new.md#api_nan_empty_string"><b><code>Nan::EmptyString()</code></b></a>


### Converters

NAN contains functions that convert `v8::Value`s to other `v8::Value` types and native types. Since type conversion is not guaranteed to succeed, they return `Nan::Maybe` types. These converters can be used in place of `value->ToX()` and `value->XValue()` (where `X` is one of the types, e.g. `Boolean`) in a way that provides a consistent interface across V8 versions. Newer versions of V8 use the new `v8::Maybe` and `v8::MaybeLocal` types for these conversions, older versions don't have this functionality so it is provided by NAN.

 - <a href="doc/converters.md#api_nan_to"><b><code>Nan::To()</code></b></a>

### Maybe Types

The `Nan::MaybeLocal` and `Nan::Maybe` types are monads that encapsulate `v8::Local` handles that _may be empty_.

* **Maybe Types**
  - <a href="doc/maybe_types.md#api_nan_maybe_local"><b><code>Nan::MaybeLocal</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_maybe"><b><code>Nan::Maybe</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_nothing"><b><code>Nan::Nothing</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_just"><b><code>Nan::Just</code></b></a>
* **Maybe Helpers**
  - <a href="doc/maybe_types.md#api_nan_call"><b><code>Nan::Call()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_to_detail_string"><b><code>Nan::ToDetailString()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_to_array_index"><b><code>Nan::ToArrayIndex()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_equals"><b><code>Nan::Equals()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_new_instance"><b><code>Nan::NewInstance()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_function"><b><code>Nan::GetFunction()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_set"><b><code>Nan::Set()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_define_own_property"><b><code>Nan::DefineOwnProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_force_set"><del><b><code>Nan::ForceSet()</code></b></del></a>
  - <a href="doc/maybe_types.md#api_nan_get"><b><code>Nan::Get()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_property_attribute"><b><code>Nan::GetPropertyAttributes()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has"><b><code>Nan::Has()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_delete"><b><code>Nan::Delete()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_property_names"><b><code>Nan::GetPropertyNames()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_own_property_names"><b><code>Nan::GetOwnPropertyNames()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_set_prototype"><b><code>Nan::SetPrototype()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_object_proto_to_string"><b><code>Nan::ObjectProtoToString()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_own_property"><b><code>Nan::HasOwnProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_real_named_property"><b><code>Nan::HasRealNamedProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_real_indexed_property"><b><code>Nan::HasRealIndexedProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_real_named_callback_property"><b><code>Nan::HasRealNamedCallbackProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_real_named_property_in_prototype_chain"><b><code>Nan::GetRealNamedPropertyInPrototypeChain()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_real_named_property"><b><code>Nan::GetRealNamedProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_call_as_function"><b><code>Nan::CallAsFunction()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_call_as_constructor"><b><code>Nan::CallAsConstructor()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_source_line"><b><code>Nan::GetSourceLine()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_line_number"><b><code>Nan::GetLineNumber()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_start_column"><b><code>Nan::GetStartColumn()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_end_column"><b><code>Nan::GetEndColumn()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_clone_element_at"><b><code>Nan::CloneElementAt()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_private"><b><code>Nan::HasPrivate()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_private"><b><code>Nan::GetPrivate()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_set_private"><b><code>Nan::SetPrivate()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_delete_private"><b><code>Nan::DeletePrivate()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_make_maybe"><b><code>Nan::MakeMaybe()</code></b></a>

### Script

NAN provides a `v8::Script` helpers as the API has changed over the supported versions of V8.

 - <a href="doc/script.md#api_nan_compile_script"><b><code>Nan::CompileScript()</code></b></a>
 - <a href="doc/script.md#api_nan_run_script"><b><code>Nan::RunScript()</code></b></a>


### JSON

The _JSON_ object provides the c++ versions of the methods offered by the `JSON` object in javascript. V8 exposes these methods via the `v8::JSON` object.

 - <a href="doc/json.md#api_nan_json_parse"><b><code>Nan::JSON.Parse</code></b></a>
 - <a href="doc/json.md#api_nan_json_stringify"><b><code>Nan::JSON.Stringify</code></b></a>

Refer to the V8 JSON object in the [V8 documentation](https://v8docs.nodesource.com/node-7.4/da/d6f/classv8_1_1_j_s_o_n.html) for more information about these methods and their arguments.

### Errors

NAN includes helpers for creating, throwing and catching Errors as much of this functionality varies across the supported versions of V8 and must be abstracted.

Note that an Error object is simply a specialized form of `v8::Value`.

Also consult the V8 Embedders Guide section on [Exceptions](https://developers.google.com/v8/embed#exceptions) for more information.

 - <a href="doc/errors.md#api_nan_error"><b><code>Nan::Error()</code></b></a>
 - <a href="doc/errors.md#api_nan_range_error"><b><code>Nan::RangeError()</code></b></a>
 - <a href="doc/errors.md#api_nan_reference_error"><b><code>Nan::ReferenceError()</code></b></a>
 - <a href="doc/errors.md#api_nan_syntax_error"><b><code>Nan::SyntaxError()</code></b></a>
 - <a href="doc/errors.md#api_nan_type_error"><b><code>Nan::TypeError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_error"><b><code>Nan::ThrowError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_range_error"><b><code>Nan::ThrowRangeError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_reference_error"><b><code>Nan::ThrowReferenceError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_syntax_error"><b><code>Nan::ThrowSyntaxError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_type_error"><b><code>Nan::ThrowTypeError()</code></b></a>
 - <a href="doc/errors.md#api_nan_fatal_exception"><b><code>Nan::FatalException()</code></b></a>
 - <a href="doc/errors.md#api_nan_errno_exception"><b><code>Nan::ErrnoException()</code></b></a>
 - <a href="doc/errors.md#api_nan_try_catch"><b><code>Nan::TryCatch</code></b></a>


### Buffers

NAN's `node::Buffer` helpers exist as the API has changed across supported Node versions. Use these methods to ensure compatibility.

 - <a href="doc/buffers.md#api_nan_new_buffer"><b><code>Nan::NewBuffer()</code></b></a>
 - <a href="doc/buffers.md#api_nan_copy_buffer"><b><code>Nan::CopyBuffer()</code></b></a>
 - <a href="doc/buffers.md#api_nan_free_callback"><b><code>Nan::FreeCallback()</code></b></a>

### Nan::Callback

`Nan::Callback` makes it easier to use `v8::Function` handles as callbacks. A class that wraps a `v8::Function` handle, protecting it from garbage collection and making it particularly useful for storage and use across asynchronous execution.

 - <a href="doc/callback.md#api_nan_callback"><b><code>Nan::Callback</code></b></a>

### Asynchronous work helpers

`Nan::AsyncWorker`, `Nan::AsyncProgressWorker` and `Nan::AsyncProgressQueueWorker` are helper classes that make working with asynchronous code easier.

 - <a href="doc/asyncworker.md#api_nan_async_worker"><b><code>Nan::AsyncWorker</code></b></a>
 - <a href="doc/asyncworker.md#api_nan_async_progress_worker"><b><code>Nan::AsyncProgressWorkerBase &amp; Nan::AsyncProgressWorker</code></b></a>
 - <a href="doc/asyncworker.md#api_nan_async_progress_queue_worker"><b><code>Nan::AsyncProgressQueueWorker</code></b></a>
 - <a href="doc/asyncworker.md#api_nan_async_queue_worker"><b><code>Nan::AsyncQueueWorker</code></b></a>

### Strings & Bytes

Miscellaneous string & byte encoding and decoding functionality provided for compatibility across supported versions of V8 and Node. Implemented by NAN to ensure that all encoding types are supported, even for older versions of Node where they are missing.

 - <a href="doc/string_bytes.md#api_nan_encoding"><b><code>Nan::Encoding</code></b></a>
 - <a href="doc/string_bytes.md#api_nan_encode"><b><code>Nan::Encode()</code></b></a>
 - <a href="doc/string_bytes.md#api_nan_decode_bytes"><b><code>Nan::DecodeBytes()</code></b></a>
 - <a href="doc/string_bytes.md#api_nan_decode_write"><b><code>Nan::DecodeWrite()</code></b></a>


### Object Wrappers

The `ObjectWrap` class can be used to make wrapped C++ objects and a factory of wrapped objects.

 - <a href="doc/object_wrappers.md#api_nan_object_wrap"><b><code>Nan::ObjectWrap</code></b></a>


### V8 internals

The hooks to access V8 internals—including GC and statistics—are different across the supported versions of V8, therefore NAN provides its own hooks that call the appropriate V8 methods.

 - <a href="doc/v8_internals.md#api_nan_gc_callback"><b><code>NAN_GC_CALLBACK()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_add_gc_epilogue_callback"><b><code>Nan::AddGCEpilogueCallback()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_remove_gc_epilogue_callback"><b><code>Nan::RemoveGCEpilogueCallback()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_add_gc_prologue_callback"><b><code>Nan::AddGCPrologueCallback()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_remove_gc_prologue_callback"><b><code>Nan::RemoveGCPrologueCallback()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_get_heap_statistics"><b><code>Nan::GetHeapStatistics()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_set_counter_function"><b><code>Nan::SetCounterFunction()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_set_create_histogram_function"><b><code>Nan::SetCreateHistogramFunction()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_set_add_histogram_sample_function"><b><code>Nan::SetAddHistogramSampleFunction()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_idle_notification"><b><code>Nan::IdleNotification()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_low_memory_notification"><b><code>Nan::LowMemoryNotification()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_context_disposed_notification"><b><code>Nan::ContextDisposedNotification()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_get_internal_field_pointer"><b><code>Nan::GetInternalFieldPointer()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_set_internal_field_pointer"><b><code>Nan::SetInternalFieldPointer()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_adjust_external_memory"><b><code>Nan::AdjustExternalMemory()</code></b></a>


### Miscellaneous V8 Helpers

 - <a href="doc/v8_misc.md#api_nan_utf8_string"><b><code>Nan::Utf8String</code></b></a>
 - <a href="doc/v8_misc.md#api_nan_get_current_context"><b><code>Nan::GetCurrentContext()</code></b></a>
 - <a href="doc/v8_misc.md#api_nan_set_isolate_data"><b><code>Nan::SetIsolateData()</code></b></a>
 - <a href="doc/v8_misc.md#api_nan_get_isolate_data"><b><code>Nan::GetIsolateData()</code></b></a>
 - <a href="doc/v8_misc.md#api_nan_typedarray_contents"><b><code>Nan::TypedArrayContents</code></b></a>


### Miscellaneous Node Helpers

 - <a href="doc/node_misc.md#api_nan_asyncresource"><b><code>Nan::AsyncResource</code></b></a>
 - <a href="doc/node_misc.md#api_nan_make_callback"><b><code>Nan::MakeCallback()</code></b></a>
 - <a href="doc/node_misc.md#api_nan_module_init"><b><code>NAN_MODULE_INIT()</code></b></a>
 - <a href="doc/node_misc.md#api_nan_export"><b><code>Nan::Export()</code></b></a>

<!-- END API -->


<a name="tests"></a>

### Tests

To run the NAN tests do:

``` sh
npm install
npm run-script rebuild-tests
npm test
```

Or just:

``` sh
npm install
make test
```

<a name="issues"></a>

## Known issues

### Compiling against Node.js 0.12 on OSX

With new enough compilers available on OSX, the versions of V8 headers corresponding to Node.js 0.12
do not compile anymore. The error looks something like:

```
❯   CXX(target) Release/obj.target/accessors/cpp/accessors.o
In file included from ../cpp/accessors.cpp:9:
In file included from ../../nan.h:51:
In file included from /Users/ofrobots/.node-gyp/0.12.18/include/node/node.h:61:
/Users/ofrobots/.node-gyp/0.12.18/include/node/v8.h:5800:54: error: 'CreateHandle' is a protected member of 'v8::HandleScope'
  return Handle<T>(reinterpret_cast<T*>(HandleScope::CreateHandle(
                                        ~~~~~~~~~~~~~^~~~~~~~~~~~
```

This can be worked around by patching your local versions of v8.h corresponding to Node 0.12 to make
`v8::Handle` a friend of `v8::HandleScope`. Since neither Node.js not V8 support this release line anymore
this patch cannot be released by either project in an official release.

For this reason, we do not test against Node.js 0.12 on OSX in this project's CI. If you need to support
that configuration, you will need to either get an older compiler, or apply a source patch to the version
of V8 headers as a workaround.

<a name="governance"></a>

## Governance & Contributing

NAN is governed by the [Node.js Addon API Working Group](https://github.com/nodejs/CTC/blob/master/WORKING_GROUPS.md#addon-api)

### Addon API Working Group (WG)

The NAN project is jointly governed by a Working Group which is responsible for high-level guidance of the project.

Members of the WG are also known as Collaborators, there is no distinction between the two, unlike other Node.js projects.

The WG has final authority over this project including:

* Technical direction
* Project governance and process (including this policy)
* Contribution policy
* GitHub repository hosting
* Maintaining the list of additional Collaborators

For the current list of WG members, see the project [README.md](./README.md#collaborators).

Individuals making significant and valuable contributions are made members of the WG and given commit-access to the project. These individuals are identified by the WG and their addition to the WG is discussed via GitHub and requires unanimous consensus amongst those WG members participating in the discussion with a quorum of 50% of WG members required for acceptance of the vote.

_Note:_ If you make a significant contribution and are not considered for commit-access log an issue or contact a WG member directly.

For the current list of WG members / Collaborators, see the project [README.md](./README.md#collaborators).

### Consensus Seeking Process

The WG follows a [Consensus Seeking](http://en.wikipedia.org/wiki/Consensus-seeking_decision-making) decision making model.

Modifications of the contents of the NAN repository are made on a collaborative basis. Anybody with a GitHub account may propose a modification via pull request and it will be considered by the WG. All pull requests must be reviewed and accepted by a WG member with sufficient expertise who is able to take full responsibility for the change. In the case of pull requests proposed by an existing WG member, an additional WG member is required for sign-off. Consensus should be sought if additional WG members participate and there is disagreement around a particular modification.

If a change proposal cannot reach a consensus, a WG member can call for a vote amongst the members of the WG. Simple majority wins.

<a id="developers-certificate-of-origin"></a>

## Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

* (a) The contribution was created in whole or in part by me and I
  have the right to submit it under the open source license
  indicated in the file; or

* (b) The contribution is based upon previous work that, to the best
  of my knowledge, is covered under an appropriate open source
  license and I have the right under that license to submit that
  work with modifications, whether created in whole or in part
  by me, under the same open source license (unless I am
  permitted to submit under a different license), as indicated
  in the file; or

* (c) The contribution was provided directly to me by some other
  person who certified (a), (b) or (c) and I have not modified
  it.

* (d) I understand and agree that this project and the contribution
  are public and that a record of the contribution (including all
  personal information I submit with it, including my sign-off) is
  maintained indefinitely and may be redistributed consistent with
  this project or the open source license(s) involved.

<a name="collaborators"></a>

### WG Members / Collaborators

<table><tbody>
<tr><th align="left">Rod Vagg</th><td><a href="https://github.com/rvagg">GitHub/rvagg</a></td><td><a href="http://twitter.com/rvagg">Twitter/@rvagg</a></td></tr>
<tr><th align="left">Benjamin Byholm</th><td><a href="https://github.com/kkoopa/">GitHub/kkoopa</a></td><td>-</td></tr>
<tr><th align="left">Trevor Norris</th><td><a href="https://github.com/trevnorris">GitHub/trevnorris</a></td><td><a href="http://twitter.com/trevnorris">Twitter/@trevnorris</a></td></tr>
<tr><th align="left">Nathan Rajlich</th><td><a href="https://github.com/TooTallNate">GitHub/TooTallNate</a></td><td><a href="http://twitter.com/TooTallNate">Twitter/@TooTallNate</a></td></tr>
<tr><th align="left">Brett Lawson</th><td><a href="https://github.com/brett19">GitHub/brett19</a></td><td><a href="http://twitter.com/brett19x">Twitter/@brett19x</a></td></tr>
<tr><th align="left">Ben Noordhuis</th><td><a href="https://github.com/bnoordhuis">GitHub/bnoordhuis</a></td><td><a href="http://twitter.com/bnoordhuis">Twitter/@bnoordhuis</a></td></tr>
<tr><th align="left">David Siegel</th><td><a href="https://github.com/agnat">GitHub/agnat</a></td><td><a href="http://twitter.com/agnat">Twitter/@agnat</a></td></tr>
<tr><th align="left">Michael Ira Krufky</th><td><a href="https://github.com/mkrufky">GitHub/mkrufky</a></td><td><a href="http://twitter.com/mkrufky">Twitter/@mkrufky</a></td></tr>
</tbody></table>

## Licence &amp; copyright

Copyright (c) 2018 NAN WG Members / Collaborators (listed above).

Native Abstractions for Node.js is licensed under an MIT license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
