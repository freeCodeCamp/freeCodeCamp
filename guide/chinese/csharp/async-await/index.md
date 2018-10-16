---
title: Async / Await
localeTitle: 异步/等待
---
# 异步/等待关键字

C＃中的`async` / `await`关键字提供了管理资源密集型应用程序的便捷方法，这些应用程序在前端语言（如Javascript库）中更为常见。返回`Task<T>`类型的方法可以使用`async`关键字`async` ，并且当在UI处理程序或服务工作流中调用这些方法时，我们可以使用方法上的`await`来告诉C＃将控制权返回给它的调用者，直到后台工作完成了。通过对资源密集型调用产生控制，我们能够让UI更具响应性并使服务更具弹性。

`async`和`await`的核心是`Task<T>`类。当与`async`关键字一起使用它作为方法的返回类型时，我们指示该方法已经承诺返回`T`类型的对象（对于不返回任何值的方法，使用`Task`作为返回类型） 。 `Task<T>`是一个复杂的主题，有关更多信息，请参阅官方文档： [Task Class](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=netframework-4.7.1) 。

一旦遇到`async`方法，工作将在线程池中排队执行，而调用者将继续执行而不等待`async`方法的返回值。但是，在大多数情况下，我们的UI和服务依赖于从`async`方法返回的值：例如，当我们使用`async`方法查询本地数据库时，我们最终想知道查询结果是什么并对其进行操作，同步。这是使用`await`关键字的地方：如果在调用`async`方法时使用`await`关键字，调用者将暂停执行，直到从`async`方法返回结果，并且表示父方法将继续执行而不等待调用者完成。话虽如此，任何使用`await`关键字的方法本身都必须是`async`函数 - 这也是由C＃编译器强制执行的，如果使用Visual Studio编写C＃代码，IDE会在方法违反`async-await`发出警告`async-await`合同。

要了解有关使用promise模型处理异步的更多信息，请查看此维基百科页面： [通过Promises实现异步](https://en.wikipedia.org/wiki/Futures_and_promises)

## 例子

1.  将表单提交到服务器

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

2.  “锁存器”同步器

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

## 备忘单

*   等待：从后台异步调用中检索结果。
*   await Task.WhenAny：如果任何排队任务完成，则继续。
*   await Task.WhenAll：仅在所有排队任务完成后才继续。
*   等待Task.Delay：在执行前保持一段时间。

## 深入阅读：

*   [异步编程](https://docs.microsoft.com/en-us/dotnet/csharp/async)
*   [异步深入](https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth)
*   [asnyc的3个基本提示](https://channel9.msdn.com/Series/Three-Essential-Tips-for-Async)