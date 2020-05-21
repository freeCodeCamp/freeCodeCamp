---
title: Josephus problem
id: 5a23c84252665b21eecc7ec5
challengeType: 5
isHidden: false
forumTopicId: 302294
---

## Description
<section id='description'>
<a href="https://en.wikipedia.org/wiki/Josephus problem" target="_blank">Josephus problem</a> is a math puzzle with a grim description: $n$ prisoners are standing on a circle, sequentially numbered from $0$ to $n-1$.
An executioner walks along the circle, starting from prisoner $0$, removing every $k$-th prisoner and killing him.
As the process goes on, the circle becomes smaller and smaller, until only one prisoner remains, who is then freed.
For example, if there are $n=5$ prisoners and $k=2$, the order the prisoners are killed in (let's call it the "killing sequence") will be 1, 3, 0, and 4, and the survivor will be #2.
Given any  <big>$n, k > 0$</big>,  find out which prisoner will be the final survivor.
In one such incident, there were 41 prisoners and every 3<sup>rd</sup> prisoner was being killed  (<big>$k=3$</big>).
Among them was a clever chap name Josephus who worked out the problem, stood at the surviving position, and lived on to tell the tale.
Which number was he?
</section>

## Instructions
<section id='instructions'>
Write a function that takes the initial number of prisoners and 'k' as parameter and returns the number of the prisoner that survives.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>josephus</code> should be a function.
    testString: assert(typeof josephus=='function');
  - text: <code>josephus(30,3)</code> should return a number.
    testString: assert(typeof josephus(30,3)=='number');
  - text: <code>josephus(30,3)</code> should return <code>29</code>.
    testString: assert.equal(josephus(30,3),29);
  - text: <code>josephus(30,5)</code> should return <code>3</code>.
    testString: assert.equal(josephus(30,5),3);
  - text: <code>josephus(20,2)</code> should return <code>9</code>.
    testString: assert.equal(josephus(20,2),9);
  - text: <code>josephus(17,6)</code> should return <code>2</code>.
    testString: assert.equal(josephus(17,6),2);
  - text: <code>josephus(29,4)</code> should return <code>2</code>.
    testString: assert.equal(josephus(29,4),2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function josephus(init, kill) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


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

</section>
