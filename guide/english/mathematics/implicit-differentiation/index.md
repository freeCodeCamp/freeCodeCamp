---
title: Implicit Differentiation
---
## Implicit Differentiation

When differentiating a function, such as f(x) = x<sup>2</sup>, we are differentiating an equation y = x<sup>2</sup> that has been solved for y in terms of x to find dy/dx. However, there are equations where such a solution is [not practical](https://www.wolframalpha.com/input/?i=solve+y%5E2+%2B+sqrt(y)+%3D+x%5E3+%2B+x+%2B+1+for+y) and some equations simply cannot be solved for y in terms of x, so in order to compute derivatives for these cases we need another approach.

This is where *implicit* differentiation comes in, which is roughly just the [chain rule](https://en.wikipedia.org/wiki/Chain_rule). Recall that if we have a function f(x), then the chain rule tells us the derivative of f(x)<sup>2</sup> is 2f(x) &times; f'(x). But, despite not having a solution for y in terms of x, this same rule applies. The derivative of y<sup>2</sup> is 2y &times; y'. Now we can implicitly differentiate an equation and attempt to solve for y'.

For example, the circle of radius 1 is given by the equation x<sup>2</sup> + y<sup>2</sup> = 1. Instead of solving for y and taking a derivative of each half of the square root we can simply (implicitly) differentiate both sides with respect to x to find

<p align='center'>2x + 2y &times; y' = 0,</p>

and so y' = -2x/2y = -x/y.

For a more involved example, consider the equation e<sup>xy</sup> = e<sup>2x</sup> - e<sup>3y</sup>. Taking the derivative of the left hand side gives

<p align='center'>e<sup>xy</sup>d(xy)/dx = e<sup>xy</sup>[y + xy'],</p>

using the chain rule and then the product rule. Similarly, the derivative of the right hand side is

<p align='center'>2e<sup>2x</sup> - e<sup>3y</sup>d(3y)/dx = 2e<sup>2x</sup> - 3e<sup>3y</sup>y'</p>

Thus, solving for y', we find

<p align='center'>y' = (2x<sup>2x</sup> - ye<sup>xy</sup>)/(xe<sup>xy</sup> + 3e<sup>3y</sup>)</p>

In general, if we have an equation f(x,y) = 0, taking the derivative with respect to x gives

<p align='center'>&part;f/&part;x + &part;f/&part;y &times; dy/dx</p>

where we use [partial derivatives](https://en.wikipedia.org/wiki/Partial_derivative) and the chain rule here, so whether one can solve an equation for y or not, it is always possible to get an equation for the derivative y'. Moreover, as the examples above show, it is frequently easier to implicitly differentiate instead of trying to solve for y first and then take the derivative.
