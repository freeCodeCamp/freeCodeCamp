---
id: 587d7da9367417b2b2512b66
title: Combine Two Arrays Using the concat Method
challengeType: 1
videoUrl: ''
localeTitle: Объединить два массива с помощью метода concat
---

## Description
<section id="description"> <code>Concatenation</code> означает объединение объектов до конца. JavaScript предлагает метод <code>concat</code> для строк и массивов, которые работают одинаково. Для массивов метод вызывается на один, затем другой массив предоставляется как аргумент <code>concat</code> , который добавляется в конец первого массива. Он возвращает новый массив и не мутирует ни один из исходных массивов. Вот пример: <blockquote> [1, 2, 3] .concat ([4, 5, 6]); <br> // Возвращает новый массив [1, 2, 3, 4, 5, 6] </blockquote></section>

## Instructions
<section id="instructions"> Используйте <code>concat</code> метод в <code>nonMutatingConcat</code> функции конкатенации <code>attach</code> к концу <code>original</code> . Функция должна возвращать конкатенированный массив. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать метод <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: <code>first</code> массив не должен меняться.
    testString: 'assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]), "The <code>first</code> array should not change.");'
  - text: <code>second</code> массив не должен меняться.
    testString: 'assert(JSON.stringify(second) === JSON.stringify([4, 5]), "The <code>second</code> array should not change.");'
  - text: '<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> должен возвращать <code>[1, 2, 3, 4, 5]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingConcat(original, attach) {
  // Add your code below this line


  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
