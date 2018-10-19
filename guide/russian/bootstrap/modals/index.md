---
title: Modals
localeTitle: манеры
---
## модальности

Модалы - это всплывающие окна для предоставления важной информации, прежде чем продолжить.

Чтобы создать такие диалоги / всплывающие окна в верхней части текущей страницы, Bootstrap предоставляет плагин Modal.

#### Пример кода:

```html

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
```

#### Понимание используемых атрибутов и классов:

a) `data-toggle = "modal"` : он открывает модальный.

b) `data-target` : она указывает на идентификатор модальности, который должен открыться.

c) `data-dismiss="modal"` : это приводит к закрытию всплывающего окна при нажатии кнопки закрытия.

d) `.modal` class идентифицирует содержимое `<div>` как модальное.

e) `.modal-dialog` class устанавливает правильную высоту и ширину диалога.

f). `.modal-content` стилирует модальный. Он содержит разделы заголовка, тела и нижнего колонтитула.

g) `.modal-header` обозначает секцию заголовка модальной (заголовок и (×)).

h) `.modal-title` класс `.modal-title` заголовок модала с соответствующей высотой.

i) `.modal-body` класс `.modal-body` модального (диалог / всплывающее окно). Он может иметь другие разметки, такие как `<p>,<img>,<video>` и т. д.

j). `.modal-footer` - нижний колонтитул модального.

#### Дополнительная информация :

[Загрузочный мод](https://bootstrapbay.com/blog/working-bootstrap-modal/)

Если вы хотите изучить **__Bootstrap 4.0 Latest (Alpha version)__** : [Bootstrap Modal v4.0](https://getbootstrap.com/docs/4.0/components/modal/)