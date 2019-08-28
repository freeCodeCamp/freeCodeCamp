---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Simple Fields
challengeType: 1
videoUrl: ''
localeTitle: Записывать краткие декларации объектов с использованием простых полей
---

## Description
<section id='description'>
ES6 добавляет отличную поддержку для простого определения литералов объектов. Рассмотрим следующий код: <blockquote> const getMousePosition = (x, y) =&gt; ({ <br> x: x, <br> y: y <br> }); </blockquote> <code>getMousePosition</code> - простая функция, которая возвращает объект, содержащий два поля. ES6 обеспечивает синтаксический сахар для устранения избыточности необходимости писать <code>x: x</code> . Вы можете просто написать <code>x</code> один раз, и он будет преобразован в <code>x: x</code> (или что-то подобное) под капотом. Вот такая же функция сверху переписана для использования этого нового синтаксиса: <blockquote> const getMousePosition = (x, y) =&gt; ({x, y}); </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте простые поля с объектными литералами для создания и возврата объекта <code>Person</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'вывод: <code>{name: &quot;Zodiac Hasbro&quot;, age: 56, gender: &quot;male&quot;}</code> .'
    testString: assert(() => {const res={name:'Zodiac Hasbro',age:56,gender:'male'}; const person=createPerson('Zodiac Hasbro', 56, 'male'); return Object.keys(person).every(k => person[k] === res[k]);});
  - text: 'Нет <code>:</code> были использованы.'
    testString: getUserInput => assert(!getUserInput('index').match(/:/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
