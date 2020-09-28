---
id: 587d825c367417b2b2512c8f
title: Implement Merge Sort
challengeType: 1
forumTopicId: 301614
localeTitle: Реализация Merge Sort
---

## Description
<section id='description'>
Другим промежуточным алгоритмом сортировки, который очень распространен, является сортировка слияния. Подобно быстрой сортировке, сортировка слиянием также использует метод рекурсивного анализа для разделения массива. Сортировка использует тот факт, что легче сортировать два массива меньшего размера, нежели один большего. <br>В качестве входных данных начнем с неотсортированного массива. Как мы можем перейти к двум отсортированным массивам? Мы можем рекурсивно разделить исходный ввод на два, пока не достигнем базового случая массива с одним элементом. Массив из одного элемента естественно сортируется, поэтому мы можем начать комбинировать. Эта комбинация будет раскручивать рекурсивные вызовы, разделяющие исходный массив, в конечном итоге создавая окончательный отсортированный массив всех элементов. 
  Затем выполняются шаги сортировки слияния: 
  <br><strong>1)</strong> Рекурсивно разделить входной массив пополам, пока не будет создан массив только с одним элементом.       <br><strong>2)</strong> Объединтить каждый отсортированный подмассив вместе, чтобы получить окончательный отсортированный массив. 
  Сортировка Merge - это эффективный метод сортировки со алгоритмически-оптимальной сложностью <i>O (nlog (n))</i> . Этот алгоритм популярен, потому что он прост в реализации. <br>Это будет последний эффективный алгоритм сортировки, который мы рассмотрим здесь. Однако позже в разделе о структурах древовидных данных мы опишем сортировку кучи (HeapSort), еще один эффективный метод сортировки, который требует реализацию бинарной кучи. 
  <strong>Инструкции:</strong> Напишите функцию <code>mergeSort</code> которая принимает массив целых чисел в качестве входных данных и возвращает массив этих целых чисел в отсортированном порядке от наименьшего к наибольшему. Хороший способ реализовать это - написать одну функцию, например <code>merge</code> , которая отвечает за объединение двух отсортированных массивов и другую функцию, например, <code>mergeSort</code> , которая отвечает за слияние. Удачи! 
  <strong>Заметка:</strong> <br> Мы вызываем эту функцию из-за кулис; тестовый массив, который мы используем, закомментирован в редакторе. Попробуйте logging <code>array</code> чтобы увидеть ваш алгоритм сортировки в действии!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mergeSort</code> is a function.
    testString: assert(typeof mergeSort == 'function');
  - text: <code>mergeSort</code> returns a sorted array (least to greatest).
    testString: assert(isSorted(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>mergeSort</code> returns an array that is unchanged except for order.
    testString: assert.sameMembers(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>mergeSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert(isBuiltInSortUsed());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mergeSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

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
  mergeSort([0, 1]);
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
