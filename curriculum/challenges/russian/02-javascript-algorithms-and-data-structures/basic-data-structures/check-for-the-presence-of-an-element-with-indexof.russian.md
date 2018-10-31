---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
videoUrl: ''
localeTitle: Проверка наличия элемента с помощью indexOf ()
---

## Description
<section id="description"> Так как массивы могут быть изменены, или <em>мутировали,</em> в любое время, нет никакой гарантии , о том, где определенная часть данных будет находиться на данном массиве, или если этот элемент даже до сих пор существует. К счастью, JavaScript предоставляет нам еще один встроенный метод, <code>indexOf()</code> , который позволяет нам быстро и легко проверить наличие элемента в массиве. <code>indexOf()</code> принимает элемент как параметр, а при вызове возвращает позицию или индекс этого элемента или <code>-1</code> если элемент не существует в массиве. Например: <blockquote> пусть плоды = [&#39;яблоки, груши, апельсины, персики, груши; <br><br> fruit.indexOf (&#39;date&#39;) // возвращает -1 <br> fruit.indexOf (&#39;апельсины&#39;) // возвращает 2 <br> fruit.indexOf (&#39;pears&#39;) // возвращает 1, первый индекс, в котором существует элемент </blockquote></section>

## Instructions
<section id="instructions"> <code>indexOf()</code> может быть невероятно полезен для быстрой проверки наличия элемента в массиве. Мы определили функцию <code>quickCheck</code> , которая принимает в качестве аргумента массив и элемент. Измените функцию, используя <code>indexOf()</code> чтобы она возвращала значение <code>true</code> если переданный элемент существует в массиве, а <code>false</code> если это не так. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;mushrooms&quot;)</code> должны возвращать <code>false</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "mushrooms"), false, "<code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code> should return <code>false</code>");'
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;onions&quot;)</code> должен возвращать <code>true</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "onions"), true, "<code>quickCheck(["squash", "onions", "shallots"], "onions")</code> should return <code>true</code>");'
  - text: '<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> должен возвращать <code>true</code>'
    testString: 'assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true, "<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>");'
  - text: '<code>quickCheck([true, false, false], undefined)</code> должен возвращать <code>false</code>'
    testString: 'assert.strictEqual(quickCheck([true, false, false], undefined), false, "<code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>");'
  - text: Функция <code>quickCheck</code> должна использовать метод <code>indexOf()</code>
    testString: 'assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1, "The <code>quickCheck</code> function should utilize the <code>indexOf()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
