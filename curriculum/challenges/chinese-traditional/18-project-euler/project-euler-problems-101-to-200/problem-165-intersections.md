---
id: 5900f4111000cf542c50ff24
title: '問題165：交叉口'
challengeType: 1
forumTopicId: 301799
dashedName: problem-165-intersections
---

# --description--

A segment is uniquely defined by its two endpoints. By considering two line segments in plane geometry there are three possibilities: the segments have zero points, one point, or infinitely many points in common.

Moreover when two segments have exactly one point in common it might be the case that that common point is an endpoint of either one of the segments or of both. If a common point of two segments is not an endpoint of either of the segments it is an interior point of both segments.

如果T是L1和L2的唯一公共點，則我們將兩個段L1和L2的公共點T稱爲L1和L2的真實交點，並且T是兩個段的內點。

考慮三個段 $L_1$, $L_2$, 和 $L_3$:

$$\step{align}   & L_1: (27, 44) \\;\text{to}\\; (12, 32) \\\\
  & L_2: (46, 53) \\;\text{to}\\; (77, 62) \\\\   & L_3: (46, 70) \\;\text{to}\\; (22, 40) \\\\
\end{align}$$

可以驗證線路段 $L_2$ 和 $L_3$ 有一個真正的交叉點。 我們注意到，作爲L3的終點之一：（22,40）位於L1上，這不被認爲是真正的交點。 L1和L2沒有共同點。 So among the three line segments, we find one true intersection point.

Now let us do the same for 5000 line segments. To this end, we generate 20000 numbers using the so-called "Blum Blum Shub" pseudo-random number generator.

$$\stein{align}   & s_0 = 290797 \\\\
  & s_{n + 1} = s_n × s_n (\text{modulo}\\; 50515093\\\\   & t_n = s_n (\text{modulo}\\\; 500) \\\\\
\end{align}$$

要創建每個線段, 我們使用連續四個數字 $t_n$。 這就是說，第一個線段是：

($_t$1, $t_2$) to ($t_3$, $t_4$)

根據上述生成器計算的前四個數字應爲：27、144、12和232。 因此，第一部分爲（27、144）至（12、232）。

How many distinct true intersection points are found among the 5000 line segments?

# --hints--

`distinctIntersections()` 應該返回`2868868`.

```js
assert.strictEqual(distinctIntersections(), 2868868);
```

# --seed--

## --seed-contents--

```js
function distinctIntersections() {

  return true;
}

distinctIntersections();
```

# --solutions--

```js
// solution required
```
