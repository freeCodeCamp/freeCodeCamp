# dtrace-provider - Native DTrace providers for Node.js apps.

This extension allows you to create native DTrace providers for your
Node.js applications. That is, to create providers and probes which
expose information specific to your application, rather than
information about the node runtime.

You could use this to expose high-level information about the inner
workings of your application, or to create a specific context in which
to look at information from other runtime or system-level providers. 

The provider is not created in the usual way, by declaring it and then
changing the build process to include it, but instead dynamically at
runtime. This is done entirely in-process, and there is no background
compiler or [dtrace(1M)](https://illumos.org/man/1M/dtrace) invocation.
The process creating the provider need not run as root.

## INSTALL

    $ npm install dtrace-provider

## EXAMPLE

Here's a simple example of creating a provider:

```javascript
var d = require('dtrace-provider');

var dtp = d.createDTraceProvider("nodeapp");
var p1 = dtp.addProbe("probe1", "int", "int");
var p2 = dtp.addProbe("probe2", "char *");
dtp.enable();
```

Probes may be fired via the provider object:

```javascript
dtp.fire("probe1", function() {
    return [1, 2];
});
dtp.fire("probe2", function() {
    return ["hello, dtrace via provider", "foo"];
});
```

or via the probe objects themselves:

```javascript
p1.fire(function() {
  return [1, 2, 3, 4, 5, 6];
});
p2.fire(function() {
  return ["hello, dtrace via probe", "foo"];
});
```

Note that `.fire()` takes a callback that returns the arguments to be
provided when the DTrace probe actually fires. This allows you to call
`.fire()` unconditionally when you want to fire the probe, but the
callback will be invoked only when the DTrace probe is actually
enabled. This allows you to create probes whose arguments might be
expensive to construct, and only do any work when the probe is
actually enabled. (Examples might include converting a large object to
a string representation or gathering large amounts of information.)

In some cases, creating a new closure to pass to `.fire()` each time
it's called may introduce unwanted overhead. For extremely
CPU-intensive or memory-conscious workloads, you can avoid this by
lifting the closures for your hot probes into an outer scope. You can
then supply arguments to that function as additional arguments to
`.fire()`. As an example, you can convert the following program:

```javascript
function manipulateObj(largeObj) {
    var count = 0;
    var name = null;
    ...
    p1.fire(function () {
        return [count, keyToValue(name), JSON.stringify(largeObj)];
    });
}
```

Into this one:

```javascript
function f(a, b, c) {
    return [a, keyToValue(b), JSON.stringify(c)];
}

function manipulateObj(largeObj) {
    var count = 0;
    var name = null;
    ...
    p1.fire(f, count, name, largeObj);
}
```

Be careful to avoid passing `.fire()` additional arguments that are
themselves expensive to construct, as that undermines the design goal
here: minimizing the effect of disabled probes.

This example creates a provider called "nodeapp", and adds two
probes. It then enables the provider, at which point the provider
becomes visible to DTrace.

The probes are then fired, which produces this output:

    $ sudo dtrace -Z -n 'nodeapp*:::probe1{ trace(arg0); trace(arg1) }'  \
                     -n 'nodeapp*:::probe2{ trace(copyinstr(arg0));  }'
    dtrace: description 'nodeapp*:::probe1' matched 0 probes
    dtrace: description 'nodeapp*:::probe2' matched 0 probes
    CPU     ID                    FUNCTION:NAME
      1 123562                      func:probe1                 1                2
      1 123563                      func:probe2   hello, dtrace                    

Arguments are captured by a callback only executed when the probe is
enabled. This means you can do more expensive work to gather arguments.

The maximum number of arguments supported is 32. 

Available argument types are "int", for integer numeric values,
"char *" for strings, and "json" for objects rendered into JSON strings.

Arguments typed as "json" will be created as "char *" probes in
DTrace, but objects passed to these probe arguments will be
automatically serialized to JSON before being passed to DTrace. This
feature is best used in conjunction with the json() D subroutine, but
is available whether or not the platform supports it.

    # create a json probe:

    var dtp = d.createDTraceProvider("nodeapp");
    var p1 = dtp.addProbe("j1", "json");
    dtp.enable();
    p1.fire(function() { return { "foo": "bar" }; });

    # on a platform supporting json():

    $ sudo dtrace -Z -n 'nodeapp*:::j1{ this->j = copyinstr(arg0); \
                                        trace(json(this->j, "foo")) }'
    dtrace: description 'nodeapp$target:::j1' matched 0 probes
    CPU     ID                    FUNCTION:NAME
      0  68712                            j1:j1   bar

## PLATFORM SUPPORT

This libusdt-based Node.JS module supports 64 and 32 bit processes on
Mac OS X and Solaris-like systems such as illumos or SmartOS. As more
platform support is added to libusdt, those platforms will be
supported by this module. See libusdt's status at:

  https://github.com/chrisa/libusdt#readme

When using Mac OS X, be aware that as of 10.11 (El Capitan), DTrace use
is restricted, and you'll probably want to
[disable SIP](http://internals.exposed/blog/dtrace-vs-sip.html) to
effectively use DTrace.

FreeBSD 10 and 11 are also supported, but you'll need to make sure that
you have the DTrace headers installed in `/usr/src` otherwise libusdt
won't be able to compile. You can
[clone them using SVN](https://www.freebsd.org/doc/handbook/svn.html),
or find the correct `src.txz`
[here](http://ftp.freebsd.org/pub/FreeBSD/releases/) and extract that.
Also note that FreeBSD 10 is restricted to only 4 working arguments per
probe.

Platforms not supporting DTrace (notably, Linux and Windows) may
install this module without building libusdt, with a stub no-op
implementation provided for compatibility. This allows cross-platform
npm modules to embed probes and include a dependency on this module.

GNU Make is required to build libusdt; the build scripts will look for
gmake in `PATH` first, and then for make.

### TROUBLESHOOTING BUILD ISSUES

If compilation fails during installation on platforms with DTrace, then
the library will fall back to the stub implementation that does nothing.
To force an installation failure when compiling fails, set the environment
variable `NODE_DTRACE_PROVIDER_REQUIRE` to `hard`:

```shell
$ NODE_DTRACE_PROVIDER_REQUIRE=hard npm install
```

This will then show you the output of the build process so you can see at
which point it's having an issue. Common issues are:

- Missing a C/C++ compiler toolchain for your platform.
- `python` is Python 3 instead of Python 2; run `npm config set python python2.7`
  (or similar) to set the Python binary npm uses.
- On OS X you may need to agree to the XCode license if that's the compiler
  toolchain you're using. This will usually manifest with an error like
  `Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.`
  To accept the license, you can run `sudo xcodebuild -license`.

Once you've found and fixed the issue, you can run `npm rebuild` to rerun
the lifecycle scripts.

## CAVEATS

There is some overhead to probes, even when disabled. Probes are
already using the "is-enabled" feature of DTrace to control execution
of the arguments-gathering callback, but some work still needs to be
done before that's checked. This overhead should not be a problem
unless probes are placed in particularly hot code paths.

## CONTRIBUTING

To clone the project's source code:

    $ git clone --recursive https://github.com/chrisa/node-dtrace-provider.git

For issues, please use the [GitHub issue tracker](https://github.com/chrisa/node-dtrace-provider/issues)
linked to the repository. GitHub pull requests are very welcome.

## RUNNING THE TESTS

```shell
$ npm install
$ sudo ./node_modules/.bin/tap --tap test/*.test.js
```

## OTHER IMPLEMENTATIONS

This node extension is derived from the ruby-dtrace gem, via the Perl
module Devel::DTrace::Provider, both of which provide the same
functionality to those languages.
