---
title: Directives
localeTitle: Директивы
---
# Директивы

#### мотивация

Директивы являются основными для HTML-шаблона Angular. Наиболее значимым примером являются компоненты. Каждый вид компонента отображается ниже представления корневого компонента. Это может привести к созданию дерева представлений, определяющих одно приложение. Представление представляет собой класс ( `component.ts` ) и его шаблон ( `component.html` ).

Другие директивы, хотя и не столь важные, обеспечивают необходимую гибкость. Директива, расположенная на элементе, имеет полный контроль над ней. Использование `<ng-template></ng-template>` позволяет динамическое создание и удаление содержимого HTML. Microsyntax предоставляет разработчикам свободу дальнейшей настройки директивного поведения.

#### Директива

Директивы - это элементы и атрибуты компонентов, созданные и распознанные Angular. Угловое связывает элемент или атрибут с соответствующим определением класса. `@Directive` или `@Component` украшают эти классы. Оба индикатора указывают на Угловое, что класс выполняет в качестве директивы.

Некоторые директивы изменяют стиль элемента хоста. Другие директивы отображают представления или вставляют в существующие, как встроенные представления. Другими словами, они изменяют макет HTML.

В любом случае, директивы сигнализируют угловой компилятор. Они отмечают компоненты для модификации в зависимости от логики класса директивы.

#### Директива по компонентам

Директивы компонентов принципиально отличаются от других типов директив. Их обычно называют компонентами. Они образуют собственный уникальный тег HTML. Для каждого компонента существует некоторое количество HTML-шаблонов. Это не похоже на две другие директивы. Их классы - это чистая логика, работающая над тем, что предопределено в шаблоне HTML.

#### Создание компонентов

Создайте компонент с компонентом `ng generate component [name-of-component]` ; замените `[name-of-component]` на предпочтительное имя. Команда дает четыре разных файла, все они относятся к одному компоненту.

Компоненты `component.css` и `component.spec.ts` выходят за рамки данной статьи. В _директивном_ аспекте компонента участвуют два других файла. Взгляните на сгенерированные `component.ts` и `component.html` .

```typescript
// example.component.ts 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent { 
  constructor() { } 
 } 
```

Несколько нерелевантных деталей были вырезаны из поколения по умолчанию `component.ts` . Таким образом, основное внимание уделяется самому компоненту.

```html

<!-- example.component.html --> 
 
 <p>example works!</p> 
```

Вставка ExampleComponent в качестве дочернего элемента другого компонента будет выглядеть следующим образом.

```html

<!-- another.component.html --> 
 
 <h1>Welcome to AnotherComponent.</h1> 
 <h3>Check out ExampleComponent!</h3> 
 
 <!-- Outputs “<p>example works!</p>” --> 
 <app-example></app-example> 
 
 <h6>This is the end of the AnotherComponent template HTML.</h6> 
```

Обратите внимание на `<app-example></app-example>` . `app-example` совпадает с селектором из декоратора @Component от `@Component` . Это директива компонента. Угловой распознает `app-example` и _направляет_ его визуализацию в класс ExampleComponent.

#### Структурная директива

Подумайте о том, являются `if` утверждения, `for` циклов и операторов `switch` в логике программирования. Эти логические конструкции определяют выполнение кода. Будет ли выполняться код ( `if` ), сколько раз он будет выполняться ( `for` ) и какой блок кода выполняется ( `switch` ).

Этот шаблон продолжает структурные директивы. Они определяют полученную структуру HTML шаблона. Они всегда связаны с использованием `ng-template` под капотом. `ng-template` предоставляет механизм для создания условно визуализированного HTML.

Вот три примера структурных директив. Каждый из них имеет логический аналог ( `if` , `for` , и `switch` ).

*   \* ngIf
    
*   \* ngFor
    
*   \* ngSwitchCase и \* ngSwitchDefault
    

**Важное примечание:** все три доступны через импорт `CommonModule` . Он доступен из `@angular/common` для импорта в корневом модуле приложения.

##### \* ngIf

`*ngIf` проверяет заданное значение, чтобы проверить, является ли оно _правдивым_ или _ложным,_ основываясь на общей логической оценке в JavaScript. Если правдоподобно, появляется элемент и его innerHTML. В противном случае они никогда не будут отображаться в объектной модели домена (DOM).

```html

<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngIf="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *ngIf="false"> 
  <h1>Hi!</h1> 
 </div> 
```

Это надуманный пример. Любое значение участника из класса компонента шаблона может быть заменено на `true` или `false` .

ПРИМЕЧАНИЕ. Вы также можете сделать следующее: \* ngIf, чтобы получить доступ к значению observalbe

```html

<div *ngIf="observable$ | async as anyNameYouWant"> 
  {{  anyNameYouWant }} 
 </div> 
```

##### \* ngFor

`*ngFor` петли основаны на назначении с правой стороны, _микросинтактическом_ выражении. Микросинтакс выходит за рамки этой статьи. Знайте, что микросинтакс - это короткая форма логического выражения. Это происходит как одна строка, способная ссылаться на значения членов класса. Он может создавать повторяющиеся значения, что делает его полезным для `*ngFor` .

```html

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
```

`['Russet', 'Sweet', 'Laura']` является итерируемой величиной. Массивы являются одним из наиболее распространенных итераций. `*ngFor` выдает новый элемент `<li></li>` каждого элемента массива. Каждому элементу массива присваивается переменная `potato` . Все это делается с использованием микросинтекса. `*ngFor` определяет структурное содержание элемента `ul` . Это характерно для структурной директивы.

ПРИМЕЧАНИЕ. Вы также можете выполнить следующие действия с директивой \* ngFor, чтобы получить доступ к значению observalbe (хакерский)

```html

<div *ngFor="let anyNameYouWant of [(observable$ | async)]"> 
  {{  anyNameYouWant }} 
 </div> 
```

##### \* ngSwitchCase и \* ngSwitchDefault

Эти две структурные директивы работают вместе, чтобы обеспечить функциональность `switch` для шаблона HTML.

```html

<div [ngSwitch]=“potato”> 
  <h1 *ngSwitchCase=“'Russet'”>{{ potato }} is a Russet Potato.</h1> 
  <h1 *ngSwitchCase=“'Sweet'”>{{ potato }} is a Sweet Potato.</h1> 
  <h1 *ngSwitchCase=“'Laura'”>{{ potato }} is a Laura Potato.</h1> 
  <h1 *ngSwitchDefault>{{ potato }} is not a Russet, Sweet, nor Laura Potato.</h1> 
 </div> 
```

Отображается только одно из выражений `*ngSwitch…` Обратите внимание на `[ngSwitch]` внутри элемента `div` переносит коммутатор. Это передает значение `potato` по `*ngSwitch...` Эта цепочка структурных директив определяет, какой элемент `h1` отображает.

Таким образом, `[ngSwitch]` не является структурной директивой, в отличие от `*ngSwitch…` Он передает значение, тогда как блок переключателя определяет окончательный формат HTML.

Помните, что стилизация и передача ценности не являются обязанностью структурных директив. Это касается директив атрибутов. Структурные директивы определяют только макет.

#### Создание структурной директивы [1](https://angular.io/guide/structural-directives)

В предыдущих примерах есть что-то важное. Все они обозначены звездочкой ( `*` ). `ng-template` используется под капотом при каждом применении звездочки.

`ng-template` определяет структурные директивы. В нем объясняется, как настроить HTML-шаблон для создания фактического HTML. Начните с создания директивы с директивой `ng generate directive [name-of-directive]` . Замените `[name-of-directive]` с предпочтительным именем. Команда дает следующее.

```typescript
import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
```

Этот директивный скелет довольно голый. Он еще не знает, строим ли мы конструктивную или атрибутивную директиву. `selector: '[appExample]'` сообщает Angular о том, к какому атрибуту относится карта. Поскольку вы создаете структурную директиву, измените скелет следующим образом.

```typescript
Import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'; 
 
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
```

Хорошим примером является включение произвольного элемента с атрибутом `appExample` .

```html

<div *appExample=“value”>innerHTML content</div> 
 <!-- This is shorthand for: 
 <ng-template> 
  <div>innerHTML content</div> 
 </ng-template> 
 --> 
```

Это очень много. `@Input() set ...` является объявлением члена setter. Он выполняется всякий раз, когда атрибут `appExample` появляется внутри элемента и ему присваивается логическое значение. Функция setter получает это логическое значение в качестве своего параметра для выполнения.

`TemplateRef<any>` ссылается на innerHTML `<ng-template></ng-template>` . Звездочка, используемая в предыдущих примерах, является сокращением комментария в вышеуказанном блоке кода. `ng-template` действует как _секретный соус_ для его структурных директив.

`ViewContainerRef` ссылается на область инкапсуляции `<ng-template></ng-template>` . `ng-template` не является фактическим элементом. Это маркер для компилятора Angular, который в итоге получает комментарии.

`ViewContainerRef` имеет два метода: `clear()` и `createEmbeddedView()` . Вы можете думать о встроенных представлениях как о HTML, помещенных в элемент `ng-template` .

`clear()` удаляет все существующие HTML-области в пределах `ng-template` с HTML-дисплея. `createEmbeddedView()` нацелен на HTML внутри `ng-template` как отображаемый HTML.

Если вы понимаете последний пример кода, то у вас есть `*ngIf` понимание `*ngIf` , `*ngFor` , `*ngSwitchCase` и `*ngSwitchDefault` . Все они определяют макет со ссылкой на `TemplateRef<any>` и `ViewContainerRef` .

Фактически, ExampleDirective выше имитирует функциональность `*ngIf` !

```html

<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngExample="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *appExample="false"> 
  <h1>Hi!</h1> 
 </div> 
```

Никогда не забывайте звездочку ( `*` ). Это стенограмма элемента `ng-template` который ссылается на наш класс директив.

#### Директива по атрибутам

Директивы атрибутов похожи на структурные. Кроме того, директивы атрибутов имеют нулевой эффект на макете HTML. Они не реализуют `<ng-template></ng-template>` . Это атрибуты, которые ссылаются на свой элемент хоста для стилистических изменений.

Пример лучше всего объясняет их цель.

#### Создание директивы атрибутов [2](https://angular.io/guide/attribute-directives)

Создайте еще одну директиву: `ng generate directive [name-of-directive]` . Замените `[name-of-directive]` с предпочтительным именем.

```typescript
import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
```

Атрибуты и структурные директивы начинаются с того же скелета. Еще несколько дополнений будут отличаться от директивы атрибута.

```typescript
import { Directive, Input, ElementRef } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  @Input() set appExample(color:string) { 
      this.host.nativeElement.style.color = color; 
  } 
 
  constructor(private host:ElementRef) { } 
 } 
```

Несколько элементов для тестирования помогут.

```html

<!-- the intended results are self-explanatory --> 
 <div appExample=“purple”>This text is purple!</div> 
 <div appExample=“blue”>This text is blue!</div> 
 <div appExample=“red”>This text is red!</div> 
```

`ElementRef` предоставляет прямую ссылку на элемент хоста. `ElementRef.nativeElement` захватывает узел DOM. С узлом, `this.host.nativeElement.style.color = color` компонента так же проста, как `this.host.nativeElement.style.color = color` .

`@Input() set ...` - это еще одна функция setter, которая считывает значение, которое она назначается при ее реализации как атрибут. Он переназначает свойство цвета таблицы стилей каждого элемента.

#### Вывод

Директивы - это мощный инструмент, доступный в HTML-шаблоне Angular. Это то, как компоненты соединяются друг с другом. Внутри каждого компонента они обеспечивают средство стиля и макета.

Существует много других вариантов построения каждого типа директивы. К сожалению, для каждого из них слишком много для одной статьи. Достаточно простого понимания директив, чтобы продвигаться вперед с более продвинутыми ресурсами.

Проверьте нижние ресурсы, чтобы погрузиться глубже. Существуют ссылки для каждого типа директивы. Каждая ссылка является частью той же документации, поэтому нет необходимости возвращаться сюда после посещения первой ссылки!

## источники

1.  [Угловая команда. _Структурные директивы_ . Google. Доступ к 28 мая 2018 года](https://angular.io/guide/structural-directives)
    
2.  [Угловая команда. _Директивы атрибутов_ . Google. Доступ к 28 мая 2018 года](https://angular.io/guide/attribute-directives)
    

## Ресурсы

*   [Угловая документация](https://angular.io/guide/pipes)
    
*   [Угловой репозиторий GitHub](https://github.com/angular/angular)
    
*   [Угловые компоненты](https://angular.io/guide/architecture-components)
    
*   [Угловые структурные директивы](https://angular.io/guide/structural-directives)
    
*   [Угловые атрибуты](https://angular.io/guide/attribute-directives)
    
*   [Угловая CLI](https://cli.angular.io)