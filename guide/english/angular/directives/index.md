---
title: Directives
---

# Directives

#### Motivation

Directives are core to Angular's template HTML. Components are the most significant example. Every component view renders below a root component view. This can result in a tree of views defining a single application. A view constitutes a class (`component.ts`) and its template (`component.html`).

Other directives, while not as critical, provide much-needed flexibility. A directive positioned on an element has complete control over it. Using `<ng-template></ng-template>` allows for the dynamic creation and removal of HTML content. Microsyntax gives developers the freedom to further customize directive behavior.

#### The Directive

Directives are component elements and attributes created and recognized by Angular. Angular associates the element or attribute with its corresponding class definition. `@Directive` or `@Component` decorates these classes. Both are indicative to Angular that the class performs as a directive.

Some directives modify the style of the host element. Other directives display views or insert into existing ones as embedded views. On other words, they alter the HTML layout.

In any case, directives signal the Angular compiler. They mark components for modification depending on the class logic of the directive.

#### Component Directive

Component directives differ fundamentally from the other directive types. They are usually just referred to as components. They form their own unique HTML tag. For every component, there is some amount of template HTML. This is unlike the other two directives. Their classes are pure logic operating on what is pre-defined in the template HTML.

#### Component Creation

Create a component with `ng generate component [name-of-component]`; replace `[name-of-component]` with a preferable name. The command yields four different files that all pertain to one component.

The `component.css` and `component.spec.ts` are beyond the scope of this article. The *directive* aspect of the component involves the other two files. Take a look at the generated `component.ts` and `component.html`.

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

A couple of irrelevant details were cut from the default generation of `component.ts`. That way the focus is on the component itself.

```html
<!-- example.component.html -->

<p>example works!</p>
```

Inserting ExampleComponent as the child of another component would look like the following.

```html
<!-- another.component.html -->

<h1>Welcome to AnotherComponent.</h1>
<h3>Check out ExampleComponent!</h3>

<!-- Outputs “<p>example works!</p>” -->
<app-example></app-example>

<h6>This is the end of the AnotherComponent template HTML.</h6>
```

Pay attention to `<app-example></app-example>`. The `app-example` matches up with the selector from ExampleComponent's `@Component` decorator. This is a component directive. Angular recognizes  `app-example` and *directs* its rendering to the ExampleComponent class.

#### Structural Directive

Think about `if` statements, `for` loops, and `switch` statements in programming logic. These logical constructs determine code execution. Will the code execute (`if`), how many times will it execute (`for`), and which block of code executes (`switch`).

This pattern continues to structural directives. They determine the resulting HTML structure of a template. They always involve some usage of `ng-template` under the hood. `ng-template` provides a mechanism for creating conditionally rendered HTML.

Here are three examples of structural directives. Each one has a logical counterpart (`if`, `for`, and `switch`).

* *ngIf

* *ngFor

* *ngSwitchCase and *ngSwitchDefault

**Important note:** all three are available through the `CommonModule` import. It is available from `@angular/common` for importation within the application's root module.

##### *ngIf

`*ngIf` tests a given value to see if it is *truthy* or *falsy* based off general boolean evaluation in JavaScript. If truthy, the element and its innerHTML show up. Otherwise, they never render to the Domain Object Model (DOM).

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

This is a contrived example. Any member value from the template's component class can be substituted in for `true` or `false`.

NOTE: You also can do following thing with *ngIf to get access to observalbe value
```html
<div *ngIf="observable$ | async as anyNameYouWant">
  {{  anyNameYouWant }}
</div>
```

##### *ngFor

`*ngFor` loops based off a right-assigned, *microsyntactic* expression. Microsyntax moves beyond the scope of this article. Know that microsyntax is a short form of logical expression. It occurs as a single string capable of referencing class member values. It can loop iterable values which makes it useful for `*ngFor`.

```html
<ul>
  <li *ngFor=“let potato of [‘Russet’, ‘Sweet’, ‘Laura’]; let i=index”>
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

`[‘Russet’, ‘Sweet’, ‘Laura’]` is an iterable value. Arrays are one of the most common iterables. The `*ngFor` spits out a new `<li></li>` per array element. Each array element is assigned the variable `potato`. This is all done utilizing microsyntax. The `*ngFor` defines the structural content of the `ul` element. That is characteristic of a structural directive.

NOTE: You can also do following thing with *ngFor directive to get access to observalbe value (hacky)
```html
<div *ngFor="let anyNameYouWant of [(observable$ | async)]">
  {{  anyNameYouWant }}
</div>
```

##### *ngSwitchCase and *ngSwitchDefault

These two structural directives work together to provide `switch` functionality to template HTML.

```html
<div [ngSwitch]=“potato”>
  <h1 *ngSwitchCase=“‘Russet’”>{{ potato }} is a Russet Potato.</h1>
  <h1 *ngSwitchCase=“‘Sweet’”>{{ potato }} is a Sweet Potato.</h1>
  <h1 *ngSwitchCase=“‘Laura’”>{{ potato }} is a Laura Potato.</h1>
  <h1 *ngSwitchDefault>{{ potato }} is not a Russet, Sweet, nor Laura Potato.</h1>
</div>
```

Only one of the `*ngSwitch…` expressions renders. Notice the `[ngSwitch]` attribute inside of the `div` element wrapping the switch. This passes the value of `potato` along the `*ngSwitch...` chain. This chain of structural directives determine which `h1` element renders.

As such, `[ngSwitch]` is not a structural directive unlike the `*ngSwitch…` statements. It passes the value along whereas the switch block determines the final layout of HTML.

Remember that stylization and value passing are not the responsibility of structural directives. That concerns attribute directives. Structural directives determine only the layout.

#### Structural Directive Creation[<sup>1</sup>](https://angular.io/guide/structural-directives)

There is something important to understand about the previous examples. They are all shorthand by the beginning asterisk (`*`). `ng-template` is used under the hood with each application of the asterisk.

`ng-template` defines structural directives. It explains how they can configure template HTML to produce actual HTML. Begin by creating a directive with `ng generate directive [name-of-directive]`. Replace `[name-of-directive]` with a preferable name. The command yields the following.

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {
  constructor() { }
}
```

This directive skeleton is pretty bare. It does not yet know whether we are building a structural or attribute directive. The `selector: ‘[appExample]’` tells Angular what attribute the directive maps to. Since you are creating a structural directive, modify the skeleton as follows.

```typescript
Import { Directive, Input, TemplateRef, ViewContainerRef } from ‘@angular/core’;

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

Including an arbitrary element with the `appExample` attribute serves as a good example.

```html
<div *appExample=“value”>innerHTML content</div>
<!-- This is shorthand for:
<ng-template>
  <div>innerHTML content</div>
</ng-template>
-->
```

This is a lot to take in. `@Input() set ...` is a setter member declaration. It executes whenever the `appExample` attribute appears within an element and is assigned a boolean value.. The setter function receives that boolean value as its parameter for execution.

`TemplateRef<any>` references the innerHTML of `<ng-template></ng-template>`. The asterisk used in prior examples is shorthand for the comment in the above code block. `ng-template` acts as the *secret sauce* to it structural directives.

`ViewContainerRef` references the encapsulating scope of `<ng-template></ng-template>`. `ng-template` is not an actual element. It is a marker to the Angular compiler that eventually gets commented out.

`ViewContainerRef` has two methods: `clear()` and `createEmbeddedView()`. You can think of embedded views as the HTML scoped within an `ng-template` element.

`clear()` removes any existing HTML scoped within `ng-template` from the HTML display. `createEmbeddedView()` targets the HTML within `ng-template` as displayable HTML.

If understand the latest code example, then you have a solid grasp `*ngIf`, `*ngFor`, `*ngSwitchCase`, and `*ngSwitchDefault`. They all determine the layout with reference to the `TemplateRef<any>` and `ViewContainerRef`.

In fact, the ExampleDirective above mimics the functionality of `*ngIf`!

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

Never forget the asterisk (`*`). It is shorthand for the `ng-template` element that our directive class references.

#### Attribute Directive

Attribute directives are similar to structural. Except, attribute directives have zero effect on the HTML layout. They do not implement `<ng-template></ng-template>`. They are attributes that reference their host element for stylistic changes.

An example best explains their purpose.

#### Attribute Directive Creation[<sup>2</sup>](https://angular.io/guide/attribute-directives)

Generate another directive: `ng generate directive [name-of-directive]`. Replace `[name-of-directive]` with a preferable name.

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {
  constructor() { }
}
```

Attribute and structural directives both begin with the same skeleton. A few more additions will distinguish the attribute directive.

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

A few elements to test with will help.

```html
<!-- the intended results are self-explanatory -->
<div appExample=“purple”>This text is purple!</div>
<div appExample=“blue”>This text is blue!</div>
<div appExample=“red”>This text is red!</div>
```

`ElementRef` provides a direct reference to host element. `ElementRef.nativeElement` grabs the DOM node. With the node, styling the component is as simple as `this.host.nativeElement.style.color = color`.

`@Input() set ...` is another setter function that reads the value it is assigned upon its implementation as an attribute. It reassigns the color property of each element’s stylesheet.

#### Conclusion

Directives are a powerful tool available in Angular’s template HTML. They are how components connect across each other. Within each component they provide a means of style and layout.

There are many other options for building out each type of directive. Unfortunately, covering each one is too much for one article. Having a basic understanding of directives is enough to move forward with more advanced resources.

Check out the below resources to dive deeper. There are links for each type of directive. Each link is a part of the same documentation, so no need to return here after visiting the first link!

## Sources

1. [Angular Team. *Structural Directives*. Google. Accessed 28 May 2018](https://angular.io/guide/structural-directives)

2. [Angular Team. *Attribute Directives*. Google. Accessed 28 May 2018](https://angular.io/guide/attribute-directives)

## Resources

- [Angular Documentation](https://angular.io/guide/pipes)

- [Angular GitHub Repository](https://github.com/angular/angular)

- [Angular Components](https://angular.io/guide/architecture-components)

- [Angular Structural Directives](https://angular.io/guide/structural-directives)

- [Angular Attribute Directives](https://angular.io/guide/attribute-directives)

- [Angular CLI](https://cli.angular.io)
