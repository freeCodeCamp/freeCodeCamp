---
title: jQuery Ajax Post Method
localeTitle: jQuery Ajax Post Method
---
## jQuery Ajax Post Method

Envía una solicitud HTTP POST asíncrona para cargar datos desde el servidor. Su forma general es:

```javascript
jQuery.post( url [, data ] [, success ] [, dataType ] ) 
```

*   url: es el único parámetro obligatorio. Esta cadena contiene la dirección a la que se envía la solicitud. Los datos devueltos se ignorarán si no se especifica ningún otro parámetro
*   datos: un objeto simple o una cadena que se envía al servidor con la solicitud.
*   éxito: una función de devolución de llamada que se ejecuta si la solicitud tiene éxito. Toma como argumento los datos devueltos. También se pasa el estado del texto de la respuesta.
*   dataType: el tipo de datos esperados del servidor. El valor predeterminado es Intelligent Guess (xml, json, script, text, html). Si se proporciona este parámetro, también se debe proporcionar la devolución de llamada correcta.

#### Ejemplos

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}); 
```

solicita `form.php` desde el servidor, envía datos adicionales e ignora el resultado devuelto

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}, function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

solicita `form.php` desde el servidor, envía datos adicionales y maneja la respuesta devuelta (formato json). Este ejemplo se puede escribir en este formato:

```javascript
$.post('http://example.com/form.php', {category:'client', type:'premium'}).done(function(response){ 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

El siguiente ejemplo publica un formulario utilizando Ajax y coloca los resultados en un div \`\` \`html  jQuery.post demo 

 

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

javascript $ .ajax ({ tipo: "POST", url: url, datos: datos, éxito: éxito, dataType: dataType }); \`\` \`

`$.ajax()` proporciona `$.ajax()` más opciones que se pueden encontrar [aquí](http://api.jquery.com/jquery.ajax/)

#### Más información:

Para más información, visite la [página web oficial.](https://api.jquery.com/jquery.post/)