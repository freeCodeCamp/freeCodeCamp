---
title: Learn About Jsonp
localeTitle: Узнать о Jsonp
---
## JSONP

JSONP означает «JSON с отступом». Предположим, вы хотите сделать запросы AJAX в другом домене. Ну, вы не можете сделать это с помощью XMLHttpRequest, как обычно, но вы можете сделать это с помощью тегов скриптов, как показано [на StackOverflow](https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about) :

```javascript
script = document.createElement('script'); 
 script.type = 'text/javascript'; 
 script.src = 'http://www.someWebApiServer.com/some-data'; 
```

Но это уродливо, теперь нам нужно получить элементы JSON из тега скрипта, брутто. К счастью, создатели JSONP думали заранее, поэтому вместо того, чтобы устанавливать наши скрипты, как мы делали выше, мы делаем это:

```javascript
script.src = 'http://www.someWebApiServer.com/some-data?callback=my_callback'; 
```

Это вызывает автоматический обратный вызов после загрузки данных, создавая функцию с данными, необходимыми внутри нее.

### Дополнительная информация:

*   [Wikipidea / JSONP](https://en.wikipedia.org/wiki/JSONP)
*   [JSONP и JQuery](https://learn.jquery.com/ajax/working-with-jsonp)
*   [Больше JSONP с JQuery](http://api.jquery.com/jquery.getjson/#jsonp)
*   [Ajax и JSONP](http://stackoverflow.com/questions/5943630/basic-example-of-using-ajax-with-jsonp)