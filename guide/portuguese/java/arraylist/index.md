---
title: ArrayList
localeTitle: ArrayList
---
# ArrayList

ArrayList é uma parte de algo chamado de _estrutura de Coleção (Collection)_ .

A _estrutura de Coleção_ consiste de todas as interfaces e classes que podem conter um conjunto de valores (semelhante a [arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html) ). **ArrayList** é uma classe que está nesta hierarquia e é conhecida como um _**objeto Collection**_. ArrayList implementa a interface _List_, que por sua vez implementa a interface _Collection_ . Essa interface _Collection_ pode ser encontrada no pacote `java.util`. Você precisará importar este pacote.

ArrayList é uma classe usada para criar matrizes dinâmicas. É mais lento que os arrays regulares, mas permite muita manipulação. Pode ser inicializado para ter um tamanho específico ou terá um tamanho padrão de 10 unidades.

``` java 
ArrayList<String> nomes = new ArrayList<>(); 
ArrayList<Integer> idades = new ArrayList<>(5);
```

No snippet acima, `<>` toma um tipo de dados genérico como argumento especificando o tipo de dados dos elementos no ArrayList. No primeiro exemplo, o ArrayList `nomes` são especificados como contendo elementos _String_. Assim, só será permitido conter elementos String. Seu tamanho não é especificado, portanto, ele terá um tamanho inicial de 10. O segundo exemplo, o ArrayList `idades`, especificou que ele só conterá inteiros. Mas ArrayList não pode conter primitivos, ele só contém objetos. Assim, para poder armazenar números inteiros, reais, etc., podemos usar classes wrapper. `idades` terão um tamanho inicial especificado: 5.

Como ArrayList implementa _List_ , um ArrayList pode ser criado usando a seguinte sintaxe: 

``` java 
List<Integer> estudantes = new ArrayList<>();
```

Um ArrayList é dinâmico, o que significa que ele aumentará de tamanho se necessário e, da mesma forma, diminuirá de tamanho se os elementos forem excluídos dele. É esta dinamicidade que faz com que seja melhor usar do que os arrays normais quando queremos que o array cresça ou dimunua de tamanho.

Para criar/remover todos os elementos de um ArrayList

  ```java
  variavel.clear();
  ```
  Nos podemos remover elementos existentes em uma lista
 
  ```java
  variavel.remove(posicao);
  ```
  Para acessar um elemento presente na lista
  
  ```java
  variavel.get(posicao);
  ```
   Nos podemos modificar um elemento presente na lista também
   
   ```java
   variavel.set(posicao, elemento);
  ```
  Nos podemos inverter a ordem dos elementos no ArrayList
  
  ```java
  import java.util.Collections; // package
 
  Collections.reverse(variavel);
  ```
 Ordenar em ordem ascendente
 ```java
  Collections.sort(variavel);
  ```
  
   Ordenar em ordem descendente
   ```java
  Collections.reverseOrder();
 ```
  Um ArrayList nos permite acessar elementos aleatoriamente. ArrayList é semelhante ao _Vector_ de_ várias formas. Mas é mais rápido que _Vector_. A principal coisa a notar é que - Objetos _Vector_ são mais rápidos que objetos que são arrays, mas objectos _ArrayList_ não são.
  
  Então, quando se trata de escolher entre os dois - se a velocidade é crítica, então _Vector_ devem ser considerados, caso contrário, _ArrayList_ são melhores quando se trata de armazenar grande número de elementos e acessá-los de forma eficiente.

## More Information
- [ArrayList Documentation](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)

