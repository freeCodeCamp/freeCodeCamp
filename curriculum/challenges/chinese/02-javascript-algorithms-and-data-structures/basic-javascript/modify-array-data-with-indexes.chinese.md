---
id: cf1111c1c11feddfaeb8bdef
title: Modify Array Data With Indexes
challengeType: 1

videoUrl: ''
localeTitle: Modify Array Data With Indexes
---

## Description
<section id='description'>
与字符串的数据不可变不同，数组的数据是可变的，并且可以自由地改变。
<strong>示例</strong>
<blockquote>var ourArray = [50,40,30];<br>ourArray[0] = 15; // 等于 [15,40,30]</blockquote>
<strong>提示</strong><br>数组名称和方括号之间不应有任何空格，如<code>array [0]</code>尽管 JavaScript 能够正确处理，但可能会让看你代码的其他程序员感到困惑。
</section>

## Instructions
<section id='instructions'>
修改数组<code>myArray</code>中索引0上的值为<code>45</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code>的值应该 [45,64,99]
    testString: assert((function(){if(typeof myArray != 'undefined' && myArray[0] == 45 && myArray[1] == 64 && myArray[2] == 99){return true;}else{return false;}})(), '<code>myArray</code>的值应该 [45,64,99]');
  - text: 你应该使用正确的索引修改<code>myArray</code>的值
    testString: assert((function(){if(code.match(/myArray\[0\]\s*=\s*/g)){return true;}else{return false;}})(), '你应该使用正确的索引修改<code>myArray</code>的值');

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
var myArray = [18,64,99];
myArray[0] = 45;
```

</section>
              