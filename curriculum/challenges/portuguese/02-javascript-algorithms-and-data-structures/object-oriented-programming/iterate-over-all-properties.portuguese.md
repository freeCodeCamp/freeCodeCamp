---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
videoUrl: ''
localeTitle: Iterar sobre todas as propriedades
---

## Description
<section id="description"> Você já viu dois tipos de propriedades: propriedades <code>own</code> e propriedades de <code>prototype</code> . <code>Own</code> propriedades <code>Own</code> são definidas diretamente na própria instância do objeto. E as propriedades do <code>prototype</code> são definidas no <code>prototype</code> . <blockquote> função Bird (name) { <br> this.name = nome; // possui propriedade <br> } <br><br> Bird.prototype.numLegs = 2; // propriedade protótipo <br><br> vamos pato = novo pássaro (&quot;Donald&quot;); </blockquote> Aqui está como você adiciona as <code>own</code> propriedades do <code>duck</code> às propriedades <code>ownProps</code> e <code>prototype</code> do array ao array <code>prototypeProps</code> : <blockquote> deixe ownProps = []; <br> deixe prototypeProps = []; <br><br> para (deixe a propriedade no pato) { <br> if (duck.hasOwnProperty (propriedade)) { <br> ownProps.push (propriedade); <br> } outro { <br> prototypeProps.push (propriedade); <br> } <br> } <br><br> console.log (ownProps); // imprime [&quot;nome&quot;] <br> console.log (prototypeProps); // imprime [&quot;numLegs&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Adicione todas as propriedades <code>own</code> do <code>beagle</code> ao array <code>ownProps</code> . Adicione todas as propriedades de <code>prototype</code> do <code>Dog</code> ao <code>prototypeProps</code> da matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A matriz <code>ownProps</code> deve incluir <code>&quot;name&quot;</code> .
    testString: 'assert(ownProps.indexOf("name") !== -1, "The <code>ownProps</code> array should include <code>"name"</code>.");'
  - text: O array <code>prototypeProps</code> deve incluir <code>&quot;numLegs&quot;</code> .
    testString: 'assert(prototypeProps.indexOf("numLegs") !== -1, "The <code>prototypeProps</code> array should include <code>"numLegs"</code>.");'
  - text: Resolva esse desafio sem usar o método <code>Object.keys()</code> .
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
// solution required
```
</section>
