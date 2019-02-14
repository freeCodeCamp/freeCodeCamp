---
title: Chain Rule Introduction
---
# Chain Rule Introduction

Chain Rule is used to compute the derivative of a composition of functions.

Let _F_ be a real valued function which is a composite of two functions _f_ and _g_  i.e. `F(x) = f(g(x))`and both f(x) and g(x) are differentiable.
Let the derivative D{F(x)} be denoted as F'(x).

By Chain Rule, 
#### _`F'(x) = f'(g(x)).g'(x)`_

Suppose g(x) = t, then F(x) = f(g(x)) can be rewritten as F(x)=f(t), which can then be rewritten using the Chain Rule in Leibniz notation: 
#### `d(F)/dx = df/dt . dt/dx`

A good way to remember this is to imagine a burrito wrapped in foil. You have to unwrap the foil around the burrito to eat the burrito inside. The same goes for Chain Rule. You have to take the derivative of the outside (the outer function) and then derive the inside (the inner function).

Ex: f(x) = sin(x^2)
    f'(x) = (derivative of outside) . (derivative of inside)
    = cos(x^2) . (2x)

Ex: f(x) = cos(sin(x))
    f'(x) = (derivative of outside) . (derivative of inside)
    = -sin(sin(x)) . cos(x)


### Example 1.   To compute derivative of sin(ax+b)

Solution : The function can be visualized as a composite of two functions. F(x)= f(g(x))

t= g(x)= ax+b  and f(t)=sin(t)

f(t)=sin(t) => df/dt = cos(t)

t= g(x) = ax+b => dt/dx = a

Now by Chain Rule: 

d(F)/dx = df/dt . dt/dx

=> d(F)/dx = cost(t) . a = a.cos(ax+b)

OR 

We can directly apply the formula F'(x) = f'(g(x)).g'(x) = cos(ax+b) . a


## For a function composite of more than two function :

Let _F_ be a real valued function which is a composite of four functions _r s t u_  i.e. `F(x)=r(s(t(u(x))))` and all the functions _r(x) s(x) t(x) u(x)_ are differentiable.
Let the derivative D{F(x)} is denoted as F'(x).

By Chain Rule, 
#### _`F'(x) = r'(s(t(u(x)))).s'(t(u(x))).t'(u(x)).u'(x)`_

Suppose, a = u(x), b = t(a), c = s(b) then F(x)=r(s(t(u(x)))) can be re-written as F(x)=r(c) 

then, F(x)=r(c) => d(F)/dx = dr/dc . dc/dx                ___ (eqn 1)

c = s(b) => dc/dx = ds/db . db/dx                          ___ (eqn 2)

b = t(a) => db/dx = dt/da . da/dx                          ___ (eqn 3)

a = u(x) => da/dx = du/dx                                  ___ (eqn 4)

Putting the value of eqn 2 3 4 in eqn 1, we will get :

#### `d(F)/dx = dr/dc . ds/db . dt/da . du/dx`


### Example 2.   To compute derivative of sin(cos((mx+n)^3))

Solution : The function can be visualized as a composite of four functions. F(x)= r(s(t(u(x))))

where a = u(x) = mx+n

b = t(a) = a^3 

c = s(b) = cos(b) then F(x)=r(s(t(u(x)))) can be re-written as F(x)= r(c) =sin(c) 

Now, By chain rule :
d(F)/dx = dr/dc . ds/db . dt/da . du/dx

=> d(F)/dx = cos(c) . -sin(b) . 3a^2 . m

=> d(F)/dx = cos(cos((mx+n)^3)) . -sin((mx+n)^3)) . 3(mx+n)^2 . m

OR 

We can directly apply the formula, 

F'(x) = r'(s(t(u(x)))).s'(t(u(x))).t'(u(x)).u'(x) = cos(cos((mx+n)^3)) . -sin((mx+n)^3)) . 3(mx+n)^2 . m
