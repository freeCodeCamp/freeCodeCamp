---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
challengeType: 1
videoUrl: ''
localeTitle: Добавление элементов в массив с помощью push () и unshift ()
---

## Description
<section id="description"> Длина массива, как и типы данных, которые она может содержать, не является фиксированной. Массивы могут быть определены с длиной любого количества элементов, и элементы могут быть добавлены или удалены с течением времени; другими словами, массивы являются <dfn>изменяемыми</dfn> . В этой задаче мы рассмотрим два метода, с помощью которых мы можем программным образом модифицировать массив: <code>Array.push()</code> и <code>Array.unshift()</code> . Оба метода принимают один или несколько элементов в качестве параметров и добавляют эти элементы в массив, на который вызывается метод; метод <code>push()</code> добавляет элементы в конец массива, а <code>unshift()</code> добавляет элементы в начало. Рассмотрим следующее: <blockquote> пусть двадцать Три = &#39;XXIII&#39;; <br> let romanNumerals = [&#39;XXI&#39;, &#39;XXII&#39;]; <br><br> romanNumerals.unshift (&#39;XIX&#39;, &#39;XX&#39;); <br> // теперь равно [&#39;XIX&#39;, &#39;XX&#39;, &#39;XXI&#39;, &#39;XXII&#39;] <br><br> romanNumerals.push (twentyThree); <br> // теперь равно [&#39;XIX&#39;, &#39;XX&#39;, &#39;XXI&#39;, &#39;XXII&#39;, &#39;XXIII&#39;] Обратите внимание, что мы также можем передавать переменные, что позволяет нам еще большую гибкость в динамическом изменении данных нашего массива. </blockquote></section>

## Instructions
<section id="instructions"> Мы определили функцию, <code>mixedNumbers</code> , которую мы передаем массивом в качестве аргумента. Измените функцию, используя <code>push()</code> и <code>unshift()</code> чтобы добавить <code>&#39;I&#39;, 2, &#39;three&#39;</code> в начало массива и <code>7, &#39;VIII&#39;, 9</code> до конца, чтобы возвращаемый массив содержал представления чисел 1-9 в порядке. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mixedNumbers([&quot;IV&quot;, 5, &quot;six&quot;])</code> должны теперь возвращаться <code>[&quot;I&quot;, 2, &quot;three&quot;, &quot;IV&quot;, 5, &quot;six&quot;, 7, &quot;VIII&quot;, 9]</code>'
    testString: 'assert.deepEqual(mixedNumbers(["IV", 5, "six"]), ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9], "<code>mixedNumbers(["IV", 5, "six"])</code> should now return <code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</code>");'
  - text: Функция <code>mixedNumbers</code> должна использовать метод <code>push()</code>
    testString: 'assert.notStrictEqual(mixedNumbers.toString().search(/\.push\(/), -1, "The <code>mixedNumbers</code> function should utilize the <code>push()</code> method");'
  - text: Функция <code>mixedNumbers</code> должна использовать метод <code>unshift()</code>
    testString: 'assert.notStrictEqual(mixedNumbers.toString().search(/\.unshift\(/), -1, "The <code>mixedNumbers</code> function should utilize the <code>unshift()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
