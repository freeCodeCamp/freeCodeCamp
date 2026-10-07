#include <CoreServices/CoreServices.h>
#include <sys/stat.h>
#include <string>
#include <fstream>
#include <unordered_set>
#include "../Event.hh"
#include "../Backend.hh"
#include "./FSEventsBackend.hh"
#include "../Watcher.hh"

#define CONVERT_TIME(ts) ((uint64_t)ts.tv_sec * 1000000000 + ts.tv_nsec)
#define IGNORED_FLAGS (kFSEventStreamEventFlagItemIsHardlink | kFSEventStreamEventFlagItemIsLastHardlink | kFSEventStreamEventFlagItemIsSymlink | kFSEventStreamEventFlagItemIsDir | kFSEventStreamEventFlagItemIsFile)

void stopStream(FSEventStreamRef stream, CFRunLoopRef runLoop) {
  FSEventStreamStop(stream);
  FSEventStreamUnscheduleFromRunLoop(stream, runLoop, kCFRunLoopDefaultMode);
  FSEventStreamInvalidate(stream);
  FSEventStreamRelease(stream);
}

// macOS has a case insensitive file system by default. In order to detect
// file renames that only affect case, we need to get the canonical path
// and compare it with the input path to determine if a file was created or deleted.
bool pathExists(char *path) {
  int fd = open(path, O_RDONLY | O_SYMLINK);
  if (fd == -1) {
    return false;
  }

  char buf[PATH_MAX];
  if (fcntl(fd, F_GETPATH, buf) == -1) {
    close(fd);
    return false;
  }

  bool res = strncmp(path, buf, PATH_MAX) == 0;
  close(fd);
  return res;
}

class State: public WatcherState {
public:
  FSEventStreamRef stream;
  std::shared_ptr<DirTree> tree;
  uint64_t since;
};

void FSEventsCallback(
  ConstFSEventStreamRef streamRef,
  void *clientCallBackInfo,
  size_t numEvents,
  void *eventPaths,
  const FSEventStreamEventFlags eventFlags[],
  const FSEventStreamEventId eventIds[]
) {
  char **paths = (char **)eventPaths;
  std::shared_ptr<Watcher>& watcher = *static_cast<std::shared_ptr<Watcher> *>(clientCallBackInfo);

  EventList& list = watcher->mEvents;
  if (watcher->state == nullptr) {
      return;
  }

  auto stateGuard = watcher->state;
  auto* state = static_cast<State*>(stateGuard.get());
  uint64_t since = state->since;
  bool deletedRoot = false;

  for (size_t i = 0; i < numEvents; ++i) {
    bool isCreated = (eventFlags[i] & kFSEventStreamEventFlagItemCreated) == kFSEventStreamEventFlagItemCreated;
    bool isRemoved = (eventFlags[i] & kFSEventStreamEventFlagItemRemoved) == kFSEventStreamEventFlagItemRemoved;
    bool isModified = (eventFlags[i] & kFSEventStreamEventFlagItemModified) == kFSEventStreamEventFlagItemModified ||
                      (eventFlags[i] & kFSEventStreamEventFlagItemInodeMetaMod) == kFSEventStreamEventFlagItemInodeMetaMod ||
                      (eventFlags[i] & kFSEventStreamEventFlagItemFinderInfoMod) == kFSEventStreamEventFlagItemFinderInfoMod ||
                      (eventFlags[i] & kFSEventStreamEventFlagItemChangeOwner) == kFSEventStreamEventFlagItemChangeOwner ||
                      (eventFlags[i] & kFSEventStreamEventFlagItemXattrMod) == kFSEventStreamEventFlagItemXattrMod;
    bool isRenamed = (eventFlags[i] & kFSEventStreamEventFlagItemRenamed) == kFSEventStreamEventFlagItemRenamed;
    bool isDone = (eventFlags[i] & kFSEventStreamEventFlagHistoryDone) == kFSEventStreamEventFlagHistoryDone;
    bool isDir = (eventFlags[i] & kFSEventStreamEventFlagItemIsDir) == kFSEventStreamEventFlagItemIsDir;


    if (eventFlags[i] & kFSEventStreamEventFlagMustScanSubDirs) {
      if (eventFlags[i] & kFSEventStreamEventFlagUserDropped) {
        list.error("Events were dropped by the FSEvents client. File system must be re-scanned.");
      } else if (eventFlags[i] & kFSEventStreamEventFlagKernelDropped) {
        list.error("Events were dropped by the kernel. File system must be re-scanned.");
      } else {
        list.error("Too many events. File system must be re-scanned.");
      }
    }

    if (isDone) {
      watcher->notify();
      break;
    }

    auto ignoredFlags = IGNORED_FLAGS;
    if (__builtin_available(macOS 10.13, *)) {
      ignoredFlags |= kFSEventStreamEventFlagItemCloned;
    }

    // If we don't care about any of the flags that are set, ignore this event.
    if ((eventFlags[i] & ~ignoredFlags) == 0) {
      continue;
    }

    // FSEvents exclusion paths only apply to files, not directories.
    if (watcher->isIgnored(paths[i])) {
      continue;
    }

    // Handle unambiguous events first
    if (isCreated && !(isRemoved || isModified || isRenamed)) {
      state->tree->add(paths[i], 0, isDir);
      list.create(paths[i]);
    } else if (isRemoved && !(isCreated || isModified || isRenamed)) {
      state->tree->remove(paths[i]);
      list.remove(paths[i]);
      if (paths[i] == watcher->mDir) {
        deletedRoot = true;
      }
    } else if (isModified && !(isCreated || isRemoved || isRenamed)) {
      struct stat file;
      if (stat(paths[i], &file)) {
        continue;
      }

      // Ignore if mtime is the same as the last event.
      // This prevents duplicate events from being emitted.
      // If tv_nsec is zero, the file system probably only has second-level
      // granularity so allow the even through in that case.
      uint64_t mtime = CONVERT_TIME(file.st_mtimespec);
      DirEntry *entry = state->tree->find(paths[i]);
      if (entry && mtime == entry->mtime && file.st_mtimespec.tv_nsec != 0) {
        continue;
      }

      if (entry) {
        // Update mtime.
        entry->mtime = mtime;
      } else {
        // Add to tree if this path has not been discovered yet.
        state->tree->add(paths[i], mtime, S_ISDIR(file.st_mode));
      }

      list.update(paths[i]);
    } else {
      // If multiple flags were set, then we need to call `stat` to determine if the file really exists.
      // This helps disambiguate creates, updates, and deletes.
      struct stat file;
      if (stat(paths[i], &file) || !pathExists(paths[i])) {
        // File does not exist, so we have to assume it was removed. This is not exact since the
        // flags set by fsevents get coalesced together (e.g. created & deleted), so there is no way to
        // know whether the create and delete both happened since our snapshot (in which case
        // we'd rather ignore this event completely). This will result in some extra delete events
        // being emitted for files we don't know about, but that is the best we can do.
        state->tree->remove(paths[i]);
        list.remove(paths[i]);
        if (paths[i] == watcher->mDir) {
          deletedRoot = true;
        }
        continue;
      }

      // If the file was modified, and existed before, then this is an update, otherwise a create.
      uint64_t ctime = CONVERT_TIME(file.st_birthtimespec);
      uint64_t mtime = CONVERT_TIME(file.st_mtimespec);
      DirEntry *entry = !since ? state->tree->find(paths[i]) : NULL;
      if (entry && entry->mtime == mtime && file.st_mtimespec.tv_nsec != 0) {
        continue;
      }

      // Some mounted file systems report a creation time of 0/unix epoch which we special case.
      if (isModified && (entry || (ctime <= since && ctime != 0))) {
        state->tree->update(paths[i], mtime);
        list.update(paths[i]);
      } else {
        state->tree->add(paths[i], mtime, S_ISDIR(file.st_mode));
        list.create(paths[i]);
      }
    }
  }

  if (!since) {
    watcher->notify();
  }

  // Stop watching if the root directory was deleted.
  if (deletedRoot) {
    stopStream((FSEventStreamRef)streamRef, CFRunLoopGetCurrent());
    watcher->state = nullptr;
  }
}

void checkWatcher(WatcherRef watcher) {
  struct stat file;
  if (stat(watcher->mDir.c_str(), &file)) {
    throw WatcherError(strerror(errno), watcher);
  }

  if (!S_ISDIR(file.st_mode)) {
    throw WatcherError(strerror(ENOTDIR), watcher);
  }
}

void FSEventsBackend::startStream(WatcherRef watcher, FSEventStreamEventId id) {
  checkWatcher(watcher);

  CFAbsoluteTime latency = 0.001;
  CFStringRef fileWatchPath = CFStringCreateWithCString(
    NULL,
    watcher->mDir.c_str(),
    kCFStringEncodingUTF8
  );

  CFArrayRef pathsToWatch = CFArrayCreate(
    NULL,
    (const void **)&fileWatchPath,
    1,
    NULL
  );

  // Make a watcher reference we can pass into the callback. This ensures bumped ref-count.
  std::shared_ptr<Watcher>* callbackWatcher = new std::shared_ptr<Watcher> (watcher);
  FSEventStreamContext callbackInfo {0, static_cast<void*> (callbackWatcher), nullptr, nullptr, nullptr};
  FSEventStreamRef stream = FSEventStreamCreate(
    NULL,
    &FSEventsCallback,
    &callbackInfo,
    pathsToWatch,
    id,
    latency,
    kFSEventStreamCreateFlagFileEvents
  );

  CFMutableArrayRef exclusions = CFArrayCreateMutable(NULL, watcher->mIgnorePaths.size(), NULL);
  for (auto it = watcher->mIgnorePaths.begin(); it != watcher->mIgnorePaths.end(); it++) {
    CFStringRef path = CFStringCreateWithCString(
      NULL,
      it->c_str(),
      kCFStringEncodingUTF8
    );

    CFArrayAppendValue(exclusions, (const void *)path);
  }

  FSEventStreamSetExclusionPaths(stream, exclusions);

  FSEventStreamScheduleWithRunLoop(stream, mRunLoop, kCFRunLoopDefaultMode);
  bool started = FSEventStreamStart(stream);

  CFRelease(pathsToWatch);
  CFRelease(fileWatchPath);

  if (!started) {
    FSEventStreamRelease(stream);
    throw WatcherError("Error starting FSEvents stream", watcher);
  }

  auto stateGuard = watcher->state;
  State* s = static_cast<State*>(stateGuard.get());
  s->tree = std::make_shared<DirTree>(watcher->mDir);
  s->stream = stream;
}

void FSEventsBackend::start() {
  mRunLoop = CFRunLoopGetCurrent();
  CFRetain(mRunLoop);

  // Unlock once run loop has started.
  CFRunLoopPerformBlock(mRunLoop, kCFRunLoopDefaultMode, ^ {
    notifyStarted();
  });

  CFRunLoopWakeUp(mRunLoop);
  CFRunLoopRun();
}

FSEventsBackend::~FSEventsBackend() {
  std::unique_lock<std::mutex> lock(mMutex);
  CFRunLoopStop(mRunLoop);
  CFRelease(mRunLoop);
}

void FSEventsBackend::writeSnapshot(WatcherRef watcher, std::string *snapshotPath) {
  std::unique_lock<std::mutex> lock(mMutex);
  checkWatcher(watcher);

  FSEventStreamEventId id = FSEventsGetCurrentEventId();
  std::ofstream ofs(*snapshotPath);
  ofs << id;
  ofs << "\n";

  struct timespec now;
  clock_gettime(CLOCK_REALTIME, &now);
  ofs << CONVERT_TIME(now);
}

void FSEventsBackend::getEventsSince(WatcherRef watcher, std::string *snapshotPath) {
  std::unique_lock<std::mutex> lock(mMutex);
  std::ifstream ifs(*snapshotPath);
  if (ifs.fail()) {
    return;
  }

  FSEventStreamEventId id;
  uint64_t since;
  ifs >> id;
  ifs >> since;

  auto s = std::make_shared<State>();
  s->since = since;
  watcher->state = s;

  startStream(watcher, id);
  watcher->wait();
  stopStream(s->stream, mRunLoop);

  watcher->state = nullptr;
}

// This function is called by Backend::watch which takes a lock on mMutex
void FSEventsBackend::subscribe(WatcherRef watcher) {
  auto s = std::make_shared<State>();
  s->since = 0;
  watcher->state = s;
  startStream(watcher, kFSEventStreamEventIdSinceNow);
}

// This function is called by Backend::unwatch which takes a lock on mMutex
void FSEventsBackend::unsubscribe(WatcherRef watcher) {
  auto stateGuard = watcher->state;
  State* s = static_cast<State*>(stateGuard.get());
  if (s != nullptr) {
    stopStream(s->stream, mRunLoop);
    watcher->state = nullptr;
  }
}
