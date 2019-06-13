---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
challengeType: 1
videoUrl: ''
localeTitle: Recuerde establecer la propiedad del constructor al cambiar el prototipo
---

## Descripción
<section id="description"> Hay un efecto secundario crucial de configurar manualmente el <code>prototype</code> en un nuevo objeto. Se borró la propiedad del <code>constructor</code> ! El código del desafío anterior imprimirá lo siguiente para el <code>duck</code> : <blockquote> console.log (duck.constructor) <br> // imprime &#39;indefinido&#39; - ¡Vaya! </blockquote> Para solucionar esto, siempre que un prototipo se establezca manualmente en un nuevo objeto, recuerde definir la propiedad del <code>constructor</code> : <blockquote> Bird.prototype = { <br> constructor: Bird, // define la propiedad del constructor <br> NumLegs: 2, <br> comer: función () { <br> console.log (&quot;nom nom nom&quot;); <br> } <br> describe: function () { <br> console.log (&quot;Mi nombre es&quot; + this.name); <br> } <br> }; </blockquote></section>

## Instrucciones
<section id="instructions"> Definir la propiedad del <code>constructor</code> en el <code>prototype</code> <code>Dog</code> . </section>

## Pruebas
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

// Modifica el código debajo de esta linea
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

## Solución
<section id='solution'>

```js
// Solución requerida
```
</section>
