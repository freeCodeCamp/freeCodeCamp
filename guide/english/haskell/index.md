---
title: Haskell
---

## What is Haskell?
Haskell is a standardized, general-purpose, purely functional programming language with declarative and strong static typing.

Haskell has deep roots in mathematics, and you will soon learn to appreciate the implications of it.

## Version
Currently the latest version of GHC is 8.6 (as of 12 Oct 2018)


## Installation
The recommended way to install Haskell is by using stack. <a href='https://docs.haskellstack.org/en/stable/README/#how-to-install' target='_blank' rel='nofollow'>[How to install the Haskell tool stack]</a>
Stack is a cross-platform program for developing Haskell projects. It is aimed at Haskellers both new and experienced.

To actually start using Haskell you need the GHC (The Glasgow Haskell Compiler), so to setup : <a href='https://docs.haskellstack.org/en/stable/README/#quick-start-guide' target='_blank' rel='nofollow'>[How to set up stack]</a>

```shell
stack new my-project
cd my-project
stack setup
stack build
stack exec my-project-exe
```

A word of caution, try not to use stack install <package> even though it will install the package globally, this is not recommended as different versions of packages are compatible with different versions of GHC. As such it's best to use local copies of packages with stack build.

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
<a href='https://hackage.haskell.org' target='_blank' rel='nofollow'>Hackage</a> provides documentation for Haskell packages.



## Want to learn more?
* <a href='https://wiki.haskell.org/Haskell' target='_blank' rel='nofollow'>Haskell wiki</a>
* <a href='http://learnyouahaskell.com/' target='_blank' rel='nofollow'>Learn You a Haskell for Great Good </a>
