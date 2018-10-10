---
id: 587d7dbb367417b2b2512bac
title: Remove Whitespace from Start and End
challengeType: 1
videoUrl: ''
localeTitle: Удаление пробелов от начала и конца
---

## Description
<section id="description"> Иногда пробельные символы вокруг строк не нужны, но есть. Типичная обработка строк - удаление пробелов в начале и в конце. </section>

## Instructions
<section id="instructions"> Напишите регулярное выражение и используйте соответствующие строковые методы для удаления пробелов в начале и в конце строк. <strong>Заметка</strong> <br> Здесь будет работать метод <code>.trim()</code> , но вам придется выполнить эту задачу, используя регулярные выражения. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>result</code> должен равняться <code>&quot;Hello, World!&quot;</code>'
    testString: 'assert(result == "Hello, World!", "<code>result</code> should equal to <code>"Hello, World!"</code>");'
  - text: Вы не должны использовать метод <code>.trim()</code> .
    testString: 'assert(!code.match(/\.trim\(.*?\)/), "You should not use the <code>.trim()</code> method.");'
  - text: <code>result</code> переменная не должна быть установлена ​​равной строке.
    testString: 'assert(!code.match(/result\s*=\s*".*?"/), "The <code>result</code> variable should not be set equal to a string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
