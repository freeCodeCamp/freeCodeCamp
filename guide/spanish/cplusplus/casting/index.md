---
title: Casting
localeTitle: Fundición
---
## Fundición

Un cast es un operador especial que obliga a un tipo de datos a convertirse en otro

La conversión en C ++ difiere un poco de la de C. C ++ hace uso de distintas funciones de conversión.

### static\_cast

La conversión estática se utiliza para las conversiones implícitas entre primitivas y sobrecargas de tipos.

### const\_cast

Se puede usar Const cast para lanzar la constancia. Esto es útil cuando hay un deseo de mutar un valor constante. Esto debería usarse con moderación, en cambio, uno debería considerar hacer parámetros / funciones no constantes en los casos en que se utiliza una conversión constante.

Const cast también puede resultar en un comportamiento indefinido. La única aplicación de const cast debería ser eliminar la constancia de un valor que se pasó a una función y se marcó const. Si el valor es realmente constante, es decir, se marca const en el momento de la compilación y se le asigna un valor, la conversión constante y la mutación de la variable darán como resultado un comportamiento indefinido.
```
const int y = 10;             // y is set to 10. 
 const_cast<int &>(y) = 20;    // undefined behaviour. 
```

### dynamic\_cast

La conversión dinámica se utiliza para convertir un objeto dentro de su jerarquía de clases (de padre a padre, de padre y de hermanos). El reparto dinámico solo puede ser llamado en clases polimórficas. Por lo tanto, la clase original en este caso, `MyClass` debe tener un miembro virtual, que está presente en la forma del destructor virtual.

Si el reparto dinámico falla, devolverá un `nullptr` . La conversión dinámica puede ser útil para determinar los tipos de objetos en tiempo de ejecución. Sin embargo, debe tenerse en cuenta que la conversión dinámica no es gratuita y, en algunos casos, otras técnicas pueden resultar más eficientes en la determinación del tipo de clase en el tiempo de ejecución.

### reinterpretar\_cast

Reinterpretar el reparto es quizás el más peligroso de todos los repartos de C ++, pero cuando se usa correctamente puede ser ideal. Reinterpretar cast no incurre en ningún costo de rendimiento, ya que no realiza ninguna conversión. Simplemente le indica al compilador que trate el objeto fundido como si fuera el tipo solicitado. Esto también puede generar problemas de alineación, por lo que debe usarse con moderación y solo cuando se conocen y se tienen en cuenta los efectos secundarios.

#### Una nota sobre moldes de estilo C

C ++ admite el uso de moldes de estilo C, aunque no se recomiendan. El uso de la conversión de estilo C le indicará al compilador que realice primero una conversión estática _, si la conversión estática_ falla, se usa reinterpret\_cast en su lugar. Por esta razón, los modelos de estilo C pueden producir resultados impredecibles y generar problemas inesperados.

## Ejemplos

```cpp
#include <iostream> 
 
 class MyClass { 
 public: 
    virtual ~MyClass() = default; 
 
    void greet() { 
        std::cout << "Hello World!" << std::endl; 
    } 
 }; 
 
 class MyClassChild : public MyClass { 
 }; 
 
 void reinterpretCastTest(void *objectPtr) { 
    // Let's assume we know objectPtr is of type MyClass * 
    auto myClassObj = reinterpret_cast<MyClassChild *>(objectPtr); 
    myClassObj->greet(); 
 } 
 
 void constCastTest(const MyClassChild &myClassChild) { 
    auto nonConst = const_cast<MyClassChild &>(myClassChild); 
    nonConst.greet(); 
 } 
 
 void dynamicCastTest(MyClass *myClass) { 
    auto *child = dynamic_cast<MyClassChild *>(myClass); 
    child->greet(); 
 } 
 
 void staticCastTest(float floatVal) { 
    // Convert the float into an int. 
    auto intVal = static_cast<int>(floatVal); 
    std::cout << intVal << std::endl; 
 } 
 
 int main() { 
    MyClassChild myClass; 
    reinterpretCastTest(&myClass); 
    constCastTest(myClass); 
    dynamicCastTest(&myClass); 
    staticCastTest(10.5); 
 
    return 0; 
 } 

```