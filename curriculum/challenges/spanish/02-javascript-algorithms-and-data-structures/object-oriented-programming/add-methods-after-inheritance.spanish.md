---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
videoUrl: ''
localeTitle: Añadir métodos después de la herencia
---

## Description
<section id="description"> Una función constructora que hereda su objeto <code>prototype</code> de una función constructora de <code>supertype</code> aún puede tener sus propios métodos además de los métodos heredados. Por ejemplo, <code>Bird</code> es un constructor que hereda su <code>prototype</code> de <code>Animal</code> : <blockquote> function animal () {} <br> Animal.prototype.eat = function () { <br> console.log (&quot;nom nom nom&quot;); <br> }; <br> function Bird () {} <br> Bird.prototype = Object.create (Animal.prototype); <br> Bird.prototype.constructor = Bird; </blockquote> Además de lo que se hereda de <code>Animal</code> , desea agregar un comportamiento que sea exclusivo de los objetos <code>Bird</code> . Aquí, <code>Bird</code> obtendrá una función <code>fly()</code> . Las funciones se agregan al <code>prototype</code> <code>Bird&#39;s</code> la misma manera que cualquier función de constructor: <blockquote> Bird.prototype.fly = function () { <br> console.log (&quot;Estoy volando!&quot;); <br> }; </blockquote> Ahora las instancias de <code>Bird</code> tendrán los métodos de <code>eat()</code> y <code>fly()</code> : <blockquote> dejar pato = nuevo pájaro (); <br> duck.eat (); // imprime &quot;nom nom nom&quot; <br> duck.fly (); // impresiones &quot;Estoy volando!&quot; </blockquote></section>

## Instructions
<section id="instructions"> Agregue todo el código necesario para que el objeto <code>Dog</code> hereda de <code>Animal</code> y el constructor <code>Dog&#39;s</code> <code>prototype</code> <code>Dog&#39;s</code> esté configurado en Dog. Luego, agregue un método de <code>bark()</code> al objeto <code>Dog</code> para que el <code>beagle</code> pueda <code>eat()</code> y <code>bark()</code> . El método de la <code>bark()</code> debe imprimir &quot;¡Guau!&quot; a la consola. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal</code> no debe responder al método de la <code>bark()</code> .
    testString: 'assert(typeof Animal.prototype.bark == "undefined", "<code>Animal</code> should not respond to the <code>bark()</code> method.");'
  - text: <code>Dog</code> debe heredar el método de <code>eat()</code> de <code>Animal</code> .
    testString: 'assert(typeof Dog.prototype.eat == "function", "<code>Dog</code> should inherit the <code>eat()</code> method from <code>Animal</code>.");'
  - text: <code>Dog</code> debe tener el método de la <code>bark()</code> como propiedad <code>own</code> .
    testString: 'assert(Dog.prototype.hasOwnProperty("bark"), "<code>Dog</code> should have the <code>bark()</code> method as an <code>own</code> property.");'
  - text: <code>beagle</code> debe ser un <code>instanceof</code> <code>Animal</code> .
    testString: 'assert(beagle instanceof Animal, "<code>beagle</code> should be an <code>instanceof</code> <code>Animal</code>.");'
  - text: El constructor para <code>beagle</code> debe establecer en <code>Dog</code> .
    testString: 'assert(beagle.constructor === Dog, "The constructor for <code>beagle</code> should be set to <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line




// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

```

</div>



</section>

## Solution
<section id='solution'>

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
</section>
