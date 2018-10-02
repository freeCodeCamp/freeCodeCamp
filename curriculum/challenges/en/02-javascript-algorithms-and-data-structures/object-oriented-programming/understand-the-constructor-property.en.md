---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
---

## Description
<section id='description'>
There is a special <code>constructor</code> property located on the object instances <code>duck</code> and <code>beagle</code> that were created in the previous challenges:
<blockquote>let duck = new Bird();<br>let beagle = new Dog();<br><br>console.log(duck.constructor === Bird);  //prints true<br>console.log(beagle.constructor === Dog);  //prints true</blockquote>
Note that the <code>constructor</code> property is a reference to the constructor function that created the instance.
The advantage of the <code>constructor</code> property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:
<blockquote>function joinBirdFraternity(candidate) {<br>&nbsp;&nbsp;if (candidate.constructor === Bird) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>&nbsp;&nbsp;}<br>}</blockquote>
<strong>Note</strong><br>Since the <code>constructor</code> property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the <code>instanceof</code> method to check the type of an object.
</section>

## Instructions
<section id='instructions'>
Write a <code>joinDogFraternity</code> function that takes a <code>candidate</code> parameter and, using the <code>constructor</code> property, return <code>true</code> if the candidate is a <code>Dog</code>, otherwise return <code>false</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>joinDogFraternity</code> should be defined as a function.
  testString: 'assert(typeof(joinDogFraternity) === ''function'', ''<code>joinDogFraternity</code> should be defined as a function.'');'
- text: <code>joinDogFraternity</code> should return true if<code>candidate</code> is an instance of <code>Dog</code>.
  testString: 'assert(joinDogFraternity(new Dog("")) === true, ''<code>joinDogFraternity</code> should return true if<code>candidate</code> is an instance of <code>Dog</code>.'');'
- text: <code>joinDogFraternity</code> should use the <code>constructor</code> property.
  testString: 'assert(/\.constructor/.test(code) && !/instanceof/.test(code), ''<code>joinDogFraternity</code> should use the <code>constructor</code> property.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Add your code below this line
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
