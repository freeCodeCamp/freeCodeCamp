---
id: 5900f4531000cf542c50ff65
challengeType: 5
videoUrl: ''
title: 问题230：斐波纳契语
---

## Description
<section id="description">对于任何两个数字串A和B，我们将FA，B定义为序列（A，B，AB，BAB，ABBAB，...），其中每个术语是前两个术语的串联。 <p>此外，我们将DA，B（n）定义为FA的第一项中的第n个数字，B包含至少n个数字。 </p><p>例： </p><p>设A = 1415926535，B = 8979323846。我们希望找到DA，B（35）。 </p><p> FA，B的前几个术语是：1415926535 8979323846 14159265358979323846 897932384614159265358979323846 14159265358979323846897932384614159265358979323846 </p><p>然后DA，B（35）是第五项中的第35位，即9。 </p><p>现在我们使用A小数点后面的前100位数字：14159265358979323846264338327950288419716939937510 58209749445923078164062862089986280348253421170679 </p><p>对于B下一百个数字： </p><p> 82148086513282306647093844609550582231725359408128 48111745028410270193852110555964462294895493038196。 </p><p>求Σn= 0,1，...，17 10n×DA，B（（127 + 19n）×7n）。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler230()</code>应返回850481152593119200。
    testString: assert.strictEqual(euler230(), 850481152593119200);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler230() {
  // Good luck!
  return true;
}

euler230();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
