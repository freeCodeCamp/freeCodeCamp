---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
localeTitle: Servir activos estáticos
challengeType: 2
---

## Description
<section id='description'> 
Un servidor HTML generalmente tiene uno o más directorios que son accesibles por el usuario. Puede colocar allí los recursos estáticos que necesita su aplicación (hojas de estilo, scripts, imágenes). En Express puede implementar esta funcionalidad utilizando el middleware <code>express.static(path)</code> , donde el parámetro es la ruta absoluta de la carpeta que contiene los recursos. Si no sabes qué es un middleware, no te preocupes. Lo discutiremos más adelante en detalles. Básicamente, los middlewares son funciones que interceptan los manejadores de ruta, agregando algún tipo de información. Es necesario montar un middleware utilizando el método <code>app.use(path, middlewareFunction)</code> . El primer argumento de ruta es opcional. Si no lo pasa, el middleware se ejecutará para todas las solicitudes. 
Monte el middleware <code>express.static()</code> para todas las solicitudes con <code>app.use()</code> . La ruta absoluta a la carpeta de activos es <code>__dirname + /public</code> . 
Ahora su aplicación debería poder servir una hoja de estilo CSS. Desde fuera la carpeta pública aparecerá montada en el directorio raíz. Tu portada debería verse un poco mejor ahora! 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su aplicación debe servir archivos de activos del directorio <code>/public</code>
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/style.css'').then(data => { assert.match(data, /body\s*\{[^\}]*\}/, ''Your app does not serve static assets''); }, xhr => { throw new Error(xhr.responseText); })'

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
