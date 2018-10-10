---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
videoUrl: ''
localeTitle: Добавление элементов в конец массива Использование concat Вместо push
---

## Description
<section id="description"> Функциональное программирование - это создание и использование не мутирующих функций. Последняя проблема ввела метод <code>concat</code> как способ объединить массивы в новую, не изменяя исходные массивы. Сравните <code>concat</code> с методом <code>push</code> . <code>Push</code> добавляет элемент в конец того же самого массива, на который он вызывается, который мутирует этот массив. Вот пример: <blockquote> var arr = [1, 2, 3]; <br> arr.push ([4, 5, 6]); <br> // arr изменяется на [1, 2, 3, [4, 5, 6]] <br> // Не функциональный способ программирования </blockquote> <code>Concat</code> предлагает способ добавления новых элементов в конец массива без каких-либо мутирующих побочных эффектов. </section>

## Instructions
<section id="instructions"> Измените функцию <code>nonMutatingPush</code> чтобы она использовала <code>concat</code> для добавления <code>newItem</code> в конец <code>original</code> вместо <code>push</code> . Функция должна возвращать массив. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать метод <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: Ваш код не должен использовать метод <code>push</code> .
    testString: 'assert(!code.match(/\.push/g), "Your code should not use the <code>push</code> method.");'
  - text: <code>first</code> массив не должен меняться.
    testString: 'assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]), "The <code>first</code> array should not change.");'
  - text: <code>second</code> массив не должен меняться.
    testString: 'assert(JSON.stringify(second) === JSON.stringify([4, 5]), "The <code>second</code> array should not change.");'
  - text: '<code>nonMutatingPush([1, 2, 3], [4, 5])</code> должен возвращать <code>[1, 2, 3, 4, 5]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "<code>nonMutatingPush([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.push(newItem);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
