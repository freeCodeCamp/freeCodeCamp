#ifndef WATCHMAN_H
#define WATCHMAN_H

#include "../Backend.hh"
#include "./BSER.hh"
#include "../Signal.hh"
#include "./IPC.hh"

class WatchmanBackend : public Backend {
public:
  static bool checkAvailable();
  void start() override;
  WatchmanBackend() : mStopped(false) {};
  ~WatchmanBackend();
  void writeSnapshot(WatcherRef watcher, std::string *snapshotPath) override;
  void getEventsSince(WatcherRef watcher, std::string *snapshotPath) override;
  void subscribe(WatcherRef watcher) override;
  void unsubscribe(WatcherRef watcher) override;
private:
  std::unique_ptr<IPC> mIPC;
  Signal mRequestSignal;
  Signal mResponseSignal;
  BSER::Object mResponse;
  std::string mError;
  std::unordered_map<std::string, WatcherRef> mSubscriptions;
  bool mStopped;
  Signal mEndedSignal;

  std::string clock(WatcherRef watcher);
  void watchmanWatch(std::string dir);
  BSER::Object watchmanRequest(BSER cmd);
  void handleSubscription(BSER::Object obj);
};

#endif
