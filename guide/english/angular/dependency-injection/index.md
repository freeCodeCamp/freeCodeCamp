---
title: Dependency Injection
---

# Dependency Injection

#### Motivation

Dependency Injection is often more simply referred to as DI. The paradigm exists throughout Angular. It keeps code flexible, testable, and mutable. Classes can inherit external logic without knowing how to create it. Any consumers of those classes also do not need to know anything.

DI saves classes and consumers alike from having to know more than necessary. Yet the code is as modular as it was before thanks to the mechanisms supporting DI in Angular.

Services are a key benefactor of DI. They rely on the paradigm for *injection* into various consumers. Those consumers can then take advantage of that service provides and/or forward it elsewhere.

Service are not alone. Directives, pipes, components, and so on: every schematic in Angular benefits from DI in some way or another.

#### Injectors

Injectors are data structures that store instructions detailing where and how services form. They act as intermediaries within the Angular DI system.

Module, directive, and component classes contain metadata specific to injectors. A new injector instance accompanies every one of these classes. In this way, the application tree mirrors its hierarchy of injectors.

The `providers: []` metadata accepts services that then register with the class’ injector. This provider field adds the instructions necessary for an injector to function. A class (assuming it has dependencies) instantiates a service by taking on its class as its data type. The injector aligns this type a creates an instance of that service on the class' behalf.

Of course, the class can only instantiate what the injector has instructions for. If the class’ own injector does not have the service registered, then it queries its parent. So on and so forth until either reaching an injector with the service or the application root.

Services can register at any injector within the application. Services go in the `providers: []` metadata field of class modules, directives, or components. The class' children can instantiate a service registered in the class’ injector. Child injectors fallback on parent injectors after all.

#### Dependency Injection

Take a look at the skeletons for each class: service, module, directive, and component.

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

Each skeleton can register services to an injector. In fact, TemplateService *is* a service. As of Angular 6, services can now register with injectors using `@Injectable` metadata.

##### In Any Case

Notice the `providedIn: string` (`@Injectable`) and `providers: []` (`@Directive`, `@Componet` and `@Module`) metadata. They tell injectors where and how to create a service. Otherwise, injectors would not know how to instantiate.

What if a service has dependencies? Where would the results go? Providers answers those question so that injectors can instantiate properly.

Injectors form the backbone of the DI framework. They store instructions to instantiate services so consumers do not have to. They receive service instances without needing to know anything about the source dependency!

I should also note that other schematics without injectors can still utilize dependency injection. They cannot register additional services but they can still instantiate from injectors.

##### Service

The `providedIn: string` metadata of `@Injectable` specifies which injector to register with. Using this method, and depending on if the service gets used, the service may or may not register with the injector. Angular calls this *tree-shaking*.

By default the value is set to `‘root’`. This translates to the root injector of the application. Basically, setting the field to `‘root’` makes the service available anywhere.

##### Quick Note

As previously mentioned, child injectors fallback on their parents. This fallback strategy ensures parents do not have to re-register for every injector. Refer to this article on [Services and Injectors](https://guide.freecodecamp.org/angular/services-and-injectors) for an illustration of this concept.

Registered services are *singletons*. Meaning, the instructions to instantiate the service exists on only one injector. This assumes it has not been explicitly registered elsewhere.

##### Module, Directive, and Component

Modules and components each have their own injector instance. This is evident given the `providers: []` metadata field. This field takes an array of services and registers them with the injector of the module or component class. This approach happens in the `@NgModule`, `@Directive`, or `@Component` decorators.

This strategy omits *tree-shaking*, or the optional removal of unused services from injectors. Service instances live on their injectors for the life of the module or component.

#### Instantiating References

References to the DOM can instantiate from any class. Keep in mind that references are still services. They differ from traditional services in representing the state of something else. These services include functions to interact with their reference.

Directives are in constant need of DOM references. Directives perform mutations on their host elements through these references. See the following example. The directive's injector instantiates a reference of the host element into the class' constructor.

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

`Renderer2` also gets instantiated. Which injector do these services come from? Well, each service's source code comes from `@angular/core`. These services must then register with the application’s root injector.

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

An empty providers array!? Not to fear. Angular registers many services with the root injector automatically. This includes `ElementRef` and `Renderer2`. In this example, we are managing the host element through its interface stemming from the instantiation of  `ElementRef`. `Renderer2` lets us update the DOM through Angular’s view model.

You can read more about views from [this article](https://guide.freecodecamp.org/angular/views). They are the preferred method for DOM/view updates in Angular applications.

It is important recognize the role that injectors play in the above example. By declaring variable types in the constructor, the class obtains valuable services. Each parameter's data type maps to a set of instructions within the injector. If the injector has that type, it returns an instance of said type.

#### Instantiating Services

The [Services and Injectors](https://guide.freecodecamp.org/angular/services-and-injectors) article explains this section to an extent. Though, this section rehashes the previous section or the most part. Services will often provide references to something else. They may just as well provide an interface extending a class’ capabilities.

The next example will define a logging service that gets added to a component’s injector via its `providers: []` metadata.

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

Focus on the AppComponent constructor and metadata. The component injector receives instructions from the provider's metadata field containing LoggerService. The injector then knows what to instantiate LoggerService from requested in the constructor.

The constructor parameter `loggerService` has the type `LoggerService` which the injector recognizes. The injector follows through with the instantiation as mentioned.

#### Conclusion

Dependency injection (DI) is a paradigm. The way it works in Angular is through a hierarchy of injectors. A class receives its resources without having to create or know about them. Injectors receive instruction and instantiate a service depending on which one was requested.

DI shows up a lot in Angular. The official Angular documentation explains why the paradigm is so prevalent. They also go on to describe the numerous use-cases for DI in Angular way beyond what was discussed in this article. Check it out by clicking below!

## Sources

- [Angular Team. “Dependency Injection Pattern”. *Google*. Accessed 1 June 2018](https://angular.io/guide/dependency-injection-pattern)

- [Zuev, Alexey. “What you always wanted to know about Angular Dependency Injection tree”. *Angular In Depth*, 21 Mar 2018. Accessed 1 June 2018](https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d)

## Resources

- [Angular Documentation](https://angular.io/guide/pipes)

- [Angular GitHub Repository](https://github.com/angular/angular)

- [Intro to Dependency Injection](https://angular.io/guide/architecture-services)

- [Advanced Dependency Injection](https://angular.io/guide/dependency-injection-pattern)
