---
id: aff0395860f5d3034dc0bfc9
title: 電話號碼檢查器
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

如果傳入的字符串是一個有效的美國電話號碼格式，則返回 `true`。

只要是有效的美國電話號碼的格式，用戶可以按照他們的方式填寫表單中的電話號碼。 以下是一些正確的例子（其他格式變形請參考以下例子）：

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

在這個挑戰中，參數可能是 `800-692-7753` 或者 `8oo-six427676;laskdjf` 的號碼。 你的任務是根據上面不同的格式組合，判斷它是否爲有效的電話號碼。 其中，地區碼（電話號碼中的前三位）是必須的。 如果提供國家代碼，則國家代碼只能爲 `1`。 如果傳入的參數是有效的美國電話號碼就返回 `true`，否則返回 `false`。

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

`telephoneCheck("11 555-555-5555")` 應該返回 `false`。

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
