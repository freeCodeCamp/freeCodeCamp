---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: Добавление опции по умолчанию в операторы switch
---

## Description
<section id="description"> В операторе <code>switch</code> вы не сможете указывать все возможные значения в качестве операторов <code>case</code> . Вместо этого вы можете добавить оператор по <code>default</code> который будет выполняться, если не найдено совпадающих операторов <code>case</code> . Думайте об этом как финальном <code>else</code> утверждении в качестве , <code>if/else</code> цепи. В последнем случае должен использоваться оператор по <code>default</code> . <blockquote> switch (num) { <br> значение case1: <br> statement1; <br> ломать; <br> значение case2: <br> оператор2; <br> ломать; <br> ... <br> по умолчанию: <br> defaultStatement; <br> ломать; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Напишите оператор switch, чтобы задать <code>answer</code> для следующих условий: <br> <code>a</code> - "яблоко" <br> <code>b</code> - "птица" <br> <code>c</code> - "cat" <br> <code>default</code> - "stuff" </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>switchOfStuff("a")</code> должен иметь значение "apple"
    testString: assert(switchOfStuff("a") === "apple", "<code>switchOfStuff("a")</code> should have a value of "apple"");
  - text: <code>switchOfStuff("b")</code> должен иметь значение "bird"
    testString: assert(switchOfStuff("b") === "bird", "<code>switchOfStuff("b")</code> should have a value of "bird"");
  - text: <code>switchOfStuff("c")</code> должен иметь значение "cat"
    testString: assert(switchOfStuff("c") === "cat", "<code>switchOfStuff("c")</code> should have a value of "cat"");
  - text: <code>switchOfStuff("d")</code> должен иметь значение "stuff"
    testString: assert(switchOfStuff("d") === "stuff", "<code>switchOfStuff("d")</code> should have a value of "stuff"");
  - text: <code>switchOfStuff(4)</code> должен иметь значение "stuff"
    testString: assert(switchOfStuff(4) === "stuff", "<code>switchOfStuff(4)</code> should have a value of "stuff"");
  - text: Вы не должны использовать никаких утверждений <code>if</code> или <code>else</code>
    testString: assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");
  - text: Вы должны использовать инструкцию по <code>default</code>
    testString: assert(switchOfStuff("string-to-trigger-default-case") === "stuff", "You should use a <code>default</code> statement");
  - text: У вас должно быть как минимум 3 заявления о <code>break</code>
    testString: assert(code.match(/break/g).length > 2, "You should have at least 3 <code>break</code> statements");
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
// solution required
```
</section>
