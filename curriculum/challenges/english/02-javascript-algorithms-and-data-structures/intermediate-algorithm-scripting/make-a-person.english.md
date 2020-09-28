---
id: a2f1d72d9b908d0bd72bb9f6
title: Make a Person
challengeType: 5
forumTopicId: 16020
---

## Description
<section id='description'>
Fill in the object constructor with the following methods below:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Object.keys(bob).length</code> should return 6.
    testString: assert.deepEqual(Object.keys(bob).length, 6);
  - text: <code>bob instanceof Person</code> should return true.
    testString: assert.deepEqual(bob instanceof Person, true);
  - text: <code>bob.firstName</code> should return undefined.
    testString: assert.deepEqual(bob.firstName, undefined);
  - text: <code>bob.lastName</code> should return undefined.
    testString: assert.deepEqual(bob.lastName, undefined);
  - text: <code>bob.getFirstName()</code> should return "Bob".
    testString: assert.deepEqual(bob.getFirstName(), 'Bob');
  - text: <code>bob.getLastName()</code> should return "Ross".
    testString: assert.deepEqual(bob.getLastName(), 'Ross');
  - text: <code>bob.getFullName()</code> should return "Bob Ross".
    testString: assert.deepEqual(bob.getFullName(), 'Bob Ross');
  - text: <code>bob.getFullName()</code> should return "Haskell Ross" after <code>bob.setFirstName("Haskell")</code>.
    testString: assert.strictEqual((function () { bob.setFirstName("Haskell"); return bob.getFullName(); })(), 'Haskell Ross');
  - text: <code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setLastName("Curry")</code>.
    testString: assert.strictEqual((function () { var _bob=new Person('Haskell Ross'); _bob.setLastName("Curry"); return _bob.getFullName(); })(), 'Haskell Curry');
  - text: <code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setFullName("Haskell Curry")</code>.
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFullName(); })(), 'Haskell Curry');
  - text: <code>bob.getFirstName()</code> should return "Haskell" after <code>bob.setFullName("Haskell Curry")</code>.
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFirstName(); })(), 'Haskell');
  - text: <code>bob.getLastName()</code> should return "Curry" after <code>bob.setFullName("Haskell Curry")</code>.
    testString: assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getLastName(); })(), 'Curry');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

</div>

### After Test

<div id='js-teardown'>

```js
if(bob){
  bob = new Person("Bob Ross");
}
```

</div>


</section>

## Solution
<section id='solution'>


```js
var Person = function(firstAndLast) {

  var firstName, lastName;

  function updateName(str) {
    firstName = str.split(" ")[0];
    lastName = str.split(" ")[1];
  }

  updateName(firstAndLast);

  this.getFirstName = function(){
    return firstName;
  };

  this.getLastName = function(){
    return lastName;
  };

  this.getFullName = function(){
    return firstName + " " + lastName;
  };

  this.setFirstName = function(str){
    firstName = str;
  };


  this.setLastName = function(str){
    lastName = str;
  };

  this.setFullName = function(str){
    updateName(str);
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

</section>
