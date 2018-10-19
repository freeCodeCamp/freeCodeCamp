---
title: Add Font Awesome Icons to all of our Buttons
localeTitle: Добавить шрифт Удивительные иконки ко всем нашим кнопкам
---
## Добавить шрифт Удивительные иконки ко всем нашим кнопкам

### Проблема Объяснение

Используйте Font Awesome, чтобы добавить значок `info-circle` в вашу информационную кнопку и значок `trash` на вашу кнопку удаления.

#### Полезные ссылки:

*   [Шрифт Awesome](https://fontawesome.com/)
*   [Различные шрифты Awesome v4 и v5](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4)

### намек

*   Шрифт Awesome stylesheet этой страницы - версия 4.5.0, поэтому вам следует использовать префикс `fa` вместо нового `fas` . Проверьте [ссылку,](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4) чтобы узнать больше о различиях между v4 и new v5.
*   Логотипы и соответствующие классы CSS для логотипов можно найти [здесь](https://fontawesome.com/icons?d=gallery) .
*   Добавление пробела между `<i>` и текстом даст ему хороший интервал.

## Осторожно, спойлеры!

**Решение впереди!**

### Решение:

```html

<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> 
 <style> 
  h2 { 
    font-family: Lobster, Monospace; 
  } 
 
  .thick-green-border { 
    border-color: green; 
    border-width: 10px; 
    border-style: solid; 
    border-radius: 50%; 
  } 
 </style> 
 
 <div class="container-fluid"> 
  <div class="row"> 
    <div class="col-xs-8"> 
      <h2 class="text-primary text-center">CatPhotoApp</h2> 
    </div> 
    <div class="col-xs-4"> 
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a> 
    </div> 
  </div> 
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera."> 
  <div class="row"> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button> 
    </div> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i>Info</button> 
    </div> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i>Delete</button> 
    </div> 
  </div> 
  <p>Things cats <span class="text-danger">love:</span></p> 
  <ul> 
    <li>cat nip</li> 
    <li>laser pointers</li> 
    <li>lasagna</li> 
  </ul> 
  <p>Top 3 things cats hate:</p> 
  <ol> 
    <li>flea treatment</li> 
    <li>thunder</li> 
    <li>other cats</li> 
  </ol> 
  <form action="/submit-cat-photo"> 
    <label><input type="radio" name="indoor-outdoor"> Indoor</label> 
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label> 
    <label><input type="checkbox" name="personality"> Loving</label> 
    <label><input type="checkbox" name="personality"> Lazy</label> 
    <label><input type="checkbox" name="personality"> Crazy</label> 
    <input type="text" placeholder="cat photo URL" required> 
    <button type="submit">Submit</button> 
  </form> 
 </div> 

```