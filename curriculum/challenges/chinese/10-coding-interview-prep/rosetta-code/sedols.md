---
title: SEDOLs
id: 59d9c6bc214c613ba73ff012
challengeType: 5
videoUrl: ''
localeTitle: SEDOLs
---

## Description
<section id="description">任务： <p>对于6位<a href="https://en.wikipedia.org/wiki/SEDOL" title="wp：SEDOL">SEDOL</a>的每个数字列表，计算并附加校验和数字。 </p><p>也就是说，给定左侧的输入字符串，您的函数应返回右侧的相应字符串： </p><pre> <code>&lt;pre&gt; 710889 =&gt; 7108899 B0YBKJ =&gt; B0YBKJ7 406566 =&gt; 4065663 B0YBLH =&gt; B0YBLH2 228276 =&gt; 2282765 B0YBKL =&gt; B0YBKL9 557910 =&gt; 5579107 B0YBKR =&gt; B0YBKR5 585284 =&gt; 5852842 B0YBKT =&gt; B0YBKT7 B00030 =&gt; B000300 &lt;/pre&gt;</code> </pre><p>还要检查每个输入是否正确形成，尤其是对于SEDOL字符串中允许的有效字符。您的函数应在无效输入时返回<code>null</code> 。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sedol</code>是一个功能。
    testString: assert(typeof sedol === 'function');
  - text: <code>sedol('a')</code>应该返回null。
    testString: assert(sedol('a') === null);
  - text: <code>sedol('710889')</code>应返回'7108899'。
    testString: assert(sedol('710889') === '7108899');
  - text: <code>sedol('BOATER')</code>应该返回null。
    testString: assert(sedol('BOATER') === null);
  - text: <code>sedol('228276')</code>应该返回'228276'。
    testString: assert(sedol('228276') === '2282765');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sedol (input) {
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
