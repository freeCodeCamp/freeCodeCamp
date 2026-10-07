#include <string>
#include "../DirTree.hh"
#include "../Event.hh"
#include "./BruteForceBackend.hh"

std::shared_ptr<DirTree> BruteForceBackend::getTree(WatcherRef watcher, bool shouldRead) {
  auto tree = DirTree::getCached(watcher->mDir);

  // If the tree is not complete, read it if needed.
  if (!tree->isComplete && shouldRead) {
    readTree(watcher, tree);
    tree->isComplete = true;
  }

  return tree;
}

void BruteForceBackend::writeSnapshot(WatcherRef watcher, std::string *snapshotPath) {
  std::unique_lock<std::mutex> lock(mMutex);
  auto tree = getTree(watcher);
  FILE *f = fopen(snapshotPath->c_str(), "w");
  if (!f) {
    throw std::runtime_error(std::string("Unable to open snapshot file: ") + strerror(errno));
  }

  tree->write(f);
  fclose(f);
}

void BruteForceBackend::getEventsSince(WatcherRef watcher, std::string *snapshotPath) {
  std::unique_lock<std::mutex> lock(mMutex);
  FILE *f = fopen(snapshotPath->c_str(), "r");
  if (!f) {
    throw std::runtime_error(std::string("Unable to open snapshot file: ") + strerror(errno));
  }

  DirTree snapshot{watcher->mDir, f};
  auto now = getTree(watcher);
  now->getChanges(&snapshot, watcher->mEvents);
  fclose(f);
}
