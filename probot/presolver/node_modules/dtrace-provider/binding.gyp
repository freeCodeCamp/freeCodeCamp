{
    'conditions': [
        # If we are on Mac OS X, FreeBSD, or a Solarish system, attempt
        # to build the DTrace provider extension.
        ['OS=="mac" or OS=="solaris" or OS=="freebsd"', {
            'targets': [
                {
                    'target_name': 'ndtp',
                    'type': 'none',
                    'actions': [{
                        'inputs': [''],
                        'outputs': [''],
                        'action_name': 'build_ndtp',
                        'action': [
                            'bash', 'build.sh'
                        ]
                    }]
                }
            ]
        },

        # If we are on another system (like Windows or Linux), then DTrace is
        # unavailable. This target is necessary because GYP requires at least
        # one target to exist. We end up building nothing, and fall back to the
        # stub implementation when the package is loaded.
        {
            'targets': [
                {
                    'target_name': 'DTraceProviderStub',
                    'type': 'none'
                }
            ]
        }]
   ]
}
