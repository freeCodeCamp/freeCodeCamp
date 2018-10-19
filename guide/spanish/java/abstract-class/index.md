---
title: Abstract Classes in Java
localeTitle: Clases abstractas en Java
---
Vamos a discutir las clases abstractas. Antes de sumergirse en este tutorial, es mejor que haya comprendido los conceptos de las clases. y la herencia.

Las clases abstractas son clases que pueden ser subclasificadas (es decir, extendidas) pero no pueden ser instanciadas. Puede pensar en ellos como una **versión** de **clase** de interfaces, o como una interfaz con código real adjunto a los métodos.

Considere el siguiente ejemplo para entender las clases abstractas: Usted tiene una Clase de Vehículo que define ciertas funcionalidades básicas (métodos) y ciertos componentes (variables de objeto) que una maquinaria debe tener, para ser clasificada como un vehículo. No puede crear un objeto de Vehículo porque un vehículo en sí mismo es un concepto abstracto. Sin embargo, puede ampliar la funcionalidad de la clase de vehículo para crear un automóvil o una motocicleta.

\`\` \`java clase abstracta vehículo { // variable que se utiliza para declarar el no. de ruedas en un vehículo ruedas int privadas;

// Variable para definir el tipo de motor utilizado. Motor privado;

// un método abstracto que solo declara, pero no define el inicio // funcionalidad porque cada vehículo usa un mecanismo de arranque diferente inicio vacío abstracto (); }

Vehículo público de clase amplía vehículo. { ... }

Clase pública de motocicleta extiende vehíulo { ... }
```
No puedes crear un objeto de la clase Vehículo en ninguna parte de tu programa. Pero si puedes extener la clase abstracta Vehículo y crear objetos de las clases hijos;
```

Java Vehículo newVehicle = new Vehicle (); // Invalido Vehículo de vehículo = Coche nuevo (); // válido Vehículo mBike = nueva motocicleta (); // válido

Car carObj = nuevo Car (); // válido Motocicleta mBikeObj = nueva motocicleta (); // válido \`\` \`
