---
title: Declare Variables
localeTitle: Declarar Variáveis
---
# Declarar Variáveis

As declarações de variáveis ​​JavaScript podem ser classificadas em três componentes distintos: o tipo de variável, o nome da variável e o valor da variável.

```js
    var myName = "Rafael"; 
```

Vamos quebrar a linha de código acima nas partes que compõem:

```js
    var/const/let 
```

Variáveis ​​JavaScript podem ter três tipos de declaração: var, const e let. Variáveis ​​do tipo Var são globais, se declaradas fora de uma função, podem ser acessadas por qualquer arquivo JS (ou pelo console) e, se criadas dentro de uma função, são acessíveis independentemente do escopo do bloco. As variáveis ​​do tipo let são limitadas no escopo para seu bloco. Veja o exemplo abaixo para a diferença.

```js
     function varTest() { 
      var x = 1; 
      if (true) { 
        var x = 2;  // same variable! 
        console.log(x);  // 2 
      } 
      console.log(x);  // 2 
    } 
 
    function letTest() { 
      let x = 1; 
      if (true) { 
        let x = 2;  // different variable 
        console.log(x);  // 2 
      } 
      console.log(x);  // 1 
    } 
```

Variáveis ​​do tipo Const têm o mesmo escopo que as variáveis ​​let (escopo de bloco), mas são imutáveis. Qualquer valor que uma variável do tipo const deve ser atribuída, deve acontecer quando a variável é declarada, e o JavaScript lançará um erro se a variável for alterada posteriormente.

```js
    const genre = "non-fiction"; 
    console.log(genre); // "non-fiction"; 
    genre = "fantasy"; // error 
```

Agora que podemos determinar qual é o tipo de variável, vamos dar uma olhada no nome. Os nomes das variáveis ​​JavaScript são gravados no formato de `camel case` . Um exemplo de caso de camelo é: `camelCase` . No contexto do nosso exemplo:

```js
    myName 
```

O nome é também vamos acessar a variável novamente mais tarde:

```js
    console.log(myName); // "Rafael" 
```

Finalmente, nosso valor:

```js
    "Rafael" 
```

O JavaScript é digitado dinamicamente, o que significa que qualquer variável pode representar qualquer tipo de dado em qualquer momento. Por exemplo:

```js
    var example = "This is an example"; 
    example = [0, 1, 2, 3] 
    example = {test: "Result"} 
    example = 5 
```

Todas essas instruções são perfeitamente válidas - variáveis ​​JavaScript podem pular de string para array para objeto para inteiro.

### Declare o objeto como const

Como mencionado acima, a variável const é imutável, o valor atribuído a tal variável no momento da declaração não pode ser atualizado, mas há um ponto a ser observado na declaração do objeto com const. O objeto do tipo const também não pode ser atualizado uma vez definido, mas as propriedades do objeto cab são. Por exemplo.

```js
    const Car1 = { 
        name: 'BMW', 
        model: 'X1', 
        color: 'black' 
    } 
```

Aqui, não podemos atualizar o objeto, mas podemos atualizar as propriedades acessando o operador ponto (.) Como abaixo.

```js
    Car1.color = 'Red'; 
    console.log(Car1); 
    O/P - {name: "BMW", model: "X1", color: "Red"} 
```

Se precisarmos tornar o objeto enitre imutável (incluindo propriedades), então temos que usar o método freeze.