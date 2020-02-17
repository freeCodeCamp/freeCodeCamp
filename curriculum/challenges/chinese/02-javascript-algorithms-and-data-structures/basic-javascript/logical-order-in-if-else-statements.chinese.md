---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
challengeType: 1
videoUrl: ''
localeTitle: 如果其他陈述中的逻辑顺序
---

## Description
<section id="description">订单在<code>if</code> ， <code>else if</code>语句中很重要。该函数从上到下执行，因此您需要注意首先出现的语句。以这两个函数为例。这是第一个： <blockquote> function foo（x）{ <br> if（x &lt;1）{ <br>返回“少于一个”; <br> } else if（x &lt;2）{ <br>返回“少于两个”; <br> } else { <br>返回“大于或等于2”; <br> } <br> } </blockquote>第二个只是切换语句的顺序： <blockquote>功能栏（x）{ <br> if（x &lt;2）{ <br>返回“少于两个”; <br> } else if（x &lt;1）{ <br>返回“少于一个”; <br> } else { <br>返回“大于或等于2”; <br> } <br> } </blockquote>虽然如果我们将数字传递给两者，这两个函数看起来几乎相同但我们得到不同的输出。 <blockquote> foo（0）//“不到一个” <br> bar（0）//“少于两个” </blockquote></section>

## Instructions
<section id="instructions">更改函数中的逻辑顺序，以便在所有情况下都返回正确的语句。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>orderMyLogic(4)</code>应返回“小于5”
    testString: assert(orderMyLogic(4) === "Less than 5");
  - text: <code>orderMyLogic(6)</code>应该返回“少于10”
    testString: assert(orderMyLogic(6) === "Less than 10");
  - text: <code>orderMyLogic(11)</code>应该返回“大于或等于10”
    testString: assert(orderMyLogic(11) === "Greater than or equal to 10");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
