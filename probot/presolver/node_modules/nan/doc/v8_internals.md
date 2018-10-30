## V8 internals

The hooks to access V8 internals—including GC and statistics—are different across the supported versions of V8, therefore NAN provides its own hooks that call the appropriate V8 methods.

 - <a href="#api_nan_gc_callback"><b><code>NAN_GC_CALLBACK()</code></b></a>
 - <a href="#api_nan_add_gc_epilogue_callback"><b><code>Nan::AddGCEpilogueCallback()</code></b></a>
 - <a href="#api_nan_remove_gc_epilogue_callback"><b><code>Nan::RemoveGCEpilogueCallback()</code></b></a>
 - <a href="#api_nan_add_gc_prologue_callback"><b><code>Nan::AddGCPrologueCallback()</code></b></a>
 - <a href="#api_nan_remove_gc_prologue_callback"><b><code>Nan::RemoveGCPrologueCallback()</code></b></a>
 - <a href="#api_nan_get_heap_statistics"><b><code>Nan::GetHeapStatistics()</code></b></a>
 - <a href="#api_nan_set_counter_function"><b><code>Nan::SetCounterFunction()</code></b></a>
 - <a href="#api_nan_set_create_histogram_function"><b><code>Nan::SetCreateHistogramFunction()</code></b></a>
 - <a href="#api_nan_set_add_histogram_sample_function"><b><code>Nan::SetAddHistogramSampleFunction()</code></b></a>
 - <a href="#api_nan_idle_notification"><b><code>Nan::IdleNotification()</code></b></a>
 - <a href="#api_nan_low_memory_notification"><b><code>Nan::LowMemoryNotification()</code></b></a>
 - <a href="#api_nan_context_disposed_notification"><b><code>Nan::ContextDisposedNotification()</code></b></a>
 - <a href="#api_nan_get_internal_field_pointer"><b><code>Nan::GetInternalFieldPointer()</code></b></a>
 - <a href="#api_nan_set_internal_field_pointer"><b><code>Nan::SetInternalFieldPointer()</code></b></a>
 - <a href="#api_nan_adjust_external_memory"><b><code>Nan::AdjustExternalMemory()</code></b></a>


<a name="api_nan_gc_callback"></a>
### NAN_GC_CALLBACK(callbackname)

Use `NAN_GC_CALLBACK` to declare your callbacks for `Nan::AddGCPrologueCallback()` and `Nan::AddGCEpilogueCallback()`. Your new method receives the arguments `v8::GCType type` and `v8::GCCallbackFlags flags`.

```c++
static Nan::Persistent<Function> callback;

NAN_GC_CALLBACK(gcPrologueCallback) {
  v8::Local<Value> argv[] = { Nan::New("prologue").ToLocalChecked() };
  Nan::MakeCallback(Nan::GetCurrentContext()->Global(), Nan::New(callback), 1, argv);
}

NAN_METHOD(Hook) {
  callback.Reset(To<Function>(args[0]).ToLocalChecked());
  Nan::AddGCPrologueCallback(gcPrologueCallback);
  info.GetReturnValue().Set(info.Holder());
}
```

<a name="api_nan_add_gc_epilogue_callback"></a>
### Nan::AddGCEpilogueCallback()

Signature:

```c++
void Nan::AddGCEpilogueCallback(v8::Isolate::GCEpilogueCallback callback, v8::GCType gc_type_filter = v8::kGCTypeAll)
```

Calls V8's [`AddGCEpilogueCallback()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#a90d1860babc76059c62514b422f56960).

<a name="api_nan_remove_gc_epilogue_callback"></a>
### Nan::RemoveGCEpilogueCallback()

Signature:

```c++
void Nan::RemoveGCEpilogueCallback(v8::Isolate::GCEpilogueCallback callback)
```

Calls V8's [`RemoveGCEpilogueCallback()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#a05c60859fd4b8e96bfcd451281ed6c7c).

<a name="api_nan_add_gc_prologue_callback"></a>
### Nan::AddGCPrologueCallback()

Signature:

```c++
void Nan::AddGCPrologueCallback(v8::Isolate::GCPrologueCallback, v8::GCType gc_type_filter callback)
```

Calls V8's [`AddGCPrologueCallback()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#ab4b87b8f9f8e5bf95eba4009357e001f).

<a name="api_nan_remove_gc_prologue_callback"></a>
### Nan::RemoveGCPrologueCallback()

Signature:

```c++
void Nan::RemoveGCPrologueCallback(v8::Isolate::GCPrologueCallback callback)
```

Calls V8's [`RemoveGCEpilogueCallback()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#a9f6c51932811593f81ff30b949124186).

<a name="api_nan_get_heap_statistics"></a>
### Nan::GetHeapStatistics()

Signature:

```c++
void Nan::GetHeapStatistics(v8::HeapStatistics *heap_statistics)
```

Calls V8's [`GetHeapStatistics()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#a5593ac74687b713095c38987e5950b34).

<a name="api_nan_set_counter_function"></a>
### Nan::SetCounterFunction()

Signature:

```c++
void Nan::SetCounterFunction(v8::CounterLookupCallback cb)
```

Calls V8's [`SetCounterFunction()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#a045d7754e62fa0ec72ae6c259b29af94).

<a name="api_nan_set_create_histogram_function"></a>
### Nan::SetCreateHistogramFunction()

Signature:

```c++
void Nan::SetCreateHistogramFunction(v8::CreateHistogramCallback cb) 
```

Calls V8's [`SetCreateHistogramFunction()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#a542d67e85089cb3f92aadf032f99e732).

<a name="api_nan_set_add_histogram_sample_function"></a>
### Nan::SetAddHistogramSampleFunction()

Signature:

```c++
void Nan::SetAddHistogramSampleFunction(v8::AddHistogramSampleCallback cb) 
```

Calls V8's [`SetAddHistogramSampleFunction()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#aeb420b690bc2c216882d6fdd00ddd3ea).

<a name="api_nan_idle_notification"></a>
### Nan::IdleNotification()

Signature:

```c++
void Nan::IdleNotification(v8::HeapStatistics *heap_statistics)
```

Calls V8's [`IdleNotification()` or `IdleNotificationDeadline()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#ad6a2a02657f5425ad460060652a5a118) depending on V8 version.

<a name="api_nan_low_memory_notification"></a>
### Nan::LowMemoryNotification()

Signature:

```c++
void Nan::LowMemoryNotification() 
```

Calls V8's [`LowMemoryNotification()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#a24647f61d6b41f69668094bdcd6ea91f).

<a name="api_nan_context_disposed_notification"></a>
### Nan::ContextDisposedNotification()

Signature:

```c++
void Nan::ContextDisposedNotification()
```

Calls V8's [`ContextDisposedNotification()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#ad7f5dc559866343fe6cd8db1f134d48b).

<a name="api_nan_get_internal_field_pointer"></a>
### Nan::GetInternalFieldPointer()

Gets a pointer to the internal field with at `index` from a V8 `Object` handle.

Signature:

```c++
void* Nan::GetInternalFieldPointer(v8::Local<v8::Object> object, int index) 
```

Calls the Object's [`GetAlignedPointerFromInternalField()` or `GetPointerFromInternalField()`](https://v8docs.nodesource.com/io.js-3.3/db/d85/classv8_1_1_object.html#ab3c57184263cf29963ef0017bec82281) depending on the version of V8.

<a name="api_nan_set_internal_field_pointer"></a>
### Nan::SetInternalFieldPointer()

Sets the value of the internal field at `index` on a V8 `Object` handle.

Signature:

```c++
void Nan::SetInternalFieldPointer(v8::Local<v8::Object> object, int index, void* value)
```

Calls the Object's [`SetAlignedPointerInInternalField()` or `SetPointerInInternalField()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#ad7f5dc559866343fe6cd8db1f134d48b) depending on the version of V8.

<a name="api_nan_adjust_external_memory"></a>
### Nan::AdjustExternalMemory()

Signature:

```c++
int Nan::AdjustExternalMemory(int bytesChange)
```

Calls V8's [`AdjustAmountOfExternalAllocatedMemory()`](https://v8docs.nodesource.com/io.js-3.3/d5/dda/classv8_1_1_isolate.html#ae1a59cac60409d3922582c4af675473e).

