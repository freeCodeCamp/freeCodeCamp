#include <memory>
#include <poll.h>
#include <unistd.h>
#include <libgen.h>
#include <dirent.h>
#include <fcntl.h>
#include <sys/stat.h>
#include "KqueueBackend.hh"

#if __APPLE__
#define st_mtim st_mtimespec
#endif

#if !defined(O_EVTONLY)
#define O_EVTONLY O_RDONLY
#endif

#define CONVERT_TIME(ts) ((uint64_t)ts.tv_sec * 1000000000 + ts.tv_nsec)

void KqueueBackend::start() {
  if ((mKqueue = kqueue()) < 0) {
    throw std::runtime_error(std::string("Unable to open kqueue: ") + strerror(errno));
  }

  // Create a pipe that we will write to when we want to end the thread.
  int err = pipe(mPipe);
  if (err == -1) {
    throw std::runtime_error(std::string("Unable to open pipe: ") + strerror(errno));
  }

  // Subscribe kqueue to this pipe.
  struct kevent ev;
  EV_SET(
    &ev,
    mPipe[0],
    EVFILT_READ,
    EV_ADD | EV_CLEAR,
    0,
    0,
    0
  );

  if (kevent(mKqueue, &ev, 1, NULL, 0, 0)) {
    close(mPipe[0]);
    close(mPipe[1]);
    throw std::runtime_error(std::string("Unable to watch pipe: ") + strerror(errno));
  }

  notifyStarted();

  struct kevent events[128];

  while (true) {
    int event_count = kevent(mKqueue, NULL, 0, events, 128, 0);
    if (event_count < 0 || events[0].flags == EV_ERROR) {
      throw std::runtime_error(std::string("kevent error: ") + strerror(errno));
    }

    // Track all of the watchers that are touched so we can notify them at the end of the events.
    std::unordered_set<WatcherRef> watchers;

    for (int i = 0; i < event_count; i++) {
      int flags = events[i].fflags;
      int fd = events[i].ident;
      if (fd == mPipe[0]) {
        // pipe was written to. break out of the loop.
        goto done;
      }

      auto it = mFdToEntry.find(fd);
      if (it == mFdToEntry.end()) {
        // If fd wasn't in our map, we may have already stopped watching it. Ignore the event.
        continue;
      }

      DirEntry *entry = it->second;

      if (flags & NOTE_WRITE && entry && entry->isDir) {
        // If a write occurred on a directory, we have to diff the contents of that
        // directory to determine what file was added/deleted.
        compareDir(fd, entry->path, watchers);
      } else {
        std::vector<KqueueSubscription *> subs = findSubscriptions(entry->path);
        for (auto it = subs.begin(); it != subs.end(); it++) {
          KqueueSubscription *sub = *it;
          watchers.insert(sub->watcher);
          if (flags & (NOTE_DELETE | NOTE_RENAME | NOTE_REVOKE)) {
            sub->watcher->mEvents.remove(sub->path);
            sub->tree->remove(sub->path);
            mFdToEntry.erase((int)(size_t)entry->state);
            mSubscriptions.erase(sub->path);
          } else if (flags & (NOTE_WRITE | NOTE_ATTRIB | NOTE_EXTEND)) {
            struct stat st;
            lstat(sub->path.c_str(), &st);
            if (entry->mtime != CONVERT_TIME(st.st_mtim)) {
              entry->mtime = CONVERT_TIME(st.st_mtim);
              sub->watcher->mEvents.update(sub->path);
            }
          }
        }
      }
    }

    for (auto it = watchers.begin(); it != watchers.end(); it++) {
      (*it)->notify();
    }
  }

done:
  close(mPipe[0]);
  close(mPipe[1]);
  mEndedSignal.notify();
}

KqueueBackend::~KqueueBackend() {
  write(mPipe[1], "X", 1);
  mEndedSignal.wait();
}

void KqueueBackend::subscribe(WatcherRef watcher) {
  // Build a full directory tree recursively, and watch each directory.
  std::shared_ptr<DirTree> tree = getTree(watcher);

  for (auto it = tree->entries.begin(); it != tree->entries.end(); it++) {
    bool success = watchDir(watcher, it->second.path, tree);
    if (!success) {
      throw WatcherError(std::string("error watching " + watcher->mDir + ": " + strerror(errno)), watcher);
    }
  }
}

bool KqueueBackend::watchDir(WatcherRef watcher, std::string path, std::shared_ptr<DirTree> tree) {
  if (watcher->isIgnored(path)) {
    return false;
  }

  DirEntry *entry = tree->find(path);
  if (!entry) {
    return false;
  }

  KqueueSubscription sub = {
    .watcher = watcher,
    .path = path,
    .tree = tree
  };

  if (!entry->state) {
    int fd = open(path.c_str(), O_EVTONLY);
    if (fd <= 0) {
      return false;
    }

    struct kevent event;
    EV_SET(
      &event,
      fd,
      EVFILT_VNODE,
      EV_ADD | EV_CLEAR | EV_ENABLE,
      NOTE_DELETE | NOTE_WRITE | NOTE_EXTEND | NOTE_ATTRIB | NOTE_RENAME | NOTE_REVOKE,
      0,
      0
    );

    if (kevent(mKqueue, &event, 1, NULL, 0, 0)) {
      close(fd);
      return false;
    }

    entry->state = (void *)(size_t)fd;
    mFdToEntry.emplace(fd, entry);
  }

  sub.fd = (int)(size_t)entry->state;
  mSubscriptions.emplace(path, sub);
  return true;
}

std::vector<KqueueSubscription *> KqueueBackend::findSubscriptions(std::string &path) {
  // Find the subscriptions affected by this path.
  // Copy pointers to them into a vector so that modifying mSubscriptions doesn't invalidate the iterator.
  auto range = mSubscriptions.equal_range(path);
  std::vector<KqueueSubscription *> subs;
  for (auto it = range.first; it != range.second; it++) {
    subs.push_back(&it->second);
  }

  return subs;
}

bool KqueueBackend::compareDir(int fd, std::string &path, std::unordered_set<WatcherRef> &watchers) {
  // macOS doesn't support fdclosedir, so we have to duplicate the file descriptor
  // to ensure the closedir doesn't also stop watching.
  #if __APPLE__
    fd = dup(fd);
  #endif

  DIR *dir = fdopendir(fd);
  if (dir == NULL) {
    return false;
  }

  // fdopendir doesn't rewind to the beginning.
  rewinddir(dir);

  std::vector<KqueueSubscription *> subs = findSubscriptions(path);
  std::string dirStart = path + DIR_SEP;

  std::unordered_set<std::shared_ptr<DirTree>> trees;
  for (auto it = subs.begin(); it != subs.end(); it++) {
    trees.emplace((*it)->tree);
  }

  std::unordered_set<std::string> entries;
  struct dirent *entry;
  while ((entry = readdir(dir))) {
    if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) {
      continue;
    }

    std::string fullpath = dirStart + entry->d_name;
    entries.emplace(fullpath);

    for (auto it = trees.begin(); it != trees.end(); it++) {
      std::shared_ptr<DirTree> tree = *it;
      if (!tree->find(fullpath)) {
        struct stat st;
        fstatat(fd, entry->d_name, &st, AT_SYMLINK_NOFOLLOW);
        tree->add(fullpath, CONVERT_TIME(st.st_mtim), S_ISDIR(st.st_mode));

        // Notify all watchers with the same tree.
        for (auto i = subs.begin(); i != subs.end(); i++) {
          KqueueSubscription *sub = *i;
          if (sub->tree == tree) {
            if (sub->watcher->isIgnored(fullpath)) {
              continue;
            }

            sub->watcher->mEvents.create(fullpath);
            watchers.emplace(sub->watcher);

            bool success = watchDir(sub->watcher, fullpath, sub->tree);
            if (!success) {
              sub->tree->remove(fullpath);
              return false;
            }
          }
        }
      }
    }
  }

  for (auto it = trees.begin(); it != trees.end(); it++) {
    std::shared_ptr<DirTree> tree = *it;
    for (auto entry = tree->entries.begin(); entry != tree->entries.end();) {

      if (
        entry->first.rfind(dirStart, 0) == 0 &&
        entry->first.find(DIR_SEP, dirStart.length()) == std::string::npos &&
        entries.count(entry->first) == 0
      ) {
        // Notify all watchers with the same tree.
        for (auto i = subs.begin(); i != subs.end(); i++) {
          if ((*i)->tree == tree) {
            KqueueSubscription *sub = *i;
            if (!sub->watcher->isIgnored(entry->first)) {
              sub->watcher->mEvents.remove(entry->first);
              watchers.emplace(sub->watcher);
            }
          }
        }

        mFdToEntry.erase((int)(size_t)entry->second.state);
        mSubscriptions.erase(entry->first);
        entry = tree->entries.erase(entry);
      } else {
        entry++;
      }
    }
  }

  #if __APPLE__
    closedir(dir);
  #else
    fdclosedir(dir);
  #endif

  return true;
}

void KqueueBackend::unsubscribe(WatcherRef watcher) {
  // Find any subscriptions pointing to this watcher, and remove them.
  for (auto it = mSubscriptions.begin(); it != mSubscriptions.end();) {
    if (it->second.watcher.get() == watcher.get()) {
      if (mSubscriptions.count(it->first) == 1) {
        // Closing the file descriptor automatically unwatches it in the kqueue.
        close(it->second.fd);
        mFdToEntry.erase(it->second.fd);
      }

      it = mSubscriptions.erase(it);
    } else {
      it++;
    }
  }
}
