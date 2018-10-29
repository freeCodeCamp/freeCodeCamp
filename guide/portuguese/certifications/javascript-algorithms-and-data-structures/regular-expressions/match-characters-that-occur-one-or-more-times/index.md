---
title: Match Characters that Occur One or More Times
localeTitle: Corresponder caracteres que ocorrem uma ou mais vezes
---
## Corresponder caracteres que ocorrem uma ou mais vezes

\## o problema: Você quer encontrar correspondências quando a letra s ocorre uma ou mais vezes em "Mississippi". Escreva um regex que use o sinal +. ## a solução

deixe difícilSpelling = "Mississippi"; deixe myRegex = / s + / g; // esta é a solução deixe resultar = difícilSpelling.match (myRegex);