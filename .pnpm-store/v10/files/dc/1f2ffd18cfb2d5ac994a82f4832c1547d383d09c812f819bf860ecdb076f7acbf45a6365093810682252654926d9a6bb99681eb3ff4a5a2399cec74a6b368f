<div align="center">
🎉 announcing <a href="https://github.com/dotenvx/dotenvx">dotenvx</a>. <em>run anywhere, multi-environment, encrypted envs</em>.
</div>

&nbsp;

<div align="center">

<p>
  <sup>
    <a href="https://github.com/sponsors/motdotla">Dotenv es apoyado por la comunidad.</a>
  </sup>
</p>
<sup>Gracias espaciales a:</sup>
<br>
<br>

<a href="https://graphite.dev/?utm_source=github&utm_medium=repo&utm_campaign=dotenv"><img src="https://res.cloudinary.com/dotenv-org/image/upload/v1744035073/graphite_lgsrl8.gif" width="240" alt="Graphite" /></a>

<a href="https://graphite.dev/?utm_source=github&utm_medium=repo&utm_campaign=dotenv">
  <b>Graphite is the AI developer productivity platform helping teams on GitHub ship higher quality software, faster.</b>
</a>
<hr>
</div>

# dotenv [![NPM version](https://img.shields.io/npm/v/dotenv.svg?style=flat-square)](https://www.npmjs.com/package/dotenv)

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.svg" alt="dotenv" align="right" width="200" />

Dotenv es un módulo de dependencia cero que carga las variables de entorno desde un archivo `.env` en [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env). El almacenamiento de la configuración del entorno separado del código está basado en la metodología [The Twelve-Factor App](http://12factor.net/config).

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![LICENSE](https://img.shields.io/github/license/motdotla/dotenv.svg)](LICENSE)

## Instalación

```bash
# instalación local (recomendado)
npm install dotenv --save
```

O installación con yarn? `yarn add dotenv`

## Uso

Cree un archivo `.env` en la raíz de su proyecto:

```dosini
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"
```

Tan prónto como sea posible en su aplicación, importe y configure dotenv:

```javascript
require('dotenv').config()
console.log(process.env) // elimine esto después que haya confirmado que esta funcionando
```

.. o usa ES6?

```javascript
import * as dotenv from 'dotenv' // vea en https://github.com/motdotla/dotenv#como-uso-dotenv-con-import
// REVISAR LINK DE REFERENCIA DE IMPORTACIÓN
dotenv.config()
import express from 'express'
```

Eso es todo. `process.env` ahora tiene las claves y los valores que definiste en tu archivo `.env`:

```javascript
require('dotenv').config()

...

s3.getBucketCors({Bucket: process.env.S3_BUCKET}, function(err, data) {})
```

### Valores multilínea

Si necesita variables de varias líneas, por ejemplo, claves privadas, ahora se admiten en la versión (`>= v15.0.0`) con saltos de línea:

```dosini
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
Kh9NV...
...
-----END RSA PRIVATE KEY-----"
```

Alternativamente, puede usar comillas dobles y usar el carácter `\n`:

```dosini
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nKh9NV...\n-----END RSA PRIVATE KEY-----\n"
```

### Comentarios

Los comentarios pueden ser agregados en tu archivo o en la misma línea:

```dosini
# This is a comment
SECRET_KEY=YOURSECRETKEYGOESHERE # comment
SECRET_HASH="something-with-a-#-hash"
```

Los comentarios comienzan donde existe un `#`, entonces, si su valor contiene un `#`, enciérrelo entre comillas. Este es un cambio importante desde la versión `>= v15.0.0` en adelante.

### Análisis

El motor que analiza el contenido de su archivo que contiene variables de entorno está disponible para su uso. Este Acepta una Cadena o un Búfer y devolverá un Objeto con las claves y los valores analizados.

```javascript
const dotenv = require('dotenv')
const buf = Buffer.from('BASICO=basico')
const config = dotenv.parse(buf) // devolverá un objeto
console.log(typeof config, config) // objeto { BASICO : 'basico' }
```

### Precarga

Puede usar el `--require` (`-r`) [opción de línea de comando](https://nodejs.org/api/cli.html#-r---require-module) para precargar dotenv. Al hacer esto, no necesita requerir ni cargar dotnev en el código de su aplicación.

```bash
$ node -r dotenv/config tu_script.js
```

Las opciones de configuración a continuación se admiten como argumentos de línea de comandos en el formato `dotenv_config_<option>=value`

```bash
$ node -r dotenv/config tu_script.js dotenv_config_path=/custom/path/to/.env dotenv_config_debug=true
```

Además, puede usar variables de entorno para establecer opciones de configuración. Los argumentos de línea de comandos precederán a estos.

```bash
$ DOTENV_CONFIG_<OPTION>=value node -r dotenv/config tu_script.js
```

```bash
$ DOTENV_CONFIG_ENCODING=latin1 DOTENV_CONFIG_DEBUG=true node -r dotenv/config tu_script.js dotenv_config_path=/custom/path/to/.env
```

### Expansión Variable

Necesitaras agregar el valor de otro variable en una de sus variables? Usa [dotenv-expand](https://github.com/motdotla/dotenv-expand).

## Ejemplos

Vea [ejemplos](https://github.com/dotenv-org/examples) sobre el uso de dotenv con varios frameworks, lenguajes y configuraciones.

* [nodejs](https://github.com/dotenv-org/examples/tree/master/dotenv-nodejs)
* [nodejs (depurar en)](https://github.com/dotenv-org/examples/tree/master/dotenv-nodejs-debug)
* [nodejs (anular en)](https://github.com/dotenv-org/examples/tree/master/dotenv-nodejs-override)
* [esm](https://github.com/dotenv-org/examples/tree/master/dotenv-esm)
* [esm (precarga)](https://github.com/dotenv-org/examples/tree/master/dotenv-esm-preload)
* [typescript](https://github.com/dotenv-org/examples/tree/master/dotenv-typescript)
* [typescript parse](https://github.com/dotenv-org/examples/tree/master/dotenv-typescript-parse)
* [typescript config](https://github.com/dotenv-org/examples/tree/master/dotenv-typescript-config)
* [webpack](https://github.com/dotenv-org/examples/tree/master/dotenv-webpack)
* [webpack (plugin)](https://github.com/dotenv-org/examples/tree/master/dotenv-webpack2)
* [react](https://github.com/dotenv-org/examples/tree/master/dotenv-react)
* [react (typescript)](https://github.com/dotenv-org/examples/tree/master/dotenv-react-typescript)
* [express](https://github.com/dotenv-org/examples/tree/master/dotenv-express)
* [nestjs](https://github.com/dotenv-org/examples/tree/master/dotenv-nestjs)

## Documentación

Dotenv expone dos funciones:

* `configuración`
* `analizar`

### Configuración

`Configuración` leerá su archivo `.env`, analizará el contenido, lo asignará a [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env),
y devolverá un Objeto con una clave `parsed` que contiene el contenido cargado o una clave `error` si falla.

```js
const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)
```

Adicionalmente, puede pasar opciones a `configuracion`.

#### Opciones

##### Ruta

Por defecto: `path.resolve(process.cwd(), '.env')`

Especifique una ruta personalizada si el archivo que contiene las variables de entorno se encuentra localizado en otro lugar.

```js
require('dotenv').config({ path: '/personalizado/ruta/a/.env' })
```

##### Codificación

Por defecto: `utf8`

Especifique la codificación del archivo que contiene las variables de entorno.

```js
require('dotenv').config({ encoding: 'latin1' })
```

##### Depurar

Por defecto: `false`

Active el registro de ayuda para depurar por qué ciertas claves o valores no se inician como lo esperabas.

```js
require('dotenv').config({ debug: process.env.DEBUG })
```

##### Anular

Por defecto: `false`

Anule cualquier variable de entorno que ya se haya configurada en su maquina con los valores de su archivo .env.

```js
require('dotenv').config({ override: true })
```

### Analizar

El motor que analiza el contenido del archivo que contiene las variables de entorno está disponible para su uso. Acepta una Cadena o un Búfer y retornará un objecto con los valores analizados.

```js
const dotenv = require('dotenv')
const buf = Buffer.from('BASICO=basico')
const config = dotenv.parse(buf) // devolverá un objeto
console.log(typeof config, config) // objeto { BASICO : 'basico' }
```

#### Opciones

##### Depurar

Por defecto: `false`

Active el registro de ayuda para depurar por qué ciertas claves o valores no se inician como lo esperabas.

```js
const dotenv = require('dotenv')
const buf = Buffer.from('hola mundo')
const opt = { debug: true }
const config = dotenv.parse(buf, opt)
// espere por un mensaje de depuración porque el búfer no esta listo KEY=VAL
```

## FAQ

### ¿Por qué el archivo `.env` no carga mis variables de entorno correctamente?

Lo más probable es que su archivo `.env` no esté en el lugar correcto. [Vea este stack overflow](https://stackoverflow.com/questions/42335016/dotenv-file-is-not-loading-environment-variables).

Active el modo de depuración y vuelva a intentarlo...

```js
require('dotenv').config({ debug: true })
```

Recibirá un error apropiado en su consola.

### ¿Debo confirmar mi archivo `.env`?

No. Recomendamos **enfáticamente** no enviar su archivo `.env` a la versión de control. Solo debe incluir los valores especificos del entorno, como la base de datos, contraseñas o claves API.

### ¿Debería tener multiples archivos `.env`?

No. Recomendamos **enfáticamente** no tener un archivo `.env` "principal" y un archivo `.env` de "entorno" como `.env.test`. Su configuración debe variar entre implementaciones y no debe compartir valores entre entornos.

> En una Aplicación de Doce Factores, las variables de entorno son controles diferenciados, cada uno totalmente independiente a otras variables de entorno. Nunca se agrupan como "entornos", sino que se gestionan de manera independiente para cada despliegue. Este es un modelo que se escala sin problemas a medida que la aplicación se expande de forma natural en más despliegues a lo largo de su vida.
>
> – [La Apliación de los Doce Factores](https://12factor.net/es/)

### ¿Qué reglas sigue el motor de análisis?

El motor de análisis actualmente admite las siguientes reglas:

- `BASICO=basico` se convierte en `{BASICO: 'basico'}`
- las líneas vacías se saltan
- las líneas que comienzan con `#` se tratan como comentarios
- `#` marca el comienzo de un comentario (a menos que el valor esté entre comillas)
- valores vacíos se convierten en cadenas vacías (`VACIO=` se convierte en `{VACIO: ''}`)
- las comillas internas se mantienen (piensa en JSON) (`JSON={"foo": "bar"}` se convierte en `{JSON:"{\"foo\": \"bar\"}"`)
- los espacios en blanco se eliminan de ambos extremos de los valores no citanos (aprende más en [`trim`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)) (`FOO=  algo ` se convierte en `{FOO: 'algo'}`)
- los valores entre comillas simples y dobles se escapan (`CITA_SIMPLE='citado'` se convierte en `{CITA_SIMPLE: "citado"}`)
- los valores entre comillas simples y dobles mantienen los espacios en blanco en ambos extremos  (`FOO="  algo  "` se convierte en `{FOO: '  algo  '}`)
- los valores entre comillas dobles expanden nuevas líneas (`MULTILINEA="nueva\nlínea"` se convierte en

```
{MULTILINEA: 'nueva
línea'}
```

- se admite la comilla simple invertida (`` SIGNO_ACENTO=`Esto tiene comillas 'simples' y "dobles" en su interior.` ``)

### ¿Qué sucede con las variables de entorno que ya estaban configuradas?

Por defecto, nunca modificaremos ninguna variable de entorno que ya haya sido establecida. En particular, si hay una variable en su archivo `.env` que colisiona con una que ya existe en su entorno, entonces esa variable se omitirá.

Si por el contrario, quieres anular `process.env` utiliza la opción `override`.

```javascript
require('dotenv').config({ override: true })
```

### ¿Por qué mis variables de entorno no aparecen para React?

Su código React se ejecuta en Webpack, donde el módulo `fs` o incluso el propio `process` global no son accesibles fuera-de-la-caja. El módulo `process.env` sólo puede ser inyectado a través de la configuración de Webpack.

Si estás usando [`react-scripts`](https://www.npmjs.com/package/react-scripts), el cual se distribuye a través de [`create-react-app`](https://create-react-app.dev/), tiene dotenv incorporado pero con una singularidad. Escriba sus variables de entorno con `REACT_APP_`. Vea [este stack overflow](https://stackoverflow.com/questions/42182577/is-it-possible-to-use-dotenv-in-a-react-project) para más detalles.

Si estás utilizando otros frameworks (por ejemplo, Next.js, Gatsby...), debes consultar su documentación para saber cómo injectar variables de entorno en el cliente.

### ¿Puedo personalizar/escribir plugins para dotenv?

Sí! `dotenv.config()` devuelve un objeto que representa el archivo `.env` analizado. Esto te da todo lo que necesitas para poder establecer valores en `process.env`. Por ejemplo:

```js
const dotenv = require('dotenv')
const variableExpansion = require('dotenv-expand')
const miEnv = dotenv.config()
variableExpansion(miEnv)
```

### Cómo uso dotnev con `import`?

Simplemente..

```javascript
// index.mjs (ESM)
import * as dotenv from 'dotenv' // vea https://github.com/motdotla/dotenv#como-uso-dotenv-con-import
dotenv.config()
import express from 'express'
```

Un poco de historia...

> Cuando se ejecuta un módulo que contiene una sentencia `import`, los módulos que importa serán cargados primero, y luego se ejecuta cada bloque del módulo en un recorrido en profundidad del gráfico de dependencias, evitando los ciclos al saltarse todo lo que ya se ha ejecutado.
>
> – [ES6 en Profundidad: Módulos](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)

¿Qué significa esto en lenguaje sencillo? Significa que se podrías pensar que lo siguiente funcionaría pero no lo hará.

```js
// notificarError.mjs
import { Cliente } from 'mejor-servicio-para-notificar-error'

export default new Client(process.env.CLAVE_API)

// index.mjs
import dotenv from 'dotenv'
dotenv.config()

import notificarError from './notificarError.mjs'
notificarError.report(new Error('ejemplo documentado'))
```

`process.env.CLAVE_API` será vacio.

En su lugar, el código anterior debe ser escrito como...

```js
// notificarError.mjs
import { Cliente } from 'mejor-servicio-para-notificar-errores'

export default new Client(process.env.CLAVE_API)

// index.mjs
import * as dotenv from 'dotenv'
dotenv.config()

import notificarError from './notificarError.mjs'
notificarError.report(new Error('ejemplo documentado'))
```

¿Esto tiene algo de sentido? Esto es poco poco intuitivo, pero es como funciona la importación de módulos en ES6. Aquí hay un ejemplo [ejemplo práctico de esta trampa](https://github.com/dotenv-org/examples/tree/master/dotenv-es6-import-pitfall).

Existen dos arternativas a este planteamiento:

1. Precarga dotenv: `node --require dotenv/config index.js` (_Nota: no es necesario usar `import` dotenv con este método_)
2. Cree un archivo separado que ejecutará `config` primero como se describe en [este comentario #133](https://github.com/motdotla/dotenv/issues/133#issuecomment-255298822)

### ¿Qué pasa con la expansión de variable?

Prueba [dotenv-expand](https://github.com/motdotla/dotenv-expand)

## Guía de contribución

Vea [CONTRIBUTING.md](CONTRIBUTING.md)

## REGISTRO DE CAMBIOS

Vea [CHANGELOG.md](CHANGELOG.md)

## ¿Quiénes utilizan dotenv?

[Estos módulos npm dependen de él.](https://www.npmjs.com/browse/depended/dotenv)

Los proyectos que lo amplían suelen utilizar la [palabra clave "dotenv" en npm](https://www.npmjs.com/search?q=keywords:dotenv).
