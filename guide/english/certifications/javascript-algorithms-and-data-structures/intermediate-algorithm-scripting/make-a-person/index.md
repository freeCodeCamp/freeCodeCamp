---
title: Make a Person
---

# Make a Person

---
## Problem Explanation

When I started the program I figured I just had to create the six functions mentioned in the details. However, it was not that simple. Creating them as a function was not the right way, I had to create them in a different way to make them a key.

There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as a key too which was wrong.

As for the usage of array, that is optional, you could also create new variable to hold the separated string if you wish but an array is easier to deal with as strings are immutable.

Read the instructions carefully, it is always a good hint in itself to run the code and check what the test results were so you know what to expect but do not fixate yourself on that. Once you understand what you need to do, this problem is very easy and straightforward.

#### Relevant Links

*   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" target='_blank' rel='nofollow'>Closures</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model' target='_blank' rel='nofollow'>Details of the Object Model</a>


---
## Hints

### Hint 1

Use the **this** notation to create the keys instead of regular functions: This means instead of `var varName = function() {/*...*/}` you should use `this.varName = function() {/*...*/}`

### Hint 2

The program has a test that checks for how many keys you used, they have to be exactly six, the six mentioned in the details section. This means if you need to work with variables, make them local and not a key: `this.fullName = firstAndLast;`

### Hint 3

Often the code would not work the way you expect it due to wrong variable names, make sure to check that you spell them the right way. This happens to all of us at some point.

### Hint 4

If you are having problems with writing the `setter` methods, below is a template for a `set` method:
```js
this.setFullName = function(input) {
  // Insert your code here
};
```


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();
```

#### Code Explanation

*   Create a variable that will make a copy of the full name that was passed as a parameter.
*   Then we can proceed to create the six methods needed and return what is asked for.
*   For the individual setters, we can use the split to turn the fullname into an array of first and last names and concatenate the unchanged portion of the name with what was passed as a parameter.

#### Relevant Links

*   <a href="https://www.freecodecamp.org/challenges/build-javascript-objects" target='_blank' rel='nofollow'>How to build objects</a>
*   <a href="https://www.freecodecamp.org/challenges/construct-javascript-objects-with-functions" target='_blank' rel='nofollow'>Construct objects with functions</a>
*   <a href="https://www.freecodecamp.org/challenges/declare-javascript-variables" target='_blank' rel='nofollow'>Declare objects as variables</a>


</details>