---
id: aff0395860f5d3034dc0bfc9
title: 電話番号の検証
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

渡された文字列が有効な米国の電話番号と思われる場合は、`true` を返してください。

ユーザーは、有効な米国番号の形式になっている限り、任意の方法でフォームフィールドに入力することができます。 以下は、米国の電話番号の有効な形式の例です (他のバリエーションについては、以下のテストを参照してください)。

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

このチャレンジでは、`800-692-7753` や `8oo-six427676;laskdjf` などの文字列が渡されます。 上記に示した形式の任意の組み合わせに基づいて、米国の電話番号を有効と判断するか、または拒否してください。 市外局番は必須です。 国コードが指定されている場合は、国コードが `1` であることを確認する必要があります。 文字列が有効な米国の電話番号の場合は `true` を返してください。それ以外の場合は `false` を返してください。

# --hints--

`telephoneCheck("555-555-5555")` はブール値を返す必要があります。

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` は `true` を返す必要があります。

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` は `true` を返す必要があります。

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` は `true` を返す必要があります。

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` は `true` を返す必要があります。

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` は `true` を返す必要があります。

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` は `true` を返す必要があります。

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` は `false` を返す必要があります。

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` は `false` を返す必要があります。

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` は `false` を返す必要があります。

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` は `true` を返す必要があります。

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` は `true` を返す必要があります。

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` は `false` を返す必要があります。

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` は `false` を返す必要があります。

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` は `false` を返す必要があります。

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` は `false` を返す必要があります。

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` は `false` を返す必要があります。

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` は `false` を返す必要があります。

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` は `false` を返す必要があります。

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` は `false` を返す必要があります。

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` は `false` を返す必要があります。

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` は `false` を返す必要があります。

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` は `false` を返す必要があります。

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` は `false` を返す必要があります。

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` は `false` を返す必要があります。

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` は `false` を返す必要があります。

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` は `false` を返す必要があります。

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` は `false` を返す必要があります。

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

`telephoneCheck("11 555-555-5555")` は `false` を返す必要があります。

```js
assert(telephoneCheck('11 555-555-5555') === false);
```

# --seed--

## --seed-contents--

```js
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```

# --solutions--

```js
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```
