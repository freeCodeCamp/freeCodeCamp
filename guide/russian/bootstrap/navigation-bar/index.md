---
title: Navigation Bar
localeTitle: Панель навигации
---
## Панель навигации

Структура Bootstrap предоставляет вам панель навигации с функциями. Короче говоря, панель навигации (также называемая navbars) представляет собой заголовок в верхней части страницы для отображения навигационной информации.

#### Как пользоваться

Чтобы использовать навигационные панели Bootstrap, вы добавляете элемент `<nav>` в верхнюю `<body>` элемента `<body>` на своей веб-странице. Существуют различные стили, которые вы можете добавить, чтобы настроить отображение ваших навигаторов.

#### Пример кода

Это код, необходимый для создания базового навигатора.

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Стили Navbar

Bootstrap предоставляет набор классов в структуре Bootstrap для стилизации ваших навигаторов. Эти классы следуют:

*   `navbar navbar-default` Это стиль по умолчанию для ваших навигаторов.
*   `navbar navbar-inverse` Это похоже на стиль по умолчанию, за исключением того, что цвета инвертированы.

#### Добавление раскрывающихся меню на панель навигации

Вы можете включить раскрывающееся меню внутри навигационной панели. Эта функция требует, чтобы вы включили javascript-файл Bootstrap для его работы.

```html

<li class="dropdown"> 
  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Drop down 
    <span class="caret"></span> 
  </a> 
 <ul class="dropdown-menu"> 
    <li><a href="#">Item 1</a></li> 
    <li><a href="#">Item 2</a></li> 
    <li><a href="#">Item 3</a></li> 
  </ul> 
 </li> 
```

#### Добавление кнопок в навигационную панель

Вы можете добавлять кнопки на навигационной панели. Существующие классы Button Bootstrap работают, однако вам нужно включить класс `navbar-btn` в конец списка классов.

```html

<button class="btn navbar-btn">Button</button> 
```

#### Добавление форм на навигационную панель

Вы также можете добавлять формы на навигационную панель. Это может использоваться для таких задач, как поле поиска, быстрое поле входа и т. Д.

```html

<form class="navbar-form navbar-right"> 
  <div class="form-group"> 
      <input type="text" class="form-control" placeholder="Search"> 
  </div> 
  <button type="submit" class="btn btn-default">Search</button> 
 </form> 
```

#### Выравнивание элементов справа на панели навигации

В некоторых случаях вам может потребоваться выравнивание элементов в навигационной панели справа (например, кнопка входа в систему или регистрация). Для этого вам нужно будет использовать `navbar-right` .

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
    <ul class="nav navbar-nav navbar-right"> 
      <li><a href="#">Action Link #1</a></li> 
      <li><a href="#">Action Link #2</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Отображение навигационной панели независимо от прокрутки

В некоторых случаях вы можете сохранить навигационную панель вверху или внизу экрана независимо от прокрутки. Для элемента `<nav>` вам нужно добавить либо `navbar-fixed-top` либо `navbar-fixed-bottom` .

```html

<nav class="navbar navbar-default navbar-fixed-top"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Свертывание навигационной панели

На маленьком экране (например, на телефоне или планшете) навигационная панель будет занимать слишком много места. К счастью, существует возможность скомбинировать навигационную панель. Вы можете выполнить это, используя следующий пример.

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Примеры использования Navbar

`navbar navbar-default`

[Название сайта](#navbar-default)

*   [Главная](#navbar-default)
*   [Страница 1](#navbar-default)
*   [Страница 2](#navbar-default)
*   [Page 3](#navbar-default)
кнопка

*   [Действие № 1](#navbar-default)
*   [Действие №2](#navbar-default)

`navbar navbar-inverse`

[Название сайта](#navbar-inverse)

*   [Главная](#navbar-inverse)
*   [Страница 1](#navbar-inverse)
*   [Страница 2](#navbar-inverse)
*   [Page 3](#navbar-inverse)
кнопка

*   [Действие № 1](#navbar-inverse)
*   [Действие №2](#navbar-inverse)

#### Дополнительная информация:

[Загрузочная документация BootStrap](https://getbootstrap.com/docs/4.0/components/navbar/)