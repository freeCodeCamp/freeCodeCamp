---
id: cf1111c1c11feddfaeb5bdef
title: Iterate with JavaScript For Loops
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript迭代循环
---

## Description
<section id="description">您可以使用循环多次运行相同的代码。最常见的JavaScript循环类型称为“ <code>for loop</code> ”，因为它“运行”特定次数。 For循环用三个可选表达式声明，用分号分隔： <code>for ([initialization]; [condition]; [final-expression])</code> <code>initialization</code>语句仅在循环开始之前执行一次。它通常用于定义和设置循环变量。 <code>condition</code>语句在每次循环迭代开始时进行计算，并且只要计算结果为<code>true</code>就会继续。当迭代开始时<code>condition</code>为<code>false</code>时，循环将停止执行。这意味着如果<code>condition</code>以<code>false</code>开头，则循环将永远不会执行。 <code>final-expression</code>在每次循环迭代结束时执行，在下一次<code>condition</code>检查之前执行，通常用于递增或递减循环计数器。在下面的示例中，我们使用<code>i = 0</code>初始化并迭代，而条件<code>i &lt; 5</code>为真。我们将在每个循环迭代中将<code>i</code>递增<code>1</code> ，并使用<code>i++</code>作为<code>final-expression</code> 。 <blockquote> var ourArray = []; <br> for（var i = 0; i &lt;5; i ++）{ <br> ourArray.push（ⅰ）; <br> } </blockquote> <code>ourArray</code>现在包含<code>[0,1,2,3,4]</code> 。 </section>

## Instructions
<section id="instructions">使用<code>for</code>循环将值1到5推送到<code>myArray</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该为此使用<code>for</code>循环。
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: '<code>myArray</code>应该等于<code>[1,2,3,4,5]</code> 。'
    testString: 'assert.deepEqual(myArray, [1,2,3,4,5], "<code>myArray</code> should equal <code>[1,2,3,4,5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

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
