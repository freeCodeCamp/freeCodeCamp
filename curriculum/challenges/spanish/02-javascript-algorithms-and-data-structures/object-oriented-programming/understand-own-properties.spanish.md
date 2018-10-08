---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
localeTitle: Entender propiedades propias
challengeType: 1
---

## Description
<section id='description'> 
En el siguiente ejemplo, el constructor de <code>Bird</code> define dos propiedades: <code>name</code> y <code>numLegs</code> : 
<blockquote>function Bird(name) {<br>&nbsp;&nbsp;this.name  = name;<br>&nbsp;&nbsp;this.numLegs = 2;<br>}<br><br>let duck = new Bird("Donald");<br>let canary = new Bird("Tweety");</blockquote> 
<code>name</code> y <code>numLegs</code> se denominan propiedades <code>own</code> , porque se definen directamente en el objeto de instancia. Eso significa que el <code>duck</code> y el <code>canary</code> tienen su propia copia separada de estas propiedades. 
De hecho, cada instancia de <code>Bird</code> tendrá su propia copia de estas propiedades. 
El siguiente código agrega todas las propiedades <code>own</code> de <code>duck</code> a la matriz <code>ownProps</code> : 
<blockquote>let ownProps = [];<br><br>for (let property in duck) {<br>&nbsp;&nbsp;if(duck.hasOwnProperty(property)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;ownProps.push(property);<br>&nbsp;&nbsp;}<br>}<br><br>console.log(ownProps); // prints [ "name", "numLegs" ]</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Agrega las propiedades <code>own</code> de <code>canary</code> a la matriz <code>ownProps</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ownProps</code> debe incluir los valores <code>&quot;numLegs&quot;</code> y <code>&quot;name&quot;</code> .
    testString: 'assert(ownProps.indexOf("name") !== -1 && ownProps.indexOf("numLegs") !== -1, "<code>ownProps</code> should include the values <code>"numLegs"</code> and <code>"name"</code>.");'
  - text: Resuelva este desafío sin usar el método <code>Object.keys()</code> .
    testString: 'assert(!/\Object.keys/.test(code), "Solve this challenge without using the built in method <code>Object.keys()</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line



```

</div>



</section>

## Solution
<section id='solution'>


```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);
```

</section>
