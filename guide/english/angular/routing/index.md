---
title: Routing
---

# Routing

#### Motivation

Routing is essential. Many modern web applications host too much information for one page. Users should not have to scroll through an entire application’s worth of content either. An application needs to split itself into distinguishable sections.

Users prioritize necessary information. Routing helps them find the application section with such information. Any other information useful to other users may exist on an entirely separate route. With routing, both users can find what they need quickly. Irrelevant details stay obscured behind irrelevant routes.

Routing excels at sorting and restricting access to application data. Sensitive data should never display to unauthorized users. Between every route the application may intervene. It can examine a user’s session for authentication purposes. This examination determines what the route renders if it should render at all. Routing gives developers the perfect chance to verify a user before proceeding.

Creating a list of routes promotes organization as well. In terms of development, it keeps the developer thinking in distinguishable sections. Users benefit from this too, but more-so developers when navigating the application code. A list of programmatic routers paints an accurate model of the application’s front end.

As for Angular, routing takes up its own entire library within the framework. All modern front-end frameworks support routing, and Angular is no different. Routing happens from the client-side using either hash or location routing. Both styles allow the client to manage its own routes. No additional assistance from the server is necessary past the initial request.

The web browser rarely refreshes using client-side routing. Web browser utilities such as bookmarks, history, and the address bar still work despite no refreshing. This makes for a slick routing experience that does not mess up the browser. No more jumpy page reloads while routing to a different page.

Angular adds on a layer of abstraction over the core technologies used for routing. This article intends to explain this abstraction. There exists two routing strategies in Angular: path location and hash. This article focuses on the path location strategy since its the default option.

Plus, path location may deprecate hash routing following the full release of [Angular Universal](https://universal.angular.io). Regardless, the two strategies are very similar in implementation. Learning one learns the other. Time to get started!

#### RouterModule Setup

Routing utilities export with `RouterModule` available from `@angular/router`. It is not part of the core library since not all applications require routing. The most conventional way to introduce routing is as its own [feature module](https://angular.io/guide/feature-modules).

As route complexity grows, having it as its own module will promote the root module’s simplicity. Keeping it stupid simple without compromising functionality constitutes good design for modules.

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AComponent } from '../../components/a/a.component';
import { BComponent } from '../../components/b/b.component';

// an array of soon-to-be routes!
const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
```

`.forRoot(...)` is a class function available from the RouterModule class. The function accepts an array of `Route` objects as `Routes`. `.forRoot(...)` configures routes for eager-loading while its alternative `.forChild(...)` configures for lazy-loading.

Eager-loading meaning the routes load their content into the application from the get-go. Lazy-loading happens on-demand. The focus of this article is eager-loading. It is the default approach for loading in an application. The RouterModule class definition looks something like the next block of code.

```typescript
@NgModule({
  // … lots of metadata ...
})
export class RouterModule {
  forRoot(routes: Routes) {
    // … configuration for eagerly loaded routes …
  }

  forChild(routes: Routes) {
    // … configuration for lazily loaded routes …
  }
}
```

Do not worry about the configuration details the example omits with comments. Having a general understanding will do for now.

Notice how AppRoutingModule imports the RouterModule while also exporting it. This makes sense given AppRoutingModule is a feature module. It imports into the root module as a feature module. It exposes RouterModule directives, interfaces, and services to the root component tree.

This explains why AppRoutingModule must export RouterModule. It does so for the sake of the root module’s underlying component tree. It needs access to those routing utilities!

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    AppRoutingModule, // routing feature module
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

The AppRoutingModule token imports from the very top. Its token inserts into the root module’s imports array. The root component tree may now utilize the RouterModule library. That includes its directives, interfaces, and services as already mentioned. Big thanks goes to AppRoutingModule for exporting RouterModule!

The RouterModule utilities will come in handy for the root’s components. The basic HTML for AppComponent makes use of one directive: `router-outlet`.

```html
<!-- app.component.html -->

<ul>
  <!-- routerLink(s) here -->
</ul>
<router-outlet></router-outlet>
<!-- routed content appends here (AFTER THE ELEMENT, NOT IN IT!) -->
```

`routerLink` is an attribute directive of RouterModule. It will attach to each element of `<ul></ul>` once the routes are setup. `router-outlet` is a component directive with interesting behavior. It acts more as a marker for displaying routed content. Routed content results from navigation to a specific route. Usually that means a single component as configured in AppRoutingModule

The routed content renders right after `<router-outlet></router-outlet>`. Nothing renders inside of it. This does not make too much of a considerable difference. That said, do not expect `router-outlet` to behave like a container for routed content. It is merely a marker for appending routed content to the Document Object Model (DOM).

#### Basic Routing

The previous section establishes the basic setup for routing. Before actual routing can happen, a few more things must be addressed

The first question to address is what routes will this application consume? Well, there are two components: AComponent and BComponent. Each one should have its own route. They can render from AppComponent’s `router-outlet` depending on the current route location.

The route location (or path) defines what appends to a [website's origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) (e.g. http://localhost:4200) through a series of slashes (`/`).

```typescript
// … same imports from before …

const routes: Routes = [
  {
    path: 'A',
    component: AComponent
  },
  {
    path: 'B',
    component: BComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
```

`http://localhost:4200/A` renders AComponent from AppComponent’s `router-outlet`. `http://localhost:4200/B` renders BComponent. You need a way to route to these locations without using the address bar though. An application should not rely upon a web browser's address bar for navigation.

*The global CSS (Cascading Style-sheets) supplements the HTML below it. An application’s router link ought to have a pleasant appearance. This CSS applies to all other examples too.*

```css
/* global styles.css */

ul li {
  cursor: pointer;
  display: inline-block;
  padding: 20px;
  margin: 5px;
  background-color: whitesmoke;
  border-radius: 5px;
  border: 1px solid black;
}

ul li:hover {
  background-color: lightgrey;
}
```
```html
<!-- app.component.html -->

<ul>
  <li routerLink="/A">Go to A!</li>
  <li routerLink="/B">Go to B!</li>
</ul>
<router-outlet></router-outlet>
```

This is basic routing! Clicking either of the routerLink elments routes the web address. It reassigns it without refreshing the web browser. Angular’s `Router` maps the routed address to the `Routes` configured in AppRoutingModule. It matches the address to the `path` property of a single `Route` object within the array. First match always wins, so match-all routes should lie at the very end of the `Routes` array.

Match-all routes prevent the application from crashing if it cannot match the current route. This can happen from the address bar where the user may type in any route. For this, Angular provides a wildcard path value `**` that accepts all routes. This route usually renders a PageNotFoundComponent component displaying “Error 404: Page not found”.

```typescript
// … PageNotFoundComponent imported along with everything else …

const routes: Routes = [
  {
    path: 'A',
    component: AComponent
  },
  {
    path: 'B',
    component: BComponent
  },
  {
    path: '',
    redirectTo: 'A',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
```

The `Route` object containing `redirectTo` keeps the PageNotFoundComponent from rendering as a result of `http://localhost:4200`. This is the applications home route. To fix this, `redirectTo` reroutes the home route to `http://localhost:4200/A`. `http://localhost:4200/A` indirectly becomes the application’s new home route.

The `pathMatch: 'full'` tells the `Route` object to match against the home route (`http://localhost:4200`). It matches the empty path.

These two new `Route` objects go at the end of the array since first match wins. The last array element (`path: '**'`) always matches, so it goes last.

There is one last thing worth addressing before moving on. How does the user know where he or she is in the application relative to the current route? Sure there may be content specific to the route, but how is user supposed to make that connection? There should be some form of highlighting applied to the routerLinks. That way, the user will know which route is active for the given web page.

This is an easy fix. When you click a `routerLink` element, Angular’s `Router` assigns *focus* to it. This focus can trigger certain styles which provide useful feedback to the user. The `routerLinkActive` directive can track this focus for the developer.

```html
<!-- app.component.html -->

<ul>
  <li routerLink="/A" routerLinkActive="active">Go to A!</li>
  <li routerLink="/B" routerLinkActive="active">Go to B!</li>
</ul>
<router-outlet></router-outlet>
```

The right assignment of `routerLinkActive` represents a string of classes. This example portrays only one class (`.active`), but any number of space-delimited classes may apply. When the `Router` assigns *focus* to a routerLink, the space-delimited classes apply to the host element. When the focus shifts away, the classes get removed automatically.

```css
/* global styles.css */

.active {
  background-color: lightgrey !important;
}
```

Users can now easily recognize how the current route and the page content coincide. `lightgrey` highlighting applies to the routerLink matching the current route. `!important` ensures the highlighting overrides inline stylings.

#### Parameterized Routes

Routes do not have to be completely hard-coded. They can contain dynamic variables referenceable from the component corresponding the `Route` object. These variables are declared as parameters when writing the route’s path.

Route parameters are either optional or mandatory for matching a particular `Route`. It depends on how a route writes its parameters. Two strategies exist: matrix and traditional parameterization.

Traditional parameterization begins from the `Routes` array configured in AppRoutingModule.

```typescript
const routes: Routes = [
  // … other routes …
  {
    path: 'B',
    component: BComponent
  },
  {
    path: 'B/:parameter',
    component: BComponent
  },
  // … other routes …
];
```

Focus on the two BComponent routes. Parameterization will eventually occur in both routes.

Traditional parameterization occurs in the second BComponent `Route`. `B/:parameter` contains the `parameter` parameter as indicated with the `:`. Whatever follows the colon marks the parameter's name. The `parameter` parameter is necessary for the second BComponent `Route` to match.

`parameter` reads in the value of whatever gets passed into the route. Routing to `http://localhost:4200/B/randomValue` will assign `parameter` the value of `randomValue`. This value can include anything besides another `/`. For example, `http://localhost:4200/B/randomValue/blahBlah` will not trigger the second BComponent `Route`. The PageNotFoundComponent renders instead.

BComponent can reference route parameters from its component class. Both approaches to parameterization (matrix and traditional) yield the same results in BComponent. Before seeing BComponent, examine the matrix form of parameterization below.

```typescript
// app.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router) { }

  routeMatrixParam(value: string) {
    if (value)
      this.router.navigate(['B', { parameter: value }]); // matrix parameter
    else
      this.router.navigate(['B']);
  }

  routeAddressParam(value: string) {
    this.router.navigate(['B', value]);
  }
}
```

Angular’s dependency injection system provides an instantiation of the `Router`. This lets the component programmatically route. The `.navigate(...)` function accepts an array of values that resolves to a *routable* path. Something like `.navigate(['path', 'to', 'something'])` resolves to `http://localhost:4200/path/to/something`.  `.navigate(...)` adds path-delimiting `/` marks when normalizing the array into a *routable* path.

The second form of parameterization occurs in `routeMatrixParam(...)`. See this line of code: `this.router.navigate(['B', { parameter: value }])`. This form of `parameter` is a matrix parameter. Its value is optional for the first BComponent `Route` to match (`/B`). The `Route` matches regardless of the parameter's presence in the path.

The `routeAddressParam(...)` resolves a route that matches the `http://localhost:4200/B/randomValue` parameterization approach. This traditional strategy needs a parameter to match the second BComponent route (`B/:parameter`).

The matrix strategy concerns `routeMatrixParam(...)`. With or without a matrix parameter in its path, the first BComponent route still matches. The `parameter` parameter passes to BComponent just like with the traditional approach.

To make full sense of the above code, here is the corresponding template HTML.

```html
// app.component.html

<ul>
  <li routerLink="/A">Go to A!</li>
  <li>
    <input #matrixInput>
    <button (click)="routeMatrixParam(matrixInput.value)">Matrix!</button>
  </li>
  <li>
    <input #paramInput>
    <button (click)="routeAddressParam(paramInput.value)">Param!</button>
  </li>
</ul>
<router-outlet></router-outlet>
```

In the template, values are accepted as text input. The input injects it into the route path as a parameter. Two separate sets of boxes exist for each parameterization strategy (traditional and matrix). With all the pieces coming together, it is time to examine the BComponent component class.

```typescript
// b.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-b',
  template: `
  <p>Route param: {{ currParam }}</p>
  `
})
export class BComponent implements OnInit {
  currParam: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param: ParamMap) => {
      this.currParam = param['parameter'];
    });
  }
}
```

BComponent results from either of two BComponent routes in AppRoutingModule. `ActivatedRoute` instantiates into a set of useful information pertaining to the current route. That is, the route that caused BComponent to render. `ActivatedRoute` instantiates via dependency injection targeting the class constructor.

The `.params` field of `ActivatedRoute.params` returns an `Observable` which emits the route parameters. Notice how the two different parameterization approaches result in the `parameter` parameter. The returned `Observable` emits it as a key-value pair inside of a `ParamMap` object.

Between the two parameterization approaches, the `parameter` parameter resolved identically. The value emits from `ActivatedRoute.params` despite the approach to parameterization.

The address bar distinguishes the final results of each approach. Matrix parameterization (optional for `Route` match) yields the address: `http://localhost:4200/B;parameter=randomValue`. Traditional parameterization (required for `Route` match) yields: `http://localhost:4200/B/randomValue`.

Either way, the same BComponent results. The actual difference: a different BComponent `Route` matches. This entirely depends upon the parameterization strategy. The matrix approach ensures parameters are optional for `Route` matching. The traditional approach requires them.

#### Nested Routes

`Routes` may form a hierarchy. In the DOM, this involves one parent `router-outlet` rendering at least one child `router-outlet`. In the address bar, it looks like this: `http://localhost/parentRoutes/childRoutes`. In the `Routes` configuration, the `children: []` property denotes a `Route` object as having nested (child) routes.

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NestComponent } from '../../components/nest/nest.component';
import { AComponent } from '../../components/nest/a/a.component';
import { BComponent } from '../../components/nest/b/b.component';

const routes: Routes = [
  {
    path: 'nest',
    component: NestComponent,
    children: [
      { path: 'A', component: AComponent },
      { path: 'B', component: BComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
```
```typescript
// nest.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-nest',
  template: `
  <ul>
    <li routerLink="./A">Go to A!</li>
    <li routerLink="./B">Go to B!</li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class NestComponent { }
```

NestComponent renders a `router-outlet` after rendering itself from another root-level `router-outlet` in AppComponent. The `router-outlet` of NestComponent’s template may render either AComponent (`/nest/A`) or BComponent (`/nest/B`).

The AppRoutingModule reflects this nesting in NestComponent’s `Route` object. The `children: []` field holds an array of `Route` objects. These `Route` object may also nest routes in their `children: []` fields. This can continue for however many layers of nested routes. The above example shows two layers of nesting.

Each `routerLink` contains a `./` as compared to `/`. The `.` ensures that the routerLink appends to the route path. The routerLink completely replaces the path otherwise. After routing to `/nest`, `.` expands into `/nest`.

This is useful for routing to either `/nest/A` or `/nest/B` from the `.nest` route. `A` and `B` constitute nested routes of `/nest`. Routing to `/A` or `/B` returns PageNotFound. `/nest` must prepend the two routes.

Take a look at the AppComponent containing the root-level `router-outlet` in its template. AppComponent is the first layer of nesting while NestComponent is the second.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li routerLink="/nest">Go to nested routes!</li>
    <li routerLink="/">Back out of the nested routes!</li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }
```

Inside the nest `Route` object, the `children: []` contains two more nested routes. They result in AComponent and BComponent when routing from `/nest` as previously discussed. These components are very simple for the sake of demonstration. `<li routerLink="/">...</li>` lets you navigate out of the nest routes to reset the example by navigating to the home route.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
  <p>a works!</p>
  `
})
export class AComponent { }
```
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-b',
  template: `
  <p>b works!</p>
  `
})
export class BComponent { }
```

The  `children: []`  array accepts `Route` object as elements. `children: []` can apply to any of these elements as well. The children of these elements can continue nesting. This pattern may continue for however many layers of nesting. Insert a `router-outlet` into the template for every layer of nested routing.

Routing techniques apply regardless of a `Route` object’s level of nesting. The parameterization techniques differ in only one aspect. Child routes can only access their parent’s parameters via `ActivatedRoute.parent.params`. `ActivatedRoute.params` targets the same level of nested routes. This excludes parent-level routes and their parameters.

`Route` guards are especially suited for nested routing. One `Route` object can restrict access to all its nested (child) routes.

#### Guarded Routes

Web applications often consist of public and private data. Both types of data tend to have their own pages with *guarded* routes. These routes allow/restrict access depending on the user’s privileges. Unauthorized users may interact with a guarded route. The route should block the user if he or she attempts to access its routed content.

Angular provides a bundle of authentication guards that can attach to any route. These methods trigger automatically depending on how the user interacts with the guarded route.

* `canActivate(...)` - fires when the user attempts to access a route

* `canActivateChild(...)` - fires when the user attempts to access a route’s nested (child) routes

* `canDeactivate(...)` - fires when the user attempts to leave a route

Angular’s guard methods are available from `@angular/router`. To help them authenticate, they may optionally receive a few parameters. Such parameters do not inject via dependency injection.  Under the hood, each value gets passed in as an argument to the invoked guard method.

* `ActivatedRouteSnapshot` - available to all three

* `RouterStateSnapshot` - available to all three

* `Component` - available to `canDeactivate(...)`

`ActivatedRouteSnapshot` provides access to the route parameters of the guarded route. `RouterStateSnapshot` exposes the URL (uniform resource locator) web address matching the route. `Component` references the component rendered by the route.

To guard a route, a class implementing the guard methods needs to first exist as a service. The service can inject into AppRoutingModule to guard its `Routes`. The token value for the service may inject into any one `Route` object.

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

import { PrivateNestComponent } from '../../components/private-nest/private-nest.component';
import { PrivateAComponent } from '../../components/private-nest/private-a/private-a.component';
import { PrivateBComponent } from '../../components/private-nest/private-b/private-b.component';

const routes: Routes = [
  {
    path: 'private-nest',
    component: PrivateNestComponent,
    canActivate: [ AuthService ], // !!!
    canActivateChild: [ AuthService ], // !!!
    canDeactivate: [ AuthService ], // !!!
    children: [
      { path: 'private-A', component: PrivateAComponent },
      { path: 'private-B', component: PrivateBComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthService,
    UserService
  ]
})
export class AppRoutingModule { }
```

`canActivate`, `canActivateChild`, and `canDeactivate` implement from AuthService. The service implementation will be shown shortly alongside the UserService implementation.

UserService provides the information needed to authenticate a user. The AuthService guard method implementations perform the authentication. AppRoutingModule must include the two services into its providers array. This is so the module’s injector knows how to instantiate them.

Nested routes exist off of the `/private-nest` path. The `Route` object for `/private-nest` contains a few more new fields. Their names should look familiar as they mirror their corresponding guard methods.

Each field fires its namesake's method implementation inside of the service when triggered. Any number of services can populate this array too. The method implementation of each service gets tested. They must return a boolean value or an `Observable` that emits a boolean value.

See the AuthService and UserService implementations below.

```typescript
// user.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

class TheUser {
  constructor(public isLoggedIn: boolean = false) { }

  toggleLogin() {
    this.isLoggedIn = true;
  }

  toggleLogout() {
    this.isLoggedIn = false;
  }
}

const globalUser = new TheUser();

@Injectable({
  providedIn: 'root'
})
export class UserService {
  theUser: TheUser = globalUser;

  constructor(private router: Router) { }

  get isLoggedIn() {
    return this.theUser.isLoggedIn;
  }

  login() {
    this.theUser.toggleLogin();
  }

  logout() {
    this.theUser.toggleLogout();
    this.router.navigate(['/']);
  }
}
```

The same instance of `TheUser` gets passed with each instantiation of UserService. `TheUser` provides access to `isLoggedIn` determining the user’s login status. Two other public methods let the UserService toggle the value of `isLoggedIn`. This is so the user can log in and out.

You can think of `TheUser` as a global instance. `UserService` is a instantiable interface that configures this global. Changes to `TheUser` from one `UserService` instantiation apply to every other `UserService` instance. `UserService` implements into AuthService to provide access to `isLoggedIn` of `TheUser` for authentication.

```typescript
import { Component, Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanActivateChild, CanDeactivate<Component> {
  constructor(private user: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.user.isLoggedIn)
      return true;
    else
      return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

  canDeactivate(component: Component, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.user.isLoggedIn || window.confirm('Leave the nest?'))
      return true;
    else
      return false;
  }
}
```

AuthService implements every guard method imported from `@angular/router`. Each guard method maps to a corresponding field in the PrivateNestComponent’s `Route` object. An instance of UserService instantiates from the AuthService constructor. AuthService determines if a user may proceed using `isLoggedIn` exposed by UserService.

Returning `false` from a guard instructs the route to block the user from routing. A return value of `true` lets the user proceed to his route destination. If more than one service authenticates, they all must return true to permit access. `canActivateChild` guards the child routes of PrivateNestComponent. This guard method accounts for users bypassing PrivateNestComponent through the address bar.

Guard method parameters pass in automatically upon invocation. While the example does not make use of them, they do supply useful information from the route. The developer can use this information to help authenticate the user.

AppComponent also instantiates UserService for direct use in its template. The UserService instantiation of AppComponent and AuthService reference the same user class (`TheUser`).

```typescript
import { Component } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li routerLink="/private-nest">Enter the secret nest!</li>
    <li routerLink="/">Leave the secret nest!</li>
    <li *ngIf="user.isLoggedIn"><button (click)="user.logout()">LOGOUT</button></li>
    <li *ngIf="!user.isLoggedIn"><button (click)="user.login()">LOGIN</button></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private user: UserService) { }
}
```

UserService handles all the logic for AppComponent. AppComponent mostly concerns its template. A UserService does instantiate as `user` from the class constructor. `user` data determines the template's functionality.

#### Conclusion

Routing strikes a fine balance between organizing and restricting sections of the application. A smaller application such as a blog or tribute page may not require any routing. Even then, including a little bit of hash routing could not hurt. A user may only want to reference part of the page after all.

Angular applies its own routing library built on top of the HTML5 [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). This API omits hash routing to instead use the `pushState(...)` and `replaceState(...)` methods. They change the web address URL without refreshing the page. The default path location routing strategy in Angular works this way. Setting `RouterModule.forRoot(routes, { useHash: true })` enables hash routing if preferred.

This article focused on the default path location strategy. Regardless of the strategy, many routing utilities are available to route an application. The `RouterModule` exposes these utilities through its exports. Basic, parameterized, nested, and guarded routes are all possible utilizing RouterModule. For more advanced implementations including lazily-loaded routes, see the below links.

## Sources

- [Angular Team. “Routing and Navigation”. *Google*. Accessed 8 June 2018.](https://angular.io/guide/router)
- [Hussain, Asim. “Angular 5: Routing”. *codecraft.tv*. Accessed 8 June 2018.](https://codecraft.tv/courses/angular/routing)
- [Smith, Peter. “3 Types of Route Loading in Angular, Explained In 500ish words”. *Upstate Interactive*, 3 May 2017. Accessed 8 June 2018.](https://blog.upstate.agency/3-types-of-route-loading-in-angular-explained-in-500ish-words-f22976e1f60b)
- [Koretskyi, Maxim. “Avoiding common confusions with modules in Angular”. *Angular In Depth*, 10 Aug. 2017. Accessed 8 June 2018.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## Resources

- [Angular Documentation](https://angular.io/guide)
- [Routing & Navigation](https://angular.io/guide/router)
- [Angular 5: Routing Tutorial by Asim Hussain](https://codecraft.tv/courses/angular/routing/overview)
- [Angular in Depth](https://blog.angularindepth.com)
- [Angular GitHub Repository](https://github.com/angular/angular)
- [Angular CLI](https://cli.angular.io)
