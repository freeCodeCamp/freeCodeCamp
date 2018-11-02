---
id: 587d7b7c367417b2b2512b1a
title: Access Property Names with Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: Acceso a nombres de propiedades con notación de corchete
---

## Description
<section id="description"> En el primer desafío de objetos mencionamos el uso de la notación de corchetes como una forma de acceder a los valores de las propiedades mediante la evaluación de una variable. Por ejemplo, imagine que nuestro objeto de <code>foods</code> se está utilizando en un programa para una caja registradora de un supermercado. Tenemos alguna función que configura los <code>foods</code> <code>selectedFood</code> y queremos verificar el objeto de nuestros <code>foods</code> para detectar la presencia de ese alimento. Esto podría parecer: <blockquote> let selectedFood = getCurrentFood (scannedItem); <br> let inventario = alimentos [alimentos seleccionados]; </blockquote> Este código evaluará el valor almacenado en la variable <code>selectedFood</code> y devolverá el valor de esa clave en el objeto de <code>foods</code> , o <code>undefined</code> si no está presente. La notación de corchetes es muy útil porque a veces las propiedades de los objetos no se conocen antes del tiempo de ejecución o necesitamos acceder a ellos de una manera más dinámica. </section>

## Instructions
<section id="instructions"> Hemos definido una función, <code>checkInventory</code> , que recibe un elemento escaneado como un argumento. Devuelve el valor actual de la clave <code>scannedItem</code> en el objeto de <code>foods</code> . Puede suponer que solo se proporcionarán claves válidas como argumento para <code>checkInventory</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkInventory</code> es una función
    testString: 'assert.strictEqual(typeof checkInventory, "function", "<code>checkInventory</code> is a function");'
  - text: 'El objeto de <code>foods</code> debe tener solo los siguientes pares clave-valor: <code>apples: 25</code> , <code>oranges: 32</code> , <code>plums: 28</code> , <code>bananas: 13</code> , <code>grapes: 35</code> , <code>strawberries: 27</code>'
    testString: 'assert.deepEqual(foods, {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27}, "The <code>foods</code> object should have only the following key-value pairs: <code>apples: 25</code>, <code>oranges: 32</code>, <code>plums: 28</code>, <code>bananas: 13</code>, <code>grapes: 35</code>, <code>strawberries: 27</code>");'
  - text: <code>checkInventory(&quot;apples&quot;)</code> debe devolver <code>25</code>
    testString: 'assert.strictEqual(checkInventory("apples"), 25, "<code>checkInventory("apples")</code> should return <code>25</code>");'
  - text: <code>checkInventory(&quot;bananas&quot;)</code> debe devolver <code>13</code>
    testString: 'assert.strictEqual(checkInventory("bananas"), 13, "<code>checkInventory("bananas")</code> should return <code>13</code>");'
  - text: <code>checkInventory(&quot;strawberries&quot;)</code> debe devolver <code>27</code>
    testString: 'assert.strictEqual(checkInventory("strawberries"), 27, "<code>checkInventory("strawberries")</code> should return <code>27</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line

}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
