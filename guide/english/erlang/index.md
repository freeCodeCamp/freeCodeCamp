---
title: Erlang
---
## Erlang

Erlang is a functional programming language, developed by Ericsson for use in telecom applications. Because they felt that it's unacceptable for a telecom system to have any significant downtime, Erlang was built to be (among other things):

* distributed and fault-tolerant _(a piece of failing software or hardware should not bring the system down)_
* concurrent _(it can spawn many processes, each executing a small and well-defined piece of work, and isolated from one another but able to communicate via messaging)_
* hot-swappable _(code can be swapped into the system while it's running, leading to high availability and minimal system downtime)_

### Syntax

Erlang makes heavy use of **recursion**. Since data is immutable in Erlang, the use of `while` and `for` loops (where a variable needs to keep changing its value) is not allowed.

Here's an example of recursion, showing how a function repeatedly strips the first letter from the front of a name and prints it, only stopping when the last letter has been encountered.

```erlang
-module(name).

-export([print_name/1]).

print_name([RemainingLetter | []]) ->
  io:format("~c~n", [RemainingLetter]);
print_name([FirstLetter | RestOfName]) ->
  io:format("~c~n", [FirstLetter]),
  print_name(RestOfName).
```

Output:

```
> name:print_name("Mike").
M
i
k
e
ok
```

There is also a heavy emphasis on **pattern-matching**, which frequently eliminates the need for an `if` structure or `case` statement. In the following example, there are two matches for specific names, followed by a catch-all for any other names.

```erlang
-module(greeting).

-export([say_hello/1]).

say_hello("Mary") ->
  "Welcome back Mary!";
say_hello("Tom") ->
  "Howdy Tom.";
say_hello(Name) ->
  "Hello " ++ Name ++ ".".
```

Output:

```
> greeting:say_hello("Mary").
"Welcome back Mary!"
> greeting:say_hello("Tom").
"Howdy Tom."
> greeting:say_hello("Beth").
"Hello Beth."
```

### Mnesia

mnesia is a distributed database management system written in Erlang and highly compatible with Erlang processes.
The following are some of the most important and attractive capabilities provided by Mnesia:

* A relational/object hybrid data model.
* Persistence. Tables can be coherently kept on disc and in the main memory.
* Replication. Tables can be replicated at several nodes.
* Atomic transactions. A series of table manipulation operations can be grouped into a single atomic transaction.
* Extremely fast real-time data searches.

### Try it out

There are websites where you can try running Erlang commands without having to install anything locally, like these:

* [Give it a try! (a hands-on tutorial)](http://www.tryerlang.org/)
* [TutorialsPoint CodingGround](https://www.tutorialspoint.com/compile_erlang_online.php)

If you'd like to install it on your (or a virtual) machine, you can find installation files at [Erlang.org](https://www.erlang.org/downloads) or on [Erlang Solutions](https://www.erlang-solutions.com/resources/download.html).

#### More Information:

* [About Erlang](https://www.erlang.org/about)
* [Learn You Some Erlang for Great Good!](http://learnyousomeerlang.com/)
* [Spawned Shelter!](http://spawnedshelter.com/) _(a collection of articles, videos and books for learning Erlang)_
* [Erlang (programming language)](https://en.wikipedia.org/wiki/Erlang_(programming_language))
