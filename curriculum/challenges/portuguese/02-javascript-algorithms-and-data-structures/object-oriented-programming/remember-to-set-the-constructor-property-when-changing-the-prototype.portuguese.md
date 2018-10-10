---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
challengeType: 1
videoUrl: ''
localeTitle: Lembre-se de definir a propriedade do construtor ao alterar o protótipo
---

## Description
<section id="description"> Há um efeito colateral crucial de configurar manualmente o <code>prototype</code> para um novo objeto. Ele apagou a propriedade do <code>constructor</code> ! O código no desafio anterior imprimiria o seguinte para <code>duck</code> : <blockquote> console.log (duck.constructor) <br> // imprime &quot;indefinido&quot; - Oops! </blockquote> Para corrigir isso, sempre que um protótipo for definido manualmente para um novo objeto, lembre-se de definir a propriedade do <code>constructor</code> : <blockquote> Bird.prototype = { <br> construtor: Bird, // define a propriedade do construtor <br> numLegs: 2, <br> eat: function () { <br> console.log (&quot;nom nom nom&quot;); <br> } <br> describe: function () { <br> console.log (&quot;Meu nome é&quot; + this.name); <br> } <br> }; </blockquote></section>

## Instructions
<section id="instructions"> Defina a propriedade do <code>constructor</code> no <code>prototype</code> <code>Dog</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> deve definir a propriedade do <code>constructor</code> .
    testString: 'assert(Dog.prototype.constructor === Dog, "<code>Dog.prototype</code> should set the <code>constructor</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Modify the code below this line
Dog.prototype = {

  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
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
