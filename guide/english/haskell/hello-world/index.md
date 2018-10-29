---
title: Hello World Program
---

## Hello, Haskell!
```haskell
main :: IO ()
main = putStrLn "Hello, World"
```

Wow. That's pretty short. Let's go through it line by line.

We start with a main function.

```haskell
main :: IO ()
```

This first line is the type signature for out main function.
All Haskell main functions have this type (`IO ()`, the `()`
is read as _unit_, and is a special type that has only one
value, `()`). When you want to declare the type of something,
you use the `::` symbol.

```haskell
main = putStrLn "Hello, World!"
```

This line actually defines out main function. Like maths,
Haskell uses the `=` to declare things like functions and
variables, though as you'll see soon enough, they're not like
variables in C or Java. Note that you don't use parentheses!
This allows for some cool stuff like _currying_, which you'll
learn later.

The `putStrLn` function simply takes a string, and returns
`IO ()` which tells the computer to print out our string.
By doing this, Haskell remains pure whilst still being able
to do useful things like interact with the real world.
