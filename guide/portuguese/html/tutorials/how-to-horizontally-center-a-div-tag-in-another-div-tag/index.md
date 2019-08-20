---
title: How to Horizontally Center a Div Tag in Another Div Tag
localeTitle: Como centralizar horizontalmente uma tag Div em outra tag Div
---
## Como Centralizar Horizontalmente uma Tag Div em Outra Tag Div

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

Existem algumas maneiras de lidar com isso, mas para este tutorial vamos nos concentrar em dois. No primeiro vamos centralizar nosso `<div>` filho usando `margin` e no segundo usaremos o `flexbox` .

### Exemplo de Centralização de uma Tag Div com Margens

Se você especificar uma `width` em seu div filho, você pode usar `margin: auto`. Isso centralizará seu `<div>` filho distribuindo uniformemente suas margens esquerda e direita.

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

### Exemplo de Centralização de uma Tag Div com o Flexbox

Usar o flexbox para centralizar um `<div>` é um pouco diferente. Primeiro, não requer que você especifique a `width` do seu `<div>` filho. Segundo, você realmente centraliza o `<div>` filho aplicando propriedades css no `<div>` pai.

Para centralizar um `<div>` filho usando o flexbox, é necessário usar `display: flex` junto com `justify-content: center` no `<div>` pai.

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
