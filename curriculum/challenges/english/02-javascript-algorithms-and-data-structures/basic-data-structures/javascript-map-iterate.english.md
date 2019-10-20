## Description
<section id='description'>
Sometimes when working with arrays, we need to create same modification on each element of array this could be done using loops by loop through each element and performing changes 
But the below method of JS provides a different approach:


```js
let arr=[2, 12, 8, 14, 80, 0, 1];


//we need to add 1 to each element of the array
arr=arr.map((val)=>{return val+1;})
// returns [3, 13, 9, 15, 81, 1, 2]

new Array(4,9,16,25).map(Math.sqrt);
// returns [2,3,4,5]
```

Using a <code>map</code> provides an addition method to iterates through and accesses each element of the array.
## Instructions
<section id='instructions'>
We have defined a function, <code>createArray</code>, which takes <code>age</code>, an array as argument, and returns a new array. Modify the function, using a <code>map</code> function, to return a array of the passed array such that if <code>age >= 18</code>then add true in array else return false.
.
</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function createArray(age){
  let newArr = [];
  // change code below this line

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(createArray([22,12,45,32,5,16]));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function createArray(age){
  let newArr = [];
  // change code below this line
  newArr =age.map((val)=>{return val>=18 ;})
  // change code above this line
  return newArr;
}
```

</section>
