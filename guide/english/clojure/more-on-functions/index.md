---
title: Clojure More on Functions
---
Functions! They're pretty important. It's very difficult to do anything without a function. They're integral to any language, but especially Clojure, since it's a functional programming language that rejects object-oriented design. Let's learn some more about them!

## Arity

**Arity** refers to the number of arguments that your function expects.

    ;; add expects 2 arguments. Its arity is 2.
    (defn add [x y] (+ x y))
    (add 2 2)
    ; => 4

    ;; + itself is a function, and it can have any number of arguments.
    (+ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16) ;; and so on...
    ; => 136

Clojure has some special syntax that allows you to let your function do different stuff depending on the number of arguments it receives. This is called variable arity.

    (defn foo
      ([]                               ; if this function gets no arguments...
        (println "Lisa needs braces!")) ; do this.
      ([arg1]                           ; if this function gets 1 argument...
        (println "Dental plan!")))      ; do this instead!
    (foo)
    ; => Lisa needs braces!
    ;    nil
    (foo "this is a placeholder argument.")
    ; => Dental plan!
    ;    nil

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/sXGplb' target='_blank' rel='nofollow'>IDEOne it!</a>

## Anonymous functions

Let's look at a really simple function: a function that adds 1 to a number.

    ;; I've called this function "my-inc" so you don't confuse it with inc.
    ;; inc is a built-in function that already does this for us.
    (defn my-inc [n] (+ 1 n))
    (inc' 5)
    ; => 6

This looks pretty simple. It takes a single parameter - `n` - and returns `n + 1`. Let's pick it apart.

    (def my-inc-2 (fn [n] (+ 1 n)))
    (inc' 5)
    ; => 6

You can see from this that using `defn` is just shorthand for using `(def ... (fn ...))`. But this reveals something interesting. What we're actually doing isn't 'defining a function', it's just binding an anonymous function to a special name - `inc'`. What if we don't give it a name?

    ((fn [n] (+ 1 n)) 5)
    ; => 6

Bam! Boom! Kapow! Anonymous functions. This might seem useless now, but it comes in pretty handy later on for applying functions to lists using `map`, `reduce` and `filter`. Giving every function you write a name gets boring and cumbersome, fast.

There's a shorter way to write anonymous functions, intended for very short, simple functions. It does not allow for destructuring or variable arity. However, it is quite concise.

    (#(+ 1 %) 5)
    ; => 6

`#(...)` is a shorthand way to define an anonymous function. `%` refers to the first argument to the function. If your function expects several arguments, you can use `%1, %2, ... %n`.

    (#(str %1 %2 %3) "foo" "bar" "baz")
    ; => "foobarbaz"

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/roYRgS' target='_blank' rel='nofollow'>IDEOne it!</a>

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Next ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:")](//forum.freecodecamp.com/t/clojure-collections/18411)|  
| [Loop and Recur](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [Table of Contents](//forum.freecodecamp.com/t/clojure-resources/18422) | <a href='/http://forum.freecodecamp.com/t/clojure-collections/18411' target='_blank' rel='nofollow'>Collections</a>|