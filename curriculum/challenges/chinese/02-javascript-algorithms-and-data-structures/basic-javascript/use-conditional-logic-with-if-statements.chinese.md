---
id: cf1111c1c12feddfaeb3bdef
title: Use Conditional Logic with If Statements
challengeType: 1
videoUrl: ''
localeTitle: 使用条件逻辑和If语句
---

## Description
<section id="description"> <code>If</code>语句用于在代码中做出决定。关键字<code>if</code>告诉JavaScript在括号中定义的特定条件下执行花括号中的代码。这些条件称为<code>Boolean</code>条件，它们可能只是<code>true</code>或<code>false</code> 。当条件计算结果为<code>true</code> ，程序将执行花括号内的语句。当布尔条件的计算结果为<code>false</code> ，大括号内的语句将不会执行。 <strong>伪代码</strong> <blockquote> if（ <i>condition为true</i> ）{ <br> <i>声明被执行</i> <br> } </blockquote> <strong>例</strong> <blockquote>功能测试（myCondition）{ <br> if（myCondition）{ <br>回归“这是真的”; <br> } <br>返回“这是假的”; <br> } <br>测试（真）; //返回“这是真的” <br>测试（假）; //返回“这是假的” </blockquote>当使用值<code>true</code>调用<code>test</code> ， <code>if</code>语句将评估<code>myCondition</code>以查看它是否为<code>true</code> 。因为它是<code>true</code> ，函数返回<code>&quot;It was true&quot;</code> 。当我们使用<code>false</code>值调用<code>test</code>时， <code>myCondition</code> <em>不为</em> <code>true</code>并且不执行花括号中的语句，函数返回<code>&quot;It was false&quot;</code> 。 </section>

## Instructions
<section id="instructions">在函数内部创建一个<code>if</code>语句<code>&quot;Yes, that was true&quot;</code>如果参数<code>wasThatTrue</code>为<code>true</code>则返回<code>&quot;Yes, that was true&quot;</code> <code>&quot;No, that was false&quot;</code>否则返回<code>&quot;No, that was false&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>trueOrFalse</code>应该是一个函数
    testString: assert(typeof trueOrFalse === "function");
  - text: <code>trueOrFalse(true)</code>应该返回一个字符串
    testString: assert(typeof trueOrFalse(true) === "string");
  - text: <code>trueOrFalse(false)</code>应该返回一个字符串
    testString: assert(typeof trueOrFalse(false) === "string");
  - text: <code>trueOrFalse(true)</code>应该返回“是的，那是真的”
    testString: assert(trueOrFalse(true) === "Yes, that was true");
  - text: <code>trueOrFalse(false)</code>应该返回“No，that was false”
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
// solution required
```
</section>
