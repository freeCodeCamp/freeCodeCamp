---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
localeTitle: Acceder a los contenidos de una matriz usando notación de corchete
challengeType: 1
---

## Description
<section id='description'> 
La característica fundamental de cualquier estructura de datos es, por supuesto, la capacidad no solo de almacenar datos, sino también de poder recuperar esos datos en el comando. Entonces, ahora que hemos aprendido cómo crear una matriz, comencemos a pensar cómo podemos acceder a la información de esa matriz. 
Cuando definimos una matriz simple como se ve a continuación, hay 3 elementos en ella: 
<blockquote>let ourArray = ["a", "b", "c"];</blockquote> 
En una matriz, cada elemento de la matriz tiene un <dfn>índice</dfn> . Este índice se duplica como la posición de ese elemento en la matriz y cómo se hace referencia a él. Sin embargo, es importante tener en cuenta que las matrices de JavaScript tienen <dfn>un índice de cero</dfn> , lo que significa que el primer elemento de una matriz está en realidad en la posición <em><strong>cero</strong></em> , no en el primero. 
Para recuperar un elemento de una matriz, podemos encerrar un índice entre paréntesis y agregarlo al final de una matriz, o más comúnmente, a una variable que hace referencia a un objeto de matriz. Esto se conoce como <dfn>notación de corchete</dfn> . 
Por ejemplo, si queremos recuperar la <code>&quot;a&quot;</code> de <code>ourArray</code> y asignarla a una variable, podemos hacerlo con el siguiente código: 
<blockquote>let ourVariable = ourArray[0];<br>// ourVariable equals "a"</blockquote> 
Además de acceder al valor asociado a un índice, también puede <em>establecer</em> un índice en un valor usando la misma notación: 
<blockquote>ourArray[1] = "not b anymore";<br>// ourArray now equals ["a", "not b anymore", "c"];</blockquote> 
Usando la notación de corchetes, ahora hemos restablecido el elemento en el índice 1 de <code>&quot;b&quot;</code> , a <code>&quot;not b anymore&quot;</code> . 
</section>

## Instructions
<section id='instructions'> 
Para completar este desafío, establezca la segunda posición (índice <code>1</code> ) de <code>myArray</code> en cualquier cosa que desee, además de <code>&quot;b&quot;</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>myArray[0]</code> es igual a <code>&quot;a&quot;</code> &#39;
    testString: 'assert.strictEqual(myArray[0], "a", "<code>myArray[0]</code> is equal to <code>"a"</code>");'
  - text: &#39; <code>myArray[1]</code> ya no está configurado en <code>&quot;b&quot;</code> &#39;
    testString: 'assert.notStrictEqual(myArray[1], "b", "<code>myArray[1]</code> is no longer set to <code>"b"</code>");'
  - text: &#39; <code>myArray[2]</code> es igual a <code>&quot;c&quot;</code> &#39;
    testString: 'assert.strictEqual(myArray[2], "c", "<code>myArray[2]</code> is equal to <code>"c"</code>");'
  - text: &#39; <code>myArray[3]</code> es igual a <code>&quot;d&quot;</code> &#39;
    testString: 'assert.strictEqual(myArray[3], "d", "<code>myArray[3]</code> is equal to <code>"d"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = ["a", "b", "c", "d"];
// change code below this line

//change code above this line
console.log(myArray);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
