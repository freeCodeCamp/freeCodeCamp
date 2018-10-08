---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
localeTitle: Crear un método en un objeto
challengeType: 1
---

## Description
<section id='description'> 
<code>Objects</code> pueden tener un tipo especial de <code>property</code> , llamado <code>method</code> . 
<code>Methods</code> son <code>properties</code> que son funciones. Esto agrega un comportamiento diferente a un <code>object</code> . Aquí está el ejemplo de <code>duck</code> con un método: 
<blockquote>let duck = {<br>&nbsp;&nbsp;name: "Aflac",<br>&nbsp;&nbsp;numLegs: 2,<br>&nbsp;&nbsp;sayName: function() {return "The name of this duck is " + duck.name + ".";}<br>};<br>duck.sayName();<br>// Returns "The name of this duck is Aflac."</blockquote> 
El ejemplo agrega el <code>method</code> <code>sayName</code> , que es una función que devuelve una oración que da el nombre del <code>duck</code> . 
Observe que el <code>method</code> accedió a la propiedad de <code>name</code> en la declaración de retorno usando <code>duck.name</code> . El próximo desafío cubrirá otra forma de hacer esto. 
</section>

## Instructions
<section id='instructions'> 
Usando el <code>object</code> <code>dog</code> , dale un método llamado <code>sayLegs</code> . El método debe devolver la frase &quot;Este perro tiene 4 patas&quot;. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code> debería ser una función.
    testString: 'assert(typeof(dog.sayLegs) === "function", "<code>dog.sayLegs()</code> should be a function.");'
  - text: <code>dog.sayLegs()</code> debe devolver la cadena dada; tenga en cuenta que la puntuación y el espaciado son importantes.
    testString: 'assert(dog.sayLegs() === "This dog has 4 legs.", "<code>dog.sayLegs()</code> should return the given string - note that punctuation and spacing matter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

</div>



</section>

## Solution
<section id='solution'>


```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```

</section>
