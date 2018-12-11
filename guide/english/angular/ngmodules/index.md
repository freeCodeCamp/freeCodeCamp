---
title: NgModules
---

# NgModules

#### Motivation

Angular applications begin from the root NgModule. Angular manages an application’s dependencies through its module system comprised of NgModules. Alongside plain JavaScript modules, NgModules ensure code modularity and encapsulation.

Modules also provide a top-most level of organizing code. Each NgModule sections off its own chunk of code as the root. This module provides top-to-bottom encapsulation for its code. The entire block of code can then export to any other module. In this sense, NgModules act like gatekeepers to their own code blocks.

Angular's documented utilities come from NgModules authored by Angular. No utility is available unless the NgModule that declares it gets included into the root. These utilities must also export from their host module so that importers can use them. This form of encapsulation empowers the developer to produce his or her own NgModules within the same file-system.

Plus, it makes sense to know why the Angular CLI (command-line interface) imports `BrowserModule` from `@angular/core`. This happens whenever a new app generates using the CLI command: `ng new [name-of-app]`.

Understanding the point of the implementation may suffice in most cases. However, understanding how the implementation wires itself to the root is even better. It all happens automatically by importing `BrowserModule` into the root.

#### NgModule Decorator

Angular defines its modules by decorating a generic class. The `@NgModule` decorator indicates the class’ modular purpose to Angular. An NgModule class consolidates root dependencies accessible/instantiable from the module's scope. 'Scope' meaning anything originating from the module’s metadata.

```typescript
import { NgModule } from '@angular/core';

@NgModule({
  // … metadata …
})
export class AppModule { }
```

#### NgModule Metadata

The CLI generated root NgModule includes the following metadata fields. These fields provide configuration to the code block upon which the NgModule presides.

* `declarations: []`
* `imports: []`
* `providers: []`
* `bootstrap: []`

##### Declarations

The declarations array includes all components, directives, or pipes hosted by an NgModule. They are private to the module unless explicitly exported inside its metadata. Given this use-case, components, directives, and pipes are nicknamed ‘declarables’. An NgModule must declare a declarable uniquely. The declarable cannot declare twice in separate NgModules. An error gets thrown otherwise. See the below example.

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

Angular throws an error for the sake of NgModule encapsulation. Declarables are private to the NgModule that declares them by default. If multiple NgModules need a certain declarable, they should import the declaring NgModule. This NgModule must then export the desired declarable so that the other NgModules can use it.

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

The above example will not throw an error. TwoComponent has been uniquely declared between the two NgModules. OneModule also has access to TwoComponent since it imports TwoModule. TwoModule in turn exports the TwoComponent for external use.

##### Imports

The imports array only accepts NgModules. This array does not accept declarables, services, or anything else besides other NgModules. Importing a module provides access to what declarable the module publicizes.

This explains why importing `BrowserModule` provides access to its various utilities. Each declarable utility declared in `BrowserModule` exports from its metadata. Upon importing `BrowserModule`, those exported declarables become available to the importing NgModule. Services do not export at all since they lack the same encapsulation.

##### Providers

The lack of service encapsulation might seem odd given the encapsulation of declarables. Remember that services go into the providers array separate from declarations or exports.

When Angular compiles, it flattens the root NgModule and its imports into one module. Services group together in a single providers array hosted by the merged NgModule. Declarables maintain their encapsulation through a set of compile-time flags.

If NgModule providers contain matching token values, the importing root module takes precedence. Past that, the last NgModule imported takes precedence. See the next example. Pay special attention to the NgModule importing the other two. Recognize how that affects the precedence of the provided service.

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

Instantiating AwesomeService from within AModule's scope results in an AwesomeService instance as provided in AModule’s metadata. If AModule's providers omitted this service, the AwesomeService of CModule would take precedence. So and so forth for BModule if CModule’s providers omitted AwesomeService.

##### Bootstrap

The bootstrap array accepts components. For each component of the Array, Angular inserts the component as its own root of the `index.html` file. The CLI-generated root NgModule of an application will always have this field.

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

AppComponent’s element will inject into the base-level HTML of the app (`index.html`). The rest of the component tree unfolds from there. The scope of the overarching NgModule covers this entire tree plus any others injected from the bootstrap array. The array usually contains only one element. This one component represents the module as a single element and its underlying tree.

#### NgModules vs JavaScript Modules

You have seen Angular and JavaScript modules working together in the previous examples. The top-most `import..from` statements constitute the JavaScript module system. The file locations of each statement's target must export a class, variable, or function matching the request. `import { TARGET } from './path/to/exported/target'`.

In JavaScript, modules are file-separated. Files import using the `import..from` keywords as just mentioned. NgModules, on the other hand, are class-separated and decorated with `@NgModule`. And so, many Angular modules can exist in a single file. This cannot happen with JavaScript since a file defines a module.

Granted, conventions say that each `@NgModule` decorated class should have its own file. Even so, know that files do not constitute their own modules in Angular. Classes decorated with `@NgModule` create that distinction.

JavaScript modules provide token references to `@NgModule` metadata. This happens at the top of a file hosting a NgModule class. NgModule uses these tokens inside of its metadata fields (declarables, imports, providers, etc). The only reason `@NgModule` can decorate a class in the first place is because JavaScript imports it from the top of the file.

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

The above example does not introduce anything new. The focus here is on the comments explaining how the two modular systems work together. JavaScript provides token references while NgModule uses those token to encapsulate and configure its underlying block of code.

#### Feature Modules

Applications grow overtime. Scaling them properly requires application organization. A solid system for this will make further development much easier.

In Angular, schematics ensure purpose-driven sections of code remain distinguishable. Beyond the sub-NgModule schematics, there are the NgModules themselves. They are a type of schematic too. They stand above the rest in the list of schematics excluding the application itself.

The root module should not stand alone once an application starts to scale. Feature modules include any NgModule used alongside the root NgModule. You can think of the root module as having the `bootstrap: []` metadata field. Feature application ensure the root module does not oversaturate its metadata.

Feature modules isolate a section of code on behalf of any importing module. They can handle whole application sections independently. This means it could be used in any application whose root module imports the feature module. This tactic saves developers time and effort over the course of multiple applications! It keeps the application's root NgModule lean as well.

In the root NgModule of an app, adding a feature module’s token into the root's `imports` array does the trick. Whatever the feature module exports or provides becomes available to the root.

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

`<app-awesome></app-awesome>` (component), `awesome` (pipe), and `appAwesome` (directive) are exclusive to AwesomeModule. Had it not exported these declarables or AppModule neglected to add AwesomeModule to its imports, then AwesomeModule's declarables would not have been usable by AppComponent’s template. AwesomeModule is a feature module to the root NgModule AppModule.

Angular provides some its own modules that supplement the root upon their importation. This is due to these feature modules exporting what they create.

#### Static module methods

Sometimes modules provide the option to be configured with a custom config object. This is achieved by leveraging static methods inside the module class.

An example of this approach is the `RoutingModule` which provides a `.forRoot(...)` method directly on the module.

To define your own static module method you add it to the module class using the `static` keyword. The return type has to be `ModuleWithProviders`.

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

Notice that the object the `forRoot(...)` method returns is almost identical to the `NgModule` config. 

The `forRoot(...)` method accepts a custom config object that the user can provide when importing the module.

```ts
imports: [
  ...
  ConfigureableModule.forRoot({ url: 'http://localhost' }),
  ...
]
```

The config is then provided using a custom `InjectionToken` called `CUSTOM_CONFIG_TOKEN` and injected in the `ConfigureableService`. The `ConfigureableModule` should be imported only once using the `forRoot(...)` method. This provides the `CUSTOM_CONFIG_TOKEN` with the custom config. All other modules should import the `ConfigureableModule` without the `forRoot(...)` method.

#### NgModule Examples from Angular

Angular provides a variety of modules importable from `@angular`. Two of the most commonly imported modules are `CommonModule` and `HttpClientModule`.

`CommonModule` is actually a subset of `BrowserModule`. Both provide access to the `*ngIf` and `*ngFor` structural directives. `BrowserModule` includes a platform-specific installation for the web browser. `CommonModule` omits this installation. The `BrowserModule` should import into the root NgModule of a web application. `CommonModule` provides `*ngIf` and `*ngFor` to feature modules not requiring a platform installation.

`HttpClientModule` provides the `HttpClient` service. Remember that services go in the providers array of the `@NgModule` metadata. They are not declarable. During compilation, every NgModule gets consolidated into one single module. Services are not encapsulated unlike declarables. They are all instantiable through the root injector located alongside the merged NgModule.

Back to the point. Like any other service, `HttpClient` instantiates into a class through its constructor via dependency injection (DI). Using DI, the root injector injects an instance of `HttpClient` into the constructor. This service lets developers make HTTP requests with the service's implementation.

The `HttpClient` implementation includes into the `HttpClientModule` providers array. As long as the root NgModule imports `HttpClientModule`, `HttpClient` will instantiate from inside the root's scope as expected.

#### Conclusion

Chances are you may have already taken advantage of Angular’s NgModules. Angular makes it very easy to throw a module into the root NgModule’s imports array. Utilities are often exported from the imported module's metadata. Hence why its utilities suddenly become available upon importation within the root NgModule.

NgModules work closely with plain JavaScript modules. One provides token while one uses them for configuration. Their teamwork results in a robust, modular system unique to the Angular framework. It provides a new layer of organization above all other schematics excluding the application.

Hopefully this article furthers your understanding of NgModules. Angular can leverage this system even further for some of the more exotic use-cases. This article covers the basics so that you can learn more using the below links.

## Sources

- [Angular Team. “NgModules”. *Google*. Accessed 6 June 2018.](https://angular.io/guide/ngmodules)
- [Koretskyi, Maxim. “Avoiding common confusions with modules in Angular”. *Angular In Depth*, 10 Aug. 2017. Accessed 6 June 2018.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## Resources

- [Angular Documentation](https://angular.io/guide)
- [Angular In Depth](https://blog.angularindepth.com)
- [Angular GitHub Repository](https://github.com/angular/angular)
- [Angular CLI](https://cli.angular.io)
