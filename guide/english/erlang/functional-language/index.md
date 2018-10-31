---
title: Functional Language
---

## Functional Language

The Erlang language features 'concurrency'.
The part of the language not concerned with 'concurrency' is known as the 'sequential subset'.
This subset is a pragmatic functional programming language.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

  * [Wikipedia: Erlang Functional Programming Examples](https://en.wikipedia.org/wiki/Erlang_(programming_language)#Functional_programming_examples)
  * [Wikipedia: Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)
  * [Learn You Some Erlang: Types (or lack thereof)](https://learnyousomeerlang.com/types-or-lack-thereof)
  * [Learn You Some Erlang: Module Declaration](https://learnyousomeerlang.com/modules#module-declaration)

### Erlang as a Functional Programming Language

The Erlang 'sequential subset' features:

  * pattern matching
  * a dynamic type system (strongly typed)
  * referential transparency (immutable data)
  * first class and higher order functions
  * pure functions
  * pure data structures
  * recursion
  * strict (aka eager) evaluation
  * runtime garbage collection
  * list comprehensions

Erlang has no currying, a feature typical of languages that exhibit 'higher order functions'.

Erlang is a 'pragmatic':  I/O and message passing have side-effects but there is no restriction on where these are used.
So while pure functions are the norm, not all functions in Erlang are pure in the strict sense.

### What this means in practice

Most programs are written in 'imperative' or 'procedural' languages.

Some 'imperative' languages have had 'functional' programming added so programmers
may mix code that follows a functional style with code that follows an imperative style as and when they choose.
This halfway house may make functional programming look 'easy'.

Erlang does not support the 'imperative style' at all.
Erlang code appears bewildering at first and the idea of writing Erlang code daunting.

In Erlang you use recursion to express the idea of iteration:
there is no 'for' or 'while' or 'do-while'.
If you think of 'iterate' as what needs to be done and 'for-loop' as simply a way of doing it,
you will able to learn how to use recursion instead.
If you think of 'for-loop' as what needs to be done then you will struggle.

In practice Erlang functions and programs tend to:

  * use recursion to do loops
  * use pattern matching and guards to do conditionals
  * do not have state variables

Erlang uses dynamic typing.
This means you seldom have issues with the compiler telling you cannot do this with that number because it has the wrong number of bits.
Erlang is strongly typed so this does not generally lead to lots of runtime errors.
However, your experience may be different.

In Erlang variables are immutable.
This is an oxymoron.
You do not assign values to variables in Erlang:
you bind a value to a (variable) name and you can do that only once (per recursion).

This affects the way functions are written.
You cannot have 'state variables'.
Instead, if you must have state,
it is passed explicitly by using extra parameters to (usually recursive) functions.

Lists are extremely important data structures in Erlang:
they are analogous to arrays or vectors in other languages.
However, lists cannot be indexed and are generally processed from head to tail.

<!-- EOF --->
