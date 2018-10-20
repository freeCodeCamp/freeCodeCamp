---
title: Animations
---

# Animations

#### Motivation

Modern web components frequently use animations. Cascading Style Sheets (CSS) arms developers with the tools to create impressive animations. Property transitions, uniquely named animations, multi-part keyframes are possible with CSS. The animatable possibilities are endless thanks to CSS.

In a modern web application, animation focuses the user’s attention. Good animations seek to guide the user’s attention in a satisfying, productive manner. Animations should not prove annoying to the user.

Animations offer feedback in the form of movement. They show the user that the application is actively handling their requests. Something as simple as a visible button press or a loader when the application must load engages the user's attention.

Animations continue to grow more and more relevant in Angular’s case. Google develops Angular while promoting the Material Design philosophy. It encourages concise user interfaces (UI) supplemented with animated user feedback. It makes web applications feel somewhat alive and fun to use.

The Angular community develops a core widget library called [Material2](https://github.com/angular/material2). This project adds a variety of widget modules to Angular. Most of them feature animations. To understand how they work, this article recommends studying CSS animations before reading on.

Angular animations is the framework's streamlined version of what CSS natively provides. CSS is the core technology for Angular animations occurring within the web browser. CSS is beyond the scope of this article though. Its time to tackle Angular animations head-on.

#### Setting up Animations

Before animating, the `BrowserAnimationsModule` must include into the root module’s imports array. It is available from `@angular/platform-browser/animations`. This NgModule ensures animations work for the given platform. This article assumes the standard web browser for each example.

Angular animations declare within the `@Component` metadata. `@Component` decorates a class to distinguish it as a component to Angular. Its metadata contains component configurations including the `animations: []` field. Each array element from this field represents an animation trigger (`AnimationTriggerMetadata`).

Animations are exclusive to their host component via the decorator's metadata. Animations can only be used in the host component’s template. Animations do not inherit to the component's children. There is an easy work-around for this.

You could always create a separate file that exports an array. Any component class can import that array from the top of its host file. The imported array token then goes into the animations metadata of the component. Repeat this process for any other components requiring the same array in their animations metadata.

Content projection lets you apply animations to component A's content DOM (Document Object Model). Component B wrapping this content DOM can project the contents into its own template. Once it does, the animations of component A do not negate. Component B incorporates A's animations through content projection.

OK. You know how to setup animations and where to declare them. Implementation is the next step.

#### Animation Methods

Angular animations use a series of method calls importable from `@angular/animations`. Each element of the `@Component` animations array begins as a single method. Its arguments unravel as a sequence of higher-order method calls. The following list shows some of the methods used to build Angular animations.

* `trigger(selector: string, AnimationMetadata[])`

returns `AnimationTriggerMetadata`

* `state(data: string, AnimationStyleMetadata, options?: object)`

returns `AnimationStateMetadata`

* `style(CSSKeyValues: object)`

returns `AnimationStyleMetadata`

* `animate(timing: string|number, AnimationStyleMetadata|KeyframesMetadata)`

returns `AnimationAnimateMetadata`

* `transition(stateChange: string, AnimationMetadata|AnimationMetadata[], options?: object)`

returns `AnimationTransitionMetadata`

While there are certainly [more methods](https://angular.io/api/animations) to pick from, these five methods handle the basics. Trying to understand these core methods as a list does not help very much. Bullet-by-bullet explanations followed by an example will make better sense of it.

##### trigger(selector: string, AnimationMetadata[])

The `trigger(...)` method encapsulates a single element of animation inside the animations array.

The method’s first argument `selector: string` matches the `[@selector]` member attribute. It acts like an attribute directive in the component template. It essentially connects the animation element to the template through an attribute selector.

The second argument is an array containing a list of applicable animation methods. The `trigger(...)` keeps it altogether in a single array.

##### state(data: string, AnimationStyleMetadata, options?: object)

The `state(...)` method defines the final state of the animation. It applies a list of CSS properties to the target element after an animation concludes. This is so the animated element’s CSS matches the animation’s resolution.

The first argument matches the value of the data bound to the animation binding. That is, the value bound to `[@selector]` in the template matches against first argument of a `state(...)`. The data's value determines the final state. The changing of the value determines the means of animation (see `transition(...)`).

The second argument hosts the CSS styles that apply to an element post-animation. Styles get passed in by invoking `style(...)` and passing into its argument the desired styles as an object.

A list of options optionally occupies the third argument. The default `state(...)` options should remain unchanged unless reasoned otherwise.

##### style(CSSKeyValues: object)

You may have noticed `AnimationStyleMetadata` several times in the previous list. The `style(...)` component returns this exact type of metadata. Wherever CSS styles apply, the `style(...)` method must invoke. An object containing CSS styles stands-in for its argument.

Of course, styles animatable in CSS carry over into the Angular `style(...)` method. Granted, nothing impossible for CSS becomes suddenly possible with Angular animations.

##### animate(timing: string|number, AnimationStyleMetadata|AnimationKeyframesMetadata)

The `animate(...)` function accepts a timing expression as its first argument. This argument times, paces, and/or delays the method's animation. This argument accepts either a number or string expression. The formatting is explained [here](https://angular.io/api/animations/animate#usage).

The second argument of `animate(...)` is the CSS property warranting the animation. This takes the form of the `style(...)` method which returns `AnimationStyleMetadata`. Think of `animate(...)` as the method that initiates the animation.

A series of keyframes can also apply to the second argument. Keyframes is a more advanced option that this article explains later on. Keyframes distinguish various sections of the animation.

`animate(...)` may not receive a second argument. In that case, the method's animation timing only applies to the CSS reflected in the `state(...)` methods. Property changes in the trigger's `state(...)` methods will animate.

##### transition(changExpr: string, AnimationMetadata|AnimationMetadata[], options?: object)

`animate(...)` initiates an animation while `transition(...)` determines which animation initiates.

The first argument consists of a unique form of micro-syntax. It denotes a change in state (or change in data) taking place. The data bound to the template animation binding (`[selector]="value"`) determines this expression. The upcoming section titled “Animation State” explains this concept a bit further.

The second argument of `transition(...)` comprises `AnimationMetadata` (returned by `animate(...)`). The argument accepts either an array of `AnimationMetadata` or a single instance.

The first argument's value matches against the value of the data bound in the template (`[selector]="value"`) . If a perfect match occurs, the argument evaluates successfully. The second argument then initiates an animation in response to the success of the first.

A list of options optionally occupies the third argument. The default `transition(...)` options should remain unchanged unless reasoned otherwise.

##### Animation Example

```typescript
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-example',
  template: `
  <h3>Click the button to change its color!</h3>
  <button (click)="toggleIsCorrect()"     // event binding
    [@toggleClick]="isGreen">Toggle Me!</button>  // animation binding
    `,
    animations: [       // metadata array
      trigger('toggleClick', [     // trigger block
      state('true', style({      // final CSS following animation
        backgroundColor: 'green'
      })),
      state('false', style({
        backgroundColor: 'red'
      })),
      transition('true => false', animate('1000ms linear')),  // animation timing
      transition('false => true', animate('1000ms linear'))
    ])
  ]        // end of trigger block
})
export class ExampleComponent {
  isGreen: string = 'true';

  toggleIsCorrect() {
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value
  }
}
```

The above example performs a very simple color swap with each button click. Of course, the color transitions quickly in a linear fade as per `animate('1000ms linear')`. The animation binds to the button by matching the first argument of `trigger(...)` to the `[@toggleClick]` animation binding.

The binding binds to the value of `isGreen` from the component class. This value determines the resulting color as set by the two `style(...)` methods inside the `trigger(...)` block. The animation binding is one-way so that changes to `isGreen` in the component class notify the template binding. That is, the animation binding `[@toggleClick]`.

The button element in the template also has a `click` event bound to it. Clicking the button causes `isGreen` to toggle values. This changes the component class data. The animation binding picks up on this and invokes its matching `trigger(...)` method. The `trigger(...)` lies within the animations array of the component's metadata. Two things occur upon the trigger’s invocation.

The first occurrence concerns the two `state(...)` methods. The new value of `isGreen` matches against a `state(...)` method’s first argument. Once it matches, the CSS styles of `style(...)` apply to the final state of the animation binding’s host element. `The final state takes effect following all animation.

Now for the second occurrence. The data change that invoked the animation binding compares across the two `transition(...)` methods. One of them matches the change in data to their first argument. The first button click caused `isGreen` to go from ‘true’ to ‘false’ (‘true => false’). That means the first `transition(...)` method activates its second argument.

The `animate(...)` function corresponding the successfully evaluated `transition(...)` method initiates. This method sets the duration of the animated color fade along with the fade's pacing. The animation executes and the button fades to red.

This process can happen any number of times following a button click. The `backgroundColor` of the button will cycle between green and red in a linear fade.

#### Animation State

The `transition(...)` micro-syntax is worth addressing in detail. Angular determines animations and their timing by evaluating this syntax. There exists the following state transitions. They model a changes in data bound to an animation binding.

* `‘someValue’ => ‘anotherValue’`

An animation trigger where the bound data changes from ‘someValue’ to ‘anotherValue’.

* `‘anotherValue’ => ‘someValue’`

An animation trigger where the bound data changes from ‘anotherValue’ to ‘someValue’.

* `‘someValue’ <=> ‘anotherValue’`

Data changes from ‘someValue` to ‘anotherValue’ or vice versa.

There also exists `void` and `*` states. `void` indicates that the component is either entering or leaving the DOM. This is perfect for entry and exit animations.

* `‘someValue’ => void` : host component of bound data is *leaving* the DOM

* `void => ‘someValue’` : host component of bound data is *entering* the DOM

`*` denotes a wildcard state. Wildcard states can interpret to “any state”. This includes `void` plus any other change to the bound data.

#### Keyframes

This article touched on the basics for animating Angular applications. Advanced animation techniques exist alongside these basics. Grouping together keyframes is one such technique. Its inspired from the `@keyframes` CSS rule. If you have worked with CSS `@keyframes`, you already understand how keyframes in Angular work. It becomes just a matter of syntax

The `keyframes(...)` method imports from `@angular/animations`. It passes into the second argument of `animate(...)` instead of the typical `AnimationStyleMetadata`. The `keyframes(...)` method accepts one argument as an array of `AnimationStyleMetadata`. This can also be referred to as an array of `style(...)` methods.

Each keyframe of the animation goes inside the `keyframes(...)` array. These keyframe elements are `style(...)` methods supporting the `offset` property. `offset` indicates a point in the animation’s duration where its accompanying style properties should apply. Its value spans from 0 (animation start) to 1 (animation end).

```typescript
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-example',
  styles: [
    `.ball {
      position: relative;
      background-color: black;
      border-radius: 50%;
      top: 200px;
      height: 25px;
      width: 25px;
    }`
  ],
  template: `
  <h3>Arcing Ball Animation</h3>
  <button (click)="toggleBounce()">Arc the Ball!</button>
  <div [@animateArc]="arc" class="ball"></div>
  `,
  animations: [
    trigger('animateArc', [
      state('true', style({
        left: '400px',
        top: '200px'
      })),
      state('false', style({
        left: '0',
        top: '200px'
      })),
      transition('false => true', animate('1000ms linear', keyframes([
        style({ left: '0',     top: '200px', offset: 0 }),
        style({ left: '200px', top: '100px', offset: 0.50 }),
        style({ left: '400px', top: '200px', offset: 1 })
      ]))),
      transition('true => false', animate('1000ms linear', keyframes([
        style({ left: '400px', top: '200px', offset: 0 }),
        style({ left: '200px', top: '100px', offset: 0.50 }),
        style({ left: '0',     top: '200px', offset: 1 })
      ])))
    ])
  ]
})
export class ExampleComponent {
  arc: string = 'false';

  toggleBounce(){
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }
}
```

The main difference of the above example compared to the other example is the second argument of `animate(...)`. It now contains a `keyframes(...)` method hosting an array of animation keyframes. While the animation itself is also different, the technique to animate is similar.

Clicking the button causes the button to arc across the screen. The arc moves as per the `keyframes(...)` method’s array elements (keyframes). At the animation’s mid-point (`offset: 0.50`), the ball changes trajectory. It descends to its original height as it continues across the screen. Clicking the button again reverses the animation.

`left` and `top` are animatable properties after setting `position: relative;` for the element. The `transform` property can perform similar movement-based animations. `transform` is an expansive yet fully animatable property.

Any number of keyframes can existing between offset 0 and 1. Intricate animation sequences take the form of keyframes. They are one of many advanced techniques in Angular animations.

### Animations With Host Binding

You will undoubtedly come across the situation where you want to attach an animation to the HTML element of a component itself, instead of an element in the component's template. This requires a little more effort since you can't just go into the template HTML and attach the animation there. Instead, you'll have to import `HostBinding` and utilize that.

The minimal code for this scenario is shown below. I'll re-use the same animation condition for the code above for consistency and I don't show any of the actual animation code since you can easily find that above.

```typescript
import { Component, HostBinding } from '@angular/core';

@Component({
...
})
export class ExampleComponent {
  @HostBinding('@animateArc') get arcAnimation() {
    return this.arc;
  }
}
```

The idea behind animating the host component is pretty much the same as animating a element from the template with the only difference being your lack of access to the element you are animating. You still have to pass the name of the animation (`@animateArc`) when declaring the `HostBinding` and you still have to return the current state of the animation (`this.arc`). The name of the function doesn't actual matter, so `arcAnimation` could have been changed to anything, as long as it doesn't clash with existing property names on the component, and it would work perfectly fine.

#### Conclusion

This covers the basics of animating with Angular. Angular makes setting up animations very easy using the Angular CLI. Getting started with your first animation only requires a single component class. Remember, animations scope to the component’s template. Export your transitions array from a separate file if you plan to use it across multiple components.

Every animation utility/method exports from `@angular/animations`. They all work together to provide a robust system of animation inspired from CSS. There are more methods beyond what this article could cover.

Now that you know the basics, feel free to explore the links below for more on Angular animations.

## Sources

- [Angular Team. “Animations”. *Google*. Accessed 7 June 2018.](https://angular.io/guide/animations)
- [Angular Team. “Animations Package”. *Google*. Accessed 7 June 2018.](https://angular.io/api/animations)

## Resources

- [Angular Documentation](https://angular.io/guide)
- [Angular Animations Tutorial](https://angular.io/guide/animations)
- [Angular Animations API](https://angular.io/api/animations )
- [Angular GitHub Repository](https://github.com/angular/angular)
- [Angular CLI](https://cli.angular.io)
