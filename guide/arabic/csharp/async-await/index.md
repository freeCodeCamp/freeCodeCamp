---
title: Async / Await
localeTitle: غير متزامن / في انتظار
---
# Async / Await Keywords

توفر الكلمات الرئيسية غير `async` / `await` في C # طرقًا مريحة لإدارة التطبيقات ذات الموارد المكثفة ، وهي أكثر شيوعًا في اللغات الأمامية مثل مكتبات جافا سكريبت. الأساليب التي ترجع يمكن أن تتوج أنواع `Task<T>` بالكلمة الرئيسية `async` ، وعند استدعاء هذه الطرق في معالج واجهة المستخدم أو سير العمل ، يمكننا استخدام `await` على الطرق لإخبار C # بإرجاع عنصر التحكم مرة أخرى إلى المتصل حتى انتهت مهمة الخلفية. ومن خلال التحكم في المكالمات ذات الموارد المكثفة ، يمكننا السماح لواجهة المستخدم بأن تكون أكثر استجابة وأن تجعل الخدمة أكثر مرونة.

جوهر `async` `await` هي فئة `Task<T>` . عند استخدامه مع الكلمة الرئيسية `async` كنوع الإرجاع للطريقة ، فإننا نوضح أن الطريقة قد وعدت بإرجاع كائن من النوع `T` (للطرق التي لن تعيد أي قيمة ، استخدم `Task` كنوع الإرجاع بدلاً من ذلك) . `Task<T>` هي موضوع متطور خاص بها ، لمزيد من المعلومات ، يرجى الرجوع إلى الوثائق الرسمية: [فئة المهام](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=netframework-4.7.1) .

بمجرد مواجهة أساليب `async` ، سيتم وضع العمل في قائمة الانتظار في تجمع مؤشر ترابط للتنفيذ ، بينما يستمر المتصل في تنفيذه دون انتظار قيم الإرجاع من أساليب `async` . ومع ذلك ، في معظم الحالات ، تعتمد واجهة المستخدم والخدمة على القيم التي يتم إرجاعها من أساليب `async` : على سبيل المثال ، عندما نقوم بالاستعلام عن قاعدة بيانات محلية باستخدام أساليب `async` ، فإننا نرغب في النهاية في معرفة ما هي نتائج الاستعلام والتصرف عليها ، متزامن. هذا هو المكان الذي `await` يجوز استخدام الكلمة: في حالة استخدام `await` الكلمة عند استدعاء أحد `async` طريقة، فإن المتصل وقفة التنفيذ حتى يتم إرجاع نتيجة لذلك من `async` الطريقة، ويعني في حين، وسوف تستمر في طريقة الأم التنفيذ دون انتظار المتصل للانتهاء. وقال مع ذلك، أي الأساليب التي تستخدم `await` الكلمة يجب أن تكون `async` وظيفة أنفسهم - وهذا هو المتبع من قبل C # مترجم وكذلك، إذا باستخدام Visual Studio إلى حسابك على إكبس C # رمز، فإن IDE يحذرك إذا كان الأسلوب ينتهك `async-await` العقد.

لمعرفة المزيد حول استخدام نموذج الوعد للتعامل مع عدم التزامن ، راجع صفحة ويكيبيديا: [تحقيق](https://en.wikipedia.org/wiki/Futures_and_promises) التزامن من [خلال الوعود](https://en.wikipedia.org/wiki/Futures_and_promises)

## أمثلة

1.  تقديم نموذج للخادم

 `private readonly string url = 'http://localhost:3000/api/submit'; 
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
` 

2.  المزالج "المزالج"

 `public async Task<int> CalcDamage(Player player) 
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
` 

## الغش ورقة

*   في انتظار: استرداد النتيجة من مكالمة متزامن في الخلفية.
*   انتظر Task.WhenAny: متابعة إذا اكتمال أي من المهام في قائمة الانتظار.
*   انتظر Task.WhenAll: متابعة فقط إذا اكتمال كافة المهام في قائمة الانتظار.
*   في انتظار المهمة.تحديد: لفترة إضافية من الوقت قبل التنفيذ.

## قراءة متعمقة:

*   [برمجة غير متزامنة](https://docs.microsoft.com/en-us/dotnet/csharp/async)
*   [المتزامن في العمق](https://docs.microsoft.com/en-us/dotnet/standard/async-in-depth)
*   [3 نصائح أساسية ل asnyc](https://channel9.msdn.com/Series/Three-Essential-Tips-for-Async)