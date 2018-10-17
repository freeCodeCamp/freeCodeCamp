---
title: What is an API
localeTitle: Que es una API
---
## ¿Qué es una API?

API significa interfaz de programación de aplicaciones. Las API ocultan la complejidad de los desarrolladores, extienden los sistemas a los socios, organizan el código y hacen que los componentes sean reutilizables. No te preocupes por el AP, solo enfócate en el I. Una API es una interfaz. Usas interfaces todo el tiempo. Un sistema operativo informático es una interfaz. Los botones en un ascensor son una interfaz. Un pedal de gasolina en un coche es una interfaz.

Una interfaz se asienta sobre un sistema complicado y simplifica ciertas tareas, un intermediario que le evita tener que conocer todos los detalles de lo que está sucediendo bajo el capó. Una API web es el mismo tipo de cosas. Se encuentra en la parte superior de un servicio web, como Twitter o YouTube, y simplifica ciertas tareas para usted. Traduce tus acciones en los detalles técnicos del sistema informático en el otro extremo.

Si alguna vez ha programado en un lenguaje orientado a objetos como Java o C ++, una API es muy similar al concepto de una clase. Cuando llamamos a un método en un objeto (como `.toString()` ), no nos importa realmente CÓMO el objeto produce el resultado, lo único que nos importa es la cadena que obtenemos al final. Una llamada a una API funciona de la misma manera. Por ejemplo, cuando hacemos una llamada a la API de Facebook para recuperar la imagen de perfil de un usuario, no nos importa cómo se recupera la información del servidor. Simplemente hacemos la solicitud a la API, dejamos que maneje toda la complicada lógica de recuperación y obtengamos nuestra foto al final de todo.

## ¿Por qué son útiles las API?

Tener acceso a una API generalmente significa tener acceso a una gran cantidad de datos organizados. El controlador de acceso de esos datos le da a un desarrollador permiso (en forma de una _clave API_ ) para consultar información en un servidor. Si la solicitud es exitosa, el servidor responde con un mensaje que puede parecer algo como esto:

```javascript
{ 
  "coord": { 
    "lon":139, 
    "lat":35 
  }, 
  "wind": { 
    "speed":7.31, 
    "deg":187.002 
  }, 
  "rain": { 
    "3h":0 
  }, 
  "clouds": { 
    "all":92 
  } 
 } 
```

Fuente: [Open Weather API](https://openweathermap.org/current)

En el ejemplo anterior, un desarrollador realizó una solicitud del clima actual en una latitud y longitud específicas, y el servidor respondió con un _objeto JSON_ sobre el viento, la lluvia y las nubes para esa ubicación. Los servicios que utiliza todos los días se realizan con toneladas de ciclos de solicitud y respuesta como este.

**Aquí están las 10 mejores API para principiantes**

1.  Dropbox: https://www.dropbox.com/developers
2.  Google Maps: https://developers.google.com/maps/web/
3.  Twitter: https://dev.twitter.com/docs
4.  YouTube: https://developers.google.com/youtube/v3/getting-started
5.  Soundcloud: http://developers.soundcloud.com/docs/api/guide#playing
6.  Raya: https://stripe.com/docs/tutorials/checkout
7.  Instagram: http://instagram.com/developer/
8.  Twilio: https://www.twilio.com/docs
9.  Yelp: http://www.yelp.com/developers/getting\_started
10.  Facebook: https://developers.facebook.com/docs/facebook-login/login-flow-for-web

#### Más información:

*   [API para no programadores](https://schoolofdata.org/2013/11/18/web-apis-for-non-programmers/)
*   [Wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface)
*   [Medio](https://medium.com/girl-geeks/top-10-apis-for-beginners-4d3c43be9386)