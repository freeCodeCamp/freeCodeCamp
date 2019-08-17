---
title: Control Flow
localeTitle: Controle de fluxo
---
# Controle de fluxo

As instruções de fluxo de controle são exatamente o que o termo significa. São instruções que alteram o fluxo de execução com base em decisões, loops e ramificações para que o programa possa executar blocos de código condicionalmente.

Primeiramente, Java possui as seguintes construções para controle de fluxo:

*   `if`
    
    ```java
    if( <expression that results in a boolean> ){ 
        //code enters this block if the above expression is 'true' 
     } 
    
    ```
    
*   `if...else`
    
    ```java
    if( <expression that results in a boolean> ){ 
        //execute this block if the expression is 'true' 
     } else{ 
        //execute this block if the expression is 'false' 
     } 
    
    ```
    
*   `switch`
    

Switch é uma alternativa para a construção `if...else` quando houver vários valores e casos para verificar.

```java
switch( <integer / String / Enum > ){ 
    case <int/String/Enum>: 
        <statements> 
        break; 
    case <int/String/Enum>: 
        <statements> 
        break; 
    default: 
        <statements> 
 } 
```

Nota: O fluxo do programa `falls through` no próximo `case` se a instrução de `break` estiver faltando. Por exemplo, digamos que você diga o padrão 'Olá' para todos no escritório, mas você é mais gentil com a garota que senta ao seu lado e soa irritada com seu chefe. A maneira de representar seria algo como:

```java
switch(person){ 
    case 'boss': 
        soundGrumpy(); 
        break; 
    case 'neighbour': 
        soundExtraNice(); 
        break; 
    case 'colleague': 
        soundNormal(); 
        break; 
    default: 
        soundNormal(); 
 } 
```

```
Note: The `default` case runs when none of the `case` matches. Remember that when a case has no `break` statement, it `falls through` to the next case and will continue to the subsequent `cases` till a `break` is encountered. Because of this, make sure that each case has a `break` statement. The `default` case does not require a `break` statement. 
```

*   `nested statements`

Qualquer um dos fluxos de controle anteriores pode ser aninhado. O que significa que você pode ter aninhado `if` , `if..else` e `switch..case` . isto é, você pode ter qualquer combinação dessas declarações dentro da outra e não há limitação para a profundidade do `nesting` .

Por exemplo, vamos considerar o seguinte cenário:

*   Se você tem menos de 25 dólares, você consegue uma xícara de café.
*   Se você tem mais de 25 dólares, mas menos de 60 dólares, você tem uma refeição decente.
*   Se você tem mais de 60 dólares, mas menos de 100, você obtém uma refeição decente junto com um copo de vinho.
*   No entanto, quando você tem mais de 100 dólares, dependendo de quem você é, você quer ir para um jantar à luz de velas (com sua esposa) ou você vai para um bar de esportes (com seus amigos).

Uma das maneiras de representar isso será:

```java
int cash = 150; 
 String company = "friends"; 
 
 if( cash < 25 ){ 
    getCoffee(); 
 } else if( cash < 60 ){ 
    getDecentMeal(); 
 } else if( cash < 100 ){ 
    getDecentMeal(); 
    getGlassOfWine(); 
 } else { 
    switch(company){ 
        case "wife": 
            candleLitDinner(); 
            break; 
        case "friends": 
            meetFriendsAtSportsBar(); 
            break; 
        default: 
            getDecentMeal(); 
    } 
 } 
```
*   `Operador ternário`
O operador ternário é um recurso para tomada de decisões com objetivo similar ao do if/else, mas que é codificado em apenas uma linha.

Sintaxe do operador ternário:
(expressão booleana) ? código 1 : código 2;

Ao avaliar a expressão booleana, caso ela seja verdadeira, o código 1, declarado após o ponto de interrogação (?) será executado; do contrário, o programa irá executar o código 2, declarado após os dois pontos (:).

Vamos ver abaixo um exemplo de como o uso do operador ternário em alguns casos, pode ser bem simples:

Exemplo usando if/else

```java
int estoque = //valor recuperado do sistema
 
if (estoque >= 100) {
    System.out.println(“Produto com quantidade suficiente.”);
} else {
    System.out.println(“ATENÇÃO! Faça um novo pedido.”);
}
```
O mesmo exemplo, dessa vez usando o operador ternário:

```java
int estoque = //valor recuperado do sistema

estoque >= 100 ? System.out.println(“Produto com quantidade suficiente.”) : System.out.println(“ATENÇÃO! Faça um novo pedido.”);

```

Quando a necessidade de verificação condicional for simples, o uso do operador ternário pode deixar o código mais simples e mais legível.

Neste exemplo, `meetFriendsAtSportsBar()` será executado.

![:rocket:](https://forum.freecodecamp.org/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJZi/1)
