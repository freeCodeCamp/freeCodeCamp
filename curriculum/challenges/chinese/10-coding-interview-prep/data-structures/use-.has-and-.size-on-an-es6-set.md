---
id: 587d8255367417b2b2512c72
title: Use .has and .size on an ES6 Set
challengeType: 1
videoUrl: ''
localeTitle: 在ES6集上使用.has和.size
---

## Description
<section id="description">让我们看一下ES6 Set对象上可用的.has和.size方法。首先，创建一个ES6 Set <code>var set = new Set([1,2,3]);</code> .has方法将检查该值是否包含在集合中。 <code>var hasTwo = set.has(2);</code> .size方法将返回一个表示Set <code>var howBig = set.size;</code>大小的整数<code>var howBig = set.size;</code> </section>

## Instructions
<section id="instructions">在本练习中，我们将数组和值传递给checkSet（）函数。您的函数应该从数组参数创建ES6集。查找该集是否包含value参数。找到集合的大小。并在数组中返回这两个值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>checkSet([4, 5, 6], 3)</code>应该返回[false，3]'
    testString: 'assert((function(){var test = checkSet([4,5,6], 3); return DeepEqual(test, [ false, 3 ]);})());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(arrToBeSet, checkValue){

   // change code below this line

   // change code above this line

}

checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
