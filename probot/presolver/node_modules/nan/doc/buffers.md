## Buffers

NAN's `node::Buffer` helpers exist as the API has changed across supported Node versions. Use these methods to ensure compatibility.

 - <a href="#api_nan_new_buffer"><b><code>Nan::NewBuffer()</code></b></a>
 - <a href="#api_nan_copy_buffer"><b><code>Nan::CopyBuffer()</code></b></a>
 - <a href="#api_nan_free_callback"><b><code>Nan::FreeCallback()</code></b></a>

<a name="api_nan_new_buffer"></a>
### Nan::NewBuffer()

Allocate a new `node::Buffer` object with the specified size and optional data. Calls `node::Buffer::New()`.

Note that when creating a `Buffer` using `Nan::NewBuffer()` and an existing `char*`, it is assumed that the ownership of the pointer is being transferred to the new `Buffer` for management.
When a `node::Buffer` instance is garbage collected and a `FreeCallback` has not been specified, `data` will be disposed of via a call to `free()`.
You _must not_ free the memory space manually once you have created a `Buffer` in this way.

Signature:

```c++
Nan::MaybeLocal<v8::Object> Nan::NewBuffer(uint32_t size)
Nan::MaybeLocal<v8::Object> Nan::NewBuffer(char* data, uint32_t size)
Nan::MaybeLocal<v8::Object> Nan::NewBuffer(char *data,
                                           size_t length,
                                           Nan::FreeCallback callback,
                                           void *hint)
```


<a name="api_nan_copy_buffer"></a>
### Nan::CopyBuffer()

Similar to [`Nan::NewBuffer()`](#api_nan_new_buffer) except that an implicit memcpy will occur within Node. Calls `node::Buffer::Copy()`.

Management of the `char*` is left to the user, you should manually free the memory space if necessary as the new `Buffer` will have its own copy.

Signature:

```c++
Nan::MaybeLocal<v8::Object> Nan::CopyBuffer(const char *data, uint32_t size)
```


<a name="api_nan_free_callback"></a>
### Nan::FreeCallback()

A free callback that can be provided to [`Nan::NewBuffer()`](#api_nan_new_buffer).
The supplied callback will be invoked when the `Buffer` undergoes garbage collection.

Signature:

```c++
typedef void (*FreeCallback)(char *data, void *hint);
```
