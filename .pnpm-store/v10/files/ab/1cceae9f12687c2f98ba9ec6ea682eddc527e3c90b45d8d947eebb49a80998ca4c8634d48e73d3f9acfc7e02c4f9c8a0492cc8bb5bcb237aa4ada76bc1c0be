#ifndef BRUTE_FORCE_H
#define BRUTE_FORCE_H

#include "../Backend.hh"
#include "../DirTree.hh"
#include "../Watcher.hh"

class BruteForceBackend : public Backend {
public:
  void writeSnapshot(WatcherRef watcher, std::string *snapshotPath) override;
  void getEventsSince(WatcherRef watcher, std::string *snapshotPath) override;
  void subscribe(WatcherRef watcher) override {
    throw "Brute force backend doesn't support subscriptions.";
  }

  void unsubscribe(WatcherRef watcher) override {
    throw "Brute force backend doesn't support subscriptions.";
  }

  std::shared_ptr<DirTree> getTree(WatcherRef watcher, bool shouldRead = true);
private:
  void readTree(WatcherRef watcher, std::shared_ptr<DirTree> tree);
};

#endif
