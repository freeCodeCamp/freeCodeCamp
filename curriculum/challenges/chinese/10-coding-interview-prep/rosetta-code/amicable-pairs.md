---
id: 5949b579404977fbaefcd737
title: 友好的对
challengeType: 5
videoUrl: ''
---

# --description--

如果$ N \\ neq M $和N $ $的[适当除数之](<http://rosettacode.org/wiki/Proper divisors> "适当的除数")和（$ \\ mathrm {sum}（\\ mathrm {propDivs}（N）），两个整数$ N $和$ M $被认为是[友好对](<https://en.wikipedia.org/wiki/Amicable numbers> "wp：友善号码") $）$ = M $以及$ \\ mathrm {sum}（\\ mathrm {propDivs}（M））= N $。示例：1184和1210是友好对，具有适当的除数：1,2,4,8,16,32,37,74,148,296,592和1,2,5,10,11,25,55，分别为110,121,242,605。任务：计算并显示低于20,000的Amicable对（有八个）。相关任务[适当的除数](<http://rosettacode.org/wiki/Proper divisors> "适当的除数") [丰富，缺陷和完善的数字分类](<http://rosettacode.org/wiki/Abundant, deficient and perfect number classifications> "丰富，不足和完善的数字分类") [等分序列分类](<http://rosettacode.org/wiki/Aliquot sequence classifications> "等分序列分类")及其友好分类。

# --hints--

`amicablePairsUpTo`是一个函数。

```js
assert(typeof amicablePairsUpTo === 'function');
```

`[[220,284]]` `amicablePairsUpTo(300)`应返回`[[220,284]]` 。

```js
assert.deepEqual(amicablePairsUpTo(300), answer300);
```

`[[220,284],[1184,1210],[2620,2924]]` `amicablePairsUpTo(3000)`应返回`[[220,284],[1184,1210],[2620,2924]]` 。

```js
assert.deepEqual(amicablePairsUpTo(3000), answer3000);
```

`[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]` `amicablePairsUpTo(20000)`应返回`[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]` 。

```js
assert.deepEqual(amicablePairsUpTo(20000), answer20000);
```

# --solutions--

