---
title: Scopes
localeTitle: Escopos
---
Se você já está programando em JavaScript há algum tempo, sem dúvida se depara com um conceito conhecido como `scope` . O que é `scope` ? Por que você deveria ter tempo para aprender?

Na linguagem do programador, o `scope` é o **contexto atual de execução** . Confuso? Vamos dar uma olhada no seguinte trecho de código:
```
var foo = 'Hi, I am foo!'; 
 
 var baz = function () { 
  var bar = 'Hi, I am bar too!'; 
    console.log(foo); 
 } 
 
 baz(); // Hi, I am foo! 
 console.log(bar); // ReferenceError... 
```

Este é um exemplo simples, mas ilustra bem o que é conhecido como _escopo Lexical_ . JavaScript e quase todas as outras linguagens de programação possuem um _escopo Lexical_ . Existe outro tipo de escopo conhecido como _escopo Dinâmico_ , mas não discutiremos isso.

Agora, o termo _escopo Lexical_ parece chique, mas como você verá, é realmente simples em princípio. Em um escopo léxico, existem dois tipos de escopos: o _escopo global_ e um _escopo local_ .

Antes de digitar a primeira linha de código em seu programa, um _escopo global_ é criado para você. Isto contém todas as variáveis ​​que você declara em seu programa **fora de qualquer função** .

No exemplo acima, a variável `foo` está no escopo global do programa, enquanto a `bar` variáveis ​​é declarada dentro de uma função e, portanto, está **no escopo local dessa função** .

Vamos dividir o exemplo linha por linha. Enquanto você pode estar confuso neste momento, eu prometo que você terá uma compreensão muito melhor no momento em que terminar de ler isto.

Na linha 1, estamos declarando a variável `foo` . Nada muito chique aqui. Vamos chamar isso de uma referência de tamanho esquerdo (LHS) para `foo` , porque estamos atribuindo um valor a `foo` e ele está no lado esquerdo do sinal de `equal` .

Na linha 3, estamos declarando uma função e atribuindo-a à variável `baz` . Esta é outra referência do LHS ao `baz` . Estamos atribuindo um valor a ele (lembre-se, funções são valores também!). Esta função é então chamada na linha 8. Esta é uma RHS, ou uma referência do lado direito para `baz` . Estamos recuperando o valor de `baz` , que neste caso é uma função e, em seguida, invocando-o. Outra referência de RHS a `baz` seria se atribuíssemos seu valor a outra variável, por exemplo, `foo = baz` . Esta seria uma referência de LHS para `foo` e uma referência de RHS para `baz` .

As referências de LHS e RHS podem soar confusas, mas são importantes para discutir o escopo. Pense desta maneira: uma referência de LHS está atribuindo um valor à variável, enquanto uma referência de RHS está recuperando o valor da variável. Eles são apenas uma maneira mais curta e conveniente de dizer "recuperar o valor" e "atribuir um valor".

Vamos agora detalhar o que está acontecendo dentro da própria função.

Quando o compilador compila o código dentro de uma função, ele entra no **escopo local** da função.

Na linha 4, a `bar` variáveis ​​é declarada. Esta é uma referência de LHS para `bar` . Na próxima linha, temos uma referência RHS para `foo` dentro do `console.log()` . Lembre-se, estamos recuperando o valor de `foo` e passando-o como um argumento para o método `console.log()` .

Quando temos uma referência RHS para `foo` , o compilador procura a declaração da variável `foo` . O compilador não o encontra na função em si ou no **escopo local da função, de** modo que **sobe um nível: para o escopo global** .

Nesse ponto, você provavelmente está pensando que o escopo tem algo a ver com variáveis. Está correto. Um escopo pode ser considerado como um contêiner para variáveis. Todas as variáveis ​​que são criadas dentro de um escopo local só são acessíveis nesse escopo local. No entanto, todos os escopos locais podem acessar o escopo global. (Eu sei que você provavelmente está ainda mais confuso agora, mas apenas fique comigo por mais alguns parágrafos).

Assim, o compilador vai até o escopo global para encontrar uma referência de LHS para a variável `foo` . Ele encontra um na linha 1, então recupera o valor da referência LHS, que é uma string: `'Hi, I am foo!'` . Essa sequência é enviada para o método `console.log()` e enviada para o console.

O compilador terminou de executar o código dentro da função, então voltamos para a linha 9. Na linha 9, temos uma referência RHS para a `bar` variáveis.

Agora, `bar` foi declarado no escopo local do `baz` , mas há uma referência de RHS para `bar` no escopo global. Como não há referência de LHS para `bar` no escopo global, o compilador não pode encontrar um valor para a `bar` e lança um ReferenceError.

Mas, você pode perguntar, se a função pode olhar para fora de si mesmo para variáveis, ou um escopo local pode espreitar o escopo global para encontrar referências de LHS, por que o escopo global não pode espiar em um escopo local? Bem, é assim que o escopo léxico funciona!
```
... // global scope 
 var baz = function() { 
  ... // baz's scope 
 } 
 ... /// global scope 
```

Este é o mesmo código acima que ilustra o escopo. Isso forma uma espécie de hierarquia que sobe para o escopo global:

`baz -> global` .

Portanto, se houver uma referência de RHS para uma variável dentro do escopo de `baz` , ela poderá ser preenchida por uma referência de LHS para essa variável no escopo global. Mas o oposto **não** é **verdade** .

E se tivéssemos outra função dentro do `baz` ?
```
... // global scope 
 var baz = function() { 
  ... // baz's scope 
 
  var bar = function() { 
     ... // bar's scope. 
  } 
 
 } 
 ... /// global scope 
```

Nesse caso, a hierarquia ou a **cadeia de escopo** ficaria assim:

`bar -> baz -> global`

Quaisquer referências de RHS dentro do escopo local da `bar` podem ser preenchidas por referências de LHS no escopo global ou escopo de `baz` , mas uma referência de RHS no escopo de `baz` não pode ser preenchida por uma referência de LHS no escopo da `bar` .

**Você só pode percorrer uma cadeia de escopo, não para cima.**

Existem outras duas coisas importantes que você deve saber sobre escopos JavaScript.

1.  Os escopos são declarados por funções, não por blocos.
2.  As funções podem ser encaminhadas para referência, as variáveis ​​não podem.

Observe (cada comentário descreve o escopo na linha em que está escrito):

\`\` \` // outer () está no escopo aqui porque as funções podem ser referenciadas
```
function outer() { 
 
    // only inner() is in scope here 
    // because only functions are forward-referenced 
 
    var a = 1; 
 
    //now 'a' and inner() are in scope 
 
    function inner() { 
        var b = 2 
 
        if (a == 1) { 
            var c = 3; 
        } 
 
        // 'c' is still in scope because JavaScript doesn't care 
        // about the end of the 'if' block, only function inner() 
    } 
 
    // now b and c are out of scope 
    // a and inner() are still in scope 
 
 } 
 
 // here, only outer() is in scope 
```

\`\` \`

# Referências

1.  [Escopos e fechos](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures) por Kyle Simpson. Ele entra em mais detalhes de como o mecanismo de escopo funciona, e também tem uma descrição superficial de como o compilador JavaScript funciona, então se você estiver interessado nisso, definitivamente dê uma lida! É grátis no GitHub e pode ser comprado na O'Reilly.
2.  [Segredos do JavaScript Ninja](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/1617292850/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=YMC2TB2C0DFHTQ3V62CA) por John Resig e Bear Bibeault. Um excelente guia para uma compreensão mais aprofundada do JavaScript.