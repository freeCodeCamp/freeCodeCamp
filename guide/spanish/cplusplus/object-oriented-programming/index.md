---
title: Object Oriented Programming using C++
localeTitle: Programación orientada a objetos utilizando C ++
---
## Programación orientada a objetos utilizando C ++

La programación orientada a objetos, POO para abreviar, tiene como objetivo implementar entidades del mundo real como herencia, ocultamiento y polimorfismo en la programación. El objetivo principal de OOP es unir los datos y las funciones que operan en ellos para que ninguna otra parte del código pueda acceder a estos datos, excepto esa función.

Aprendamos sobre las diferentes características de un lenguaje de programación orientado a objetos:

### Objeto:

Los objetos son entidades de tiempo de ejecución básicas en un sistema orientado a objetos, los objetos son instancias de una clase, son tipos de datos definidos por el usuario definidos.

```cpp
class Persona 
 { 
 private:
    char _nombre[20]; 
 public: 
    char* getNombre(){ return _nombre; }
    void  setNombre(char* nombre){ _nombre = nombre; }
 }; 
 
 int main() 
 { 
   Persona p1; //p1 es un objeto de tipo Persona
 } 
```
Note que en la clase **Persona** el nombre del atributo ```_nombre``` tiene un guión bajo inicial. Es usanza en C++ utilizar guión bajo o la letra **m** como prefijo al nombrar atributos de la clase para fines de distinguirlas fácilmente de variables globales y de variables locales.

Los objetos ocupan espacio en la memoria y tienen una dirección asociada como un registro en pascal o estructura o unión en C.

Cuando se ejecuta un programa, los objetos interactúan enviándose mensajes entre sí.

Cada objeto contiene datos y código para manipular los datos. Los objetos pueden interactuar sin tener que conocer detalles de los demás datos o códigos. Es suficiente conocer el tipo de mensaje aceptado y el tipo de respuesta devuelta por los objetos.

### Clase:

La clase es un plano de datos y funciones o métodos. La clase no ocupa ningún espacio.

```cpp
class nombre_de_la_clase
 { 
  private: 
     //declaración de atributos y métodos privados 
     //(solamente pueden ser accedidos desde el interior de la clase)
  public: 
     //declaración de atributos y métodos públicos 
     //(pueden ser accedidos desde cualquier parte del código)

  protected: 
     //declaración de atributos y métodos protegidos
     //(solamente pueden ser accedidos desde el interior de la clase y desde las clases hijas)
 }; 
```

La clase es un tipo de datos definido por el usuario como estructuras y uniones en C.

Por defecto, las variables de clase son privadas pero en el caso de la estructura es pública. en el ejemplo anterior la persona es una clase.

### Encapsulación y abstracción de datos:

La finalización (combinación) de datos y funciones en una sola unidad se conoce como encapsulación. Los datos no son accesibles al mundo exterior y solo las funciones que están envolviendo en la clase pueden acceder a ellos. Este aislamiento de los datos del acceso directo por parte del programa se denomina ocultación de datos o ocultación de información.

La abstracción de datos se refiere a proporcionar solo la información necesaria al mundo exterior y ocultar los detalles de la implementación. Por ejemplo, considere un complejo de clase con funciones públicas como getReal () y getImag (). Podemos implementar la clase como una matriz de tamaño 2 o como dos variables. La ventaja de las abstracciones es que podemos cambiar la implementación en cualquier momento, los usuarios de la clase Complex no se verán afectados ya que nuestra interfaz de método sigue siendo la misma. Si nuestra implementación fuera pública, no hubiéramos podido cambiarla.

### Herencia:

Herencia es el proceso por el cual los objetos de una clase adquieren las propiedades de los objetos de otra clase. Apoya el concepto de clasificación jerárquica. La herencia proporciona reutilización. Esto significa que podemos agregar características adicionales a una clase existente sin modificarla.

### Polimorfismo:

Polimorfismo significa capacidad para tomar más de una forma. Una operación puede exhibir diferentes comportamientos en diferentes instancias. El comportamiento depende de los tipos de datos utilizados en la operación.

C ++ admite la sobrecarga de operadores y la sobrecarga de funciones. La sobrecarga del operador es el proceso de hacer que un operador exhiba diferentes comportamientos en diferentes instancias. La sobrecarga de funciones está utilizando un solo nombre de función para realizar diferentes tipos de tareas. El polimorfismo se usa ampliamente en la implementación de la herencia.

### Encuadernación dinámica:

En el enlace dinámico, el código que se ejecutará en respuesta a la llamada de función se decide en tiempo de ejecución. C ++ tiene funciones virtuales para soportar esto.

### Paso de mensajes:

Los objetos se comunican entre sí enviando y recibiendo información entre sí. Un mensaje para un objeto es una solicitud para la ejecución de un procedimiento y, por lo tanto, invocará una función en el objeto receptor que genera los resultados deseados. El paso de mensajes implica especificar el nombre del objeto, el nombre de la función y la información que se enviará.
