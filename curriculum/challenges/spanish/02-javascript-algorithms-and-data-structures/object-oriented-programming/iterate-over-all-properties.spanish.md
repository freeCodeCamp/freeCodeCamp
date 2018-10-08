---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
localeTitle: Iterar sobre todas las propiedades
challengeType: 1
---

## Description
<section id='description'> 
Ahora ha visto dos tipos de propiedades: propiedades <code>own</code> y propiedades de <code>prototype</code> . <code>Own</code> propiedades <code>Own</code> se definen directamente en la instancia del objeto en sí. Y las propiedades del <code>prototype</code> se definen en el <code>prototype</code> . 
<blockquote>function Bird(name) {<br>&nbsp;&nbsp;this.name = name;  //own property<br>}<br><br>Bird.prototype.numLegs = 2; // prototype property<br><br>let duck = new Bird("Donald");</blockquote> 
Así es como se agregan <code>duck&#39;s</code> propiedades <code>own</code> <code>duck&#39;s</code> a la matriz <code>ownProps</code> y las propiedades de <code>prototype</code> a la matriz <code>prototypeProps</code> : 
<blockquote>let ownProps = [];<br>let prototypeProps = [];<br><br>for (let property in duck) {<br>&nbsp;&nbsp;if(duck.hasOwnProperty(property)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;ownProps.push(property);<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;prototypeProps.push(property);<br>&nbsp;&nbsp;}<br>}<br><br>console.log(ownProps); // prints ["name"]<br>console.log(prototypeProps); // prints ["numLegs"]</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Agregue todas las propiedades <code>own</code> de <code>beagle</code> a la matriz <code>ownProps</code> . Agregue todas las propiedades <code>prototype</code> de <code>Dog</code> a la matriz <code>prototypeProps</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La matriz <code>ownProps</code> debe incluir <code>&quot;name&quot;</code> .
    testString: 'assert(ownProps.indexOf("name") !== -1, "The <code>ownProps</code> array should include <code>"name"</code>.");'
  - text: La matriz <code>prototypeProps</code> debe incluir <code>&quot;numLegs&quot;</code> .
    testString: 'assert(prototypeProps.indexOf("numLegs") !== -1, "The <code>prototypeProps</code> array should include <code>"numLegs"</code>.");'
  - text: Resuelva este desafío sin usar el método <code>Object.keys()</code> .
    testString: 'assert(!/\Object.keys/.test(code), "Solve this challenge without using the built in method <code>Object.keys()</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

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

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```

</section>
