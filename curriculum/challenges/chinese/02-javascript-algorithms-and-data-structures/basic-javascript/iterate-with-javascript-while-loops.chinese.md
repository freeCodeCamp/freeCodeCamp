---
id: cf1111c1c11feddfaeb1bdef
title: Iterate with JavaScript While Loops
challengeType: 1

videoUrl: ''
localeTitle: Iterate with JavaScript While Loops
---

## Description
<section id='description'>
你可以使用循环多次执行相同的代码。
我们将学习的第一种类型的循环称为 "<code>while</code>" 循环，因为它规定，当 "while" 条件为真，循环才会执行，反之不执行。
<blockquote>var ourArray = [];<br>var i = 0;<br>while(i &#60; 5) {<br>&nbsp;&nbsp;ourArray.push(i);<br>&nbsp;&nbsp;i++;<br>}</blockquote>
让我们通过 while 循环将值添加到数组中。
</section>

## Instructions
<section id='instructions'>
通过一个<code>while</code>循环，把从 0 到 4 的值添加到<code>myArray</code>中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>while</code>循环
    testString: assert(code.match(/while/g), '你应该使用<code>while</code>循环');
  - text: <code>myArray</code>应该等于<code>[0,1,2,3,4]</code>.
    testString: assert.deepEqual(myArray, [0,1,2,3,4], '<code>myArray</code>应该等于<code>[0,1,2,3,4]</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

</div>

</section>

## Solution
<section id='solution'>

```js
var myArray = [];
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
```

</section>
              