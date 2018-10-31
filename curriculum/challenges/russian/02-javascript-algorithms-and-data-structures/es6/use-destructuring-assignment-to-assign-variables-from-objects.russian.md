---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
videoUrl: ''
localeTitle: Использование назначения назначения для назначения переменных из объектов
---

## Description
<section id="description"> Ранее мы видели, как оператор распространения может эффективно распространять или распаковывать содержимое массива. Мы можем сделать что-то подобное с объектами. <dfn>Назначение деструктурирования</dfn> - это специальный синтаксис для аккуратного назначения значений, взятых непосредственно из объекта в переменные. Рассмотрим следующий код ES5: <blockquote> var voxel = {x: 3.6, y: 7.4, z: 6.54}; <br> var x = voxel.x; // x = 3.6 <br> var y = voxel.y; // y = 7.4 <br> var z = voxel.z; // z = 6,54 </blockquote> Вот тот же оператор присваивания с синтаксисом деструктуризации ES6: <blockquote> const {x, y, z} = воксел; // x = 3,6, y = 7,4, z = 6,54 </blockquote> Если вместо этого вы хотите сохранить значения <code>voxel.x</code> в <code>a</code> , <code>voxel.y</code> в <code>b</code> и <code>voxel.z</code> в <code>c</code> , у вас тоже есть эта свобода. <blockquote> const {x: a, y: b, z: c} = voxel // a = 3.6, b = 7.4, c = 6.54 </blockquote> Вы можете прочитать это как «получить поле <code>x</code> и скопировать значение в <code>a</code> » и так далее. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getTempOfTmrw(AVG_TEMPERATURES)</code> должно быть <code>79</code>
    testString: 'assert(getTempOfTmrw(AVG_TEMPERATURES) === 79, "<code>getTempOfTmrw(AVG_TEMPERATURES)</code> should be <code>79</code>");'
  - text: использовалось деструктурирование с переназначением
    testString: 'getUserInput => assert(getUserInput("index").match(/\{\s*tomorrow\s*:\s*tempOfTomorrow\s*}\s*=\s*avgTemperatures/g),"destructuring with reassignment was used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const tempOfTomorrow = undefined; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
