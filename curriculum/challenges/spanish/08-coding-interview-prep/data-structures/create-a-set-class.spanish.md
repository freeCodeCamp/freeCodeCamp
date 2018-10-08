---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
localeTitle: Crear una clase de conjunto
challengeType: 1
---

## Description
<section id='description'> 
En los próximos ejercicios, vamos a crear una función para emular una estructura de datos llamada &quot;Conjunto&quot;. Un conjunto es como una matriz, pero no puede contener valores duplicados. El uso típico de un Conjunto es simplemente verificar la presencia de un elemento. Esto se puede implementar con un objeto, por ejemplo: 
<blockquote>var set = new Object();<br>set.foo = true;<br>// See if foo exists in our set:<br>console.log(set.foo) // true</blockquote> 
En los próximos ejercicios, construiremos un conjunto completo desde cero. 
Para este ejercicio, cree una función que agregue un valor a nuestra colección de conjuntos siempre que el valor no exista en el conjunto. Por ejemplo: 
<blockquote>this.add = function(element) {<br>  //some code to add value to the set<br>}</blockquote> 
La función debe devolver <code>true</code> si el valor se agrega exitosamente y <code>false</code> contrario. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu clase <code>Set</code> debería tener un método <code>add</code> .
    testString: 'assert((function(){var test = new Set(); return (typeof test.add === "function")}()), "Your <code>Set</code> class should have an <code>add</code> method.");'
  - text: Su método de <code>add</code> no debe agregar valores duplicados.
    testString: 'assert((function(){var test = new Set(); test.add("a"); test.add("b"); test.add("a"); var vals = test.values(); return (vals[0] === "a" && vals[1] === "b" && vals.length === 2)}()), "Your <code>add</code> method should not add duplicate values.");'
  - text: Su método de <code>add</code> debe devolver <code>true</code> cuando un valor ha sido agregado exitosamente.
    testString: 'assert((function(){var test = new Set(); var result = test.add("a"); return (result != undefined) && (result === true);}()), "Your <code>add</code> method should return <code>true</code> when a value has been successfully added.");'
  - text: Su método de <code>add</code> debe devolver <code>false</code> cuando se agrega un valor duplicado.
    testString: 'assert((function(){var test = new Set(); test.add("a"); var result = test.add("a"); return (result != undefined) && (result === false);}()), "Your <code>add</code> method should return <code>false</code> when a duplicate value is added.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // change code below this line
    // change code above this line
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Set() {var collection = []; this.has = function(e){return(collection.indexOf(e) !== -1);};this.values = function() {return collection;};this.add = function(element) {if (!this.has(element)) {collection.push(element);return true;} else {return false;}};}
```

</section>
