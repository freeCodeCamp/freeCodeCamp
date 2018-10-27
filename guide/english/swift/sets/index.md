---
title: Sets
---

# Sets 

Sets are a collection type that stores an **unordered list** of **distinct** values of a given type. They are useful when the order of your elements do not matter, and also when you want to ensure that an element only occurs once.

### Initialization

Creating an empty Set...
```swift
var integerSet = Set<Int>()
```

Using Arrays to Create Sets...
```swift
let posSet: Set<Int> = [0,1,2,3,4,5]
let negSet: Set = [-1,-2,-3,-4,-5]
```

### Set Modification

Insert and Remove an element from a set.

```swift
integerSet.insert(10312018) //insert the integer "10312018" into the set
integerSet.remove(10312018) //remove the integer "10312018" from the set
```

### Set Operations

There are four fundamental set operations that can be performed on sets: union, intersection, subtraction, and symmetric difference 

_Note_: The **sorted()** method used in the proceeding code, returns an array of the the elements of the set sorted in ascending order. It is primarily used in the below code for clarity.

**_Union_:** combines the elements of two sets

```swift
integerSet = integerSet.union(posSet) // performs a union operation that returns a new set
integerSet.formUnion(negSet) // performs a union operation that modifies the current set

integerSet.sorted() // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
```

**_Intersection_:** forms a set from only the common values of two sets

```swift
let oddSet: Set = [1,3,5,9]
let _ = integerSet.intersection(oddSet).sorted(); // [1,3,5]
```

**_Symmetric Difference_:** forms a set from the values that are not common in both sets.
```swift
let inbetweenSet: Set<Int> = [-4,-3,-2,-1,0,1,2,3,4]
let _ = integerSet.symmetricDifference(inbetweenSet).sorted() // [-5,5]
```

**_Subtraction_:** : forms a set with values not in the specified set.
```swift
integerSet.subtract(negSet)
integerSet.sorted() // [0, 1, 2, 3, 4, 5]
```

### Iterating Over a Set

You can iterate over a set by using a for-in loop...
```swift
var showSet = "";
for item in integerSet {
    showSet += "\(item) "
}
print(showSet) 
```
The output for the above code is going to be along the lines of "1 5 4 3 0 2"... which of course is not in order. To iterate over a set in an orderly fashion use the sorted() method...

```swift
showSet = "";
for item in integerSet.sorted() {
    showSet += "\(item) "
}
print(showSet)
```
Output: "0 1 2 3 4 5" 


#### More Information:

* [The Swift Programming Language](https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html#ID484)

