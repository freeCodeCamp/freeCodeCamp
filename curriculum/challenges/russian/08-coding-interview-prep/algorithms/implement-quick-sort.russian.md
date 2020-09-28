---
id: 587d825a367417b2b2512c89
title: Implement Quick Sort
challengeType: 1
forumTopicId: 301615
localeTitle: Внедрить Quick Sort
---

## Description
<section id='description'>
Здесь мы перейдем к промежуточному алгоритму сортировки: быстрая сортировка. Быстрая сортировка - это эффективный, рекурсивный подход к сортировке массива. В этом методе в исходном массиве выбирается значение поворота. Массив затем разбивается на два подмассивов значений меньше и больше, чем значение поворота. Затем мы комбинируем результат рекурсивного вызова алгоритма быстрой сортировки на обоих подмассивах. Это продолжается до тех пор, пока не будет достигнут базовый случай для пустого или одного элемента массива, который мы вернем. Откат рекурсивных вызовов возвращает нам отсортированный массив. Быстрый сортировка - очень эффективный метод сортировки, обеспечивающий производительность <i>O (nlog (n))</i> в среднем. Это также относительно легко реализовать. Эти атрибуты делают его популярным и полезным методом сортировки. <strong>Инструкции:</strong> Напишите функцию <code>quickSort</code> которая принимает массив целых чисел в качестве входных данных и возвращает массив этих целых чисел в отсортированном порядке от наименьшего к наибольшему. В то время как выбор значения поворота важен, любой стержень будет делать для наших целей здесь. Для простоты можно использовать первый или последний элемент. <strong>Заметка:</strong> <br> Мы вызываем эту функцию из-за кулис; тестовый массив, который мы используем, закомментирован в редакторе. Попробуйте logging <code>array</code> чтобы увидеть ваш алгоритм сортировки в действии!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quickSort</code> is a function.
    testString: assert(typeof quickSort == 'function');
  - text: <code>quickSort</code> returns a sorted array (least to greatest).
    testString: assert(isSorted(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>quickSort</code> returns an array that is unchanged except for order.
    testString: assert.sameMembers(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>quickSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert(isBuiltInSortUsed());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

```

</div>

### After Tests
<div id='js-teardown'>

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}

function isBuiltInSortUsed(){
  let sortUsed = false;
  Array.prototype.sort = () => sortUsed = true;
  quickSort([0, 1]);
  return !sortUsed;
}
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
