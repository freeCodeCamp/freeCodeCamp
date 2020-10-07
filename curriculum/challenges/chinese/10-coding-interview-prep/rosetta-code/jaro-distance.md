---
id: 5a23c84252665b21eecc7ec2
challengeType: 5
videoUrl: ''
title: Jaro距离
---

## Description
<section id="description"> Jaro距离是两个弦之间相似性的度量。两个弦的Jaro距离越高，弦越相似。对得分进行归一化，使得<b>0</b>等于没有相似性， <b>1</b>等于完全匹配。定义两个给定字符串\（s_1 \）和\（s_2 \）的Jaro距离\（d_j \）是\ begin {align} d_j = \ begin {cases} 0 &amp;&amp; \ text {if} m = 0 \\\ \ {\ frac {1} {3}} \ left（{\ frac {m} {| s_ {1} |}} + {\ frac {m} {| s_ {2} |}} + {\ frac { mt} {m}} \ right）&amp;&amp; \ text {otherwise} \ end {cases} \ end {align}其中： <ul><li> \（m \）是<i>匹配字符</i>的数量; </li><li> \（t \）是<i>换位</i>次数的一半。 </li></ul>分别来自\（s_1 \）和\（s_2 \）的两个字符只有在相同且不远于\（\ left \ lfloor \ frac {\ max（| s_1 |，| s_2 |）}时才被认为是<i>匹配的</i> {2} \右\ rfloor-1 \）。将\（s_1 \）的每个字符与\（s_2 \）中的所有匹配字符进行比较。匹配（但不同的序列顺序）字符除以2的数量定义了<i>转置</i>的数量。 <b>示例</b>给定字符串\（s_1 \） <i>DWAYNE</i>和\（s_2 \） <i>DUANE</i>我们发现： <ul><li> \（m = 4 \） </li><li> \（| s_1 | = 6 \） </li><li> \（| s_2 | = 5 \） </li><li> \（t = 0 \） </li></ul>我们发现Jaro得分为：\（d_j = \ frac {1} {3} \ left（\ frac {4} {6} + \ frac {4} {5} + \ frac {4-0} {4} \ right）= 0.822 \）。编写一个函数a，它接受两个字符串作为参数并返回相关的Jaro距离。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jaro</code>应该是一个功能。
    testString: assert(typeof jaro=='function');
  - text: <code>jaro(""+tests[0][0]+"",""+tests[0][1]+"")</code>应返回一个数字。
    testString: assert(typeof jaro('MARTHA', 'MARHTA')=='number');
  - text: <code>jaro(""+tests[0][0]+"",""+tests[0][1]+"")</code>应该返回<code>"+results[0]+"</code> 。
    testString: assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
  - text: <code>jaro(""+tests[1][0]+"",""+tests[1][1]+"")</code>应返回<code>"+results[1]+"</code> 。
    testString: assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
  - text: <code>jaro(""+tests[2][0]+"",""+tests[2][1]+"")</code>应返回<code>"+results[2]+"</code> 。
    testString: assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
  - text: <code>jaro(""+tests[3][0]+"",""+tests[3][1]+"")</code>应返回<code>"+results[3]+"</code> 。
    testString: assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
  - text: <code>jaro(""+tests[4][0]+"",""+tests[4][1]+"")</code>应该返回<code>"+results[4]+"</code> 。
    testString: assert.equal(jaro('ABCD', 'BCDA'), 0.8333333333333334);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function jaro (s, t) {
  // Good luck!
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
