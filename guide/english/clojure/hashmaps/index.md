---
title: Clojure Hashmaps
---
A hashmap is a collection that maps keys to values. They have various names in other languages; Python refers to them as dictionaries, and Javascript's objects essentially work like hashmaps.

A hashmap can, like many collections, be constructed in two ways. There is the constructor function:

    ;; Note that each argument is *prepended* to the hashmap, not appended.
    (def a-hashmap (hash-map :a 1 :b 2 :c 3))
    a-hashmap
    ; => {:c 3, :b 2, :a 1}

You can also define them using a hashmap literal. This is often more concise and clear. Using commas to separate key/value pairs in hashmaps is recommended, as it can make the boundaries more clear.

    ;; This hashmap is actually in the right order, unlike the one above.
    (def another-hashmap {:a 1, :b 2, :c 3})
    another-hashmap
    ; => {:a 1, :b 2, :c 3}

## Keywords and retrieving values from hashmaps

Hold up. What is this? `:a`? `:b`? `:c`? Those look odd. Those, you see, are keywords. They're called _key_-words because they're often used as keys in hashmaps.

Why are they often used as keys? Well, unlike strings, keywords can be used as functions to extract values from a hashmap; no need for `get` or `nth`!

    (def string-hashmap {"a" 1, "b" 2, "c" 3})
    ("a" string-hashmap)
    ; => ClassCastException java.lang.String cannot be cast to clojure.lang.IFn

    (def keyword-hashmap {:a 1, :b 2, :c 3})
    (:a keyword-hashmap)
    ; => 1

    ;; You can also pass a keyword a default value in case it's not found, just like get.
    (:not-in-the-hashmap keyword-hashmap "not found!")
    ; => "not found!"

## Converting other collections to hashmaps

Converting to a hashmap is tricky. To demonstrate, let's try using it like `vec` or `seq`.

    (hash-map [:a 1 :b 2 :c 3])
    ; => IllegalArgumentException No value supplied for key: [:a 1 :b 2 :c 3]

The `hash-map` function thinks that we're trying to create a hashmap with `[:a 1 :b 2 :c 3]` as one of the keys. Watch what happens if we give it the right number of arguments:

    (hash-map [:a 1 :b 2 :c 3] "foo")
    ; => {[:a 1 :b 2 :c 3] "foo"}

To convert a sequence to a hashmap, you'll need to use and understand `apply`. Luckily, this is pretty simple: `apply` essentially destructures a collection before applying a function to it.

    ;; These two expressions are exactly the same.
    (+ 1 2 3)
    ; => 6
    (apply + [1 2 3])
    ; => 6

This is how you would convert a vector to a hashmap:

    (apply hash-map [:a 1 :b 2 :c 3])
    ; => {:c 3, :b 2, :a 1}

    ;; This is the same as:
    (hash-map :a 1 :b 2 :c 3)
    ; => {:c 3, :b 2, :a 1}

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/k9cOjo' target='_blank' rel='nofollow'>IDEOne it!</a>

## Update a hashmap

You can update values inside a hashmap using `assoc`. This allows you to append new key/value pairs or change old ones.

    (def outdated-hashmap {:a 1, :b 2, :c 3})

    (def newer-hashmap (assoc outdated-hashmap :d 4))
    newer-hashmap
    ; => {:a 1, :b 2, :c 3, :d 4}

    (def newest-hashmap (assoc newer-hashmap :a 22))
    newest-hashmap
    ; => {:a 22, :b 2, :c 3, :d 4}

    ;; Note that outdated-hashmap has not been mutated by any of this.
    ;; Assoc is pure and functional.
    outdated-hashmap
    ; => {:a 1, :b 2, :c 3}

## When to use a hashmap?

A hashmap is useful when you want to give names to your variables. If you're ever thinking to yourself, _"What if I used an object..."_ before you snap out of it and realise you're using Clojure, try using a hashmap.

They are also useful if you want to associate two different values with each other. Take, for example, a ROT13 cipher: you could associate `\A` with `\N`, `\B` with `\M`, etc. (This would be long and boring to write in most languages, but Clojure has some functions that can generate it for you and make it _fun!_)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous](//forum.freecodecamp.com/t/clojure-vectors/18421) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:")](//forum.freecodecamp.com/t/clojure-resources/18422) | Next ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:") |  
| [Vectors](//forum.freecodecamp.com/t/clojure-vectors/18421) | [Table of Contents](//forum.freecodecamp.com/t/clojure-resources/18422) | To Be Added |