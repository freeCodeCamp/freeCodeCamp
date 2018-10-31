---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: Доступ к содержимому массива с использованием скобок
---

## Description
<section id="description"> Основополагающей особенностью любой структуры данных является, конечно же, способность не только хранить данные, но и получать эти данные по команде. Итак, теперь, когда мы научились создавать массив, давайте начнем думать о том, как мы можем получить доступ к информации этого массива. Когда мы определяем простой массив, как показано ниже, в нем есть 3 элемента: <blockquote> пусть ourArray = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]; </blockquote> В массиве каждый элемент массива имеет <dfn>индекс</dfn> . Этот показатель удваивается как позиция этого элемента в массиве и как вы его ссылаетесь. Однако важно отметить, что массивы JavaScript <dfn>ноль-индексируются</dfn> , что означает, что первый элемент массива находится в <em><strong>нулевом</strong></em> положении, а не в первом. Чтобы получить элемент из массива, мы можем заключить индекс в скобки и добавить его в конец массива или, более часто, к переменной, которая ссылается на объект массива. Это называется <dfn>скобкой</dfn> . Например, если мы хотим получить <code>&quot;a&quot;</code> из <code>ourArray</code> и назначить его переменной, мы можем сделать это со следующим кодом: <blockquote> let ourVariable = ourArray [0]; <br> // ourVariable равно &quot;a&quot; </blockquote> Помимо доступа к значению, связанному с индексом, вы также можете <em>установить</em> индекс в значение с использованием той же записи: <blockquote> ourArray [1] = &quot;not b больше&quot;; <br> // ourArray теперь равен [&quot;a&quot;, &quot;not b больше&quot;, &quot;c&quot;]; </blockquote> Используя нотацию с помощью скобок, мы теперь перезагружаем элемент с индексом 1 от <code>&quot;b&quot;</code> , до <code>&quot;not b anymore&quot;</code> . </section>

## Instructions
<section id="instructions"> Чтобы завершить эту задачу, установите вторую позицию (индекс <code>1</code> ) <code>myArray</code> на все, что вы хотите, помимо <code>&quot;b&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray[0]</code> равно <code>&quot;a&quot;</code>'
    testString: 'assert.strictEqual(myArray[0], "a", "<code>myArray[0]</code> is equal to <code>"a"</code>");'
  - text: '<code>myArray[1]</code> больше не установлен на <code>&quot;b&quot;</code>'
    testString: 'assert.notStrictEqual(myArray[1], "b", "<code>myArray[1]</code> is no longer set to <code>"b"</code>");'
  - text: '<code>myArray[2]</code> равен <code>&quot;c&quot;</code>'
    testString: 'assert.strictEqual(myArray[2], "c", "<code>myArray[2]</code> is equal to <code>"c"</code>");'
  - text: ''
    testString: 'assert.strictEqual(myArray[3], "d", "<code>myArray[3]</code> is equal to <code>"d"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = ["a", "b", "c", "d"];
// change code below this line

//change code above this line
console.log(myArray);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
