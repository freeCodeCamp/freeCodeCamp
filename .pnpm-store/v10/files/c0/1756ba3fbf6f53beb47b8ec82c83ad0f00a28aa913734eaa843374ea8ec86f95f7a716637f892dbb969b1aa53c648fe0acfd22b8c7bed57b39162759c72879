cipher-base
===

[![Build Status](https://travis-ci.org/crypto-browserify/cipher-base.svg)](https://travis-ci.org/crypto-browserify/cipher-base)

Abstract base class to inherit from if you want to create streams implementing
the same api as node crypto streams.

Requires you to implement 2 methods `_final` and `_update`. `_update` takes a
buffer and should return a buffer, `_final` takes no arguments and should return
a buffer.


The constructor takes one argument and that is a string which if present switches
it into hash mode, i.e. the object you get from crypto.createHash or
crypto.createSign, this switches the name of the final method to be the string
you passed instead of `final` and returns `this` from update.
