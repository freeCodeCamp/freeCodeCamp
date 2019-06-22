---
id: 587d7b7d367417b2b2512b1d
title: 'Iterate Through the Keys of an Object with a for...in Statement'
challengeType: 1
videoUrl: ''
localeTitle: Iterar através das chaves de um objeto com um para ... em declaração
---

## Description
<section id="description"> Às vezes, você pode precisar iterar por todas as chaves de um objeto. Isso requer uma sintaxe específica em JavaScript chamada uma instrução <dfn>for ... in</dfn> . Para o nosso objeto de <code>users</code> , isso poderia parecer com: <blockquote> para (deixar usuário nos usuários) { <br> console.log (usuário); <br> }; <br><br> // logs: <br> Alan <br> Jeff <br> Sarah <br> Ryan </blockquote> Nesta declaração, definimos um <code>user</code> variável e, como você pode ver, essa variável foi redefinida durante cada iteração para cada uma das chaves do objeto à medida que a instrução passava pelo objeto, resultando na impressão do nome de cada usuário no console. <strong>NOTA:</strong> <br> Objetos não mantêm uma ordenação para chaves armazenadas como as matrizes fazem; assim, a posição das teclas em um objeto, ou a ordem relativa em que ele aparece, é irrelevante ao referenciar ou acessar essa chave. </section>

## Instructions
<section id="instructions"> Nós definimos uma função, <code>countOnline</code> ; use uma instrução <dfn>for ... in</dfn> dentro dessa função para percorrer os usuários no objeto <code>users</code> e retornar o número de usuários cuja propriedade <code>online</code> está configurada como <code>true</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O objeto <code>users</code> contém usuários <code>Jeff</code> e <code>Ryan</code> com <code>online</code> - <code>online</code> configurados como <code>true</code> e usuários <code>Alan</code> e <code>Sarah</code> com <code>online</code> - <code>online</code> configurados como <code>false</code>
    testString: 'assert(users.Alan.online === false && users.Jeff.online === true &&  users.Sarah.online === false &&  users.Ryan.online === true, "The <code>users</code> object contains users <code>Jeff</code> and <code>Ryan</code> with <code>online</code> set to <code>true</code> and users <code>Alan</code> and <code>Sarah</code> with <code>online</code> set to <code>false</code>");'
  - text: A função <code>countOnline</code> retorna o número de usuários com a propriedade <code>online</code> - <code>online</code> configurada como <code>true</code>
    testString: 'assert((function() { users.Harry = {online: true}; users.Sam = {online: true}; users.Carl = {online: true}; return countOnline(users) })() === 5, "The function <code>countOnline</code> returns the number of users with the <code>online</code> property set to <code>true</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line

  // change code above this line
}

console.log(countOnline(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
