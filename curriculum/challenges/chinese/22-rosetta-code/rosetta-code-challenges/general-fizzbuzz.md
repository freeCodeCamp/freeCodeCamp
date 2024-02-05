---
id: 5a23c84252665b21eecc7e78
title: 一般的 FizzBu​​zz
challengeType: 1
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

Write a generalized version of <a href="https://rosettacode.org/wiki/FizzBuzz" target="_blank" rel="noopener noreferrer nofollow">FizzBuzz</a> that works for any list of factors, along with their words.

这基本上是一个“fizzbuzz”实现，其中将游戏规则由用户提供。 创建一个函数来实现这一点。 该函数应该有两个参数。

第一个将是具有 FizzBu​​zz 规则的数组。 例如：`[ [3, "Fizz"] , [5, "Buzz"] ]`。

这表示如果数字是 3 的倍数，则应打印 `Fizz`，如果是 5 的倍数，则应打印 `Buzz`。 如果它是两者的倍数，则应按照数组中指定的顺序连接字符串。 在这种情况下，如果数字是 3 和 5 的倍数，则为 `FizzBuzz`。

第二个参数是函数应该返回一个字符串的数字，如上所述。

# --hints--

`genFizzBuzz` 应该是一个函数。

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` 应该返回一个字符串。

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` 应该返回 `"Fizz"`。

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)` 应该返回 `"Buzz"`。

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)` 应该返回 `"Buzz"`。

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)` 应该返回 `"13"`。

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)` 应该返回 `"BuzzFizz"`。

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)` 应该返回 `"FizzBuzz"`。

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)` 应该返回 `"FizzBuzzBaxx"`。

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
