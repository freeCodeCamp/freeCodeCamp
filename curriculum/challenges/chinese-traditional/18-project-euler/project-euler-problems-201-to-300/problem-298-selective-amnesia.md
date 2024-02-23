---
id: 5900f4971000cf542c50ffa9
title: '問題 298：選擇性健忘症'
challengeType: 1
forumTopicId: 301950
dashedName: problem-298-selective-amnesia
---

# --description--

Larry and Robin play a memory game involving of a sequence of random numbers between 1 and 10, inclusive, that are called out one at a time. Each player can remember up to 5 previous numbers. When the called number is in a player's memory, that player is awarded a point. If it's not, the player adds the called number to his memory, removing another number if his memory is full.

兩位選手都從空白的記憶開始。 兩個玩家總是在他們的記憶中添加新的錯過的號碼，但在決定刪除哪個號碼時使用不同的策略：拉里的策略是刪除最長時間沒有被叫到的號碼。 Robin 的策略是刪除記憶中最長時間的數字。

遊戲示例：

| Turn | 叫的數 |   Larry的記憶 | Larry的分數 | Robin的記憶   | Robin分數 |
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

用L表示拉里的分數，用R表示羅賓的分數，在50輪後| L-R |的期望值是多少？ 使用 x.xxxxxxxx 格式將答案四捨五入到小數點後八位。

# --hints--

selectiveAmnesia() 應該返回1.76882

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
