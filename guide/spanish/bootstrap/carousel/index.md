---
title: Carousel
localeTitle: Carrusel
---
## Carrusel

Carrusel es un componente de presentación de diapositivas para recorrer elementos como imágenes o diapositivas de texto. Proporciona una forma dinámica de representar una gran cantidad de datos (texto o imágenes) deslizándolos o desplazándolos, de manera suave

El código de muestra del control deslizante de imagen está debajo:

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

Entendiendo los atributos y las clases usadas en el ejemplo anterior:

### 1) Atributos

a) `data-ride` : - `data-ride ="carousel"` permite que comience la animación en la carga de la página.

b) `data-target` : - apunta a la identificación del carrusel

c) `data-slide-to` : - Especifica a qué diapositiva mover cuando se hace clic en los indicadores (puntos específicos).

### 2) Clases

a) `carousel` : - `class="carousel"` especifica que el div contiene carrusel.

b) `slide` : - Esta clase agrega transiciones CSS.

c) `carousel-inner` : esto denota la sección de código que contendrá el texto / imagen que se mostrará en las diapositivas.

d) `item` : se refiere al contenido que se mostrará en el carrusel.

e) `left carousal-control` : - Esto agrega el botón de retroceso que permite deslizarse a la diapositiva anterior.

f) `right carousal-control` : - Esto agrega el siguiente botón que permite deslizarse a la siguiente diapositiva.

g) `carousel-caption` : - Esta clase le permite agregar títulos a cada diapositiva.

Nota: Agregue `class="carousel-caption"` para cada elemento.

### Uso

#### 1) A través de atributos de datos

El atributo `data-ride="carousel"` se usa para marcar un carrusel como animado comenzando en la carga de la página. `data-slide` acepta las palabras clave `prev` o `next` , lo que altera la posición de la diapositiva en relación con su posición actual.

#### 2) A través de JavaScript

Llame al carrusel manualmente con:

`$('.carousel').carousel()`

### Opciones

Las opciones se pueden pasar a través de atributos de datos o JavaScript. Para los atributos de datos, agregue el nombre de la opción a `data-` , como en `data-interval=""` .

Algunas opciones de uso frecuente son:

*   intervalo
*   pausa
*   paseo
*   envolver

## Detalles adicionales

*   [Carrusel de botas](https://getbootstrap.com/docs/4.0/components/carousel/)