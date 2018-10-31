---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
videoUrl: ''
localeTitle: Возврат значения из функции с возвратом
---

## Description
<section id="description"> Мы можем передавать значения в функцию с <dfn>аргументами</dfn> . Вы можете использовать оператор <code>return</code> чтобы отправить значение обратно из функции. <strong>пример</strong> <blockquote> function plusThree (num) { <br> return num + 3; <br> } <br> var answer = plusThree (5); // 8 </blockquote> <code>plusThree</code> принимает <dfn>аргумент</dfn> для <code>num</code> и возвращает значение, равное <code>num + 3</code> . </section>

## Instructions
<section id="instructions"> Создайте функцию <code>timesFive</code> которая принимает один аргумент, умножает его на <code>5</code> и возвращает новое значение. См. Последнюю строку в редакторе для примера того, как вы можете проверить свою функцию <code>timesFive</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>timesFive</code> должна быть функцией
    testString: 'assert(typeof timesFive === "function", "<code>timesFive</code> should be a function");'
  - text: <code>timesFive(5)</code> должен вернуть <code>25</code>
    testString: 'assert(timesFive(5) === 25, "<code>timesFive(5)</code> should return <code>25</code>");'
  - text: <code>timesFive(2)</code> должен вернуть <code>10</code>
    testString: 'assert(timesFive(2) === 10, "<code>timesFive(2)</code> should return <code>10</code>");'
  - text: <code>timesFive(0)</code> должен возвращать <code>0</code>
    testString: 'assert(timesFive(0) === 0, "<code>timesFive(0)</code> should return <code>0</code>");'

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
// solution required
```
</section>
