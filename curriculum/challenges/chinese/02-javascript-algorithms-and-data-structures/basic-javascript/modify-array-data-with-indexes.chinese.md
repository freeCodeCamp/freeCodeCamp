---
id: cf1111c1c11feddfaeb8bdef
title: Modify Array Data With Indexes
challengeType: 1
videoUrl: ''
localeTitle: 使用索引修改数组数据
---

## Description
<section id="description">与字符串不同，数组的条目是<dfn>可变的</dfn> ，可以自由更改。 <strong>例</strong> <blockquote> var ourArray = [50,40,30]; <br> ourArray [0] = 15; //等于[15,40,30] </blockquote> <strong>注意</strong> <br>数组名称和方括号之间不应有任何空格，如<code>array [0]</code> 。尽管JavaScript能够正确处理，但这可能会让其他程序员在阅读代码时感到困惑。 </section>

## Instructions
<section id="instructions">将存储在<code>myArray</code>索引<code>0</code>处的数据修改为值<code>45</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code>现在应该是[45,64,99]。'
    testString: 'assert((function(){if(typeof myArray != "undefined" && myArray[0] == 45 && myArray[1] == 64 && myArray[2] == 99){return true;}else{return false;}})(), "<code>myArray</code> should now be [45,64,99].");'
  - text: 您应该使用正确的索引来修改<code>myArray</code>的值。
    testString: 'assert((function(){if(code.match(/myArray\[0\]\s*=\s*/g)){return true;}else{return false;}})(), "You should be using correct index to modify the value in <code>myArray</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.

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
