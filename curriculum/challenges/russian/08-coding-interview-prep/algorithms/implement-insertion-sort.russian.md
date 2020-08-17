---
id: 587d8259367417b2b2512c86
title: Implement Insertion Sort
challengeType: 1
forumTopicId: 301613
localeTitle: Внедрить сортировку вставками
---

## Description
<section id='description'>
Следующий метод сортировки, на который мы будем смотреть - это сортировка вставками. Этот метод работает, создавая сортированный массив в начале списка. Он создает сортированный массив с первым элементом. Затем он проверяет следующий элемент и свопирует его обратно в отсортированный массив до тех пор, пока он не будет отсортирован. Он продолжает итерирование по списку и сворачивание новых элементов назад в отсортированную часть до тех пор, пока она не достигнет конца. Этот алгоритм имеет квадратичную временную сложность в среднем и худшем случае. <strong>Инструкции:</strong> Напишите функцию <code>insertionSort</code> которая принимает массив целых чисел в качестве входных данных и возвращает массив этих целых чисел в отсортированном порядке от наименьшего к наибольшему. <strong>Заметка:</strong> <br> Мы вызываем эту функцию из-за кулис; тестовый массив, который мы используем, закомментирован в редакторе. Попробуйте logging <code>array</code> чтобы увидеть ваш алгоритм сортировки в действии!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>insertionSort</code> is a function.
    testString: assert(typeof insertionSort == 'function');
  - text: <code>insertionSort</code> returns a sorted array (least to greatest).
    testString: assert(isSorted(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>insertionSort</code> returns an array that is unchanged except for order.
    testString: assert.sameMembers(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>insertionSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert(isBuiltInSortUsed());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function insertionSort(array) {
  // change code below this line
  return array;
  // change code above this line
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

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
  insertionSort([0, 1]);
  return !sortUsed;
}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function insertionSort (array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let current = array[currentIndex];
    let j = currentIndex - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```

</section>
