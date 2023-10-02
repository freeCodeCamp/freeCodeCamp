---
id: 56533eb9ac21ba0edf2244ac
title: 數字遞增
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

使用 `++`，我們可以很容易地對變量進行<dfn>自增</dfn>或者 +1 運算。

```js
i++;
```

等效於：

```js
i = i + 1;
```

**注意：**`i++;` 這種寫法省去了書寫等號的必要。

# --instructions--

修改代碼，使用 `++` 來對變量 `myVar` 進行自增操作。

# --hints--

`myVar` 應該等於 `88`。

```js
assert(myVar === 88);
```

不應該使用賦值運算符。

```js
assert(
  /let\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2})/.test(code)
);
```

應該使用 `++` 運算符。

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

不應該修改註釋上面的代碼。

```js
assert(/let myVar = 87;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
let myVar = 87;

// Only change code below this line
myVar = myVar + 1;
```

# --solutions--

```js
let myVar = 87;
myVar++;
```
