---
title: Method Overloading
localeTitle: Método de sobrecarga
---
# Método de sobrecarga

Los parámetros predeterminados se introdujeron en C # versión 4.0, pero hasta ese momento, los codificadores de C # han estado utilizando una técnica diferente, que básicamente hace lo mismo, llamada sobrecarga de métodos. Permite al programador definir varios métodos con el mismo nombre, siempre que tomen un conjunto diferente de parámetros. Cuando utilice las clases del marco .NET, pronto se dará cuenta de que la sobrecarga de métodos se utiliza en todo el lugar.

## Ejemplo

1.  Cree un archivo de clase llamado Person.cs e ingrese el siguiente código. \`\` \` Persona de clase pública { cadena pública Nombre de pila {get; conjunto privado; } cadena pública Apellido {get; conjunto; }
    
    Persona pública (nombre de la cadena, nombre de la cadena) { this.FirstName = firstName; this.LastName = lastName; }
    
    cadena pública SayHello (nombre de cadena) { regresa "Hola," + nombre; }
    
    cadena pública SayHello (persona persona) { devuelve "Hola," + person.FirstName + "" + person.LastName; } }
    
```
2. In your default Program.cs file you can call now this class Person using the method overloading. 
```

programa de clase { estático vacío principal (cadena \[\] args) { Persona persona = nueva Persona ("Jane", "Doe"); Console.WriteLine (person.SayHello ("Peter Smith"));
```
        Person friend = new Person("Chuck", "Norris"); 
        Console.WriteLine(person.SayHello(friend)); 
 
        Console.ReadKey(); 
 
 
    } 
 } 
```

\`\` \`