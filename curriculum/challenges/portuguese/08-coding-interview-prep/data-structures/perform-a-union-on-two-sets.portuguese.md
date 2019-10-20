---
id: 587d8253367417b2b2512c6c
title: Perform a Union on Two Sets
challengeType: 1
videoUrl: ''
localeTitle: Executar uma união em dois conjuntos
---

## Description
<section id="description"> Neste exercício, vamos realizar uma união em dois conjuntos de dados. Vamos criar um método na nossa estrutura de dados <code>Set</code> chamada <code>union</code> . Este método deve ter outro <code>Set</code> como argumento e retornar a <code>union</code> dos dois conjuntos, excluindo quaisquer valores duplicados. Por exemplo, se <code>setA = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</code> e <code>setB = [&#39;a&#39;,&#39;b&#39;,&#39;d&#39;,&#39;e&#39;]</code> , a união de setA e setB é: <code>setA.union(setB) = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>Set</code> deve ter um método de <code>union</code> .
    testString: 'assert((function(){var test = new Set(); return (typeof test.union === "function")})(), "Your <code>Set</code> class should have a <code>union</code> method.");'
  - text: A coleção adequada foi retornada
    testString: 'assert((function(){var setA = new Set();  var setB = new Set();  setA.add("a");  setA.add("b");  setA.add("c");  setB.add("c");  setB.add("d");  var unionSetAB = setA.union(setB); var final = unionSetAB.values(); return (final.indexOf("a") !== -1 && final.indexOf("b") !== -1 && final.indexOf("c") !== -1 && final.indexOf("d") !== -1 && final.length === 4)})(), "The proper collection was returned");'

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
    // this method will return the size of the set
    this.size = function() {
        return collection.length;
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
