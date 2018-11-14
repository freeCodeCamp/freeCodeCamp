---
title: Yarn
localeTitle: Fio
---
## Fio

O Yarn é um gerenciador de pacotes para o seu código. Ele permite que você use e compartilhe códigos com outros desenvolvedores de todo o mundo. O Yarn faz isso de maneira rápida, segura e confiável, para que você não precise se preocupar com as dependências de um projeto.

O Yarn permite que você use soluções de outros desenvolvedores para diferentes problemas, facilitando o desenvolvimento de seu software. Se você tiver problemas, pode relatar problemas ou contribuir novamente, e quando o problema for resolvido, você poderá usar o Yarn para mantê-lo atualizado.

O código é compartilhado por meio de algo chamado pacote (às vezes chamado de módulo). Um pacote contém todo o código que está sendo compartilhado, assim como um arquivo package.json que descreve o pacote.

Para usar o fio você deve instalá-lo em seu sistema primeiro. Existem links no final deste artigo para ajudá-lo a fazer isso em qualquer sistema operacional.

Quando você tiver o Yarn instalado, você pode começar a usá-lo. Aqui estão alguns dos comandos mais comuns que você precisará.

### Uso de fios

**Começando um novo projeto**
```
yarn init 
```

O comando `yarn init` abrirá um formulário interativo para criar um projeto de fio. `yarn init` cria um arquivo `package.json` que armazena as informações sobre o seu projeto. Este formulário interativo será aberto com as seguintes perguntas:
```
name (your-project): 
 version (1.0.0): 
 description: 
 entry point (index.js): 
 git repository: 
 author: 
 license (MIT): 
```

Você pode digitar as respostas para cada opção ou apenas apertar enter sem digitar nada para usar o padrão ou deixar em branco. Você sempre pode entrar em seu editor de texto favorito para alterar seu arquivo `package.json` , se necessário.

Seu arquivo `package.json` deve ser semelhante a este:
```
{ 
  "name": "your-new-project", 
  "version": "1.0.0", 
  "description": "A description of your new project.", 
  "main": "index.js", 
  "repository": { 
    "url": "https://github.com/your-username/your-new-project", 
    "type": "git" 
  }, 
  "author": "Your Name <your_name@example.com>", 
  "license": "MIT" 
 } 
```

**Adicionando uma dependência**
```
yarn add [package] 
```

**Atualizando uma dependência**
```
yarn upgrade [package] 
```

**Removendo uma dependência**
```
yarn remove [package] 
```

**Instalando todas as dependências do projeto**
```
yarn install 
```

#### Mais Informações:

*   [Site de fios](https://yarnpkg.com)
*   [Documentação do fio](https://yarnpkg.com/en/docs)
*   [Instalando o fio](https://yarnpkg.com/en/docs/install)
*   [Fios vs npm](https://www.pluralsight.com/guides/node-js/yarn-a-package-manager-for-node-js)