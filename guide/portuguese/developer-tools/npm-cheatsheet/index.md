---
title: npm Cheat Sheet
localeTitle: Folha de fraude npm
---
## Folha de fraude npm

Uma lista de comandos e sinalizadores de terminal para ajudar a usar o `npm`

## instalar dependências do `package.json`

```shell
npm install 
```

**Forma abreviada**

```shell
# install 
 npm i <package> 
 # uninstall 
 npm un <package> 
 # update 
 npm up <package> 
```

## Listar pacotes instalados globalmente.

```shell
npm list -g --depth=0 
```

## Desinstalar pacote global

```shell
npm -g uninstall <name> 
```

## Atualize o NPM no Windows

Depois de tentar várias vezes atualizar o npm no Windows, descobri isso enquanto procurava nas pastas npm.

```shell
npm-windows-upgrade 
```

## Atualizando pacotes globais

Para ver quais pacotes precisam de atualização, use:

```shell
npm outdated -g --depth=0 
```

Para atualizar pacotes globais individualmente, você pode usar:

```shell
npm update -g <package> <package> <package> 
```

## listar scripts disponíveis para serem executados

```shell
npm run 
```

## atualizar npm

```shell
npm install -g npm@latest 
 # using windows? Then use 
 npm-windows-upgrade 
```

## bandeiras

`-S` é o mesmo que `--save` não é necessário em npm 5+ `-D` é o mesmo que `--save-dev`

## versão instalada

```shell
npm list # for local packages 
```

## Gerenciador de Versão do Nó `nvm`

Digamos que você queira instalar o Nó v6.9.1 que você escreveria no terminal:

```shell
nvm install 6 
```

Se você tiver várias versões do Node.js instaladas em sua área de trabalho, poderá alternar para uma versão específica escrevendo:

```shell
nvm use 4.8.4 
```

### Tornando uma versão do nó padrão.

Para definir uma versão padrão do nó para o seu espaço de trabalho, basta digitar:

```shell
nvm alias default 6 
```

Onde 6 era a versão que você queria usar como padrão.