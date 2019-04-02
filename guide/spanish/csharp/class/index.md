---
title: Class
localeTitle: Clase
---
## Clase

Una clase en C # se define como un tipo de referencia. Para establecer una variable de con un tipo de referencia, debe especificar la `new` palabra clave, de lo contrario, la variable tendrá el valor predeterminado de `null` . Vea a continuación un ejemplo.

```csharp
// The value of variableOne is null at this point. 
 NewClass variableOne; 
 
 // Now the value of variableOne will be an instance of the class NewClass 
 variableOne = new NewClass(); 
```

En tiempo de ejecución, cuando se crea la clase, se asigna suficiente memoria en el montón para esa instancia específica de la clase que contiene la variable.

#### Creando clases

Para crear una clase en C # necesitamos usar la palabra clave de `class` seguida de un identificador único.

Al igual que otros idiomas, C # crea un constructor predeterminado que no acepta parámetros. También podemos especificar nuestro propio constructor si necesitamos incluir parámetros especiales o tener pasos de iniciación personalizados en nuestro constructor.

```csharp
public class NewClass 
 { 
    NewClass(string name) 
    { 
        // Initialization steps... 
    } 
 } 
```

Una clase es un prototipo o plano a partir del cual se crean los objetos. En C #, la clase se define utilizando la clase de palabra clave. Una clase se usa para combinar juntos algunos métodos, propiedades, campos, eventos y delegados en una sola unidad. Una clase puede contener clases anidadas también.

#### Ejemplo: Considere el caso de la clase de empleado a continuación:

```csharp
using System; 
 
 namespace CPrograms 
 { 
    class Employee 
    { 
        private string name; 
        private int employeeId; 
 
        public Employee(string name, int employeeId) 
        { 
            this.name = name; 
            this.employeeId = employeeId; 
        } 
        public void PrintEmployee() 
        { 
            Console.WriteLine("Employee Name: {0} , Employee ID: {1}", this.name, this.employeeId); 
        } 
    } 
 
    class Program 
    { 
        static void Main(string[] args) 
        { 
            Employee employeeObject = new Employee("John Doe", 420156); 
            employeeObject.PrintEmployee(); 
        } 
    } 
 } 
```

Una clase puede heredar solo de una clase base. Sin embargo, puede implementarse desde más de una interfaz.

## Más información

Lea más sobre las clases [aquí](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)