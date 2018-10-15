---
title: Higher Order Functions
---
## Higher Order Functions

A Higher Order Function is any function that returns a function when executed, takes a function as one or more of its arguments, or both. If you have used any of the `Array` methods like `map` or `filter`, or passed a callback function to jQuery's `$.get`, you have already worked with Higher Order Functions.

When you use `Array.map`, you provide a function as its only argument, which it applies to every element contained in the array.

```javascript
var arr = [ 1, 2, 3 ];

var arrDoubled = arr.map(function(num) {
  return num * 2;
});

console.log(arrDoubled); // [ 2, 4, 6 ]
```

Higher order functions can also return a function. For example, you can make a function called `multiplyBy` that takes a number and returns a function that multiplies another number you provide by the first number provided. You can use this approach to create a `multiplyByTwo` function to pass to `Array.map`. This will give you the same result you saw above.

```javascript
function multiplyBy(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

var multiplyByTwo = multiplyBy(2);

var arr = [ 1, 2, 3 ];

var arrDoubled = arr.map(multiplyByTwo);

console.log(arrDoubled); // [ 2, 4, 6 ]
```
One amazing example of higher order function is the filter function.

* Filter: It is the function on the array which loops through the array and filter out the value we are looking for.

Below example:
```javascript
var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name:'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'}
]
```
if we wanted to simply return a list of species belonging to <b>dog</b> then, 
```javascript
<!-- without filter -->
var dogs = []
for(var i = 0; i < animals.length; i++) {
  if(animals[i].species === 'dog')
  dogs.push(animals[i])
}
```
Now if we wanted to do the same but this time using filter.

```javascript
<!-- using filter -->
var dogs = animals.filter(function(animal){
  return animal.species === 'dog'
})
```
So what is happening here is that filter function takes in an argument which is another function. A function passed as an argument inside another function is called a callback function.
Here ```function animal()``` is an callback function.

If you see the function has lot less code as compared to the traditional for-loop code. It's not because it's syntax is shorter but because there is lot less logic involved. The only logic used in the filter function in the above example is ```return animal.species === 'dog' ``` which determines which animal goes into the array.

Reason there is a lot less code is also because this code below
<br> ``` for(var i = 0; i < animals.length; i++)```<br>
``` if(animal[i].species === 'dog') ```<br>
``` dogs.push(animals[i]) ``` <br>
is already handled inside the filter function for us so we dont have to worry about it.

The callback function and the filter function just <b>compose</b> in one another.

We can decouple the callback function from the filter function like this...

```javascript
var isDog = function(animal) {
  return animal.species === 'dog'
}
var dogs = animals.filter(isDog)
```

See the guide on <a href='https://guide.freecodecamp.org/javascript/closures' target='_blank' rel='nofollow'>Closures</a> for more information on how `multiplyByTwo` keeps a reference to `num1` in the example above.

<a href='https://eloquentjavascript.net/05_higher_order.html' target='_blank' rel='nofollow'>More info about Closures</a>

[Eloquent Javascript](https://eloquentjavascript.net/05_higher_order.html)

[Medium Article](https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528)