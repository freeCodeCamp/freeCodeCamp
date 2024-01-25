---
id: 5e9ddb06ec35240f39657419
title: FizzBuzz
challengeType: 1
forumTopicId: 385370
dashedName: fizzbuzz
---

# --description--

Write a program that generates an array of integers from 1 to 100 (inclusive). But:

<ul>
    <li>for multiples of 3, add <code>"Fizz"</code> to the array instead of the number</li>
    <li>對於 5 的倍數，將 <code>"Buzz"</code> 添加到數組而不是數字</li>
    <li>對於 3 和 5 的倍數，將 <code>"FizzBuzz"</code> 添加到數組而不是數字</li>
</ul>

# --instructions--

您的程序應該返回一個包含基於上述規則的結果的數組。

# --hints--

`fizzBuzz` 應該是一個函數。

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` 應該返回一個數組。

```js
assert(Array.isArray(fizzBuzz()) == true);
```

只能被 3 整除的數字應該返回 `"Fizz"`。

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

只能被 5 整除的數字應該返回 `"Buzz"`。

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

可被 3 和 5 整除的數字應返回 `"FizzBuzz"`。

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

不能被 3 或 5 整除的數字應返回數字本身。

```js
assert.equal(fizzBuzz()[12], 13);
```

# --seed--

## --seed-contents--

```js
function fizzBuzz() {

}
```

# --solutions--

```js
function fizzBuzz() {
    let res=[];
    for (let i =1; i < 101; i++) {
        if (i % 3 === 0  && i % 5 === 0) {
            res.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            res.push("Fizz");
        }
        else if (i % 5 === 0) {
            res.push("Buzz");
        } 
        else {
            res.push(i);
        }
    }
    return res;
}
```
