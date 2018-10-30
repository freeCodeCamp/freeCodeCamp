## Asynchronous work helpers

`Nan::AsyncWorker`, `Nan::AsyncProgressWorker` and `Nan::AsyncProgressQueueWorker` are helper classes that make working with asynchronous code easier.

 - <a href="#api_nan_async_worker"><b><code>Nan::AsyncWorker</code></b></a>
 - <a href="#api_nan_async_progress_worker"><b><code>Nan::AsyncProgressWorkerBase &amp; Nan::AsyncProgressWorker</code></b></a>
 - <a href="#api_nan_async_progress_queue_worker"><b><code>Nan::AsyncProgressQueueWorker</code></b></a>
 - <a href="#api_nan_async_queue_worker"><b><code>Nan::AsyncQueueWorker</code></b></a>

<a name="api_nan_async_worker"></a>
### Nan::AsyncWorker

`Nan::AsyncWorker` is an _abstract_ class that you can subclass to have much of the annoying asynchronous queuing and handling taken care of for you. It can even store arbitrary V8 objects for you and have them persist while the asynchronous work is in progress.

This class internally handles the details of creating an [`AsyncResource`][AsyncResource], and running the callback in the
correct async context. To be able to identify the async resources created by this class in async-hooks, provide a
`resource_name` to the constructor. It is recommended that the module name be used as a prefix to the `resource_name` to avoid
collisions in the names. For more details see [`AsyncResource`][AsyncResource] documentation.  The `resource_name` needs to stay valid for the lifetime of the worker instance.

Definition:

```c++
class AsyncWorker {
 public:
  explicit AsyncWorker(Callback *callback_, const char* resource_name = "nan:AsyncWorker");

  virtual ~AsyncWorker();

  virtual void WorkComplete();

  void SaveToPersistent(const char *key, const v8::Local<v8::Value> &value);

  void SaveToPersistent(const v8::Local<v8::String> &key,
                        const v8::Local<v8::Value> &value);

  void SaveToPersistent(uint32_t index,
                        const v8::Local<v8::Value> &value);

  v8::Local<v8::Value> GetFromPersistent(const char *key) const;

  v8::Local<v8::Value> GetFromPersistent(const v8::Local<v8::String> &key) const;

  v8::Local<v8::Value> GetFromPersistent(uint32_t index) const;

  virtual void Execute() = 0;

  uv_work_t request;

  virtual void Destroy();

 protected:
  Persistent<v8::Object> persistentHandle;

  Callback *callback;

  virtual void HandleOKCallback();

  virtual void HandleErrorCallback();

  void SetErrorMessage(const char *msg);

  const char* ErrorMessage();
};
```

<a name="api_nan_async_progress_worker"></a>
### Nan::AsyncProgressWorkerBase &amp; Nan::AsyncProgressWorker

`Nan::AsyncProgressWorkerBase` is an _abstract_ class template that extends `Nan::AsyncWorker` and adds additional progress reporting callbacks that can be used during the asynchronous work execution to provide progress data back to JavaScript.

Previously the definiton of `Nan::AsyncProgressWorker` only allowed sending `const char` data. Now extending `Nan::AsyncProgressWorker` will yield an instance of the implicit `Nan::AsyncProgressWorkerBase` template with type `<char>` for compatibility.

`Nan::AsyncProgressWorkerBase` &amp; `Nan::AsyncProgressWorker` is intended for best-effort delivery of nonessential progress messages, e.g. a progress bar.  The last event sent before the main thread is woken will be delivered.

Definition:

```c++
template<class T>
class AsyncProgressWorkerBase<T> : public AsyncWorker {
 public:
  explicit AsyncProgressWorkerBase(Callback *callback_, const char* resource_name = ...);

  virtual ~AsyncProgressWorkerBase();

  void WorkProgress();

  class ExecutionProgress {
   public:
    void Signal() const;
    void Send(const T* data, size_t count) const;
  };

  virtual void Execute(const ExecutionProgress& progress) = 0;

  virtual void HandleProgressCallback(const T *data, size_t count) = 0;

  virtual void Destroy();
};

typedef AsyncProgressWorkerBase<T> AsyncProgressWorker;
```

<a name="api_nan_async_progress_queue_worker"></a>
### Nan::AsyncProgressQueueWorker

`Nan::AsyncProgressQueueWorker` is an _abstract_ class template that extends `Nan::AsyncWorker` and adds additional progress reporting callbacks that can be used during the asynchronous work execution to provide progress data back to JavaScript.

`Nan::AsyncProgressQueueWorker` behaves exactly the same as `Nan::AsyncProgressWorker`, except all events are queued and delivered to the main thread.

Definition:

```c++
template<class T>
class AsyncProgressQueueWorker<T> : public AsyncWorker {
 public:
  explicit AsyncProgressQueueWorker(Callback *callback_, const char* resource_name = "nan:AsyncProgressQueueWorker");

  virtual ~AsyncProgressQueueWorker();

  void WorkProgress();

  class ExecutionProgress {
   public:
    void Send(const T* data, size_t count) const;
  };

  virtual void Execute(const ExecutionProgress& progress) = 0;

  virtual void HandleProgressCallback(const T *data, size_t count) = 0;

  virtual void Destroy();
};
```

<a name="api_nan_async_queue_worker"></a>
### Nan::AsyncQueueWorker

`Nan::AsyncQueueWorker` will run a `Nan::AsyncWorker` asynchronously via libuv. Both the `execute` and `after_work` steps are taken care of for you. Most of the logic for this is embedded in `Nan::AsyncWorker`.

Definition:

```c++
void AsyncQueueWorker(AsyncWorker *);
```

[AsyncResource]: "node_misc.html#api_nan_asyncresource"
