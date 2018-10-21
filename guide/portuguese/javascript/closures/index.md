---
title: Closures
localeTitle: Fechamentos
---
# Fechamentos

Um fechamento é a combinação de uma função e o ambiente léxico (escopo) dentro do qual essa função foi declarada. Closures são uma propriedade fundamental e poderosa do Javascript. Este artigo discute o 'como' e 'por que' sobre o fechamento:

### Exemplo

```js
//we have an outer function named walk and an inner function named fly 
 
 function walk (){ 
 
  var dist = '1780 feet'; 
 
  function fly(){ 
    console.log('At '+dist); 
  } 
 
  return fly; 
 } 
 
 var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc 
 //you would expect that once the walk function above is run 
 //you would think that JavaScript has gotten rid of the 'dist' var 
 
 flyFunc(); //Logs out 'At 1780 feet' 
 //but you still can use the function as above 
 //this is the power of closures 
```

### Outro exemplo

```js
function by(propName) { 
    return function(a, b) { 
        return a[propName] - b[propName]; 
    } 
 } 
 
 const person1 = {name: 'joe', height: 72}; 
 const person2 = {name: 'rob', height: 70}; 
 const person3 = {name: 'nicholas', height: 66}; 
 
 const arr_ = [person1, person2, person3]; 
 
 const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ] 
```

O encerramento "lembra" o ambiente em que foi criado. Esse ambiente consiste em quaisquer variáveis ​​locais que estavam no escopo no momento em que o encerramento foi criado.

```js
function outside(num) { 
  var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers' 
  return function inside() { // This is the function which the closure 'remembers' 
    console.log(rememberedVar) 
  } 
 } 
 
 var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside' 
 var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside' 
 
 remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) => 7 
 remember2(); // This now executes the function 'inside' which console.logs(rememberedVar) => 9 
```

Os fechamentos são úteis porque permitem que você 'lembre' de dados e, em seguida, permite operar esses dados por meio de funções retornadas. Isso permite que o javascript emule métodos privados encontrados em outras linguagens de programação. Métodos privados são úteis para restringir o acesso ao código, bem como gerenciar seu namespace global.

### Variáveis ​​e métodos privados

Fechamentos também podem ser usados ​​para encapsular dados / métodos privados. Dê uma olhada neste exemplo:

```javascript
const bankAccount = (initialBalance) => { 
  const balance = initialBalance; 
 
  return { 
    getBalance: function() { 
      return balance; 
    }, 
    deposit: function(amount) { 
      balance += amount; 
      return balance; 
    }, 
  }; 
 }; 
 
 const account = bankAccount(100); 
 
 account.getBalance(); // 100 
 account.deposit(10); // 110 
```

Neste exemplo, não poderemos acessar o `balance` de qualquer lugar fora da função `bankAccount` , o que significa que acabamos de criar uma variável privada. Onde está o fechamento? Bem, pense no que `bankAccount()` está retornando. Ele realmente retorna um objeto com um monte de funções dentro dele, e ainda quando chamamos `account.getBalance()` , a função é capaz de "lembrar" sua referência inicial ao `balance` . Esse é o poder do fechamento, em que uma função "lembra" seu escopo léxico (escopo de tempo de compilação), mesmo quando a função é executada fora desse escopo léxico.

**Emulando variáveis ​​com escopo de bloco.**

Javascript não tinha um conceito de variáveis ​​com escopo de bloco. Isso significa que, ao definir uma variável dentro de um forloop, por exemplo, essa variável também é visível de fora do forloop. Então, como os fechamentos podem nos ajudar a resolver esse problema? Vamos dar uma olhada.

```javascript
    var funcs = []; 
 
    for(var i = 0; i < 3; i++){ 
        funcs[i] = function(){ 
            console.log('My value is ' + i);  //creating three different functions with different param values. 
        } 
    } 
 
    for(var j = 0; j < 3; j++){ 
        funcs[j]();             // My value is 3 
                                // My value is 3 
                                // My value is 3 
    } 
```

Como a variável i não tem escopo de bloco, seu valor dentro de todas as três funções foi atualizado com o contador de loops e criou valores maliciosos. O encerramento pode nos ajudar a resolver esse problema criando um instantâneo do ambiente em que a função estava quando foi criada, preservando seu estado.

```javascript
    var funcs = []; 
 
    var createFunction = function(val){ 
        return function() {console.log("My value: " + val);}; 
    } 
 
    for (var i = 0; i < 3; i++) { 
        funcs[i] = createFunction(i); 
    } 
    for (var j = 0; j < 3; j++) { 
        funcs[j]();                 // My value is 0 
                                    // My value is 1 
                                    // My value is 2 
    } 
```

As últimas versões do javascript es6 + tem uma nova palavra-chave chamada let que pode ser usada para dar à variável um blockcope. Há também muitas funções (forEach) e bibliotecas inteiras (lodash.js) dedicadas a resolver problemas como os explicados acima. Eles certamente podem aumentar sua produtividade, no entanto, é extremamente importante ter conhecimento de todos esses problemas ao tentar criar algo grande.

Os fechamentos têm muitos aplicativos especiais que são úteis ao criar grandes programas de javascript.

1.  Emulando Variáveis ​​Privadas ou Encapsulamento
2.  Fazendo chamadas laterais do servidor assíncrono
3.  Criando uma variável com escopo de bloco.

**Emulando variáveis ​​privadas.**

Ao contrário de muitas outras linguagens, o Javascript não possui um mecanismo que permita criar variáveis ​​de instância encapsuladas dentro de um objeto. Ter variáveis ​​de instância públicas pode causar muitos problemas ao criar programas de médio a grande porte. No entanto, com encerramentos, esse problema pode ser atenuado.

Assim como no exemplo anterior, você pode criar funções que retornam literais de objeto com métodos que têm acesso às variáveis ​​locais do objeto sem expô-las. Assim, tornando-os efetivamente privados.

Os fechamentos também podem ajudá-lo a gerenciar seu namespace global para evitar colisões com dados compartilhados globalmente. Geralmente, todas as variáveis ​​globais são compartilhadas entre todos os scripts em seu projeto, o que definitivamente lhe dará muitos problemas ao criar programas de médio a grande porte. É por isso que os autores de bibliotecas e módulos usam closures para ocultar os métodos e dados de um módulo inteiro. Isso é chamado de padrão de módulo, ele usa uma expressão de função imediatamente invocada que exporta apenas certas funcionalidades para o mundo externo, reduzindo significativamente a quantidade de referências globais.

Aqui está uma pequena amostra de um esqueleto de módulo.

```javascript
var myModule = (function() = { 
    let privateVariable = 'I am a private variable'; 
 
    let method1 = function(){ console.log('I am method 1'); }; 
    let method2 = function(){ console.log('I am method 2, ', privateVariable); }; 
 
    return { 
        method1: method1, 
        method2: method2 
    } 
 }()); 
 
 myModule.method1(); // I am method 1 
 myModule.method2(); // I am method 2, I am a private variable 
```

Closures são úteis para capturar novas instâncias de variáveis ​​privadas contidas no ambiente 'lembrado', e essas variáveis ​​só podem ser acessadas através da função ou métodos retornados.

### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  
[Fechamentos de Javascript](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)