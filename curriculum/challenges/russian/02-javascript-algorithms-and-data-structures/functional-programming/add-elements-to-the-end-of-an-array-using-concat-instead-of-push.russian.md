---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
forumTopicId: 301226
localeTitle: Добавление элементов в конец массива используя concat вместо push
---

## Description
<section id='description'>
Функциональное программирование - это создание и использование не мутирующих функций. Предыдущая проблема ввела метод <code>concat</code> как способ объединить массивы, не изменяя исходные. Сравните <code>concat</code> с методом <code>push</code> . <code>Push</code> добавляет элемент в конец того же самого массива, на котором он вызывается, изменяя этот массив. Вот пример: <blockquote> var arr = [1, 2, 3]; <br> arr.push ([4, 5, 6]); <br> // arr изменяется на [1, 2, 3, [4, 5, 6]] <br> // Не функциональный способ программирования </blockquote> <code>Concat</code> предлагает способ добавления новых элементов в конец массива без каких-либо мутирующих побочных эффектов.
</section>

## Instructions
<section id='instructions'>
Измените функцию <code>nonMutatingPush</code> чтобы она использовала <code>concat</code> для добавления <code>newItem</code> в конец <code>original</code> вместо <code>push</code> . Функция должна возвращать массив.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>concat</code> method.
    testString: assert(code.match(/\.concat/g));
  - text: Your code should not use the <code>push</code> method.
    testString: assert(!code.match(/\.push/g));
  - text: The <code>first</code> array should not change.
    testString: assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
  - text: The <code>second</code> array should not change.
    testString: assert(JSON.stringify(second) === JSON.stringify([4, 5]));
  - text: <code>nonMutatingPush([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.
    testString: assert(JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]));

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
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

</section>
