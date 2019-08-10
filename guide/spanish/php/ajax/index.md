---
title: AJAX
localeTitle: AJAX
---
## AJAX

**AJAX** significa **JavaScript asíncrono y XML** . No es un lenguaje de programación. Es una tecnología para desarrollar aplicaciones web mejores, más rápidas e interactivas utilizando HTML, CSS, JavaScript y XML.

1.  HTML: el lenguaje de marcado de hipertexto (HTML) se utiliza para definir la estructura de una aplicación web.
2.  CSS: la hoja de estilo en cascada (CSS) se usa para proporcionar apariencia y estilo a una aplicación web.
3.  JavaScript: JavaScript se utiliza para hacer que una aplicación web sea interactiva, interesante y fácil de usar.
4.  XML: Extensible Markup Language (XML) es un formato para almacenar y transportar datos desde el servidor web.

#### ¿Cuál es el significado de asíncrono en AJAX?

Asíncrono significa que la aplicación web podría enviar y recibir datos del servidor web sin actualizar la página. Este proceso en segundo plano de enviar y recibir datos del servidor junto con la actualización de diferentes secciones de una página web define la propiedad / característica asíncrona de AJAX.

#### ¿Cómo funciona **AJAX** ?

AJAX utiliza un **objeto XMLHttpRequest** integrado en el navegador para solicitar datos de un servidor web y **HTML DOM** para mostrar o usar los datos.

**Objeto XMLHttpRequest** : es una API en forma de objeto cuyos métodos ayudan en la transferencia de datos entre un navegador web y un servidor web.

**HTML DOM** : cuando se carga una página web, el navegador crea un modelo de objeto de documento de la página.

![](https://cdn-media-1.freecodecamp.org/imgr/pfC7QFH.png "Cómo funciona AJAX")

**Crear un objeto XMLHttpRequest:**

```javascript
var xhttp = new XMLHttpRequest(); 
```

**Propiedades del objeto XMLHttpRequest:**

`readystate` es una propiedad del objeto XMLHttpRequest que mantiene el estado de XMLHttpRequest.

*   0: solicitud no inicializada
*   1: conexión de servidor establecida
*   2: solicitud recibida
*   3: solicitud de procesamiento
*   4: solicitud terminada y respuesta esta lista

`onreadystatechange` es una propiedad del objeto XMLHttpRequest que define una función a la que se llama cuando cambia la propiedad readyState.  

`status` es una propiedad del objeto XMLHttpRequest que devuelve el número de estado de una solicitud

*   200: "ok"
*   403: "Prohibido"
*   404 No encontrado"

**Métodos del objeto XMLHttpRequest:** Para enviar una solicitud a un servidor web, usamos los métodos open () y send () del objeto XMLHttpRequest.

```javascript
xhttp.open("GET", "content.txt", true); 
 xhttp.send(); 
```

**Crea una función changeContent () usando JavaScript:**

```javascript
function changeContent() { 
  var xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
     document.getElementById("foo").innerHTML = this.responseText; 
    } 
  }; 
  xhttp.open("GET", "content.txt", true); 
  xhttp.send(); 
 } 
```

**Ejemplo de AJAX para cambiar el contenido de una página web:**

```HTML
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <div id="foo"> 
 <h2>The XMLHttpRequest Object</h2> 
 <button type="button" onclick="changeContent()">Change Content</button> 
 </div> 
 
 <script> 
 function changeContent() { 
  var xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
      document.getElementById("foo").innerHTML = 
      this.responseText; 
    } 
  }; 
  xhttp.open("GET", "content.txt", true); 
  xhttp.send(); 
 } 
 </script> 
 
 </body> 
 </html> 
```

El archivo `content.txt` debe estar presente en el directorio raíz de la aplicación web.

### Fuentes

*   [Escuelas w3](https://www.w3schools.com/js/js_ajax_intro.asp)
*   [Documentos web de MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

### Otros recursos

*   [Escuelas w3](https://www.w3schools.com/js/js_ajax_intro.asp)
*   [Documentos web de MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)