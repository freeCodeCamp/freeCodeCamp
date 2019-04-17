---
title: X and Y Intercepts
---
## X and Y Intercepts

Consider a function `y = f(x)` and its graph. The `x`-intercept(s) of `f(x)` are the point(s) where the graph of the function crosses or touches the `x`-axis, i.e., they are points of the form `(x,0)` occuring when `f(x) = y = 0`.

The `y`-intercept(s) are the point(s) at which the graph of the function crosses the `y` axis, i.e., they are points of the form `(0,y)` occuring when `y = f(0)`.

A function can have multiple X intercepts, but can only have a single Y intercept. Why is only a single Y intercept allowed? By definition, a function can only have one output, y, for each unique input, x. Thus, a graph would violate this definition if ```x = 0``` produced more than one output, y.

To find the `x`-intercept(s) of a function, set `y = 0` and solve the equation for `x`. To find the `y` intercept, set `x = 0` and solve the equation for `y`. 

For the simplest case, consider a line `y = mx + b`. To find the `x`-intercepts we set `y=0`, giving `mx + b = 0`, which can be solved as `x = -b/m`, so the (only) `x`-intercept is the point `(-b/m,0)`. To find the `y`-intercept we set `x=0` and have `y = 0 + b = b`, hence the `y`-intercept is `(0,b)`.

With more complex functions it may not be possible to solve for the `x`-intercepts algebraically, e.g., with the function [`y = x^5 - x - 1`](https://www.wolframalpha.com/input/?i=plot+y+%3D+x%5E5+-+x+-+1) you [cannot](https://en.wikipedia.org/wiki/Abel%E2%80%93Ruffini_theorem) solve for `x`. However, looking at the graph can tell you how many `x`-intercepts there are and with a calculator/computer you can get an approximation of each one. On the other hand, the `y`-intercept is always easy to find (if it exists), just set `x=0` and solve (if possible).

Note that even if a graph is not given by a function, e.g., the circle of radius 1, given by [`x^2 + y^2 = 1`](https://www.wolframalpha.com/input/?i=plot+x%5E2+%2B+y%5E2+%3D+1), you can still find the `x` and `y`-intercepts by plugging in `y=0` and `x=0`, and solving for `x` and `y`, respectively. For the circle we see the `x`-intercepts occur when `x^2 + 0 = 1`, i.e., `(-1,0)` and `(1,0)`. Similarly, the `y`-intercepts are `(0,-1)` and `(0,1)`.

If we do not limit ourselves to graphs of functions of `x`, then a graph can have any numbers of `y`-intercepts, e.g., a polynomial `x = f(y)` of degree `n` has (at most) `n` `y`-intercepts, and the graph of `x = sin(y)` has infinitely many `y`-intercepts. Using [polar coordinates](https://en.wikipedia.org/wiki/Polar_coordinate_system) it is easy to come up with graphs that even have infinitely many `x`-intercepts and infinitely many `y`-intercepts, such as [`r = theta`](https://www.wolframalpha.com/input/?i=plot+r+%3D+theta).
