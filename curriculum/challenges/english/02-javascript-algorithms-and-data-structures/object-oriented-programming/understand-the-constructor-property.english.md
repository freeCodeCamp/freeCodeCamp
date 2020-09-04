---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
forumTopicId: 301327
---

## Description
<section id='description'>
There is a special <code>constructor</code> property located on the object instances <code>duck</code> and <code>beagle</code> that were created in the previous challenges:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true
```

Note that the <code>constructor</code> property is a reference to the constructor function that created the instance.
The advantage of the <code>constructor</code> property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

<strong>Note</strong><br>Since the <code>constructor</code> property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the <code>instanceof</code> method to check the type of an object.
</section>

## Instructions
<section id='instructions'>
Write a <code>joinDogFraternity</code> function that takes a <code>candidate</code> parameter and, using the <code>constructor</code> property, return <code>true</code> if the candidate is a <code>Dog</code>, otherwise return <code>false</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>joinDogFraternity</code> should be defined as a function.
    testString: assert(typeof(joinDogFraternity) === 'function');
  - text: <code>joinDogFraternity</code> should return true if<code>candidate</code> is an instance of <code>Dog</code>.
    testString: assert(joinDogFraternity(new Dog("")) === true);
  - text: <code>joinDogFraternity</code> should use the <code>constructor</code> property.
    testString: assert(/\.constructor/.test(code) && !/instanceof/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}

```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```

</section>
