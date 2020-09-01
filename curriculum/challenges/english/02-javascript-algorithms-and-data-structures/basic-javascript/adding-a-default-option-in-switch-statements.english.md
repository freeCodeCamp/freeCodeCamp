---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
---

## Description
<section id='description'>
In a <code>switch</code> statement you may not be able to specify all possible values as <code>case</code> statements. Instead, you can add the <code>default</code> statement which will be executed if no matching <code>case</code> statements are found. Think of it like the final <code>else</code> statement in an <code>if/else</code> chain.
A <code>default</code> statement should be the last case.

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

</section>

## Instructions
<section id='instructions'>
Write a switch statement to set <code>answer</code> for the following conditions:<br><code>"a"</code> - "apple"<br><code>"b"</code> - "bird"<br><code>"c"</code> - "cat"<br><code>default</code> - "stuff"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>switchOfStuff("a")</code> should have a value of "apple"
    testString: assert(switchOfStuff("a") === "apple");
  - text: <code>switchOfStuff("b")</code> should have a value of "bird"
    testString: assert(switchOfStuff("b") === "bird");
  - text: <code>switchOfStuff("c")</code> should have a value of "cat"
    testString: assert(switchOfStuff("c") === "cat");
  - text: <code>switchOfStuff("d")</code> should have a value of "stuff"
    testString: assert(switchOfStuff("d") === "stuff");
  - text: <code>switchOfStuff(4)</code> should have a value of "stuff"
    testString: assert(switchOfStuff(4) === "stuff");
  - text: You should not use any <code>if</code> or <code>else</code> statements
    testString: assert(!/else/g.test(code) || !/if/g.test(code));
  - text: You should use a <code>default</code> statement
    testString: assert(switchOfStuff("string-to-trigger-default-case") === "stuff");
  - text: You should have at least 3 <code>break</code> statements
    testString: assert(code.match(/break/g).length > 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function switchOfStuff(val) {
  var answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
```

</section>
