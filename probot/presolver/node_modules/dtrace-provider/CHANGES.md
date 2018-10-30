dtrace-provider - Changes
=========================

## HISTORY

 * 0.8.7:
   Known support for v0.10.48, v0.12.16, v4.6.0, v7.5.0, v8.9.4, v10.3.0 (#119)
   Don't crash when attempting to fire unknown probes (#120)

 * 0.8.6:
   Improved compilation failure behaviour (#96)

 * 0.8.5:
   Reverted "Install fails on Debian due to differently named node binary" for
   now

 * 0.8.4:
   Only log error once when DTraceProviderBindings can't be found
   Install fails on Debian due to differently named node binary

 * 0.8.3:
   Install fails with yarn

 * 0.8.2:
   Error installing in 64-bit SmartOS zones with 32-bit node

 * 0.8.1:
   Support FreeBSD 10 & 11

 * 0.8.0:
   Support passing additional arguments to probe function via `.fire()`

 * 0.7.1:
   Update libusdt for chrisa/libusdt#12 fix

 * 0.7.0: known support for v0.10.47, v0.12.16, v4.6.0.
   Updated NaN dependency to remove warnings on newer Node versions.

 * 0.2.8:
   Add NODE_MODULE() declaration for compatibility with Node 0.9.1+
   (reported by Trent Mick)
   Remove execSync dependency from tests.

 * 0.2.7:
   Don't build on FreeBSD by default - DTrace is not yet built in releases.

 * 0.2.6:
   Fall back to make(1) if gmake(1) is unavailable, still expected to be GNU Make
   (Trent Mick)

 * 0.2.5:
   Add "json" probe argument type, automatically serialising objects as JSON
   Trust npm to set PATH appropriately when invoking node (reported by Dave Pacheco)
   libusdt update - allow provider memory to be freed (reported by Bryan Cantrill)
   Build libusdt with gmake by default (reported by Keith Wesolowski)
   Turn the various scripts in test/ into a TAP-based testsuite.

 * 0.2.4:
   Improve Node architecture detection to support 0.6.x, and respect
   npm's prefix when choosing a node binary to use (reported by Trent Mick)

 * 0.2.3:
   libusdt update - don't invoke ranlib on SunOS-derived systems
   Disambiguate module name in probe tuple, and optionally allow it to be
   specified when creating a provider. (Bryan Cantrill bcantrill@acm.org)

 * 0.2.2:
   libusdt update for build fixes
   Respect MAKE variable in build script

 * 0.2.1:
   Update binding.gyp for clang on Snow Leopard - no space after -L.

 * 0.2.0:
   Update libusdt, and attempt to build it correctly for various platforms.
   Add support for disabling providers and removing probes.

 * 0.1.1:
   Replace Node-specific implementation with wrappers for libusdt.
   Extend argument support to 32 primitives.
   Adds Solaris x86_64 support.

 * 0.0.9:
   Force the build architecture to x86_64 for OS X.

 * 0.0.8:
   Removed overridden "scripts" section from package.json, breaking Windows installs

 * 0.0.7:
   Fix for multiple enable() calls breaking providers.

 * 0.0.6:
   Fix for segfault trying to use non-enabled probes (Mark Cavage mcavage@gmail.com)

 * 0.0.5:
   Revert changes to make probe objects available.

 * 0.0.4:
   Remove unused "sys" import (Alex Whitman) 
   No longer builds an empty extension on non-DTrace platforms
   Probe objects are made available to Javascript.

 * 0.0.3:
   Builds to a stubbed-out version on non-DTrace platforms (Mark Cavage <mcavage@gmail.com>)

 * 0.0.2:
   Solaris i386 support.
   Fixes memory leaks
   Improved performance, enabled- and disabled-probe. 

 * 0.0.1: 
   First working version: OSX x86_64 only. 
