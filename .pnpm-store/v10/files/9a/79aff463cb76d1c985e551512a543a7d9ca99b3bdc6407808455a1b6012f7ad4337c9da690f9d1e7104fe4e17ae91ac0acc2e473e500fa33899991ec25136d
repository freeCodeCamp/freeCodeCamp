#ifndef SIGNAL_H
#define SIGNAL_H

#include <mutex>
#include <condition_variable>

class Signal {
public:
  Signal() : mFlag(false), mWaiting(false) {}
  void wait() {
    std::unique_lock<std::mutex> lock(mMutex);
    while (!mFlag) {
      mWaiting = true;
      mCond.wait(lock);
    }
  }

  std::cv_status waitFor(std::chrono::milliseconds ms) {
    std::unique_lock<std::mutex> lock(mMutex);
    return mCond.wait_for(lock, ms);
  }

  void notify() {
    std::unique_lock<std::mutex> lock(mMutex);
    mFlag = true;
    mCond.notify_all();
  }

  void reset() {
    std::unique_lock<std::mutex> lock(mMutex);
    mFlag = false;
    mWaiting = false;
  }
  
  bool isWaiting() {
    return mWaiting;
  }

private:
  bool mFlag;
  bool mWaiting;
  std::mutex mMutex;
  std::condition_variable mCond;
};

#endif
