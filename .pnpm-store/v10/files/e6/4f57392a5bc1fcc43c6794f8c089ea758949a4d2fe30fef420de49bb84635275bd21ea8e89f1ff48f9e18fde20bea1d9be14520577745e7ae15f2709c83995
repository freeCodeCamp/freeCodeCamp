#ifndef WINDOWS_H
#define WINDOWS_H

#include <winsock2.h>
#include <windows.h>
#include "../shared/BruteForceBackend.hh"

class WindowsBackend : public BruteForceBackend {
public:
  void start() override;
  ~WindowsBackend();
  void subscribe(WatcherRef watcher) override;
  void unsubscribe(WatcherRef watcher) override;
private:
  bool mRunning;
};

#endif
