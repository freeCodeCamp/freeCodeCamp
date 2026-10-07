#ifndef DEBOUNCE_H
#define DEBOUNCE_H

#include <thread>
#include <unordered_map>
#include <functional>
#include "Signal.hh"

#define MIN_WAIT_TIME 50
#define MAX_WAIT_TIME 500

#ifdef __wasm32__
extern "C" {
  int set_timeout(int ms, void *ctx);
  void clear_timeout(int timeout);
  void on_timeout(void *ctx);
};
#endif

class Debounce {
public:
  static std::shared_ptr<Debounce> getShared();

  Debounce();
  ~Debounce();

  void add(void *key, std::function<void()> cb);
  void remove(void *key);
  void trigger();
  void notify();

private:
  bool mRunning;
  std::mutex mMutex;
  #ifdef __wasm32__
    int mTimeout;
  #else
    Signal mWaitSignal;
    std::thread mThread;
  #endif
  std::unordered_map<void *, std::function<void()>> mCallbacks;
  std::chrono::time_point<std::chrono::steady_clock> mLastTime;

  void loop();
  void notifyIfReady();
  void wait();
};

#endif
