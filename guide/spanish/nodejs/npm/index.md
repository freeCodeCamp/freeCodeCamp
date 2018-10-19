---
title: NPM
localeTitle: NGP
---
## NPM

Node.js hace posible escribir aplicaciones en JavaScript en el servidor. Se basa en el tiempo de ejecución de JavaScript V8 y está escrito en C ++, por lo que es rápido. Originalmente, estaba pensado como un entorno de servidor para aplicaciones, pero los desarrolladores comenzaron a usarlo para crear módulos que les ayuden en la automatización de tareas locales. Desde entonces, un ecosistema completamente nuevo de herramientas basadas en nodos ha evolucionado para transformar la cara del desarrollo de front-end.

Para utilizar estos módulos (o paquetes) en Node.js, necesitamos poder instalarlos y administrarlos de una manera útil. Aquí es donde npm, el gestor de paquetes de Node, entra. Instala los paquetes que desea utilizar y proporciona una interfaz útil para trabajar con ellos.

## Instalando NPM

Para instalar `npm` , tenemos que descargar los binarios de Nodejs en su entorno local. Los binarios de Node.js incluyen la última versión de npm. Para verificar que:

```shell
npm -v 
 5.6.0 
```

Node Package Manager (NPM) proporciona dos funcionalidades principales:

*   Repositorios en línea para paquetes / módulos de node.js que se pueden buscar en `npmjs.com` .
    
*   Utilidad de línea de comandos para instalar paquetes Node.js, hacer administración de versiones y administración de dependencias de paquetes Node.js.
    

## Instalación de módulos usando NPM

`npm` puede instalar paquetes en modo local o global. De forma predeterminada, NPM instala cualquier dependencia en el modo local. En modo local, instala el paquete en una carpeta de node\_modules en su directorio de trabajo principal. Esta ubicación es propiedad del usuario actual. Los paquetes globales se instalan en {prefix} `/lib/node_modules/` que es propiedad de root, donde {prefix} suele ser `/usr/ or /usr/local` . Esto significa que tendría que usar sudo para instalar paquetes globalmente, lo que podría causar errores de permiso al resolver dependencias de terceros, además de ser un problema de seguridad.

### Instalación de paquetes en modo global

Cualquier paquete instalado globalmente estará disponible desde la línea de comando. Usamos el indicador global o -g para instalar paquetes globalmente.

```shell
$ npm install uglify-js --global 
```

Podemos listar los paquetes globales que hemos instalado con el comando npm list.

```shell
$ npm list --global 
 /usr/local/lib 
 ├─┬ npm@5.6.0 
 │ ├── abbrev@1.1.0 
 │ ├── ansi-regex@2.1.1 
 │ ├── ansicolors@0.3.2 
 │ ├── ansistyles@0.1.3 
 .................... 
 └─┬ uglify-js@3.0.15 
  ├─┬ commander@2.9.0 
  │ └── graceful-readlink@1.0.1 
  └── source-map@0.5.6 
```

La salida sin embargo, es bastante verbosa. Podemos cambiar eso con la opción --depth = 0.

```js
$ npm list -g --depth=0 
 /usr/local/lib 
 ├── npm@5.6.0 
 └── uglify-js@3.0.15 
```

### Instalación de paquetes en modo local

Cuando instala paquetes localmente, normalmente lo hace utilizando un archivo package.json.

```shell
npm install --save express 
```

Ahora puedes usar este módulo en tu archivo js como sigue

```js
const express = require('express'); 
```

Los módulos locales se dividen en dos tipos de dependencias: `devDepenednecies` y `dependencies` . La diferencia entre estos dos, es que las devDependencies son módulos que solo se requieren durante el desarrollo, mientras que las dependencias son módulos que también se requieren en tiempo de ejecución. Para guardar una dependencia como devDependency en la instalación necesitamos hacer una `npm install --save-dev` , en lugar de solo una `npm install --save` .

Una buena forma abreviada de instalar una dependencia de desarrollo que me gusta usar es `npm i -D` . La abreviatura para guardar una dependencia regular es `-S` lugar de `-D` .

### Instalación de una versión específica de un paquete

Para ello, mencionamos la versión del paquete que queremos instalar.

```shell
$ npm install underscore@1.8.2 -S 
```

Para eliminar una dependencia global, use el indicador `-g` .

### Desinstalar paquetes locales

npm es un gestor de paquetes, por lo que debe poder eliminar un paquete. Podemos eliminar el paquete:

```shell
$ npm uninstall underscore -S 
```

Para actualizar una dependencia global, use el indicador `-g` .

### Actualización de un paquete

Para actualizar un paquete, puedes hacer:
```
$ npm update underscore -S 
```

Para verificar si hay una actualización disponible para cualquier paquete asociado con nuestro proyecto:

```shell
$ npm outdated 
 
 Package     Current  Wanted  Latest  Location 
 underscore    1.8.2   1.8.3   1.8.3  project 
```

La columna Actual nos muestra la versión que está instalada localmente. La última columna nos dice la última versión del paquete. Y la columna Wanted nos dice la última versión del paquete que podemos actualizar sin romper nuestro código existente.

## Gestionando dependencias con package.json

Si no usa una `npm install express` específica e instala un módulo como `npm install express` , instalará el módulo en la carpeta `node_modules` localmente, pero el `package.json` que mantiene registros de todas las dependencias que estamos usando en un proyecto no se actualizará con nuestra adición. Por lo tanto, el paquete será específico para el desarrollo, no se instalará en el entorno runtimme. Asegúrese de que siempre use una marca adecuada y mantenga actualizado el archivo `package.json` .

Cuando instala paquetes localmente, necesita un archivo package.json. Para generar uno puedes hacerlo usando el comando `npm init` . Se generarán algunas preguntas que, al presionar Intro, puede mantener los valores predeterminados.

```shell
$ npm init 
 package name: (project) 
 version: (1.0.0) 
 description: Demo of package.json 
 entry point: (index.js) 
 test command: 
 git repository: 
 keywords: 
 author: 
 license: (ISC) 
```

Piense en `package.json` como el guardián de todas las dependencias o manifestación de un proyecto Node.js. Si desea una forma más rápida de generar un archivo package.json, use `npm init --y` .

Lista de atributos comunes en un archivo `package.json` :

*   nombre - nombre del paquete
    
*   versión - versión semántica del paquete
    
*   descripción - descripción del paquete
    
*   página de inicio - página de inicio del paquete
    
*   autor - autor del paquete
    
*   contribuidores - nombre de los contribuyentes al paquete
    
*   dependencias - lista de dependencias. NPM instala automáticamente todas las dependencias mencionadas aquí en la carpeta node\_module del paquete.
    
*   devDependencies - lista de todas las dependencias específicas de desarrollo
    
*   repositorio - tipo de repositorio y URL del paquete
    
*   main - punto de entrada del paquete
    
*   palabras clave - palabras clave
    
*   licencia: una licencia para su paquete para que las personas sepan cómo se les permite usarla, y cualquier restricción que le imponga.
    
*   scripts: la propiedad "scripts" es un diccionario que contiene comandos de script que se ejecutan varias veces en el ciclo de vida de su paquete.
    
*   config: objeto que se puede usar para establecer los parámetros de configuración utilizados en los scripts de paquetes que persisten en las actualizaciones.
    

Un ejemplo:

```json
{ 
   "name": "express", 
      "description": "Fast, unopinionated, minimalist web framework", 
      "version": "4.11.2", 
      "author": { 
 
         "name": "TJ Holowaychuk", 
         "email": "tj@vision-media.ca" 
      }, 
 
   "contributors": [{ 
      "name": "Aaron Heckmann", 
      "email": "aaron.heckmann+github@gmail.com" 
   }, 
 
    ], 
   "license": "MIT", "repository": { 
      "type": "git", 
      "url": "https://github.com/strongloop/express" 
   }, 
   "homepage": "https://expressjs.com/", "keywords": [ 
      "express", 
      "framework", 
      "sinatra", 
      "web", 
      "rest", 
      "restful", 
      "router", 
      "app", 
      "api" 
   ], 
   "dependencies": { 
      "serve-static": "~1.8.1", 
 
   }, 
   "devDependencies": { 
      "jade": "~1.9.1", 
   }, 
   "engines": { 
      "node": ">= 0.10.0" 
   }, 
   "files": [ 
      "LICENSE", 
      "History.md", 
      "Readme.md", 
      "index.js", 
      "lib/" 
   ], 
   "scripts": { 
      "test": "mocha --require test/support/env 
         --reporter spec --bail --check-leaks test/ test/acceptance/", 
      "test-cov": "istanbul cover node_modules/mocha/bin/_mocha 
         -- --require test/support/env --reporter dot --check-leaks test/ test/acceptance/", 
      "test-tap": "mocha --require test/support/env 
         --reporter tap --check-leaks test/ test/acceptance/", 
      "test-travis": "istanbul cover node_modules/mocha/bin/_mocha 
         --report lcovonly -- --require test/support/env 
         --reporter spec --check-leaks test/ test/acceptance/" 
   }, 
 
 } 
```

## npm Scripts

`npm` scripts `npm` se utilizan para automatizar tareas repetitivas. Por ejemplo, construyendo su proyecto, minimizando las hojas de estilo en cascada (CSS) y los archivos JavaScript (JS). Los scripts también se utilizan para eliminar archivos y carpetas temporales, etc. Se pueden personalizar y se puede acceder a ellos mediante el objeto de `scripts` en `package.json` .

```json
{ 
  "name": "super-cool-package", 
  "version": "1.0.0", 
  "scripts": {} 
 } 
```

Un ejemplo del script NPM más popular:

```json
"scripts": { 
    "start": "node index.js", 
    ... 
 } 
```

## npm Cache

Cuando npm instala un paquete, mantiene una copia, por lo que la próxima vez que quiera instalar ese paquete, no es necesario que llegue a la red. Las copias se almacenan en caché en el directorio .npm en su ruta de inicio.

```shell
$ ls ~/.npm 
 lodash.zipobject 
 log-driver 
 log-symbols 
 logalot 
 logfmt 
 loglevel 
 long-timeout 
 longest 
 longest-strea 
```

Este directorio se llenará de paquetes antiguos con el tiempo, por lo que es útil limpiarlo ocasionalmente.

```shell
$ npm cache clean 
```

## Hilo - una alternativa a npm

Yarn es también un gestor de paquetes JavaScript desarrollado y mantenido por Facebook. Ambos comparten similitudes de alto nivel cuando se trata de usarlos. Se supone que es más rápido en la instalación de dependencias que npm. Para instalarlo:

```shell
npm install -g yarn 
```

El hilo no pretende reemplazar npm, más bien como mejorarlo. Utiliza el mismo archivo package.json y guarda las dependencias en la carpeta `node_modules/` . Para inicializar un proyecto, utilizarás:

```shell
yarn init 
```

### Adición, actualización y eliminación de dependencias

Agregar una nueva dependencia es fácil y similar a npm:

```shell
yarn add [package-name] 
```

Si desea una versión o etiqueta específica del paquete, puede hacer esto.

```shell
yarn add express@4.14.1 
```

Para las dependencias de desarrollo, las dependencias de igual y las dependencias opcionales, se pasa la opción --dev --peer --optional respectivamente.

```shell
yarn add gulp --dev 
```

Se ahorrará un trago bajo devDependencies. Para actualizar o eliminar un paquete, simplemente reemplace el comando agregar con una actualización o eliminar seguido del nombre del paquete.

```shell
# upgrade a gulp from 3.9.1 to version 4 
 yarn upgrade gulp@4.0 
 
 # remove a gulp 
 yarn remove gulp 
```

Después de cada instalación, actualización o eliminación, Yarn actualiza un archivo yarn.lock que realiza un seguimiento de la versión exacta del paquete instalada en el directorio node\_modules. Característica similar se ha actualizado en npm. Ahora hay un `package-lock.json` que se comporta exactamente de la misma manera que `yarn.lock` en las versiones más recientes de npm.

### Números de versión del paquete, y lo que significan

Una primera versión de un paquete npm es siempre 1.0.0

Corrección de errores, o cambios menores incrementan el tercer dígito, hense 1.0.0 se convertiría en 1.0.1

Las nuevas características que no rompen las versiones anteriores de un paquete incrementan el segundo dígito, hense 1.0.0 se convertiría en 1.1.0

Todos los cambios que rompen las versiones anteriores de un paquete incrementan el primer dígito, hense 1.0.0 se convertiría en 2.0.0

¡Es importante recordar esto cuando actualice paquetes para mantener su proyecto estable!