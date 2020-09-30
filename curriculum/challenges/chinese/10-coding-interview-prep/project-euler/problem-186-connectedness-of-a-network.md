---
id: 5900f4281000cf542c50ff39
challengeType: 5
title: 'Problem 186: Connectedness of a network'
videoUrl: ''
localeTitle: 问题186：网络的连通性
---

## Description
<section id="description">以下是来自拥有100万用户的繁忙电话系统的记录： <p> RecNrCallerCalled120000710005326001835004393600863701497 .........来电者的电话号码和记录n中的被叫号码是来电者（n）= S2n-1和被叫（n）= S2n，其中S1,2,3，...来来自“Lagged Fibonacci Generator”： </p><p>对于1≤k≤55，Sk = [100003  -  200003k + 300007k3]（模1000000）对于56≤k，Sk = [Sk-24 + Sk-55]（模1000000） </p><p>如果Caller（n）= Called（n），则假定用户误操作并且呼叫失败;否则通话成功。 </p><p>从记录的开头，我们说如果X调用Y，则任何一对用户X和Y都是朋友，反之亦然。类似地，如果X是Y的朋友并且Y是Z的朋友，则X是Z的朋友的朋友;等等更长的链条。 </p><p>总理的电话号码是524287.经过多少次成功的电话，不计算误操作，99％的用户（包括PM）将成为总理的朋友，朋友的朋友等？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler186()</code>应返回2325629。
    testString: assert.strictEqual(euler186(), 2325629);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler186() {
  // Good luck!
  return true;
}

euler186();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
