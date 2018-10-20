---
title: Worked Example Slope from Two Points
---
## Worked Example Slope from Two Points

Every non-vertical line can be written in the form `y = mx + b` where `m` is the slope of the line and `b` is the value where the line crosses the `y`-axis. Given any two points, one can draw a line connecting them, and from these points we can determine the equation of this line. We will show how with two examples, first with a given pair of points and second, the general case for any points (with a word of caution).

Suppose we want to find the equation of the line connecting the points `(3,7)` and `(5,13)`. If these points are both on the line `y = mx + b`, then they satisfy the equation, i.e., `7 = 3m + b` and `13 = 5m + b`. But then we can solve for `b` in both and see that
```
7 - 3m = b = 13 - 5m
```
and so whatever our slope `m` is, it must satisfy `7 - 3m = 13 - 5m`. We can rearrange this as `13 - 7= 5m - 3m`, and so `6 = 2m`, or `m = 3`, and our line has a slope of 3. For completeness, we can plug this value in to either equation above to find the `y`-intercept `b`. Namely, `7 - 3*3 = 7 - 9 = -2` and so the line connecting the points `(3,7)` and `(5,13)` is given by the equation
```
y = 3x - 2
```

In general, suppose we want to find the slope/equation of the line connecting two distinct points `(p,q)` and `(r,s)`. The exact same line of reasoning above works here: If these points lie on the line given by the equation `y = mx + b`, then we have
```
q = m*p + b
s = m*r + b
```
and so, solving for `b` gives
```
q - m*p = b = s - m*r.
```
We now solve for `m` as above, by rearranging to find
```
q - s = -m*r + m*p = m*(p - r).
```
Now (caution!) if `p - r` is not 0, we can divide both sides by this to get
```
m = (q - s)/(p - r)
```
and this is the slope of the line connecting the points `(p,q)` and `(r,s)`. But what if `p - r` is 0? We cannot divide by 0, and yet we can certainly draw a line between any two points, so what's going on? If `p - r = 0`, then `p = r`, so thinking geometrically about our points `(p,q)` and `(r,s)`, this means both points have the same `x` value. I.e., since our points are distinct, this means that the line connecting them is vertical, which cannot be described by a function `y = f(x)`, so this is why our computation to find a slope does not work, there is no number `m` so that both of our points satisfy the equation `y = mx + b`. (However, note that if we try to work with `x = ny + c`, we do get a 'slope' `n` and `x`-intercept `c` as a vertical line is a function *of `y`* despite not being a function of `x`.)

For completeness again, in the case of a non-vertical line where our slope was `(q - s)/(p - r)`, we may plug this into either of our equations above to solve for `b` and get the equation of the line, e.g.,
```
q = p*(q - s)/(p - r) + b
```
and so
```
b = q - p*(q - s)/(p - r) = [q*(p - r) - p*(q - s)]/(p - r) = (q*r - p*s)/(p - r)
```
and the (non-vertical) line connecting the points `(p,q)` and `(r,s)` is given by
```
y = x*(q - s)/(p - r) + (q*r - p*s)/(p - r).
```

One easy way to remember how to compute the slope from two points is the saying "rise over run". Looking at the general case, the slope is the ratio `(q - s)/(p - r)`, where `q` and `s` are the `y` values of the points, and `p` and `r` are the `x` values, so the slope of the line is given by the difference in the `y` values - the *rise* - divided by the difference in the `x` values - the *run*.
