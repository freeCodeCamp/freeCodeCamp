---
title: Destructuring
---
## Destructuring Assignment
The destructuring assignment syntax is a way to "unpack" values from arrays, properties from objects, or any other iterable, into distinct variables.
Since ```Arrays``` and ```Objects``` are the most commonly data structures used in JavaScript then the usage of destructuring can be extremely handy for data manipulation and code clarity.

## Array Destructuring
Given the array below
``` javascript
const fruits = ['apple', 'banana', 'orange', 'tangerine'];
```
The tranditional way of getting these values into separate variables would be:
``` javascript
const firstFruit = fruits[0];   // apple
const secondFruit = fruits[1];  // banana
const thirdFruit = fruits[2];   // orange
const fourthFruit = fruits[3];  // tangerine
```
With destructuring this can be a one-liner assignment:
``` javascript
const [firstFruit, secondFruit, thirdFruit, fourthFruit] = fruits;
```
This assigns in every variable from the left-side the corresponding value from the array on the right in order of appearance, meaning we get the same result as the tranditional way.

We can also get the first element of the array when we don't care about the rest:
``` javascript
const [firstFruit] = fruits;
```
Or just the second by ignoring the first one and so on:
``` javascript
const [, secondFruit] = fruits;  //ignores the first fruit
const [,, thirdFruit] = fruits;  //ignores first and second fruit
```

Additionaly we can use the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters' target='_blank' rel='nofollow'>`rest-parameter`</a> to get some values and then pack the remaining in another variable:
``` javascript
const [firstFruit, ...otherFruits] = fruits;  // firstFruit = 'apple', otherFruits = ['banana', 'orange', 'tangerine'] 
```

It has to be mentioned that default values can be also declared to prevent variable of lack of values. Of course if a value was present then the default value would be ignores.:
``` javascript
const [firstFruit, secondFruit='tangerine'] = ['apple'];  // firstFruit = 'apple', secondFruit = 'tangerine'

const [firstFruit, secondFruit='tangerine'] = ['apple', 'banana'];  // firstFruit = 'apple', secondFruit = 'banana'
```

## Object Destructuring
The same technique can be used to get specific properties of an object in disctinct variables
``` javascript
const fruit = { name: 'apple', color: 'red', season: 'autumn' };
const { name, color, season } = fruit; // name = 'apple', color = 'red', season = 'autumn'
```

The rest parameter can be used to assing all remaining properties in a new object:
``` javascript
const { name, ...other } = fruit; // name = 'apple', other = { color = 'red', season = 'autumn' }
```

Default values can also be declared in object destructuring:
``` javascript
const { name, color, season='summer' } = { name: 'banana', color: 'yellow' }}; // name = 'banana', color = 'yellow', season = 'summer'
```

Additionaly we may want to assign a value to a variable with a different name than the propery in the object. This can be done with the syntax below:
``` javascript
const { name: fruitName, color: fruitColor } = { name: 'banana', color: 'yellow' }}; // fruitName = 'banana', fruitColor: 'yellow'
```

## Combined Destructuring
With all the above in mind we can use combination of these rules to apply destructuring in more complex case like arrays of objects. Given the array below:
``` javascript
const fruits = [
  {name:'apple', color:'red'},
  {name:'banana', color:'yellow'},
  {name:'orange', color:'orange'}
];
```
We can get the name of the first fruit and assign it to a variable called ```fruitName```:
``` javascript
const [{ name: fruitName }] = fruits; // fruitName = 'apple'
```

## Function parameter destructuring
A really useful case for destructuring instead of data manipulation is destructuring in function parameter definitions. This can be used to provide a more clear view of object parameters of a function, or to filter out properties that the function does not need.

Given the below function that gets a configuration object as a parameter:
``` javascript
const someFunction = (config) = {
  if (config.isEnabled) {
    console.log(config.value)
  }
}
```
This can be re-written like:
``` javascript
const someFunction = ({ isEnabled, value }}) = {
  if (isEnabled) {
    console.log(value)
  }
}
```
Now we managed to make the api of the function more clear and also we don't need to write ```config.``` every time, to access a property of the object parameter.

#### More Information:
<a href='https://developer.mozilla.org/el/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment' target='_blank' rel='nofollow'>MDN Docs</a>

More on <a href='https://javascript.info/destructuring-assignment' target='_blank' rel='nofollow'>Destructuring</a>
