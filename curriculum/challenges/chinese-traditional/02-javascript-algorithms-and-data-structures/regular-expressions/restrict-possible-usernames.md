---
id: 587d7db8367417b2b2512ba2
title: 限制可能的用戶名
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

用戶名在互聯網上隨處可見。 它們是用戶在自己喜歡的網站上的唯一身份。

需要檢索數據庫中的所有用戶名。 以下是用戶在創建用戶名時必須遵守的一些簡單規則。

1) 用戶名只能是數字字母字符。

2) 用戶名中的數字必須在最後。 數字可以有零個或多個。 用戶名不能以數字開頭。

3) 用戶名字母可以是小寫字母和大寫字母。

4) 用戶名長度必須至少爲兩個字符。 兩位用戶名只能使用字母。

# --instructions--

修改正則表達式 `userCheck` 以滿足上面列出的約束。

# --hints--

你的正則表達式應該匹配字符串 `JACK`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

你的正則表達式不應匹配字符串 `J`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

你的正則表達式應該匹配字符串 `Jo`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

你的正則表達式應該匹配字符串 `Oceans11`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

你的正則表達式應該匹配字符串 `RegexGuru`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

你的正則表達式不應匹配字符串 `007`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

你的正則表達式不應匹配字符串 `9`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

你的正則表達式不應匹配字符串 `A1`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

你的正則表達式不應匹配字符串 `BadUs3rnam3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

你的正則表達式應該匹配字符串 `Z97`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

你的正則表達式不應匹配字符串 `c57bT3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

你的正則表達式應該匹配字符串 `AB1`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

你的正則表達式不應匹配字符串 `J%4`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
