---
id: 5a7dad05be01840e1778a0d1
title: Fractran
challengeType: 3
videoUrl: ''
dashedName: fractran
---

# --description--

<div class='rosetta'><p class='rosetta__paragraph'> <span class='rosetta__text--bold'><a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/FRACTRAN' title='wp：FRACTRAN'>FRACTRAN</a></span>是由数学家<a class='rosetta__link--wiki' href='https://en.wikipedia.org/wiki/John Horton Conway' title='wp：John Horton Conway'>John Horton Conway</a>发明的图灵完备的深奥编程语言。 </p><br><p class='rosetta__paragraph'> FRACTRAN程序是正分数$ P =（f_1，f_2，\ ldots，f_m）$的有序列表，以及初始正整数输入$ n $。 </p><br><p class='rosetta__paragraph'>该程序通过更新整数$ n $来运行，如下所示： </p><br><ul class='rosetta__unordered-list'><li class='rosetta__list-item--unordered'>对于第一个分数$ f_i $，在$ nf_i $为整数的列表中，用$ nf_i $替换$ n $; </li><li class='rosetta__list-item--unordered'>重复此规则，直到列表中没有分数乘以$ n $时产生整数，然后停止。 </li></ul><br><p class='rosetta__paragraph'>康威为FRACTRAN提供了素数计划： </p><br><p class='rosetta__paragraph'> <span class='rosetta__text--indented'>$ 17/91 $，$ 78/85 $，$ 19/51 $，$ 23/38 $，$ 29/33 $，$ 77/29 $，$ 95/23 $，$ 77/19 $，$ 1/17 $，$ 11/13 $， $ 13/11 $ $，$ 15/14 $，$ 15/2 $，$ 55/1 $</span> </p><br><p class='rosetta__paragraph'>从$ n = 2 $开始，此FRACTRAN程序将$ n $更改为$ 15 = 2 \ times（15/2）$，然后$ 825 = 15 \ times（55/1）$，生成以下整数序列： </p><br><p class='rosetta__paragraph'> <span class='rosetta__text--indented'>$ 2 $，$ 15 $，$ 825 $，$ 725 $，$ 1925 $，$ 2275 $，$ 425 $，$ 390 $，$ 330 $，$ 290 $，$ 770 $，$ \ ldots $</span> </p><br><p class='rosetta__paragraph'> 2之后，此序列包含以下2的幂： </p><br><p class='rosetta__paragraph'> <span class='rosetta__text--indented'>$ 2 ^ 2 = 4 $，$ 2 ^ 3 = 8 $，$ 2 ^ 5 = 32 $，$ 2 ^ 7 = 128 $，$ 2 ^ {11} = 2048 $，$ 2 ^ {13} = 8192 $，$ 2 ^ {17 } = 131072 $，$ 2 ^ {19} = 524288 $，$ \ ldots $</span> </p><br><p class='rosetta__paragraph'>这是2的主要权力。 </p><br><dl class='rosetta__description-list'><dt class='rosetta__description-title'>任务： </dt></dl><p class='rosetta__paragraph'>编写一个函数，将fractran程序作为字符串参数，并将程序的前10个数字作为数组返回。如果结果没有10个数字，则按原样返回数字。 </p></div>

# --hints--

`fractran`应该是一个功能。

```js
assert(typeof fractran == 'function');
```

`fractran(""+tests[0]+"")`应该返回一个数组。

```js
assert(Array.isArray(fractran('3/2, 1/3')));
```

`fractran(""+tests[0]+"")`应返回`"+JSON.stringify(results[0])+"` 。

```js
assert.deepEqual(fractran('3/2, 1/3'), [2, 3, 1]);
```

`fractran(""+tests[1]+"")`应返回`"+JSON.stringify(results[1])+"` 。

```js
assert.deepEqual(fractran('3/2, 5/3, 1/5'), [2, 3, 5, 1]);
```

`fractran(""+tests[2]+"")`应返回`"+JSON.stringify(results[2])+"` 。

```js
assert.deepEqual(fractran('3/2, 6/3'), [2, 3, 6, 9, 18, 27, 54, 81, 162, 243]);
```

`fractran(""+tests[3]+"")`应返回`"+JSON.stringify(results[3])+"` 。

```js
assert.deepEqual(fractran('2/7, 7/2'), [2, 7, 2, 7, 2, 7, 2, 7, 2, 7]);
```

`fractran(""+tests[4]+"")`应返回`"+JSON.stringify(results[4])+"` 。

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
