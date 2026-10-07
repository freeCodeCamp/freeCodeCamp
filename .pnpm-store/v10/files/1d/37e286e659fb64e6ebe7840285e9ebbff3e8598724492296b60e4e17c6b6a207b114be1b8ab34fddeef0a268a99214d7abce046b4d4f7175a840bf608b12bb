#include <sys/stat.h>
#include "WasmBackend.hh"

#define CONVERT_TIME(ts) ((uint64_t)ts.tv_sec * 1000000000 + ts.tv_nsec)

void WasmBackend::start() {
  notifyStarted();
}

void WasmBackend::subscribe(WatcherRef watcher) {
  // Build a full directory tree recursively, and watch each directory.
  std::shared_ptr<DirTree> tree = getTree(watcher);

  for (auto it = tree->entries.begin(); it != tree->entries.end(); it++) {
    if (it->second.isDir) {
      watchDir(watcher, it->second.path, tree);
    }
  }
}

void WasmBackend::watchDir(WatcherRef watcher, std::string path, std::shared_ptr<DirTree> tree) {
  int wd = wasm_backend_add_watch(path.c_str(), (void *)this);
  std::shared_ptr<WasmSubscription> sub = std::make_shared<WasmSubscription>();
  sub->tree = tree;
  sub->path = path;
  sub->watcher = watcher;
  mSubscriptions.emplace(wd, sub);
}

extern "C" void wasm_backend_event_handler(void *backend, int wd, int type, char *filename) {
  WasmBackend *b = (WasmBackend *)(backend);
  b->handleEvent(wd, type, filename);
}

void WasmBackend::handleEvent(int wd, int type, char *filename) {
  // Find the subscriptions for this watch descriptor
  auto range = mSubscriptions.equal_range(wd);
  std::unordered_set<std::shared_ptr<WasmSubscription>> set;
  for (auto it = range.first; it != range.second; it++) {
    set.insert(it->second);
  }

  for (auto it = set.begin(); it != set.end(); it++) {
    if (handleSubscription(type, filename, *it)) {
      (*it)->watcher->notify();
    }
  }
}

bool WasmBackend::handleSubscription(int type, char *filename, std::shared_ptr<WasmSubscription> sub) {
  // Build full path and check if its in our ignore list.
  WatcherRef watcher = sub->watcher;
  std::string path = std::string(sub->path);

  if (filename[0] != '\0') {
    path += "/" + std::string(filename);
  }

  if (watcher->isIgnored(path)) {
    return false;
  }

  if (type == 1) {
    struct stat st;
    stat(path.c_str(), &st);
    sub->tree->update(path, CONVERT_TIME(st.st_mtim));
    watcher->mEvents.update(path);
  } else if (type == 2) {
    // Determine if this is a create or delete depending on if the file exists or not.
    struct stat st;
    if (lstat(path.c_str(), &st)) {
      // If the entry being deleted/moved is a directory, remove it from the list of subscriptions
      DirEntry *entry = sub->tree->find(path);
      if (!entry) {
        return false;
      }

      if (entry->isDir) {
        std::string pathStart = path + DIR_SEP;
        for (auto it = mSubscriptions.begin(); it != mSubscriptions.end();) {
          if (it->second->path == path || it->second->path.rfind(pathStart, 0) == 0) {
            wasm_backend_remove_watch(it->first);
            it = mSubscriptions.erase(it);
          } else {
            ++it;
          }
        }

        // Remove all sub-entries
        for (auto it = sub->tree->entries.begin(); it != sub->tree->entries.end();) {
          if (it->first.rfind(pathStart, 0) == 0) {
            watcher->mEvents.remove(it->first);
            it = sub->tree->entries.erase(it);
          } else {
            it++;
          }
        }
      }

      watcher->mEvents.remove(path);
      sub->tree->remove(path);
    } else if (sub->tree->find(path)) {
      sub->tree->update(path, CONVERT_TIME(st.st_mtim));
      watcher->mEvents.update(path);
    } else {
      watcher->mEvents.create(path);

      // If this is a create, check if it's a directory and start watching if it is.
      DirEntry *entry = sub->tree->add(path, CONVERT_TIME(st.st_mtim), S_ISDIR(st.st_mode));
      if (entry->isDir) {
        watchDir(watcher, path, sub->tree);
      }
    }
  }

  return true;
}

void WasmBackend::unsubscribe(WatcherRef watcher) {
  // Find any subscriptions pointing to this watcher, and remove them.
  for (auto it = mSubscriptions.begin(); it != mSubscriptions.end();) {
    if (it->second->watcher.get() == watcher.get()) {
      if (mSubscriptions.count(it->first) == 1) {
        wasm_backend_remove_watch(it->first);
      }

      it = mSubscriptions.erase(it);
    } else {
      it++;
    }
  }
}
