---
title: Components
localeTitle: المكونات
---
# المكونات

#### التحفيز

الزاوي يحتوي على العديد من _الخطط_ لبناء التطبيقات. المكونات هي واحدة من هذا التخطيطي. وهي تشمل وحدة واحدة من المنطق المعني بجزء واحد من التطبيق. غالبًا ما تشترك المكونات مع الخطط الأخرى لتعمل بشكل أكثر فاعلية.

من بين جميع الخطط ، تميل المكونات إلى الاستهلاك أكثر من توفيرها. في حين أن الخطط الأخرى مثل التوجيهات والأنابيب والخدمات توفر فائدة ، فإن المكونات تستخدم. هم مسؤولون عن واجهة التطبيق لذلك فمن المنطقي لماذا تستهلك فائدة.

مكونات تبسيط التطبيق. يُعد هدف التحويل الأساسي إلى قسم واحد من الواجهة المرئية الهدف الأساسي. لإنشاء تطبيقات خطوة بخطوة ، يجب إنشاء مكون تلو المكوِّن. تعمل مكونات كتل البناء Angular في كل شيء.

#### مكونات مقدمة

كما ذكر ، تستهلك المكونات المنفعة (الخدمات / الموارد). انها تقف بين منطق الأعمال والعرض لتقديم وحدة متماسكة. يعلق الزاوي آليات مختلفة لكل مكون. تحدد هذه المرفقات فئة كمكون وتحدد قدراتها القياسية.

يجب أن يتعرف الزاوي على المكونات عندما يأتي عبرها. للقيام بذلك ، يجب أن يزيّن `@Component` كل صنف يُقصد منه أن يكون مكونًا. يشير المصممون إلى Angular ما هي الطبقة ".

في حالة المكون ، يجب أن يعرف كيفية التفاعل مع حاقنه ، والتواصل مع قالب ، والانسحاب من قائمة الأنماط ، وتغليف أنماطه ، وهكذا. الزاوي يعتني بمعظم متطلبات المستوى المنخفض. لا يزال المطورون بحاجة إلى تهيئة سلوك أحد المكونات ، واستيراد تبعياته ، وتوسيع منطقه.

لجميع هذه الأشياء ، لدينا فئة المكون. يحتفظ الفصل بكل شيء نسبيًا. إنه يغلف منطق عمل المكون.

#### فئة المكون والبيانات الوصفية

المضي قدما وتثبيت [واجهة سطر الأوامر Angular (CLI)](https://cli.angular.io) . يمكنك معرفة المزيد حول هذا الموضوع من [هذه المقالة](https://guide.freecodecamp.org/angular/command-line-interface) . يعطي الأمر CLI `ng generate component [name-of-component]` الأمر التالي.

 `import { Component, OnInit } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html', 
  styleUrls: ['./example.component.css'] 
 }) 
 export class ExampleComponent implements OnInit { 
  constructor() { } 
 
  ngOnInit() { } 
 } 
` 

هذا هو الهيكل الأساسي الأساسي الذي تنشأ منه جميع المكونات الرائعة. `@Component` الديكور `@Component` الجزء الأكثر أهمية. بدون ذلك ، يصبح المثال أعلاه فئة عامة. الزاوي يعتمد على ديكور لتمييز نوع تخطيطي.

`@Component` يتلقى بيانات التعريف ككائن واحد. الديكور هي مجرد وظائف جافا سكريبت تحت غطاء محرك السيارة. يأخذون في الحجج كما هو الحال مع كائن بيانات التعريف. يقوم كائن البيانات الأولية بتكوين التبعيات الأساسية للمكون. كل الحقول تلعب دورا.

*   `selector:` يخبر Angular بإقران المكون بعنصر معين في HTML الخاص بقالب التطبيق.
    
*   `templateUrl:` يقبل موقع ملف HTML الخاص بقالب المكون (هذا هو المكان الذي يتم عرض البيانات فيه).
    
*   `styleUrls:` يقبل صفيفًا من مواقع ملفات ورقة الأنماط (سلاسل). وتستهدف أوراق الأنماط هذه القالب المخصص للمكون.
    

فكر في البيانات الوصفية كنقطة كبيرة من التهيئة. يأخذها الديكور بحيث يمكنه توليد البيانات الخاصة بالمكون. _يزين_ الديكور الطبقة الأساسية بالبيانات اللازمة لسلوك صفها. فئة _المكون_ التي هي.

يتم تصدير "توقيع" الفئة بشكل افتراضي بحيث يمكن استيراد المكون. `ngOnInit` أيضا يحصل تنفيذها. `implements` بإرشاد الطلاب إلى تعريف طرق معينة لكل تعريف للواجهة. `ngOnInit` هو خطاف لدورة الحياة.

#### دورة حياة المكون وتغيير الكشف

تستخدم المكونات جميع أنواع الأدوات والخدمات والميزات. الميزة الرئيسية الوحيدة المتاحة للمكونات هي خطاطيف دورة الحياة. يوجد تفسير لكل ربط [على هذه المقالة](https://guide.freecodecamp.org/angular/lifecycle-hooks) .

هناك ثمانية في المجموع وكلها بمثابة وظائف توقيت. وهي تنفذ بشكل مشروط حيث ينتقل المكون من دولة إلى أخرى عن طريق [الكشف عن التغيير](https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f) . هذه العملية تحدث باستمرار عبر شجرة المكون. يبحث عن التغييرات في البيانات التي تستحق إعادة تقديم القالب.

وقت التحرك. يرجى الرجوع إلى المقالات المذكورة أعلاه لمزيد من المعلومات حول دورة حياة المكونات. إنه يستحق الكثير من الشرح.

#### بيانات المكونات

البيانات تدفع كل شيء. المكونات ليست استثناء. المكونات تغلف جميع بياناتها. لتلقي البيانات خارجياً ، يجب أن يقوم أحد المكونات صراحة بالإعلان عنها. يحتفظ هذا النوع من الخصوصية بالمعلومات من التعارض عبر شجرة المكون.

تحدد البيانات ما يتم عرضه من فئة المكون إلى القالب الخاص به. أي تحديثات لبيانات الفصل (أو على الأقل يجب) تحديث عرض القالب.

ستقوم المكونات في كثير من الأحيان بتهيئة مجموعة من الأعضاء (أو المتغيرات) التي تقوم بتخزين البيانات. يتم استخدامها في جميع أنحاء المنطق فئة مكون للراحة. تغذي هذه المعلومات المنطق الناتج عن القالب وسلوكه. انظر المثال التالي.

 `// ./components/example/example.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { Post, DATA } from '../../data/posts.data'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent implements OnInit { 
  username: string; 
  totalPosts: number; 
  allPosts: Post[]; 
 
  deletePost(index: number): void { 
    this.allPosts.splice(index, 1); 
    this.totalPosts = this.allPosts.length; 
  } 
 
  ngOnInit(): void { 
    this.username = DATA.author; 
    this.totalPosts = DATA.thePosts.length; 
    this.allPosts = DATA.thePosts; 
  } 
 } 
` 

 `
<!-- ./components/example/example.component.html --> 
 
 <h1>{{ username }}</h1> 
 <span>Change Name: </span><input [(ngModel)]="username"> 
 <h3>Posts: {{ totalPosts }}</h3> 
 <ul> 
 <hr/> 
 <div *ngFor="let post of allPosts; let i=index"> 
  <button (click)="deletePost(i)">DELETE</button> 
  <h6>{{ post.title }}</h6> 
  <p>{{ post.body }}</p> 
  <hr/> 
 </div> 
 </ul> 
` 

لاحظ الطرق التي يتفاعل بها المكون مع بياناته. `../../data/posts.data` أولاً من `../../data/posts.data` قبل أن يبدأ بإعادة توجيهه إلى قالب العرض.

تظهر البيانات في جميع أنحاء القالب. داخل الأقواس المزدوجة المتعرجة ، يتم تعيين قيمة المتغير من فئة المكون إلى الأقواس. الحلقات `*ngFor` عبر صفيف فئة `allPosts` . بالضغط على زر يزيل عنصر معين من `allPosts` التي كتبها مؤشره. يمكنك حتى تغيير `username` الأعلى عن طريق الكتابة في مربع الإدخال.

تعمل التفاعلات السابقة على تبديل بيانات فئة المكون التي بدورها تعمل على تحديث HTML الخاص بقالب المكون. توفر المكونات المنطق الأساسي الذي يسهل تدفق البيانات. يجعل القالب HTML تلك البيانات قابلة للقراءة للمستخدم.

#### قالب مكون

قدم نموذج HTML الخاص بموديل المثال السابق بناء جملة مثيرًا للاهتمام. بناء الجملة لم يكن HTML الفعلي. كان قالب HTML في Angular. غالبا ما يشير البعض إلى أنه يحتوي على HTML _Plus_ لا يمكن التعرف عليه إلا من خلال مترجم Angular. يدعم المحول البرمجي بناء جملة يؤدي إلى المعالجة الديناميكية لـ HTML. غالبًا ما تشير هذه المقالة إلى "نموذج HTML" أو "قالب".

يسمح بناء الجملة للمكونات بحقن البيانات مباشرة في القالب HTML. الحقن هو ديناميكي. بمعنى ، يمكن للبيانات التكرار وعرض نفسها على هيئة HTML دون الحاجة إلى مساعدة خارجية. يقوم المترجم الزاوي بتجميعه في HTML الحقيقي في الوقت الذي يصل فيه إلى متصفح الويب.

لمعرفة المزيد حول بعض الطرق التي تربط بها البيانات بالقالب ، اقرأ عن [ربط البيانات في Angular](https://guide.freecodecamp.org/angular/data-binding) . حدثت أمثلة قليلة لربط البيانات في المثال السابق ( `{{ ... }}` ). بالنسبة لهذه المقالة ، يكفي التعرف على حدوث تفاعلات البيانات بين فئة المكون والقالب الخاص بها.

#### الاستعلام عن القالب

بيانات إدارة حالة القالب يعمل بشكل صحيح بشكل جيد. ومع ذلك ، لا تفي البيانات الصرفة دائمًا بالتصميم المقصود للتطبيق. قد يكون التفاعل بشكل مباشر أكثر مع نموذج كائن المستند (DOM) مطلوبًا.

للقيام بذلك ، يجب أن يكون المكون إشارة إلى عناصر القالب. عندما تتغير البيانات ، يمكن للمكون التعامل مع DOM بشكل صريح. هذا هو نهج أكثر إعلانية.

يمكن للمكونات الاستيلاء على المراجع باستخدام واجهة برمجة تطبيق DOM لمتصفح الويب (API). فكرة سيئة رغم ذلك. يفضل الزاوي التوافق عبر النظام الأساسي. لكي يعمل أحد المكونات خارج مستعرض الويب ، يجب عليه استخدام واجهة برمجة تطبيقات Angular بدلاً من DOM.

يمكن للمكونات الاستعلام عن القوالب باستخدام `@ViewChild` و `ContentChild` . إنهم يمسكون بالإشارات إلى عناصر القالب نيابة عن فئة المكون.

 ``import { Component, ViewChild, ContentChild, ElementRef, Renderer2, AfterContentChecked, AfterViewChecked } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <button (click)="toggleEnlarge()">Toggle Enlarge</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class ChildComponent implements AfterContentChecked { 
  @ContentChild("pReference", { read: ElementRef }) pElement: ElementRef; 
  textEnlarge: boolean = false; 
 
  constructor(private renderer: Renderer2) { } 
 
  toggleEnlarge() { 
    this.textEnlarge = !this.textEnlarge; 
  } 
 
  ngAfterContentChecked() { 
    if (this.textEnlarge) 
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', '25px'); 
      else 
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', 'initial'); 
    } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <button (click)="toggleHighlight()">Toggle Highlight</button> 
  <h1 #hOneRefereance>View Child</h1> 
  <app-child> 
    <p #pReference>Content Child</p> 
  </app-child> 
  ` 
 }) 
 export class ParentComponent implements AfterViewChecked { 
  @ViewChild("hOneRefereance", { read: ElementRef }) hOneElement: ElementRef; 
  textHighlight: boolean = false; 
 
  constructor(private renderer: Renderer2) { } 
 
  toggleHighlight() { 
    this.textHighlight = !this.textHighlight; 
  } 
 
  ngAfterViewChecked() { 
    if (this.textHighlight) 
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'yellow'); 
    else 
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'initial'); 
  } 
 } 
`` 

يحتوي المثال أعلاه على زرين يقومان بتبديل نمط معين لكل عنصر. يؤدي النقر فوق الأزرار إلى تبديل قيم true / false الفريدة لكل مكون. يحدد هؤلاء booleans ما إذا كانت الأنماط المخصصة تنطبق. بدلاً من هذه القيم تتسبب في تغييرات بشكل حتمى ، يغير خطاطيف دورة الحياة ( `ngAfterViewChecked` و `ngAfterContentChecked` ) بشكل `ngAfterContentChecked` DOM.

النهج التصريحي يغير بوضوح النمط من خلال مرجع العنصر. في البرمجة الحتمية ، تكون التغييرات التي تطرأ على البيانات المستندة إلى DOM ضمنية. تحقق من هذه المقالة على [برمجة التعميمية والتوضيحية](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2) لمعرفة المزيد.

الشيء الرئيسي الذي يجب ملاحظته هو كيف يتم سحب هذه المراجع من القالب. في المثال ، يوجد قسمان من القالب المستعلم `@ViewChild` باستخدام اثنين من decorators: `@ViewChild` و `@ContentChild` .

فهي تختلف في المكان الذي تبحث فيه عن مرجع عنصر ما إذا كان في محتوى DOM أو عرض DOM. توجد هذه DOMs اثنين في قالب ParentComponent. التفريق بينهما مهم لأنه ينتهي من العرض في أوقات منفصلة.

هذا هو السبب في `@ViewChild` و `@ContentChild` كلا موجودة. وهي تعمل مع خطاطيف دورة حياة المرافق الخاصة بها `ngAfterViewChecked` و `ngAfterContentChecked` . هذه hooks دورة حياة انتظار الاستعلامات الخاصة بهم لحل قبل تنفيذ.

بمجرد حل `@ViewChild` و `@ContentChild` توفير مراجع إلى عنصرين. كلاهما موجودان في أجزاء منفصلة من DOM. لا تزال البيانات المنطقية تحدد النتيجة. كيف تترجم النتيجة إلى DOM هو الفرق الرئيسي من قبل. تحديث DOM من خلال التلاعب المباشر في `Renderer2` منه.

#### إسقاط المحتوى

يوجد محتوى DOM في عنصر intHTML داخلي لـ ChildComponent `<app-child></app-child>` . يتم وضع كل شيء داخل قالب ParentComponent. يقوم البرنامج الداخلي لـ HTML الخاص _بمشروعات_ `app-child` على نموذج ChildComponent من خلال `<ng-content></ng-content>` .

هذا مثال على عرض المحتوى. عرض المحتوى من `one` مكون إلى آخر باستخدام HTML داخلي من `another` "علامات الصورة في `one` " قالب الصورة بحيث `another` عنصر يمكن سحب تلك HTML داخلي في القالب الخاص عبر `<ng-content></ng-content>` . _شكرا على قراءة هذه الجملة._

ولهذا السبب تشير ChildComponent إلى عنصر `<p></p>` باستخدام `@ContentChild` . المحتوى المحتوي داخل `<app-child></app-child>` في نموذج ParentComponent يشكل محتوى DOM. تشير ChildComponent العنصر مع استعلام `@ContentChild` .

يتكون DOM عرض ParentComponent من كل شيء يمكن الوصول إليها من داخل عرض المكون. لا يتضمن هذا بالضرورة القالب بأكمله وفقًا لـ innerHTML لـ `<app-child></app-child>` . مرة أخرى ، يتم الاستعلام عن هذا الجزء من DOM من ChildComponent باستخدام `@ContentChild` . يتم الاستعلام عن أي شيء آخر باستخدام `@ViewChild` من فئة `@ViewChild` .

هذه طريقة رائعة للمكونات لتبادل المحتوى والاستعلام عن محتواه بغض النظر عن نوع DOM الخاص به. يمكن للمكونات التواصل مع نفسه والآخرين باستخدام ربط البيانات أيضًا. قراءة المزيد حول هذا الموضوع من [هذه المقالة](https://guide.freecodecamp.org/angular/data-binding) .

#### أنماط المكونات

تعتبر الأنماط ضرورية لقابلية المكون والتفاعلية. يقوم كل مكون بتغليف تبعيات ورقة الأنماط الخاصة به. بهذه الطريقة ، لا تنطبق إلا على HTML لنموذج المكون. تقنية خاصة قدمها ظل HTML DOM يجعل هذا ممكن.

قد يوجد فرع DOM ظل على أي عنصر. لا يمكن رؤية هذا الجزء من DOM من شفرة مصدر HTML. تعمل عناصر HTML القياسية على تحسين واجهة DOM لتقديم مظاهر علاماتها التجارية. يجب أن يربط فرع دوم الظل بمكوّن مرئي بحيث يمكنه تصميمه وتخصيصه.

الجانب الفريد حول فرع DOM الظل هو تغليفه. كل شيء يستخدم لتصميم عنصر الجذر الخاص بفرع DOM الظل هو خاص به. لا يمكن لأي عنصر آخر الوصول إليه.

يحتضن الزاوي هذا الشكل من التغليف مع المكونات. يتم تغليف ورقة الأنماط ونموذج المكون معًا. لا مكونات أخرى لديها حق الوصول إليها. لا يمكن أن تحدث الصدوع ورقة النمط.

لا يستخدم Angular الظل DOM بشكل افتراضي. ويستخدم نظام مضاهاة يحاكي سلوك دوم الظل. يعد هذا مقياسًا مؤقتًا لأن بعض متصفحات الويب لا تدعم بعد واجهة برمجة تطبيقات DOM.

تحتوي بيانات `@Component` على مجال `encapsulation` . يتيح هذا للمطورين تبديل in-between DOM shaulated مضاهيًا ، Real DOM ظل ، أو لا. فيما يلي الخيارات حسب ترتيبها الخاص:

*   `ViewEncapsulation.Emulated` - `ViewEncapsulation.Emulated` shadow DOM (افتراضي)
    
*   `ViewEncapsulation.Native` - ظل حقيقي DOM (الآن `ViewEncapsulation.Native` منذ Angular 6.0.8)
    
*   `ViewEncapsulation.None` - لا
    

`ViewEncapsulation.None` تعني أن أوراق أنماط المكون ترتفع إلى النطاق العالمي. لا ينبغي أن يؤخذ في الاعتبار النظر في مكونات وحدة خاصة بهم (تغليف). الزاوي لا يزال يوفر بمثابة فتحة الهروب في الحالات القصوى.

#### استنتاج

مكونات بناء التطبيقات. هم خاصا scoped وموحدة بشكل منفصل عن بعضها البعض ما لم يتم تكوينها بخلاف ذلك. تميل التطبيقات إلى البدء من وحدة الجذر. في الماضي ، تشكل المكونات شجرة ممددة تحدد بقية التطبيق.

تغطي المكونات وحدة معينة من واجهة التطبيق. ويشمل ذلك أساليبها ومنطقها وتخطيطها. الخطط الأخرى مثل الأنابيب والخدمات والتوجيهات ترى الاستخدام المتكرر في كود المكون. يمكنك معرفة المزيد حول هذه التفاعلات في بعض مقالات الدليل الزاوي الأخرى.

لا ننسى أن المكونات يجب [التمهيد](https://angular.io/guide/bootstrapping) . يمكن أن يحدث هذا في وحدة الجذر أو البيانات الوصفية للمكون. هذا هو الزاوي بحيث يتعرف على المكون أينما يظهر في التطبيق.

يمكنك دائمًا معرفة المزيد من خلال استكشاف الروابط الموجودة أدناه. ويحمل العنصر أكثر بكثير مما يمكن أن تنقله هذه المقالة.

## مصادر

*   [فريق الزاوي. "المستندات الزاويّة". _جوجل_ . تم الوصول إليه في 3 يونيو 2018](https://angular.io/guide)
*   [مجتمع موزيلا MDN. "استخدام Shadow DOM". _موزيلا_ ، تم تحديثه في 30 مايو 2018. تم الوصول إليه في 3 يونيو 2018](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
*   [موندي ، إيان. "التعبير مقابل البرمجة الضرورية". _codeburst.io_ ، 20 فبراير 2017. تم الوصول إليها في 3 يونيو 2018](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)

## مصادر

*   [وثائق الزاوي](https://angular.io/guide)
*   [Angular GitHub Repository](https://github.com/angular/angular)
*   [مقدمة إلى المكونات](https://angular.io/guide/architecture-components)
*   [مكونات في العمق](https://angular.io/guide/displaying-data)
*   [الظل DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)