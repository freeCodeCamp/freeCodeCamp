---
title: Conditional Ternary Operators
localeTitle: Operadores Ternarios Condicionales
---
## Operadores Ternarios Condicionales

### Uso básico

El operador ternario es una forma compacta de escribir un if-else dentro de una expresión.

```js
const thing = (condition) ? <if true> : <if false>; 
```

P.ej

```js
const cappedInput = input > 50 ? 50 : input // this will cap the input at 50 
```

### Si no

También puede encadenar operadores ternarios, de esta manera tendrá un comportamiento if-else if-else

```js
<first condition> ? <value if first true> 
 : <second condition> ? <value if second is true> 
 : <fallback value> 
```

> **Consejo profesional** : como ve, puede dividir el operador ternario en varias líneas P.ej
```
const wealth = housesOwned > 3 ? "rich" 
             : housesOwned > 1 ? "nothing to complain" 
             : "poor" 

```