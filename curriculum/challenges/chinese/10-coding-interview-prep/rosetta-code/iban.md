---
id: 5a23c84252665b21eecc7eaf
title: 他们
challengeType: 5
videoUrl: ''
---

# --description--

[国际银行账号（IBAN）](https://en.wikipedia.org/wiki/International_Bank_Account_Number)是一种国际商定的识别跨国界银行账户的方法，降低了传播[抄写错误的](https://en.wikipedia.org/wiki/Transcription_error)风险。 IBAN最多包含34个字母数字字符：

-   首先是两个字母的ISO 3166-1 alpha-2国家代码
-   然后是两个校验位，和
-   最后是国家特定的基本银行帐号（BBAN）。

通过检查数字，即使在提交交易之前，也可以对银行帐号进行健全性检查以确认其完整性。编写一个以IBAN字符串作为参数的函数。如果有效则返回true。否则，返回false。

# --hints--

`isValid`应该是一个函数。

```js
assert(typeof isValid == 'function');
```

`isValid(""+tests[0]+"")`应该返回一个布尔值。

```js
assert(typeof isValid('GB82 WEST 1234 5698 7654 32') == 'boolean');
```

`isValid(""+tests[0]+"")`应该返回`true` 。

```js
assert.equal(isValid('GB82 WEST 1234 5698 7654 32'), true);
```

`isValid(""+tests[1]+"")`应返回`false` 。

```js
assert.equal(isValid('GB82 WEST 1.34 5698 7654 32'), false);
```

`isValid(""+tests[2]+"")`应返回`false` 。

```js
assert.equal(isValid('GB82 WEST 1234 5698 7654 325'), false);
```

`isValid(""+tests[3]+"")`应该返回`false` 。

```js
assert.equal(isValid('GB82 TEST 1234 5698 7654 32'), false);
```

`isValid(""+tests[4]+"")`应该返回`true` 。

```js
assert.equal(isValid('SA03 8000 0000 6080 1016 7519'), true);
```

# --solutions--

