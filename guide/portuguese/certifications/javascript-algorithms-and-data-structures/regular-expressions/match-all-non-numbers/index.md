---
title: Match All Non-Numbers
localeTitle: Corresponder a todos os não-números
---
## Corresponder a todos os não-números

## Sugestão 1

*   Você deve tentar usar um sinalizador global.

## Sugestão 2

*   Tente um caractere abreviado para caracteres não-dígitos.

# Alerta de Spoiler !! Solução à frente!

## Solução

```javascript
let noNumRegex = /\D/g; 
```

## Explicação

*   O caractere abreviado `\D` é usado para corresponder caracteres não-dígitos, tem o mesmo resultado que usar `[^0-9]` ;