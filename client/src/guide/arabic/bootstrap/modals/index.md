---
title: Modals
localeTitle: أخلاق
---
## شرطية

النماذج عبارة عن نوافذ منبثقة لتوفير معلومات مهمة قبل مواصلة المتابعة.

لإنشاء مربعات حوار / نوافذ منبثقة أعلى الصفحة الحالية يوفر Bootstrap ملحقًا مشروطًا.

#### مثال الكود:

 `
<!DOCTYPE html> 
 <html> 
  <head> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width"> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> 
 
 <!-- jQuery library --> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
 
 <!-- Latest compiled JavaScript --> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
 </head> 
 
  <body> 
 
 <!-- Triggering the modal popup --> 
   <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Open Modal</button> 
 
  <!-- Modal popup --> 
 
   <div class="modal fade" id="myModal"> 
       <div class="modal-dialog"> 
 
  <!-- Modal Content --> 
            <div class="modal-content"> 
              <div class="modal-header"> 
                <button  type="button" data-dismiss="modal" class="close">&times;</button> 
                <h4 class="modal-title">Modal Header</h4> 
              </div> 
 
              <div class="modal-body"> 
                Do you wish to continue? 
              </div> 
 
              <div class="modal-footer"> 
                <button class="btn btn-default"  data-dismiss="modal">close</button> 
              </div> 
 
            </div> 
        </div> 
 
   </div> 
 
 </body> 
 </html> 
` 

#### فهم السمات والفئات المستخدمة:

a) `data-toggle = "modal"` : يُفتح الملف.

ب) `data-target` : يشير إلى معرف النموذج الذي يتم فتحه.

c) `data-dismiss="modal"` : يؤدي هذا إلى إغلاق النافذة المنبثقة عند النقر فوق زر الإغلاق.

د) `.modal` فئة `.modal` محتويات `<div>` كطريقة `.modal` .

ه) `.modal-dialog` فئة `.modal-dialog` الارتفاع المناسب وعرض مربع الحوار.

f) أنماط فئة `.modal-content` -modal modal.It يحتوي على أقسام رأس والجسم وتذييل الصفحة.

g). `.modal-header` فئة `.modal-header` إلى مقطع الرأس في `.modal-header` (العنوان وزر (×)).

ح) أنماط الطبقة `.modal-title` رأس الوسائط مع ارتفاع مناسب.

ط) أنماط الطبقة `.modal-body` من الوسائط (الحوار / المنبثقة). يمكن أن يكون لها علامات أخرى مثل `<p>,<img>,<video>` إلخ.

ط) أنماط الطبقة `.modal-footer` الصفحة تذييل الوسائط.

#### معلومات اكثر :

[Bootstrap مشروط](https://bootstrapbay.com/blog/working-bootstrap-modal/)

إذا كنت ترغب في استكشاف **__Bootstrap 4.0 (إصدار Alpha)__** : [Bootstrap Modal v4.0](https://getbootstrap.com/docs/4.0/components/modal/)