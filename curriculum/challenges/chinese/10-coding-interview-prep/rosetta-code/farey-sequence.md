---
id: 59c3ec9f15068017c96eb8a3
title: Farey序列
challengeType: 5
videoUrl: ''
dashedName: farey-sequence
---

# --description--

<p>编写一个返回n阶Farey序列的函数。该函数应该有一个参数n。它应该将序列作为数组返回。阅读以下内容了解更多详情： </p><p>阶数n的<a href='https://en.wikipedia.org/wiki/Farey sequence' title='wp：Farey序列'>Farey序列</a> F <sub>n</sub>是在0和1之间的完全减少的分数的序列，当在最低阶段时，具有小于或等于n的分母，按照增大的大小排列。 </p><p> Farey序列有时被错误地称为Farey系列。 </p><p>每个Farey序列： </p><p> :: *以值0开头，由分数$ \ frac {0} {1} $表示</p><p> :: *以值1结尾，由$ \ frac {1} {1} $分数表示。 </p><p>订单1到5的Farey序列是： </p><p> $ {\ bf \ it {F}} _ 1 = \ frac {0} {1}，\ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 2 = \ frac {0} {1}，\ frac {1} {2}，\ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 3 = \ frac {0} {1}，\ frac {1} {3}，\ frac {1} {2}，\ frac {2} {3}，\ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 4 = \ frac {0} {1}，\ frac {1} {4}，\ frac {1} {3}，\ frac {1} {2}，\ frac {2} {3}，\ frac {3} {4}，\ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 5 = \ frac {0} {1}，\ frac {1} {5}，\ frac {1} {4}，\ frac {1} {3}，\ frac {2} {5}，\ frac {1} {2}，\ frac {3} {5}，\ frac {2} {3}，\ frac {3} {4}，\ frac {4} {5 }，\ frac {1} {1} $ </p>

# --hints--

`farey`是一种功能。

```js
assert(typeof farey === 'function');
```

`farey(3)`应该返回一个数组

```js
assert(Array.isArray(farey(3)));
```

`farey(3)`应该返回`["1/3","1/2","2/3"]`

```js
assert.deepEqual(farey(3), ['1/3', '1/2', '2/3']);
```

`farey(4)`应该返回`["1/4","1/3","1/2","2/4","2/3","3/4"]`

```js
assert.deepEqual(farey(4), ['1/4', '1/3', '1/2', '2/4', '2/3', '3/4']);
```

`farey(5)`应返回`["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]`

```js
assert.deepEqual(farey(5), [
  '1/5',
  '1/4',
  '1/3',
  '2/5',
  '1/2',
  '2/4',
  '3/5',
  '2/3',
  '3/4',
  '4/5'
]);
```

# --seed--

## --seed-contents--

```js
function farey(n) {

}
```

# --solutions--

```js
function farey(n){
    let farSeq=[];
    for(let den = 1; den <= n; den++){
        for(let num = 1; num < den; num++){
            farSeq.push({
                str:num+"/"+den,
                val:num/den});
        }
    }
    farSeq.sort(function(a,b){
        return a.val-b.val;
    });
    farSeq=farSeq.map(function(a){
        return a.str;
    });
    return farSeq;
}
```
