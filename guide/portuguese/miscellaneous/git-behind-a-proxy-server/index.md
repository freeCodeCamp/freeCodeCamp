---
title: Git Behind a Proxy Server
localeTitle: Git atrás de um servidor proxy
---
**Casos de uso**

Pode ser necessário modificar os comandos `git` que acessam (para atualizar e ler de) repositórios remotos se o seu acesso à Internet for através de um [servidor proxy](https://en.wikipedia.org/wiki/Proxy_server) .

Servidores proxy são comuns em ambientes universitários e comerciais.

Você pode [localizar suas configurações de proxy](http://www.wikihow.com/Change-Proxy-Settings) no painel de [configurações](http://www.wikihow.com/Change-Proxy-Settings) do seu navegador.

## Usando o proxy com o Git

Depois de ter obtido as configurações de proxy (URL do servidor, porta, nome de usuário e senha); você precisa configurar o seu git da seguinte forma:
```
$ git config --global http.proxy http://<username>:<password>@<proxy-server-url>:<port> 
```

Você precisaria substituir `<username>` , `<password>` , `<proxy-server-url>` , `<port>` pelos valores específicos das credenciais do seu servidor proxy. Esses campos são opcionais. Por exemplo, seu servidor proxy pode nem precisar do `<username>` e `<password>` , ou pode estar em execução na porta 80 (caso em que `<port>` não é necessária).

Uma vez que você os tenha configurado, seu `git pull` , `git push` ou mesmo `git fetch` funcionariam corretamente.

## Quando não usar

Você não deve ter que usar comandos `git` com configurações de proxy, se um dos procedimentos a seguir acontecer

*   Seu administrador do sistema ou política corporativa não permite que você acesse repositórios `git` remotos do GitHub, BitBucket etc.
*   O repositório remoto em questão não está em sua máquina, mas está dentro da rede interna. Uma instância do GitLab implantada internamente na sua empresa é um bom exemplo.

## Desativar configurações de proxy

Use [esta](http://stackoverflow.com/questions/11499805/git-http-proxy-setting) discussão sobre estouro de pilha para remover suas configurações de proxy.

## Recursos

Você pode usar o seguinte para ler mais sobre isso:

*   [Posso fazer o login por trás de um servidor proxy](https://help.github.com/desktop/faq/articles/can-i-log-in-behind-a-proxy-server/#platform-windows)
*   [Git Config](https://git-scm.com/docs/git-config)