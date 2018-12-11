---
title: How to Create an HTML Button That Acts Like a Link
localeTitle: Как создать HTML-кнопку, которая действует как ссылка
---
## Как создать HTML-кнопку, которая действует как ссылка

Иногда вы можете использовать кнопку для ссылки на другую страницу или веб-сайт, а не на отправку формы или что-то в этом роде. Это довольно просто сделать и может быть достигнуто несколькими способами.

Один из способов - просто обернуть тэг `<button>` тег `<a>` :

```html

<a href='https://www.freecodecamp.org/'><button>Link To freeCodeCamp</button></a> 
```

Это превращает всю вашу кнопку в ссылку.

Второй вариант - создать свою ссылку, как обычно, с тегом `<a>` а затем с помощью CSS:

```html

<a href='https://www.freecodecamp.org/'>Link To freeCodeCamp</a> 
```

После того, как вы создали свою ссылку, вы можете использовать CSS, чтобы он выглядел как кнопка. Например, вы можете добавить границу, цвет фона, некоторые стили, когда пользователь наводил ссылку ...

Другой способ добавить кнопку - обернуть `input` внутри тегов `form` . Укажите целевой URL-адрес в атрибуте action.

```html

<form action="http://google.com"> 
    <input type="submit" value="Go to Google" /> 
 </form> 
```

#### Дополнительная информация:

*   [Руководство FreeCodeCamp - кнопки стилизации](https://guide.freecodecamp.org/css/css-buttons/)
*   [Как создать кнопку HTML, которая действует как ссылка?](https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link)