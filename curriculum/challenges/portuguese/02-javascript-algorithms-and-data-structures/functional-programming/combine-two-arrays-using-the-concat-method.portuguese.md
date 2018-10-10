---
id: 587d7da9367417b2b2512b66
title: Combine Two Arrays Using the concat Method
challengeType: 1
videoUrl: ''
localeTitle: Combine duas matrizes usando o método concat
---

## Description
<section id="description"> <code>Concatenation</code> significa unir itens de ponta a ponta. O JavaScript oferece o método <code>concat</code> para cadeias de caracteres e matrizes que funcionam da mesma maneira. Para matrizes, o método é chamado em um, em seguida, outro array é fornecido como o argumento para <code>concat</code> , que é adicionado ao final do primeiro array. Ele retorna um novo array e não altera os arrays originais. Aqui está um exemplo: <blockquote> [1, 2, 3] .concat ([4, 5, 6]); <br> // Retorna uma nova matriz [1, 2, 3, 4, 5, 6] </blockquote></section>

## Instructions
<section id="instructions"> Use o método <code>concat</code> na função <code>nonMutatingConcat</code> para concatenar <code>attach</code> ao final do <code>original</code> . A função deve retornar o array concatenado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: O <code>first</code> array não deve mudar.
    testString: 'assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]), "The <code>first</code> array should not change.");'
  - text: O <code>second</code> array não deve mudar.
    testString: 'assert(JSON.stringify(second) === JSON.stringify([4, 5]), "The <code>second</code> array should not change.");'
  - text: '<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> deve retornar <code>[1, 2, 3, 4, 5]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "<code>nonMutatingConcat([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingConcat(original, attach) {
  // Add your code below this line


  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
