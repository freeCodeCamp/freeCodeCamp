---
title: Variables
localeTitle: Variáveis
---
# Variáveis

Variáveis ​​armazenam valores. Eles são a entidade mais básica usada para armazenar dados como texto, números etc. em um programa.

Em [Java](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java) , as variáveis ​​são [_fortemente tipadas_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22) , o que significa que você precisa definir o tipo para cada variável sempre que você a declarar. Caso contrário, o compilador lançará um erro no [tempo de compilação](https://en.wikipedia.org/wiki/Compile_time) . Portanto, cada variável possui um ' [tipo de dados](https://guide.freecodecamp.org/java/data-types) ' associado a um dos seguintes:

*   Tipo primitivo: `int` , `short` , `char` , `long` , `boolean` , `byte` , `float` , `double`
*   Tipo de embalagem: `Integer` , `Short` , `Char` , `Long` , `Boolean` , `Byte` , `Float` , `Double`
*   Tipo de referência: `String` , `StringBuilder` , `Calendar` , `ArrayList` , etc.

Você deve ter notado que o **Tipo de Wrapper** consiste em tipos escritos exatamente como o **Tipo Primitivo** , exceto pelo alfabeto capitalizado no início (como o **Tipo de Referência** ). Isso ocorre porque os tipos de invólucro são, na verdade, parte dos tipos de referência mais gerais, mas estão _intimamente ligados_ às suas contrapartes primitivas via [autoboxing e unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html) . Por enquanto, você só precisa saber que tal tipo de wrapper existe.

Normalmente, você pode _declarar_ (ou seja, criar) variáveis ​​de acordo com a seguinte sintaxe: < _data-type_ > < _variableName_ >;

```java
// Primitive Data Type 
 int i; 
 
 // Reference Data Type 
 Float myFloat; 
```

Você pode _atribuir_ um valor à variável simultaneamente quando estiver declarando-a (o que é chamado de _inicialização_ ) ou em qualquer lugar no código depois de tê-lo declarado. O símbolo **\=** é usado para o mesmo.

```java
// Initialise the variable of Primitive Data Type 'int' to store the value 10 
 int i = 10; 
 double amount = 10.0; 
 boolean isOpen = false; 
 char c = 'a'; // Note the single quotes 
 
 //Variables can also be declared in one statement, and assigned values later. 
 int j; 
 j = 10; 
 
 // initiates an Float object with value 1.0 
 // variable myFloat now points to the object 
 Float myFloat = new Float(1.0); 
 
 //Bytes are one of types in Java and can be 
 //represented with this code 
 int byteValue = 0B101; 
 byte anotherByte = (byte)0b00100001; 
```

Como é evidente no exemplo acima, as variáveis ​​do tipo Primitivo se comportam de maneira ligeiramente diferente das variáveis ​​do tipo Referência (& Wrapper) - enquanto Variáveis ​​primitivas _armazenam_ o valor real, Variáveis ​​de referência _referem-se a_ um 'objeto' contendo o valor real. Você pode descobrir mais nas seções abaixo.

# Outros recursos

*   [Tipos de dados](https://guide.freecodecamp.org/java/data-types)
*   [Classes e Objetos](https://guide.freecodecamp.org/java/classes-and-objects)