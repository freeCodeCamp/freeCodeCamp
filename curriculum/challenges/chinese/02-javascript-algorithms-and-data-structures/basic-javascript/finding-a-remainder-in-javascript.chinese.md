---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
videoUrl: ''
localeTitle: 在JavaScript中查找剩余内容
---

## Description
<section id="description"> <dfn>余数</dfn>运算符<code>%</code>给出了两个数的除法的余数。 <strong>例</strong> <blockquote> 5％2 = 1因为<br> Math.floor（5/2）= 2（商数） <br> 2 * 2 = 4 <br> 5  -  4 = 1（剩余） </blockquote> <strong>用法</strong> <br>在数学中，通过检查数字除以<code>2</code>的余数，可以检查数字是偶数还是奇数。 <blockquote> 17％2 = 1（17为奇数） <br> 48％2 = 0（48为偶数） </blockquote> <strong>注意</strong> <br> <dfn>余数</dfn>运算符有时被错误地称为“模数”运算符。它与模数非常相似，但在负数下不能正常工作。 </section>

## Instructions
<section id="instructions">使用<dfn>余数</dfn> （ <code>%</code> ）运算符将<code>remainder</code>设置为等于<code>11</code>的余数除以<code>3</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该初始化变量<code>remainder</code>
    testString: assert(/var\s+?remainder/.test(code));
  - text: <code>remainder</code>的值应为<code>2</code>
    testString: assert(remainder === 2);
  - text: 您应该使用<code>%</code>运算符
    testString: assert(/\s+?remainder\s*?=\s*?.*%.*;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line

var remainder;

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
