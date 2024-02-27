---
id: 5a7dad05be01840e1778a0d1
title: Fractran
challengeType: 1
forumTopicId: 302270
dashedName: fractran
---

# --description--

FRACTRAN is a Turing-complete esoteric programming language invented by the mathematician John Horton Conway.

FRACTRAN 程序是正分數 $P = (f_1, f_2, \\ldots, f_m)$ 的有序列表，以及初始正整數輸入 $n$。

該程序通過更新整數 $n$ 來運行，如下所示：

<ul>
  <li>for the first fraction, $f_i$, in the list for which $nf_i$ is an integer, replace $n$ with $nf_i$ ;</li>
  <li>重複此規則，直到列表中沒有分數乘以 $n$ 產生整數，然後停止。</li>
</ul>

Conway 在 FRACTRAN 中給出了一個質數程序：

$\\dfrac{17}{91}$, $\\dfrac{78}{85}$, $\\dfrac{19}{51}$, $\\dfrac{23}{38}$, $\\dfrac{29}{33}$, $\\dfrac{77}{29}$, $\\dfrac{95}{23}$, $\\dfrac{77}{19}$, $\\dfrac{1}{17}$, $\\dfrac{11}{13}$, $\\dfrac{13}{11}$, $\\dfrac{15}{14}$, $\\dfrac{15}{2}$, $\\dfrac{55}{1}$

從 $n=2$ 開始，這個 FRACTRAN 程序會將 $n$ 更改爲 $15=2\\times (\\frac{15}{2})$，然後 $825=15\\times (\\frac{55} {1})$，生成以下整數序列：

$2$, $15$, $825$, $725$, $1925$, $2275$, $425$, $390$, $330$, $290$, $770$, $\\ldots$

在 2 之後，此序列包含以下 2 的冪：

$2^2=4$, $2^3=8$, $2^5=32$, $2^7=128$, $2^{11}=2048$, $2^{13}=8192$, $2^{17}=131072$, $2^{19}=524288$, $\\ldots$

它們是 2 的主要冪。

# --instructions--

編寫一個函數，將 fractran 程序作爲字符串參數，並將程序的前 10 個數字作爲數組返回。 如果結果沒有 10 個數字，則按原樣返回數字。

# --hints--

`fractran` 應該是一個函數。

```js
assert(typeof fractran == 'function');
```

`fractran("3/2, 1/3")` 應該返回一個數組。

```js
assert(Array.isArray(fractran('3/2, 1/3')));
```

`fractran("3/2, 1/3")` 應該返回 `[ 2, 3, 1 ]`。

```js
assert.deepEqual(fractran('3/2, 1/3'), [2, 3, 1]);
```

`fractran("3/2, 5/3, 1/5")` 應該返回 `[ 2, 3, 5, 1 ]`。

```js
assert.deepEqual(fractran('3/2, 5/3, 1/5'), [2, 3, 5, 1]);
```

`fractran("3/2, 6/3")` 應該返回 `[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]`。

```js
assert.deepEqual(fractran('3/2, 6/3'), [2, 3, 6, 9, 18, 27, 54, 81, 162, 243]);
```

`fractran("2/7, 7/2")` 應該返回 `[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]`。

```js
assert.deepEqual(fractran('2/7, 7/2'), [2, 7, 2, 7, 2, 7, 2, 7, 2, 7]);
```

`fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")` 應該返回 `[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]`。

```js
assert.deepEqual(
  fractran(
    '17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1'
  ),
  [2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290]
);
```

# --seed--

## --seed-contents--

```js
function fractran(progStr) {

}
```

# --solutions--

```js
function fractran(progStr){
  var num = new Array();
  var den = new Array();
  var val ;
  var out="";
  function compile(prog){
    var regex = /\s*(\d*)\s*\/\s*(\d*)\s*(.*)/m;
    while(regex.test(prog)){
      num.push(regex.exec(prog)[1]);
      den.push(regex.exec(prog)[2]);
      prog = regex.exec(prog)[3];
    }
  }

  function step(val){
    var i=0;
    while(i<den.length && val%den[i] != 0) i++;
    return num[i]*val/den[i];
  }

  var seq=[]

  function exec(val){
    var i = 0;
    while(val && i<limit){
      seq.push(val)
      val = step(val);
      i ++;
    }
  }

  // Main
  compile(progStr);
  var limit = 10;
  exec(2);
  return seq;
}
```
