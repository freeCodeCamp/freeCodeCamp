---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
localeTitle: Combina matrices con el operador de propagación
challengeType: 1
---

## Description
<section id='description'> 
Otra gran ventaja del operador de <dfn>difusión</dfn> , es la capacidad de combinar arreglos, o de insertar todos los elementos de un arreglo en otro, en cualquier índice. Con sintaxis más tradicionales, podemos concatenar matrices, pero esto solo nos permite combinar matrices al final de una y al comienzo de otra. La sintaxis de propagación hace que la siguiente operación sea extremadamente simple: 
<blockquote>let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];<br><br>let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];<br>// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']</blockquote> 
Usando la sintaxis de propagación, acabamos de lograr una operación que hubiera sido más compleja y más detallada si hubiéramos usado métodos tradicionales. 
</section>

## Instructions
<section id='instructions'> 
Hemos definido una función <code>spreadOut</code> que devuelve la <code>sentence</code> variable, modifique la función usando el operador de <dfn>propagación</dfn> para que devuelva la matriz <code>[&#39;learning&#39;, &#39;to&#39;, &#39;code&#39;, &#39;is&#39;, &#39;fun&#39;]</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>spreadOut</code> debería devolver <code>[&quot;learning&quot;, &quot;to&quot;, &quot;code&quot;, &quot;is&quot;, &quot;fun&quot;]</code> &#39;
    testString: 'assert.deepEqual(spreadOut(), ["learning", "to", "code", "is", "fun"], "<code>spreadOut</code> should return <code>["learning", "to", "code", "is", "fun"]</code>");'
  - text: La función <code>spreadOut</code> debe utilizar la sintaxis de difusión
    testString: 'assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1, "The <code>spreadOut</code> function should utilize spread syntax");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
