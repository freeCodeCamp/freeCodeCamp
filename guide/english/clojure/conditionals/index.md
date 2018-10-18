---
title: Clojure Conditionals
---
You're not going to get anywhere in a language if all you can do is define functions that print things and do simple arithmetic. Conditionals and logic are a fundamental part of making code that does interesting, useful things. Try and imagine a world without logic in programs: you wouldn't even be able to simple things, like checking if two numbers are equal!

## Logical Operators

Clojure, like most languages, has 3 logical operators: `and`, `or` and `not`. These functions take booleans (`true` or `false`) as arguments, and return booleans based on what those booleans are. Like everything in a Lisp, these operators use prefix notation, which means they might look weird to you.

    (and true false)
    ; => false
    (and true true)
    ; => true
    (or false false)
    ; => false
    (or true false)
    ; => true
    (not true)
    ; => false
    (not false)
    ; => true

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/XfXn8T' target='_blank' rel='nofollow'>IDEOne it!</a>

## If

`if` allows you to execute code based on whether a boolean is `true` or `false`. `if` in Clojure looks quite weird, not because it uses prefix notation, but because there is no else keyword. If the condition is true, it evaluates the first expression. If it's false, it executes the second.

    (if (= (+ 2 2) 4)
      (println "Maths works!") ; this gets evaluated if 2 + 2 = 4
      (println "UH OH"))       ; this gets evaluated if 2 + 2 != 4
    ; => Maths works!
    ;    nil

This presents a problem: what if we want to do multiple things?

    (if (= (+ 2 2) 4)
      (println "Maths works!")
      (println "Maths still works!")
      (println "UH OH"))
    ; => CompilerException java.lang.RuntimeException: Too many arguments to if

Thankfully, we have the `do` function to solve this problem. `do` evaluates multiple expressions, one after the other.

    (if (= (+ 2 2) 4)
      (do                               ; all of this gets evaluated if 2 + 2 = 4
        (println "Maths works!")
        (println "Maths still works!"))
      (println "UH OH"))
    ; => Maths works!
    ;    Maths still works!
    ;    nil

**Note:** since `if` is, itself, an expression, there's no need for a ternary operator like in many C-like languages.

    var doesMathsWork = 2 + 2 === 4 ? "Maths works!" : "UH OH";
    console.log(doesMathsWork);
    // => Maths works!

Now that you've seen how it works, it doesn't look so weird right? This is much easier to read and understand (ignoring the lack of the word `else`):

    (def does-maths-work (if (= (+ 2 2) 4) "Maths works!" "UH OH"))
    (println does-maths-work)
    ; => Maths works!
    ;    nil

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/5XhcAa' target='_blank' rel='nofollow'>IDEOne it!</a>

## Alternatives to If

Clojure also has some macros that behave similarly to `if`, and can sometimes be more concise.

`if-not` is perhaps the most simple example - it's `if` inverted. These two pieces of code are exactly the same:

    (def does-maths-work (if (not (= (+ 2 2) 4)) "UH OH" "Maths works!"))
    (def does-maths-work (if-not (= (+ 2 2) 4) "UH OH" "Maths works!"))

The first expression gets evaluated if it's false, and the second gets evaluated if it's true. Notice that using `if-not` avoids nesting our condition inside `not`, which can help make our code easier to understand.

`when` is another useful macro. These two pieces of code are also the same:

    (if (= (+ 2 2) 4) (do (println "Maths works!") (println "Hooray!")))
    (when (= (+ 2 2) 4) (println "Maths works!") (println "Hooray!"))

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/tUVAw3' target='_blank' rel='nofollow'>IDEOne it!</a>

**Note:** There is no `when/else`. `when` _only_ executes if the condition is true.

`cond` allows you to combine many conditions into a single expression. It takes a sequence of logical expression and expression pairs and evaluate each logical expression in order. When it finds a logical expression that evaluates to `true`, it evaluates the second expression of the pair. After this, no other expressions are evaluated. This behavior is like short-circuit logic in Javascript. 

    (cond (= 0 1) "I'm paired with a false expression and I don't evalute.."
          (= 1 1) "I'm the first expression paired with a true expression!"
          (= 2 2) "I don't evalute even though I'm also paired with true ;_;"
          :else   "I evaluate if no other boolean expressions evaluate to true")
    ; => "I'm the first expression paired with a true expression!"

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/zu5RCq' target='_blank' rel='nofollow'>IDEOne it!</a>
    
The `:else` keyword can be used in place of a logical expression in the last expression pair in `cond`. It signifies that it's corresponding expression should be evaluated if all other boolean expressions evaluate to false. It is the same as putting `true` as the last boolean expression.

## Special Forms and Evalution
You may have noticed that the rules of evaluating conditional expressions is a bit different from other expressions. Conditional expression are a part of a group of expressions called _special forms_. This means that they don't follow normal Clojure evaluation rules.

As you now know, a conditional expression only evaluates the subexpression that corresponds to the boolean result. This means that invalid code within a conditional expression won't be evaluated in some cases. Consider the two `if` expressions below. Although `(+ 1 "failure")` is an invalid expression, Clojure only raises an exception when the condition is `false`.

    (if true "sucess" (+ 1 "failure"))
    ; => "sucess"
    (if false "sucess" (+ 1 "failure"))
    ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ...

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/n4Ug2S' target='_blank' rel='nofollow'>IDEOne it!</a>

Compare this with the behavior of `my-if` defined below:

    (defn my-if [condition true-case false-case]
      (if condition true-case false-case))
    
    (my-if true "sucess" (+ 1 "failure"))
    ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ...

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://ideone.com/U7cVI4' target='_blank' rel='nofollow'>IDEOne it!</a>

`my-if` is a function with normal evaluation rules, so all of it's subexpressions must be evaluted before it can be evaluted.

Clojure has plenty of useful macros like these for all kinds of tasks. Try having a look at <a href='https://clojuredocs.org/' target='_blank' rel='nofollow'>the Clojure documentation</a> and see if you can find any more!

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Next ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:")](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415)|  
| [Summary](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [Table of Contents](//forum.freecodecamp.com/t/clojure-resources/18422) | [Conditionals](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415)|
