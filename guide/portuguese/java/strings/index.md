---
title: Strings
localeTitle: Cordas
---
# Cordas

Strings são seqüências de caracteres. Em Java, uma `String` é um `Object` . As strings não devem ser confundidas com `char` pois os caracteres são literalmente 1 valor em vez de uma sequência de caracteres. Você ainda pode usar 1 valor dentro de uma String, no entanto, é preferível usar `char` quando você está verificando 1 caractere.

```java
String course = "FCC"; 
 System.out.println(course instanceof Object); 
```

Saída:
```
true 
```

Você pode criar um objeto String das seguintes maneiras:

1.  `String str = "I am a String"; //as a String literal`
2.  `String str = "I am a " + "String"; //as a constant expression`
3.  `String str = new String("I am a String"); //as a String Object using the constructor`

Você pode estar pensando: qual é a diferença entre os três?

Bem, o uso da `new` palavra-chave garante que um novo objeto `String` será criado e um novo local de memória será alocado no `Heap` memória [(clique aqui para saber mais)](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html) . Corda literais e constantes As expressões String são armazenadas em cache no momento da compilação. O compilador coloca-os no conjunto literal de cadeias para evitar duplicatas e melhorar o consumo de memória. A alocação de objetos é cara e esse truque aumenta o desempenho enquanto instancia Strings. Se você usar o mesmo literal novamente, a JVM usa o mesmo objeto. Usar o contructor como acima é quase sempre uma escolha pior.

Nesse trecho de código, quantos objetos String são criados?

```java
String str = "This is a string"; 
 String str2 = "This is a string"; 
 String str3 = new String("This is a string"); 
```

A resposta é: 2 objetos String são criados. `str` e `str2` referem-se ao mesmo objeto. `str3` tem o mesmo conteúdo, mas usando `new` forçadas a criação de um novo objeto distinto.

Quando você cria um literal String, a JVM verifica internamente, o que é conhecido como o `String pool` , para ver se ele pode encontrar um semelhante (conteúdo sábio) Objeto String. Se encontrar, retorna a mesma referência. Caso contrário, basta ir em frente e cria um novo objeto String no pool para que a mesma verificação pode ser realizada no futuro.

Você pode testar isso usando a andorinha, a comparação rápida de objetos `==` e os `equals()` implementados.

```java
System.out.println(str == str2); // This prints 'true' 
 System.out.println(str == str3); // This prints 'false' 
 System.out.println(str.equals(str3)); // This prints 'true' 
```

Aqui está outro exemplo de como criar uma string em Java usando os diferentes métodos:

```java
public class StringExample{ 
 
   public static void main(String args[]) { 
      String s1 = "java";  // creating string by Java string literal 
      char ch[] = {'s','t','r','i','n','g','s'}; 
      String s2 = new String(ch);  // converting char array to string 
      String s3 = new String("example");  // creating Java string by new keyword 
      System.out.println(s1); 
      System.out.println(s2); 
      System.out.println(s3); 
   } 
 } 
```

#### Comparando Cordas

Se você quiser comparar o valor de duas variáveis ​​String, não será possível usar ==. Isso se deve ao fato de que isso vai comparar as referências das variáveis e não os valores que estão ligados a eles. Para comparar os valores armazenados das Strings, você usa o método igual a.

```java
boolean equals(Object obj) 
```

Retorna true se dois objetos são iguais e false caso contrário.

```java
String str = "Hello world"; 
 String str2 = "Hello world"; 
 
 System.out.println(str == str2); // This prints false 
 System.out.println(str.equals(str2); // This prints true 
```

A primeira comparação é falsa porque "==" analisa as referências e elas não são as mesmas.

A segunda comparação é verdadeira porque as variáveis ​​armazenam os mesmos valores. Neste caso, "Olá mundo".

Temos vários métodos internos em String. A seguir, um exemplo do método String Length ().

```java
public class StringDemo { 
 
   public static void main(String args[]) { 
      String palindrome = "Dot saw I was Tod"; 
      int len = palindrome.length(); 
      System.out.println( "String Length is : " + len ); 
   } 
 } 
```

Isto irá resultar em - `String Length is : 17`

**A resposta é: 2** objetos String são criados. **Notas**

1.  Os métodos de string usam índices baseados em zero, exceto pelo segundo argumento de `substring()` .
2.  A classe String é final - seus métodos não podem ser substituídos.
3.  Quando o literal String é encontrado pela JVM, ele é adicionado ao pool literal de string.
4.  A classe string possui um `length()` nome de método `length()` , enquanto matrizes têm um comprimento de nomenclatura de atributo.
5.  Em java, objetos string são imutáveis. Imutável significa simplesmente inalterável ou imutável. Uma vez criado o objeto string, seus dados ou estados não podem ser alterados, mas um novo objeto string é criado.

Comprimento da corda

O "comprimento" de uma string é apenas o número de caracteres nela. Então, "hi" é length 2 e "Hello" é length 5. O método length () em uma string retorna seu tamanho, assim:

```java
String a = "Hello"; 
 int len = a.length();  // len is 5 
```

#### Outros métodos de comparação que também podem ser usados ​​na String são:

1.  equalsIgnoreCase (): - compara a string sem levar em consideração a diferenciação entre maiúsculas e minúsculas.

```java
String a = "HELLO"; 
 String b = "hello"; 
 System.out.println(a.equalsIgnoreCase(b));   // It will print true 
```

2.  compareTo: - compara o valor lexicograficamente e retorna um inteiro.

```java
String a = "Sam"; 
 String b = "Sam"; 
 String c = "Ram"; 
 System.out.println(a.compareTo(b));       // 0 
 System.out.prinltn(a.compareTo(c));       // 1 since (a>b) 
 System.out.println(c.compareTo(a));       // -1 since (c<a) 

```