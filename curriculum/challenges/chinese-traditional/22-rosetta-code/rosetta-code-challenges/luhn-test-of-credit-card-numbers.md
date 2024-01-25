---
id: 5ea28156e79528a9ab248f27
title: 信用卡號的 Luhn 測試
challengeType: 1
forumTopicId: 385284
dashedName: luhn-test-of-credit-card-numbers
---

# --description--

The Luhn test is used by some credit card companies to distinguish valid credit card numbers from what could be a random selection of digits.

那些使用可以通過 Luhn 測試驗證的信用卡號碼的公司擁有通過以下測試的號碼：

<ol>
  <li> Reverse the order of the digits in the number.</li>
  <li> 取第一個、第三個 ... 以及反轉數字中的每隔一個奇數，並將它們相加以形成部分和 s1</li>
  <li> 取倒數第二個、第四個 … 以及反轉數字中每隔一個的偶數：</li>
    <ol>
      <li>Multiply each digit by two and sum the digits if the answer is greater than nine to form partial sums for the even digits.</li>
      <li>將偶數位的部分和相加以形成 s2。</li>
    </ol>
  <li>如果 s1 + s2 以零結尾，則原始號碼採用 Luhn 測試驗證的有效信用卡號碼的形式。</li>
</ol>

例如，如果試用號是 49927398716：

```bash
Reverse the digits:
  61789372994
Sum the odd digits:
  6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
The even digits:
    1, 8, 3, 2, 9
  Two times each even digit:
    2, 16, 6, 4, 18
  Sum the digits of each multiplication:
    2, 7, 6, 4, 9
  Sum the last:
    2 + 7 + 6 + 4 + 9 = 28 = s2

s1 + s2 = 70 which ends in zero which means that 49927398716 passes the Luhn test.
```

# --instructions--

編寫一個函數，用 Luhn 測試驗證一個數字。 如果它是一個有效數字，則返回 true。 否則，返回 false。

# --hints--

`luhnTest` 應該是一個函數。

```js
assert(typeof luhnTest === 'function');
```

`luhnTest("4111111111111111")` 應該返回一個布爾值。

```js
assert(typeof luhnTest('4111111111111111') === 'boolean');
```

`luhnTest("4111111111111111")` 應該返回 `true`。

```js
assert.equal(luhnTest('4111111111111111'), true);
```

`luhnTest("4111111111111112")` 應該返回 `false`。

```js
assert.equal(luhnTest('4111111111111112'), false);
```

`luhnTest("49927398716")` 應該返回 `true`。

```js
assert.equal(luhnTest('49927398716'), true);
```

`luhnTest("49927398717")` 應該返回 `false`。

```js
assert.equal(luhnTest('49927398717'), false);
```

`luhnTest("1234567812345678")` 應該返回 `false`。

```js
assert.equal(luhnTest('1234567812345678'), false);
```

`luhnTest("1234567812345670")` 應該返回 `true`。

```js
assert.equal(luhnTest('1234567812345670'), true);
```

# --seed--

## --seed-contents--

```js
function luhnTest(str) {

}
```

# --solutions--

```js
function luhnTest(str) {
  var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  var counter = 0;
  var incNum;
  var odd = false;
  var temp = String(str).replace(/[^\d]/g, '');
  if (temp.length == 0) return false;
  for (var i = temp.length - 1; i >= 0; --i) {
    incNum = parseInt(temp.charAt(i), 10);
    counter += (odd = !odd) ? incNum : luhnArr[incNum];
  }
  return counter % 10 == 0;
}
```
