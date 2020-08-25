---
id: 587d8253367417b2b2512c6d
title: Perform an Intersection on Two Sets of Data
challengeType: 1
videoUrl: ''
localeTitle: 在两组数据上执行交集
---

## Description
<section id="description">在本练习中，我们将对两组数据执行交集。我们将在我们的<code>Set</code>数据结构上创建一个名为<code>intersection</code> 。集合的交集表示两个或更多集合共有的所有值。此方法应将另一个<code>Set</code>作为参数，并返回两个集合的<code>intersection</code> 。例如，如果<code>setA = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</code>和<code>setB = [&#39;a&#39;,&#39;b&#39;,&#39;d&#39;,&#39;e&#39;]</code> ，则setA和setB的交集为： <code>setA.intersection(setB) = [&#39;a&#39;, &#39;b&#39;]</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>Set</code>类应该有一个<code>intersection</code>方法。
    testString: assert((function(){var test = new Set(); return (typeof test.intersection === 'function')})());
  - text: 收回了适当的收藏
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
// solution required
```

/section>
