---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
videoUrl: ''
localeTitle: Alterar o protótipo para um novo objeto
---

## Description
<section id="description"> Até agora você tem adicionado propriedades ao <code>prototype</code> individualmente: <blockquote> Bird.prototype.numLegs = 2; </blockquote> Isso se torna tedioso depois de mais do que algumas propriedades. <blockquote> Bird.prototype.eat = function () { <br> console.log (&quot;nom nom nom&quot;); <br> } <br><br> Bird.prototype.describe = function () { <br> console.log (&quot;Meu nome é&quot; + this.name); <br> } </blockquote> Uma maneira mais eficiente é definir o <code>prototype</code> para um novo objeto que já contém as propriedades. Desta forma, as propriedades são adicionadas de uma só vez: <blockquote> Bird.prototype = { <br> numLegs: 2, <br> eat: function () { <br> console.log (&quot;nom nom nom&quot;); <br> } <br> describe: function () { <br> console.log (&quot;Meu nome é&quot; + this.name); <br> } <br> }; </blockquote></section>

## Instructions
<section id="instructions"> Adicione a propriedade <code>numLegs</code> e os dois métodos <code>eat()</code> e <code>describe()</code> ao <code>prototype</code> de <code>Dog</code> definindo o <code>prototype</code> para um novo objeto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> deve ser definido para um novo objeto.
    testString: 'assert((/Dog\.prototype\s*?=\s*?{/).test(code), "<code>Dog.prototype</code> should be set to a new object.");'
  - text: <code>Dog.prototype</code> deve ter a propriedade <code>numLegs</code> .
    testString: 'assert(Dog.prototype.numLegs !== undefined, "<code>Dog.prototype</code> should have the property <code>numLegs</code>.");'
  - text: <code>Dog.prototype</code> deve ter o método <code>eat()</code> .
    testString: 'assert(typeof Dog.prototype.eat === "function", "<code>Dog.prototype</code> should have the method <code>eat()</code>."); '
  - text: <code>Dog.prototype</code> deve ter o método <code>describe()</code> .
    testString: 'assert(typeof Dog.prototype.describe === "function", "<code>Dog.prototype</code> should have the method <code>describe()</code>."); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line

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
