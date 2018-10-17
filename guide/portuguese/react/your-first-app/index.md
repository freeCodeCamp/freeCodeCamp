---
title: Your first React App
localeTitle: Seu primeiro aplicativo React
---
## Seu primeiro aplicativo React

### Instalação

Conforme especificado no artigo anterior (Instalação), execute a ferramenta `Create React App` . Depois de tudo ter terminado, `cd` para a pasta do seu aplicativo e executá `npm start` . Isso iniciará um servidor de desenvolvimento e você está pronto para começar a desenvolver seu aplicativo!

```bash
npm install -g react-create-app 
 create-react-app my-first-app 
 
 cd my-first-app 
 npm start 
```

### Editando o código

Inicie o seu editor ou IDE de escolha e edite o arquivo `App.js` na pasta `src` . Quando criado com a ferramenta `react-create-app` , já haverá algum código nesse arquivo.

O código consistirá dessas partes:

#### importações

```JavaScript
import React, { Component } from 'react'; 
 import logo from './logo.svg'; 
 import './App.css'; 
```

Isso é usado pelo [webpack](https://webpack.js.org/) para importar todos os módulos necessários para que seu código possa usá-los. Este código importa 3 módulos: 1) `React` e `Component` , que nos permitem usar Reagir como deveria ser usado. (Com componentes) 2) `logo` , o que nos permite usar `logo.svg` neste arquivo. 3) `./App.css` , que importa a folha de estilo para este arquivo.

#### classes / componentes

```JavaScript
class App extends Component { 
  render() { 
    return ( 
      <div className="App"> 
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Welcome to React</h1> 
        </header> 
        <p className="App-intro"> 
          To get started, edit <code>src/App.js</code> and save to reload. 
        </p> 
      </div> 
    ); 
  } 
 } 
```

O React é uma biblioteca que faz uso dos Componentes, que permitem dividir sua interface do usuário em partes independentes e reutilizáveis ​​e pensar em cada parte isoladamente. Já existe 1 componente criado, o componente `App` . Se você usou a ferramenta `create-react-app` , esse componente é o componente principal do projeto e você deve construir em torno dessa classe central.

Vamos ver os componentes mais detalhados nos próximos capítulos.

#### exportações

Ao criar uma classe no reagir, você deve exportá-los após a declaração, o que permite usar o componente em outro arquivo usando a palavra-chave `import` . Você pode usar o `default` após a palavra-chave `export` para informar ao React que esta é a classe principal desse arquivo.

```JavaScript
export default App; 
```

### Veja os resultados!

Quando você iniciar o servidor de desenvolvimento, emitindo o comando `npm start` , poderá visualizar as alterações adicionadas ao seu projeto ao vivo em seu navegador. Depois de emitir o comando, o npm deve abrir um navegador exibindo automaticamente seu aplicativo.

### Fontes

[1\. Reagir documentação](https://reactjs.org/docs/hello-world.html)