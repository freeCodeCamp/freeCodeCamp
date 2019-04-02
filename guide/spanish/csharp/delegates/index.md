---
title: Delegates
localeTitle: Delegados
---
## Delegados

AC # delegado representa una referencia a un método que tiene un conjunto dado de parámetros y un tipo de retorno dado. Cuando creas una instancia del delegado, puedes asociarlo con cualquier método que sea compatible con el tipo de delegado: tiene la misma cantidad de parámetros, cada uno es del El mismo tipo y el tipo del valor de retorno también es el mismo.

Puede usar un método de instancia o un método estático cuando lo asigna a un delegado.

El delegado le permite pasar métodos como parámetros a otros métodos.

Los delegados se utilizan a menudo para implementar funciones de devolución de llamada. El ejemplo más típico son los controladores de eventos: te registras un método que debe llamarse cada vez que ocurre un evento determinado (por ejemplo, se hace clic en el botón del mouse).

### Breve explicación para los desarrolladores.

Los delegados son como punteros de función en lenguajes de tipo C como C o C ++. Sin embargo, son de tipo seguro. A diferencia de los punteros de función simple, contiene información sobre la instancia del objeto cuyo método se llamará al invocar al delegado, y tiene El tipo estricto comprueba los argumentos y el valor de retorno de la función.

## Ejemplo

Usted declara un delegado similar a la forma en que declara una función, pero agrega la palabra clave `delegate` . Por ejemplo:

```csharp
    public delegate string StringOperation ( string s1, string s2 ); 
```

Cualquier método que tome dos argumentos de `string` y devuelva `string` puede asignarse a una variable de este tipo de delegado.

Una vez que haya creado el tipo de delegado, puede usarlo como cualquier otro tipo. Puedes declarar una variable local, Otros miembros de la clase o pasarlos como parámetros a otros métodos.

```csharp
    StringOperation a; 
```

Antes de invocar al delegado, deberá asignarle un valor. Supongamos que tenemos un método de concatenación. que tiene la siguiente implementación:

```csharp
    private string Concatenate ( string one, string two ) { 
        return one + " " + two; 
    } 
```

Luego, puede asignar esto a la variable delegada e invocarla como una función.

```csharp
    StringOperation op = Concatenate; 
 
    string result = op("Hello", "World"); 
 
    Console.WriteLine ( result ); // print "Hello World" to the console 
```

## Más información

Lea más sobre los delegados [aquí](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) .