---
id: 587d8254367417b2b2512c6f
title: Perform a Subset Check on Two Sets of Data
challengeType: 1
videoUrl: ''
localeTitle: 对两组数据执行子集检查
---

## Description
<section id="description">在本练习中，我们将对2组数据执行子集测试。我们将在我们的<code>Set</code>数据结构上创建一个名为<code>subset</code> 。这将比较第一组与第二组，如果第一组完全包含在第二组中，则它将返回true。例如，如果<code>setA = [&#39;a&#39;,&#39;b&#39;]</code>和<code>setB = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;]</code> ，则setA和setB的子集为： <code>setA.subset(setB)</code>应该是<code>true</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>Set</code>类应该有一个<code>union</code>方法。
    testString: assert((function(){var test = new Set(); return (typeof test.subset === 'function')})());
  - text: 第一个Set（）包含在第二个Set中
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setB.add('b'); setB.add('c'); setB.add('a'); setB.add('d'); var subsetSetAB = setA.subset(setB);return (subsetSetAB === true)})());
  - text: '<code>["a", "b"].subset(["a", "b", "c", "d"])</code>应该返回<code>true</code> “）'
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setB.add('a'); setB.add('b'); setB.add('c'); setB.add('d'); var subsetSetAB = setA.subset(setB); return (subsetSetAB === true)})());
  - text: '<code>["a", "b", "c"].subset(["a", "b"])</code>应返回<code>false</code> “）'
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setA.add('c'); setB.add('a'); setB.add('b'); var subsetSetAB = setA.subset(setB); return (subsetSetAB === false)})());
  - text: '<code>[].subset([])</code>应该返回<code>true</code>'
    testString: assert((function(){var setA = new Set(); var setB = new Set(); var subsetSetAB = setA.subset(setB); return (subsetSetAB === true)})());
  - text: '<code>["a", "b"].subset(["c", "d"])</code>应返回<code>false</code> “）'
    testString: assert((function(){var setA = new Set(); var setB = new Set(); setA.add('a'); setA.add('b'); setB.add('c'); setB.add('d'); var subsetSetAB = setA.subset(setB); return (subsetSetAB === false)})());

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
    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
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
