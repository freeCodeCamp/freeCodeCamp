---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
videoUrl: ''
localeTitle: Entenda de onde o protótipo de um objeto vem
---

## Description
<section id="description"> Assim como as pessoas herdam genes de seus pais, um objeto herda seu <code>prototype</code> diretamente da função construtora que o criou. Por exemplo, aqui o construtor <code>Bird</code> cria o objeto <code>duck</code> : <blockquote> função Bird (name) { <br> this.name = nome; <br> } <br><br> vamos pato = novo pássaro (&quot;Donald&quot;); </blockquote> <code>duck</code> herda seu <code>prototype</code> da função de construtor <code>Bird</code> . Você pode mostrar esse relacionamento com o método <code>isPrototypeOf</code> : <blockquote> Bird.prototype.isPrototypeOf (pato); <br> // retorna verdadeiro </blockquote></section>

## Instructions
<section id="instructions"> Use <code>isPrototypeOf</code> para verificar o <code>prototype</code> do <code>beagle</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Mostre que o <code>Dog.prototype</code> é o <code>prototype</code> do <code>beagle</code>
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
// solution required
```
</section>
