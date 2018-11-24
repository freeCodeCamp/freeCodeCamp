---
title: Services and Injectors
localeTitle: الخدمات والحاقنات
---
# الخدمات والحاقنات

#### التحفيز

تكون المكونات مسؤولة عن البيانات التي يتم إدخالها في القالب. إن وجود _خدمات_ خارجية للاستفادة منها يمكن أن يؤدي إلى تبسيط هذه المسؤولية. بالإضافة إلى ذلك ، يسهل الحفاظ على الغلاف الخارجي.

قد يؤدي تفويض العديد من المسؤوليات إلى مكون واحد إلى تعقيد فئة المكون. وماذا لو كانت هذه المسؤوليات تنطبق على عدة مكونات؟ يعد نسخ ولصق هذا المنطق ممارسة بالغة السوء. أي تغييرات مستقبلية في المنطق سيكون من الصعب تنفيذها والاختبار.

الزاوي يعني للحد من هذه المشكلة مع الخدمات وحقن التبعية. يعمل كلا المفهومين معًا لتوفير وظائف _نمطية_ .

المكونات لا تحتاج إلى تقديم أي معلومات غريبة سواء. تستورد الخدمات ما تحتاجه لتعمل نيابة عن المكونات التي تقوم _بتقديم الخدمات_ لها. تحتاج المكونات فقط إلى إنشاء الخدمة. من هناك _تخدم_ احتياجاتها الخاصة مع مثيل خدمة مثيله.

أما بالنسبة للاختبار والتعديل المستقبلي ، فإن كل المنطق في مكان واحد. خدمة instantiates من مصدرها. تنطبق الاختبارات والتعديلات على المصدر في أي مكان يتم فيه حقن الخدمة.

#### مقدمة في الخدمات

الخدمة هي نوع من _التخطيطي_ المتاح في Angular. وهو قابل للتوليد بواسطة واجهة سطر الأوامر (CLI): `ng generate service [name-of-service]` . استبدل `[name-of-service]` باسم مفضل. يعطي الأمر CLI ما يلي.

 `import { Injectable } from '@angular/core'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class LoggerService { 
  constructor() { } 
 } 
` 

منطق الخدمة متميز داخل فئتها. يفسر الزاوي فئة كخدمة _للحقن_ القائمة قبالة الديكور `@Injectable` . يجب أن _تسجل_ الخدمات القابلة للحقن مع حاقن.

المكون instantiates خدمة بينما يوفر حاقن ذلك المثيل. تابع القراءة في القسم التالي لمعرفة المزيد عن طريق الحقن.

قدم حقل البيانات الوصفية `@Injectable` `providedIn: 'root'` يستهدف وحدة الجذر من التطبيق الحالي ( `app.module.ts` ). تسجل الخدمة مع حاقن الوحدة النمطية بحيث يمكنها _حقن_ هذه الخدمة في أي من أطفالها.

الحاقنات هي لبنات بناء نظام حقن التبعية في Angular. تعتبر الحاقنات مكانًا جيدًا لتركيز انتباهك قبل المتابعة مع الخدمات.

#### عن طريق الحقن

يحتوي التطبيق ، الذي يبدأ بـ `app.module.ts` ، على تسلسل هرمي عن طريق الحقن. توجد إلى جانب كل وحدة ومكون في شجرة التطبيق.

![التسلسل الهرمي للتطبيق](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image5.png)

تشير الدوائر الخضراء عن طريق الحقن. أنها توفر مثيلات الخدمة إلى instantiating المكونات. اعتمادًا على نوع الحاقن الذي تم تسجيل الخدمة به ، قد يكون أو لا يكون متاحًا لأحد المكونات.

الخدمات المسجلة في جذر التطبيق ( `app.module.ts` ) متاحة لجميع المكونات. حاقن لمكون قد لا يكون لها خدمة معينة مسجلة. إذا كانت هذه هي الحالة وطلب المكون الخاص به إنشاء مثيل ، سيتم تأجيل الحاقن إلى أصلها. يستمر هذا الاتجاه حتى الوصول إلى حاقن الجذر أو تم العثور على الخدمة.

بالنظر إلى المخطط ، قل أن هناك خدمة تسجل في حاقن النقطة B. لن تتمكن جميع المكونات عند النقطة C أو لأسفل من الوصول إلى الخدمة المسجلة في حاقن B. سوف لا تؤجل عن طريق الحقن لأطفالهم لمثيل خدمة.

#### حقن التبعية

توجد طرق متعددة لتسجيل خدمة باستخدام محقنات التطبيق.

`providedIn: 'root'` حقل `providedIn: 'root'` بيانات التعريف `providedIn: 'root'` في `@Injectable` الأكثر `@Injectable` . تم إطلاق حقل البيانات الوصفية هذا مع Angular 6.

كما ذكر من قبل ، `providedIn: 'root'` يسجل خدمة مع حاقن وحدة الجذر. إنه سهل الاستخدام عبر التطبيق بأكمله كنتيجة لذلك.

الجدة `providedIn: 'root'` هي _تهز الأشجار_ . إذا كانت الخدمة غير مستخدمة على الرغم من تسجيلها ، فسيتم _اهتزازها_ من التطبيق في وقت التشغيل. بهذه الطريقة لا تستهلك أي موارد.

والطريقتان الأخريان هما أكثر مباشرة وتقليدية. منح ، أنها لا تقدم هزة الشجرة.

يمكن للخدمة التسجيل مع أي حاقن على طول شجرة المكون. يمكنك إدراج الخدمة كموفر في حقل بيانات تعريف `@Component` : `providers: []` . الخدمة متاحة للمكون وأطفاله

في إستراتيجية التسجيل الثالثة ، يتم `providers: []` البيانات الوصفية كحقل خاص بها في ديكور `@NgModule` . الخدمة قابلة للحجز من الوحدة إلى شجرة المكونات الأساسية.

تذكر أنه على عكس `providedIn: 'root'` ، `@NgModule` تسجيل `@NgModule` لا يقدم `@NgModule` للأشجار. كلا الاستراتيجيتين متطابقة. بمجرد تسجيل إحدى الخدمات باستخدام `@NgModule` ، فإنها تستهلك الموارد حتى إذا تركت بدون استخدام من قبل التطبيق.

#### الخدمات مستمرة

كتابة خدمة فعلية تأتي بعد ذلك. للتلخيص ، تقوم الخدمات بالتعامل مع وظائف معينة بالنيابة عن مكونات التطبيق.

خدمات تتفوق في التعامل مع العمليات المشتركة. انهم قطع الغيار المسؤولية عن طريق القيام بذلك. يوفر الوقت لعدم الحاجة إلى إعادة كتابة العمليات الشائعة عبر مكونات متعددة. وهو أيضًا قابل للاختبار أكثر نظرًا لأن الشفرة موجودة في مكان واحد. تحتاج التغييرات فقط إلى حدوثها في مكان واحد دون الحاجة إلى البحث في مكان آخر.

#### استخدم حالات

تقدم الأمثلة القليلة شوطا طويلا نحو فهم كامل للخدمات.

*   سجلات وحدة التحكم
    
*   طلبات واجهة برمجة التطبيقات
    

كلاهما شائع في معظم التطبيقات. وجود خدمات للتعامل مع هذه العمليات سيقلل من تعقيد المكونات.

##### سجلات وحدة التحكم

هذا المثال يتراكم من الهيكل الأساسي `@Injectable` . الهيكل العظمي متاح من خلال تنفيذ CLI ( `ng generate service [name-of-service]]` .

 `// services/logger.service.ts 
 
 import { Injectable } from '@angular/core'; 
 
 interface LogMessage { 
  message:string; 
  timestamp:Date; 
 } 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class LoggerService { 
  callStack:LogMessage[] = []; 
 
  constructor() { } 
 
  addLog(message:string):void { 
      // prepend new log to bottom of stack 
      this.callStack = [{ message, timestamp: new Date() }].concat(this.callStack); 
  } 
 
  clear():void { 
      // clear stack 
      this.callStack = []; 
  } 
 
  printHead():void { 
      // print bottom of stack 
      console.log(this.callStack[0] || null); 
  } 
 
  printLog():void { 
      // print bottom to top of stack on screen 
      this.callStack.reverse().forEach((logMessage) => console.log(logMessage)); 
  } 
 
  getLog():LogMessage[] { 
      // return the entire log as an array 
      return this.callStack.reverse(); 
  } 
 } 
` 

تسجيل LoggerService مع الوحدة النمطية الجذر من خلال بيانات `@Injectable` . وبالتالي يمكن إنشاء في `app.component.html` .

 ``// app.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { LoggerService } from './services/logger.service'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html' 
 }) 
 export class AppComponent implements OnInit { 
  logs:object[] = []; 
 
  constructor(private logger:LoggerService) { } 
 
  updateLog():void { 
      this.logger.printHead(); 
      this.logs = this.logger.getLog(); 
  } 
 
  logMessage(event:any, message:string):void { 
      event.preventDefault(); 
 
      this.logger.addLog(`Message: ${message}`); 
      this.updateLog(); 
  } 
 
  clearLog():void { 
      this.logger.clear(); 
      this.logs = []; 
  } 
 
  ngOnInit():void { 
      this.logger.addLog(“View Initialized”); 
      this.updateLog(); 
  } 
 } 
`` 

يوفر القالب HTML مزيدًا من الإحصاءات حول استخدام المكون لـ LoggerService.

 `
<!-- app.component.html --> 
 
 <h1>Log Example</h1> 
 
 <form (submit)="logMessage($event, userInput.value)"> 
  <input #userInput placeholder="Type a message..."> 
  <button type="submit">SUBMIT</button> 
 </form> 
 
 <h3>Complete Log</h3> 
 <button type="button" (click)="clearLog()">CLEAR</button> 
 <ul> 
  <li *ngFor="let log of logs; let i=index">{{ logs.length - i }} > {{ log.message }} @ {{ log.timestamp }}</li> 
 </ul> 
` 

هذا يشعر به تطبيق ToDo. يمكنك تسجيل الرسائل ومسح سجل الرسائل. تخيل لو تم دفع كل المنطق من الخدمة في AppComponent! كان من شأنه أن يعقد رمز. يحتفظ LoggerService رمز السجل ذات الصلة مغلفة من فئة AppComponent الأساسية.

##### طلبات الجلب

إليك مثال آخر يستحق اللعب به. هذا المثال ممكن بفضل [JSONPlaceholder 1 من نوع typicode](https://jsonplaceholder.typicode.com) . واجهة برمجة التطبيقات عامة ومجانية الاستخدام.

 ``import { Injectable } from '@angular/core'; 
 import { HttpClient } from '@angular/common/http'; 
 import { Observable } from 'rxjs'; 
 
 // https://jsonplaceholder.typicode.com 
 // public API created by typicode @ https://github.com/typicode 
 
 interface Post { 
  userId:number; 
  id:number; 
  title:string; 
  body:string; 
 } 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class PlaceholderService { 
  constructor(private http:HttpClient) { } 
 
  getPosts():Observable<Post[]> { 
      return this.http.get('https://jsonplaceholder.typicode.com/posts'); 
  } 
 
  getPost(id:number):Observable<Post> { 
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`); 
  } 
 } 
`` 

هذا هو أكثر من قطعة بذاتها من مثال كامل تماما. تميل طلبات الجلب إلى العمل بشكل أفضل كخدمة للحقن. البديل هو مكون أكثر تعقيدًا. تشترك الفئة التي تم حقنها في ما تقوم بتكوينه المسبق المكون المسبق Serviceerver.

#### استنتاج

الخدمات والحقن التبعية مفيدة جدا معا. فهي تسمح للمطورين بتغليف المنطق العام وحقن عبر مكونات متعددة مختلفة. هذا وحده هو راحة واسعة لأي صيانة في المستقبل.

تعمل الحاقنات كوسيط. أنها توسط بين instantiating المكونات وخزان الخدمات المسجلة. توفر الحاقنات هذه الخدمات الفورية لأطفال فروعهم.

راجع الارتباطات القليلة التالية لمزيد من المعلومات حول الخدمات وحقن التبعية.

## مصادر

1.  [Typicode، _JSONPlaceholder_ ، https://jsonplaceholder.typicode.com، Accessed 29 May 2018.](https://jsonplaceholder.typicode.com)

## مصادر

*   [وثائق الزاوي](https://angular.io/docs)
    
*   [Angular GitHub Repository](https://github.com/angular/angular)
    
*   [حقن التبعية](https://angular.io/guide/dependency-injection-pattern)
    
*   [مقدمة إلى الخدمات و DI](https://angular.io/guide/architecture-services)