---
title: Use export to Reuse a Code Block
localeTitle: Use a exportação para reutilizar um bloco de código
---
## Use a exportação para reutilizar um bloco de código

Aprendemos a importar material de outro arquivo. Mas há um problema. Você só pode importar arquivos que são **exportados** daquele outro arquivo.

Sua tarefa aqui é exportar `foo` e `bar` .

## Sugestão 1:

Basta adicionar exportação na frente deles!

## Alerta de Spoiler - Solução à frente!

## Solução

```javascript
"use strict"; 
 export const foo = "bar"; 
 export const bar = "foo"; 

```