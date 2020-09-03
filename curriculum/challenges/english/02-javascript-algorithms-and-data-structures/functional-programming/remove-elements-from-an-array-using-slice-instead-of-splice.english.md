---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
forumTopicId: 301236
---

## Description
<section id='description'>
A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the <code>splice</code> method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the <code>splice</code> method mutates the original array it is called on. Here's an example:

```js
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
```

As we saw in the last challenge, the <code>slice</code> method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the <code>slice</code> method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the <code>slice</code> method instead of <code>splice</code> helps to avoid any array-mutating side effects.
</section>

## Instructions
<section id='instructions'>
Rewrite the function <code>nonMutatingSplice</code> by using <code>slice</code> instead of <code>splice</code>. It should limit the provided <code>cities</code> array to a length of 3, and return a new array with only the first three items.
Do not mutate the original array provided to the function.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>slice</code> method.
    testString: assert(code.match(/\.slice/g));
  - text: Your code should not use the <code>splice</code> method.
    testString: assert(!code.match(/\.?[\s\S]*?splice/g));
  - text: The <code>inputCities</code> array should not change.
    testString: assert(JSON.stringify(inputCities) === JSON.stringify(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]));
  - text: <code>nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])</code> should return <code>["Chicago", "Delhi", "Islamabad"]</code>.
    testString: assert(JSON.stringify(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])) === JSON.stringify(["Chicago", "Delhi", "Islamabad"]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);
  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

</section>
