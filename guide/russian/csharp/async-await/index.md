---
title: Async / Await
localeTitle: Async / Await
---
# Асинхронные / ожидающие ключевые слова

`async` / `await` ключевые слова на C # предоставляют удобные способы управления ресурсами-приложениями, которые более распространены в интерфейсных языках, таких как библиотеки Javascript. Методы, возвращающие типы `Task<T>` могут быть увенчаны ключевым словом `async` , а при вызове этих методов в обработчике пользовательского интерфейса или рабочем процессе службы мы можем использовать `await` методов, чтобы сообщить C #, чтобы вернуть управление его вызывающему абоненту до тех пор, пока фоновая работа завершена. Получив контроль над интенсивными вызовами с ресурсами, мы можем позволить пользовательскому интерфейсу быть более отзывчивым и сделать сервис более эластичным.

Ядром `async` и `await` класс `Task<T>` . При использовании его вместе с ключевым словом `async` в качестве возвращаемого типа метода мы указываем, что метод обещал вернуть объект типа `T` (для методов, которые не вернули бы какое-либо значение, вместо этого вместо использования вместо него использовать `Task` ) , `Task<T>` представляет собой сложную тему, для получения дополнительной информации, пожалуйста, обратитесь к официальным документам: [Task Class](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=netframework-4.7.1) .

После обнаружения `async` методов работа будет поставлена ​​в очередь в пуле потоков для выполнения, в то время как вызывающая сторона продолжит выполнение, не ожидая возвращаемых значений из методов `async` . Однако в большинстве случаев наш пользовательский интерфейс и служба полагаются на значения, возвращаемые методами `async` : например, когда мы запрашиваем локальную базу данных с использованием методов `async` , мы в конечном итоге хотим знать, какие результаты запроса и действовать на них, синхронно. Это где `await` ключевого слово должно использоваться: при использовании `await` ключевого слова при вызове в `async` методе, вызывающий абонент будет приостановить выполнение , пока результат не будет возвращен из `async` методы, и среднее время, родительский метод будет продолжать выполнение , не ожидая вызывающего абонента. С учетом сказанного, любые методы, использующие ключевое слово `await` должны быть самой `async` функцией - это принудительно применяется компилятором C #, а также, если вы используете Visual Studio для написания вашего кода на C #, IDE предупредит вас, если метод нарушает `async-await` контракт.

Чтобы узнать больше об использовании модели обещаний для обработки асинхронности, ознакомьтесь с этой страницей wikipedia: [Достижение асинхронности через обещания](https://en.wikipedia.org/wiki/Futures_and_promises)

## Примеры

1.  Отправить форму на сервер

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

2.  Синхронизатор "Защелки"

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

## Чит-лист

*   Ожидание: получение результата из фонового асинхронного вызова.
*   ожидание Task.WhenAny: продолжить, если какая-либо из поставленных задач завершена.
*   ожидание Task.WhenAll: продолжить, только если все задачи поставлены в очередь.
*   Ожидайте Task.Delay: удерживайте в течение дополнительного периода времени перед выполнением.

## Углубленное чтение:

*   [Асинхронное программирование](https://docs.microsoft.com/en-us/dotnet/csharp/async)
*   [Асинхронное углубление](https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth)
*   [3 основных совета для asnyc](https://channel9.msdn.com/Series/Three-Essential-Tips-for-Async)