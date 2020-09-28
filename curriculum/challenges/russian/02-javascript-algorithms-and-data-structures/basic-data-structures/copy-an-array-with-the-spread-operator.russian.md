---
id: 587d7b7b367417b2b2512b13
title: Copy an Array with the Spread Operator
challengeType: 1
forumTopicId: 301157
localeTitle: Скопируйте массив с помощью оператора распространения
---

## Description
<section id='description'>
Хотя <code>slice()</code> позволяет нам выбирать, какие элементы массива копировать, среди нескольких других полезных задач, новый <dfn>оператор с расширением</dfn> ES6 позволяет нам легко скопировать <em>все</em> элементы массива в порядке, с простым и хорошо читаемым синтаксисом. Синтаксис распространения просто выглядит так: <code>...</code> На практике мы можем использовать оператор спредов для копирования массива следующим образом: <blockquote> let thisArray = [true, true, undefined, false, null]; <br> let thatArray = [... thisArray]; <br> // thisArray равно [true, true, undefined, false, null] <br> // thisArray остается неизменным и идентичен этому массиву </blockquote>
</section>

## Instructions
<section id='instructions'>
Мы определили функцию <code>copyMachine</code> которая принимает <code>arr</code> (массив) и <code>num</code> (число) в качестве аргументов. Функция должна возвращать новый массив, состоящий из <code>num</code> копий <code>arr</code> . Мы выполнили большую часть работы для вас, но пока это не работает. Измените функцию, используя синтаксис распространения, чтобы он работал правильно (подсказка: здесь может быть полезен другой метод, который мы уже рассмотрели!).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>copyMachine([true, false, true], 2)</code> should return <code>[[true, false, true], [true, false, true]]</code>
    testString: assert.deepEqual(copyMachine([true, false, true], 2), [[true, false, true], [true, false, true]]);
  - text: <code>copyMachine([1, 2, 3], 5)</code> should return <code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>
    testString: assert.deepEqual(copyMachine([1, 2, 3], 5), [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]);
  - text: <code>copyMachine([true, true, null], 1)</code> should return <code>[[true, true, null]]</code>
    testString: assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
  - text: <code>copyMachine(["it works"], 3)</code> should return <code>[["it works"], ["it works"], ["it works"]]</code>
    testString: assert.deepEqual(copyMachine(['it works'], 3), [['it works'], ['it works'], ['it works']]);
  - text: The <code>copyMachine</code> function should utilize the <code>spread operator</code> with array <code>arr</code>
    testString: assert(removeJSComments(code).match(/\.\.\.arr/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

```

</div>

### After Tests
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');

```

</div>

</section>

## Solution
<section id='solution'>

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    // change code below this line 
    newArr.push([...arr]);
    //change code above this line
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```

</section>
