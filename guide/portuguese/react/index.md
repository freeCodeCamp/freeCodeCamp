---
title: React
localeTitle: React
---
# React

React é uma biblioteca JavaScript para criar interfaces com o usuário. É mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas. Ele foi eleito o mais amado na categoria "Frameworks, bibliotecas e outras tecnologias" da Pesquisa de desenvolvedores do Stack Overflow 2017. 1

React é uma biblioteca JavaScript e os aplicativos React criados nele são executados no navegador, NÃO no servidor. Aplicativos desse tipo só se comunicam com o servidor quando necessário, o que os torna muito rápidos em comparação com os sites tradicionais que forçam o usuário a esperar que o servidor renderize novamente páginas inteiras e as envie para o navegador.

O React é usado para criar interfaces com o usuário - o que o usuário vê na tela e interage para usar seu aplicativo da web. Essa interface é dividida em componentes, em vez de ter uma página enorme que você divide em partes menores conhecidas como componentes. Em termos mais gerais, essa abordagem é chamada de modularidade.

*   É declarativo: o React usa um paradigma declarativo que facilita o raciocínio sobre seu aplicativo.
*   É eficiente: o React calcula o conjunto mínimo de alterações necessárias para manter o seu DOM atualizado.
*   E é flexível: o React funciona com as bibliotecas e estruturas que você já conhece.

## Por que aprender React?

1.  React envolve Composição, que é um conjunto de componentes que envolvem as funcionalidades em um contêiner encapsulado. Muitos sites populares usam o React implementando o padrão arquitetural MVC. Facebook (Parcialmente), Instagram (Completamente), Khan Academy (Parcialmente), Codecademy (Parcialmente), New York Times (Parcialmente), Yahoo Mail (Completamente), o novo aplicativo de galeria de fotos e vídeos do Dropbox Carrossel (Completamente) são os sites populares conhecidos estar usando React. Como esses aplicativos grandes são criados usando o React? A resposta simples é construir pequenos aplicativos ou componentes. Exemplo:

```jsx
const Component2 = () => { 
  return ( 
    <div></div> 
  ); 
 }; 
 const Component3 = () => { 
  return ( 
    <div></div> 
  ); 
 }; 
 const Component1 = () => { 
  return ( 
    <div> 
      <Component2 /> 
      <Component3 /> 
    </div> 
  ); 
 }; 
 
 ReactDOM.render( 
  <Component1 />, 
  document.getElementById("app") 
 ); 
```

2.  React é declarativo para a maior parte em que estamos mais preocupados com o que fazer, em vez de como fazer uma tarefa específica. A programação declarativa é um paradigma de programação que expressa a lógica de uma computação sem descrever seu fluxo de controle. A programação declarativa vem com certas vantagens, como redução de efeitos colaterais (ocorre quando modificamos qualquer estado ou transformamos algo ou fazemos uma requisição de API), minimizando a mutabilidade (muito abstraído), melhor legibilidade, menores erros.
    
3.  Fluxo de dados unidirecional. A interface do usuário no React é, na verdade, a função do estado que significa que, à medida que o estado é atualizado, ele também atualiza a interface do usuário. Portanto, nossa interface do usuário progride conforme o estado muda.


## Vantagens de React

Algumas razões para usar o React são:

1.  Rápido. Os aplicativos feitos no React podem lidar com atualizações complexas e ainda se sentem rápidos e responsivos.
2.  Modular Em vez de escrever arquivos grandes e densos de código, você pode escrever muitos arquivos menores e reutilizáveis. A modularidade do React pode ser uma bela solução para os [problemas de manutenção](https://en.wikipedia.org/wiki/Spaghetti_code) do JavaScript.
3.  Escalável Programas grandes que exibem muitos dados alterados são onde o React apresenta o melhor desempenho.
4.  Flexível. Você pode usar o React para projetos interessantes que não têm nada a ver com a criação de um aplicativo da web. As pessoas ainda estão descobrindo o potencial do React. [Há espaço para explorar](https://medium.mybridge.co/22-amazing-open-source-react-projects-cb8230ec719f) .

### DOM virtual

A mágica do React vem da interpretação do DOM e sua estratégia para criar interfaces de usuário.

O React usa o DOM virtual para renderizar uma árvore HTML virtualmente primeiro e, a cada vez que um estado muda e obtém uma nova árvore HTML que precisa ser levada ao DOM do navegador, em vez de gravar toda a nova árvore, o React só grava diferença entre a nova árvore e a árvore anterior (desde que o React tenha ambas as árvores na memória). Esse processo é conhecido como Reconciliação de Árvore.

### Reconciliação

O React possui um algoritmo de diferenciação inteligente que ele usa para regenerar apenas em seu nó DOM o que realmente precisa ser regenerado enquanto mantém tudo como está. Esse processo de diferenciação é possível devido ao DOM virtual do React.

Usando o DOM virtual, o React mantém a última versão do DOM na memória e quando tiver uma nova versão DOM para levar ao navegador, essa nova versão do DOM também estará na memória, então o React pode computar a diferença entre as versões novas e antigas .

O React instruirá o navegador para atualizar apenas o diff computado e não o nó DOM inteiro. Não importa quantas vezes nós regeneramos nossa interface, o React levará para o navegador apenas as novas atualizações “parciais”.

## React do zero

Você gostaria de começar a aprender os fundamentos da reação sem ficar atolado criando um ambiente de desenvolvimento? As chances são de que, se você é novo no desenvolvimento da Web, configurar um ambiente de desenvolvimento pode deixá-lo um pouco intimidado quando estiver apenas tentando aprender React ou simplesmente aprender React pela primeira vez.

Neste artigo, vamos ver como podemos começar a usar o React usando apenas um editor de texto, um navegador e nada mais.

[!["Assista](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)

[### 1 - Configure o Código da Placa da Caldeira com Emmet

Vamos começar com o passo 1. Começaremos com um arquivo no nosso navegador chamado “index.html”. Começaremos com o código HTML do código da placa de caldeira. Para um início rápido, recomendo usar o Emmet com qualquer editor de texto que você tenha e, na primeira linha, digitar `html:5` e pressionar a tecla Shift para obter o código abaixo. Ou você pode ir em frente e copiar e colar o código abaixo.

```javascript
html:5 
```

Isso resultará no seguinte código:

```javascript
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
  <title>Document</title> 
 </head> 
 <body> 
 
 </body> 
 </html> 
```

Nós podemos preencher o título de "Time to React!".

Este conteúdo não aparecerá na sua página da web. Qualquer coisa na seção head do arquivo HTML será um metadado que nosso navegador usará para interpretar nosso código na seção do corpo. Este título vai ser o que aparece na aba da nossa página, não na página.

### 2 - Obtenha tags de script para aproveitar o poder das bibliotecas React e Babel

Ok, o item um é retirado da nossa lista. Vamos ver o item dois. Vamos configurar nosso ambiente de desenvolvedor usando tags de script para trazer React e Babel. Este não é um ambiente de desenvolvedor da vida real. Isso seria uma configuração bastante elaborada. Isso também nos deixaria com um monte de código de placa de caldeira e bibliotecas que nos tirariam do assunto de aprender o básico do React. O objetivo desta série é passar por cima da sintaxe básica do React e entrar diretamente na codificação. Vamos usar tags `<script>` para trazer a Biblioteca React, a biblioteca React DOM (por que) e a biblioteca Babel.

```javascript
<head> 
  ... 
  <!-- REACT LIBRARY --> 
  <script src="https://unpkg.com/react@15.5.4/dist/react.js"></script> 
  <!-- REACT DOM LIBRARY --> 
  <script src="https://unpkg.com/react-dom@15.5.4/dist/react-dom.js"></script> 
  <!-- BABEL LIBRARY --> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script> 
  ... 
  <title>Time to React!</title> 
 </head> 
```

Você está livre para usar versões mais atualizadas dessas bibliotecas à medida que elas saem. Eles não devem criar nenhuma alteração significativa no conteúdo que estamos cobrindo.

o que você está fazendo aqui? O elemento HTML `<script>` é usado para incorporar ou referenciar um script executável. O atributo "src" aponta para os arquivos de script externos da biblioteca React, da biblioteca ReactDOM e da biblioteca Babel. É como se você tivesse um barbeador elétrico. Literalmente não é bom para você, não importa o quão sofisticado o barbeador elétrico, a menos que você possa conectá-lo à parede e obter acesso à eletricidade. Nosso código React que escreveremos não será bom para nós se nosso navegador não puder se conectar a essas bibliotecas para entender e interpretar o que estamos fazendo. É assim que nossa aplicação vai ganhar o poder do React, será como inserimos o React no Dom. A razão pela qual temos React e ReactDOM como duas bibliotecas diferentes é porque há casos de uso como o React Native, onde a renderização para o DOM não é necessária para o desenvolvimento móvel, então a biblioteca foi dividida para que as pessoas decidissem pelo que precisavam no projeto em que estão trabalhando. Como precisaremos do nosso React para chegar ao DOM, usaremos os dois scripts. O Babel é como aproveitamos o script ECMA além do ES5 e lidamos com algo chamado JSX (JavaScript como XML) que usaremos no React. Vamos dar uma olhada mais profunda na magia de Babel em uma próxima lição :) Certo, concluímos as etapas 1 e 2. Configuramos nosso código de placa de caldeira e configuramos nosso ambiente de desenvolvedor.


### 3 - Render React ao DOM


Nossos próximos dois passos serão escolher nosso local no DOM para o qual queremos renderizar nosso conteúdo React. E usar outra tag de script para nosso conteúdo React dentro do corpo. Geralmente, como uma boa separação de interesses, isso seria em seu próprio arquivo, em seguida, vinculado a este documento html. Faremos isso mais tarde nas próximas lições. Por enquanto, vamos deixar isso acontecer dentro do corpo do documento html em que estamos atualmente. Agora vamos ver como é simples escolher um local no DOM para renderizar nosso conteúdo React. Nós vamos dentro do corpo. E a melhor prática não é apenas lançar o React na tag body a ser exibida, mas criar um elemento separado, geralmente um div, que você pode tratar como um elemento raiz para inserir o conteúdo do React.

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
 </body> 
```


Vamos criar um simples elemento `<div>` e dar a ele um id de "app". Seremos capazes de segmentar esse local para inserir nosso conteúdo React da mesma forma que você pode usar CSS para segmentar um ID para o estilo de sua escolha. Qualquer conteúdo reagente será renderizado nas tags div com o ID do aplicativo. Enquanto isso, deixaremos um texto dizendo que "O React ainda não foi renderizado" Se vemos isso quando visualizamos nossa página, isso significa que em algum lugar perdemos a renderização React. Agora, vamos em frente e criar uma tag de script dentro do nosso corpo, onde vamos criar com React pela primeira vez. A sintaxe que vamos precisar para a nossa tag de script é adicionar um atributo de “type”. Isso especifica o tipo de mídia do script. Acima de nós, usamos um atributo src que apontava para os arquivos de script externos da biblioteca React, da biblioteca ReactDOM e da biblioteca Babel.


```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
  </script> 
 </body> 
```

O "tipo" de script que estamos usando, vamos incluir aspas e defini-lo como `"text/babel"` . Nós precisaremos dessa habilidade para usar o babel imediatamente enquanto trabalhamos com o JSX. Primeiro, vamos renderizar React ao DOM. Usaremos o método `ReactDOM.render()` para fazer isso. Este será um método e lembre-se de que um método é apenas uma função anexada a um objeto. Esse método levará dois argumentos.

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
  ReactDOM.render(React What, React Where); 
 </script> 
 </body> 
```

O primeiro argumento é o "o quê" de React. O segundo argumento é o "onde" da localização que você quer que seja colocado no DOM. Vamos começar chamando nosso método ReactDOM.render (). Nosso primeiro argumento será nosso JSX.

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
  ReactDOM.render( 
    <h1>Hello World</h1>, 
    React Where 
  ); 
 </script> 
 </body> 

```](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI) 

[O](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI) [funcionário reage estado docs](https://reactjs.org/docs/introducing-jsx.html) : “Esta sintaxe de tag engraçada não é nem uma string nem um HTML. É chamado de JSX e é uma extensão de sintaxe para JavaScript. Recomendamos usá-lo com o React para descrever como deve ser a interface do usuário. O JSX pode lembrá-lo de uma linguagem de modelo, mas ela vem com todo o poder do JavaScript. O JSX produz React "elements" ”.

Muitas vezes, JSX enlouquece as pessoas que foram desenvolvedores por um tempo, porque parece HTML. Em uma idade muito precoce, os desenvolvedores aprendem a separação de interesses. O HTML tem o seu lugar, o CSS tem o seu lugar e o JavaScript tem o seu lugar. O JSX parece desfocar as linhas. Você está usando o que parece ser HTML, mas como o Facebook diz, vem com todo o poder do JavaScript.

Isso pode enlouquecer veteranos, então muitos tutoriais reagem sem o JSX, o que pode ser bastante complexo. Nós não vamos fazer isso. Porque este curso é direcionado para aqueles que são muito jovens em suas carreiras, você não pode trazer as bandeiras vermelhas quando você vê esta sintaxe.

E o JSX é realmente muito intuitivo. Você provavelmente pode facilmente ler esse código e ver que essa será a maior tag de cabeçalho que exibe o texto “Hello World”. Nenhum mistério e muito simples. Agora, vamos ver o que seria nosso segundo argumento.

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
    ReactDOM.render( 
      <h1>Hello World</h1>, 
      document.getElementById("app") 
    ); 
  </script> 
 </body> 
```

É aqui que queremos que nosso conteúdo reagente seja renderizado ao dom. Você provavelmente já fez isso algumas vezes no passado. Vamos apenas digitar `document.getElementById()` . E vamos passar para o argumento do id do aplicativo. E é isso. Agora, segmentaremos o div com o ID do aplicativo para inserir nosso conteúdo de reação.

Queremos garantir que nosso conteúdo seja salvo. Vá em frente e abra isso no navegador e você verá "Hello World". Como você provavelmente pode imaginar, usar o React não é a maneira mais rápida ou melhor de criar um aplicativo Hello World. Ainda não estamos vendo os benefícios disso. Mas agora sabemos que tudo está funcionando.

Vá em frente e abra o console e olhe para os "elementos". Você pode fazer isso em um mac com o comando + shift + j ou no Windows e Linux: Ctrl + Shift + J

Se você clicar na tag head, poderemos ver nossas bibliotecas de scripts incluídas. Então podemos ir ao corpo do nosso documento. Vamos clicar no nosso div com o id de "app". E quando vemos a nossa tag `<h1>` com o conteúdo "Hello World".

[Ver o código inteiro aqui](https://github.com/robgmerrill/hello-react/blob/master/section-one/index.html)

ou

[!["Assista](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)

[

### Recapitular

Então, vamos fazer uma rápida recapitulação. Na nossa tag head pegamos as tags de script para React, ReactDOM e Babel. Estas são as ferramentas que nosso navegador precisa em seus metadados para ler nosso código React e JSX em específico. Em seguida, localizamos a posição no DOM em que desejamos inserir nosso React, criando um elemento div com o ID de "app". Em seguida, criamos uma tag de script para inserir nosso código React. Usamos o método ReactDOM.render () que leva dois argumentos. O "o quê" do conteúdo do React, neste caso o nosso JSX, e o segundo argumento é o "where" em que você deseja inserir o conteúdo do React no DOM. Neste caso, é o local com o id de "app".

](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)

[Como alternativa ao JSX, você pode usar o compilador ES6 e Javascript como o Babel.](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI) [https://babeljs.io/](https://babeljs.io/)

### Mais Informações:

*   [Página do React](https://reactjs.org/)
*   [Twitter de Dan Abramov](https://twitter.com/dan_abramov)

### Fontes

1.  ["Developer Survey Results 2017"](https://insights.stackoverflow.com/survey/2017#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-other-technologies) _Estouro de pilha._ Acesso em: 28 de outubro de 2017.
