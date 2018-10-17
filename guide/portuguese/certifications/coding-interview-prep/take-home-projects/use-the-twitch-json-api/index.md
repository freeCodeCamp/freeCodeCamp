---
title: Use the Twitch JSON API
localeTitle: Use a API JSON do Twitch
---
Atualização de 29 de setembro de 2016: o Twitch mudou sua API e agora exige uma chave de API para executar consultas. Se você estiver usando páginas CodePen ou GitHub para criá-las, não recomendamos adicionar uma chave de API ao seu projeto por motivos de segurança.

Em vez de usar a API do Twitch, recomendamos a codificação [desse JSON](https://gist.github.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8) no seu aplicativo como uma variável. É uma série de respostas para diferentes contas do Twitch.

* * *

Se você está tentando enfrentar este desafio com o método `$.getJSON()` do jQuery, é provável que você receba uma mensagem de erro referente ao CORS (Cross-Origin Resource Sharing).

A maneira mais fácil de resolver isso é usar os recursos JSONP do jQuery. Da [página de readme](https://github.com/justintv/Twitch-API#json-p) da API do Twitch:

> Todos os métodos da API suportam JSON-P, fornecendo um parâmetro de retorno de chamada com a solicitação.

Também a [documentação](http://api.jquery.com/jQuery.getJSON/) do [jQuery](http://api.jquery.com/jQuery.getJSON/) declara:

> Se o URL incluir a string "callback =?" (ou similar, conforme definido pela API do lado do servidor), a solicitação é tratada como JSONP.

Aqui está um exemplo de chamada para buscar os dados do canal Twitch do Free Code Camp:
```
$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) { 
  console.log(data); 
 }); 
```

JSONP é considerado inseguro de [acordo com a Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#CORS_vs_JSONP) , mas deve ser suficiente para nossos propósitos. Para uma discussão detalhada sobre a restrição do CORS do Twitch, por favor leia o [número \# 133](https://github.com/justintv/Twitch-API/issues/133) no repositório do Twitch-API.