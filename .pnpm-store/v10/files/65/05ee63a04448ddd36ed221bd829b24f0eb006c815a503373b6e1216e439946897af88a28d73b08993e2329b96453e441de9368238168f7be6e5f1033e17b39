#ifndef WATCHER_H
#define WATCHER_H

#include <condition_variable>
#include <unordered_set>
#include <set>
#include <node_api.h>
#include "Glob.hh"
#include "Event.hh"
#include "Debounce.hh"
#include "DirTree.hh"
#include "Signal.hh"

using namespace Napi;

struct Watcher;
using WatcherRef = std::shared_ptr<Watcher>;

struct Callback {
  Napi::ThreadSafeFunction tsfn;
  Napi::FunctionReference ref;
  std::thread::id threadId;
};

class WatcherState {
public:
    virtual ~WatcherState() = default;
};

struct Watcher {
  std::string mDir;
  std::unordered_set<std::string> mIgnorePaths;
  std::unordered_set<Glob> mIgnoreGlobs;
  EventList mEvents;
  std::shared_ptr<WatcherState> state;

  Watcher(std::string dir, std::unordered_set<std::string> ignorePaths, std::unordered_set<Glob> ignoreGlobs);
  ~Watcher();

  bool operator==(const Watcher &other) const {
    return mDir == other.mDir && mIgnorePaths == other.mIgnorePaths && mIgnoreGlobs == other.mIgnoreGlobs;
  }

  void wait();
  void notify();
  void notifyError(std::exception &err);
  bool watch(Function callback);
  bool unwatch(Function callback);
  void unref();
  bool isIgnored(std::string path);
  void destroy();

  static WatcherRef getShared(std::string dir, std::unordered_set<std::string> ignorePaths, std::unordered_set<Glob> ignoreGlobs);

private:
  std::mutex mMutex;
  std::condition_variable mCond;
  std::vector<Callback> mCallbacks;
  std::shared_ptr<Debounce> mDebounce;

  std::vector<Callback>::iterator findCallback(Function callback);
  void clearCallbacks();
  void triggerCallbacks();
};

class WatcherError : public std::runtime_error {
public:
  WatcherRef mWatcher;
  WatcherError(std::string msg, WatcherRef watcher) : std::runtime_error(msg), mWatcher(watcher) {}
  WatcherError(const char *msg, WatcherRef watcher) : std::runtime_error(msg), mWatcher(watcher) {}
};

#endif
