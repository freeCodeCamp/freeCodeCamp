---
title: Use Destructuring Assignment to Assign Variables from Arrays
localeTitle: Use Destructuring Assignment para atribuir variáveis ​​de matrizes
---
## Use Destructuring Assignment para atribuir variáveis ​​de matrizes

Temos que tomar algumas precauções neste caso.

1.  Não há necessidade de const \[b, a\], pois manterá o efeito da atribuição local.
    
2.  const \[b, a\] = \[a, b\] resultará no valor de a, b como indefinido (regra de atribuição simples da esquerda para a direita).
    

Portanto, a solução para este problema é \[b, a\] = \[a, b\]