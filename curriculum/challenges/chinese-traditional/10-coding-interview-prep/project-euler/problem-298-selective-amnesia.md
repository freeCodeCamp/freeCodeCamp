---
id: 5900f4971000cf542c50ffa9
title: '問題 298：選擇性健忘症'
challengeType: 1
forumTopicId: 301950
dashedName: problem-298-selective-amnesia
---

# --description--

拉里（Larry）和羅賓（Robin）玩着一場記憶遊戲，其中涉及一個隨機數序列，介於1到10之間（含1和10），每次被召喚一個。 每個玩家最多可以記住 5 個先前的數字。 當被叫號碼在玩家的記憶中時，該玩家將獲得積分。 如果不是，玩家將被叫號碼添加到他的記憶中，如果他的記憶已滿，則刪除另一個號碼。

兩位選手都從空白的記憶開始。 兩個玩家總是在他們的記憶中添加新的錯過的號碼，但在決定刪除哪個號碼時使用不同的策略：拉里的策略是刪除最長時間沒有被叫到的號碼。 Robin 的策略是刪除記憶中最長時間的數字。

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

Denoting Larry's score by $L$ and Robin's score by $R$, what is the expected value of $|L - R|$ after 50 turns? 使用 x.xxxxxxxx 格式將答案四捨五入到小數點後八位。

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
