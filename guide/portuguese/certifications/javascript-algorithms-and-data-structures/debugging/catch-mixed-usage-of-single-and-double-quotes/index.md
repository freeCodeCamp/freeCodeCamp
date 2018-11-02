---
title: Catch Mixed Usage of Single and Double Quotes
localeTitle: Pegar Uso Misto de Citações Únicas e Duplas
---
## Pegar Uso Misto de Citações Únicas e Duplas

*   Lembre-se de escolher usar aspas simples ou duplas, simplesmente adicionando um `\` antes do caractere permitir que o caractere caiba na string sem fechar aspas simples ou duplas.
*   Os casos de teste só serão passados ​​usando aspas duplas.

## Solução:

```javascript
//Solution1: 
 let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>"; 
 console.log(innerHtml); 

```