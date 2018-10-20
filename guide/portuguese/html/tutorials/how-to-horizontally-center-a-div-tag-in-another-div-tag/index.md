---
title: How to Horizontally Center a Div Tag in Another Div Tag
localeTitle: Como centralizar horizontalmente uma tag Div em outra tag Div
---
## Como centralizar horizontalmente uma tag Div em outra tag Div

Centrar horizontalmente um `<div>` dentro de outro `<div>` é bem fácil.

Vamos começar criando duas tags div com as classes "parent" e "child". O pai será nosso contêiner e o filho será o `<div>` que estamos centralizando horizontalmente.

```html

<!DOCTYPE html> 
 <html> 
 <head> 
  <meta charset="UTF-8"> 
  <title>How to Horizontally Center a Div Tag in Another Div Tag</title> 
 </head> 
 <body> 
  <div class="parent"> 
    <div class="child"> 
      <p>This is the center.</p> 
    </div> 
  </div> 
 </body> 
 </html> 
```

Existem algumas maneiras de lidar com isso, mas para este tutorial vamos nos concentrar em dois. No primeiro vamos centralizar nosso filho `<div>` usando `margin` e no segundo usaremos o `flexbox` .

### Exemplo de centralização de uma tag Div com margens

Se você especificar uma `width` em seu filho div, você pode usar `margin: auto` . Isso centralizará seu filho `<div>` distribuindo uniformemente suas margens esquerda e direita.

```css
.parent { 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  width: 50%; 
  margin: auto; 
  border: 1px solid black; 
 } 
```

### Exemplo de centralização de uma tag Div com o Flexbox

Usar o flexbox para centralizar um `<div>` é um pouco diferente. Primeiro, não requer que você especifique a `width` do seu filho `<div>` . Segundo, você realmente centraliza o filho `<div>` aplicando propriedades css no pai `<div>` .

Para centralizar um filho `<div>` usando o flexbox, é necessário usar `display: flex` junto com `justify-content: center` no pai `<div>` .

```css
.parent { 
  display: flex; 
  justify-content: center; 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  border: 1px solid black; 
 } 
```

#### Mais Informações:

[Matriz de suporte do Flexbox](http://caniuse.com/#search=flexbox)