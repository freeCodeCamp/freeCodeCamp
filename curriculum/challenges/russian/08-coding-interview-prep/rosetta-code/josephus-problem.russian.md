---
title: Josephus problem
id: 5a23c84252665b21eecc7ec5
challengeType: 5
forumTopicId: 302294
localeTitle: Проблема Иосифа
---

## Description
<section id='description'>
<a href="https://en.wikipedia.org/wiki/Josephus problem">Проблема Джозефуса</a> - математическая головоломка с мрачным описанием: $ n $ заключенные стоят по кругу, последовательно пронумерованные от $ 0 $ до $ n-1 $. Палач ходит по кругу, начиная с заключенного $ 0 $, удаляя каждого $ k $ -ного заключенного и убивая его. По мере того как процесс продолжается, круг становится все меньше и меньше, пока остается только один заключенный, который затем освобождается. Например, если есть $ n = 5 $ заключенных и $ k = 2 $, то порядок, в котором заключенные будут убиты (назовем его «последовательностью убийства»), будет 1, 3, 0 и 4, а оставшийся в живых будет # 2. Учитывая любые <big>$ n, k&gt; 0 $</big> , выясните, кто из заключенных будет последним выжившим. В одном из таких инцидентов было 41 заключенный, и каждый 3- <sup>й</sup> заключенный был убит ( <big>$ k = 3 $</big> ). Среди них было умное имя Джофа, который разработал проблему, стоял в выжившем положении и продолжал рассказывать историю. Каким он был? Напишите функцию, которая берет начальное число заключенных и «k» в качестве параметра и возвращает число заключенного, который выживает.
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
