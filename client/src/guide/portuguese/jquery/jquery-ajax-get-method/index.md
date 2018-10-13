---
title: jQuery Ajax Get Method
localeTitle: jQuery Ajax Get Method
---
## jQuery Ajax Get Method

Envia uma solicitação HTTP GET assíncrona para carregar dados do servidor. Sua forma geral é:

```javascript
jQuery.get( url [, data ] [, success ] [, dataType ] ) 
```

*   `url` : o único parâmetro obrigatório. Esta cadeia contém o endereço para o qual enviar o pedido. Os dados retornados serão ignorados se nenhum outro parâmetro for especificado.
*   `data` : Um objeto simples ou uma string enviada ao servidor com o pedido.
*   `success` : uma função de retorno de chamada executada se a solicitação for bem-sucedida. Leva como um argumento os dados retornados. Também é passado o status de texto da resposta.
*   `dataType` : o tipo de dados esperado do servidor. O padrão é o Intelligent Guess (xml, json, script, texto, html). Se esse parâmetro for fornecido, o retorno de chamada bem-sucedido também deverá ser fornecido.

#### Exemplos

Solicite `resource.json` do servidor, envie dados adicionais e ignore o resultado retornado: \`\` \`javascript $ .get ('http://example.com/resource.json', {category: 'client', tipo: 'premium'});
```
Request `resource.json` from the server, send additional data, and handle the returned response (json format): 
 ```javascript 
 $.get('http://example.com/resource.json', {category:'client', type:'premium'}, function(response) { 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

O exemplo acima também pode ser escrito como: \`\` \`javascript $ .get ('http://example.com/resource.json', {category: 'client', tipo: 'premium'}) .done (função (resposta) { alerta ("sucesso"); $ ("# mypar"). html (response.amount); });
```
### jQuery.ajax() 
 `$.get( url [, data ] [, success ] [, dataType ] )` is a shorthand Ajax function, equivalent to: 
 ```javascript 
 $.ajax({ 
      url: url, 
      data: data, 
      success: success, 
      dataType: dataType 
 }); 
```

`$.ajax()` fornece muitas opções adicionais, todas localizadas [aqui](http://api.jquery.com/jquery.ajax/) .

#### Mais Informações:

Para mais informações, visite o [site oficial do jQuery.get](https://api.jquery.com/jquery.get/) .