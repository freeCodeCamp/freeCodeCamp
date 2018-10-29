---
title: Basic Operations
localeTitle: Operações básicas
---
# Operações básicas

Java suporta as seguintes operações em variáveis:

*   **Aritmética** : `Addition (+)` , `Subtraction (-)` , `Multiplication (*)` , `Division (/)` , `Modulus (%)` , `Increment (++)` , `Decrement (--)` .
*   **Concatenação de strings** : `+` pode ser usado para concatenação de strings, mas subtração `-` em uma string não é uma operação válida.
*   **Relacional** : `Equal to (==)` , `Not Equal to (!=)` , `Greater than (>)` , `Less than (<)` , `Greater than or equal to (>=)` , `Less than or equal to (<=)`
*   **Bit a bit** : `Bitwise And (&)` , `Bitwise Or (|)` , `Bitwise XOR (^)` , `Bitwise Compliment (~)` , `Left shift (<<)` , `Right Shift (>>)` , `Zero fill right shift (>>>)`
*   **Lógico** : `Logical And (&&)` , `Logical Or (||)` , `Logical Not (!)`
*   **Tarefa** : `=` , `+=` , `-=` , `*=` , `/=` , `%=` , `<<=` , `>>=` , `&=` , `^=` , `|=`
*   **Outros** : `Conditional/Ternary(?:)` , `instanceof`

Embora a maioria das operações seja autoexplicativa, o Operador Condicional (Ternary) funciona da seguinte maneira:

`expression that results in boolean output ? return this value if true : return this value if false;`

Exemplo: Condição verdadeira:

```java
    int x = 10; 
    int y = (x == 10) ? 5 : 9; // y will equal 5 since the expression x == 10 evaluates to true 
```

Condição Falsa:

```java
    int x = 25; 
    int y = (x == 10) ? 5 : 9; // y will equal 9 since the expression x == 10 evaluates to false 
```

A instância do operador é usada para verificação de tipo. Pode ser usado para testar se um objeto é uma instância de uma classe, uma subclasse ou uma interface. Formato geral _**instância** do objeto da classe / subclasse / interface_

Aqui está um programa para ilustrar o operador instanecof: \`\` \`Java Pessoa obj1 = new Person (); Pessoa obj2 = new Boy ();
```
    // As obj is of type person, it is not an 
    // instance of Boy or interface 
    System.out.println("obj1 instanceof Person: " +  (obj1 instanceof Person)); /*it returns true since obj1 is an instance of person */ 
```

\`\` \`