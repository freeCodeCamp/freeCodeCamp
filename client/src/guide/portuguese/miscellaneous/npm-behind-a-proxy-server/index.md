---
title: Npm Behind a Proxy Server
localeTitle: NPM por trás de um servidor proxy
---
## Casos de uso

Pode ser necessário modificar os comandos de `npm install` que acessam repositórios remotos ( [npmjs](https://www.npmjs.com/) , por exemplo) para instalar os módulos do Nó JS; se o seu acesso à internet é através de um [servidor proxy](https://en.wikipedia.org/wiki/Proxy_server) .

Servidores proxy são comuns em ambientes universitários e comerciais.

Você pode [localizar suas configurações de proxy](http://www.wikihow.com/Change-Proxy-Settings) no painel de [configurações](http://www.wikihow.com/Change-Proxy-Settings) do seu navegador.

## Usando o proxy com NPM

Depois de ter obtido as configurações de proxy (URL do servidor, porta, nome de usuário e senha); você precisa configurar suas configurações `npm` seguinte maneira.
```
$ npm config set proxy http://<username>:<password>@<proxy-server-url>:<port> 
 $ npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port> 
```

Você teria que substituir `<username>` , `<password>` , `<proxy-server-url>` , `<port>` com os valores específicos das credenciais do seu servidor proxy.

Esses campos são opcionais. Por exemplo, seu servidor proxy pode nem precisar do `<username>` e `<password>` , ou pode estar em execução na porta 80 (caso em que `<port>` não é necessária).

Depois de definir essas configurações, o `npm install` , o `npm i -g` etc. funcionará corretamente.

## Quando não usar

Você não deve ter que usar os comandos do `npm` com configurações de proxy, caso ocorra uma das seguintes situações:

> *   O administrador do sistema ou a política corporativa não permite que você acesse repositórios `npm` remotos do NPM-JS, por exemplo.
> *   O repositório remoto dos módulos de nó em questão não está em sua máquina, mas está dentro da rede interna.

## Desativar configurações de proxy

Use [esta](http://luxiyalu.com/how-to-remove-all-npm-proxy-settings/) postagem do blog para remover as configurações de proxy. Você também pode remover manualmente as linhas que especificam suas configurações de proxy do [arquivo](https://docs.npmjs.com/files/npmrc) `.npmrc` .

## Recursos

Você pode usar os seguintes recursos para ler mais sobre isso:

> *   [Posso fazer o login por trás de um servidor proxy](https://github.com/npm/npm/issues/9401#issuecomment-134569585)
> *   [NPM por trás de um proxy corporativo](http://intenseagile.com/2015/09/04/npm-behind-proxy.html)