---
title: Abstract Classes in Java
localeTitle: Classes Abstratas em Java
---
Vamos discutir classes abstratas. Antes de mergulhar neste tutorial, é melhor que você tenha entendido conceitos de classes e herança.

Classes abstratas são classes que podem ser subclassificadas (isto é, estendidas), mas não podem ser instanciadas. Você pode pensar neles como uma **versão** de **classe** de interfaces ou como uma interface com código real anexado aos métodos.

Considere o seguinte exemplo para entender classes abstratas: Você tem uma classe Vehicle que define certas funcionalidades básicas (métodos) e certos componentes (variáveis ​​de objeto) que uma máquina deve ter, para ser classificada como veículo. Você não pode criar um objeto de Veículo porque um veículo em si é um conceito abstrato. No entanto, você pode estender a funcionalidade da classe de veículo para criar um carro ou uma motocicleta.

\`\` \`java classe abstrata Veículo { // variável usada para declarar o não. de rodas em um veículo rodas int privadas;

// Variável para definir o tipo de motor usado Motor privado;

// um método abstrato que apenas declara, mas não define o início // funcionalidade porque cada veículo usa um mecanismo de partida diferente Resumo void start (); }

carro de classe pública estende veículo { … }

classe pública motocicleta estende veículo { … }
```
You cannot create an object of Vehicle class anywhere in your program. You can however, extend the abstract vehicle class and create objects of the child classes; 
```

Java Veículo newVehicle = new Vehicle (); // Inválido Veículo car = new Car (); // válido Veículo mBike = new Motorcycle (); // válido

Car carObj = carro novo (); // válido Motocicleta mBikeObj = nova motocicleta (); // válido \`\` \`