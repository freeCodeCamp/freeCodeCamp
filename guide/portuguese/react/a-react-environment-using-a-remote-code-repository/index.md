---
title: A React Environment Using a Remote Code Repository
localeTitle: Um Ambiente Reagir Usando um Repositório de Código Remoto
---
Isto é como criar um ambiente React que não seja de produção utilizando um repositório de código remoto. Usaremos o cdnjs.cloudflare.com 16.0.0 react, react-dom e babel-standalone 6.26.0 para conseguir isso. O babel-polyfill é usado para compatibilidade com navegadores antigos.

\`\` \`html

   Olá reagir

ReactDOM.render( <h1>Hello React</h1>, document.getElementById('helloreact'));

\`\` \` Se este código for salvo com a extensão de arquivo html (helloReact.html), ele poderá ser aberto em um navegador da web ele irá executar React e Babel.