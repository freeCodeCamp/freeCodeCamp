---
title: Redirect from an HTML Page
localeTitle: Redirecionar de uma página HTML
---
## Redirecionar de uma página HTML

Se você alterou o URL da sua página HTML e deseja redirecionar automaticamente seus visitantes para o novo local da página, pode usar uma meta tag na área `<head>` da sua antiga página HTML.

`html <head> <meta http-equiv="refresh" content="0; url=http://freecodecamp.org/" /> </head>` No exemplo acima, os visitantes da página seriam redirecionados da sua antiga página html para [http://freecodecamp.org/](http://freecodecamp.org/) . O atributo de `content="0` significa que o navegador redirecionará para a nova página após 0 segundo. A alteração do valor para o `content="2` será redirecionada após 2 segundos.

#### Mais Informações:

*   [MDN - Redirecionamentos em HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)