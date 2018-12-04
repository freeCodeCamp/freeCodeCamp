---
title: Haskell
---

## What is Haskell?
Haskell is a standardized, general-purpose, purely functional programming language with declarative and strong static typing.

Haskell has deep roots in mathematics, and you will soon learn to appreciate the implications of it.

## Version
Currently the latest version of GHC is 8.6 (as of 12 Oct 2018)


## Installation
The recommended way to install Haskell is by using stack : <a href='https://docs.haskellstack.org/en/stable/README/#how-to-install' target='_blank' rel='nofollow'>stack download</a>
Stack is a cross-platform program for developing Haskell projects. It is aimed at Haskellers both new and experienced.

To actually start using Haskell you need the GHC (The Glasgow Haskell Compiler), so to setup : <a href='https://docs.haskellstack.org/en/stable/README/#how-to-install://docs.haskellstack.org/en/stable/README/#quick-start-guide' target='_blank' rel='nofollow'>stack setup</a>

```shell
stack new my-project
cd my-project
stack setup
stack build
stack exec my-project-exe
```

A word of cautious, try not to use stack install <package> even though it will install package globally, this is not recommended as different versions of packages are compatible with different versions of GHC. Hence using local copy of package using stack build is best way to follow.

## Hello World

```haskell
main :: IO ()
main = print "Hello Haskell :)"
```
Save above code in a file named "hello.hs" and save.

To compile the Hello World example, this will convert our haskell code to machine understandable bytecodes.
```shell
stack ghc hello.hs
./hello
```

## Documentation
Hackage provides documentation for Haskell


#### More Information
* [Haskell wiki](https://wiki.haskell.org/Haskell)
* [Learn You a Haskell for Great Good](http://learnyouahaskell.com)
* [Try Haskell in your browser](https://www.tryhaskell.org)
