---
id: 5900f4971000cf542c50ffaa
challengeType: 5
title: 'Problem 299: Three similar triangles'
videoUrl: ''
localeTitle: 问题299：三个相似的三角形
---

## Description
<section id="description">
选择了四个具有整数坐标的点：A（a，0），B（b，0），C（0，c）和D（0，d），
其中0 <a <b和0 <c <d
在AC线上选择点P（也具有整数坐标），以便三个三角形ABP，CDP和BDP都相似。

仅当a = c时，容易证明三个三角形可以相似。

因此，给定a = c，我们正在寻找三元组（a，b，d），使得AC上至少存在一个点P（具有整数坐标），从而使三个三角形ABP，CDP和BDP都相似。

例如，如果（a，b，d）＝（2，3，4），则可以容易地验证点P（1，1）满足上述条件。
请注意，三点式（2,3,4）和（2,4,3）被认为是截然不同的，尽管点P（1,1）对于两者而言是共同的。

如果b + d <100，则存在92个不同的三元组（a，b，d），从而存在点P.
如果b + d <100000，则存在320471个不同的三元组（a，b，d），从而存在点P.
如果b + d <100000000，那么有几个不同的三元组（a，b，d）使得点P存在？
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler299()</code>应该返回549936643。
    testString: assert.strictEqual(euler299(), 549936643);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler299() {
  // Good luck!
  return true;
}

euler299();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
