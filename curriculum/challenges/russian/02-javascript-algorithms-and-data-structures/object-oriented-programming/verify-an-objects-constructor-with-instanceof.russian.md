---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
forumTopicId: 301337
localeTitle: Проверка конструктора объекта с помощью instanceof
---

## Description
<section id='description'>
Каждый раз, когда функция-конструктор создает новый объект, этот объект считается <code>instance</code> его конструктора. JavaScript дает удобный способ проверить это с помощью <code>instanceof</code> оператора. <code>instanceof</code> позволяет сравнивать объект с конструктором, возвращая <code>true</code> или <code>false</code> на основе того, был ли этот объект создан с помощью конструктора. Вот пример: <blockquote> let Bird = function (имя, цвет) { <br> this.name = name; <br> this.color = color; <br> this.numLegs = 2; <br> } <br><br> пусть ворона = новая птица («Алексис», «черный»); <br><br> ворон экземпляр птицы; // =&gt; true </blockquote> Если объект создается без использования конструктора, <code>instanceof</code> проверяет, что он не является экземпляром этого конструктора: <blockquote> let canary = { <br> имя: «Милдред», <br> цвет: «Желтый», <br> numLegs: 2 <br> }; <br><br> canary instanceof Bird; // =&gt; false </blockquote>
</section>

## Instructions
<section id='instructions'>
Создайте новый экземпляр конструктора <code>House</code> , назвав его <code>myHouse</code> и пропустив несколько спален. Затем используйте <code>instanceof</code> чтобы убедиться, что это экземпляр <code>House</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myHouse</code> should have a <code>numBedrooms</code> attribute set to a number.
    testString: assert(typeof myHouse.numBedrooms === 'number');
  - text: Be sure to verify that <code>myHouse</code> is an instance of <code>House</code> using the <code>instanceof</code> operator.
    testString: assert(/myHouse\s*instanceof\s*House/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```

</section>
