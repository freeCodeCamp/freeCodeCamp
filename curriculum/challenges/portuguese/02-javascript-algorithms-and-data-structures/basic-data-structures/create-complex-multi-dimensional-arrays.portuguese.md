---
id: 587d7b7b367417b2b2512b16
title: Create complex multi-dimensional arrays
challengeType: 1
videoUrl: ''
localeTitle: Crie matrizes multidimensionais complexas
---

## Description
<section id="description"> Impressionante! Você acabou de aprender uma tonelada sobre arrays! Esta foi uma visão geral de alto nível, e há muito mais a aprender sobre como trabalhar com matrizes, muitas das quais você verá em seções posteriores. Mas antes de pensar em <dfn>objetos</dfn> , vamos dar mais uma olhada e ver como as matrizes podem se tornar um pouco mais complexas do que as que vimos nos desafios anteriores. Uma das características mais poderosas quando se pensa em matrizes como estruturas de dados, é que as matrizes podem conter, ou mesmo serem completamente compostas por outras matrizes. Vimos matrizes que contêm matrizes em desafios anteriores, mas que são bem simples. No entanto, os arrays podem conter uma profundidade infinita de arrays que podem conter outros arrays, cada um com seus próprios níveis arbitrários de profundidade, e assim por diante. Dessa forma, um array pode se tornar muito rapidamente uma estrutura de dados muito complexa, conhecida como array <dfn>multidimensional</dfn> ou aninhado. Considere o seguinte exemplo: <blockquote> vamos nestedArray = [// top, ou primeiro nível - o array mais externo <br> [&#39;deep&#39;], // uma matriz dentro de uma matriz, 2 níveis de profundidade <br> [ <br> [&#39;deep&#39;], [&#39;deep&#39;] // 2 arrays aninhados 3 níveis de profundidade <br> ] <br> [ <br> [ <br> [&#39;deepest&#39;], [&#39;deepest&#39;] // 2 arrays aninhados em 4 níveis de profundidade <br> ] <br> [ <br> [ <br> [&#39;deepest-est?&#39;] // uma matriz aninhada a 5 níveis de profundidade <br> ] <br> ] <br> ] <br> ]; </blockquote> Embora esse exemplo possa parecer complicado, esse nível de complexidade não é inédito, ou mesmo incomum, ao lidar com grandes quantidades de dados. No entanto, ainda podemos acessar com facilidade os níveis mais profundos de um array neste complexo com a notação de colchetes: <blockquote> console.log (nestedArray [2] [1] [0] [0] [0]); <br> // logs: deepest? </blockquote> E agora que sabemos onde estão esses dados, podemos redefini-los se precisarmos: <blockquote> nestedArray [2] [1] [0] [0] [0] = &#39;ainda mais profundo&#39;; <br><br> console.log (nestedArray [2] [1] [0] [0] [0]); <br> // agora registra: mais fundo ainda </blockquote></section>

## Instructions
<section id="instructions"> Nós definimos uma variável, <code>myNestedArray</code> , definida como igual a um array. Modifique <code>myNestedArray</code> , usando qualquer combinação de <dfn>strings</dfn> , <dfn>números</dfn> e <dfn>booleanos</dfn> para elementos de dados, de modo que tenha exatamente cinco níveis de profundidade (lembre-se, a matriz mais externa é nível 1). Em algum lugar no terceiro nível, incluir a string <code>&#39;deep&#39;</code> , no quarto nível, incluir a string <code>&#39;deeper&#39;</code> , e no quinto nível, incluir a string <code>&#39;deepest&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myNestedArray</code> deve conter apenas números, booleanos e cadeias de caracteres como elementos de dados'
    testString: 'assert.strictEqual((function(arr) { let flattened = (function flatten(arr) { const flat = [].concat(...arr); return flat.some (Array.isArray) ? flatten(flat) : flat; })(arr); for (let i = 0; i < flattened.length; i++) { if ( typeof flattened[i] !== "number" && typeof flattened[i] !== "string" && typeof flattened[i] !== "boolean") { return false } } return true })(myNestedArray), true, "<code>myNestedArray</code> should contain only numbers, booleans, and strings as data elements");'
  - text: <code>myNestedArray</code> deve ter exatamente 5 níveis de profundidade
    testString: 'assert.strictEqual((function(arr) {let depth = 0;function arrayDepth(array, i, d) { if (Array.isArray(array[i])) {  arrayDepth(array[i], 0, d + 1);} else {  depth = (d > depth) ? d : depth;}if (i < array.length) {  arrayDepth(array, i + 1, d);}  }arrayDepth(arr, 0, 0);return depth;})(myNestedArray), 4, "<code>myNestedArray</code> should have exactly 5 levels of depth");'
  - text: <code>myNestedArray</code> deve conter exatamente uma ocorrência da string <code>&quot;deep&quot;</code> em uma matriz aninhada em 3 níveis de profundidade
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deep").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deep")[0] === 2, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deep"</code> on an array nested 3 levels deep");'
  - text: <code>myNestedArray</code> deve conter exatamente uma ocorrência da string <code>&quot;deeper&quot;</code> em uma matriz aninhada em 4 níveis de profundidade
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deeper").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deeper")[0] === 3, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deeper"</code> on an array nested 4 levels deep");'
  - text: <code>myNestedArray</code> deve conter exatamente uma ocorrência da string <code>&quot;deepest&quot;</code> em uma matriz aninhada em 5 níveis de profundidade
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deepest").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deepest")[0] === 4, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deepest"</code> on an array nested 5 levels deep");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
