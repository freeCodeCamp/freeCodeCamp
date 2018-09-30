---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1
---

## Description
<section id='description'>
The <code>join</code> method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.
Here's an example:
<blockquote>var arr = ["Hello", "World"];<br>var str = arr.join(" ");<br>// Sets str to "Hello World"</blockquote>
</section>

## Instructions
<section id='instructions'>
Use the <code>join</code> method (among others) inside the <code>sentensify</code> function to make a sentence from the words in the string <code>str</code>. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the <code>replace</code> method.
</section>

## Tests
<section id='tests'>

```yml
- text: Your code should use the <code>join</code> method.
  testString: 'assert(code.match(/\.join/g), "Your code should use the <code>join</code> method.");'
- text: Your code should not use the <code>replace</code> method.
  testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method.");'
- text: <code>sentensify("May-the-force-be-with-you")</code> should return a string.
  testString: 'assert(typeof sentensify("May-the-force-be-with-you") === "string", "<code>sentensify("May-the-force-be-with-you")</code> should return a string.");'
- text: <code>sentensify("May-the-force-be-with-you")</code> should return <code>"May the force be with you"</code>.
  testString: 'assert(sentensify("May-the-force-be-with-you") === "May the force be with you", "<code>sentensify("May-the-force-be-with-you")</code> should return <code>"May the force be with you"</code>.");'
- text: <code>sentensify("The.force.is.strong.with.this.one")</code> should return <code>"The force is strong with this one"</code>.
  testString: 'assert(sentensify("The.force.is.strong.with.this.one") === "The force is strong with this one", "<code>sentensify("The.force.is.strong.with.this.one")</code> should return <code>"The force is strong with this one"</code>.");'
- text: '<code>sentensify("There,has,been,an,awakening")</code> should return <code>"There has been an awakening"</code>.'
  testString: 'assert(sentensify("There,has,been,an,awakening") === "There has been an awakening", "<code>sentensify("There,has,been,an,awakening")</code> should return <code>"There has been an awakening"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sentensify(str) {
  // Add your code below this line


  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
