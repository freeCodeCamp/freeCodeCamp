---
title: Carousel
localeTitle: Карусель
---
## карусель

Карусель - это компонент слайд-шоу для циклирования через такие элементы, как изображения или слайды текста. Он обеспечивает динамический способ представления большого количества данных (текста или изображений) путем скольжения или циклического перемещения, плавно

Пример кода слайдера изображения приведен ниже:

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

Понимание атрибутов и классов, используемых в приведенном выше примере:

### 1) Атрибуты

a) `data-ride` : - `data-ride ="carousel"` позволяет начать анимацию загрузки страницы.

б) `data-target` : - указывает на идентификатор карусели

c) `data-slide-to` : - Указывает, какой слайд перемещается при нажатии на индикаторы (определенные точки).

### 2) Классы

a) `carousel` : - `class="carousel"` указывает, что div содержит карусель.

b) `slide` : - Этот класс добавляет CSS-переходы.

c) `carousel-inner` : - Это обозначает раздел кода, который будет содержать текст / изображение, отображаемое в слайдах.

d) `item` : - Он относится к содержимому, которое должно отображаться в карусели.

e) `left carousal-control` : - Это добавляет кнопку «Назад», позволяющую сдвинуться до предыдущего слайда.

f) `right carousal-control` : - добавляет следующая кнопка, позволяющая перейти к следующему слайду.

g) `carousel-caption` : - Этот класс позволяет добавлять подписи к каждому слайду.

Примечание: добавьте `class="carousel-caption"` для каждого элемента.

### использование

#### 1) Через атрибуты данных

Атрибут `data-ride="carousel"` используется для обозначения карусели как анимации, начиная с загрузки страницы. `data-slide` принимает ключевые слова `prev` или `next` , что изменяет положение слайда относительно его текущего положения.

#### 2) Через JavaScript

Вызовите карусель вручную с помощью:

`$('.carousel').carousel()`

### Опции

Параметры могут передаваться через атрибуты данных или JavaScript. Для атрибутов данных добавьте имя параметра в `data-` , как в `data-interval=""` .

Некоторые часто используемые опции:

*   интервал
*   Пауза
*   поездка
*   заворачивать

## дополнительные детали

*   [Карусель для бутстрапа](https://getbootstrap.com/docs/4.0/components/carousel/)