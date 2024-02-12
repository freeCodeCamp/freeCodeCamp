---
id: 5e9ddb06ec35240f39657419
title: FizzBuzz 問題
challengeType: 1
forumTopicId: 385370
dashedName: fizzbuzz
---

# --description--

Write a program that generates an array of integers from 1 to 100 (inclusive). But:

<ul>
    <li>for multiples of 3, add <code>"Fizz"</code> to the array instead of the number</li>
    <li>5 の倍数の場合は、数値ではなく、<code>"Buzz"</code> を配列に 追加します</li>
    <li>3 と 5 の倍数の場合は、数値ではなく、<code>"FizzBuzz"</code> を配列に追加します</li>
</ul>

# --instructions--

上記のルールに基づく結果を含む配列を返すプログラムを記述してください。

# --hints--

`fizzBuzz` は関数とします。

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` は配列を返す必要があります。

```js
assert(Array.isArray(fizzBuzz()) == true);
```

3 でのみ割り切れる数値は、`"Fizz"` を返す必要があります。

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

5 でのみ割り切れる数値は、`"Buzz"` を返す必要があります。

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

3 と 5 の両方で割り切れる数値は、`"FizzBuzz"` を返す必要があります。

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

3 または 5 のいずれでも割り切れない数値は、その数値自体を返す必要があります。

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
