---
title: Dependency Injection
localeTitle: 依赖注入
---
# 依赖注入

#### 动机

依赖注入通常更简单地称为DI。范式存在于整个Angular中。它使代码保持灵活，可测试和可变。类可以在不知道如何创建外部逻辑的情况下继承外部逻辑。这些课程的任何消费者也不需要知道任何事情。

DI使得课程和消费者都不必知道必要的知识。然而，由于在Angular中支持DI的机制，代码与之前的模块一样。

服务是DI的关键恩人。他们依靠范式_注入_各种消费者。然后，那些消费者可以利用该服务在其他地方提供和/或转发。

服务并不孤单。指令，管道，组件等：Angular中的每个原理图都以某种方式从DI中受益。

#### 喷油器

注入器是存储指令的数据结构，详细说明服务的形式。它们充当Angular DI系统中的中间人。

模块，指令和组件类包含特定于注入器的元数据。每个类都附带一个新的注入器实例。通过这种方式，应用程序树可以镜像其注入器的层次结构。

`providers: []`元数据接受服务，然后向类注入器注册。此提供程序字段添加了进样器运行所需的指令。类（假设它具有依赖性）通过将其类作为其数据类型来实例化服务。注入器对齐此类型，代表该类创建该服务的实例。

当然，该类只能实例化注入器具有的指令。如果类'自己的注入器没有注册服务，那么它查询其父服务器。依此类推，直到使用服务或应用程序根达到注入器。

服务可以在应用程序内的任何注射器处注册。服务进入`providers: []`类模块，指令或组件的元数据字段。类'children可以实例化在类'注入器中注册的服务。毕竟儿童注射器后退在父母注射器上。

#### 依赖注入

查看每个类的骨架：服务，模块，指令和组件。

```typescript
// service 
 
 import { Injectable } from '@angular/core'; 
 
 @Injectable({ 
  providedIn: /* injector goes here */ 
 }) 
 export class TemplateService { 
  constructor() { } 
 } 
```

```typescript
// module 
 
 import { NgModule } from '@angular/core'; 
 import { CommonModule } from '@angular/common'; 
 
 @NgModule({ 
  imports: [ 
    CommonModule 
  ], 
  declarations: [], 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateModule { } 
```

```typescript
// directive 
 
 import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appTemplate]', 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateDirective { 
  constructor() { } 
 } 
```

```typescript
//component 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-template', 
  templateUrl: './template.component.html', 
  styleUrls: ['./template.component.css'], 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateComponent { 
  // class logic ... 
 } 
```

每个骨架都可以向注射器注册服务。实际上，TemplateService _是_一种服务。从Angular 6开始，服务现在可以使用`@Injectable`元数据向注入器注册。

##### 在任何情况下

注意`providedIn: string` （ `@Injectable` ）和`providers: []` （ `@Directive` ， `@Componet` `@Module`和`@Module` ）元数据。他们告诉注射器在哪里以及如何创建服务。否则，注射器将不知道如何实例化。

如果服务有依赖性怎么办？结果会在哪里？提供者回答这些问题，以便注射器可以正确实例化。

注射器构成DI框架的主干。它们存储指令以实例化服务，因此消费者不必这样做。他们接收服务实例而无需了解源依赖关系！

我还应该注意，没有喷射器的其他原理图仍然可以利用依赖注入。他们无法注册其他服务，但他们仍然可以从注入器实例化。

##### 服务

`@Injectable`的`providedIn: string`元数据指定要注册的注入器。使用此方法，并且根据服务是否被使用，服务可能会或可能不会注册到注入器。 Angular称这种_树在摇晃_ 。

默认情况下，该值设置为`'root'` 。这转换为应用程序的根注入器。基本上，将字段设置为`'root'`可使服务随处可用。

##### 快速注意

如前所述，儿童注射器会对父母产生影响。这种后备策略可确保父母不必为每个注射器重新注册。有关此概念的说明，请参阅有关[服务和注入器的](https://guide.freecodecamp.org/angular/services-and-injectors)文章。

注册服务是_单身人士_ 。意思是，实例化服务的指令仅存在于一个注入器上。这假设它没有在其他地方明确注册。

##### 模块，指令和组件

每个模块和组件都有自己的注入器实例。鉴于`providers: []`元数据字段，这一点很明显。该字段获取一组服务，并使用模块或组件类的注入器注册它们。这种方法发生在`@NgModule` `@Directive` ， `@Component` `@Directive`或`@Component`装饰器中。

此策略省略了_树形抖动_ ，或者可选择从注入器中删除未使用的服务。服务实例在模块或组件的生命周期中存在于其注入器上。

#### 实例化参考

对DOM的引用可以从任何类实例化。请记住，引用仍然是服务。它们在表示其他东西的状态方面不同于传统服务。这些服务包括与其参考进行交互的功能。

指令一直需要DOM引用。指令通过这些引用对其宿主元素进行突变。请参阅以下示例。该指令的注入器将host元素的引用实例化为类的构造函数。

```typescript
// directives/highlight.directive.ts 
 
 import { Directive, ElementRef, Renderer2, Input } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appHighlight]' 
 }) 
 export class HighlightDirective { 
  constructor( 
    private renderer: Renderer2, 
    private host: ElementRef 
  ) { } 
 
  @Input() set appHighlight (color: string) { 
    this.renderer.setStyle(this.host.nativeElement, 'background-color', color); 
  } 
 } 
```

```html

// app.component.html 
 
 <p [appHighlight]="'yellow'">Highlighted Text!</p> 
```

`Renderer2`也被实例化。这些服务来自哪个注射器？好吧，每个服务的源代码都来自`@angular/core` 。然后，这些服务必须注册应用程序的根注入器。

```typescript
import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 import { HighlightDirective } from './directives/highlight.directive'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent, 
    HighlightDirective 
  ], 
  imports: [ 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ 
    AppComponent 
  ] 
 }) 
 export class AppModule { } 
```

一个空的提供者数组！？不要害怕。 Angular会自动使用根注入器注册许多服务。这包括`ElementRef`和`Renderer2` 。在这个例子中，我们通过源自`ElementRef`实例化的接口来管理host元素。 `Renderer2`允许我们通过Angular的视图模型更新DOM。

您可以从[本文中](https://guide.freecodecamp.org/angular/views)阅读有关视图的更多信息。它们是Angular应用程序中DOM /视图更新的首选方法。

重要的是要认识到注射器在上述例子中所起的作用。通过在构造函数中声明变量类型，该类可以获得有价值的服务。每个参数的数据类型映射到进样器内的一组指令。如果注入器具有该类型，则返回所述类型的实例。

#### 实例化服务

[服务和注射器](https://guide.freecodecamp.org/angular/services-and-injectors)文章在一定程度上解释了这一部分。尽管如此，本节重新讨论了上一节或大部分内容。服务通常会提供其他内容的参考。他们也可以提供扩展类功能的接口。

下一个示例将定义一个日志服务，该服务通过其`providers: []`添加到组件的注入器`providers: []`元数据。

```typescript
// services/logger.service.ts 
 
 import { Injectable } from '@angular/core'; 
 
 @Injectable() 
 export class LoggerService { 
  callStack: string[] = []; 
 
  addLog(message: string): void { 
    this.callStack = [message].concat(this.callStack); 
    this.printHead(); 
  } 
 
  clear(): void { 
    this.printLog(); 
    this.callStack = []; 
    console.log(“DELETED LOG”); 
  } 
 
  private printHead(): void { 
    console.log(this.callStack[0] || null); 
  } 
 
  private printLog(): void { 
    this.callStack.reverse().forEach((log) => console.log(message)); 
  } 
 } 
```

```typescript
// app.component.ts 
 
 import { Component } from '@angular/core'; 
 import { LoggerService } from './services/logger.service'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  providers: [LoggerService] 
 }) 
 export class AppComponent { 
  constructor(private logger: LoggerService) { } 
 
  logMessage(event: any, message: string): void { 
    event.preventDefault(); 
    this.logger.addLog(`Message: ${message}`); 
  } 
 
  clearLog(): void { 
    this.logger.clear(); 
  } 
 } 
```

```html

// app.component.html 
 
 <h1>Log Example</h1> 
 <form (submit)="logMessage($event, userInput.value)"> 
  <input #userInput placeholder="Type a message..."> 
  <button type="submit">SUBMIT</button> 
 </form> 
 
 <h3>Delete Logged Messages</h3> 
 <button type="button" (click)="clearLog()">CLEAR</button> 
```

专注于AppComponent构造函数和元数据。组件注入器从包含LoggerService的提供程序的元数据字段接收指令。然后，注入器知道从构造函数中请求的实例化LoggerService的内容。

构造函数参数`loggerService`具有注入器识别的`LoggerService`类型。注入器如上所述进行实例化。

#### 结论

依赖注入（DI）是一种范例。它在Angular中的工作方式是通过注入器的层次结构。类无需创建或了解它们即可接收其资源。注入器接收指令并根据请求的实例来实例化服务。

DI在Angular中出现了很多。官方的Angular文档解释了为什么范式如此普遍。他们还继续以Angular方式描述DI的众多用例，超出了本文所讨论的范围。点击下面查看！

## 来源

*   [角度团队。 “依赖注入模式”。 _谷歌_ 2018年6月1日访问](https://angular.io/guide/dependency-injection-pattern)
    
*   [Zuev，阿列克谢。 “你一直想知道的Angular Dependency Injection树”。 _Angular In Depth_ ，2018年3月21日。访问2018年6月1日](https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d)
    

## 资源

*   [角度文档](https://angular.io/guide/pipes)
    
*   [Angular GitHub存储库](https://github.com/angular/angular)
    
*   [依赖注入简介](https://angular.io/guide/architecture-services)
    
*   [高级依赖注入](https://angular.io/guide/dependency-injection-pattern)