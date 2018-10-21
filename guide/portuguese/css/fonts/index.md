---
title: Fonts
localeTitle: Fontes
---
## Fontes

As propriedades de fontes do CSS definem a família de fontes, o peso, o tamanho, a variante, a altura da linha e o estilo de um texto.

### Família de fontes

A família de fontes de um texto é definida simplesmente usando a propriedade `font-family` .

Ele funciona com um sistema de _fallback_ ou cascata, ou seja, se o seu navegador não suporta a primeira fonte, ele tenta com o próximo e assim por diante. Se o nome da fonte for maior do que uma palavra, ela deve vir entre aspas.

```css
p { 
    font-family: "Times New Roman", Times, serif; 
 } 
```

No exemplo acima, "Times New Roman" é nome o da fonte, enquanto "serif" é o estilo. Nomes genéricos são usados ​​como fallback, um mecanismo para preservar o estilo da font caso o nome da família não esteja disponível (evitando que o layout fique inconsistente). Um nome genérico deve vir por último, pois eles são uma segunda opção. Alguns nomes genéricos: serif, sans-serif, monospace, cursiva, fantasia, system-ui.

### Estilo de fonte

A propriedade `font-style` pode ser usada para especificar uma estilização ao texto.

Esta propriedade tem 3 valores:

*   normal - Texto mostrado normalmente
*   itálico - Texto mostrado em _itálico_
*   oblíqua - texto mostrado inclinado

```css
.normal { 
    font-style: normal; 
 } 
 
 .italic { 
    font-style: italic; 
 } 
 
 .oblique { 
    font-style: oblique; 
 } 
```

### Tamanho da fonte

A propriedade `font-size` define o tamanho do texto.

Existem diferentes tipos de valores de tamanho de fonte:

*   `px` (pixels) - O tamanho padrão do texto sendo `16px`
*   `em` - `1em` = o tamanho padrão da fonte, ou seja `1em` = `16px` (recomendação da W3C)
*   `small` , `medium` , `large` - conhecidos como valores de tamanho absoluto
*   `%` - porcentagens

```css
.with-pixels { 
    font-size: 14px; 
 } 
 
 .with-ems { 
    font-size: 0.875em; 
 } 
 
 .with-absolute { 
    font-size: large; 
 } 
 
 .with-percentage { 
    font-size: 80%; 
 } 
```

### Espessura da fonte

A propriedade `font-weight` especifica o peso (ou negrito) da fonte. Ela aceita tanto palavras-chave nominais, como ( `bold` , `normal` , `bolder` , `bolder` `lighter` ) como palavras-chave numéricas ( `100` , `200` , `300` , `400` etc). `400` é o mesmo que `normal` .

```css
p { 
   font-weight: bold 
 } 
```

### Resposta da fonte

O tamanho do texto pode ser definido com uma unidade vw (largura da viewport). Dessa forma, o tamanho do texto seguirá o tamanho da janela do navegador.

```html

<h1 style="font-size:10vw">Hello World</h1> 
```

`Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.`

### Variante de fonte

A propriedade `font-variant` especifica se um texto deve ser exibido em uma fonte small-caps (onde todas as letras ficam em caixa-alta enquanto aparecem em um tamanho de fonte menor do que as letras originais no texto).

```css
p.small { 
  font-variant: small-caps; 
 } 
```

#### Mais Informações:

*   [Escolas W3 - Fonte CSS](https://www.w3schools.com/css/css_font.asp)
*   [MND - Fonte CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
*   [CSSFontStack](https://www.cssfontstack.com/)
