---
title: HTTP
localeTitle: HTTP
---

##HTTP

Node.js tiene un conjunto de módulos incorporados que puede utilizar sin ninguna otra instalación. De manera similar, el **módulo HTTP** contiene un conjunto de funciones que se requieren para transferir datos a través del Protocolo de transferencia de hipertexto (HTTP).

El módulo HTTP puede crear un servidor HTTP que escucha a los puertos del servidor y responde al cliente.

Para incluir un módulo, use la función `require()` con el nombre del módulo.

```javascript
const http = require('http');
```

## Node.js como un servidor web

El método `createServer()` se utiliza para crear un servidor HTTP. El primer argumento del método `res.writeHead()` es el código de estado, `200` significa que todo está bien, el segundo argumento es un objeto que contiene los encabezados de respuesta.

```javascript
const http = require('http');

 //create a server object:
 http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
 }).listen(8000); //the server object listens on port 8000

 console.log("Server is listening on port no : 8000");
```

### Pasos para la ejecución:

*   Deberías tener instalado Node.js en tu computadora.
*   Crea un archivo _app.js_ y pega el código anterior.
*   Ahora abra su consola en el directorio de trabajo y ejecute el comando `node app.js`
*   Abra su navegador e ingrese `http://localhost:8000`

_Nota:_ para cerrar el servidor, presione `ctrl + C` en la consola para los usuarios de Windows.

## Recursos

*   [API Node.js](https://nodejs.org/api/http.html#http_http)
*   [Escuelas w3](https://www.w3schools.com/nodejs/nodejs_http.asp)