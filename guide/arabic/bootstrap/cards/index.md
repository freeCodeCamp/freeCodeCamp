---
title: Cards
localeTitle: بطاقات
---
## \# بطاقات Bootstrap 4

*   باستخدام Bootstrap 4 يمكنك إنشاء بطاقات.
    
*   البطاقات هي مربعات متقاربة مع بعض الحشو حول المحتوى الموجود داخلها ، والتي يمكن استخدامها لعرض مجموعة معينة من المعلومات بسهولة.
    

##### لإنشاء الأساسية بطاقة التمهيد 4، تحتاج إلى إنشاء `<div>` حاوية مع الطبقة `.card` وداخل آخر `<div>` حاوية مع فئة `.card-body`

###### هذه هي الطريقة التي ستبدو في مستند HTML

 `
<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-body">Content</div> 
 </div> 
` 

## \### رأس وتذييل الصفحة

يمكن تحسين هيكل البطاقة بإضافة رأس وتذييل. لإضافة أحد هذه العناصر ، يجب عليك إنشاء حاوية `<div>` باستخدام فئة `.card-header` أو `.card-footer` .

###### هذه هي الطريقة التي ستبدو في مستند HTML

 `
<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-header">Header content</div> 
  <div class="card-body">Body content</div> 
  <div class="card-footer">Footer content</div> 
 </div> 
` 

## \### بطاقات مع الصور

*   يمكنك أيضًا استخدام فئات محددة لعرض الصور في البطاقات.
    
*   هناك فئتان لهذا الغرض: card-img-top ، والتي تضع صورة على الجزء العلوي من البطاقة ، وبطاقة img-bottom ، والتي تضع الصورة في الأسفل ، وكلاهما يتناسبان مع الحدود المستديرة البطاقة بدقة.
    
*   يجب استخدام هذه الفئات مع العلامة `<img>` داخل بطاقة للعمل بشكل صحيح.
    
*   ضع في اعتبارك أنه إذا كنت تريد أن تمتد الصورة إلى العرض بالكامل ، فيمكنك إضافة حاوية الصورة خارج الحاوية `<div>` مع فئة بطاقة الجسم.
    

###### هذه هي الطريقة التي ستبدو في مستند HTML

 `
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
` 

## \### تراكب البطاقات

*   لإنشاء صورة في خلفية البطاقة وعرض النص فوقها ، يلزمك استخدام طبقة - img-overlay على المحتوى ، الذي تريد عرضه فوق الصورة ، بدلاً من استخدام فئة بطاقة الجسم .

###### هذه هي الطريقة التي ستبدو في مستند HTML

 `
<div class="card"> 
 <!-- content of the card goes here --> 
  <img src="picture.jpg" alt="Picture" class="card-img-top"> 
 <!-- this content is displayed over the image, which is now in the background and covers the whole element --> 
  <div class="card-img-overlay">Overlay content</div> 
 </div> 
`