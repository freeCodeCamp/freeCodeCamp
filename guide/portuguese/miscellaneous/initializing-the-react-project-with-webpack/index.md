---
title: Initializing the React Project with Webpack
localeTitle: Inicializando o Projeto Reagir com o Webpack
---
A primeira coisa a fazer é abrir nosso terminal / linha de comando. Precisamos instalar o Webpack e o Webpack Dev Server globalmente.

*   [Ajuda: Mais sobre a instalação de módulos de nó globalmente](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)
    
    npm instalar webpack webpack-dev-server -g
    

Instalar esses módulos globalmente significa que podemos nos referir a usar suas respectivas interfaces de linha de comando no terminal. A instalação do Webpack nos permite executar o `webpack` partir do terminal para executar um script do Webpack. A instalação do Webpack Dev Server nos permite executar um servidor localhost usando nossa configuração de Webpack. Isso tudo ficará claro um pouco mais tarde.

Em seu diretório de escolha, crie um novo diretório, por exemplo `react-webpack-example` , e altere o diretório para ele:
```
mkdir react-webpack-example && cd $_ 
```

Agora que estamos em nosso novo diretório, precisamos criar nosso arquivo Webpack, que ficará na raiz. Este é um arquivo de configuração e, portanto, chamamos de `webpack.config.js` .
```
touch webpack.config.js 
```

Agora, podemos prosseguir e [inicializar um projeto npm](https://docs.npmjs.com/cli/init) usando o seguinte comando:
```
npm init 
```

Podemos seguir em frente e pressionar a tecla Enter para percorrer as opções apresentadas para nós no terminal.

O comando `npm init` criará um arquivo `package.json` , que conterá dados importantes sobre o nosso projeto.

Até agora, essa é a aparência da nossa árvore:
```
. 
 ├── package.json 
 └── webpack.config.js 
```

Se você abrir seu arquivo `package.json` , deverá ver algo assim:
```
{ 
  "name": "react-webpack-example", 
  "version": "1.0.0", 
  "description": "", 
  "main": "webpack.config.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "author": "", 
  "license": "ISC" 
 } 

```