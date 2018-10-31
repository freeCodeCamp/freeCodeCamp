---
id: 587d7b90367417b2b2512b65
title: Return Part of an Array Using the slice Method
challengeType: 1
videoUrl: ''
localeTitle: Retornar parte de uma matriz usando o método de fatia
---

## Description
<section id="description"> O método <code>slice</code> retorna uma cópia de certos elementos de um array. Pode levar dois argumentos, o primeiro dá o índice de onde começar a fatia, o segundo é o índice de onde terminar a fatia (e é não-inclusivo). Se os argumentos não forem fornecidos, o padrão é começar no início da matriz até o final, o que é uma maneira fácil de fazer uma cópia da matriz inteira. O método de <code>slice</code> não altera o array original, mas retorna um novo. Aqui está um exemplo: <blockquote> var arr = [&quot;gato&quot;, &quot;cachorro&quot;, &quot;tigre&quot;, &quot;zebra&quot;]; <br> var newArray = arr.slice (1, 3); <br> // Define newArray para [&quot;Dog&quot;, &quot;Tiger&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Use o método de <code>slice</code> na função <code>sliceArray</code> para retornar parte do array <code>anim</code> dado os índices <code>endSlice</code> e <code>beginSlice</code> fornecidos. A função deve retornar uma matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método de <code>slice</code> .
    testString: 'assert(code.match(/\.slice/g), "Your code should use the <code>slice</code> method.");'
  - text: A variável <code>inputAnim</code> não deve ser alterada.
    testString: 'assert(JSON.stringify(inputAnim) === JSON.stringify(["Cat", "Dog", "Tiger", "Zebra", "Ant"]), "The <code>inputAnim</code> variable should not change.");'
  - text: '<code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 1, 3)</code> deve retornar <code>[&quot;Dog&quot;, &quot;Tiger&quot;]</code> .'
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)) === JSON.stringify(["Dog", "Tiger"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)</code> should return <code>["Dog", "Tiger"]</code>.");'
  - text: '<code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 0, 1)</code> deve retornar <code>[&quot;Cat&quot;]</code> .'
    testString: 'assert(JSON.stringify(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)) === JSON.stringify(["Cat"]), "<code>sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)</code> should return <code>["Cat"]</code>.");'
  - text: '<code>sliceArray([&quot;Cat&quot;, &quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;, &quot;Ant&quot;], 1, 4)</code> deve retornar <code>[&quot;Dog&quot;, &quot;Tiger&quot;, &quot;Zebra&quot;]</code> .'
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
