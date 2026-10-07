#include <string>
#include <fstream>
#include <stdlib.h>
#include <algorithm>
#include "../DirTree.hh"
#include "../Event.hh"
#include "./BSER.hh"
#include "./WatchmanBackend.hh"

#ifdef _WIN32
#include "../windows/win_utils.hh"
#define S_ISDIR(mode) ((mode & _S_IFDIR) == _S_IFDIR)
#define popen _popen
#define pclose _pclose
#else
#include <sys/stat.h>
#define normalizePath(dir) dir
#endif

template<typename T>
BSER readBSER(T &&do_read) {
  std::stringstream oss;
  char buffer[256];
  size_t r;
  int64_t len = -1;
  do {
    // Start by reading a minimal amount of data in order to decode the length.
    // After that, attempt to read the remaining length, up to the buffer size.
    r = do_read(buffer, len == -1 ? 20 : (len < 256 ? len : 256));
    oss << std::string(buffer, r);

    if (len == -1) {
      uint64_t l = BSER::decodeLength(oss);
      len = l + oss.tellg();
    }

    len -= r;
  } while (len > 0);

  return BSER(oss);
}

std::string getSockPath() {
  auto var = getenv("WATCHMAN_SOCK");
  if (var && *var) {
    return std::string(var);
  }

#ifdef _WIN32
  FILE *fp = popen("watchman --output-encoding=bser get-sockname", "r");
#else
  FILE *fp = popen("watchman --output-encoding=bser get-sockname 2>/dev/null", "r");
#endif
  if (fp == NULL || errno == ECHILD) {
    throw std::runtime_error("Failed to execute watchman");
  }

  BSER b = readBSER([fp] (char *buf, size_t len) {
    return fread(buf, sizeof(char), len, fp);
  });

  pclose(fp);

  auto objValue = b.objectValue();
  auto foundSockname = objValue.find("sockname");
  if (foundSockname == objValue.end()) {
    throw std::runtime_error("sockname not found");
  }
  return foundSockname->second.stringValue();
}

std::unique_ptr<IPC> watchmanConnect() {
  std::string path = getSockPath();
  return std::unique_ptr<IPC>(new IPC(path));
}

BSER watchmanRead(IPC *ipc) {
  return readBSER([ipc] (char *buf, size_t len) {
    return ipc->read(buf, len);
  });
}

BSER::Object WatchmanBackend::watchmanRequest(BSER b) {
  std::string cmd = b.encode();
  mIPC->write(cmd);
  mRequestSignal.notify();

  mResponseSignal.wait();
  mResponseSignal.reset();

  if (!mError.empty()) {
    std::runtime_error err = std::runtime_error(mError);
    mError = std::string();
    throw err;
  }

  return mResponse;
}

void WatchmanBackend::watchmanWatch(std::string dir) {
  std::vector<BSER> cmd;
  cmd.push_back("watch");
  cmd.push_back(normalizePath(dir));
  watchmanRequest(cmd);
}

bool WatchmanBackend::checkAvailable() {
  try {
    watchmanConnect();
    return true;
  } catch (std::exception&) {
    return false;
  }
}

void handleFiles(WatcherRef watcher, BSER::Object obj) {
  auto found = obj.find("files");
  if (found == obj.end()) {
    throw WatcherError("Error reading changes from watchman", watcher);
  }

  auto files = found->second.arrayValue();
  for (auto it = files.begin(); it != files.end(); it++) {
    auto file = it->objectValue();
    auto name = file.find("name")->second.stringValue();
    #ifdef _WIN32
      std::replace(name.begin(), name.end(), '/', '\\');
    #endif
    auto mode = file.find("mode")->second.intValue();
    auto isNew = file.find("new")->second.boolValue();
    auto exists = file.find("exists")->second.boolValue();
    auto path = watcher->mDir + DIR_SEP + name;
    if (watcher->isIgnored(path)) {
      continue;
    }

    if (isNew && exists) {
      watcher->mEvents.create(path);
    } else if (exists && !S_ISDIR(mode)) {
      watcher->mEvents.update(path);
    } else if (!isNew && !exists) {
      watcher->mEvents.remove(path);
    }
  }
}

void WatchmanBackend::handleSubscription(BSER::Object obj) {
  std::unique_lock<std::mutex> lock(mMutex);
  auto subscription = obj.find("subscription")->second.stringValue();
  auto it = mSubscriptions.find(subscription);
  if (it == mSubscriptions.end()) {
    return;
  }

  auto watcher = it->second;
  try {
    handleFiles(watcher, obj);
    watcher->notify();
  } catch (WatcherError &err) {
    handleWatcherError(err);
  }
}

void WatchmanBackend::start() {
  mIPC = watchmanConnect();
  notifyStarted();

  while (true) {
    // If there are no subscriptions we are reading, wait for a request.
    if (mSubscriptions.size() == 0) {
      mRequestSignal.wait();
      mRequestSignal.reset();
    }

    // Break out of loop if we are stopped.
    if (mStopped) {
      break;
    }

    // Attempt to read from the socket.
    // If there is an error and we are stopped, break.
    BSER b;
    try {
      b = watchmanRead(&*mIPC);
    } catch (std::exception &err) {
      if (mStopped) {
        break;
      } else if (mResponseSignal.isWaiting()) {
        mError = err.what();
        mResponseSignal.notify();
      } else {
        // Throwing causes the backend to be destroyed, but we never reach the code below to notify the signal
        mEndedSignal.notify();
        throw;
      }
    }

    auto obj = b.objectValue();
    auto error = obj.find("error");
    if (error != obj.end()) {
      mError = error->second.stringValue();
      mResponseSignal.notify();
      continue;
    }

    // If this message is for a subscription, handle it, otherwise notify the request.
    auto subscription = obj.find("subscription");
    if (subscription != obj.end()) {
      handleSubscription(obj);
    } else {
      mResponse = obj;
      mResponseSignal.notify();
    }
  }

  mEndedSignal.notify();
}

WatchmanBackend::~WatchmanBackend() {
  // Mark the watcher as stopped, close the socket, and trigger the lock.
  // This will cause the read loop to be broken and the thread to exit.
  mStopped = true;
  mIPC.reset();
  mRequestSignal.notify();

  // If not ended yet, wait.
  mEndedSignal.wait();
}

std::string WatchmanBackend::clock(WatcherRef watcher) {
  BSER::Array cmd;
  cmd.push_back("clock");
  cmd.push_back(normalizePath(watcher->mDir));

  BSER::Object obj = watchmanRequest(cmd);
  auto found = obj.find("clock");
  if (found == obj.end()) {
    throw WatcherError("Error reading clock from watchman", watcher);
  }

  return found->second.stringValue();
}

void WatchmanBackend::writeSnapshot(WatcherRef watcher, std::string *snapshotPath) {
  std::unique_lock<std::mutex> lock(mMutex);
  watchmanWatch(watcher->mDir);

  std::ofstream ofs(*snapshotPath);
  ofs << clock(watcher);
}

void WatchmanBackend::getEventsSince(WatcherRef watcher, std::string *snapshotPath) {
  std::unique_lock<std::mutex> lock(mMutex);
  std::ifstream ifs(*snapshotPath);
  if (ifs.fail()) {
    return;
  }

  watchmanWatch(watcher->mDir);

  std::string clock;
  ifs >> clock;

  BSER::Array cmd;
  cmd.push_back("since");
  cmd.push_back(normalizePath(watcher->mDir));
  cmd.push_back(clock);

  BSER::Object obj = watchmanRequest(cmd);
  handleFiles(watcher, obj);
}

std::string getId(WatcherRef watcher) {
  std::ostringstream id;
  id << "parcel-";
  id << static_cast<void*>(watcher.get());
  return id.str();
}

// This function is called by Backend::watch which takes a lock on mMutex
void WatchmanBackend::subscribe(WatcherRef watcher) {
  watchmanWatch(watcher->mDir);

  std::string id = getId(watcher);
  BSER::Array cmd;
  cmd.push_back("subscribe");
  cmd.push_back(normalizePath(watcher->mDir));
  cmd.push_back(id);

  BSER::Array fields;
  fields.push_back("name");
  fields.push_back("mode");
  fields.push_back("exists");
  fields.push_back("new");

  BSER::Object opts;
  opts.emplace("fields", fields);
  opts.emplace("since", clock(watcher));

  if (watcher->mIgnorePaths.size() > 0) {
    BSER::Array ignore;
    BSER::Array anyOf;
    anyOf.push_back("anyof");

    for (auto it = watcher->mIgnorePaths.begin(); it != watcher->mIgnorePaths.end(); it++) {
      std::string pathStart = watcher->mDir + DIR_SEP;
      if (it->rfind(pathStart, 0) == 0) {
        auto relative = it->substr(pathStart.size());
        BSER::Array dirname;
        dirname.push_back("dirname");
        dirname.push_back(relative);
        anyOf.push_back(dirname);
      }
    }

    ignore.push_back("not");
    ignore.push_back(anyOf);

    opts.emplace("expression", ignore);
  }

  cmd.push_back(opts);
  watchmanRequest(cmd);

  mSubscriptions.emplace(id, watcher);
  mRequestSignal.notify();
}

// This function is called by Backend::unwatch which takes a lock on mMutex
void WatchmanBackend::unsubscribe(WatcherRef watcher) {
  std::string id = getId(watcher);
  auto erased = mSubscriptions.erase(id);

  if (erased) {
    BSER::Array cmd;
    cmd.push_back("unsubscribe");
    cmd.push_back(normalizePath(watcher->mDir));
    cmd.push_back(id);

    watchmanRequest(cmd);
  }
}
