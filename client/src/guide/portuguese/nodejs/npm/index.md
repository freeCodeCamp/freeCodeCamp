---
title: NPM
localeTitle: NPM
---
## NPM

O Node.js possibilita gravar aplicativos em JavaScript no servidor. Ele é baseado no tempo de execução do V8 JavaScript e escrito em C ++ - então é rápido. Originalmente, era destinado a ser um ambiente de servidor para aplicativos, mas os desenvolvedores começaram a usá-lo para criar módulos para ajudá-los na automação de tarefas locais. Desde então, todo um novo ecossistema de ferramentas baseadas em Node evoluiu para transformar a face do desenvolvimento de front-end.

Para usar esses módulos (ou pacotes) no Node.js, precisamos instalá-los e gerenciá-los de maneira útil. É aí que entra o npm, o gerenciador de pacotes do Node. Ele instala os pacotes que você quer usar e fornece uma interface útil para trabalhar com eles.

## Instalando o NPM

Para instalar o `npm` , temos que baixar os binários do Nodejs no seu ambiente local. Os binários do Node.js incluem a versão mais recente do npm. Para verificar se:

```shell
npm -v 
 5.6.0 
```

Node Package Manager (NPM) fornece duas funcionalidades principais -

*   Repositórios on-line para pacotes / módulos node.js que podem ser pesquisados ​​no `npmjs.com` .
    
*   Utilitário de linha de comando para instalar pacotes Node.js, fazer gerenciamento de versão e gerenciamento de dependência de pacotes Node.js.
    

## Instalando módulos usando o NPM

`npm` pode instalar pacotes no modo local ou global. Por padrão, o NPM instala qualquer dependência no modo local. No modo local, ele instala o pacote em uma pasta node\_modules no diretório de trabalho pai. Este local é de propriedade do usuário atual. Pacotes globais são instalados em {prefixo} `/lib/node_modules/` que é de propriedade de root, onde {prefixo} é usualmente `/usr/ or /usr/local` . Isso significa que você teria que usar o sudo para instalar pacotes globalmente, o que poderia causar erros de permissão ao resolver dependências de terceiros, além de ser uma preocupação de segurança.

### Instalando Pacotes no Modo Global

Quaisquer pacotes instalados globalmente ficarão disponíveis na linha de comando. Usamos o sinalizador --global ou -g para instalar pacotes globalmente.

```shell
$ npm install uglify-js --global 
```

Podemos listar os pacotes globais que instalamos com o comando npm list.

```shell
$ npm list --global 
 /usr/local/lib 
 ├─┬ npm@5.6.0 
 │ ├── abbrev@1.1.0 
 │ ├── ansi-regex@2.1.1 
 │ ├── ansicolors@0.3.2 
 │ ├── ansistyles@0.1.3 
 .................... 
 └─┬ uglify-js@3.0.15 
  ├─┬ commander@2.9.0 
  │ └── graceful-readlink@1.0.1 
  └── source-map@0.5.6 
```

A saída, no entanto, é bastante detalhada. Podemos mudar isso com a opção --depth = 0.

```js
$ npm list -g --depth=0 
 /usr/local/lib 
 ├── npm@5.6.0 
 └── uglify-js@3.0.15 
```

### Instalando Pacotes no Modo Local

Quando você instala pacotes localmente, normalmente faz isso usando um arquivo package.json.

```shell
npm install --save express 
```

Agora você pode usar este módulo no seu arquivo js como segue

```js
const express = require('express'); 
```

Os módulos locais são divididos em dois tipos de dependências: `devDepenednecies` e `dependencies` . A diferença entre esses dois é que devDependencies são módulos que são requeridos apenas durante o desenvolvimento, enquanto dependências são módulos que também são requeridos no tempo de execução. Para salvar uma dependência como devDependency na instalação, precisamos fazer um `npm install --save-dev` , em vez de apenas um `npm install --save` .

Um bom atalho para instalar um devDependency que eu gosto de usar é o `npm i -D` . A abreviação de salvar uma dependência regular é `-S` vez de `-D` .

### Instalando uma versão específica de um pacote

Para fazer isso, mencionamos a versão do pacote que queremos instalar.

```shell
$ npm install underscore@1.8.2 -S 
```

Para remover uma dependência global, use o sinalizador `-g` .

### Desinstalando Pacotes Locais

O npm é um gerenciador de pacotes, portanto deve ser capaz de remover um pacote. Nós podemos remover o pacote:

```shell
$ npm uninstall underscore -S 
```

Para atualizar uma dependência global, use o sinalizador `-g` .

### Atualizando um pacote

Para atualizar um pacote, você pode fazer:
```
$ npm update underscore -S 
```

Para verificar se há uma atualização disponível para qualquer pacote associado ao nosso projeto:

```shell
$ npm outdated 
 
 Package     Current  Wanted  Latest  Location 
 underscore    1.8.2   1.8.3   1.8.3  project 
```

A coluna Atual nos mostra a versão instalada localmente. A última coluna nos informa a última versão do pacote. E a coluna Wanted nos diz a versão mais recente do pacote para o qual podemos fazer upgrade sem quebrar nosso código existente.

## Gerenciando Dependências com o package.json

Se não estiver usando um sinalizador específico e instalar um módulo como o `npm install express` instalará o módulo na pasta `node_modules` localmente, mas o `package.json` que mantém registros de todas as dependências que estamos usando em um projeto não será atualizado com nossa adição. Assim, o pacote será específico do desenvolvimento, não será instalado no ambiente runtimme. Certifique-se de usar sempre um sinalizador adequado e manter atualizado o arquivo `package.json` .

Quando você instala pacotes localmente, você precisa de um arquivo package.json. Para gerar um, você pode fazer isso usando o comando `npm init` . Ele vai aparecer com algumas perguntas que, ao pressionar Enter, você pode manter os valores padrão.

```shell
$ npm init 
 package name: (project) 
 version: (1.0.0) 
 description: Demo of package.json 
 entry point: (index.js) 
 test command: 
 git repository: 
 keywords: 
 author: 
 license: (ISC) 
```

Pense em `package.json` como o guardião de todas as dependências ou manifestação de um projeto Node.js. Se você quiser uma maneira mais rápida de gerar um arquivo package.json, use `npm init --y` .

Lista de Atributos Comuns em um arquivo `package.json` :

*   nome - nome do pacote
    
*   versão - versão semântica do pacote
    
*   descrição - descrição do pacote
    
*   homepage - homepage do pacote
    
*   autor - autor do pacote
    
*   colaboradores - nome dos contribuintes para o pacote
    
*   dependências - lista de dependências. O NPM instala automaticamente todas as dependências mencionadas aqui na pasta node\_module do pacote.
    
*   devDependencies - lista de todas as dependências específicas de desenvolvimento
    
*   repositório - tipo de repositório e URL do pacote
    
*   ponto de entrada principal do pacote
    
*   palavras-chave - palavras-chave
    
*   licença - uma licença para o seu pacote, para que as pessoas saibam como podem usá-lo e quaisquer restrições que você esteja colocando nele.
    
*   scripts - A propriedade "scripts" é um dicionário que contém comandos de script que são executados em vários momentos no ciclo de vida do seu pacote.
    
*   config - objeto que pode ser usado para definir parâmetros de configuração usados ​​em scripts de pacotes que persistem em atualizações.
    

Um exemplo:

```json
{ 
   "name": "express", 
      "description": "Fast, unopinionated, minimalist web framework", 
      "version": "4.11.2", 
      "author": { 
 
         "name": "TJ Holowaychuk", 
         "email": "tj@vision-media.ca" 
      }, 
 
   "contributors": [{ 
      "name": "Aaron Heckmann", 
      "email": "aaron.heckmann+github@gmail.com" 
   }, 
 
    ], 
   "license": "MIT", "repository": { 
      "type": "git", 
      "url": "https://github.com/strongloop/express" 
   }, 
   "homepage": "https://expressjs.com/", "keywords": [ 
      "express", 
      "framework", 
      "sinatra", 
      "web", 
      "rest", 
      "restful", 
      "router", 
      "app", 
      "api" 
   ], 
   "dependencies": { 
      "serve-static": "~1.8.1", 
 
   }, 
   "devDependencies": { 
      "jade": "~1.9.1", 
   }, 
   "engines": { 
      "node": ">= 0.10.0" 
   }, 
   "files": [ 
      "LICENSE", 
      "History.md", 
      "Readme.md", 
      "index.js", 
      "lib/" 
   ], 
   "scripts": { 
      "test": "mocha --require test/support/env 
         --reporter spec --bail --check-leaks test/ test/acceptance/", 
      "test-cov": "istanbul cover node_modules/mocha/bin/_mocha 
         -- --require test/support/env --reporter dot --check-leaks test/ test/acceptance/", 
      "test-tap": "mocha --require test/support/env 
         --reporter tap --check-leaks test/ test/acceptance/", 
      "test-travis": "istanbul cover node_modules/mocha/bin/_mocha 
         --report lcovonly -- --require test/support/env 
         --reporter spec --check-leaks test/ test/acceptance/" 
   }, 
 
 } 
```

## scripts do npm

`npm` scripts `npm` são usados ​​para automatizar tarefas repetitivas. Por exemplo, construindo seu projeto, minimizando arquivos CSS (Cascading Style Sheets) e JavaScript (JS). Scripts também são usados ​​na exclusão de arquivos e pastas temporários, etc. Eles podem ser personalizados e acessados ​​via `scripts` em `package.json` .

```json
{ 
  "name": "super-cool-package", 
  "version": "1.0.0", 
  "scripts": {} 
 } 
```

Um exemplo do script NPM mais popular:

```json
"scripts": { 
    "start": "node index.js", 
    ... 
 } 
```

## npm Cache

Quando o npm instala um pacote, ele mantém uma cópia, então, da próxima vez que você quiser instalar esse pacote, ele não precisará acessar a rede. As cópias são armazenadas em cache no diretório .npm em seu caminho inicial.

```shell
$ ls ~/.npm 
 lodash.zipobject 
 log-driver 
 log-symbols 
 logalot 
 logfmt 
 loglevel 
 long-timeout 
 longest 
 longest-strea 
```

Este diretório ficará cheio de pacotes antigos ao longo do tempo, por isso é útil limpá-lo ocasionalmente.

```shell
$ npm cache clean 
```

## Fio - uma alternativa ao npm

Yarn também é um gerenciador de pacotes JavaScript desenvolvido e mantido pelo Facebook. Ambos compartilham semelhanças de alto nível quando se trata de usá-los. É supostamente mais rápido instalar dependências do que npm. Para instalá-lo:

```shell
npm install -g yarn 
```

O fio não pretende substituir o npm, mais como melhorar o mesmo. Ele usa o mesmo arquivo package.json e salva as dependências na pasta `node_modules/` . Para inicializar um projcet, você usará:

```shell
yarn init 
```

### Adicionando, Atualizando e Removendo Dependências

Adicionar uma nova dependência é fácil e semelhante ao npm:

```shell
yarn add [package-name] 
```

Se você quer uma versão ou tag específica do pacote, você pode fazer isso.

```shell
yarn add express@4.14.1 
```

Para dependências dev, dependências ponto a ponto e dependências opcionais, você passa o --dev --peer --optional respectivamente.

```shell
yarn add gulp --dev 
```

Vai economizar gole sob devDependencies. Para atualizar ou remover um pacote, basta substituir o comando add por upgrade ou remove, seguido pelo nome do pacote.

```shell
# upgrade a gulp from 3.9.1 to version 4 
 yarn upgrade gulp@4.0 
 
 # remove a gulp 
 yarn remove gulp 
```

Após cada instalação, atualização ou remoção, o fio atualiza um arquivo yarn.lock que acompanha a versão exata do pacote instalada no diretório node\_modules. Recurso semelhante foi atualizado em npm. Agora há um `package-lock.json` que se comporta exatamente da mesma maneira que o `yarn.lock` em versões mais novas do npm.

### Números de versão do pacote e o que significam

Uma primeira versão de um pacote npm é sempre 1.0.0

Correções de bugs, ou pequenas alterações incrementam o terceiro dígito, o hens 1.0.0 se tornaria 1.0.1

Novos recursos que não quebram versões anteriores de um pacote incrementam o segundo dígito, o hens 1.0.0 se tornaria 1.1.0

Todas as alterações que quebram as versões anteriores de um pacote incrementam o primeiro dígito, o hens 1.0.0 se tornaria 2.0.0

É importante lembrar disso ao atualizar os pacotes para manter seu projeto estável!