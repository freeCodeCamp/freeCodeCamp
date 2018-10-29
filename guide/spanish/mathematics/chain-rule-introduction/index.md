---
title: Chain Rule Introduction
localeTitle: Introducción a la regla de la cadena
---
# Introducción a la regla de la cadena

La regla de la cadena se utiliza para calcular la derivada de una composición de funciones.

Sea _F_ una función de valor real compuesta de dos funciones _f_ y _g,_ es decir, `F(x) = f(g(x))` y tanto f (x) como g (x) son diferenciables. Sea que la derivada D {F (x)} se denota como F '(x).

Por regla de la cadena,

#### _`F'(x) = f'(g(x)).g'(x)`_

Supongamos que g (x) = t, entonces F (x) = f (g (x)) puede reescribirse como F (x) = f (t) luego, en la notación de Leibniz, la Regla de la Cadena puede reescribirse como:

#### `d(F)/dx = df/dt . dt/dx`

### Ejemplo 1. Para calcular la derivada del pecado (ax + b)

Solución: La función se puede visualizar como un compuesto de dos funciones. F (x) = f (g (x))

t = g (x) = ax + b y f (t) = sin (t)

f (t) = sin (t) => df / dt = cos (t)

t = g (x) = ax + b => dt / dx = a

Ahora por regla de la cadena:

d (F) / dx = df / dt. dt / dx

\=> d (F) / dx = a. costo (t) = a.cos (ax + b)

O

Podemos aplicar directamente la fórmula F '(x) = f' (g (x)). G '(x) = cos (ax + b). un

## Para una función compuesta de más de dos funciones:

Sea _F_ una función de valor real compuesta de cuatro funciones _rstu,_ es decir, `F(x)=r(s(t(u(x))))` y todas las funciones _r (x) s (x) t (x) u (x)_ son diferenciables. Sea que la derivada D {F (x)} se denota como F '(x).

Por regla de la cadena,

#### _`F'(x) = r'(s(t(u(x)))).s'(t(u(x))).t'(u(x)).u'(x)`_

Supongamos que a = u (x), b = t (a), c = s (b) y luego F (x) = r (s (t (u (x)))) se puede reescribir como F (x) ) = r (c)

entonces, F (x) = r (c) => d (F) / dx = dr / dc. dc / dx \_\_\_ (eqn 1)

c = s (b) => dc / dx = ds / db. db / dx \_\_\_ (eqn 2)

b = t (a) => db / dx = dt / da. da / dx \_\_\_ (eqn 3)

a = u (x) => da / dx = du / dx \_\_\_ (eqn 4)

Poniendo el valor de eqn 2 3 4 en eqn 1, obtendremos:

#### `d(F)/dx = dr/dc . ds/db . dt/da . du/dx`

### Ejemplo 2. Para calcular la derivada de sin (cos ((mx + n) ^ 3))

Solución: La función se puede visualizar como un compuesto de cuatro funciones. F (x) = r (s (t (u (x))))

donde a = u (x) = mx + n

b = t (a) = a ^ 3

c = s (b) = cos (b), luego F (x) = r (s (t (u (x))) puede reescribirse como F (x) = r (c) = sin (c)

Ahora, por regla de la cadena: d (F) / dx = dr / dc. ds / db. dt / da. du / dx

\=> d (F) / dx = cos (c). -sin (b). 3a ^ 2. metro

\=> d (F) / dx = cos (cos ((mx + n) ^ 3)). -sin ((mx + n) ^ 3)). 3 (mx + n) ^ 2. metro

O

Podemos aplicar directamente la fórmula,

F '(x) = r' (s (t (u (x))). S '(t (u (x))) t' (u (x)). U '(x) = cos ( cos ((mx + n) ^ 3)). -sin ((mx + n) ^ 3)). 3 (mx + n) ^ 2. metro