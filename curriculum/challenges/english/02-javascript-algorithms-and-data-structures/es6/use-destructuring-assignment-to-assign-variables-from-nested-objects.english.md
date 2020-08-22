---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
isHidden: false
forumTopicId: 301214
---

## Description
<section id='description'>
You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Here's how to extract the values of object properties and assign them to variables with the same name:

```js
const { johnDoe: { age, email }} = user;
```

And here's how you can assign an object properties' values to variables with different names:

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

</section>

## Instructions
<section id='instructions'>
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables <code>lowToday</code> and <code>highToday</code> the values of <code>today.low</code> and <code>today.high</code> from the <code>LOCAL_FORECAST</code> object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should remove the ES5 assignment syntax.
    testString: assert(!code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) && !code.match(/highToday = LOCAL_FORECAST\.today.high/g))
  - text: You should use destructuring to create the <code>lowToday</code> variable.
    testString: assert(code.match(/(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g));
  - text: You should use destructuring to create the <code>highToday</code> variable.
    testString: assert(code.match(/(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g));
  - text: <code>lowToday</code> should be equal to <code>64</code> and <code>highToday</code> should be equal to <code>77</code>.
    testString: assert(lowToday === 64 && highToday === 77);
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

</div>
</section>

## Solution
<section id='solution'>

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
 
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```

</section>
