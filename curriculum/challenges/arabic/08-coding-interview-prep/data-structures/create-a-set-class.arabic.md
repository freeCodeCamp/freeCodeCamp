---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
videoUrl: ''
localeTitle: إنشاء فئة مجموعة
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function(){var test = new Set(); return (typeof test.add === "function")}()), "Your <code>Set</code> class should have an <code>add</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Set(); test.add("a"); test.add("b"); test.add("a"); var vals = test.values(); return (vals[0] === "a" && vals[1] === "b" && vals.length === 2)}()), "Your <code>add</code> method should not add duplicate values.");'
  - text: ''
    testString: 'assert((function(){var test = new Set(); var result = test.add("a"); return (result != undefined) && (result === true);}()), "Your <code>add</code> method should return <code>true</code> when a value has been successfully added.");'
  - text: ''
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
// solution required
```
</section>
