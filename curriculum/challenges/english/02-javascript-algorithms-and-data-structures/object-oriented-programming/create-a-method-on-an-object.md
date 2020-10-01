---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
challengeType: 1
forumTopicId: 301318
---

## Description
<section id='description'>
Objects can have a special type of property, called a <dfn>method</dfn>.
Methods are properties that are functions. This adds different behavior to an object. Here is the <code>duck</code> example with a method:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."
```

The example adds the <code>sayName</code> method, which is a function that returns a sentence giving the name of the <code>duck</code>.
Notice that the method accessed the <code>name</code> property in the return statement using <code>duck.name</code>. The next challenge will cover another way to do this.
</section>

## Instructions
<section id='instructions'>
Using the <code>dog</code> object, give it a method called <code>sayLegs</code>. The method should return the sentence "This dog has 4 legs."
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code> should be a function.
    testString: assert(typeof(dog.sayLegs) === 'function');
  - text: <code>dog.sayLegs()</code> should return the given string - note that punctuation and spacing matter.
    testString: assert(dog.sayLegs() === 'This dog has 4 legs.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

</div>



</section>

## Solution
<section id='solution'>


```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```

</section>
