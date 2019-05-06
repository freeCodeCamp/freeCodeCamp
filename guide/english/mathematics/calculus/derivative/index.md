---
title: Derivative
---
## Derivative

**Definition** : The derivative of a function f(x) with respect to x, represented by f'(x) is defined as the function
```
             lim     f(x+h) - f(x)
  f'(x) =   h -> 0  ---------------
                           h
```
Note that a constant function f(x) = n, for some real number n, has derivative 0 as f(x+h) = f(x) = n. Also, the line f(x) = x has derivative 1, as f(x+h) - f(x) = (x+h) - x = h.

In the above formula, notice the derivative is capturing how the function f(x) changes 'near' x, so the derivative can be given the geometric description of the slope of the tangent of (the graph of) f(x) at x.

**Important property of a function and its derivative:**

If a function f(x) is differentiable at x = a, then the function is continuous at f(a). Note, however, that continuity is not enough to ensure differentiability. A simple example is the absolute value function f(x) = |x|, which is continuous at x=0, but not differentiable there. Even worse, as discovered in the 1800s by [Weierstrass](https://en.wikipedia.org/wiki/Weierstrass_function), working on many confusions that were arising from new types of functions called [Fourier series](https://en.wikipedia.org/wiki/Fourier_series), the famous Weierstrass function is continuous on the entire real line, but not differentiable at even a single point.

If that weren't bad enough, it turns out that most continuous functions are not differentiable, a result of [Banach](https://eudml.org/doc/217560) (in German). The problem is that, while most continuous functions we imagine are nice and smooth, a continuous function does not need to be easy to imagine or draw (namely, the Weierstrass function above, with its [fractal](https://en.wikipedia.org/wiki/Fractal) like shape and sharp edges everywhere). Most (continuous) functions are impossible to draw by hand, so hard to visualize in any meaningful way.

## Properties of Derivatives

The limit definition of derivative can be quite messy and difficult to work with (try it with f(x) = x^5 + x^3 + 2 or g(x) = sin(x)cos(x) to see how quickly simple-looking functions become a mess). However, many properties and a few simple examples of derivatives can make computing derivatives much simpler.

1. **Linearity**<br/>
Suppose f(x) and g(x) are differentiable functions and a and b are real numbers. Then the function
```
h(x) = af(x) + bg(x)
```
is [differentiable](https://en.wikipedia.org/wiki/Sum_rule_in_differentiation) and
```
h'(x) = af'(x) + bg'(x).
```

2. **Product Rule** <br/>
For a function h(x) = f(x) * g(x), if f(x) and g(x) are differentiable, then h(x) is [differentiable](https://en.wikipedia.org/wiki/Product_rule) and
```
h'(x) = f'(x)g(x) + f(x)g'(x).
```

From these two rules and our examples using the limit definition above, we can compute the derivative of all [polynomials](https://en.wikipedia.org/wiki/Polynomial). For example, if we let f(x) = x<sup>2</sup> + 2x + 1, then we have f(x) = g(x) + h(x) + k(x) where g(x) = x<sup>2</sup>, h(x) = 2x and k(x) = 1. Hence
```
f'(x) = g'(x) + h'(x) + k'(x)
      = (x + x) + 2 + 0 = 2x + 2
```
as g(x) = x\*x so we can apply the product rule, as well as linearity for h(x).

3. **Power Rule** <br />
The product rule can be generalized in a way, to the *power rule*. Consider the function f(x) = x^r for some real number r. Then f(x) is [differentiable](https://en.wikipedia.org/wiki/Power_rule) and
```
f'(x) = rx^(r-1).
```
For example, if f(x) = x<sup>&pi;</sup>, then f'(x) = &pi;x<sup>&pi;-1</sup>, which is not easy to see from the power rule.

4. **Quotient Rule** <br/>
The quotient rule gives the derivative of one function divided by another. Let h(x) = f(x) / g(x) (where g(x) cannot be zero). Then, if f(x) and g(x) are differentiable, so is h(x) and the derivative of h(x) is given by
```
         [f'(x)g(x) - f(x)g'(x)]
h'(x) =  ----------------------- .
                [g(x)]^2
```
For example, the derivative of h(x) = 1/x can be computed with letting f(x) = 1, and g(x) = x, so that h(x) = f(x)/g(x). The quotient rule gives
```
h'(x) = [0*x - 1*1]/(x)^2 = -1/x^2.
```

5. **Chain Rule** <br/>
The chain rule is for computing the derivative of a composition of functions. Consider two functions f(x) and g(x). If g(x) is differentiable at a point c, and f(x) is differentiable at a point g(c), then the function h(x) = f(g(x)) is differentiable at the point x = c, and
```
h'(c) = f'(g(c))g'(c).
```
Thus, when f(x) and g(x) are differentiable everywhere, we have h(x) is differentiable everywhere and
```
h'(x) = f'(g(x))g'(x).
```

For example, consider the function h(x) = (3x + 1)<sup>25</sup>. We could multiply all the brackets out and use linearity and the product rule, but that's going to take a very long time to do by hand (and could easily lead to an arithmetic mistake) so instead, let g(x) = 3x + 1 and f(x) = x<sup>25</sup>. We have h(x) = f(g(x)), so the chain rule gives
```
h'(x) = f'(3x + 1)*3 = 75(3x + 1)^(24)
```
as f'(x) = 25x<sup>24</sup>, so f'(3x + 1) = 25(3x + 1)<sup>24</sup>.

6. **Exponential functions** <br />
The function f(x) = a<sup>x</sup> is differentiable, with derivative
```
f'(x) = ln(a)*a^x = ln(a)*f(x)
```
where ln(x) is the [natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm). In particular, as ln(e) = 1, with e the base of the natural logarithm, the function g(x) = e<sup>x</sup> has derivative g'(x) = g(x).

7. **Logarithmic functions** <br />
The function f(x) = ln(x) is differentiable for x > 0 and
```
f'(x) = 1/x.
```
This generalizes immediately to logarithms of any base using the [change of base](https://en.wikipedia.org/wiki/Logarithm#Change_of_base) formula. If g(x) = log<sub>b</sub>(x), then
```
g(x) = ln(x)/ln(b),
```
and so
```
g'(x) = 1/[xln(b)]
```

8. **Trigonometric functions** <br />
Lastly, the common trigonometric functions are [differentiable](https://en.wikipedia.org/wiki/Differentiation_of_trigonometric_functions) and, for example, if f(x) = sin(x), g(x) = cos(x) and h(x) = tan(x) we have
```
f'(x) = cos(x),
g'(x) = -sin(x),
h'(x) = [sec(x)]^2.
```

### Generalizations

While all of the examples above are only for functions of one variable, there are derivatives with [multiple variables](https://en.wikipedia.org/wiki/Multivariable_calculus), [complex functions of one variable](https://en.wikipedia.org/wiki/Holomorphic_function), [complex functions of multiple variables](https://en.wikipedia.org/wiki/Several_complex_variables) and more generally, on [manifolds](https://en.wikipedia.org/wiki/Differentiable_manifold#Differentiable_functions).

The idea of derivatives, taking a function and getting another function, can be thought of as a function itself. The inverse of this function is [integration](https://en.wikipedia.org/wiki/Integral), the connection between the two formalized by [the fundamental theorem of calculus](https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus) and the study of these two functions makes up the area of [calculus](https://en.wikipedia.org/wiki/Calculus).
