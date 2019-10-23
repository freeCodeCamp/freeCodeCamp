---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
videoUrl: https://scrimba.com/c/cy87wue
forumTopicId: 18271
localeTitle: Возврат значения из функции с возвратом
---

## Description
<section id='description'>
Мы можем передавать значения в функцию с <dfn>аргументами</dfn> . Вы можете использовать оператор <code>return</code> чтобы отправить значение обратно из функции. <strong>пример</strong> <blockquote> function plusThree (num) { <br> return num + 3; <br> } <br> var answer = plusThree (5); // 8 </blockquote> <code>plusThree</code> принимает <dfn>аргумент</dfn> для <code>num</code> и возвращает значение, равное <code>num + 3</code> .
</section>

## Instructions
<section id='instructions'>
Создайте функцию <code>timesFive</code> которая принимает один аргумент, умножает его на <code>5</code> и возвращает новое значение. См. Последнюю строку в редакторе для примера того, как вы можете проверить свою функцию <code>timesFive</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>timesFive</code> should be a function
    testString: assert(typeof timesFive === 'function');
  - text: <code>timesFive(5)</code> should return <code>25</code>
    testString: assert(timesFive(5) === 25);
  - text: <code>timesFive(2)</code> should return <code>10</code>
    testString: assert(timesFive(2) === 10);
  - text: <code>timesFive(0)</code> should return <code>0</code>
    testString: assert(timesFive(0) === 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line



console.log(minusSeven(10));

```

</div>

</section>

## Solution
<section id='solution'>

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```

</section>
