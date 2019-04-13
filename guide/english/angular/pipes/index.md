---
title: Pipes
---

# Pipes

#### Motivation

Output data transformations. They ensure data is in a desirable format by the time it loads onto the user’s screen. Normally data transforms behind the scenes. With pipes, transforming data can take place in the template HTML. Pipes transform template data directly.

Pipes look nice and are convenient. They help keep the component’s class lean of basic transformations. To put it technically, pipes encapsulate data transformation logic.

#### Output Transformation

As mentioned in the prior section, pipes transform data inline. The syntax of pipes correlate shell scripting. In many scripts, the output of one part of the command gets *piped* as output into the next part as input. That same trend characterizes Angular pipes.

In Angular, there exists many ways to interact with data in the template HTML. Pipes can apply anywhere data gets parsed into the template HTML. They can occur within microsyntax logic and innerHTML variable interpolations. Pipes account for all transformations without adding onto the component class.

Pipes are also *chainable*. You can integrate pipes one after the other to perform increasingly complex transformations. As specialized data transformers, pipes are hardly trivial.

#### Use Cases

Angular comes prepackaged with a basic set of pipes. Working with a couple of them will develop the intuition to handle the rest. The following list provides three examples.

* AsyncPipe

* DatePipe

* TitleCasePipe

##### AsyncPipe

This sections requires a basic understanding of Promises or Observables to fully appreciate. The AsyncPipe operates on either of the two. AsyncPipe extracts data from Promises/Observables as output for whatever comes next.

In the case of Obervables, AsyncPipe subscribes automatically to the data source. Regardless of where the data comes from, the AsyncPipe subscribes to the source observable. `async` is the syntactical name of AsyncPipe as shown below.

```html
<ul *ngFor=“let potato of (potatoSack$ | async); let i=index”>
  <li>Potatoe {{i + 1}}: {{potato}}</li>
</ul>
```

In the example, `potatoSack$` is an Observable pending an upload of potatoes. Once the potatoes arrive, either synchronously or asynchronously, the AsyncPipe receives them as an *iterable* array. The list element then fills up with potatoes.

##### DatePipe

Formatting date strings takes a fair bit of hacking with the JavaScript `Date` object. The DatePipe provides a powerful way to format dates assuming the given input is a valid time format.

##### TitleCasePipe
Transforms text to title case. Capitalizes the first letter of each word, and transforms the rest of the word to lower case. Words are delimited by any whitespace character, such as a space, tab, or line-feed character.

```typescript
// example.component.ts

@Component({
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  timestamp:string = ‘2018-05-24T19:38:11.103Z’;
}
```
```html
<!-- example.component.html -->

<div>Current Time: {{timestamp | date:‘short’}}</div>
```

The format of the above `timestamp` is [ISO 8601<sup>1</sup>](https://en.wikipedia.org/wiki/ISO_8601)—not the easiest to read. The DatePipe (`date`) transforms the ISO date format into a more conventional `mm/dd/yy, hh:mm AM|PM`. There are many other formatting options. All these options are in the [official documentation](https://angular.io/api/common/DatePipe).

#### Creating Pipes

While Angular only has a set number of pipes, the `@Pipe` decorator lets developers create their own. The process begins with `ng generate pipe [name-of-pipe]`, replacing `[name-of-pipe]` with a preferable filename. This is an [Angular CLI](https://cli.angular.io) command. It yields the following.

```typescript
import { Pipe, PipeTransform } from ‘@angular/core’;

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {
  transform(value: any, args?: any): any {
      return null;
  }
}
```

This pipe template simplifies custom pipe creation. The `@Pipe` decorator tells Angular the class is a pipe. The value of `name: ‘example’`, in this case being `example`, is the value Angular recognizes when scanning template HTML for custom pipes.

On to the class logic. The `PipeTransform` implementation provides the instructions for the `transform` function. This function has special meaning within context of the `@Pipe` decorator. It receives two parameters by default.

`value: any` is the output that the pipe receives. Think of `<div>{{ someValue | example }}</div>`. The value of someValue gets passed to the `transform` function’s `value: any` parameter. This is the same `transform` function defined in the ExamplePipe class.

`args?: any` is any argument that the pipe optionally receives. Think of `<div>{{ someValue | example:[some-argument] }}</div>`. `[some-argument]` can be replace by any one value. This value gets passed to the `transform` function’s `args?: any` parameter. That is, the `transform` function defined in ExamplePipe's class.

Whatever the function returns (`return null;`) becomes the output of the pipe operation. Take a look at the next example to see a complete example of ExamplePipe. Depending on the variable the pipe receives, it either uppercases or lowercases the input as new output. An invalid or nonexistent argument will cause the pipe to return the same input as output.

```typescript
// example.pipe.ts

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {
  transform(value:string, args?:string): any {
    switch(args || null) {
      case 'uppercase':
        return value.toUpperCase();
      case 'lowercase':
        return value.toLowerCase();
      default:
        return value;
    }
  }
}
```
```typescript
// app.component.ts

@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {
  someValue:string = "HeLlO WoRlD!";
}
```
```html
<!-- app.component.html -->

<!-- Outputs “HeLlO WoRlD!” -->
<h6>{{ someValue | example }}</h6>

<!-- Outputs “HELLO WORLD!” -->
<h6>{{ someValue | example:‘uppercase’ }}</h6>

<!-- Outputs “hello world!” -->
<h6>{{ someValue | example:‘lowercase’ }}</h6>
```

Understanding the above example means you understand Angular pipes. There is only one more topic left to discuss.

#### Pure and Impure Pipes

Everything you have seen so far has been a *pure* pipe. `pure: true` is set by default in the `@Pipe` decorator's metadata. The difference between the two constitutes Angular’s change detection.

Pure pipes update automatically whenever the value of its derived input changes. The pipe will re-execute to produce new output upon a detectable change in the input value. Detectable changes are determined by Angular’s change detection loop.

Impure pipes update automatically whenever a change detection cycle occurs. Angular’s change detection happens quite often. It signals if changes have occurred in the component class’ member data. If so, the template HTML updates with the updated data. Otherwise, nothing will happen.

In the case of an impure pipe, it will update regardless of whether there is a detectable change or not. An impure pipe updates whenever change detection loops. Impure pipes usually consume lots of resources and are generally ill-advised. That said, they operate more as an escape hatch. If you ever need a detection-sensitive pipe, toggle `pure: false` in the `@Pipe` decorator’s metadata.

#### Conclusion

That covers pipes. Pipes have plenty of potential beyond the scope of this article. Pipes contribute succinct data transformations to your components’ template HTML. They are good practice in situations where data must undergo small transformations.

## Sources

1. [Wiki Community. *ISO 8601*. Wikipedia. Accessed 27 May 2018](https://en.wikipedia.org/wiki/ISO_8601)

## Resources

- [Angular Documentation](https://angular.io/guide/pipes)
- [Angular GitHub Repository](https://github.com/angular/angular)
- [List of Pipes Pre-packaged with Angular](https://angular.io/api?query=pipe)
- [Angular CLI](https://cli.angular.io)
