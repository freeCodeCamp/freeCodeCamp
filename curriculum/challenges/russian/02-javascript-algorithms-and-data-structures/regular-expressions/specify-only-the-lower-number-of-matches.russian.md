---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
forumTopicId: 301366
localeTitle: Укажите только меньшее число совпадений
---

## Description
<section id='description'>
Вы можете указать нижнее и верхнее число шаблонов с помощью <code>quantity specifiers</code> используя фигурные скобки. Иногда вы хотите указать меньшее число шаблонов без верхнего предела. Чтобы указать только меньшее количество шаблонов, сохраните первое число, за которым следует запятая. Например, чтобы соответствовать только строке <code>&quot;hah&quot;</code> с буквой , появляющиеся по крайней мере <code>a</code> <code>3</code> раза, ваша регулярное выражение будет <code>/ha{3,}h/</code> . <blockquote> пусть А4 = &quot;хааах&quot;; <br> пусть А2 = «хаа»; <br> пусть A100 = &quot;h&quot; + &quot;a&quot; .repeat (100) + &quot;h&quot;; <br> пусть multA = / ha {3,} h /; <br> multipleA.test (А4); // Возвращает true <br> multipleA.test (А2); // Возвращает false <br> multipleA.test (А100); // Возвращает true </blockquote>
</section>

## Instructions
<section id='instructions'>
Измените regex <code>haRegex</code> чтобы он соответствовал слову <code>&quot;Hazzah&quot;</code> только если у него четыре или более букв <code>z</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use curly brackets.
    testString: assert(haRegex.source.match(/{.*?}/).length > 0);
  - text: Your regex should not match <code>"Hazzah"</code>
    testString: assert(!haRegex.test("Hazzah"));
  - text: Your regex should not match <code>"Hazzzah"</code>
    testString: assert(!haRegex.test("Hazzzah"));
  - text: Your regex should match <code>"Hazzzzah"</code>
    testString: assert("Hazzzzah".match(haRegex)[0].length === 8);
  - text: Your regex should match <code>"Hazzzzzah"</code>
    testString: assert("Hazzzzzah".match(haRegex)[0].length === 9);
  - text: Your regex should match <code>"Hazzzzzzah"</code>
    testString: assert("Hazzzzzzah".match(haRegex)[0].length === 10);
  - text: Your regex should match <code>"Hazzah"</code> with 30 <code>z</code>'s in it.
    testString: assert("Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah".match(haRegex)[0].length === 34);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```

</section>
