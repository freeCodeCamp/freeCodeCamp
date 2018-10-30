#!/usr/bin/env bash

set -o pipefail

if [[ -n "$V" ]]; then
    set -o xtrace
fi

fail() {
    if [[ -z "$NODE_DTRACE_PROVIDER_REQUIRE" && -z "$V" ]]; then
        echo "-----------------------------------------------------------------"
        echo "Building dtrace-provider failed with exit code $1, falling back"
        echo "on stub implementation."
        echo ""
        echo "Re-run install with V set in your environment to see the build"
        echo "output, or NODE_DTRACE_PROVIDER_REQUIRE=hard to force an"
        echo "installation failure."
        echo "-----------------------------------------------------------------"
    fi

    if [[ "$NODE_DTRACE_PROVIDER_REQUIRE" == "hard" ]]; then
        exit 1
    else
        exit 0
    fi
}

buildUSDT() {
    if [[ -z "$NODE_DTRACE_PROVIDER_REQUIRE" && -z "$V" ]]; then
        exec 1> /dev/null
        exec 2> /dev/null
    fi

    # GYP's MAKEFLAGS confuses libusdt's Makefile
    unset MAKEFLAGS

    # Ask node what architecture it's been built for ("target_arch" in
    # config.gypi), and build libusdt to match.
    #
    # We use node from the path; npm will have adjusted PATH for us if
    # necessary, otherwise we assume the user did so when building by
    # hand.
    #
    # (This will need to change at the point that GYP is able to build
    # node extensions universal on the Mac - for now we'll go with x86_64
    # on a 64 bit Mac, because that's the default architecture in that
    # situation.)
    export ARCH=`node -e "console.log(process.arch === 'x64' ? 'x86_64' : 'i386')"`
    echo "Building libusdt for ${ARCH}"

    # Respect a MAKE variable if set
    if [[ -z $MAKE ]]; then
        # Default to `gmake` first if available, because we require GNU make
        # and `make` isn't GNU make on some plats.
        MAKE=`which gmake`
        if [[ -z $MAKE ]]; then
            MAKE=make
        fi
    fi

    # Build libusdt.
    $MAKE -C libusdt clean all
}

buildNDTP() {
    if [[ -z "$NODE_DTRACE_PROVIDER_REQUIRE" && -z "$V" ]]; then
        exec 1> /dev/null
        exec 2> /dev/null
    fi

    node-gyp rebuild -C src
}

(buildUSDT)
LIBUSDT_STATUS=$?
if [[ "$LIBUSDT_STATUS" -ne 0 ]]; then
    fail $LIBUSDT_STATUS
fi

(buildNDTP)
NODE_GYP_STATUS=$?
if [[ "$NODE_GYP_STATUS" -ne 0 ]]; then
    fail $NODE_GYP_STATUS
fi

exit 0
