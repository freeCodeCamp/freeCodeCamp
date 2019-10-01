---
id: 587d7fb2367417b2b2512bf7
title: Use body-parser to Parse POST Requests
localeTitle: Usar el analizador de cuerpo para analizar las solicitudes POST
challengeType: 2
---

## Description
<section id='description'> 
Además de GET hay otro verbo http común, es POST. POST es el método predeterminado utilizado para enviar datos de clientes con formularios HTML. En la convención REST, POST se utiliza para enviar datos para crear nuevos elementos en la base de datos (un nuevo usuario o una nueva publicación de blog). No tenemos una base de datos en este proyecto, pero de todos modos vamos a aprender cómo manejar las solicitudes POST. 
En este tipo de solicitudes, los datos no aparecen en la URL, están ocultos en el cuerpo de la solicitud. Esta es una parte de la solicitud HTML, también llamada carga útil. Dado que HTML está basado en texto, incluso si no ve los datos, no significa que sean secretos. El contenido sin procesar de una solicitud HTTP POST se muestra a continuación: 
<blockquote>POST /path/subpath HTTP/1.0<br>From: john@example.com<br>User-Agent: someBrowser/1.0<br>Content-Type: application/x-www-form-urlencoded<br>Content-Length: 20<br>name=John+Doe&age=25</blockquote> 
Como puede ver, el cuerpo está codificado como la cadena de consulta. Este es el formato predeterminado utilizado por los formularios HTML. Con Ajax también podemos usar JSON para poder manejar datos que tienen una estructura más compleja. También hay otro tipo de codificación: multipart / form-data. Este se usa para subir archivos binarios. 
En este ejercicio utilizaremos un cuerpo urlencodificado. 
Para analizar los datos procedentes de solicitudes POST, debe instalar un paquete: el analizador de cuerpo. Este paquete le permite utilizar una serie de middleware, que puede decodificar datos en diferentes formatos. Vea los documentos <a href="https://github.com/expressjs/body-parser" target="_blank" >aquí</a> . 
Instale el módulo body-parser en su package.json. Luego, solicítelo en la parte superior del archivo. Almacénelo en una variable llamada bodyParser. 
El middleware para manejar los datos codificados en url es devuelto por <code>bodyParser.urlencoded({extended: false})</code> . <code>extended=false</code> es una opción de configuración que le dice al analizador que use la codificación clásica. Cuando se usa, los valores pueden ser solo cadenas o matrices. La versión extendida permite más flexibilidad de datos, pero es superada por JSON. Pase a <code>app.use()</code> la función devuelta por la llamada al método anterior. Como es habitual, el middleware debe montarse antes de todas las rutas que lo necesiten. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El middleware 'body-parser' debería ser montado
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/add-body-parser'').then(data => { assert.isAbove(data.mountedAt, 0, ''"body-parser" is not mounted correctly'') }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
