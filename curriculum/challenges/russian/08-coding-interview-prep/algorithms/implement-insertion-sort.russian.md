---
id: 587d8259367417b2b2512c86
title: Implement Insertion Sort
challengeType: 1
videoUrl: ''
localeTitle: Внедрить сортировку вставки
---

## Description
<section id="description"> Следующий метод сортировки, на который мы будем смотреть, - это сортировка вставки. Этот метод работает, создавая сортированный массив в начале списка. Он начинает сортированный массив с первым элементом. Затем он проверяет следующий элемент и свопирует его обратно в отсортированный массив до тех пор, пока он не будет отсортирован. Он продолжает итерирование по списку и сворачивание новых элементов назад в отсортированную часть до тех пор, пока она не достигнет конца. Этот алгоритм имеет квадратичную временную сложность в среднем и худшем случае. <strong>Инструкции:</strong> Напишите функцию <code>insertionSort</code> которая принимает массив целых чисел в качестве входных данных и возвращает массив этих целых чисел в отсортированном порядке от наименьшего к наибольшему. <strong>Заметка:</strong> <br> Мы вызываем эту функцию из-за кулис; тестовый массив, который мы используем, закомментирован в редакторе. Попробуйте logging <code>array</code> чтобы увидеть ваш алгоритм сортировки в действии! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>insertionSort</code> - это функция.
    testString: 'assert(typeof insertionSort == "function", "<code>insertionSort</code> is a function.");'
  - text: <code>insertionSort</code> возвращает отсортированный массив (от наименьшего к наибольшему).
    testString: 'assert(isSorted(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>insertionSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>insertionSort</code> возвращает массив, который не изменяется, кроме порядка.'
    testString: 'assert.sameMembers(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>insertionSort</code> returns an array that is unchanged except for order.");'
  - text: <code>insertionSort</code> не должен использовать встроенный метод <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>insertionSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function insertionSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
