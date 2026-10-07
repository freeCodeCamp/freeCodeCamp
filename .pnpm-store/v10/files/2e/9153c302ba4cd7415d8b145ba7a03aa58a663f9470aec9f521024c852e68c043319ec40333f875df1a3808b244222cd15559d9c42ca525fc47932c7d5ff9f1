#include <string>

// weird error on linux
#ifdef __THROW
#undef __THROW
#endif
#define __THROW

#ifdef _LIBC
# include <include/sys/stat.h>
#else
# include <sys/stat.h>
#endif
#include <dirent.h>
#include <unistd.h>
#include <fcntl.h>

#include "../DirTree.hh"
#include "../shared/BruteForceBackend.hh"

#define CONVERT_TIME(ts) ((uint64_t)ts.tv_sec * 1000000000 + ts.tv_nsec)
#if __APPLE__
#define st_mtim st_mtimespec
#endif
#define ISDOT(a) (a[0] == '.' && (!a[1] || (a[1] == '.' && !a[2])))

void iterateDir(WatcherRef watcher, const std::shared_ptr <DirTree> tree, const char *relative, int parent_fd, const std::string &dirname) {
    int open_flags = (O_RDONLY | O_CLOEXEC | O_DIRECTORY | O_NOCTTY | O_NONBLOCK | O_NOFOLLOW);
    int new_fd = openat(parent_fd, relative, open_flags);
    if (new_fd == -1) {
        if (errno == EACCES) {
            return; // ignore insufficient permissions
        }

        throw WatcherError(strerror(errno), watcher);
    }

    struct stat rootAttributes;
    fstatat(new_fd, ".", &rootAttributes, AT_SYMLINK_NOFOLLOW);
    tree->add(dirname, CONVERT_TIME(rootAttributes.st_mtim), true);

    if (DIR *dir = fdopendir(new_fd)) {
        while (struct dirent *ent = (errno = 0, readdir(dir))) {
            if (ISDOT(ent->d_name)) continue;

            std::string fullPath = dirname + "/" + ent->d_name;

            if (!watcher->isIgnored(fullPath)) {
                struct stat attrib;
                fstatat(new_fd, ent->d_name, &attrib, AT_SYMLINK_NOFOLLOW);
                bool isDir = ent->d_type == DT_DIR;

                if (isDir) {
                    iterateDir(watcher, tree, ent->d_name, new_fd, fullPath);
                } else {
                    tree->add(fullPath, CONVERT_TIME(attrib.st_mtim), isDir);
                }
            }
        }

        closedir(dir);
    } else {
        close(new_fd);
    }

    if (errno) {
        throw WatcherError(strerror(errno), watcher);
    }
}

void BruteForceBackend::readTree(WatcherRef watcher, std::shared_ptr <DirTree> tree) {
    int fd = open(watcher->mDir.c_str(), O_RDONLY);
    if (fd) {
        iterateDir(watcher, tree, ".", fd, watcher->mDir);
        close(fd);
    }
}
