---
title: Async / Await
---

# Async / Await Keywords

The `async`/`await` keywords in C# provide convenient ways of managing resource-intensive applications, which are more common in front-end languages such as JavaScript libraries. Methods that return `Task<T>` types can be crowned with the `async` keyword, and when calling these methods in a UI handler or service workflow, we can use the `await` on the methods to tell C# to yield the control back to its caller until the background job is finished. By yielding the control on resources-intensive calls, we are able to allow UI to be more responsive and make the service more elastic.

The core of the `async` and `await` are the `Task<T>` class. When using it along with the `async` keyword as the return type of a method, we indicate that the method has promised to return an object of the `T` type (for methods that wouldn't return any value, use `Task` as the return type instead). `Task<T>` is a sophisticated topic of its own, for more information, please refer to the official documents: [Task Class](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=netframework-4.7.1).

Once encountering `async` methods, the work will be queued in a thread-pool for execution, while the caller will continue its execution without waiting on return values. However, in most cases our UI and service rely on the values returned from asychronous method calls. This is where the `await` keyword comes in. If an asynchronous method call is preceded by the `await` keyword, control will then be returned to the parent method while the result from that asynchronous method is being computed. Additionally, any methods that contain the `await` keyword must be `async` methods themselves, which is enforced by the compiler. Such a method is declared with the access control modifier followed by async and finally the return type, as in: 

```csharp
  public async Task<string> DoSomethingAsync() 
  { 
    /* Async code containing the 'await' keyword. 
       This method will return a string as denoted by Task<string> above. */ 
  }
```

**Note that it is convention in C# for an asynchronous method such as `DoSomethingAsync()` to contain `Async` at the end of its name.**

To learn more about using the promise model to handle asynchrony, check out this Wikipedia page: [Achieving Asynchrony through Promises](https://en.wikipedia.org/wiki/Futures_and_promises)

## Examples

1. Submit Form to the Server

```csharp
private readonly string url = "http://localhost:3000/api/submit";
private readonly HttpContent formContent = new HttpContent();

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

2. "Latches" Synchronizer

```csharp
public async Task<int> CalcDamage(Player player)
{
  // CPU-intense method, calculate afflicted damage done to the
  //   Boss based on the damage types, Boss stats (from static data),
  //   player stats, etc.
  // ...
  await Task.Delay(1000); // extemely time consuming calculation
  return 3;               // that calculates a very accurate damage thats not hardcoded at all
}

public async Task<int> CalcTotalDamage(IEnumerable<Player> players)
{
  var tasks = new List<Task<int>>();
  foreach (Player player in players)
  {
    // each of the async methods are queued in the thread-pool and move on.
    var t = CalcDamage(player);
    // storing reference to the task
    tasks.Add(t);
  }

  // total damage done must be calculated from all players in the group
  //   before we return the result.
  var completeTask = await Task.WhenAll(tasks);
  return completeTask.Sum();
}
```

## Cheat-sheet
- await: retrieve the result from a background async call.
- await Task.WhenAny: continue if any of the queued tasks is complete.
- await Task.WhenAll: only continue if all of the queued tasks are complete.
- await Task.Delay: hold for an additional period of time before execution.

## In-depth read:
- [Asynchronous programming](https://docs.microsoft.com/en-us/dotnet/csharp/async)
- [Async in depth](https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth)
- [3 essential tips for asnyc](https://channel9.msdn.com/Series/Three-Essential-Tips-for-Async)
