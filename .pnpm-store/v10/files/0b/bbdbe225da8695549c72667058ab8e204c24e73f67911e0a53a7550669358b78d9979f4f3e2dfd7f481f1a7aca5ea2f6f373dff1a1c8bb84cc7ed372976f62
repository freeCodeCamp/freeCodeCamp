#include "DirTree.hh"
#include <inttypes.h>

// "Meyer's singleton", construction is ordered by use, likewise (reverse) for destruction.
// https://stackoverflow.com/a/17713799
// https://laristra.github.io/flecsi/src/developer-guide/patterns/meyers_singleton.html
static std::mutex& mDirCacheMutex() {
   static std::mutex mutex;
   return mutex;
}

static std::unordered_map<std::string, std::weak_ptr<DirTree>>& dirTreeCache() {
   static std::unordered_map<std::string, std::weak_ptr<DirTree>> cache;
   return cache;
}

struct DirTreeDeleter {
  void operator()(DirTree *tree) {
    std::lock_guard<std::mutex> lock(mDirCacheMutex());
    std::unordered_map<std::string, std::weak_ptr<DirTree>> &cache = dirTreeCache();
    cache.erase(tree->root);
    delete tree;

    // Free up memory.
    if (cache.size() == 0) {
      cache.rehash(0);
    }
  }
};

std::shared_ptr<DirTree> DirTree::getCached(std::string root) {
  std::lock_guard<std::mutex> lock(mDirCacheMutex());
  std::unordered_map<std::string, std::weak_ptr<DirTree>> &cache = dirTreeCache();

  auto found = cache.find(root);
  std::shared_ptr<DirTree> tree;

  // Use cached tree, or create an empty one.
  if (found != cache.end()) {
    tree = found->second.lock();
  } else {
    tree = std::shared_ptr<DirTree>(new DirTree(root), DirTreeDeleter());
    cache.emplace(root, tree);
  }

  return tree;
}

DirTree::DirTree(std::string root, FILE *f) : root(root), isComplete(true) {
  size_t size;
  if (fscanf(f, "%zu", &size)) {
    for (size_t i = 0; i < size; i++) {
      DirEntry entry(f);
      entries.emplace(entry.path, entry);
    }
  }
}

// Internal find method that has no lock
DirEntry *DirTree::_find(std::string path) {
  auto found = entries.find(path);
  if (found == entries.end()) {
    return NULL;
  }

  return &found->second;
}

DirEntry *DirTree::add(std::string path, uint64_t mtime, bool isDir) {
  std::lock_guard<std::mutex> lock(mDirCacheMutex());

  DirEntry entry(path, mtime, isDir);
  auto it = entries.emplace(entry.path, entry);
  return &it.first->second;
}

DirEntry *DirTree::find(std::string path) {
  std::lock_guard<std::mutex> lock(mDirCacheMutex());
  return _find(path);
}

DirEntry *DirTree::update(std::string path, uint64_t mtime) {
  std::lock_guard<std::mutex> lock(mDirCacheMutex());

  DirEntry *found = _find(path);
  if (found) {
    found->mtime = mtime;
  }

  return found;
}

void DirTree::remove(std::string path) {
  std::lock_guard<std::mutex> lock(mDirCacheMutex());

  DirEntry *found = _find(path);

  // Remove all sub-entries if this is a directory
  if (found && found->isDir) {
    std::string pathStart = path + DIR_SEP;
    for (auto it = entries.begin(); it != entries.end();) {
      if (it->first.rfind(pathStart, 0) == 0) {
        it = entries.erase(it);
      } else {
        it++;
      }
    }
  }

  entries.erase(path);
}

void DirTree::write(FILE *f) {
  std::lock_guard<std::mutex> lock(mDirCacheMutex());

  fprintf(f, "%zu\n", entries.size());
  for (auto it = entries.begin(); it != entries.end(); it++) {
    it->second.write(f);
  }
}

void DirTree::getChanges(DirTree *snapshot, EventList &events) {
  std::lock_guard<std::mutex> lock(mDirCacheMutex());
  std::lock_guard<std::mutex> snapshotLock(snapshot->mMutex);

  for (auto it = entries.begin(); it != entries.end(); it++) {
    auto found = snapshot->entries.find(it->first);
    if (found == snapshot->entries.end()) {
      events.create(it->second.path);
    } else if (found->second.mtime != it->second.mtime && !found->second.isDir && !it->second.isDir) {
      events.update(it->second.path);
    }
  }

  for (auto it = snapshot->entries.begin(); it != snapshot->entries.end(); it++) {
    size_t count = entries.count(it->first);
    if (count == 0) {
      events.remove(it->second.path);
    }
  }
}

DirEntry::DirEntry(std::string p, uint64_t t, bool d) {
  path = p;
  mtime = t;
  isDir = d;
  state = NULL;
}

DirEntry::DirEntry(FILE *f) {
  size_t size;
  if (fscanf(f, "%zu", &size)) {
    path.resize(size);
    if (fread(&path[0], sizeof(char), size, f)) {
      int d = 0;
      fscanf(f, "%" PRIu64 " %d\n", &mtime, &d);
      isDir = d == 1;
    }
  }
}

void DirEntry::write(FILE *f) const {
  fprintf(f, "%zu%s%" PRIu64 " %d\n", path.size(), path.c_str(), mtime, isDir);
}
