---
title: Directives
localeTitle: توجيهات
---
# توجيهات

#### التحفيز

تعتبر التوجيهات جوهرية لنموذج HTML الخاص ب Angular. المكونات هي المثال الأكثر أهمية. يتم عرض كل عرض مكون أسفل عرض مكون الجذر. هذا يمكن أن يؤدي إلى شجرة من وجهات النظر التي تحدد تطبيق واحد. يشكّل العرض فئة ( `component.ts` ) وقالبها ( `component.html` ).

التوجيهات الأخرى ، رغم أنها ليست بالغة الأهمية ، توفر المرونة المطلوبة بشدة. التوجيه الموجود على عنصر له سيطرة كاملة عليه. يتيح استخدام `<ng-template></ng-template>` الإنشاء الديناميكي وإزالة محتوى HTML. Microsyntax يعطي المطورين الحرية لزيادة تخصيص السلوك التوجيهي.

#### التوجيه

التوجيهات هي عناصر وسمات مكونة تم إنشاؤها وتمييزها بواسطة Angular. يربط الزاوي العنصر أو السمة مع تعريف الفئة المقابل لها. `@Directive` أو `@Component` يزين هذه الفئات. كلاهما يدل على Angular أن الطبقة تؤدي دور التوجيه.

بعض التوجيهات تعدل نمط عنصر المضيف. تعرض التوجيهات الأخرى طرق العرض أو إدراجها في القائمة كطرق مدمجة. وبعبارة أخرى ، فإنها تغير تنسيق HTML.

في أي حال ، تشير التوجيهات إلى المترجم الزاوي. وهي تحدد مكونات التعديل وفقًا لمنطق الفصل الخاص بالتوجيه.

#### توجيه المكون

تختلف توجيهات المكونات بشكل أساسي عن أنواع التوجيهات الأخرى. عادة ما يشار إليها فقط كمكونات. هم يشكلون علامة HTML الفريدة الخاصة بهم. لكل مكون ، يوجد بعض القالب HTML. هذا على عكس التوجيهين الآخرين. فصولها عبارة عن منطق خالٍ يعمل وفقًا لما هو محدد مسبقًا في نموذج HTML.

#### إنشاء مكون

إنشاء مكون مع مكون `ng generate component [name-of-component]` ؛ استبدل `[name-of-component]` باسم مفضل. يعطي الأمر أربعة ملفات مختلفة تتعلق جميعها بمكون واحد.

تعتبر `component.css` و `component.spec.ts` خارج نطاق هذه المقالة. يتضمن الجانب _التوجيهي_ للمكون الملفين الآخرين. ألق نظرة على ملفي `component.ts` و `component.html` .

 `// example.component.ts 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent { 
  constructor() { } 
 } 
` 

تم قطع اثنين من التفاصيل غير ذات صلة من الجيل الافتراضي من `component.ts` . بهذه الطريقة يكون التركيز على المكون نفسه.

 `
<!-- example.component.html --> 
 
 <p>example works!</p> 
` 

قد يبدو إدراج ExampleComponent كطفل مكون آخر كما يلي.

 `
<!-- another.component.html --> 
 
 <h1>Welcome to AnotherComponent.</h1> 
 <h3>Check out ExampleComponent!</h3> 
 
 <!-- Outputs “<p>example works!</p>” --> 
 <app-example></app-example> 
 
 <h6>This is the end of the AnotherComponent template HTML.</h6> 
` 

انتبه إلى `<app-example></app-example>` . يتطابق `app-example` مع المحدد من decoratorComponent في `@Component` . هذا هو عنصر التوجيه. يتعرف الزاوي `app-example` _ويوجه_ عرضه إلى فئة ExampleComponent.

#### التوجيه الهيكلي

التفكير `if` البيانات، `for` الحلقات، و `switch` البيانات في المنطق البرمجة. هذه بنيات منطقية تحدد تنفيذ التعليمات البرمجية. هل سيتم تنفيذ التعليمة البرمجية ( `if` ) ، وكم مرة سيتم تنفيذها ( `for` ) ، وأي مجموعة من الأكواد البرمجية (رمز `switch` ).

هذا النمط يستمر في التوجيهات الهيكلية. وهي تحدد بنية HTML الناتجة للقالب. أنها تنطوي دائما على بعض استخدام `ng-template` تحت غطاء محرك السيارة. يوفر `ng-template` آلية لإنشاء HTML تم تقديمه بطريقة مشروطة.

فيما يلي ثلاثة أمثلة من التوجيهات الهيكلية. كل واحد لديه نظير منطقي ( `if` ، `for` ، `switch` ).

*   \* ngIf
    
*   \* ngFor
    
*   \* ngSwitchCase و \* ngSwitchDefault
    

**ملاحظة هامة:** جميع هذه الثلاثة متاحة من خلال استيراد `CommonModule` . وهي متاحة من `@angular/common` للاستيراد داخل وحدة الجذر للتطبيق.

##### \* ngIf

`*ngIf` قيمة معينة لمعرفة ما إذا كانت _صحيحة_ أو _كاذبة_ تستند إلى التقييم المنطقي العام في JavaScript. إذا كانت الحقيقة ، يظهر العنصر و HTML الداخلي. خلاف ذلك ، فإنها لا تقدم أبدا إلى نموذج كائن المجال (DOM).

 `
<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngIf="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *ngIf="false"> 
  <h1>Hi!</h1> 
 </div> 
` 

هذا مثال مفتعل. يمكن استبدال أي قيمة عضو من فئة مكون القالب بـ `true` أو `false` .

ملاحظة: يمكنك أيضًا القيام بما يلي مع \* ngIf للوصول إلى قيمة الملاحظة

 `
<div *ngIf="observable$ | async as anyNameYouWant"> 
  {{  anyNameYouWant }} 
 </div> 
` 

##### \* ngFor

`*ngFor` loops استناداً إلى تعبير _صغري_ تم تعيينه _لليمين_ . ينتقل Microsyntax خارج نطاق هذه المقالة. نعرف أن microsyntax هو شكل قصير من التعبير المنطقي. يحدث كسلسلة واحدة قادرة على الرجوع إلى قيم عضو فئة. يمكنه تكرار قيم `*ngFor` للتكرار مما يجعلها مفيدة لـ `*ngFor` .

 `
<ul> 
  <li *ngFor=“let potato of ['Russet', 'Sweet', 'Laura']; let i=index”> 
      Potato {{ i + 1 }}: {{ potato }} 
  </li> 
  <!-- Outputs 
  <li> 
      Potato 1: Russet 
  </li> 
  <li> 
      Potato 2: Sweet 
  </li> 
  <li> 
      Potato 3: Laura 
  </li> 
  --> 
 </ul> 
` 

`['Russet', 'Sweet', 'Laura']` هي قيمة محسوبة. المصفوفات هي واحدة من أكثر المتغيرات الشائعة. تقوم `*ngFor` عنصر `<li></li>` لكل عنصر في الصفيف. يتم تعيين كل عنصر صفيف `potato` المتغيرة. كل هذا يتم باستخدام microsyntax. يحدد `*ngFor` المحتوى الهيكلي لعنصر `ul` . هذا هو سمة من التوجيه الهيكلي.

ملاحظة: يمكنك أيضًا القيام بما يلي مع \* ngFor التوجيه للوصول إلى قيمة الملاحظة (hacky)

 `
<div *ngFor="let anyNameYouWant of [(observable$ | async)]"> 
  {{  anyNameYouWant }} 
 </div> 
` 

##### \* ngSwitchCase و \* ngSwitchDefault

يعمل هذان التوجيهان الهيكليان معًا لتوفير وظيفة `switch` إلى نموذج HTML.

 `
<div [ngSwitch]=“potato”> 
  <h1 *ngSwitchCase=“'Russet'”>{{ potato }} is a Russet Potato.</h1> 
  <h1 *ngSwitchCase=“'Sweet'”>{{ potato }} is a Sweet Potato.</h1> 
  <h1 *ngSwitchCase=“'Laura'”>{{ potato }} is a Laura Potato.</h1> 
  <h1 *ngSwitchDefault>{{ potato }} is not a Russet, Sweet, nor Laura Potato.</h1> 
 </div> 
` 

واحد فقط من `*ngSwitch…` التعبيرات. لاحظ السمة `[ngSwitch]` داخل عنصر `div` يلف المفتاح. هذا يمر قيمة `potato` على طول سلسلة `*ngSwitch...` تحدد هذه السلسلة من التوجيهات الهيكلية عنصر `h1` الذي يتم `h1` .

على هذا النحو ، لا يعد `[ngSwitch]` توجيهًا هيكليًا على عكس `*ngSwitch…` . يمرر القيمة على طول بينما يحدد قالب التبديل التخطيط النهائي لـ HTML.

تذكر أن الأسلوب و تمرير القيمة لا يمثلان مسؤولية التوجيهات الهيكلية. التي تتعلق توجيهات السمة. التوجيهات الهيكلية تحدد فقط التخطيط.

#### الهيكل التوجيهي للإبداع [1](https://angular.io/guide/structural-directives)

هناك شيء مهم لفهمه عن الأمثلة السابقة. انهم جميعا اختزال من البداية النجمية ( `*` ). يستخدم `ng-template` تحت غطاء محرك السيارة مع كل تطبيق للنجمة.

يحدد `ng-template` التوجيهات الهيكلية. يشرح كيف يمكنهم تكوين HTML النموذج لإنتاج HTML الفعلي. ابدأ بإنشاء أمر توجيه باستخدام `ng generate directive [name-of-directive]` . استبدل `[name-of-directive]` باسم مفضل. يعطي الأمر ما يلي.

 `import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
` 

هذا الهيكل العظمي التوجيهي هي جميلة عارية. لا نعرف بعد ما إذا كنا نبني توجيهًا هيكليًا أو مسطرة. يحدد `selector: '[appExample]'` الزاوي ما `selector: '[appExample]'` التوجيهات إلى. نظرًا لأنك تقوم بإنشاء توجيه هيكلي ، قم بتعديل الهيكل العظمي كما يلي.

 `Import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  @Input() set appExample(booleanValue: boolean) { 
      if (booleanValue) { 
          this.ngTemplate.createEmbeddedView(this.innerHTMLOfTemplateScope); 
      } 
      else { 
          this.ngTemplate.clear(); 
      } 
  } 
 
  constructor( 
      private innerHTMLOfTemplateScope:TemplateRef<any>, 
      private ngTemplate:ViewContainerRef 
  ) { } 
 } 
` 

تضمين عنصر عشوائي مع سمة `appExample` بمثابة مثال جيد.

 `
<div *appExample=“value”>innerHTML content</div> 
 <!-- This is shorthand for: 
 <ng-template> 
  <div>innerHTML content</div> 
 </ng-template> 
 --> 
` 

هذا هو الكثير ليأخذ في. `@Input() set ...` هو إعلان عضو واضعة. يتم تنفيذ ذلك عندما تظهر السمة `appExample` داخل عنصر ويتم تعيين قيمة منطقية لها. تستقبل الدالة setter تلك القيمة المنطقية كمعلمة للتنفيذ.

`TemplateRef<any>` إلى innerHTML الخاص بـ `<ng-template></ng-template>` . النجمة المستخدمة في الأمثلة السابقة هي اختصار للتعليق في قالب الكود أعلاه. `ng-template` بمثابة _صلصة سرية_ له التوجيهات الهيكلية.

يشير `ViewContainerRef` إلى نطاق تغليف `<ng-template></ng-template>` . `ng-template` ليس عنصرًا فعليًا. إنه علامة للمترجم الزاوي الذي يتم التعليق عليه في النهاية.

يحتوي `ViewContainerRef` طريقتين: `clear()` و `createEmbeddedView()` . يمكنك التفكير في طرق العرض المضمنة أثناء تحديد نطاق HTML داخل عنصر `ng-template` .

`clear()` يزيل أي HTML موجود تم تحديده داخل `ng-template` من شاشة HTML. `createEmbeddedView()` HTML داخل `ng-template` كـ HTML قابل للعرض.

إذا فهمت مثال الكود الأحدث ، فحينئذٍ سيكون لديك `*ngIf` صلبة `*ngIf` و `*ngFor` و `*ngSwitchCase` و `*ngSwitchDefault` . انهم جميعا تحديد تخطيط مع الإشارة إلى `TemplateRef<any>` و `ViewContainerRef` .

في الواقع ، فإن ExampleDirective أعلاه يحاكي وظائف `*ngIf` !

 `
<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngExample="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *appExample="false"> 
  <h1>Hi!</h1> 
 </div> 
` 

لا تنسى النجمة ( `*` ). هو اختزال لعنصر `ng-template` الذي تشير إليه فئة التوجيه الخاصة بنا.

#### توجيه السمة

توجيهات السمات مشابهة للبنية. باستثناء ، فإن أوامر السمات لها تأثير صفري على تنسيق HTML. وهي لا تنفذ `<ng-template></ng-template>` . وهي سمات تشير إلى عنصر المضيف الخاص بها للتغييرات الأسلوبية.

مثال يوضح أفضل غرضهم.

#### السمة توجيه إنشاء [2](https://angular.io/guide/attribute-directives)

إنشاء توجيه آخر: `ng generate directive [name-of-directive]` . استبدل `[name-of-directive]` باسم مفضل.

 `import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
` 

تبدأ السمة والتوجيهات الهيكلية بنفس الهيكل العظمي. سوف تضيف بضعة إضافات أخرى توجيه السمة.

 `import { Directive, Input, ElementRef } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  @Input() set appExample(color:string) { 
      this.host.nativeElement.style.color = color; 
  } 
 
  constructor(private host:ElementRef) { } 
 } 
` 

بعض العناصر لاختبار مع مساعدة.

 `
<!-- the intended results are self-explanatory --> 
 <div appExample=“purple”>This text is purple!</div> 
 <div appExample=“blue”>This text is blue!</div> 
 <div appExample=“red”>This text is red!</div> 
` 

يوفر `ElementRef` إشارة مباشرة إلى عنصر المضيف. يستحوذ `ElementRef.nativeElement` على عقدة DOM. مع العقدة ، فإن تصميم العنصر بسيط مثل `this.host.nativeElement.style.color = color` .

`@Input() set ...` هي وظيفة setter أخرى تقرأ القيمة التي يتم تعيينها عند تنفيذها `@Input() set ...` . يعيد تعيين خاصية اللون لورقة الأنماط لكل عنصر.

#### استنتاج

التوجيهات هي أداة قوية متاحة في HTML لقالب Angular. هم كيفية توصيل المكونات عبر بعضها البعض. داخل كل مكون أنها توفر وسيلة للأسلوب والتخطيط.

هناك العديد من الخيارات الأخرى لبناء كل نوع من التوجيه. لسوء الحظ ، تغطية كل واحد منها أكثر من اللازم لمقالة واحدة. وجود فهم أساسي للتوجيهات كافٍ للمضي قدمًا باستخدام المزيد من الموارد المتقدمة.

تحقق من الموارد أدناه للغوص أعمق. هناك روابط لكل نوع من التوجيه. كل رابط هو جزء من نفس الوثائق ، لذا لا حاجة للعودة هنا بعد زيارة الرابط الأول!

## مصادر

1.  [فريق الزاوي. _التوجيهات الهيكلية_ . جوجل. تم الوصول إليها في 28 مايو 2018](https://angular.io/guide/structural-directives)
    
2.  [فريق الزاوي. _توجيهات السمة_ . جوجل. تم الوصول إليها في 28 مايو 2018](https://angular.io/guide/attribute-directives)
    

## مصادر

*   [وثائق الزاوي](https://angular.io/guide/pipes)
    
*   [Angular GitHub Repository](https://github.com/angular/angular)
    
*   [المكونات الزاوي](https://angular.io/guide/architecture-components)
    
*   [التوجيهات الهيكلية الزاوي](https://angular.io/guide/structural-directives)
    
*   [إرشادات السمة الزاوي](https://angular.io/guide/attribute-directives)
    
*   [الزاوي CLI](https://cli.angular.io)