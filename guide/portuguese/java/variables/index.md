---
title: Variables
localeTitle: Variáveis
---
# Variáveis

Variáveis ​​armazenam valores. Elas são a entidade mais básica usada para armazenar dados como texto, números etc. num programa.

Em [Java](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java) , as variáveis ​​são [_fortemente tipadas_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22) , o que significa que você precisa definir o tipo para cada variável sempre que você a declarar. Caso contrário, o compilador lançará um erro no [tempo de compilação](https://en.wikipedia.org/wiki/Compile_time) . Portanto, cada variável possui um ' [tipo de dados](https://guide.freecodecamp.org/java/data-types) ' associado a um dos seguintes:

*   Tipo primitivo: `int` , `short` , `char` , `long` , `boolean` , `byte` , `float` , `double`
*   Tipo de embalagem: `Integer` , `Short` , `Char` , `Long` , `Boolean` , `Byte` , `Float` , `Double`
*   Tipo de referência: `String` , `StringBuilder` , `Calendar` , `ArrayList` , etc.

Você deve ter notado que o **Tipo de Wrapper** consiste em tipos escritos exatamente como o **Tipo Primitivo** , exceto pelo alfabeto capitalizado no início (como o **Tipo de Referência** ). Isso ocorre porque os tipos de invólucro são, na verdade, parte dos tipos de referência mais gerais, mas estão _intimamente ligados_ às suas contrapartes primitivas via [autoboxing e unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html) . Por enquanto, você só precisa saber que tal tipo de wrapper existe.

Normalmente, você pode _declarar_ (ou seja, criar) variáveis ​​de acordo com a seguinte sintaxe: < _data-type_ > < _variableName_ >;

```java
// Tipo de Dados Primitivo 
 int i; 
 
 // Tipo Dados de Referência 
 Float myFloat; 
```

Você pode _atribuir_ um valor à variável simultaneamente quando a estiver declarando (o que é chamado de _inicialização_ ) ou em qualquer lugar no código depois de a ter declarado. O símbolo **\=** é usado para o mesmo.

```java
// Inicializar a variável de Tipo de Dados Primitivo 'int' com o valor 10 
 int i = 10; 
 double amount = 10.0; 
 boolean isOpen = false; 
 char c = 'a'; // Note as aspas simples
 
 //As variáveis tambem podem ser declaradas, e mais tarde designar o seu valor
 int j; 
 j = 10; 
 
 // Inicializar um objeto Float com o valor 1.0 
 // a variável myFloat aponta agora para o objeto
 Float myFloat = new Float(1.0); 
 
 //Bytes são um dos tipos em java e podem assim ser representados
 int byteValue = 0B101; 
 byte anotherByte = (byte)0b00100001; 
```

Como é evidente no exemplo acima, as variáveis ​​do tipo Primitivo comportam-se de maneira ligeiramente diferente das variáveis ​​do tipo Referência (& Wrapper) - enquanto Variáveis ​​primitivas _armazenam_ o valor real, Variáveis ​​de referência _referem-se a_ um 'objeto' contendo o valor real. Você pode descobrir mais nas seções abaixo.

# Outros recursos

*   [Tipos de dados](https://guide.freecodecamp.org/java/data-types)
*   [Classes e Objetos](https://guide.freecodecamp.org/java/classes-and-objects)
