---
id: 587d7b7b367417b2b2512b15
title: Iterate Through All an Array's Items Using For Loops
challengeType: 1
videoUrl: ''
localeTitle: Iterar Através de Todos os Itens de uma Matriz Usando For Loops
---

## Description
<section id="description"> Às vezes, ao trabalhar com arrays, é muito útil poder percorrer cada item para encontrar um ou mais elementos que possamos precisar ou manipular um array com base nos itens de dados que atendem a um determinado conjunto de critérios. O JavaScript oferece vários métodos integrados que cada iterar sobre matrizes de maneiras ligeiramente diferentes para alcançar resultados diferentes (como <code>every()</code> , <code>forEach()</code> , <code>map()</code> , etc.), no entanto, a técnica que é mais flexível e nos oferece o maior quantidade de controlo é um método simples <code>for</code> circuito. Considere o seguinte: <blockquote> function greaterThanTen (arr) { <br> deixe newArr = []; <br> para (let i = 0; i &lt;arr.length; i ++) { <br> if (arr [i]&gt; 10) { <br> newArr.push (arr [i]); <br> } <br> } <br> return newArr; <br> } <br><br> maiorThanTen ([2, 12, 8, 14, 80, 0, 1]); <br> // retorna [12, 14, 80] </blockquote> Usando um loop <code>for</code> , essa função percorre e acessa cada elemento da matriz e a submete a um teste simples que criamos. Dessa maneira, determinamos de maneira fácil e programática quais itens de dados são maiores que <code>10</code> e retornamos um novo array contendo esses itens. </section>

## Instructions
<section id="instructions"> Nós definimos uma função, <code>filteredArray</code> , que recebe <code>arr</code> , um array aninhado e <code>elem</code> como argumentos, e retorna um novo array. <code>elem</code> representa um elemento que pode ou não estar presente em um ou mais dos arrays aninhados dentro de <code>arr</code> . Modificar a função, utilizando um <code>for</code> de loop, para retornar uma versão filtrada da matriz passou de tal modo que qualquer disposição aninhada dentro <code>arr</code> contendo <code>elem</code> foi removido. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code> deve retornar <code>[ [10, 8, 3], [14, 6, 23] ]</code>'
    testString: 'assert.deepEqual(filteredArray([ [10, 8, 3], [14, 6, 23], [3, 18, 6] ], 18), [[10, 8, 3], [14, 6, 23]], "<code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code> should return <code>[ [10, 8, 3], [14, 6, 23] ]</code>");'
  - text: '<code>filteredArray([ [&quot;trumpets&quot;, 2], [&quot;flutes&quot;, 4], [&quot;saxophones&quot;, 2] ], 2)</code> deve retornar <code>[ [&quot;flutes&quot;, 4] ]</code>'
    testString: 'assert.deepEqual(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2), [["flutes", 4]], "<code>filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)</code> should return <code>[ ["flutes", 4] ]</code>");'
  - text: '<code>filteredArray([ [&quot;amy&quot;, &quot;beth&quot;, &quot;sam&quot;], [&quot;dave&quot;, &quot;sean&quot;, &quot;peter&quot;] ], &quot;peter&quot;)</code> deve retornar <code>[ [&quot;amy&quot;, &quot;beth&quot;, &quot;sam&quot;] ]</code>'
    testString: 'assert.deepEqual(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"), [["amy", "beth", "sam"]], "<code>filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")</code> should return <code>[ ["amy", "beth", "sam"] ]</code>");'
  - text: '<code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code> deve retornar <code>[ ]</code>'
    testString: 'assert.deepEqual(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3), [], "<code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code> should return <code>[ ]</code>");'
  - text: A função <code>filteredArray</code> deve utilizar um loop <code>for</code>
    testString: 'assert.notStrictEqual(filteredArray.toString().search(/for/), -1, "The <code>filteredArray</code> function should utilize a <code>for</code> loop");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
