---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
challengeType: 1
videoUrl: ''
localeTitle: Создание строк с использованием шаблонных литералов
---

## Description
<section id="description"> Новая функция ES6 - это <dfn>шаблонный литерал</dfn> . Это специальный тип строки, который упрощает создание сложных строк. Литералы шаблонов позволяют создавать многострочные строки и использовать функции интерполяции строк для создания строк. Рассмотрим следующий код: <blockquote> const person = { <br> имя: «Зодиак Хасбро», <br> возраст: 56 <br> }; <br><br> // Литерал шаблона с многострочной и строковой интерполяцией <br> const greeting = `Привет, меня зовут $ {person.name}! <br> Я $ {person.age} лет. &#39;; <br><br> console.log (приветствие); // печатает <br> // Привет, меня зовут Асбро! <br> // Мне 56 лет. <br></blockquote> Там было много чего. Во-первых, в примере используются обратные элементы ( <code>`</code> ), а не кавычки ( <code>&#39;</code> или <code>&quot;</code> ), чтобы обернуть строку. Во-вторых, обратите внимание, что строка является многострочной, как в коде, так и в выводе. Это сохраняет вставку <code>\n</code> внутри строк. Синтаксис <code>${variable}</code> используемый выше, является заполнителем. В принципе, вам больше не нужно будет использовать конкатенацию с оператором <code>+</code> . Чтобы добавить переменные в строки, вы просто бросаете переменную в строку шаблона и обертываете ее <code>${</code> и <code>}</code> Аналогичным образом вы можете включить другие выражения в строковый литерал, например <code>${a + b}</code> . Этот новый способ создания строк дает вам больше гибкости для создания надежных строк. </section>

## Instructions
<section id="instructions"> Используйте синтаксис литерала шаблона с обратными выводами для отображения каждой записи массива <code>failure</code> объекта <code>result</code> . Каждая запись должна быть обернута внутри элемента <code>li</code> с <code>text-warning</code> атрибута класса и указана в <code>resultDisplayArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>resultDisplayArray</code> представляет собой массив , содержащий <code>result failure</code> сообщений.'
    testString: 'assert(typeof makeList(result.failure) === "object" && resultDisplayArray.length === 3, "<code>resultDisplayArray</code> is a list containing <code>result failure</code> messages.");'
  - text: <code>resultDisplayArray</code> - желаемый результат.
    testString: 'assert(makeList(result.failure).every((v, i) => v === `<li class="text-warning">${result.failure[i]}</li>` || v === `<li class="text-warning">${result.failure[i]}</li>`), "<code>resultDisplayArray</code> is the desired output.");'
  - text: Использовались строки шаблонов
    testString: 'getUserInput => assert(getUserInput("index").match(/`.*`/g), "Template strings were not used");'

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
// solution required
```
</section>
