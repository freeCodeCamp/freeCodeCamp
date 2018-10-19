---
title: Variables
localeTitle: Variáveis
---
# Variáveis

Variáveis ​​armazenam valores. Elas são a entidade mais básica usada para armazenar dados como texto, números etc. em um programa.

Em [Java](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java) , as variáveis ​​são [_fortemente tipadas_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22) , o que significa que você precisa definir o tipo para cada variável sempre que você a declarar. Caso contrário, o compilador lançará um erro no [tempo de compilação](https://en.wikipedia.org/wiki/Compile_time) . Portanto, cada variável possui um ' [tipo de dados](https://guide.freecodecamp.org/java/data-types) ' associado a um dos seguintes:

*   Tipo Primitivo: `int` , `short` , `char` , `long` , `boolean` , `byte` , `float` , `double`
*   Tipo Wrapper: `Integer` , `Short` , `Char` , `Long` , `Boolean` , `Byte` , `Float` , `Double`
*   Tipo Referência: `String` , `StringBuilder` , `Calendar` , `ArrayList` , etc.

Você deve ter notado que o **Tipo Wrapper** consiste em tipos escritos exatamente como o **Tipo Primitivo** , exceto pelo alfabeto capitalizado no início (como o **Tipo Referência** ). Isso ocorre porque os Tipos Wrapper são, na verdade, parte dos Tipos Referência mais gerais, mas estão _intimamente ligados_ às suas contrapartes primitivas via [autoboxing e unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html) . Por enquanto, você só precisa saber que o tal Tipo Wrapper existe.

Normalmente, você pode _declarar_ (ou seja, criar) variáveis ​​de acordo com a seguinte sintaxe: < _tipoDeDado_ > < _nomeDaVariavel_ >;

```java
// Tipo de dados Primitivo
 int i; 
 
 // Tipo de dados de Referência 
 Float meuFloat; 
```

Você pode _atribuir_ um valor à variável simultaneamente quando estiver declarando-a (o que é chamado de _inicialização_ ) ou em qualquer lugar no código depois de tê-lo declarado. O símbolo **\=** é usado para o mesmo.

```java
// Inicializar a variável de dados de Tipo Primitivo 'int' para guardar o valor 10
 int i = 10; 
 double quantidade = 10.0; 
 boolean aberto = false; 
 char c = 'a'; // Note as aspas simples
 
 // Variáveis também podem ser declaradas em um comando, e ter valores atribuídos a elas depois.
 Variables can also be declared in one statement, and assigned values later. 
 int j; 
 j = 10; 
 
 // Inicia um objeto Float com o valor de 1.0
 // a variável meuFloat agora aponta para o objeto
 Float meuFloat = new Float(1.0); 
 
 // Bytes são um dos tipos de dados em Java e
 // podem ser representados com esse código
 int valorByte = 0B101; 
 byte outroByte = (byte)0b00100001; 
```

Como é evidente no exemplo acima, as variáveis ​​do tipo Primitivo se comportam de maneira ligeiramente diferente das variáveis ​​do tipo Referência (& Wrapper) - enquanto Variáveis ​​primitivas _armazenam_ o valor real, Variáveis ​​de referência _referem-se a_ um 'objeto' contendo o valor real. 
Você pode descobrir mais nas seções abaixo.

# Outros recursos

*   [Tipos de dados](https://guide.freecodecamp.org/java/data-types)
*   [Classes e Objetos](https://guide.freecodecamp.org/java/classes-and-objects)
