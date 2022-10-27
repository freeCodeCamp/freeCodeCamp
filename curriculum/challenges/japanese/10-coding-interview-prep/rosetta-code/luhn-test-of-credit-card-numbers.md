---
id: 5ea28156e79528a9ab248f27
title: クレジットカード番号のLuhnテスト
challengeType: 1
forumTopicId: 385284
dashedName: luhn-test-of-credit-card-numbers
---

# --description--

The Luhn test is used by some credit card companies to distinguish valid credit card numbers from what could be a random selection of digits.

Luhnテストで検証可能なクレジットカード番号を使用している企業が発行するカード番号は、以下のテストをパスします。

<ol>
  <li> 数字の桁の順序を逆にします。</li>
  <li> この逆順にした数字の 1 番目、3 番目、... さらに他のすべての奇数桁を取り、それらを合計して部分和 s1 を形成します</li>
  <li> この逆順にした数字の 2 番目、4 番目、さらに他のすべての偶数桁を取ります。</li>
    <ol>
      <li>各数字を 2 倍し、その結果が 9 より大きかった場合は各桁を合計して、偶数桁の部分和を形成します。</li>
      <li>偶数桁の部分和を合計して s2 を形成します。</li>
    </ol>
  <li>s1 + s2 の答がゼロで終わる場合、元の番号は Luhn テストで検証された有効なクレジットカード番号の形式となっています。</li>
</ol>

たとえば、トライアル番号が 49927398716の場合:

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

Luhnテストで数値を検証する関数を記述してください。 有効な数値の場合は true を返します。 それ以外は、falseを返します。

# --hints--

`luhnTest` は関数とします。

```js
assert(typeof luhnTest === 'function');
```

`luhnTest("4111111111111111")` はブール値を返す必要があります。

```js
assert(typeof luhnTest('4111111111111111') === 'boolean');
```

`luhnTest("4111111111111111")` は `true` を返す必要があります。

```js
assert.equal(luhnTest('4111111111111111'), true);
```

`luhnTest("4111111111111112")` は `false` を返す必要があります。

```js
assert.equal(luhnTest('4111111111111112'), false);
```

`luhnTest("49927398716")` は `true` を返す必要があります。

```js
assert.equal(luhnTest('49927398716'), true);
```

`luhnTest("49927398717")` は `false` を返す必要があります。

```js
assert.equal(luhnTest('49927398717'), false);
```

`luhnTest("1234567812345678")` は `false` を返す必要があります。

```js
assert.equal(luhnTest('1234567812345678'), false);
```

`luhnTest("1234567812345670")` は `true` を返す必要があります。

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
