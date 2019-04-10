---
title: Layouts
localeTitle: Макеты
---
## Макеты

Макеты организуют различные области веб-страницы.

Почти каждую веб-страницу, которую мы видим, можно разделить на поля, которые можно упорядочить в определенном порядке для создания этой веб-страницы. Ниже приведен один из примеров.

![Пример дизайна сайта - www.codementor.io](http://i.imgur.com/Z1DSMYC.png)

> Веб-сайты часто отображают контент в нескольких столбцах (например, в журнале или в газете).

И методы компоновки HTML помогают нам помещать необходимую информацию в нужном порядке или дизайне.

### Методы реализации макетов

#### Таблицы HTML

Один из самых простых инструментов для реализации макетов на веб-странице обеспечивается HTML. Но по мере того, как макет становится сложным, таблицы HTML быстро теряют свою простоту из-за увеличения текста разметки.

#### CSS Float

Если вы хотите создать страницу с двумя столбцами с левой навигационной панелью и центральной областью просмотра контента, ее легко сделать с помощью CSS-поплавков. Просто установите левую навигационную страницу в `<div>` со свойством style `float: left;` , и вы получите этот дизайн. Но что, если у вас было 4 столбца в одном разделе? Конечно, можно сделать это с помощью float, но синтаксис HTML, который вы пишете, будет легко понять.

#### Шаблоны CSS

Здесь появляются CSS-фреймы, такие как [Bootstrap](http://getbootstrap.com/) и [Materialize](http://materializecss.com/) . Эти структуры обеспечивают функциональность сетки, которая позволяет разделить каждый раздел вашей веб-страницы на 12 столбцов, которые вы можете упорядочить для проектирования.

![Пример сетки](http://blog.gridbox.io/wp-content/uploads/2018/01/download-1-1024x271.png)

> Пример загрузочной сетки

### HTML-семантические элементы

Веб-сайты часто отображают контент в нескольких столбцах (например, в журнале или в газете).

HTML5 предлагает новые семантические элементы, которые определяют разные части веб-страницы:
```
<header> - Defines a header for a document or a section 
 <nav> - Defines a container for navigation links 
 <section> - Defines a section in a document 
 <article> - Defines an independent self-contained article 
 <aside> - Defines content aside from the content (like a sidebar) 
 <footer> - Defines a footer for a document or a section 
 <details> - Defines additional details 
 <summary> - Defines a heading for the <details> element 
```

#### Дополнительная информация:

*   [Школы W3 - макет](https://www.w3schools.com/html/html_layout.asp)
*   [CodeMentorTeam](https://www.codementor.io/codementorteam/4-different-html-css-layout-techniques-to-create-a-site-85i9t1x34) - методы компоновки для создания сайта
