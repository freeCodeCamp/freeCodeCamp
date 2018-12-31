---
title: Running Webpack and Webpack Dev Server
localeTitle: Executando o Webpack e o Webpack Dev Server
---
Chegou a hora de usar o Webpack. Como o Webpack é instalado globalmente, podemos executar o seguinte em nosso terminal:
```
webpack 
```

Isto irá executar o nosso arquivo `webpack.config.js` . Ele deve ser executado com sucesso, e devemos ver algo assim aparecer no nosso terminal:
```
Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 1721ms 
    Asset    Size  Chunks             Chunk Names 
 bundle.js  679 kB       0  <a href='https://webpack.github.io/docs/webpack-dev-server.html' target='_blank' rel='nofollow'>emitted]  main 
    + 159 hidden modules 
```

Observe que ele se refere a um `Asset` chamado `bundle.js` . O Webpack está nos dizendo que esse arquivo foi criado quando executamos o comando `webpack` . Confira sua pasta `dist` e você deverá ver seu `bundle.js` ao lado de seu `index.html` .

Nossa árvore agora ficará assim:
```
. 
 ├── dist 
 |   ├── bundle.js 
 │   └── index.html 
 ├── node_modules 
 ├── package.json 
 ├── src 
 │   └── js 
 │       └── client.js 
 └── webpack.config.js 
```

Portanto, agora que temos um `dist/bundle.js` , nosso arquivo `dist/index.html` agora está se referindo a um arquivo que existe! Se dermos uma olhada em `bundle.js` , veremos que é um pacote de todos os arquivos JavaScript em nosso projeto. Legal!

Vá em frente e procure por alguns conteúdos do nosso `dist/bundle.js` , como `This is one cool app!` . Podemos ver seu contexto no arquivo, está dentro de um método esquisito:
```
_createClass(Main, [{ 
  key: 'render', 
  value: function render() { 
    return _react2.default.createElement( 
      'div', 
      null, 
      _react2.default.createElement( 
        'h1', 
        null, 
        'This is one cool app!' 
      ) 
    ); 
  } 
 }]); 
```

Isso é o que Babel fez; ele converteu o código para ES5 e o empacotou entre outros arquivos JavaScript - incluindo todos os nossos Módulos Node, é claro. Agora todos os nossos arquivos React podem se referir a este pacote usando `import` instruções de `import` ES6.

Finalmente, é hora de verificar o aplicativo em um navegador. Para isso, vamos usar o Webpack Dev Server, que é uma ferramenta rica em recursos para configurar um servidor `localhost` para fins de desenvolvimento ao usar o Webpack.

*   \[Ajuda: Mais sobre o Webpack Dev Server

Vá em frente e corra:
```
webpack-dev-server --content-base dist 
```

Precisamos incluir `--content-base dist` para especificar uma base de conteúdo para o Webpack Dev Server, para que ele saiba onde obter os arquivos a serem atendidos; neste caso, é a pasta `dist` , porque essa é a pasta que estamos usando para **produção** em oposição à pasta `src` , que estamos usando para _desenvolvimento_ \*.

Em nosso terminal, devemos ver algo como o seguinte:
```
http://localhost:8080/webpack-dev-server/ 
 webpack result is served from / 
 content is served from /Code/react-webpack-example/dist 
 Hash: 2474b15611d8d75c5a39 
 Version: webpack 1.12.14 
 Time: 3738ms 
```

Depois disso, será uma lista muito longa de todos os arquivos agrupados em `dist/bundle.js` pelo Webpack. Surpreendente!

Agora é hora de ir para a URL fornecida pelo `webpack-dev-server` , `http://localhost:8080/` . Devemos ver uma página com um `h1` que diz:
```
This is one cool app! 
```

Vamos verificar o painel de elementos das nossas ferramentas de desenvolvimento. Nós devemos ter o seguinte:
```
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>React Webpack Example</title> 
  <style type="text/css"></style> 
 </head> 
 <body> 
  <!-- React app will be injected into the following `div` element: --> 
  <div id="app"> 
    <div data-reactid=".0"> 
      <h1 data-reactid=".0.0">This is one cool app!</h1> 
    </div> 
  </div> 
  <!-- Include bundled JavaScript: --> 
  <script src="bundle.js"></script> 
 </body> 
 </html> 
```

Se fizermos isso com o que escrevemos em `src/js/client.js` , veremos como o React é renderizado no `dist/index.html` .

Se você chegou até aqui, bem feito! Agora você sabe como configurar um espaço de trabalho usando o código React, Webpack e ES6, o que é incrível, e fornece o ponto de partida para criar aplicativos da Web impressionantes usando tecnologias de ponta.

No próximo tutorial, abordaremos algumas etapas mais avançadas, incluindo:

*   Entrando em mais detalhes com o React
*   Olhando para alguns outros recursos interessantes do Webpack, como compilar arquivos Sass
*   Usando minification em nosso `dist/bundle.js`

#### Mais Informações:

[Web site Webpack](https://webpack.js.org/)

[Webpack Github](https://github.com/webpack/webpack)

[webpack-dev-server Github](https://github.com/webpack/webpack-dev-server)