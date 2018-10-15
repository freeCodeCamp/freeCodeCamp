---
title: ArrayList
localeTitle: ArrayList
---
# ArrayList

ArrayList é uma parte de algo chamado de _estrutura de coleção_ .

A _estrutura de coleta_ consiste em todas as interfaces e classes que podem conter um conjunto de valores (semelhante a [matrizes](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html) ). **ArrayList** é uma classe que está nesta hierarquia e é conhecida como um _**objeto Collection**_ . Ele implementa a interface _List_ , que por sua vez implementa a interface _Collection_ . Essa interface _Collection_ pode ser encontrada no pacote `java.util` . Você precisará importar este pacote.

ArrayList é uma classe usada para criar matrizes dinâmicas. É mais lento que os arrays regulares, mas permite muita manipulação. Pode ser inicializado para ter um tamanho específico ou terá um tamanho padrão de 10 unidades.

`java ArrayList<String> names = new ArrayList<>(); ArrayList<Integer> ages = new ArrayList<>(5);`

No snippet acima, o ângulo breackets `<>` toma um tipo de dados genérico como argumento especificando o tipo de dados dos elementos no ArrayList. Os primeiros `names` ArrayList são especificados como contendo elementos _String_ . Assim, só será permitido conter elementos String. Seu tamanho não é especificado, portanto, ele terá um tamanho padrão de 10. A segunda `ages` ArrayList especificou que ele só conterá inteiros. Mas ArrayList não pode conter primitivos, ele só contém objetos. Assim, para torná-lo armazenar números inteiros, flutuantes, etc., podemos usar classes wrapper. `names` terão um tamanho especificado de 5.

Como ArrayList implementa _List_ , um ArrayList pode ser criado usando a seguinte sintaxe: `java List<Integer> students = new ArrayList<>();`

Um ArrayList é dinâmico, o que significa que ele aumentará de tamanho se necessário e, da mesma forma, diminuirá em tamanho se os elementos forem excluídos dele. É isso que faz com que seja melhor usar do que os arrays normais.

Um ArrayList nos permite acessar elementos aleatoriamente. ArrayList é semelhante ao _Vector de_ várias formas. Mas é mais rápido que Vetores. A principal coisa a notar é que - Os vetores são mais rápidos que os arrays, mas os ArrayLists não são.

Então, quando se trata de escolher entre os dois - se a velocidade é crítica, então os vetores devem ser considerados, caso contrário, ArrayLists são melhores quando se trata de armazenar grande número de elementos e acessá-los de forma eficiente.