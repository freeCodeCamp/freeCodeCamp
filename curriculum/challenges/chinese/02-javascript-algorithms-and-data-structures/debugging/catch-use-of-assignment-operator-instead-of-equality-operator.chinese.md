---
id: 587d7b85367417b2b2512b38
title: Catch Use of Assignment Operator Instead of Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: 捕获使用赋值运算符而不是等式运算符
---

## Description
<section id="description">分支程序，即在满足某些条件时执行不同操作的程序，依赖于JavaScript中的<code>if</code> ， <code>else if</code>和<code>else</code>语句。条件有时采取测试结果是否等于值的形式。这种逻辑（至少在英语中）是“如果x等于y，则......”，它可以使用<code>=</code>或赋值运算符逐字地转换为代码。这会导致程序中出现意外的控制流。如前面的挑战所述，JavaScript中的赋值运算符（ <code>=</code> ）为变量名赋值。并且<code>==</code>和<code>===</code>运算符检查相等性（严格相等的三重<code>===</code>测试，意味着值和类型都相同）。下面的代码将<code>x</code>指定为2，其值为<code>true</code> 。几乎JavaScript中的每个值都评估为<code>true</code> ，除了所谓的“falsy”值： <code>false</code> ， <code>0</code> ， <code>&quot;&quot;</code> （空字符串）， <code>NaN</code> ， <code>undefined</code>和<code>null</code> 。 <blockquote>设x = 1; <br>让y = 2; <br> if（x = y）{ <br> //此代码块将针对y的任何值运行（除非y最初设置为假） <br> } else { <br> //这个代码块是本例中应该运行的（但不会） <br> } </blockquote></section>

## Instructions
<section id="instructions">修复条件，以便程序运行正确的分支，并为<code>result</code>分配适当的值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该修复条件，以便检查是否相等，而不是使用赋值。
    testString: assert(result == "Not equal!");
  - text: 条件可以使用<code>==</code>或<code>===</code>来测试相等性。
    testString: assert(code.match(/x\s*?===?\s*?y/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
