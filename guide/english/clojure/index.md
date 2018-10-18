---
title: Clojure
---

## Getting Started with Clojure

Before we begin, you may want to <a href='http://clojure.org/guides/getting_started' target='_blank' rel='nofollow'>install Clojure</a> and <a href='http://leiningen.org/#install' target='_blank' rel='nofollow'>Leiningen</a> (which is a tool for managing projects in Clojure). This will let you run Clojure in the command line using a REPL (Read-Evaluate-Print-Loop).

## Defining Variables

The bread and butter of any programming language are variables and functions. Let's define a variable!

    (def our-string "Hello world!")

Easy peasy. That piece of code uses the `def` macro to associate a string (`"Hello world!"`) to a symbol (`our-string`). We could also have defined a number, such as `1` or `1.1`, a character, such as `\a` or `\Z`, or something more complicated like a list or a regular expression (_uuuugh_).

Note that our code is inside parentheses, like a list, because everything in a Lisp is a list! (That will be very important when we start talking about macros.)

## Defining Functions

Now, let's define a function!

    (defn hello-world [] (println our-string))

This is a bit more complex. Like `def`, it uses a macro (`defn`) to create a variable - although this time, that variable is a function. The empty vector (a vector is a type of list -- think of it like an array) after `hello-world` defines the arguments to that function -- in this case, we don't have any. The code after that is what the function does. It evaluates `our-string`, which is equal to `"Hello world!"`, and prints it to the console. Let's run it!

    (hello-world)
    ; => Hello world!
    ;    nil

You could also write this:

    (def hello-world (fn [] (println our-string)))

`defn` is just a shortcut to help keep your code concise. `(defn ...)` and `(def ... (fn ...))` are the same in practice.

## Parameters

Well, that was nice, but it wasn't really exciting. Let's try a function with parameters. How about one that adds 3 numbers?

    (defn add [x y z] (+ x y z))
    (add 1 2 3)
    ; => 6

...Hold on. `(+ x y z)`? That looks funny. Well, Lisps are written using "prefix notation", which means that the function always comes first. Since all mathematical operators in Lisp (`+ - * /`) are just functions, they also come before their arguments (in this case, `x y z`).

You'll notice that our vector has some stuff in it now: `[x y z]`! Whenever a function has parameters, you define them in that vector next to the function's name.

### Destructuring

A great feature about arguments in Clojure is destructuring. It allows you to 'pull' elements out of a list.

    (defn add [[x y] z] (+ x y z))
    (add [1 2] 3)
    ; => 6

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='//ideone.com/SWlvKn' target='_blank' rel='nofollow'>IDEOne it!</a>

The arguments to that function are a collection (`[x y]`) and a number (`z`). We can use destructuring to pull the first and second elements out of the list, and call them `x` and `y`.

### Functions with any number of parameters

You can also define a function with an arbitrary number of arguments using `&`.

    (defn demonstrate-rest [first & rest]
      (println first)
      (println rest))
    (demonstrate-rest 1 "foo" ["bar" 22])
    ; => 1
    ;    ("foo" ["bar" 22])
    ;    nil

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href=('https://ideone.com/VftymP.png?v=2') target='_blank' rel='nofollow'>IDEOne it!</a>

As you can see, using `&` separated our function's arguments into one variable called `first` and a list of variables called `rest`. This means that our function could have any number of arguments!

## Returning

You may have noticed some odd things. Whenever we use `println`, it seems like `nil` is showing up in our output. Furthermore, our `add` function returns `6`, but we never told it to return anything.

In Clojure, returns are 'implicit'. If you've used Ruby, you're probably familiar with this concept. Rather than telling our function to return something, it evaluates all the code inside its body, and returns the result. Our `add` function, for example, evaluates `(+ x y z)`, and then returns that result.

The reason why our functions that use `println` output `nil` is because `println` evaluates to `nil`. (`nil` is like `null` or `None` -- it represents nothing.)

| [![:point_left:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous](https://forum.freecodecamp.com/t/what-is-clojure/18419) | [![:book:](https://forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](https://forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:")](https://forum.freecodecamp.com/t/clojure-resources/18422) | [Next ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:")](https://forum.freecodecamp.com/t/clojure-conditionals/18412)|  
| [Summary](https://forum.freecodecamp.com/t/what-is-clojure/18419) | [Table of Contents](https://forum.freecodecamp.com/t/clojure-resources/18422) | [Conditionals](https://forum.freecodecamp.com/t/clojure-conditionals/18412)|
