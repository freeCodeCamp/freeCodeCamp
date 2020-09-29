---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
challengeType: 5
forumTopicId: 16006
---

## Description
<section id='description'>
Check if a string (first argument, <code>str</code>) ends with the given target string (second argument, <code>target</code>).
This challenge <em>can</em> be solved with the <code>.endsWith()</code> method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>confirmEnding("Bastian", "n")</code> should return true.
    testString: assert(confirmEnding("Bastian", "n") === true);
  - text: <code>confirmEnding("Congratulation", "on")</code> should return true.
    testString: assert(confirmEnding("Congratulation", "on") === true);
  - text: <code>confirmEnding("Connor", "n")</code> should return false.
    testString: assert(confirmEnding("Connor", "n") === false);
  - text: <code>confirmEnding("Walking on water and developing software from a specification are easy if both are frozen"&#44; "specification"&#41;</code> should return false.
    testString: assert(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false);
  - text: <code>confirmEnding("He has to give me a new name", "name")</code> should return true.
    testString: assert(confirmEnding("He has to give me a new name", "name") === true);
  - text: <code>confirmEnding("Open sesame", "same")</code> should return true.
    testString: assert(confirmEnding("Open sesame", "same") === true);
  - text: <code>confirmEnding("Open sesame", "sage")</code> should return false.
    testString: assert(confirmEnding("Open sesame", "sage") === false);
  - text: <code>confirmEnding("Open sesame", "game")</code> should return false.
    testString: assert(confirmEnding("Open sesame", "game") === false);
  - text: <code>confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</code> should return false.
    testString: assert(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false);
  - text: <code>confirmEnding("Abstraction", "action")</code> should return true.
    testString: assert(confirmEnding("Abstraction", "action") === true);
  - text: Your code should not use the built-in method <code>.endsWith()</code> to solve the challenge.
    testString: assert(!(/\.endsWith\(.*?\)\s*?;?/.test(code)) && !(/\['endsWith'\]/.test(code)));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

```

</section>
