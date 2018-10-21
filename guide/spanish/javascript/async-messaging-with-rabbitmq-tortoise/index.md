---
title: Async messaging with RabbitMQ and Tortoise
localeTitle: Mensajes asíncronos con RabbitMQ y Tortoise
---
Resulta que RabbitMQ es la plataforma de intermediarios de mensajes más fácil y con más rendimiento que utiliza el protocolo AMQ que existe hoy en día. Su uso en una arquitectura de microservicio se traduce en ganancias de rendimiento masivas, así como en la promesa de confiabilidad. En esta guía, vamos a explorar los conceptos básicos del uso de RabbitMQ con Node.js.

## Teoría

En su nivel más básico, lo ideal sería tener dos servicios diferentes que interactúen entre sí a través de Rabbit: un _editor_ y un _suscriptor_ . Un editor normalmente envía mensajes a Rabbit, y un suscriptor escucha estos mensajes y ejecuta el código basándose en esos mensajes. Tenga en cuenta que pueden ser ambos al mismo tiempo; un servicio puede publicar mensajes en Rabbit y consumir mensajes al mismo tiempo, lo que hace que se diseñen sistemas realmente potentes.

Ahora, un editor generalmente publica mensajes con una _clave de enrutamiento_ a algo que se llama _intercambio_ . Un consumidor escucha una _cola_ en el mismo intercambio, vinculado a la clave de enrutamiento. En términos arquitectónicos, su plataforma usaría un intercambio de Rabbit, y diferentes tipos de trabajos / servicios tendrían sus propias claves de enrutamiento y colas, para que pub-sub funcione de manera efectiva. Los mensajes pueden ser cadenas; también pueden ser objetos nativos: las bibliotecas cliente de AMQP hacen el trabajo pesado de convertir objetos de un idioma a otro. Y sí, eso significa que los servicios se pueden escribir en diferentes idiomas, siempre que puedan entender el AMQP.

## Empezando

Vamos a preparar un ejemplo muy simple en el que un script de editor publica un mensaje para Rabbit, que contiene una URL, y un script de consumidor escucha a Rabbit, toma la URL publicada, la llama y muestra los resultados. Puedes encontrar la muestra terminada en [Github](https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise) .

Primero, inicialicemos un proyecto npm:

`$ npm init`

Siempre puede simplemente presionar `Enter` todo el camino y usar las opciones predeterminadas, o puede completarlas. Ahora, instalemos los paquetes que necesitamos. Vamos a utilizar [Tortoise](https://www.npmjs.com/package/tortoise) , para interactuar con RabbitMQ. También vamos a utilizar [node-cron](https://www.npmjs.com/package/node-cron) , para programar la publicación del mensaje real.

`$ npm install --save tortoise node-cron`

Ahora su `package.json` debería parecerse mucho a esto:
```
{ 
  "name": "freecodecamp-guides-rabbitmq-tortoise", 
  "version": "1.0.0", 
  "description": "Sample code to accompany the FreeCodeCamp guide on async messaging with RabbitMQ and Tortoise.", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "repository": { 
    "type": "git", 
    "url": "git+https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise.git" 
  }, 
  "keywords": [ 
    "rabbitmq", 
    "tortoise", 
    "amqp" 
  ], 
  "author": "Rudraksh MK", 
  "license": "MIT", 
  "bugs": { 
    "url": "https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise/issues" 
  }, 
  "homepage": "https://github.com/rudimk/freecodecamp-guides-rabbitmq-tortoise#readme", 
  "dependencies": { 
    "node-cron": "^1.2.1", 
    "tortoise": "^1.0.1" 
  } 
 } 
```

Ahora estamos listos. Vamos a crear un editor primero.

```javascript
const Tortoise = require('tortoise') 
 const cron = require('node-cron') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
```

Después de importar `tortoise` y `node-cron` , hemos avanzado e inicializado una conexión a RabbitMQ. A continuación, escribamos una función rápida y sucia que publica un mensaje para Rabbit:

```javascript
function scheduleMessage(){ 
    let payload = {url: 'https://randomuser.me/api'} 
    tortoise 
    .exchange('random-user-exchange', 'direct', { durable:false }) 
    .publish('random-user-key', payload) 
 } 
```

Eso es bastante simple. Hemos definido un diccionario que contiene una URL para la API [RandomUser.me](https://randomuser.me/) , que luego se publica en el `random-user-exchange` intercambio de `random-user-exchange` en RabbitMQ, con la `random-user-key` enrutamiento de claves de `random-user-key` . Como se mencionó anteriormente, la clave de enrutamiento es lo que determina quién puede consumir un mensaje. Ahora, escribamos una regla de programación, para publicar este mensaje cada 60 segundos.

```javascript
cron.schedule('60 * * * * *', scheduleMessage) 
```

¡Y nuestro editor está listo! ¡Pero realmente no es bueno que un consumidor consuma estos mensajes! Pero primero, necesitamos una biblioteca que pueda llamar a la URL en estos mensajes. Personalmente, uso `superagent` : `npm install --save superagent` .

Ahora, en `consumer.js` :

```javascript
const Tortoise = require('tortoise') 
 const superagent = require('superagent') 
 
 const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`) 
```

A continuación, escribamos una función asíncrona que llame a una URL y muestre el resultado:

```javascript
async function getURL(url){ 
    let response = await superagent.get(url) 
    return response.body 
 } 
```

Es hora de escribir código para realmente consumir mensajes:

```javascript
tortoise 
 .queue('random-user-queue', { durable: false }) 
 // Add as many bindings as needed 
 .exchange('random-user-exchange', 'direct', 'random-user-key', { durable: false }) 
 .prefetch(1) 
 .subscribe(function(msg, ack, nack) { 
  // Handle 
  let payload = JSON.parse(msg) 
  getURL(payload['url']).then((response) => { 
    console.log('Job result: ', response) 
  }) 
  ack() // or nack() 
 }) 
```

Aquí, le hemos dicho a `tortoise` que escuche la `random-user-queue` , que está vinculada a la `random-user-key` `random-user-exchange` . Una vez que se recibe un mensaje, la carga útil se recupera de `msg` y se pasa a la función `getURL` , que a su vez devuelve una Promesa con la respuesta JSON deseada de la API de RandomUser.

## Conclusión

La simplicidad asociada con el uso de RabbitMQ para la mensajería no tiene paralelo, y es muy fácil crear patrones de microservicio realmente complejos, con solo unas pocas líneas de código. La mejor parte es que la lógica detrás de la mensajería no cambia realmente a través de los idiomas: Crystal o Go o Python o Ruby funcionan de la misma manera con Rabbit; esto significa que puede tener servicios escritos en diferentes idiomas, todos los cuales se comunican entre sí sin esfuerzo. , permitiéndole utilizar el mejor lenguaje para el trabajo.