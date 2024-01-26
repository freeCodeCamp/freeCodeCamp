---
id: 5a23c84252665b21eecc7e78
title: 一般的 FizzBu​​zz
challengeType: 1
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

Write a generalized version of <a href="https://rosettacode.org/wiki/FizzBuzz" target="_blank" rel="noopener noreferrer nofollow">FizzBuzz</a> that works for any list of factors, along with their words.

這基本上是一個“fizzbuzz”實現，其中將遊戲規則由用戶提供。 創建一個函數來實現這一點。 該函數應該有兩個參數。

第一個將是具有 FizzBu​​zz 規則的數組。 例如：`[ [3, "Fizz"] , [5, "Buzz"] ]`。

這表示如果數字是 3 的倍數，則應打印 `Fizz`，如果是 5 的倍數，則應打印 `Buzz`。 如果它是兩者的倍數，則應按照數組中指定的順序連接字符串。 在這種情況下，如果數字是 3 和 5 的倍數，則爲 `FizzBuzz`。

第二個參數是函數應該返回一個字符串的數字，如上所述。

# --hints--

`genFizzBuzz` 應該是一個函數。

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` 應該返回一個字符串。

```js
assert(
  typeof genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    6
  ) == 'string'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` 應該返回 `"Fizz"`。

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    6
  ),
  'Fizz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)` 應該返回 `"Buzz"`。

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    10
  ),
  'Buzz'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)` 應該返回 `"Buzz"`。

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    12
  ),
  'Buzz'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)` 應該返回 `"13"`。

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    13
  ),
  '13'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)` 應該返回 `"BuzzFizz"`。

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    15
  ),
  'BuzzFizz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)` 應該返回 `"FizzBuzz"`。

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    15
  ),
  'FizzBuzz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)` 應該返回 `"FizzBuzzBaxx"`。

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz'],
      [7, 'Baxx']
    ],
    105
  ),
  'FizzBuzzBaxx'
);
```

# --seed--

## --seed-contents--

```js
function genFizzBuzz(rules, num) {

}
```

# --solutions--

```js
function genFizzBuzz(rules, num) {
  let res='';
  rules.forEach(function (e) {
    if(num % e[0] == 0)
      res+=e[1];
  })

  if(res==''){
    res=num.toString();
  }

  return res;
}
```
