---
id: aff0395860f5d3034dc0bfc9
title: 电话号码检查器
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

如果传入的字符串是一个有效的美国电话号码格式，则返回 `true`。

只要是有效的美国电话号码的格式，用户可以按照他们的方式填写表单中的电话号码。 以下是一些正确的例子（其他格式变形请参考以下例子）：

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

在这个挑战中，参数可能是 `800-692-7753` 或者 `8oo-six427676;laskdjf` 的号码。 你的任务是根据上面不同的格式组合，判断它是否为有效的电话号码。 其中，地区码（电话号码中的前三位）是必须的。 如果提供国家代码，则国家代码只能为 `1`。 如果传入的参数是有效的美国电话号码就返回 `true`，否则返回 `false`。

# --hints--

`telephoneCheck("555-555-5555")` 应返回一个布尔值。

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` 应返回 `true`。

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` 应返回 `true`。

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` 应返回 `true`。

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` 应返回 `true`。

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` 应返回 `true`。

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` 应返回 `true`。

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` 应返回 `false`。

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` 应返回 `false`。

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` 应返回 `false`。

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` 应返回 `true`。

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` 应返回 `true`。

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` 应返回 `false`。

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` 应返回 `false`。

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` 应返回 `false`。

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` 应返回 `false`。

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` 应返回 `false`。

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` 应返回 `false`。

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` 应返回 `false`。

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` 应返回 `false`。

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` 应返回 `false`。

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` 应返回 `false`。

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` 应返回 `false`。

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` 应返回 `false`。

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` 应返回 `false`。

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` 应返回 `false`。

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` 应返回 `false`。

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` 应返回 `false`。

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

`telephoneCheck("11 555-555-5555")` 应该返回 `false`。

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
