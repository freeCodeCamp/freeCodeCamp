{
  "targets": [
    {
      "target_name": "watcher",
      "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ],
      "sources": [ "src/binding.cc", "src/Watcher.cc", "src/Backend.cc", "src/DirTree.cc", "src/Glob.cc", "src/Debounce.cc" ],
      "include_dirs" : ["<!(node -p \"require('node-addon-api').include_dir\")"],
      'cflags!': [ '-fno-exceptions', '-std=c++17' ],
      'cflags_cc!': [ '-fno-exceptions', '-std=c++17' ],
      'cflags': [ '-fstack-protector-strong' ],
      "conditions": [
        ['OS=="mac"', {
          "sources": [
            "src/watchman/BSER.cc",
            "src/watchman/WatchmanBackend.cc",
            "src/shared/BruteForceBackend.cc",
            "src/unix/fts.cc",
            "src/macos/FSEventsBackend.cc",
            "src/kqueue/KqueueBackend.cc"
          ],
          "link_settings": {
            "libraries": ["CoreServices.framework"]
          },
          "defines": [
            "WATCHMAN",
            "BRUTE_FORCE",
            "FS_EVENTS",
            "KQUEUE"
          ],
          "xcode_settings": {
            "GCC_ENABLE_CPP_EXCEPTIONS": "YES"
          }
        }],
        ['OS=="mac" and target_arch=="arm64"', {
          "xcode_settings": {
            "ARCHS": ["arm64"]
          }
        }],
        ['OS=="linux" or OS=="android"', {
          "sources": [
            "src/watchman/BSER.cc",
            "src/watchman/WatchmanBackend.cc",
            "src/shared/BruteForceBackend.cc",
            "src/linux/InotifyBackend.cc",
            "src/unix/legacy.cc"
          ],
          "defines": [
            "WATCHMAN",
            "INOTIFY",
            "BRUTE_FORCE"
          ]
        }],
        ['OS=="win"', {
          "sources": [
            "src/watchman/BSER.cc",
            "src/watchman/WatchmanBackend.cc",
            "src/shared/BruteForceBackend.cc",
            "src/windows/WindowsBackend.cc",
            "src/windows/win_utils.cc"
          ],
          "defines": [
            "WATCHMAN",
            "WINDOWS",
            "BRUTE_FORCE"
          ],
          "msvs_settings": {
            "VCCLCompilerTool": {
              "ExceptionHandling": 1,  # /EHsc
              "AdditionalOptions": [
                "-std:c++17",
                "/guard:cf",
                "/W3",
                "/we4146",
                "/w34244",
                "/we4267",
                "/sdl",
                "/ZH:SHA_256"
              ]
            },
            "VCLinkerTool": {
              "AdditionalOptions": [
                "/DYNAMICBASE",
                "/guard:cf"
              ]
            }
          }
        }],
        ['OS=="freebsd"', {
          "sources": [
            "src/watchman/BSER.cc",
            "src/watchman/WatchmanBackend.cc",
            "src/shared/BruteForceBackend.cc",
            "src/unix/fts.cc",
            "src/kqueue/KqueueBackend.cc"
          ],
          "defines": [
            "WATCHMAN",
            "BRUTE_FORCE",
            "KQUEUE"
          ]
        }]
      ]
    }
  ],
  "variables": {
    "openssl_fips": "",
    "node_use_dtrace": "false"
  }
}
