---
title: Interfaces
localeTitle: Interfaces
---
# Interfaces

A interface em Java é um pouco como a Classe, mas com uma diferença significativa: uma `interface` _só_ pode ter assinaturas de métodos, campos e métodos padrão. Desde o Java 8, você também pode criar [métodos padrão](https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html) . No próximo bloco você pode ver um exemplo de interface:

```java
public interface Vehicle { 
    public String licensePlate = ""; 
    public float maxVel 
    public void start(); 
    public void stop(); 
    default void blowHorn(){ 
      System.out.println("Blowing horn"); 
   } 
 } 
```

A interface acima contém dois campos, dois métodos e um método padrão. Sozinho, não é de muita utilidade, mas geralmente são usados ​​junto com Classes. Como? Simples, você tem que ter certeza que alguma classe o `implements` .

```java
public class Car implements Vehicle { 
    public void start() { 
        System.out.println("starting engine..."); 
    } 
    public void stop() { 
        System.out.println("stopping engine..."); 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CItd/0)

Agora, existe uma **regra básica** : A classe deve implementar **todos** os métodos na interface. Os métodos devem ter _exatamente a mesma_ assinatura (nome, parâmetros e exceções) conforme descrito na interface. A classe _não_ precisa declarar os campos, apenas os métodos.

## Instâncias de uma interface

Depois de criar uma classe Java que `implements` qualquer interface, a instância do objeto pode ser referenciada como uma instância da interface. Este conceito é semelhante ao da instanciação de herança.

```java
// following our previous example 
 
 Vehicle tesla = new Car(); 
 
 tesla.start(); // starting engine ... 
```

Uma interface **não pode** conter um método construtor, portanto, você **não pode** criar uma instância de uma interface em si. Você deve criar uma instância de alguma classe implementando uma interface para referenciá-la. Pense em interfaces como um formulário de contrato em branco ou um modelo.

O que você pode fazer com esse recurso? Polimorfismo! Você pode usar apenas interfaces para se referir a instâncias de objetos!

```java
class Truck implements Vehicle { 
    public void start() { 
        System.out.println("starting truck engine..."); 
    } 
    public void stop() { 
        System.out.println("stopping truck engine..."); 
    } 
 } 
 
 class Starter { 
    // static method, can be called without instantiating the class 
    public static void startEngine(Vehicle vehicle) { 
        vehicle.start(); 
    } 
 } 
 
 Vehicle tesla = new Car(); 
 Vehicle tata = new Truck(); 
 
 Starter.startEngine(tesla); // starting engine ... 
 Starter.startEngine(tata); // starting truck engine ... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CItm/0)

## Mas e quanto a múltiplas interfaces?

Sim, você pode implementar várias interfaces em uma única classe. Enquanto em [Herança](//forum.freecodecamp.com/t/java-docs-inheritance) dentro de Classes você estava restrito a herdar apenas uma classe, aqui você pode estender qualquer número de interfaces. Mas não esqueça de implementar _todos_ os métodos de todas as Interfaces, caso contrário a compilação falhará!

```java
public interface GPS { 
    public void getCoordinates(); 
 } 
 
 public interface Radio { 
    public void startRadio(); 
    public void stopRadio(); 
 } 
 
 public class Smartphone implements GPS,Radio { 
    public void getCoordinates() { 
        // return some coordinates 
    } 
    public void startRadio() { 
      // start Radio 
    } 
    public void stopRadio() { 
        // stop Radio 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CIto/0)

## Algumas características das interfaces

*   Você pode colocar variáveis ​​dentro de uma Interface, embora não seja uma decisão sensata, pois as Classes não estão obrigadas a ter a mesma variável. Em suma, evite colocar variáveis!
*   Todas as variáveis ​​e métodos em uma interface são públicos, mesmo se você deixar de fora a palavra-chave `public` .
*   Uma interface não pode especificar a implementação de um método específico. Cabe às classes fazer isso. Embora tenha havido uma exceção recente (veja abaixo).
*   Se uma classe implementa múltiplas interfaces, existe uma chance remota de sobreposição de assinatura de método. Como o Java não permite vários métodos da mesma assinatura, isso pode causar problemas. Veja [esta pergunta](http://stackoverflow.com/questions/2598009/method-name-collision-in-interface-implementation-java) para mais informações.

## Métodos padrão de interface

Antes do Java 8, não tínhamos como direcionar uma interface para ter uma implementação de método particular. Isso leva a muita confusão e quebras de código se uma definição de interface for repentinamente alterada.

Suponha que você escreveu uma biblioteca de código aberto, que contém uma interface. Digamos, seus clientes, ou seja, praticamente todos os desenvolvedores em todo o mundo, estão usando muito e estão felizes. Agora você precisou atualizar a biblioteca adicionando uma nova definição de método à Interface para suportar um novo recurso. Mas isso quebraria _todas as_ compilações, já que todas as classes que implementam essa interface precisam mudar agora. Que catástrofe!

Felizmente, o Java 8 agora nos fornece métodos `default` para Interfaces. Um método `default` _pode_ conter sua própria implementação _diretamente_ na Interface! Portanto, se uma classe não implementar um método padrão, o compilador executará a implementação mencionada na interface. Bom, não é? Então, em sua biblioteca, você pode adicionar qualquer número de métodos padrão em interfaces sem o medo de quebrar nada!

```java
public interface GPS { 
    public void getCoordinates(); 
    default public void getRoughCoordinates() { 
        // implementation to return coordinates from rough sources 
        // such as wifi & mobile 
        System.out.println("Fetching rough coordinates..."); 
    } 
 } 
 
 public interface Radio { 
    public void startRadio(); 
    public void stopRadio(); 
 } 
 
 public class Smartphone implements GPS,Radio { 
    public void getCoordinates() { 
        // return some coordinates 
    } 
    public void startRadio() { 
      // start Radio 
    } 
    public void stopRadio() { 
        // stop Radio 
    } 
 
    // no implementation of getRoughCoordinates() 
 } 
 
 Smartphone motoG = new Smartphone(); 
 motog.getRoughCoordinates(); // Fetching rough coordinates... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CItp/0)

### Mas o que acontece se duas interfaces tiverem a mesma assinatura de método?

Pergunta impressionante. Nesse caso, se você não fornecer a implementação na classe, o compilador pobre ficará confuso e simplesmente falhará! Você tem que fornecer uma implementação de método padrão dentro da classe também. Há também uma maneira bacana de usar `super` para chamar de qual implementação você gosta:

```java
public interface Radio { 
    // public void startRadio(); 
    // public void stopRadio(); 
 
    default public void next() { 
        System.out.println("Next from Radio"); 
    } 
 } 
 
 public interface MusicPlayer { 
    // public void start(); 
    // public void pause(); 
    // public void stop(); 
 
    default public void next() { 
        System.out.println("Next from MusicPlayer"); 
    } 
 } 
 
 public class Smartphone implements Radio, MusicPlayer { 
    public void next() { 
        // Suppose you want to call MusicPlayer next 
        MusicPlayer.super.next(); 
    } 
 } 
 
 Smartphone motoG = new Smartphone(); 
 motoG.next(); // Next from MusicPlayer 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CIts/0)

## Métodos estáticos em interfaces

Outra novidade no Java 8 é a capacidade de adicionar métodos estáticos a interfaces. Métodos estáticos em interfaces são quase idênticos aos métodos estáticos em classes concretas. A única grande diferença é que os métodos `static` não são herdados nas classes que implementam a interface. Isso significa que a interface é referenciada ao chamar o método estático e não a classe que o implementa.

```java
interface MusicPlayer { 
  public static void commercial(String sponsor) { 
    System.out.println("Now for a message brought to you by " + sponsor); 
  } 
 
  public void play(); 
 } 
 
 
 class Smartphone implements MusicPlayer { 
    public void play() { 
        System.out.println("Playing from smartphone"); 
    } 
 } 
 
 class Main { 
  public static void main(String[] args) { 
    Smartphone motoG = new Smartphone(); 
    MusicPlayer.commercial("Motorola"); // Called on interface not on implementing class 
    // motoG.commercial("Motorola"); // This would cause a compilation error 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CIts/9)

## Herdando uma Interface

Também é possível em Java que uma interface _herde_ outra interface, usando, você adivinhou, `extends` palavra-chave:

```java
public interface Player { 
    public void start(); 
    public void pause(); 
    public void stop(); 
 } 
 
 public interface MusicPlayer extends Player { 
    default public void next() { 
        System.out.println("Next from MusicPlayer"); 
    } 
 } 
```

Isso significa que a Classe que implementa a Interface `MusicPlayer` tem que implementar _todos os_ métodos do `MusicPlayer` , bem como do `Player` :

```java
public class SmartPhone implements MusicPlayer { 
    public void start() { 
        System.out.println("start"); 
    } 
    public void stop() { 
        System.out.println("stop"); 
    } 
    public void pause() { 
        System.out.println("pause"); 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CIty/0)

Ops, eu esqueci o `next()` ? Veja, já que era um método `default` , eu não tive que fornecer uma implementação. (Não funciona para JDK <8)

Então, agora você tem uma boa compreensão das Interfaces! Aprenda mais sobre as Classes Abstratas para saber como o Java oferece outra maneira de definir contratos.