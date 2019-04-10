---
title: Comments in HTML
localeTitle: Комментарии в HTML
---
## Комментарии в HTML

Тег комментариев - это элемент, используемый для публикации заметок, в основном связанных с проектом или веб-сайтом. Этот тег часто используется, чтобы что-то объяснить в коде или оставить некоторые рекомендации по проекту. Тег комментария также облегчает разработчику возможность вернуться и понять код, который он написал на более позднем этапе. Комментарии могут также использоваться для комментирования строк кода для целей отладки.

Хорошая практика - добавлять комментарии к вашему коду, особенно при работе с командой или в компании.

Комментарии начинаются с `<!--` и заканчиваются на `-->` и могут охватывать несколько строк. Они могут содержать код или текст и не появляться на интерфейсе веб-сайта при посещении пользователем страницы. Вы можете просматривать комментарии через Консоль Инспекторов или просматривать Источник Истории.

### пример

```html

<!-- You can comment out a large number of lines like this. 
 Author: xyz 
 Date: xx/xx/xxxx 
 Purpose: abc 
 --> 
 Read more: https://html.com/tags/comment-tag/#ixzz4vtZHu5uR 
 <!DOCTYPE html> 
 <html> 
    <body> 
        <h1>FreeCodeCamp web</h1> 
        <!-- Leave some space between the h1 and the p in order to understand what are we talking about--> 
        <p>FreeCodeCamp is an open-source project that needs your help</p> 
            <!-- For readability of code use proper indentation --> 
    </body> 
 </html> 
```

## Условные комментарии

Условные комментарии определяют некоторые теги HTML, которые должны быть вычтены, когда определенное кодирование заполнено.

Условные комментарии распознаются только в Internet Explorer версии 5 до версии 9 - IE5 - IE9.

### пример

```html

<!DOCTYPE html> 
 <html> 
    <body> 
        <!--[if IE 9]> 
                <h1>FreeCodeCamp web</h1> 
            <p>FreeCodeCamp is an open-source project that needs your help</p> 
        <![endif]--> 
    </body> 
 </html> 
```

### IE условные комментарии

Эти комментарии доступны только в Internet Explorer и могут использоваться до IE9. В текущее время есть хорошие изменения, которые вы никогда не увидите, но хорошо знать об их существовании. Условные комментарии - это способ использовать другой опыт для разных клиентских браузеров. Например:

```html

<!--[if lt IE 9]> <p>Your browser is lower then IE9</p> <![endif]--> 
 <!--[if IE 9]> <p>Your browser is IE9</p> <![endif]--> 
 <!--[if gt IE 9]> <p>Your browser is greater then IE9</p> <![endif]--> 
```

[Об условных комментариях](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)