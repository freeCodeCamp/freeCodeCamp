---
title: Components
---

# Components

#### Motivation

Angular contains many *schematics* for building applications. Components are one such schematic. They encompass a single unit of logic concerned with a single part of the application. Components often partner with other schematics to operate more effectively.

Among all schematics, components tend to consume more than provide. While other schematics like directives, pipes, and services offer utility, components utilize. They are responsible for the application interface so it makes sense why the consume utility.

Components simplify the application. Funneling logic into a single section of the visible interface is their primary goal. To build applications step-by-step, you must build component-by-component. Components act as Angular's building blocks after all.

#### Components Introduction

As mentioned, components consume utility (services/resources). They stand between business logic and presentation to produce a cohesive unit. Angular attaches various mechanisms to each component. These attachments identify a class as a component and define its standard capabilities.

Angular must recognize components when it comes across them. To do this, `@Component` must decorate every class intended to be a component. Decorators indicate to Angular what the class' is.

In the case of a component, it must know how to interact with its injector, connect with a template, pull from a list of styles, encapsulate its styles, and so on. Angular takes care of most of the low-level requirements. Developers still need to configure a component's behavior, import its dependencies, and extend its logic.

For all such things, we have the component's class. The class keeps everything relatively uniform. It encapsulates the component's business logic.

#### Component Class and Metadata

Go ahead and install the [Angular command-line interface (CLI)](https://cli.angular.io). You can learn more about it from [this article](https://guide.freecodecamp.org/angular/command-line-interface). The CLI command `ng generate component [name-of-component]` yields the following.

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

This is the basic skeleton from which all great components originate. The `@Component` decorator is the most important part. Without it, the above example becomes a generic class. Angular relies on decorators to discern a class' schematic type.

`@Component` receives metadata as a single object. Decorators are just JavaScript functions under the hood. They take in arguments as with the metadata object. The metadata object configures a component's basic dependencies. Each fields plays a role.

* `selector:` tells Angular to associate the component with a certain element in the application’s template HTML.

* `templateUrl:` accepts the file location of the component’s template HTML (this is where data gets displayed to).

* `styleUrls:` accepts an array of style-sheet file locations (strings). These style-sheets target the component’s assigned template.

Think of metadata as a big blob of configuration. The decorator takes it so that it can generate the data specific to the component. The decorator *decorates* the underlying class with data necessary for its class' behavior. A *component* class that is.

The class' signature exports by default so that the component can be imported. `ngOnInit` also gets implemented. `implements` tells the class to define certain methods per the interface's definition. `ngOnInit` is a lifecycle hook.

#### Component Lifecycle and Change Detection

Components use all sorts of tools, services, and feature. One key feature available to components is lifecycle hooks. An explanation for each hook exists [on this article](https://guide.freecodecamp.org/angular/lifecycle-hooks).

There are a eight in total and they all serve as timing functions. They execute conditionally as the component transitions from state-to-state via [change detection](https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f). This process happens constantly across the component tree. It searches for changes in data which merit a re-rendering of the template.

Time to move on. Please refer to the aforementioned articles for more information on the component lifecycle. It deserves much more explanation.

#### Component Data

Data drives everything. Components are no exception. Components encapsulate all their data. To receive data externally,  a component must explicitly declare it. This form of privacy keeps information from clashing across the component tree.

Data determines what gets displayed from the component class to its template. Any updates to the class’ data will (or at least should) update the template display.

Components will often initialize a set of members (or variables) that store data. They are used throughout the component class logic for convenience. This information fuels the logic resulting in the template and its behavior. See the following example.

```typescript
// ./components/example/example.component.ts

import { Component, OnInit } from '@angular/core';
import { Post, DATA } from '../../data/posts.data';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {
  username: string;
  totalPosts: number;
  allPosts: Post[];

  deletePost(index: number): void {
    this.allPosts.splice(index, 1);
    this.totalPosts = this.allPosts.length;
  }

  ngOnInit(): void {
    this.username = DATA.author;
    this.totalPosts = DATA.thePosts.length;
    this.allPosts = DATA.thePosts;
  }
}
```
```html
<!-- ./components/example/example.component.html -->

<h1>{{ username }}</h1>
<span>Change Name: </span><input [(ngModel)]="username">
<h3>Posts: {{ totalPosts }}</h3>
<ul>
<hr/>
<div *ngFor="let post of allPosts; let i=index">
  <button (click)="deletePost(i)">DELETE</button>
  <h6>{{ post.title }}</h6>
  <p>{{ post.body }}</p>
  <hr/>
</div>
</ul>
```

Note the ways the component interacts with its data. It first fetches it from `../../data/posts.data` before it begins to forward it to the template for display.

The data shows up throughout the template. Inside the double curly braces, a variable’s value is mapped from the component class into the braces. The `*ngFor` loops across the `allPosts` class array. Clicking on the button removes a specific element from `allPosts` by its index. You can even change the topmost `username` by typing into the input box.

The above interactions alter the component class' data which in turn updates the component's template HTML. Components provide the backbone logic that facilitates the flow of data. The template HTML makes that data readable to the user.

#### Component Template

The previous example’s template HTML featured an interesting syntax. The syntax was not actual HTML. It was Angular’s template HTML. Some often refer to it has HTML *Plus* recognizable only by Angular's compiler. The compiler supports a syntax resulting in the dynamic manipulation of HTML. This article will often refer to it as 'template HTML' or 'template'.

The syntax lets components inject data directly into the template HTML. The injection is dynamic. Meaning, data can iterate and display itself as HTML without needing external assistance. The Angular compiler compiles it into real HTML by the time it reaches the web browser.

To learn more about some of the ways data binds to the template, read about [data binding in Angular](https://guide.freecodecamp.org/angular/data-binding). A few examples of data binding occurred in the previous example (`{{ ... }}`). For this article, it is enough to recognize data interactions were happening between the component class and its template.

#### Querying the Template

Data managing the state of the template imperatively works OK. Yet, pure data does not always fulfill an application's intended design. Interacting more directly with the Document Object Model (DOM) may be required.

To do that, the component must have reference to the template elements. When the data changes, the component can manipulate the DOM explicitly. This is a more declarative approach.

Components can grab references using a web browser’s DOM application programming interface (API). Bad idea though. Angular prefers cross-platform compatibility. For a component to function outside of the web browser, it needs to use Angular’s API instead of the DOM's.

Components can query their templates using the `@ViewChild` and `ContentChild` decorators. They grab references to template elements on behalf of the component class.

```typescript
import { Component, ViewChild, ContentChild, ElementRef, Renderer2, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <button (click)="toggleEnlarge()">Toggle Enlarge</button>
  <ng-content></ng-content>
  `
})
export class ChildComponent implements AfterContentChecked {
  @ContentChild("pReference", { read: ElementRef }) pElement: ElementRef;
  textEnlarge: boolean = false;

  constructor(private renderer: Renderer2) { }

  toggleEnlarge() {
    this.textEnlarge = !this.textEnlarge;
  }

  ngAfterContentChecked() {
    if (this.textEnlarge)
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', '25px');
      else
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', 'initial');
    }
}

@Component({
  selector: 'app-parent',
  template: `
  <button (click)="toggleHighlight()">Toggle Highlight</button>
  <h1 #hOneRefereance>View Child</h1>
  <app-child>
    <p #pReference>Content Child</p>
  </app-child>
  `
})
export class ParentComponent implements AfterViewChecked {
  @ViewChild("hOneRefereance", { read: ElementRef }) hOneElement: ElementRef;
  textHighlight: boolean = false;

  constructor(private renderer: Renderer2) { }

  toggleHighlight() {
    this.textHighlight = !this.textHighlight;
  }

  ngAfterViewChecked() {
    if (this.textHighlight)
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'yellow');
    else
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'initial');
  }
}
```

The above example contains two buttons that toggle a certain style for each element. Clicking the buttons toggles the true/false values unique to each component. These booleans determine if the custom styles apply. Instead of these values causing changes imperatively, the lifecycle hooks (`ngAfterViewChecked` and `ngAfterContentChecked`) declaratively alter the DOM.

The declarative approach explicitly changes the style through the element’s reference. In imperative programming, changes to the DOM based off data are implicit. Check out this article on [imperative and declarative programming](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2) to learn more.

The main thing to notice is how these references get pulled from the template. In the example, there are two sections of the template queried using two decorators: `@ViewChild` and `@ContentChild`.

They differ in where they look for an element’s reference whether it be in the content DOM or view DOM. These two DOMs exist in ParentComponent’s template. Differentiating between them is important because they finish rendering at separate times.

This is why `@ViewChild` and `@ContentChild` both exist. They work together with their companion lifecycle hooks `ngAfterViewChecked` and `ngAfterContentChecked`. These lifecycle hooks wait for their respective queries to resolve before executing.

Once resolved, `@ViewChild` and `@ContentChild` provide references to two elements. Both exist in separate parts of the DOM. The boolean data still determines the outcome. How that outcome translates to the DOM is the key difference from before. The DOM updates via`Renderer2`'s direct manipulation of it.

#### Content Projection

The content DOM exists in the innerHTML of ChildComponent’s `<app-child></app-child>` element. It is all positioned within ParentComponent’s template. The innerHTML of `app-child` *projects* onto ChildComponent’s template through `<ng-content></ng-content>`.

This exemplifies content projection. Displaying content from `one` component to another using the innerHTML of `another`’s tags in `one`’s template so that `another` component can pull that innerHTML into its own template via `<ng-content></ng-content>`. *Thank you for reading that sentence.*

Hence why ChildComponent references its `<p></p>` element using `@ContentChild`. Content contained within `<app-child></app-child>` in ParentComponent's template makes up the content DOM. ChildComponent references the element with an `@ContentChild` query.

ParentComponent's view DOM consists of everything accessible from within the component’s view. This does not necessarily include the entire template given the innerHTML of `<app-child></app-child>`. Again, this part of the DOM is queried from ChildComponent using `@ContentChild`. Everything else gets queried using `@ViewChild` from the ParentComponent class.

This is a great way for components to exchange content and query its own content regardless of its DOM type. Components can communicate with itself and others using data binding as well. Read more about it from [this article](https://guide.freecodecamp.org/angular/data-binding).

#### Component Styles

Styles are critical to a component’s readability and interactivity. Each component encapsulates its style-sheet dependencies. That way they only apply to the component's template HTML. A special technique introduced by HTML’s shadow DOM makes this possible.

A shadow DOM branch may exist on any element. This part of the DOM cannot be seen from the HTML's source code. Standard HTML elements leverage the shadow DOM to provide their trademark appearances. A shadow DOM branch must anchor itself to a visible component so that it can style and customize it.

The unique aspect about a shadow DOM branch is its encapsulation. Everything used to style a shadow DOM branch’s root element is private to it. No other element can access it.

Angular embraces this form of encapsulation with components. The style-sheet and template of a component encapsulate together. No other components have access to them. Style-sheet clashes cannot occur.

Angular does not use the shadow DOM by default. It uses an emulation system that mimics the behavior of the shadow DOM. This is a temporary measure since some web browsers do not yet support the shadow DOM API.

The `@Component` metadata contains the `encapsulation` field. This lets developers toggle in-between emulated shadow DOM, real shadow DOM, or neither. Here are the options in their respective order:

* `ViewEncapsulation.Emulated` - fake shadow DOM (default)

* `ViewEncapsulation.Native` - real shadow DOM (now deprecated since Angular 6.0.8)

* `ViewEncapsulation.None` - neither

`ViewEncapsulation.None` means the component's style-sheets elevate to the global scope. Not recommended considering components should form their own private unit (encapsulation). Angular still provides it as an escape hatch for extreme situations.

#### Conclusion

Components build applications. They are privately scoped and separately uniform of each other unless configured otherwise. Applications tend to begin from the root module. Past that, components form an elongated tree defining the rest of the application.

A components covers a designated unit of the application interface. This includes its styles, logic, and layout. Other schematics such as pipes, services, and directives see frequent use in component code. You can learn more about these interactions in some of the other Angular guide articles.

Do not forget that components must [bootstrap](https://angular.io/guide/bootstrapping). This can happen in the root module or the component’s metadata. This is so Angular recognizes the component wherever it appears in the application.

You can always learn more by exploring the below links leading. Component carry far more depth than that what this article could convey.

## Sources

- [Angular Team. “Angular Docs”. *Google*. Accessed 3 June 2018](https://angular.io/guide)
- [Mozilla MDN Community. “Using Shadow DOM”. *Mozilla*, updated 30 May 2018. Accessed 3 June 2018](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [Mundy, Ian. “Declarative vs Imperative Programming”. *codeburst.io*, 20 Feb. 2017. Accessed 3 June 2018](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)

## Resources

- [Angular Documentation](https://angular.io/guide)
- [Angular GitHub Repository](https://github.com/angular/angular)
- [Intro to Components](https://angular.io/guide/architecture-components)
- [Components in Depth](https://angular.io/guide/displaying-data)
- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
