---
title: Learn About Jsonp
localeTitle: Saiba mais sobre o Jsonp
---
## JSONP

JSONP significa "JSON com preenchimento". Digamos que você queira fazer solicitações AJAX para um domínio diferente. Bem, você não pode fazer isso com XMLHttpRequest, como você faria normalmente, mas você pode fazer isso com tags de script, como visto [no StackOverflow](https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about) :

```javascript
script = document.createElement('script'); 
 script.type = 'text/javascript'; 
 script.src = 'http://www.someWebApiServer.com/some-data'; 
```

Mas isso é feio, agora temos que retirar elementos de um JSON de uma tag de script, nojento. Felizmente, os criadores do JSONP estavam pensando no futuro, então, em vez de configurar nossos scripts como fizemos anteriormente, fazemos o seguinte:

```javascript
script.src = 'http://www.someWebApiServer.com/some-data?callback=my_callback'; 
```

Isso aciona um retorno de chamada automático após o carregamento dos dados, criando uma função com os dados desejados dentro dele.

### Mais Informações:

*   [Wikipidea / JSONP](https://en.wikipedia.org/wiki/JSONP)
*   [JSONP e JQuery](https://learn.jquery.com/ajax/working-with-jsonp)
*   [Mais JSONP com JQuery](http://api.jquery.com/jquery.getjson/#jsonp)
*   [Ajax e JSONP](http://stackoverflow.com/questions/5943630/basic-example-of-using-ajax-with-jsonp)