#ifdef FS_EVENTS
#include "macos/FSEventsBackend.hh"
#endif
#ifdef WATCHMAN
#include "watchman/WatchmanBackend.hh"
#endif
#ifdef WINDOWS
#include "windows/WindowsBackend.hh"
#endif
#ifdef INOTIFY
#include "linux/InotifyBackend.hh"
#endif
#ifdef KQUEUE
#include "kqueue/KqueueBackend.hh"
#endif
#ifdef __wasm32__
#include "wasm/WasmBackend.hh"
#endif
#include "shared/BruteForceBackend.hh"

#include "Backend.hh"
#include <unordered_map>

static std::unordered_map<std::string, std::shared_ptr<Backend>>& getSharedBackends() {
  static std::unordered_map<std::string, std::shared_ptr<Backend>>* sharedBackends = 
    new std::unordered_map<std::string, std::shared_ptr<Backend>>();
  return *sharedBackends;
}

std::shared_ptr<Backend> getBackend(std::string backend) {
  // Use FSEvents on macOS by default.
  // Use watchman by default if available on other platforms.
  // Fall back to brute force.
  #ifdef FS_EVENTS
    if (backend == "fs-events" || backend == "default") {
      return std::make_shared<FSEventsBackend>();
    }
  #endif
  #ifdef WATCHMAN
    if ((backend == "watchman" || backend == "default") && WatchmanBackend::checkAvailable()) {
      return std::make_shared<WatchmanBackend>();
    }
  #endif
  #ifdef WINDOWS
    if (backend == "windows" || backend == "default") {
      return std::make_shared<WindowsBackend>();
    }
  #endif
  #ifdef INOTIFY
    if (backend == "inotify" || backend == "default") {
      return std::make_shared<InotifyBackend>();
    }
  #endif
  #ifdef KQUEUE
    if (backend == "kqueue" || backend == "default") {
      return std::make_shared<KqueueBackend>();
    }
  #endif
  #ifdef __wasm32__
    if (backend == "wasm" || backend == "default") {
      return std::make_shared<WasmBackend>();
    }
  #endif
  if (backend == "brute-force" || backend == "default") {
    return std::make_shared<BruteForceBackend>();
  }

  return nullptr;
}

std::shared_ptr<Backend> Backend::getShared(std::string backend) {
  auto found = getSharedBackends().find(backend);
  if (found != getSharedBackends().end()) {
    return found->second;
  }

  auto result = getBackend(backend);
  if (!result) {
    return getShared("default");
  }

  result->run();
  getSharedBackends().emplace(backend, result);
  return result;
}

void removeShared(Backend *backend) {
  for (auto it = getSharedBackends().begin(); it != getSharedBackends().end(); it++) {
    if (it->second.get() == backend) {
      getSharedBackends().erase(it);
      break;
    }
  }

  // Free up memory.
  if (getSharedBackends().size() == 0) {
    getSharedBackends().rehash(0);
  }
}

void Backend::run() {
  #ifndef __wasm32__
    mThread = std::thread([this] () {
      try {
        start();
      } catch (std::exception &err) {
        handleError(err);
      }
    });

    if (mThread.joinable()) {
      mStartedSignal.wait();
    }
  #else
    try {
      start();
    } catch (std::exception &err) {
      handleError(err);
    }
  #endif
}

void Backend::notifyStarted() {
  mStartedSignal.notify();
}

void Backend::start() {
  notifyStarted();
}

Backend::~Backend() {
  #ifndef __wasm32__
    // Wait for thread to stop
    if (mThread.joinable()) {
      // If the backend is being destroyed from the thread itself, detach, otherwise join.
      if (mThread.get_id() == std::this_thread::get_id()) {
        mThread.detach();
      } else {
        mThread.join();
      }
    }
  #endif
}

void Backend::watch(WatcherRef watcher) {
  std::unique_lock<std::mutex> lock(mMutex);
  auto res = mSubscriptions.find(watcher);
  if (res == mSubscriptions.end()) {
    try {
      this->subscribe(watcher);
      mSubscriptions.insert(watcher);
    } catch (std::exception&) {
      unref();
      throw;
    }
  }
}

void Backend::unwatch(WatcherRef watcher) {
  std::unique_lock<std::mutex> lock(mMutex);
  size_t deleted = mSubscriptions.erase(watcher);
  if (deleted > 0) {
    this->unsubscribe(watcher);
    unref();
  }
}

void Backend::unref() {
  if (mSubscriptions.size() == 0) {
    removeShared(this);
  }
}

void Backend::handleWatcherError(WatcherError &err) {
  unwatch(err.mWatcher);
  err.mWatcher->notifyError(err);
}

void Backend::handleError(std::exception &err) {
  std::unique_lock<std::mutex> lock(mMutex);
  for (auto it = mSubscriptions.begin(); it != mSubscriptions.end(); it++) {
    (*it)->notifyError(err);
  }

  removeShared(this);
}
