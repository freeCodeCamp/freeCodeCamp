---
title: Pure Functions
---

## Pure Functions

The concept of 'pure functions' is not difficult to grasp but it is more difficult to grasp just how important
the concept is to functional programming and how programmers reason about code.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

  * [Wikipedia: Pure functions](https://en.wikipedia.org/wiki/Pure_function)
  * [Learn You Some Erlang: Errors and Exceptions](https://learnyousomeerlang.com/errors-and-exceptions)

### What is a Pure Function ?

Think of a subroutine that returns no value at all.
Well, if it serves any useful purpose, it must do so by side-effects:
it may change global data, it may be a method changing the state of an object, it may do I/O.

This is technically a (pure) procedure.
Pure procedures are rare as usually at least a code indicating success / failure is returned.

Consider a subroutine that returns a value and has no side-effects (e.g. square_of/1).
This is a pure function.

Most programming languages allow a subroutine to be both a procedure with side-effects and a function with a return value.

In functional programming languages, functions are pure (or tend to be) and there are no procedures.
What are the consequences ?

### Consequences of using Pure Functions

A pure function, given the same input, will always produce the same result.
This offers compilers more scope for optimisation.

Compilers can examine an entire program to deduce which functions are pure and which are not.
A programmer cannot do this for a program of any size (even one they wrote themselves).

They can study a subroutine and say "assuming everything else stays the same, it does this" but often checking
that everything else stays the same is a lot more effort than studying the subroutine.

In a language where all functions are pure, the assumption is guaranteed.
This simplifies greatly the task of maintaining large applications:
you can change an individual function with confidence that there will be no unintended side-effects.

### Limitations of a Pragmatic Functional Programming Language

While most functions in Erlang are pure, there are certain features of the language that produce impure functions with side effects:

  * functions may do I/O - I/O has side effects,
  * actors send messages to one another - see the concurrent half of Erlang,
  * functions may throw exceptions.

The first two are generally confined to small sections of code so the impurity is not widespread:
printing out some values for debug or logging purposes in one routine
does not suddenly mean all the functions around it are under serious threat from side-effects.

Throwing exceptions is a very bad idea.
It is a double-edged side-effect often there to force some function to clean up another function's run-time mess.

The Erlang philosophy is "Let it crash" so, in general Erlang programmers ignore this side-effect too.

The "Let it crash" philosophy is controversial.

In large, concurrent, Erlang applications, the view is that high reliability is achieved by
allowing the individual parts of the application to crash and be replaced without stopping the application.
By failing early, rather than trying to carry on,
the failed part is less likely to compromise the application or its data.
Developers can examine the crash and even load a fix without stopping the application.

Throwing an exception becomes a flag that says "If you want to get to the bottom of this bug, dig here".

### How to return errors from functions

Pure functions are all very well but what happens when the arguments to a function means the function cannot determine the result ?

When it is known that this will happen and the caller may reasonably be expected to go to Plan B,
it makes sense for the function to return a 'return code' as well as the 'return value'.

This can be done using a tuple:

```Erlang
    % in the called function ...

    if Y /= 0 -> {ok, X / Y};
       y == 0 -> {err, 0}.
```

and:

```Erlang
    % in the caller ...

    case safe_divide(X,Y) of
        {ok, Result} -> format("That worked");
        {_, _} -> format("Oops, again");
    end
```

<!-- EOF -->
