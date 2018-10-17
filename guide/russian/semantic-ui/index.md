---
title: Semantic UI
localeTitle: Семантический интерфейс
---
## Семантический интерфейс

#### Введение

Семантический интерфейс - это интерфейсная платформа разработки, подобная бутстрапу, предназначенному для тематики. Он содержит предварительно построенные семантические компоненты, которые помогают создавать красивые и гибкие макеты, используя человеко-дружественный HTML.

Согласно веб-сайту Semantic UI, структура использует сжатый HTML, интуитивно понятный JavaScript и упрощенную отладку, чтобы сделать начальную разработку приятным и восхитительным. И он интегрируется с React, Angular, Meteor, Ember и многими другими структурами, чтобы помочь организовать слой пользовательского интерфейса наряду с логикой приложения.

#### История версий

Первый предварительный выпуск появился на github в сентябре 2013 года, созданный [Джеком Лукичем](https://github.com/jlukic) .

Semantic UI `1.x` был впервые выпущен в ноябре 2014 года с нарушением предыдущих предварительных релизов.

Semantic UI `2.x` был впервые выпущен в июне 2015 года и представил новые ui, исправления ошибок, улучшения и улучшения темы по умолчанию.

#### Поддержка браузера

Текущая версия `2.2.x` поддерживает следующие браузеры

*   Последние 2 версии FF, Chrome, Safari Mac
*   IE 11+
*   Android 4.4+, Chrome для Android 44+
*   iOS Safari 7+
*   Microsoft Edge 12+

#### Монтаж

Существует несколько способов установки Semantic UI, некоторые из самых простых способов:

1.  **Через сеть доставки контента (CDN)**

Это самый легкий для новичков. Создайте HTML-файл, как показано ниже.

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Semantic UI</title> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"> 
    <!-- Add custom stylesheet here --> 
  </head> 
  <body> 
 
    <!-- Write your html code here --> 
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"></script> 
  </body> 
 </html> 
```

`NOTE:` . Вышеуказанная ссылка CDN в строке 5 включает все доступные компоненты в семантическом интерфейсе. Если вы хотите установить конкретный компонент, [нажмите здесь,](https://cdnjs.com/libraries/semantic-ui) чтобы увидеть его соответствующую ссылку CDN.

2.  **Использование инструментов сборки**

Предположим, вы используете Ubuntu Linux OS с установленными `node` и `npm` , для других операционных систем [нажмите здесь](https://semantic-ui.com/introduction/getting-started.html)

В своем каталоге проекта установите gulp глобально, используя npm
```
npm install -g gulp 
```

Установка семантического интерфейса
```
npm install semantic-ui --save 
 cd semantic/ 
 gulp build 
```

Включить в HTML

```html

<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"> 
 <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> 
 <script src="semantic/dist/semantic.min.js"></script> 
```

Обновление через npm
```
npm update 
```

3.  **Интеграция с другими платформами**

Вы можете интегрировать семантический интерфейс с другими интерфейсами разработки, такими как React, Angular, Ember или Meteor. [Нажмите здесь,](https://semantic-ui.com/introduction/integrations.html) чтобы получить дополнительную информацию и инструкции по интеграции.

#### Больше информации

Семантический пользовательский интерфейс имеет тщательную и очень хорошо организованную документацию, которая поможет вам быстро и быстро. Следующие ссылки будут полезны в вашем путешествии Semantic UI.

*   [Веб-сайт семантического интерфейса](https://semantic-ui.com/)
*   [Начало работы с семантическим интерфейсом](https://semantic-ui.com/introduction/getting-started.html)
*   [Примеры шаблонов семантического UI](https://semantic-ui.com/usage/layout.html#pages)
*   [Настройка и создание семантических пользовательских интерфейсов](http://learnsemantic.com/)