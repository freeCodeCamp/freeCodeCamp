---
id: 587d7db8367417b2b2512ba2
title: ユーザー名の候補を制限する
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

ユーザー名はインターネット上の至るところで使用されています。 これらは、お気に入りのサイトでユーザーを一意に識別するものです。

データベース内ですべてのユーザー名を確認する必要があります。 ユーザー名を作成する際に、ユーザーが従わなければならない簡単なルールをいくつか示します。

1) ユーザー名には英数字のみが使用できます。

2) ユーザー名に数字を付ける場合は末尾にのみ付けることができます。 末尾には 0 個以上の数字を付けることができます。 ユーザー名を数字で始めることはできません。

3) ユーザー名には小文字と大文字が使用できます。

4) ユーザー名の長さは 2 文字以上にする必要があります。 ユーザー名を 2 文字にする場合は、文字としてアルファベットのみが使用できます。

# --instructions--

上記の制約に合うように正規表現 `userCheck` を変更してください。

# --hints--

正規表現は文字列 `JACK` にマッチする必要があります。

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

正規表現は文字列 `J` にマッチしない必要があります。

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

正規表現は文字列 `Jo` にマッチする必要があります。

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

正規表現は文字列 `Oceans11` にマッチする必要があります。

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

正規表現は文字列 `RegexGuru` にマッチする必要があります。

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

正規表現は文字列 `007` にマッチしない必要があります。

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

正規表現は文字列 `9` にマッチしない必要があります。

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

正規表現は文字列 `A1` にマッチしない必要があります。

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

正規表現が文字列 `BadUs3rnam3` にマッチしない必要があります。

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

正規表現は文字列 `Z97` にマッチする必要があります。

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

正規表現は文字列 `c57bT3` にマッチしない必要があります。

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

正規表現は文字列 `AB1` にマッチする必要があります。

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

正規表現は文字列 `J%4` にマッチしない必要があります。

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
