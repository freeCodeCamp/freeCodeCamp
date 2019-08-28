---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
challengeType: 1
forumTopicId: 301237
localeTitle: Возвращает отсортированный массив без изменения исходного массива
---

## Description
<section id='description'>
Побочным эффектом метода <code>sort</code> является то, что он изменяет порядок элементов в исходном массиве. Другими словами, он мутирует массив на месте. Один из способов избежать этого - сначала связать пустой массив с тем, который был отсортирован (помните, что <code>concat</code> возвращает новый массив), затем запустите метод <code>sort</code> .
</section>

## Instructions
<section id='instructions'>
Используйте метод <code>sort</code> в функции <code>nonMutatingSort</code> для сортировки элементов массива в порядке возрастания. Функция должна возвращать новый массив, а не мутировать переменную <code>globalArray</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>sort</code> method.
    testString: assert(nonMutatingSort.toString().match(/\.sort/g));
  - text: The <code>globalArray</code> variable should not change.
    testString: assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
  - text: <code>nonMutatingSort(globalArray)</code> should return <code>[2, 3, 5, 6, 9]</code>.
    testString: assert(JSON.stringify(nonMutatingSort(globalArray)) === JSON.stringify([2, 3, 5, 6, 9]));
  - text: <code>nonMutatingSort(globalArray)</code> should not be hard coded.
    testString: assert(!nonMutatingSort.toString().match(/[23569]/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line


  // Add your code above this line
}
nonMutatingSort(globalArray);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort((a,b) => a-b);
  // Add your code above this line
}
nonMutatingSort(globalArray);
```

</section>
