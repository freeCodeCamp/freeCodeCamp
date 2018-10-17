---
title: NgModules
localeTitle: iModules
---
# NgModules

#### التحفيز

تبدأ التطبيقات الزاوية من الجذر NgModule. يقوم Angular بإدارة تبعيات التطبيق من خلال نظام الوحدة الخاص به المكون من NgModules. إلى جانب وحدات جافا سكريبت العادية ، يضمن NgModules شفرته و تغليفه.

توفر الوحدات النمطية أيضًا أعلى مستوى لتنظيم التعليمات البرمجية. كل المقاطع NgModule قبالة جزء من التعليمات البرمجية الخاصة به كما الجذر. توفر هذه الوحدة التغليف من الأعلى إلى الأسفل لرمزها. يمكن للكتلة بأكملها من التعليمة البرمجية تصديرها إلى أي وحدة نمطية أخرى. بهذا المعنى ، يتصرف NgModules مثل المتحكمين في كتل التعليمات البرمجية الخاصة بهم.

تأتي أدوات Angular الموثقة من NgModules التي كتبها Angular. لا توجد فائدة متاحة ما لم يتم تضمينها في الجذر. يجب أيضًا تصدير هذه الأدوات المساعدة من وحدة المضيف الخاصة بهم بحيث يمكن للمستوردين استخدامها. هذا الشكل من التغليف يمنح المطور القدرة على إنتاج نغماته الخاصة في نفس نظام الملفات.

بالإضافة إلى ذلك ، من المنطقي معرفة سبب قيام CLI (واجهة سطر الأوامر) باستيراد `BrowserModule` من `@angular/core` . يحدث هذا عند إنشاء تطبيق جديد باستخدام الأمر CLI: `ng new [name-of-app]` .

قد يكون فهم نقطة التنفيذ كافياً في معظم الحالات. ومع ذلك ، فإن فهم كيفية تنفيذ الأسلاك نفسها للجذر أفضل. كل ذلك يحدث تلقائيا عن طريق استيراد `BrowserModule` إلى الجذر.

#### نجمودول ديكور

يحدد Angular وحداته عن طريق تزيين فئة عامة. يشير مصمم `@NgModule` إلى الغرض المعياري للصف في Angular. يدمج صنف NgModule تبعيات الجذر التي يمكن الوصول إليها / سريعة التأثر من نطاق الوحدة. "النطاق" يعني أي شيء ينشأ عن البيانات الوصفية للوحدة.

 `import { NgModule } from '@angular/core'; 
 
 @NgModule({ 
  // … metadata … 
 }) 
 export class AppModule { } 
` 

#### NgModule Metadata

جذر CLI الذي تم إنشاؤه يتضمن NgModule حقول البيانات الوصفية التالية. توفر هذه الحقول التكوين إلى كتلة التعليمات البرمجية التي يترأسها NgModule.

*   `declarations: []`
*   `imports: []`
*   `providers: []`
*   `bootstrap: []`

##### الإعلانات

تتضمن مصفوفة الإعلانات جميع المكونات أو التوجيهات أو الأنابيب المستضافة من قِبل NgModule. وهي خاصة بالوحدة ما لم يتم تصديرها صراحة داخل البيانات الوصفية الخاصة بها. بالنظر إلى حالة الاستخدام هذه ، فإن المكونات والتوجيهات والأنابيب تُلقَى بـ "المُعلنين". يجب أن يقوم NgModule بإعلان المصادفة بشكل فريد. لا يمكن تعريف declarable مرتين في NgModules منفصلة. يلقى خطأ وإلا. انظر المثال التالي.

 `import { NgModule } from '@angular/core'; 
 import { TwoComponent } from './components/two.component.ts'; 
 
 @NgModule({ 
  declarations: [ TwoComponent ] 
 }) 
 export class TwoModule { } 
 
 @NgModule({ 
  imports: [ TwoModule ], 
  declarations: [ TwoComponent ] 
 }) 
 export class OneModule { } 
` 

يلقي الزاوي خطأ من أجل تغليف NgModule. تكون Declarables خاصة إلى NgModule التي تعلن عليها بشكل افتراضي. إذا احتاج العديد من NgModules إلى معينة يمكن تعريفه ، فيجب عليهم استيراد إعلان NgModule. يجب على هذا NgModule ثم تصدير المطلوبة declarable بحيث يمكن استخدام NgModules الأخرى عليه.

 `import { NgModule } from '@angular/core'; 
 import { TwoComponent } from './components/two.component.ts'; 
 
 @NgModule({ 
  declarations: [ TwoComponent ], 
  exports: [ TwoComponent ] 
 }) 
 export class TwoModule { } 
 
 @NgModule({ 
  imports: [ TwoModule ] // this module can now use TwoComponent 
 }) 
 export class OneModule { } 
` 

المثال أعلاه لن يرمي خطأ. تم الإعلان عن TwoComponent بشكل فريد بين اثنين NgModules. لدى OneModule أيضاً الوصول إلى TwoComponent منذ أن يقوم باستيراد TwoModule. TwoModule بدوره بتصدير في TwoComponent للاستخدام الخارجي.

##### واردات

لا يقبل مصفوفة الواردات إلا NgModules. لا يقبل هذا المصفوفة المصداقية أو الخدمات أو أي شيء آخر بالإضافة إلى NgModules الأخرى. يوفر استيراد وحدة ما إمكانية الوصول إلى ما تعلنه الوحدة.

هذا يفسر لماذا استيراد `BrowserModule` يوفر الوصول إلى `BrowserModule` المساعدة المختلفة. يتم تصدير كل أداة تعريف تم تعريفها في `BrowserModule` من بياناتها الوصفية. عند استيراد `BrowserModule` ، تصبح تلك المصادرات المصدرة متاحة لاستيراد NgModule. الخدمات لا تصدر على الإطلاق لأنها تفتقر إلى نفس التغليف.

##### مقدمي

قد يبدو عدم وجود تغليف الخدمة غريبًا نظرًا لتضمين عبارات التعريف. تذكر أن الخدمات تذهب إلى مجموعة الموفرين المنفصلة عن الإعلانات أو الصادرات.

عندما ترجمة Angular ، فإنه يسوي الجذر NgModule وارداتها في وحدة واحدة. مجموعة الخدمات معًا في مصفوفة واحدة لمقدمي الخدمات مستضافة من قِبل NgModule المدمج. تحتفظ المواد القابلة للتصريح بتغليفها من خلال مجموعة من أعلام تجميع الوقت.

إذا كان موفرو NgModule يحتويون على قيم رمزية مطابقة ، فستكون الأولوية لوحدة جذور الاستيراد. الماضي ، فإن آخر NgModule المستوردة الأسبقية. انظر المثال التالي. انتبه بشكل خاص إلى NgModule باستيراد الاثنين الآخرين. تعرف على كيفية تأثير ذلك على أسبقية الخدمة المقدمة.

 `import { NgModule } from '@angular/core'; 
 
 @NgModule({ 
  providers: [ AwesomeService ], // 1st precedence + importing module 
  imports: [ 
    BModule, 
    CModule 
  ] 
 }) 
 export class AModule { } 
 
 @NgModule({ 
  providers: [ AwesomeService ]  // 3rd precedence + first import 
 }) 
 export class BModule { } 
 
 @NgModule({ 
  providers: [ AwesomeService ]  // 2nd precedence + last import 
 }) 
 export class CModule { } 
` 

Instantinating AwesomeService من داخل نطاق AModule ينتج عنه مثيل AwesomeService كما هو منصوص عليه في البيانات الوصفية لـ AModule. إذا قام مزودو AModule بحذف هذه الخدمة ، فستكون الأولوية لـ Awesome Service من CModule. وهكذا ، بالنسبة إلى BModule إذا قام مزودو CModule بحذف AwesomeService.

##### التمهيد

يقبل مصفوفة bootstrap المكونات. بالنسبة لكل مكون في المصفوفة ، يقوم Angular بإدراج المكون كجذر خاص به لملف `index.html` . سوف يكون دائما جذر NgIodule من تطبيق CLI من تطبيق هذا الحقل.

 `import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 
 @NgModule({ 
  declarations: [ AppComponent ], 
  imports: [ BrowserModule ], 
  providers: [], 
  bootstrap: [ AppComponent ] 
 }) 
 export class AppModule { } 
` 

سيتم حقن عنصر AppComponent في HTML الأساسي من التطبيق ( `index.html` ). بقية شجرة المكون تتكشف من هناك. يغطي نطاق NgModule الشامل هذه الشجرة بأكملها بالإضافة إلى أي أخرى يتم حقنها من مصفوفة التمهيد. عادة ما يحتوي المصفوفة على عنصر واحد فقط. يمثل هذا المكون الوحدة النمطية كعنصر واحد والشجرة الأساسية.

#### NgModules مقابل وحدات جافا سكريبت

لقد رأيت وحدات Angular و JavaScript تعمل معًا في الأمثلة السابقة. تمثل أعلى نسبة من `import..from` عبارات نظام وحدة جافا سكريبت. يجب أن تقوم مواقع الملفات المستهدفة لكل عبارة بتصدير فئة أو متغير أو وظيفة مطابقة للطلب. `import { TARGET } from './path/to/exported/target'` .

في JavaScript ، يتم فصل الوحدات النمطية عن الملفات. ملفات استيراد باستخدام `import..from` الكلمات الرئيسية كما ذكرت للتو. من ناحية أخرى ، `@NgModule` منفصلة عن الفصل ومزينة بـ `@NgModule` . وهكذا ، يمكن للعديد من وحدات الزوايا الموجودة في ملف واحد. لا يمكن أن يحدث هذا مع JavaScript حيث يحدد الملف وحدة نمطية.

تنص الاتفاقيات على أنه يجب أن يكون لكل فئة مزخرفة `@NgModule` ملف خاص بها. ومع ذلك ، تعرف أن الملفات لا تشكل وحداتها الخاصة في Angular. الطبقات `@NgModule` بـ `@NgModule` تخلق هذا التمييز.

توفر وحدات جافا سكريبت مراجع رمزية للبيانات الوصفية لـ `@NgModule` . يحدث هذا في أعلى ملف يستضيف فصل NgModule. يستخدم NgModule هذه الرموز المميزة داخل حقول البيانات الوصفية (المصاريف ، والواردات ، ومقدمي الخدمات ، إلخ). السبب الوحيد `@NgModule` بتزيين فئة في المقام الأول هو أن JavaScript تقوم باستيرادها من أعلى الملف.

 `// JavaScript module system provides tokens 
 import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 import { AppService } from './app.service'; 
 // Javascript module system is strict about where it imports. It can only import at the top of files. 
 
 // Angular NgModule uses those tokens in its metadata settings 
 @NgModule({ // import { NgModule } from '@angular/core'; 
  declarations: [ 
    AppComponent // import { AppComponent } from './app.component'; 
  ], 
  imports: [ 
    BrowserModule // import { BrowserModule } from '@angular/platform-browser'; 
  ], 
  providers: [ 
    AppService // import { AppService } from './app.service'; 
  ], 
  bootstrap: [ 
    AppComponent // import { AppComponent } from './app.component'; 
  ] 
 }) 
 export class AppModule { } 
 // JavaScript module system exports the class. Other modules can now import AppModule. 
` 

المثال أعلاه لا يقدم أي شيء جديد. وينصب التركيز هنا على التعليقات التي توضح كيفية عمل النظامين المعياريين معًا. توفر JavaScript المراجع الرمزية بينما يستخدم NgModule تلك الرمز المميز لتغليف وتكوين الكتل الأساسية من التعليمة البرمجية الخاصة به.

#### الوحدات النمطية ميزة

تطبيقات تنمو الوقت الإضافي. قياسها بشكل صحيح يتطلب تنظيم التطبيق. إن وجود نظام صلب لهذا سيجعل التطوير أكثر سهولة.

في الزاوي ، يضمن المخططات أن الكود المدار حسب الغرض يكون مميزًا. ما وراء مخططات NgModule الفرعية ، هناك NgModules أنفسهم. هم نوع من التخطيطي أيضا. وهي تقف فوق البقية في قائمة التخطيطات باستثناء التطبيق نفسه.

يجب ألا تقف وحدة الجذر وحدها عندما يبدأ التطبيق في التوسع. تتضمن الوحدات النمطية ميزة أي NgModule المستخدمة جنبا إلى جنب مع الجذر NgModule. يمكنك أن تفكر في الوحدة الجذرية على أنها تحتوي على `bootstrap: []` حقل البيانات الوصفية. تطبيق ميزة تأكد من أن وحدة الجذر لا تشبع البيانات الوصفية الخاصة به.

تعمل الوحدات النمطية للميزات على عزل قسم من التعليمات البرمجية نيابة عن أي وحدة استيراد. يمكنهم التعامل مع أقسام التطبيق بأكملها بشكل مستقل. وهذا يعني أنه يمكن استخدامه في أي تطبيق تستورد الوحدة الجذرية له وحدة الميزة. هذا التكتيك يوفر الوقت والجهد للمطورين على مدار تطبيقات متعددة! انها تحافظ على الجذر التطبيق NgModule الهزيل كذلك.

في الجذر NgModule من التطبيق ، إضافة الرمز المميز وحدة نمطية في مجموعة `imports` الجذر يفعل خدعة. أيًا كانت الوحدة النمطية التي يصدرها أو يوفرها ، تصبح متاحة للجذر.

 `// ./awesome.module.ts 
 
 import { NgModule } from '@angular/core'; 
 import { AwesomePipe } from './awesome/pipes/awesome.pipe'; 
 import { AwesomeComponent } from './awesome/components/awesome.component'; 
 import { AwesomeDirective } from './awesome/directives/awesome.directive'; 
 
 @NgModule({ 
  exports: [ 
    AwesomePipe, 
    AwesomeComponent, 
    AwesomeDirective 
  ] 
  declarations: [ 
    AwesomePipe, 
    AwesomeComponent, 
    AwesomeDirective 
  ] 
 }) 
 export class AwesomeModule { } 
` 

 `// ./app.module.ts 
 
 import { AwesomeModule } from './awesome.module'; 
 import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent 
  ], 
  imports: [ 
    AwesomeModule, 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ 
    AppComponent 
  ] 
 }) 
 export class AppModule { } 
` 

 ``// ./app.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <!-- AwesomeDirective --> 
  <h1 appAwesome>This element mutates as per the directive logic of appAwesome.</h1> 
 
  <!-- AwesomePipe --> 
  <p>Generic output: {{ componentData | awesome }}</p> 
 
  <section> 
    <!-- AwesomeComponent --> 
    <app-awesome></app-awesome> 
  </section> 
  ` 
 }) 
 export class AppComponent { 
  componentData: string = "Lots of transformable data!"; 
 } 
`` 

`<app-awesome></app-awesome>` (المكون) ، `awesome` (الأنبوب) ، و `appAwesome` (التوجيهي) `appAwesome` . لو لم يتم تصدير هذه التصاريح أو إهمال AppModule لإضافة AwesomeModule إلى وارداتها ، فإن مصداقية AwesomeModule لن تكون قابلة للاستخدام بواسطة نموذج AppComponent. AwesomeModule هو وحدة ميزة لجذر NgModule AppModule.

يوفر Angular بعض وحداته الخاصة التي تكمل الجذر عند استيرادها. هذا يرجع إلى هذه الوحدات النمطية ميزة تصدير ما يقومون بإنشائه.

#### طرق وحدة ثابتة

توفر الوحدات النمطية أحيانًا خيارًا لتكوينه باستخدام كائن تهيئة مخصص. يتم تحقيق ذلك من خلال الاستفادة من الأساليب الثابتة داخل فئة الوحدة النمطية.

مثال على هذا الأسلوب هو `RoutingModule` الذي يوفر طريقة `.forRoot(...)` مباشرة على الوحدة النمطية.

لتحديد طريقة الوحدة النمطية الثابتة الخاصة بك يمكنك إضافته إلى فئة الوحدة النمطية باستخدام الكلمة الأساسية `static` . يجب أن يكون نوع الإرجاع هو `ModuleWithProviders` .

 `// configureable.module.ts 
 
 import { AwesomeModule } from './awesome.module'; 
 import { ConfigureableService, CUSTOM_CONFIG_TOKEN, Config } from './configurable.service'; 
 import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 
 
 @NgModule({ 
  imports: [ 
    AwesomeModule, 
    BrowserModule 
  ], 
  providers: [ 
    ConfigureableService 
  ] 
 }) 
 export class ConfigureableModule { 
  static forRoot(config: Config): ModuleWithProviders { 
    return { 
        ngModule: ConfigureableModule, 
        providers: [ 
            ConfigureableService, 
            { 
                provide: CUSTOM_CONFIG_TOKEN, 
                useValue: config 
            } 
        ] 
    }; 
  } 
 } 
` 

 `// configureable.service.ts 
 
 import { Inject, Injectable, InjectionToken } from '@angular/core'; 
 
 export const CUSTOM_CONFIG_TOKEN: InjectionToken<string> = new InjectionToken('customConfig'); 
 
 export interface Config { 
  url: string 
 } 
 
 @Injectable() 
 export class ConfigureableService { 
  constructor( 
    @Inject(CUSTOM_CONFIG_TOKEN) private config: Config 
  ) 
 } 
` 

لاحظ أن الكائن إرجاع أسلوب `forRoot(...)` متطابقة تقريبًا إلى تكوين `NgModule` .

تقبل طريقة `forRoot(...)` كائن تكوين مخصص يمكن للمستخدم توفيره عند استيراد الوحدة النمطية.

 `imports: [ 
  ... 
  ConfigureableModule.forRoot({ url: 'http://localhost' }), 
  ... 
 ] 
` 

ثم يتم توفير التكوين باستخدام `InjectionToken` مخصص يسمى `CUSTOM_CONFIG_TOKEN` وحقنها في `ConfigureableService` . يجب أن يتم استيراد `ConfigureableModule` مرة واحدة فقط باستخدام أسلوب `forRoot(...)` . يوفر هذا `CUSTOM_CONFIG_TOKEN` مع التهيئة المخصصة. يجب على كافة الوحدات النمطية الأخرى استيراد `ConfigureableModule` بدون أسلوب `forRoot(...)` .

#### أمثلة NgModule من الزاوي

يوفر Angular مجموعة متنوعة من الوحدات `@angular` للاستيراد من `@angular` . اثنين من الوحدات النمطية الأكثر شيوعاً هي `CommonModule` و `HttpClientModule` .

`CommonModule` هو في الواقع مجموعة فرعية من `BrowserModule` . يوفر كلاهما الوصول إلى `*ngIf` و `*ngFor` التوجيهات الهيكلية. يتضمن `BrowserModule` خاصًا بالنظام الأساسي لمتصفح الويب. يحذف `CommonModule` هذا التثبيت. يجب استيراد `BrowserModule` إلى الجذر NgModule لأحد تطبيقات الويب. يوفر `CommonModule` `*ngIf` و `*ngFor` لتمييز الوحدات النمطية التي لا تتطلب تثبيت النظام الأساسي.

`HttpClientModule` يوفر `HttpClient` الخدمة. تذكر أن الخدمات تذهب في مجموعة `@NgModule` البيانات الوصفية لـ `@NgModule` . هم غير قابل للتصريح. أثناء التحويل البرمجي ، يتم دمج كل NgModule في وحدة واحدة واحدة. لا يتم تغليف الخدمات على عكس التصريحات. كلها قابلة للحياة من خلال حاقن الجذر الموجود بجانب NgModule المدمجة.

العودة إلى النقطة. مثل أي خدمة أخرى ، `HttpClient` إلى فئة من خلال `HttpClient` عن طريق حقن التبعية (DI). باستخدام DI ، حقن injector الجذر مثيل `HttpClient` في المنشئ. تتيح هذه الخدمة لمطوري البرامج إنشاء طلبات HTTP مع تنفيذ الخدمة.

يتضمن تطبيق `HttpClient` في صفيف موفري `HttpClientModule` . طالما يقوم الجذر NgModule باستيراد `HttpClientModule` ، سيقوم `HttpClient` بإنشاء مثيل من داخل نطاق الجذر كما هو متوقع.

#### استنتاج

هي احتمالات أنك قد استفادت بالفعل من Angular's NgModules. الزاوي يجعل من السهل جدا رمي وحدة نمطية في صفيف واردات جذر NgModule. غالبًا ما يتم تصدير الأدوات المساعدة من البيانات الوصفية للوحدة المستوردة. ولهذا السبب أصبحت مرافقها فجأة متاحة عند الاستيراد داخل الجذر NgModule.

يعمل NgModules عن قرب مع وحدات JavaScript البسيطة. أحدهما يوفر رمزًا مميزًا بينما يستخدمه الشخص للتكوين. ينتج عن عملهم الجماعي نظامًا قويًا وموحدًا فريدًا في إطار العمل الزاوي. يوفر طبقة جديدة من التنظيم فوق جميع الخطط الأخرى باستثناء التطبيق.

نأمل أن تعزز هذه المقالة فهمك لـ NgModules. يمكن للزاوية الاستفادة من هذا النظام بشكل أكبر في بعض حالات الاستخدام الأكثر غرابة. تتناول هذه المقالة الأساسيات بحيث يمكنك معرفة المزيد باستخدام الروابط أدناه.

## مصادر

*   [فريق الزاوي. "NgModules". _جوجل_ . تم الوصول إليه في 6 يونيو 2018.](https://angular.io/guide/ngmodules)
*   [كوريتسكي ، مكسيم. "تجنب الالتباس المشترك مع وحدات في الزاوي". _Angular In Depth_ ، في 10 أغسطس 2017. تم الوصول إليه في 6 يونيو 2018.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## مصادر

*   [وثائق الزاوي](https://angular.io/guide)
*   [الزاوي في العمق](https://blog.angularindepth.com)
*   [Angular GitHub Repository](https://github.com/angular/angular)
*   [الزاوي CLI](https://cli.angular.io)