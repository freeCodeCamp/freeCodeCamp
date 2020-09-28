---
id: 587d7b8e367417b2b2512b5f
title: Pass Arguments to Avoid External Dependence in a Function
challengeType: 1
forumTopicId: 301234
localeTitle: Пропустить аргументы, чтобы избежать внешней зависимости в функции
---

## Description
<section id='description'>
Последняя задача была шагом ближе к принципам функционального программирования, но до сих пор что-то не хватает. Мы не изменили значение глобальной переменной, но <code>incrementer</code> функции не получило бы работу без глобальной переменной <code>fixedValue</code> . Другим принципом функционального программирования является всегда декларировать ваши зависимости явно. Это означает, что если функция зависит от переменной или объекта, присутствующего, то передайте эту переменную или объект непосредственно в функцию в качестве аргумента. Из этого принципа есть несколько хороших последствий. Функция легче протестировать, вы точно знаете, какой вклад она принимает, и она не будет зависеть от чего-либо еще в вашей программе. Это может дать вам больше уверенности при изменении, удалении или добавлении нового кода. Вы знаете, что можете или не можете изменить, и вы можете увидеть, где находятся потенциальные ловушки. Наконец, функция всегда будет выводить один и тот же вывод для одного и того же набора входов, независимо от того, какая часть кода выполняет его.
</section>

## Instructions
<section id='instructions'>
Давайте обновим функцию <code>incrementer</code> чтобы четко определить ее зависимости. Напишите функцию <code>incrementer</code> чтобы она приняла аргумент, а затем увеличила значение на единицу.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.
    testString: assert(fixedValue === 4);
  - text: Your <code>incrementer</code> function should take a parameter.
    testString: assert(incrementer.length === 1);
  - text: Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.
    testString: assert(newValue === 5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer () {


  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4

```

</div>

</section>

## Solution
<section id='solution'>

```js
// the global variable
var fixedValue = 4;

const incrementer = val => val + 1;

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
```

</section>
