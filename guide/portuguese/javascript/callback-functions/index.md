---
title: Callback Functions
localeTitle: Funções de retorno
---
Este artigo apresenta uma breve introdução ao conceito e uso de funções de retorno de chamada na linguagem de programação Javascript.

## Funções são objetos

A primeira coisa que precisamos saber é que, em JavaScript, as funções são objetos de primeira classe. Como tal, podemos trabalhar com eles da mesma maneira que trabalhamos com outros objetos, como atribuí-los a variáveis ​​e passá-las como argumentos para outras funções. Isso é importante, porque é a última técnica que nos permite estender a funcionalidade em nossos aplicativos.

## Funções de retorno

Uma **função de retorno de chamada** é uma função que é passada _como um argumento_ para outra função, para ser "chamada de volta" mais tarde. Uma função que aceita outras funções como argumentos é chamada **de função de ordem superior** , que contém a lógica para _quando_ a função de retorno de chamada é executada. É a combinação desses dois que nos permitem ampliar nossa funcionalidade.

Para ilustrar as chamadas de retorno, vamos começar com um exemplo simples:

```javascript
function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote; 
  callback(myQuote); // 2 
 } 
 
 function logQuote(quote){ 
  console.log(quote); 
 } 
 
 createQuote("eat your vegetables!", logQuote); // 1 
 
 // Result in console: 
 // Like I always say, eat your vegetables! 
```

No exemplo acima, `createQuote` é a função de ordem mais alta, que aceita dois argumentos, sendo o segundo o retorno de chamada. A função `logQuote` está sendo usada para passar como nossa função de retorno de chamada. Quando executamos a função `createQuote` _(1)_ , observe que não estamos _anexando_ parênteses ao `logQuote` quando o passamos como um argumento. Isto é porque nós não queremos executar nossa função callback imediatamente, nós simplesmente queremos passar a definição da função para a função de ordem mais alta para que ela possa ser executada posteriormente.

Além disso, precisamos garantir que, se a função de retorno de chamada que esperamos receber argumentos, forneça esses argumentos ao executar o retorno de chamada _(2)_ . No exemplo acima, isso seria o `callback(myQuote);` declaração, uma vez que sabemos que o `logQuote` espera que uma citação seja passada.

Além disso, podemos passar funções anônimas como retornos de chamada. A chamada abaixo para `createQuote` teria o mesmo resultado que o exemplo acima:

```javascript
createQuote("eat your vegetables!", function(quote){ 
  console.log(quote); 
 }); 
```

Aliás, você não _precisa_ usar a palavra "callback" como o nome do seu argumento, o Javascript só precisa saber que é o nome correto do argumento. Com base no exemplo acima, a função abaixo se comportará exatamente da mesma maneira.

```javascript
function createQuote(quote, functionToCall) { 
  var myQuote = "Like I always say, " + quote; 
  functionToCall(myQuote); 
 } 
```

## Por que usar retornos de chamada?

Na maioria das vezes, estamos criando programas e aplicativos que operam de maneira **síncrona** . Em outras palavras, algumas de nossas operações são iniciadas somente depois que as anteriores foram concluídas. Muitas vezes, quando solicitamos dados de outras fontes, como uma API externa, nem sempre sabemos _quando_ nossos dados serão exibidos. Nesses casos, queremos aguardar a resposta, mas nem sempre queremos que todo o nosso aplicativo seja interrompido enquanto nossos dados estão sendo buscados. Essas situações são onde as funções de retorno de chamada são úteis.

Vamos dar uma olhada em um exemplo que simula uma solicitação para um servidor:

```javascript
function serverRequest(query, callback){ 
  setTimeout(function(){ 
    var response = query + "full!"; 
    callback(response); 
  },5000); 
 } 
 
 function getResults(results){ 
  console.log("Response from the server: " + results); 
 } 
 
 serverRequest("The glass is half ", getResults); 
 
 // Result in console after 5 second delay: 
 // Response from the server: The glass is half full! 
```

No exemplo acima, fazemos um pedido simulado para um servidor. Após 5 segundos, a resposta é modificada e, em seguida, nossa função de retorno de chamada `getResults` é executada. Para ver isso em ação, você pode copiar / colar o código acima na ferramenta de desenvolvedor do seu navegador e executá-lo.

Além disso, se você já estiver familiarizado com o `setTimeout` , estará usando as funções de retorno de chamada o tempo todo. O argumento de função anônimo passado na chamada de função `setTimeout` do exemplo acima também é um retorno de chamada! Portanto, o retorno de chamada original do exemplo é realmente executado por outro retorno de chamada. Tenha cuidado para não aninhar muitas chamadas de retorno, se você puder ajudá-lo, pois isso pode levar a algo chamado "callback hell"! Como o nome indica, não é uma alegria lidar com isso.