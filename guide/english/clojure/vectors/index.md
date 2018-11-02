---
title: Clojure   Vectors
---
A vector is perhaps the most simple type of collection in Clojure. You can think of it like an array in Javascript. Let's define a simple vector:

    (def a-vector [1 2 3 4 5])
    ;; Alternatively, use the vector function:
    (def another-vector (vector 1 2 3 4 5))
    ;; You can use commas to separate items, since Clojure treats them as whitespace.
    (def comma-vector [1, 2, 3, 4, 5])

You'll see that it uses square brackets, just like an array in JS. Since Clojure, like JS, is dynamically typed, vectors can hold elements of any type, including other vectors.

    (def mixed-type-vector [1 "foo" :bar ["spam" 22] #"^baz$"])

## Adding items to a vector

You can append items to a vector using `conj`. You can also prepend to a list using `into`, but note that `into` is intended for merging two vectors, so both its arguments must be vectors, and using `into` is slower than using `conj`.

    (time (conj [1 2] 3))
    ; => "Elapsed time: 0.032206 msecs"
    ;    [1 2 3]
    (time (into [1] [2 3]))
    ; => "Elapsed time: 0.078499 msecs"
    ;    [1 2 3]

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/wBSUEd' target='_blank' rel='nofollow'>IDEOne it!</a>

## Retrieving items from a vector

You can retrieve items from a vector using `get`. This is equivalent to using bracket notation to access items in an array in many imperative languages. Items in a vector are 0-indexed, counting from the left.

    var arr = [1, 2, 3, 4, 5];
    arr[0];
    // => 1

In Clojure, this would be written like so:

    (def a-vector [1 2 3 4 5])
    (get a-vector 0)
    ; => 1

You can also give `get` a default value, if you give it an index that isn't in the array.

    ;; the list doesn't have 2147483647 elements, so it'll return a string instead.
    (get a-vector 2147483646 "sorry, not found!")
    ; => "sorry, not found!"

## Converting other collections into vectors

Non-vector data structures can be converted into vectors using the `vec` function. With hashmaps, this produces a 2D vector containing pairs of keys and values.

    (vec '(1 2 3 4 5))
    ; => [1 2 3 4 5]
    (vec {:jack "black" :barry "white"})
    ; => [[:jack "black"] [:barry "white"]]

## When to use a vector?

A vector should be used in almost all cases if you need a collection, because they have the shortest random-access times, which makes it easy to retrieve items from a vector. Note that vectors are ordered. If order doesn't matter, it may be better to use a set. Also note that vectors are designed for appending items; if you need to prepend items, you might want to use a list.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Next ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:")](//forum.freecodecamp.com/t/clojure-hashmaps/18414)|  
| [Lists](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [Table of Contents](//forum.freecodecamp.com/t/clojure-resources/18422) | [Hashmaps](//forum.freecodecamp.com/t/clojure-hashmaps/18414)|