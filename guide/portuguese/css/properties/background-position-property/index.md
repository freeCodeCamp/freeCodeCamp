---
title: Background Position Property
localeTitle: Propriedade de posição de plano de fundo
---
## Propriedade de posição de plano de fundo

A propriedade background define a posição de onde a imagem de fundo deve começar. Em outras palavras, essa propriedade terá um valor x e um valor y e iniciará a imagem a partir do ponto `(x, y)` .

**Exemplo:**

```css
/* setting background-image of HTML doc */ 
 body { 
  background-image: url('https://cdn-media-1.freecodecamp.org/imgr/6Z2VStD.png'); 
  background-repeat: no-repeat; 
  background-position: right top; 
 } 
```

Por padrão, a propriedade background-position é definida como `0% 0%` .

**Valores de propriedade:**

`background-position: x-value y-value` onde,

_valor x_ : `left | center | right | x% | x px` e

_valor y_ : `top | center | bottom | y% | y px` .

Outros valores de propriedade permitidos são `initial` e `inherit` .

`initial` : define essa propriedade como seu valor padrão.

`inherit` : `inherit` o valor do elemento pai.

**Nota:** Quando apenas um valor é dado a background-property, o outro é, por padrão, definido como `center` .

**Outros recursos:**

Docs MDN: https://developer.mozilla.org/pt-BR/docs/Web/CSS/background-position