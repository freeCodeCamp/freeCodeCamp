---
title: Final
localeTitle: Final
---
## final

Você usa a palavra-chave `final` para marcar uma constante variável, de modo que ela possa ser atribuída apenas uma vez. Então você deve inicializar uma variável final com um valor. Se não for inicializado (quando declarado, dentro de Construtor ou dentro de blocos estáticos), ocorrerá erro de tempo de compilação.

**_Exemplo:_**

```java
class MyClass { 
  public static final double PI = 3.14; 
  public static void main(String[] args){ 
    System.out.println(PI); 
  } 
 } 
```

PI é agora uma constante. Qualquer tentativa de atribuir um valor a ele causará um erro.

* * *

Se você fizer qualquer método como final, você não poderá sobrescrevê-lo.

```java
class Bike{ 
  final void run(){System.out.println("running");} 
 } 
 
 class Honda extends Bike{ 
   void run(){System.out.println("running safely with 100kmph");} 
 
   public static void main(String args[]){ 
   Honda honda= new Honda(); 
   honda.run(); 
   } 
 } 
```

Saída será - Saída: Erro de tempo de compilação

* * *

Se você fizer uma aula como final, não poderá estendê-la.

```java
final class Bike{} 
 
 class Honda1 extends Bike{ 
  void run(){System.out.println("running safely with 100kmph");} 
 
  public static void main(String args[]){ 
  Honda1 honda= new Honda(); 
  honda.run(); 
  } 
 } 
```

Saída será Saída: Erro de tempo de compilação