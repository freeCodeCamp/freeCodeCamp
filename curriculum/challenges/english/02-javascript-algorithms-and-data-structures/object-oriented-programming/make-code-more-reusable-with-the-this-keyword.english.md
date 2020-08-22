---
id: 587d7dad367417b2b2512b76
title: Make Code More Reusable with the this Keyword
challengeType: 1
isHidden: false
forumTopicId: 301321
---

## Description
<section id='description'>
The last challenge introduced a method to the <code>duck</code> object. It used <code>duck.name</code> dot notation to access the value for the <code>name</code> property within the return statement:
<code>sayName: function() {return "The name of this duck is " + duck.name + ".";}</code>
While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.
A way to avoid these issues is with the <code>this</code> keyword:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

<code>this</code> is a deep topic, and the above example is only one way to use it. In the current context, <code>this</code> refers to the object that the method is associated with: <code>duck</code>.
If the object's name is changed to <code>mallard</code>, it is not necessary to find all the references to <code>duck</code> in the code. It makes the code reusable and easier to read.
</section>

## Instructions
<section id='instructions'>
Modify the <code>dog.sayLegs</code> method to remove any references to <code>dog</code>. Use the <code>duck</code> example for guidance.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code> should return the given string.
    testString: assert(dog.sayLegs() === 'This dog has 4 legs.');
  - text: Your code should use the <code>this</code> keyword to access the <code>numLegs</code> property of <code>dog</code>.
    testString: assert(code.match(/this\.numLegs/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
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
