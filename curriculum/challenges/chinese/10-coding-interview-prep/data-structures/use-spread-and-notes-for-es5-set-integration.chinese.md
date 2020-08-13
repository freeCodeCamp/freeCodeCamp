---
id: 587d8255367417b2b2512c73
title: Use Spread and Notes for ES5 Set() Integration
challengeType: 1
videoUrl: ''
localeTitle: 使用Spread和Notes进行ES5 Set（）集成
---

## Description
<section id="description">你还记得ES6传播运营商<code>...</code> ？ <code>...</code>可以在ES6中获取可迭代对象并将它们转换为数组。让我们创建一个Set，并检查传播函数。 <blockquote> var set = new Set（[1,2,3]）; <br> var setToArr = [... set] <br> console.log（setToArr）//返回[1,2,3] </blockquote></section>

## Instructions
<section id="instructions">在本练习中，我们将set对象传递给<code>checkSet</code>函数。它应该返回一个包含Set值的数组。现在你已经成功学会了如何使用ES6 <code>Set()</code>对象，干得好！ </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的套装已正确退回！
    testString: 'assert((function(){var test = checkSet(new Set([1,2,3,4,5,6,7])); return DeepEqual(test, [ 1, 2, 3, 4, 5, 6, 7 ]);})());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(set){
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
