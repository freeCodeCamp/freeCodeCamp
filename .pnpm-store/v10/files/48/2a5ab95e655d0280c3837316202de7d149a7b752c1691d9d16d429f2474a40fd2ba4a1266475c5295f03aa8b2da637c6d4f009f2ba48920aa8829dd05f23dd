#ifndef KQUEUE_H
#define KQUEUE_H

#include <unordered_map>
#include <sys/event.h>
#include "../shared/BruteForceBackend.hh"
#include "../DirTree.hh"
#include "../Signal.hh"

struct KqueueSubscription {
  WatcherRef watcher;
  std::string path;
  std::shared_ptr<DirTree> tree;
  int fd;
};

class KqueueBackend : public BruteForceBackend {
public:
  void start() override;
  ~KqueueBackend();
  void subscribe(WatcherRef watcher) override;
  void unsubscribe(WatcherRef watcher) override;
private:
  int mKqueue;
  int mPipe[2];
  std::unordered_multimap<std::string, KqueueSubscription> mSubscriptions;
  std::unordered_map<int, DirEntry *> mFdToEntry;
  Signal mEndedSignal;

  bool watchDir(WatcherRef watcher, std::string path, std::shared_ptr<DirTree> tree);
  bool compareDir(int fd, std::string &dir, std::unordered_set<WatcherRef> &watchers);
  std::vector<KqueueSubscription *> findSubscriptions(std::string &path);
};

#endif
