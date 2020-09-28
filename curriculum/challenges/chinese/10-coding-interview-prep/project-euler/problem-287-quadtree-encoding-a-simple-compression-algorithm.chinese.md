---
id: 5900f48b1000cf542c50ff9e
challengeType: 5
title: 'Problem 287: Quadtree encoding (a simple compression algorithm)'
videoUrl: ''
localeTitle: 问题287：四叉树编码（一种简单的压缩算法）
---

## Description
<section id="description">
四叉树编码使我们能够将2N×2N黑白图像描述为比特序列（0和1）。这些序列应从左向右读取，如下所示：
第一位处理完整的2N×2N区域；
“ 0”表示拆分：
当前的2n×2n区域被分为4个子区域，尺寸为2n-1×2n-1，
接下来的几位包含左上，右上，左下和右下子区域的描述-按此顺序；
“ 10”表示当前区域仅包含黑色像素；
“ 11”表示当前区域仅包含白色像素。请考虑以下4×4图像（彩色标记表示可能发生分裂的位置）：

该图像可以通过几个序列来描述，例如：
长度为30的“ 001010101001011111111010101101”
长度为16的“ 0100101111101110”是此图像的最小序列。

对于正整数N，使用以下着色方案将DN定义为2N×2N图像：
坐标x = 0，y，= 0的像素对应于左下像素，
如果（x-2N-1）2 +（y-2N-1）2≤22N-2，则像素为黑色，
描述D24的最小序列的长度是多少？
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler287()</code>应该返回313135496。
    testString: assert.strictEqual(euler287(), 313135496);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler287() {
  // Good luck!
  return true;
}

euler287();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
