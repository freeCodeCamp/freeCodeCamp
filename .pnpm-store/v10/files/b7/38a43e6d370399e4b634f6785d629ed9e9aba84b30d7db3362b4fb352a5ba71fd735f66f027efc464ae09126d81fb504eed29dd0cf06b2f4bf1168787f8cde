#include <memory>
#include <poll.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>
#include "InotifyBackend.hh"

#define INOTIFY_MASK \
  IN_ATTRIB | IN_CREATE | IN_DELETE | \
  IN_DELETE_SELF | IN_MODIFY | IN_MOVE_SELF | IN_MOVED_FROM | \
  IN_MOVED_TO | IN_DONT_FOLLOW | IN_ONLYDIR | IN_EXCL_UNLINK
#define BUFFER_SIZE 8192
#define CONVERT_TIME(ts) ((uint64_t)ts.tv_sec * 1000000000 + ts.tv_nsec)

void InotifyBackend::start() {
  // Create a pipe that we will write to when we want to end the thread.
  int err = pipe2(mPipe, O_CLOEXEC | O_NONBLOCK);
  if (err == -1) {
    throw std::runtime_error(std::string("Unable to open pipe: ") + strerror(errno));
  }

  // Init inotify file descriptor.
  mInotify = inotify_init1(IN_NONBLOCK | IN_CLOEXEC);
  if (mInotify == -1) {
    throw std::runtime_error(std::string("Unable to initialize inotify: ") + strerror(errno));
  }

  pollfd pollfds[2];
  pollfds[0].fd = mPipe[0];
  pollfds[0].events = POLLIN;
  pollfds[0].revents = 0;
  pollfds[1].fd = mInotify;
  pollfds[1].events = POLLIN;
  pollfds[1].revents = 0;

  notifyStarted();

  // Loop until we get an event from the pipe.
  while (true) {
    int result = poll(pollfds, 2, 500);
    if (result < 0) {
      throw std::runtime_error(std::string("Unable to poll: ") + strerror(errno));
    }

    if (pollfds[0].revents) {
      break;
    }

    if (pollfds[1].revents) {
      handleEvents();
    }
  }

  close(mPipe[0]);
  close(mPipe[1]);
  close(mInotify);

  mEndedSignal.notify();
}

InotifyBackend::~InotifyBackend() {
  write(mPipe[1], "X", 1);
  mEndedSignal.wait();
}

// This function is called by Backend::watch which takes a lock on mMutex
void InotifyBackend::subscribe(WatcherRef watcher) {
  // Build a full directory tree recursively, and watch each directory.
  std::shared_ptr<DirTree> tree = getTree(watcher);

  for (auto it = tree->entries.begin(); it != tree->entries.end(); it++) {
    if (it->second.isDir) {
      bool success = watchDir(watcher, it->second.path, tree);
      if (!success) {
        throw WatcherError(std::string("inotify_add_watch on '") + it->second.path + std::string("' failed: ") + strerror(errno), watcher);
      }
    }
  }
}

bool InotifyBackend::watchDir(WatcherRef watcher, std::string path, std::shared_ptr<DirTree> tree) {
  int wd = inotify_add_watch(mInotify, path.c_str(), INOTIFY_MASK);
  if (wd == -1) {
    return false;
  }

  std::shared_ptr<InotifySubscription> sub = std::make_shared<InotifySubscription>();
  sub->tree = tree;
  sub->path = path;
  sub->watcher = watcher;
  mSubscriptions.emplace(wd, sub);

  return true;
}

void InotifyBackend::handleEvents() {
  char buf[BUFFER_SIZE] __attribute__ ((aligned(__alignof__(struct inotify_event))));;
  struct inotify_event *event;

  // Track all of the watchers that are touched so we can notify them at the end of the events.
  std::unordered_set<WatcherRef> watchers;

  while (true) {
    int n = read(mInotify, &buf, BUFFER_SIZE);
    if (n < 0) {
      if (errno == EAGAIN || errno == EWOULDBLOCK) {
        break;
      }

      throw std::runtime_error(std::string("Error reading from inotify: ") + strerror(errno));
    }

    if (n == 0) {
      break;
    }

    for (char *ptr = buf; ptr < buf + n; ptr += sizeof(*event) + event->len) {
      event = (struct inotify_event *)ptr;

      if ((event->mask & IN_Q_OVERFLOW) == IN_Q_OVERFLOW) {
        // overflow
        continue;
      }

      handleEvent(event, watchers);
    }
  }

  for (auto it = watchers.begin(); it != watchers.end(); it++) {
    (*it)->notify();
  }
}

void InotifyBackend::handleEvent(struct inotify_event *event, std::unordered_set<WatcherRef> &watchers) {
  std::unique_lock<std::mutex> lock(mMutex);

  // Find the subscriptions for this watch descriptor
  auto range = mSubscriptions.equal_range(event->wd);
  std::unordered_set<std::shared_ptr<InotifySubscription>> set;
  for (auto it = range.first; it != range.second; it++) {
    set.insert(it->second);
  }

  for (auto it = set.begin(); it != set.end(); it++) {
    if (handleSubscription(event, *it)) {
      watchers.insert((*it)->watcher);
    }
  }
}

bool InotifyBackend::handleSubscription(struct inotify_event *event, std::shared_ptr<InotifySubscription> sub) {
  // Build full path and check if its in our ignore list.
  std::shared_ptr<Watcher> watcher = sub->watcher;
  std::string path = std::string(sub->path);
  bool isDir = event->mask & IN_ISDIR;

  if (event->len > 0) {
    path += "/" + std::string(event->name);
  }

  if (watcher->isIgnored(path)) {
    return false;
  }

  // If this is a create, check if it's a directory and start watching if it is.
  // In any case, keep the directory tree up to date.
  if (event->mask & (IN_CREATE | IN_MOVED_TO)) {
    watcher->mEvents.create(path);

    struct stat st;
    // Use lstat to avoid resolving symbolic links that we cannot watch anyway
    // https://github.com/parcel-bundler/watcher/issues/76
    if (lstat(path.c_str(), &st) != 0) {
      return false;
    }
    DirEntry *entry = sub->tree->add(path, CONVERT_TIME(st.st_mtim), S_ISDIR(st.st_mode));

    if (entry->isDir) {
      bool success = watchDir(watcher, path, sub->tree);
      if (!success) {
        sub->tree->remove(path);
        return false;
      }
    }
  } else if (event->mask & (IN_MODIFY | IN_ATTRIB)) {
    watcher->mEvents.update(path);

    struct stat st;
    if (stat(path.c_str(), &st) != 0) {
      return false;
    }
    sub->tree->update(path, CONVERT_TIME(st.st_mtim));
  } else if (event->mask & (IN_DELETE | IN_DELETE_SELF | IN_MOVED_FROM | IN_MOVE_SELF)) {
    bool isSelfEvent = (event->mask & (IN_DELETE_SELF | IN_MOVE_SELF));
    // Ignore delete/move self events unless this is the recursive watch root
    if (isSelfEvent && path != watcher->mDir) {
      return false;
    }

    // If the entry being deleted/moved is a directory, remove it from the list of subscriptions
    // XXX: self events don't have the IN_ISDIR mask
    if (isSelfEvent || isDir) {
      for (auto it = mSubscriptions.begin(); it != mSubscriptions.end();) {
        if (it->second->path == path) {
          it = mSubscriptions.erase(it);
        } else {
          ++it;
        }
      }
    }

    watcher->mEvents.remove(path);
    sub->tree->remove(path);
  }

  return true;
}

// This function is called by Backend::unwatch which takes a lock on mMutex
void InotifyBackend::unsubscribe(WatcherRef watcher) {
  // Find any subscriptions pointing to this watcher, and remove them.
  for (auto it = mSubscriptions.begin(); it != mSubscriptions.end();) {
    if (it->second->watcher.get() == watcher.get()) {
      if (mSubscriptions.count(it->first) == 1) {
        int err = inotify_rm_watch(mInotify, it->first);
        if (err == -1) {
          throw WatcherError(std::string("Unable to remove watcher: ") + strerror(errno), watcher);
        }
      }

      it = mSubscriptions.erase(it);
    } else {
      it++;
    }
  }
}
