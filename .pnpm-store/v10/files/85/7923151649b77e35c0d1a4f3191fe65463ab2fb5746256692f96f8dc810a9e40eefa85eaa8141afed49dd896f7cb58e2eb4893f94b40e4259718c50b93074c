{
  'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
  'cflags': [ '-fno-exceptions' ],
  'cflags_cc': [ '-fno-exceptions' ],
  'conditions': [
    ["OS=='win'", {
      # _HAS_EXCEPTIONS is already defined and set to 0 in common.gypi
      #"defines": [
      #  "_HAS_EXCEPTIONS=0"
      #],
      "msvs_settings": {
        "VCCLCompilerTool": {
          'ExceptionHandling': 0,
          'EnablePREfast': 'true',
        },
      },
    }],
    ["OS=='mac'", {
      'xcode_settings': {
        'CLANG_CXX_LIBRARY': 'libc++',
        'MACOSX_DEPLOYMENT_TARGET': '10.7',
        'GCC_ENABLE_CPP_EXCEPTIONS': 'NO',
      },
    }],
  ],
}
