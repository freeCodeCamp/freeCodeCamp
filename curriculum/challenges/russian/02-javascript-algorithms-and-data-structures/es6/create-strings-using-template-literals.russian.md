---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
challengeType: 1
forumTopicId: 301200
localeTitle: Создание строк с использованием шаблонных литералов
---

## Description
<section id='description'>
Новая функция ES6 - это <dfn>шаблонный литерал</dfn> . Это специальный тип строки, который упрощает создание сложных строк. Литералы шаблонов позволяют создавать многострочные строки и использовать функции интерполяции строк для создания строк. Рассмотрим следующий код: <blockquote> const person = { <br> name: "Зодиак Хасбро", <br> age: 56 <br> }; <br><br> // Литерал шаблона с многострочной и строковой интерполяцией <br> const greeting = `Привет, меня зовут $ {person.name}! <br> Мне $ {person.age} лет. &#39;; <br><br> console.log (greeting); // печатает <br> // Привет, меня зовут Асбро! <br> // Мне 56 лет. <br></blockquote> Тут произошло несколько вещей. Во-первых, в примере используются обратный штрих ( <code>`</code> ), а не кавычки ( <code>&#39;</code> или <code>&quot;</code> ), чтобы обернуть строку. Во-вторых, обратите внимание, что строка является многострочной, как в коде, так и в выводе. Это сохраняет вставку <code>\n</code> внутри строк. Синтаксис <code>${variable}</code> используемый выше, является заполнителем. В принципе, вам больше не нужно будет использовать конкатенацию с оператором <code>+</code> . Чтобы добавить переменные в строки, вы просто вставляете переменную в строку шаблона и оборачиваете ее <code>${</code> и <code>}</code> Аналогичным образом вы можете включить другие выражения в строковый литерал, например <code>${a + b}</code> . Этот новый способ создания строк дает вам больше гибкости для создания надежных строк.
</section>

## Instructions
<section id='instructions'>
Используйте синтаксис литерала шаблона с обратными штрихами для отображения каждой записи массива <code>failure</code> объекта <code>result</code> . Каждая запись должна быть обернута внутрь элемента <code>li</code> с атрибутом класса <code>text-warning</code> и указана в <code>resultDisplayArray</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>resultDisplayArray</code> should be an array containing <code>result failure</code> messages.
    testString: assert(typeof makeList(result.failure) === 'object' && resultDisplayArray.length === 3);
  - text: <code>resultDisplayArray</code> is the desired output.
    testString: assert(makeList(result.failure).every((v, i) => v === `<li class="text-warning">${result.failure[i]}</li>` || v === `<li class='text-warning'>${result.failure[i]}</li>`));
  - text: Template strings and expression interpolation should be used
    testString: getUserInput => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
  - text: An iterator should be used
    testString: getUserInput => assert(getUserInput('index').match(/for|map|reduce|forEach|while/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = null;
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

```

</div>

</section>

## Solution
<section id='solution'>

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  
  const resultDisplayArray = arr.map(val => `<li class="text-warning">${val}</li>`);
  
  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
```

</section>
