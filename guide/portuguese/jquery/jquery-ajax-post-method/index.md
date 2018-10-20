---
title: jQuery Ajax Post Method
localeTitle: jQuery Ajax Post Method
---
## jQuery Ajax Post Method

Envia uma solicitação HTTP POST assíncrona para carregar dados do servidor. Sua forma geral é:

```javascript
jQuery.post( url [, data ] [, success ] [, dataType ] ) 
```

*   url: é o único parâmetro obrigatório. Esta cadeia contém o endereço para o qual enviar o pedido. Os dados retornados serão ignorados se nenhum outro parâmetro for especificado
*   data: um objeto simples ou uma string que é enviada ao servidor com a solicitação.
*   success: Uma função de retorno de chamada que é executada se a solicitação for bem-sucedida. Ela usa como argumento os dados retornados. Também é passado o status de texto da resposta.
*   dataType: o tipo de dados esperado do servidor. O padrão é o Intelligent Guess (xml, json, script, texto, html). Se esse parâmetro for fornecido, o retorno de chamada bem-sucedido também deverá ser fornecido.

#### Exemplos

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}); 
```

solicita `form.php` do servidor, enviando dados adicionais e ignorando o resultado retornado

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}, function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

solicita `form.php` do servidor, enviando dados adicionais e manipulando a resposta retornada (formato json). Este exemplo pode ser escrito neste formato:

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}).done(function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

O exemplo a seguir publica um formulário usando o Ajax e coloca os resultados em um div \`\` \`html  demo jQuery.post 

 

// Attach a submit handler to the form $( "#searchForm" ).submit(function( event ) { // Stop form from submitting normally event.preventDefault(); // Get some values from elements on the page: var $form = $( this ), term = $form.find( "input\[name='s'\]" ).val(), url = $form.attr( "action" ); // Send the data using post var posting = $.post( url, { s: term } ); // Put the results in a div posting.done(function( data ) { var content = $( data ).find( "#content" ); $( "#result" ).empty().append( content ); }); });
```
The following example use the github api to fetch the list of repositories  of a user  using jQuery.ajax() and put results in a div 
```

html 

 

// Attach a submit handler to the form $( "#userForm" ).submit(function( event ) { // Stop form from submitting normally event.preventDefault(); // Get some values from elements on the page: var $form = $( this ), username = $form.find( "input\[name='username'\]" ).val(), url = "https://api.github.com/users/"+username+"/repos"; // Send the data using post var posting = $.post( url, { s: term } ); //Ajax Function to send a get request $.ajax({ type: "GET", url: url, dataType:"jsonp" success: function(response){ //if request if made successfully then the response represent the data $( "#result" ).empty().append( response ); } }); });
```
### jQuery.ajax() 
 `$.post( url [, data ] [, success ] [, dataType ] )` is a shorthand Ajax function, equivalent to: 
```

javascript $ .ajax ({ tipo: "POST", url: url, dados: dados, sucesso: sucesso, dataType: dataType }); \`\` \`

`$.ajax()` fornece muito mais opções que podem ser encontradas [aqui](http://api.jquery.com/jquery.ajax/)

#### Mais Informações:

Para mais informações, por favor visite o [site oficial](https://api.jquery.com/jquery.post/)