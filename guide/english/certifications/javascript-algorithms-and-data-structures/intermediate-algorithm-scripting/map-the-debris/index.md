---
title: Map the Debris
---
# Map the Debris

---
## Problem Explanation

The first thing to do is to get familiar with what the program is for by knowing what Orbital period exactly is. You've to return a new array that transforms the element's average altitude into their orbital periods. The parts generally found hard are finding the formula, implementing it and for some people, modifying objects by the key. However, something that is not very clear is the fact that your program has to be able to check for any number of objects in the array; This is what is tested on the second part.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Orbital_period' target='_blank' rel='nofollow'>Orbital period</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object' target='_blank' rel='nofollow'>JS Objects</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI' target='_blank' rel='nofollow'>Math.PI</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-math-pow/14685' target='_blank' rel='nofollow'>JS Math Pow</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt' target='_blank' rel='nofollow'>Math.sqrt()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round' target='_blank' rel='nofollow'>Math.round()</a>


---
## Hints

### Hint 1

The formula needed is:

![](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e212370f07c55165ff69f318ee1eed24779c7532.png)

### Hint 2

Use `Math.round()` to round up to the next whole number as requested. Using `Math.ceil()` will let you pass the first test but fail the second one.

### Hint 3

Find out how to remove and add key to a JavaScript object.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```

#### Code Explanation

*   **GM** and **earthRadius** are both given to us.
*   To make the code easier to edit and read, each part of the equation is written separately.
*   Create **newArr** to store the `orbPeriod`'s.
*   **a** is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
*   Create a function, `gerOrbPeriod()` that will do the required work for any amount of objects.
*   **c** is (**earthRadius** + **avgAlt**) to the cube.
*   **b** is the square root of **c** divided by **GM**.
*   Create **orbPeriod** to store the product of **a** and **b**, with the `Math.round()` function applied to round up to the next whole number.
*   Then we delete the key **avgAlt**, and add the new key and its value.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-for-in-loop/14665' target='_blank' rel='nofollow'>JS For In Loop</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>JS Array Prototype Push</a>
</details>


<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  //Looping through each key in arr object
  for (var prop in arr) {
    //Rounding off the orbital period value
    var orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
    );
    //deleting the avgAlt property
    delete arr[prop].avgAlt;
    //adding orbitalPeriod property
    arr[prop].orbitalPeriod = orbitalPer;
  }

  return arr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```


#### Code Explanation

*   **GM** and **earthRadius** are both given to us.
*   A `for..in` loop is used to iterate through each value in given array **arr**.
*   **orbitalPer** holds the value of orbital period for each iteration calculated using the formula.
*   The key **avgAlt** is deleted, and **orbitalPer** found is assigned in **arr**.
</details>


<details><summary>Solution 3 (Click to Show/Hide)</summary>

```javascript
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop through each item in the array arr
  arr.forEach(function(item) {
    // Calculate the Orbital period value
    var tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });
  return arr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```


#### Code Explanation

*   **GM** and **earthRadius** are both given to us.
*   The `forEach()` method is used to execute the function once per element (**item**) in **arr**.
*   **tmp** holds the value of orbital period for each element calculated using the formula.
*   The key **avgAlt** is deleted, and orbital period (**tmp**) found is assigned to the key **orbitalPeriod**.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290' target='_blank' rel='nofollow'>JS Array Prototype ForEach</a>
</details>

