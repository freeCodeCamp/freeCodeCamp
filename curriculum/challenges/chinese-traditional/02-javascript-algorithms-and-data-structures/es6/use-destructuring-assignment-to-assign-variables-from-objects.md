---
id: 587d7b89367417b2b2512b49
title: 使用解構賦值從對象中分配變量
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

可以給解構的值賦予一個新的變量名， 通過在賦值的時候將新的變量名放在冒號後面來實現。

還是以上個例子的對象來舉例：

```js
const user = { name: 'John Doe', age: 34 };
```

這是指定新的變量名的例子：

```js
const { name: userName, age: userAge } = user;
```

你可以這麼理解這段代碼：獲取 `user.name` 的值，將它賦給一個新的變量 `userName`，等等。 `userName` 的值將是字符串 `John Doe`，`userAge` 的值將是數字 `34`。

# --instructions--

使用解構賦值語句替換兩個賦值語句。 將 `HIGH_TEMPERATURES` 的 `today` 和 `tomorrow` 的值賦值給 `highToday` 和 `highTomorrow`。

# --hints--

應該移除 ES5 賦值語句。

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

應該使用解構賦值語句創建 `highToday` 變量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

應該使用解構賦值語句創建 `highTomorrow` 變量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` 應該等於 `77`，`highTomorrow` 應該等於 `80`。

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
