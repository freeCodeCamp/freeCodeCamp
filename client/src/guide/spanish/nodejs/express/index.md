---
title: ExpressJS
localeTitle: ExpressJS
---
## ExpressJS

Cuando se trata de crear aplicaciones web con Node.js, crear un servidor puede llevar mucho tiempo. A lo largo de los años, Node.js ha madurado lo suficiente debido al apoyo de la comunidad. El uso de Node.js como backend para aplicaciones web y sitios web ayuda a los desarrolladores a comenzar a trabajar en su aplicación o producto rápidamente. En este tutorial, veremos Expressjs, que es un marco de Node.js para el desarrollo web que viene con características como enrutamiento y representación y soporte para API REST.

## ¿Qué es Express?

Express es el marco de trabajo de Node.js más popular porque requiere una configuración mínima para iniciar una aplicación o una API y es rápido y no está insinuado al mismo tiempo. En otras palabras, no impone su propia filosofía de que una aplicación o API debe construirse de una manera específica, a diferencia de Rails y Django. Su flexibilidad se puede calcular por la cantidad de módulos `npm` disponibles, lo que lo hace enchufable al mismo tiempo. Si tiene conocimientos básicos de HTML, CSS y JavaScript y cómo funciona Node.js en general, en ningún momento podrá comenzar a utilizar Expressjs.

Express fue desarrollado por TJ Holowaychuk y ahora es mantenido por la fundación Node.js y los desarrolladores de código abierto. Para comenzar con el desarrollo usando Express, necesita tener Node.js y npm instalados. Puede instalar [Node.js](https://nodejs.org/en/) en su máquina local y, junto con ella, viene la utilidad de línea de comandos `npm` que nos ayudará a instalar complementos o como dependencias llamadas más adelante en nuestro proyecto.

Para verificar si todo está instalado correctamente, abra su terminal y escriba:

```shell
node --version 
 v5.0.0 
 npm --version 
 3.5.2 
```

Si obtiene el número de versión en lugar de un error, significa que ha instalado Node.js y npm correctamente.

## ¿Por qué usar Expressjs?

Antes de comenzar con el mecanismo de uso de Express como el marco backend, primero exploremos por qué debemos considerar usarlo o los motivos de su popularidad.

*   Express le permite crear aplicaciones web y móviles híbridas de una página, varias páginas e híbridas. Otro uso backend común es proporcionar una API para un cliente (ya sea web o móvil).
*   Viene con un motor de plantillas predeterminado, Jade, que ayuda a facilitar el flujo de datos a la estructura de un sitio web y es compatible con otros motores de plantillas.
*   Es compatible con MVC (Model-View-Controller), una arquitectura muy común para diseñar aplicaciones web.
*   Es multiplataforma y no se limita a ningún sistema operativo en particular.
*   Aprovecha sobre Node.js un solo modelo asíncrono y asíncrono.

Cada vez que creamos un proyecto usando `npm` , nuestro proyecto debe tener un archivo `package.json` .

### Creando package.json

Un archivo JSON (Notación de objetos de JavaScript) contiene toda la información sobre cualquier proyecto Express. La cantidad de módulos instalados, el nombre del proyecto, la versión y otra información meta. Para agregar Expressjs como módulo en nuestro proyecto, primero necesitamos crear un directorio de proyecto y luego crear un archivo package.json.

```shell
mkdir express-app-example 
 cd express-app-example 
 npm init --yes 
```

Esto generará un archivo `package.json` en la raíz del directorio del proyecto. Para instalar cualquier módulo desde `npm` necesitamos tener el archivo `package.json` en ese directorio.

```json
{ 
  "name": "express-web-app", 
  "version": "0.1.0", 
  "description": "", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "keywords": [], 
  "license": "MIT" 
 } 
```

### Instalación de Express

Ahora que tenemos el archivo `package.json` , podemos instalar Express ejecutando el comando:

```shell
npm install --save express 
```

Podemos confirmar que Express se ha instalado correctamente de dos maneras. Primero, habrá una nueva sección en el archivo `package.json` llamado `dependencies` bajo las cuales existe nuestro Express:

```json
{ 
  "name": "express-web-app", 
  "version": "0.1.0", 
  "description": "", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "keywords": [], 
  "license": "MIT", 
  "dependencies": { 
    "express": "4.16.0" 
  } 
 } 
```

La segunda forma es que una nueva carpeta llamada `node_modules` apareció repentinamente en la raíz de nuestro directorio de proyectos. Esta carpeta almacena los paquetes que instalamos localmente en nuestro proyecto.

## Construyendo un servidor con Express

Para usar nuestro paquete instalado para Express Framework y crear una aplicación de servidor simple, crearemos el archivo, `index.js` , en la raíz del directorio de nuestro proyecto.

```javascript
const express = require('express'); 
 const app = express(); 
 
 app.get('/', (req, res) => res.send('Hello World!')); 
 
 app.listen(3000, () => console.log('Example app listening on port 3000!')); 
```

Para iniciar el servidor, vaya a su terminal y escriba:

```shell
node index.js 
```

Esto iniciará el servidor. Esta aplicación mínima escuchará en el puerto 3000. Hacemos una solicitud a través de nuestro navegador en `http://localhost:3000` y nuestro servidor responderá con `Hello World` para el cual el navegador es el cliente y el mensaje se mostrará allí.

La primera línea de nuestro código utiliza la función de `require` para incluir el módulo `express` . Así es como incluimos y usamos un paquete instalado desde npm en cualquier archivo JavaScript en nuestro proyecto. Antes de comenzar a utilizar Express, debemos definir una instancia del mismo que maneje la solicitud y la respuesta del servidor al cliente. En nuestro caso, es la `app` variable.

`app.get()` es una función que le dice al servidor qué hacer cuando se llama a una solicitud de `get` en la ruta dada. Tiene una función de devolución de llamada `(req, res)` que escuchar la petición de entrada `req` objeto y responder en consecuencia mediante `res` objeto de respuesta. Tanto `req` como `res` están disponibles para nosotros mediante el marco Express.

El objeto `req` representa la solicitud HTTP y tiene propiedades para la cadena de consulta de solicitud, los parámetros, el cuerpo y los encabezados HTTP. El objeto res representa la respuesta HTTP que envía una aplicación Express cuando recibe una solicitud HTTP. En nuestro caso, estamos enviando un `Hello World` texto `Hello World` cuando se realiza una solicitud a la ruta `/` .

Por último, `app.listen()` es la función que inicia un puerto y un host, en nuestro caso, el `localhost` para que las conexiones escuchen las solicitudes entrantes de un cliente. Podemos definir el número de puerto tal como `3000` .

## Anatomía de una aplicación expresa

Una estructura típica de un archivo de servidor Express probablemente contendrá las siguientes partes:

**Dependencias**

Importando las dependencias como el expreso mismo. Estas dependencias se instalan usando `npm` como hicimos en el ejemplo anterior.

**Instancias**

Estas son las declaraciones para crear un objeto. Para usar Express, tenemos que crear una instancia de la variable de la `app` .

**Configuraciones**

Estas declaraciones son las configuraciones personalizadas basadas en la aplicación que se definen después de las instancias o se definen en un archivo separado (más sobre esto cuando se analiza la estructura del proyecto) y se requieren en nuestro archivo principal del servidor.

**Middleware**

Estas funciones determinan el flujo del ciclo de solicitud-respuesta. Se ejecutan después de cada solicitud entrante. También podemos definir funciones de middleware personalizadas. Tenemos una sección sobre ellos a continuación.

**Rutas**

Son los puntos finales definidos en nuestro servidor que ayudan a realizar operaciones para una solicitud de cliente en particular.

**Servidor de arranque**

El último que se ejecuta en un servidor Express es la función `app.listen()` que inicia nuestro servidor.

Ahora comenzaremos a analizar las secciones de las que no hemos hablado anteriormente.

## Enrutamiento

El enrutamiento se refiere a cómo una aplicación del lado del servidor responde a una solicitud del cliente a un punto final en particular. Este punto final consiste en un URI (una ruta como `/` o `/books` ) y un método HTTP como GET, POST, PUT, DELETE, etc.

Las rutas pueden ser buenas páginas web antiguas o puntos finales de la API REST. En ambos casos, la sintaxis es similar para una ruta que se puede definir como:

```javascript
app.METHOD(PATH, HANDLER); 
```

Los enrutadores son útiles para separar inquietudes tales como puntos finales diferentes y mantienen partes relevantes del código fuente juntas. Ayudan en la construcción de código mantenible. Todas las rutas se definen antes de la llamada a la función de `app.listen()` . En una aplicación Express típica, `app.listen()` será la última función que se ejecutará.

### Métodos de enrutamiento

HTTP es un protocolo estándar para un cliente y un servidor para comunicarse. Proporciona diferentes métodos para que un cliente realice la solicitud. Cada ruta tiene al menos una función de enlace o una devolución de llamada. Esta función de devolución de llamada determina cuál será la respuesta del servidor para esa ruta en particular. Por ejemplo, una ruta de `app.get()` se usa para manejar solicitudes GET y, a cambio, envía un mensaje simple como respuesta.

```javascript
// GET method route 
 app.get('/', (req, res) => res.send('Hello World!')); 
```

### Rutas de enrutamiento

Una ruta de enrutamiento es una combinación de un método de solicitud para definir los puntos finales en los que un cliente puede realizar solicitudes. Las rutas de ruta pueden ser cadenas, patrones de cadena o expresiones regulares.

Definamos dos puntos finales más en nuestra aplicación basada en servidor.

```javascript
app.get('/home', (req, res) => { 
  res.send('Home Page'); 
 }); 
 app.get('/about', (req, res) => { 
  res.send('About'); 
 }); 
```

Considere el código anterior como un sitio web mínimo que tiene dos puntos finales, `/home` y `/about` . Si un cliente realiza una solicitud para la página de inicio, solo responderá con la `Home Page` y en `/about` enviará la respuesta: `About Page` . Estamos utilizando la función `res.send` para enviar la cadena de vuelta al cliente si se selecciona una de las dos rutas definidas.

### Parámetros de enrutamiento

Los parámetros de ruta se denominan segmentos de URL que se utilizan para capturar los valores especificados en su posición en la URL. `req.params` objeto `req.params` se usa en este caso porque tiene acceso a todos los parámetros pasados ​​en la url.

```javascript
app.get('/books/:bookId', (req, res) => { 
  res.send(req.params); 
 }); 
```

La URL de solicitud del cliente en el código fuente anterior será `http://localhost:3000/books/23` . El nombre de los parámetros de la ruta debe estar formado por caracteres (\[A-Za-z0-9\_\]). Un caso de uso muy general de un parámetro de enrutamiento en nuestra aplicación es tener una ruta 404.

```javascript
// For invalid routes 
 app.get('*', (req, res) => { 
  res.send('404! This is an invalid URL.'); 
 }); 
```

Si ahora iniciamos el servidor desde la línea de comandos usando `node index.js` e intentamos visitar la URL: `http://localhost:3000/abcd` . En respuesta, obtendremos el mensaje 404.

## Funciones de middleware

Las funciones de middleware son aquellas funciones que tienen acceso al objeto de solicitud ( `req` ), el objeto de respuesta ( `res` ) y la `next` función en el ciclo de solicitud-respuesta de la aplicación. El objetivo de estas funciones es modificar los objetos de solicitud y respuesta para tareas como analizar cuerpos de solicitud, agregar encabezados de respuesta, realizar otros cambios en el ciclo de solicitud-respuesta, finalizar el ciclo de solicitud-respuesta y llamar a la siguiente función de middleware.

La `next` función es una función en el enrutador Express que se utiliza para ejecutar las otras funciones de middleware que siguen al middleware actual. Si una función de middleware incluye `next()` eso significa que el ciclo de solicitud-respuesta termina ahí. El nombre de la función `next()` aquí es totalmente arbitrario y puedes nombrarlo como quieras, pero es importante seguir las mejores prácticas y tratar de seguir algunas convenciones, especialmente si estás trabajando con otros desarrolladores.

Además, cuando escriba un middleware personalizado, no olvide agregarle la función `next()` . Si no menciona `next()` el ciclo de solicitud-respuesta se bloqueará en medio de la nada y su servidor podría hacer que el cliente se agote.

Permítanos crear una función de middleware personalizada para comprender la comprensión de este concepto. Toma este código por ejemplo:

```javascript
const express = require('express'); 
 const app = express(); 
 
 // Simple request time logger 
 app.use((req, res, next) => { 
   console.log("A new request received at " + Date.now()); 
 
   // This function call tells that more processing is 
   // required for the current request and is in the next middleware 
   function/route handler. 
   next(); 
 }); 
 
 app.get('/home', (req, res) => { 
  res.send('Home Page'); 
 }); 
 
 app.get('/about', (req, res) => { 
  res.send('About Page'); 
 }); 
 
 app.listen(3000, () => console.log('Example app listening on port 3000!')); 
```

Para configurar cualquier middleware, ya sea personalizado o disponible como módulo npm, usamos la función `app.use()` . Es como una ruta de parámetro opcional y una devolución de llamada de parámetro obligatoria. En nuestro caso, no estamos utilizando la ruta de parámetro opcional.

```javascript
app.use((req, res, next) => { 
  console.log('A new request received at ' + Date.now()); 
  next(); 
 }); 
```

La función de middleware anterior se llama para cada solicitud realizada por el cliente. Cuando ejecute el servidor, notará que, para cada solicitud de navegador en el punto final `/` , recibirá un mensaje en su terminal:

```shell
A new request received at 1467267512545 
```

Las funciones de middleware se pueden utilizar para una ruta específica. Vea el ejemplo a continuación:

```javascript
const express = require('express'); 
 const app = express(); 
 
 //Simple request time logger for a specific route 
 app.use('/home', (req, res, next) => { 
  console.log('A new request received at ' + Date.now()); 
  next(); 
 }); 
 
 app.get('/home', (req, res) => { 
  res.send('Home Page'); 
 }); 
 
 app.get('/about', (req, res) => { 
  res.send('About Page'); 
 }); 
 
 app.listen(3000, () => console.log('Example app listening on port 3000!')); 
```

Esta vez, solo verá un aviso similar cuando el cliente solicite el punto final `/home` ya que la ruta se menciona en `app.use()` . No se mostrará nada en el terminal cuando el cliente solicite el punto final `/about` .

El orden de las funciones de middleware es importante, ya que definen cuándo llamar a qué función de middleware. En nuestro ejemplo anterior, si definimos la ruta `app.get('/home')...` antes de middleware `app.use('/home')...` , la función de middleware no se invocará.

### Funciones de middleware de terceros

Las funciones de middleware son un patrón útil que permite a los desarrolladores reutilizar el código dentro de sus aplicaciones e incluso compartirlo con otros en forma de módulos NPM. La definición esencial de middleware es una función con tres argumentos: solicitud (o req), respuesta (res) y, a continuación, observamos en la sección anterior.

A menudo, en nuestra aplicación de servidor basada en Express, usaremos funciones de middleware de terceros. Estas funciones son proporcionadas por el propio Express. Son como complementos que pueden instalarse usando npm y es por eso que Express es flexible.

Algunas de las funciones de middleware más utilizadas en una aplicación Express son:

#### bodyParser

Permite a los desarrolladores procesar datos entrantes, como la carga útil del cuerpo. La carga útil es solo los datos que recibimos del cliente para ser procesados. Más útil con los métodos POST. Se instala utilizando:

```shell
npm install --save body-parser 
```

Uso:

```javascript
const bodyParser = require('body-parser'); 
 
 // To parse URL encoded data 
 app.use(bodyParser.urlencoded({ extended: false })); 
 
 // To parse json data 
 app.use(bodyParser.json()); 
```

Probablemente sea una de las funciones de middleware de terceros más utilizadas en cualquier aplicación Express.

#### cookieParser

Analiza el encabezado de la cookie y rellena `req.cookies` con un objeto con clave por nombre de cookie. Para instalarlo,

```shell
$ npm install --save cookie-parser 
```

```javascript
const cookieParser = require('cookie-parser'); 
 app.use(cookieParser()); 
```

#### sesión

Esta función de middleware crea un middleware de sesión con las opciones dadas. Una sesión se utiliza a menudo en aplicaciones como inicio de sesión / registro.

```shell
$ npm install --save session 
```

```javascript
app.use( 
  session({ 
    secret: 'arbitary-string', 
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: true } 
  }) 
 ); 
```

### Morgan

El middleware morgan realiza un seguimiento de todas las solicitudes y otra información importante en función del formato de salida especificado.

```shell
npm install --save morgan 
```

```javascript
const logger = require('morgan'); 
 // ... Configurations 
 app.use(logger('common')); 
```

`common` es un caso de formato predefinido que puede utilizar en la aplicación. Hay otros formatos predefinidos como tiny y dev, pero también puede definir su propio formato personalizado utilizando los parámetros de cadena que nos ofrece morgan.

Una lista de las funciones de middleware más utilizadas está disponible en este [enlace](https://expressjs.com/en/resources/middleware.html) .

## Sirviendo archivos estáticos

Para servir archivos estáticos como hojas de estilo CSS, imágenes, etc. Express proporciona una función de middleware incorporada `express.static` . Los archivos estáticos son aquellos archivos que un cliente descarga desde un servidor.

Es la única función de middleware que viene con Express framework y podemos usarla directamente en nuestra aplicación. Todos los demás middlewares son de terceros.

Por defecto, Express no permite servir archivos estáticos. Tenemos que usar esta función de middleware. Una práctica común en el desarrollo de una aplicación web es almacenar todos los archivos estáticos en el directorio "público" en la raíz de un proyecto. Podemos servir esta carpeta para servir archivos estáticos incluidos escribiendo en nuestro archivo `index.js` :

```javascript
app.use(express.static('public')); 
```

Ahora, los archivos estáticos en nuestro directorio público serán cargados.

```shell
http://localhost:3000/css/style.css 
 http://localhost:3000/images/logo.png 
 http://localhost:3000/images/bg.png 
 http://localhost:3000/index.html 
```

### Directorios Estaticos Múltiples

Para usar varios directorios de activos estáticos, llame a la función de middleware `express.static` varias veces:

```javascript
app.use(express.static('public')); 
 app.use(express.static('files')); 
```

### Prefijo de ruta virtual

También se puede proporcionar un prefijo de ruta de acceso como primer argumento para la función de middleware `express.static` . Esto se conoce como un _prefijo de ruta virtual_ ya que la ruta real no existe en el proyecto.

```javascript
app.use('/static', express.static('public')); 
```

Si ahora intentamos cargar los archivos:

```shell
http://localhost:3000/static/css/style.css 
 http://localhost:3000/static/images/logo.png 
 http://localhost:3000/static/images/bg.png 
 http://localhost:3000/static/index.html 
```

Esta técnica es útil cuando se proporcionan varios directorios para servir archivos estáticos. Los prefijos se utilizan para ayudar a distinguir entre los múltiples directorios.

## Plantilla de motores

Los motores de plantillas son bibliotecas que nos permiten utilizar diferentes idiomas de plantillas. Un lenguaje de plantilla es un conjunto especial de instrucciones (sintaxis y estructuras de control) que le indica al motor cómo procesar los datos. Usar un motor de plantillas es fácil con Express. Los motores de plantillas populares como Pug, EJS, Swig y Handlebars son compatibles con Express. Sin embargo, Express viene con un motor de plantillas predeterminado, Jade, que es la primera versión lanzada de Pug.

Para demostrar cómo usar un motor de plantillas, usaremos Pug. Es un potente motor de plantillas que proporciona funciones como filtros, inclusiones, interpolación, etc. Para usarlo, primero debemos instalarlo como un módulo en nuestro proyecto usando `npm` .

```shell
npm install --save pug 
```

Este comando instalará el pug y para verificar que esté instalado correctamente, simplemente eche un vistazo al archivo `package.json` . Para usarlo con nuestra aplicación, primero tenemos que configurarlo como motor de plantillas y crear un nuevo directorio './views' donde almacenaremos todos los archivos relacionados con nuestro motor de plantillas.

```javascript
app.set('view engine', 'pug'); 
 app.set('views', './views'); 
```

Ya que estamos usando `app.set()` que indica la configuración dentro de nuestro archivo de servidor, debemos colocarlos antes de definir cualquier ruta o una función de middleware.

En el directorio de `views` , cree un archivo llamado `index.pug` .

```pug
doctype html 
  html 
    head 
      tite="Hello from Pug" 
    body 
      p.greetings Hello World! 
```

Para ejecutar esta página, agregaremos la siguiente ruta a nuestra aplicación.

```javascript
app.get('/hello', (req, res) => { 
  res.render('index'); 
 }); 
```

Como ya hemos establecido a Pug como nuestro motor de plantillas, en `res.render` no tenemos que proporcionar la extensión `.pug` . Esta función procesa el código en cualquier archivo `.pug` a HTML para que el cliente lo muestre. Los navegadores solo pueden renderizar archivos HTML. Si inicia el servidor ahora y visita la ruta `http://localhost:3000/hello` , verá la salida `Hello World` representada correctamente.

En Pug, debe observar que no tenemos que escribir etiquetas de cierre en los elementos como lo hacemos en HTML. El código anterior se procesará en HTML como:

```html

<!DOCTYPE html> 
 <html> 
   <head> 
      <title>Hello from Pug</title> 
   </head> 
 
   <body> 
      <p class = "greetings">Hello World!</p> 
   </body> 
 </html> 
```

La ventaja de usar Template Engine sobre archivos HTML sin procesar es que proporcionan soporte para realizar tareas sobre datos. HTML no puede procesar datos directamente. Los frameworks como Angular y React comparten este comportamiento con los motores de plantillas.

También puede pasar valores al motor de plantillas directamente desde la función del controlador de ruta.

```javascript
app.get('/', (req, res) => { 
  res.render('index', { title: 'Hello from Pug', message: 'Hello World!' }); 
 }); 
```

Para el caso anterior, nuestro archivo `index.pug` se escribirá como:

```pug
doctype html 
  html 
    head 
      title= title 
    body 
      h1= message 
```

La salida será la misma que en el caso anterior.

## Estructura del proyecto de una aplicación Express

Dado que Express no exige mucho al desarrollador que lo usa, a veces puede ser un poco abrumador con respecto a la estructura del proyecto que se debe seguir. No tiene una estructura definida oficialmente, pero el caso de uso más común que sigue cualquier aplicación basada en Node.js es separar diferentes tareas en diferentes módulos. Esto significa tener archivos JavaScript separados.

Vayamos a través de una estructura típica de una aplicación web basada en Express.
```
project-root/ 
   node_modules/          // This is where the packages installed are stored 
   config/ 
      db.js                // Database connection and configuration 
      credentials.js       // Passwords/API keys for external services used by your app 
      config.js            // Environment variables 
   models/                 // For mongoose schemas 
      books.js 
      things.js 
   routes/                 // All routes for different entities in different files 
      books.js 
      things.js 
   views/ 
      index.pug 
      404.pug 
        ... 
   public/                 // All static files 
      images/ 
      css/ 
      javascript/ 
   app.js 
   routes.js               // Require all routes in this and then require this file in 
   app.js 
   package.json 
```

Este patrón se conoce comúnmente como MVC, model-view-controller. Simplemente porque nuestro modelo de base de datos, la interfaz de usuario de la aplicación y los controladores (en nuestro caso, las rutas) están escritos y almacenados en archivos separados. Este patrón de diseño que hace que cualquier aplicación web sea fácil de escalar si desea introducir más rutas o archivos estáticos en el futuro y el código se puede mantener.