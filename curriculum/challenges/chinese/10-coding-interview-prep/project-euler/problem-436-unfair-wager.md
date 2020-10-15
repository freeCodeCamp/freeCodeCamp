---
id: 5900f5221000cf542c510033
challengeType: 5
videoUrl: ''
title: 问题436：不公平的赌注
---

## Description
<section id="description">
朱莉向妹妹路易丝提出以下赌注。
她建议他们玩一场机会游戏，以确定谁来洗碗。
对于此游戏，他们应使用独立随机数的生成器，该生成器均匀分布在0和1之间。
游戏从S = 0开始。
第一个玩家路易丝（Louise）向生成器添加了S个不同的随机数，直到S> 1并记录了她的最后一个随机数'x'。
第二个玩家朱莉继续从生成器中添加S个不同的随机数，直到S> 2并记录她的最后一个随机数“ y”。
拥有最高数字的玩家获胜，而输家则洗碗，即，如果y> x，则第二名玩家获胜。

例如，如果第一个玩家抽出0.62和0.44，则第一个玩家回合结束，因为0.62 + 0.44> 1且x = 0.44。
如果第二名玩家抽出0.1、0.27和0.91，则第二名玩家回合结束，因为0.62 + 0.44 + 0.1 + 0.27 + 0.91> 2且y = 0.91。
由于y> x，第二名玩家获胜。

路易丝考虑了一秒钟，然后反对：“那不公平”。
第二名玩家获胜的概率是多少？
以0.abcdefghij的形式将答案四舍五入到小数点后10位。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler436()</code>应该返回0.5276662759。
    testString: assert.strictEqual(euler436(), 0.5276662759);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler436() {
  // Good luck!
  return true;
}

euler436();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
