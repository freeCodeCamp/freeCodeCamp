---
id: 5a7dad05be01840e1778a0d1
title: FRACTRAN
challengeType: 1
forumTopicId: 302270
dashedName: fractran
---

# --description--

FRACTRAN is a Turing-complete esoteric programming language invented by the mathematician John Horton Conway.

FRACTRAN プログラムは、最初の正の整数入力 $n$ を含む、正の分数$P = (f_1, f_2, \\ldots, f_m)$の順序付きリストです。

このプログラムは、整数 $n$ を以下のように更新することで実行されます。

<ul>
  <li>$nf_i$ が整数であるリストの最初の分数の $f_i$では、 $n$ を $nf_i$ に置き換えます。</li>
  <li>$n$を掛けた場合にリスト内の分数が整数を生成しなくなるまで、このルールをくり返した後、停止します。</li>
</ul>

コンウェイ氏はFRACTRANで素数のためのプログラムを記述しました:

$\\dfrac{17}{91}$, $\\dfrac{78}{85}$, $\\dfrac{19}{51}$, $\\dfrac{23}{38}$, $\\dfrac{29}{33}$, $\\dfrac{77}{29}$, $\\dfrac{95}{23}$, $\\dfrac{77}{19}$, $\\dfrac{1}{17}$, $\\dfrac{11}{13}$, $\\dfrac{13}{11}$, $\\dfrac{15}{14}$, $\\dfrac{15}{2}$, $\\dfrac{55}{1}$

$n=2$から開始して、このFRACTRANプログラムは $n$を $15=2\\times (\\frac{15}{2})$, に、その後、$825=15\\times (\\frac{55}{1})$に変更し、 以下の整数数列を生成します。

$2$, $15$, $825$, $725$, $1925$, $2275$, $425$, $390$, $330$, $290$, $770$, $\\ldots$

2 の後には、この数列には以下の2の累乗が含まれます。

$2^2=4$, $2^3=8$, $2^5=32$, $2^7=128$, $2^{11}=2048$, $2^{13}=8192$, $2^{17}=131072$, $2^{19}=524288$, $\\ldots$

これは2の素数の累乗です。

# --instructions--

FRACTRANプログラムを文字列パラメータとして取り、プログラムが生成する最初の10個の数値を配列として返す関数を記述してください。 結果が 10 個の数値を持たない場合は、数値をそのまま返します。

# --hints--

`fractran` は関数とします。

```js
assert(typeof fractran == 'function');
```

`fractran("3/2, 1/3")` は配列を返す必要があります。

```js
assert(Array.isArray(fractran('3/2, 1/3')));
```

`fractran("3/2, 1/3")` は、`[ 2, 3, 1 ]`を返す必要があります。

```js
assert.deepEqual(fractran('3/2, 1/3'), [2, 3, 1]);
```

`fractran("3/2, 5/3, 1/5")` は、 `[ 2, 3, 5, 1 ]`を返す必要があります。

```js
assert.deepEqual(fractran('3/2, 5/3, 1/5'), [2, 3, 5, 1]);
```

`fractran("3/2, 6/3")` は、`[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]`を返す必要があります。

```js
assert.deepEqual(fractran('3/2, 6/3'), [2, 3, 6, 9, 18, 27, 54, 81, 162, 243]);
```

`fractran("2/7, 7/2")` は、 `[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]`を返す必要があります。

```js
assert.deepEqual(fractran('2/7, 7/2'), [2, 7, 2, 7, 2, 7, 2, 7, 2, 7]);
```

`fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")` は、 `[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]`を返す必要があります。

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
