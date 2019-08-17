---
title: Haskell
---

## What is Haskell?
Haskell is a standardized, general-purpose, purely functional programming language with declarative and strong static typing.

Haskell has deep roots in mathematics, and you will soon learn to appreciate the implications of it.

## Why learn Haskell?
* If you've never used a functional programming language, the only gain in learning Haskell would be to expand your mind and broaden your thinking scope. 
* Functional langauges tend to more terse.
* Functional languages encourage quick prototyping.
* If you've ever tried using mutithreading before, functional languages allow for safe multithreading.
* As far as Haskell is concerned: 
  * The syntax is clear,concise and intuitive with inspiration from mathematical notation.
  * List Comprehension is another great feature.
  * It allows you to create Lambda expressions which allows for better handling of more complex formulae.
  * Lazy evaluation: If something causes an error, it won't pop up unless you use the result. This can be both good and bad.
  * You can basically create anything that you could normally create with any general-purpose language.
 
In a nutshell, you'd do so to expand your thinking ability(isn't that what everyone strives for?).
  

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
  
## Structure of a Haskell Function
A Haskell function declaration has a name and type identifiers
```haskell
name :: type
name = expression
```
For example, this function squares an Integer
```haskell
square :: Integer -> Integer
square n = n * n 
```

The last type value is the return value, in the case above it takes a single integer and returns a single integer.

## Hello World

```haskell
main :: IO ()
main = print "Hello Haskell :)"
```
Save the code above in a file named "hello.hs".

You can use ghc to convert our haskell code to machine understandable bytecodes.
```shell
stack ghc hello.hs
./hello
```

Alternatively, you can use `runhaskell` to skip the compiling step.

```shell
stack runhaskell hello.hs
```

## Documentation
Hackage provides documentation for Haskell


#### More Information
* [Haskell wiki](https://wiki.haskell.org/Haskell)
* [Try Haskell in your browser](https://www.tryhaskell.org)
* [Write yourself a Scheme in 48 hours](https://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours/First_Steps)
* [What is Haskell used for in the real world?](https://stackoverflow.com/questions/1604790/what-is-haskell-used-for-in-the-real-world)
