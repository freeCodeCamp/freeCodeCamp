---
title: Tokenize a string with escaping
id: 594faaab4e2a8626833e9c3d
challengeType: 5
videoUrl: ''
localeTitle: Tokenize uma string com escape
---

## Description
<section id="description"><p> Escreva uma função ou programa que pode dividir uma string em cada ocorrência não escapada de um caractere separador. </p><p> Deve aceitar três parâmetros de entrada: </p> A <b>string</b> O <b>caractere separador</b> O <b>caractere de escape</b> <p> Deve produzir uma lista de strings. </p><p> Regras para divisão: </p> Os campos que foram separados pelos separadores, tornam-se os elementos da lista de saída. Campos vazios devem ser preservados, mesmo no início e no final. <p> Regras para escapar: </p> &quot;Escapeado&quot; significa precedido por uma ocorrência do caractere de escape que ainda não escapou. Quando o caractere de escape precede um caractere que não tem significado especial, ele ainda conta como um escape (mas não faz nada de especial). Cada ocorrência do caractere de escape que foi usado para escapar de algo não deve se tornar parte da saída. <p> Demonstre que sua função satisfaz o seguinte caso de teste: </p><pre> um ^ | uno || tres ^^^^ | quatro ^^^ | ^ cuatro | </pre> e usando <pre> | </pre> como um separador e <pre> ^ </pre> como caractere de escape, sua função deve gerar o seguinte array: <p></p><pre> [&#39;one | uno&#39;, &quot;, &#39;three ^^&#39;, &#39;quatro ^ | quatro&#39;,&quot;]
  </pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tokenize</code> é uma função.
    testString: 'assert(typeof tokenize === "function", "<code>tokenize</code> is a function.");'
  - text: <code>tokenize</code> deve retornar um array.
    testString: 'assert(typeof tokenize("a", "b", "c") === "object", "<code>tokenize</code> should return an array.");'
  - text: '<code>tokenize(&quot;one^|uno||three^^^^|four^^^|^cuatro|&quot;, &quot;|&quot;, &quot;^&quot;)</code> deve retornar [&quot;one | uno&quot;, &quot;&quot;, &quot;three ^^&quot; , &quot;quatro ^ | cuatro&quot;, &quot;&quot;] &quot;)'
    testString: 'assert.deepEqual(tokenize(testStr1, "|", "^"), res1, "<code>tokenize("one^|uno||three^^^^|four^^^|^cuatro|", "|", "^") </code> should return ["one|uno", "", "three^^", "four^|cuatro", ""]");'
  - text: '<code>tokenize(&quot;a@&amp;bcd&amp;ef&amp;&amp;@@hi&quot;, &quot;&amp;&quot;, &quot;@&quot;)</code> deve retornar <code>[&quot;a&amp;bcd&quot;, &quot;ef&quot;, &quot;&quot;, &quot;@hi&quot;]</code>'
    testString: 'assert.deepEqual(tokenize(testStr2, "&", "@"), res2, "<code>tokenize("a@&bcd&ef&&@@hi", "&", "@")</code> should return <code>["a&bcd", "ef", "", "@hi"]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function tokenize(str, esc, sep) {
  return true;
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
