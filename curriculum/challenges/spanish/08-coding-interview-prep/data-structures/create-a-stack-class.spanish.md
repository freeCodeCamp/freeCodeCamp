---
id: 587d8250367417b2b2512c5f
title: Create a Stack Class
localeTitle: Crear una clase de pila
challengeType: 1
---

## Description
<section id='description'> 
En la sección anterior, hablamos sobre qué es una pila y cómo podemos usar una matriz para representar una pila. En esta sección, crearemos nuestra propia clase de pila. 
Aunque puede usar matrices para crear pilas, a veces es mejor limitar la cantidad de control que tenemos con nuestras pilas. 
Aparte del método <code>push</code> y <code>pop</code> , las pilas tienen otros métodos útiles. <code>isEmpty</code> <code>clear</code> método <code>peek</code> , <code>isEmpty</code> y <code>clear</code> a nuestra clase de pila. 
Instrucciones 
Escribe un método de <code>push</code> que empuja un elemento a la parte superior de la pila, un método <code>pop</code> que elimina el elemento de la parte superior de la pila, un método de <code>peek</code> que mira el primer elemento de la pila, un método <code>isEmpty</code> que verifica si la pila está vacía, y un método <code>clear</code> que elimina todos los elementos de la pila. 
Normalmente las pilas no tienen esto, pero hemos agregado un método de ayuda de <code>print</code> que la consola registra la colección. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu clase de <code>Stack</code> debería tener un método <code>push</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.push === "function")}()), "Your <code>Stack</code> class should have a <code>push</code> method.");'
  - text: Tu clase de <code>Stack</code> debería tener un método <code>pop</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.pop === "function")}()), "Your <code>Stack</code> class should have a <code>pop</code> method.");'
  - text: Tu clase de <code>Stack</code> debería tener un método de <code>peek</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.peek === "function")}()), "Your <code>Stack</code> class should have a <code>peek</code> method.");'
  - text: Tu clase de <code>Stack</code> debería tener un método <code>isEmpty</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.isEmpty === "function")}()), "Your <code>Stack</code> class should have a <code>isEmpty</code> method.");'
  - text: Tu clase de <code>Stack</code> debería tener un método <code>clear</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.clear === "function")}()), "Your <code>Stack</code> class should have a <code>clear</code> method.");'
  - text: El método <code>peek</code> debería devolver el elemento superior de la pila.
    testString: 'assert((function(){var test = new Stack();  test.push("CS50"); return (test.peek() === "CS50")}()), "The <code>peek</code> method should return the top element of the stack");'
  - text: El método <code>pop</code> debería eliminar y devolver el elemento superior de la pila.
    testString: 'assert((function(){var test = new Stack(); test.push("CS50"); return (test.pop() === "CS50");}()), "The <code>pop</code> method should remove and return the top element of the stack");'
  - text: El método <code>isEmpty</code> debería devolver verdadero si una pila no contiene ningún elemento
    testString: 'assert((function(){var test = new Stack(); return test.isEmpty()}()), "The <code>isEmpty</code> method should return true if a stack does not contain any elements");'
  - text: El método <code>clear</code> debe eliminar todos los elementos de la pila.
    testString: 'assert((function(){var test = new Stack();  test.push("CS50"); test.clear(); return (test.isEmpty())}()), "The <code>clear</code> method should remove all element from the stack");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Stack() {
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line

    // Only change code above this line
}
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
