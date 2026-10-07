#ifndef BACKEND_H
#define BACKEND_H

#include "Event.hh"
#include "Watcher.hh"
#include "Signal.hh"
#include <thread>

class Backend {
public:
  virtual ~Backend();
  void run();
  void notifyStarted();

  virtual void start();
  virtual void writeSnapshot(WatcherRef watcher, std::string *snapshotPath) = 0;
  virtual void getEventsSince(WatcherRef watcher, std::string *snapshotPath) = 0;
  virtual void subscribe(WatcherRef watcher) = 0;
  virtual void unsubscribe(WatcherRef watcher) = 0;

  static std::shared_ptr<Backend> getShared(std::string backend);

  void watch(WatcherRef watcher);
  void unwatch(WatcherRef watcher);
  void unref();
  void handleWatcherError(WatcherError &err);

  std::mutex mMutex;
  std::thread mThread;
private:
  std::unordered_set<WatcherRef> mSubscriptions;
  Signal mStartedSignal;

  void handleError(std::exception &err);
};

#endif
