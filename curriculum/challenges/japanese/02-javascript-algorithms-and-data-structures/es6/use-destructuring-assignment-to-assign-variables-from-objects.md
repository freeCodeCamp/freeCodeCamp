---
id: 587d7b89367417b2b2512b49
title: 分割代入を使用してオブジェクトから変数を代入する
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

分割を使用すると、値を抽出する際に新しい変数名を割り当てることができます。 これを行うには、値を代入する際にコロンの後に新しい名前を指定します。

前の例と同じオブジェクトを使用します。

```js
const user = { name: 'John Doe', age: 34 };
```

代入で新しい変数名を指定する方法を次に示します。

```js
const { name: userName, age: userAge } = user;
```

「`user.name` の値を抽出し、その値を `userName` という名前の新しい変数に代入する」と解釈することもできます。 `userName` の値は文字列 `John Doe` になり、`userAge`の値は `34` になります。

# --instructions--

2 つの代入を同等の分割代入に置き換えてください。 ここでも、`HIGH_TEMPERATURES` オブジェクトの `today` と `tomorrow` の値を変数 `highToday` と `highTomorrow` に代入する必要があります。

# --hints--

ES5 の代入構文を削除する必要があります。

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

分割を使用して `highToday` 変数を作成する必要があります。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

分割を使用して `highTomorrow` 変数を作成する必要があります。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` は `77` に等しくなり、`highTomorrow` は `80` に等しくなる必要があります。

```js
assert(highToday === 77 && highTomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
