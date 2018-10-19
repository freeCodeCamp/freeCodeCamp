---
title: Clojure Lists They Are Everything
---
Lists are fundamental to Clojure. Clojure is a Lisp, and Lisps were originally used for list processing. Everything in a Lisp is a list!

    (def foo "bar")

That piece of code is actually a list! So is anything between two round brackets in Clojure. Interesting, isn't it? This is what makes Lisps so interesting - you can easily write code that generates new code, because generating code is as simple as making a list.

## Making an actual list

The problem is, since everything is a list in Clojure, something like this will return an error:

    (1 2 3 4 5)
    ; => ClassCastException java.lang.Long cannot be cast to clojure.lang.IFn

What a horrid error message. What the REPL is trying to tell us is, "1 is not a function, and it can't be made into one." Because everything in a Lisp is a list, the first item of any list is treated as a function, like `def`, `+` or `str`, so if we write `(1 2 3 4 5)`, it treats the first element (`1`) as a function, which it clearly isn't.

We can solve this in two ways. One is using the `list` function to construct a list, like using `str` to concatenate strings together.

    (list 1 2 3 4 5)
    ; => (1 2 3 4 5)

You can also use quoting. Quoting a list essentially says to the compiler that that list is _not_ a function call, and it shouldn't evaluate any of the code inside it.

    '(1 2 3 4 5)
    ; => (1 2 3 4 5)

Interestingly, you can also quote function calls. This is how macros work. They're pretty complex, and deserve their own article, so we won't elaborate here.

    ;; Without a ' to quote it, this would return "foobarbaz".
    '(str "foo" "bar" "baz")
    ; => (str "foo" "bar" "baz")

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/6c7UxY' target='_blank' rel='nofollow'>IDEOne it!</a>

## Adding to a list

Lists are designed for prepending, rather than appending. There is no real way to append to a list. You can prepend to a list using `cons`. `conj` also works, but that's meant for vectors, and `cons` is faster for lists.

    (cons 1 '(2 3 4))
    ; => (1 2 3 4)

## Retrieving from lists

You retrieve items from lists using `nth`. `get` does not work on lists, because lists are designed for sequential access, rather than random access. Note that `nth` works on vectors, but is slower than `get` because of this.

    (nth '(1 2 3 4) 0)
    ; => 1

## Converting other collections into lists

The `list` function can't convert other collections into lists, because it tries to construct a list using the arguments it's given. Passing `list` a collection will return a list containing that collection.

    (list [1 2 3 4 5])
    ; => ([1 2 3 4 5])

To convert to a list, use the `seq` function instead.

    (seq [1 2 3 4 5])
    ; => (1 2 3 4 5)

## Lazy sequences

Clojure has a brilliant feature called 'lazy sequences'. A lazy sequence is a list whose elements aren't generated until you refer to an element of the sequence later, at which point, it evaluates all the elements of the sequence up until the one you want. This allows you to construct "infinite" sequences!

`range` is perhaps the most simple lazy sequence. It contains all numbers.

    (range 10)
    ; => (0 1 2 3 4 5 6 7 8 9)
    (range -5 5)
    ; => (-5 -4 -3 -2 -1 0 1 2 3 4)

You can use lazy sequences to do really cool things, like generating a lazy sequence of all fibonacci numbers.

    (def fibs
         (lazy-cat [0 1] (map + (rest fibs) fibs)))

    (take 10 fibs) ;; this means, "evaluate the first 10 fibonacci numbers."
    ; => (0 1 1 2 3 5 8 13 21 34)

This example is a bit advanced, and you shouldn't be expected to understand it if you're a beginner. It's just an example of something cool you can do with lazy sequences. Perhaps you can figure it out anyway!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/jwpvt8' target='_blank' rel='nofollow'>IDEOne it!</a>

## When to use a list?

Using a vector is usually preferable to using a list, since there's no risk of the compiler accidentally evaluating a vector as a function, and it's faster to access arbitrary elements of a vector. Lists are most useful in 3 cases:

*   Generating code using a macro.
*   Generating "infinite" lazy sequences.
*   Prepending elements to a collection.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous](//forum.freecodecamp.com/t/clojure-collections/18411) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Next ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:")](//forum.freecodecamp.com/t/clojure-vectors/18421)|  
| [Collections](//forum.freecodecamp.com/t/clojure-collections/18411) | [Table of Contents](//forum.freecodecamp.com/t/clojure-resources/18422) | [Vectors](//forum.freecodecamp.com/t/clojure-vectors/18421)|