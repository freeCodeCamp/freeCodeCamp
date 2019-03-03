---
title: Intermediate Value Theorem
---
## Intermediate Value Theorem

The Intermediate Value Theorem is a simple but important result in calculus, stating that the visual concept of [continuity](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/mathematics/limits-and-continuity/index.md) is in line with the rigorous concept of continuity.

**Theorem:** Let I = [a,b] be an [interval](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/mathematics/intervals/index.md) of real numbers and f:I &rarr; &#x211D; a continuous function. Then for any r between f(a) and f(b) there is some c in (a,b) such that f(c) = r.

In other words, the result states that a continuous function maps intervals to intervals, which is precisely what we expect a continuous function to do, it shouldn't be possible to *continuously* map an interval -- a set with no holes or gaps in it -- to a set with gaps or holes in it.

Note that the theorem implies that f(I) contains [f(a), f(b)] (or [f(b), f(a)] if f(b) < f(a)) and not that f(I) is contained in [f(a), f(b)] (or [f(b), f(a)]). For example, with the function f(x) = x<sup>3</sup> - x and [a,b] = [0,2], the intermediate value theorem tells us for any r in [f(a), f(b)] = [0,6] there is some c in [0,2] such that f(c) = r. But we also have f(1/2) = -3/8, so while there are no gaps between f(a) and f(b), the function can (continuously) go beyond those values. In this example f([0,2]) = [-2sqrt(3)/9, 8] while [f(0), f(2)] = [0,8].

This makes the choice of a and b somewhat important to think about. With our f(x) = x<sup>3</sup> - x, if we pick a = 0 and b = 1, then the theorem tells us nothing as f(a) = f(b) = 0. However, picking different values of a and b give different intervals, so the theorem gives a lot more information than what you find in any single choice of [a,b].

One important results that can be derived as a consequence of this: if a continuous function defined on an interval is both positive and negative on this interval, then it must have a root/zero. A fun example of how this can be used, not just as a tool to find roots of functions, is the following,
```
On any great circle around the globe, there are two points with exactly the same temperature.
```
Indeed, for any point A there is an antipode (opposite) point B. If T(A) and T(B) are the temperatures at A and B respectively, consider the function f that takes in a point A and returns the value T(A) - T(B). Either f(A) = 0 and A and B have the same temperature, or f(A) is not 0 and f(B) = T(B) - T(A) = -f(A). One of these is positive, the other negative, so by the intermediate value theorem this function has a 0, and this corresponds to two points with the same temperature.
