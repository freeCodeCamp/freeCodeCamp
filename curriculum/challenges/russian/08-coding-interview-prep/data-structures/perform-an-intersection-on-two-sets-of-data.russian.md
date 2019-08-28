---
id: 587d8253367417b2b2512c6d
title: Perform an Intersection on Two Sets of Data
challengeType: 1
forumTopicId: 301709
localeTitle: Выполнить пересечение на двух наборах данных
---

## Description
<section id='description'>
В этом упражнении мы собираемся выполнить пересечение на 2 набора данных. Мы создадим метод на наших <code>Set</code> структуры данных называется <code>intersection</code> . Пересечение множеств представляет все значения, которые являются общими для двух или более наборов. Этот метод должен принимать другой <code>Set</code> в качестве аргумента и возвращать <code>intersection</code> двух наборов. Например, если <code>setA = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</code> и <code>setB = [&#39;a&#39;,&#39;b&#39;,&#39;d&#39;,&#39;e&#39;]</code> , то пересечение множества A и множества B: <code>setA.intersection(setB) = [&#39;a&#39;, &#39;b&#39;]</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Set</code> class should have a <code>intersection</code> method.
    testString: assert((function(){var test = new Set(); return (typeof test.intersection === 'function')})());
  - text: The proper collection was returned
    testString: assert((function(){  var setA = new Set();  var setB = new Set();  setA.add('a');  setA.add('b');  setA.add('c');  setB.add('c');  setB.add('d');  var intersectionSetAB = setA.intersection(setB); return (intersectionSetAB.size() === 1 && intersectionSetAB.values()[0] === 'c')})());

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
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        })
        return intersectionSet;
    }
}
```

</section>
