---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
videoUrl: ''
localeTitle: Verificar se um objeto tem uma propriedade
---

## Description
<section id="description"> Agora podemos adicionar, modificar e remover chaves de objetos. Mas e se apenas quiséssemos saber se um objeto tem uma propriedade específica? O JavaScript nos fornece duas maneiras diferentes de fazer isso. Um usa o método <code>hasOwnProperty()</code> e o outro usa a palavra-chave <code>in</code> . Se tivermos um objeto <code>users</code> com uma propriedade de <code>Alan</code> , poderemos verificar sua presença de uma das seguintes maneiras: <blockquote> users.hasOwnProperty (&#39;Alan&#39;); <br> &#39;Alan&#39; nos usuários; <br> // ambos retornam true </blockquote></section>

## Instructions
<section id="instructions"> Criamos um objeto, <code>users</code> , com alguns usuários e uma função <code>isEveryoneHere</code> , à qual passamos o objeto <code>users</code> como um argumento. Termine de escrever esta função para que ela retorne <code>true</code> somente se o objeto <code>users</code> contiver todos os quatro nomes, <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> e <code>Ryan</code> , como chaves, e <code>false</code> caso contrário. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O objeto <code>users</code> contém apenas as chaves <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> e <code>Ryan</code>'
    testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
  - text: 'A função <code>isEveryoneHere</code> retornará <code>true</code> se <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> e <code>Ryan</code> forem propriedades no objeto <code>users</code>'
    testString: 'assert(isEveryoneHere(users) === true, "The function <code>isEveryoneHere</code> returns <code>true</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are properties on the <code>users</code> object");'
  - text: 'A função <code>isEveryoneHere</code> retorna <code>false</code> se <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> e <code>Ryan</code> não forem propriedades no objeto <code>users</code>'
    testString: 'assert((function() { delete users.Alan; delete users.Jeff; delete users.Sarah; delete users.Ryan; return isEveryoneHere(users) })() === false, "The function <code>isEveryoneHere</code> returns <code>false</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are not properties on the <code>users</code> object");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line

  // change code above this line
}

console.log(isEveryoneHere(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
