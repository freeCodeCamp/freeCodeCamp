---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift()
challengeType: 1
videoUrl: ''
localeTitle: 使用shift（）操纵数组
---

## Description
<section id="description"> <code>pop()</code>总是删除数组的最后一个元素。如果你想删除第一个怎么办？这就是<code>.shift()</code>用武之地。它就像<code>.pop()</code>一样工作，除了它删除了第一个元素而不是最后一个元素。 </section>

## Instructions
<section id="instructions">使用<code>.shift()</code>函数从<code>myArray</code>删除第一项，将“shift off”值分配给<code>removedFromMyArray</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code>现在应该等于<code>[[&quot;dog&quot;, 3]]</code> 。'
    testString: 'assert((function(d){if(d[0][0] == "dog" && d[0][1] === 3 && d[1] == undefined){return true;}else{return false;}})(myArray), "<code>myArray</code> should now equal <code>[["dog", 3]]</code>.");'
  - text: '<code>removedFromMyArray</code>应该包含<code>[&quot;John&quot;, 23]</code> 。'
    testString: 'assert((function(d){if(d[0] == "John" && d[1] === 23 && typeof removedFromMyArray === "object"){return true;}else{return false;}})(removedFromMyArray), "<code>removedFromMyArray</code> should contain <code>["John", 23]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray;

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
