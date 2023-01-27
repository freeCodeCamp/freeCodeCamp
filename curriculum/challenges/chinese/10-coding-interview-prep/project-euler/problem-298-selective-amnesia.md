---
id: 5900f4971000cf542c50ffa9
title: '问题 298：选择性健忘症'
challengeType: 1
forumTopicId: 301950
dashedName: problem-298-selective-amnesia
---

# --description--

拉里（Larry）和罗宾（Robin）玩着一场记忆游戏，其中涉及一个随机数序列，介于1到10之间（含1和10），每次被召唤一个。 每个玩家最多可以记住 5 个先前的数字。 当被叫号码在玩家的记忆中时，该玩家将获得积分。 如果不是，玩家将被叫号码添加到他的记忆中，如果他的记忆已满，则删除另一个号码。

两位选手都从空白的记忆开始。 两个玩家总是在他们的记忆中添加新的错过的号码，但在决定删除哪个号码时使用不同的策略：拉里的策略是删除最长时间没有被叫到的号码。 Robin 的策略是删除记忆中最长时间的数字。

Example game:

| Turn | Called number | Larry's memory | Larry's score | Robin's memory | Robin's score |
| ---- | ------------- | --------------:| ------------- | -------------- | ------------- |
| 1    | 1             |              1 | 0             | 1              | 0             |
| 2    | 2             |            1,2 | 0             | 1,2            | 0             |
| 3    | 4             |          1,2,4 | 0             | 1,2,4          | 0             |
| 4    | 6             |        1,2,4,6 | 0             | 1,2,4,6        | 0             |
| 5    | 1             |        1,2,4,6 | 1             | 1,2,4,6        | 1             |
| 6    | 8             |      1,2,4,6,8 | 1             | 1,2,4,6,8      | 1             |
| 7    | 10            |     1,4,6,8,10 | 1             | 2,4,6,8,10     | 1             |
| 8    | 2             |     1,2,6,8,10 | 1             | 2,4,6,8,10     | 2             |
| 9    | 4             |     1,2,4,8,10 | 1             | 2,4,6,8,10     | 3             |
| 10   | 1             |     1,2,4,8,10 | 2             | 1,4,6,8,10     | 3             |

Denoting Larry's score by $L$ and Robin's score by $R$, what is the expected value of $|L - R|$ after 50 turns? 使用 x.xxxxxxxx 格式将答案四舍五入到小数点后八位。

# --hints--

`selectiveAmnesia()` should return `1.76882294`.

```js
assert.strictEqual(selectiveAmnesia(), 1.76882294);
```

# --seed--

## --seed-contents--

```js
function selectiveAmnesia() {

  return true;
}

selectiveAmnesia();
```

# --solutions--

```js
// solution required
```
