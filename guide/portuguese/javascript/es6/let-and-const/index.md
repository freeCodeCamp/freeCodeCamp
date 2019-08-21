---
title: Let and Const
localeTitle: Let e Const
---
## Let

O `let` é semelhante ao `var`, mas o `let` tem o escopo. `let` só é acessível no nível de bloco que está definido.
```
if (true) { 
 let a = 40; 
 console.log(a); //40 
} 
console.log(a); // undefined 
```

No exemplo acima, a variável "a" é definida dentro de uma instrução `if` e, portanto, não é acessível fora da função.

Outro exemplo:
```
let a = 50; 
let b = 100; 
if (true) { 
 let a = 60; 
 var c = 10; 
 console.log(a/c); // 6 
 console.log(b/c); // 10 
} 
console.log(c); // 10 
console.log(a); // 50 
```

## Const

`const` é usado para atribuir um valor constante à variável. E o valor não pode ser alterado. Está consertado.
```
const a = 50; 
a = 60; // shows error. You cannot change the value of const. 
const b = "Constant variable"; 
b = "Assigning new value"; // shows error. 
```

Considere outro exemplo.
```
const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go']; 
LANGUAGES = "Javascript"; // shows error. 
LANGUAGES.push('Java'); // Works fine. 
console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java'] 
```

Isso pode ser um pouco confuso.

Considere desta maneira. Sempre que você define uma variável `const`, o JavaScript faz referência ao endereço do valor para a variável. Em nosso exemplo, a variável 'LANGUAGES' faz referência à memória alocada para o _array_. Portanto, você não pode alterar a variável para fazer referência a algum outro local de memória posteriormente. Ao longo do programa, ele faz referência apenas ao _array_.
