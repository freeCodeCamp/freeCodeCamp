{
  'targets': [
    {
      'target_name': 'node_addon_api',
      'type': 'none',
      'sources': [ 'napi.h', 'napi-inl.h' ],
      'direct_dependent_settings': {
        'include_dirs': [ '.' ],
        'includes': ['noexcept.gypi'],
      }
    },
    {
      'target_name': 'node_addon_api_except',
      'type': 'none',
      'sources': [ 'napi.h', 'napi-inl.h' ],
      'direct_dependent_settings': {
        'include_dirs': [ '.' ],
        'includes': ['except.gypi'],
      }
    },
    {
      'target_name': 'node_addon_api_maybe',
      'type': 'none',
      'sources': [ 'napi.h', 'napi-inl.h' ],
      'direct_dependent_settings': {
        'include_dirs': [ '.' ],
        'includes': ['noexcept.gypi'],
        'defines': ['NODE_ADDON_API_ENABLE_MAYBE']
      }
    },
  ]
}
