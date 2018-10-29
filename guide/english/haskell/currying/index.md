---
title: Currying
---

## Currying

Currying is the process of translating a function with multiple arguments into a series of functions which each take 1 argument.
Although functions type signatures are written as `fctn :: a -> b -> c -> d`, the right associativity of the `->` operator means that they are effectively `fctn :: a -> (b -> (c -> d))`. 
With this form it becomes clear that each function is itself comprised of functions taking one argument; due to this if we supply a function with a single argument, the function will be partially applied.

```haskell
addThree :: Int -> Int -> Int -> Int --a function which takes 3 Integers and returns an Integer
addThree x y z = x + y + z --This function adds the three arguments

--equivalently the function can be written as addThree :: Int -> (Int -> (Int -> Int))

let addTwoTo5 = addThree 5 --We can partially apply the function by giving it one argument.
addTwoTo5 3 7 == 15 --And then use the partially applied function with only two arguments.
```


### Infixing
Turning operators into functions.

### Uncurry
Converting a curried function to a function on pairs.
