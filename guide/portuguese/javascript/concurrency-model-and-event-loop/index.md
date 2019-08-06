---
title: Concurrency Model and Event Loop
localeTitle: Modelo de Concorrência e Loop de Eventos
---
## Modelo de Concorrência e Loop de Eventos

O tempo de execução do Javascript é de encadeamento único, o que significa que ele pode executar uma parte do código por vez. Para entender o modelo de simultaneidade e o loop de eventos em Javascript, primeiro precisamos contornar alguns termos comuns associados a ele. Primeiro vamos aprender o que é uma pilha de chamadas.

Uma pilha de chamadas é uma estrutura de dados simples que registra onde no código estamos atualmente. Então, se entrarmos em uma função que é uma chamada de função, ela é enviada para a pilha de chamadas e, quando retornamos de uma função, ela é removida da pilha.

Vamos dar um exemplo de código para entender a pilha de chamadas

```javascript
function multiply(x,y) { 
   return x * y; 
 } 
 
 function squared(n) { 
     return multiply(n,n) 
  } 
 
 function printSquare(n) { 
   return squared(n) 
 } 
 
 let numberSquared = printSquare(5); 
 console.log(numberSquared); 
```

Primeiro, quando o código executa, o tempo de execução lerá cada uma das definições de função, mas quando chegar à linha onde a primeira função **printSquare (5)** é invocada, esta função será empurrada para a pilha de chamadas. Em seguida, essa função será executada e, antes de retornar, encontrará outra função **ao quadrado (n),** portanto suspenderá sua operação atual e pressionará essa função sobre a função existente. Ele executa a função neste caso a função squared e finalmente encontra outra função **multiplica (n, n),** portanto, ela suspende suas execuções atuais e envia essa função para a pilha de chamadas. multiplique executa e retorna com o valor multiplicado. Finalmente, a função quadrada retorna e é removida da pilha e o mesmo acontece com printSquare. O valor final do quadrado é alocado para a variável numberSquared. Encontramos novamente uma chamada de função, neste caso, é uma instrução console.log () para que o tempo de execução envie isso para a pilha que o executa imprimindo o número quadrado no console. Deve-se notar que a primeira função que é colocada na pilha antes de qualquer código ser executado é a função principal que no tempo de execução é denotada como uma 'função anônima'.

Então, para resumir sempre que uma função é chamada, ela é colocada na pilha de chamadas onde é executada. Finalmente, quando a função é executada e está retornando implícita ou explicitamente, ela será removida da pilha. A pilha de chamadas apenas registra em que ponto no tempo a função estava sendo executada. Ele controla qual função está sendo executada no momento.

Agora sabemos disso que o Javascript pode executar uma coisa de cada vez, mas esse não é o caso do Navegador. O Navegador tem seu próprio conjunto de APIs como setTimeout, XMLHttpRequests que não são especificadas no tempo de execução de Javascript. Na verdade, se você observar o código-fonte do V8, o popular runtime Javascript que dá suporte a navegadores como o Google Chrome, você não encontrará nenhuma definição para ele. É porque essas APIs especiais existem no ambiente do navegador, não dentro do ambiente javascript, e você pode dizer que essas APIs introduzem a simultaneidade na mistura. Vamos ver um diagrama para entender a imagem inteira.

![Concorrência e Modelo de Loop de Eventos](https://cdn-media-1.freecodecamp.org/imgr/rnQEY7o.png)

Mais alguns termos são introduzidos

**Heap** - É principalmente o lugar onde os objetos são alocados.

**Fila de Callback** - É uma estrutura de dados que armazena todas as chamadas de retorno. Como é uma fila, os elementos são processados ​​com base no FIFO, que é First in First Out.

**Evento Loop** - É aqui que todas essas coisas se juntam. O que o loop de eventos simplesmente faz é verificar as pilhas de chamadas e, se estiverem vazias, o que significa que não há funções na pilha. a fila de retorno de chamada e envia-a para a pilha de chamadas que eventualmente executa o retorno de chamada.

Vamos entender isso com um exemplo de código

```javascript
console.log('hi'); 
 
 setTimeout(function() { 
     console.log('freecodeCamp') 
 },5000); 
 
 console.log('JS') 
```

Quando a primeira linha é executada, é um console.log () que é uma invocação de função, o que significa que essa função é colocada na pilha de chamadas onde é executada a impressão de 'hi' para o console e, finalmente, é retornada e retirada da pilha. Então, quando o tempo de execução vai para execuções setTimeout (), ele sabe que esta é uma API da web e, portanto, dá para o navegador para lidar com sua execução. O navegador inicia o cronômetro e, em seguida, o tempo de execução do JS coloca o setTimeout () fora da pilha. Ele encontra outra chamada de console.log () e, portanto, envia isso para a pilha de chamadas, a mensagem 'JS' é registrada no console e, finalmente, é retornada e, portanto, o último console.log () é retirado da pilha. Agora a pilha de chamadas está vazia. Enquanto isso, enquanto tudo isso estava acontecendo, o cronômetro termina quando 5 segundos se passaram e o navegador vai em frente e empurra a função de retorno de chamada para a fila de retorno de chamada. Em seguida, o loop de eventos verifica se a pilha de chamadas está livre ou não. Como é gratuito, ele pega a função callback e volta a colocá-la na pilha de chamadas, que executa o código dentro dela. Novamente dentro do código há uma invocação de console.log () para que essa função vá para o topo da pilha e execute o comando 'freecodecamp' no console e, finalmente, ele retorna, o que significa que ele é retirado da pilha e finalmente o retorno da pilha e estamos a fazer.

Para visualizar isso melhor, experimente esta ferramenta por Phillip Roberts- [Loupe Event Loop Visualizer](http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

#### Mais Informações:

[Philip Roberts: O que diabos é o evento loop de qualquer maneira? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

[Modelo de concorrência e loop de eventos MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)