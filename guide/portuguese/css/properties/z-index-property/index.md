---
title: Z Index Property
localeTitle: Com propriedade de índice
---
## Propriedade do índice Z

A propriedade z-index especifica a ordem da pilha de um elemento. Quaisquer elementos posicionados em uma página da Web podem se sobrepor em uma determinada ordem, imitando uma terceira dimensão perpendicular à tela. Um elemento com maior ordem de empilhamento sempre está na frente de um elemento com uma ordem de pilha menor. A ordem de empilhamento é controlada pelo índice z. Esta propriedade só funciona para elementos cujo valor de posição é definido como absoluto, fixo ou relativo.

#### Sintaxe

z-index: auto | número | inicial | herdam;

#### Exemplo
```
div { 
  position: absolute; 
  z-index: -1; 
 } 
```

#### Valores

Auto: Define a ordem da pilha igual a seus pais. Este é o padrão. Número: define a ordem da pilha do elemento. Números negativos são permitidos. Quanto maior o valor, maior o elemento. Com um valor igual de z-index, o elemento descrito no código HTML abaixo estará na frente. Inicial: define essa propriedade como seu valor padrão. Herdar: herda essa propriedade de seu elemento pai.

#### Mais Informações:

[Z-index no MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) [Z-index onW3schools](https://www.w3schools.com/cssref/pr_pos_z-index.asp)