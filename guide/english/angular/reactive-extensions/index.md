---
title: Reactive Extensions
---

# Reactive Extensions in Angular

#### Motivation

Reactive extensions for JavaScript (RxJS) is a library for *observable* data streams. RxJS installs with Angular upon command-line execution of `ng new [name-of-application]`. This uses the Angular command-line interface (CLI). RxJS supplements how data streamlines through an `Observable`. The `Observable` object facilitates the flow of *iterable* data.

Streams of data are not the primary use-case. After all, data streams parallel event streams. Events emit so an application knows when data arrives. While event streams form the core of what RxJS supplements, this article refers to them as data streams too.

Streams execute either synchronously (immediate) or asynchronously (overtime). RxJS handles both cases with ease via the `Observable` data stream. Strict asynchronicity is toggleable though. Working with in-memory, *iterable* data happens immediately while external data fetching takes time. Angular supports the RxJS library so that it may handle both use-cases with data streams.

#### Reactive Programming

Before diving in, its important to understand the paradigm backing the RxJS library. As mentioned, it works through the `Observable` object which streamlines event-emitting data.

RxJS functions around the base `Observable`. Its whole library supplements what it can do. RxJS even includes other objects including `Subject`, `Subscription`, and `Observer`. Each is its own custom variant of the base `Observable`.

RxJS arose from the Reactive Programming paradigm. This paradigm introduced the *observable* pattern. In it there exists this key idea: a single `Observable` emits while all its `Observer`s get notified. `Observer`s *subscribe* to `Observable`s so that they receive notification. This notification can mean several things.

It might indicate data change or data arrival as commonly stated in this article. It could signal a change in some part of the application that affects the `Observer`s.

This *observable* pattern also strives to decouple concepts. An `Observable` should be able function without any `Observer`s and vice versa. This usually means they can stand-alone rather than fully function without each other.

If curious, you can learn more about the foundations of Reactive Programming by reading [this Wikipedia article](https://en.wikipedia.org/wiki/Reactive_programming). This section covers what is necessary for the rest of the article.

#### Observables

To quickly reiterate, `Observable`s can be *observed*. This so that one `Observable` provides feedback to its dependencies based on a stream of data. In RxJS, the `Observable` is its own factory function used to create `Observable` objects. Their basic blueprint is as follows.

```typescript
import { Observable } from 'rxjs';

const observable = Observable.create((source) => {
  source.next(data);
});
```

`.next` passes data while emitting an event to its observers. An `Observable` emits data from inside its `.create` callback using `.next`. It accepts one argument representing the data to emit. The `Observable` has not been implemented into JavaScript yet. RxJS provides an replacement from its library.

The next step is the observers. To tell a function or object to *observe* an `Observable`, the following syntax is used: `observable.subscribe(observer)`. Another way to look at it is `producer.subscribe(consumer)`. Observables *produce* data by calling `.next`. Consumers are then notified while receiving the data.

```typescript
import { Observable } from 'rxjs';

const observable = Observable.create((source) => {
  source.next("Hello");
  source.next("World!");
});

observable.subscribe((word) => console.log(word));
// console output
/*
Hello
World!
*/
```

Two invocations of `.next` occur from within the `Observable`'s `.create` callback (data producer). This results in two separate console outputs from the observer (data consumer).

The two invocations of `.next` represent a synchronous stream of data. Streams conceptualize data as a linear, in-order flow. It either resolves synchronously or asynchronously depending on the data’s availability.

If data comprising a stream is readily available, it executes synchronously. Otherwise, the stream resolves asynchronously overtime. The order of the data in either case is always the same depending on the invocation of `.next` within the observable.

An `Observable` operates like a queue. Calling `.next` on a piece of data pushes it to the back of the queue. Data pops from the front once resolved.

`Observable` data streams hold huge appeal. They are deterministic in their order and execute sensibly depending on data availability. Plus, any number of observers can *observe* the data source `Observable`. This means data can produce once and emit anywhere all in one operation.

Callback functions are not the only way to consume data. Observables can chain into each other as producers and consumers.

```typescript
const observableI = Observable.create((source) => {
  source.next("Hello World!");
});

const observableII = new Observable().subscribe((v) => console.log(v));

observableI.subscribe(observableII);
// console output
/*
Hello World!
*/
```

`.subscribe` is on the `Observable` object. You can call it with an `Observable` as its source (producer) and another observable as it argument (consumer). Data can flow (emit) through any number of observables.

#### Reactive Extensions for JavaScript (RxJS)

Streaming data is nice, but what is the point if observables cannot edit the stream? This where the RxJS library comes into play. It provides operators that perform various mutations on the data stream.

Angular leverages these operators to transform incoming data. Developers can trim off any unnecessary data from an incoming stream using RxJS operators. This saves memory and alleviates the need for additional transformation logic.

RxJS offers deviations from the standard `Observable` like `Subject`, `Subscription`, and `Observer`. Think of these deviations as special flavors of the traditional `Observable`. They are not necessary to make use of the library. That said, variants like `Subject` have incredible use-cases that surpass the standard `Observable`.

This article sticks with the standard `Observable`. All the data stream operators from RxJS work through the `Observable`.

Many core RxJS operators originated from JavaScript's Array Extras. The Array object's prototype contains many parallels to the RxJS library. These are otherwise known as 'Extras'. Arrays are stream-like structures similar to observable data steams.

To better understand RxJS operators, this article will briefly address JavaScript's Array Extras. Each on functions almost identically to its RxJS counterpart. The difference is simply the format of the data (iterable array vs iterable stream).

#### Array Extras

Arrays contain lots of utility methods. These methods are called Array Extras. They all exist on the Array object’s prototype. The list below contains five Extras with RxJS parallels.

* `.reduce`
* `.filter`
* `.map`
* `.every`
* `.forEach`

For each example, the array iterates over itself to produce a final result.

`.reduce` minimizes an array into a single value. `.filter` trims an array with boolean evaluation. `.map` transforms an array element-by-element. `.every` evaluates true or false for the entire array depending on a boolean condition. `.forEach` iterates through an array’s elements.

Arrays model streams. The are in-order of each other and iterate one-by-one. Observables streamline data elements to their observers in a similar fashion. This is why RxJS includes a logical counterpart to each Array Extra in its library. Granted, RxJS provides way more of its own operators than there are Array Extras.

#### Basic RxJS Operators

There is literally an entire library’s worth of RxJS operators. This article focuses on those listed below which the Array Extras inspired.

* `.reduce`
* `.filter`
* `.map`
* `.every`
* `.forEach`

Nothing has changed from previous list. Your understanding of Array Extras applies to RxJS operators. The only catch to this is a function called `.pipe` which will see much use in the next few examples. `.pipe` chains RxJS operators together. Results from the previous operator segue into the next up until the final operator. The resulting data then emits from the observable stream.

Note the standard example below. Use it for comparison for each operator’s impact on the emitted data stream.

```typescript
import { Observable, from } from ‘rxjs’;

const stream: number[] = [1, 2, 3, 4, 5];

const observable: Observable<number> = from(stream);
observable.subscribe((val: number) => console.log(val));

// console output
/*
1
2
3
4
5
*/
```

`.from` converts an array into an `Observable` object that calls `.next` on each array element. The `.pipe` function accepts any number of arguments as array operators. This is where every operator gets implemented. Operators execute on streamlined data in order of their implementation as arguments for `.pipe`.

##### Reduce

`.reduce` minimizes the data stream into a single value before emitting.

```typescript
import { reduce } from ‘rxjs/operators’;

const stream: number[] = [1, 2, 3, 4, 5];

const observable: Observable<number> = from(stream).pipe(
  reduce((accum, val) => (accum + val))
);
observable.subscribe((val: number) => console.log(val));

// console output
/*
15
*/
```

##### Filter

`.filter` trims a stream, eliminating stream values that do not satisfy its condition.

```typescript
import { filter } from ‘rxjs/operators’;

const stream: number[] = [1, 2, 3, 4, 5];

const observable: Observable<number> = from(stream).pipe(
  filter((val) => (val % 2 === 0)) // filters out odd numbers
);
observable.subscribe((val: number) => console.log(val));

// console output
/*
2
4
*/
```

##### Map

`.map` targets and transforms each ongoing stream value.

```typescript
const stream: number[] = [1, 2, 3, 4, 5];

const observable: Observable<number> = from(stream).pipe(
    map((val) => (val + 1))
);
observable.subscribe((val: number) => console.log(val));

// console output
/*
2
3
4
5
6
*/
```

##### Challenge: Every and ForEach

With knowledge of `.every` and `.forEach` as Array Extras, try to implement them as RxJS operators. Feel free to use the previous examples for guidance. A little bit of practice goes a long way after lots of reading!

#### HTTP in Angular

This section brings RxJS and Angular together to show how they interact. Typically, a service provided by Angular will provide the `Observable`. The `Observable`'s data stream can then mutate using RxJS operators with `.pipe`.

Angular provides an `HttpClient` service through `@angular/common/http`. `HttpClientModule` is also from `@angular/common/http` and exports the `HttpClient` service. The application's root module must import `HttpClientModule`. This makes `HttpClientModule` *injectable* from anywhere in the app.

The `HttpClientModule` service makes HTTP requests. These requests are asynchronous. What makes them interesting for Angular is how the request is handled. An `Observable` gets returned with each request. RxJS can take it away from there.

The upcoming example uses a public API built by [Typicode](https://jsonplaceholder.typicode.com). The API provides an array of 100 elements per asynchronous `GET` request.

```typescript
// ./models/post.model.ts

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
```

```typescript
// ./services/json.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { switchMap, map, filter, reduce } from 'rxjs/operators';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  constructor(private http: HttpClient) { }

  getPostsByUserId(id: number): Observable<any> {
    const trim$ = (stream) => from(stream)
      .pipe(
        filter((post: Post) => +post.userId === +id),
        map((post: Post) => ({ title: post.title, body: post.body })),
        reduce((accum: Post[], post: Post) => accum.concat([post]), [])
      );

    return this.http.get("https://jsonplaceholder.typicode.com/posts")
      .pipe(
        switchMap((value) => trim$(value))
      );
  }
}
```
```typescript
// ./components/example/example.component.ts

import { Component } from '@angular/core';

import { JsonService } from '../../services/json.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-example',
  template: `
  <h1>Request User Posts</h1>
  <span>User: </span><input #userInput>
  <button (click)="requestForPosts(userInput.value)">REQUEST</button>
  <hr>
  <ul>
    <div *ngIf="userPosts">
      <div *ngFor="let post of userPosts">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
    <h3 *ngIf="!userPosts">No posts shown...</h3>
  </ul>
  `
})
export class ExampleComponent {
  userPosts: Post[];

  constructor(private json: JsonService) { }

  requestForPosts(id: number): void {
    this.json.getPostsByUserId(id)
      .subscribe((posts: Post[]) => { this.userPosts = posts.length > 0 ? posts : null; });
  }
}
```

`json.service.ts` creates an `Observable` on behalf of `component.example.ts`. The component may subscribe to the returned `Observable`. Only one value emits by the time the `Observable` resolves the data stream.

The request to `jsonplaceholder.typicode.com` yields a single array of 100 posts. The request via `HttpClient` yields an `Observable`. The operator `switchMap` returns another `Observable` which overwrites the current stream. The variable `trim$` stores the `Observable` as its value. Appending a `$` to a variable used for storing `Observable`s is convention.

`from` converts the array from `jsonplaceholder.typicode.com` into a 100-value-emitting `Observable`. RxJS operators then sift through each piece of data in the stream. They remove stream values irrelevant to the request. Data trimming takes place so that stream values stay lean of unnecessary information. The final results join together once again as a single array that emits one to its observers.

In `component.example.ts`, the JsonService references the method returning the just-described `Observable`. This method invokes upon button click in the component template. The input box also in the template supplies the single `id` argument.

With the button pressed, JsonService returns an `Observable` that emits a single array. `.subscribe` invokes on the returned `Observable`. The component then sets the value of `userPosts` equal to the emitted array.

Angular Change Detection picks up on the change in class data. The template updates and `*ngFor` ensures each array element from `userPosts` renders its own template element.

#### Conclusion

RxJS provides the core `Observable` along with its operators. The library installs automatically from the command-line using `ng new [name-of-app]` (Angular CLI). The RxJS core types and operators download to `rxjs` and `rxjs/operators`, respectively.

Even if you do not use the CLI, services such as `HttpClient` are still usable. The service returns a `Promise` instead of an `Observable` if RxJS is unavailable. The `Promise` object is native to JavaScript unlike the `Observable`. This will likely change in the next official JavaScript release.

That said, take full advantage of RxJS! Any iterable structure can accommodate the `Observable`. With it, the whole RxJS library becomes usable. Its operators efficiently transform data from a stream into results. Plus, observers can subscribe to results, increasing the overall portability of the data.

## Sources

- [Angular Team. “The RxJS library”. *Google*. Accessed 5 June 2018.](https://angular.io/guide/rx-library)
- [Forbes, Elliot. “Creating a Realtime App with Angular and Socket.io Tutorial”. *TutorialEdge.net*, 10 Jan. 2017. Accessed 5 June 2018.](https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial)
- [RxJS Team. “RxJS Documentation”. *RxJS*. Accessed 5 June 2018.](https://rxjs-dev.firebaseapp.com)
- [Sukale, Ryan. “Difference between Rxjs Subject and Observable”. *TutorialHorizon*, 23 Mar. 2017. Accessed 5 June 2018.](https://javascript.tutorialhorizon.com/2017/03/23/rxjs-subject-vs-observable)
- [Wikipedia Community. “Reactive programming”. *Wikipedia*, 2 June 2018. Accessed 5 June 2018.](https://en.wikipedia.org/wiki/Reactive_programming)

## Resources

- [Angular Documentation](https://angular.io/guide)
- [Angular on GitHub](https://github.com/angular/angular)
- [Angular CLI](https://cli.angular.io)
- [RxJS and Angular](https://angular.io/guide/rx-library)
- [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming)
- [Reactive Extensions for JavaScript](https://rxjs-dev.firebaseapp.com)
