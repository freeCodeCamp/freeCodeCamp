---
title: Views
localeTitle: الآراء
---
# الآراء

#### التحفيز

تقدم المشاهدات طبقة ضرورية من التجريد. أنها تبقي الزاوي مستقلة من المرافق المحددة للمنصة. تستخدم تقنية Angular ، كخدمة عبر الأنظمة الأساسية ، وجهات نظرها للتواصل مع النظام الأساسي.

بالنسبة إلى كل عنصر في نموذج HTML في Angular ، هناك طريقة عرض مقابلة. ينصح Angular بالتفاعل مع الأنظمة الأساسية من خلال هذه المشاهدات. في حين أن التلاعب المباشر لا يزال ممكنا ، يحذر Angular من ذلك. تقدم Angular واجهة برمجة التطبيقات الخاصة بها (API) لتحل محل المعالجات الأصلية.

تؤدي طرق عرض واجهة برمجة التطبيقات الخاصة بالنظام الأساسي إلى عواقبها. عند تطوير Angular في متصفح ويب ، توجد عناصر في مكانين: DOM والعرض. لا يؤثر وضع messing إلا مع DOM في العرض.

نظرًا لأن Angular لا يتفاعل مع النظام الأساسي ، فإن هذا يخلق عدم انقطاع. يجب أن تعكس المشاهدات النظام الأساسي واحد لواحد. خلاف ذلك ، فإن موارد الموارد الزاوية تدير عناصر لا تتوافق معها. هذا أمر فظيع في حالة حذف العناصر.

هذه الأنواع من التناقضات تجعل المشاهدات تبدو غير ضرورية. لا تنس أبداً أن Angular عبارة عن نظام تطوير عالمي قبل كل شيء. تعد المشاهدات تجريدًا ضروريًا لهذه الغاية.

من خلال الالتزام بالآراء ، ستعمل التطبيقات الزاويّة عبر جميع منصات التطوير المدعومة. تتضمن الأنظمة الأساسية الويب و Android و Apple iOS.

#### ملحوظة

من هنا ، تفترض هذه المقالة بيئة متصفح ويب. لا تتردد في استبدال DOM بالعقلية بشكل أكثر قابلية للتطبيق على النظام الأساسي المفضل لديك.

#### ما هي المشاهدات؟

تشبه المشاهدات تقريبًا DOM الافتراضية الخاصة بها. يحتوي كل عرض على مرجع إلى قسم مناظر في DOM. داخل العرض هي عقدات تعكس ما هو موجود في هذا القسم. تعيّن Angular عقدة عرض واحدة لكل عنصر DOM. تحتوي كل عقدة على مرجع لعنصر مطابق.

عندما يتحقق الزاوي لإجراء تغييرات ، فإنه يتحقق من المشاهدات. الزاوي يتجنب DOM تحت غطاء محرك السيارة. تشير المشاهدات إلى DOM نيابة عنها. توجد آليات أخرى لضمان تقديم تغييرات العرض إلى DOM. وعلى العكس ، لا تؤثر التغييرات التي تطرأ على DOM في طرق العرض.

مرة أخرى ، تكون المشاهدات شائعة عبر جميع منصات التطوير بجانب DOM. حتى في حالة التطوير لمنصة واحدة ، لا تزال الآراء تعتبر أفضل الممارسات. وهي تضمن أن Angular لديه تفسير صحيح لـ DOM.

قد لا توجد طرق العرض في مكتبات الجهات الخارجية. تلاعب DOM المباشر هو فتحة للهروب لهذا النوع من السيناريو. منح ، لا نتوقع أن يعمل التطبيق عبر منصة.

#### أنواع المشاهدات

هناك نوعان رئيسيان من المشاهدات: المدمجة والمضيفة.

هناك أيضا وجود حاويات الرؤية. أنها تحمل وجهات النظر المدمجة والمضيف وغالبا ما يشار إليها باسم "وجهات نظر" بسيطة.

`@Component` كل فئة `@Component` حاوية عرض (عرض) مع Angular. تنشئ المكونات الجديدة محددًا مخصصًا يستهدف عنصر DOM معين. يتم إرفاق العرض بهذا العنصر أينما يظهر. يعرف Angular الآن أن المكون موجود في نموذج العرض.

وجهات نظر المضيف تعلق على المكونات التي تم إنشاؤها بشكل حيوي مع المصانع. توفر المصانع مخططًا لـ إنشاء مثيل للعرض. وبهذه الطريقة يمكن للتطبيق إنشاء مثيل لمضيف المكون أثناء وقت التشغيل. يتم إرفاق عرض مضيف إلى المجمّع الخاص بالمكون لكل إنشاء مثيل له. يخزن هذا العرض البيانات التي تصف قدرات المكونات التقليدية.

`<ng-template></ng-template>` شبيهًا بعنصر HTML5 `<template></template>` . يعمل `ng-template` في Angular مع العروض المضمنة. لا يتم إرفاق طرق العرض هذه بعناصر DOM بخلاف طرق عرض المضيف. وهي مماثلة لوجهات النظر المضيفة لأن كلا النوعين موجودان داخل حاويات العرض.

ضع في اعتبارك أن `ng-template` ليس عنصر DOM. يحصل التعليق عليها في وقت لاحق ترك أي شيء سوى عقدة العرض المضمنة وراء.

يعتمد الفرق على بيانات الإدخال ؛ وجهات النظر المضمنة تخزين أي بيانات المكون. تخزن مجموعة من العناصر كعقد تضم القالب الخاص بها. يشكّل القالب جميع HTML الداخلي من `ng-template` . كل عنصر داخل العرض المضمّن هو عقدة العرض المنفصلة الخاصة به.

#### وجهات النظر والحاويات المضيفة

مكونات المضيف _المضيف_ الديناميكي. يتم إرفاق حاويات العرض (طرق العرض) تلقائيًا بالعناصر الموجودة بالفعل في القالب. يمكن أن يتم إرفاق طرق العرض بأي عنصر بخلاف ما هو فريد لفئات المكونات.

فكر في الطريقة التقليدية لتوليد المكونات. تبدأ من خلال إنشاء فصل `@Component` بـ `@Component` وملء البيانات الوصفية. يحدث هذا النهج لأي عنصر مكون محدد مسبقًا في القالب.

حاول استخدام أمر واجهة سطر الأوامر (CLI) Angular: `ng generate component [name-of-component]` . وتنتج ما يلي.

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

يؤدي ذلك إلى إنشاء المكون مع `app-example` المحدد. يعلق هذا حاوية عرض على `<app-example></app-example>` في القالب. إذا كان هذا هو جذر التطبيق ، فإن العرض الخاص به سيضم جميع طرق العرض الأخرى. يمثل عرض الجذر بداية التطبيق من منظور Angular.

يتطلب إنشاء المكونات ديناميكيًا وتسجيلها في نموذج العرض الزاوي بضع خطوات إضافية. تساعد التوجيهات الهيكلية على إدارة المحتوى الديناميكي ( `*ngIf, *ngFor, and *ngSwitch…` ). لكن التوجيهات لا تنطبق على التطبيقات الأكبر. الكثير من التوجيهات الهيكلية يعقد القالب.

هذا هو المكان الذي يتم فيه إنشاء مكونات من منطق الفصل الدراسي الحالي. تحتاج هذه المكونات إلى إنشاء عرض مضيف يمكن إدراجه في نموذج العرض. تحمل ملفات المضيف بيانات للمكونات حتى يتعرف Angular على غرضها الهيكلي.

##### تواصل وجهات النظر المضيفة

كل مكون له تعريف فئة. مع ذلك ، لا تدعم JavaScript الفصول الدراسية. الطبقات هي السكر النحوي. أنها تنتج وظائف تحتوي على مكونات المكونات بدلا من ذلك.

تعمل المصانع كمخططات لعروض المضيف. إنها تبني وجهات نظر للتعامل مع Angular بالنيابة عن مكوناتها. يتم إرفاق طرق عرض المضيف مع عناصر DOM. تقنيًا أي عنصر على ما يرام ولكن الهدف الأكثر شيوعًا هو `<ng-component></ng-component>` .

يجب أن توجد حاوية مشاهدة (عرض) لعقد المشاهدات أولاً. `<ng-container></ng-container>` هو مكان رائع لإرفاق حاوية مشاهدة. عرض حاويات هي نفس نوع طرق العرض التي تنطبق أيضًا على عناصر فئة القالب.

عدد قليل من المساعدين والمراجع من `@angular/core` توفر المرافق الأخرى اللازمة. المثال التالي يضعها معًا.

 ``// another.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  template: ` 
  <h1>Another Component Content</h1> 
  <h3>Dynamically Generated!</h3> 
  ` 
 }) 
 export class AnotherComponent { } 
`` 

 ``// example.component.ts 
 
 import { AfterViewInit, Component, ViewChild, 
 ViewContainerRef, ComponentFactoryResolver } from '@angular/core'; 
 import { AnotherComponent } from './another.component'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Application Content</h1> 
  <ng-container #container></ng-container> 
  <h3>End of Application</h3> 
  `, 
  entryComponents: [ AnotherComponent ] 
 }) 
 export class ExampleComponent implements AfterViewInit { 
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef; 
 
  constructor(private resolve: ComponentFactoryResolver) { } 
 
  ngAfterViewInit() { 
    const factory = this.resolve.resolveComponentFactory(AnotherComponent); 
    this.ctr.createComponent(factory); 
  } 
 } 
`` 

Assume AnotherComponent و ExampleComponent كلاهما يتم التصريح تحت نفس الوحدة النمطية. AnotherComponent هو مكون فئة بسيط إضافتها بشكل حيوي إلى طريقة عرض ExampleComponent. ExampleComponent في `entryComponents` يجب أن يحتوي على بيانات التعريف AnotherComponent ل [إلباس الحذاء](https://angular.io/guide/bootstrapping) .

بينما يكون ExampleComponent جزءًا من القالب ، يبقى AnotherComponent منفصلة. بشكل حيوي يتم تقديم في القالب من ExampleComponent.

هناك نوعان من حاويات العرض الحالية: `<app-example></app-example>` و `<ng-container></ng-container>` . سيتم إدراج عرض المضيف لهذا المثال في `ng-container` .

ربط `AfterViewInit` دورة حياة بعد إكمال الاستعلامات `@ViewChild` . باستخدام _المتغير المرجعي للقالب_ `#container` ، تشير `ng-container` `@ViewChild` إلى `ng-container` كـ `ctr` .

`ViewContainerRef` هو نوع المرجع لحاويات العرض (طرق العرض). يشير `ViewContainerRef` إلى طريقة عرض تدعم عملية تثبيت طرق العرض الأخرى. يحتوي `ViewContainerRef` على المزيد من الطرق لإدارة طرق العرض المتضمنة الخاصة به.

من خلال حقن التبعية ، يقوم المُنشئ بتأسيس مثيل من خدمة Angry's `ComponentFactoryResolver` . هذه الخدمة استخراج الدالة مصنع (مخطط الرأي المضيف) من AnotherComponent.

تتطلب الوسيطة الفردية لـ `createComponent` وجود مصنع. و `createComponent` تستمد وظيفة من `ViewContainerRef` . فإنه instantiates AnotherComponent تحت عرض مضيف مشتقة من مصنع للمكون.

ثم يدرج عرض المضيف في حاوية العرض. `<ng-component></ng-component>` المكون داخل حاوية العرض. وقد تعلق بها وجهة نظر المضيف المذكورة آنفا. `ng-component` هو اتصال وجهة نظر المضيف مع DOM.

هناك طرق أخرى لإنشاء عرض مضيف ديناميكيًا من أحد المكونات. طرق أخرى غالبا ما [تركز على التحسين](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866) .

يحتفظ `ViewContainerRef` بواجهة برمجة تطبيقات قوية. يمكنه إدارة أي عدد من المشاهدات إما مضيفًا أو مضمنًا في طريقة العرض. تتضمن واجهة برمجة التطبيقات عمليات عرض مثل الإدراج والنقل والحذف. هذا يتيح لك التعامل مع نموذج عرض DOM من خلال Angular. هذه أفضل الممارسات بحيث يتطابق Angular و DOM مع بعضها البعض.

#### وجهات النظر المضمنة

ملاحظة: يتم إرفاق الملفات الشخصية المضمنة مع طرق العرض الأخرى دون أي مدخلات مضافة. يتم إرفاق طرق عرض المضيف مع عنصر DOM مع بيانات الإدخال من عرض المضيف الخاص بها ، واصفاً إياها كمكون.

التوجيهات الهيكلية إنشاء [`ng-template` يحيط قطعة من محتوى HTML](https://angular.io/guide/structural-directives#the-asterisk--prefix) . يحتوي عنصر المضيف الخاص بالتوجيه على حاوية عرض مرفقة. هذا يجعله بحيث يمكن عرض المحتوى بطريقة مشروطة في التخطيط المقصود.

يحتفظ `ng-template` بنقاط العرض المضمنة التي تمثل كل عنصر داخل itsHTML الداخلي. `ng-template` ليس بأي حال عنصر DOM. وتعلق نفسها بها. تحدد العلامات امتداد العرض المدمج.

#### استمرار وجهات النظر المضمنة

يتطلب إنشاء عرض مضمن في وقت لاحق عدم وجود موارد خارجية خارجة عن مرجعه الخاص. يمكن الاستعلام `@ViewChild` جلب ذلك.

باستخدام مرجع القالب ، يؤدي استدعاء `createEmbeddedView` منه إلى الخدعة. يصبح innerHTML للمرجع مثيل العرض المضمن الخاص به.

في المثال التالي ، `<ng-container></ng-container>` هي حاوية مشاهدة. يتم التعليق على `ng-container` ng- أثناء التحويل البرمجي تمامًا مثل `ng-template` . وبالتالي يوفر منفذًا لإدخال العرض المضمّن مع الاحتفاظ بـ DOM gean.

يدرج نموذج العرض المضمن في موقع تخطيط `ng-container` . لا يحتوي هذا العرض المدرج حديثًا على أي عرض إضافي للتضمين إلى جانب حاوية العرض. تذكر كيف يختلف هذا عن وجهات نظر المضيف (يتم إرفاق طرق عرض المضيف مع غلاف عنصر `ng-component` ).

 ``import { Component, AfterViewInit, ViewChild, 
 ViewContainerRef, TemplateRef } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Application Content</h1> 
  <ng-container #container></ng-container> <!-- embed view here --> 
  <h3>End of Application</h3> 
 
  <ng-template #template> 
    <h1>Template Content</h1> 
    <h3>Dynamically Generated!</h3> 
  </ng-template> 
  ` 
 }) 
 export class ExampleComponent implements AfterViewInit { 
  @ViewChild("template", { read: TemplateRef }) tpl: TemplateRef<any>; 
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef; 
 
  constructor() { } 
 
  ngAfterViewInit() { 
    const view =  this.tpl.createEmbeddedView(null); 
    this.ctr.insert(view); 
  } 
 } 
`` 

`@ViewChild` الاستفسارات _للقالب إشارة متغير_ `#template` . يوفر هذا مرجع قالب من نوع `TemplateRef` . يحتفظ `TemplateRef` الدالة `createEmbeddedView` . فإنه instantiates القالب كمشاهدة مضمّنة.

وسيطة واحدة من `createEmbeddedView` هي للسياق. إذا أردت تمرير بيانات وصفية إضافية ، فيمكنك القيام بذلك هنا ككائن. يجب أن تتطابق الحقول مع سمات `ng-template` ( `let-[context-field-key-name]=“value”` ). لا يشير التمرير `null` إلى أي بيانات تعريف إضافية ضرورية.

يوفر الاستعلام الثاني `@ViewChild` إشارة إلى `ng-container` مثل `ViewContainerRef` . يتم إرفاق الملفات الشخصية المضمنة فقط مع طرق العرض الأخرى ، وليس DOM. يشير `ViewContainerRef` إلى طريقة العرض التي تظهر في طريقة العرض المضمنة.

قد يتم أيضًا إدراج عرض مضمن في عرض مكون `<app-example></app-example>` . يضع هذا الأسلوب العرض في نهاية عرض ExampleComponent. ومع ذلك ، في هذا المثال ، نريد أن يظهر المحتوى في منتصف المكان الذي توجد فيه `ng-container` .

و `ViewContainerRef` `insert` _إدراج_ وظيفة وجهة نظر جزءا لا يتجزأ في `ng-container` . يعرض محتوى المشاهدة عمليات التقريب في الموقع المقصود مباشرةً في وسط عرض ExampleComponent.

#### استنتاج

لا ينصح بمعالجة DOM مع أساليب محددة للمنصة. يؤدي إنشاء مجموعة ضيقة من المشاهدات وإدارتها إلى احتفاظ Angular و DOM على الصفحة نفسها. تحديث وجهات النظر بإعلام Angular من الحالة الحالية لـ DOM. كما تنتقل التحديثات إلى المشاهدات إلى ما يعرضه DOM.

يوفر Angular واجهة برمجة تطبيقات مرنة للتفاعل مع العرض. تطوير تطبيقات مستقلة منصة ممكن بفضل هذا المستوى من التجريد. بالطبع ، لا يزال الإغراء بالعودة إلى الاستراتيجيات المعتمدة على المنصة قائماً. ما لم يكن لديك سبب وجيه للغاية ، حاول الالتزام بالآراء التي يوفرها API Angular. سيؤدي ذلك إلى نتائج متوقعة عبر جميع الأنظمة الأساسية.

تحقق من الموارد أدناه أيضا! هذه المادة مجرد خدش السطح. تحتوي المشاهدات على عدد كبير من حالات الاستخدام الأخرى شديدة الاتساع لمقالة واحدة.

## مصادر

*   [AngularInDepth.com. "عرض مكون ، عرض المضيف ، عرض مضمّن" ، # 40423772. 11 تموز (يوليو) 2017. "ما هو الفرق بين العرض ، وعرض المضيف ، والمشهد المضمّن"](https://stackoverflow.com/questions/40423772/what-is-the-difference-between-a-view-a-host-view-and-an-embedded-view)
    
*   [فريق الزاوي. "التوجيهات الهيكلية". _جوجل_ . تم الوصول إليها في 31 مايو 2018](https://angular.io/guide/structural-directives)
    
*   [كوريتسكي ، مكسيم. "استكشاف تقنيات معالجة DOM للزاوية باستخدام ViewContainerRef". _الزاوي في العمق_ ، 4 مارس 2017. تم الوصول في 30 مايو 2018.](https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02)
    
*   [كوريتسكي ، مكسيم. "تنفيذ سيناريوهات التلاعب المتقدمة في DOM". _Youtube_ ، uploaded by ng-conf، 19 Apr. 2018. Accessed 30 May 2018](https://www.youtube.com/watch?v=vz9cNCkaPsY)
    
*   [كوريتسكي ، مكسيم. "العمل مع DOM في Angular: عواقب غير متوقعة وتقنيات التحسين". _Angular In Depth_ ، 3 أيار 2017. تم الوصول إليه في 31 أيار 2018](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866)
    

## مصادر

*   [وثائق الزاوي](https://angular.io/guide/pipes)
    
*   [الزاوي في العمق](https://blog.angularindepth.com)
    
*   [ViewContainerRef](https://angular.io/api/core/ViewContainerRef)
    
*   [TemplateRef](https://angular.io/api/core/TemplateRef)
    
*   [Angular GitHub Repository](https://github.com/angular/angular)
    
*   [الزاوي CLI](https://cli.angular.io)