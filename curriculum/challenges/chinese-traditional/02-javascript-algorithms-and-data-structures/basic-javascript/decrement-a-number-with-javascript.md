---
id: 56533eb9ac21ba0edf2244ad
title: 數字遞減
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

使用自減符號 `--`，你可以很方便地對一個變量執行<dfn>自減</dfn>或者 -1 運算。

```js
i--;
```

等效於：

```js
i = i - 1;
```

**注意：**`i--;` 這種寫法省去了書寫等號的必要。

# --instructions--

修改代碼，使用 `--` 符號對 `myVar` 執行自減操作。

# --hints--

`myVar` 應該等於`10`。

```js
assert(myVar === 10);
```

應該修改 `myVar = myVar - 1;`。

```js
assert(!code.match(/myVar\s*=\s*myVar\s*[-]\s*1.*?;?/));
```

你不應將 `10` 分配給 `myVar`。

```js
assert(!code.match(/myVar\s*=\s*10.*?;?/));
```

應該對 `myVar` 使用 `--` 運算符。

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

你不應該修改註釋上面的代碼。

```js
assert(/let myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
let myVar = 11;
myVar--;
```
