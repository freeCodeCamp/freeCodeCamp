/*
Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
*/

// Node does not include the headers for these functions when compiling for WASM, so add them here.
#ifdef __wasm32__
extern "C" {
NAPI_EXTERN napi_status NAPI_CDECL
napi_create_threadsafe_function(napi_env env,
                                napi_value func,
                                napi_value async_resource,
                                napi_value async_resource_name,
                                size_t max_queue_size,
                                size_t initial_thread_count,
                                void* thread_finalize_data,
                                napi_finalize thread_finalize_cb,
                                void* context,
                                napi_threadsafe_function_call_js call_js_cb,
                                napi_threadsafe_function* result);

NAPI_EXTERN napi_status NAPI_CDECL napi_get_threadsafe_function_context(
    napi_threadsafe_function func, void** result);

NAPI_EXTERN napi_status NAPI_CDECL
napi_call_threadsafe_function(napi_threadsafe_function func,
                              void* data,
                              napi_threadsafe_function_call_mode is_blocking);

NAPI_EXTERN napi_status NAPI_CDECL
napi_acquire_threadsafe_function(napi_threadsafe_function func);

NAPI_EXTERN napi_status NAPI_CDECL napi_release_threadsafe_function(
    napi_threadsafe_function func, napi_threadsafe_function_release_mode mode);

NAPI_EXTERN napi_status NAPI_CDECL
napi_unref_threadsafe_function(napi_env env, napi_threadsafe_function func);

NAPI_EXTERN napi_status NAPI_CDECL
napi_ref_threadsafe_function(napi_env env, napi_threadsafe_function func);

NAPI_EXTERN napi_status NAPI_CDECL
napi_create_async_work(napi_env env,
                       napi_value async_resource,
                       napi_value async_resource_name,
                       napi_async_execute_callback execute,
                       napi_async_complete_callback complete,
                       void* data,
                       napi_async_work* result);
NAPI_EXTERN napi_status NAPI_CDECL napi_delete_async_work(napi_env env,
                                                          napi_async_work work);
NAPI_EXTERN napi_status NAPI_CDECL napi_queue_async_work(napi_env env,
                                                         napi_async_work work);
NAPI_EXTERN napi_status NAPI_CDECL napi_cancel_async_work(napi_env env,
                                                          napi_async_work work);
}
#endif
