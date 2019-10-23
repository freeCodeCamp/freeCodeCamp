---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
forumTopicId: 301193
localeTitle: Понимание различий между FreeCodeCamp и браузером
---

## Description
<section id='description'>
Возможно, вы заметили, что некоторые проблемы с JavaScript для FreeCodeCamp включают в себя собственную консоль. Эта консоль ведет себя несколько иначе, чем консоль браузера, которую вы использовали в последнем вызове. Следующая задача состоит в том, чтобы выделить некоторые различия между консолью freeCodeCamp и консолью браузера. Во-первых, консоль браузера. Когда вы загружаете и запускаете обычный файл JavaScript в своем браузере, операторы <code>console.log()</code> будут печатать именно то, что вы им сообщаете, чтобы печатать на консоль браузера точное количество запрошенных вами запросов. В текстовом редакторе в браузере этот процесс немного отличается и может сбивать с толку вначале. Значения, переданные в <code>console.log()</code> в блоке текстового редактора, запускают каждый набор тестов, а также еще одно время для любых вызовов функций, которые у вас есть в коде. Это поддается некоторому интересному поведению и может начать вас в начале, потому что зарегистрированное значение, которое вы ожидаете увидеть только один раз, может распечатывать еще много раз в зависимости от количества тестов и значений, передаваемых этим тестам. Если вы хотите увидеть только свой единственный вывод и не беспокоиться о прохождении циклов тестирования, вы можете использовать <code>console.clear()</code> .
</section>

## Instructions
<section id='instructions'>
Используйте <code>console.log()</code> для печати переменных в указанном коде.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use <code>console.log()</code> to print the <code>outputTwo</code> variable.  In your Browser Console this should print out the value of the variable two times.
    testString: assert(code.match(/console\.log\(outputTwo\)/g));
  - text: Use <code>console.log()</code> to print the <code>outputOne</code> variable.
    testString: assert(code.match(/console\.log\(outputOne\)/g));
  - text: Use <code>console.clear()</code> to modify your output so that <code>outputOne</code> variable only outputs once.
    testString: assert(code.match(/^(\s*console.clear\(\);?\s*)$/gm));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable


let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once


// Use console.log() to print the outputOne variable

```

</div>

</section>

## Solution
<section id='solution'>

```js
let outputTwo = "This will print to the browser console 2 times"; console.log(outputTwo); let outputOne = "Try to get this to log only once to the browser console";
console.clear();
console.log(outputOne);
```

</section>
