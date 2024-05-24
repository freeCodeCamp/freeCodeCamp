---
id: 587d8249367417b2b2512c40
title: Configurar o Helmet usando o middleware 'pai' helmet()
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

Lembre-se: este projeto está sendo criado conforme o seguinte projeto inicial em <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, ou clonado de <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`app.use(helmet())` incluirá automaticamente todo o middleware apresentado acima, exceto `noCache()` e `contentSecurityPolicy()`, mas estes podem ser habilitados, se necessário. Você também pode desativar ou configurar qualquer outro middleware individualmente, usando um objeto de configuração.

**Exemplo:**

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

Apresentamos cada middleware separadamente para fins didáticos e para facilitar os testes. Usar o middleware 'pai' `helmet()` é de fácil implementação em um projeto real.

# --hints--

sem testes - esse é um desafio descritivo

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
