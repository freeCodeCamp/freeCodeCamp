#include <string>
#include <stack>
#include "../DirTree.hh"
#include "../shared/BruteForceBackend.hh"
#include "./WindowsBackend.hh"
#include "./win_utils.hh"

#define DEFAULT_BUF_SIZE 1024 * 1024
#define NETWORK_BUF_SIZE 64 * 1024
#define CONVERT_TIME(ft) ULARGE_INTEGER{ft.dwLowDateTime, ft.dwHighDateTime}.QuadPart

void BruteForceBackend::readTree(WatcherRef watcher, std::shared_ptr<DirTree> tree) {
  std::stack<std::string> directories;

  directories.push(watcher->mDir);

  while (!directories.empty()) {
    HANDLE hFind = INVALID_HANDLE_VALUE;

    std::string path = directories.top();
    std::string spec = path + "\\*";
    directories.pop();

    WIN32_FIND_DATA ffd;
    hFind = FindFirstFile(spec.c_str(), &ffd);

    if (hFind == INVALID_HANDLE_VALUE)  {
      if (path == watcher->mDir) {
        FindClose(hFind);
        throw WatcherError("Error opening directory", watcher);
      }

      tree->remove(path);
      continue;
    }

    do {
      if (strcmp(ffd.cFileName, ".") != 0 && strcmp(ffd.cFileName, "..") != 0) {
        std::string fullPath = path + "\\" + ffd.cFileName;
        if (watcher->isIgnored(fullPath)) {
          continue;
        }

        tree->add(fullPath, CONVERT_TIME(ffd.ftLastWriteTime), ffd.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY);
        if (ffd.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY) {
          directories.push(fullPath);
        }
      }
    } while (FindNextFile(hFind, &ffd) != 0);

    FindClose(hFind);
  }
}

void WindowsBackend::start() {
  mRunning = true;
  notifyStarted();

  while (mRunning) {
    SleepEx(INFINITE, true);
  }
}

WindowsBackend::~WindowsBackend() {
  // Mark as stopped, and queue a noop function in the thread to break the loop
  mRunning = false;
  QueueUserAPC([](__in ULONG_PTR) {}, mThread.native_handle(), (ULONG_PTR)this);
}

class Subscription: public WatcherState {
public:
  Subscription(WindowsBackend *backend, WatcherRef watcher, std::shared_ptr<DirTree> tree) {
    mRunning = true;
    mBackend = backend;
    mWatcher = watcher;
    mTree = tree;
    ZeroMemory(&mOverlapped, sizeof(OVERLAPPED));
    mOverlapped.hEvent = this;
    mReadBuffer.resize(DEFAULT_BUF_SIZE);
    mWriteBuffer.resize(DEFAULT_BUF_SIZE);

    mDirectoryHandle = CreateFileW(
      utf8ToUtf16(watcher->mDir).data(),
      FILE_LIST_DIRECTORY,
      FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE,
      NULL,
      OPEN_EXISTING,
      FILE_FLAG_BACKUP_SEMANTICS | FILE_FLAG_OVERLAPPED,
      NULL
    );

    if (mDirectoryHandle == INVALID_HANDLE_VALUE) {
      throw WatcherError("Invalid handle", mWatcher);
    }

    // Ensure that the path is a directory
    BY_HANDLE_FILE_INFORMATION info;
    bool success = GetFileInformationByHandle(
      mDirectoryHandle,
      &info
    );

    if (!success) {
      throw WatcherError("Could not get file information", mWatcher);
    }

    if (!(info.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY)) {
      throw WatcherError("Not a directory", mWatcher);
    }
  }

  virtual ~Subscription() {
    stop();
  }

  void run() {
    try {
      poll();
    } catch (WatcherError &err) {
      mBackend->handleWatcherError(err);
    }
  }

  void stop() {
    if (mRunning) {
      mRunning = false;
      CancelIo(mDirectoryHandle);
      CloseHandle(mDirectoryHandle);
    }
  }

  void poll() {
    if (!mRunning) {
      return;
    }

    // Asynchronously wait for changes.
    int success = ReadDirectoryChangesW(
      mDirectoryHandle,
      mWriteBuffer.data(),
      static_cast<DWORD>(mWriteBuffer.size()),
      TRUE, // recursive
      FILE_NOTIFY_CHANGE_FILE_NAME | FILE_NOTIFY_CHANGE_DIR_NAME | FILE_NOTIFY_CHANGE_ATTRIBUTES
        | FILE_NOTIFY_CHANGE_SIZE | FILE_NOTIFY_CHANGE_LAST_WRITE,
      NULL,
      &mOverlapped,
      [](DWORD errorCode, DWORD numBytes, LPOVERLAPPED overlapped) {
        auto subscription = reinterpret_cast<Subscription *>(overlapped->hEvent);
        try {
          subscription->processEvents(errorCode);
        } catch (WatcherError &err) {
          subscription->mBackend->handleWatcherError(err);
        }
      }
    );

    if (!success) {
      throw WatcherError("Failed to read changes", mWatcher);
    }
  }

  void processEvents(DWORD errorCode) {
    if (!mRunning) {
      return;
    }

    switch (errorCode) {
      case ERROR_OPERATION_ABORTED:
        return;
      case ERROR_INVALID_PARAMETER:
        // resize buffers to network size (64kb), and try again
        mReadBuffer.resize(NETWORK_BUF_SIZE);
        mWriteBuffer.resize(NETWORK_BUF_SIZE);
        poll();
        return;
      case ERROR_NOTIFY_ENUM_DIR:
        throw WatcherError("Buffer overflow. Some events may have been lost.", mWatcher);
      case ERROR_ACCESS_DENIED: {
        // This can happen if the watched directory is deleted. Check if that is the case,
        // and if so emit a delete event. Otherwise, fall through to default error case.
        DWORD attrs = GetFileAttributesW(utf8ToUtf16(mWatcher->mDir).data());
        bool isDir = attrs != INVALID_FILE_ATTRIBUTES && (attrs & FILE_ATTRIBUTE_DIRECTORY);
        if (!isDir) {
          mWatcher->mEvents.remove(mWatcher->mDir);
          mTree->remove(mWatcher->mDir);
          mWatcher->notify();
          stop();
          return;
        }
      }
      default:
        if (errorCode != ERROR_SUCCESS) {
          throw WatcherError("Unknown error", mWatcher);
        }
    }

    // Swap read and write buffers, and poll again
    std::swap(mWriteBuffer, mReadBuffer);
    poll();

    // Read change events
    BYTE *base = mReadBuffer.data();
    while (true) {
      PFILE_NOTIFY_INFORMATION info = (PFILE_NOTIFY_INFORMATION)base;
      processEvent(info);

      if (info->NextEntryOffset == 0) {
        break;
      }

      base += info->NextEntryOffset;
    }

    mWatcher->notify();
  }

  void processEvent(PFILE_NOTIFY_INFORMATION info) {
    std::string path = mWatcher->mDir + "\\" + utf16ToUtf8(info->FileName, info->FileNameLength / sizeof(WCHAR));
    if (mWatcher->isIgnored(path)) {
      return;
    }

    switch (info->Action) {
      case FILE_ACTION_ADDED:
      case FILE_ACTION_RENAMED_NEW_NAME: {
        WIN32_FILE_ATTRIBUTE_DATA data;
        if (GetFileAttributesExW(utf8ToUtf16(path).data(), GetFileExInfoStandard, &data)) {
          mWatcher->mEvents.create(path);
          mTree->add(path, CONVERT_TIME(data.ftLastWriteTime), data.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY);
        }
        break;
      }
      case FILE_ACTION_MODIFIED: {
        WIN32_FILE_ATTRIBUTE_DATA data;
        if (GetFileAttributesExW(utf8ToUtf16(path).data(), GetFileExInfoStandard, &data)) {
          mTree->update(path, CONVERT_TIME(data.ftLastWriteTime));
          if (!(data.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY)) {
            mWatcher->mEvents.update(path);
          }
        }
        break;
      }
      case FILE_ACTION_REMOVED:
      case FILE_ACTION_RENAMED_OLD_NAME:
        mWatcher->mEvents.remove(path);
        mTree->remove(path);
        break;
    }
  }

private:
  WindowsBackend *mBackend;
  std::shared_ptr<Watcher> mWatcher;
  std::shared_ptr<DirTree> mTree;
  bool mRunning;
  HANDLE mDirectoryHandle;
  std::vector<BYTE> mReadBuffer;
  std::vector<BYTE> mWriteBuffer;
  OVERLAPPED mOverlapped;
};

// This function is called by Backend::watch which takes a lock on mMutex
void WindowsBackend::subscribe(WatcherRef watcher) {
  // Create a subscription for this watcher
  auto sub = std::make_shared<Subscription>(this, watcher, getTree(watcher, false));
  watcher->state = sub;

  // Queue polling for this subscription in the correct thread.
  bool success = QueueUserAPC([](__in ULONG_PTR ptr) {
    Subscription *sub = (Subscription *)ptr;
    sub->run();
  }, mThread.native_handle(), (ULONG_PTR)sub.get());

  if (!success) {
    throw std::runtime_error("Unable to queue APC");
  }
}

// This function is called by Backend::unwatch which takes a lock on mMutex
void WindowsBackend::unsubscribe(WatcherRef watcher) {
  watcher->state = nullptr;
}
