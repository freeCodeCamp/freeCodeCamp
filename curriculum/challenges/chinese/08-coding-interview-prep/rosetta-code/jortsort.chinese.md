---
title: JortSort
id: 5a23c84252665b21eecc7ec4
challengeType: 5
videoUrl: ''
localeTitle: JortSort
---

## Description
<section id="description"> jortSort是一个排序工具集，它使用户可以完成工作并保证效率，因为您不必再​​次排序。它最初是由着名的<a href="https://www.youtube.com/watch?v=pj4U_W0OFoE">JSConf的</a> Jenn“Moneydollars”Schiffer <a href="https://www.youtube.com/watch?v=pj4U_W0OFoE">提出的</a> 。 jortSort是一个函数，它将一个可比较对象数组作为其参数。然后它按升序对数组进行排序，并将排序后的数组与最初提供的数组进行比较。如果数组匹配（即原始数组已经排序），则该函数返回true。如果数组不匹配（即原始数组未排序），则该函数返回false。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jortsort</code>应该是一个功能。
    testString: 'assert(typeof jortsort=="function","<code>jortsort</code> should be a function.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[0])+&quot;)</code>应该返回一个布尔值。'
    testString: 'assert(typeof jortsort(tests[0].slice())=="boolean","<code>jortsort("+JSON.stringify(tests[0])+")</code> should return a boolean.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[0])+&quot;)</code>应该返回<code>true</code> 。'
    testString: 'assert.equal(jortsort(tests[0].slice()),true,"<code>jortsort("+JSON.stringify(tests[0])+")</code> should return <code>true</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[1])+&quot;)</code>应该返回<code>false</code> 。'
    testString: 'assert.equal(jortsort(tests[1].slice()),false,"<code>jortsort("+JSON.stringify(tests[1])+")</code> should return <code>false</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[2])+&quot;)</code>应该返回<code>false</code> 。'
    testString: 'assert.equal(jortsort(tests[2].slice()),false,"<code>jortsort("+JSON.stringify(tests[2])+")</code> should return <code>false</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[3])+&quot;)</code>应该返回<code>true</code> 。'
    testString: 'assert.equal(jortsort(tests[3].slice()),true,"<code>jortsort("+JSON.stringify(tests[3])+")</code> should return <code>true</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[4])+&quot;)</code>应该返回<code>false</code> 。'
    testString: 'assert.equal(jortsort(tests[4].slice()),false,"<code>jortsort("+JSON.stringify(tests[4])+")</code> should return <code>false</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[5])+&quot;)</code>应该返回<code>true</code> 。'
    testString: 'assert.equal(jortsort(tests[5].slice()),true,"<code>jortsort("+JSON.stringify(tests[5])+")</code> should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function jortsort (array) {
  // Good luck!
}

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
