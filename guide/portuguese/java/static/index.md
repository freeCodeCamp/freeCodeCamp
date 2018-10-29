---
title: Static
localeTitle: Estático
---
# Estático

Quando você declara uma variável ou um método como estático, ela pertence à classe, em vez de a uma instância específica. Isso significa que apenas uma instância de um membro estático existe, mesmo se você criar vários objetos da classe ou se não criar nenhum. Ele será compartilhado por todos os objetos.

A palavra-chave static pode ser usada com variáveis, métodos, blocos de códigos e classes aninhadas.

## Variáveis ​​Estáticas

**_Exemplo:_**

```java
public class Counter { 
  public static int COUNT = 0; 
  Counter() { 
    COUNT++; 
  } 
 } 
```

A variável `COUNT` será compartilhada por todos os objetos dessa classe. Quando criamos objetos da nossa classe Counter no main e acessamos a variável estática.

```java
public class MyClass { 
  public static void main(String[] args) { 
    Counter c1 = new Counter(); 
    Counter c2 = new Counter(); 
    System.out.println(Counter.COUNT); 
  } 
 } 
 // Outputs "2" 
```

O outout é 2, porque a variável `COUNT` é estática e é incrementada por um a cada vez que um novo objeto da classe Counter é criado. Você também pode acessar a variável estática usando qualquer objeto dessa classe, como `c1.COUNT` .

## Métodos estáticos

Um método estático pertence à classe em vez de instâncias. Assim, pode ser chamado sem criar instância de classe. É usado para alterar os conteúdos estáticos da classe. Existem algumas restrições de métodos estáticos:

1.  O método estático não pode usar membros não estáticos (variáveis ​​ou funções) da classe.
2.  Método estático não pode usar `this` ou `super` palavras `super` chave.

**_Exemplo:_**

```java
public class Counter { 
  public static int COUNT = 0; 
  Counter() { 
    COUNT++; 
  } 
 
  public static void increment(){ 
    COUNT++; 
  } 
 } 
```

Métodos estáticos também podem ser chamados da instância da classe.

```java
public class MyClass { 
  public static void main(String[] args) { 
    Counter.increment(); 
    Counter.increment(); 
    System.out.println(Counter.COUNT); 
  } 
 } 
 // Outputs "2" 
```

A saída é 2 porque é incrementada pelo método estático `increament()` . Semelhante a variáveis ​​estáticas, os métodos estáticos também podem ser acessados ​​usando variáveis ​​de instância.

## Blocos estáticos

Blocos de código estático são usados ​​para inicializar variáveis ​​estáticas. Esses blocos são executados imediatamente após a declaração de variáveis ​​estáticas.

**_Exemplo:_**

```java
public class Saturn { 
  public static final int MOON_COUNT; 
 
  static { 
    MOON_COUNT = 62; 
  } 
 } 
```

```java
public class Main { 
  public static void main(String[] args) { 
    System.out.println(Saturn.MOON_COUNT); 
  } 
 } 
 // Outputs "62" 
```

A saída é 62, porque a variável `MOON_COUNT` é atribuída a esse valor no bloco estático.

## Classes aninhadas estáticas

Uma classe pode ter uma classe aninhada estática que pode ser acessada usando o nome da classe externa.

**_Exemplo:_**

```java
public class Outer { 
 
  public Outer() { 
  } 
 
  public static class Inner { 
    public Inner() { 
    } 
  } 
 } 
```

No exemplo acima, a classe `Inner` pode ser acessada diretamente como um membro estático da classe `Outer` .

```java
public class Main { 
  public static void main(String[] args) { 
    Outer.Inner inner = new Outer.Inner(); 
  } 
 } 
```

Um dos casos de uso de classes aninhadas estáticas no [Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern#Java) usado popularmente em java.