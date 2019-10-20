---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
videoUrl: ''
localeTitle: 了解从函数返回的未定义值
---

## Description
<section id="description">函数可以包含<code>return</code>语句但不必包含。在函数没有<code>return</code>语句的情况下，当您调用它时，该函数处理内部代码但返回的值是<code>undefined</code> 。 <strong>例</strong> <blockquote> var sum = 0; <br> function addSum（num）{ <br> sum = sum + num; <br> } <br> var returnedValue = addSum（3）; //将修改sum，但返回值未定义</blockquote> <code>addSum</code>是一个没有<code>return</code>语句的函数。该函数将更改全局<code>sum</code>变量，但函数的返回值<code>undefined</code> </section>

## Instructions
<section id="instructions">创建一个没有任何参数的函数<code>addFive</code> 。此函数向<code>sum</code>变量添加5，但其返回值<code>undefined</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addFive</code>应该是一个函数
    testString: 'assert(typeof addFive === "function", "<code>addFive</code> should be a function");'
  - text: <code>sum</code>应该等于8
    testString: 'assert(sum === 8, "<code>sum</code> should be equal to 8");'
  - text: <code>addFive</code>返回值应该是<code>undefined</code>
    testString: 'assert(addFive() === undefined, "Returned value from <code>addFive</code> should be <code>undefined</code>");'
  - text: 在函数内部，向<code>sum</code>变量添加5
    testString: 'assert(code.match(/(sum\s*\=\s*sum\s*\+\s*5)|(sum\s*\+\=\s*5)/g).length === 1, "Inside of your functions, add 5 to the <code>sum</code> variable");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line



// Only change code above this line
var returnedValue = addFive();

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
