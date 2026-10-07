{
  "variables": {
      "os_linux_compiler%": "gcc",
      "enable_v8%": "true",
      "enable_pointer_compression%": "false",
      "build_v8_with_gn": "false"
  },
  "conditions": [
    ['OS=="win"', {
      "variables": {
        "enable_v8%": "<!(echo %ENABLE_V8_FUNCTIONS%)",
      }
    }],
    ['OS!="win"', {
      "variables": {
        "enable_v8%": "<!(echo $ENABLE_V8_FUNCTIONS)",
      }
    }]
  ],
  "targets": [
    {
      "target_name": "extract",
      "sources": [
        "src/extract.cpp",
      ],
      "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ],
      "conditions": [
        ["OS=='linux'", {
          "variables": {
            "gcc_version" : "<!(<(os_linux_compiler) -dumpversion | cut -d '.' -f 1)",
          },
          "cflags_cc": [
            "-fPIC",
            "-fvisibility=hidden",
            "-fvisibility-inlines-hidden",
          ],
          "conditions": [
            ["gcc_version>=7", {
              "cflags": [
                "-Wimplicit-fallthrough=2",
              ],
            }],
          ],
          "ldflags": [
            "-fPIC",
            "-fvisibility=hidden"
          ],
          "cflags": [
            "-fPIC",
            "-fvisibility=hidden",
            "-O3"
          ],
        }],
        ["enable_v8!='false'", {
          "defines": ["ENABLE_V8_API=1"]
        }],
        ["enable_pointer_compression=='true'", {
          "defines": ["V8_COMPRESS_POINTERS", "V8_COMPRESS_POINTERS_IN_ISOLATE_CAGE"],
        }],
      ],
    }
  ]
}
