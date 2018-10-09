---
id: 587d7db1367417b2b2512b88
title: Override Inherited Methods
localeTitle: Anular métodos heredados
challengeType: 1
---

## Description
<section id='description'>
En las lecciones anteriores, aprendió que un objeto puede heredar su comportamiento (métodos) de otro objeto clonando su objeto <code>prototype</code> :
<blockquote>ChildObject.prototype = Object.create(ParentObject.prototype);</blockquote>
Luego, <code>ChildObject</code> recibió sus propios métodos al encadenarlos a su <code>prototype</code> :
<blockquote>ChildObject.prototype.methodName = function() {...};</blockquote>
Es posible anular un método heredado. Se realiza de la misma manera: agregando un método a <code>ChildObject.prototype</code> utilizando el mismo nombre de método que el que se anula.
Este es un ejemplo de <code>Bird</code> anula el método <code>eat()</code> heredado de <code>Animal</code> :
<blockquote>function Animal() { }<br>Animal.prototype.eat = function() {<br>&nbsp;&nbsp;return "nom nom nom";<br>};<br>function Bird() { }<br><br>// Inherit all methods from Animal<br>Bird.prototype = Object.create(Animal.prototype);<br><br>// Bird.eat() overrides Animal.eat()<br>Bird.prototype.eat = function() {<br>&nbsp;&nbsp;return "peck peck peck";<br>};</blockquote>
Si tienes una instancia, <code>let duck = new Bird();</code> y llama a <code>duck.eat()</code> , así es como JavaScript busca el método en <code>duck&#39;s</code> cadena de <code>prototype</code> <code>duck&#39;s</code> :
1. duck =&gt; ¿Se define eat () aquí? No.
2. Pájaro =&gt; ¿Se define eat () aquí? =&gt; Sí. Ejecutarlo y dejar de buscar.
3. Animal =&gt; eat () también está definido, pero JavaScript dejó de buscar antes de alcanzar este nivel.
4. Objeto =&gt; JavaScript dejó de buscar antes de alcanzar este nivel.
</section>

## Instructions
<section id='instructions'>
Anula el método <code>fly()</code> de <code>Penguin</code> para que devuelva &quot;¡Ay !, este es un pájaro que no vuela&quot;.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>penguin.fly()</code> debería devolver la cadena &quot;¡Ay !, este es un pájaro que no vuela».
    testString: 'assert(penguin.fly() === "Alas, this is a flightless bird.", "<code>penguin.fly()</code> should return the string "Alas, this is a flightless bird."");'
  - text: El método <code>bird.fly()</code> debería devolver &quot;Estoy volando!&quot;
    testString: 'assert((new Bird()).fly() === "I am flying!", "The <code>bird.fly()</code> method should return "I am flying!"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line



// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```

</section>
