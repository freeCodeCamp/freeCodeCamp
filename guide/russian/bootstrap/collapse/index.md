---
title: Collapse
localeTitle: коллапс
---
## Collapse

Collapse это плагин, который с помощью плавной анимации помогает скрывать и показывать элементы. Разработчики обычно используют bootstrap collapse чтобы скрыть или показать дополнительную информацию для какого-либо раздела веб-страницы. Например, у вас может быть список элементов с длинными описаниями, которые занимают на странице очень много места. Bootstrap collapse можно использовать что бы их скрыть и, в случае необходимости, показать.

Bootstrap collapse предоставляется под именем collapse.js в качестве отдельного плагина, что дает возможность его использовать вне среды bootstrap. Найти и скачать плагин вы можете здесь: http://getbootstrap.com/2.0.4/javascript.html#collapse. 

Коллапс Bootstrap можно использовать с несколькими элементами, кнопкой, привязным тегом или панелью. Чтобы использовать сбой, вам нужно как минимум два элемента, один элемент будет контролировать состояние скрытия или раскрытия другого элемента.

Плагин collapse работает, изменяя класс на складном элементе. Существует три возможных класса:

*   .collapse - этот класс скрывает элемент
*   .collapsing - этот класс присоединяется во время перехода
*   .collapse.in - этот класс показывает элемент

### Как это использовать

Чтобы использовать коллапс, вы можете сделать это двумя способами:

*   Использование `href` в теге `<a>`
*   Использование `data-target` в `<button>`

Значение в `href` или `data-target` будет селектором элемента для развала. Если вы решите использовать тег `<a>` или `<button>` , необходим `data-toggle="collapse"` .

Элемент для `.collapse` должен содержать класс `.collapse` .

### Примеры с кнопками

```html

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Link with href 
 </a> 
 <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Button with data-target 
 </button> 
 
 <div class="collapse" id="collapseExample"> 
  <div class="well"> 
    ... 
  </div> 
 </div> 
```

В приведенном выше примере мы используем кнопку и привязывающий тег для управления элементом div. Кнопка и якорь, которые являются элементами управления, нуждаются в двух вещах: атрибут, указывающий, что управляющий элемент предназначен для свертывания, и другой атрибут, чтобы указать, какой элемент он контролирует (скрывает или показывает).

Оба они имеют атрибут « _перетаскивать данные»_ с _коллапсом_ значения, который указывает, что они должны использоваться для свертывания элемента. Якорный тег использует атрибут _href_ для указания элемента, которым он управляет, а кнопка использует атрибут _target-target_ для указания элемента, которым он управляет.

> Вы можете просмотреть демонстрацию этой кнопки здесь. Https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs\_collapsible&stacked=h
> 
> Вы можете просмотреть демонстрацию тега привязки здесь https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs\_collapsible2&stacked=h

## Пример с аккордеоном

```html

<div class="panel panel-default"> 
    <div class="panel-heading" role="tab" id="headingOne"> 
      <h4 class="panel-title"> 
        <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
          Collapsible Group Item #1 
        </a> 
      </h4> 
    </div> 
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> 
      <div class="panel-body"> 
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. 
      </div> 
    </div> 
  </div> 
```

В приведенном выше примере мы используем коллапс бутстрапа для создания аккордеона. Аккордеон - это просто панель начальной загрузки, в которой отображается заголовок и используется для управления телом панели.

Головка панели содержит якорный тег, который используется для управления состоянием обрушения тела. Таким образом, мы привязываем _данные для переключения,_ чтобы указать, что этот элемент используется для свертывания и _href,_ чтобы указать элемент, который он скрывает или показывает. Мы также можем иметь группу панелей для создания группы панелей разборных панелей.

> Вы можете увидеть демонстрацию панели свернуть здесь https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs _складной_ аккордеон & stacked = h

### Элемент контента

Параграф!

```html

<p>Lorem ipsum dolar, Free Code Camp rocks... </p> 
```

1.  Добавьте класс `.collapse` чтобы указать, что этот абзац является `.collapse` элементом.
2.  Добавьте `id` чтобы этот складной элемент был доступен для элемента контроллера.

```html

<p id="myParagraph" class="collapse">Lorem ipsum dolar, Free Code Camp rocks... </p> 
```

### Элемент контроллера

Кнопка!

```html

<button>Click Me To See Some Magic!</button> 
```

1.  Добавьте атрибут `data-toggle="collapse"` для управления сбрасываемым элементом.
2.  Добавьте атрибут `data-target="#id"` чтобы ссылаться на сложенный элемент с его идентификатором.

```html

<button data-toggle="collapse" data-target="#myParagraph">Click Me To See Some Magic!</button> 
```

## пример

```html

<p> 
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Link with href 
  </a> 
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Button with data-target 
  </button> 
 </p> 
 <div class="collapse" id="collapseExample"> 
  <div class="card card-block"> 
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
  </div> 
 </div> 
```

### Использование его с помощью JavaScript

Этот плагин позволяет использовать его с JavaScript, где вам нужно только выбрать элемент, который вы хотите свернуть, чтобы включить его:

```js
$('.collapsible-element').collapse(); 
```

Метод `collapse` принимает необязательный объект, в котором вы можете установить начальное состояние сбрасываемого элемента. Возможные варианты:

*   `toggle` : он будет скрывать или показывать элемент в зависимости от его состояния. Если он будет скрыт, он будет показан, если он будет показан, он будет скрыт.
*   `hide` : скрывает элемент.
*   `show` : Показывает элемент.

```js
$('.collapsible-element').collapse('hide'); 
```

Также есть некоторые открытые методы, чтобы подключиться к функции коллапса:

*   `show.bs.collapse` : немедленно `show.bs.collapse` когда вызывается метод `show` instance.
*   `shown.bs.collapse` : `shown.bs.collapse` когда элемент `shown.bs.collapse` становится видимым для пользователя (будет ждать завершения переходов CSS).
*   `hide.bs.collapse` : `hide.bs.collapse` сразу после `hide.bs.collapse` метода `hide` .
*   `hidden.bs.collapse` : `hidden.bs.collapse` когда элемент скрыть был скрыт от пользователя (будет ждать завершения CSS-переходов).

```js
$('.collapsible-element').on('show.bs.collapse', function() { 
  // for example you want to make an AJAX call to get some data to put in the collapsible element. 
 }) 
```

### Смотрите это в действии

![Alt Text](https://github.com/figengungor/Gif/blob/master/freeCodeCamp/bootstrap/collapse/collapse.gif)

#### Дополнительная информация:

[Официальный справочник Bootstrap 4 по collapse](https://v4-alpha.getbootstrap.com/components/collapse/)
