---
title: Lists
---

Lists are a widely used datatype in Haskell. In fact, if you have used strings you've used Haskell's lists!

# Definition
Haskell's lists are recursively defined as follows:

```haskell
data [] a     -- A List containing type `a`
  = []        -- Empty list constructor.
  | a : [a]   -- "Construction" constructor, a.k.a. cons.
```

Notice that lists in Haskell are not arrays, but linked lists.

The following are examples of lists:

```haskell
empty :: [()]
empty = []

ints :: [Int]
ints = 1 : 2 : 3 : []
```

There's syntactic sugar for making lists as well:

```haskell
bools :: [Bool]
bools = [True, False, False, True]  -- True : False : False : True : []
```

`String` is just an alias for `[Char]`!

```haskell
chars :: [Char]
chars = "This is a character list!"
```

# Functions
Lists have many different built in functions. Here's a few:

```haskell
-- Concatenation:
-- Stick two lists together.
greeting :: String
greeting = "Hello, " ++ "World!"    -- "Hello, World!"

-- Map:
-- Appy some function to overy element.
abc :: [Int]
abc = map succ [0, 1, 2]            -- [1, 2, 3]
```

# Pattern matching
You can easily pattern match lists to easily recurse over them.

```haskell
map' :: (a -> b) -> [a] -> [b]
map' _ [] = []                        -- Base case.
map' f (a:as) = f a : map' f as       -- Recursive case.
```
