---
id: 587d7b8c367417b2b2512b56
title: Use export to Reuse a Code Block
challengeType: 1
videoUrl: ''
localeTitle: Использовать экспорт для повторного использования блока кода
---

## Description
<section id='description'>
В предыдущей задаче вы узнали об <code>import</code> и о том, как его можно использовать для импорта небольших объемов кода из больших файлов. Для того, чтобы это сработало, мы должны использовать одно из операторов, которое идет с <code>import</code> , известное как <dfn>экспорт</dfn> . Когда мы хотим, чтобы какой-то код - функция или переменная - мог использоваться в другом файле, мы должны экспортировать его, чтобы импортировать его в другой файл. Подобно <code>import</code> , <code>export</code> является не-браузером. Ниже мы <dfn>называем именованный экспорт</dfn> . При этом мы можем импортировать любой код, который мы экспортируем в другой файл, с синтаксисом <code>import</code> вы узнали на последнем уроке. Вот пример: <blockquote> const capitalizeString = (string) =&gt; { <br> return string.charAt (0) .toUpperCase () + string.slice (1); <br> } <br> export {capitalizeString} // Как экспортировать функции. <br> export const foo = &quot;bar&quot;; // Как экспортировать переменные. </blockquote> В качестве альтернативы, если вы хотите сжать все свои <code>export</code> инструкции в одну строку, вы можете использовать этот подход: <blockquote> const capitalizeString = (string) =&gt; { <br> return string.charAt (0) .toUpperCase () + string.slice (1); <br> } <br> const foo = &quot;bar&quot;; <br> export {capitalizeString, foo} </blockquote> Любой подход вполне приемлем.
</section>

## Instructions
<section id='instructions'>
Ниже приведены две переменные, которые я хочу сделать доступными для других файлов. Используя первый способ, я продемонстрировал <code>export</code> , экспортируем две переменные.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foo</code> экспортируется.
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+foo\s*=\s*"bar"/g), "<code>foo</code> is exported.");'
  - text: <code>bar</code> экспортируется.
    testString: 'getUserInput => assert(getUserInput("index").match(/export\s+const\s+bar\s*=\s*"foo"/g), "<code>bar</code> is exported.");'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
const foo = "bar";
const bar = "foo";

```

</div>

### Before Tests
<div id='js-setup'>

```js
window.exports = function(){};

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
