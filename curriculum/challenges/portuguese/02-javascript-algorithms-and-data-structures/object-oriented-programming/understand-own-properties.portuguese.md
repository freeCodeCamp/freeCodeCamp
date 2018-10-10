---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1
videoUrl: ''
localeTitle: Compreenda as propriedades próprias
---

## Description
<section id="description"> No exemplo a seguir, o construtor <code>Bird</code> define duas propriedades: <code>name</code> e <code>numLegs</code> : <blockquote> função Bird (name) { <br> this.name = nome; <br> this.numLegs = 2; <br> } <br><br> vamos pato = novo pássaro (&quot;Donald&quot;); <br> deixe canário = novo pássaro (&quot;Tweety&quot;); </blockquote> <code>name</code> e <code>numLegs</code> são chamados de propriedades <code>own</code> , porque são definidos diretamente no objeto da instância. Isso significa que <code>duck</code> e <code>canary</code> cada um tem sua própria cópia separada dessas propriedades. Na verdade, cada instância do <code>Bird</code> terá sua própria cópia dessas propriedades. O código a seguir adiciona todos os <code>own</code> propriedades de <code>duck</code> para a matriz <code>ownProps</code> : <blockquote> deixe ownProps = []; <br><br> para (deixe a propriedade no pato) { <br> if (duck.hasOwnProperty (propriedade)) { <br> ownProps.push (propriedade); <br> } <br> } <br><br> console.log (ownProps); // imprime [&quot;nome&quot;, &quot;numLegs&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Adicione as <code>own</code> propriedades do <code>canary</code> ao array <code>ownProps</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ownProps</code> deve incluir os valores <code>&quot;numLegs&quot;</code> e <code>&quot;name&quot;</code> .
    testString: 'assert(ownProps.indexOf("name") !== -1 && ownProps.indexOf("numLegs") !== -1, "<code>ownProps</code> should include the values <code>"numLegs"</code> and <code>"name"</code>.");'
  - text: Resolva esse desafio sem usar o método <code>Object.keys()</code> .
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
// solution required
```
</section>
