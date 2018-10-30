/**
 * During `npm install`, we run:
 *
 *     node-gyp rebuild || node suppress-error.js
 *
 * (Note that this expression is written to work on *nix and Windows.)
 *
 * When we run node-gyp, we detect whether or not we're on a supported platform,
 * and either compile the node addon or exit having done nothing. It's possible
 * for the platform to lack the requirements to run node-gyp though (such as
 * Python 2, make, Visual C++ Build Tools, and so on), in which case we fall
 * back onto this script.
 *
 * If NODE_DTRACE_PROVIDER_REQUIRE is set to "hard", then we want to propagate
 * the failure and stop the install. Otherwise, we want to suppress it and
 * allow the program to fall back onto the stub code.
 *
 * There is one case where we might stop an install and not want to: on Debian
 * and Ubuntu, where the binary is named "nodejs" instead of "node", the
 * fallback will fail to run. There doesn't really seem to be a great way to
 * handle this scenario, so users on those systems will need to either install
 * node-gyp's requirements or set up a "node" symbolic link.
 */
if (process.env.NODE_DTRACE_PROVIDER_REQUIRE === 'hard') {
    process.exit(1);
} else {
    process.exit(0);
}
