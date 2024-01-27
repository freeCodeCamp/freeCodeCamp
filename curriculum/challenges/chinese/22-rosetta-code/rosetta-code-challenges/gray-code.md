---
id: 5a23c84252665b21eecc7e80
title: Gray code
challengeType: 1
forumTopicId: 302276
dashedName: gray-code
---

# --description--

Gray code is a form of binary encoding where transitions between consecutive numbers differ by only one bit.

这是一种有用的编码，用于减少硬件数据危险，因为值会快速变化和/或连接到较慢的硬件作为输入。

It is also useful for generating inputs for Karnaugh maps in order from left to right or top to bottom.

# --instructions--

创建一个函数来将数字编码为格雷码并从格雷码解码数字。 该函数应该有 2 个参数。

第一个是布尔值。 该函数应编码为 true，解码为 false。 第二个参数是要编码/解码的数字。

显示所有 5 位二进制数（包括 0-31，不需要前导 0）的正常二进制表示、格雷码表示和解码格雷码值。

There are many possible Gray codes. 下面对所谓的“二进制反射格雷码”进行编码。

编码（MSB 为位 0，b 为二进制，g 为格雷码）：

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

或者：

<pre>g = b xor（b 逻辑右移 1 次）
</pre>

解码（MSB 为位 0，b 为二进制，g 为格雷码）：

<pre>b[0] = g[0]<br>
for other bits:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` 应该是一个函数。

```js
assert(typeof gray == 'function');
```

`gray(true,177)` 应该返回一个数字。

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` 应该返回 `233`。

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` 应该返回 `381`。

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` 应该返回 `725`。

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` 应该返回 `177`。

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` 应该返回 `425`。

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)` 应该返回 `870`。

```js
assert.equal(gray(false, 725), 870);
```

# --seed--

## --seed-contents--

```js
function gray(enc, number) {

}
```

# --solutions--

```js
function gray(enc, number){
  if(enc){
      return number ^ (number >> 1);
  }else{
      let n = number;

      while (number >>= 1) {
          n ^= number;
      }
      return n;
  }
}
```
