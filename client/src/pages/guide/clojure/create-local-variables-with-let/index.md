---
title: Clojure Create Local Variables with Let
---
`let` is a fundamental part of Clojure. Whereas `def` creates a global variable, `let` creates a local variable.

    (def x 5)
    (println x)
    ; => 5
    ;    nil
    (let [x 2]
      (println x))
    ; => 2
    ;    nil
    (println x)
    ; => 5
    ;    nil

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/xcNth2' target='_blank' rel='nofollow'>IDEOne it!</a>

`x` in this example never actually gets changed. `x` just refers to something different inside of our `let` binding. This can be a useful way to avoid repetition inside a function.

This is incredibly useful. Having too many global variables can lead to nasty bugs and unintended behaviour.

    (def x 5)
    (defn add-5 [y] (+ x y))
    (add-5 5)
    ; => 10
    (defn change-x []
      (def x 6))
    (change-x)
    ; => nil
    (add-5 5)
    ; => 11

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/MFjA3C' target='_blank' rel='nofollow'>IDEOne it!</a>

Uh oh! That's not adding 5 anymore! Of course, this example is a bit silly, but using too many global variables can lead to bugs that are just as scary as this one.

**Note:** We aren't really _reassigning_ `x` here, like you would in a C-like language. We're just creating a new variable that happens to also be called x. This is a _very, very, **very**_ bad idea.

## Multiple Bindings

`let` can also define multiple variables at once, and can assign variables to expressions.

    (let [spam "foo"
          ham (str "b" "ar")] ; str is a function that concatenates strings
      (println spam ham))      ; or converts variables into strings.
    ; => foo bar
    ;    nil

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/y5EBIM' target='_blank' rel='nofollow'>IDEOne it!</a>

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Next ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:")](//forum.freecodecamp.com/t/clojure-loop-recur/18418)|  
| [Conditionals](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [Table of Contents](//forum.freecodecamp.com/t/clojure-resources/18422) | [Loop and Recur](//forum.freecodecamp.com/t/clojure-loop-recur/18418)|