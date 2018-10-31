---
id: 587d8253367417b2b2512c6d
title: Perform an Intersection on Two Sets of Data
challengeType: 1
videoUrl: ''
localeTitle: Realizar uma interseção em dois conjuntos de dados
---

## Description
<section id="description"> Neste exercício, vamos realizar uma interseção em dois conjuntos de dados. Vamos criar um método na nossa estrutura de dados <code>Set</code> chamada <code>intersection</code> . Uma interseção de conjuntos representa todos os valores comuns a dois ou mais conjuntos. Este método deve ter outro <code>Set</code> como argumento e retornar a <code>intersection</code> dos dois conjuntos. Por exemplo, se <code>setA = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</code> e <code>setB = [&#39;a&#39;,&#39;b&#39;,&#39;d&#39;,&#39;e&#39;]</code> , a interseção de setA e setB é: <code>setA.intersection(setB) = [&#39;a&#39;, &#39;b&#39;]</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>Set</code> deve ter um método de <code>intersection</code> .
    testString: 'assert(function(){var test = new Set(); return (typeof test.intersection === "function")}, "Your <code>Set</code> class should have a <code>intersection</code> method.");'
  - text: A coleção adequada foi retornada
    testString: 'assert(function(){  var setA = new Set();  var setB = new Set();  setA.add("a");  setA.add("b");  setA.add("c");  setB.add("c");  setB.add("d");  var intersectionSetAB = setA.intersection(setB); return (intersectionSetAB.size() === 1 && intersectionSetAB.values()[0] === "c")}, "The proper collection was returned");'

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
    // change code below this line
    // change code above this line
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
