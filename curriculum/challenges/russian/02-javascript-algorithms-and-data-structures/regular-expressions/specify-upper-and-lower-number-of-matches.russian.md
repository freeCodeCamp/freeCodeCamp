---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: Указать верхнее и нижнее число совпадений
---

## Description
<section id="description"> Напомним, что вы используете знак плюс <code>+</code> для поиска одного или нескольких символов и звездочки <code>*</code> для поиска нулевого или большего количества символов. Это удобно, но иногда вы хотите соответствовать определенному диапазону шаблонов. Вы можете указать нижнее и верхнее число шаблонов с <code>quantity specifiers</code> . Спецификаторы количества используются с фигурными скобками ( <code>{</code> и <code>}</code> ). Вы устанавливаете два числа между фигурными скобками - для нижнего и верхнего числа шаблонов. Например, чтобы соответствовать только букве <code>a</code> появляющейся между <code>3</code> и <code>5</code> раз в строке <code>&quot;ah&quot;</code> , ваше регулярное выражение будет <code>/a{3,5}h/</code> . <blockquote> пусть A4 = «aaaah»; <br> пусть A2 = &quot;aah&quot;; <br> пусть несколько А = / а {3,5} ч /; <br> multipleA.test (А4); // Возвращает true <br> multipleA.test (А2); // Возвращает false </blockquote></section>

## Instructions
<section id="instructions"> Измените regex <code>ohRegex</code> на соответствие только <code>3</code> - <code>6</code> буквам <code>h</code> в слове <code>&quot;Oh no&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вашему регулярному выражению следует использовать фигурные скобки.
    testString: 'assert(ohRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: Ваше регулярное выражение не должно совпадать с <code>&quot;Ohh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohh no"), "Your regex should not match <code>"Ohh no"</code>");'
  - text: Ваше регулярное выражение должно соответствовать <code>&quot;Ohhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhh no"), "Your regex should match <code>"Ohhh no"</code>");'
  - text: Ваше регулярное выражение должно соответствовать <code>&quot;Ohhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhh no"), "Your regex should match <code>"Ohhhh no"</code>");'
  - text: Ваше регулярное выражение должно соответствовать <code>&quot;Ohhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhh no"), "Your regex should match <code>"Ohhhhh no"</code>");'
  - text: Ваше регулярное выражение должно соответствовать <code>&quot;Ohhhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhhh no"), "Your regex should match <code>"Ohhhhhh no"</code>");'
  - text: Ваше регулярное выражение не должно совпадать <code>&quot;Ohhhhhhh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohhhhhhh no"), "Your regex should not match <code>"Ohhhhhhh no"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
