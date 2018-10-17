---
title: Garbage Collection
localeTitle: Coleta de lixo
---
# Coleta de lixo em Java

Em linguagens como C / C ++, é dever do programador criar e destruir objetos. Mas se o programador não executa seu dever, memória suficiente pode não estar disponível para a criação de um novo objeto e o programa pode terminar causando **OutOfMemoryErrors** .

Java alivia o programador da tarefa de gerenciamento de memória e recupera a memória ocupada pelos objetos que não estão mais em uso. Coleta de lixo em java é realizada por um thread daemon chamado **Garbage Collector** . **JVM (Java Virtual Machine)** invoca quando há falta de memória (heap) para novos objetos.

## Quando um objeto se torna elegível para o Garbage Collection?

*   Um objeto se torna elegível para a Coleta de lixo se não puder ser acessado de nenhum encadeamento ao vivo ou de qualquer referência estática.
*   Um objeto se torna elegível para o Garbage Collection se todas as referências forem nulas.

```java
         Integer n = new Integer(); 
         n = null;                                //the Integer object is no longer accessible 
```

*   As dependências cíclicas não são contadas como referência, portanto, se o Objeto X tiver referência ao Objeto Y e o Objeto Y tiver referência ao Objeto X e não tiverem outra referência ao vivo, os Objetos X e Y serão elegíveis para a Coleta de Lixo.

## Como tornar manualmente um objeto elegível para coleta de lixo?

*   Mesmo que não seja tarefa do programador destruir os objetos, é uma boa prática de programação tornar um objeto inacessível (portanto, elegível para GC) depois de ser usado.
*   Geralmente, existem quatro maneiras diferentes de tornar um objeto elegível para coleta de lixo.

1.  Anulando a variável de referência
2.  Reatribuindo a variável de referência
3.  O objeto é criado dentro de um bloco e a referência sai do escopo depois que o controle sai desse bloco.
4.  [Ilha do isolamento](http://www.geeksforgeeks.org/island-of-isolation-in-java/)

## Maneiras de solicitar a JVM para executar o Garbage Collector 1

*   Apesar de tornar um objeto elegível para o Garbage Collection, depende da discrição exclusiva do JVM executar o Garbage Collector para destruí-lo.
*   Também podemos solicitar que a JVM execute o Garbage Collector. Existem duas maneiras de fazer isso:

1.  Usando o método _**System.gc ()**_ : A classe System contém o método estático gc () para solicitar que a JVM execute o Garbage Collector.
2.  Usando o método _**Runtime.getRuntime (). Gc ()**_ : A classe de tempo de execução permite que o aplicativo faça interface com a JVM na qual o aplicativo está em execução. Portanto, usando seu método gc (), podemos solicitar que a JVM execute o Garbage Collector.

```java
         // Java program to request 
    // JVM to run Garbage Collector 
 public class Test 
 { 
    public static void main(String[] args) throws InterruptedException 
    { 
        Test test1 = new Test(); 
        Test test2 = new Test(); 
 
        // Nullifying the reference variable 
        test1 = null; 
 
        // requesting JVM for running Garbage Collector 
        System.gc(); 
 
        // Nullifying the reference variable 
        test2 = null; 
 
        // requesting JVM for running Garbage Collector 
        Runtime.getRuntime().gc(); 
 
    } 
 
    @Override 
    // finalize method is a method which is called on object once 
    // before garbage collector is destroying it and reclaiming its memory 
    protected void finalize() throws Throwable 
    { 
        System.out.println("Garbage collector is called"); 
        System.out.println("Object garbage collected : " + this); 
    } 
 } 
```

```java
  OUTPUT - 
    Garbage collector called 
    Object garbage collected : Test@46d08f12 
    Garbage collector called 
    Object garbage collected : Test@481779b8 
```

Nota :

1.  Não há garantia de que qualquer um dos dois métodos acima irá executar o Garbage Collector.
2.  A chamada System.gc () é efetivamente equivalente à chamada: Runtime.getRuntime (). Gc ()

## Finalização de Objetos

*   Objetos possuem recursos associados a eles. É sua responsabilidade liberar os recursos.
*   O finalize (), é declarado na classe Object e é chamado pelo garbage collector uma vez, antes de destruir o objeto. Um objeto pode executar qualquer última ação usando este método jst antes que sua área seja recuperada pelo coletor de lixo.
*   O método finalize () está presente na classe Object com o seguinte protótipo.

```java
    protected void finalize() throws Throwable 
```

## NOTA 1 :

1.  O método finalize () chamado pelo Garbage Collector não é a JVM. Embora Garbage Collector seja um dos módulos da JVM.
2.  O método finalize () da classe Object tem uma implementação vazia, portanto, é recomendado substituir o método finalize () para descartar recursos do sistema ou executar outra limpeza.
3.  O método finalize () nunca é invocado mais de uma vez para qualquer objeto dado.
4.  Se uma exceção não identificada for lançada pelo método finalize (), a exceção será ignorada e a finalização desse objeto será finalizada.

### FONTES

1.  [geeksforgeeks.](http://www.geeksforgeeks.org/garbage-collection-java/) Acesso em: 24 de outubro de 2017.