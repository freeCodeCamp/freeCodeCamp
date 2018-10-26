---
title: Redirect from an HTML Page
localeTitle: Перенаправление с HTML-страницы
---
## Перенаправление с HTML-страницы

Если вы изменили URL-адрес своей страницы HTML и хотите автоматически перенаправить посетителей на новое местоположение страницы, вы можете использовать метатег в области `<head>` на вашей старой HTML-странице.

`html <head> <meta http-equiv="refresh" content="0; url=http://freecodecamp.org/" /> </head>` В приведенном выше примере посетители страницы будут перенаправлены со старой страницы html на [http://freecodecamp.org/](http://freecodecamp.org/) . Атрибут `content="0` означает, что браузер перенаправит новую страницу через 0 секунд. Изменение значения на `content="2` будет перенаправлено через 2 секунды.

#### Дополнительная информация:

*   [MDN - перенаправления в HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)