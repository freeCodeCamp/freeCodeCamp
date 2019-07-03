---
id: 56bbb991ad1ed5201cd392cb
title: Manipulate Arrays With push()
challengeType: 1

videoUrl: ''
localeTitle: Manipulate Arrays With push()
---

## Description
<section id='description'>
一个简单的方法将数据添加到一个数组的末尾是通过<code>push()</code>函数。
<code>.push()</code>接受把一个或多个参数，并把它“推”入到数组的末尾。
<blockquote>var arr = [1,2,3];<br>arr.push(4);<br>// 现在arr的值为 [1,2,3,4]</blockquote>
</section>

## Instructions
<section id='instructions'>
把<code>["dog", 3]</code>“推”入到<code>myArray</code>变量的末尾。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>myArray</code>应该等于<code>[['John', 23], ['cat', 2], ['dog', 3]]</code>."
    testString: assert((function(d){if(d[2] != undefined && d[0][0] == 'John' && d[0][1] === 23 && d[2][0] == 'dog' && d[2][1] === 3 && d[2].length == 2){return true;}else{return false;}})(myArray), '<code>myArray</code>应该等于<code>[["John", 23], ["cat", 2], ["dog", 3]]</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
```

</section>
              