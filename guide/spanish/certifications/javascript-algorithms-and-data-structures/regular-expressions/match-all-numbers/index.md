---
title: Match All Numbers
localeTitle: Coincidir todos los números
---
## Coincidir todos los números

## Sugerencia 1

*   Una bandera global te ayudará a superar este desafío.

## Sugerencia 2

*   Trate de usar un carácter abreviado para `d` igits.

# ¡¡Alerta de spoiler!! ¡Solución por delante!

## Solución

```javascript
let numRegex = /\d/g; 
```

## Explicación

*   El carácter `\d` taquigrafía es un atajo para `[0-9]` , busca cualquier número entre 0 y 9.