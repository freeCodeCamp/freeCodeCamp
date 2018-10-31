---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
videoUrl: ''
localeTitle: Use a herança para que você não se repita
---

## Description
<section id="description"> Há um princípio em programação chamado <code>Don&#39;t Repeat Yourself (DRY)</code> . A razão pela qual o código repetido é um problema é porque qualquer alteração requer correção de código em vários lugares. Isso geralmente significa mais trabalho para os programadores e mais espaço para erros. Observe no exemplo abaixo que o método de <code>describe</code> é compartilhado por <code>Bird</code> e <code>Dog</code> : <blockquote> Bird.prototype = { <br> construtor: Bird, <br> describe: function () { <br> console.log (&quot;Meu nome é&quot; + this.name); <br> } <br> }; <br><br> Dog.prototype = { <br> construtor: Dog, <br> describe: function () { <br> console.log (&quot;Meu nome é&quot; + this.name); <br> } <br> }; </blockquote> O método <code>describe</code> é repetido em dois lugares. O código pode ser editado para seguir o princípio <code>DRY</code> , criando um <code>supertype</code> (ou pai) chamado <code>Animal</code> : <blockquote> function Animal () {}; <br><br> Animal.prototype = { <br> construtor: Animal, <br> describe: function () { <br> console.log (&quot;Meu nome é&quot; + this.name); <br> } <br> }; </blockquote> Desde <code>Animal</code> inclui o método de <code>describe</code> , você pode removê-lo de <code>Bird</code> and <code>Dog</code> : <blockquote> Bird.prototype = { <br> construtor: Bird <br> }; <br><br> Dog.prototype = { <br> construtor: Dog <br> }; </blockquote></section>

## Instructions
<section id="instructions"> O método de <code>eat</code> é repetido em <code>Cat</code> e <code>Bear</code> . Edite o código no espírito de <code>DRY</code> movendo o método <code>eat</code> para o <code>supertype</code> <code>Animal</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal.prototype</code> deve ter a propriedade <code>eat</code> .
    testString: 'assert(Animal.prototype.hasOwnProperty("eat"), "<code>Animal.prototype</code> should have the <code>eat</code> property.");'
  - text: <code>Bear.prototype</code> não deve ter a propriedade <code>eat</code> .
    testString: 'assert(!(Bear.prototype.hasOwnProperty("eat")), "<code>Bear.prototype</code> should not have the <code>eat</code> property.");'
  - text: <code>Cat.prototype</code> não deve ter a propriedade <code>eat</code> .
    testString: 'assert(!(Cat.prototype.hasOwnProperty("eat")), "<code>Cat.prototype</code> should not have the <code>eat</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
