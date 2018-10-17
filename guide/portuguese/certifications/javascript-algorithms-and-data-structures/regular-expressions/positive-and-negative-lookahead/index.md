---
title: Positive and Negative Lookahead
localeTitle: Lookahead positivo e negativo
---
## Lookahead positivo e negativo

*   Lembre-se de usar 2 `lookaheads` para verificar os padrões na string. A primeira `lookahead` é muito similar àquela dada no exemplo - '(? = \\ W {3,6})' - somente o `lower-number` 3 `lower-number` é muito baixo para nossos casos de teste, e um `upper-number` é completamente desnecessário. Essa primeira `lookahead` é usada apenas para encontrar uma string que contenha uma certa quantidade de caracteres. Um segundo `lookahead` deve ser usado para verificar valores numéricos consecutivos no final da string.
    
*   A segunda `lookahead` também é semelhante àquela fornecida no exemplo - `(?=\D*\d)` - no entanto, essa expressão também deve ser modificada para passar em todos os casos de teste. Lembre-se de especificar a quantidade exata de números que você deseja que apareça no final da string.
    

## Solução:

```javascript
let sampleWord = "astronaut"; 
 let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; 
 let result = pwRegex.test(sampleWord); 

```