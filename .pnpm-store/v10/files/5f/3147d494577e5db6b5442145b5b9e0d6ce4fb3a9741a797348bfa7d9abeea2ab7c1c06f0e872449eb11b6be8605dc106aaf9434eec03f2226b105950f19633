#ifndef DIR_TREE_H
#define DIR_TREE_H

#include <string>
#include <unordered_map>
#include <memory>
#include "Event.hh"

#ifdef _WIN32
#define DIR_SEP "\\"
#else
#define DIR_SEP "/"
#endif

struct DirEntry {
  std::string path;
  uint64_t mtime;
  bool isDir;
  mutable void *state;

  DirEntry(std::string p, uint64_t t, bool d);
  DirEntry(FILE *f);
  void write(FILE *f) const;
  bool operator==(const DirEntry &other) const {
    return path == other.path;
  }
};

class DirTree {
public:
  static std::shared_ptr<DirTree> getCached(std::string root);
  DirTree(std::string root) : root(root), isComplete(false) {}
  DirTree(std::string root, FILE *f);
  DirEntry *add(std::string path, uint64_t mtime, bool isDir);
  DirEntry *find(std::string path);
  DirEntry *update(std::string path, uint64_t mtime);
  void remove(std::string path);
  void write(FILE *f);
  void getChanges(DirTree *snapshot, EventList &events);

  std::mutex mMutex;
  std::string root;
  bool isComplete;
  std::unordered_map<std::string, DirEntry> entries;

private:
  DirEntry *_find(std::string path);
};

#endif
