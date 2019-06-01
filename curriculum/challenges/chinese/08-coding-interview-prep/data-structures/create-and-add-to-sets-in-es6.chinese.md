---
id: 587d8254367417b2b2512c70
title: Create and Add to Sets in ES6
challengeType: 1
videoUrl: ''
localeTitle: 在ES6中创建和添加集
---

## Description
<section id="description">既然您已经完成了ES5，那么您将在ES6中执行类似的操作。这将相当容易。 ES6包含一个内置的数据结构<code>Set</code>现在包含了您手动编写的许多操作。我们来看看：创建一个新的空集： <code>var set = new Set();</code>您可以使用值创建一个集合： <code>var set = new Set(1);</code>您可以使用数组创建一个集合： <code>var set = new Set([1, 2, 3]);</code>创建集合后，可以使用<code>add</code>方法添加所需的值： <blockquote> var set = new Set（[1,2,3]）; <br> set.add（[4,5,6]）; </blockquote>提醒一下，集合是一种不能包含重复值的数据结构： <blockquote> var set = new Set（[1,2,3,1,2,3]）; <br> // set仅包含[1,2,3] </blockquote></section>

## Instructions
<section id="instructions">在本练习中，返回一个具有以下值的集合： <code>1, 2, 3, &#39;Taco&#39;, &#39;Cat&#39;, &#39;Awesome&#39;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '您的<code>Set</code>应该只包含值<code>1, 2, 3, Taco, Cat, Awesome</code> 。'
    testString: 'assert((function(){var test = checkSet(); return (test.size == 6) && test.has(1) && test.has(2) && test.has(3) && test.has("Taco") && test.has("Cat") && test.has("Awesome");})(), "Your <code>Set</code> should only contain the values <code>1, 2, 3, Taco, Cat, Awesome</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line

  // change code above this line
  console.log(set);
  return set;
}

checkSet();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
