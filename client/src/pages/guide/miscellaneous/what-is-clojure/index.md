---
title: What Is Clojure
---
## Clojure is a dialect of Lisp.

Lisps are an entirely separate family of languages to C-like languages such as C#, Javascript, Python or Ruby. This means Lisps might look odd to programmers who are more familiar with these languages. Essentially, being a Lisp means that everything in Clojure is a list containing data (even function calls!), it has dynamic typing, and you can define _macros_ that let you manipulate your own code. Here's a simple example of some Clojure for you to examine:

       (defn hello-world [] (println "Hello world!"))

This defines a function (using the `defn` macro) called `hello-world` that takes no input (`[]`) and prints `"Hello world!"` to the console. We can call it like so:

       (hello-world)
       ; => Hello world!
       ;    nil

## Clojure is a functional language.

All variables in Clojure are immutable, and can't be changed using an assignment operator (`=` in most C-like languages) or by a function. All functions aim to be _referentially transparent_, which means that if you give them the same input, they should give the same output no matter what. The `hello-world` example above is referentially transparent - it will always print "Hello world!" no matter what. Something that relies on a random number generator is not referentially transparent, because its output is random.

      (defn random-function []
        (if (> (rand 4) 2)     ; if a random number between 0 and 2 is greater than 2...
          (println "foo")      ; ...print "foo". otherwise...
          (println "bar")))    ; ...print "bar"

While not being able to change variables might sound nightmarish, it's a lot easier than you think, especially if the language is based around it (like Clojure is!), and avoiding unnecessary mutation can make your code much less buggy.

## Clojure runs on the Java Virtual Machine.

The JVM is the virtual machine that interprets Java bytecode and uses it to run a program. This means Clojure works almost seamlessly with code designed for Java (although it does look a bit odd), and it also means that it runs quite quickly compared to some other Lisps. While it's quite a bit slower than Java, it's still a lot faster than Python, Ruby or Javascript.

      (.indexOf [1 2 3 4] 2) ;; .indexOf is a Java method!
      ; => 1

## Clojure is designed for concurrency.

"Concurrency" here means "one program working on multiple threads at once," which can make your code much faster. It can also make your code much buggier; imagine if two different functions were changing and reading from the same object at once! It would be utter chaos. Thankfully, in Clojure, variables are immutable, which means there's no chance of this kind of mayhem breaking loose. The language also has a variety of features to make concurrent code easier, such as the Software Transactional Memory system, agents and atoms.

| ![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Next ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:")](//forum.freecodecamp.com/t/clojure-the-basics/18410)|  
| | [Table of Contents](//forum.freecodecamp.com/t/clojure-resources/18422) | [Basics](//forum.freecodecamp.com/t/clojure-the-basics/18410)|