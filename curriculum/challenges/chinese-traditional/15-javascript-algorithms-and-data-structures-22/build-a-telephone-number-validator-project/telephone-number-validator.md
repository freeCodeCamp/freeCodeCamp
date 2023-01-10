---
id: aff0395860f5d3034dc0bfc9
title: 構建電話號碼驗證器
challengeType: 5
forumTopicId: 16090
dashedName: build-a-telephone-number-validator
---

# --description--

如果傳入的字符串是一個有效的美國電話號碼，則返回 `true`。

用戶可以按照他們選擇的方式填寫表單字段，只要它是有效美國號碼的格式即可。 以下是美國電話號碼的有效格式示例（其他格式變化，請參考下面的測試）：

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

在這個挑戰中，傳入的字符串可能是例如 `800-692-7753` 或者 `8oo-six427676;laskdjf` 的號碼。 你的任務是根據上面不同的格式組合，判斷它是否爲有效的電話號碼。 地區代碼是必需的。 如果提供了國家/地區代碼，則必須確認國家/地區代碼爲`1` 。 如果傳入的字符串是有效的美國電話號碼，則返回 `true`，否則返回 `false` 。

# --hints--

`telephoneCheck("555-555-5555")` 應返回一個布爾值。

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` 應返回 `true`。

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` 應返回 `true`。

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` 應返回 `true`。

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` 應返回 `true`。

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` 應返回 `true`。

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` 應返回 `true`。

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` 應返回 `false`。

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` 應返回 `false`。

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` 應返回 `false`。

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` 應返回 `true`。

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` 應返回 `true`。

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` 應返回 `false`。

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` 應返回 `false`。

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` 應返回 `false`。

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` 應返回 `false`。

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` 應返回 `false`。

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` 應返回 `false`。

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` 應返回 `false`。

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` 應返回 `false`。

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` 應返回 `false`。

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` 應返回 `false`。

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` 應返回 `false`。

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` 應返回 `false`。

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` 應返回 `false`。

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` 應返回 `false`。

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` 應返回 `false`。

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` 應返回 `false`。

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

`telephoneCheck("11 555-555-5555")` 應返回 `false`。

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
