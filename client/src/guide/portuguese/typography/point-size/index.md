---
title: Point Size
localeTitle: Tamanho do ponto
---
## Tamanho do ponto

O tamanho do ponto é uma maneira de introduzir a padronização na tipografia. O tamanho do ponto é a menor unidade de medida.

No tipo de metal, o tamanho do ponto refere-se à altura do corpo de metal no qual o caractere de um tipo de letra é convertido. Nos tipos de letra digitais, o corpo de metal é substituído por uma caixa invisível, conhecida como _em quadrado_ . Cada personagem se encaixa dentro daquele em quadrado ou em caixa. O **tamanho de uma fonte é igual ao tamanho do ponto.**

```css
html{ 
  font-size:16px; 
 } 
 
 body{ 
  font-size:1em;  // 1em is equal to 16px 
 } 
```

O tamanho do ponto também é usado para medir o comprimento (linha de altura), o comprimento da linha e outros elementos, além do tamanho da fonte.  
Nos tipos de letra digitais, **um ponto é igual a 1/72 de polegada** . Doze pontos fazem uma pica. Seis picas fazem uma polegada. Uma maneira comum de representar picas e pontos é a seguinte:

*   1 pica = 1p
*   1 ponto = 1 pts ou p1
*   6 picas e 3 pontos = 6p3
*   Sans Abertos de 7 pontos com 9 pontos de liderança = 7/9 Open Sans

O tamanho de ponto ideal para impressão é geralmente entre 10-12 pontos, enquanto que para a web, o tamanho ideal do ponto é entre 15-25 pontos. Em CSS, você deve definir o tamanho da fonte em ems ou rems do que os pixels, pois os primeiros são escaláveis ​​por natureza. Recentemente, tem havido muita conversa sobre tipografia fluida usando as unidades recém-introduzidas vw e vh. Saiba mais sobre isso aqui: [Tipografia Fluida](https://www.smashingmagazine.com/2016/05/fluid-typography/)

Lembre-se de que fontes diferentes configuradas no mesmo tamanho de ponto não parecerão ser do mesmo tamanho devido às suas características individuais, a saber: x-height, modulação de traço ou contraste e largura de caractere.

#### Mais Informações:

*   Tipografia Prática [Tamanho em Pontos](https://practicaltypography.com/point-size.html)
*   [Tamanho do Ponto](https://en.wikipedia.org/wiki/Point_(typography)) Wikipedia
*   [Pensando com tipo](http://amzn.to/2yDqGNR) pensando com tipo