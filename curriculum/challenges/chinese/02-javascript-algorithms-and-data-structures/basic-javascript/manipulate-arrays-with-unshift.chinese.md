---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift()
challengeType: 1
videoUrl: ''
localeTitle: 使用unshift操作数组（）
---

## Description
<section id="description">不仅可以<code>shift</code>元件关闭的阵列的开头的，也可以<code>unshift</code>元素添加到数组的开始，即在阵列的前添加元素。 <code>.unshift()</code>工作方式与<code>.push()</code>完全相同，但是不是在数组的末尾添加元素， <code>unshift()</code>会在数组的开头添加元素。 </section>

## Instructions
<section id="instructions">使用<code>unshift()</code>将<code>[&quot;Paul&quot;,35]</code>添加到<code>myArray</code>变量的开头。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code>现在应该有[[“Paul”，35]，[“dog”，3]]。'
    testString: assert((function(d){if(typeof d[0] === "object" && d[0][0] == 'Paul' && d[0][1] === 35 && d[1][0] != undefined && d[1][0] == 'dog' && d[1][1] != undefined && d[1][1] == 3){return true;}else{return false;}})(myArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

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
