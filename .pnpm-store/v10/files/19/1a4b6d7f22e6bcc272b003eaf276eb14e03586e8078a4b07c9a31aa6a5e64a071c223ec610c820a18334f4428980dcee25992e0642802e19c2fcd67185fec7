{
  "targets": [
    {
      "target_name": "sentry_cpu_profiler",
      "sources": [ "bindings/cpu_profiler.cc" ],
      # Silence gcc8 deprecation warning https://github.com/nodejs/nan/issues/807#issuecomment-455750192
      "cflags": ["-Wno-cast-function-type"]
    },
  ],
  'conditions': [
    [ 'OS=="win"', {
      'defines': [
        # Stop <windows.h> from defining macros that conflict with
        # std::min() and std::max().  We don't use <windows.h> (much)
        # but we still inherit it from uv.h.
        'NOMINMAX',
      ]
    }],
  ],
}
