---
title: CSS Classes
localeTitle: Classes CSS
---
## Classes CSS

Classes são uma maneira eficiente de agrupar elementos HTML para que eles possam compartilhar os mesmos estilos. As classes CSS (Cascading Style Sheets) podem ser usadas para organizar e decorar elementos de páginas da web.

Ao escrever HTML, você pode adicionar classes a um elemento. Basta adicionar o atributo `class="myclass"` ao elemento. Vários elementos podem ter a mesma classe e um elemento pode ter várias classes. Você pode atribuir várias classes a um elemento adicionando todos os nomes de classes desejados separados por um espaço ao atributo de `class` em HTML.

```html

<h1 class="super-man other-class third-class">"Here I come to save the day!"</h1> 
 <p>is a popular catchphrase that <span class="super-man">Super Man</span> often said.</p> 
```

Você pode, então, estilizar esses elementos com CSS. As classes são referenciadas com o período (.) antes delas no CSS, mas você não deve colocar pontos no seu HTML.

```css
.super-man { 
  color: red; 
  background-color: blue; 
 } 
```

Este código dá um fundo azul e uma cor de texto vermelho para todos os elementos que têm o `super-man` de classe. [Veja este exemplo no CodePen](https://codepen.io/Tlandis/pen/RLvomV) .

Você também pode declarar mais de uma classe para seu elemento, como:

```html

<div class="ironMan alfred"> 
 We're going to save you. 
 </div> 
```

Então no seu arquivo CSS:

```css
.ironMan{ 
 color:red; 
 } 
 
 .alfred{ 
 background-color: black; 
 } 
```

**Nota:** nomes de classes são tradicionalmente todos minúsculos, com cada palavra em um nome de classe com várias palavras separadas por hífens (por exemplo, "super-homem").

Você também pode combinar classes na mesma linha:

```css
.superMan .spiderMan { 
 color: red; 
 background-color: blue; 
 } 
```

Você pode ver o resultado do código acima [aqui](https://codepen.io/Tlandis/pen/RLvomV) . Aprenda como combinar classes CSS usando seletores [aqui](https://www.w3schools.com/css/css_combinators.asp) .

#### Mais Informações:

*   [Seletor de Classe CSS, w3 schools](https://www.w3schools.com/cssref/sel_class.asp)
*   [Classes HTML, w3 Escolas](https://www.w3schools.com/html/html_classes.asp)
*   [truques css](https://css-tricks.com/how-css-selectors-work/)
*   [Como codificar em HTML5 e CSS3](http://howtocodeinhtml.com/chapter7.html)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
