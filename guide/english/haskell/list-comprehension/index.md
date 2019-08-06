---
title: List Comprehensions
---

## List Comprehensions

List comprehensions are a powerful tool in haskell for working with sets.

```haskell
someNumbers :: [Int] # a list of integers containing, 1, 2 and 3
someNumbers = [1,2,3] 

allLower  :: [Char] 
allLower = [toLower c | c <- "Hello, World!" ]

parity :: [(Int, Boolean)]
parity = [ ( x , even x ) | x <- [1,2,3] ]
```
Parity produces the following set: `[ (1, False), (2, True), (3, False) ]`

The right hand side of the list comprehension is composed of two parts; a generator and guards.
