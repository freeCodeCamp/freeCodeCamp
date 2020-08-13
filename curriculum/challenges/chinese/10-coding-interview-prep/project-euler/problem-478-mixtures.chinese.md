---
id: 5900f54c1000cf542c51005e
challengeType: 5
title: 'Problem 478: Mixtures'
videoUrl: ''
localeTitle: 问题478：混合物
---

## Description
<section id="description">让我们考虑三种物质的混合物：A，B和C.混合物可以用其中A，B和C的量的比例来描述，即（a：b：c）。例如，由比例（2：3：5）描述的混合物含有20％A，30％B和50％C。 <p>出于这个问题的目的，我们不能将各个组分与混合物分开。但是，我们可以将不同量的不同混合物组合以形成具有新比例的混合物。 </p><p>例如，假设我们有三种比例（3：0：2），（3：6：11）和（3：3：4）的混合物。通过混合10个单位的第一个，20个单位的第二个和30个单位的第三个，我们得到一个比例（6：5：9）的新混合物，因为：（10·3/5 + 20·3/20 + 30·3/10：10·0/5 + 20·6/20 + 30·3/10：10·2/5 + 20·11/20 + 30·4/10）=（18：15：27） =（6：5：9） </p><p>然而，使用相同的三种混合物，不可能形成比例（3：2：1），因为B的量总是小于C的量。 </p><p>设n是正整数。假设对于0≤a，b，c≤n和gcd（a，b，c）= 1的整数（a，b，c）的每三个，我们得到具有比率（a：b：c）的混合。设M（n）为所有这些混合物的集合。 </p><p>例如，M（2）包含具有以下比率的19种混合物：{（0：0：1），（0：1：0），（0：1：1），（0：1：2），（ 0：2：1），（1：0：0），（1：0：1），（1：0：2），（1：1：0），（1：1：1），（1： 1：2），（1：2：0），（1：2：1），（1：2：2），（2：0：1），（2：1：0），（2：1： 1），（2：1：2），（2：2：1）}。 </p><p>令E（n）为M（n）的子集数，其可以产生具有比率（1：1：1）的混合物，即具有相等部分A，B和C的混合物。我们可以验证E（1） ）= 103，E（2）= 520447，E（10）mod 118 = 82608406和E（500）mod 118 = 13801403.求E（10 000 000）mod 118。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler478()</code>应该返回59510340。
    testString: assert.strictEqual(euler478(), 59510340);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler478() {
  // Good luck!
  return true;
}

euler478();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
