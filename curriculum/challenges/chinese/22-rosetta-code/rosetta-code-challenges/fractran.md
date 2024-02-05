---
id: 5a7dad05be01840e1778a0d1
title: Fractran
challengeType: 1
forumTopicId: 302270
dashedName: fractran
---

# --description--

FRACTRAN is a Turing-complete esoteric programming language invented by the mathematician John Horton Conway.

FRACTRAN 程序是正分数 $P = (f_1, f_2, \\ldots, f_m)$ 的有序列表，以及初始正整数输入 $n$。

该程序通过更新整数 $n$ 来运行，如下所示：

<ul>
  <li>for the first fraction, $f_i$, in the list for which $nf_i$ is an integer, replace $n$ with $nf_i$ ;</li>
  <li>重复此规则，直到列表中没有分数乘以 $n$ 产生整数，然后停止。</li>
</ul>

Conway 在 FRACTRAN 中给出了一个质数程序：

$\\dfrac{17}{91}$, $\\dfrac{78}{85}$, $\\dfrac{19}{51}$, $\\dfrac{23}{38}$, $\\dfrac{29}{33}$, $\\dfrac{77}{29}$, $\\dfrac{95}{23}$, $\\dfrac{77}{19}$, $\\dfrac{1}{17}$, $\\dfrac{11}{13}$, $\\dfrac{13}{11}$, $\\dfrac{15}{14}$, $\\dfrac{15}{2}$, $\\dfrac{55}{1}$

从 $n=2$ 开始，这个 FRACTRAN 程序会将 $n$ 更改为 $15=2\\times (\\frac{15}{2})$，然后 $825=15\\times (\\frac{55} {1})$，生成以下整数序列：

$2$, $15$, $825$, $725$, $1925$, $2275$, $425$, $390$, $330$, $290$, $770$, $\\ldots$

在 2 之后，此序列包含以下 2 的幂：

$2^2=4$, $2^3=8$, $2^5=32$, $2^7=128$, $2^{11}=2048$, $2^{13}=8192$, $2^{17}=131072$, $2^{19}=524288$, $\\ldots$

它们是 2 的主要幂。

# --instructions--

编写一个函数，将 fractran 程序作为字符串参数，并将程序的前 10 个数字作为数组返回。 如果结果没有 10 个数字，则按原样返回数字。

# --hints--

`fractran` 应该是一个函数。

```js
assert(typeof fractran == 'function');
```

`fractran("3/2, 1/3")` 应该返回一个数组。

```js
assert(Array.isArray(fractran('3/2, 1/3')));
```

`fractran("3/2, 1/3")` 应该返回 `[ 2, 3, 1 ]`。

```js
assert.deepEqual(fractran('3/2, 1/3'), [2, 3, 1]);
```

`fractran("3/2, 5/3, 1/5")` 应该返回 `[ 2, 3, 5, 1 ]`。

```js
assert.deepEqual(fractran('3/2, 5/3, 1/5'), [2, 3, 5, 1]);
```

`fractran("3/2, 6/3")` 应该返回 `[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]`。

```js
assert.deepEqual(fractran('3/2, 6/3'), [2, 3, 6, 9, 18, 27, 54, 81, 162, 243]);
```

`fractran("2/7, 7/2")` 应该返回 `[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]`。

```js
assert.deepEqual(fractran('2/7, 7/2'), [2, 7, 2, 7, 2, 7, 2, 7, 2, 7]);
```

`fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")` 应该返回 `[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]`。

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
