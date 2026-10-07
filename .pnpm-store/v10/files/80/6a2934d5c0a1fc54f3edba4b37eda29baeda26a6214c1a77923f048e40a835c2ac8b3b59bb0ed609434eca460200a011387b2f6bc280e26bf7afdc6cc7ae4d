#include <string>

// weird error on linux
#ifdef __THROW
#undef __THROW
#endif
#define __THROW

#include <fts.h>
#include <sys/stat.h>
#include "../DirTree.hh"
#include "../shared/BruteForceBackend.hh"

#define CONVERT_TIME(ts) ((uint64_t)ts.tv_sec * 1000000000 + ts.tv_nsec)
#if __APPLE__
#define st_mtim st_mtimespec
#endif

void BruteForceBackend::readTree(WatcherRef watcher, std::shared_ptr<DirTree> tree) {
  char *paths[2] {(char *)watcher->mDir.c_str(), NULL};
  FTS *fts = fts_open(paths, FTS_NOCHDIR | FTS_PHYSICAL, NULL);
  if (!fts) {
    throw WatcherError(strerror(errno), watcher);
  }

  FTSENT *node;
  bool isRoot = true;

  while ((node = fts_read(fts)) != NULL) {
    if (node->fts_errno) {
      fts_close(fts);
      throw WatcherError(strerror(node->fts_errno), watcher);
    }

    if (isRoot && !(node->fts_info & FTS_D)) {
      fts_close(fts);
      throw WatcherError(strerror(ENOTDIR), watcher);
    }

    if (watcher->isIgnored(std::string(node->fts_path))) {
      fts_set(fts, node, FTS_SKIP);
      continue;
    }

    tree->add(node->fts_path, CONVERT_TIME(node->fts_statp->st_mtim), (node->fts_info & FTS_D) == FTS_D);
    isRoot = false;
  }

  fts_close(fts);
}
