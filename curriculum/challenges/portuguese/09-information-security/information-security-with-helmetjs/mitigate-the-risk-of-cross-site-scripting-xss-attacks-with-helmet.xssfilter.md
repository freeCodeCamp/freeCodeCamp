---
id: 587d8247367417b2b2512c39
title: >-
  Reduzir o risco de ataques de Cross Site Scripting (XSS) com o helmet.xssFilter()
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

Lembrando que este projeto está sendo construído a partir do <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, ou pode ser clonado no <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

O cross-site scripting (XSS) é um tipo frequente de ataque, onde scripts maliciosos são injetados em páginas vulneráveis com o objetivo de roubar dados confidenciais, como cookies de sessão ou senhas.

A regra básica para diminuir o risco de um ataque de XSS é simples: "Nunca confie na entrada do usuário". Como desenvolvedor, você deve sempre sanitizar todas as entradas vindas de fora. Isso inclui dados provenientes de formulários, URLs de consultas GET e até mesmo de bodies com POST. Sanitizar significa encontrar e codificar os caracteres que podem ser perigosos, como &lt;, >.

Navegadores modernos podem ajudar a reduzir o risco, adotando melhores estratégias de software. Elas muitas vezes são configuráveis através de cabeçalhos de http.

O cabeçalho de HTTP X-XSS-Protection é uma proteção básica. O navegador detecta um script potencialmente injetado usando um filtro heurístico. Se o cabeçalho estiver ativado, o navegador altera o código de script, neutralizando-o. Ele ainda tem um suporte limitado.

# --instructions--

Use `helmet.xssFilter()` para sanitizar a entrada enviada para o servidor.

# --hints--

O middleware helmet.xssFilter() deve ser montado corretamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'xXssProtection');
      assert.property(data.headers, 'x-xss-protection');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
