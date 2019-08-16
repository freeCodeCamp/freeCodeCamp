---
title: Accessing Nested Arrays
---
# Accessing Nested Arrays


---
## Hints

### Hint 1
Accessing elements within an array using bracket notation `[]`
```js
var fruitBasket = ["apple", "banana", "orange", "melon"];
var favoriteFruit = fruitBasket[2];

console.log(favoriteFruit); // 'orange'
```
In this example, our favourite fruit is 'orange' which is at index `2` in the `fruitBasket` array. Using braket notation, we assign index `2` of the `fruitBasket` array to `favoriteFruit`. This makes `favoriteFruit` equal to 'orange'.
  
### Hint 2
Accessing objects within arrays using braket `[]` and dot `.` notation
```js
var garage = [
  {
    type: "car",
    color: "red",
    make: "Ford"
  },
  {
    type: "motorbike",
    color: "black",
    make: "Yamaha"
  },
  {
    type: "bus",
    color: "yellow",
    make: "Blue Bird"
  }
];

var busColor = garage[2].color; // 'yellow'
```


---
## Solutions
<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
// Setup
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1];
```
</details>