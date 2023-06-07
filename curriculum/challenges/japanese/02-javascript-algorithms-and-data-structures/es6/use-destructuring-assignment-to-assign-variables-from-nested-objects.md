---
id: 587d7b89367417b2b2512b4a
title: 分割代入を使用してネストされたオブジェクトから変数を代入する
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

前の 2 つのレッスンと同じ原則を使用して、ネストされたオブジェクトから値を分割することができます。

前の例と同様のオブジェクトを使用します。

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

オブジェクトのプロパティの値を抽出し、同じ名前の変数に代入する方法を次に示します。

```js
const { johnDoe: { age, email }} = user;
```

オブジェクトのプロパティの値を異なる名前の変数に代入する方法を次に示します。

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

2 つの代入を同等の分割代入に置き換えてください。 ここでも、`LOCAL_FORECAST` オブジェクトの `today.low` と `today.high` の値を変数 `lowToday` と `highToday` に代入します。

# --hints--

ES5 の代入構文を削除する必要があります。

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

分割を使用して `lowToday` 変数を作成する必要があります。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

分割を使用して `highToday` 変数を作成する必要があります。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday,?\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` は `64` に等しくなり、`highToday` は `77` に等しくなる必要があります。

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
