---
id: 587d8259367417b2b2512c85
title: Implement Selection Sort
challengeType: 1
videoUrl: ''
localeTitle: Реализация Сортировки выбором
---

## Описание
<section id="description"> Здесь мы будем применять сортировку выбором. Сортировка выбором работает, выбирая минимальное значение в списке и меняя его с первым значением в списке. Затем он начинается со второй позиции, выбирает наименьшее значение в оставшемся списке и свопирует его со вторым элементом. Он продолжает итерирование по списку и свопинг элементов до тех пор, пока он не достигнет конца списка. Теперь список отсортирован. Сортировка выбора имеет квадратичную временную сложность во всех случаях. <strong>Инструкции</strong> : Напишите функцию <code>selectionSort</code> которая принимает массив целых чисел в качестве входных данных и возвращает массив этих целых чисел в отсортированном порядке от наименьшего к наибольшему. <strong>Заметка:</strong> <br> Мы вызываем эту функцию из-за кулис; тестовый массив, который мы используем, закомментирован в редакторе. Попробуйте logging <code>array</code> чтобы увидеть ваш алгоритм сортировки в действии! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>selectionSort</code> - это функция.
    testString: 'assert(typeof selectionSort == "function", "<code>selectionSort</code> is a function.");'
  - text: <code>selectionSort</code> возвращает отсортированный массив (от наименьшего к наибольшему).
    testString: 'assert(isSorted(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>selectionSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>selectionSort</code> возвращает массив, который не изменяется, кроме порядка.'
    testString: 'assert.sameMembers(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>selectionSort</code> returns an array that is unchanged except for order.");'
  - text: <code>selectionSort</code> не должен использовать встроенный метод <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>selectionSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function selectionSort(array) {
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
