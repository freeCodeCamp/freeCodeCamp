---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1
videoUrl: ''
localeTitle: Импорт экспорта по умолчанию
---

## Description
<section id="description"> В последней задаче вы узнали об <code>export default</code> и его использовании. Важно отметить, что для импорта экспорта по умолчанию вам нужно использовать другой синтаксис <code>import</code> . В следующем примере у нас есть функция <code>add</code> , то есть экспорт по умолчанию файла <code>&quot;math_functions&quot;</code> . Вот как его импортировать: <blockquote> import добавить из &quot;math_functions&quot;; <br> добавить (5,4); // Вернет 9 </blockquote> Синтаксис отличается в одном ключевом месте - импортированное значение, <code>add</code> , не окружено фигурными фигурными скобками <code>{}</code> . В отличие от экспортированных значений основным методом импорта экспорта по умолчанию является простое имя значения после <code>import</code> . </section>

## Instructions
<section id="instructions"> В следующем коде, пожалуйста, импортируйте экспорт по умолчанию, <code>subtract</code> из файла <code>&quot;math_functions&quot;</code> , найденного в том же каталоге, что и этот файл. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Правильно импортирует метод <code>export default</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/import\s+subtract\s+from\s+"math_functions"/g), "Properly imports <code>export default</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
subtract(7,4);

```

</div>

### Before Test
<div id='js-setup'>

```js
window.require = function(str) {
if (str === 'math_functions') {
return function(a, b) {
return a - b;
}}};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
