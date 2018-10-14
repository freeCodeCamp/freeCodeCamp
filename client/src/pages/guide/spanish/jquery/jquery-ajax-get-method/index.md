---
title: jQuery Ajax Get Method
localeTitle: jQuery Ajax Get Method
---
## jQuery Ajax Get Method

Envía una solicitud GET de http asíncrona para cargar datos desde el servidor. Su forma general es:

```javascript
jQuery.get( url [, data ] [, success ] [, dataType ] ) 
```

*   `url` : El único parámetro obligatorio. Esta cadena contiene la dirección a la que se envía la solicitud. Los datos devueltos se ignorarán si no se especifica ningún otro parámetro.
*   `data` : un objeto simple o cadena enviado al servidor con la solicitud.
*   `success` : una función de devolución de llamada ejecutada si la solicitud tiene éxito. Toma como argumento los datos devueltos. También se pasa el estado del texto de la respuesta.
*   `dataType` : el tipo de datos esperados del servidor. El valor predeterminado es Intelligent Guess (xml, json, script, text, html). Si se proporciona este parámetro, también se debe proporcionar la devolución de llamada correcta.

#### Ejemplos

Solicite `resource.json` del servidor, envíe datos adicionales e ignore el resultado devuelto: \`\` \`javascript $ .get ('http://example.com/resource.json', {category: 'client', escriba: 'premium'});
```
Request `resource.json` from the server, send additional data, and handle the returned response (json format): 
 ```javascript 
 $.get('http://example.com/resource.json', {category:'client', type:'premium'}, function(response) { 
      alert("success"); 
      $("#mypar").html(response.amount); 
 }); 
```

El ejemplo anterior también se puede escribir como: \`\` \`javascript $ .get ('http://example.com/resource.json', {categoría: 'cliente', escriba: 'premium'}) .done (función (respuesta) { alerta ("éxito"); $ ("# mypar"). html (response.amount); });
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

`$.ajax()` ofrece muchas opciones adicionales, todas las cuales se encuentran [aquí](http://api.jquery.com/jquery.ajax/) .

#### Más información:

Para obtener más información, visite el [sitio web oficial de jQuery.get](https://api.jquery.com/jquery.get/) .