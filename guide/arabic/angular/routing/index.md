---
title: Routing
localeTitle: التوجيه
---
# التوجيه

#### التحفيز

التوجيه أمر ضروري. تستضيف العديد من تطبيقات الويب الحديثة الكثير من المعلومات لصفحة واحدة. يجب ألا يضطر المستخدمون إلى التمرير عبر محتوى التطبيق بأكمله أيضًا. يحتاج التطبيق إلى تقسيم نفسه إلى أقسام مميزة.

يقوم المستخدمون بتحديد أولويات المعلومات الضرورية. يساعدهم التوجيه في العثور على قسم التطبيق بهذه المعلومات. قد توجد أية معلومات أخرى مفيدة للمستخدمين الآخرين على مسار منفصل تمامًا. مع التوجيه ، يمكن لكل المستخدمين العثور على ما يحتاجون إليه بسرعة. تبقى التفاصيل غير ذات الصلة محجوبة خلف طرق غير ملائمة.

يتفوق التوجيه في فرز وتقييد الوصول إلى بيانات التطبيق. يجب عدم عرض البيانات الحساسة أبدًا للمستخدمين غير المصرح لهم. بين كل طريق قد يتدخل التطبيق. يمكن فحص جلسة المستخدم لأغراض المصادقة. يحدد هذا الفحص ما يعرضه المسار إذا كان يجب تقديمه على الإطلاق. يوفر التوجيه للمطورين فرصة مثالية للتحقق من المستخدم قبل المتابعة.

إن إنشاء قائمة من المسارات يعزز التنظيم أيضًا. من حيث التنمية ، فإنه يحافظ على التفكير المطور في أقسام مميزة. يستفيد المستخدمون أيضًا من هذا ، ولكن المطورين الأكثر تقدمًا عند التنقل في شفرة التطبيق. ترسم قائمة أجهزة التوجيه المبرمجة نموذجًا دقيقًا للواجهة الأمامية للتطبيق.

بالنسبة إلى Angular ، يأخذ التوجيه الخاص به مكتبته بأكملها في إطار العمل. تدعم جميع إطارات الواجهة الأمامية الحديثة التوجيه ، ولا تختلف Angular عن غيرها. يحدث التوجيه من جانب العميل باستخدام إما التجزئة أو توجيه الموقع. يسمح كلا الأنماط للعميل بإدارة المسارات الخاصة به. لا توجد مساعدة إضافية من الخادم ضرورية بعد الطلب الأولي.

ونادرًا ما يتم تحديث متصفح الويب باستخدام التوجيه من جانب العميل. لا تزال أدوات مساعدة متصفح الويب مثل الإشارات المرجعية والسجل وشريط العناوين تعمل على الرغم من عدم التحديث. وهذا ما يجعل تجربة توجيه البقعة لا تفسد المتصفح. لا يعاد تحميل أي صفحة أكثر هياج أثناء التوجيه إلى صفحة مختلفة.

يضيف الزاوي على طبقة من التجريد على التقنيات الأساسية المستخدمة للتوجيه. تعتزم هذه المقالة لشرح هذا التجريد. توجد إستراتيجيتان التوجيه في Angular: location path and hash. تركز هذه المقالة على استراتيجية موقع المسار منذ ذلك الخيار الافتراضي.

بالإضافة إلى ذلك ، قد يؤدي موقع المسار إلى إهمال توجيه التجزئة بعد الإصدار الكامل من [Angular Universal](https://universal.angular.io) . وبغض النظر عن ذلك ، فإن الاستراتيجيتين متشابهة جدًا في التنفيذ. تعلم واحد يتعلم الآخر. حان الوقت للبدء!

#### RouterModule Setup

توجيه الأدوات المساعدة للتصدير باستخدام `RouterModule` متاح من `@angular/router` . وهو ليس جزءًا من المكتبة الأساسية حيث لا تتطلب جميع التطبيقات التوجيه. الطريقة الأكثر تقليدية لتقديم التوجيه هي [وحدة نمطية](https://angular.io/guide/feature-modules) خاصة بها.

مع تزايد تعقيد الطريق ، فإن امتلاكه كوحدة خاصة به سيعزز من بساطة وحدة الجذر. ابقائه بسيط غبي دون المساومة على وظائف يشكل التصميم الجيد للوحدات.

 `import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { AComponent } from '../../components/a/a.component'; 
 import { BComponent } from '../../components/b/b.component'; 
 
 // an array of soon-to-be routes! 
 const routes: Routes = []; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
` 

`.forRoot(...)` هي وظيفة فئة متوفرة من فئة RouterModule. تقبل وظيفة مجموعة من `Route` الكائنات في `Routes` . `.forRoot(...)` بتكوين `.forRoot(...)` - تحميل أثناء به البديلة `.forChild(...)` لتكوين التحميل البطيئة.

تحميل حريصة يعني أن تحميل المسارات محتواها في التطبيق من الحصول على الذهاب. التحميل الزائف يحدث عند الطلب. محور هذه المقالة هو تحميل حريصة. هذا هو النهج الافتراضي للتحميل في تطبيق. يبدو تعريف فئة RouterModule شيئًا مثل كتلة التعليمة البرمجية التالية.

 `@NgModule({ 
  // … lots of metadata ... 
 }) 
 export class RouterModule { 
  forRoot(routes: Routes) { 
    // … configuration for eagerly loaded routes … 
  } 
 
  forChild(routes: Routes) { 
    // … configuration for lazily loaded routes … 
  } 
 } 
` 

لا تقلق بشأن تفاصيل التكوين التي يغفلها المثال مع التعليقات. وجود فهم عام سيفعل في الوقت الحالي.

لاحظ كيف تقوم AppRoutingModule باستيراد RouterModule أثناء تصديرها أيضًا. هذا من المنطقي نظرا AppRoutingModule هو وحدة ميزة. انها تستورد في وحدة الجذر باعتبارها وحدة نمطية. فإنه يكشف توجيهات RouterModule ، واجهات ، والخدمات إلى شجرة مكون الجذر.

هذا يفسر لماذا يجب على AppRoutingModule تصدير RouterModule. يفعل ذلك من أجل شجرة المكونات الأساسية في وحدة الجذر. يحتاج الوصول إلى تلك المرافق التوجيه!

 `import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 
 import { AppComponent } from './app.component'; 
 import { AComponent } from './components/a/a.component'; 
 import { BComponent } from './components/b/b.component'; 
 import { AppRoutingModule } from './modules/app-routing/app-routing.module'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent, 
    AComponent, 
    BComponent 
  ], 
  imports: [ 
    AppRoutingModule, // routing feature module 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ AppComponent ] 
 }) 
 export class AppModule { } 
` 

الواردات الرمز المميز AppRoutingModule من الأعلى. إدراج رمزي في صفيف واردات وحدة الجذر. قد تستخدم شجرة مكون الجذر الآن مكتبة RouterModule. يتضمن ذلك توجيهاته واجهاته وخدماته كما سبق ذكره. شكرا جزيلا ل AppRoutingModule لتصدير RouterModule!

وستكون أدوات RouterModule مفيدة لمكونات الجذر. يستخدم HTML الأساسي لـ AppComponent من توجيه واحد: `router-outlet` .

 `
<!-- app.component.html --> 
 
 <ul> 
  <!-- routerLink(s) here --> 
 </ul> 
 <router-outlet></router-outlet> 
 <!-- routed content appends here (AFTER THE ELEMENT, NOT IN IT!) --> 
` 

`routerLink` عبارة عن توجيه سمة من سمات RouterModule. سيتم إرفاقه بكل عنصر من عناصر `<ul></ul>` بمجرد إعداد المسارات. `router-outlet` عبارة عن توجيه مكون ذو سلوك مثير للاهتمام. يعمل أكثر كمؤشر لعرض المحتوى الموجه. نتائج المحتوى الموجه من التنقل إلى مسار معين. عادةً ما يعني ذلك مكونًا واحدًا تم تكوينه في AppRoutingModule

يتم عرض المحتوى الموجّه مباشرةً بعد `<router-outlet></router-outlet>` . لا شيء يدخل في داخله. هذا لا يجعل الكثير من فرق كبير. ومع ذلك ، لا تتوقع أن يتصرف `router-outlet` مثل حاوية للمحتوى الموجه. إنه مجرد علامة لإلحاق محتوى موجه إلى نموذج كائن المستند (DOM).

#### التوجيه الأساسي

يحدد القسم السابق الإعداد الأساسي للتوجيه. قبل أن يحدث التوجيه الفعلي ، يجب معالجة بعض الأمور الأخرى

السؤال الأول الذي يجب معالجته هو ما هي الطرق التي سيستهلكها هذا التطبيق؟ حسنا ، هناك نوعان من المكونات: AComponent و BComponent. يجب أن يكون لكل واحد طريقه الخاص. يمكنهم تقديمها من منفذ `router-outlet` في AppComponent اعتمادًا على موقع المسار الحالي.

يحدد موقع المسار (أو المسار) ما يتم إلحاقه [بأصل موقع الويب](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) (على سبيل المثال http: // localhost: 4200) من خلال سلسلة من المائلة ( `/` ).

 `// … same imports from before … 
 
 const routes: Routes = [ 
  { 
    path: 'A', 
    component: AComponent 
  }, 
  { 
    path: 'B', 
    component: BComponent 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
` 

`http://localhost:4200/A` يجعل AComponent من منفذ `router-outlet` الخاص بـ AppComponent. `http://localhost:4200/B` renders BComponent. تحتاج إلى وسيلة لتوجيه إلى هذه المواقع دون استخدام شريط العنوان. يجب ألا يعتمد التطبيق على شريط عناوين متصفح الإنترنت للتنقل.

_يكمل CSS العالمي (أوراق الأنماط المتتالية) HTML أسفله. يجب أن يكون رابط جهاز التوجيه في التطبيق مظهرًا رائعًا. ينطبق هذا CSS على جميع الأمثلة الأخرى أيضًا._

 `/* global styles.css */ 
 
 ul li { 
  cursor: pointer; 
  display: inline-block; 
  padding: 20px; 
  margin: 5px; 
  background-color: whitesmoke; 
  border-radius: 5px; 
  border: 1px solid black; 
 } 
 
 ul li:hover { 
  background-color: lightgrey; 
 } 
` 

 `
<!-- app.component.html --> 
 
 <ul> 
  <li routerLink="/A">Go to A!</li> 
  <li routerLink="/B">Go to B!</li> 
 </ul> 
 <router-outlet></router-outlet> 
` 

هذا هو التوجيه الأساسي! يؤدي النقر فوق أي من مسارات routerLink إلى توجيه عنوان الويب. يعيد تعيينه دون تحديث متصفح الويب. يقوم `Router` Angular بتحديد خرائط العنوان الموجه إلى `Routes` تكوينها في AppRoutingModule. يطابق العنوان إلى `path` ممتلكات واحد `Route` الكائن ضمن مجموعة. دائمًا ما تفوز المباراة الأولى ، لذا يجب أن تكون جميع المسارات المطابقة تقع في نهاية صفيف `Routes` .

تمنع جميع المسارات المتوافقة التطبيق من التعطل إذا تعذر مطابقة المسار الحالي. يمكن أن يحدث هذا من شريط العنوان حيث قد يكتب المستخدم في أي مسار. لهذا ، يوفر Angular قيمة مسار حرف البدل `**` التي تقبل جميع المسارات. يعرض هذا المسار عادةً مكون PageNotFoundComponent الذي يعرض "خطأ 404: الصفحة غير موجودة".

 `// … PageNotFoundComponent imported along with everything else … 
 
 const routes: Routes = [ 
  { 
    path: 'A', 
    component: AComponent 
  }, 
  { 
    path: 'B', 
    component: BComponent 
  }, 
  { 
    path: '', 
    redirectTo: 'A', 
    pathMatch: 'full' 
  }, 
  { 
    path: '**', 
    component: PageNotFoundComponent 
  } 
 ]; 
` 

في `Route` الكائن الذي يحتوي `redirectTo` يحافظ على PageNotFoundComponent من تقديم نتيجة `http://localhost:4200` . هذا هو الطريق الرئيسية للتطبيقات. لإصلاح هذا ، `redirectTo` توجيه المسار الرئيسي إلى `http://localhost:4200/A` `http://localhost:4200/A` يصبح بطريقة `http://localhost:4200/A` مباشرة مسار المنزل الجديد للتطبيق.

يشير `pathMatch: 'full'` إلى كائن `Route` لمطابقة المسار الرئيسي ( `http://localhost:4200` ). يطابق المسار الفارغ.

هذان الجديدة `Route` الأشياء تذهب في نهاية المصفوفة منذ يفوز المباراة الأولى. دائمًا ما يتطابق عنصر الصفيف الأخير ( `path: '**'` ) ، حتى يتحول إلى آخر.

هناك شيء آخر يستحق العناء قبل الانتقال. كيف يعرف المستخدم مكان تواجده في التطبيق بالنسبة إلى المسار الحالي؟ بالتأكيد قد يكون هناك محتوى محدد للطريق ، ولكن كيف يفترض أن يقوم المستخدم بإجراء ذلك الاتصال؟ يجب أن يكون هناك شكل من أشكال التمييز المطبّق على موجِّه التوجيه. بهذه الطريقة ، سيعرف المستخدم أي مسار نشط لصفحة الويب المحددة.

هذا اصلاحه سهل. عند النقر فوق عنصر `routerLink` ، يعين `Router` في Angular _التركيز_ عليه. يمكن أن يؤدي هذا التركيز إلى تشغيل أنماط معينة توفر ملاحظات مفيدة للمستخدم. يمكن لتوجيه `routerLinkActive` تتبع هذا التركيز للمطور.

 `
<!-- app.component.html --> 
 
 <ul> 
  <li routerLink="/A" routerLinkActive="active">Go to A!</li> 
  <li routerLink="/B" routerLinkActive="active">Go to B!</li> 
 </ul> 
 <router-outlet></router-outlet> 
` 

يمثل التعيين الصحيح لـ `routerLinkActive` سلسلة من الفئات. يصور هذا المثال فئة واحدة فقط (. `.active` ) ، ولكن قد يتم تطبيق أي عدد من الفئات المفصول `.active` . عندما يعين `Router` _التركيز_ على routerLink ، يتم تطبيق الفئات المحددة بفراغات على عنصر المضيف. عندما ينتقل التركيز بعيدًا ، تتم إزالة الفئات تلقائيًا.

 `/* global styles.css */ 
 
 .active { 
  background-color: lightgrey !important; 
 } 
` 

يمكن للمستخدمين الآن التعرف بسهولة على كيفية تطابق المسار الحالي ومحتوى الصفحة. تسليط الضوء على `lightgrey` ينطبق على routerLink مطابقة الطريق الحالي. يضمن `!important` تجاوز التمييز stylings مضمنة.

#### طرق معتبرة

لا يجب أن تكون المسارات مشفرة بالكامل. يمكن أن تحتوي على متغيرات ديناميكية قابلة للإحاطة من المكون المقابل لكائن `Route` . يتم تعريف هذه المتغيرات كمعلمات عند كتابة مسار المسار.

تكون معلمات المسار اختيارية أو إلزامية لمطابقة `Route` معين. يعتمد ذلك على كيفية كتابة المسار لمعلماته. توجد إستراتيجيتان: المصفوفة والمعاملة التقليدية.

تبدأ المعلمات التقليدية من صفيف `Routes` المكوّنة في AppRoutingModule.

 `const routes: Routes = [ 
  // … other routes … 
  { 
    path: 'B', 
    component: BComponent 
  }, 
  { 
    path: 'B/:parameter', 
    component: BComponent 
  }, 
  // … other routes … 
 ]; 
` 

التركيز على مسارين BComponent. ستحدث المعلمة في نهاية المطاف في كلا الطريقين.

تحدث المعلمات التقليدية في `Route` BComponent الثاني. `B/:parameter` تحتوي على `parameter` المعلمة كما هو مبين مع `:` . أيا كان ما يلي النقطتين علامة اسم المعلمة. `parameter` المعلمة ضرورية من أجل `Route` BComponent الثاني لمطابقة.

يقرأ `parameter` في قيمة كل ما يمر في الطريق. التوجيه إلى `http://localhost:4200/B/randomValue` سيعين `parameter` قيمة `randomValue` . يمكن أن تتضمن هذه القيمة أي شيء بجانب آخر `/` . على سبيل المثال ، لن يقوم `http://localhost:4200/B/randomValue/blahBlah` بتشغيل `Route` BComponent الثاني. يعرض PageNotFoundComponent بدلاً من ذلك.

يمكن BComponent مرجع معلمات التوجيه من فئة المكون الخاص به. كل من النهج إلى المعلمات (مصفوفة والتقليدية) تعطي النتائج نفسها في BComponent. قبل رؤية BComponent ، افحص شكل مصفوفة المعلمات أدناه.

 `// app.component.ts 
 
 import { Component } from '@angular/core'; 
 import { Router } from '@angular/router'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html' 
 }) 
 export class AppComponent { 
  constructor(private router: Router) { } 
 
  routeMatrixParam(value: string) { 
    if (value) 
      this.router.navigate(['B', { parameter: value }]); // matrix parameter 
    else 
      this.router.navigate(['B']); 
  } 
 
  routeAddressParam(value: string) { 
    this.router.navigate(['B', value]); 
  } 
 } 
` 

يوفر نظام حقن التبعية في Angular إمكانية إنشاء مثيل لجهاز `Router` . يتيح هذا المكون برمجيًا التوجيه. تقبل الدالة `.navigate(...)` صفيف من القيم التي يتم `.navigate(...)` إلى مسار _قابل للتوجيه_ . شيء من هذا القبيل `.navigate(['path', 'to', 'something'])` يحل إلى `http://localhost:4200/path/to/something` . `.navigate(...)` يضيف علامات `/` مسارات المسار عند تطبيع الصفيف في مسار _قابل للتوجيه_ .

يحدث النموذج الثاني من parameterization في `routeMatrixParam(...)` . انظر هذا السطر من الكود: `this.router.navigate(['B', { parameter: value }])` . هذا الشكل من `parameter` هو معلمة مصفوفة. قيمتها اختيارية لأول BComponent `Route` لمباراة ( `/B` ). يطابق `Route` بغض النظر عن وجود المعلمة في المسار.

`routeAddressParam(...)` يطابق `http://localhost:4200/B/randomValue` parameterization `http://localhost:4200/B/randomValue` . تحتاج هذه الإستراتيجية التقليدية إلى معلمة تتطابق مع مسار BComponent الثاني ( `B/:parameter` ).

تتعلق استراتيجية المصفوفة بـ `routeMatrixParam(...)` . مع أو بدون معلمة مصفوفة في المسار الخاص به ، لا يزال يطابق مسار BComponent الأول. تمرير `parameter` المعلمة إلى BComponent تماماً مثل الطريقة التقليدية.

لإضفاء فهم كامل على الشفرة الواردة أعلاه ، إليك شفرة HTML المقابلة للنموذج.

 `
// app.component.html 
 
 <ul> 
  <li routerLink="/A">Go to A!</li> 
  <li> 
    <input #matrixInput> 
    <button (click)="routeMatrixParam(matrixInput.value)">Matrix!</button> 
  </li> 
  <li> 
    <input #paramInput> 
    <button (click)="routeAddressParam(paramInput.value)">Param!</button> 
  </li> 
 </ul> 
 <router-outlet></router-outlet> 
` 

في القالب ، يتم قبول القيم كمدخل نصي. يقوم الإدخال بحقنها في مسار المسار كمعلمة. توجد مجموعتان منفصلتان من الصناديق لكل إستراتيجية معلمات (تقليدية ومصفوفة). مع كافة القطع معاً ، فقد حان الوقت لفحص فئة مكون BComponent.

 ``// b.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { ActivatedRoute, ParamMap } from '@angular/router'; 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>Route param: {{ currParam }}</p> 
  ` 
 }) 
 export class BComponent implements OnInit { 
  currParam: string = ""; 
 
  constructor(private route: ActivatedRoute) { } 
 
  ngOnInit() { 
    this.route.params.subscribe((param: ParamMap) => { 
      this.currParam = param['parameter']; 
    }); 
  } 
 } 
`` 

نتائج BComponent من أي من مسارين BComponent في AppRoutingModule. `ActivatedRoute` instantiates في مجموعة من المعلومات المفيدة المتعلقة بالطريق الحالي. هذا هو المسار الذي تسبب في جعل BComponent. `ActivatedRoute` عبر حقن التبعية التي تستهدف مُنشئ الصف.

حقل `.params` الخاص بـ `ActivatedRoute.params` بإرجاع `Observable` الذي يقوم بإصدار معلمات المسار. لاحظ كيف أن نهجين المعلمات المختلفين ينتجان `parameter` المعلمة. عاد `Observable` تنبعث بأنها زوج قيمة المفتاح-من داخل `ParamMap` الكائن.

بين نهج المعايير والثوابت، وهما `parameter` المعلمة حل مماثل. تنبعث القيمة من `ActivatedRoute.params` على الرغم من النهج الخاص بالمعلمة.

يميز شريط العناوين النتائج النهائية لكل أسلوب. تعطي معلمات المصفوفة (اختياري لمطابقة `Route` ) العنوان: `http://localhost:4200/B;parameter=randomValue` . تعطي المعلمات التقليدية (المطلوبة لمطابقة `Route` ): `http://localhost:4200/B/randomValue` .

وفي كلتا الحالتين ، نفس النتائج BComponent. الفارق الفعلي: مختلف مباريات BComponent `Route` . هذا يعتمد كليا على استراتيجية المعلمات. يضمن نهج المصفوفة المعلمات اختيارية لمطابقة `Route` . النهج التقليدي يتطلب منهم.

#### المسارات المتداخلة

قد تشكل `Routes` تسلسلاً هرمياً. في DOM ، ينطوي ذلك على `router-outlet` أحد الوالدين `router-outlet` `router-outlet` واحد على الأقل. في شريط العنوان ، يبدو كالتالي: `http://localhost/parentRoutes/childRoutes` . في تكوين `Routes` ، تشير الخاصية `children: []` إلى كائن `Route` أنه يحتوي على مسارات متداخلة (فرعية).

 `import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { NestComponent } from '../../components/nest/nest.component'; 
 import { AComponent } from '../../components/nest/a/a.component'; 
 import { BComponent } from '../../components/nest/b/b.component'; 
 
 const routes: Routes = [ 
  { 
    path: 'nest', 
    component: NestComponent, 
    children: [ 
      { path: 'A', component: AComponent }, 
      { path: 'B', component: BComponent } 
    ] 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
` 

 ``// nest.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-nest', 
  template: ` 
  <ul> 
    <li routerLink="./A">Go to A!</li> 
    <li routerLink="./B">Go to B!</li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class NestComponent { } 
`` 

يعرض NestComponent `router-outlet` بعد تقديم نفسه من `router-outlet` آخر مستوى الجذر في AppComponent. قد يتم عرض `router-outlet` الخاص بقالب NestComponent إما AComponent ( `/nest/A` ) أو BComponent ( `/nest/B` ).

يعكس هذا AppRoutingModule تعشش في NestComponent في `Route` الكائن. يحتوي الحقل `children: []` على صفيف من كائنات `Route` . هذه `Route` الكائن يجوز أيضا طرق عش في هم `children: []` المجالات. يمكن أن يستمر هذا مع العديد من طبقات المسارات المتداخلة. يوضح المثال أعلاه طبقتين من التعشيش.

يحتوي كل `routerLink` على `./` مقارنة بـ `/` . ال `.` يضمن أن يلحق routerLink بمسار المسار. يستبدل routerLink تمامًا المسار بطريقة أخرى. بعد التوجيه إلى `/nest` ، `.` يتوسع في `/nest` .

يفيد ذلك في التوجيه إلى `/nest/A` أو `/nest/B` من مسار `.nest` . تشكل `A` و `B` المسارات المتداخلة `/nest` . التوجيه إلى `/A` أو `/B` إرجاع PageNotFound. `/nest` يجب أن تذييل المسارين.

إلقاء نظرة على AppComponent التي تحتوي على `router-outlet` مستوى الجذر في القالب الخاص به. AppComponent هي الطبقة الأولى من التعشيش بينما NestComponent هي الثانية.

 ``import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <ul> 
    <li routerLink="/nest">Go to nested routes!</li> 
    <li routerLink="/">Back out of the nested routes!</li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class AppComponent { } 
`` 

داخل كائن `Route` العش ، `children: []` يحتوي على مسارين متداخلين. ينتجون في AComponent و BComponent عند التوجيه من `/nest` كما تمت مناقشته مسبقًا. هذه المكونات بسيطة جدا من أجل العرض. `<li routerLink="/">...</li>` يتيح لك التنقل من مسارات العش لإعادة تعيين المثال عن طريق الانتقال إلى المسار الرئيسي.

 ``import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <p>a works!</p> 
  ` 
 }) 
 export class AComponent { } 
`` 

 ``import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>b works!</p> 
  ` 
 }) 
 export class BComponent { } 
`` 

`children: []` تقبل `children: []` المصفوفة عنصر `Route` كعناصر. `children: []` يمكن أن تنطبق على أي من هذه العناصر كذلك. يمكن لأطفال هذه العناصر الاستمرار في التعشيش. قد يستمر هذا النمط مع العديد من طبقات التعشيش. قم `router-outlet` في القالب لكل طبقة من التوجيه المتداخل.

تطبيق تقنيات التوجيه بغض النظر عن `Route` مستوى الكائن التعشيش. تقنيات المعلمات تختلف في جانب واحد فقط. يمكن لطرق الأطفال الوصول إلى معلمات الوالدين فقط عبر `ActivatedRoute.parent.params` . تستهدف `ActivatedRoute.params` نفس المستوى من المسارات المتداخلة. هذا يستثني المسارات على مستوى الوالدين ومعلماتها.

حراس `Route` مناسبون بشكل خاص للتوجيه المتداخل. يمكن أن `Route` كائن `Route` واحد الوصول إلى جميع مساراتها المتداخلة (الفرعية).

#### طرق حراسة

غالبًا ما تتكون تطبيقات الويب من بيانات عامة وخاصة. يميل كلا النوعين من البيانات إلى أن يكون لهما صفحات خاصة بهما مع طرق _حراسة_ . هذه المسارات تسمح / تقييد الوصول اعتمادا على امتيازات المستخدم. قد يتفاعل المستخدمون غير المصرح لهم مع مسار حذر. يجب أن يمنع المسار المستخدم إذا حاول الوصول إلى محتواه الموجّه.

يوفر Angular حزمة من حراس المصادقة التي يمكن إرفاقها بأي مسار. يتم تشغيل هذه الطرق تلقائيًا اعتمادًا على كيفية تفاعل المستخدم مع المسار المحمي.

*   `canActivate(...)` - حرائق عندما يحاول المستخدم الوصول إلى الطريق
    
*   `canActivateChild(...)` - حرائق عندما يحاول المستخدم الوصول إلى المسارات المتداخلة (التابعة) `canActivateChild(...)`
    
*   `canDeactivate(...)` - حرائق عندما يحاول المستخدم ترك الطريق
    

تتوفر طرق الحراسة في Angular من `@angular/router` . لمساعدتهم على المصادقة ، يمكنهم اختيار بعض المعلمات بشكل اختياري. هذه المعلمات لا يحقن عن طريق حقن التبعية. تحت غطاء محرك السيارة ، يتم تمرير كل قيمة كوسيطة لأسلوب الحارس المستدعي.

*   `ActivatedRouteSnapshot` - متاح لجميع الثلاثة
    
*   `RouterStateSnapshot` - متاح لجميع الثلاثة
    
*   `Component` - متاح لل `canDeactivate(...)`
    

يوفر `ActivatedRouteSnapshot` الوصول إلى معلمات المسار للمسار الذي يخضع لحراسة. يعرض `RouterStateSnapshot` عنوان `RouterStateSnapshot` URL (محدد موقع الموارد الموحد) المطابق للمسار. `Component` مراجع عنصر صادر عن الطريق.

لحراسة الطريق ، يجب أن تكون هناك فئة تستخدم أساليب الحراسة كخدمة. خدمة يمكن أن تضخ في AppRoutingModule لحراسة لها `Routes` . قد حقن قيمة رمزية للخدمة في أي واحد `Route` الكائن.

 `import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { AuthService } from '../../services/auth.service'; 
 import { UserService } from '../../services/user.service'; 
 
 import { PrivateNestComponent } from '../../components/private-nest/private-nest.component'; 
 import { PrivateAComponent } from '../../components/private-nest/private-a/private-a.component'; 
 import { PrivateBComponent } from '../../components/private-nest/private-b/private-b.component'; 
 
 const routes: Routes = [ 
  { 
    path: 'private-nest', 
    component: PrivateNestComponent, 
    canActivate: [ AuthService ], // !!! 
    canActivateChild: [ AuthService ], // !!! 
    canDeactivate: [ AuthService ], // !!! 
    children: [ 
      { path: 'private-A', component: PrivateAComponent }, 
      { path: 'private-B', component: PrivateBComponent } 
    ] 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ], 
  providers: [ 
    AuthService, 
    UserService 
  ] 
 }) 
 export class AppRoutingModule { } 
` 

`canActivate` و `canActivateChild` و يمكن `canDeactivate` التطبيق من AuthService. سيتم عرض تنفيذ الخدمة قريبًا مع تطبيق UserService.

يوفر UserService المعلومات اللازمة لمصادقة مستخدم. تنفيذ عمليات أسلوب الحراسة AuthService المصادقة. يجب أن تتضمن AppRoutingModule الخدمتين في مصفوفة موفري الخدمة. هذا هو حاقن الوحدة النمطية يعرف كيفية إنشاء لها.

توجد مسارات متداخلة الخروج من المسار `/private-nest` . يحتوي الكائن `Route` لـ `/private-nest` على بعض الحقول الجديدة. يجب أن تبدو أسمائهم مألوفة لأنها تعكس طرق الحراسة المقابلة لها.

يقوم كل حقل بإطلاق طريقة تنفيذ الاسم نفسه داخل الخدمة عند تشغيلها. يمكن لأي عدد من الخدمات تعبئة هذا الصفيف أيضًا. يتم اختبار طريقة تنفيذ كل خدمة. يجب عليهم إرجاع قيمة منطقية أو `Observable` تنبعث منها قيمة منطقية.

راجع تطبيقات AuthService و UserService أدناه.

 `// user.service.ts 
 
 import { Injectable } from '@angular/core'; 
 import { Router } from '@angular/router'; 
 
 class TheUser { 
  constructor(public isLoggedIn: boolean = false) { } 
 
  toggleLogin() { 
    this.isLoggedIn = true; 
  } 
 
  toggleLogout() { 
    this.isLoggedIn = false; 
  } 
 } 
 
 const globalUser = new TheUser(); 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class UserService { 
  theUser: TheUser = globalUser; 
 
  constructor(private router: Router) { } 
 
  get isLoggedIn() { 
    return this.theUser.isLoggedIn; 
  } 
 
  login() { 
    this.theUser.toggleLogin(); 
  } 
 
  logout() { 
    this.theUser.toggleLogout(); 
    this.router.navigate(['/']); 
  } 
 } 
` 

يتم تمرير المثيل نفسه من `TheUser` مع كل إنشاء مثيل لـ UserService. يوفر `TheUser` الوصول إلى `isLoggedIn` لتحديد حالة تسجيل دخول المستخدم. تسمح أساليب عامة أخرى اثنين UserService تبديل قيمة `isLoggedIn` . هذا هو أنه يمكن للمستخدم تسجيل الدخول والخروج.

يمكنك التفكير في `TheUser` كمثال عالمي. يعد `UserService` واجهة `UserService` تقوم بتكوين هذا العمومية. `TheUser` التغييرات على `TheUser` من `UserService` إنشاء `UserService` واحدة على كل مثيل خدمة `UserService` الأخرى. ينفذ `UserService` إلى AuthService لتوفير الوصول إلى `isLoggedIn` من `TheUser` للمصادقة.

 `import { Component, Injectable } from '@angular/core'; 
 import { CanActivate, CanActivateChild, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
 
 import { UserService } from './user.service'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class AuthService implements CanActivate, CanActivateChild, CanDeactivate<Component> { 
  constructor(private user: UserService) {} 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if (this.user.isLoggedIn) 
      return true; 
    else 
      return false; 
  } 
 
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    return this.canActivate(route, state); 
  } 
 
  canDeactivate(component: Component, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if (!this.user.isLoggedIn || window.confirm('Leave the nest?')) 
      return true; 
    else 
      return false; 
  } 
 } 
` 

تنفذ AuthService كل أسلوب حراسة مستورد من `@angular/router` . تحدد كل طريقة حراسة إلى حقل مناظر في كائن `Route` PrivateNestComponent. مثيل instantService instantiates من منشئ AuthService. تحدد AuthService إذا كان يمكن للمستخدم المتابعة باستخدام `isLoggedIn` المكشوفة بواسطة UserService.

يؤدي إرجاع `false` من حارس إلى توجيه المسار لحظر المستخدم من التوجيه. تسمح قيمة إرجاع `true` للمستخدم بالمضي إلى وجهة مساره. إذا تمت مصادقة أكثر من خدمة واحدة ، فيجب أن يتم إرجاعها كلها إلى السماح بالوصول. `canActivateChild` حراس مسارات الطفل من PrivateNestComponent. هذه الطريقة حارس حسابات للمستخدمين تجاوز PrivateNestComponent من خلال شريط العنوان.

معلمات طريقة الحرس تمر تلقائيا عند الاحتجاج. في حين أن المثال لا يستخدمها ، إلا أنها توفر معلومات مفيدة من الطريق. يمكن للمطور استخدام هذه المعلومات للمساعدة في مصادقة المستخدم.

AppComponent أيضا instantiates UserService للاستخدام المباشر في القالب الخاص به. مرجع إنشاء مثيل UserService من AppComponent و AuthService نفس فئة المستخدم ( `TheUser` ).

 ``import { Component } from '@angular/core'; 
 
 import { UserService } from './services/user.service'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <ul> 
    <li routerLink="/private-nest">Enter the secret nest!</li> 
    <li routerLink="/">Leave the secret nest!</li> 
    <li *ngIf="user.isLoggedIn"><button (click)="user.logout()">LOGOUT</button></li> 
    <li *ngIf="!user.isLoggedIn"><button (click)="user.login()">LOGIN</button></li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class AppComponent { 
  constructor(private user: UserService) { } 
 } 
`` 

يعالج UserService كافة منطق AppComponent. AppComponent في الغالب يتعامل مع قالبها. يتم إنشاء UserService `user` من مُنشئ الفئة. تحدد بيانات `user` وظيفة القالب.

#### استنتاج

يوجّه التوجيه توازنًا دقيقًا بين تنظيم أقسام التطبيق وتقييدها. قد لا يتطلب تطبيق أصغر مثل مدونة أو صفحة تقديس أي توجيه. حتى ذلك الحين ، بما في ذلك القليل من التوجيه البعثرة لا يمكن أن يضر. قد يرغب المستخدم فقط في الإشارة إلى جزء من الصفحة بعد كل شيء.

يطبق Angular مكتبة التوجيه الخاصة به والمبنية على [واجهة برمجة تطبيقات سجل](https://developer.mozilla.org/en-US/docs/Web/API/History_API) HTML5. يلغي API هذا التوجيه التجزئة بدلاً من استخدام `pushState(...)` و `replaceState(...)` . يقومون بتغيير عنوان URL لعنوان الويب دون تحديث الصفحة. تعمل إستراتيجية توجيه موقع المسار الافتراضي في Angular على هذا النحو. `RouterModule.forRoot(routes, { useHash: true })` إعداد `RouterModule.forRoot(routes, { useHash: true })` توجيه التجزئة إذا كان مفضلاً.

هذه المقالة تركز على استراتيجية الموقع المسار الافتراضي. بغض النظر عن الاستراتيجية ، تتوفر العديد من أدوات التوجيه لتوجيه تطبيق ما. يعرض `RouterModule` هذه الأدوات المساعدة من خلال صادراتها. المسارات الأساسية ، المعلمات ، المتداخلة ، والحراسة كلها ممكنة باستخدام RouterModule. للحصول على تطبيقات أكثر تقدمًا بما في ذلك المسارات المحملة بطبقة ، اطلع على الروابط أدناه.

## مصادر

*   [فريق الزاوي. "التوجيه والملاحة". _جوجل_ . تم الوصول إليه في 8 يونيو 2018.](https://angular.io/guide/router)
*   [حسين ، عاصم. "Angular 5: Routing". _codecraft.tv_ . تم الوصول إليه في 8 يونيو 2018.](https://codecraft.tv/courses/angular/routing)
*   [سميث ، بيتر. "3 أنواع من تحميل الطريق في Angular ، وأوضح في الكلمات 500ish". _Upstate Interactive_ ، 3 May 2017. Accessed 8 June 2018.](https://blog.upstate.agency/3-types-of-route-loading-in-angular-explained-in-500ish-words-f22976e1f60b)
*   [كوريتسكي ، مكسيم. "تجنب الالتباس المشترك مع وحدات في الزاوي". _Angular In Depth_ ، 10 Aug. 2017. تم الوصول إليه في 8 يونيو 2018.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## مصادر

*   [وثائق الزاوي](https://angular.io/guide)
*   [التوجيه والملاحة](https://angular.io/guide/router)
*   [Angular 5: Routing Tutorial by Asim Hussain](https://codecraft.tv/courses/angular/routing/overview)
*   [الزاوي في العمق](https://blog.angularindepth.com)
*   [Angular GitHub Repository](https://github.com/angular/angular)
*   [الزاوي CLI](https://cli.angular.io)