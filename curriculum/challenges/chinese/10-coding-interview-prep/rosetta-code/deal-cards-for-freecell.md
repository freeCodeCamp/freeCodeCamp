---
id: 59694356a6e7011f7f1c5f4e
challengeType: 5
videoUrl: ''
title: FreeCell的交易卡
---

## Description
<section id="description"><p> Free Cell是Paul Alfille在1978年向PLATO系统推出的单人纸牌游戏。微软的Jim Horne将名称更改为FreeCell并重新实现了<a href="http://rosettacode.org/wiki/DOS" title="DOS">DOS</a>游戏，然后是<a href="http://rosettacode.org/wiki/Windows" title="视窗">Windows</a>游戏。 </p><p>这个版本引入了32000个编号的交易。 （ <a href="http://www.solitairelaboratory.com/fcfaq.html" title="链接：http：//www.solitairelaboratory.com/fcfaq.html">FreeCell FAQ</a>讲述了这段历史。） </p><p>随着游戏的流行，Jim Horne披露<a href="http://www.solitairelaboratory.com/mshuffle.txt" title="链接：http：//www.solitairelaboratory.com/mshuffle.txt">了这种算法</a> ，FreeCell的其他实现开始重现微软的交易。 </p><p>这些交易编号从1到32000。 </p><p>微软的新版本有100万笔交易，编号从1到1000000;某些实现允许该范围之外的数字。 </p><p>该算法使用Microsoft C的这种<a href="http://rosettacode.org/wiki/linear congruential generator" title="线性同余发生器">线性同余生成器</a> ： </p> $ state_ {n + 1} \ equiv 214013 \ times state_n + 2531011 \ pmod {2 ^ {31}} $ $ rand_n = state_n \ div 2 ^ {16} $ $ rand_n $的范围是0到32767。 <p>该算法如下： </p>使用交易编号为RNG播种。创建一个由52张牌组成的<a href="http://rosettacode.org/wiki/array" title="排列">阵列</a> ：俱乐部的王牌，钻石王牌，心中的王牌，黑桃王牌，2个俱乐部，2个钻石等等等等：Ace，2,3,4,5,6， 7,8,9,10，杰克，女王，国王。数组索引为0到51，其中俱乐部的Ace为0，黑桃之王为51.直到数组为空：在索引≡下一个随机数（mod数组长度）中选择随机卡。将此随机卡与阵列的最后一张卡交换。从阵列中删除此随机卡。 （数组长度减少1.）处理此随机卡。交易所有52张牌，面朝上，横跨8列。前8张牌分为8列，后8张牌分为8张，依此类推。例： <p>订购交易卡</p><p></p><pre> 1 2 3 4 5 6 7 8
 9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52 </pre><p></p><p>游戏＃1 </p><p></p><pre> [
[&#39;JD&#39;，&#39;2D&#39;，&#39;9H&#39;，&#39;JC&#39;，&#39;5D&#39;，&#39;7H&#39;，&#39;7C&#39;，&#39;5H&#39;]，
[&#39;KD&#39;，&#39;KC&#39;，&#39;9S&#39;，&#39;5S&#39;，&#39;AD&#39;，&#39;QC&#39;，&#39;KH&#39;，&#39;3H&#39;]，
[&#39;2S&#39;，&#39;KS&#39;，&#39;9D&#39;，&#39;QD&#39;，&#39;JS&#39;，&#39;AS&#39;，&#39;AH&#39;，&#39;3C&#39;]，
[&#39;4C&#39;，&#39;5C&#39;，&#39;TS&#39;，&#39;QH&#39;，&#39;4H&#39;，&#39;AC&#39;，&#39;4D&#39;，&#39;7S&#39;]，
[&#39;3S&#39;，&#39;TD&#39;，&#39;4S&#39;，&#39;TH&#39;，&#39;8H&#39;，&#39;2C&#39;，&#39;JH&#39;，&#39;7D&#39;]，
[&#39;6D&#39;，&#39;8S&#39;，&#39;8D&#39;，&#39;QS&#39;，&#39;6C&#39;，&#39;3D&#39;，&#39;8C&#39;，&#39;TC&#39;]，
[&#39;6S&#39;，&#39;9C&#39;，&#39;2H&#39;，&#39;6H&#39;]
] </pre><p></p><p>游戏＃617 </p><p></p><pre> [
[&#39;7D&#39;，&#39;AD&#39;，&#39;5C&#39;，&#39;3S&#39;，&#39;5S&#39;，&#39;8C&#39;，&#39;2D&#39;，&#39;AH&#39;]，
[&#39;TD&#39;，&#39;7S&#39;，&#39;QD&#39;，&#39;AC&#39;，&#39;6D&#39;，&#39;8H&#39;，&#39;AS&#39;，&#39;KH&#39;]，
[&#39;TH&#39;，&#39;QC&#39;，&#39;3H&#39;，&#39;9D&#39;，&#39;6S&#39;，&#39;8D&#39;，&#39;3D&#39;，&#39;TC&#39;]，
[&#39;KD&#39;，&#39;5H&#39;，&#39;9S&#39;，&#39;3C&#39;，&#39;8S&#39;，&#39;7H&#39;，&#39;4D&#39;，&#39;JS&#39;]，
[&#39;4C&#39;，&#39;QS&#39;，&#39;9C&#39;，&#39;9H&#39;，&#39;7C&#39;，&#39;6H&#39;，&#39;2C&#39;，&#39;2S&#39;]，
[&#39;4S&#39;，&#39;TS&#39;，&#39;2H&#39;，&#39;5D&#39;，&#39;JC&#39;，&#39;6C&#39;，&#39;JH&#39;，&#39;QH&#39;]，
[&#39;JD&#39;，&#39;KS&#39;，&#39;KC&#39;，&#39;4H&#39;]
] </pre><p></p>任务： <p>编写一个函数来获取交易编号并按照与此算法相同的顺序处理卡。 </p><p>该函数必须返回表示FreeCell板的二维数组。 </p><p>还可以针对<a href="http://freecellgamesolutions.com/" title="链接：http：//freecellgamesolutions.com/">1000000游戏的FreeCell解决方案</a>检查交易。 </p><p> （召唤一个视频解决方案，它会显示初始交易。） </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dealFreeCell</code>是一个功能。
    testString: assert(typeof dealFreeCell === 'function');
  - text: <code>dealFreeCell(seed)</code>应该返回一个对象。
    testString: assert(typeof dealFreeCell(1) === 'object');
  - text: <code>dealFreeCell(seed)</code>应该返回一个长度为7的数组。
    testString: assert(dealFreeCell(1).length === 7);
  - text: <code>dealFreeCell(1)</code>应该返回一个与示例“Game＃1”相同的数组
    testString: "assert.deepEqual(dealFreeCell(1), game1);"
  - text: <code>dealFreeCell(617)</code>应该返回一个与示例“Game＃617”相同的数组
    testString: "assert.deepEqual(dealFreeCell(617), game617);"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dealFreeCell (seed) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
