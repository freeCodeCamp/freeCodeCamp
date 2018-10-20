---
title: Functional
localeTitle: Funcional
---
```javascript
var fun = function(a, b) { 
  var funInstance = {}; 
  funInstance.a = a; 
  funInstance.b = b; 
  funInstance.method1 = function() { 
    // method code here 
  } 
  funInstance.method2 = function() { 
    // method code here 
  } 
  funInstance.method3 = function() { 
    // method code here 
  } 
  return funInstance; 
 } 
 var myFun = fun(1, 2); 
 myFun.method1(); 
```

## Como reconheço isso?

Instanciação de objeto funcional cria uma instância de classe com uma função, como as outras opções. A diferença é que todos os métodos associados também são definidos na função construtora.

## Por que eu usaria isso?

Como um novo conjunto de métodos é criado para cada instância do objeto e pode ocupar uma quantidade considerável de memória, a instanciação funcional é boa para quando você sabe que não estará trabalhando com muitas instâncias. Também é bom ter seu código facilmente compreendido por codificadores JavaScript novos e experientes, já que a instanciação é completamente autocontida e é fácil ver as relações entre os métodos e as instâncias do objeto.

## Quais são os inconvenientes?

O lado negativo com a Instanciação Funcional é que, se você fizesse quaisquer alterações em seu código (como adicionar mais métodos), quaisquer instâncias do objeto que foram criadas antes que essas alterações fossem feitas não seriam atualizadas. Você pode acabar com duas instâncias contendo informações de método diferentes.

* * *

## título: Funcional-Compartilhado

```javascript
var fun = function(a, b) { 
  var funInstance = {}; 
  funInstance.a = a; 
  funInstance.b = b; 
  extend(funInstance, funMethods); 
  return funInstance; 
 } 
 var extend = function(to, from) { 
  for (var key in from) { 
    to[key] = from[key]; 
  } 
 } 
 var funMethods = {}; 
 funMethods.method1 = function() { 
    // method code here 
 } 
 funMethods.method2 = function() { 
    // method code here 
 } 
 funMethods.method3 = function() { 
    // method code here 
 } 
 var myFun = fun(1, 2); 
 myFun.method1(); 
```

## Como reconheço isso?

A principal diferença entre Funcional e Funcional-Compartilhado, é que em Compartilhado Funcional compartilhamos nossos métodos. Em vez de declarar métodos em nossa função Instantiation, temos um objeto separado contendo todos os nossos métodos. Para usar os métodos, os estendemos em cada instância do objeto que está sendo criado.

## Por que eu usaria isso?

Funcional-Compartilhada nos permite usar referências a métodos, em vez de declarar e armazenar nossos métodos para cada instância de nosso objeto, economizando espaço.

## Quais são os inconvenientes?

A desvantagem é que, como os métodos estão sendo referenciados por meio de ponteiros para o objeto de métodos, se atualizarmos o objeto de métodos de alguma forma, as instâncias do objeto que foram criadas antes das alterações não serão atualizadas. Você pode acabar com duas instâncias do objeto referenciando duas versões diferentes dos métodos.

* * *

## título: Prototypal

```javascript
var fun = function(a, b) { 
  var funInstance = Object.create(funMethods); 
  funInstance.a = a; 
  funInstance.b = b; 
  return funInstance; 
 } 
 var funMethods = {}; 
 funMethods.method1 = function() { 
    // method code here 
 } 
 funMethods.method2 = function() { 
    // method code here 
 } 
 funMethods.method3 = function() { 
    // method code here 
 } 
 var myFun = fun(1, 2); 
 myFun.method1(); 
```

## Como reconheço isso?

O Prototypal é semelhante ao Functional-Shared, pois ambos usam um objeto de métodos separado para manter todos os métodos que serão compartilhados entre as instâncias do objeto que estamos criando. A diferença é que podemos usar a cadeia de protótipos. Podemos criar o objeto usando Object.create (prototype) para anexar os métodos à nossa instância de objeto. O objeto que está mantendo nossos métodos compartilhados é considerado o protótipo.

## Por que eu usaria isso?

Se você fizer alterações no seu protótipo depois de criar uma instância de objeto, essa instância será atualizada. Você não terminará com duas instâncias com o mesmo protótipo que tem métodos diferentes.

## Quais são os inconvenientes?

As desvantagens de usar esse método é que ele requer etapas extras e código extra. Nós temos que não apenas criar e retornar nosso objeto como antes, mas também temos que decorá-lo.

* * *

## título: Pseudoclassical

```javascript
var Fun = function(a, b) { 
  // this = Object.create(Fun.prototype); 
  this.a = a; 
  this.b = b; 
  // return this; 
 } 
 Fun.prototype.method1 = function() { 
    // method code here 
 } 
 Fun.prototype.method2 = function() { 
    // method code here 
 } 
 Fun.prototype.method3 = function() { 
    // method code here 
 } 
 var myFun = new Fun(1, 2); 
 myFun.method1(); 
```

## Como reconheço isso?

A instanciação pseudo-clássica contém, de longe, a menor quantidade de código. Em vez de criar um novo objeto e retorná-lo, a nova palavra-chave faz isso para nós. Sob o capô, quando você usa a nova palavra-chave para instanciar um objeto, você cria um novo objeto usando this = Object.create (Object.prototype), em que isso se refere ao protótipo que é nomeado após a nova palavra-chave. Quando estamos definindo nossos métodos, usamos a palavra-chave prototype.

## Por que eu usaria isso?

Diz-se que o pseudo-clássico é o padrão de instanciação mais rápido, o que é útil se você estiver criando dezenas de milhares de instâncias. Também é o mais otimizado, pois utiliza a funcionalidade Javascript.

## Quais são os inconvenientes?

A desvantagem da Instanciação Pseudo-Clássica é que ela exige um pouco mais de conhecimento sobre o que o JavaScript está fazendo, especialmente com a palavra-chave this. Isso torna esse tipo de instanciação de objetos um pouco mais complexo para entender, especialmente se alguém estiver lendo seu código