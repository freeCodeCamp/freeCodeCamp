---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
videoUrl: ''
localeTitle: Pida a los navegadores que accedan a su sitio a través de HTTPS solo con helmet.hsts ()
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-infosec/">GitHub</a> . HTTP Strict Transport Security (HSTS) es una política de seguridad web que ayuda a proteger los sitios web contra ataques de degradación del protocolo y el secuestro de cookies. Si se puede acceder a su sitio web a través de HTTPS, puede solicitar a los navegadores de los usuarios que eviten el uso de HTTP inseguro. Al establecer el encabezado Strict-Transport-Security, le indica a los navegadores que utilicen HTTPS para las futuras solicitudes en un período de tiempo específico. Esto funcionará para las solicitudes que vienen después de la solicitud inicial. Configure helmet.hsts () para usar HTTPS durante los próximos 90 días. Pase el objeto de configuración {maxAge: timeInSeconds, force: true}. La falla ya tiene hsts habilitados. Para anular su configuración, debe establecer el campo &quot;forzar&quot; en verdadero en el objeto de configuración. Interceptaremos y restauraremos el encabezado de Glitch, después de inspeccionarlo para realizar pruebas. Nota: la configuración de HTTPS en un sitio web personalizado requiere la adquisición de un dominio y un certificado SSL / TSL. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: casco.hsts () middleware debe ser montado correctamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "hsts"); assert.property(data.headers, "strict-transport-security"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: maxAge debe ser igual a 7776000 ms (90 días)
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.match(data.headers["strict-transport-security"], /^max-age=7776000;?/); }, xhr => { throw new Error(xhr.responseText); })'

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
