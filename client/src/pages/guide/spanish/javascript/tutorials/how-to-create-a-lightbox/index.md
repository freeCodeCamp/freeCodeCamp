---
title: How to Create a Lightbox
localeTitle: Cómo crear una caja de luz
---
## Cómo crear una caja de luz

### Introducción

Un lightbox es una combinación de dos componentes, un [modal](https://en.wikipedia.org/wiki/Modal_window) y una presentación de diapositivas. Aquí construirás un sencillo lightbox usando `HTML` , `CSS` y `JavaScript` .

La caja de luz estará contenida en el modal, que se activará mediante algún `JavaScript` , desde los [controladores](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) de [eventos](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) en el marcado `HTML` . Construirás estilos que proporcionarán estado con `CSS` y comportamiento con `JavaScript` . También encontrará una lista de referencia de los métodos que utiliza y otros datos útiles relacionados con este tutorial, en la parte inferior.

#### Nuestras imagenes

Las imágenes que [usaremos](https://www.pexels.com/) están siendo suministradas por [Pexels](https://www.pexels.com/) , una galería de fotos de stock gratuita que le permite proporcionar imágenes de alta calidad a sus proyectos de forma rápida, gratuita y, por lo general, sin necesidad de atribuciones.

#### ¡Sólo muéstrame el código!

[Aquí](https://codepen.io/rdev-rocks/pen/KXNzvo) se puede encontrar un ejemplo en vivo [: CodePen / Lightbox](https://codepen.io/rdev-rocks/pen/KXNzvo) y un borrador completo del código está cerca del final.

### Paso 1. El marcado

El marcado, o `HTML` , proporciona la estructura para la caja de luz.

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

### Paso 2. Estilo con CSS

El `CSS` proporciona diferentes estados para su caja de luz. Cosas como la visibilidad, el posicionamiento y los efectos de desplazamiento.

Su hoja de estilo debe verse así:

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

### Paso 3. JavaScript

¡Ahora al negocio! Tu JavaScript debería verse así:

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

¡Y eso es! Ahora pon todos los códigos juntos. Ahora debería tener una caja de luz funcional.

### Todo el codigo

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

## \### Más información:

#### HTML

[Modal](https://en.wikipedia.org/wiki/Modal_window) - Una ventana emergente

[Controladores de eventos](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) : propiedades HTML que escuchan eventos de usuario.

[Entidad](https://developer.mozilla.org/en-US/docs/Glossary/Entity) : una cadena que representa un carácter reservado en HTML.

#### CSS

[tamaño de la caja:](https://css-tricks.com/box-sizing/) una propiedad CSS3 que controla la forma en que el navegador procesa el contenido en función de la altura y el ancho.

[Flex-box](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) : una nueva tecnología que ayuda a posicionar el contenido HTML en una forma sensible.

[: hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - Un pseudo-selector que se activa cuando un usuario se desplaza sobre un elemento cuando se le asigna esta clase.

#### JavaScript

[dejar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) una variable de ámbito de bloque.

[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) Una [constante de](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) bloque-alcance.

[getElementById ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) : un método de documento que devuelve una referencia a un elemento HTML.

[getElementsByClassName ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) : un método de documento que devuelve una matriz de referencias al html que tienen clases coincidentes.

[\+ =](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) - un operador de asignación que agregará números o concatenará cadenas.

#### Recursos:

[Ejemplo en vivo](https://codepen.io/rdev-rocks/pen/KXNzvo?editors=1111) : un CodePen que muestra el código anterior.

[Caja flexible interactiva](https://codepen.io/enxaneta/full/adLPwv) : un CodePen interactivo que muestra el comportamiento de la caja flexible.

[Pexels](https://www.pexels.com/) - Una galería de fotos gratis.

[MDN](https://developer.mozilla.org/en-US/) - Un gran lugar para obtener información sobre cosas web.

[W3School - Lightbox](https://www.w3schools.com/howto/howto_js_lightbox.asp) - Este código fue inspirado desde aquí. Gracias W3Schools!