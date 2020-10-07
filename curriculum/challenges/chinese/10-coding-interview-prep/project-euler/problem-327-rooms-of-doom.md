---
id: 5900f4b31000cf542c50ffc6
challengeType: 5
videoUrl: ''
title: 问题327：末日的房间
---

## Description
<section id="description">一系列三个房间通过自动门相互连接。 <p>每扇门都由安全卡操作。进入房间后，门会自动关闭，安全卡不能再次使用。一台机器在开始时将分配无限数量的卡，但每个房间（包括起始室）都包含扫描仪，如果他们检测到您持有三张以上的安全卡，或者如果他们在地板上检测到无人看管的安全卡，那么所有的门都将永久锁定。但是，每个房间都有一个盒子，您可以安全地存放任意数量的安全卡，以便在以后使用。 </p><p>如果您只是尝试一次一个地穿过房间，那么当您进入房间3时，您将使用所有三张卡片，并将永远被困在那个房间！ </p><p>但是，如果您使用存储箱，则可以进行逃生。例如，您可以使用第一张卡进入房间1，将一张卡放入存储箱，然后使用第三张卡退回到房间。然后在从点胶机收集另外三张牌之后，您可以使用一张进入1号房间并收集刚刚放入盒子中的卡片。你现在又有三张牌，可以通过剩余的三扇门。此方法允许您使用总共六张安全卡通过所有三个房间。 </p><p>可以使用总共123张安全卡通过六个房间，最多可携带3张卡。 </p><p>设C是任何时候可以携带的最大卡数。设R是要经过的房间数量。设M（C，R）是分配机器在任何时间通过最多携带C卡的R室所需的最小卡数。 </p><p>例如，M（3,6）= 123并且M（4,6）= 23.并且，对于3≤C≤4，ΣM（C，6）= 146。 </p><p>对于3≤C≤10，给出ΣM（C，10）= 10382。 </p><p>找3ΣC≤40的ΣM（C，30）。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler327()</code>应返回34315549139516。
    testString: assert.strictEqual(euler327(), 34315549139516);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler327() {
  // Good luck!
  return true;
}

euler327();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
