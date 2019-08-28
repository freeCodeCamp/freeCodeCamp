---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1
videoUrl: https://scrimba.com/c/caeJ2hm
forumTopicId: 18206
localeTitle: Представляем Else If Statementments
---

## Description
<section id='description'>
Если у вас есть несколько условий, которые необходимо устранить, вы можете связать, <code>if</code> инструкции вместе с инструкциями <code>else if</code> . <blockquote> если (num&gt; 15) { <br> возвращение «Больше 15»; <br> } else if (num &lt;5) { <br> return «Меньше 5»; <br> } else { <br> возвращение «от 5 до 15»; <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Преобразуйте логику, чтобы использовать инструкции <code>else if</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have at least two <code>else</code> statements
    testString: assert(code.match(/else/g).length > 1);
  - text: You should have at least two <code>if</code> statements
    testString: assert(code.match(/if/g).length > 1);
  - text: You should have closing and opening curly braces for each <code>if else</code> code block.
    testString: assert(code.match(/if\s*\((.+)\)\s*\{[\s\S]+\}\s*else if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/));
  - text: <code>testElseIf(0)</code> should return "Smaller than 5"
    testString: assert(testElseIf(0) === "Smaller than 5");
  - text: <code>testElseIf(5)</code> should return "Between 5 and 10"
    testString: assert(testElseIf(5) === "Between 5 and 10");
  - text: <code>testElseIf(7)</code> should return "Between 5 and 10"
    testString: assert(testElseIf(7) === "Between 5 and 10");
  - text: <code>testElseIf(10)</code> should return "Between 5 and 10"
    testString: assert(testElseIf(10) === "Between 5 and 10");
  - text: <code>testElseIf(12)</code> should return "Greater than 10"
    testString: assert(testElseIf(12) === "Greater than 10");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

// Change this value to test
testElseIf(7);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```

</section>
