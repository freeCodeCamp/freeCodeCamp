---
title: Arguments
localeTitle: Argumentos
---
O objeto arguments é um **objeto do tipo array** _(em que a estrutura do objeto é semelhante à de um array, mas não deve ser considerado um array, pois tem toda a funcionalidade de um objeto)_ que armazena todos os argumentos que você passou para uma função e é proprietária dessa função em particular. Se você fosse passar 3 argumentos para uma função, digamos `storeNames()` , esses 3 argumentos seriam armazenados dentro de um objeto chamado **arguments** e ficaria assim quando `storeNames("Mulder", "Scully", "Alex Krycek")` os argumentos `storeNames("Mulder", "Scully", "Alex Krycek")` para a nossa função:

*   Primeiro, nós declaramos uma função e a fazemos retornar o objeto arguments.

\`\` \`javascript  
function storeNames () {argumentos de retorno; }
```
*   Then, when we execute that function with **n arguments**, 3 in this case, it will return the object to us and it will **look like** an array. We can convert it to an array, but more on that later... 
```

javascript // Se nós executarmos a seguinte linha no console: storeNames ("Mulder", "Scully", "Alex Kryceck"); // A saída será {'0': 'Mulder', '1': 'Scully', '2': 'Alex Kryceck'}
```
If you want to know more about this, such as converting it to an array or the optimization problem that comes with using the _slice(_) method and how to solve it, click on **read more** (Gitter Chat Only). 
 
 ## Treat it as an array 
 
 You can invoke arguments by using `arguments[n]` (where _n_ is the index of the argument in the array-like object) but if you want to use it as an array for iteration purposes or applying array methods to it, you need to _convert it to an array_ by declaring a variable and using the Array.prototype.slice.call method (because _arguments_ is not an array): 
```

javascript var args = Array.prototype.slice.call (argumentos);

// ou o caminho es6: var args = Array.from (argumentos)
```
Since **slice()** has two (the parameter **end** is optional) parameters, you can grab a certain portion of the arguments by specifying (using the _slice.call()_ method renders these two parameters optional, not just _end_) the beginning and the ending of your portion; check out the following code: 
```

javascript function getGrades () { var args = Array.prototype.slice.call (argumentos, 1, 3); return args; }

// Vamos produzir isso! console.log (getGrades (90, 100, 75, 40, 89, 95));

// SAÍDA DEVE SER: // // \[100, 75\] <- Por quê? Porque começou no índice 1 e parou no índice 3 // então, o índice 3 (40) não foi levado em consideração. // // Se nós removermos o parâmetro '3', deixando apenas (arguments, 1) nós teríamos // cada argumento do índice 1: \[100, 75, 40, 89, 95\].
```
### Optimization issues with Array.slice() 
 
 There is a little problem, it's not recommended to use slice in the arguments object (optimization reasons)... 
 
 > **Important**: You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object. 
 > 
 > _by_ **_Mozilla Developer Network_** <a href='https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Functions/arguments' target='_blank' rel='nofollow'>(reference)<a> 
 
 
 
 So, what other method is available to convert _arguments_ to an array? I recommend the for-loop (not the for-in loop), you can do it like this: 
```

javascript var args = \[\]; // Matriz vazia, primeiro. para (var i = 0; i <argumentos.length; i ++) { args.push (argumentos \[i\]) } // Now 'args' é uma matriz que contém seus argumentos. \`\` \`

Para mais informações sobre os problemas de otimização:  
Assassinos de Otimização: [Gerenciando Argumentos](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)

### ES6 rest parameter como uma maneira de contornar o objeto arguments

No ES2015 / ES6 é possível usar o parâmetro rest ( `...` ) em vez do objeto arguments na maioria dos lugares. Digamos que temos a seguinte função (não-ES6):
```
function getIntoAnArgument() { 
    var args = arguments.slice(); 
    args.forEach(function(arg) { 
        console.log(arg); 
    }); 
 } 
```

Essa função pode ser substituída no ES6 por:
```
function getIntoAnArgument(...args) { 
    args.forEach(arg => console.log(arg)); 
 } 
```

note que também usamos uma função de seta para encurtar o retorno de chamada forEach!

O objeto de argumentos não está disponível dentro do corpo de uma função de seta.

O parâmetro rest deve sempre vir como o último argumento na sua definição de função.  
`function getIntoAnArgument(arg1, arg2, arg3, ...restOfArgs /*no more arguments allowed here*/) { //function body }`