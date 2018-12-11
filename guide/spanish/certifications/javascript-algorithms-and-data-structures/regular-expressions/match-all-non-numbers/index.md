---
title: Match All Non-Numbers
localeTitle: Coincidir con todos los no números
---
## Coincidir con todos los no números

## Sugerencia 1

*   Debes intentar usar una bandera global.

## Sugerencia 2

*   Intente con un carácter abreviado para caracteres que no sean dígitos.

# ¡¡Alerta de spoiler!! ¡Solución por delante!

## Solución

```javascript
let noNumRegex = /\D/g; 
```

## Explicación

*   El carácter abreviado `\D` se usa para hacer coincidir caracteres no dígitos, tiene el mismo resultado que usando `[^0-9]` ;