---
title: HTML and CSS Cheat Sheet
localeTitle: Cheat Sheet HTML e CSS
---
Esta é uma página que (esperançosamente) com o tempo irá crescer para cobrir as soluções básicas e simples de HTML e CSS.

Por favor, adicione às suas soluções alternativas se você conhece uma maneira diferente.

## Tornando uma regra horizontal `<hr>` menor

```css
    hr { 
      width: 75%; 
      margin-left: auto; 
      margin-right: auto; 
    } 
```

## Dar um plano de fundo sem rolagem `<div>`

```css
    #divName { 
      padding-top: 50px; 
      height: 500px; 
      color: #fff; 
      background-image: url("your_url.jpg"); 
      background-repeat: no-repeat; 
      background-attachment: fixed; 
      background-size: 100%; 
    } 
```

Experimente valores diferentes para ver como isso afeta a div e o over no html

```html

<div id="divName" class="container-fluid"> 
```

## Alinhamento vertical (para uma linha de texto)

Isso pode ser útil em um menu de navegação CSS. A chave é fazer com que a altura do menu e a altura da linha do texto sejam as mesmas. `css .nav li{ line-height:50px; height:50px; }` Mais truques interessantes [podem ser encontrados aqui](https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/)

## Centralizar uma lista horizontal

[http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/](http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/)

## Seções e contornos de um documento HTML

[https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Sections _e_ Outlines _de_ um documento _HTML5_](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)