---
title: Inline Functions in C++
localeTitle: Funciones en línea en C ++
---
## Funciones en línea en C ++

Cuando el programa ejecuta la instrucción de llamada de función, la CPU almacena la dirección de memoria de la instrucción que sigue a la llamada de función, copia los argumentos de la función en la pila y finalmente transfiere el control a la función especificada. La CPU luego ejecuta el código de función, almacena el valor de retorno de la función en una ubicación / registro de memoria predefinidos y devuelve el control a la función de llamada. Esto puede convertirse en una sobrecarga si el tiempo de ejecución de la función es menor que el tiempo de conmutación de la función de la persona que llama a la función llamada (persona llamada). Para las funciones que son grandes y / o realizan tareas complejas, la sobrecarga de la llamada a la función suele ser insignificante en comparación con la cantidad de tiempo que la función tarda en ejecutarse. Sin embargo, para funciones pequeñas y de uso común, el tiempo necesario para realizar la llamada a la función es a menudo mucho más que el tiempo necesario para ejecutar realmente el código de la función. Esta sobrecarga se produce para funciones pequeñas porque el tiempo de ejecución de una función pequeña es menor que el tiempo de conmutación.

C ++ proporciona funciones en línea para reducir la sobrecarga de llamadas a funciones. La función en línea es una función que se expande en línea cuando se llama. Cuando la función en línea se llama, el código completo de la función en línea se inserta o se sustituye en el punto de la llamada de la función en línea. Esta sustitución es realizada por el compilador de C ++ en tiempo de compilación. La función en línea puede aumentar la eficiencia si es pequeña. La sintaxis para definir la función en línea es:

```cpp
inline return-type function-name(parameters) 
 { 
    // function code 
 } 
```

Recuerde, la inclusión es solo una solicitud al compilador, no un comando. El compilador puede ignorar la solicitud de inscripción. El compilador no puede realizar inlining en tales circunstancias como:

*   Si una función contiene un bucle. (para, mientras, do-while)
*   Si una función contiene variables estáticas.
*   Si una función es recursiva.
*   Si el tipo de retorno de una función es distinto de vacío, la declaración de retorno no existe en el cuerpo de la función.
*   Si una función contiene switch o goto.

### Las funciones en línea proporcionan las siguientes ventajas:

*   La sobrecarga de llamada de función no se produce.
*   También ahorra la sobrecarga de las variables push / pop en la pila cuando se llama a la función.
*   También ahorra gastos generales de una llamada de retorno de una función.
*   Cuando integra una función, puede habilitar al compilador para que realice una optimización específica del contexto en el cuerpo de la función. Tales optimizaciones no son posibles para llamadas de función normales. Se pueden obtener otras optimizaciones considerando los flujos de contexto de llamada y el contexto de llamada.
*   La función en línea puede ser útil (si es pequeña) para sistemas integrados porque en línea puede producir menos código que la función de preámbulo de llamada y retorno.

### Desventajas de la función en línea:

*   Las variables agregadas de la función en línea consumen registros adicionales, después de la función de alineación si el número de variables que van a usar el registro aumenta, lo que puede generar una sobrecarga en la utilización de recursos de la variable de registro. Esto significa que cuando el cuerpo de la función en línea se sustituye en el punto de llamada de la función, también se inserta el número total de variables utilizadas por la función. Por lo tanto, el número de registros que se van a utilizar para las variables también aumentará. Por lo tanto, si después de la función los números de variables en línea aumentan drásticamente, entonces seguramente causaría una sobrecarga en la utilización del registro.
    
*   Si usa demasiadas funciones en línea, el tamaño del archivo ejecutable binario será grande, debido a la duplicación del mismo código.
    
*   Demasiado inline también puede reducir la tasa de aciertos de la memoria caché de instrucciones, lo que reduce la velocidad de búsqueda de la memoria caché a la de la memoria primaria.
    
*   La función en línea puede aumentar la sobrecarga del tiempo de compilación si alguien cambia el código dentro de la función en línea, entonces toda la ubicación de la llamada debe volver a compilarse porque el compilador deberá reemplazar todo el código una vez más para reflejar los cambios; de lo contrario, continuará con la funcionalidad anterior.
    
*   Las funciones en línea pueden no ser útiles para muchos sistemas integrados. Porque en los sistemas integrados el tamaño del código es más importante que la velocidad.
    
*   Las funciones en línea pueden provocar una paliza porque la incorporación puede aumentar el tamaño del archivo ejecutable binario. Golpear en la memoria hace que el rendimiento de la computadora se degrade.
    

El siguiente programa demuestra este concepto:

```cpp
#include <iostream> 
 using namespace std; 
 class operation 
 { 
    int a,b,add,sub,mul; 
    float div; 
 public: 
    void get(); 
    void sum(); 
    void difference(); 
    void product(); 
    void division(); 
 }; 
 inline void operation :: get() 
 { 
    cout << "Enter first value:"; 
    cin >> a; 
    cout << "Enter second value:"; 
    cin >> b; 
 } 
 
 inline void operation :: sum() 
 { 
    add = a+b; 
    cout << "Addition of two numbers: " << a+b << "\n"; 
 } 
 
 inline void operation :: difference() 
 { 
    sub = ab; 
    cout << "Difference of two numbers: " << ab << "\n"; 
 } 
 
 inline void operation :: product() 
 { 
    mul = a*b; 
    cout << "Product of two numbers: " << a*b << "\n"; 
 } 
 
 inline void operation ::division() 
 { 
    div=a/b; 
    cout<<"Division of two numbers: "<<a/b<<"\n" ; 
 } 
 
 int main() 
 { 
    cout << "Program using inline function\n"; 
    operation s; 
    s.get(); 
    s.sum(); 
    s.difference(); 
    s.product(); 
    s.division(); 
    return 0; 
 } 
```

Salida:
```
Enter first value: 45 
 Enter second value: 15 
 Addition of two numbers: 60 
 Difference of two numbers: 30 
 Product of two numbers: 675 
 Division of two numbers: 3 

```