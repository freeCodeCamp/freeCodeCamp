---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
localeTitle: Entender de dónde viene el prototipo de un objeto
challengeType: 1
---

## Description
<section id='description'> 
Al igual que las personas heredan genes de sus padres, un objeto hereda su <code>prototype</code> directamente de la función constructora que lo creó. Por ejemplo, aquí el constructor <code>Bird</code> crea el objeto <code>duck</code> : 
<blockquote>function Bird(name) {<br>&nbsp;&nbsp;this.name = name;<br>}<br><br>let duck = new Bird("Donald");</blockquote> 
<code>duck</code> hereda su <code>prototype</code> de la función constructor de <code>Bird</code> . Puede mostrar esta relación con el método <code>isPrototypeOf</code> : 
<blockquote>Bird.prototype.isPrototypeOf(duck);<br>// returns true</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Usa <code>isPrototypeOf</code> para verificar el <code>prototype</code> de <code>beagle</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Mostrar que <code>Dog.prototype</code> es el <code>prototype</code> de <code>beagle</code>
    testString: 'assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code), "Show that <code>Dog.prototype</code> is the <code>prototype</code> of <code>beagle</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line


```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```

</section>
