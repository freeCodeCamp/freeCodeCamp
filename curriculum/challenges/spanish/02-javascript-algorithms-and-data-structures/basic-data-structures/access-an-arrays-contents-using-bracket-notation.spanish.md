---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: Acceder a los contenidos de un array usando notación de corchete
---

## Description
<section id="description"> La característica fundamental de cualquier estructura de datos es, por supuesto, la capacidad no solo de almacenar datos, sino también de poder recuperar esos datos en el comando. Entonces, ahora que hemos aprendido cómo crear un array, comencemos a pensar cómo podemos acceder a la información de ese array. Cuando definimos un array simple como se ve a continuación, hay 3 elementos en él: <blockquote> let ourArray = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]; </blockquote> En un array, cada elemento del array tiene un <dfn>índice</dfn> . Este índice es igual al numero de la posición de ese elemento en el array y se utiliza para hacer referencia a el elemento. Sin embargo, es importante tener en cuenta que los arrays de JavaScript tienen <dfn>un índice de cero</dfn> , lo que significa que el primer elemento de un array está en realidad en la posición  <em><strong>cero</strong></em> , no en la posicíon uno. Para recuperar un elemento de un array, podemos incluir un índice entre paréntesis y agregarlo al final del array, o más comúnmente, a una variable que hace referencia a un objeto de array. Esto se conoce como <dfn>notación de corchete</dfn>. Por ejemplo, si queremos recuperar la <code>&quot;a&quot;</code> de <code>ourArray</code> y asignarla a una variable, podemos hacerlo con el siguiente código: <blockquote> let ourVariable = ourArray[0]; <br> // nuestra variable es igual a &quot;a&quot; </blockquote> Además de acceder al valor asociado a un índice, también puede <em>establecer</em> un índice en un valor utilizando la misma notación: <blockquote> ourArray [1] = &quot;ya no b&quot;; <br> // ourArray ahora es igual a [&quot;a&quot;, &quot;no b más&quot;, &quot;c&quot;]; </blockquote> Usando la notación de corchetes, ahora hemos restablecido el elemento en el índice 1 de <code>&quot;b&quot;</code> , a <code>&quot;not b anymore&quot;</code> . </section>

## Instructions
<section id="instructions"> Para completar este desafío, establezca la segunda posición (índice <code>1</code> ) de <code>myArray</code> en cualquier cosa que desee, que no sea <code>&quot;b&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray[0]</code> es igual a <code>&quot;a&quot;</code>'
    testString: 'assert.strictEqual(myArray[0], "a", "<code>myArray[0]</code> is equal to <code>"a"</code>");'
  - text: '<code>myArray[1]</code> ya no está configurado en <code>&quot;b&quot;</code>'
    testString: 'assert.notStrictEqual(myArray[1], "b", "<code>myArray[1]</code> is no longer set to <code>"b"</code>");'
  - text: '<code>myArray[2]</code> es igual a <code>&quot;c&quot;</code>'
    testString: 'assert.strictEqual(myArray[2], "c", "<code>myArray[2]</code> is equal to <code>"c"</code>");'
  - text: '<code>myArray[3]</code> es igual a <code>&quot;d&quot;</code>'
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
