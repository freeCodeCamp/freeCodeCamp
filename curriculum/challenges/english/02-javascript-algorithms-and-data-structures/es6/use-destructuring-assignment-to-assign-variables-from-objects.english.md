---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
forumTopicId: 301215
---

## Description
<section id='description'>
Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:

```js
const user = { name: 'John Doe', age: 34 };
```

Here's how you can give new variable names in the assignment:

```js
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
```

You may read it as "get the value of <code>user.name</code> and assign it to a new variable named <code>userName</code>" and so on.
</section>

## Instructions
<section id='instructions'>
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables <code>highToday</code> and <code>highTomorrow</code> the values of <code>today</code> and <code>tomorrow</code> from the <code>HIGH_TEMPERATURES</code> object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should remove the ES5 assignment syntax.
    testString: assert(!code.match(/highToday = HIGH_TEMPERATURES\.today/g) && !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g))
  - text: You should use destructuring to create the <code>highToday</code> variable.
    testString: assert(code.match(/(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));
  - text: You should use destructuring to create the <code>highTomorrow</code> variable.
    testString: assert(code.match(/(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));
  - text: <code>highToday</code> should be equal to <code>77</code> and <code>highTomorrow</code> should be equal to <code>80</code>.
    testString: assert(highToday === 77 && highTomorrow === 80);
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

</div>
</section>

## Solution
<section id='solution'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```

</section>
