---
title: Manipulating Cookies
localeTitle: Manipulando galletas
---
## Manipulando galletas

Obtener o configurar cookies es una operación sencilla que se puede lograr al acceder a la propiedad de la cookie en el objeto de documento del navegador.

Usted encuentra un sitio web de recetas asombroso e informativo para preparar una comida extranjera para sus invitados, pero está en un idioma extranjero, por suerte, puede cambiar el idioma en el sitio web mediante un menú desplegable de selección. Unos días más tarde, vuelve a visitar el mismo sitio para preparar un plato para tu madre, pero ahora lo ves de manera predeterminada en tu idioma nativo.

_El sitio web recuerda el idioma que seleccionó en su última visita y lo almacena en forma de una **cookie** . Ahora seleccionó automáticamente su idioma preferido leyendo esa cookie._

`userLanguage:french`

Las cookies se utilizan para almacenar datos en forma de par de `name:value` en la parte del lado del cliente. Permite que un sitio web almacene información específica del usuario en el navegador para su uso posterior. La información almacenada podría ser `sessionID` , `userCountry` , `visitorLanguage` etc.

Otra forma de almacenar los datos en el lado del cliente es `localstorage` .

### Set Cookie

Se puede configurar una cookie utilizando la siguiente sintaxis, pero se recomienda una biblioteca, como la que se menciona al final, para facilitar el desarrollo para todos. Al configurar la cookie, también puede establecer la caducidad de la misma. Si se omite, la cookie se borra cuando se cierra el navegador.

**Tenga en cuenta que un dominio determinado solo puede leer un conjunto de cookies y solo subdominios.**

```javascript
// Using vanilla javascript 
 document.cookie = 'userLanguage=french; expires=Sun, 2 Dec 2017 23:56:11 UTC; path=/'; 
 
 //Using JS cookie library 
 Cookies.set('userLanguage', 'french', { expires: 7, path: '/' }); 
```

_La cookie expira en 7 días._

### Obtener galletas

```javascript
// Using vanilla javascript 
 console.log(document.cookie) 
 
 // => "_ga=GA1.2.1266762736.1473341790; userLanguage=french" 
 
 // Using JS cookie library 
 Cookies.get('userLanguage'); 
 
 // => "french" 
```

### Eliminar cookie

Para eliminar una cookie, establezca la fecha de caducidad en algo en el pasado.

```javascript
// Using vanilla javascript 
 document.cookie = 'userLanguage; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'; 
 
 //Using JS cookie library 
 Cookies.remove('userLanguage'); 
```

_Si se encuentra jugando mucho con cookies en su proyecto, utilice una biblioteca como esta [JS Cookie](https://github.com/js-cookie/js-cookie) y ahórrese un montón de tiempo._

#### Más información:

*   [Cookie explicada](https://www.quirksmode.org/js/cookies.html)
*   [Guía de cookies de MDN](https://developer.mozilla.org/en-US/docs/Web/API/document/cookie)
*   [Video de Cookie Udacity](https://www.youtube.com/watch?v=xdH9zsW1CK0)
*   [Cookies HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)