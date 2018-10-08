---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
localeTitle: Comprobar la presencia de un elemento con indexOf ()
challengeType: 1
---

## Description
<section id='description'> 
Dado que las matrices se pueden cambiar, o <em>mutar</em> , en cualquier momento, no hay ninguna garantía sobre dónde estará una determinada pieza de datos en una matriz determinada, o si ese elemento aún existe. Afortunadamente, JavaScript nos proporciona otro método <code>indexOf()</code> , <code>indexOf()</code> , que nos permite verificar rápida y fácilmente la presencia de un elemento en una matriz. <code>indexOf()</code> toma un elemento como parámetro y, cuando se le llama, devuelve la posición o el índice de ese elemento, o <code>-1</code> si el elemento no existe en la matriz. 
Por ejemplo: 
<blockquote>let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];<br><br>fruits.indexOf('dates') // returns -1<br>fruits.indexOf('oranges') // returns 2<br>fruits.indexOf('pears') // returns 1, the first index at which the element exists</blockquote> 
</section>

## Instructions
<section id='instructions'> 
<code>indexOf()</code> puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en una matriz. Hemos definido una función, <code>quickCheck</code> , que toma una matriz y un elemento como argumentos. Modifique la función utilizando <code>indexOf()</code> para que devuelva <code>true</code> si el elemento pasado existe en la matriz, y <code>false</code> si no lo hace. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;mushrooms&quot;)</code> debe devolver <code>false</code> &#39;
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "mushrooms"), false, "<code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code> should return <code>false</code>");'
  - text: &#39; <code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;onions&quot;)</code> debe devolver <code>true</code> &quot;
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "onions"), true, "<code>quickCheck(["squash", "onions", "shallots"], "onions")</code> should return <code>true</code>");'
  - text: &#39; <code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> debe devolver <code>true</code> &#39;
    testString: 'assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true, "<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>");'
  - text: &#39; <code>quickCheck([true, false, false], undefined)</code> debe devolver <code>false</code> &#39;
    testString: 'assert.strictEqual(quickCheck([true, false, false], undefined), false, "<code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>");'
  - text: La función <code>quickCheck</code> debe utilizar el método <code>indexOf()</code>
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
