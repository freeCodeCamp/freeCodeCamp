---
id: 5a23c84252665b21eecc7e80
title: グレイコード
challengeType: 1
forumTopicId: 302276
dashedName: gray-code
---

# --description--

Gray code is a form of binary encoding where transitions between consecutive numbers differ by only one bit.

これは、急速に変化する値を持つ場合や入力時に動作の遅いハードウェアに接続する場合に、ハードウェアのデータハザードを減少させるのに役立つエンコーディングです。

It is also useful for generating inputs for Karnaugh maps in order from left to right or top to bottom.

# --instructions--

数値をグレイコードにエンコードし、グレイコードから数値にデコードする関数を作成してください。 この関数は 2 つのパラメーターを取得する必要があります。

1つ目はブール値です。 この関数は true の場合にエンコードし、false の場合にデコードします。 2 つ目のパラメータはエンコード/デコードされる数値です。

すべての 5 ビット 2 進数 (0-31 を含む、最初の 0 は省略可) の通常のバイナリ表現、グレイコード表現、およびグレイコードからデコードされた値を表示します。

グレイコードには様々な方法があります。 以下は、「交番二進グレイコード」と呼ばれるエンコードです。

エンコーディング (最上位ビットはビット 0、b はバイナリ、g はグレイコード):

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

または:

<pre>g = b xor (b を論理的に 1 回右シフト)
</pre>

デコーディング (最上位ビットはビット 0、b はバイナリ、g はグレイコード):

<pre>b[0] = g[0]<br>
for other bits:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` は関数とします。

```js
assert(typeof gray == 'function');
```

`gray(true,177)` は数値を返す必要があります。

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` は`233`を返す必要があります。

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` は`381`を返す必要があります。

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` は`725`を返す必要があります。

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` は`177`を返す必要があります。

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` は`425`を返す必要があります。

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)`は`870`を返す必要があります。

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
