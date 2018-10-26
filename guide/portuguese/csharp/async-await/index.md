---
title: Async / Await
localeTitle: Async / Await
---
# Palavras-chave Async / Await

As palavras-chave `async` / `await` em C # fornecem maneiras convenientes de gerenciar aplicativos que usam muitos recursos, mais comuns em linguagens front-end, como bibliotecas Javascript. Os métodos que retornam tipos `Task<T>` podem ser coroados com a palavra `async` chave `async` e, ao chamar esses métodos em um manipulador de UI ou fluxo de trabalho de serviço, podemos usar o método de `await` para informar ao C # para retornar o controle a seu chamador até que o trabalho de segundo plano está concluído. Ao gerar o controle de chamadas com uso intenso de recursos, podemos permitir que a interface do usuário seja mais responsiva e torne o serviço mais elástico.

O núcleo do `async` e do `await` é a classe `Task<T>` . Ao usá-lo junto com a palavra `async` chave `async` como o tipo de retorno de um método, indicamos que o método prometeu retornar um objeto do tipo `T` (para métodos que não retornariam nenhum valor, use `Task` como o tipo de retorno) . `Task<T>` é um tópico sofisticado, para mais informações, consulte os documentos oficiais: [Classe de Tarefa](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=netframework-4.7.1) .

Depois de encontrar métodos `async` , o trabalho será enfileirado em um conjunto de encadeamentos para execução, enquanto o chamador continuará sua execução sem aguardar os valores de retorno dos métodos `async` . No entanto, na maioria das ocasiões, nossa interface do usuário e serviço dependem dos valores retornados dos métodos `async` : por exemplo, quando consultamos um banco de dados local usando os métodos `async` , gostaríamos de saber quais são os resultados da consulta e agir sobre eles. sincronicamente. Este é o lugar onde o `await` serão utilizados palavra-chave: se estiver usando o `await` palavra-chave ao invocar um `async` método, o chamador irá pausar a execução até que um resultado é retornado do `async` método, e ao mesmo tempo dizer, o método pai vai continuar a execução sem esperar em o chamador para terminar. Com isso dito, qualquer método que use `await` keyword tem que ser uma função `async` - isso também é imposto pelo compilador C #, se estiver usando o Visual Studio para escrever seu código C #, o IDE avisará se um método violar o `async-await` contrato de `async-await` .

Para saber mais sobre como usar o modelo de promessa para lidar com assincronia, confira esta página da Wikipédia: [Alcançando](https://en.wikipedia.org/wiki/Futures_and_promises) assincronia [através de promessas](https://en.wikipedia.org/wiki/Futures_and_promises)

## Exemplos

1.  Enviar formulário para o servidor

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

2.  Sincronizador "Latches"

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

## Folha de dicas

*   await: recupera o resultado de uma chamada assíncrona em segundo plano.
*   aguarde Task.WhenAny: continue se alguma das tarefas na fila estiver concluída.
*   await Task.WhenAll: continua se todas as tarefas na fila estiverem completas.
*   aguarde Task.Delay: segure por um período de tempo adicional antes da execução.

## Leitura aprofundada:

*   [Programação assíncrona](https://docs.microsoft.com/en-us/dotnet/csharp/async)
*   [Assíncrono em profundidade](https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth)
*   [3 dicas essenciais para asnyc](https://channel9.msdn.com/Series/Three-Essential-Tips-for-Async)