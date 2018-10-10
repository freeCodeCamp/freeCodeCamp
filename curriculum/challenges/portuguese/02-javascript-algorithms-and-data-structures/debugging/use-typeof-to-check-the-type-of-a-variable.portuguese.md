---
id: 587d7b84367417b2b2512b34
title: Use typeof to Check the Type of a Variable
challengeType: 1
videoUrl: ''
localeTitle: Use typeof para verificar o tipo de uma variável
---

## Description
<section id="description"> Você pode usar <code>typeof</code> para verificar a estrutura de dados ou o tipo de uma variável. Isso é útil na depuração ao trabalhar com vários tipos de dados. Se você acha que está adicionando dois números, mas um é na verdade uma string, os resultados podem ser inesperados. Erros de tipo podem espreitar em cálculos ou chamadas de função. Tenha cuidado, especialmente quando você está acessando e trabalhando com dados externos na forma de um objeto JavaScript Object Notation (JSON). Aqui estão alguns exemplos usando <code>typeof</code> : <blockquote> console.log (tipo de &quot;&quot;); // produz &quot;string&quot; <br> console.log (tipo 0); // produz &quot;número&quot; <br> console.log (typeof []); // produz &quot;objeto&quot; <br> console.log (typeof {}); // produz &quot;objeto&quot; </blockquote> O JavaScript reconhece seis tipos de dados primitivos (imutáveis): <code>Boolean</code> , <code>Null</code> , <code>Undefined</code> , <code>Number</code> , <code>String</code> e <code>Symbol</code> (novo com ES6) e um tipo para itens mutáveis: <code>Object</code> . Observe que, em JavaScript, as matrizes são tecnicamente um tipo de objeto. </section>

## Instructions
<section id="instructions"> Adicione duas instruções <code>console.log()</code> para verificar o <code>typeof</code> cada uma das duas variáveis <code>seven</code> e <code>three</code> no código. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar <code>typeof</code> em duas instruções <code>console.log()</code> para verificar o tipo das variáveis.
    testString: 'assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2, "Your code should use <code>typeof</code> in two <code>console.log()</code> statements to check the type of the variables.");'
  - text: Seu código deve usar <code>typeof</code> para verificar o tipo da variável <code>seven</code> .
    testString: 'assert(code.match(/typeof[\( ]seven\)?/g), "Your code should use <code>typeof</code> to check the type of the variable <code>seven</code>.");'
  - text: Seu código deve usar <code>typeof</code> para verificar o tipo da variável <code>three</code> .
    testString: 'assert(code.match(/typeof[\( ]three\)?/g), "Your code should use <code>typeof</code> to check the type of the variable <code>three</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
