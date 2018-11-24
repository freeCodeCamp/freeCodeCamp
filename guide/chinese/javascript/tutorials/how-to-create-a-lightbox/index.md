---
title: How to Create a Lightbox
localeTitle: 如何创建灯箱
---
## 如何创建灯箱

### 介绍

灯箱是两个组件的组合， [模态](https://en.wikipedia.org/wiki/Modal_window)和幻灯片放映。在这里，您将使用`HTML` ， `CSS`和`JavaScript`构建一个简单的灯箱。

灯箱将包含在模式中，该模式将由一些`JavaScript`从`HTML`标记中的[事件处理程序](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)触发。 您将构建将使用`JavaScript`为状态提供`CSS`和行为的`CSS` 。您还可以在底部找到您使用的方法的参考列表以及与本教程相关的其他有用的tid位。

#### 我们的形象

我们将使用的图像由[Pexels](https://www.pexels.com/)提供， 一个免费的库存照片库，允许您快速，免费地为他们的项目提供高质量的图像，通常没有所需的属性。

#### 只是告诉我代码！

这里有一个实例可以找到[\- CodePen / Lightbox](https://codepen.io/rdev-rocks/pen/KXNzvo)和代码的完整草案接近底部。

### 第1步。标记

标记或`HTML`提供灯箱的结构。

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

### 第2步。使用CSS样式

`CSS`为您的灯箱提供不同的状态。可见性，定位和悬停效果等。

您的样式表应如下所示：

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

### 第3步.JavaScript

现在去做生意！您的JavaScript应如下所示：

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

这就是它！现在将所有代码放在一起。你现在应该有一个功能性的灯箱。

### 所有守则

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

## ＃＃＃ 更多信息：

#### HTML

[模态](https://en.wikipedia.org/wiki/Modal_window) - 弹出窗口

[事件处理程序](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) - 侦听用户事件的HTML属性。

[实体](https://developer.mozilla.org/en-US/docs/Glossary/Entity) - 表示HTML中保留字符的字符串。

#### CSS

[box-sizing：](https://css-tricks.com/box-sizing/) - 一个CSS3属性，用于控制浏览器根据高度和宽度呈现内容的方式。

[Flex-box](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - 一种新技术，有助于在响应式操作中定位HTML内容。

[：hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - 当用户将一个元素悬停在元素上时会触发的伪选择器。

#### JavaScript的

[让](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)一个块范围变量。

[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)一个块范围常量。

[getElementById（）](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) - 一个返回对HTML元素的引用的文档方法。

[getElementsByClassName（）](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) - 一个document方法，它返回对具有匹配类的html的引用数组。

[\+ =](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) - 一个赋值运算符，它将添加数字或连接字符串。

#### 资源：

[实例](https://codepen.io/rdev-rocks/pen/KXNzvo?editors=1111) - 用于演示上述代码的CodePen。

[交互式Flex-Box](https://codepen.io/enxaneta/full/adLPwv) - 一种显示弹性框行为的交互式CodePen。

[Pexels](https://www.pexels.com/) - 免费图片库。

[MDN](https://developer.mozilla.org/en-US/) - 关于网络信息的好地方。

[W3School - 灯箱](https://www.w3schools.com/howto/howto_js_lightbox.asp) - 此代码的灵感来自于此。谢谢W3Schools！