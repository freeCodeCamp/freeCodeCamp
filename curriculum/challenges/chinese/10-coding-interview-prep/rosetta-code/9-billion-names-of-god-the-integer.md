---
id: 5949b579404977fbaefcd736
challengeType: 5
videoUrl: ''
title: 90亿上帝的名字整数
---

## Description
<section id="description"><p>这项任务是<a href="https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary" title="wp：上帝的九十亿名字#Plot_summary">Arthur C. Clarke</a>的<a href="https://en.wikipedia.org/wiki/The Nine Billion Names of God#Plot_summary" title="wp：上帝的九十亿名字#Plot_summary">短篇小说改编</a> 。 </p><p> （求解者应该意识到完成这项任务的后果。） </p><p>详细说明，指定“名称”的含义： </p><p>整数1有1个名称“1”。 </p><p>整数2有2个名称“1 + 1”和“2”。 </p><p>整数3具有3个名称“1 + 1 + 1”，“2 + 1”和“3”。 </p><p>整数4具有5个名称“1 + 1 + 1 + 1”，“2 + 1 + 1”，“2 + 2”，“3 + 1”，“4”。 </p><p>整数5有7个名称“1 + 1 + 1 + 1 + 1”，“2 + 1 + 1 + 1”，“2 + 2 + 1”，“3 + 1 + 1”，“3 + 2”， “4 + 1”，“5”。 </p><p>这可以通过以下形式显示： </p><pre> 1
        1 1
      1 1 1
    1 2 1 1
  1 2 2 1 1
1 3 3 2 1 1
</pre><p>其中row $ n $对应于整数$ n $，而行$ m $中从左到右的每列$ C $对应于以$ C $开头的名称数。 </p><p> （可选）请注意$ n $ -th行$ P（n）$的总和是<a href="http://mathworld.wolfram.com/PartitionFunctionP.html" title="链接：http：//mathworld.wolfram.com/PartitionFunctionP.html">整数分区函数</a> 。 </p>任务<p>实现一个返回$ n $ -th行之和的函数。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>numberOfNames</code>是一个函数。
    testString: assert(typeof numberOfNames === 'function');
  - text: <code>numberOfNames(5)</code>应该等于7。
    testString: assert.equal(numberOfNames(5), 7);
  - text: <code>numberOfNames(12)</code>应该等于77。
    testString: assert.equal(numberOfNames(12), 77);
  - text: <code>numberOfNames(18)</code>应该等于385。
    testString: assert.equal(numberOfNames(18), 385);
  - text: <code>numberOfNames(23)</code>应该等于1255。
    testString: assert.equal(numberOfNames(23), 1255);
  - text: <code>numberOfNames(42)</code>应该等于53174。
    testString: assert.equal(numberOfNames(42), 53174);
  - text: <code>numberOfNames(123)</code>应该等于2552338241。
    testString: assert.equal(numberOfNames(123), 2552338241);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function numberOfNames (num) {
  // Good luck!
  return true;
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
