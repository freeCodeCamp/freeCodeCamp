---
title: IEx
---
## IEx (Interactive Elixir Mode)

`iex` is *interactive Elixir*. It is a command-line interface to Elixir or your Elixir application.

`iex` is [REPL][REPL] that allows you to evaluate any statement with immediate feedback. There's no need for compiling any code or putting your code into a script file.

### Getting started

With Elixir installed, you should be able to simply run `iex` from your shell and find something like the following:

```shell
$ iex

Erlang/OTP 21 [erts-10.1.1] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:1] [hipe] [dtrace]

Interactive Elixir (1.7.3) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

Now you can evaluate any valid Elixir statement followed by pressing <kbd>ENTER</kbd> and the result will be displayed on the next line.

```shell
iex(1) 1 + 1
2
```

### Tab completion

`iex` features tab completion. Aside from saving keystrokes, it allows you to see which functions and submodules are available.

For example, type <kbd>Da</kbd><kbd>TAB</kbd>. It should expand to `Date`. Now press <kbd>TAB<kbd> again and you'll see two options: `Date` and `DateTime` as both modules start with `Date`.

Now let's say you want to use a function in the `Date` module but can't remember the name or arity. Type a <kbd>.</kbd> after the module name, press <kbd>TAB</kbd> and you'll see all available functions in the module.

```shell
iex(3)> Date.
Range               add/2               compare/2
convert!/2          convert/2           day_of_week/1
days_in_month/1     diff/2              from_erl!/1
from_erl!/2         from_erl/1          from_erl/2
from_iso8601!/1     from_iso8601!/2     from_iso8601/1
from_iso8601/2      leap_year?/1        months_in_year/1
new/3               new/4               range/2
to_erl/1            to_iso8601/1        to_iso8601/2
to_string/1         utc_today/0         utc_today/1
```

You'll notice that `Range` at the top of the list. This is a submodule of `Date`. You can continue tab completion with submodules or functions.

### Exiting

To exit `iex`, press <kbd>CTRL</kbd>+<kbd>C</kbd> to bring up the break menu. You can press <kbd>a</kbd>, <kbd>ENTER</kbd> or just press <kbd>CTRL</kbd>+<kbd>C</kbd> a second time to exit.

### Cancelling statement evaluation

If you're writing a complex statement and make a mistake, you may be tempted to press <kbd>CTRL</kbd>+<kbd>C</kbd> to cancel statement evaluation as you would in a standard shell. Unfortunately that won't work in `iex` as it just brings up the break menu.

`iex` allows a magic comment of `#iex:break` to be typed any time, followed by <kbd>ENTER</kbd> to abort statement evaluation.

Let's take this example where you are constructing a map and forgot a quote partway through. You pressed enter to evaluate and get stuck at a statement continuation prompt and you want to abort. Just type `#iex:break` followed by <kbd>ENTER</kbd>:

```shell
iex(1)> %{ user: "tom, roles: ["admin", "manager"] }
...(1)> #iex:break
** (TokenMissingError) iex:1: incomplete expression

iex(1)>
```

### Loading your Mix application

`iex` can load a script during startup. A common use for this is loading your `mix.exs` script so that your `iex` session contains your whole application and its dependencies loaded and ready to work with.

```shell
$ iex -S mix
```

#### More Information:

* [Official Elixir Documentation](https://elixir-lang.org/getting-started/introduction.html#interactive-mode)

[REPL]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop
