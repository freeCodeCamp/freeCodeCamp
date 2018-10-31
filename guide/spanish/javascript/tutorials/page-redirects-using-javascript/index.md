---
title: Page Redirects Using JavaScript
localeTitle: Páginas redireccionadas usando JavaScript
---
## Páginas redireccionadas usando JavaScript

Si está intentando redirigir a un usuario a otra página, puede usar JavaScript fácilmente para realizar esta tarea. Es importante tener en cuenta lo siguiente:

Incluso si tiene la biblioteca jQuery cargada en sus scripts, es posible que desee utilizar la solución de JavaScript puro para redireccionar páginas con fines de eficiencia.

Hay varias formas de hacerlo, pero la forma más sencilla es utilizar el objeto `window.location` para enviar al usuario a la página a la que desea que se le redirija. El objeto `window.location` puede usar cualquier valor de URL válido, como `http://www.yoururl.com` , `somepage.html` , etc.

```javascript
window.location = 'http://www.yoururl.com'; 
 // window.location = 'somepage.html'; 
 // etc. 
```

### Caso especial de redirección

Puede usar un método de redireccionamiento especial que, de forma predeterminada, se adjunta al objeto `window.location` en cada navegador principal llamado `replace()` . Este método acepta los mismos valores de URL válidos que solo usando `window.location` .

Este es un ejemplo del uso de este método (aún funcionará igual que si usara `window.location` en otros navegadores):

```javascript
window.location.replace('http://www.yoururl.com'); 
 // window.location.replace('somepage.html'); 
 // etc. 
```

### Una redirección temporizada simple usando JS

Aquí hay un ejemplo de un redireccionamiento cronometrado simple usando la función `setTimeout()` . Los redireccionamientos programados son útiles para que pueda explicar al usuario, a través del contenido de la página de redireccionamiento, la razón por la que se están redirigiendo a otra página.

```javascript
// the 5000 below is 5000 milliseconds which equals 5 seconds until the redirect happens 
 // keep in mind that 1 second = 1000 milliseconds 
 setTimeout(function () { 
    window.location = 'http://www.yoururl.com'; 
    // window.location = 'somepage.html'; 
    // etc. 
 }, 5000); 
```

### Retroceder

A veces, los usuarios navegan en Internet con JavaScript deshabilitado, lo que obviamente presenta problemas con una solución de redirección dependiente de JS. Recomiendo configurar un elemento `<meta>` que actualizará el navegador con la nueva ubicación. Establecería el tiempo para que este metaelemento sea un segundo después de que se suponga que tendrá lugar el redireccionamiento JS. Por lo tanto, si tiene una redirección que ocurre en JS después de 5 segundos, configure la redirección del elemento `<meta>` para que tenga lugar a 6 segundos.

Coloque el elemento `<meta>` dentro de `<head>` de su documento de la siguiente manera:

```html

<head> 
    <!-- Change the 6 below to however many seconds you wish to wait until redirection to the new page.  Change the portion after "URL=" to the URL of your choice.  This can be a local page: URL=somepage.html, a web address: URL=http://www.yoururl.com, or any other valid URL. It is important to note the semicolon between the number of seconds to refresh and the URL. --> 
    <meta http-equiv="refresh" content="6;URL=http://www.yoururl.com"> 
 </head> 
```

Tenga en cuenta que no todos los navegadores admiten el elemento `<meta>` (lo estoy viendo, las versiones anteriores de IE y Safari), pero la mayoría de los navegadores modernos sí lo hacen (Microsoft Edge, Google Chrome, Mozilla Firefox, Opera).