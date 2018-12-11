---
title: Hello World
localeTitle: Olá Mundo
---## Olá Mundo !!

Cada aprendizagem de línguas começa com o exemplo do Hello World Tradicional. Aqui, você é apresentado ao React com o mesmo programa HelloWorld.

Tudo no React é um componente.

Mas antes disso, precisamos ter o node.js e o npm instalados no computador. Opcionalmente, podemos usar o CRA (Create React App), que é uma ferramenta criada por desenvolvedores do Facebook para ajudá-lo a criar aplicativos React. Isso evita configurações e configurações demoradas. Basta executar um comando e criar o aplicativo reagir configura as ferramentas necessárias para iniciar seu projeto React.

Podemos instalá-lo através dos seguintes comandos
```
npm install -g create-react-app 
 
 create-react-app my-app 
 
 cd my-app 
 npm start 
```

A linha de comando deve fornecer uma saída onde você pode encontrar o aplicativo no navegador. O padrão deve ser localhost: 8080. Se você estiver usando apenas o IE ou o Edge em sua máquina Windows, recomendo que você instale o Chrome também para acessar o ambiente de desenvolvedor e as Ferramentas do desenvolvedor do React, que estão disponíveis como extensão do Chrome.

![alt reagir página inicial](https://cdn-images-1.medium.com/max/800/1*Qcry5pCXIy2KeNRsq3w7Bg.png)

#### src / App.js

copie o código abaixo e cole-o em src / App.js

```javascript
  import React from 'react'; 
 
  class App extends React.Component{ 
    constructor(props) { 
      super(props); 
    } 
 
    render(){ 
      return( 
        <div> 
          <p>Hello World !!</p> 
        </div> 
      ); 
    } 
  } 
 
  export default App; 
```

Se verificarmos o arquivo index.js na pasta src, descobrimos que o App.js acima é chamado em index.js e, em seguida, renderizado.

```javascript
// Other code 
 import App from './App'; // The App component is imported 
 
 // Other code 
 ReactDOM.render(<App />, 
 document.getElementById('root'));  //The <App /> is the way components are called in react after importing them 
 
 // Other code 
```

Acima, App.js é chamado de componente. Normalmente, fazemos vários componentes e os reunimos em App.js, que serão então renderizados em index.js, que é então renderizado no div raiz que está no index.html.

Parabéns !! Você criou seu primeiro aplicativo React Hello world. Você aprende mais sobre o Reagir nos próximos artigos.

Codificação Feliz !!