---
title: Shell
---

## Shell

Erlang has a shell that can be use as an interpreter.
It can be used as an informal environment in which to try out and test Erlang expressions and simple scripts.

Note that the Erlang shell is the console for the Erlang virtual machine (known as BEAM).
It is console first, interpreter second and is in some respects awkward and in others limited.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

  * [Learn You Some Erlang: Starting Out](https://learnyousomeerlang.com/starting-out)


### Entering and Leaving the Shell

Once Erlang has been installed on your PC, the shell may be invoked from the command line terminal
by entering `erl`:

```bash
    $ erl
    Erlang/OTP 19 [erts-8.1] [source-e7be63d] [64-bit] [smp:2:2] [async-threads:10] [hipe] [kernel-poll:false]

    Eshell V8.1  (abort with ^G)
    1>
```

To leave the shell again enter `q().`

```
    1> q().
    ok
    2> $
```

There may be a short pause before the command line prompt appears.
If you are in a hurry you may use ^G followed by q (lower case).
Entering ^C twice will also exit the Erlang shell abruptly.

Note `q().` with a full-stop at the end.
The full-stop is a hangover from the early days of Erlang when it ran on top of a Prolog interpreter.

The full-stop is required.  This may take some getting used to.
If you type in a command and get no response after a second or two,
check that you entered the full-stop.
If not, enter the full-stop and press the carriage return or enter key again.

### Use of the Shell

The shell will evaluate Erlang expression and print the result (don't forget the full-stop):

```erlang
    2> (1 + 1) * 16 .
    32
    3>
```

You can bind a value to a variable:

```erlang
    3> Joe = 6 .
    6
    4>
```

You cannot simply bind a new value to a variable
(variables are immutable in the shell too):

```erlang
    4> Joe = 8 .
    ** exception error: no match of right hand side value 8
    5>
```

However, the shell has a special function that allows you to unbind a variable.
Then it can be bound once more.

```erlang
    5> f(Joe) .
    ok
    6> Joe = 8 .
    8
    7>
```

There are a number of functions specific to the shell (not available to Erlang scripts and programs).
For a list, enter `help().`
For a history of what you have entered so far, use `h().`.

You may call BIFs (built in functions):

```erlang
    8> Pi = 3.14 .
    3.14
    9> is_integer(Pi) .
    false
    10>
```

Most of the Erlang runtime support is already loaded but you will need to use the _module:function_ syntax to invoke them:

```erlang
    11> List = ["one", "two", "three"] .
    ["one","two","three"]
    12> lists:reverse(List) .
    ["three","two","one"]
```

To find out which modules are loaded, enter `m().`

All functions in Erlang belong to a module.
This is part of the reason why you cannot define functions in the shell.

You can, however, define lambda functions and bind them to variable names:

```erlang
    12> AddTen = fun(X) -> X + 10 end .
    #Fun<erl_eval.6.52032458>
    13> AddTen(1) .
    11
    14>
```

This is not really suitable for anything but the most trivial functions.
See next for anything larger.

### How Run and Test Simple Functions using the Shell

The notes in this section show how to use the shell to run and test single functions
without going to the lengths of setting up a proper test harness.

Suppose you have been asked to write a function that takes a year number as its parameter and
returns true if the number represents a leap year, false otherwise.

Suppose your solution is in the file _leap.erl_ and looks a lot like:

```erlang
    -module(leap).

    -export([leap_year/1]).

    year(Year) ->
        case Year of
            _ when Year rem 400 == 0 ->
                true;
            _ when Year rem 100 == 0 ->
                false;
            _ when Year rem 4 == 0 ->
                true;
            _ ->
                false
        end.
```

The problem now is how to test the solution.

First you need to be 'in the right directory' (or folder if you prefer):

```erlang
    % what directory am I in ?
    14> pwd().
    /home/fcc/guides/erlang/shell

    % is the source file in here ?
    15> ls().
    index.md

    % guess not - is in an adjacent directory ?
    16> ls("../examples").
    leap.erl

    % good - change directory:
    17> cd("../examples").
```

Now compile and load the module leap (one command):

```erlang
    18> c(leap).
    {ok,leap}
```

Now test the function by simply calling it with suitable values:

```erlang
    19> leap:year(2018).
    false
    20> leap:year(2020).
    true
    21> leap:year(1066).
    false
    22> leap:year(2000).
    true
    23> leap:year(1100).
    false
    24>
```

If you decide the function does not work, edit and save the source file,
compile and load the module again and test.
Repeat until satisfied.

<!-- EOF -->
