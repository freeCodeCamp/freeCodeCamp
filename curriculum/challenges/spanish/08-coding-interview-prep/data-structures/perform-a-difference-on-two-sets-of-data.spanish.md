---
id: 587d8254367417b2b2512c6e
title: Perform a Difference on Two Sets of Data
localeTitle: Realizar una diferencia en dos conjuntos de datos
challengeType: 1
---

## Description
<section id='description'> 
En este ejercicio vamos a realizar una diferencia en 2 conjuntos de datos. Crearemos un método en nuestra estructura de datos de <code>Set</code> llamada <code>difference</code> . Una diferencia de conjuntos debe comparar dos conjuntos y devolver los elementos presentes en el primer conjunto que están ausentes en el segundo. Este método debe tomar otro <code>Set</code> como argumento y devolver la <code>difference</code> de los dos conjuntos. 
Por ejemplo, si <code>setA = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</code> y <code>setB = [&#39;a&#39;,&#39;b&#39;,&#39;d&#39;,&#39;e&#39;]</code> , entonces la diferencia de setA y setB es: <code>setA.difference(setB) = [&#39;c&#39;]</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu clase <code>Set</code> debería tener un método de <code>difference</code> .
    testString: 'assert(function(){var test = new Set(); return (typeof test.difference === "function")}, "Your <code>Set</code> class should have a <code>difference</code> method.");'
  - text: Se devolvió la colección adecuada.
    testString: 'assert(function(){var setA = new Set(); var setB = new Set(); setA.add("a"); setA.add("b"); setA.add("c"); setB.add("c"); setB.add("d"); var differenceSetAB = setA.difference(setB); return (differenceSetAB.size() === 2) && (differenceSetAB.values() === [ "a", "b" ])}, "The proper collection was returned");'

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
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
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
function Set() {var collection = []; this.has = function(e){return(collection.indexOf(e) !== -1);};this.values = function() {return collection;};this.add = function(element) {if (!this.has(element)) {collection.push(element);return true;} else {return false;}};this.remove = function(element) {if(this.has(element)) {var i = collection.indexOf(element);collection.splice(i, 1);return true;}return false;};this.size = function() {return collection.length;};this.union = function(set) {var u = new Set();var c = this.values();var s = set.values();c.forEach(function(element){u.add(element);});s.forEach(function(element){u.add(element);});return u;};this.intersection = function(set) {var i = new Set();var c = this.values();c.forEach(function(element){if(s.has(element)) i.add(element);});};this.difference = function(set) {var d = new Set();var c = this.values();c.forEach(function(e){if(!set.has(e)) d.add(e);});};}
```

</section>
