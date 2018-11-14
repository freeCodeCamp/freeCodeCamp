---
title: How to Create a Lightbox
localeTitle: Как создать лайтбоксы
---
## Как создать лайтбоксы

### Введение

Лайтбокс представляет собой комбинацию из двух компонентов: [модального](https://en.wikipedia.org/wiki/Modal_window) и слайд-шоу. Здесь вы создадите простой лайтбокс, используя `HTML` , `CSS` и `JavaScript` .

Лайтбокс будет содержаться в модальном, который будет запускаться некоторыми `JavaScript` , из [обработчиков событий](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) в разметке `HTML` . Вы будете создавать стили, которые обеспечат состояние `CSS` и поведение с помощью `JavaScript` . Вы также найдете справочный список используемых вами методов и другие полезные бит tid, которые связаны с этим учебником, внизу.

#### Наши изображения

Изображения, которые мы будем использовать, поставляются компанией [Pexels](https://www.pexels.com/) , бесплатную фотогалерею, которая позволяет вам предоставлять высококачественные изображения своим проектам быстро, бесплатно и обычно без каких-либо атрибутов.

#### Просто покажи мне код!

Живой пример можно найти [здесь - CodePen / Лайтбокс,](https://codepen.io/rdev-rocks/pen/KXNzvo) а полная черновик кода находится внизу.

### Шаг 1. Разметка

Разметка или `HTML` , обеспечивает структуру для лайтбокса.

```html

<!-- Here is your access point for your user, a preview of the images you wish to display. 
     You use the onclick="" event handler to execute the methods you will define in the 
     JavaScript near the bottom --> 
 
 <div class="row"> 
  <div class="col"> 
     <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" onclick="openLightbox();toSlide(1)" class="hover-shadow preview" alt="Toy car on the road." /> 
  </div> 
  <div class="col"> 
     <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" onclick="openLightbox();toSlide(2)" class="hover-shadow preview" alt="Toy car exploring offroad." /> 
  </div> 
  <div class="col"> 
     <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" onclick="openLightbox();toSlide(3)" class="hover-shadow preview" alt="Toy car in the city." /> 
  </div> 
 </div> 
 
 <!-- This is your lightbox, it is contained in a modal. Here you provide all the images, 
     controls, and another set of preview images as the dots. Dots show your user which 
     image is currently active. Note that you use entities (eg &times;), more info on 
     them at the bottom. --> 
 
 <div id="Lightbox" class="modal"> 
  <span class="close pointer" onclick="closeLightbox()">&times;</span> 
  <div class="modal-content"> 
    <div class="slide"> 
        <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="image-slide" alt="Toy car on the road." /> 
    </div> 
    <div class="slide"> 
        <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="image-slide" alt="Toy car exploring offroad." /> 
    </div> 
    <div class="slide"> 
        <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="image-slide" alt="Toy car in the city." /> 
    </div> 
 
    <a class="previous" onclick="changeSlide(-1)">&#10094;</a> 
    <a class="next" onclick="changeSlide(1)">&#10095;</a> 
 
    <div class="dots"> 
      <div class="col"> 
        <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road" /> 
      </div> 
      <div class="col"> 
        <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="modal-preview hover-shadow" onclick="toSlide(2)" alt="Toy car exploring offroad." /> 
      </div> 
      <div class="col"> 
        <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="modal-preview hover-shadow" onclick="toSlide(3)" alt="Toy car in the city." /> 
      </div> 
    </div> 
  </div> 
 </div> 
```

### Шаг 2. Стиль с CSS

`CSS` предоставляет вам различные состояния для вашего лайтбокса. Такие вещи, как видимость, позиционирование и зависание.

Ваша таблица стилей должна выглядеть так:

```css
/* Here you provide a best practice's "reset", read more about it at the bottom! :) */ 
 
 html { 
  box-sizing: border-box; 
 } 
 
 *, *:before, *:after { 
  box-sizing: inherit; 
 } 
 
 body { 
  margin: 0; 
 } 
 
 /* You define the style of our previews here, you are using flex to display the images 
   "responsively". */ 
 
 .preview { 
  width: 100%; 
 } 
 
 .row { 
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
 } 
 
 .row > .col { 
  padding: 0 8px; 
 } 
 
 .col { 
  float: left; 
  width: 25%; 
 } 
 
 /* Now you want to define what the lightbox will look like. Note that you have the display 
   as none. You don't want it to show until the user clicks on one of the previews. 
   You will change this display property with JavaScript below. */ 
 
 .modal { 
  display: none; 
  position: fixed; 
  z-index: 1; 
  padding: 10px 62px 0px 62px; 
  left: 0; 
  top: 0; 
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: black; 
 } 
 
 .modal-content { 
  position: relative; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  margin: auto; 
  padding: 0 0 0 0; 
  width: 80%; 
  max-width: 1200px; 
 } 
 
 /* Same with your slides, you set the display to none, because you want to choose which 
   one is shown at a time. */ 
 
 .slide { 
  display: none; 
 } 
 
 .image-slide { 
  width: 100%; 
 } 
 
 .modal-preview { 
  width: 100%; 
 } 
 
 .dots { 
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
 } 
 
 /* You want the previews a little transparent to show that they are "inactive". 
   You then add an .active or :hover class to animate the selections for your user when 
   they interact with your controls and clickable content. 
 */ 
 
 img.preview, img.modal-preview { 
  opacity: 0.6; 
 } 
 
 img.active, 
 .preview:hover, 
 .modal-preview:hover { 
  opacity: 1; 
 } 
 
 img.hover-shadow { 
  transition: 0.3s; 
 } 
 
 .hover-shadow:hover { 
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
 } 
 
 .close { 
  color: white; 
  position: absolute; 
  top: 10px; 
  right: 25px; 
  font-size: 35px; 
  font-weight: bold; 
 } 
 
 .close:hover, 
 .close:focus { 
  color: #999; 
  text-decoration: none; 
  cursor: pointer; 
 } 
 
 .previous, 
 .next { 
  cursor: pointer; 
  position: absolute; 
  top: 50%; 
  width: auto; 
  padding: 16px; 
  margin-top: -50px; 
  color: white; 
  font-weight: bold; 
  font-size: 20px; 
  transition: 0.6s ease; 
  border-radius: 0 3px 3px 0; 
  user-select: none; 
  -webkit-user-select: none; 
 } 
 
 .next { 
  right: 0; 
  border-radius: 3px 0 0 3px; 
 } 
 
 .previous:hover, 
 .next:hover { 
  background-color: rgba(0, 0, 0, 0.8); 
 } 
```

### Шаг 3. JavaScript

Теперь к делу! Ваш JavaScript должен выглядеть так:

```javascript
// Initialize here and run showSlide() to give your lightbox a default state. 
 
 let slideIndex = 1; 
 showSlide(slideIndex); 
 
 // You are providing the functionality for your clickable content, which is 
 // your previews, dots, controls and the close button. 
 
 function openLightbox() { 
  document.getElementById('Lightbox').style.display = 'block'; 
 } 
 
 function closeLightbox() { 
  document.getElementById('Lightbox').style.display = 'none'; 
 }; 
 
 // Note that you are assigning new values here to our slidIndex. 
 
 function changeSlide(n) { 
  showSlide(slideIndex += n); 
 }; 
 
 function toSlide(n) { 
  showSlide(slideIndex = n); 
 }; 
 
 // This is your logic for the light box. It will decide which slide to show 
 // and which dot is active. 
 
 function showSlide(n) { 
  const slides = document.getElementsByClassName('slide'); 
  let modalPreviews = document.getElementsByClassName('modal-preview'); 
 
  if (n > slides.length) { 
    slideIndex = 1; 
  }; 
 
  if (n < 1) { 
    slideIndex = slides.length; 
  }; 
 
  for (let i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none"; 
  }; 
 
  for (let i = 0; i < modalPreviews.length; i++) { 
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', ''); 
  }; 
 
  slides[slideIndex - 1].style.display = 'block'; 
  modalPreviews[slideIndex - 1].className += ' active'; 
 }; 
```

И это все! Теперь соедините весь код. Теперь у вас должен быть функциональный лайтбокс.

### Все коды

```html

<body> 
  <style> 
    html { 
      box-sizing: border-box; 
    } 
 
    *, *:before, *:after { 
      box-sizing: inherit; 
    } 
 
    body { 
      margin: 0; 
    } 
 
    .preview { 
      width: 100%; 
    } 
 
    .row { 
      display: flex; 
      flex-direction: row; 
      justify-content: space-between; 
    } 
 
    .row > .col { 
      padding: 0 8px; 
    } 
 
    .col { 
      float: left; 
      width: 25%; 
    } 
 
    .modal { 
      display: none; 
      position: fixed; 
      z-index: 1; 
      padding: 10px 62px 0px 62px; 
      left: 0; 
      top: 0; 
      width: 100%; 
      height: 100%; 
      overflow: auto; 
      background-color: black; 
    } 
 
    .modal-content { 
      position: relative; 
      display: flex; 
      flex-direction: column; 
      justify-content: center; 
      margin: auto; 
      padding: 0 0 0 0; 
      width: 80%; 
      max-width: 1200px; 
    } 
 
    .slide { 
      display: none; 
    } 
 
    .image-slide { 
        width: 100%; 
    } 
 
    .modal-preview { 
        width: 100%; 
    } 
 
    .dots { 
        display: flex; 
        flex-direction: row; 
        justify-content: space-between; 
    } 
 
    img.preview, img.modal-preview { 
      opacity: 0.6; 
    } 
 
    img.active, 
    .preview:hover, 
    .modal-preview:hover { 
      opacity: 1; 
    } 
 
    img.hover-shadow { 
      transition: 0.3s; 
    } 
 
    .hover-shadow:hover { 
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
    } 
 
    .close { 
      color: white; 
      position: absolute; 
      top: 10px; 
      right: 25px; 
      font-size: 35px; 
      font-weight: bold; 
    } 
 
    .close:hover, 
    .close:focus { 
      color: #999; 
      text-decoration: none; 
      cursor: pointer; 
    } 
 
    .previous, 
    .next { 
      cursor: pointer; 
      position: absolute; 
      top: 50%; 
      width: auto; 
      padding: 16px; 
      margin-top: -50px; 
      color: white; 
      font-weight: bold; 
      font-size: 20px; 
      transition: 0.6s ease; 
      border-radius: 0 3px 3px 0; 
      user-select: none; 
      -webkit-user-select: none; 
    } 
 
    .next { 
      right: 0; 
      border-radius: 3px 0 0 3px; 
    } 
 
    .previous:hover, 
    .next:hover { 
      background-color: rgba(0, 0, 0, 0.8); 
    } 
  </style> 
  <div class="row"> 
    <div class="col"> 
       <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" onclick="openLightbox();toSlide(1)" class="hover-shadow preview" alt="Toy car on the road." /> 
    </div> 
    <div class="col"> 
       <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" onclick="openLightbox();toSlide(2)" class="hover-shadow preview" alt="Toy car exploring offroad." /> 
    </div> 
    <div class="col"> 
       <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" onclick="openLightbox();toSlide(3)" class="hover-shadow preview" alt="Toy car in the city" /> 
    </div> 
  </div> 
 
  <div id="Lightbox" class="modal"> 
 
    <span class="close pointer" onclick="closeLightbox()">&times;</span> 
    <div class="modal-content"> 
      <div class="slide"> 
        <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="image-slide" alt="Toy car on the road." /> 
      </div> 
      <div class="slide"> 
        <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="image-slide" alt="Toy car exploring offroad." /> 
      </div> 
      <div class="slide"> 
        <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="image-slide" alt="Toy car in the city." /> 
      </div> 
 
      <a class="previous" onclick="changeSlide(-1)">&#10094;</a> 
      <a class="next" onclick="changeSlide(1)">&#10095;</a> 
 
      <div class="dots"> 
        <div class="col"> 
          <img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> 
        </div> 
        <div class="col"> 
          <img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="modal-preview hover-shadow" onclick="toSlide(2)" alt="Toy car exploring offroad." /> 
        </div> 
        <div class="col"> 
          <img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="modal-preview hover-shadow" onclick="toSlide(3)" alt="Toy car in the city" /> 
        </div> 
      </div> 
    </div> 
  </div> 
 
  <script> 
    let slideIndex = 1; 
    showSlide(slideIndex); 
 
    function openLightbox() { 
      document.getElementById('Lightbox').style.display = 'block'; 
    }; 
 
    function closeLightbox() { 
      document.getElementById('Lightbox').style.display = 'none'; 
    }; 
 
    function changeSlide(n) { 
      showSlide(slideIndex += n); 
    }; 
 
    function toSlide(n) { 
      showSlide(slideIndex = n); 
    }; 
 
    function showSlide(n) { 
      const slides = document.getElementsByClassName('slide'); 
      let modalPreviews = document.getElementsByClassName('modal-preview'); 
 
      if (n > slides.length) { 
        slideIndex = 1; 
      }; 
 
      if (n < 1) { 
        slideIndex = slides.length; 
      }; 
 
      for (let i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
      }; 
 
      for (let i = 0; i < modalPreviews.length; i++) { 
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', ''); 
      }; 
 
      slides[slideIndex - 1].style.display = 'block'; 
      modalPreviews[slideIndex - 1].className += ' active'; 
    }; 
  </script> 
 </body> 
```

## \### Дополнительная информация:

#### HTML

[Modal](https://en.wikipedia.org/wiki/Modal_window) - всплывающее окно

[Обработчики событий](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) - свойства HTML, которые прослушивают пользовательские события.

[Entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity) - строка, представляющая зарезервированный charactor в HTML.

#### CSS

[box-size:](https://css-tricks.com/box-sizing/) - Свойство CSS3, которое управляет тем, как браузер отображает контент на основе высоты и ширины.

[Flex-box](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - новая технология, которая помогает с позиционированием содержимого HTML в отзывчивой манноре.

[: hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - псевдоселектор, который запускается, когда пользователь наводится на элемент, когда этому классу присваивается.

#### JavaScript

[пусть](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) переменная области блока.

[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) Константа блока-объема.

[getElementById ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) - метод документа, возвращающий ссылку на элемент HTML.

[getElementsByClassName ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) - метод документа, который возвращает массив ссылок на html, которые имеют соответствующие классы.

[\+ =](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) - оператор присваивания, который добавит числа или объединит строки.

#### Ресурсы:

[Живой пример](https://codepen.io/rdev-rocks/pen/KXNzvo?editors=1111) - CodePen, который демонстрирует вышеприведенный код.

[Интерактивный Flex-Box](https://codepen.io/enxaneta/full/adLPwv) - интерактивный CodePen, который показывает поведение гибких ящиков.

[Pexels](https://www.pexels.com/) - бесплатная фотогалерея.

[MDN](https://developer.mozilla.org/en-US/) - отличное место для информации о веб-материалах.

[W3School - Лайтбокс](https://www.w3schools.com/howto/howto_js_lightbox.asp) - Этот код был вдохновлен отсюда. Спасибо W3Schools!