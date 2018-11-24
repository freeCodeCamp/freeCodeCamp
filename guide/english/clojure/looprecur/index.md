---
title: Clojure   Looprecur
---
You may need to understand [`if`](//forum.freecodecamp.com/t/clojure-conditionals/18412) and [`let`](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) to fully grasp recursion in Clojure.

## `for` and `while`

Clojure does not have for loops or while loops. This makes sense, if you think about it. A `for` loop changes a variable, and that's not allowed in Clojure.

    for (var i = 0; i < 10; i++) {
      console.log(i);
    }

`i++` means that we add one to the variable `i` every time the loop finishes -- a clear example of a variable being mutated.

`while` loops are less obviously reliant on changing variables, but they are, just as much as for loops are.

    var i = 0;
    while (i < 10) {
      console.log(i);
      i++;
    }

`while` loops always have a condition, like `i < 10`, and will break if that condition is no longer true. This means that they have to have some kind of side effect (like adding 1 to `i`) so that the condition will eventually be false; otherwise, the loop would last forever.

## Recursion

Thankfully, Clojure does have one loops of some kind. These loops use recursion -- a function that calls itself. The simplest recursive algorithm is one to find a positive number factorial (5 factorial, for example, equals `5 * 4 * 3 * 2`).

    (defn fact [x]
      (loop [n x prod 1] ;; this works just like a 'let' binding.
        (if (= 1 n)  ;; this is the base case.
          prod
          (recur (dec n) (* prod n)))))

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/3iP3tI' target='_blank' rel='nofollow'>IDEOne it!</a>

You'll notice that `(loop [n x prod 1] ...)` looks quite similar to a `let` binding. It actually works in just the same way -- here, we bind `n` to `x`, and `prod` to 1.

Every recursive function has a "base case". This is the condition that makes the loop stop looping. In this case, our loop stops if `n = 1`, and returns `prod`. If `n` isn't equal to 1, then the loop recurs.

    (recur (dec n) (* prod n))

This `recur` function restarts the loop, but with different bindings. This time, `n` isn't bound to `x`, but is instead bound to `(dec n)` (which means `decrement n`, or `n - 1`), and `prod` is bound to `(* prod n)`.

So when we call the function, this is what happens:

    (fact 5)
    ; Loop 1: 5 != 1, so the loop recurs with 4 (5 - 1) and 5 (1 * 5).
    ; Loop 2: 4 != 1, so the loop recurs with 3 (4 - 1) and 20 (5 * 4).
    ; Loop 3: 3 != 1, so the loop recurs with 2 (3 - 1) and 60 (20 * 3).
    ; Loop 4: 2 != 1, so the loop recurs with 1 (2 - 1) and 120 (60 * 2).
    ; Loop 5: 1 == 1, so the function returns prod, which is now equal to 120.
    ; => 120

The ingenious thing about recursion is that the variables themselves are never changed. The only thing that changes is what `n` and `prod` _refer to_. We never say, `n--`, or `n += 2`.

## Why use loop/recur?

You might be wondering why you would use `loop/recur` rather than simply defining a function that calls itself. Our factorial function could have been written like this:

    (defn fact-no-loop [n]
      (if (= 1 n)
        1
        (* n (fact-no-loop (dec n)))))

This is more concise, and works in a similar way. Why would you _ever_ use loop and recur?

### Tail Call Optimisation

If you use `loop/recur`, then the compiler (the software that turns Clojure code into JVM bytecode) knows that you want to create a recursive loop. This means that it tries its hardest to optimise your code for recursion. Let's compare the speed of `fact` and `fact-no-loop`:

    (time (fact 20))
    ; => "Elapsed time: 0.083927 msecs"
    ;    2432902008176640000
    (time (fact-no-loop 20))
    ; => "Elapsed time: 0.064937 msecs"
    ;    2432902008176640000

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/tpC0Xo' target='_blank' rel='nofollow'>IDEOne it!</a>

At this scale, the difference is negligible. In fact, `fact-no-loop` is occasionally faster than `fact` due to the unpredictable nature of computer memory. However, on a larger scale, this kind of optimisation can make your code much, much quicker.

### Nesting Recursion Within functions

`fact-no-loop` works without `loop/recur` because the entire function is recursive. What if we wanted part of our function to use a recursive loop, and then the rest of it to do something non-recursive? We'd have to define two entirely separate functions. Using `loop/recur` lets us use a little anonymous function instead.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:")](//forum.freecodecamp.com/t/clojure-resources/18422) | Next ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:")|  
| [Let Bindings](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) | [Table of Contents](//forum.freecodecamp.com/t/clojure-resources/18422) | To Be Added |