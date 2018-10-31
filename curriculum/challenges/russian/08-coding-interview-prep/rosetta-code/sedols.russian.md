---
title: SEDOLs
id: 59d9c6bc214c613ba73ff012
challengeType: 5
videoUrl: ''
localeTitle: SEDOLs
---

## Description
<section id="description"> Задача: <p> Для каждого списка номеров 6-значных <a href="https://en.wikipedia.org/wiki/SEDOL" title="wp: SEDOL">SEDOL</a> s вычислите и добавьте цифру контрольной суммы. </p><p> То есть, учитывая входную строку слева, ваша функция должна возвращать соответствующую строку справа: </p><pre> <code>&lt;pre&gt; 710889 =&gt; 7108899 B0YBKJ =&gt; B0YBKJ7 406566 =&gt; 4065663 B0YBLH =&gt; B0YBLH2 228276 =&gt; 2282765 B0YBKL =&gt; B0YBKL9 557910 =&gt; 5579107 B0YBKR =&gt; B0YBKR5 585284 =&gt; 5852842 B0YBKT =&gt; B0YBKT7 B00030 =&gt; B000300 &lt;/pre&gt;</code> </pre><p> Проверьте также, что каждый вход правильно сформирован, особенно в отношении допустимых символов, разрешенных в строке SEDOL. Ваша функция должна возвращать значение <code>null</code> для недопустимого ввода. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sedol</code> - это функция.
    testString: 'assert(typeof sedol === "function", "<code>sedol</code> is a function.");'
  - text: '<code>sedol(&#39;a&#39;)</code> должен возвращать null. &quot;)'
    testString: 'assert(sedol("a") === null, "<code>sedol("a")</code> should return null.");'
  - text: '<code>sedol(&#39;710889&#39;)</code> должен возвращать &#39;7108899&#39;. &quot;)'
    testString: 'assert(sedol("710889") === "7108899", "<code>sedol("710889")</code> should return "7108899".");'
  - text: '<code>sedol(&#39;BOATER&#39;)</code> должен вернуть null. &quot;)'
    testString: 'assert(sedol("BOATER") === null, "<code>sedol("BOATER")</code> should return null.");'
  - text: '<code>sedol(&#39;228276&#39;)</code> должен вернуться &#39;2282765&#39;. &quot;)'
    testString: 'assert(sedol("228276") === "2282765", "<code>sedol("228276")</code> should return "2282765".");'

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
</section>
