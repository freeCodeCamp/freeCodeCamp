---
title: Names
---

## Names

All programming languages have conventions concerning names.
Erlang is no different but some of these conventions are, in fact, part of the language.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

  * [Learn You Some Erlang: Invariable variables](https://learnyousomeerlang.com/starting-out-for-real#invariable-variables)
  * [Learn You Some Erlang: Atoms](https://learnyousomeerlang.com/starting-out-for-real#atoms)
  * [Erlang Reference Manual: Preprocessor](http://erlang.org/doc/reference_manual/macros.html)
  * [Unicode Implementation](http://erlang.org/doc/apps/stdlib/unicode_usage.html#unicode-implementation)

### Names in Erlang

In Erlang, the names of 'variables' begin with an upper case letter
(which is not how variables are named in most other languages).

Other primitives have names that start with a lower case letter:

  * atoms
  * functions

There are also preprocessor macros.
When used in code, their names are preceded by a ?:

```erlang
    -define(SPACE, $\s).

    without_spaces(String) ->
        [C || C <- String, C /= ?SPACE].
```

Macro names are generally all upper case but this is not a requirement.

The underscore may appear in names.
Erlang programmers favour 'snake case' over 'camel case'.

By convention a leading underscore indicates a placeholder:
a variable whose value is not going to be used.
However, it has a value and this is immutable as with other variables.

Except for a single '_'.  This too is a placeholder but
it will match anything and cannot be bound to a value.
It may, therefore, be used as often as necessary.

Atoms are names whose value is the name.
Few programming languages have atoms or anything equivalent.

Atoms may be enclosed in apostrophes (as in 'true' and 'false').
They may contains spaces, in which case the name must be enclosed in apostrophes.

Do not confuse these with _strings_, which are enclosed in quotes:

```erlang
    1> 'Hello World' /= "Hello World".
    true
```

Erlang has 30 or so 'reserved' words and a larger number of built-in-functions (BIFs)
whose names all begin with a lower case letter.
Do not attempt to use these names for your own functions.

Erlang functions are first class.
A consequence of this is variables can be bound to functions (including, and especially, lambda functions)
just as they can be bound to numbers.

It will look like the variable is being called as if it where a function.
Indeed is it but this can be confusing.

Erlang documentation recommends functions that do the same thing in different modules have the same name.
This is not polymorphism.

Programming languages do not impose conventions on the names of functions.
Programmer cabals usually do.

Many conventions recommend "meaningful" names.
Bear in mind that with a programming languages with 'pure functions' and no side-effects,
it makes more sense to name functions by what they return rather than what they do.

Erlang encourages short functions, which, in turn, allows for shorter descriptions.
If you find you need impossibly long names for your functions,
consider splitting them into smaller ones.

### Unicode names in Erlang

Finally a note on Unicode.

Erlang pre-dates Unicode and, as with many other languages,
used to use ISO Latin-1 through out.
Unicode support has been added over a number of releases.

Erlang uses UTF8 (not UTF16).

Since Erlang/OTP 17.0, Erlang source files are by default encoded in Unicode.

Since Erlang/OTP 20.0, names of atoms, functions and variables may contain (alphabetic) Unicode characters.
However, module (and application and node) names must still be ISO Latin-1.

<!-- EOF -->
