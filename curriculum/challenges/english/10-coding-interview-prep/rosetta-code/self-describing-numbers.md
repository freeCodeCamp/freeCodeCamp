---
id: 5eaf48389ee512d4d103684b
title: Self Describing Numbers
challengeType: 1
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

There are several so-called "self-describing" or "self-descriptive" integers.

An integer is said to be "self-describing" if it has the property that, when digit positions are labeled 0 to N-1, the digit in each position is equal to the number of times that digit appears in the number.

For example, **2020** is a four-digit self describing number:

<ul>
    <li> position 0 has value 2 and there are two 0s in the number; </li>
    <li> position 1 has value 0 and there are no 1s in the number; </li>
    <li> position 2 has value 2 and there are two 2s; </li>
    <li> position 3 has value 0 and there are zero 3s; </li>
</ul>

Self-describing numbers &lt; 100,000,000 are: 1210, 2020, 21200, 3211000, 42101000.

# --instructions--

Write a function that takes a positive integer as a parameter. If it is self-describing return true. Otherwise, return false.

# --hints--

`isSelfDescribing` should be a function.

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` should return a boolean.

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` should return `true`.

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` should return `false`.

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` should return `true`.

```js
assert.equal(isSelfDescribing(3211000), true);
```

# --seed--

## --seed-contents--

```js
function isSelfDescribing(n) {

}
```

# --solutions--

```js
function isSelfDescribing(n) {
    let digits = String(n).split("");
    digits = digits.map(function(e) {return parseInt(e)});
    let count = digits.map((x) => {return 0})
    digits.forEach((d) =>{
        if (d >= count.length) {
            return false
        }
        count[d] += 1;
    });

     if (digits === count) {
        return true;
    }
    if (digits.length != count.length) {
        return false;
    }
    
    for (let i=0; i< digits.length; i++){
      if (digits[i] !== count[i]) {
        return false;
      }
    }
    return true;
}
```
