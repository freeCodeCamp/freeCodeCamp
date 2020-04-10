---
id: cf1111c1c12feddfaeb3bdef
title: Use Conditional Logic with If Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
localeTitle: 用 if 语句来表达条件逻辑
---

## Description
<section id='description'>
<code>If</code>语句用于在代码中做条件判断。关键字<code>if</code>告诉 JavaScript 在小括号中的条件为真的情况下去执行定义在大括号里面的代码。这种条件被称为<code>Boolean</code>条件，因为他们只可能是<code>true</code>（真）或<code>false</code>（假）。
当条件的计算结果为<code>true</code>，程序执行大括号内的语句。当布尔条件的计算结果为<code>false</code>，大括号内的代码将不会执行。
<strong>伪代码</strong>
<blockquote>if(<i>条件为真</i>){<br>  <i>语句被执行</i><br>}</blockquote>
<strong>示例</strong>

```js
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
```

当<code>test</code>被调用，并且传递进来的参数值为<code>true</code>，<code>if</code>语句会计算<code>myCondition</code>的结果，看它是真还是假。如果条件为<code>true</code>，函数会返回<code>"It was true"</code>。当<code>test</code>被调用，并且传递进来的参数值为<code>false</code>，<code>myCondition</code><em>不</em> 为<code>true</code>，并且不执行大括号后面的语句，函数返回<code>"It was false"</code>。
</section>

## Instructions
<section id='instructions'>
在函数内部创建一个<code>if</code>语句，如果该参数<code>wasThatTrue</code>值为<code>true</code>，返回<code>"Yes, that was true"</code>，否则，并返回<code>"No, that was false"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>trueOrFalse</code>应该是一个函数。
    testString: assert(typeof trueOrFalse === "function");
  - text: <code>trueOrFalse(true)</code>应该返回一个字符串。
    testString: assert(typeof trueOrFalse(true) === "string");
  - text: <code>trueOrFalse(false)</code>应该返回一个字符串。
    testString: assert(typeof trueOrFalse(false) === "string");
  - text: <code>trueOrFalse(true)</code>应该返回 "Yes, that was true"。
    testString: assert(trueOrFalse(true) === "Yes, that was true");
  - text: <code>trueOrFalse(false)</code>应该返回 "No, that was false"。
    testString: assert(trueOrFalse(false) === "No, that was false");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.



  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```

</section>
