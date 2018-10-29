---
title: Legal Color Values
localeTitle: Valores Legais Legais
---
## Valores Legais Legais

Cores em CSS podem ser especificadas nos seguintes formatos:

*   [Hexadecimal](#hexadecimal-colors)
*   [RGB](#rgb-colors)
*   [RGBA](#rgba-colors)
*   [HSL](#hsl-colors)
*   [HSLA](#hsla-colors)
*   [Nomes de cores predefinidos](#predefined-color-names)

### Cores hexadecimais

#### Suporte de Navegador

Todos os principais navegadores suportam valores de cores hexadecimais.

#### Formato

Um valor hexadecimal é especificado como **#RRGGBB** , em que os inteiros hexadecimais RR (vermelho), GG (verde) e BB (azul) especificam os componentes da cor. Todos os valores devem estar entre 00 e FF. Como o nome sugere, a codificação está na base 16.

#### Exemplo

Aqui estão diferentes cores hexadecimais. Encontre o exemplo ao vivo em https://jsfiddle.net/qg9revp4/2/.

```css
#divRed{ 
  color: #ff0000; /* red */ 
 } 
 
 #divGreen{ 
  color: #00ff00; /* green */ 
 } 
 
 #divBlue{ 
  color: #0000ff; /* blue */ 
 } 
 
 #divWhite{ 
  color: #ffffff; /* white */ 
  background: #000000; /* black background, so that the text is visible */ 
 } 
```

### Cores RGB

#### Suporte de Navegador

Todos os principais navegadores suportam valores RGB.

#### Formato

Um valor RGB é especificado como **rgb (vermelho, verde, azul)** . Cada parâmetro (vermelho, verde e azul) define a intensidade da cor e pode ser um número inteiro entre 0 e 255.

#### Exemplo

Aqui estão diferentes cores RGB. Encontre o exemplo ao vivo em https://jsfiddle.net/vspepeth/1/.

```css
#divRed{ 
  color: rgb(255, 0, 0); /* red */ 
 } 
 
 #divGreen{ 
  color: rgb(0, 255, 0); /* green */ 
 } 
 
 #divBlue{ 
  color: rgb(0, 0, 255); /* blue */ 
 } 
 
 #divWhite{ 
  color: rgb(255, 255, 255); /* white */ 
  background: rgb(0, 0, 0); /* black background, so that the text is visible */ 
 } 
```

### Cores RGBA

#### Suporte de Navegador

Os valores de cores RGBA são suportados no IE9 +, no Firefox 3+, no Chrome, no Safari e no Opera 10+.

#### Formato

Um valor RGBA é especificado como **rgb (vermelho, verde, azul, alfa)** . Pense nisso como uma extensão para o formato RGB, com um canal alfa. O parâmetro alfa é um número entre 0,0 (totalmente transparente) e 1,0 (totalmente opaco). Os outros parâmetros (vermelho, verde e azul) definem a intensidade das cores e podem ser um número inteiro entre 0 e 255.

#### Exemplo

Aqui estão as diferentes cores RGBA. Encontre o exemplo ao vivo em https://jsfiddle.net/hq0ngwg2/1/.

```css
#divRed{ 
  color: rgba(255, 0, 0, 0.3); /* red with opacity */ 
 } 
 
 #divGreen{ 
  color: rgba(0, 255, 0, 0.7); /* green with opacity */ 
 } 
 
 #divBlue{ 
  color: rgba(0, 0, 255, 0.5); /* blue with opacity */ 
 } 
 
 #divWhite{ 
  color: rgba(255, 255, 255, 0.6); /* white with opacity */ 
  background: rgba(0, 0, 0, 0.8); /* black background with opacity */ 
 } 
```

### Cores HSL

#### Suporte de Navegador

Valores de cores HSL são suportados no IE9 +, Firefox, Chrome, Safari e no Opera 10+.

#### Formato

HSL significa matiz, saturação e leveza. Ele é especificado como **hsl (matiz, saturação, claridade)** .

*   **Matiz** : É um grau na roda de cores (de 0 a 360). _0_ (ou _360_ ) é vermelho, _120_ é verde e _240_ é azul.
    
*   **Saturação** : é um valor percentual. _0%_ significa um tom de cinza e _100%_ é a cor total.
    
*   **Leveza** : também é um valor percentual. _0%_ é preto e _100%_ é branco.
    

#### Exemplo

Abaixo estão as tabelas do [W3.org](https://www.w3.org/TR/css3-color/#hsl-color) . Cada tabela representa um matiz. Doze cores igualmente espaçadas (ou seja, a intervalos de 30 °) foram escolhidas a partir do círculo de cores. O eixo X de cada tabela representa a saturação (100%, 75%, 50%, 25%, 0%). O eixo Y representa a leveza. 50% é "normal".

![Tabela HSL](https://image.ibb.co/ngq686/hsl.png)

Encontre o exemplo ao vivo em https://jsfiddle.net/g10zpL28/1/.

```css
#div1 { 
  background-color: hsl(240, 100%, 50%); /* blue */ 
 } 
 #div2 { 
  background-color: hsl(195, 53%, 79%); /* light blue */ 
 } 
 #div3 { 
  background-color: hsl(240, 100%, 25%); /* dark blue */ 
 } 
 #div4 { 
  background-color: hsl(187, 75%, 86%); /* pastel blue */ 
 } 
```

### Cores HSLA

#### Suporte de Navegador

Os valores de cores do HSLA são suportados no IE9 +, no Firefox 3+, no Chrome, no Safari e no Opera 10+.

#### Formato

HSLA significa matiz, saturação, leveza e canal alfa. É especificado como **hsla (matiz, saturação, luminosidade, alfa)** . O canal alfa especifica a opacidade da cor.

*   **Matiz** : É um grau na roda de cores (de 0 a 360). _0_ (ou _360_ ) é vermelho, _120_ é verde e _240_ é azul.
    
*   **Saturação** : é um valor percentual. _0%_ significa um tom de cinza e _100%_ é a cor total.
    
*   **Leveza** : também é um valor percentual. _0%_ é preto e _100%_ é branco.
    
*   **Canal Alfa** : É um número entre 0.0 (totalmente transparente) e 1.0 (totalmente opaco).
    

#### Exemplo

Abaixo estão exemplos de cores do HSLA. Veja-os ao vivo em https://jsfiddle.net/2Lxscgfy/1/.

```css
#div1 { 
  background-color: hsla(240, 100%, 50%, 0.5); /* blue with transparency */ 
 } 
 #div2 { 
  background-color: hsla(195, 53%, 79%, 0.8); /* light blue with transparency */ 
 } 
 #div3 { 
  background-color: hsla(240, 100%, 25%, 0.3); /* dark blue with transparency */ 
 } 
 #div4 { 
  background-color: hsla(187, 75%, 86%, 1.0); /* pastel blue with transparency */ 
 } 
```

### Nomes de cores predefinidos

#### Suporte de Navegador

147 nomes de cores são predefinidos na especificação de cores CSS. Todos os navegadores modernos os suportam.

#### Exemplo

Abaixo estão alguns nomes de cores em uso. Confira o exemplo ao vivo em https://jsfiddle.net/rqygumpy/. Encontre a lista completa no [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords) .

```css
#div1{ 
  color: BlueViolet; 
 } 
 
 #div2{ 
  color: RebeccaPurple; 
 } 
 
 #div3{ 
  color: RoyalBlue; 
 } 
 
 #div4{ 
  color: Salmon; 
 } 
```

#### Mais Informações:

[Docs Web MDN em cores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)