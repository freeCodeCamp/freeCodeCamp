---
title: Data Types
localeTitle: Tipos de dados
---
# Tipos de dados

Java é uma linguagem fortemente tipada. Isso significa que, em Java, cada tipo de dados possui sua própria definição estrita. Não há conversões implícitas de tipo de dados quando ocorrem conflitos entre os tipos de dados. Qualquer alteração nos tipos de dados deve ser explicitamente declarada pelo programador.

Java define oito tipos de dados primitivos: `byte` , `short` , `int` , `long` , `char` , `float` , `double` e `boolean` .

Eles são divididos nas seguintes categorias:

*   Inteiros
*   Números de ponto flutuante
*   Personagens
*   Tipo booleano

Os detalhes de cada um dos tipos de dados são fornecidos abaixo:

## Inteiros:

Estes são de quatro tipos: `byte` , `short` , `int` , `long` . É importante notar que estes são valores positivos e negativos assinados. Inteiros assinados são armazenados em um computador usando [o complemento de 2](http://www.ele.uri.edu/courses/ele447/proj_pages/divid/twos.html) . Consiste em valores negativos e positivos, mas em diferentes formatos como `(-1 to -128)` ou `(0 to +127)` . Um inteiro não assinado pode conter um valor positivo maior e nenhum valor negativo como `(0 to 255)` . Ao contrário do C ++, não há nenhum inteiro sem sinal em Java.

### byte:

O tipo de dados de byte é um inteiro de complemento de dois bits assinado de 8 bits.
```
Wrapper Class: Byte 
 
 Minimum value: -128 (-2^7) 
 
 Maximum value: 127 (2^7 -1) 
 
 Default value: 0 
 
 Example: byte a = 10 , byte b = -50; 
```

### baixo:

Tipo de dados curto é um inteiro de complemento de dois de 16 bits assinado.
```
Wrapper Class: Short 
 
 Minimum value: -32,768 (-2^15) 
 
 Maximum value: 32,767 (2^15 -1) 
 
 Default value: 0. 
 
 Example: short s = 10, short r = -1000; 
```

### int:

O tipo de dados int é um inteiro de complemento de dois de 32 bits assinado. Geralmente, ele é usado como o tipo de dados padrão para valores integrais, a menos que haja uma preocupação com a memória.
```
Wrapper Class: Integer 
 
 Minimum value: (-2^31) 
 
 Maximum value: (2^31 -1) 
 
 The default value: 0. 
 
 Example: int a = 50000, int b = -20 
```

### longo:

O tipo de dados longo é um inteiro de complemento de dois com sinal de 64 bits.
```
Wrapper Class: Long 
 
 Minimum value: (-2^63) 
 
 Maximum value: (2^63 -1) 
 
 Default value: 0L. 
 
 Example: long a = 100000L, long b = -600000L; 
 
 By default all integer type variable is "int". So long num=600851475143  will give an error. 
 But it can be specified as long by appending the suffix L (or l) 
```

## Ponto flutuante:

Estes também são chamados números reais e são usados ​​para expressões que envolvem precisão fracionária. Estes são de dois tipos: `float` , `double` . A flutuação é realmente evitada no caso de dados precisos, como dados de moeda ou pesquisa.

### flutuador:

O tipo de dados float é um [ponto flutuante IEEE 754 de](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) 32 bits de precisão simples.
```
Wrapper Class: Float 
 
 Float is mainly used to save memory in large arrays of floating point numbers. 
 
 Default value: 0.0f. 
 
 Example: float f1 = 24.5f; 
 
 The default data type of floating-point number is double. So float f = 24.5 will introduce an error. 
 However, we can append the suffix F (or f) to designate the data type as float. 
```

### em dobro:

O tipo de dado duplo é um [ponto flutuante IEEE 754 de](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) 64 bits e precisão dupla. Esse tipo de dados geralmente é a opção padrão. Esse tipo de dados nunca deve ser usado para valores precisos, como moeda.
```
Wrapper Class: Double 
 
 This data type is generally used as the default data type for decimal values. 
 
 Default value: 0.0d. 
 
 Example: double d1 = 123.400778; 
```

## Personagem:

Usamos esse tipo de dados para armazenar caracteres. Isso não é o mesmo que o char em C / C ++. Java usa um `UNICODE` , conjunto de caracteres aceito internacionalmente. Char em Java tem 16bits, enquanto que em C / C ++ é 8bits.
```
Wrapper Class: Character 
 
 Minimum value: '\u0000' (or 0). 
 
 Maximum value: '\uffff' (or 65,535). 
 
 Default value: null ('\u0000'). 
 
 Example: char letterA ='a'; 
```

## Boleano:

Isso é usado para armazenar valores lógicos. Um tipo booleano pode ter um valor verdadeiro ou falso. Esse tipo geralmente é retornado por operadores relacionais.
```
There are only two possible values: true and false. 
 
 Wrapper Class: Boolean 
 
 This data type is used for simple flags that track true/false conditions. 
 
 Default value is false. 
 
 Example: boolean b = true, boolean b1 = 1(this is not possible in java and give incompatible type error), boolean b2; 
```

## Tipos de dados de referência:

Além dos tipos de dados primitivos, existem variáveis ​​de referência criadas usando construtores de classes diferentes. Variáveis ​​de referência são usadas para qualquer classe, assim como array, String, Scanner, Random, Die, etc. As variáveis ​​de referência são inicializadas usando a nova palavra-chave.

Exemplo:

```java
public class Box{ 
 
    int length, breadth, height; 
 
    public Box(){ 
        length=5; 
        breadth=3; 
        height=2; 
    } 
 } 
 
 class demo{ 
 
    public static void main(String args[]) { 
        Box box1 = new Box();                //box1 is the reference variable 
        char[] arr = new char[10];           //arr is the reference variable 
    } 
 } 
```

## Corda:

String não é um tipo de dados primitivo, mas permite armazenar vários tipos de dados de caractere em uma matriz e possui vários métodos que podem ser usados. É muito comum quando o usuário digita dados e você tem que manipulá-los.

No exemplo abaixo, tentamos remover todas as letras da string e enviá-las:

```java
String input = "My birthday is 10 January 1984 and my favorite number is 42"; 
 String output = ""; 
 
 for(int i=0;i<input.length();i++){ 
 
 //if the character at index i on the string is a letter or a space, move on to the next index 
 if(Character.isLetter(input.charAt(i)) || input.charAt(i)==' '){ 
 
    continue; 
 } 
 
 output = output + input.charAt(i); //the number is added onto the output 
 
 } 
 
 System.out.println(output); 
```

Saída:
```
10198442 

```