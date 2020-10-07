---
id: 5900f4051000cf542c50ff18
challengeType: 5
videoUrl: ''
title: 问题153：调查高斯整数
---

## Description
<section id="description">众所周知，方程x2 = -1没有实数x的解。 <p>然而，如果我们引入虚数i，则该等式具有两个解：x = i且x = -i。 </p><p>如果我们更进一步，等式（x-3）2 = -4有两个复数解：x = 3 + 2i和x = 3-2i。 x = 3 + 2i和x = 3-2i被称为彼此的复共轭。 </p><p>形式a + bi的数字称为复数。 </p><p>通常，+ bi和a-bi是彼此的复共轭。高斯整数是复数a + bi，使得a和b都是整数。 </p><p>常规整数也是高斯整数（b = 0）。 </p><p>为了将它们与b≠0的高斯整数区分开来，我们称这样的整数为“有理整数”。 </p><p>如果结果也是高斯整数，则高斯整数称为有理整数n的除数。 </p><p>例如，如果我们将5除以1 + 2i，我们可以通过以下方式简化： </p><p>通过1 + 2i的复共轭乘以分子和分母：1-2i。 </p><p>结果是。 </p><p>所以1 + 2i是5的除数。 </p><p>请注意，1 + i不是5的除数，因为。 </p><p>还要注意，如果高斯整数（a + bi）是有理整数n的除数，则其复共轭（a-bi）也是n的除数。实际上，5有六个除数，使得实部是正的：{1,1 + 2i，1  -  2i，2 + i，2  -  i，5}。 </p><p>以下是前五个正整数的所有除数的表： </p><p> n高斯整数除数，具有正实数partSum s（n） </p><p> divisors111 21,1 + i，1-i，25 31,34 41,1 + i，1-i，2,2 + 2i，2-2i，413 51,1 + 2i，1-2i，2 + i， 2-i，512对于具有正实部的除数，那么，我们有：。对于1≤n≤105，Σs（n）= 17924657155。什么是Σs（n）1≤n≤108？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler153()</code>应该返回17971254122360636。
    testString: assert.strictEqual(euler153(), 17971254122360636);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler153() {
  // Good luck!
  return true;
}

euler153();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
