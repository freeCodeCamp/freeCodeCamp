---
id: 5900f4971000cf542c50ffa9
title: '问题 298：选择性健忘症'
challengeType: 1
forumTopicId: 301950
dashedName: problem-298-selective-amnesia
---

# --description--

Larry and Robin play a memory game involving of a sequence of random numbers between 1 and 10, inclusive, that are called out one at a time. Each player can remember up to 5 previous numbers. When the called number is in a player's memory, that player is awarded a point. If it's not, the player adds the called number to his memory, removing another number if his memory is full.

两位选手都从空白的记忆开始。 两个玩家总是在他们的记忆中添加新的错过的号码，但在决定删除哪个号码时使用不同的策略：拉里的策略是删除最长时间没有被叫到的号码。 Robin 的策略是删除记忆中最长时间的数字。

游戏示例：

| Turn | 叫的数 |   Larry的记忆 | Larry的分数 | Robin的记忆   | Robin分数 |
| ---- | --- | ----------:| -------- | ---------- | ------- |
| 1    | 1   |          1 | 0        | 1          | 0       |
| 2    | 2   |        1,2 | 0        | 1,2        | 0       |
| 3    | 4   |      1,2,4 | 0        | 1,2,4      | 0       |
| 4    | 6   |    1,2,4,6 | 0        | 1,2,4,6    | 0       |
| 5    | 1   |    1,2,4,6 | 1        | 1,2,4,6    | 1       |
| 6    | 8   |  1,2,4,6,8 | 1        | 1,2,4,6,8  | 1       |
| 7    | 10  | 1,4,6,8,10 | 1        | 2,4,6,8,10 | 1       |
| 8    | 2   | 1,2,6,8,10 | 1        | 2,4,6,8,10 | 2       |
| 9    | 4   | 1,2,4,8,10 | 1        | 2,4,6,8,10 | 3       |
| 10   | 1   | 1,2,4,8,10 | 2        | 1,4,6,8,10 | 3       |

用L表示拉里的分数，用R表示罗宾的分数，在50轮后| L-R |的期望值是多少？ 使用 x.xxxxxxxx 格式将答案四舍五入到小数点后八位。

# --hints--

selectiveAmnesia() 应该返回1.76882

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
