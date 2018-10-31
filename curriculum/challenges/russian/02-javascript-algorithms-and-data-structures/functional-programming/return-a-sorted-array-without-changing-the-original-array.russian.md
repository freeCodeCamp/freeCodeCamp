---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
challengeType: 1
videoUrl: ''
localeTitle: Возвращает отсортированный массив без изменения исходного массива
---

## Description
<section id="description"> Побочным эффектом метода <code>sort</code> является то, что он изменяет порядок элементов в исходном массиве. Другими словами, он мутирует массив на месте. Один из способов избежать этого - сначала связать пустой массив с тем, который был отсортирован (помните, что <code>concat</code> возвращает новый массив), затем запустите метод <code>sort</code> . </section>

## Instructions
<section id="instructions"> Используйте метод <code>sort</code> в функции <code>nonMutatingSort</code> для сортировки элементов массива в порядке возрастания. Функция должна возвращать новый массив, а не мутировать переменную <code>globalArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать метод <code>sort</code> .
    testString: 'assert(code.match(/\.sort/g), "Your code should use the <code>sort</code> method.");'
  - text: Ваш код должен использовать метод <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: Переменная <code>globalArray</code> не должна изменяться.
    testString: 'assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]), "The <code>globalArray</code> variable should not change.");'
  - text: '<code>nonMutatingSort(globalArray)</code> должен возвращать <code>[2, 3, 5, 6, 9]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingSort(globalArray)) === JSON.stringify([2, 3, 5, 6, 9]), "<code>nonMutatingSort(globalArray)</code> should return <code>[2, 3, 5, 6, 9]</code>.");'

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
// solution required
```
</section>
