---
id: 587d7db4367417b2b2512b90
title: 同时用多种模式匹配文字字符串
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

使用正则表达式`/coding/`，你可以在其他字符串中查找`coding`。

这对于搜寻单个字符串非常有用，但仅限于一种匹配模式。 你可以使用 `alternation` 或 `OR` 操作符搜索多个模式： `|`

此操作符匹配操作符前面或后面的字符。 例如，如果你想匹配 `yes` 或 `no`，你需要的正则表达式是 `/yes|no/`。

你还可以匹配多个规则，这可以通过添加更多的匹配模式来实现。 这些匹配模式将包含更多的 `OR` 操作符来分隔它们，比如`/yes|no|maybe/`。

# --instructions--

完成正则表达式 `petRegex` 以匹配 `dog`、`cat`、`bird` 或者 `fish`。

# --hints--

对于字符串 `John has a pet dog.`，你的正则表达式`petRegex` 应该返回 `true`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

对于字符串 `Emma has a pet rock.`，你的正则表达式 `petRegex` 的应该返回 `false`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

对于字符串 `Emma has a pet bird.`，你的正则表达式 `petRegex` 应该返回 `true`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

对于字符串 `Liz has a pet cat.`，你的正则表达式 `petRegex` 应该返回 `true`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

对于字符串 `Kara has a pet dolphin.`，你的正则表达式 `petRegex` 应该返回 `false`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

对于字符串 `Alice has a pet fish.`，你的正则表达式 `petRegex` 应该返回 `true`。

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

对于字符串 `Jimmy has a pet computer.`，你的正则表达式 `petRegex` 应该返回 `false`。

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
