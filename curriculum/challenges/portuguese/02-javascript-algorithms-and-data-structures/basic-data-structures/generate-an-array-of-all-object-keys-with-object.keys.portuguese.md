---
id: 587d7b7d367417b2b2512b1e
title: Generate an Array of All Object Keys with Object.keys()
challengeType: 1
videoUrl: ''
localeTitle: Gerar uma matriz de todas as chaves de objeto com Object.keys ()
---

## Description
<section id="description"> Também podemos gerar um array que contém todas as chaves armazenadas em um objeto usando o método <code>Object.keys()</code> e passando um objeto como argumento. Isso retornará uma matriz com strings representando cada propriedade no objeto. Novamente, não haverá uma ordem específica para as entradas na matriz. </section>

## Instructions
<section id="instructions"> Termine de gravar a função <code>getArrayOfUsers</code> para que ela retorne uma matriz contendo todas as propriedades no objeto que ela recebe como argumento. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O objeto <code>users</code> contém apenas as chaves <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> e <code>Ryan</code>'
    testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
  - text: A função <code>getArrayOfUsers</code> retorna uma matriz que contém todas as chaves no objeto <code>users</code>
    testString: 'assert((function() { users.Sam = {}; users.Lewis = {}; let R = getArrayOfUsers(users); return (R.indexOf("Alan") !== -1 && R.indexOf("Jeff") !== -1 && R.indexOf("Sarah") !== -1 && R.indexOf("Ryan") !== -1 && R.indexOf("Sam") !== -1 && R.indexOf("Lewis") !== -1); })() === true, "The <code>getArrayOfUsers</code> function returns an array which contains all the keys in the <code>users</code> object");'

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

function getArrayOfUsers(obj) {
  // change code below this line

  // change code above this line
}

console.log(getArrayOfUsers(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
