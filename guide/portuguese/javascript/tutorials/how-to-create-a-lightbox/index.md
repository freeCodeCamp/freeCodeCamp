---
title: How to Create a Lightbox
localeTitle: Como criar um lightbox
---
## Como criar um lightbox

### Introdução

Uma mesa de luz é uma combinação de dois componentes, um [modal](https://en.wikipedia.org/wiki/Modal_window) e uma apresentação de slides. Aqui você construirá uma lightbox simples usando `HTML` , `CSS` e `JavaScript` .

A caixa de luz estará contida no modal, que será acionado por algum `JavaScript` , a partir de [manipuladores de eventos](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) na marcação `HTML` . Você construirá estilos que fornecerão estado com `CSS` e comportamento com `JavaScript` . Você também encontrará uma lista de referência dos métodos que você usa e outros bits úteis relacionados a este tutorial, na parte inferior.

#### Nossas Imagens

As imagens que vamos usar estão sendo fornecidas pela [Pexels](https://www.pexels.com/) , uma galeria de fotos gratuita que permite fornecer imagens de alta qualidade aos seus projetos de forma rápida, gratuita e geralmente sem atribuições necessárias.

#### Apenas mostre-me o código!

Um exemplo ao vivo pode ser encontrado [aqui - CodePen / Lightbox](https://codepen.io/rdev-rocks/pen/KXNzvo) e um rascunho completo do código está perto da parte inferior.

### Etapa 1. O Markup

A marcação, ou `HTML` , fornece a estrutura para a lightbox.

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

### Etapa 2. Estilo com CSS

O `CSS` fornece estados diferentes para a sua mesa de luz. Coisas como visibilidade, posicionamento e efeitos de foco.

Sua folha de estilo deve ficar assim:

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

### Etapa 3. JavaScript

Agora para os negócios! Seu JavaScript deve ficar assim:

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

E é isso! Agora coloque todo o código juntos. Agora você deve ter uma lightbox funcional.

### Todo o código

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

## \### Mais Informações:

#### HTML

[Modal](https://en.wikipedia.org/wiki/Modal_window) - uma janela pop-up

[Manipuladores de Eventos](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) - propriedades HTML que escutam eventos de usuários.

[Entidade](https://developer.mozilla.org/en-US/docs/Glossary/Entity) - Uma string que representa um caractere reservado em HTML.

#### CSS

[box-sizing:](https://css-tricks.com/box-sizing/) - Uma propriedade CSS3 que controla a maneira como o navegador processa o conteúdo com base na altura e na largura.

[Flex-box](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - Uma nova tecnologia que ajuda a posicionar o conteúdo HTML em um manor responsivo.

[: hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - Um pseudo-seletor que é acionado quando um usuário passa o mouse sobre um elemento quando essa classe é atribuída a ele.

#### JavaScript

[Deixe](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) uma variável de escopo de bloco.

[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) Uma constante de escopo de bloco.

[getElementById ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) - Um método de documento que retorna uma referência a um elemento HTML.

[getElementsByClassName ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) - Um método de documento que retorna uma matriz de referências ao html que possui classes correspondentes.

[\+ =](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) - um operador de atribuição que adicionará números ou concatenará strings.

#### Recursos:

[Exemplo ao vivo](https://codepen.io/rdev-rocks/pen/KXNzvo?editors=1111) - Uma CodePen que demonstra o código acima.

[Flex-Box Interativa](https://codepen.io/enxaneta/full/adLPwv) - Uma CodePen interativa que mostra o comportamento flex-box.

[Pexels](https://www.pexels.com/) - Uma galeria de fotos.

[MDN](https://developer.mozilla.org/en-US/) - Um ótimo lugar para informações sobre coisas da web.

[W3School - Lightbox](https://www.w3schools.com/howto/howto_js_lightbox.asp) - Este código foi inspirado a partir daqui. Obrigado W3Schools!