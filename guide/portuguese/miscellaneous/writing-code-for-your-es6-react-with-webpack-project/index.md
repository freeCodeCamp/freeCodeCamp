---
title: Writing Code for Your Es6 React with Webpack Project
localeTitle: Escrevendo código para o seu Es6 React com Webpack Project
---
## dist / index.html

Nós podemos ir agora abrir nosso `dist/index.html` . Esta será a única página HTML que carrega todo o nosso aplicativo. Nós não precisamos de muito código para este arquivo, apenas o suficiente para:

*   Defina um elemento para o React DOM no `src/js/client.js` .
*   Link para o nosso arquivo JavaScript incluído (que ainda não existe).

Portanto, é assim que nosso arquivo `dist/index.html` será:
```
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>React Webpack Example</title> 
 </head> 
 <body> 
  <!-- React app will be injected into the following `div` element: --> 
  <div id="app"></div> 
  <!-- Include bundled JavaScript: --> 
  <script src="bundle.js"></script> 
 </body> 
 </html> 
```

Você pode estar se perguntando por que esta página está vinculada a um `bundle.js` quando tudo o que temos até agora é um `src/js/client.js` . Isso será revelado mais tarde quando escrevermos nosso arquivo de configuração do Webpack.

## src / js / client.js

Agora é hora de escrever algum código React. Assim como no arquivo `dist/index.html` , por enquanto vamos escrever apenas código suficiente para o aplicativo funcionar, então não haverá muito código requerido:
```
import React from 'react'; 
 import ReactDOM from 'react-dom'; 
 
 class Main extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h1>This is one cool app!</h1> 
      </div> 
    ); 
  } 
 } 
 
 const app = document.getElementById('app'); 
 ReactDOM.render(<Main />, app); 
```

O código que se parece com elementos HTML é, na verdade, JSX, que faz parte do React.

*   [Ajuda: Mais sobre JSX](http://buildwithreact.com/tutorial/jsx)

Para explicar o que está acontecendo nesse arquivo, vamos dividi-lo:

*   Primeiro, estamos importando `React` e `ReactDOM` . Estes são necessários para qualquer arquivo React usado para injetar código no DOM. O `ReactDOM` é um DOM virtual e não é a mesma coisa que o modelo de objeto de documento padrão.
    
*   [Ajuda: Mais sobre o React DOM](https://facebook.github.io/react/docs/glossary.html)
    
    *   Em seguida, estamos criando uma classe React. As classes foram adicionadas ao JavaScript no ES6. Portanto, este é o método ES6 de escrever uma classe React, mas é claro [que podemos escrever uma em ES5 também](https://toddmotto.com/react-create-class-versus-component/) .
*   [Ajuda: Mais sobre as classes do ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    

Toda classe React possui um método de `render` . Nesse caso, o método `render` `return` um elemento `div` JSX. Isso é o que veremos em todo o arquivo React. A classe pode conter outros métodos que devem aparecer antes do método de `render` , que sempre fica na parte inferior de uma classe.

*   Por fim, estamos vinculando o React ao nosso `index.html` . Nós definimos o `app` para ser o local onde queremos que nosso código React seja injetado. E, finalmente, usando o ReactDOM, injetamos o componente que escrevemos, `<Main />` , no aplicativo, que nesse caso é o `div` com o `id` do `app` .

## webpack.config.js

Ainda há mais um arquivo para escrever antes do nosso projeto estar pronto. É o arquivo de configuração do Webpack. Em primeiro lugar, os arquivos `webpack.config.js` podem ser confusos, mas muitas vezes não são tão complexos quanto parecem.

Neste caso, em sua forma mais básica, um `webpack.config.js` exporta um objeto que possui as seguintes propriedades:

| Propriedade | Papel |  
| --- | --- |  
| entrada | O que acontece: o ponto de entrada do aplicativo. Neste caso, é `src/js/client.js` . |  
| saída | O que sai: o que o Webpack vai agregar para nós. Neste caso, é qualquer nome que `webpack.config.js` no `webpack.config.js` . |  
| carregadores | As tarefas que o Webpack vai realizar. |

Aqui está o que o arquivo `webpack.config.js` parece:
```
var path = require('path'); 
 var srcPath = path.join(__dirname, 'src'); 
 var buildPath = path.join(__dirname, 'dist'); 
 
 module.exports = { 
  context: srcPath, 
  entry: path.join(srcPath, 'js', 'client.js'), 
  output: { 
      path: buildPath, 
      filename: "bundle.js" 
  }, 
  module: { 
      loaders: <a href='https://en.wikipedia.org/wiki/Don%27t_repeat_yourself' target='_blank' rel='nofollow'> 
          { 
            test: /\.jsx?$/, 
            exclude: /(node_modules|bower_components)/, 
            loader: 'babel', 
            query: { 
              presets: ['react', 'es2015'] 
            } 
          } 
      ] 
  } 
 }; 
```

Novamente, vamos dividi-lo para que fique claro o que esse arquivo está fazendo:

*   Em primeiro lugar, estamos exigindo o módulo `path` do NodeJS para que possamos manipular os caminhos de arquivo, o que é necessário para configurar o `context` do objeto. É muito importante usar este módulo em vez de tentar concatenar diretórios com strings, porque alguns sistemas operacionais, como o Windows, exigem isso.
    
*   Em seguida, especificamos um `srcPath` e um `buildPath` usando o módulo `path` que acabamos de requerer. Fazer isso garantirá que tenhamos \[código DRY e legível.
    
*   Agora chega a hora de escrever o objeto. As propriedades que vamos usar são todas relevantes para o Webpack.
    
    *   Primeiro, fornecemos um contexto, que simplesmente especifica onde está nosso aplicativo. Refere-se à variável de `context` que acabamos de criar.
    *   Em seguida, especificamos o ponto de entrada, que é, obviamente, o aplicativo React que escrevemos anteriormente ( `src/js/client.js` ).
    *   Em seguida, especificamos o nome do arquivo incluído que o Webpack cria quando é executado. Neste caso, é `dist/bundle.js` . Soa familiar? Deve fazer, porque este é o arquivo que estamos ligando do nosso `dist/index.html` !
    *   Finalmente, vem a propriedade `module` , que contém uma matriz, `loaders` , que atualmente contém um único objeto. As propriedades deste objeto informam ao Webpack quais arquivos JavaScript estão sendo gravados com ES6 e React, para que seu carregador, `babel` , possa ser executado adequadamente quando o `webpack.config.js` for executado. Este é basicamente um código clichê que podemos ver na [página de readme do Babel Loader](https://github.com/babel/babel-loader) .

Se `webpack.config.js` estiver confuso agora, não se preocupe, desde que você entenda o que está lá para fazer.

*   [Ajuda: Mais sobre como escrever um arquivo de configuração do Webpack](https://webpack.github.io/docs/tutorials/getting-started/#config-file)