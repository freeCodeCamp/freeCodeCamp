---
title: Arrays
---
## Arrays

Elm does not offer arrays in the strict sense of the word, having lists instead. This is an important distinction, as lists and arrays offer different guarantees regarding the time complexity of their operations. The full API for Elm lists can be found in the [official documentation](https://package.elm-lang.org/packages/elm/core/latest/List).

### Syntax

List literals can be declared in a similar fashion to many other languages:

```elm
[1, 2, 3]
```

The language also offers other utility functions to build lists, like [`singleton`](https://package.elm-lang.org/packages/elm/core/latest/List#singleton), [`repeat`](https://package.elm-lang.org/packages/elm/core/latest/List#repeat), [`range`](https://package.elm-lang.org/packages/elm/core/latest/List#range) and the [cons operator](https://package.elm-lang.org/packages/elm/core/latest/List#::):

```elm
singleton 1 == [1]
repeat 3 0 == [0, 0, 0]
range 0 2 == [0, 1, 2]
1 :: 2 :: 3 :: [] == [1, 2, 3]
```

### Operations

Like expected from a functional language, Elm offers functions like `map`, `filter` and `reduce` (called `foldl` and `foldr` in Elm) for transforming lists. The only difference from JavaScript here is the reduce functions:

- `foldl` applies the reducing function from left to right (i.e. starting from the first element of the list)
- `foldr` applies the reducing function from right to left (i.e. starting from the last element of the list)

Here is an example below (You can try this in the elm repl to understand it better in practice):

```elm
List.foldl (::) [] [1, 2, 3] == [3, 2, 1] -- [] |> (::) 1 |> (::) 2 |> (::) 3
List.foldr (::) [] [1, 2, 3] == [1, 2, 3] -- [] |> (::) 3 |> (::) 2 |> (::) 1
```

The core List library also offers several other functions for sorting, combining and deconstructing lists. A more detailed description of those can be found in the [official documentation](https://package.elm-lang.org/packages/elm/core/latest/List).
