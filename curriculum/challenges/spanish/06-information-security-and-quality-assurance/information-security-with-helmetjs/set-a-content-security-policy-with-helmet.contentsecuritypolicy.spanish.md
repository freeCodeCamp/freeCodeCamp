---
id: 587d8249367417b2b2512c3f
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
localeTitle: Establezca una política de seguridad de contenido con helmet.contentSecurityPolicy ()
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> . 
Este desafío resalta una nueva y prometedora defensa que puede reducir significativamente el riesgo y el impacto de muchos tipos de ataques en los navegadores modernos. Al establecer y configurar una Política de seguridad de contenido, puede evitar la inyección de cualquier cosa involuntaria en su página. Esto protegerá su aplicación de las vulnerabilidades XSS, el seguimiento no deseado, los marcos maliciosos y mucho más. CSP funciona definiendo una lista blanca de fuentes de contenido de confianza. Puede configurarlos para cada tipo de recurso que pueda necesitar una página web (scripts, hojas de estilo, fuentes, marcos, medios, etc.). Hay varias directivas disponibles, por lo que el propietario de un sitio web puede tener un control granular. Ver HTML 5 Rocks, KeyCDN para más detalles. Desafortunadamente CSP no es compatible con el navegador anterior. 
De manera predeterminada, las directivas están completamente abiertas, por lo que es importante establecer la directiva defaultSrc como alternativa. Helmet es compatible con los estilos de denominación predeterminados y predeterminados. El respaldo se aplica a la mayoría de las directivas no especificadas. En este ejercicio, use helmet.contentSecurityPolicy (), y configúrelo configurando la directiva defaultSrc en [&quot;self&quot;] (la lista de fuentes permitidas debe estar en una matriz), para confiar solo en la dirección de su sitio web de forma predeterminada. Configure también la directiva scriptSrc para que permita la descarga de scripts desde su sitio web y desde el dominio &#39;trusted-cdn.com&#39;. 
Sugerencia: en la palabra clave &quot;&#39;self&#39;&quot;, las comillas simples forman parte de la palabra clave en sí, por lo que debe estar entre comillas dobles para que funcione. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: casco.csp () middleware debe ser montado correctamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "csp"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Su configuración csp no es correcta. defaultSrc debería ser ["" self ""] y scriptSrc debería ser ["" self "", trusted -cdn.com "] '
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { var cspHeader = Object.keys(data.headers).filter(function(k){ return k === "content-security-policy" || k === "x-webkit-csp" || k === "x-content-security-policy" })[0]; assert.equal(data.headers[cspHeader], "default-src "self"; script-src "self" trusted-cdn.com"); }, xhr => { throw new Error(xhr.responseText); })'

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
