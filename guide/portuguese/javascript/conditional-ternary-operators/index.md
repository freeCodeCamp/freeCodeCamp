---
title: Conditional Ternary Operators
localeTitle: Operadores Ternários Condicionais
---
## Operadores Ternários Condicionais

### Uso básico

O operador ternário é uma maneira compacta de escrever um if-else dentro de uma expressão.

```js
const thing = (condition) ? <if true> : <if false>; 
```

Por exemplo

```js
const cappedInput = input > 50 ? 50 : input // this will cap the input at 50 
```

### Mais se

Você também pode encadear operadores ternários, assim você terá um comportamento if-else if-else

```js
<first condition> ? <value if first true> 
 : <second condition> ? <value if second is true> 
 : <fallback value> 
```

> **Dica profissional** : Como você pode ver, você pode dividir o operador ternário em várias linhas Por exemplo
```
const wealth = housesOwned > 3 ? "rich" 
             : housesOwned > 1 ? "nothing to complain" 
             : "poor" 

```