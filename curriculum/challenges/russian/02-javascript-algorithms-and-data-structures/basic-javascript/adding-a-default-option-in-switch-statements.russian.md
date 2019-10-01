---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
videoUrl: https://scrimba.com/c/c3JvVfg
forumTopicId: 16653
localeTitle: Добавление опции по умолчанию в операторы switch
---

## Description
<section id='description'>
В операторе <code>switch</code> вы не сможете указывать все возможные значения в качестве операторов <code>case</code> . Вместо этого вы можете добавить оператор по <code>default</code> который будет выполняться, если не найдено совпадающих операторов <code>case</code> . Думайте об этом как финальном <code>else</code> утверждении в качестве , <code>if/else</code> цепи. В последнем случае должен использоваться оператор по <code>default</code> . <blockquote> switch (num) { <br> значение case1: <br> statement1; <br> ломать; <br> значение case2: <br> оператор2; <br> ломать; <br> ... <br> по умолчанию: <br> defaultStatement; <br> ломать; <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Напишите оператор switch, чтобы задать <code>answer</code> для следующих условий: <br> <code>&quot;a&quot;</code> - &quot;яблоко&quot; <br> <code>&quot;b&quot;</code> - &quot;птица&quot; <br> <code>&quot;c&quot;</code> - &quot;cat&quot; <br> <code>default</code> - &quot;stuff&quot;
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

// Change this value to test
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
