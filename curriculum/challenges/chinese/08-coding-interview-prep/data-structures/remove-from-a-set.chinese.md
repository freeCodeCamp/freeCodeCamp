---
id: 587d8253367417b2b2512c6b
title: Remove from a Set
challengeType: 1
videoUrl: ''
localeTitle: 从集合中删除
---

## Description
<section id="description">在本练习中，我们将为我们的集创建一个删除函数。该函数应命名为<code>this.remove</code> 。此函数应接受一个值并检查它是否存在于集合中。如果是，请从集合中删除该值，然后返回true。否则，返回false。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>Set</code>类应该有一个<code>remove</code>方法。
    testString: 'assert((function(){var test = new Set(); return (typeof test.remove === "function")}()), "Your <code>Set</code> class should have a <code>remove</code> method.");'
  - text: 您的<code>remove</code>方法应该只删除集合中存在的项目。
    testString: 'assert.deepEqual((function(){var test = new Set(); test.add("a");test.add("b");test.remove("c"); return test.values(); })(), ["a", "b"], "Your <code>remove</code> method should only remove items that are present in the set.");'
  - text: 您的<code>remove</code>方法应从集合中删除给定的项目。
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
// solution required
```
</section>
