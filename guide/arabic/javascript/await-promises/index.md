---
title: Await Promises
localeTitle: في انتظار الوعود
---
## في انتظار الوعود

يجعل [مشغلي](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) `async` / `await` من السهل تنفيذ العديد من وعود async. كما أنها تسمح للمهندسين بكتابة أكواد أكثر وضوحًا وإيجازًا وقابلة للاختبار.

لفهم هذا الموضوع ، يجب أن يكون لديك فهم قوي لكيفية عمل [الوعود](https://guide.freecodecamp.org/javascript/promises) .

* * *

## بناء الجملة الأساسي

\`\` \`جافا سكريبت function slowResolvedPromiseFunc (string) { return new Promise (resol = = { setTimeout (() => { حل (سلسلة)؛ } ، 5000) ؛ })؛ }

وظيفة async doIt () { const myPromise = await slowResolvedPromiseFunc ("foo")؛ console.log (myPromise)؛ // "foo" }

افعلها()؛

 ``There are a few things to note: 
 
 * The function that encompasses the `await` declaration must include the `async` operator. This will tell the JS interpreter that it must wait until the Promise is resolved or rejected. 
 * The `await` operator must be inline, during the const declaration. 
 * This works for `reject` as well as `resolve`. 
 
 --- 
 
 ## Nested Promises vs. `Async` / `Await` 
 
 Implementing a single Promise is pretty straightforward. In contrast, Chained Promises or the creation of a dependency pattern may produce "spaghetti code". 
 
 The following examples assume that the <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> library is available as `rp`. 
 
 ### Chained/Nested Promises 
`` 

جافا سكريبت // الوعد الأول const fooPromise = rp ("http://domain.com/foo")؛

fooPromise.then (resultFoo => { // يجب انتظار "foo" لحلها console.log (resultFoo)؛

 `const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 return Promise.all([barPromise, bazPromise]); 
` 

}). then (resultArr => { // تعامل مع "bar" و "baz" هنا console.log (resultArr \[0\])؛ console.log (resultArr \[1\])؛ })؛

 ``### `async` and `await` Promises 
`` 

جافا سكريبت // لف كل شيء في وظيفة متزامن وظيفة async doItAll () { // انتزاع البيانات من نقطة النهاية "فو" ، ولكن انتظر الحل console.log (في انتظار rp ("http://domain.com/foo"))؛

 `// Concurrently kick off the next two async calls, 
 // don't wait for "bar" to kick off "baz" 
 const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 // After both are concurrently kicked off, wait for both 
 const barResponse = await barPromise; 
 const bazResponse = await bazPromise; 
 
 console.log(barResponse); 
 console.log(bazResponse); 
` 

}

// وأخيرا ، استدعاء الدالة المتزامن doItAll (). ثم (() => console.log ('Done!'))؛

 ``The advantages of using `async` and `await` should be clear. This code is more readable, modular, and testable. 
 
 It's fair to note that even though there is an added sense of concurrency, the underlying computational process is the same as the previous example. 
 
 --- 
 
 ## Handling Errors / Rejection 
 
 A basic try-catch block handles a rejected Promise. 
`` 

جافا سكريبت خطأ غير متزامن functionExample () { محاولة { const rejectedPromise = await Promise.reject ("Oh-oh!")؛ } catch (خطأ) { console.log (خطأ)؛ // "اه-اوه!" } }

errorExample ()؛ \`\` \`

* * *

#### معلومات اكثر:

*   `await` مشغل [MDN مستندات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   `async` Function Operator [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)