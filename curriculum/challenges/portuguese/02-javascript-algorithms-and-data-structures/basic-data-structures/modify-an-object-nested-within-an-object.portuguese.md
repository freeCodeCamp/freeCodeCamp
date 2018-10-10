---
id: 587d7b7c367417b2b2512b19
title: Modify an Object Nested Within an Object
challengeType: 1
videoUrl: ''
localeTitle: Modificar um objeto aninhado em um objeto
---

## Description
<section id="description"> Agora vamos dar uma olhada em um objeto um pouco mais complexo. As propriedades do objeto podem ser aninhadas em uma profundidade arbitrária e seus valores podem ser qualquer tipo de dados suportados pelo JavaScript, incluindo matrizes e até mesmo outros objetos. Considere o seguinte: <blockquote> deixe nestedObject = { <br> id: 28802695164, <br> data: &#39;31 de dezembro de 2016&#39;, <br> data: { <br> total de usuários: 99, <br> online: 80, <br> Status online: { <br> ativo: 67, <br> de distância: 13 <br> } <br> } <br> }; </blockquote> <code>nestedObject</code> tem três chaves exclusivas: <code>id</code> , cujo valor é um número, <code>date</code> cujo valor é uma string e <code>data</code> , cujo valor é um objeto que possui outro objeto aninhado dentro dele. Embora as estruturas possam se tornar rapidamente complexas, ainda podemos usar as mesmas notações para acessar as informações de que precisamos. </section>

## Instructions
<section id="instructions"> Aqui nós definimos um objeto, <code>userActivity</code> , que inclui outro objeto aninhado dentro dele. Você pode modificar as propriedades nesse objeto aninhado da mesma maneira que modificou as propriedades no último desafio. Defina o valor da chave <code>online</code> para <code>45</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>userActivity</code> tem <code>id</code> , <code>date</code> e propriedades de <code>data</code>'
    testString: 'assert("id" in userActivity && "date" in userActivity && "data" in userActivity, "<code>userActivity</code> has <code>id</code>, <code>date</code> and <code>data</code> properties");'
  - text: <code>userActivity</code> tem um conjunto de chaves de <code>data</code> para um objeto com chaves <code>totalUsers</code> e <code>online</code> - <code>online</code>
    testString: 'assert("totalUsers" in userActivity.data && "online" in userActivity.data, "<code>userActivity</code> has a <code>data</code> key set to an object with keys <code>totalUsers</code> and <code>online</code>");'
  - text: A propriedade <code>online</code> aninhada na chave de <code>data</code> de <code>userActivity</code> deve ser definida como <code>45</code>
    testString: 'assert(userActivity.data.online === 45, "The <code>online</code> property nested in the <code>data</code> key of <code>userActivity</code> should be set to <code>45</code>");'
  - text: A propriedade <code>online</code> é definida usando a notação de pontos ou colchetes
    testString: 'assert.strictEqual(code.search(/online: 45/), -1, "The <code>online</code> property is set using dot or bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line

// change code above this line

console.log(userActivity);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
