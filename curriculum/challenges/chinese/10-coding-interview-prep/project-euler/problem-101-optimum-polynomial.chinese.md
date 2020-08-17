---
id: 5900f3d21000cf542c50fee4
challengeType: 5
title: 'Problem 101: Optimum polynomial'
videoUrl: ''
localeTitle: 问题101：最佳多项式
---

## Description
<section id="description">如果我们被给出序列的前k个项，则不可能肯定地说下一个项的值，因为存在无限多个可以对序列建模的多项式函数。举个例子，让我们考虑一下立方体数字的顺序。这由生成函数定义，un = n3：1,8,27,64,125,216 ......假设我们只给出了该序列的前两个项。根据“简单就是最好”的原则，我们应该假设一个线性关系，并预测下一个项为15（公共差异7）。即使我们被提出前三个术语，按照相同的简单原则，也应假设二次关系。我们将OP（k，n）定义为序列的前k个项的最佳多项式生成函数的第n项。应该清楚的是，OP（k，n）将准确地生成n≤k的序列项，并且可能第一个不正确的项（FIT）将是OP（k，k + 1）;在这种情况下，我们将其称为坏OP（BOP）。作为一个基础，如果我们只给出第一个序列项，那么假设恒定是最明智的;也就是说，对于n≥2，OP（1，n）= u1。因此，我们获得了立方序列的以下OP： <p> OP（1，n）= 11 1,1,1,1 ...... OP（2，n）= 7n-6 1,8,15，...... OP（3，n）= 6n2-11n + 6 1,8,27,58，... OP（4，n）= n3 1,8,27,64,125，...... </p><p>显然，对于k≥4，不存在BOP。通过考虑BOP产生的FIT之和（以红色表示），我们得到1 + 15 + 58 = 74.考虑下面的十度多项式生成函数：un = 1  -  n + n2  -  n3 + n4  -  n5 + n6  -  n7 + n8  -  n9 + n10求BOP的FIT之和。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler101()</code>应该返回37076114526。
    testString: assert.strictEqual(euler101(), 37076114526);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler101() {
  // Good luck!
  return true;
}

euler101();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
