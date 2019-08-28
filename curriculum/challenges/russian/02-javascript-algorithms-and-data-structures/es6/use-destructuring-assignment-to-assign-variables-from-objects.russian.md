---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
forumTopicId: 301215
localeTitle: Использование назначения назначения для назначения переменных из объектов
---

## Description
<section id='description'>
Ранее мы видели, как оператор распространения может эффективно распространять или распаковывать содержимое массива. Мы можем сделать что-то подобное с объектами. <dfn>Назначение деструктурирования</dfn> - это специальный синтаксис для аккуратного назначения значений, взятых непосредственно из объекта в переменные. Рассмотрим следующий код ES5: <blockquote> var voxel = {x: 3.6, y: 7.4, z: 6.54}; <br> var x = voxel.x; // x = 3.6 <br> var y = voxel.y; // y = 7.4 <br> var z = voxel.z; // z = 6,54 </blockquote> Вот тот же оператор присваивания с синтаксисом деструктуризации ES6: <blockquote> const {x, y, z} = воксел; // x = 3,6, y = 7,4, z = 6,54 </blockquote> Если вместо этого вы хотите сохранить значения <code>voxel.x</code> в <code>a</code> , <code>voxel.y</code> в <code>b</code> и <code>voxel.z</code> в <code>c</code> , у вас тоже есть эта свобода. <blockquote> const {x: a, y: b, z: c} = voxel // a = 3.6, b = 7.4, c = 6.54 </blockquote> Вы можете прочитать это как «получить поле <code>x</code> и скопировать значение в <code>a</code> » и так далее.
</section>

## Instructions
<section id='instructions'>
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables <code>highToday</code> and <code>highTomorrow</code> the values of <code>today</code> and <code>tomorrow</code> from the <code>HIGH_TEMPERATURES</code> object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should remove the ES5 assignment syntax.
    testString: assert(!code.match(/highToday = HIGH_TEMPERATURES\.today/g) && !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g))
  - text: You should use destructuring to create the <code>highToday</code> variable.
    testString: assert(code.match(/(var|const|let)\s*{\s*(today:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));
  - text: You should use destructuring to create the <code>highTomorrow</code> variable.
    testString: assert(code.match(/(var|const|let)\s*{\s*(tomorrow:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// change code above this line

console.log(yesterday) // should be not defined
console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80

```

</div>

</section>

## Solution
<section id='solution'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line
  
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
```

</section>
