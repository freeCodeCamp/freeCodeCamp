---
id: 587d8251367417b2b2512c61
title: Work with Nodes in a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Trabajar con nodos en una lista enlazada
---

## Description
<section id="description"> Otra estructura de datos común con la que se encontrará en informática es la <dfn>lista enlazada</dfn> . Una lista enlazada es una colección lineal de elementos de datos, llamados &#39;nodos&#39;, cada uno de los cuales apunta al siguiente. Cada <dfn>nodo</dfn> en una lista enlazada contiene dos piezas clave de información: el <code>element</code> sí, y una referencia al siguiente <code>node</code> . Imagina que estás en una línea de conga. Tienes las manos en la siguiente persona en la línea, y la persona detrás de ti tiene las manos sobre ti. Puede ver a la persona directamente delante de usted, pero está bloqueando la vista de las otras personas en la fila. Un nodo es como una persona en una línea de conga: saben quiénes son y solo pueden ver a la siguiente persona en la línea, pero no son conscientes de las otras personas que están delante o detrás. </section>

## Instructions
<section id="instructions"> En nuestro editor de código, hemos creado dos nodos, <code>Kitten</code> y <code>Puppy</code> , y hemos conectado manualmente el nodo <code>Kitten</code> nodo <code>Puppy</code> . Crea un nodo <code>Cat</code> y <code>Dog</code> y agrégalos manualmente a la línea. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su nodo <code>Puppy</code> debería tener una referencia a un nodo <code>Cat</code> .
    testString: 'assert(Puppy.next.element === "Cat", "Your <code>Puppy</code> node should have a reference to a <code>Cat</code> node.");'
  - text: Su nodo <code>Cat</code> debe tener una referencia a un nodo <code>Dog</code> .
    testString: 'assert(Cat.next.element === "Dog", "Your <code>Cat</code> node should have a reference to a <code>Dog</code> node.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Node = function(element){
    this.element = element;
    this.next = null;
};
var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");

Kitten.next = Puppy;
// only add code below this line

// test your code
console.log(Kitten.next);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
