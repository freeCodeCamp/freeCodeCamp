---
title: Arrays
---

# Arrays

Arrays are a collection type that stores elements of the **same type** in an **ordered list**.

### Initialization

```swift
//create immutable array.
let oddNumbers: [Int] = [1,3,5,7,9];
let evenNumbers = [2,4,6,8];

//create an empty mutable array
var numbers = [Int]();
```

### Modification
Add a single element to an array
```swift
let someNumber = 0
numbers.append(someNumber)
```

Add multiple elements to an array
```swift
numbers += oddNumbers
numbers.append(contentsOf: evenNumbers)
```

Remove and Insert at Index
```swift
//remove element from an array at index
let removedInt = numbers.remove(at: 4)
//insert element at specific index
numbers.insert(removedInt, at: 4)
```

### Iteration

You can iterate over a set using a for-in loop. Below are two different ways to do essentially the same thing.

```swift
var showNumbers = ""
numbers = numbers.sorted() //sort the numbers in ascending order
for i in 0..<numbers.count {
    showNumbers += "\(numbers[i]) "
}
print(showNumbers);

showNumbers = ""
for i in numbers {
    showNumbers += "\(numbers[i]) "
}
print(showNumbers);
```

The output(s) for the above are "0 1 2 3 4 5 6 7 8 9"

#### More Information: 

* [Arrays](https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html#ID107)
