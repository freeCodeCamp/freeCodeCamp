---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
forumTopicId: 301612
localeTitle: Реализация Сортировки пузырьком
---

## Description
<section id='description'>
Это первая из нескольких задач алгоритмов сортировки. Учитывая массив несортированных элементов, мы хотим иметь возможность возвращать отсортированный массив. Мы рассмотрим несколько различных методов для этого и изучим некоторые компромиссы между этими различными подходами. Хотя большинство современных языков имеют встроенные методы сортировки для таких операций, все же важно понять некоторые из общих базовых подходов и узнать, как они могут быть реализованы. Здесь мы увидим вид пузыря. Метод сортировки пузырьков начинается с начала несортированного массива и «выравнивает» несортированные значения до конца, итерации по массиву до тех пор, пока он не будет полностью отсортирован. Он делает это, сравнивая смежные элементы и заменяя их, если они не соответствуют порядку. Метод продолжает цикл через массив до тех пор, пока не произойдет своп, после чего массив будет отсортирован. Этот метод требует нескольких итераций через массив, а для средних и худших случаев имеет квадратичную временную сложность. Хотя это просто, в большинстве случаев это обычно нецелесообразно. Инструкции: Напишите функцию bubbleSort, которая принимает массив целых чисел в качестве входных данных и возвращает массив этих целых чисел в отсортированном порядке от наименьшего к наибольшему. Замечания:
Мы вызываем эту функцию из-за кулис; тестовый массив, который мы используем, закомментирован в редакторе. Попробуйте logging array, чтобы увидеть ваш алгоритм сортировки в действии!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>bubbleSort</code> is a function.
    testString: assert(typeof bubbleSort == 'function');
  - text: <code>bubbleSort</code> returns a sorted array (least to greatest).
    testString: assert(isSorted(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>bubbleSort</code> returns an array that is unchanged except for order.
    testString: assert.sameMembers(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>bubbleSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert(isBuiltInSortUsed());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bubbleSort(array) {
  // change code below this line
  return array;
  // change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

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
  bubbleSort([0, 1]);
  return !sortUsed;
}
```

</div>

</section>

## Solution
<section id='solution'>

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j-1];
        array[j-1] =  array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return array;
}
```

</section>
