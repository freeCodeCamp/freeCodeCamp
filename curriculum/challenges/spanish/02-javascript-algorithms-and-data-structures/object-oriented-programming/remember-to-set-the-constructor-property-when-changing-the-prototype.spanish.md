---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
localeTitle: Recuerde establecer la propiedad del constructor al cambiar el prototipo
challengeType: 1
---

## Description
<section id='description'> 
Hay un efecto secundario crucial de configurar manualmente el <code>prototype</code> en un nuevo objeto. Se borró la propiedad del <code>constructor</code> ! El código del desafío anterior imprimirá lo siguiente para el <code>duck</code> : 
<blockquote>console.log(duck.constructor)<br>// prints ‘undefined’ - Oops!</blockquote> 
Para solucionar este problema, siempre que un prototipo se establezca manualmente en un nuevo objeto, recuerde definir la propiedad del <code>constructor</code> : 
<blockquote>Bird.prototype = {<br>&nbsp;&nbsp;constructor: Bird, // define the constructor property<br>&nbsp;&nbsp;numLegs: 2,<br>&nbsp;&nbsp;eat: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("nom nom nom");<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;describe: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("My name is " + this.name); <br>&nbsp;&nbsp;}<br>};</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Defina la propiedad del <code>constructor</code> en el <code>prototype</code> <code>Dog</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> debería establecer la propiedad del <code>constructor</code> .
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
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

</section>
