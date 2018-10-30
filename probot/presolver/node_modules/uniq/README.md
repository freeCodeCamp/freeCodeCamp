uniq
====
Removes all duplicates from an array in place.

Usage
=====
First install using npm:

    npm install uniq
    
Then use it as follows:

```javascript

var arr = [1, 1, 2, 2, 3, 5]

require("uniq")(arr)
console.log(arr)

//Prints:
//
//  1,2,3,5
//
```

## `require("uniq")(array[, compare, sorted])`
Removes all duplicates from a sorted array in place.

* `array` is the array to remove items from
* `compare` is an optional comparison function that returns 0 when two items are equal, and something non-zero when they are different.  If unspecified, then the default equals will be used.
* `sorted` if true, then assume array is already sorted

**Returns:** A reference to `array`

**Time Complexity:** `O(array.length * log(arra.length))` or `O(array.length)` if `sorted`


## Why use this instead of underscore.uniq[ue]?
A few reasons:

* This library updates the array in place without making an extra copy (and so it is faster for large arrays)
* It also accepts a custom comparison function so you can remove duplicates from arrays containing object
* It is more modular in the sense that it doesn't come with a bazillion other utility grab bag functions.

# Credits
(c) 2013 Mikola Lysenko. MIT License
