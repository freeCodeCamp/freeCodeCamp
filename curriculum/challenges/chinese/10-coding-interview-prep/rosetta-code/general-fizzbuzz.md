---
id: 5a23c84252665b21eecc7e78
title: 一般的FizzBu​​zz
challengeType: 5
videoUrl: ''
---

# --description--

编写[FizzBu​​zz](http://rosettacode.org/wiki/FizzBuzz)的通用版本，适用于任何因子列表及其单词。这基本上是一种“fizzbuzz”实现，其中游戏规则被提供给用户。创建一个实现此功能的函数。该函数应该有两个参数。第一个是带有FizzBu​​zz规则的数组。例如： `[ [3,"Fizz"] , [5,"Buzz"] ]` 。此indcates该`Fizz` ，如果数量是3的倍数，并应被打印`Buzz`如果是5的倍数。如果它是两则字符串应该在阵列中指定的顺序被连结的倍数。在这种情况下，如果数字是3和5的倍数，则为`FizzBuzz` 。第二个参数是函数应返回如上所述的字符串的数字。

# --hints--

`genFizzBuzz`应该是一个功能。

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")`应该返回一个类型。

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

`genFizzBuzz("+JSON.stringify(tests[0][0])+","+tests[0][1]+")`应返回`""+results[0]+""` 。

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

`genFizzBuzz("+JSON.stringify(tests[1][0])+","+tests[1][1]+")`应返回`""+results[1]+""` 。

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

`genFizzBuzz("+JSON.stringify(tests[2][0])+","+tests[2][1]+")`应返回`""+results[2]+""` 。

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

`genFizzBuzz("+JSON.stringify(tests[3][0])+","+tests[3][1]+")`应返回`""+results[3]+""` 。

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

`genFizzBuzz("+JSON.stringify(tests[4][0])+","+tests[4][1]+")`应该返回`""+results[4]+""` 。

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

`genFizzBuzz("+JSON.stringify(tests[5][0])+","+tests[5][1]+")`应返回`""+results[5]+""` 。

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

`genFizzBuzz("+JSON.stringify(tests[6][0])+","+tests[6][1]+")`应该返回`""+results[6]+""` 。

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

# --solutions--

