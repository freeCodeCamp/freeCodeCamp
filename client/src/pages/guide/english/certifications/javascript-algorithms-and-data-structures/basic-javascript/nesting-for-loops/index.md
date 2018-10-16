---
title: Nesting For Loops
---
## Nesting For Loops

### Problem Explanation:

_If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays._

_Here is an example:_

```javascript
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

_This outputs each sub-element in  `arr` one at a time. Note that for the inner loop, we are checking the  `.length`of  `arr[i]`, since  `arr[i]` is itself an array._

----------

_Modify function  `multiplyAll` so that it multiplies the  `product` variable by each number in the sub-arrays of  `arr`_

#### Hint 1
Make sure to check with `length` and not the overall array.
> _try to solve the problem now_
> 
#### Hint 2
Remember to select the proper values inside arrays (eg: `arr[i][y]`) when you multiply them with the `product` variable.
> _try to solve the problem now_
> 


## Spoiler alert!

**Solution ahead!**

## Code solution:
```javascript
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i<arr.length;i++){
    for (var y=0; y<arr[i].length;y++){
      product *= arr[i][y];
    }
  }
  // Only change code above this line
  return product;
}
// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
```
·  Run code at [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Nesting-for-loops).

### Code explanation
- A loop is nested inside another. One for the "outer" values (eg: `arr[0]` corresponds to `[1,2]`) and another for the "inner" ones (eg: `arr[0][0]` corresponds to `1`.
 - Both loops run by a limited number of times that are determined by their `condition` statement (eg: `i<arr.length`).
 - Then it multiplies the value stored in the `product` variable by the value corresponding to `arr[i][y]`.
 - The `[final-expression]` on both loops is executed at the end of each one, incrementing their counter variables (`i` and `y` respectively).


### Resources
- ["for" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- ["Nest one Array within Another Array" - *fCC's guide*](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array/)
- ["Accessing Nested Arrays" - *fCC's guide*](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays/)
- ["Iterate Through An Array With A For Loop" - *fCC's guide*](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop/)
