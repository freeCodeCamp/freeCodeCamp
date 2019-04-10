---
title: Create an Npm Module
localeTitle: Crie um módulo Npm
---
Um módulo NPM é um conjunto de funcionalidades Javascript agrupadas em um pacote distribuível. [O NPM](http://www.npmjs.com) mantém o registro de todos os pacotes disponíveis e também é a ferramenta usada para instalar pacotes de seu registro.

A beleza do NPM é que você pode montar pacotes que outras pessoas criaram para criar algo novo, e alguém mais tarde poderia usar o pacote que você cria. Se você tem algum código que deseja compartilhar com o mundo, é fácil publicar um módulo no NPM.

## Etapa 1: crie seu script

Eu criei este utilitário simples como `index.js` :
```
var time = new Date().toTimeString(); 
 console.log(time); 
```

## Etapa 2: criar informações do pacote

O próximo passo é criar as informações para publicar com o seu pacote, armazenadas em `package.json` . O NPM fornece um assistente para facilitar a criação desse arquivo.

Basta executar o `npm init` e responder as perguntas.

Seu `package.json` deve ser algo como isto:
```
{ 
  "name": "whattimeisit", 
  "version": "1.0.0", 
  "description": "accurate time retrieval", 
  "main": "index.js", 
  "author": "HoursAndMinutes", 
  "license": "ISC" 
 } 
```

Não se esqueça de incluir o link do repositório do GitHub se o código estiver no GitHub!

## Etapa 3: criar uma conta de usuário no NPM

Para publicar um pacote no NPM, você precisa ter uma conta registrada. Para fazer isso, execute o `npm adduser` . Você pode verificar a conta atualmente em uso com o `npm config ls` .

## Etapa 4: publicar no NPM

Antes de publicar seu pacote no NPM, verifique se o diretório contém os arquivos que você não deseja tornar públicos (por exemplo, senhas, chaves privadas, etc.). Você pode adicioná-los a um arquivo chamado `.npmignore` para excluí-los da publicação de pacotes. A NPM também honrará `.gitignore` se você tiver isso.

Depois de finalizar o conteúdo do pacote, execute `npm publish` . Você pode confirmar os detalhes do seu pacote em [https://npmjs.com/package/yourpackagename](https://npmjs.com/package/yourpackagename) .

### Mais Informações:

Criando os módulos do Node.js [npm](https://docs.npmjs.com/getting-started/creating-node-modules)