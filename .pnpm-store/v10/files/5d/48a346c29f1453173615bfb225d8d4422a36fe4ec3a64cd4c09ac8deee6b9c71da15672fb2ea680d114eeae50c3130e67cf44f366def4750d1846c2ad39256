#ifndef EVENT_H
#define EVENT_H

#include <string>
#include <node_api.h>
#include "wasm/include.h"
#include <napi.h>
#include <mutex>
#include <map>
#include <optional>

using namespace Napi;

struct Event {
  std::string path;
  bool isCreated;
  bool isDeleted;
  Event(std::string path) : path(path), isCreated(false), isDeleted(false) {}

  Value toJS(const Env& env) {
    EscapableHandleScope scope(env);
    Object res = Object::New(env);
    std::string type = isCreated ? "create" : isDeleted ? "delete" : "update";
    res.Set(String::New(env, "path"), String::New(env, path.c_str()));
    res.Set(String::New(env, "type"), String::New(env, type.c_str()));
    return scope.Escape(res);
  }
};

class EventList {
public:
  void create(std::string path) {
    std::lock_guard<std::mutex> l(mMutex);
    Event *event = internalUpdate(path);
    if (event->isDeleted) {
      // Assume update event when rapidly removed and created
      // https://github.com/parcel-bundler/watcher/issues/72
      event->isDeleted = false;
    } else {
      event->isCreated = true;
    }
  }

  Event *update(std::string path) {
    std::lock_guard<std::mutex> l(mMutex);
    return internalUpdate(path);
  }

  void remove(std::string path) {
    std::lock_guard<std::mutex> l(mMutex);
    Event *event = internalUpdate(path);
    event->isDeleted = true;
  }

  size_t size() {
    std::lock_guard<std::mutex> l(mMutex);
    return mEvents.size();
  }

  std::vector<Event> getEvents() {
    std::lock_guard<std::mutex> l(mMutex);
    std::vector<Event> eventsCloneVector;
    for(auto it = mEvents.begin(); it != mEvents.end(); ++it) {
      if (!(it->second.isCreated && it->second.isDeleted)) {
        eventsCloneVector.push_back(it->second);
      }
    }
    return eventsCloneVector;
  }

  void clear() {
    std::lock_guard<std::mutex> l(mMutex);
    mEvents.clear();
    mError.reset();
  }

  void error(std::string err) {
    std::lock_guard<std::mutex> l(mMutex);
    if (!mError.has_value()) {
      mError.emplace(err);
    }
  }

  bool hasError() {
    std::lock_guard<std::mutex> l(mMutex);
    return mError.has_value();
  }

  std::string getError() {
    std::lock_guard<std::mutex> l(mMutex);
    return mError.value_or("");
  }

private:
  mutable std::mutex mMutex;
  std::map<std::string, Event> mEvents;
  std::optional<std::string> mError;
  Event *internalUpdate(std::string path) {
    auto found = mEvents.find(path);
    if (found == mEvents.end()) {
      auto it = mEvents.emplace(path, Event(path));
      return &it.first->second;
    }

    return &found->second;
  }
};

#endif
