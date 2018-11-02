---
title: Reactive Extensions
localeTitle: الامتدادات التفاعلية
---
# الامتدادات التفاعلية في الزاوي

#### التحفيز

الامتدادات التفاعلية لجافا سكريبت (RxJS) هي مكتبة لتدفقات البيانات التي _يمكن ملاحظتها_ . يتم تثبيت RxJS باستخدام تنفيذ Angular عند سطر الأوامر `ng new [name-of-application]` . هذا يستخدم واجهة سطر الأوامر Angular (CLI). RxJS تكمل كيفية تبسيط البيانات من خلال `Observable` . يسهل الكائن `Observable` تدفق البيانات _المتكرّرة_ .

تيارات البيانات ليست حالة الاستخدام الأساسية. بعد كل شيء ، تدفقات البيانات دفق الحدث المتوازي. تنفث الأحداث حتى يعلم التطبيق عند وصول البيانات. في حين أن تدفقات الحدث تشكل جوهر ما تكمله RxJS ، فإن هذه المقالة تشير إلى أنها تدفقات البيانات أيضًا.

تدفقات تنفيذ إما بشكل متزامن (فوري) أو بشكل غير متزامن (العمل الإضافي). يعالج RxJS كلتا الحالتين بسهولة عبر تدفق البيانات `Observable` . صارم asynchronicity على الرغم من. عند العمل مع الذاكرة ، تحدث البيانات _المتكرّرة على_ الفور بينما يستغرق جلب البيانات الخارجية بعض الوقت. يدعم Angular مكتبة RxJS بحيث يمكنه التعامل مع كل من حالات الاستخدام مع تدفقات البيانات.

#### برمجة رد الفعل

قبل الغوص ، من المهم فهم النموذج الذي يدعم مكتبة RxJS. كما ذكر ، فإنه يعمل من خلال الكائن `Observable` الذي يبسط البيانات التي تنبعث منها الأحداث.

وظائف RxJS حول القاعدة `Observable` . تكمل المكتبة بأكملها ما يمكن أن تفعله. يتضمن RxJS حتى الكائنات الأخرى بما في ذلك `Subject` `Subscription` `Observer` . كل عبارة عن متغير مخصص خاص بها للقاعدة `Observable` .

نشأت RxJS من نموذج البرمجة التفاعلية. قدم هذا النموذج نمط _يمكن ملاحظته_ . في ذلك يوجد هذه الفكرة الرئيسية: واحدة `Observable` تنبعث أثناء بكل ما فيها من `Observer` الصورة الحصول على إخطار. _يشترك_ `Observer` في `Observable` حتى يتلقوا الإخطار. هذا الإخطار يمكن أن يعني عدة أشياء.

قد يشير إلى تغيير البيانات أو وصول البيانات كما هو مذكور بشكل عام في هذه المقالة. يمكن أن يشير إلى حدوث تغيير في جزء من التطبيق الذي يؤثر على `Observer` .

يسعى هذا النمط _الملحوظ_ أيضًا إلى فصل المفاهيم. يجب أن يكون الجهاز `Observable` للوظيفة قادرًا على العمل دون أي `Observer` أو العكس والعكس صحيح. هذا يعني عادة أنها يمكن أن تكون قائمة بذاتها بدلا من العمل بشكل كامل دون بعضها البعض.

إذا كنت فضوليًا ، يمكنك معرفة المزيد عن أسس البرمجة التفاعلية من خلال قراءة [مقالة ويكيبيديا](https://en.wikipedia.org/wiki/Reactive_programming) . يغطي هذا القسم ما هو ضروري لبقية المقال.

#### المتغيرات الظاهرة

أن أكرر بسرعة، و `Observable` الصورة يمكن _ملاحظتها._ هذا بحيث يوفر `Observable` ملاحظات إلى تبعياته بناءً على تدفق البيانات. في RxJS، و `Observable` هي وظيفة مصنعها الخاصة المستخدمة في إنشاء `Observable` الكائنات. مخططهم الأساسي هو على النحو التالي.

 `import { Observable } from 'rxjs'; 
 
 const observable = Observable.create((source) => { 
  source.next(data); 
 }); 
` 

`.next` يمر البيانات في حين ينبعث الحدث إلى مراقبيه. يقوم برنامج `Observable` بإرسال البيانات من داخل `.create` callback باستخدام `.next` . وهو يقبل وسيطة واحدة تمثل البيانات التي تنبعث منها. لم يتم تنفيذ `Observable` في JavaScript حتى الآن. يوفر RxJS بديلاً من مكتبته.

الخطوة التالية هي المراقبين. لنقول وظيفة أو يعترض على _مراقبة_ و `Observable` ، ويستخدم بناء الجملة التالي: `observable.subscribe(observer)` . طريقة أخرى للنظر في ذلك هو `producer.subscribe(consumer)` . _تنتج_ `.next` البيانات عن طريق استدعاء `.next` . يتم إعلام العملاء عند تلقي البيانات.

 `import { Observable } from 'rxjs'; 
 
 const observable = Observable.create((source) => { 
  source.next("Hello"); 
  source.next("World!"); 
 }); 
 
 observable.subscribe((word) => console.log(word)); 
 // console output 
 /* 
 Hello 
 World! 
 */ 
` 

اثنين من الدعاء من `.next` تحدث من داخل `Observable` الصورة `.create` رد (منتج البيانات). وينتج عن ذلك مخرجات منفصلة لوحدة التحكم من المراقب (مستهلك البيانات).

تمثل الاستدعاءات من `.next` دفق متزامن من البيانات. تظهِر التدفقات البيانات على أنها تدفقات خطية في ترتيبها. إما حلها بشكل متزامن أو غير متزامن اعتمادًا على توفر البيانات.

إذا كانت البيانات التي تشتمل على تدفق متاحة بسهولة ، فإنها تنفذ بشكل متزامن. خلاف ذلك ، يحل الدفق الوقت الإضافي بشكل غير متزامن. يكون ترتيب البيانات في كلتا الحالتين هو نفسه دائمًا حسب طلب `.next` داخل الملاحظة.

يعمل `Observable` مثل طابور. استدعاء. `.next` على قطعة من البيانات يدفعها إلى الجزء الخلفي من قائمة الانتظار. انبثاق البيانات من الجبهة بمجرد حلها.

تدفقات البيانات `Observable` عقد نداء كبير. فهي حتمية في ترتيبها وتنفيذها بشكل معقول حسب توفر البيانات. بالإضافة إلى ذلك ، يمكن لأي عدد من المراقبين _مراقبة_ مصدر البيانات `Observable` . هذا يعني أن البيانات يمكن أن تنتج مرة واحدة وتنبعث في أي مكان في عملية واحدة.

وظائف رد الاتصال ليست هي الطريقة الوحيدة لاستهلاك البيانات. يمكن للمراقبين أن يتسلسلوا في بعضهم البعض كمنتجين ومستهلكين.

 `const observableI = Observable.create((source) => { 
  source.next("Hello World!"); 
 }); 
 
 const observableII = new Observable().subscribe((v) => console.log(v)); 
 
 observableI.subscribe(observableII); 
 // console output 
 /* 
 Hello World! 
 */ 
` 

`.subscribe` هو على `Observable` الكائن. يمكنك أن تسميها `Observable` كمصدر (منتج) وأخرى يمكن ملاحظتها كحجة (مستهلك). يمكن أن تتدفق البيانات (تنبعث) من خلال أي عدد من الملاحظات.

#### إضافات تفاعلية لجافا سكريبت (RxJS)

تدفق البيانات أمر جيد ، ولكن ما هي النقطة إذا كانت الملاحظات لا تستطيع تحرير الدفق؟ هذا حيث تأتي مكتبة RxJS في اللعب. ويوفر المشغلين أداء مختلف الطفرات على دفق البيانات.

يعزز الزاوي هذه المشغلين لتحويل البيانات الواردة. يمكن للمطورين تقليم أي بيانات غير ضرورية من دفق الوارد باستخدام عوامل RxJS. هذا يحفظ الذاكرة ويخفف من الحاجة إلى منطق تحول إضافي.

تقدم RxJS انحرافات عن المعايير القياسية التي `Observable` مثل `Subject` `Subscription` `Observer` . فكر في هذه الانحرافات كنكهات خاصة من `Observable` التقليدية. فهي ليست ضرورية للاستفادة من المكتبة. ومع ذلك ، فإن المتغيرات مثل `Subject` لها حالات استخدام لا تصدق تتجاوز المستوى القياسي `Observable` .

هذه المادة تلتزم `Observable` القياسية. جميع مشغلي تدفق البيانات من RxJS تعمل من خلال `Observable` .

نشأ العديد من مشغلي RxJS الأساسيين من إضافات جافا سكريبت. يحتوي النموذج الأولي للعنصر على العديد من أوجه التشابه في مكتبة RxJS. هذه هي المعروفة باسم "إضافات". المصفوفات هي هياكل شبيهة بالتيار مشابهة لبيانات البخار التي يمكن ملاحظتها.

لفهم مشغلي RxJS بشكل أفضل ، سوف تتناول هذه المقالة باختصار Array Extras من JavaScript. كل على وظائف مماثلة تقريبا للنظير RxJS لها. الاختلاف هو ببساطة تنسيق البيانات (صفيف قابل للتكرار مقابل تيار قابل للتكرار).

#### صفيف إضافات

تحتوي المصفوفات على الكثير من طرق الاستخدام. تسمى هذه الطرق Array Extras. كلهم موجودون على النموذج الأولي للكائن. تحتوي القائمة أدناه على خمسة إضافات مع متوازيات RxJS.

*   `.reduce`
*   `.filter`
*   `.map`
*   `.every`
*   `.forEach`

لكل مثال ، يتكرر الصفيف على نفسه لإنتاج نتيجة نهائية.

`.reduce` يقلل مصفوفة إلى قيمة واحدة. `.filter` مصفوفة ذات تقييم منطقي. `.map` يحول صفيف عنصر تلو الآخر. `.every` بتقييم صحيح أو خطأ للمصفوفة بأكملها اعتماداً على شرط منطقي. `.forEach` يتكرر من خلال عناصر المصفوفة.

الصفائف نموذج تيارات. يتم ترتيب بعضها البعض وتكرار واحد تلو الآخر. تقوم المراقبات بتبسيط عناصر البيانات إلى مراقبيها بطريقة مماثلة. هذا هو السبب في RxJS يتضمن نظير منطقي لكل صفيف إضافي في مكتبته. منح ، RxJS يوفر وسيلة أكثر من مشغليها الخاص من وجود إضافات صفيف.

#### مشغلي RxJS الأساسي

هناك حرفيا قيمة مكتبة كاملة من مشغلي RxJS. تركز هذه المقالة على تلك المدرجة أدناه والتي ألهمت إضافات Array.

*   `.reduce`
*   `.filter`
*   `.map`
*   `.every`
*   `.forEach`

لم يتغير شيء من القائمة السابقة. ينطبق فهمك لـ Array Extras على مشغلي RxJS. المصيد الوحيد لهذا هو وظيفة تسمى `.pipe` والتي سوف ترى استخداما كبيرا في الأمثلة القليلة القادمة. `.pipe` سلاسل RxJS المشغلين معا. النتائج من عامل التشغيل السابق في المرحلة التالية حتى المشغل النهائي. البيانات الناتجة ثم تنبعث من التيار الملاحظ.

لاحظ المثال القياسي أدناه. استخدمه للمقارنة من أجل تأثير كل مشغل على تدفق البيانات المنبعثة.

 `import { Observable, from } from 'rxjs'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 1 
 2 
 3 
 4 
 5 
 */ 
` 

`.from` تحويل مجموعة إلى `Observable` الكائن الذي يدعو `.next` على كل عنصر من عناصر المصفوفة. تقبل وظيفة `.pipe` أي عدد من الوسيطات `.pipe` صفيف. هذا هو المكان الذي يتم فيه تنفيذ كل مشغل. تنفذ المشغلين على بيانات مبسطة في ترتيب تنفيذها كوسيطة لـ `.pipe` .

##### خفض

`.reduce` تقليل يقلل تدفق البيانات إلى قيمة واحدة قبل `.reduce` .

 `import { reduce } from 'rxjs/operators'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
  reduce((accum, val) => (accum + val)) 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 15 
 */ 
` 

##### منقي

`.filter` دفق ، مما يلغي قيم الدفق التي لا تفي `.filter` .

 `import { filter } from 'rxjs/operators'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
  filter((val) => (val % 2 === 0)) // filters out odd numbers 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 2 
 4 
 */ 
` 

##### خريطة

أهداف `.map` وتحويل كل قيمة تيار الجارية.

 `const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
    map((val) => (val + 1)) 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 2 
 3 
 4 
 5 
 6 
 */ 
` 

##### التحدي: كل و Foreach

مع المعرفة `.every` و `.forEach` كما إضافات صفيف، في محاولة لتنفيذها كما مشغلي RxJS. لا تتردد في استخدام الأمثلة السابقة للحصول على إرشادات. قليلا من الممارسة يقطع شوطا طويلا بعد الكثير من القراءة!

#### HTTP في الزاوي

يجمع هذا القسم RxJS و Angular معًا لإظهار كيفية تفاعلهما. عادة ، توفر الخدمة التي تقدمها Angular `Observable` . `Observable` تدفق بيانات Observable باستخدام عوامل `.pipe` مع `.pipe` .

يوفر Angular خدمة `HttpClient` عبر `@angular/common/http` . `HttpClientModule` هو أيضًا من `@angular/common/http` ويقوم بتصدير خدمة `HttpClient` . يجب على وحدة الجذر للتطبيق استيراد `HttpClientModule` . وهذا يجعل `HttpClientModule` _للحقن_ من أي مكان في التطبيق.

تجعل خدمة `HttpClientModule` طلبات HTTP. هذه الطلبات غير متزامن. ما يجعلها مثيرة للاهتمام ل Angular هو كيفية التعامل مع الطلب. يحصل `Observable` على إرجاع مع كل طلب. يمكن RxJS أخذها بعيدا عن هناك.

يستخدم المثال التالي واجهة برمجة تطبيقات عامة تم تصميمها بواسطة [Typicode](https://jsonplaceholder.typicode.com) . يوفر API صفيفًا مكونًا من 100 عنصر لكل طلب `GET` غير متزامن.

 `// ./models/post.model.ts 
 
 export interface Post { 
  userId: number; 
  id: number; 
  title: string; 
  body: string; 
 } 
` 

 `// ./services/json.service.ts 
 
 import { HttpClient } from '@angular/common/http'; 
 import { Injectable } from '@angular/core'; 
 
 import { Observable, from } from 'rxjs'; 
 import { switchMap, map, filter, reduce } from 'rxjs/operators'; 
 
 import { Post } from '../models/post.model'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class JsonService { 
  constructor(private http: HttpClient) { } 
 
  getPostsByUserId(id: number): Observable<any> { 
    const trim$ = (stream) => from(stream) 
      .pipe( 
        filter((post: Post) => +post.userId === +id), 
        map((post: Post) => ({ title: post.title, body: post.body })), 
        reduce((accum: Post[], post: Post) => accum.concat([post]), []) 
      ); 
 
    return this.http.get("https://jsonplaceholder.typicode.com/posts") 
      .pipe( 
        switchMap((value) => trim$(value)) 
      ); 
  } 
 } 
` 

 ``// ./components/example/example.component.ts 
 
 import { Component } from '@angular/core'; 
 
 import { JsonService } from '../../services/json.service'; 
 import { Post } from '../../models/post.model'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Request User Posts</h1> 
  <span>User: </span><input #userInput> 
  <button (click)="requestForPosts(userInput.value)">REQUEST</button> 
  <hr> 
  <ul> 
    <div *ngIf="userPosts"> 
      <div *ngFor="let post of userPosts"> 
        <h3>{{ post.title }}</h3> 
        <p>{{ post.body }}</p> 
      </div> 
    </div> 
    <h3 *ngIf="!userPosts">No posts shown...</h3> 
  </ul> 
  ` 
 }) 
 export class ExampleComponent { 
  userPosts: Post[]; 
 
  constructor(private json: JsonService) { } 
 
  requestForPosts(id: number): void { 
    this.json.getPostsByUserId(id) 
      .subscribe((posts: Post[]) => { this.userPosts = posts.length > 0 ? posts : null; }); 
  } 
 } 
`` 

`json.service.ts` يخلق `Observable` نيابة عن `component.example.ts` . يجوز للمكون الاشتراك في `Observable` إرجاعه. تنبعث قيمة واحدة فقط في الوقت الذي يقوم فيه `Observable` بحل تدفق البيانات.

يعطي طلب `jsonplaceholder.typicode.com` مجموعة واحدة من 100 مشاركة. الطلب عبر `HttpClient` ينتج عنه `Observable` . المشغل `switchMap` يعود آخر `Observable` التي الكتابة فوق مجرى الحالي. يقوم `trim$` المتغير `trim$` بتخزين `Observable` كقيمة. إن إرفاق `$` بمتغير يستخدم في تخزين S `Observable` هو إتفاقية.

`from` تحويل مجموعة من `jsonplaceholder.typicode.com` إلى 100 القيمة التي ينبعث منها `Observable` . ثم تقوم عوامل RxJS بالبحث في كل جزء من البيانات في الدفق. إنها تزيل قيم الدفق غير ذات الصلة بالطلب. يحدث تشذيب البيانات بحيث تبقى قيم الدفق مائلة للمعلومات غير الضرورية. تنضم النتائج النهائية مرة أخرى كمجموعة واحدة تنبعث منها واحدة إلى مراقبيها.

في `component.example.ts` ، وJsonService يحيل الى طريقة إعادة وصفه للتو، `Observable` . تستدعي هذه الطريقة النقر على زر في قالب المكون. يوفر مربع الإدخال أيضًا في القالب وسيطة `id` واحدة.

مع الضغط على زر، JsonService بإرجاع `Observable` التي تنبعث من مجموعة واحدة. `.subscribe` يستدعي على إرجاع `Observable` . يقوم المكون بعد ذلك بتعيين قيمة `userPosts` مساوية `userPosts` .

يتتبع اكتشاف التباقي الزاوي التغيير في بيانات الصف. تضمن تحديثات القالب و `*ngFor` أن كل عنصر صفيف من `userPosts` يعرض عنصر القالب الخاص به.

#### استنتاج

يوفر RxJS جوهر `Observable` على طول معهم. يتم تثبيت المكتبة تلقائيًا من سطر الأوامر باستخدام `ng new [name-of-app]` (Angular CLI). يتم تنزيل أنواع RxJS الأساسية ومشغليها إلى `rxjs` و `rxjs/operators` على التوالي.

حتى إذا كنت لا تستخدم CLI ، فإن خدمات مثل `HttpClient` لا تزال قابلة للاستخدام. خدمة بإرجاع `Promise` بدلا من `Observable` إذا RxJS غير متوفر. الكائن `Promise` هو الأصلي إلى JavaScript بخلاف `Observable` . من المحتمل أن يتغير هذا في الإصدار الرسمي التالي من جافا سكريبت.

ومع ذلك ، الاستفادة الكاملة من RxJS! أي هيكل يمكن إستيعابه يمكن أن يستوعب `Observable` . مع ذلك ، تصبح مكتبة RxJS بأكملها قابلة للاستخدام. مشغليها تحويل البيانات بكفاءة من تيار إلى نتائج. بالإضافة إلى ذلك ، يمكن للمراقبين الاشتراك في النتائج ، وزيادة قابلية البيانات بشكل عام.

## مصادر

*   [فريق الزاوي. "مكتبة RxJS". _جوجل_ . تم الوصول إليه في 5 يونيو 2018.](https://angular.io/guide/rx-library)
*   [فوربس ، إليوت. "إنشاء تطبيق في الوقت الفعلي باستخدام برنامج Angular and Socket.io التعليمي". _البرنامج التعليمي Egege.net_ ، 10 يناير 2017. تم الوصول إليه في 5 يونيو 2018.](https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial)
*   [فريق RxJS. "وثائق RxJS". _RxJS_ . تم الوصول إليه في 5 يونيو 2018.](https://rxjs-dev.firebaseapp.com)
*   [سوكال ، ريان. "الفرق بين Rxjs الموضوع والملاحظ". _البرنامج التعليمي Horizon_ ، 23 مارس 2017. تم الوصول إليه في 5 يونيو 2018.](https://javascript.tutorialhorizon.com/2017/03/23/rxjs-subject-vs-observable)
*   [مجتمع ويكيبيديا. "البرمجة التفاعلية". _ويكيبيديا_ ، 2 يونيو 2018. تم الوصول إليها في 5 يونيو 2018.](https://en.wikipedia.org/wiki/Reactive_programming)

## مصادر

*   [وثائق الزاوي](https://angular.io/guide)
*   [الزاوي على جيثب](https://github.com/angular/angular)
*   [الزاوي CLI](https://cli.angular.io)
*   [RxJS والزاوي](https://angular.io/guide/rx-library)
*   [برمجة رد الفعل](https://en.wikipedia.org/wiki/Reactive_programming)
*   [الإضافات التفاعلية لجافا سكريبت](https://rxjs-dev.firebaseapp.com)