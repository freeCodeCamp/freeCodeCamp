{
  'variables': {
    'NAPI_VERSION%': "<!(node -p \"process.versions.napi\")",
    'disable_deprecated': "<!(node -p \"process.env['npm_config_disable_deprecated']\")"
  },
  'conditions': [
    ['NAPI_VERSION!=""', { 'defines': ['NAPI_VERSION=<@(NAPI_VERSION)'] } ],
    ['disable_deprecated=="true"', {
      'defines': ['NODE_ADDON_API_DISABLE_DEPRECATED']
    }],
    ['OS=="mac"', {
      'cflags+': ['-fvisibility=hidden'],
      'xcode_settings': {
        'OTHER_CFLAGS': ['-fvisibility=hidden']
      }
    }]
  ],
  'include_dirs': ["<!(node -p \"require('../').include_dir\")"],
  'cflags': [ '-Werror', '-Wall', '-Wextra', '-Wpedantic', '-Wunused-parameter' ],
  'cflags_cc': [ '-Werror', '-Wall', '-Wextra', '-Wpedantic', '-Wunused-parameter' ]
}
