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
    testString: assert(typeof isValid=='function');
  - text: <code>isValid(""+tests[0]+"")</code>应该返回一个布尔值。
    testString: assert(typeof isValid('GB82 WEST 1234 5698 7654 32')=='boolean');
  - text: <code>isValid(""+tests[0]+"")</code>应该返回<code>true</code> 。
    testString: assert.equal(isValid('GB82 WEST 1234 5698 7654 32'),true);
  - text: <code>isValid(""+tests[1]+"")</code>应返回<code>false</code> 。
    testString: assert.equal(isValid('GB82 WEST 1.34 5698 7654 32'),false);
  - text: <code>isValid(""+tests[2]+"")</code>应返回<code>false</code> 。
    testString: assert.equal(isValid('GB82 WEST 1234 5698 7654 325'),false);
  - text: <code>isValid(""+tests[3]+"")</code>应该返回<code>false</code> 。
    testString: assert.equal(isValid('GB82 TEST 1234 5698 7654 32'),false);
  - text: <code>isValid(""+tests[4]+"")</code>应该返回<code>true</code> 。
    testString: assert.equal(isValid('SA03 8000 0000 6080 1016 7519'),true);

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

/section>
