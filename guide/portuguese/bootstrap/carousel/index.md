---
title: Carousel
localeTitle: Carrossel
---
## Carrossel

O carrossel é um componente de apresentação de slides para percorrer elementos como imagens ou slides de texto. Ele fornece uma maneira dinâmica de representar uma grande quantidade de dados (texto ou imagens) deslizando ou passando de forma suave

Sample Code of Image Slider está abaixo:

```html

<html> 
 <head> 
 
 <!-- BootStrap's minified CSS version --> 
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"> 
 
 
 </head> 
 
 <style> 
 
 .carousel-indicators li 
 { 
 background-color:red; 
 } 
 
 .carousel-indicators .active 
 { 
 background-color:blue; 
 } 
 
 .carousel-indicators .item 
 { 
 height:700 px; 
 width :800 px; 
 } 
 </style> 
 
 
 <body> 
  <!-- Declaring div for Carousel to appear inside it --> 
 <div class="container"> 
 
 <div id="myCarousel" class="carousel slide" data-ride="carousel"> 
 
 <!-- Indicators --> 
 
 <ol class="carousel-indicators"> 
   <li data-target="#myCarousel" data-slide-to="0" class="active"></li> 
   <li data-target="#myCarousel" data-slide-to="1" ></li> 
   <li data-target="#myCarousel" data-slide-to="2"></li> 
 </ol> 
 
  <!-- Wrapper for Slides  --> 
 <div class="carousel-inner"> 
 
 <div  class="item active"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506241850/Hello_bootstrap_ohtphr.png" alt="Hello_Bootstrap" > 
 </div> 
 
 <div  class="item"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613859/devices_bootstrap_nk4zlk.jpg" alt="Device_Bootstrap" > 
 </div> 
 
 <div  class="item"> 
  <img src="http://res.cloudinary.com/dneh1l9vl/image/upload/v1506613966/responsive_bootstrap_nzuo9l.jpg" alt="Responsive_Bootstrap"> 
 </div> 
 
 </div> 
 
 <!-- Left and Right Controls for sliding through the slides  --> 
 
 <a class="left carousel-control"  href="#myCarousel" data-slide="prev"> 
 <span class="glyphicon glyphicon-chevron-left"></span> 
 </a> 
 
 <a class="right carousel-control"  href="#myCarousel" data-slide="next"> 
 <span class="glyphicon glyphicon-chevron-right"></span> 
 </a> 
 
 </div> 
 </div> 
 
 
 <!-- Optional JavaScript --> 
 <!-- jQuery first, then Popper.js, then Bootstrap JS --> 
 <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> 
 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script> 
 
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script> 
 
 </body> 
 </html> 
```

Entendendo os atributos e classes usados ​​no exemplo acima:

### 1) Atributos

a) `data-ride` : - `data-ride ="carousel"` permite que a animação do carregamento da página comece.

b) `data-target` : - aponta para o id do carrossel

c) `data-slide-to` : - Especifica para qual slide se deslocar ao clicar nos indicadores (pontos específicos).

### 2) Classes

a) `carousel` : - `class="carousel"` especifica que o div contém carrossel.

b) `slide` : - Esta classe adiciona transições CSS.

c) `carousel-inner` : - Indica a seção de código que conterá o texto / imagem a ser exibido nos slides.

d) `item` : - Refere-se ao conteúdo a ser exibido no carrossel.

e) `left carousal-control` : - Isso adiciona o botão de voltar, permitindo deslizar para o slide anterior.

f) `right carousal-control` : - Isso adiciona o próximo botão que permite deslizar para o próximo slide.

g) `carousel-caption` : - Esta classe permite que você adicione legendas a cada slide.

Nota: Adicione `class="carousel-caption"` para cada item.

### Uso

#### 1) Via atributos de dados

O atributo `data-ride="carousel"` é usado para marcar um carrossel como animação a partir do carregamento da página. `data-slide` aceita as palavras-chave `prev` ou `next` , que altera a posição do slide em relação à sua posição atual.

#### 2) Via JavaScript

Chame o carrossel manualmente com:

`$('.carousel').carousel()`

### Opções

As opções podem ser passadas por meio de atributos de dados ou JavaScript. Para atributos de dados, anexe o nome da opção aos `data-` , como em `data-interval=""` .

Algumas opções frequentemente usadas são:

*   intervalo
*   pausa
*   passeio
*   embrulho

## detalhes adicionais

*   [Carrossel de Bootstrap](https://getbootstrap.com/docs/4.0/components/carousel/)