---
title: Async / Await
localeTitle: Async / Await
---
# Async / espera palabras clave

Las palabras clave `async` / `await` en C # brindan formas convenientes de administrar aplicaciones que hacen un uso intensivo de recursos, que son más comunes en los lenguajes front-end, como las bibliotecas de Javascript. Los métodos que devuelven `Task<T>` tipos de `Task<T>` se pueden coronar con la palabra clave `async` , y al llamar a estos métodos en un controlador de UI o en un flujo de trabajo del servicio, podemos usar la `await` de los métodos para indicar a C # que devuelva el control a su interlocutor hasta el trabajo de fondo está terminado. Al ceder el control de las llamadas con uso intensivo de recursos, podemos permitir que la UI sea más receptiva y haga que el servicio sea más elástico.

El núcleo de `async` y la `await` es la clase `Task<T>` . Cuando se usa junto con la palabra clave `async` como el tipo de retorno de un método, indicamos que el método ha prometido devolver un objeto del tipo `T` (para los métodos que no devolverían ningún valor, use la `Task` como el tipo de retorno) . `Task<T>` es un tema sofisticado propio, para obtener más información, consulte los documentos oficiales: [Clase de tarea](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=netframework-4.7.1) .

Una vez que encuentre métodos `async` , el trabajo se pondrá en cola en un grupo de subprocesos para su ejecución, mientras que el llamante continuará su ejecución sin esperar los valores de retorno de los métodos `async` . Sin embargo, en la mayoría de las ocasiones, nuestra IU y nuestro servicio se basan en los valores devueltos por los métodos `async` : por ejemplo, cuando consultamos una base de datos local utilizando los métodos `async` , `async` saber cuáles son los resultados de la consulta y actuar sobre ellos. sincrónicamente. Aquí es donde la `await` se utilizará la palabra clave: si se utiliza el `await` palabra clave cuando se invoca un `async` método, la persona que llama hará una pausa en la ejecución hasta que el resultado se devuelve desde el `async` método, y la media de tiempo, el método de los padres va a continuar la ejecución sin tener que esperar en la persona que llama para terminar. Dicho esto, cualquier método que use la palabra clave `await` debe ser una función `async` sí mismo. Esto también lo aplica el compilador de C #. Si usa Visual Studio para escribir su código C #, el IDE le avisará si un método viola el `async-await` contrato.

Para obtener más información sobre el uso del modelo de promesa para manejar la asincronía, consulte esta página de wikipedia: [Lograr la asincronía mediante promesas](https://en.wikipedia.org/wiki/Futures_and_promises)

## Ejemplos

1.  Enviar formulario al servidor

```csharp
private readonly string url = 'http://localhost:3000/api/submit'; 
 private readonly HttpContent formContent = new HttypContent(); 
 
 // Update the formContent object while filling up the form. 
 
 SubmitButton.Clicked += async (object, event) => 
 { 
  // When PostAsync is hit, the button control will release the UI, while the 
  //   http post method is still waiting on server response. 
  HttpClient httpClient = new HttpClient(); 
  var response = await httpClient.PostAsync(url, formContent); 
  Console.WriteLine(response.StatusCode); 
 } 
```

2.  Sincronizador de "pestillos"

```csharp
public async Task<int> CalcDamage(Player player) 
 { 
  // CPU-intense method, calculate afflicted damage done to the 
  //   Boss based on the damage types, Boss stats (from static data), 
  //   player stats, etc. 
  // ... 
 } 
 
 public static async Task<int> CalcTotalDamage(IEnumerable<Player> group) 
 { 
  var totalDamage = 0; 
  foreach (Player player in group) 
  { 
    // each of the async methods are queued in the thread-pool and move on. 
    totalDamage += CalcDamage(player); 
  } 
 
  // total damage done must be calculated from all players in the group 
  //   before we return the result. 
  return await Task.WhenAll(totalDamage); 
 } 
```

## Hoja de trucos

*   await: recupera el resultado de una llamada asíncrona en segundo plano.
*   aguarda Tarea. Cuando: Cualquiera: continúa si alguna de las tareas en cola está completa.
*   aguarda Tarea. Cuando todo: solo continúa si todas las tareas en cola están completas.
*   aguarda Task.Delay: manténgalo durante un período de tiempo adicional antes de la ejecución.

## Lectura en profundidad:

*   [Programación asíncrona](https://docs.microsoft.com/en-us/dotnet/csharp/async)
*   [Async en profundidad](https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth)
*   [3 consejos esenciales para asnyc](https://channel9.msdn.com/Series/Three-Essential-Tips-for-Async)