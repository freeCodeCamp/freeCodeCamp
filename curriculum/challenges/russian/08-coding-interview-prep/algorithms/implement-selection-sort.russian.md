---
id: 587d8259367417b2b2512c85
title: Implement Selection Sort
challengeType: 1
forumTopicId: 301616
localeTitle: Реализация Сортировки выбором
---

## Description
<section id='description'>
Здесь мы будем применять сортировку выбором. Сортировка выбором работает, выбирая минимальное значение в списке и меняя его с первым значением в списке. Затем он начинается со второй позиции, выбирает наименьшее значение в оставшемся списке и свопирует его со вторым элементом. Он продолжает итерирование по списку и свопинг элементов до тех пор, пока он не достигнет конца списка. Теперь список отсортирован. Сортировка выбора имеет квадратичную временную сложность во всех случаях. <strong>Инструкции</strong> : Напишите функцию <code>selectionSort</code> которая принимает массив целых чисел в качестве входных данных и возвращает массив этих целых чисел в отсортированном порядке от наименьшего к наибольшему. <strong>Заметка:</strong> <br> Мы вызываем эту функцию из-за кулис; тестовый массив, который мы используем, закомментирован в редакторе. Попробуйте logging <code>array</code> чтобы увидеть ваш алгоритм сортировки в действии!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>selectionSort</code> is a function.
    testString: assert(typeof selectionSort == 'function');
  - text: <code>selectionSort</code> returns a sorted array (least to greatest).
    testString: assert(isSorted(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>selectionSort</code> returns an array that is unchanged except for order.
    testString: assert.sameMembers(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>selectionSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert(isBuiltInSortUsed());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function selectionSort(array) {
  // change code below this line
  return array;
  // change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

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
  selectionSort([0, 1]);
  return !sortUsed;
}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let minimumIndex = i;
    for (let j = i+1; j < array.length; j++){ 
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let value = array[minimumIndex];
    array[minimumIndex] = array[i]; 
    array[i] = value; 
  } 
    return array;
}
```

</section>
