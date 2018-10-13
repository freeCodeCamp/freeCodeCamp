---
title: Angularjs Interview Questions
localeTitle: Perguntas da entrevista de Angularjs
---
# Perguntas da entrevista de Angularjs

Aqui está uma lista dos conceitos que são freqüentemente perguntados nas entrevistas Angularjs.

*   O que é o AngularJS?
*   O que é o Model View Controller (MVC)?
*   Ligação de dados em dois sentidos
*   O que é injeção de dependência e como funciona?
*   O que é o $ escopo no AngularJS?
*   O que é o $ rootScope no AngularJS?
*   Como implementar o roteamento em Angular?
*   Explicar diretivas
*   Como podemos criar uma diretiva personalizada em Angular?
*   Explique a diferença entre o serviço e a fábrica
*   Explicar $ q serviço, diferido e promessas

# Exemplos de Perguntas e Respostas

Pergunta: Listar as diretivas no AngularJS? Resposta: ngBind, ngModel, ngClass, ngApp, ngInit, ngRepeat

Pergunta: O que é o escopo do $ em AngularJS? Resposta: $ scope em AngularJS é um objeto que se refere a um modelo de aplicativo. É um objeto que liga a view (elemento DOM) ao controlador. No controlador, os dados do modelo são acessados ​​pelo objeto $ scope. Como sabemos, o AngularJS suporta o padrão MV \*, o objeto $ scope torna-se o modelo do MV \*.

Pergunta: O que é o SPA (aplicativo de página única) no AngularJS? Resposta: Aplicativos de página única (SPAs) são aplicativos da Web que carregam uma única página HTML e atualizam dinamicamente essa página à medida que o usuário interage com o aplicativo. Os SPAs usam AJAX e HTML para criar aplicativos da Web fluidos e responsivos, sem recarregamentos constantes de páginas. No entanto, isso significa que grande parte do trabalho acontece no lado do cliente, em JavaScript. Uma única página HTML aqui significa a página de resposta da interface do usuário do servidor. A fonte pode ser ASP, ASP.NET, ASP.NET MVC, JSP e assim por diante. Um aplicativo da Web de página única, no entanto, é entregue como uma página para o navegador e normalmente não requer que a página seja recarregada à medida que o usuário navega para várias partes do aplicativo. Isso resulta em navegação mais rápida, transferências de rede mais eficientes e melhor desempenho geral para o usuário final.

Pergunta: O que é roteamento no AngularJS? Resposta: O roteamento é um recurso principal no AngularJS. Esse recurso é útil na criação de um SPA (Aplicativo de Página Única) com várias visualizações. No aplicativo SPA, todas as visualizações são arquivos Html diferentes e usamos o Roteamento para carregar diferentes partes do aplicativo, e é útil dividir o aplicativo logicamente e torná-lo gerenciável. Em outras palavras, o Roteamento nos ajuda a dividir nosso aplicativo em visões lógicas e vinculá-las a diferentes controladores.

Pergunta: Explique a diretiva ng-repeat. Resposta: A diretiva ng-repeat é o recurso da diretiva AngularJS mais usado e muito útil. Ele itera sobre uma coleção de itens e cria elementos DOM. Ele monitora constantemente a fonte de dados para renderizar novamente um modelo em resposta a alterações.

Pergunta: Qual é a diferença entre ng-If e ng-show / ng-hide. Resposta: A diretiva ng-If renderiza apenas o elemento DOM se a condição for verdadeira. onde a diretiva ng-show / ng-hide renderiza o elemento DOM mas muda a classe de ng-hide / ng-show para manter a visibilidade do elemento na página.

Pergunta: Como você cancela um tempo limite com o AngularJs? Resposta: $ timeout é o wrapper do AngularJs para window.setTimeout, você cancela o timeout aplicando a função:
```
$timeout.cancel(function (){ 
  // write your code. 
 }); 
```

Pergunta: O que é a Injeção de Dependência? Resposta: A Injeção de Dependência (DI) é um padrão de design de software que lida com o modo como os componentes se apropriam de suas dependências. O subsistema do injetor AngularJS é responsável por criar componentes, resolver suas dependências e fornecê-los a outros componentes, conforme solicitado.

Pergunta: Explique a diretiva ng-App. Resposta: A diretiva ng-app inicia um aplicativo AngularJS. Define o elemento raiz. Ele inicializa ou inicializa automaticamente o aplicativo quando a página da Web que contém o aplicativo AngularJS é carregada. Também é usado para carregar vários módulos do AngularJS no aplicativo AngularJS.

Pergunta: Explique a diretiva ng-init Resposta: A diretiva ng-init inicializa os dados do aplicativo AngularJS. Ele é usado para colocar valores nas variáveis ​​a serem usadas no aplicativo. Por exemplo: No exemplo abaixo, inicializamos uma matriz de países usando a sintaxe JSON para definir a matriz de países.

```html

<div ng-app = "" ng-init = "countries = [{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}]"> 
   ... 
 </div> 
```

Pergunta: Como você compartilha dados entre controladores? Resposta: Crie um serviço AngularJS que irá armazenar os dados e injetá-los dentro dos controladores. Usar um serviço é a maneira mais limpa, rápida e fácil de testar. No entanto, existem outras maneiras de implementar o compartilhamento de dados entre os controladores, como: - Usando eventos - Usando $ parent, nextSibling, controllerAs, etc. para acessar diretamente os controladores - Usando o $ rootScope para adicionar os dados (não é uma boa prática)

Pergunta: Qual é a diferença entre as diretivas ng-if e ng-show / hide? Resposta: ng-if só criará e exibirá o elemento DOM quando sua condição for verdadeira, se a condição for falsa ou mudar para falso, não criará nem destruirá a criada. ng-show / hide sempre gerará o elemento DOM, mas aplicará a propriedade de exibição css com base na avaliação da condição.

#### Mais Informações:

Aqui você pode encontrar outras perguntas e respostas:

*   [Perguntas da entrevista de AngularJS](https://www.tutorialspoint.com/angularjs/angularjs_interview_questions.htm)
*   [10 AngularJS entrevista perguntas e respostas](https://www.upwork.com/i/interview-questions/angularjs/)
*   [50 questões mais importantes da entrevista AngularJS para 100% de sucesso](http://www.techbeamers.com/latest-angularjs-interview-questions-answers/)