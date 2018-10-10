---
id: 587d7db2367417b2b2512b8a
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
challengeType: 1
videoUrl: ''
localeTitle: Use o fechamento para proteger as propriedades em um objeto de serem modificadas externamente
---

## Description
<section id="description"> No desafio anterior, o <code>bird</code> tinha um <code>name</code> propriedade pública. É considerado público porque pode ser acessado e alterado fora da definição da <code>bird</code> . <blockquote> bird.name = &quot;Duffy&quot;; </blockquote> Portanto, qualquer parte do seu código pode facilmente mudar o nome do <code>bird</code> para qualquer valor. Pense em coisas como senhas e contas bancárias facilmente alteráveis ​​por qualquer parte de sua base de código. Isso pode causar muitos problemas. A maneira mais simples de tornar as propriedades privadas é criando uma variável dentro da função construtora. Isso altera o escopo dessa variável para estar dentro da função de construtor versus disponível globalmente. Desta forma, a propriedade só pode ser acessada e alterada por métodos também dentro da função construtora. <blockquote> função Bird () { <br> deixe chocarEgg = 10; // propriedade privada <br><br> this.getHatchedEggCount = function () {// método publicamente disponível que um objeto pássaro pode usar <br> return hatchedEgg; <br> }; <br> } <br> vamos ducky = new Bird (); <br> ducky.getHatchedEggCount (); // retorna 10 </blockquote> Aqui <code>getHachedEggCount</code> é um método privilegiado, porque tem acesso à variável privada <code>hatchedEgg</code> . Isso é possível porque <code>hatchedEgg</code> é declarado no mesmo contexto que <code>getHachedEggCount</code> . Em JavaScript, uma função sempre tem acesso ao contexto no qual ela foi criada. Isso é chamado de <code>closure</code> . </section>

## Instructions
<section id="instructions"> Altere como o <code>weight</code> é declarado na função <code>Bird</code> , portanto, é uma variável privada. Em seguida, crie um método <code>getWeight</code> que retorne o valor do <code>weight</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A propriedade de <code>weight</code> deve ser uma variável privada.
    testString: 'assert(!code.match(/this\.weight/g), "The <code>weight</code> property should be a private variable.");'
  - text: Seu código deve criar um método no <code>Bird</code> chamado <code>getWeight</code> que retorna o <code>weight</code> .
    testString: 'assert((new Bird()).getWeight() === 15, "Your code should create a method in <code>Bird</code> called <code>getWeight</code> that returns the <code>weight</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() {
  this.weight = 15;


}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
