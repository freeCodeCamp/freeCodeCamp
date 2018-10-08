---
id: 587d7b90367417b2b2512b65
title: Return Part of an Array Using the slice Method
localeTitle: Devolver parte de una matriz utilizando el método de corte
challengeType: 1
---

## Description
<section id='description'> 
El método de <code>slice</code> devuelve una copia de ciertos elementos de una matriz. Puede tomar dos argumentos, el primero proporciona el índice de dónde comenzar la división, el segundo es el índice de dónde finalizar la división (y no está incluido). Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde el principio de la matriz hasta el final, lo cual es una forma fácil de hacer una copia de toda la matriz. La <code>slice</code> método no muta la matriz original, pero devuelve una nueva. 
Aquí hay un ejemplo: 
<blockquote>var arr = ["Cat", "Dog", "Tiger", "Zebra"];<br>var newArray = arr.slice(1, 3);<br>// Sets newArray to ["Dog", "Tiger"]</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Utilice la <code>slice</code> método en el <code>sliceArray</code> función para devolver parte de la <code>anim</code> matriz dada las proporcionadas <code>beginSlice</code> y <code>endSlice</code> índices. La función debe devolver una matriz. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método de <code>slice</code> .
    testString: 'assert(code.match(/\.slice/g), "Your code should use the <code>slice</code> method.");'
  - text: La variable <code>inputAnim</code> no debe cambiar.
    testString: 'assert(JSON.stringify(inputAnim) === JSON.stringify(["Cat", "Dog", "Tiger", "Zebra", "Ant"]), "The <code>inputAnim</code> variable should not change.");'
  - text: &#39; <code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 1, 3)</code> debe devolver <code>[&quot;Dog&quot;, &quot;Tiger&quot;]</code> .&#39;
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)) === JSON.stringify(["Dog", "Tiger"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)</code> should return <code>["Dog", "Tiger"]</code>.");'
  - text: &#39; <code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 0, 1)</code> debe devolver <code>[&quot;Cat&quot;]</code> .&#39;
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)) === JSON.stringify(["Cat"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)</code> should return <code>["Cat"]</code>.");'
  - text: &#39; <code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 1, 4)</code> debe devolver <code>[&quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;]</code> .&#39;
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)) === JSON.stringify(["Dog", "Tiger", "Zebra"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)</code> should return <code>["Dog", "Tiger", "Zebra"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line


  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
