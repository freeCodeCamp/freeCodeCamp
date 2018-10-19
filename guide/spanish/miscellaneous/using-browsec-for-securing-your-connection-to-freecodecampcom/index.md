---
title: Using Browsec for Securing Your Connection to Freecodecampcom
localeTitle: Uso de Browsec para asegurar su conexión a Freecodecampcom
---
### ¿Por qué necesito un complemento o complemento?

Últimamente, algunos de los participantes comenzaron a enfrentar problemas extraños, como la "modificación de contenido" por parte de algunos proveedores de servicios de Internet (ISP), lo que llevó a que el sitio web de [FreeCodeCamp.com](http://freecodecamp.com) (FCC) se rompiera a veces.

Esto salió a la luz con algunos de los problemas registrados por los campistas:

*   [\# 5999: el sitio web de Indian ISP inyecta anuncios rompe](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/5999)
*   [\# 6122: Problema grave al usar el IDE de la FCC, la consola muestra un error ...](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6122)
*   [\# 6381: No se puede ver el editor de código en el navegador](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6381)

## TL; DR: ¿Qué está mal, otra vez?

Bueno, para algunos campistas, este es un caso clásico de [hombre en el ataque central](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) .

Por ejemplo, como se vio en el número 5999 , el ISP de algunos campistas de la India está inyectando deliberadamente anuncios en los sitios web visitados por el usuario que están causando problemas.

Si bien, en otros casos, los ISP a veces utilizan una estrategia similar para almacenar en caché los sitios web visitados por los consumidores, de modo que puedan ofrecer el contenido almacenado en caché a otros consumidores que visitan los mismos sitios web, esto les ahorra costos de ancho de banda, al tiempo que hace que los sitios web estén disponibles más rápidamente.

Pero cuando esto no se hace correctamente (o se hace de manera incorrecta como en el primer caso), esto modifica el contenido esencial para los sitios web y evita que se ejecuten correctamente.

## ¿Cuál es la solución, entonces?

Sencillo, necesitamos cifrar nuestra conexión con el sitio web de FCC. Al cifrar nuestro tráfico, evitamos la capacidad del ISP para modificar o almacenar en caché nuestro contenido a medida que pasa a través de su infraestructura.

Esto se puede hacer con un complemento de navegador útil llamado [Browsec](https://browsec.com/en/) .

### ¿Cómo funciona el complemento?

El complemento crea una conexión VPN entre su dispositivo y el mundo exterior. Es decir, el Sr. Peeping Tom (ISP), no puede alterar su conexión con el sitio web de la FCC. Es técnicamente igual que si no estuviera en su casa, pero accediendo al sitio web de FCC desde EE. UU., Países Bajos u otros lugares similares.

_Detrás de escena, encripta la transmisión de datos y oculta su IP._

## Estoy vendido, muéstrame los pasos.

¡Ahí tienes!

### Para Google Chrome:

#### Paso 1: Instala la extensión de browsec.

Puede [descargar e instalar el complemento de browsec](https://chrome.google.com/webstore/detail/browsec/omghfjlpggmjjaagoclmmobgdodcjboh) para Chrome desde la tienda web oficial.

![Imagen para 'Browsec en Google Chrome WebStore'](//discourse-user-assets.s3.amazonaws.com/original/2X/6/61bd52ed78c56369e62ca376b6dd9e56abcb6363.png)

#### Paso 2: Borra las cookies y el caché de tu navegador (opcional).

Es bueno si borra la memoria caché de su navegador por primera vez que va a usar browsec, de modo que su navegador cargue todos los archivos desde cero.

#### Paso 3: reinicia tu navegador y visita [FreeCodeCamp.com](http://freecodecamp.com)

Solo cierra tu navegador, y reinícialo. Compruebe la extensión de browsec, para la ubicación de punto final deseada.

### Para Mozilla Firefox:

Descargue una versión portátil de Firefox, con complemento incluido, desde el [sitio web de Browsec](https://browsec.com/en/dashboard/main) .

![Imagen para 'Browsec en Google Chrome WebStore'](//discourse-user-assets.s3.amazonaws.com/original/2X/b/b30fbf3bade330044e18b3c37409f2437a3810c1.png)

¡Eso es! ¡Feliz codificación! Si esto funciona, háganoslo saber en el [chat de ayuda.](https://gitter.im/FreeCodeCamp/Help)

## Preguntas frecuentes

### ¿Cómo puedo saber si me enfrento a un ataque de "hombre en el medio"?

Cuando visite el sitio web de la FCC, o haga frente a los desafíos, si observa la Consola de desarrollador de su navegador (Presione F12> pestaña Consola), debería ver errores similares, como se muestra a continuación.

![Imagen de 'Error'](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4949599e3143f454fc5a7174a81e65fa68d04c77.png)

![Imagen de 'Error'](//discourse-user-assets.s3.amazonaws.com/original/2X/0/039acb319bae57f31ebd78aa3c8987f324a37f84.png)

![Imagen de 'Error'](//discourse-user-assets.s3.amazonaws.com/original/2X/2/25dcc04ecddc422fb7ba113ddac3378d5decd905.png)

Estos son los casos clásicos del tema.

### Espera un minuto, ¿Puedo usar algún mecanismo alternativo, para Browsec?

Sí, ¿por qué no? Puedes usar cualquier cliente VPN disponible en el mercado, pero ten en cuenta que Browsec es gratis y funciona de maravilla.

### Oye, ¿qué pasa con otros navegadores, Internet Explorer, Safari, etc.?

Hmm, vaya a cualquier complemento VPN que pueda encontrar para estos navegadores, [Tor](https://www.torproject.org/) , es uno de esos clientes, pero vienen con suscripciones de pago, básicamente puede usar el anonimizador que desee, sin embargo, Chrome y Browsec se han probado y probado. han trabajado para la mayoría de los campistas en el pasado.

### ¿Puedo usar el anonymizer para usar sitios web que no sean FCC?

Por supuesto que sí. Por qué no? Sin embargo, recuerde que esto no lo hace invisible para la ley, ¡así que tenga cuidado con lo que está haciendo! ![:wink:](//forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=2 ":guiño:")

### ¿Qué pasa si esto no funciona para mí?

Por favor, háganoslo saber en el [chat de ayuda](https://gitter.im/FreeCodeCamp/Help) , haremos todo lo posible para encontrar una solución.

#### _Renuncia_

**_FreeCodeCamp NO respalda ninguno de los softwares mencionados en este artículo, utilícelos a su propia discreción. Algunos clientes de VPN pueden rastrear su actividad, también puede haber efectos secundarios como velocidades lentas o demoras en la carga de páginas._**