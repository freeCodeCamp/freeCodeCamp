---
title: Link to Internal Sections of a Page with Anchor Elements
localeTitle: Ссылка на внутренние разделы страницы с элементами привязки
---
## Ссылка на внутренние разделы страницы с элементами привязки

Как указано в инструкции внутренняя ссылка состоит из двух элементов: `a` тег и HTML - элементе с `id` , используемым в `href` атрибута `a` теге.

Все это действительные внутренние ссылки:

АНКЕРНЫЙ ТЕГ | ВЕРНУТЬСЯ ----- | ------ `<a href="#destination">I am an internal link</a>` | `<p id="destination">I am the destination of the link</p>` `<a href="#inlinestuff">I am an internal link</a>` | `<span id="inlinestuff">I am the destination of the link</span>` `<a href="#title">I am an internal link</a>` | `<h1 id="title">I am the destination of the link</h1>` `<a href="#mainarticle">I am an internal link</a>` | `<article id="mainarticle">I am the destination of the link</article>`

Вас попросят использовать существующий элемент привязки для создания вашей внутренней ссылки, поэтому не пишите еще один тег привязки.

Чтобы преобразовать фактический тег привязки - это не единственная задача, которую вы хотите сделать, но есть еще две точки:

*   Чтобы удалить `target` атрибут `a` теге: вы не хотите больше , чтобы открыть новую вкладку в браузере, это текущая страница , которая будет «двигаться» вверх / вниз.
    
*   Чтобы изменить текстовое содержимое `a` теге: от `cat photos` до `Jump to Bottom` (двойной проверки капитализации).
    
    Удачи!