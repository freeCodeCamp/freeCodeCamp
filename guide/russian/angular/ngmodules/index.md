---
title: NgModules
localeTitle: iModules
---
# NgModules

#### мотивация

Угловые приложения начинаются с корневого NgModule. Угловой управляет зависимостями приложения через свою модульную систему, состоящую из NgModules. Наряду с обычными модулями JavaScript NgModules обеспечивают модульность кода и инкапсуляцию.

Модули также обеспечивают самый высокий уровень организации кода. Каждый NgModule отделяет свой кусок кода от корня. Этот модуль обеспечивает инкапсуляцию сверху вниз для своего кода. Затем весь блок кода может быть экспортирован в любой другой модуль. В этом смысле NgModules действуют как гейткиперы на свои собственные кодовые блоки.

Угловые документальные утилиты принадлежат NgModules, созданным Angular. Нет утилиты, если только NgModule, объявляющий ее, не будет включен в корневой каталог. Эти утилиты также должны экспортировать из своего хост-модуля, чтобы импортеры могли их использовать. Эта форма инкапсуляции дает разработчику возможность создавать собственные NgModules в одной файловой системе.

Кроме того, имеет смысл знать, почему Angular CLI (интерфейс командной строки) импортирует `BrowserModule` из `@angular/core` . Это происходит всякий раз, когда новое приложение генерирует команду CLI: `ng new [name-of-app]` .

В большинстве случаев достаточно понимания точки реализации. Однако понимание того, как реализация прокладывает себе путь к корню, еще лучше. Все это происходит автоматически, импортируя `BrowserModule` в корневой каталог.

#### NgModule Decorator

Angular определяет свои модули, украшая общий класс. Декоратор `@NgModule` указывает модульную цель класса на угловую. Класс NgModule консолидирует зависимости от корневых зависимостей, доступные / реализуемые из области действия модуля. «Scope» означает все, что происходит из метаданных модуля.

```typescript
import { NgModule } from '@angular/core'; 
 
 @NgModule({ 
  // … metadata … 
 }) 
 export class AppModule { } 
```

#### Метаданные NgModule

Сгенерированный CLI корневой NgModule включает следующие поля метаданных. Эти поля предоставляют конфигурацию кодовому блоку, на котором председательствует NgModule.

*   `declarations: []`
*   `imports: []`
*   `providers: []`
*   `bootstrap: []`

##### Объявления

Массив объявлений включает все компоненты, директивы или каналы, размещенные в NgModule. Они являются частными для модуля, если явно не экспортируются внутри его метаданных. Учитывая этот прецедент, компоненты, директивы и трубы называются «декларативными». NgModule должен объявлять декларацию однозначно. Декларируемый не может объявить дважды в отдельных NgModules. В противном случае возникает ошибка. См. Приведенный ниже пример.

```typescript
import { NgModule } from '@angular/core'; 
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
```

Угловая ошибка для инкапсуляции NgModule. Declarables являются частными для NgModule, которые объявляют их по умолчанию. Если несколько NgModules нуждаются в определенной декларации, им следует импортировать объявляющий NgModule. Этот NgModule должен затем экспортировать желаемую декларабельность, чтобы другие NgModules могли ее использовать.

```typescript
import { NgModule } from '@angular/core'; 
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
```

Вышеприведенный пример не приведет к ошибке. TwoComponent был однозначно объявлен между двумя NgModules. OneModule также имеет доступ к TwoComponent, поскольку он импортирует TwoModule. TwoModule, в свою очередь, экспортирует TwoComponent для внешнего использования.

##### импорт

Массив импорта принимает только NgModules. Этот массив не принимает декларации, службы или что-то еще, кроме других NgModules. Импорт модуля обеспечивает доступ к декларируемому модулю.

Это объясняет, почему импорт `BrowserModule` обеспечивает доступ к его различным утилитам. Каждая декларируемая утилита, объявленная в `BrowserModule` экспортирует из своих метаданных. При импорте `BrowserModule` экспортируемые декларации становятся доступными для импортирующего NgModule. Услуги вообще не экспортируются, так как они не имеют такой же инкапсуляции.

##### Провайдеры

Отсутствие инкапсуляции обслуживания может показаться странным с учетом инкапсуляции деклараций. Помните, что службы попадают в массив поставщиков отдельно от деклараций или экспорта.

Когда Angular компилирует, он выравнивает корневой NgModule и его импорт в один модуль. Службы объединяются в единый массив поставщиков, размещенный объединенным NgModule. Декларации поддерживают их инкапсуляцию через набор флагов времени компиляции.

Если поставщики NgModule содержат соответствующие значения токена, приоритет имеет корневой модуль импорта. В прошлом, последний импортированный NgModule имеет приоритет. См. Следующий пример. Обратите особое внимание на NgModule, импортирующий два других. Признайте, как это влияет на приоритет предоставляемой услуги.

```typescript
import { NgModule } from '@angular/core'; 
 
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
```

Создание экземпляра AwesomeService из области AModule приводит к экземпляру AwesomeService, как это предусмотрено в метаданных AModule. Если провайдеры AModule пропустили эту услугу, приоритет будет иметь AwesomeService of CModule. Итак, и так далее для BModule, если провайдеры CModule пропустили AwesomeService.

##### начальная загрузка

Массив bootstrap принимает компоненты. Для каждого компонента массива Angular вставляет компонент как свой собственный корень файла `index.html` . Созданный CLI корневой NgModule приложения всегда будет иметь это поле.

```typescript
import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 
 @NgModule({ 
  declarations: [ AppComponent ], 
  imports: [ BrowserModule ], 
  providers: [], 
  bootstrap: [ AppComponent ] 
 }) 
 export class AppModule { } 
```

Элемент AppComponent будет вводить в HTML-код базового уровня приложения ( `index.html` ). Остальная часть дерева компонентов разворачивается оттуда. Объем всеобъемлющего NgModule охватывает все это дерево плюс любые другие, введенные из массива bootstrap. Массив обычно содержит только один элемент. Этот один компонент представляет модуль как единый элемент и его базовое дерево.

#### NgModules против модулей JavaScript

Вы видели модули Angular и JavaScript, работающие вместе в предыдущих примерах. Самые первые `import..from` заявления из системы составляют модульную систему JavaScript. Расположение файлов для каждого оператора должно экспортировать класс, переменную или функцию, соответствующие запросу. `import { TARGET } from './path/to/exported/target'` .

В JavaScript модули разделяются файлами. Импорт файлов с использованием импорта `import..from` ключевых слов, как только что упоминалось. С другой стороны, NgModules разделены по классам и декорируются с помощью `@NgModule` . И поэтому многие модули Angular могут существовать в одном файле. Это не может случиться с JavaScript, поскольку файл определяет модуль.

Конечно, соглашения говорят, что каждый `@NgModule` украшенный `@NgModule` должен иметь свой собственный файл. Тем не менее, знайте, что файлы не составляют свои собственные модули в Angular. Классы, украшенные `@NgModule` создают это различие.

Модули JavaScript предоставляют ссылки на `@NgModule` метаданных `@NgModule` . Это происходит в верхней части файла, на котором размещен класс NgModule. NgModule использует эти токены внутри своих полей метаданных (декларации, импорт, поставщики и т. Д.). Единственная причина, по которой `@NgModule` может украсить класс, в первую очередь потому, что JavaScript импортирует его из верхней части файла.

```typescript
// JavaScript module system provides tokens 
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
```

Приведенный выше пример не представляет ничего нового. Здесь основное внимание уделяется комментариям, объясняющим, как две модульные системы работают вместе. JavaScript предоставляет ссылки на токены, в то время как NgModule использует этот токен для инкапсуляции и настройки своего базового блока кода.

#### Функциональные модули

Приложения растут сверхурочно. Для их правильного масштабирования требуется организация приложений. Прочная система для этого значительно облегчит дальнейшее развитие.

В «Угловом», схемы обеспечивают целенаправленные разделы кода, которые остаются различимыми. Помимо схем sub-NgModule, существуют сами NgModules. Они также являются схематическими. Они стоят выше остальных в списке схем, за исключением самого приложения.

Корневой модуль не должен стоять отдельно, когда приложение начинает масштабироваться. Функциональные модули включают в себя любой NgModule, используемый вместе с корневым NgModule. Вы можете думать о корневом модуле как о `bootstrap: []` поле `bootstrap: []` метаданных. Приложение-функция гарантирует, что корневой модуль не перенасыщает свои метаданные.

Функциональные модули изолируют раздел кода от имени любого модуля импорта. Они могут обрабатывать целые секции приложений независимо. Это означает, что он может использоваться в любом приложении, корневой модуль которого импортирует модуль функций. Эта тактика экономит время и усилия разработчиков в течение нескольких приложений! Он также поддерживает корневую среду NgModule приложения.

В корневом NgModule приложения добавление маркера модуля функции в массив `imports` корня делает трюк. Независимо от того, какой модуль или экспорт функционального модуля становится доступным для корня.

```typescript
// ./awesome.module.ts 
 
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
```

```typescript
// ./app.module.ts 
 
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
```

```typescript
// ./app.component.ts 
 
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
```

`<app-awesome></app-awesome>` (компонент), `awesome` (pipe) и `appAwesome` (директива) являются исключительными для AwesomeModule. Если бы он не экспортировал эти декларации или AppModule не учитывал добавление AwesomeModule к импорту, тогда декларации AwesomeModule не могли бы использоваться шаблоном AppComponent. AwesomeModule - это функциональный модуль для корневого модуля NgModule AppModule.

Угловой предоставляет некоторые собственные модули, которые дополняют корень при импорте. Это связано с тем, что эти функциональные модули экспортируют то, что они создают.

#### Методы статического модуля

Иногда модули предоставляют возможность настройки с помощью настраиваемого объекта конфигурации. Это достигается за счет использования статических методов внутри класса модуля.

Примером такого подхода является `RoutingModule` который предоставляет `.forRoot(...)` непосредственно в модуле.

Чтобы определить свой собственный метод статического модуля, вы добавляете его в класс модуля, используя ключевое слово `static` . Тип возврата должен быть `ModuleWithProviders` .

```ts
// configureable.module.ts 
 
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
```

```ts
// configureable.service.ts 
 
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
```

Обратите внимание, что объект, возвращаемый методом `forRoot(...)` , почти идентичен конфигурации `NgModule` .

Метод `forRoot(...)` принимает настраиваемый объект конфигурации, который пользователь может предоставить при импорте модуля.

```ts
imports: [ 
  ... 
  ConfigureableModule.forRoot({ url: 'http://localhost' }), 
  ... 
 ] 
```

Конфигурация затем предоставляется с использованием пользовательского `InjectionToken` называемого `CUSTOM_CONFIG_TOKEN` и вводится в `ConfigureableService` . `ConfigureableModule` должен быть импортирован только один раз с помощью `forRoot(...)` . Это обеспечивает `CUSTOM_CONFIG_TOKEN` с настраиваемой конфигурацией. Все остальные модули должны импортировать `ConfigureableModule` без `forRoot(...)` .

#### Примеры NgModule из углового

Угловая предоставляет различные модули, импортируемые из `@angular` . Два из наиболее часто импортируемых модулей - `CommonModule` и `HttpClientModule` .

`CommonModule` на самом деле является подмножеством `BrowserModule` . Оба обеспечивают доступ к структурным директивам `*ngIf` и `*ngFor` . `BrowserModule` включает специфичную для платформы установку для веб-браузера. `CommonModule` эту установку. Модуль `BrowserModule` должен импортировать в корневой NgModule веб-приложения. `CommonModule` предоставляет функции `*ngIf` и `*ngFor` для установки модулей, не требующих установки платформы.

`HttpClientModule` предоставляет службу `HttpClient` . Помните, что службы `@NgModule` массив `@NgModule` метаданных `@NgModule` . Они не декларируемы. Во время компиляции каждый NgModule объединяется в один модуль. Услуги не инкапсулированы, в отличие от деклараций. Все они реализуются через корневой инжектор, расположенный рядом с объединенным NgModule.

Вернемся к делу. Как и любая другая служба, `HttpClient` запускается в класс через свой конструктор через инъекцию зависимостей (DI). Используя DI, инжектор корня вводит экземпляр `HttpClient` в конструктор. Эта служба позволяет разработчикам создавать HTTP-запросы с реализацией службы.

Реализация `HttpClient` включает в себя `HttpClientModule` поставщиков `HttpClientModule` . Пока корневой NgModule импортирует `HttpClientModule` , `HttpClient` будет инстанцироваться изнутри области корня, как ожидалось.

#### Вывод

Скорее всего, вы, возможно, уже воспользовались Angle's NgModules. Угловой способ очень легко бросать модуль в массив импорта NgModule. Утилиты часто экспортируются из метаданных импортированного модуля. Отсюда почему его утилиты внезапно становятся доступными при импорте в корневой NgModule.

NgModules тесно взаимодействуют с модулями JavaScript. Один обеспечивает токен, пока он используется для настройки. Их совместная работа приводит к созданию надежной модульной системы, уникальной для Угловой структуры. Он обеспечивает новый уровень организации, помимо всех других схем, исключая приложение.

Надеюсь, эта статья поможет вам понять NgModules. Угловые могут использовать эту систему еще больше для некоторых более экзотических вариантов использования. В этой статье описываются основы, чтобы вы могли больше узнать, используя приведенные ниже ссылки.

## источники

*   [Угловая команда. «NgModules». _Google_ . Доступ к 6 июня 2018 года.](https://angular.io/guide/ngmodules)
*   [Корецкий, Максим. «Избегайте общих путаниц с модулями в угловом». _Угловая глубина_ , 10 августа 2017. Доступ к 6 июня 2018 года.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## Ресурсы

*   [Угловая документация](https://angular.io/guide)
*   [Угловая глубина](https://blog.angularindepth.com)
*   [Угловой репозиторий GitHub](https://github.com/angular/angular)
*   [Угловая CLI](https://cli.angular.io)