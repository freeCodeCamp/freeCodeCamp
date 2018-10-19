---
title: Lifecycle Hooks
localeTitle: Крючки жизненного цикла
---
# Крючки жизненного цикла

#### мотивация

Современные интерфейсные платформы перемещают приложение из состояния в состояние. Данные поддерживают эти обновления. Эти технологии взаимодействуют с данными, которые, в свою очередь, переходят в состояние. При каждом изменении состояния существует множество конкретных моментов, когда некоторые активы становятся доступными.

В одном случае шаблон может быть готов, а в других данных будет завершена загрузка. Для кодирования для каждого экземпляра требуется средство обнаружения. Ленточные крючки отвечают на эту потребность. Современные интерфейсные фреймворки сами по себе имеют множество крючков жизненного цикла. Угловое не исключение

#### Разъяснения жизненных циклов

Перехватчики жизненного цикла - это приуроченные методы. Они отличаются тем, когда и почему они выполняются. Обнаружение изменений запускает эти методы. Они выполняются в зависимости от условий текущего цикла. Угловые пробеги постоянно меняют свое обнаружение. Перехватчики жизненного цикла помогают управлять его эффектами.

Важным аспектом этих крючков является их порядок исполнения. Он никогда не отклоняется. Они выполняются на основе предсказуемой серии событий нагрузки, созданных из цикла обнаружения. Это делает их предсказуемыми. Некоторые активы доступны только после выполнения определенного крючка. Конечно, крючок выполняется только при определенных условиях, установленных в текущем цикле обнаружения изменений.

В этой статье представлены привязки жизненного цикла в порядке их выполнения (если все они выполняются). Определенные условия заслуживают активации крючка. Есть несколько, которые выполняются только один раз после инициализации компонента.

Все методы жизненного цикла доступны из `@angular/core` . Хотя это и не требуется, Angular [рекомендует использовать каждый крючок](https://angular.io/guide/lifecycle-hooks#interfaces-are-optional-technically) . Эта практика приводит к улучшению сообщений об ошибках в отношении компонента.

### В порядке их исполнения ...

#### ngOnChanges

`ngOnChanges` запускает следующие модификации связанных классов класса `@Input` . Данные, связанные с `@Input()` декоратора `@Input()` поступают из внешнего источника. Когда внешний источник изменяет эти данные детектируемым образом, он снова переходит через свойство `@Input` .

При этом обновлении немедленно запускается `ngOnChanges` . Он также запускает инициализацию входных данных. Крючок получает один необязательный параметр типа `SimpleChanges` . Это значение содержит информацию об измененных свойствах, связанных с вводом.

```typescript
import { Component, Input, OnChanges } from '@angular/core'; 
 
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
```

**Описание:** ParentComponent связывает входные данные с ChildComponent. Компонент получает эти данные через свое свойство `@Input` . `ngOnChanges` срабатывает. Через пять секунд срабатывает обратный вызов `setTimeout` . ParentComponent мутирует источник данных свойства входного свойства ChildComponent. Новые данные передаются через входное свойство. `ngOnChanges` снова срабатывает.

#### ngOnInit

`ngOnInit` запускается один раз после инициализации свойств входных данных ( `@Input` ) `@Input` . Следующий пример будет похож на последний. Крючок не срабатывает, так как ChildComponent получает входные данные. Скорее, он срабатывает сразу после того, как данные отображаются в шаблоне ChildComponent.

```typescript
import { Component, Input, OnInit } from '@angular/core'; 
 
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
```

**Описание:** ParentComponent связывает входные данные с ChildComponent. ChildComponent получает эти данные через свое свойство `@Input` . Данные отображаются в шаблоне. `ngOnInit` пожаров. Через пять секунд срабатывает обратный вызов `setTimeout` . ParentComponent мутирует источник данных свойства входного свойства ChildComponent. ngOnInit **НЕ ПОЖАРА** .

`ngOnInit` - это одноразовый крючок. Инициализация - это единственная проблема.

#### ngDoCheck

`ngDoCheck` срабатывает с каждым циклом обнаружения изменений. Угловые пробеги часто меняются. Выполнение любого действия вызовет его цикл. `ngDoCheck` запускает эти циклы. Используйте его с осторожностью. Он может создавать проблемы с производительностью при неправильной реализации.

`ngDoCheck` позволяет разработчикам проверять свои данные вручную. Они могут инициировать новую дату приложения условно. В сочетании с `ChangeDetectorRef` разработчики могут создавать собственные проверки для обнаружения изменений.

```typescript
import { Component, DoCheck, ChangeDetectorRef } from '@angular/core'; 
 
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
```

Обратите внимание на консоль и дисплей. Данные доходят до «промежуточных» до замораживания. За этот период происходит три раунда обнаружения изменений, как указано в консоли. Еще один раунд обнаружения изменений происходит по мере того, как «final» попадает в конец `this.data` . Затем происходит последний раунд обнаружения изменений. Оценка инструкции if определяет, что обновления не нужны.

**Описание:** Класс создает экземпляр после двух раундов обнаружения изменений. Конструктор классов инициирует `setTimeout` дважды. Через три секунды первый `setTimeout` запускает обнаружение изменений. `ngDoCheck` отмечает отображение обновления. Через три секунды второй `setTimeout` запускает обнаружение изменений. Обновлений просмотра не требуется в соответствии с оценкой `ngDoCheck` .

##### Предупреждение

Прежде чем продолжить, узнайте разницу между содержимым DOM и представлением DOM (DOM обозначает Document Object Model).

Содержимое DOM определяет внутреннийHTML элементов директивы. И наоборот, представление DOM представляет собой шаблон компонента, исключая любой шаблон HTML, вложенный в директиву. Для лучшего понимания обратитесь к [этому сообщению в блоге](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders) .

#### ngAfterContentInit

`ngAfterContentInit` запускается после того, как содержимое компонента DOM инициализируется (загружается в первый раз). Ожидание `@ContentChild(ren)` является основным вариантом использования крюка.

`@ContentChild(ren)` ссылки на элементы для содержимого DOM. Таким образом, они недоступны до тех пор, пока не загрузится содержимое DOM. Следовательно, используется `ngAfterContentInit` и его аналог `ngAfterContentChecked` .

```typescript
import { Component, ContentChild, AfterContentInit, ElementRef, Renderer2 } from '@angular/core'; 
 
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
```

`@ContentChild` запроса `@ContentChild` доступны из `ngAfterContentInit` . `Renderer2` обновляет содержимое DOM из BComponent, содержащего тег `h3` и CComponent. Это распространенный пример [проекции контента](https://alligator.io/angular/content-projection-angular) .

**Реферат:** рендеринг начинается с AComponent. Для его завершения AComponent должен отображать BComponent. Содержимое BComponent проектов вложено в свой элемент через элемент `<ng-content></ng-content>` . CComponent является частью прогнозируемого контента. Проецируемый контент завершает рендеринг. `ngAfterContentInit` срабатывает. BComponent завершает рендеринг. AComponent завершает рендеринг. `ngAfterContentInit` не будет `ngAfterContentInit` снова.

#### ngAfterContentChecked

`ngAfterContentChecked` срабатывает после каждого цикла обнаружения изменений, нацеленного на контент DOM. Это позволяет разработчикам облегчить реакцию DOM контента на изменение обнаружения. `ngAfterContentChecked` может часто срабатывать и вызывать проблемы с производительностью, если они плохо реализованы.

`ngAfterContentChecked` срабатывает во время стадий инициализации компонента. Он появляется сразу после `ngAfterContentInit` .

```typescript
import { Component, ContentChild, AfterContentChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
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
```

Это вряд ли отличается от `ngAfterContentInit` . В BComponent добавлена ​​простая `<button></button>` . Нажатие на нее вызывает цикл обнаружения изменений. Это активирует крючок, как указано рандомизацией `background-color` .

**Реферат:** рендеринг начинается с AComponent. Для его завершения AComponent должен отображать BComponent. Содержимое BComponent проектов вложено в свой элемент через элемент `<ng-content></ng-content>` . CComponent является частью прогнозируемого контента. Проецируемый контент завершает рендеринг. `ngAfterContentChecked` пожары. BComponent завершает рендеринг. AComponent завершает рендеринг. `ngAfterContentChecked` может снова срабатывать при обнаружении изменений.

#### ngAfterViewInit

`ngAfterViewInit` запускается один раз после просмотра DOM завершает инициализацию. Представление всегда загружается сразу после содержимого. `ngAfterViewInit` ждет `@ViewChild(ren)` для разрешения. Эти элементы запрашиваются из одного и того же представления компонента.

В приведенном ниже примере запрашивается заголовок `h3` BComponent. `ngAfterViewInit` выполняется, как только результаты запроса доступны.

```typescript
import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core'; 
 
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
```

`Renderer2` изменяет цвет фона заголовка BComponent. Это указывает, что элемент вида был успешно запрошен благодаря `ngAfterViewInit` .

**Реферат:** рендеринг начинается с AComponent. Для его завершения AComponent должен отображать BComponent. Содержимое BComponent проектов вложено в свой элемент через элемент `<ng-content></ng-content>` . CComponent является частью прогнозируемого контента. Проецируемый контент завершает рендеринг. BComponent завершает рендеринг. `ngAfterViewInit` срабатывает. AComponent завершает рендеринг. `ngAfterViewInit` не будет `ngAfterViewInit` снова.

#### ngAfterViewChecked

`ngAfterViewChecked` срабатывает после любого цикла обнаружения изменений, ориентированного на представление компонента. Крючок `ngAfterViewChecked` позволяет разработчикам облегчать, как обнаружение изменений влияет на представление DOM.

```typescript
import { Component, ViewChild, AfterViewChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
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
```

**Реферат:** рендеринг начинается с AComponent. Для его завершения AComponent должен отображать BComponent. Содержимое BComponent проектов вложено в свой элемент через элемент `<ng-content></ng-content>` . CComponent является частью прогнозируемого контента. Проецируемый контент завершает рендеринг. BComponent завершает рендеринг. `ngAfterViewChecked` срабатывает. AComponent завершает рендеринг. `ngAfterViewChecked` может снова срабатывать при обнаружении изменений.

Нажатие `<button></button>` инициирует раунд обнаружения изменений. `ngAfterContentChecked` запускает и рандомизирует `background-color` запрошенных элементов, каждый щелчок кнопки.

#### ngOnDestroy

`ngOnDestroy` срабатывает при удалении компонента из представления и последующей DOM. Этот крючок дает возможность очистить любые свободные концы перед удалением компонента.

```typescript
import { Directive, Component, OnDestroy } from '@angular/core'; 
 
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
```

**Описание:** нажата кнопка. Элемент `destroy` элемента ExampleComponent переключает false. Структурная директива `*ngIf` принимает значение false. `ngOnDestroy` пожары. `*ngIf` удаляет свой хост `<p></p>` . Этот процесс повторяется любое количество раз, нажимая кнопку, чтобы переключить `destroy` на false.

#### Вывод

Помните, что для каждого крючка должны выполняться определенные условия. Они всегда будут выполняться по порядку друг друга независимо. Это делает крючки достаточно предсказуемыми для работы, даже если некоторые из них не выполняются.

С помощью крючков жизненного цикла выбор времени выполнения класса легко. Они позволяют разработчикам отслеживать, где происходит обнаружение изменений, и как приложение должно реагировать. Они останавливаются для кода, который требует зависимостей от нагрузки, доступных только после некоторого времени.

Жизненный цикл компонента характеризует современные интерфейсные рамки. Угловая закладывает свой жизненный цикл, предоставляя вышеупомянутые крючки.

## источники

*   [Угловая команда. «Зажимы жизненного цикла». _Google_ . Доступ к 2 июня 2018 года](https://angular.io/guide/lifecycle-hooks)
*   [Гечев, Минько. Msgstr "Просмотр дочерних элементов и ContentChildren in Angular". Доступ к 2 июня 2018 года](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders)

## Ресурсы

*   [Угловая документация](https://angular.io/docs)
*   [Угловой репозиторий GitHub](https://github.com/angular/angular)
*   [Зажимы жизненного цикла в глубине](https://angular.io/guide/lifecycle-hooks)