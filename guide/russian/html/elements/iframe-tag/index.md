---
title: Iframe Tag
localeTitle: Тег iframe
---
## Тег iframe

Теги iframe используются для добавления существующей веб-страницы или приложения на ваш сайт в пределах заданного пространства.

При использовании тегов iframe атрибут src следует использовать для указания местоположения веб-страницы или приложения для использования внутри фрейма.

```html

<iframe src="framesite/index.html"></iframe> 
```

Вы можете установить атрибуты ширины и высоты для ограничения размера фрейма.

```html

<iframe src="framesite/index.html" height="500" width="200"></iframe> 
```

Iframes имеет границу по умолчанию, если вы хотите удалить ее, вы можете сделать это, используя атрибут style и задав свойства рамки CSS none.

```html

<iframe src="framesite/index.html" height="500" width="200" style="border:none;"></iframe> 
```

#### Дополнительная информация:

*   [MDN - HTML-тег iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
*   [W3 - спецификация iframe HTML 5.2](https://www.w3.org/TR/html5/semantics-embedded-content.html#the-iframe-element)