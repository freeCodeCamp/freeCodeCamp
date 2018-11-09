---
title: Arity
---

## Arity

The arity of a function is nothing more than a grand way of saying the number of arguments or operands of a function.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

  * [Wikipedia: Arity](https://en.wikipedia.org/wiki/Arity)
  * [Learn You Some Erlang: Module Declaration](https://learnyousomeerlang.com/modules#module-declaration)

### Arity In Erlang

Arity has greater significance in Erlang than in does in most other languages.
To identify a function in Erlang you need:

  * the module name (usually)
  * the function name
  * the arity.

In Erlang documentation, function references appear as:

```
    hello/0
    lists:zip/2
```

The first of these means "the function hello in this module that takes no parameters",
the second means "the function zip in the lists module that takes two parameters".

## What you can do in Erlang

You can have an internal routine called from the public routine with the same name provided it has a different number of parameters.
With recursion, the extra parameter is often the internal result-so-far that is returned by the public routine
when the recursion has finished.
For example:

```erlang
    % Example of reversing a list

    -module(essay).
    -export([reverse/1]).

    reverse(L) ->
        reverse(L, []).

    reverse([], R) ->
        R;
    reverse([H | T], R) ->
        reverse(T, [H | R]).
```

## What you can't do in Erlang

You cannot have optional arguments but you can have two functions,
one of which calls the other and supplies the default value(s):

```erlang
    -module(greeting).
    -export([hello/0, hello/1]).

    hello() ->
        hello("World").

    hello(Who) ->
        io:format("Hello ~ts!~n", [Who]).
```

You cannot have variadic functions (but variadic macros are possible).
Usually you would pass a list where, in another language,
you might want to pass a variable number of parameters
(c.f. io:format/2 above).

## Where you have to use the arity notation

There are four situations in Erlang source code where
you will encounter, or have to express, the arity of functions:

  * the export statement;
  * the import statement;
  * passing functions to functions
  * binding a function to a variable

The export statement is important: it defines the module's API.

```erlang
    -export([sieve/1, test_version/0]).
```

This statement exports two functions so they may be called from other modules.
All other functions in the module cannot be called from other modules.
That goes for functions with the same name but a different number of parameters.

The import statement is much less important:
it allows functions in other modules to be called without the module prefix.

```erlang
    -import(io, [[format/1, format/2]).
```

It is generally not used.
Many Erlang programmers hold that rather than adding clarity to code,
the use of import often adds ambiguity.

Erlang allows functions, either lambda functions or named functions,
to be passed as arguments to other functions,
In the latter case the 'arity' is required:  it is part of the function's name.

This expression filters elements that are not integers from the list:

```erlang
    lists:filter(fun erlang:is_integer/1, ["one", 1, "two", 2, 3.14]).
```

Likewise, a function may be bound to variable name.
The same rule applies.

```erlang
    Predicate = fun erlang:is_integer/1.
    lists:filter(Predicate, ["one", 1, "two", 2, 3.14]).
```

<!-- EOF -->
