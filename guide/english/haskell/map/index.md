---
title: map function
---

## `map` function

The `map` function is a built-in haskell's function that maps a function to each element of a list and return a new list
with the result. Graphically, it would look like this.
```haskell
map f [1,2,3,4]
-- [f 1, f 2, f 3, f 4]
```

## Signature of `map`

The signature of the map function is as follows
```haskell
map :: (a -> b) -> [a] -> [b]
```

## Examples
```haskell
map succ [1..5]
-- [2,3,4,5,6]

let sample = [(1, 2), (3, 1), (4, 10)]
map fst sample
-- [1,3,4]

map snd sample
-- [2,1,10]

import Data.Char (toLower) # to get the toLower
map toLower "HELLO WORLD HASKELL RULEZ!"
-- "hello world haskell rulez!"
```
