---
id: 587d8254367417b2b2512c71
challengeType: 1
videoUrl: ''
title: 从ES6中的集中删除项目
---

## Description
<section id="description">让我们使用<code>delete</code>方法练习从ES6集中<code>delete</code> 。首先，创建一个ES6 Set <code>var set = new Set([1,2,3]);</code>现在使用<code>delete</code>方法从Set中删除一个项目。 <blockquote> set.delete（1）; <br> console.log（[... set]）//应该返回[2,3] <blockquote></blockquote></blockquote></section>

## Instructions
<section id="instructions">现在，创建一个整数为1,2,3,4和5的集合。删除值2和5，然后返回集合。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '您的集应包含值1,3和4'
    testString: assert((function(){var test = checkSet(); return test.has(1) && test.has(3) && test.has(4) && test.size === 3;})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(){
   var set = //Create a set with values 1, 2, 3, 4, & 5
   //Remove the value 2
   //Remove the value 5
   //Return the set
   return set;
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
