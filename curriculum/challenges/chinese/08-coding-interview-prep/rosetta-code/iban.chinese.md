---
title: IBAN
id: 5a23c84252665b21eecc7eaf
challengeType: 5
videoUrl: ''
localeTitle: 他们
---

## Description
<section id="description"> <a href="https://en.wikipedia.org/wiki/International_Bank_Account_Number">国际银行账号（IBAN）</a>是一种国际商定的识别跨国界银行账户的方法，降低了传播<a href="https://en.wikipedia.org/wiki/Transcription_error">抄写错误的</a>风险。 IBAN最多包含34个字母数字字符： <ul><li>首先是两个字母的ISO 3166-1 alpha-2国家代码</li><li>然后是两个校验位，和</li><li>最后是国家特定的基本银行帐号（BBAN）。 </li></ul>通过检查数字，即使在提交交易之前，也可以对银行帐号进行健全性检查以确认其完整性。编写一个以IBAN字符串作为参数的函数。如果有效则返回true。否则，返回false。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isValid</code>应该是一个函数。
    testString: 'assert(typeof isValid=="function","<code>isValid</code> should be a function.");'
  - text: '<code>isValid(&quot;&quot;+tests[0]+&quot;&quot;)</code>应该返回一个布尔值。'
    testString: 'assert(typeof isValid(tests[0])=="boolean","<code>isValid(""+tests[0]+"")</code> should return a boolean.");'
  - text: '<code>isValid(&quot;&quot;+tests[0]+&quot;&quot;)</code>应该返回<code>true</code> 。'
    testString: 'assert.equal(isValid(tests[0]),true,"<code>isValid(""+tests[0]+"")</code> should return <code>true</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[1]+&quot;&quot;)</code>应返回<code>false</code> 。'
    testString: 'assert.equal(isValid(tests[1]),false,"<code>isValid(""+tests[1]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[2]+&quot;&quot;)</code>应返回<code>false</code> 。'
    testString: 'assert.equal(isValid(tests[2]),false,"<code>isValid(""+tests[2]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[3]+&quot;&quot;)</code>应该返回<code>false</code> 。'
    testString: 'assert.equal(isValid(tests[3]),false,"<code>isValid(""+tests[3]+"")</code> should return <code>false</code>.");'
  - text: '<code>isValid(&quot;&quot;+tests[4]+&quot;&quot;)</code>应该返回<code>true</code> 。'
    testString: 'assert.equal(isValid(tests[4]),true,"<code>isValid(""+tests[4]+"")</code> should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isValid (iban) {
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
</section>
