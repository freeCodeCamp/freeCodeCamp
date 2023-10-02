---
id: 587d8249367417b2b2512c40
title: Configura Helmet Usando el ‘padre’ helmet() Middleware
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

Como recordatorio, este proyecto se basa en el siguiente proyecto inicial en <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonado de <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`app.use(helmet())` automaticamente incluira todo el middleware introducido arriba, excepto `noCache()`, y `contentSecurityPolicy()`, pero esto puedeser habilitado si es necesario. También puede desactivar o configurar cualquier otro middleware individualmente, usando un objeto de configuración.

**Ejemplo:**

```js
app.use(helmet({
  frameguard: {         // configure
    action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // disable
}))
```

Presentamos cada middleware separadamente para propósitos educativos y para facilidad de pruebas. Usando el middleware ‘padre’ `helmet()` es fácil de implementar en un proyecto real.

# --hints--

sin pruebas - Este es un desafío descriptivo

```js
assert(true);
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
