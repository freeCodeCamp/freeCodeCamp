---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift()
challengeType: 1

videoUrl: ''
localeTitle: Manipulate Arrays With shift()
---

## Description
<section id='description'>
<code>pop()</code>函数用来移出数组中最后一个元素。如果想要移出第一个元素要怎么办呢？
这就是<code>.shift()</code>的用武之地。它的工作原理就像<code>.pop()</code>，但它移除的是第一个元素，而不是最后一个。
</section>

## Instructions
<section id='instructions'>
使用<code>.shift()</code>函数移出<code>myArray</code>中的第一项，并把“移出”的值赋给<code>removedFromMyArray</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>myArray</code>应该等于<code>[['dog', 3]]</code>."
    testString: assert((function(d){if(d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined){return true;}else{return false;}})(myArray), '<code>myArray</code>应该等于<code>[["dog", 3]]</code>.');
  - text: "<code>removedFromMyArray</code>应该包含<code>['John', 23]</code>."
    testString: assert((function(d){if(d[0] == 'John' && d[1] === 23 && typeof removedFromMyArray === 'object'){return true;}else{return false;}})(removedFromMyArray), '<code>removedFromMyArray</code>应该包含<code>["John", 23]</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var myArray = [["John", 23], ["dog", 3]];

// 请把你的代码写在这条注释以下
var removedFromMyArray = myArray.shift();
```

</section>
              