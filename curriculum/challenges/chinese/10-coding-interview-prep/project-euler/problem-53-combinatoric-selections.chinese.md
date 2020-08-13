---
id: 5900f3a11000cf542c50feb4
challengeType: 5
title: 'Problem 53: Combinatoric selections'
videoUrl: ''
localeTitle: 问题53：组合选择
---

## Description
<section id="description">有十种方法从五种中选择三种，12345：123,124,125,134,135,145,234,235,245和345在组合学中，我们使用符号，5C3 = 10.一般来说， <p> nCr = n！r！（n-r）！ ，其中r≤n，n！ = n×（n-1）×...×3×2×1和0！ = 1。 </p><p>直到n = 23，一个值超过一百万：23C10 = 1144066.对于1≤n≤100，nCr的多少，不一定是不同的值大于一百万？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinatoricSelections(1000)</code>应返回4626。
    testString: assert.strictEqual(combinatoricSelections(1000), 4626);
  - text: <code>combinatoricSelections(10000)</code>应该返回4431。
    testString: assert.strictEqual(combinatoricSelections(10000), 4431);
  - text: <code>combinatoricSelections(100000)</code>应返回4255。
    testString: assert.strictEqual(combinatoricSelections(100000), 4255);
  - text: <code>combinatoricSelections(1000000)</code>应该返回4075。
    testString: assert.strictEqual(combinatoricSelections(1000000), 4075);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinatoricSelections(limit) {
  // Good luck!
  return 1;
}

combinatoricSelections(1000000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
