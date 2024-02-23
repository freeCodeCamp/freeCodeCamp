---
id: 5900f46c1000cf542c50ff7e
title: '問題256：無榻榻米房間'
challengeType: 1
forumTopicId: 301904
dashedName: problem-256-tatami-free-rooms
---

# --description--

Tatami are rectangular mats, used to completely cover the floor of a room, without overlap.

假設唯一可用的榻榻米尺寸爲1×2，那麼可以覆蓋的房間的形狀和大小顯然存在一些限制。

For this problem, we consider only rectangular rooms with integer dimensions $a$, $b$ and even size $s = a \times b$. We use the term 'size' to denote the floor surface area of the room, and — without loss of generality — we add the condition $a ≤ b$.

鋪設榻榻米時要遵循一條規則：四個不同墊子的角落必須相遇。 例如，考慮下面兩個4×4房間的安排：

<img class="img-responsive center-block" alt="two arrangements of mats in 4x4 room" src="https://cdn.freecodecamp.org/curriculum/project-euler/tatami-free-rooms.gif" style="background-color: white; padding: 10px;" />

The arrangement on the left is acceptable, whereas the one on the right is not: a red "<strong><span style="color: red;">X</span></strong>" in the middle, marks the point where four tatami meet.

Because of this rule, certain even-sized rooms cannot be covered with tatami: we call them tatami-free rooms. Further, we define $T(s)$ as the number of tatami-free rooms of size $s$.

The smallest tatami-free room has size $s = 70$ and dimensions 7×10. All the other rooms of size $s = 70$ can be covered with tatami; they are: 1×70, 2×35 and 5×14. Hence, $T(70) = 1$.

Similarly, we can verify that $T(1320) = 5$ because there are exactly 5 tatami-free rooms of size $s = 1320$: 20×66, 22×60, 24×55, 30×44 and 33×40. In fact, $s = 1320$ is the smallest room-size $s$ for which $T(s) = 5$.

Find the smallest room-size $s$ for which $T(s) = 200$.

# --hints--

`tatamiFreeRooms()` should return `85765680`.

```js
assert.strictEqual(tatamiFreeRooms(), 85765680);
```

# --seed--

## --seed-contents--

```js
function tatamiFreeRooms() {

  return true;
}

tatamiFreeRooms();
```

# --solutions--

```js
// solution required
```
