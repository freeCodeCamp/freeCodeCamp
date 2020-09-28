---
id: 587d7b85367417b2b2512b38
title: Catch Use of Assignment Operator Instead of Equality Operator
challengeType: 1
forumTopicId: 301191
localeTitle: Поймать использование оператора присваивания вместо оператора равенства
---

## Description
<section id='description'>
Ветвящиеся программы, то есть те, которые выполняют разные вещи, если выполняются определенные условия, полагаются на <code>if</code> , <code>else if</code> и <code>else</code> в JavaScript. Условие иногда принимает форму проверки того, равен ли результат равному значению. Эта логика произносится (по крайней мере, на английском языке) как «если x равно y, тогда ...», которая может буквально перевести на код с помощью оператора <code>=</code> или присваивания. Это приводит к непредвиденному потоку управления в вашей программе. Как описано в предыдущих задачах, оператор присваивания ( <code>=</code> ) в JavaScript присваивает значение имени переменной. И операторы <code>==</code> и <code>===</code> проверяют равенство (тройные <code>===</code> тесты для строгого равенства, что означает как значение, так и тип). Приведенный ниже код присваивает <code>x</code> равному 2, который оценивается как <code>true</code> . Почти каждое значение само по себе в JavaScript оценивается как <code>true</code> , кроме тех, которые известны как «ложные» значения: <code>false</code> , <code>0</code> , <code>&quot;&quot;</code> (пустая строка), <code>NaN</code> , <code>undefined</code> и <code>null</code> . <blockquote> пусть x = 1; <br> пусть у = 2; <br> если (x = y) { <br> // этот кодовый блок будет выполняться для любого значения y (если y изначально не было установлено как ложь) <br> } else { <br> // этот блок кода - это то, что должно выполняться (но не будет) в этом примере <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Исправьте условие, чтобы программа выполняла правильную ветвь, и соответствующее значение присваивается <code>result</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should fix the condition so it checks for equality, instead of using assignment.
    testString: assert(result == "Not equal!");
  - text: The condition can use either <code>==</code> or <code>===</code> to test for equality.
    testString: assert(code.match(/x\s*?===?\s*?y/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```

</section>
