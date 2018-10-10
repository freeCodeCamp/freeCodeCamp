---
id: bd7123c9c443eddfaeb5bdef
title: Declare JavaScript Variables
challengeType: 1
videoUrl: ''
localeTitle: Declarar variáveis ​​JavaScript
---

## Description
<section id="description"> Na ciência da computação, os <dfn>dados</dfn> são tudo o que é significativo para o computador. JavaScript fornece sete <dfn>tipos de dados</dfn> diferentes que são <code>undefined</code> , <code>null</code> , <code>boolean</code> , <code>string</code> , <code>symbol</code> , <code>number</code> e <code>object</code> . Por exemplo, os computadores distinguem entre números, como o número <code>12</code> , e <code>strings</code> , como <code>&quot;12&quot;</code> , <code>&quot;dog&quot;</code> ou <code>&quot;123 cats&quot;</code> , que são conjuntos de caracteres. Os computadores podem realizar operações matemáticas em um número, mas não em uma string. <dfn>As variáveis</dfn> permitem que os computadores armazenem e manipulem dados de maneira dinâmica. Eles fazem isso usando um &quot;rótulo&quot; para apontar os dados em vez de usar os dados em si. Qualquer um dos sete tipos de dados pode ser armazenado em uma variável. <code>Variables</code> são semelhantes às variáveis ​​x e y que você usa em matemática, o que significa que elas são um nome simples para representar os dados aos quais queremos nos referir. As <code>variables</code> computador diferem das variáveis ​​matemáticas, pois podem armazenar valores diferentes em momentos diferentes. Dizemos ao JavaScript para criar ou <dfn>declarar</dfn> uma variável colocando a palavra-chave <code>var</code> na frente dela, assim: <blockquote> var ourName; </blockquote> cria uma <code>variable</code> chamada <code>ourName</code> . Em JavaScript, terminamos as instruções com ponto e vírgula. <code>Variable</code> nomes das <code>Variable</code> podem ser constituídos por números, letras e <code>$</code> ou <code>_</code> , mas não podem conter espaços nem iniciar com um número. </section>

## Instructions
<section id="instructions"> Use a palavra-chave <code>var</code> para criar uma variável chamada <code>myName</code> . <strong>Sugestão</strong> <br> Olhe para o exemplo <code>ourName</code> se você ficar preso. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Você deve declarar <code>myName</code> com a palavra-chave <code>var</code> , terminando com um ponto-e-vírgula'
    testString: 'assert(/var\s+myName\s*;/.test(code), "You should declare <code>myName</code> with the <code>var</code> keyword, ending with a semicolon");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName;

// Declare myName below this line

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
