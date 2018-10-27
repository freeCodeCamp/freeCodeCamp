---
title: Abstract Classes in Java
localeTitle: Clases abstractas en Java
---
Vamos a discutir las clases abstractas. Antes de sumergirse en este tutorial, es mejor que hayas comprendido los conceptos de clase y  herencia.

Las clases abstractas son clases que pueden ser subclasificadas (es decir, extendidas) pero no pueden ser instanciadas. Puedes pensar en ellos como una **versión clase** de interfaces, o como una interfaz con código real adjunto a los métodos.

Considera el siguiente ejemplo para entender las clases abstractas: Supongamos que tienes una Clase Vehículo que define ciertas funcionalidades básicas (métodos) y ciertos componentes (variables de objeto) que una maquinaria debe tener, para ser clasificada como un vehículo. No puede crear un objeto de Vehículo porque un vehículo en sí mismo es un concepto abstracto. Sin embargo, puede ampliar la funcionalidad de la clase de vehículo para crear un automóvil o una motocicleta.

```java
abstract class Vehiculo { 

//Variable que se utiliza para declarar el número de ruedas en un vehículo.
private int ruedas;

//Variable para definir el tipo de motor utilizado. 
private Motor motor;

//un método abstracto que solo declara, pero no define el inicio
//funcionalidad porque cada vehículo usa un mecanismo de arranque diferente
abstract void arranque();
}

public class Carro extends Vehiculo {
  ...
}

public class Motocicleta extends Vehiculo{
  ...
}
```

No puedes crear un objeto de la clase 'Vehiculo' en ningún lugar de tu programa. Pero puedes, sin embargo, extender la clase abstracta 'Vehiculo' y crear objetos de las clases hijas o subclases.

```Java
Vehiculo nuevoVehiculo = new Vehiculo(); // Invalido
Vehiculo carro = new Car(); // Válido
Vehiculo miObjetoBici = new Motocicleta(); // Válido
```
Si la clase hija no implemeta los métodos abstractos de la clase padre, se convierte automáticamente en clase abstracta.
