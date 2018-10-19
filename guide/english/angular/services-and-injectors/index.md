---
title: Services and Injectors
---


# Services and Injectors

#### Motivation

Components are responsible for the data that renders into the template. Having external *services* to draw upon can simplify this responsibility. Plus, encapsulating extraneous is much easier to maintain.

Delegating too many responsibilities onto a single component can complicate the component class. And what if these responsibilities applied to several components? Copying and pasting such logic is extremely poor practice. Any future changes to the logic would be harder to implement and test.

Angular meant to curb this issue with services and dependency injection. Both concepts work together to provide *modular* functionality.

Components do not need to provide any extraneous information either. A services imports what it needs to function on behalf of the components it *services*. The components only need to instantiate the service. From there they *service* their own needs with the instantiated service instance.

As for testing and future modification, all the logic is in one place. The service instantiates from its source. Tests and modifications to the source apply anywhere the service is injected.

#### Introduction to Services

A service is a type of *schematic* available in Angular. It is generatable by the command-line interface (CLI): `ng generate service [name-of-service]`. Replace `[name-of-service]` with a preferable name. The CLI command yields the following.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() { }
}
```

The logic of a service is distinct within its class.  Angular interprets a class as an *injectable* service based off the `@Injectable` decorator. Injectable services must *register* with an injector.

The component instantiates a service while the injector provides that instance. Keep reading into the next section for more on injectors.

The `@Injectable` metadata field `providedIn: ‘root’` targets the root module of the current application (`app.module.ts`). It registers the service with the module’s injector so that it can *inject* that service into any of its children.

Injectors are the building blocks of Angular's dependency injection system. Injectors are a good place to focus your attention before continuing with services.

#### Injectors

An application, beginning with `app.module.ts`, contains a hierarchy of injectors. They exist alongside each module and component in the application tree.

![Application Hierarchy](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image5.png)

The green circles indicate injectors. They provide service instances to instantiating components. Depending on which injector a service is registered with, it may or may not be available to a component.

Services registered at the root of the app (`app.module.ts`) are available to all components. An injector for a component may not have a certain service registered. If that is the case and the component requests its instantiation, the injector will defer to its parent. This trend continues until either reaching the root injector or the service is found.

Looking at the diagram, say that a service registers at point B’s injector. All components at point C and down will not be able to access the service registered at B’s injector. Injectors will never defer to their children for a service instance.

#### Dependency Injection

There are multiple ways to register a service with an application's injectors.

The `providedIn: ‘root’` metadata field of `@Injectable` provides the most recommended approach. This metadata field released with Angular 6.

As mentioned before,  `providedIn: ‘root’` registers a service with the root module injector. It is instantiable across the entire application as a result.

The novelty of `providedIn: ‘root’` is *tree-shaking*. If the service is unused despite its registration, it gets *shaken* from the application at run-time. That way it does not consume any resources.

The other two ways are more direct and traditional. Granted, they do not offer tree-shaking.

A service can register with any injector along the component tree. You insert the service as a provider in the `@Component` metadata field: `providers: []`. The service is available to the component and its children

In the third registration strategy, the `providers: []` metadata exists as its own field in the `@NgModule` decorator. The service is instantiable from the module to the underlying component tree.

Remember that unlike with `providedIn: ‘root’`, `@NgModule` registration does not offer tree-shaking. Both strategies are otherwise identical. Once a service registers with `@NgModule`, it consumes resources even if left unused by the application.

#### Services Continued

Writing an actual service comes next. To recap, services handle certain functions on behalf of an application’s components.

Services excel at handling common operations. They spare components the responsibility by doing so. It saves time not having to re-write common operations across multiple components. It is also more testable because the code is in one place. Changes only need to happen in one place without having to search elsewhere.

#### Use Cases

A couple examples goes a long way towards a complete understanding of services.

* console logs

* API requests

Both are common across most applications. Having services to handle these operations will reduce component complexity.

##### Console Logs

This example builds up from the base `@Injectable` skeleton. The skeleton is available through executing the CLI (`ng generate service [name-of-service]]`).

```typescript
// services/logger.service.ts

import { Injectable } from '@angular/core';

interface LogMessage {
  message:string;
  timestamp:Date;
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  callStack:LogMessage[] = [];

  constructor() { }

  addLog(message:string):void {
      // prepend new log to bottom of stack
      this.callStack = [{ message, timestamp: new Date() }].concat(this.callStack);
  }

  clear():void {
      // clear stack
      this.callStack = [];
  }

  printHead():void {
      // print bottom of stack
      console.log(this.callStack[0] || null);
  }

  printLog():void {
      // print bottom to top of stack on screen
      this.callStack.reverse().forEach((logMessage) => console.log(logMessage));
  }

  getLog():LogMessage[] {
      // return the entire log as an array
      return this.callStack.reverse();
  }
}
```

LoggerService registers with the root module through the `@Injectable` metadata. Thus it can instantiate in the `app.component.html`.

```typescript
// app.component.ts

import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  logs:object[] = [];

  constructor(private logger:LoggerService) { }

  updateLog():void {
      this.logger.printHead();
      this.logs = this.logger.getLog();
  }

  logMessage(event:any, message:string):void {
      event.preventDefault();

      this.logger.addLog(`Message: ${message}`);
      this.updateLog();
  }

  clearLog():void {
      this.logger.clear();
      this.logs = [];
  }

  ngOnInit():void {
      this.logger.addLog(“View Initialized”);
      this.updateLog();
  }
}
```

The template HTML provides further insight into the component’s use of LoggerService.

```html
<!-- app.component.html -->

<h1>Log Example</h1>

<form (submit)="logMessage($event, userInput.value)">
  <input #userInput placeholder="Type a message...">
  <button type="submit">SUBMIT</button>
</form>

<h3>Complete Log</h3>
<button type="button" (click)="clearLog()">CLEAR</button>
<ul>
  <li *ngFor="let log of logs; let i=index">{{ logs.length - i }} > {{ log.message }} @ {{ log.timestamp }}</li>
</ul>
```

This has the feel of a ToDo application. You can log messages and clear the log of messages. Imagine if all the logic from the service was shoved into AppComponent! It would have complicated the code. LoggerService keeps the log-related code encapsulated from the core AppComponent class.

##### Fetch Requests

Here is one more example worth playing around with. This example is possible thanks to [typicode’s JSONPlaceholder<sup>1</sup>](https://jsonplaceholder.typicode.com). The API is public and free to use.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// https://jsonplaceholder.typicode.com
// public API created by typicode @ https://github.com/typicode

interface Post {
  userId:number;
  id:number;
  title:string;
  body:string;
}

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id:number):Observable<Post> {
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
```

This is more of a stand-alone piece than a fully fleshed out example. Fetch requests tend to work better as an injectable service. The alternative is an over-complicated component. The injected class subscribes to what the PlaceholderService pre-configures.

#### Conclusion

Services and dependency injection are very useful together. They allow developers to encapsulate common logic and inject across multiple different components. This alone is a massive convenience for any future maintenance.

Injectors work as intermediaries. They mediate between instantiating components and a reservoir of registered services. Injectors offer these instantiable services to their branch children.

See the next few links for more information on services and dependency injection.

## Sources

1. [Typicode, *JSONPlaceholder*, https://jsonplaceholder.typicode.com, Accessed 29 May 2018.](https://jsonplaceholder.typicode.com)

## Resources

- [Angular Documentation](https://angular.io/docs)

- [Angular GitHub Repository](https://github.com/angular/angular)

- [Dependency Injection](https://angular.io/guide/dependency-injection-pattern)

- [Intro to Services and DI](https://angular.io/guide/architecture-services)
