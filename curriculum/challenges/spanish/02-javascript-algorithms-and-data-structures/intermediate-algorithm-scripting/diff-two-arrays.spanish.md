---
id: a5de63ebea8dbee56860f4f2
title: Diff Two Arrays
localeTitle: Diferencia dos matrices
isRequired: true
challengeType: 5
---

## Description
<section id='description'> 
Compare dos arreglos y devuelva un nuevo arreglo con los elementos que solo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelva la diferencia simétrica de las dos matrices. 
Recuerda usar <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. 
<strong>Nota</strong> <br> Puede devolver la matriz con sus elementos en cualquier orden. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code> debe devolver una matriz.&#39;
    testString: 'assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === "object", "<code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code> should return an array.");'
  - text: &#39; <code>[&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> debe devolver <code>[&quot;pink wool&quot;]</code> . &#39;
    testString: 'assert.sameMembers(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"], "<code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["pink wool"]</code>.");'
  - text: &#39; <code>[&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> debería devolver una matriz con un elemento &#39;.
    testString: 'assert(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 1, "<code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return an array with one item.");'
  - text: &#39; <code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> debe devolver <code>[&quot;diorite&quot;, &quot;pink wool&quot;]</code> .
    testString: 'assert.sameMembers(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"], "<code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["diorite", "pink wool"]</code>.");'
  - text: &#39; <code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> debe devolver una matriz con dos elementos.
    testString: 'assert(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 2, "<code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return an array with two items.");'
  - text: &#39; <code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;], [&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> debe devolver <code>[]</code> .&#39;
    testString: 'assert.sameMembers(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), [], "<code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code> should return <code>[]</code>.");'
  - text: &#39; <code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;], [&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> debe devolver una matriz vacía.&#39;
    testString: 'assert(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).length === 0, "<code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code> should return an empty array.");'
  - text: &#39; <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> debe devolver <code>[4]</code> .&#39;
    testString: 'assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4], "<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return <code>[4]</code>.");'
  - text: &#39; <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> debe devolver una matriz con un elemento.&#39;
    testString: 'assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length  === 1, "<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return an array with one item.");'
  - text: &#39; <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [1, &quot;calf&quot;, 3, 4]</code> debe devolver <code>[&quot;piglet&quot;, 4]</code> .&#39;
    testString: 'assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4], "<code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code> should return <code>["piglet", 4]</code>.");'
  - text: &#39; <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [1, &quot;calf&quot;, 3, 4]</code> debe devolver una matriz con dos elementos.&#39;
    testString: 'assert(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).length === 2, "<code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code> should return an array with two items.");'
  - text: &#39; <code>[], [&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> debe devolver <code>[&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> .&#39;
    testString: 'assert.sameMembers(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"], "<code>[], ["snuffleupagus", "cookie monster", "elmo"]</code> should return <code>["snuffleupagus", "cookie monster", "elmo"]</code>.");'
  - text: &#39; <code>[], [&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> debe devolver una matriz con tres elementos.&#39;
    testString: 'assert(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).length === 3, "<code>[], ["snuffleupagus", "cookie monster", "elmo"]</code> should return an array with three items.");'
  - text: &#39; <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code> debe devolver <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;, 7, &quot;filly&quot;]</code> .&#39;
    testString: 'assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"], "<code>[1, "calf", 3, "piglet"], [7, "filly"]</code> should return <code>[1, "calf", 3, "piglet", 7, "filly"]</code>.");'
  - text: &#39; <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code> debe devolver una matriz con seis elementos.&#39;
    testString: 'assert(diffArray([1, "calf", 3, "piglet"], [7, "filly"]).length === 6, "<code>[1, "calf", 3, "piglet"], [7, "filly"]</code> should return an array with six items.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function diffArray(arr1, arr2) {
  var newArr = [];
  var h1 = Object.create(null);
  arr1.forEach(function(e) {
    h1[e] = e;
  });

  var h2 = Object.create(null);
  arr2.forEach(function(e) {
    h2[e] = e;
  });

  Object.keys(h1).forEach(function(e) {
     if (!(e in h2)) newArr.push(h1[e]);
  });
  Object.keys(h2).forEach(function(e) {
     if (!(e in h1)) newArr.push(h2[e]);
  });
  // Same, same; but different.
  return newArr;
}
```

</section>
