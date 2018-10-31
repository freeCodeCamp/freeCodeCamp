---
id: 587d7db0367417b2b2512b82
title: Understand the Prototype Chain
challengeType: 1
videoUrl: ''
localeTitle: Entenda a cadeia de protótipos
---

## Description
<section id="description"> Todos os objetos em JavaScript (com algumas exceções) possuem um <code>prototype</code> . Além disso, o próprio <code>prototype</code> um objeto é um objeto. <blockquote> função Bird (name) { <br> this.name = nome; <br> } <br><br> typeof Bird.prototype; // =&gt; objeto </blockquote> Como um <code>prototype</code> é um objeto, um <code>prototype</code> pode ter seu próprio <code>prototype</code> ! Nesse caso, o <code>prototype</code> do <code>Bird.prototype</code> é <code>Object.prototype</code> : <blockquote> Object.prototype.isPrototypeOf (Bird.prototype); <br> // retorna verdadeiro </blockquote> Como isso é útil? Você pode lembrar o método <code>hasOwnProperty</code> de um desafio anterior: <blockquote> vamos pato = novo pássaro (&quot;Donald&quot;); <br> duck.hasOwnProperty (&quot;name&quot;); // =&gt; true </blockquote> O método <code>hasOwnProperty</code> é definido em <code>Object.prototype</code> , que pode ser acessado por <code>Bird.prototype</code> , que pode ser acessado por <code>duck</code> . Este é um exemplo da cadeia de <code>prototype</code> . Nesta cadeia de <code>prototype</code> , <code>Bird</code> é o <code>supertype</code> de <code>duck</code> , enquanto <code>duck</code> é o <code>subtype</code> . <code>Object</code> é um <code>supertype</code> para <code>Bird</code> e <code>duck</code> . <code>Object</code> é um <code>supertype</code> para todos os objetos em JavaScript. Portanto, qualquer objeto pode usar o método <code>hasOwnProperty</code> . </section>

## Instructions
<section id="instructions"> Modifique o código para mostrar a cadeia de protótipos correta. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve mostrar que <code>Object.prototype</code> é o protótipo de <code>Dog.prototype</code> &quot;)
    testString: 'assert(/Object\.prototype\.isPrototypeOf/.test(code), "Your code should show that <code>Object.prototype</code> is the prototype of <code>Dog.prototype</code>");'

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

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
