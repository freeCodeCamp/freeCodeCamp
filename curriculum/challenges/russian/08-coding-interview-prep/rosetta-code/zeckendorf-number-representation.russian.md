---
title: Zeckendorf number representation
id: 594810f028c0303b75339ad6
challengeType: 5
videoUrl: ''
localeTitle: Отметить номер деревни
---

## Description
<section id="description"><p> Подобно тому, как числа могут быть представлены в позиционной нотации как суммы кратных степеням десяти (десятичных) или двух (двоичных); все положительные целые числа могут быть представлены в виде суммы одного или нулевого числа отдельных членов ряда Фибоначчи. </p><p> Напомним, что первые шесть различных чисел Фибоначчи: <code>1, 2, 3, 5, 8, 13</code> . Десятичное число одиннадцать может быть записано как <code>0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1</code> или <code>010100</code> в позиционной нотации, где столбцы представляют собой умножение на определенный член последовательности. Ведущие нули отбрасываются так, что 11 десятичных знаков становятся <code>10100</code> . </p><p> 10100 - не единственный способ сделать 11 из чисел Фибоначчи, однако <code>0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1</code> или 010011 также будет представлять десятичную 11. Для истинного числа Зеекендорфа существует дополнительное ограничение, что «нельзя использовать два последовательных числа Фибоначчи», что приводит к первому уникальному решению. </p><p> Задача: Напишите функцию, которая генерирует и возвращает массив первых чисел N Zeckendorf по порядку. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: zeckendorf должен функционировать
    testString: 'assert.equal(typeof zeckendorf, "function", "zeckendorf must be function");'
  - text: Ваша функция <code>zeckendorf</code> должна вернуть правильный ответ
    testString: 'assert.deepEqual(answer, solution20, "Your <code>zeckendorf</code> function should return the correct answer");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function zeckendorf(n) {
  // good luck!
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
