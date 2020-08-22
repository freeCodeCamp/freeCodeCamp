---
id: 587d7b7a367417b2b2512b12
title: Copy Array Items Using slice()
challengeType: 1
isHidden: false
forumTopicId: 301158
---

## Description
<section id='description'>
The next method we will cover is <code>slice()</code>. Rather than modifying an array, <code>slice()</code> copies or <em>extracts</em> a given number of elements to a new array, leaving the array it is called upon untouched. <code>slice()</code> takes only 2 parameters &mdash; the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
```

In effect, we have created a new array by extracting elements from an existing array.
</section>

## Instructions
<section id='instructions'>
We have defined a function, <code>forecast</code>, that takes an array as an argument. Modify the function using <code>slice()</code> to extract information from the argument array and return a new array that contains the elements <code>'warm'</code> and <code>'sunny'</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>forecast</code> should return <code>["warm", "sunny"]</code>
    testString: assert.deepEqual(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']), ['warm', 'sunny']);
  - text: The <code>forecast</code> function should utilize the <code>slice()</code> method
    testString: assert(/\.slice\(/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```

</section>
