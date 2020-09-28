---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
forumTopicId: 301369
localeTitle: Использование метода испытаний
---

## Description
<section id='description'>
Регулярные выражения используются в языках программирования для соответствия частям строк. Вы создаете шаблоны, которые помогут вам выполнить это сопоставление. Если вы хотите найти слово <code>&quot;the&quot;</code> в строке <code>&quot;The dog chased the cat&quot;</code> , вы можете использовать следующее регулярное выражение: <code>/the/</code> . Обратите внимание, что кавычки не требуются в регулярном выражении. JavaScript имеет несколько способов использования регулярных выражений. Один из способов проверки регулярного выражения - использовать метод <code>.test()</code> . Метод <code>.test()</code> принимает регулярное выражение, применяет его к строке (которая помещается внутри круглых скобок) и возвращает <code>true</code> или <code>false</code> если ваш шаблон что-то находит или нет. <blockquote> пусть testStr = &quot;freeCodeCamp&quot;; <br> пусть testRegex = / Code /; <br> testRegex.test (testStr); <br> // Возвращает true </blockquote>
</section>

## Instructions
<section id='instructions'>
Примените regex <code>myRegex</code> к строке <code>myString</code> используя метод <code>.test()</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use <code>.test()</code> to test the regex.
    testString: assert(code.match(/myRegex.test\(\s*myString\s*\)/));
  - text: Your result should return <code>true</code>.
    testString: assert(result === true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```

</section>
