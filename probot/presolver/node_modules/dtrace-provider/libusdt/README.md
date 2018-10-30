libusdt
=======

This is "libusdt", a library for creating DTrace USDT providers.

The idea here is to allow the specification of a DTrace provider
dynamically in code and then create the provider at runtime. This
allows providers to be specified in dynamic languages, given suitable
bindings.

The general approach is to create two stub functions for each probe,
one for the is-enabled check and one for the probe itself. These
contain the appropriate instruction sequences to appear to DTrace as
compiled-in tracepoints. A minimal DOF document is built describing
the provider and indicating these stub functions as the tracepoints,
then submitted to the kernel, creating the provider. The API then
exposes the stubs, through which the probes may be fired.

Status
------

The implementation here works as shown in test_usdt.c on Mac OS X,
i386 and x86_64, on Solaris-like systems, i386 and x86_64 and on
FreeBSD and Oracle Linux, x86_64 only.

Is-enabled probes are supported and exposed in the API.

There is a "test" target which runs a number of tests of the library,
for which perl is required.

OS X builds are Universal by default, and on Solaris, the ARCH
variable may be set to either i386 or x86_64 to force a particular
build.

FreeBSD builds suffer from broken argument handling; this is a known
issue with the current state of DTrace generally on FreeBSD: only the
first five arguments work reliably. See:

  http://wiki.freebsd.org/DTraceTODO

See Also
--------

There are various language bindings available:

Lua:

  https://github.com/chrisa/lua-usdt

Ruby (by Kevin Chan):

  https://github.com/kevinykchan/ruby-usdt

Node.JS:

  https://github.com/chrisa/node-dtrace-provider

Perl:

  https://github.com/chrisa/perl-Devel-DTrace-Provider

To Do
-----

Platform support:

 * add support for FreeBSD 9.0 i386
 * add support for Mac OS X PowerPC
 * add support for Solaris SPARC

Features:

 * add a "low level" API, allowing alternative provision of
   tracepoints for closer integration with language VMs. 

 * support structured types, with close integration with the host
   DTrace system.
