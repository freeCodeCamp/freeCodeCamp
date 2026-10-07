#include "Watcher.hh"
#include <unordered_set>

using namespace Napi;

struct WatcherHash {
  std::size_t operator() (WatcherRef const &k) const {
    return std::hash<std::string>()(k->mDir);
  }
};

struct WatcherCompare {
  size_t operator() (WatcherRef const &a, WatcherRef const &b) const {
    return *a == *b;
  }
};

static std::unordered_set<WatcherRef , WatcherHash, WatcherCompare>& getSharedWatchers() {
  static std::unordered_set<WatcherRef , WatcherHash, WatcherCompare>* sharedWatchers = 
    new std::unordered_set<WatcherRef , WatcherHash, WatcherCompare>();
  return *sharedWatchers;
}

WatcherRef Watcher::getShared(std::string dir, std::unordered_set<std::string> ignorePaths, std::unordered_set<Glob> ignoreGlobs) {
  WatcherRef watcher = std::make_shared<Watcher>(dir, ignorePaths, ignoreGlobs);
  auto found = getSharedWatchers().find(watcher);
  if (found != getSharedWatchers().end()) {
    return *found;
  }

  getSharedWatchers().insert(watcher);
  return watcher;
}

void removeShared(Watcher *watcher) {
  for (auto it = getSharedWatchers().begin(); it != getSharedWatchers().end(); it++) {
    if (it->get() == watcher) {
      getSharedWatchers().erase(it);
      break;
    }
  }

  // Free up memory.
  if (getSharedWatchers().size() == 0) {
    getSharedWatchers().rehash(0);
  }
}

Watcher::Watcher(std::string dir, std::unordered_set<std::string> ignorePaths, std::unordered_set<Glob> ignoreGlobs)
  : mDir(dir),
    mIgnorePaths(ignorePaths),
    mIgnoreGlobs(ignoreGlobs) {
      mDebounce = Debounce::getShared();
      mDebounce->add(this, [this] () {
        triggerCallbacks();
      });
    }

Watcher::~Watcher() {
  mDebounce->remove(this);
}

void Watcher::wait() {
  std::unique_lock<std::mutex> lk(mMutex);
  mCond.wait(lk);
}

void Watcher::notify() {
  std::unique_lock<std::mutex> lk(mMutex);
  mCond.notify_all();

  if (mCallbacks.size() > 0 && mEvents.size() > 0) {
    // We must release our lock before calling into the debouncer
    // to avoid a deadlock: the debouncer thread itself will require
    // our lock from its thread when calling into `triggerCallbacks`
    // while holding its own debouncer lock.
    lk.unlock();
    mDebounce->trigger();
  }
}

struct CallbackData {
  std::string error;
  std::vector<Event> events;
  CallbackData(std::string error, std::vector<Event> events) : error(error), events(events) {}
};

Value callbackEventsToJS(const Env &env, std::vector<Event> &events) {
  EscapableHandleScope scope(env);
  Array arr = Array::New(env, events.size());
  uint32_t currentEventIndex = 0;
  for (auto eventIterator = events.begin(); eventIterator != events.end(); eventIterator++) {
    arr.Set(currentEventIndex++, eventIterator->toJS(env));
  }
  return scope.Escape(arr);
}

void callJSFunction(Napi::Env env, Function jsCallback, CallbackData *data) {
  HandleScope scope(env);
  auto err = data->error.size() > 0 ? Error::New(env, data->error).Value() : env.Null();
  auto events = callbackEventsToJS(env, data->events);
  jsCallback.Call({err, events});
  delete data;

  // Throw errors from the callback as fatal exceptions
  // If we don't handle these node segfaults...
  if (env.IsExceptionPending()) {
    Napi::Error err = env.GetAndClearPendingException();
    napi_fatal_exception(env, err.Value());
  }
}

void Watcher::notifyError(std::exception &err) {
  std::unique_lock<std::mutex> lk(mMutex);
  for (auto it = mCallbacks.begin(); it != mCallbacks.end(); it++) {
    CallbackData *data = new CallbackData(err.what(), {});
    it->tsfn.BlockingCall(data, callJSFunction);
  }

  clearCallbacks();
}

// This function is called from the debounce thread.
void Watcher::triggerCallbacks() {
  std::unique_lock<std::mutex> lk(mMutex);
  if (mCallbacks.size() > 0 && (mEvents.size() > 0 || mEvents.hasError())) {
    auto error = mEvents.getError();
    auto events = mEvents.getEvents();
    mEvents.clear();

    for (auto it = mCallbacks.begin(); it != mCallbacks.end(); it++) {
      it->tsfn.BlockingCall(new CallbackData(error, events), callJSFunction);
    }
  }
}

// This should be called from the JavaScript thread.
bool Watcher::watch(Function callback) {
  std::unique_lock<std::mutex> lk(mMutex);

  auto it = findCallback(callback);
  if (it != mCallbacks.end()) {
    return false;
  }

  auto tsfn = ThreadSafeFunction::New(
    callback.Env(),
    callback,
    "Watcher callback",
    0, // Unlimited queue
    1 // Initial thread count
  );

  mCallbacks.push_back(Callback {
    tsfn,
    Napi::Persistent(callback),
    std::this_thread::get_id()
  });

  return true;
}

// This should be called from the JavaScript thread.
std::vector<Callback>::iterator Watcher::findCallback(Function callback) {
  for (auto it = mCallbacks.begin(); it != mCallbacks.end(); it++) {
    // Only consider callbacks created by the same thread, or V8 will panic.
    if (it->threadId == std::this_thread::get_id() && it->ref.Value() == callback) {
      return it;
    }
  }

  return mCallbacks.end();
}

// This should be called from the JavaScript thread.
bool Watcher::unwatch(Function callback) {
  std::unique_lock<std::mutex> lk(mMutex);

  bool removed = false;
  auto it = findCallback(callback);
  if (it != mCallbacks.end()) {
    it->tsfn.Release();
    it->ref.Unref();
    mCallbacks.erase(it);
    removed = true;
  }

  if (removed && mCallbacks.size() == 0) {
    unref();
    return true;
  }

  return false;
}

void Watcher::unref() {
  if (mCallbacks.size() == 0) {
    removeShared(this);
  }
}

void Watcher::destroy() {
  std::unique_lock<std::mutex> lk(mMutex);
  clearCallbacks();
}

// Private because it doesn't lock.
void Watcher::clearCallbacks() {
  for (auto it = mCallbacks.begin(); it != mCallbacks.end(); it++) {
    it->tsfn.Release();
    it->ref.Unref();
  }

  mCallbacks.clear();
  unref();
}

bool Watcher::isIgnored(std::string path) {
  for (auto it = mIgnorePaths.begin(); it != mIgnorePaths.end(); it++) {
    auto dir = *it + DIR_SEP;
    if (*it == path || path.compare(0, dir.size(), dir) == 0) {
      return true;
    }
  }

  auto basePath = mDir + DIR_SEP;

  if (path.rfind(basePath, 0) != 0) {
    return false;
  }

  auto relativePath = path.substr(basePath.size());

  for (auto it = mIgnoreGlobs.begin(); it != mIgnoreGlobs.end(); it++) {
    if (it->isIgnored(relativePath)) {
      return true;
    }
  }

  return false;
}
