---
id: 587d7b8c367417b2b2512b55
title: Understand the Differences Between import and require
challengeType: 1
videoUrl: ''
localeTitle: Понимание различий между импортом и требованием
---

## Description
<section id='description'>
Раньше функция <code>require()</code> использовалась для импорта функций и кода во внешние файлы и модули. Хотя это удобно, это создает проблему: некоторые файлы и модули довольно большие, и вам может понадобиться только определенный код из этих внешних ресурсов. ES6 дает нам очень удобный инструмент, известный как <dfn>импорт</dfn> . С его помощью мы можем выбрать, какие части модуля или файла загружать в данный файл, экономя время и память. Рассмотрим следующий пример. Представьте, что <code>math_array_functions</code> имеет около 20 функций, но мне нужен только один <code>countItems</code> в моем текущем файле. Старый метод <code>require()</code> заставил бы меня задействовать все 20 функций. С помощью этого нового синтаксиса <code>import</code> я могу привести только желаемую функцию, например: <blockquote> import {countItems} из &quot;math_array_functions&quot; </blockquote> Описание приведенного выше кода: <blockquote> import {function} из &quot;file_path_goes_here&quot; <br> // Мы также можем импортировать переменные одинаково! </blockquote> Существует несколько способов написания оператора <code>import</code> , но это очень распространенный случай использования. <strong>Заметка</strong> <br> Пробел, окружающий функцию внутри фигурных скобок, является лучшей практикой - упрощает чтение инструкции <code>import</code> . <strong>Заметка</strong> <br> В уроках этого раздела используются функции, отличные от браузера. <code>import</code> и заявления, которые мы вводим на оставшихся уроках, не будут работать в браузере напрямую. Однако мы можем использовать различные инструменты для создания кода из этого, чтобы он работал в браузере. <strong>Заметка</strong> <br> В большинстве случаев путь к файлу требует <code>./</code> перед ним; в противном случае узел будет выглядеть в каталоге <code>node_modules</code> сначала пытаясь загрузить его как зависимость.
</section>

## Instructions
<section id='instructions'>
Добавьте соответствующий оператор <code>import</code> , который позволит текущему файлу использовать функцию <code>capitalizeString</code> . Файл, в котором работает эта функция, называется <code>&quot;string_functions&quot;</code> , и он находится в том же каталоге, что и текущий файл.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: действительный оператор <code>import</code>
    testString: 'getUserInput => assert(getUserInput("index").match(/import\s+\{\s*capitalizeString\s*\}\s+from\s+("|")string_functions\1/g), "valid <code>import</code> statement");'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
capitalizeString("hello!");

```

</div>

### Before Tests
<div id='js-setup'>

```js
window.require = function (str) {
if (str === 'string_functions') {
return {
capitalizeString: str => str.toUpperCase()
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
