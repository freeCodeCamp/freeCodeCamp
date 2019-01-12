---
title: Array.prototype.reduce
---
## Array.prototype.reduce

The `reduce()` method reduces an array of values down to just one value. 

The single value that is returned can be of any type. 

### Example 1
Transform an array of integers into the sum of all integers in the array. 
```js
    var numbers = [1,2,3]; 
    var sum = numbers.reduce(function(total, current){
        return total + current;
    });
    console.log(sum); 
```
This will output `6` to the console.

### Description
The `reduce()` method has been called the Swiss Army knife, or multi-tool, of array transformation methods. Others, such as `map()` and `filter()`, provide more specific transformations, whereas `reduce()` can be used to transform arrays into any output you desire.

### Syntax
```js
    arr.reduce(callback[, initialValue])
```
- The `callback` argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.
    - *accumulator* - the returned value of the previous iteration
    - *currentValue* - the current item in the array
    - *index* - the index of the current item 
    - *array* - the original array on which reduce was called
- The `initialValue` argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function (see Example 2 below). If `initialValue` is not provided, the iteration will start at the second element in the array (at index 1), with `accumulator` equal to the first element in the array and `currentValue` equal to the second element. 

### Example 2
Transform an array of strings into a single object that shows how many times each string appears in the array. 

Notice this call to reduce passes an empty object `{}` as the `initialValue` parameter. This will be used as the initial value of the accumulator (the first argument) passed to the callback function. 
```js
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        // if the pet doesn't yet exist as a property of the accumulator object, 
        //   add it as a property and set its count to 1
        obj[pet] = 1;
    } else {
        // pet exists, so increment its count
        obj[pet]++;
    }
    return obj; // return the modified object to be used as accumulator in the next iteration
}, {}); // initialize the accumulator as an empty object

console.log(petCounts); 
```
Output: 
```js
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
 ```

## More Information:
- [How JavaScript’s Reduce method works, when to use it, and some of the cool things it can do](https://medium.freecodecamp.org/reduce-f47a7da511a9)
- [Advanced Reduce](https://www.youtube.com/watch?v=1DMolJ2FrNY)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
