---
id: 587d7b7d367417b2b2512b1f
title: Modify an Array Stored in an Object
challengeType: 1
videoUrl: ''
localeTitle: Modificar uma matriz armazenada em um objeto
---

## Description
<section id="description"> Agora você viu todas as operações básicas para objetos JavaScript. Você pode adicionar, modificar e remover pares de valores-chave, verificar se existem chaves e iterar sobre todas as chaves em um objeto. À medida que você continua aprendendo JavaScript, você verá aplicativos ainda mais versáteis de objetos. Além disso, as lições opcionais de estruturas de dados avançadas, mais adiante no currículo, também abrangem os objetos ES6 <dfn>Map</dfn> e <dfn>Set</dfn> , que são semelhantes aos objetos comuns, mas fornecem alguns recursos adicionais. Agora que você aprendeu as noções básicas de arrays e objetos, você está totalmente preparado para começar a lidar com problemas mais complexos usando JavaScript! </section>

## Instructions
<section id="instructions"> Dê uma olhada no objeto que fornecemos no editor de código. O objeto de <code>user</code> contém três chaves. A chave de <code>data</code> contém cinco chaves, uma das quais contém uma matriz de <code>friends</code> . A partir disso, você pode ver como os objetos são flexíveis como estruturas de dados. Nós começamos a escrever uma função <code>addFriend</code> . Termine de escrevê-lo para que ele use um objeto de <code>user</code> e adicione o nome do argumento de <code>friend</code> à matriz armazenada em <code>user.data.friends</code> e retorne essa matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O objeto de <code>user</code> tem <code>name</code> , <code>age</code> e chaves de <code>data</code>'
    testString: 'assert("name" in user && "age" in user && "data" in user, "The <code>user</code> object has <code>name</code>, <code>age</code>, and <code>data</code> keys");'
  - text: A função <code>addFriend</code> aceita um objeto de <code>user</code> e uma string de <code>friend</code> como argumentos e adiciona o amigo à matriz de <code>friends</code> no objeto de <code>user</code>
    testString: 'assert((function() { let L1 = user.data.friends.length; addFriend(user, "Sean"); let L2 = user.data.friends.length; return (L2 === L1 + 1); })(), "The <code>addFriend</code> function accepts a <code>user</code> object and a <code>friend</code> string as arguments and adds the friend to the array of <code>friends</code> in the <code>user</code> object");'
  - text: '<code>addFriend(user, &quot;Pete&quot;)</code> deve retornar <code>[&quot;Sam&quot;, &quot;Kira&quot;, &quot;Tomo&quot;, &quot;Pete&quot;]</code>'
    testString: 'assert.deepEqual((function() { delete user.data.friends; user.data.friends = ["Sam", "Kira", "Tomo"]; return addFriend(user, "Pete") })(), ["Sam", "Kira", "Tomo", "Pete"], "<code>addFriend(user, "Pete")</code> should return <code>["Sam", "Kira", "Tomo", "Pete"]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line

  // change code above this line
}

console.log(addFriend(user, 'Pete'));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
