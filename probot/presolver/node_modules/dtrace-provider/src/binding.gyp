{
    'conditions' : [
        ['OS=="mac" or OS=="solaris"', {
            'variables': {
                'escaped_root': '<!(printf %q "<(module_root_dir)")',
            }
        }],
        ['OS=="freebsd"', {
            'variables' : {
                'escaped_root': '<!(printf %s "<(module_root_dir)")'
            }
        }]
    ],

    'targets': [
        {
            'target_name': 'DTraceProviderBindings',
            'sources': [
                'dtrace_provider.cc',
                'dtrace_probe.cc',
                'dtrace_argument.cc'
            ],
            'conditions': [
                ['OS=="mac" or OS=="solaris"',
                    { 'include_dirs': [
                         '../libusdt',
                         '<!(node -e "require(\'nan\')")',
                      ]
                    }
                ],
                ['OS=="freebsd"',
                    { 'include_dirs': [
                          '/usr/src/cddl/compat/opensolaris/',
                          '/usr/src/sys/cddl/compat/opensolaris',
                          '/usr/src/sys/cddl/contrib/opensolaris/uts/common/',
                          '../libusdt',
                          '<!(node -e "require(\'nan\')")'
                      ]
                    }
                ]
            ],
            'libraries': [
                '-L<(escaped_root)/../libusdt -l usdt'
            ]
        }
    ]
}
