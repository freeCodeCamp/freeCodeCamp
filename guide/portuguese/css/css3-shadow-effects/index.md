---
title: CSS3 Shadow Effects
localeTitle: Efeitos de sombra CSS3
---
## Efeitos de sombra CSS3

Com CSS3 você pode criar dois tipos de sombras: `text-shadow` (adiciona sombra ao texto) e `box-shadow` (adiciona sombra a outros elementos).

### Sombra de Texto CSS3

A propriedade `text-shadow` pode levar até quatro valores:

*   a sombra horizontal
*   a sombra vertical
*   o efeito de borrão
*   a cor

##### Exemplos:

*   Sombra de texto normal

```css
h1 { 
    text-shadow: 2px 2px 5px crimson; 
 } 
```

![Exemplo de sombra de texto normal](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow1.png)

*   Efeito de texto brilhante

```css
h1 { 
    text-shadow: 0 0 4px #00FF9C; 
 } 
```

![Exemplo de texto brilhante](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow2.png)

#### Múltiplas Sombras

Para conseguir isso, você simplesmente adiciona uma vírgula entre dois (ou mais) conjuntos de valores:

```css
h1 { 
    color: white; 
    text-shadow: 0 0 3px #F10D58, 0 0 7px #4578D5; 
 } 
```

![Várias sombras examaple com texto branco](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow3.png)

### Sombra de Caixa CSS3

A propriedade `box-shadow` pode levar até seis valores:

*   (opcional) a palavra-chave `inset` (altera a sombra para uma dentro do quadro)
*   a sombra horizontal
*   a sombra vertical
*   o efeito de borrão
*   a propagação
*   a cor

##### Exemplos:

```css
.first-div { 
    box-shadow: 1px 1px 5px 3px grey; 
 } 
 
 .second-div { 
    box-shadow: 0 0 5px 1px lightgrey; 
 } 
 
 .third-div { 
    box-shadow: inset 0 0 15px 5px rgba(0,0,0,0.75); 
 } 
```

![Exemplos de sombra em caixa](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/box-shadows.png)

#### Mais Informações:

*   [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b)
*   [Verificar o suporte do navegador](https://caniuse.com/#search=box-shadow)
*   [Gerador de sombra de caixa CSS](https://www.cssmatic.com/box-shadow) (sinta-se livre para experimentar com sombras de caixa)