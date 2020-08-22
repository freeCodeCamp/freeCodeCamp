---
id: a5de63ebea8dbee56860f4f2
title: Diff Two Arrays
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Diff Two Arrays
---

## Description
<section id="description"> Compare dois arrays e retorne um novo array com todos os itens encontrados apenas em um dos dois arrays, mas não em ambos. Em outras palavras, retorne a diferença simétrica das duas matrizes. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. <strong>Nota</strong> <br> Você pode retornar o array com seus elementos em qualquer ordem. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code> deve retornar um array.'
    testString: 'assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === "object", "<code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code> should return an array.");'
  - text: '<code>[&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> deve devolver <code>[&quot;pink wool&quot;]</code> .'
    testString: 'assert.sameMembers(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"], "<code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["pink wool"]</code>.");'
  - text: '<code>[&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> deve retornar um array com um item.'
    testString: 'assert(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 1, "<code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return an array with one item.");'
  - text: '<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> devem retornar <code>[&quot;diorite&quot;, &quot;pink wool&quot;]</code> .'
    testString: 'assert.sameMembers(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"], "<code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["diorite", "pink wool"]</code>.");'
  - text: '<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;pink wool&quot;, &quot;dead shrub&quot;], [&quot;diorite&quot;, &quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> devem retornar uma matriz com dois itens.'
    testString: 'assert(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length === 2, "<code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return an array with two items.");'
  - text: '<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;], [&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> devem retornar <code>[]</code> .'
    testString: 'assert.sameMembers(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), [], "<code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code> should return <code>[]</code>.");'
  - text: '<code>[&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;], [&quot;andesite&quot;, &quot;grass&quot;, &quot;dirt&quot;, &quot;dead shrub&quot;]</code> devem retornar uma matriz vazia.'
    testString: 'assert(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).length === 0, "<code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code> should return an empty array.");'
  - text: '<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> devem retornar <code>[4]</code> .'
    testString: 'assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4], "<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return <code>[4]</code>.");'
  - text: '<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> deve retornar uma matriz com um item.'
    testString: 'assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length  === 1, "<code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return an array with one item.");'
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [1, &quot;calf&quot;, 3, 4]</code> devem retornar <code>[&quot;piglet&quot;, 4]</code> .'
    testString: 'assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4], "<code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code> should return <code>["piglet", 4]</code>.");'
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [1, &quot;calf&quot;, 3, 4]</code> deve retornar um array com dois itens.'
    testString: 'assert(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).length === 2, "<code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code> should return an array with two items.");'
  - text: '<code>[], [&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> devem retornar <code>[&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> .'
    testString: 'assert.sameMembers(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"], "<code>[], ["snuffleupagus", "cookie monster", "elmo"]</code> should return <code>["snuffleupagus", "cookie monster", "elmo"]</code>.");'
  - text: '<code>[], [&quot;snuffleupagus&quot;, &quot;cookie monster&quot;, &quot;elmo&quot;]</code> devem retornar uma matriz com três itens.'
    testString: 'assert(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).length === 3, "<code>[], ["snuffleupagus", "cookie monster", "elmo"]</code> should return an array with three items.");'
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code> deve retornar <code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;, 7, &quot;filly&quot;]</code> .'
    testString: 'assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"], "<code>[1, "calf", 3, "piglet"], [7, "filly"]</code> should return <code>[1, "calf", 3, "piglet", 7, "filly"]</code>.");'
  - text: '<code>[1, &quot;calf&quot;, 3, &quot;piglet&quot;], [7, &quot;filly&quot;]</code> deve retornar uma matriz com seis itens.'
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
// solution required
```
</section>
