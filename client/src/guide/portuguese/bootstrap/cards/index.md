---
title: Cards
localeTitle: Postais
---
## \# Bootstrap 4 Cartões

*   Usando o Bootstrap 4, você pode criar cartões.
    
*   Cartões são caixas delimitadas com um pouco de preenchimento em torno do conteúdo dentro delas, que podem ser usadas para exibir convenientemente um conjunto específico de informações.
    

##### Para criar uma placa básica do Bootstrap 4, você precisa criar um contêiner `<div>` com a classe `.card` e dentro de outro contêiner `<div>` com a classe `.card-body`

###### É assim que vai parecer num documento html

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-body">Content</div> 
 </div> 
```

## \### Cabeçalho e rodapé

A estrutura do cartão pode ser aprimorada pela adição de um cabeçalho e um rodapé. Para adicionar um desses elementos, você deve criar um contêiner `<div>` com a `.card-header` ou `.card-footer` .

###### É assim que vai parecer num documento html

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-header">Header content</div> 
  <div class="card-body">Body content</div> 
  <div class="card-footer">Footer content</div> 
 </div> 
```

## \### Cartões com imagens

*   Você também pode usar classes específicas para exibir imagens em cartões.
    
*   Existem duas classes para essa finalidade: card-img-top, que coloca uma imagem na parte superior da placa, e card-img-bottom, que coloca a imagem na parte inferior, ambas encaixando-as na borda arredondada do cartão. o cartão ordenadamente.
    
*   Essas classes devem ser usadas com a tag `<img>` dentro de um cartão para funcionar corretamente.
    
*   Lembre-se de que, se você quiser que uma imagem abranja toda a largura, adicione o contêiner de imagens fora do contêiner `<div>` com a classe de corpo do cartão.
    

###### É assim que vai parecer num documento html

```html

<div class="card"> 
 <!-- content of the card goes here --> 
 <!-- image on the top of the content --> 
  <img src="picture.jpg" alt="Picture" class="card-img-top"> 
  <div class="card-body">Body content</div> 
 </div> 
 <div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-body">Body content</div> 
 <!-- image on the bottom of the content --> 
  <img src="picture.jpg" alt="Picture" class="card-img-bottom"> 
 </div> 
```

## \### Sobreposição de cartões

*   Para criar uma imagem no plano de fundo do cartão e exibir o texto em cima, é necessário usar o img-overlay de cartão de classe no conteúdo, que você deseja exibir sobre a imagem, em vez de usar a classe body-card. .

###### É assim que vai parecer num documento html

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <img src="picture.jpg" alt="Picture" class="card-img-top"> 
 <!-- this content is displayed over the image, which is now in the background and covers the whole element --> 
  <div class="card-img-overlay">Overlay content</div> 
 </div> 

```