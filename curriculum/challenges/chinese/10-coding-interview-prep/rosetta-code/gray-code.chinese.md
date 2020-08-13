---
title: Gray code
id: 5a23c84252665b21eecc7e80
challengeType: 5
videoUrl: ''
localeTitle: 格雷码
---

## Description
<section id="description"> <a href="https://en.wikipedia.org/wiki/Gray code">格雷码</a>是二进制编码的一种形式，其中连续数字之间的转换仅相差一位。这是一种有用的编码，用于减少硬件数据危险，其值快速变化和/或连接到较慢的硬件作为输入。从左到右或从上到下依次为<a href="https://en.wikipedia.org/wiki/Karnaugh map">卡诺图</a>生成输入也很有用。创建一个函数来编码数字并解码格雷码中的数字。该函数应该有2个参数。第一个是布尔值。该函数应编码为true，解码为false。第二个参数是要编码/解码的数字。显示所有5位二进制数的正常二进制表示，格雷码表示和解码格雷码值（0-31包括0，不需要前导0）。有许多可能的格雷码。以下编码所谓的“二进制反射格雷码”。 <br>编码（MSB为0位，b为二进制，g为格雷码）： <code><br> if b[i-1] = 1 <br> <span style="padding-left:1em">g[i] = not b[i]</span> <br> else <br> <span style="padding-left:1em">g[i] = b[i]</span> <br></code>要么： <br> <code>g = b xor (b logically right shifted 1 time)</code> <br>解码（MSB为0位，b为二进制，g为格雷码）： <br> <code>b[0] = g[0] <br> for other bits: <br> b[i] = g[i] xor b[i-1] <br></code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gray</code>应该是一个功能。
    testString: assert(typeof gray=='function');
  - text: '<code>gray(true,177)</code>应该返回一个数字。'
    testString: assert(typeof gray(true,177)=='number');
  - text: '<code>gray(true,177)</code>应该返回<code>233</code> 。'
    testString: assert.equal(gray(true,177),233);
  - text: '<code>gray(true,425)</code>应该返回<code>381</code> 。'
    testString: assert.equal(gray(true,425),381);
  - text: '<code>gray(true,870)</code>应该返回<code>725</code> 。'
    testString: assert.equal(gray(true,870),725);
  - text: '<code>gray(false,233)</code>应该返回<code>177</code> 。'
    testString: assert.equal(gray(false,233),177);
  - text: '<code>gray(false,381)</code>应该返回<code>425</code> 。'
    testString: assert.equal(gray(false,381),425);
  - text: '<code>gray(false,725)</code>应该返回<code>870</code> 。'
    testString: assert.equal(gray(false,725),870);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gray(enc, number) {
 // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
