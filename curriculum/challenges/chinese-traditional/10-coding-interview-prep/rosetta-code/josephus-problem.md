---
id: 5a23c84252665b21eecc7ec5
title: Josephus problem
challengeType: 5
forumTopicId: 302294
dashedName: josephus-problem
---

# --description--

[Josephus problem](https://en.wikipedia.org/wiki/Josephus problem) is a math puzzle with a grim description: $n$ prisoners are standing on a circle, sequentially numbered from $0$ to $n-1$.

An executioner walks along the circle, starting from prisoner $0$, removing every $k$-th prisoner and killing him.

As the process goes on, the circle becomes smaller and smaller, until only one prisoner remains, who is then freed.

For example, if there are $n=5$ prisoners and $k=2$, the order the prisoners are killed in (let's call it the "killing sequence") will be 1, 3, 0, and 4, and the survivor will be #2.

Given any $n, k > 0$, find out which prisoner will be the final survivor.

In one such incident, there were 41 prisoners and every 3<sup>rd</sup> prisoner was being killed ($k=3$).

Among them was a clever chap name Josephus who worked out the problem, stood at the surviving position, and lived on to tell the tale.

Which number was he?

# --instructions--

Write a function that takes the initial number of prisoners and 'k' as parameter and returns the number of the prisoner that survives.

# --hints--

`josephus` should be a function.

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)` should return a number.

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)` should return `29`.

```js
assert.equal(josephus(30, 3), 29);
```

`josephus(30,5)` should return `3`.

```js
assert.equal(josephus(30, 5), 3);
```

`josephus(20,2)` should return `9`.

```js
assert.equal(josephus(20, 2), 9);
```

`josephus(17,6)` should return `2`.

```js
assert.equal(josephus(17, 6), 2);
```

`josephus(29,4)` should return `2`.

```js
assert.equal(josephus(29, 4), 2);
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
  var Josephus = {
    init: function(n) {
      this.head = {};
      var current = this.head;
      for (var i = 0; i < n - 1; i++) {
        current.label = i + 1;
        current.next = {
          prev: current
        };
        current = current.next;
      }
      current.label = n;
      current.next = this.head;
      this.head.prev = current;
      return this;
    },
    kill: function(spacing) {
      var current = this.head;
      while (current.next !== current) {
        for (var i = 0; i < spacing - 1; i++) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current = current.next;
      }
      return current.label;
    }
  }

  return Josephus.init(init).kill(kill)
}
```
