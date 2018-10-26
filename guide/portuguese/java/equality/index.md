---
title: Checking for Equality
localeTitle: Verificando Igualdade
---
# Verificando Igualdade

Em Java, existem duas maneiras de verificar se duas variáveis ​​são "mesmas": `==` e `.equals()` . Esses dois métodos não funcionam da mesma maneira.

## O operador `==`

A operação básica de igualdade em Java, `==` como em `var1 == var2` , verifica se `var1` e `var2` apontam para a mesma _referência de objeto_ . Ou seja, se `var1` for a mesma _instância_ de uma classe na memória que `var2` , então `var1 == var2` é true.

No entanto, se `var1` e `var2` forem criados como duas instâncias separadas de uma classe (isto é, com a `new` palavra-chave), então `var1 == var2` será falso. Mesmo que os dois objetos contenham exatamente as mesmas propriedades e valores, a comparação `==` não passaria porque eles não estão apontando para o mesmo objeto na memória.

Para tipos de variáveis ​​primitivas, como `int` e `double` , o operador `==` sempre pode ser usado para verificar a igualdade, pois seus valores são armazenados diretamente com a variável (em vez de como referência a outro slot na memória).

```java
int var1 = 1; 
 int var2 = 1; 
 System.out.println(var1 == var2) // true 
 
 MyObject obj1 = new MyObject(); 
 MyObject obj2 = obj1; 
 MyObject obj3 = new MyObject(); 
 
 System.out.println(obj1 == obj2) // true 
 System.out.println(obj1 == obj3) // false 
 System.out.println(obj2 == obj3) // false 
```

## O método `.equals()`

A classe de `Object` interna em Java, que todas as outras classes estendem automaticamente, contém vários métodos internos úteis. Um desses métodos é `equals()` , que usa outro objeto como argumento e retorna se os dois objetos devem ser considerados "iguais" de acordo com a lógica relevante para essa classe.

A classe 'String' é um dos exemplos mais comuns de uma classe que substitui o método 'equals ()'. Ao comparar duas 'String's para igualdade, você precisa usar o método' equals () ', já que' == 'não funcionará como você espera.

```java
String s1 = "Bob"; 
 String s2 = "ob"; 
 s2 = "B" + s2; //s2 now is also "Bob" 
 System.out.println(s1 == s2); //false 
 System.out.println(s1.equals(s2)); //true 
```

Quando você cria uma nova classe em Java, geralmente deseja substituir o método `equals()` para fornecer uma maneira mais significativa de comparar dois objetos da mesma classe. Como este método é implementado é completamente para o julgamento do desenvolvedor.

Por exemplo, você pode decidir que duas `Person` devem ser consideradas "iguais" se seu `name` e data de `dateOfBirth` forem iguais. Essa lógica seria implementada no método `equals()` da sua classe `Person` :

```java
public class Person { 
    public String name; 
    public Date dateOfBirth; 
 
    public boolean equals(Person person) { 
        return this.name.equals(person.name) && this.dateOfBirth.equals(person.dateOfBirth); 
    } 
 } 
```

A maioria das classes internas em Java, bem como as classes fornecidas por bibliotecas populares, implementarão o método `equals()` maneira significativa.

Por exemplo, o `java.util.Set` interface especifica que um `Set` de `equals()` método irá retornar true se "o objeto especificado é também um conjunto, os dois conjuntos têm o mesmo tamanho, e todos os membros do conjunto especificado está contido neste conjunto ".

No entanto, se uma classe não substituir a implementação `equals()` padrão, será aplicada a implementação padrão, que simplesmente usa o operador `==` para comparar os dois objetos.