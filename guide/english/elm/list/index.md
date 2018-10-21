---
title: List
---
## List

In Elm, a list is a data structure holding zero or more elements. While lists can per se hold elements of any type,
a given list can hold only elements of a single type.

```elm
> [1, 2, 3]
[1,2,3] : List number
```

## Working with lists
The core Elm package provides several useful functions for working with lists:

### filter
filter accepts a predicate and a list and returns a new list containing all elements from the original list
that fulfill the predicate.
```elm
> List.filter (\x -> x > 3) [1, 2, 3, 4, 5, 6 ]
[4,5,6] : List number
``` 

### map
map accepts a transformation function and a list and returns a new list by applying the function to each element
of the original list. The type of the input and output list can be different, e.g. it is possible to convert a 
list of String to a list of Maybe Int:
```elm
> List.map (\x -> String.toInt x) ["1", "2", "3"]
[Just 1,Just 2,Just 3]
    : List (Maybe Int)
```

### take
take accepts a count and a list and returns a new list that contains the first count elements of the input list.
If the input list has fewer than count elements, the whole input list is returned.
```elm
> List.take 3 [1, 2, 3, 4, 5, 6]
[1,2,3] : List number
```

### head
head returns the first element of a list. If the list is empty, it returns Nothing, otherwise Just <first elem>.
```
> List.head [1, 2, 3]
Just 1 : Maybe number
```

### tail
tail returns all but the first elements from the input list. If the list is empty, it returns Nothing, otherwise Just <tail elements>.
```
> List.tail [1, 2, 3]
Just [2,3] : Maybe (List number)
```


#### More Information:
* [elm-lang.org | lists](https://guide.elm-lang.org/core_language.html#lists)
* [package.elm-lang.org | list-extra (convenience functions for working with lists] (https://package.elm-lang.org/packages/elm-community/list-extra/latest)
