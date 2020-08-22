---
title: Factors of a Mersenne number
id: 598eea87e5cf4b116c3ff81a
challengeType: 5
videoUrl: ''
localeTitle: 梅森数的因素
---

## Description
<section id="description"><p>梅森数是2 <sup>P</sup> -1形式的数字。 </p><p>如果P是素数，那么梅森数可能是梅森素数</p><p> （如果P不是素数，则梅森数也不是素数）。 </p><p>在搜索梅森素数时，通过在开始可能冗长的<a href="http://rosettacode.org/wiki/Lucas-Lehmer test" title="Lucas-Lehmer测试">Lucas-Lehmer检验</a>之前找到一个小因子来消除指数是有利的。 </p><p>有非常有效的算法来确定数字是否除以2 <sup>P</sup> -1（或等效地，如果2 <sup>P</sup> mod（数字）= 1）。 </p><p>有些语言已经有了这个exponent-and-mod操作的内置实现（称为modPow或类似的）。 </p><p>以下是如何自己实现这个modPow： </p><p>例如，让我们计算2 <sup>23</sup> mod 47。 </p><p>将指数23转换为二进制，得到10111.从<tt>square</tt> = 1开始，重复平方。 </p><p>卸下指数的最高位，并且如果它是1 <tt>平方</tt>乘以由所述幂（2）的基础上，然后计算<tt>平方</tt>模47。 </p><p>在下一步中使用最后一步的模数结果作为<tt>square</tt>的初始值： </p><p>删除可选</p><p>方形顶部位乘以2 mod 47 </p><p> ------------ ------- ------------- ------ </p><p> 1 * 1 = 1 1 0111 1 * 2 = 2 2 </p><p> 2 * 2 = 4 0 111否4 </p><p> 4 * 4 = 16 1 11 16 * 2 = 32 32 </p><p> 32 * 32 = 1024 1 1 1024 * 2 = 2048 27 </p><p> 27 * 27 = 729 1 729 * 2 = 1458 1 </p><p>由于2 <sup>23</sup> mod 47 = 1,47是2 <sup>P</sup> -1的因子。 </p><p> （要看到这一点，从两边减去1：2 <sup>23</sup> -1 = 0 mod 47.） </p><p>由于我们已经证明47是一个因子，因此2 <sup>23</sup> -1不是素数。 </p><p> Mersenne数字的其他属性使我们能够进一步完善这一过程。 </p><p>任何因子q为2 <sup>P</sup> -1必须是2kP + 1的形式，k是正整数或零。此外，q必须是1或7 mod 8。 </p><p>最后任何潜在因素q必须是<a href="http://rosettacode.org/wiki/Primality by Trial Division" title="审判分庭的原始性">素数</a> 。 </p><p>与其他试验划分算法一样，算法在2kP + 1&gt; sqrt（N）时停止。 </p><p>这些素性测试仅适用于P为素数的Mersenne数。例如，M <sub>4</sub> = 15不使用这些技术产生因子，而是产生3和5的因子，两者都不符合2kP + 1。 </p>任务： <p>使用上述方法找到因子2 <sup>929</sup> -1（又名M929） </p>相关任务： <a href="http://rosettacode.org/wiki/count in factors" title="算上因素">计数因素</a> <a href="http://rosettacode.org/wiki/prime decomposition" title="主要分解">素数分解</a> <a href="http://rosettacode.org/wiki/factors of an integer" title="整数的因子">的整数的因素</a> <a href="http://rosettacode.org/wiki/Sieve of Eratosthenes" title="Eratosthenes的筛子">埃拉托塞尼的筛</a> <a href="http://rosettacode.org/wiki/primality by trial division" title="审判分裂的素性">通过试验除法素性</a> <a href="http://rosettacode.org/wiki/trial factoring of a Mersenne number" title="试用Mensenne数的因式">梅森数的试验理</a> <a href="http://rosettacode.org/wiki/partition an integer X into N primes" title="将整数X划分为N个素数">分区的整数X为N个素数</a> <a href="http://rosettacode.org/wiki/sequence of primes by Trial Division" title="审判分庭的素数序列">由审判庭素数的序列</a> <a href="https://www.youtube.com/watch?v=SNwvJ7psoow" title="链接：https：//www.youtube.com/watch？v = SNwvJ7psoow">在1948年计算机：2¹²⁷-1</a> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>check_mersenne</code>是一个函数。
    testString: assert(typeof check_mersenne === 'function');
  - text: <code>check_mersenne(3)</code>应该返回一个字符串。
    testString: assert(typeof check_mersenne(3) == 'string');
  - text: <code>check_mersenne(3)</code>应该返回“M3 = 2 ^ 3-1是素数”。
    testString: assert.equal(check_mersenne(3),"M3 = 2^3-1 is prime");
  - text: <code>check_mersenne(23)</code>应返回“M23 = 2 ^ 23-1与因子47复合”。
    testString: assert.equal(check_mersenne(23),"M23 = 2^23-1 is composite with factor 47");
  - text: <code>check_mersenne(929)</code>应返回“M929 = 2 ^ 929-1与因子13007复合
    testString: assert.equal(check_mersenne(929),"M929 = 2^929-1 is composite with factor 13007");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function check_mersenne (p) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
