---
title: NgModules
localeTitle: iModules
---
# NgModules

#### 动机

角度应用程序从根NgModule开始。 Angular通过其由NgModules组成的模块系统来管理应用程序的依赖关系。除了普通的JavaScript模块，NgModules还可确保代码模块化和封装。

模块还提供最高级别的组织代码。每个NgModule都以自己的代码块为根。该模块为其代码提供从上到下的封装。然后，整个代码块可以导出到任何其他模块。从这个意义上说，NgModules就像守门员一样对待自己的代码块。

Angular的文档实用程序来自Angular编写的NgModules。除非声明它的NgModule包含在根中，否则没有可用的实用程序。这些实用程序还必须从其主机模块导出，以便导入程序可以使用它们。这种封装形式使开发人员能够在同一文件系统中生成自己的NgModule。

另外，了解为什么Angular CLI（命令行界面）从`@angular/core`导入`BrowserModule`是有意义的。只要使用CLI命令生成新应用程序，就会发生这种情况： `ng new [name-of-app]` 。

在大多数情况下，理解实施的点可能就足够了。但是，了解实现如何将自身连接到根目录甚至更好。这一切都是通过将`BrowserModule`导入根目录而自动完成的。

#### NgModule装饰器

Angular通过修饰泛型类来定义其模块。 `@NgModule`装饰器指示类对Angular的模块化目的。 NgModule类合并了可从模块范围访问/实例化的根依赖项。 “范围”表示源自模块元数据的任何内容。

```typescript
import { NgModule } from '@angular/core'; 
 
 @NgModule({ 
  // … metadata … 
 }) 
 export class AppModule { } 
```

#### NgModule元数据

CLI生成的根NgModule包括以下元数据字段。这些字段为NgModule主持的代码块提供配置。

*   `declarations: []`
*   `imports: []`
*   `providers: []`
*   `bootstrap: []`

##### 声明

声明数组包括由NgModule托管的所有组件，指令或管道。除非在元数据中明确导出，否则它们对模块是私有的。鉴于此用例，组件，指令和管道被昵称为“声明”。 NgModule必须声明一个唯一的声明。声明不能在单独的NgModules中声明两次。否则会抛出错误。请参阅以下示例。

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

Angular为了NgModule封装而抛出一个错误。声明是NgModule的私有，默认情况下声明它们。如果多个NgModule需要某个可声明的，它们应该导入声明的NgModule。然后，此NgModule必须导出所需的声明，以便其他NgModule可以使用它。

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

上面的例子不会抛出错误。 TwoComponent已在两个NgModules之间唯一声明。 OneModule也可以访问TwoComponent，因为它导入了TwoModule。 TwoModule依次导出TwoComponent供外部使用。

##### 进口

imports数组只接受NgModules。除了其他NgModules之外，此数组不接受声明，服务或其他任何内容。导入模块可以访问模块公布的可声明内容。

这解释了为什么导入`BrowserModule`可以访问其各种实用程序。 `BrowserModule`声明的每个可声明实用程序都从其元数据导出。导入`BrowserModule` ，导出的NgModule可以使用这些导出的声明。服务根本不导出，因为它们缺少相同的封装。

##### 供应商

考虑到声明的封装，缺乏服务封装可能看起来很奇怪。请记住，服务与声明或导出分开，与提供者数组分开。

当Angular编译时，它会使根NgModule变平并将其导入到一个模块中。服务组合在一起由合并的NgModule托管的单个提供者阵列中。声明通过一组编译时标志来维护它们的封装。

如果NgModule提供程序包含匹配的标记值，则导入的根模块优先。过去，导入的最后一个NgModule优先。请参阅下一个示例。特别注意导入另外两个的NgModule。识别这会如何影响所提供服务的优先级。

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

从AModule的范围内实例化AwesomeService会产生AModule元数据中提供的AwesomeService实例。如果AModule的提供者省略了这项服务，那么CModule的AwesomeService将优先。如果CModule的提供者省略了AwesomeService，那么对于BModule来说等等。

##### 引导

引导程序阵列接受组件。对于Array的每个组件，Angular将组件作为其自己的`index.html`文件的根插入。 CLI生成的应用程序的根NgModule将始终具有此字段。

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

AppComponent的元素将注入应用程序的基本HTML（ `index.html` ）。组件树的其余部分从那里展开。总体NgModule的范围涵盖整个树以及从引导程序阵列注入的任何其他树。该数组通常只包含一个元素。这个组件将模块表示为单个元素及其底层树。

#### NgModules与JavaScript模块

您已经在前面的示例中看到过Angular和JavaScript模块一起工作。最顶层的`import..from`语句构成了JavaScript模块系统。每个语句的目标的文件位置必须导出与请求匹配的类，变量或函数。 `import { TARGET } from './path/to/exported/target'` 。

在JavaScript中，模块是文件分隔的。如前所述，使用`import..from`关键字导入文件。另一方面，NgModules是类分隔的，并用`@NgModule` 。因此，许多Angular模块可以存在于单个文件中。 JavaScript不会发生这种情况，因为文件定义了一个模块。

约定，惯例说每个`@NgModule`装饰类应该有自己的文件。即便如此，要知道文件在Angular中不构成自己的模块。用`@NgModule`类创建了这种区别。

JavaScript模块提供对`@NgModule`元数据的标记引用。这发生在托管NgModule类的文件的顶部。 NgModule在其元数据字段（声明，导入，提供程序等）中使用这些标记。 `@NgModule`可以装饰一个类的唯一原因是JavaScript从文件的顶部导入它。

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

上面的例子没有介绍任何新内容。这里的重点是解释两个模块化系统如何协同工作的评论。 JavaScript提供令牌引用，而NgModule使用这些令牌来封装和配置其底层代码块。

#### 功能模块

应用程序增长超时。适当地扩展它们需要应用程序组织。一个坚实的系统将使进一步发展更容易。

在Angular中，原理图确保目标驱动的代码段保持可区分。除了子NgModule原理图之外，还有NgModules本身。它们也是一种原理图。它们位于原理图列表中的其余部分，不包括应用程序本身。

一旦应用程序开始扩展，根模块就不应该独立存在。功能模块包括与根NgModule一起使用的任何NgModule。您可以将根模块视为具有`bootstrap: []`元数据字段。功能应用程序确保根模块不会过度饱和其元数据。

功能模块代表任何导入模块隔离一段代码。他们可以独立处理整个应用部分。这意味着它可以在根模块导入要素模块的任何应用程序中使用。这种策略可以节省开发人员在多个应用程序中的时间和精力！它还使应用程序的根NgModule保持精简状态。

在应用程序的根NgModule中，将特征模块的标记添加到根的`imports`数组中就可以了。无论功能模块导出或提供的内容都可供根目录使用。

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

`<app-awesome></app-awesome>` （组件）， `awesome` （管道）和`appAwesome` （指令）是AwesomeModule独有的。如果没有导出这些声明或AppModule忽略将AwesomeModule添加到其导入中，则AppComponent的模板将无法使用AwesomeModule的声明。 AwesomeModule是根NgModule AppModule的功能模块。

Angular提供了一些自己的模块，可以在输入时补充root。这是因为这些功能模块导出了他们创建的内容。

#### 静态模块方法

有时，模块提供了使用自定义配置对象配置的选项。这是通过利用模块类中的静态方法实现的。

这种方法的一个示例是`RoutingModule` ，它直接在模块上提供`.forRoot(...)`方法。

要定义自己的静态模块方法，请使用`static`关键字将其添加到模块类。返回类型必须是`ModuleWithProviders` 。

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

请注意， `forRoot(...)`方法返回的对象几乎与`NgModule`配置相同。

`forRoot(...)`方法接受用户在导入模块时可以提供的自定义配置对象。

```ts
imports: [ 
  ... 
  ConfigureableModule.forRoot({ url: 'http://localhost' }), 
  ... 
 ] 
```

然后使用名为`CUSTOM_CONFIG_TOKEN`的自定义`InjectionToken`提供`ConfigureableService`并将其注入`ConfigureableService` 。应使用`forRoot(...)`方法仅导入一次`ConfigureableModule` 。这为`CUSTOM_CONFIG_TOKEN`提供了自定义配置。所有其他模块都应该导入`ConfigureableModule`而不使用`forRoot(...)`方法。

#### 来自Angular的NgModule示例

Angular提供了各种可从`@angular`导入的模块。两个最常导入的模块是`CommonModule`和`HttpClientModule` 。

`CommonModule`实际上是`BrowserModule`一个子集。两者都提供对`*ngIf`和`*ngFor`结构指令的访问。 `BrowserModule`包含Web浏览器的特定于平台的安装。 `CommonModule`省略了此安装。 `BrowserModule`应该导入到Web应用程序的根NgModule中。 `CommonModule`为不需要平台安装的功能模块提供`*ngIf`和`*ngFor` 。

`HttpClientModule`提供`HttpClient`服务。请记住，服务位于`@NgModule`元数据的providers数组中。它们不可申报。在编译期间，每个NgModule都合并到一个模块中。与声明不同，服务不是封装的。它们都可以通过位于合并的NgModule旁边的根注入器实例化。

回到关键点。与任何其他服务一样， `HttpClient`通过依赖注入（DI）通过其构造函数实例化为类。使用DI，根注入器将`HttpClient`的实例注入构造函数。此服务允许开发人员使用服务的实现发出HTTP请求。

`HttpClient`实现包括`HttpClientModule`提供程序数组。只要根NgModule导入`HttpClientModule` ， `HttpClient`就会按照预期从根的范围内实例化。

#### 结论

您可能已经利用了Angular的NgModules。 Angular使得将模块很容易地放入根NgModule的imports数组中。实用程序通常从导入的模块的元数据中导出。因此，为什么它的实用程序在根NgModule中输入后突然变得可用。

NgModules与普通的JavaScript模块紧密配合。一个提供令牌，而一个使用它们进行配置。他们的团队合作产生了Angular框架独有的强大的模块化系统。它提供了一个新的组织层，高于除应用程序之外的所有其他原理图。

希望本文能够进一步加深您对NgModules的理解。对于一些更奇特的用例，Angular可以进一步利用这个系统。本文介绍了基础知识，以便您可以使用以下链接了解更多信息。

## 来源

*   [角度团队。 “NgModules”。 _谷歌_ 2018年6月6日访问。](https://angular.io/guide/ngmodules)
*   [Koretskyi，Maxim。 “避免与Angular模块的常见混淆”。 _Angular In Depth_ ，2017年8月10日。访问时间为2018年6月6日。](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## 资源

*   [角度文档](https://angular.io/guide)
*   [角度深度](https://blog.angularindepth.com)
*   [Angular GitHub存储库](https://github.com/angular/angular)
*   [角度CLI](https://cli.angular.io)