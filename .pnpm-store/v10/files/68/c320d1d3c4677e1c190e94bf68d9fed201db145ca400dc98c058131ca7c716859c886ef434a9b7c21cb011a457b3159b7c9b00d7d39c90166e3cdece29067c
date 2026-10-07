#ifndef INOTIFY_H
#define INOTIFY_H

#include <unordered_map>
#include <sys/inotify.h>
#include "../shared/BruteForceBackend.hh"
#include "../DirTree.hh"
#include "../Signal.hh"

struct InotifySubscription {
  std::shared_ptr<DirTree> tree;
  std::string path;
  WatcherRef watcher;
};

class InotifyBackend : public BruteForceBackend {
public:
  void start() override;
  ~InotifyBackend();
  void subscribe(WatcherRef watcher) override;
  void unsubscribe(WatcherRef watcher) override;
private:
  int mPipe[2];
  int mInotify;
  std::unordered_multimap<int, std::shared_ptr<InotifySubscription>> mSubscriptions;
  Signal mEndedSignal;

  bool watchDir(WatcherRef watcher, std::string path, std::shared_ptr<DirTree> tree);
  void handleEvents();
  void handleEvent(struct inotify_event *event, std::unordered_set<WatcherRef> &watchers);
  bool handleSubscription(struct inotify_event *event, std::shared_ptr<InotifySubscription> sub);
};

#endif
