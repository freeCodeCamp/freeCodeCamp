---
title: Lifecycle Hooks
localeTitle: خطاف دورة حياة
---
# خطاف دورة حياة

#### التحفيز

تقوم أطر الواجهة الأمامية الحديثة بتحويل التطبيق من ولاية إلى أخرى. تزود البيانات هذه التحديثات. تتفاعل هذه التقنيات مع البيانات التي بدورها تحول الحالة. مع كل تغيير في الحالة ، هناك العديد من اللحظات المحددة التي تصبح فيها بعض الأصول متاحة.

في إحدى الحالات ، قد يكون النموذج جاهزًا ، وفي بيانات أخرى سيتم الانتهاء من التحميل. الترميز لكل حالة يتطلب وسيلة للكشف. خطاطيف دورة الحياة الإجابة على هذه الحاجة. وتحزم أطر العمل الأمامية الحديثة مجموعة متنوعة من خطافات دورة الحياة. الزاوي ليست استثناء

#### ويوضح خطاف دورة حياة

خطاطيف دورة الحياة هي أساليب موقوتة. تختلف في متى ولماذا تنفذ. يؤدي الكشف عن التغيير إلى تشغيل هذه الطرق. أنها تنفذ اعتمادا على ظروف الدورة الحالية. يغير تشغيل الزاوي باستمرار على بياناته. تساعد خطافات دورة الحياة في إدارة آثارها.

جانب مهم من هذه الخطافات هو ترتيب التنفيذ. لا ينحرف ابدا. يتم تنفيذها استنادًا إلى سلسلة متوقعة من أحداث الحمل التي تم إنتاجها من دورة الكشف. هذا يجعلها متوقعة. بعض الأصول متوفرة فقط بعد تنفيذ خطاف معين. وبطبيعة الحال ، لا يتم تنفيذ خطاف إلا تحت ظروف معينة محددة في دورة الكشف عن التغيير الحالية.

تقدم هذه المقالة خطاطيف دورة الحياة في ترتيب تنفيذها (إذا كانت جميع تنفيذ). شروط معينة تستحق تفعيل الخطاف. هناك عدد قليل من الذين ينفذون فقط مرة واحدة بعد تهيئة المكونات.

تتوفر جميع طرق دورة الحياة من `@angular/core` . على الرغم من عدم ضرورة ذلك ، [توصي](https://angular.io/guide/lifecycle-hooks#interfaces-are-optional-technically) Angular [بتنفيذ كل خطاف](https://angular.io/guide/lifecycle-hooks#interfaces-are-optional-technically) . هذه الممارسة تؤدي إلى رسائل خطأ أفضل فيما يتعلق بالمكون.

### في ترتيب تنفيذها ...

#### ngOnChanges

`ngOnChanges` بعد تعديل أعضاء فئة ربط `@Input` . تأتي البيانات المرتبطة بـ `@Input()` من مصدر خارجي. عندما يقوم المصدر الخارجي بتغيير هذه البيانات بطريقة يمكن اكتشافها ، فإنه يمر عبر خاصية `@Input` مرة أخرى.

باستخدام هذا التحديث ، يتم `ngOnChanges` الفور. كما يتم إطلاقه عند تهيئة بيانات الإدخال. يتلقى `SimpleChanges` معلمة اختيارية واحدة من النوع `SimpleChanges` . تحتوي هذه القيمة على معلومات حول خصائص مدخلات تم تغييرها.

 ``import { Component, Input, OnChanges } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <h3>Child Component</h3> 
  <p>TICKS: {{ lifecycleTicks }}</p> 
  <p>DATA: {{ data }}</p> 
  ` 
 }) 
 export class ChildComponent implements OnChanges { 
  @Input() data: string; 
  lifecycleTicks: number = 0; 
 
  ngOnChanges() { 
    this.lifecycleTicks++; 
  } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <h1>ngOnChanges Example</h1> 
  <app-child [data]="arbitraryData"></app-child> 
  ` 
 }) 
 export class ParentComponent { 
  arbitraryData: string = 'initial'; 
 
  constructor() { 
    setTimeout(() => { 
      this.arbitraryData = 'final'; 
    }, 5000); 
  } 
 } 
`` 

**ملخص:** ParentComponent بربط بيانات الإدخال إلى ChildComponent. يتلقى المكون هذه البيانات من خلال خاصية `@Input` الخاصة به. `ngOnChanges` الحرائق. بعد خمس ثوانٍ ، يتم تشغيل معاودة الاتصال `setTimeout` . يقوم ParentComponent بتغيير مصدر البيانات الخاص بخاصية إدخال معلمة ChildComponent. تتدفق البيانات الجديدة من خلال خاصية الإدخال. `ngOnChanges` حرائق مرة أخرى.

#### ngOnInit

`ngOnInit` حرائق مرة واحدة عند تهيئة خصائص مدخلات ( `@Input` ) مكون من المكونات. المثال التالي سوف يشبه المثال الأخير. لا إطلاق الخطاف كما يتلقى ChildComponent بيانات الإدخال. بدلاً من ذلك ، يتم تشغيله مباشرة بعد عرض البيانات إلى قالب ChildComponent.

 ``import { Component, Input, OnInit } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <h3>Child Component</h3> 
  <p>TICKS: {{ lifecycleTicks }}</p> 
  <p>DATA: {{ data }}</p> 
  ` 
 }) 
 export class ChildComponent implements OnInit { 
  @Input() data: string; 
  lifecycleTicks: number = 0; 
 
  ngOnInit() { 
    this.lifecycleTicks++; 
  } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <h1>ngOnInit Example</h1> 
  <app-child [data]="arbitraryData"></app-child> 
  ` 
 }) 
 export class ParentComponent { 
  arbitraryData: string = 'initial'; 
 
  constructor() { 
    setTimeout(() => { 
      this.arbitraryData = 'final'; 
    }, 5000); 
  } 
 } 
`` 

**ملخص:** ParentComponent بربط بيانات الإدخال إلى ChildComponent. يتلقى ChildComponent هذه البيانات من خلال خاصية `@Input` الخاصة به. البيانات المقدمة إلى القالب. `ngOnInit` الحرائق. بعد خمس ثوانٍ ، يتم تشغيل معاودة الاتصال `setTimeout` . يقوم ParentComponent بتغيير مصدر البيانات الخاص بخاصية إدخال معلمة ChildComponent. nGOnInit **لا** حريق.

`ngOnInit` هو `ngOnInit` -one-done. التهيئة هي شاغلها الوحيد.

#### ngDoCheck

`ngDoCheck` حرائق مع كل دورة الكشف عن التغيير. يغير تشغيل الزاوي كثيرًا. سوف يؤدي تنفيذ أي إجراء إلى الدوران. حرائق `ngDoCheck` مع هذه الدورات. استخدامه بحذر. يمكن أن يخلق مشاكل الأداء عند تنفيذها بشكل غير صحيح.

يتيح `ngDoCheck` للمطورين التحقق من بياناتهم يدويًا. يمكن أن تؤدي إلى تاريخ تطبيق جديد بشروط. بالتزامن مع `ChangeDetectorRef` ، يمكن للمطورين إنشاء الشيكات الخاصة بهم للكشف عن التغيير.

 ``import { Component, DoCheck, ChangeDetectorRef } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>ngDoCheck Example</h1> 
  <p>DATA: {{ data[data.length - 1] }}</p> 
  ` 
 }) 
 export class ExampleComponent implements DoCheck { 
  lifecycleTicks: number = 0; 
  oldTheData: string; 
  data: string[] = ['initial']; 
 
  constructor(private changeDetector: ChangeDetectorRef) { 
    this.changeDetector.detach(); // lets the class perform its own change detection 
 
    setTimeout(() => { 
      this.oldTheData = 'final'; // intentional error 
      this.data.push('intermediate'); 
    }, 3000); 
 
    setTimeout(() => { 
      this.data.push('final'); 
      this.changeDetector.markForCheck(); 
    }, 6000); 
  } 
 
  ngDoCheck() { 
    console.log(++this.lifecycleTicks); 
 
    if (this.data[this.data.length - 1] !== this.oldTheData) { 
      this.changeDetector.detectChanges(); 
    } 
  } 
 } 
`` 

انتبه إلى وحدة التحكم مقابل العرض. تقدم البيانات حتى "متوسط" قبل التجميد. تحدث ثلاث جولات من اكتشاف التغيير خلال هذه الفترة كما هو موضح في وحدة التحكم. تحدث جولة أخرى من اكتشاف التغيير عندما يتم دفع "نهائي" إلى نهاية هذا `this.data` . ثم تحدث جولة أخيرة من الكشف عن التغيير. يحدد تقييم العبارة if أي تحديثات للعرض ضرورية.

**ملخص:** الطبقة instantiates بعد جولتين من الكشف عن التغيير. يبدأ منشئ فئة `setTimeout` مرتين. بعد ثلاث ثوانٍ ، يقوم `setTimeout` الأول `setTimeout` بتغيير الكشف. `ngDoCheck` علامات العرض للحصول على تحديث. بعد ثلاث ثوانٍ ، يقوم `setTimeout` الثاني `setTimeout` بتغيير الكشف. لا توجد تحديثات للعرض مطلوبة وفقًا لتقييم `ngDoCheck` .

##### تحذير

قبل المتابعة ، تعرف على الفرق بين محتوى DOM وعرض DOM (يقف DOM لنموذج كائن المستند).

يحدد المحتوى DOM لغة HTML الداخلية للعناصر الموجهة. على العكس ، فإن DOM view هو قالب مكون باستثناء أي HTML قالب متداخل ضمن توجيه. للحصول على فهم أفضل ، ارجع إلى [مشاركة المدونة هذه](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders) .

#### ngAfterContentInit

`ngAfterContentInit` بإشعاع بعد تهيئة DOM للمكون المكون (تحميل للمرة الأولى). الانتظار في `@ContentChild(ren)` هو حالة الاستخدام الأساسي في hook.

`@ContentChild(ren)` استعلامات `@ContentChild(ren)` مراجع العناصر لمحتوى DOM. على هذا النحو ، فهي غير متوفرة إلا بعد تحميل محتوى DOM. ومن ثم لماذا `ngAfterContentInit` ونظيرتها `ngAfterContentChecked` يتم استخدامها.

 ``import { Component, ContentChild, AfterContentInit, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>I am B.</p> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterContentInit { 
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef; 
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  ngAfterContentInit() { 
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', 'yellow') 
 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', 'pink'); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', 'red'); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterContentInit Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3 #BHeader>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
`` 

`@ContentChild` نتائج الاستعلام `ngAfterContentInit` من `ngAfterContentInit` . `Renderer2` بتحديث محتوى DOM من BComponent الذي يحتوي على علامة `h3` و CComponent. هذا هو مثال شائع [لإسقاط المحتوى](https://alligator.io/angular/content-projection-angular) .

**ملخص:** يبدأ التقديم مع AComponent. لإنهاء ، يجب أن يجعل AComponent BComponent. محتوى المشاريع BComponent متداخل في عنصره من خلال عنصر `<ng-content></ng-content>` . يمثل CComponent جزءًا من المحتوى المتوقع. ينهي المحتوى المتوقع العرض. `ngAfterContentInit` fires. BComponent انتهاء العرض. ينتهي AComponent التقديم. لن `ngAfterContentInit` إطلاق مرة أخرى.

#### ngAfterContentChecked

`ngAfterContentChecked` fires after `ngAfterContentChecked` cycle of change detection `ngAfterContentChecked` the content DOM. هذا يتيح للمطورين تسهيل كيفية استجابة محتوى DOM لتغيير الكشف. يمكن `ngAfterContentChecked` إطلاق النار بشكل متكرر والتسبب في مشاكل في الأداء إذا نفذت بشكل سيئ.

حرائق `ngAfterContentChecked` خلال مراحل التهيئة مكون أيضا. يأتي بعد `ngAfterContentInit` .

 ``import { Component, ContentChild, AfterContentChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>I am B.</p> 
  <button (click)="$event">CLICK</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterContentChecked { 
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef; 
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  randomRGB(): string { 
    return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`; 
  } 
 
  ngAfterContentChecked() { 
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', this.randomRGB()); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', this.randomRGB()); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', this.randomRGB()); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterContentChecked Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3 #BHeader>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
`` 

هذا بالكاد يختلف من `ngAfterContentInit` . تمت إضافة مجرد `<button></button>` إلى BComponent. يؤدي النقر فوقه إلى حدوث حلقة اكتشاف التغيير. هذا ينشط ربط كما هو مشار إليه من قبل randomization من `background-color` .

**ملخص:** يبدأ التقديم مع AComponent. لإنهاء ، يجب أن يجعل AComponent BComponent. محتوى المشاريع BComponent متداخل في عنصره من خلال عنصر `<ng-content></ng-content>` . يمثل CComponent جزءًا من المحتوى المتوقع. ينهي المحتوى المتوقع العرض. `ngAfterContentChecked` fires. BComponent انتهاء العرض. ينتهي AComponent التقديم. قد `ngAfterContentChecked` إطلاق مرة أخرى خلال الكشف عن التغيير.

#### ngAfterViewInit

`ngAfterViewInit` مرة واحدة بعد انتهاء عرض DOM تهيئة. يتم تحميل العرض دائمًا بعد المحتوى مباشرةً. ينتظر `ngAfterViewInit` على `@ViewChild(ren)` لحل. يتم الاستعلام عن هذه العناصر من داخل نفس عرض المكون.

في المثال أدناه ، يتم الاستعلام عن رأس `h3` BComponent. `ngAfterViewInit` تنفيذ `ngAfterViewInit` بمجرد توفر نتائج الاستعلام.

 ``import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p #BStatement>I am B.</p> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterViewInit { 
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  ngAfterViewInit() { 
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', 'yellow'); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterViewInit Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
`` 

يغير `Renderer2` لون خلفية رأس BComponent. يشير هذا إلى عنصر العرض تم الاستعلام عنه بنجاح وذلك بفضل `ngAfterViewInit` .

**ملخص:** يبدأ التقديم مع AComponent. لإنهاء ، يجب أن يجعل AComponent BComponent. محتوى المشاريع BComponent متداخل في عنصره من خلال عنصر `<ng-content></ng-content>` . يمثل CComponent جزءًا من المحتوى المتوقع. ينهي المحتوى المتوقع العرض. BComponent انتهاء العرض. `ngAfterViewInit` حرائق. ينتهي AComponent التقديم. لن `ngAfterViewInit` إطلاق مرة أخرى.

#### ngAfterViewChecked

`ngAfterViewChecked` fires بعد أي دورة الكشف عن تغيير تستهدف عرض المكون. يسمح ربط `ngAfterViewChecked` للمطورين بتسهيل كيفية تأثير الكشف عن التغيير على DOM العرض.

 ``import { Component, ViewChild, AfterViewChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p #BStatement>I am B.</p> 
  <button (click)="$event">CLICK</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterViewChecked { 
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  randomRGB(): string { 
    return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`; 
  } 
 
  ngAfterViewChecked() { 
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', this.randomRGB()); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterViewChecked Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
`` 

**ملخص:** يبدأ التقديم مع AComponent. لإنهاء ، يجب أن يجعل AComponent BComponent. محتوى المشاريع BComponent متداخل في عنصره من خلال عنصر `<ng-content></ng-content>` . يمثل CComponent جزءًا من المحتوى المتوقع. ينهي المحتوى المتوقع العرض. BComponent انتهاء العرض. `ngAfterViewChecked` fires. ينتهي AComponent التقديم. قد `ngAfterViewChecked` إطلاق مرة أخرى خلال الكشف عن التغيير.

يؤدي النقر فوق `<button></button>` بدء جولة كشف عن التغيير. `ngAfterContentChecked` حرائق وعشوائية `background-color` للعناصر التي تم الاستعلام عنها كل نقرة زر.

#### ngOnDestroy

`ngOnDestroy` حرائق على إزالة مكون من العرض و DOM لاحق. يوفر هذا الخطاف فرصة لتنظيف أي طرود فضفاضة قبل حذف أحد المكونات.

 ``import { Directive, Component, OnDestroy } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appDestroyListener]' 
 }) 
 export class DestroyListenerDirective implements OnDestroy { 
  ngOnDestroy() { 
    console.log("Goodbye World!"); 
  } 
 } 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>ngOnDestroy Example</h1> 
  <button (click)="toggleDestroy()">TOGGLE DESTROY</button> 
  <p appDestroyListener *ngIf="destroy">I can be destroyed!</p> 
  ` 
 }) 
 export class ExampleComponent { 
  destroy: boolean = true; 
 
  toggleDestroy() { 
    this.destroy = !this.destroy; 
  } 
 } 
`` 

**ملخص:** يتم النقر فوق الزر. عضو ExampleComponent `destroy` false. يتم تقييم التوجيه الهيكلي `*ngIf` إلى false. `ngOnDestroy` fires. `*ngIf` يزيل مضيفه `<p></p>` . تكرر هذه العملية أي عدد من المرات نقر الزر لتبديل `destroy` إلى false.

#### استنتاج

تذكر أنه يجب تلبية شروط معينة لكل خطاف. سوف ينفذون دائما في ترتيب بعضهم البعض بغض النظر. هذا يجعل الخطافات متوقعة بما يكفي للتعامل معها حتى لو لم يتم تنفيذ بعضها.

مع خطافات دورة الحياة ، فإن توقيت تنفيذ الفصل أمر سهل. أنها تسمح للمطورين بتتبع مكان حدوث الكشف عن التغيير وكيفية تفاعل التطبيق. إنها تتوقّف للحصول على التعليمة البرمجية التي تتطلب تبعيات تستند إلى الأحمال متاحة فقط بعد وقت ما.

تميز دورة حياة المكونات أطر العمل الأمامية الحديثة. يضع الزاوي دورة حياته من خلال توفير الخطافات المذكورة أعلاه.

## مصادر

*   [فريق الزاوي. "خطاف دورة الحياة". _جوجل_ . تم الوصول إليه في 2 يونيو 2018](https://angular.io/guide/lifecycle-hooks)
*   [جيجتش ، مينكو. "ViewChildren و ContentChildren in Angular". تم الوصول إليه في 2 يونيو 2018](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders)

## مصادر

*   [وثائق الزاوي](https://angular.io/docs)
*   [Angular GitHub Repository](https://github.com/angular/angular)
*   [خطاف دورة الحياة في العمق](https://angular.io/guide/lifecycle-hooks)