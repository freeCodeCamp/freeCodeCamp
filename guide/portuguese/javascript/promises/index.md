---
title: Promises
localeTitle: Promessas
---
## Promessas

JavaScript é single threaded, o que significa que dois bits de script não podem ser executados ao mesmo tempo; eles têm que correr um após o outro. Um Promise é um objeto que representa a conclusão (ou falha) final de uma operação assíncrona e seu valor resultante.

```javascript
var promise = new Promise(function(resolve, reject) { 
  // do thing, then… 
 
  if (/* everything worked */) { 
    resolve("See, it worked!"); 
  } 
  else { 
    reject(Error("It broke")); 
  } 
 }); 
```

## Uma Promessa existe em um desses estados

*   Pendente: estado inicial, nem cumprido nem rejeitado.
*   Cumprida: operação concluída com sucesso.
*   Rejeitado: falha na operação.

O objeto Promise funciona como proxy para um valor não necessariamente conhecido quando a promessa é criada. Ele permite que você associe os manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que os métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promessa de fornecer o valor em algum momento no futuro.

## Usando 'Then' (Promise Chaining)

Para fazer várias chamadas assíncronas e sincronizá-las uma após a outra, você pode usar o encadeamento de promessas. Isso permite usar um valor da primeira promessa em retornos de chamada posteriores subsequentes.

```javascript
Promise.resolve('some') 
  .then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some') 
    return new Promise(function(resolve, reject) { 
      setTimeout(function() { 
        string += 'thing'; 
        resolve(string); 
      }, 1); 
    }); 
  }) 
  .then(function(string) { // <-- This will happen after the above .then's new Promise resolves 
    console.log(string); // <-- Logs 'something' to the console 
  }); 
```

## API Promise

Existem 4 métodos estáticos na classe Promise:

*   Promise.resolve
*   Promise.reject
*   Promise.all
*   Promise.race

## Promessas podem ser encadeadas

Ao escrever Promessas para resolver um problema em particular, você pode encadear as mesmas para formar a lógica.

```javascript
var add = function(x, y) { 
  return new Promise((resolve,reject) => { 
    var sum = x + y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not add the two values!")); 
    } 
  }); 
 }; 
 
 var subtract = function(x, y) { 
  return new Promise((resolve, reject) => { 
    var sum = x - y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not subtract the two values!")); 
    } 
  }); 
 }; 
 
 // Starting promise chain 
 add(2,2) 
  .then((added) => { 
    // added = 4 
    return subtract(added, 3); 
  }) 
  .then((subtracted) => { 
    // subtracted = 1 
    return add(subtracted, 5); 
  }) 
  .then((added) => { 
    // added = 6 
    return added * 2; 
  }) 
  .then((result) => { 
    // result = 12 
    console.log("My result is ", result); 
  }) 
  .catch((err) => { 
    // If any part of the chain is rejected, print the error message. 
    console.log(err); 
  }); 
```

Isso é útil para seguir um paradigma de _programação funcional_ . Criando funções para manipulação de dados você pode encadear-los juntos para montar um final resultado. Se em algum ponto da cadeia de funções um valor for _rejeitado,_ a cadeia irá pular para o manipulador `catch()` mais próximo.

Para mais informações sobre Programação [Funcional](https://en.wikipedia.org/wiki/Functional_programming) : [Programação Funcional](https://en.wikipedia.org/wiki/Functional_programming)

## Geradores de Função

Em versões recentes, o JavaScript introduziu mais maneiras de lidar com o Promises de maneira nativa. Uma dessas maneiras é o gerador de funções. Geradores de funções são funções "pausáveis". Quando usados ​​com o Promises, os geradores podem tornar o uso muito mais fácil de ler e parecer "síncrono".

```javascript
const myFirstGenerator = function* () { 
  const one = yield 1; 
  const two = yield 2; 
  const three = yield 3; 
 
  return 'Finished!'; 
 } 
 
 const gen = myFirstGenerator(); 
```

Aqui está nosso primeiro gerador, que você pode ver pela `function*` syntax. A variável `gen` que declaramos não rodará `myFirstGenerator` , mas sim "este gerador está pronto para uso".

```javascript
console.log(gen.next()); 
 // Returns { value: 1, done: false } 
```

Quando `gen.next()` ele irá interromper o gerador e continuar. Como esta é a primeira vez que chamamos `gen.next()` ele executará o `yield 1` e fará `yield 1` pausa até chamarmos `gen.next()` novamente. Quando o `yield 1` é chamado, ele retornará para nós o `value` que foi gerado e se o gerador está ou não `done` .

```javascript
console.log(gen.next()); 
 // Returns { value: 2, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 3, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 'Finished!', done: true } 
 
 console.log(gen.next()); 
 // Will throw an error 
```

Conforme continuamos chamando `gen.next()` ele continuará indo para o próximo `yield` e pausando a cada vez. Uma vez que não há mais `yield` , ele continuará a executar o restante do gerador, que neste caso simplesmente retorna `'Finished!'` . Se você chamar `gen.next()` novamente, ele lançará um erro quando o gerador terminar.

Agora, imagine se cada `yield` deste exemplo fosse uma `Promise` , o próprio código pareceria extremamente síncrono.

### Promise.all (iterável) é muito útil para vários pedidos para diferentes fontes

O método Promise.all (iterável) retorna um único Promise que resolve quando todas as promessas no argumento iterável foram resolvidas ou quando o argumento iterável não contém promessas. Ele rejeita com a razão da primeira promessa que rejeita.

```javascript
var promise1 = Promise.resolve(catSource); 
 var promise2 = Promise.resolve(dogSource); 
 var promise3 = Promise.resolve(cowSource); 
 
 Promise.all([promise1, promise2, promise3]).then(function(values) { 
  console.log(values); 
 }); 
 // expected output: Array ["catData", "dogData", "cowData"] 
```

### Mais Informações

Para mais informações sobre promessas: [Promessas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)