---
id: 587d8247367417b2b2512c39
title: Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
localeTitle: Mitigue el riesgo de ataques de scripts entre sitios (XSS) con helmet.xssFilter ()
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> . 
Los scripts entre sitios (XSS) son un tipo de ataque frecuente en el que se inyectan scripts maliciosos en páginas vulnerables, con el fin de robar datos confidenciales como cookies de sesión o contraseñas. 
La regla básica para reducir el riesgo de un ataque XSS es simple: &quot;Nunca confíes en la entrada del usuario&quot;. Como desarrollador, siempre debes desinfectar toda la información proveniente del exterior. Esto incluye datos provenientes de formularios, URL de consulta GET e incluso de cuerpos POST. Sanitizing significa que debe encontrar y codificar los caracteres que pueden ser peligrosos, por ejemplo, &lt;,&gt;. 
Los navegadores modernos pueden ayudar a mitigar el riesgo mediante la adopción de mejores estrategias de software. A menudo, estos son configurables a través de encabezados http. 
El encabezado HTTP de X-XSS-Protection es una protección básica. El navegador detecta un posible script inyectado utilizando un filtro heurístico. Si el encabezado está habilitado, el navegador cambia el código del script, neutralizándolo. 
Todavía tiene soporte limitado. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El middleware helmet.xssFilter () se debe montar correctamente
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/app-info").then(data => { assert.include(data.appStack, "xXssProtection"); assert.property(data.headers, "x-xss-protection"); }, xhr => { throw new Error(xhr.responseText); })'

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
