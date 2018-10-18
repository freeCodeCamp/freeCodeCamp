---
title: Color Property
localeTitle: Propriedade da cor
---
## Propriedade de cor CSS

Você pode usar a propriedade `color` para definir a cor do texto em um elemento.

Você pode usar vários métodos para declarar uma cor como:

*   Por Nome (Nota: isto só funciona com certas cores)

```css
h1{ 
    color: blue; 
 } 
```

*   Hexadecimal (especificado como #rrggbb)

```css
h1{ 
    color:  #0000ff; 
 } 
```

*   RGB (especificado como rgb (r, g, b))

```css
h1{ 
    color: rgb(0, 0, 255); 
 } 
```

*   RGBA (especificado como rgba (r, g, b, alfa))

```css
h1{ 
    color: rgba(0, 0, 255, 0.5); 
 } 
```

*   HSL (matiz, luminosidade, saturação)

```css
h1{ 
    color: hsl(240, 100%, 50%); 
 } 
```

*   HSLA (matiz, leveza, saturação, alfa)

```css
h1{ 
    color: hsl(240, 100%, 50%, 0.5); 
 } 
```

## Propriedades de cores CSS explicadas

*   Cores por nome:
    
    *   Estes são bastante auto-explicativos. Cada cor é representada pelo seu nome.
*   Hexadecimal:
    
    *   Essas cores são representadas por trigêmeos hexadecimais.
    *   Um tripleto hexadecimal é um número hexadecimal de seis dígitos e três bytes.
    *   Cada um dos três bytes representa uma cor #RRGGBB (vermelho, verde, azul).
    *   A cor hexadecimal de taquigrafia é representada por um número hexadecimal de três dígitos #RGB (vermelho, verde, azul).
*   Cores RGB e RGBA:
    
    *   As cores RGB são cores de 24 bits (3 bytes) representadas por 3 números no intervalo de 0 a 255. (por exemplo, rgb (255,255,128)).
    *   As cores RGBA são de 32 bits (4 bytes) representadas por 3 números no intervalo de 0 a 255 e o valor alfa controla a opacidade. (por exemplo, rgb (255,255,128, 0,3)).
*   HSL & HSLA Cores:
    
    *   A cor do HSL é representada por três valores (HUE, Saturation, Lightness).
    *   A cor do HSLA é representada por quatro valores (HUE, Saturation, Lightness, Alpha). Alpha controla a opacidade.

#### Mais Informações

*   W3 Schools site sobre como formatar o [texto](https://www.w3schools.com/css/css_text.asp) .
*   Site das Escolas W3 em [cores](https://www.w3schools.com/colors/default.asp) .
*   Propriedade de cor no [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color) .
*   Documentação em [w3.org](https://www.w3.org/wiki/CSS/Properties/color) .