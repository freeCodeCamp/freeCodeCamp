import path from 'path';
import { VirtualStats } from './virtual-stats';
import type { Compiler } from 'webpack';

let inode = 45000000;
const ALL = 'all';
const STATIC = 'static';
const DYNAMIC = 'dynamic';

type AvailableModules = typeof ALL | typeof STATIC | typeof DYNAMIC;

function checkActivation(instance) {
  if (!instance._compiler) {
    throw new Error('You must use this plugin only after creating webpack instance!');
  }
}

function getModulePath(filePath, compiler) {
  return path.isAbsolute(filePath) ? filePath : path.join(compiler.context, filePath);
}

function createWebpackData(result) {
  return (backendOrStorage) => {
    // In Webpack v5, this variable is a "Backend", and has the data stored in a field
    // _data. In V4, the `_` prefix isn't present.
    if (backendOrStorage._data) {
      const curLevelIdx = backendOrStorage._currentLevel;
      const curLevel = backendOrStorage._levels[curLevelIdx];
      return {
        result,
        level: curLevel,
      };
    }
    // Webpack 4
    return [null, result];
  };
}

function getData(storage, key) {
  // Webpack 5
  if (storage._data instanceof Map) {
    return storage._data.get(key);
  } else if (storage._data) {
    return storage.data[key];
  } else if (storage.data instanceof Map) {
    // Webpack v4
    return storage.data.get(key);
  } else {
    return storage.data[key];
  }
}

function setData(backendOrStorage, key, valueFactory) {
  const value = valueFactory(backendOrStorage);

  // Webpack v5
  if (backendOrStorage._data instanceof Map) {
    backendOrStorage._data.set(key, value);
  } else if (backendOrStorage._data) {
    backendOrStorage.data[key] = value;
  } else if (backendOrStorage.data instanceof Map) {
    // Webpack 4
    backendOrStorage.data.set(key, value);
  } else {
    backendOrStorage.data[key] = value;
  }
}

function getStatStorage(fileSystem) {
  if (fileSystem._statStorage) {
    // Webpack v4
    return fileSystem._statStorage;
  } else if (fileSystem._statBackend) {
    // webpack v5
    return fileSystem._statBackend;
  } else {
    // Unknown version?
    throw new Error("Couldn't find a stat storage");
  }
}

function getFileStorage(fileSystem) {
  if (fileSystem._readFileStorage) {
    // Webpack v4
    return fileSystem._readFileStorage;
  } else if (fileSystem._readFileBackend) {
    // Webpack v5
    return fileSystem._readFileBackend;
  } else {
    throw new Error("Couldn't find a readFileStorage");
  }
}

function getReadDirBackend(fileSystem) {
  if (fileSystem._readdirBackend) {
    return fileSystem._readdirBackend;
  } else if (fileSystem._readdirStorage) {
    return fileSystem._readdirStorage;
  } else {
    throw new Error("Couldn't find a readDirStorage from Webpack Internals");
  }
}

function getRealpathBackend(fileSystem) {
  if (fileSystem._realpathBackend) {
    return fileSystem._realpathBackend;
  }

  // Nothing, because not all version of webpack support it
}

class VirtualModulesPlugin {
  private _staticModules: Record<string, string> | null;
  private _compiler: Compiler | null = null;
  private _watcher: any = null;

  public constructor(modules?: Record<string, string>) {
    this._staticModules = modules || null;
  }

  public getModuleList(filter: AvailableModules = ALL) {
    let modules = {};
    const shouldGetStaticModules = filter === ALL || filter === STATIC;
    const shouldGetDynamicModules = filter === ALL || filter === DYNAMIC;

    if (shouldGetStaticModules) {
      // Get static modules
      modules = {
        ...modules,
        ...this._staticModules,
      };
    }

    if (shouldGetDynamicModules) {
      // Get dynamic modules
      const finalInputFileSystem: any = this._compiler?.inputFileSystem;
      const virtualFiles = finalInputFileSystem?._virtualFiles ?? {};

      const dynamicModules: Record<string, string> = {};
      Object.keys(virtualFiles).forEach((key: string) => {
        dynamicModules[key] = virtualFiles[key].contents;
      });

      modules = {
        ...modules,
        ...dynamicModules,
      };
    }

    return modules;
  }

  public writeModule(filePath: string, contents: string): void {
    if (!this._compiler) {
      throw new Error(`Plugin has not been initialized`);
    }

    checkActivation(this);

    const len = contents ? contents.length : 0;
    const time = Date.now();
    const date = new Date(time);

    const stats = new VirtualStats({
      dev: 8675309,
      nlink: 0,
      uid: 1000,
      gid: 1000,
      rdev: 0,
      blksize: 4096,
      ino: inode++,
      mode: 33188,
      size: len,
      blocks: Math.floor(len / 4096),
      atime: date,
      mtime: date,
      ctime: date,
      birthtime: date,
    });
    const modulePath = getModulePath(filePath, this._compiler);

    if (process.env.WVM_DEBUG)
      // eslint-disable-next-line no-console
      console.log(this._compiler.name, 'Write virtual module:', modulePath, contents);

    // When using the WatchIgnorePlugin (https://github.com/webpack/webpack/blob/52184b897f40c75560b3630e43ca642fcac7e2cf/lib/WatchIgnorePlugin.js),
    // the original watchFileSystem is stored in `wfs`. The following "unwraps" the ignoring
    // wrappers, giving us access to the "real" watchFileSystem.
    let finalWatchFileSystem = this._watcher && this._watcher.watchFileSystem;

    while (finalWatchFileSystem && finalWatchFileSystem.wfs) {
      finalWatchFileSystem = finalWatchFileSystem.wfs;
    }

    let finalInputFileSystem: any = this._compiler.inputFileSystem;
    while (finalInputFileSystem && finalInputFileSystem._inputFileSystem) {
      finalInputFileSystem = finalInputFileSystem._inputFileSystem;
    }

    finalInputFileSystem._writeVirtualFile(modulePath, stats, contents);
    if (
      finalWatchFileSystem &&
      finalWatchFileSystem.watcher &&
      (finalWatchFileSystem.watcher.fileWatchers.size || finalWatchFileSystem.watcher.fileWatchers.length)
    ) {
      const fileWatchers =
        finalWatchFileSystem.watcher.fileWatchers instanceof Map
          ? Array.from(finalWatchFileSystem.watcher.fileWatchers.values())
          : finalWatchFileSystem.watcher.fileWatchers;
      for (let fileWatcher of fileWatchers) {
        if ('watcher' in fileWatcher) {
          fileWatcher = fileWatcher.watcher;
        }
        if (fileWatcher.path === modulePath) {
          if (process.env.DEBUG)
            // eslint-disable-next-line no-console
            console.log(this._compiler.name, 'Emit file change:', modulePath, time);
          delete fileWatcher.directoryWatcher._cachedTimeInfoEntries;
          fileWatcher.emit('change', time, null);
        }
      }
    }
  }

  public apply(compiler: Compiler) {
    this._compiler = compiler;

    const afterEnvironmentHook = () => {
      let finalInputFileSystem: any = compiler.inputFileSystem;
      while (finalInputFileSystem && finalInputFileSystem._inputFileSystem) {
        finalInputFileSystem = finalInputFileSystem._inputFileSystem;
      }

      if (!finalInputFileSystem._writeVirtualFile) {
        const originalPurge = finalInputFileSystem.purge;

        finalInputFileSystem.purge = () => {
          originalPurge.apply(finalInputFileSystem, []);
          if (finalInputFileSystem._virtualFiles) {
            Object.keys(finalInputFileSystem._virtualFiles).forEach((file) => {
              const data = finalInputFileSystem._virtualFiles[file];
              finalInputFileSystem._writeVirtualFile(file, data.stats, data.contents);
            });
          }
        };

        finalInputFileSystem._writeVirtualFile = (file, stats, contents) => {
          const statStorage = getStatStorage(finalInputFileSystem);
          const fileStorage = getFileStorage(finalInputFileSystem);
          const readDirStorage = getReadDirBackend(finalInputFileSystem);
          const realPathStorage = getRealpathBackend(finalInputFileSystem);

          finalInputFileSystem._virtualFiles = finalInputFileSystem._virtualFiles || {};
          finalInputFileSystem._virtualFiles[file] = { stats: stats, contents: contents };
          setData(statStorage, file, createWebpackData(stats));
          setData(fileStorage, file, createWebpackData(contents));
          const segments = file.split(/[\\/]/);
          let count = segments.length - 1;
          const minCount = segments[0] ? 1 : 0;
          while (count > minCount) {
            const dir = segments.slice(0, count).join(path.sep) || path.sep;
            try {
              finalInputFileSystem.readdirSync(dir);
            } catch (e) {
              const time = Date.now();
              const dirStats = new VirtualStats({
                dev: 8675309,
                nlink: 0,
                uid: 1000,
                gid: 1000,
                rdev: 0,
                blksize: 4096,
                ino: inode++,
                mode: 16877,
                size: stats.size,
                blocks: Math.floor(stats.size / 4096),
                atime: time,
                mtime: time,
                ctime: time,
                birthtime: time,
              });

              setData(readDirStorage, dir, createWebpackData([]));
              if (realPathStorage) {
                setData(realPathStorage, dir, createWebpackData(dir));
              }
              setData(statStorage, dir, createWebpackData(dirStats));
            }
            let dirData = getData(getReadDirBackend(finalInputFileSystem), dir);
            // Webpack v4 returns an array, webpack v5 returns an object
            dirData = dirData[1] || dirData.result;
            const filename = segments[count];
            if (dirData.indexOf(filename) < 0) {
              const files = dirData.concat([filename]).sort();
              setData(getReadDirBackend(finalInputFileSystem), dir, createWebpackData(files));
            } else {
              break;
            }
            count--;
          }
        };
      }
    };
    const afterResolversHook = () => {
      if (this._staticModules) {
        for (const [filePath, contents] of Object.entries(this._staticModules)) {
          this.writeModule(filePath, contents);
        }
        this._staticModules = null;
      }
    };

    // The webpack property is not exposed in webpack v4
    const version = typeof (compiler as any).webpack === 'undefined' ? 4 : 5;

    const watchRunHook = (watcher, callback) => {
      this._watcher = watcher.compiler || watcher;
      const virtualFiles = (compiler as any).inputFileSystem._virtualFiles;
      const fts = compiler.fileTimestamps as any;

      if (virtualFiles && fts && typeof fts.set === 'function') {
        Object.keys(virtualFiles).forEach((file) => {
          const mtime = +virtualFiles[file].stats.mtime;
          // fts is
          // Map<string, number> in webpack 4
          // Map<string, { safeTime: number; timestamp: number; }> in webpack 5
          fts.set(
            file,
            version === 4
              ? mtime
              : {
                  safeTime: mtime,
                  timestamp: mtime,
                }
          );
        });
      }
      callback();
    };

    if (compiler.hooks) {
      compiler.hooks.afterEnvironment.tap('VirtualModulesPlugin', afterEnvironmentHook);
      compiler.hooks.afterResolvers.tap('VirtualModulesPlugin', afterResolversHook);
      compiler.hooks.watchRun.tapAsync('VirtualModulesPlugin', watchRunHook);
    } else {
      (compiler as any).plugin('after-environment', afterEnvironmentHook);
      (compiler as any).plugin('after-resolvers', afterResolversHook);
      (compiler as any).plugin('watch-run', watchRunHook);
    }
  }
}

export = VirtualModulesPlugin;
