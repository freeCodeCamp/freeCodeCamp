#ifndef WASM_H
#define WASM_H

#include <unordered_map>
#include "../shared/BruteForceBackend.hh"
#include "../DirTree.hh"

extern "C" {
  int wasm_backend_add_watch(const char *filename, void *backend);
  void wasm_backend_remove_watch(int wd);
  void wasm_backend_event_handler(void *backend, int wd, int type, char *filename);
};

struct WasmSubscription {
  std::shared_ptr<DirTree> tree;
  std::string path;
  WatcherRef watcher;
};

class WasmBackend : public BruteForceBackend {
public:
  void start() override;
  void subscribe(WatcherRef watcher) override;
  void unsubscribe(WatcherRef watcher) override;
  void handleEvent(int wd, int type, char *filename);
private:
  int mWasm;
  std::unordered_multimap<int, std::shared_ptr<WasmSubscription>> mSubscriptions;

  void watchDir(WatcherRef watcher, std::string path, std::shared_ptr<DirTree> tree);
  bool handleSubscription(int type, char *filename, std::shared_ptr<WasmSubscription> sub);
};

#endif
