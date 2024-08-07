---
id: 5a23c84252665b21eecc7ec5
title: Josephus problem
challengeType: 1
forumTopicId: 302294
dashedName: josephus-problem
---

# --description--

Josephus problem is a math puzzle with a grim description: $n$ prisoners are standing on a circle, sequentially numbered from $0$ to $n-1$.

An executioner walks along the circle, starting from prisoner $0$, removing every $k$-th prisoner and killing him.

As the process goes on, the circle becomes smaller and smaller, until only one prisoner remains, who is then freed.

For example, if there are $n=5$ prisoners and $k=2$, the order the prisoners are killed in (let's call it the "killing sequence") will be 1, 3, 0, and 4, and the survivor will be #2.

Given any $n, k > 0$, find out which prisoner will be the final survivor.

In one such incident, there were 41 prisoners and every 3<sup>rd</sup> prisoner was being killed ($k=3$).

Among them was a clever chap name Josephus who worked out the problem, stood at the surviving position, and lived on to tell the tale.

Which number was he?

# --instructions--

Write a function that takes the initial number of prisoners and `k` as parameters and returns the number of the prisoner that survives.

# --hints--

`josephus` should be a function.

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)` should return a number.

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)` should return `28`.

```js
assert.equal(josephus(30, 3), 28);
```

`josephus(30,5)` should return `2`.

```js
assert.equal(josephus(30, 5), 2);
```

`josephus(20,2)` should return `8`.

```js
assert.equal(josephus(20, 2), 8);
```

`josephus(17,6)` should return `1`.

```js
assert.equal(josephus(17, 6), 1);
```

`josephus(29,4)` should return `1`.

```js
assert.equal(josephus(29, 4), 1);
```

# --seed--

## --seed-contents--

```js
function josephus(init, kill) {

}
```

# --solutions--

```js
function josephus(init, kill) {
  const arr = Array.from(Array(init).keys());
  let curr = -1
  while (arr.length > 1) {
    curr = (curr + kill) % arr.length;
    arr.splice(curr, 1);
    curr--;
  }
  return arr[0];
}
```
