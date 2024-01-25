---
id: 5a23c84252665b21eecc7e80
title: Gray code
challengeType: 1
forumTopicId: 302276
dashedName: gray-code
---

# --description--

Gray code is a form of binary encoding where transitions between consecutive numbers differ by only one bit.

這是一種有用的編碼，用於減少硬件數據危險，因爲值會快速變化和/或連接到較慢的硬件作爲輸入。

It is also useful for generating inputs for Karnaugh maps in order from left to right or top to bottom.

# --instructions--

創建一個函數來將數字編碼爲格雷碼並從格雷碼解碼數字。 該函數應該有 2 個參數。

第一個是布爾值。 該函數應編碼爲 true，解碼爲 false。 第二個參數是要編碼/解碼的數字。

顯示所有 5 位二進制數（包括 0-31，不需要前導 0）的正常二進制表示、格雷碼錶示和解碼格雷碼值。

There are many possible Gray codes. 下面對所謂的“二進制反射格雷碼”進行編碼。

編碼（MSB 爲位 0，b 爲二進制，g 爲格雷碼）：

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

或者：

<pre>g = b xor（b 邏輯右移 1 次）
</pre>

解碼（MSB 爲位 0，b 爲二進制，g 爲格雷碼）：

<pre>b[0] = g[0]<br>
for other bits:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` 應該是一個函數。

```js
assert(typeof gray == 'function');
```

`gray(true,177)` 應該返回一個數字。

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` 應該返回 `233`。

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` 應該返回 `381`。

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` 應該返回 `725`。

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` 應該返回 `177`。

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` 應該返回 `425`。

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)` 應該返回 `870`。

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
