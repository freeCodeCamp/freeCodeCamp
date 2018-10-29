---
title: Chain Rule Introduction
localeTitle: Introdução à Regra de Cadeia
---
# Introdução à Regra de Cadeia

A regra de cadeia é usada para calcular a derivada de uma composição de funções.

Seja _F_ uma função de valor real que é um composto de duas funções _f_ e _g_ ie `F(x) = f(g(x))` e ambos f (x) eg (x) são diferenciáveis. Deixe a derivada D {F (x)} é denotada como F '(x).

Por regra de cadeia,

#### _`F'(x) = f'(g(x)).g'(x)`_

Suponha que g (x) = t então F (x) = f (g (x)) pode ser reescrito como F (x) = f (t) então, na notação de Leibniz, a Regra da Cadeia pode ser reescrita como:

#### `d(F)/dx = df/dt . dt/dx`

### Exemplo 1. Para calcular o derivado do pecado (ax + b)

Solução: A função pode ser visualizada como uma composição de duas funções. F (x) = f (g (x))

t = g (x) = ax + b e f (t) = sin (t)

f (t) = sin (t) => df / dt = cos (t)

t = g (x) = ax + b => dt / dx = a

Agora por regra de cadeia:

d (F) / dx = df / dt. dt / dx

\=> d (F) / dx = a. custo (t) = a.cos (ax + b)

OU

Podemos aplicar diretamente a fórmula F '(x) = f' (g (x)). G '(x) = cos (ax + b). uma

## Para uma composição composta de mais de duas funções:

Seja _F_ uma função de valor real que é um composto de quatro funções _rstu_ ie `F(x)=r(s(t(u(x))))` e todas as funções _r (x) s (x) t (x) u (x)_ são diferenciáveis. Deixe a derivada D {F (x)} é denotada como F '(x).

Por regra de cadeia,

#### _`F'(x) = r'(s(t(u(x)))).s'(t(u(x))).t'(u(x)).u'(x)`_

Suponha que a = u (x), b = t (a), c = s (b) então F (x) = r (s (t (u (x)))) pode ser reescrito como F (x ) = r (c)

então, F (x) = r (c) => d (F) / dx = dr / dc. dc / dx \_\_\_ (eqn 1)

c = s (b) => dc / dx = ds / db. db / dx \_\_\_ (eqn 2)

b = t (a) => db / dx = dt / da. da / dx \_\_\_ (eqn 3)

a = u (x) => da / dx = du / dx \_\_\_ (eqn 4)

Colocando o valor de eqn 2 3 4 na eqn 1, obteremos:

#### `d(F)/dx = dr/dc . ds/db . dt/da . du/dx`

### Exemplo 2. Para calcular a derivada do pecado (cos ((mx + n) ^ 3))

Solução: A função pode ser visualizada como uma composição de quatro funções. F (x) = r (s (t (u (x))))

onde a = u (x) = mx + n

b = t (a) = a ^ 3

c = s (b) = cos (b) então F (x) = r (s (t (u (x)))) pode ser reescrito como F (x) = r (c) = sin (c)

Agora, por regra da cadeia: d (F) / dx = dr / dc. ds / db. dt / da. du / dx

\=> d (F) / dx = cos (c). -sin (b). 3a ^ 2. m

\=> d (F) / dx = cos (cos ((mx + n) ^ 3)). -sin ((mx + n) ^ 3)). 3 (mx + n) ^ 2. m

OU

Podemos aplicar diretamente a fórmula,

F '(x) = r' (s (t (u (x)))). S '(t (u (x))). T' (u (x)). U '(x) = cos ( cos ((mx + n) ^ 3)). -sin ((mx + n) ^ 3)). 3 (mx + n) ^ 2. m