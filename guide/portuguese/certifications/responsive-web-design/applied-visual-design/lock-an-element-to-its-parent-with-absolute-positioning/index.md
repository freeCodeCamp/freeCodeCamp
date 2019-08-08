---
title: Lock an Element to its Parent with Absolute Positioning
localeTitle: Bloqueie um Elemento ao seu Pai com Posicionamento Absoluto
---
## Bloqueie um Elemento ao seu Pai com Posicionamento Absoluto

A propriedade Position: relative que faz o elemento ter um comportamento diferente do fluxo normal do documento e por sua vez faz com que outros elementos adjacentes o ignorem. Para bloquear um elemento em relação ao contentor 'pai' devemos utilizar o Position: absolute.

Ao indicar que a sua posição fica absoluta ao contentor 'pai' estamos a bloquear o elemento no lugar em relação ao seu contentor pai.

Depois através de propriedades de posicionamento CSS pode-se ajustar a posição do elemento para cima, baixo para a esquerda e direita.

O posicionamento absoluto vai bloquear o elemento com base ao antepassado mais próximo. Se se esquecer de adicionar a regra ao contentor pai, o browser vai continuar a procurar a ligação com um elemento que possua a propriedade relativa e por fim irá assumir o padrão da tag body.


