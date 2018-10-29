---
title: Change the Prototype to a New Object
---
## Change the Prototype to a New Object
Instead of adding each prototype property one by one with ```object.prototype.property```. We can do this much easier by setting the prototype to a new object. That way all of the prototype properties are added at once.

<br/>

## Hint:

```javascript

Dog.prototype = {
  property: value,
  functionName: function(){
  
  },  
}
```

Now try to solve the challenge!

<br/>

## Spoiler-Alert Solution Ahead!


<br/>

## Solution 1:

```javascript
function Dog(name) {
  this.name = name; 
}
Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  eat: function(){
    console.log('nom nom nom');
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
}
```

## Code Explanation:

We assign the prototype variable to a new object. 
Then we declare the numLegs property and give it a value of 2. 

Next we create the two functions "eat" and "describe". 
Now remember functions in objects are methods with the same syntax as properties. 
You have the name followed by a value. That value is the function and the name is the name of your function.
<br/>

## Solution 2:

```javascript
function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 2,
  eat(){
    console.log('nom nom nom');
  },
  describe(){
    console.log("My name is " + this.name);
  }
};
```

## Code Explanation:

The only thing different between this solution and the last solution is we shortened the syntax on the functions "eat" and "describe".
We did this by removing the ":" and the word "function".

With ES6 we are allowed to do this. 

You can read about it here: [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)


