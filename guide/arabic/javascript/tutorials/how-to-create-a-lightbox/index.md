---
title: How to Create a Lightbox
localeTitle: كيفية إنشاء صندوق الضوء
---
## كيفية إنشاء صندوق الضوء

### المقدمة

والصندوق المبسط هو مزيج من عنصرين ، أحدهما [مشروط](https://en.wikipedia.org/wiki/Modal_window) وعرض شرائح. هنا سوف تقوم ببناء صندوق خفيف بسيط باستخدام `HTML` و `CSS` و `JavaScript` .

سيتم تضمين صندوق الضوء في الوسائط ، التي سيتم تشغيلها بواسطة بعض `JavaScript` ، من [معالجات الأحداث](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) في ترميز `HTML` . ستقوم ببناء الأنماط التي ستوفر حالة مع `CSS` والسلوك مع `JavaScript` . ستجد أيضًا قائمة مرجعية بالطرق التي تستخدمها وغيرها من وحدات tid المفيدة ذات الصلة بهذا البرنامج التعليمي ، في الجزء السفلي.

#### صورنا

يتم توفير الصور التي [سنستخدمها](https://www.pexels.com/) بواسطة [Pexels](https://www.pexels.com/) ، معرض صور المخزون المجاني الذي يسمح لك بتوفير صور عالية الجودة لمشاريعهم بسرعة ، ومجانًا ، وعادة بدون الحاجة إلى استخدامات.

#### فقط أرني الكود!

يمكن العثور على مثال حي [هنا - CodePen / Lightbox](https://codepen.io/rdev-rocks/pen/KXNzvo) ومسودة كاملة للرمز بالقرب من القاع.

### الخطوة 1. الترميز

يوفر الترميز أو `HTML` ، بنية العلبة الخفيفة.

 `
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
` 

### الخطوة 2. نمط مع CSS

يوفر لك `CSS` حالات مختلفة لصندوق الضوء الخاص بك. أشياء مثل الرؤية ، وتحديد المواقع ، وتأثيرات التمرير.

يجب أن تبدو ورقة الأنماط الخاصة بك كما يلي:

 `/* Here you provide a best practice's "reset", read more about it at the bottom! :) */ 
 
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
` 

### الخطوة 3. جافا سكريبت

الآن للعمل! يجب أن تبدو جافا سكريبت مثل هذا:

 `// Initialize here and run showSlide() to give your lightbox a default state. 
 
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
` 

وهذا كل شيء! الآن ضع كل الكود معا. يجب أن يكون لديك الآن lightbox وظيفية.

### كل المدونة

 `
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
` 

## \### معلومات اكثر:

#### HTML

[مشروط](https://en.wikipedia.org/wiki/Modal_window) - نافذة منبثقة

[معالجات الأحداث](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) - خصائص HTML التي تستمع لأحداث المستخدم.

[Entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity) - سلسلة تمثل عارضًا محجوزًا في HTML.

#### CSS

[تحجيم المربعات:](https://css-tricks.com/box-sizing/) - خاصية CSS3 تتحكم في طريقة عرض المستعرض للمحتوى بناءً على الطول والعرض.

[Flex-box](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - تقنية جديدة تساعد في تحديد موقع محتوى HTML في mannor سريع الاستجابة.

[: hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - A pseudo-selector الذي يتم تشغيله عندما يمرر المستخدم عنصرًا عندما يتم تعيين هذه الفئة إليه.

#### جافا سكريبت

[السماح](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) لمتغير نطاق الكتلة.

[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) ثابت نطاق الكتلة.

[getElementById ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) - أسلوب مستند يقوم بإرجاع مرجع إلى عنصر HTML.

[getElementsByClassName ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) - أسلوب مستند يقوم بإرجاع مصفوفة من المراجع إلى html التي تحتوي على فئات متطابقة.

[\+ =](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) - عامل تخصيص والذي سيضيف أرقامًا أو يسلسل سلاسل.

#### مصادر:

[مثال حي](https://codepen.io/rdev-rocks/pen/KXNzvo?editors=1111) - CodePen الذي يقدم التعليمة البرمجية المذكورة أعلاه.

[صندوق Flex-Interactive](https://codepen.io/enxaneta/full/adLPwv) - برنامج CodePen تفاعلي يوضح سلوك صندوق المرونة.

[Pexels](https://www.pexels.com/) - معرض للصور المجانية للأوراق المالية.

[MDN](https://developer.mozilla.org/en-US/) - مكان رائع للحصول على معلومات حول عناصر الويب.

[W3School - Lightbox](https://www.w3schools.com/howto/howto_js_lightbox.asp) - استلهم هذا الرمز من هنا. شكرا W3Schools!