---
title: Abstract Classes in Java
localeTitle: Classes Abstratas em Java
---
Vamos discutir classes abstratas. Antes de mergulhar neste tutorial, é melhor que você tenha entendido conceitos de classes e herança.

Classes abstratas são classes que podem ser subclassificadas (isto é, estendidas), mas não podem ser instanciadas. Você pode pensar neles como uma **versão** de **classe** de interfaces ou como uma interface com código real anexado aos métodos.

Considere o seguinte exemplo para entender classes abstratas: Você tem uma classe Veiculo que define certas funcionalidades básicas (métodos) e certos componentes (variáveis ​​de objeto) que uma máquina deve ter, para ser classificada como veículo. Você não pode criar um objeto de Veiculo porque um veículo em si é um conceito abstrato. No entanto, você pode estender a funcionalidade da classe de veículo para criar um carro ou uma motocicleta.


public abstract class Veiculo { 

// variável usada para declarar o numero de rodas em um veículo 
  private int rodas;
// Variável usada para definir o tipo de motor usado 
  private Motor motor;

// um método abstrato que apenas declara, mas não define, o início da funcionalidade
  public abstract void start (); 
 }

// Classe pública que extende a classe abstrata
public class Carro extends Veiculo { … }

// Outra classe pública que extende a classe abstrata
public class Motocicleta extends Veiculo { … }

```
Você não pode criar um objeto diretamente instanciando a classe Veiculo em seu programa. Você pode entretanto, criar um objeto do subtipo de Veiculo, que nesse caso pode ser: Carro ou Motocicleta.
```

Veiculo novoVeiculo = new Veiculo (); ``` Declaração inválida, vai gerar um erro de compilação ``` 

Veiculo carro = new Carro (); ``` Declaração válida pois o objeto criado é do tipo Carro ```

Veiculo moto = new Motocicleta (); ``` Declaração válida pois o objeto criado é do tipo Motocicleta ```

Carro novoCarro = new Carro (); ``` Declaração válida ```

Motocicleta novaMoto = new Motocicleta (); ``` Declaração válida ```
