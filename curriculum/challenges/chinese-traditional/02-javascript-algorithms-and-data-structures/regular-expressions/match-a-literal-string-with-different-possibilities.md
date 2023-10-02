---
id: 587d7db4367417b2b2512b90
title: 同時用多種模式匹配文字字符串
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

使用正則表達式`/coding/`，你可以在其他字符串中查找`coding`。

這對於搜尋單個字符串非常有用，但僅限於一種匹配模式。 你可以使用 `alternation` 或 `OR` 操作符搜索多個模式： `|`

此操作符匹配操作符前面或後面的字符。 例如，如果你想匹配 `yes` 或 `no`，你需要的正則表達式是 `/yes|no/`。

你還可以匹配多個規則，這可以通過添加更多的匹配模式來實現。 這些匹配模式將包含更多的 `OR` 操作符來分隔它們，比如`/yes|no|maybe/`。

# --instructions--

完成正則表達式 `petRegex` 以匹配 `dog`、`cat`、`bird` 或者 `fish`。

# --hints--

對於字符串 `John has a pet dog.`，你的正則表達式`petRegex` 應該返回 `true`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

對於字符串 `Emma has a pet rock.`，你的正則表達式 `petRegex` 的應該返回 `false`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

對於字符串 `Emma has a pet bird.`，你的正則表達式 `petRegex` 應該返回 `true`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

對於字符串 `Liz has a pet cat.`，你的正則表達式 `petRegex` 應該返回 `true`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

對於字符串 `Kara has a pet dolphin.`，你的正則表達式 `petRegex` 應該返回 `false`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

對於字符串 `Alice has a pet fish.`，你的正則表達式 `petRegex` 應該返回 `true`。

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

對於字符串 `Jimmy has a pet computer.`，你的正則表達式 `petRegex` 應該返回 `false`。

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
