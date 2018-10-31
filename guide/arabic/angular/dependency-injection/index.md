---
title: Dependency Injection
localeTitle: حقن التبعية
---
# حقن التبعية

#### التحفيز

غالباً ما يشار إلى Dependency Injection ببساطة باسم DI. النموذج موجود في جميع أنحاء Angular. إنها تحافظ على الشفرة مرنة وقابلة للاختبار وقابلة للتغيير. يمكن للفصول أن ترث المنطق الخارجي دون معرفة كيفية إنشائه. لا يحتاج أي مستهلك لهذه الفئات أيضًا إلى معرفة أي شيء.

توفر شركة DI الفصول والمستهلكين على حد سواء من الاضطرار إلى معرفة أكثر من اللازم. ومع ذلك ، فإن الشفرة موضوعة كما كانت من قبل بفضل الآليات التي تدعم DI في Angular.

الخدمات هي أحد أهم الداعمين لشركة DI. يعتمدون على النموذج _للحقن_ في مختلف المستهلكين. ويمكن لهؤلاء المستهلكين الاستفادة من هذه الخدمة و / أو تقديمها في مكان آخر.

الخدمة ليست وحدها. التوجيهات والأنابيب والمكونات وما إلى ذلك: كل التخطيطي في استحقاق Angular من DI بطريقة أو بأخرى.

#### عن طريق الحقن

الحاقنات هي هياكل البيانات التي تخزن التعليمات التي توضح بالتفصيل مكان وكيفية تشكيل الخدمات. وهي تعمل كوسيط داخل نظام Angular DI.

تحتوي فئات الوحدة النمطية ، وتوجيه ، والمكونات على بيانات تعريف خاصة بالحقن. نسخة حاقن جديدة ترافق كل واحدة من هذه الفئات. بهذه الطريقة ، تعكس شجرة التطبيق التسلسل الهرمي للحاقن.

`providers: []` تقبل `providers: []` البيانات الوصفية الخدمات التي تسجل بعد ذلك مع حاقن الفصول. يضيف حقل المزود هذا التعليمات اللازمة لحاقن للعمل. تقوم فئة (بافتراض أن لها تبعيات) بإنشاء خدمة من خلال أخذ فئتها كنوع بيانات لها. يقوم الحاقن بمحاذاة هذا النوع (أ) بإنشاء مثيل لتلك الخدمة على الفئة "class".

بطبيعة الحال ، يمكن للطبقة أن تقوم فقط بتوضيح ما يحتويه الحاقن من تعليمات. إذا لم يكن لدى الحاقن الخاص بالفئة الخدمة المسجلة ، فستستعلم عن الأصل. لذلك ، وهكذا دواليك حتى الوصول إلى حاقن مع الخدمة أو جذر التطبيق.

يمكن للخدمات التسجيل في أي حاقن داخل التطبيق. تذهب الخدمات إلى `providers: []` حقل البيانات الوصفية لوحدات أو توجيهات أو مكونات الفصل الدراسي. يمكن للأطفال "الفئة" إنشاء حاقن مسجل في حجرة الدراسة. حاقنات الطفل التراجع عن طريق الحقن الأم بعد كل شيء.

#### حقن التبعية

إلقاء نظرة على الهياكل العظمية لكل فئة: الخدمة ، الوحدة ، التوجيه ، والمكون.

 `// service 
 
 import { Injectable } from '@angular/core'; 
 
 @Injectable({ 
  providedIn: /* injector goes here */ 
 }) 
 export class TemplateService { 
  constructor() { } 
 } 
` 

 `// module 
 
 import { NgModule } from '@angular/core'; 
 import { CommonModule } from '@angular/common'; 
 
 @NgModule({ 
  imports: [ 
    CommonModule 
  ], 
  declarations: [], 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateModule { } 
` 

 `// directive 
 
 import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appTemplate]', 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateDirective { 
  constructor() { } 
 } 
` 

 `//component 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-template', 
  templateUrl: './template.component.html', 
  styleUrls: ['./template.component.css'], 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateComponent { 
  // class logic ... 
 } 
` 

يمكن لكل هيكل عظمي تسجيل الخدمات إلى حاقن. في الواقع ، TemplateService _هي_ خدمة. اعتبارًا من Angular 6 ، يمكن الآن للخدمات التسجيل باستخدام الحقن باستخدام البيانات الوصفية `@Injectable` .

##### في أي حال

لاحظ في `providedIn: string` ( `@Injectable` ) `providers: []` ( `@Directive` ، `@Componet` و `@Module` ) بيانات التعريف. يخبرون عن طريق الحقن وكيفية إنشاء خدمة. خلاف ذلك ، لا تعرف عن طريق الحقن كيفية إنشاء.

ماذا لو كانت الخدمة لها تبعيات؟ أين تذهب النتائج؟ يجيب مقدمي هذه الأسئلة بحيث يمكن عن طريق الحقن إنشاء صحيح.

تشكل عن طريق الحقن العمود الفقري لإطار عمل DI. إنها تخزن التعليمات لتحفيز الخدمات حتى لا يضطر المستهلكون إلى ذلك. يتلقون مثيلات الخدمة دون الحاجة إلى معرفة أي شيء عن تبعية المصدر!

وأود أيضا أن نلاحظ أن الخطط الأخرى دون عن طريق الحقن لا يزال من الممكن استخدام حق التبعية. انهم لا يستطيعون تسجيل خدمات إضافية ولكن لا يزال بإمكانهم تحفيز من عن طريق الحقن.

##### الخدمات

تحدد في تعريف `providedIn: string` metadata `@Injectable` أي حاقن للتسجيل مع. باستخدام هذه الطريقة ، واعتمادًا على ما إذا تم استخدام الخدمة ، قد تقوم الخدمة أو لا تسجل مع الحاقن. يدعو الزاوي هذا _تهز الأشجار_ .

بشكل افتراضي ، يتم تعيين القيمة على `'root'` . هذا يترجم إلى حاقن الجذر للتطبيق. بشكل أساسي ، يؤدي تعيين الحقل إلى `'root'` إلى إتاحة الخدمة في أي مكان.

##### ملاحظة سريعة

وكما ذكرنا سابقا ، فإن حاقنات الأطفال تتراجع عن والديهم. هذه الاستراتيجية الاحتياطية تضمن الآباء والأمهات لا تضطر إلى إعادة تسجيل لكل حاقن. الرجوع إلى هذه المقالة على [الخدمات والحاقنات](https://guide.freecodecamp.org/angular/services-and-injectors) لتوضيح هذا المفهوم.

الخدمات المسجلة هي _مفردة_ . بمعنى ، توجد تعليمات إنشاء الخدمة على حاقن واحد فقط. هذا يفترض أنه لم يتم تسجيله صراحة في مكان آخر.

##### الوحدة ، التوجيه ، والمكون

الوحدات والمكونات لها مثيل حاقن خاص بها. هذا واضح نظرا `providers: []` حقل البيانات الشرحية. يأخذ هذا المجال مجموعة من الخدمات ويسجلها بحاقن الوحدة النمطية أو فئة المكون. يحدث هذا النهج في `@NgModule` ، `@Directive` ، أو `@Component` الديكور.

هذه الاستراتيجية يغفل _شجرة_ ، أو إزالة اختياري للخدمات غير المستخدمة من عن طريق الحقن. خدمة الحالات الحية على عن طريق الحقن لحياة الوحدة النمطية أو المكون.

#### تأشير المراجع

يمكن أن تؤدي المراجع إلى DOM إلى إنشاء مثيل من أي فئة. ضع في اعتبارك أن المراجع لا تزال خدمات. وهي تختلف عن الخدمات التقليدية في تمثيل حالة شيء آخر. تتضمن هذه الخدمات وظائف للتفاعل مع مرجعها.

التوجيهات في حاجة مستمرة من مراجع DOM. تؤدي التوجيهات إلى حدوث طفرات في عناصر المضيف من خلال هذه المراجع. انظر المثال التالي. يقوم حاقن التوجيه بإدخال مرجع لعنصر المضيف في مُنشئ الصف.

 `// directives/highlight.directive.ts 
 
 import { Directive, ElementRef, Renderer2, Input } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appHighlight]' 
 }) 
 export class HighlightDirective { 
  constructor( 
    private renderer: Renderer2, 
    private host: ElementRef 
  ) { } 
 
  @Input() set appHighlight (color: string) { 
    this.renderer.setStyle(this.host.nativeElement, 'background-color', color); 
  } 
 } 
` 

 `
// app.component.html 
 
 <p [appHighlight]="'yellow'">Highlighted Text!</p> 
` 

`Renderer2` أيضاً يحصل على instantiated. أي حاقن تأتي من هذه الخدمات؟ حسنا ، رمز مصدر كل خدمة يأتي من `@angular/core` . يجب أن تسجل هذه الخدمات بعد ذلك مع حاقن الجذر الخاص بالتطبيق.

 `import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 import { HighlightDirective } from './directives/highlight.directive'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent, 
    HighlightDirective 
  ], 
  imports: [ 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ 
    AppComponent 
  ] 
 }) 
 export class AppModule { } 
` 

مجموعة موفري فارغة !؟ لا أخشى. يسجل الزاوي العديد من الخدمات باستخدام حاقن الجذر تلقائيًا. وهذا يشمل `ElementRef` و `Renderer2` . في هذا المثال ، نحن ندير عنصر المضيف من خلال واجهته النابعة من إنشاء `ElementRef` . يتيح لنا `Renderer2` تحديث نموذج عرض DOM من خلال Angular.

يمكنك قراءة المزيد حول طرق العرض من [هذه المقالة](https://guide.freecodecamp.org/angular/views) . وهي الطريقة المفضلة للتحديثات DOM / view في التطبيقات الزاوية.

من المهم التعرف على الدور الذي تلعبه الحاقنات في المثال أعلاه. عن طريق التصريح بأنواع المتغيرات في المُنشئ ، يحصل الصنف على خدمات قيّمة. يحدد كل نوع بيانات للمعلمة مجموعة من الإرشادات داخل الحاقن. إذا كان حاقن هذا النوع ، فإنه يعيد مثيل من النوع المذكور.

#### خدمات فورية

توضح مقالة [الخدمات والحاقنات](https://guide.freecodecamp.org/angular/services-and-injectors) هذا القسم إلى حد ما. على الرغم من أن هذا القسم يعيد صياغة القسم السابق أو الجزء الأكبر منه. غالبًا ما توفر الخدمات إشارات إلى شيء آخر. قد توفر كذلك واجهة تعزّز إمكانات الصف الدراسي.

المثال التالي سيحدد خدمة التسجيل التي تتم إضافتها إلى حاقن المكون من خلال موفريها `providers: []` البيانات التعريفية.

 `// services/logger.service.ts 
 
 import { Injectable } from '@angular/core'; 
 
 @Injectable() 
 export class LoggerService { 
  callStack: string[] = []; 
 
  addLog(message: string): void { 
    this.callStack = [message].concat(this.callStack); 
    this.printHead(); 
  } 
 
  clear(): void { 
    this.printLog(); 
    this.callStack = []; 
    console.log(“DELETED LOG”); 
  } 
 
  private printHead(): void { 
    console.log(this.callStack[0] || null); 
  } 
 
  private printLog(): void { 
    this.callStack.reverse().forEach((log) => console.log(message)); 
  } 
 } 
` 

 ``// app.component.ts 
 
 import { Component } from '@angular/core'; 
 import { LoggerService } from './services/logger.service'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  providers: [LoggerService] 
 }) 
 export class AppComponent { 
  constructor(private logger: LoggerService) { } 
 
  logMessage(event: any, message: string): void { 
    event.preventDefault(); 
    this.logger.addLog(`Message: ${message}`); 
  } 
 
  clearLog(): void { 
    this.logger.clear(); 
  } 
 } 
`` 

 `
// app.component.html 
 
 <h1>Log Example</h1> 
 <form (submit)="logMessage($event, userInput.value)"> 
  <input #userInput placeholder="Type a message..."> 
  <button type="submit">SUBMIT</button> 
 </form> 
 
 <h3>Delete Logged Messages</h3> 
 <button type="button" (click)="clearLog()">CLEAR</button> 
` 

التركيز على منشئ AppComponent والبيانات الوصفية. يتلقى حاقن المكون إرشادات من حقل بيانات التعريف الخاصة بالموفر الذي يحتوي على LoggerService. ثم يعرف الحاقن ما يتم إنشاء LoggerService من المطلوب في المُنشئ.

يحتوي `loggerService` parameter `loggerService` على نوع `LoggerService` الذي يتعرف عليه الحاقن. يتبع الحاقن من خلال معادلة كما ذكر.

#### استنتاج

حقن التبعية (DI) هي نموذج. الطريقة التي تعمل بها في Angular هي من خلال التسلسل الهرمي للحقن. فئة يتلقى موارده دون الحاجة إلى إنشاء أو معرفة عنها. تلقي عن طريق الحقن تعليمات وتهيئة خدمة اعتمادا على أي واحد تم طلبه.

يظهر DI الكثير في Angular. تشرح الوثائق الرسمية للزاوية سبب انتشار النموذج. كما أنهم يستمرون في وصف حالات الاستخدام الكثيرة لـ DI بطريقة زاوية تتجاوز ما تمت مناقشته في هذه المقالة. التحقق من ذلك من خلال النقر أدناه!

## مصادر

*   [فريق الزاوي. "نمط حقن التبعية". _جوجل_ . تم الوصول إليها في 1 يونيو 2018](https://angular.io/guide/dependency-injection-pattern)
    
*   [زويف ، أليكسي. "ما أردت معرفته دائمًا عن شجرة حقن التبعية الزاوي". _Angular In Depth_ ، 21 Mar 2018. Accessed 1 June 2018](https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d)
    

## مصادر

*   [وثائق الزاوي](https://angular.io/guide/pipes)
    
*   [Angular GitHub Repository](https://github.com/angular/angular)
    
*   [مقدمة إلى Dependency Injection](https://angular.io/guide/architecture-services)
    
*   [حقن التبعية المتقدمة](https://angular.io/guide/dependency-injection-pattern)