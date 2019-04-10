---
title: Views
---

# Views

#### Motivation

Views offer a necessary layer of abstraction. They keep Angular independent of platform specific utilities. As a cross-platform technology, Angular uses its views to connect with the platform.

For every element in Angular’s template HTML, there is a corresponding view. Angular recommends interacting with the platforms through these views. While direct manipulation is still possible, Angular warns against it. Angular offers its own application programming interface (API) to replace the native manipulations.

Shunning views for platform-specific API has its consequences. When developing Angular in a web browser, elements exist in two places: the DOM and the view. Messing only with the DOM does not impact the view.

Since Angular does not interface with the platform, this creates a discontinuity. Views should mirror the platform one-to-one. Otherwise Angular wastes resources managing elements that mismatch it. This is terrible in the event of deleted elements.

These sorts of discrepancies make views appear unnecessary. Never forget that Angular is a universal development platform above all. Views are a necessary abstraction for this end.

By adhering to views, Angular applications will function across all supported development platforms. Platforms include the Web, Android, and Apple iOS.

#### Note

From here-on, this article assumes a web browser environment. Feel free to mentally replace the DOM with something more applicable to your preferred platform.

#### What are Views?

Views are almost like their own virtual DOM. Each view contains a reference to a corresponding section of the DOM. Inside a view are nodes that mirror what is in the this section. Angular assigns one view node per DOM element. Each node holds a reference to a matching element.

When Angular checks for changes, it checks the views. Angular avoids the DOM under the hood. The views reference the DOM on its behalf. Other mechanisms are in place to ensure that view changes render to the DOM. Conversely, changes to the DOM do not affect the views.

Again, views are common across all development platforms besides the DOM.  Even if developing for one platform, views are still considered best practice. They guarantee Angular has a correct interpretation of the DOM.

Views may not exist on third-party libraries. Direct DOM manipulation is an escape hatch for this kind of scenario. Granted, do not expect the application to function cross-platform.

#### Types of Views

There are two main types of views: embedded and host.

There also exists view containers. They hold embedded and host views and are often referred to as simple “views”.

Every `@Component` class registers a view container (view) with Angular. New components generate a custom selector targeting a certain DOM element. The view attaches to that element wherever it appears. Angular now knows the component exists looking at the view model.

Host views attach to components created dynamically with factories. Factories provide a blueprint for view instantiation. That way the application can instantiate the component’s host view during runtime. A host view attaches to a component’s wrapper per its instantiation. This view stores data describing conventional component capabilities.

`<ng-template></ng-template>` is a akin to the HTML5 `<template></template>` element. Angular's `ng-template` works with embedded views. These views do not attach to DOM elements unlike host views. They are identical to host views in that they both types exist inside of view containers.

Keep in mind, `ng-template` is not a DOM element. It gets commented out later leaving nothing but the embedded view nodes behind.

The difference depends on input data; embedded views store no component data. They store a series of elements as nodes comprising its template. The template makes up all the innerHTML of `ng-template`. Each element within the embedded view is its own separate view node.

#### Host Views and Containers

Host views *host* dynamic components. View containers (views) attach automatically to elements already in the template. Views can attach to any element beyond what is unique to component classes.

Think of the traditional method of component generation. It begins by creating a class, decorating it with `@Component`, and filling in metadata. This approach occurs for any pre-defined component element of the template.

Try using the Angular command-line interface (CLI) command: `ng generate component [name-of-component]`. It yields the following.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
```

This creates the component with the selector `app-example`. This attaches a view container to `<app-example></app-example>` in the template. If this were the root of the application, its view would encapsulate all other views. The root view marks the beginning of the application from Angular's perspective.

Creating components dynamically and registering them in the Angular view model takes a few extra steps. Structural directives help manage dynamic content (`*ngIf, *ngFor, and *ngSwitch…`). Directives do not scale to bigger applications however. Too many structural directives complicates the template.

This is where instantiating components from existing class logic comes in handy. These components need to create a host view that can insert into the view model. Host views holds data for components so that Angular recognizes their structural purpose.

##### Host Views Continued

Every component has a class definition. Yet JavaScript does not support classes. Classes are syntactic sugar. They produce functions containing component factories instead.

Factories act as blueprints for host views. They build views to interface with Angular on behalf of their components. Host views attach to DOM elements. Technically any element is OK but the most common target is `<ng-component></ng-component>`.

A view container (view) for holding views must first exist. `<ng-container></ng-container>` is a great place to attach a view container. View containers are the same type of views that also apply to template class elements.

A few helpers and references from `@angular/core` provide the other needed utilities.  The following example puts it all together.

```typescript
// another.component.ts

import { Component } from '@angular/core';

@Component({
  template: `
  <h1>Another Component Content</h1>
  <h3>Dynamically Generated!</h3>
  `
})
export class AnotherComponent { }
```

```typescript
// example.component.ts

import { AfterViewInit, Component, ViewChild,
ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AnotherComponent } from './another.component';

@Component({
  selector: 'app-example',
  template: `
  <h1>Application Content</h1>
  <ng-container #container></ng-container>
  <h3>End of Application</h3>
  `,
  entryComponents: [ AnotherComponent ]
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef;

  constructor(private resolve: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    const factory = this.resolve.resolveComponentFactory(AnotherComponent);
    this.ctr.createComponent(factory);
  }
}
```

Assume AnotherComponent and ExampleComponent are both declared under the same module. AnotherComponent is a simple class component dynamically added into ExampleComponent's view. ExampleComponent’s `entryComponents` metadata must contain AnotherComponent for [bootstrapping](https://angular.io/guide/bootstrapping).

While ExampleComponent is a part of the template, AnotherComponent remains detached. It dynamically renders into the template from ExampleComponent.

There are two view containers present: `<app-example></app-example>` and `<ng-container></ng-container>`. The host view for this example will insert into `ng-container`.

The `AfterViewInit` lifecycle hook fires after the `@ViewChild` queries complete. Using the *template reference variable* `#container`, the `@ViewChild` references `ng-container` as `ctr`.

`ViewContainerRef` is the type of reference for view containers (views). `ViewContainerRef` references a view that supports the insertion of other views. `ViewContainerRef` contains more methods for managing its contained views.

Through dependency injection, the constructor instantiates an instance of Angular’s `ComponentFactoryResolver` service. This service extracts the the factory function (host view blueprint) of AnotherComponent.

The single argument of `createComponent` requires a factory. The `createComponent` function derives from `ViewContainerRef`. It instantiates AnotherComponent under a host view derived from the component's factory.

The host view then inserts into the view container. `<ng-component></ng-component>` wraps the component inside of the view container. It has attached to it the aforementioned host view. `ng-component` is the host view's connection with the DOM.

There are other ways create a host view dynamically from a component. Other ways often [focus on optimization](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866).

The `ViewContainerRef` holds a powerful API. It can manage any number of views either host or embedded within its view. The API includes view operations such as insert, move, and delete. This lets you manipulate the DOM through Angular’s view model. This is best practice so that Angular and the DOM match each other.

#### Embedded Views

Note: embedded views attach to other views no added input. Host views attach to a DOM element with input data from its host view describing it as a component.

Structural directives create an [`ng-template` surrounding a chunk of HTML content](https://angular.io/guide/structural-directives#the-asterisk--prefix). The directive's host element has a view container attached. This make it so that the content can conditionally render into its intended layout.

The `ng-template` holds embedded view nodes representing each element within its innerHTML. `ng-template` is by no means a DOM element. It comments itself out. The tags define the extend of its embedded view.

#### Embedded Views Continued

Instantiating an embedded view requires no external resources beyond its own reference. The `@ViewChild` query can fetch that.

With the template reference, calling `createEmbeddedView` from it does the trick. The innerHTML of the reference becomes its own embedded view instance.

In the next example, `<ng-container></ng-container>` is a view container. `ng-container` gets commented out during compilation just like `ng-template`. Thus it provides an outlet for inserting the embedded view while keeping the DOM lean.

The embedded view template inserts at the layout location of `ng-container`. This newly inserted view has no additional view encapsulation besides the view container. Remember how that differs from host views (host views attach to their `ng-component` element wrapper).

```typescript
import { Component, AfterViewInit, ViewChild,
ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
  <h1>Application Content</h1>
  <ng-container #container></ng-container> <!-- embed view here -->
  <h3>End of Application</h3>

  <ng-template #template>
    <h1>Template Content</h1>
    <h3>Dynamically Generated!</h3>
  </ng-template>
  `
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild("template", { read: TemplateRef }) tpl: TemplateRef<any>;
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef;

  constructor() { }

  ngAfterViewInit() {
    const view =  this.tpl.createEmbeddedView(null);
    this.ctr.insert(view);
  }
}
```

`@ViewChild` queries for the *template reference variable* `#template`. This provides a template reference of type `TemplateRef`. `TemplateRef` holds the `createEmbeddedView` function. It instantiates the template as an embedded view.

The single argument of `createEmbeddedView` is for context. If you wanted to pass in additional metadata, you could do it here as an object. The fields should match up with the `ng-template` attributes (`let-[context-field-key-name]=“value”`). Passing `null` indicates no extra metadata is necessary.

A second `@ViewChild` query provides a reference to `ng-container` as a `ViewContainerRef`. Embedded views only attach to other views, never the DOM. The `ViewContainerRef` references the view that takes in the embedded view.

An embedded view may also insert into the component view of `<app-example></app-example>`. This approach positions the view at the very end of ExampleComponent’s view. In this example however, we want the content to show up in the very middle where `ng-container` sits.

The `ViewContainerRef` `insert` function *inserts* the embedded view into the `ng-container`. The view content shows ups in the intended location right in the middle of ExampleComponent's view.

#### Conclusion

Manipulating the DOM with platform specific methods is not recommended. Creating and managing a tight set of views keeps Angular and the DOM on the same page. Updating the views informs Angular of the current state of the DOM. Updates to the views also carry over into what the DOM displays.

Angular provides a flexible API for view interaction. Developing platform independent applications is possible thanks to this level of abstraction. Of course, the temptation to fallback on platform dependent strategies persists. Unless you have a very good reason not to, try to stick with the views API Angular provides. This will yield predictable results across all platforms.

Check out the below resources too! This article merely scratches the surface. Views have plenty of other use cases too vast for one article.

## Sources

- [AngularInDepth.com. “Component View, Host View, Embedded View”, #40423772. 11 July 2017. “What is the difference between a view, a host view and an embedded view”](https://stackoverflow.com/questions/40423772/what-is-the-difference-between-a-view-a-host-view-and-an-embedded-view)

- [Angular Team. “Structural Directives”. *Google*. Accessed 31 May 2018](https://angular.io/guide/structural-directives)

- [Koretskyi, Maxim. “Exploring Angular DOM manipulation techniques using ViewContainerRef”. *Angular In Depth*, 4 Mar. 2017. Accessed 30 May 2018.](https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02)

- [Koretskyi, Maxim. “Implementing advanced DOM manipulation scenarios”.*Youtube*, uploaded by ng-conf, 19 Apr. 2018. Accessed 30 May 2018](https://www.youtube.com/watch?v=vz9cNCkaPsY)

- [Koretskyi, Maxim. “Working with DOM in Angular: unexpected consequences and optimization techniques”. *Angular In Depth*, 3 May 2017. Accessed 31 May 2018](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866)

## Resources

- [Angular Documentation](https://angular.io/guide/pipes)

- [Angular in Depth](https://blog.angularindepth.com)

- [ViewContainerRef](https://angular.io/api/core/ViewContainerRef)

- [TemplateRef](https://angular.io/api/core/TemplateRef)

- [Angular GitHub Repository](https://github.com/angular/angular)

- [Angular CLI](https://cli.angular.io)
