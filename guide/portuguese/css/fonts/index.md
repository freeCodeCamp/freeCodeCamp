---
title: Fonts
localeTitle: Fontes
---
## Fontes

As propriedades da fonte CSS definem a família de fontes, o peso, o tamanho, a variante, a altura da linha e o estilo de um texto.

### Família de fontes

A família de fontes de um texto é definida simplesmente usando a propriedade `font-family` .

Ele funciona com um sistema de _fallback_ , se o seu navegador não suporta a primeira fonte, ele tenta com o próximo e assim por diante. Se o nome da fonte for maior que uma palavra, ela deve estar entre aspas.

```css
p { 
    font-family: "Times New Roman", Times, serif; 
 } 
```

No exemplo acima, "Times New Roman" é o da fonte, enquanto "serif" é o . Nomes genéricos são usados ​​como fallback mecanismo para preservar o estilo se o nome da família não estiver disponível. Um nome genérico deve ser sempre o último item da lista de nomes de famílias de fontes. Genérico nomes de família são serif, sans-serif, monospace, cursiva, fantasia, system-ui.

### Estilo de fonte

A propriedade `font-style` pode ser usada para especificar texto em itálico.

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
*   `em` - `1em` = o tamanho atual da fonte, então `1em` = `16px` (recomendado pelo W3C)
*   `small` , `medium` , `large` - conhecido como valores de tamanho absoluto
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

A propriedade `font-weight` especifica o peso (ou negrito) da fonte. Aceita palavras-chave ( `bold` , `normal` , `bolder` , `bolder` `lighter` ) ou palavras-chave numéricas ( `100` , `200` , `300` , `400` etc.) `400` é o mesmo que o `normal` .

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

A propriedade `font-variant` especifica se um texto deve ser exibido em uma fonte small-caps (onde todas as letras minúsculas são convertidas em letras maiúsculas enquanto aparecem em um tamanho de fonte menor do que as letras maiúsculas originais no texto).

```css
p.small { 
  font-variant: small-caps; 
 } 
```

#### Mais Informações:

*   [Escolas W3 - Fonte CSS](https://www.w3schools.com/css/css_font.asp)
*   [MND - Fonte CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
*   [CSSFontStack](https://www.cssfontstack.com/)