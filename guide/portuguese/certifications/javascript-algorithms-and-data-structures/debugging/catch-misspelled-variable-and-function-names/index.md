---
title: Catch Misspelled Variable and Function Names
localeTitle: Capturar nomes de variáveis ​​e variáveis ​​com erros ortográficos
---
## Capturar nomes de variáveis ​​e variáveis ​​com erros ortográficos

### Explicação do problema:

Corrija os dois erros de ortografia no código para que o cálculo netWorkingCapital funcione.

### Sugestão

Verifique a ortografia das duas primeiras variáveis ​​em relação a quando é usada.

## Alerta de spoiler!

**Solução à frente!**

```javascript
// 'i' and 'e' swapped in "receivables" and missing 's' in "payables" 
 
 let receivables = 10; 
 let payables = 8; 
 let netWorkingCapital = receivables - payables; 
 console.log(`Net working capital is: ${netWorkingCapital}`); 

```