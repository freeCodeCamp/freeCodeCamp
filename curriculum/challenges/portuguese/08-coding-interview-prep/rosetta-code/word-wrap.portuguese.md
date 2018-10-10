---
title: Word wrap
id: 594810f028c0303b75339ad4
challengeType: 5
videoUrl: ''
localeTitle: Quebra de linha
---

## Description
<section id="description"><p> Ainda hoje, com fontes proporcionais e layouts complexos, ainda há casos em que você precisa quebrar o texto em uma coluna especificada. A tarefa básica é envolver um parágrafo de texto de maneira simples. Exemplo de texto: </p><pre> Quebra de texto usando um algoritmo mais sofisticado, como o algoritmo Knuth e Plass TeX.
Se o seu idioma fornecer isso, você receberá crédito extra fácil
mas você &quot;deve referenciar documentação&quot; indicando que o algoritmo
é algo melhor que um simples algoritmo de tamanho mínimo.
</pre><p> Tarefa: </p><pre> <code>Write a function that can wrap this text to any number of characters.</code> </pre><p> Por exemplo, o texto envolto em 80 caracteres deve se parecer com o seguinte: </p><p></p><pre> Quebra de texto usando um algoritmo mais sofisticado como o Knuth e o Plass TeX
algoritmo. Se o seu idioma fornece isso, você recebe crédito extra fácil, mas você
deve referenciar documentação indicando que o algoritmo é algo melhor
do que um simples algoritmo de tamanho mínimo.
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: wrap deve ser uma função.
    testString: 'assert.equal(typeof wrap, "function", "wrap must be a function.");'
  - text: wrap deve retornar uma string.
    testString: 'assert.equal(typeof wrap("abc", 10), "string", "wrap must return a string.");'
  - text: wrap (80) deve retornar 4 linhas.
    testString: 'assert(wrapped80.split("\n").length === 4, "wrap(80) must return 4 lines.");'
  - text: Sua função <code>wrap</code> deve retornar nosso texto esperado
    testString: 'assert.equal(wrapped80.split("\n")[0], firstRow80, "Your <code>wrap</code> function should return our expected text");'
  - text: wrap (42) deve retornar 7 linhas.
    testString: 'assert(wrapped42.split("\n").length === 7, "wrap(42) must return 7 lines.");'
  - text: Sua função <code>wrap</code> deve retornar nosso texto esperado
    testString: 'assert.equal(wrapped42.split("\n")[0], firstRow42, "Your <code>wrap</code> function should return our expected text");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wrap (text, limit) {
  return text;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
