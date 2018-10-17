---
title: Inheritance
localeTitle: Herança
---
# Herança

Herança Java refere-se à capacidade de uma classe Java de `inherit` as propriedades de alguma outra classe. Pense nisso como uma criança herdando propriedades de seus pais, o conceito é muito semelhante a isso. Na linguagem Java, também é chamado de _extender_ uma classe. Algumas coisas simples para lembrar:

*   A classe que estende ou herda é chamada de **subclasse**
*   A classe que está sendo estendida ou herdada é chamada de **superclasse**

Assim, a herança dá ao Java a capacidade legal de _reutilizar_ código ou compartilhar código entre classes!

Vamos descrevê-lo com o exemplo clássico de uma classe `Vehicle` e uma classe `Car` :

```java
public class Vehicle { 
    public void start() { 
        // starting the engine 
    } 
 
    public void stop() { 
        // stopping the engine 
    } 
 } 
 
 public class Car extends Vehicle { 
    int numberOfSeats = 4; 
 
    public int getNumberOfSeats() { 
        return numberOfSeats; 
    } 
 } 
```

Aqui, podemos ver a classe `Car` herdando as propriedades da classe `Vehicle` . Portanto, não precisamos escrever o mesmo código para os métodos `start()` e `stop()` para `Car` , pois essas propriedades estão disponíveis em sua controladora ou superclasse. Portanto, objetos criados a partir da classe `Car` _também_ terão essas propriedades!

```java
Car tesla = new Car(); 
 
 tesla.start(); 
 
 tesla.stop(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJXz/0)

Mas, a classe pai tem os métodos da criança? Não, não.

Portanto, sempre que você precisar compartilhar uma parte comum do código entre várias classes, é sempre bom ter uma classe pai e estender essa classe sempre que necessário! Reduz o número de linhas de código, torna o código modular e simplifica o teste.

## O que pode ser herdado?

*   Todos `public` campos e métodos `protected` e `public` do pai

## O que não pode ser herdado?

*   campos e métodos `private`
*   Construtores Embora, o construtor da subclasse _tenha_ que chamar o construtor da superclasse se ele estiver definido (mais sobre isso depois!)
*   Múltiplas aulas Java suporta apenas **herança única** , ou seja, você pode herdar apenas uma classe por vez.
*   Campos. Campos individuais de uma classe não podem ser substituídos pela subclasse.

## Tipo de fundição e referência

Em Java, é possível referenciar uma subclasse como uma _instância_ de sua superclasse. É chamado _Polimorfismo_ na Programação Orientada a Objetos (OOP), a capacidade de um objeto assumir muitas formas. Por exemplo, o objeto de classe `Car` pode ser referenciado como uma ocorrência de classe de `Vehicle` como esta:

```java
Vehicle car = new Car(); 
```

Embora o contrário não seja possível:

```java
Car car = new Vehicle(); // ERROR 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJYB/0)

Como você pode fazer referência a uma subclasse Java como uma instância de superclasse, é possível converter facilmente uma instância de um objeto de subclasse em uma instância de superclasse. É possível converter um objeto de superclasse em um tipo de subclasse, mas _apenas se o objeto for realmente uma instância da subclasse_ . Então tenha isso em mente:

```java
Car car = new Car(); 
 Vehicle vehicle = car; // upcasting 
 Car car2 = (Car)vechile; //downcasting 
 
 Bike bike = new Bike(); // say Bike is also a subclass of Vehicle 
 Vehicle v = bike; // upcasting, no problem here. 
 Car car3 = (Car)bike; // Compilation Error : as bike is NOT a instance of Car 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJYM/0)

Agora você sabe como compartilhar código por meio de um relacionamento pai-filho. Mas, e se você não gostar da implementação de um método específico na classe filha e quiser escrever um novo para ele? O que fazes, então?

## Anule isso!

Java permite _substituir_ ou redefinir os métodos definidos na superclasse. Por exemplo, sua classe `Car` tem uma implementação diferente de `start()` que o `Vehicle` pai, portanto, faça isso:

```java
public class Vehicle { 
    public void start() { 
      System.out.println("Vehicle start code"); 
    } 
 } 
 
 public class Car extends Vehicle { 
    public void start() { 
      System.out.println("Car start code"); 
  } 
 } 
 
 Car car = new Car(); 
 car.start(); // "Car start code" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJYZ/1)

Portanto, é muito simples substituir métodos na subclasse. Embora, existe uma _captura._ Apenas o método da superclasse com a _mesma assinatura de método do método_ da subclasse será substituído. Isso significa que a definição do método da subclasse deve ter exatamente o mesmo nome, o mesmo número e tipo de parâmetros e exatamente a mesma sequência. Assim, o `public void start(String key)` não substitui o `public void start()` .

**Notas** :

*   Você não pode sobrescrever métodos privados da superclasse. (Muito óbvio, não é?)
*   E se o método da superclasse que você está ignorando na subclasse for subitamente obliterado ou os métodos alterados? Ele falharia em tempo de execução! Então, Java fornece uma anotação bacana `@Override` que você pode colocar sobre o método da subclasse, que irá avisar o compilador desses incidentes!

Anotações em Java é uma boa prática de codificação, mas elas não são uma necessidade. O compilador é inteligente o suficiente para descobrir sozinho. Ao contrário de outras linguagens OOP, o Annotations in Java não modifica necessariamente o método nem adiciona funcionalidades extras.

## Como chamar métodos de superclasse?

Engraçado você pergunta sobre isso! Basta usar a palavra `super` chave `super` :

```java
public class Vehicle() { 
    public void start() { 
      System.out.println("Vehicle start code"); 
    } 
 } 
 
 public class Car extends Vehicle { 
    public void run() { 
      super.start(); 
  } 
 } 
 
 Car car = new Car(); 
 car.run(); // "Vehicle start code" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJY4/0)

**NB** : Embora você possa chamar o método pai usando uma `super` chamada, não é possível subir a hierarquia de herança com `super` chamadas encadeadas.

## Como saber o tipo de uma aula?

Usando o `instanceof` palavra-chave. Tendo muitas classes e subclasses, seria um pouco confuso saber qual classe é uma subclasse de qual em tempo de execução. Assim, podemos usar `instanceof` para determinar se um objeto é uma instância de uma classe, uma instância de uma subclasse ou uma instância de uma interface.

```java
Car car = new Car(); 
 
 boolean flag = car instanceof Vehicle; // true in this case! 
```

## Construtores e Herança

Como mencionado anteriormente, os construtores não podem ser diretamente herdados por uma subclasse. Embora, uma subclasse seja _necessária_ para chamar o construtor de seu pai como a [primeira operação](http://stackoverflow.com/questions/1168345/why-does-this-and-super-have-to-be-the-first-statement-in-a-constructor) em seu próprio construtor. Como? Você adivinhou, usando `super` :

```java
public class Vehicle { 
    public Vehicle() { 
        // constructor 
    } 
    public void start() { 
      System.out.println("Vehicle start code"); 
    } 
 } 
 
 public class Car extends Vehicle { 
    public Car() { 
      super(); 
    } 
    public void run() { 
      super.start(); 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CJY8/0)

Lembre-se, se a superclasse não tiver nenhum construtor definido, você não precisará chamá-lo explicitamente na subclasse. Java manipula isso internamente para você! A invocação para o `super` construtor é feita no caso em que a superclasse deve ser chamada com qualquer outro construtor que não seja o _construtor padrão_ .

Se nenhum outro construtor for definido, Java chamará o construtor de super classe padrão ( _mesmo que não definido explicitamente_ ).

Parabéns, agora você sabe tudo sobre herança! Leia mais sobre formas avançadas de herdar coisas em Classes Abstratas e [Interfaces](//forum.freecodecamp.com/t/java-docs-interfaces) !