---
id: 587d8254367417b2b2512c70
title: Create and Add to Sets in ES6
challengeType: 1
---

## Description
<section id='description'>
Now that you have worked through ES5, you are going to perform something similar in ES6. This will be considerably easier. ES6 contains a built-in data structure <code>Set</code> so many of the operations you wrote by hand are now included for you. Let's take a look:
To create a new empty set:
<code>var set = new Set();</code>
You can create a set with a value:
<code>var set = new Set(1);</code>
You can create a set with an array:
<code>var set = new Set([1, 2, 3]);</code>
Once you have created a set, you can add the values you wish using the <code>add</code> method:
<blockquote>var set = new Set([1, 2, 3]);<br>set.add([4, 5, 6]);</blockquote>
As a reminder, a set is a data structure that cannot contain duplicate values:
<blockquote>var set = new Set([1, 2, 3, 1, 2, 3]);<br>// set contains [1, 2, 3] only</blockquote>
</section>

## Instructions
<section id='instructions'>
For this exercise, return a set with the following values: <code>1, 2, 3, 'Taco', 'Cat', 'Awesome'</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your <code>Set</code> should only contain the values <code>1, 2, 3, Taco, Cat, Awesome</code>.'
    testString: 'assert((function(){var test = checkSet(); return (test.size == 6) && test.has(1) && test.has(2) && test.has(3) && test.has("Taco") && test.has("Cat") && test.has("Awesome");})(), "Your <code>Set</code> should only contain the values <code>1, 2, 3, Taco, Cat, Awesome</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line

  // change code above this line
  console.log(set);
  return set;
}

checkSet();
```

</div>



</section>

## Solution
<section id='solution'>


```js
function checkSet(){var set = new Set([1,2,3,'Taco','Cat','Awesome']);
return set;}
```

</section>
