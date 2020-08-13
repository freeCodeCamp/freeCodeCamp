---
id: 5900f4991000cf542c50ffab
challengeType: 5
title: 'Problem 301: Nim'
videoUrl: ''
localeTitle: 问题301：尼姆
---

## Description
<section id="description">
尼姆（Nim）是一堆用石头堆砌而成的游戏，两名玩家轮流用它来清除任何堆石，直到没有石头为止。

我们将考虑Nim的三堆普通播放版本，其工作方式如下：

-游戏开始时有三堆石头。
-玩家在回合时从任何一个堆中移出正数的石头。
-第一个无法移动（因为没有剩余的石头）的玩家输了。

如果（n1，n2，n3）表示由大小为n1，n2和n3的堆组成的Nim位置，则存在一个简单函数X（n1，n2，n3）-您可​​以查找或尝试自己推断-返回值：如果采用完美策略，将要移动的玩家最终会输掉，则返回零；或非零，如果采用完美策略，将要移动的玩家最终会获胜。例如X（1,2,3）= 0，因为无论当前玩家做什么，他的对手都可以通过移动而留下两个相同大小的堆，而此时，当前玩家的每一步都可以被镜像他的对手，直到没有剩下的石头；因此当前玩家输了。为了显示：

-当前玩家移至（1,2,1）
-对手移动至（1,0,1）
-当前玩家移至（0,0,1）
-对手移动到（0,0,0），因此获胜。

对于多少个正整数n≤230，X（n，2n，3n）= 0？
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler301()</code>应该返回2178309。
    testString: assert.strictEqual(euler301(), 2178309);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler301() {
  // Good luck!
  return true;
}

euler301();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
