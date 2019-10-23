---
id: 587d7b8f367417b2b2512b62
title: Implement map on a Prototype
challengeType: 1
videoUrl: ''
localeTitle: 在Prototype上实现地图
---

## Description
<section id="description">正如您在应用<code>Array.prototype.map()</code>或之前简单地<code>map()</code>所看到的那样， <code>map</code>方法返回一个与调用它的长度相同的数组。它也不会改变原始数组，只要它的回调函数不会。换句话说， <code>map</code>是一个纯函数，它的输出完全取决于它的输入。另外，它需要另一个函数作为其参数。它会教我们很多关于<code>map</code>的尝试实现它的一个版本，它的行为与带有<code>for</code>循环或<code>Array.prototype.forEach()</code>的<code>Array.prototype.map()</code>完全相同。注意：允许纯函数改变在其范围内定义的局部变量，但是，最好也避免使用它。 </section>

## Instructions
<section id="instructions">编写自己的<code>Array.prototype.myMap()</code> ，其行为应与<code>Array.prototype.map()</code>完全相同。您可以使用<code>for</code>循环或<code>forEach</code>方法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>new_s</code>应该等于<code>[46, 130, 196, 10]</code> <code>new_s</code> <code>[46, 130, 196, 10]</code> 。'
    testString: 'assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]), "<code>new_s</code> should equal <code>[46, 130, 196, 10]</code>.");'
  - text: 您的代码不应使用<code>map</code>方法。
    testString: 'assert(!code.match(/\.map/g), "Your code should not use the <code>map</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
