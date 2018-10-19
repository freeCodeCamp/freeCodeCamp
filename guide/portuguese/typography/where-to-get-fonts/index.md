---
title: Where to Get Fonts
localeTitle: Onde obter fontes
---
## Onde obter fontes

Os serviços de fontes on-line, como o Google Fonts ou o Font Squirrel, fornecem uma maneira fácil de usar fontes diferentes no seu site sem a necessidade de se preocupar se a pessoa que está visualizando o site terá ou não a fonte disponível no sistema.

### Fontes baixadas

Sites como o Font Squirrel permitem que você baixe os arquivos de fontes escolhidos. Uma vez feito isso, você tem que enviá-los no servidor que hospeda seu site. Para usá-los, você precisa declará-los em sua folha de estilos CSS, o que significa dizer ao seu CSS que peça ao navegador do usuário para exibi-lo. Declare que uma fonte geralmente é feita usando `@font-face` no topo da sua folha de estilo CSS.

```css
@font-face { 
  font-family: "My Super Awesome Open Sans Font"; /* name that you will use later to apply the font */ 
  src: url("/fontfolder/open-sans.woff"); /* path to the file */ 
 } 
 body { 
  font-family: "My Super Awesome Open Sans Font"; 
 } 
```

Observe que você também pode especificar o formato da fonte de acordo com a compatibilidade do navegador como a seguir.

```css
@font-face { 
 font-family: "My Super Awesome Open Sans Font"; 
 src: url("/fontfolder/open-sans.woff"); format("woff"), 
 } 
```

### Google Fonts

Com o Google Fonts, você não precisa fazer o upload dos arquivos de fontes no seu site, basta colocar um determinado link na `head` do seu site.

Para usar o Google Fonts, navegue pelo [site](https://fonts.google.com/) para encontrar a fonte que funciona melhor para o seu projeto. Depois de escolher, clique no sinal de mais (+) ao lado da fonte. Uma barra aparecerá na parte inferior da tela. Clique nisso. Você receberá várias linhas de código. Copie e cole a linha de HTML na cabeça do seu arquivo HTML acima do existente  elemento. Então pegue o CSS e use-o onde for necessário na sua folha de estilo.

```html

<html> 
  <head> 
  <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"> 
  </head> 
  <body> 
  Some text. 
  </body> 
 </html> 
```

```css
body{ 
  font-family: "Inconsolata", monospace; 
 } 
```

Você está feito! Você tem novas fontes para o seu site.

##### Recursos adicionais:

*   [Google Fonts](http://fonts.google.com)
*   [FontSpace](http://www.fontspace.com)
*   [Esquilo fonte](http://fontsquirrel.com)
*   [DaFont](http://www.dafont.com)
*   [1001 Fontes Gratuitas](http://www.1001freefonts.com)
*   [Behance](https://www.behance.net)
*   [MyFonts](https://www.myfonts.com/)
*   [FontFreak](https://www.fontfreak.com/)
*   [Creative Market](https://creativemarket.com/fonts)

#### Mais Informações:

*   [Visão geral de fontes da Web da Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
