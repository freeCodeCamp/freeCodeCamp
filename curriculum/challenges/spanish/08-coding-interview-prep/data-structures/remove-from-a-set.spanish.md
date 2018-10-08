---
id: 587d8253367417b2b2512c6b
title: Remove from a Set
localeTitle: Eliminar de un conjunto
challengeType: 1
---

## Description
<section id='description'> 
En este ejercicio vamos a crear una función de borrado para nuestro conjunto. La función debe llamarse <code>this.remove</code> . Esta función debe aceptar un valor y verificar si existe en el conjunto. Si lo hace, elimine ese valor del conjunto y devuelva verdadero. De lo contrario, devuelve falso. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu clase <code>Set</code> debería tener un método de <code>remove</code> .
    testString: 'assert((function(){var test = new Set(); return (typeof test.remove === "function")}()), "Your <code>Set</code> class should have a <code>remove</code> method.");'
  - text: El método de <code>remove</code> solo debe eliminar los elementos que están presentes en el conjunto.
    testString: 'assert.deepEqual((function(){var test = new Set(); test.add("a");test.add("b");test.remove("c"); return test.values(); })(), ["a", "b"], "Your <code>remove</code> method should only remove items that are present in the set.");'
  - text: Su método de <code>remove</code> debe eliminar el elemento dado del conjunto.
    testString: 'assert((function(){var test = new Set(); test.add("a");test.add("b");test.remove("a"); var vals = test.values(); return (vals[0] === "b" && vals.length === 1)}()), "Your <code>remove</code> method should remove the given item from the set.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
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
function Set() {var collection = []; this.has = function(e){return(collection.indexOf(e) !== -1);};this.values = function() {return collection;};this.add = function(element) {if (!this.has(element)) {collection.push(element);return true;} else {return false;}};this.remove = function(element) {if(this.has(element)) {var i = collection.indexOf(element);collection.splice(i, 1);return true;}return false;};}
```

</section>
