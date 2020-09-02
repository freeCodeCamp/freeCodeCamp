---
id: 5900f3c11000cf542c50fed3
challengeType: 5
title: 'Problem 84: Monopoly odds'
videoUrl: ''
localeTitle: 问题84：垄断赔率
---

## Description
<section id="description">在游戏“大富翁”中，标准板的设置方式如下： <p> GO A1 CC1 A2 T1 R1 B1 CH1 B2 B3 JAIL H2 </p><p> C1 T2 </p><p> U1 H1 </p><p> C2 CH3 </p><p> C3 R4 </p><p> R2 G3 </p><p> D1 CC3 </p><p> CC2 G2 </p><p> D2 G1 </p><p> D3 G2J F3 U2 F2 F1 R3 E3 E2 CH2 E1 FP </p><p>玩家在GO广场上开始并在两个6面骰子上添加分数以确定它们以顺时针方向前进的方格数。如果没有任何进一步的规则，我们期望以相同的概率访问每个广场：2.5％。但是，登陆G2J（Go To Jail），CC（社区胸部）和CH（机会）会改变这种分布。除了G2J，还有来自CC和CH的一张牌，命令玩家直接进入监狱，如果玩家连续三次打败，他们不会推进他们的第三次掷骰结果。相反，他们直接进入监狱。在游戏开始时，CC和CH卡被洗牌。当玩家登陆CC或CH时，他们从相应堆的顶部取出一张牌，并按照说明后将其返回到堆的底部。每堆中有16张牌，但出于这个问题的目的，我们只关心命令运动的牌;任何与运动无关的指令都将被忽略，玩家将保留在CC / CH广场上。公益金（2/16卡）：前往GO去JAIL </p><p>机会（10/16卡）：前往GO转到JAIL转到C1转到E3转到H2转到R1转到下一个R（铁路公司）转到下一个R转到下一个U（公用事业公司）返回3个方块。 </p><p>这个问题的核心是访问特定广场的可能性。也就是说，在滚动之后在该正方形处完成的概率。由于这个原因，应该清楚的是，除了完成它的概率为零的G2J之外，CH方块将具有最低概率，因为5/8请求移动到另一个方格，并且它是最终的玩家在我们感兴趣的每一卷上完成的方格。我们不会区分“Just Visiting”和被送到JAIL，我们也会忽略关于要求双重“离开监狱”的规则，假设他们支付下一轮出去的费用。通过从GO开始并按顺序从00到39对方块进行编号，我们可以连接这些两位数字以产生与方块组对应的字符串。统计上可以看出，按顺序排列的三个最受欢迎的正方形是JAIL（6.24％）= Square 10，E3（3.18％）= Square 24和GO（3.09％）= Square 00.所以这三个最受欢迎的正方形可以使用六位数模态字符串列出：102400。如果使用两个4面骰子而不是使用两个6面骰子，则找到六位数模态字符串。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler84()</code>应返回101524。
    testString: assert.strictEqual(euler84(), 101524);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler84() {
  // Good luck!
  return true;
}

euler84();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
