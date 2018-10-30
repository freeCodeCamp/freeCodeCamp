# RxJS Lite Module #

The Reactive Extensions for JavaScript Lite version is a lightweight version of the Reactive Extensions for JavaScript which covers most of the day to day operators you might use all in a single library.  Functionality such as bridging to events, promises, callbacks, Node.js-style callbacks, time-based operations and more are built right in.  This comes with `rx.lite.js` which is for use in modern development environments such as > IE9 and server-side environments such as Node.js.

## Getting Started

There are a number of ways to get started with RxJS. 

### Installing with [NPM](https://npmjs.org/)

```bash`
$ npm install rx-lite
$ npm install -g rx-lite
```

### Using with Node.js and Ringo.js

```js
var Rx = require('rx-lite');
```

### In a Browser:

```html
<!-- Just the core RxJS -->
<script src="path/to/rx.lite.js"></script>
```

## Included Observable Operators ##

### `Observable Methods`
- [`catch | catchException`](../../doc/api/core/operators/catch.md)
- [`concat`](../../doc/api/core/operators/concat.md)
- [`create | createWithDisposable`](../../doc/api/core/operators/create.md)
- [`defer`](../../doc/api/core/operators/defer.md)
- [`empty`](../../doc/api/core/operators/empty.md)
- [`from`](../../doc/api/core/operators/from.md)
- [`fromArray`](../../doc/api/core/operators/fromarray.md)
- [`fromCallback`](../../doc/api/core/operators/fromcallback.md)
- [`fromEvent`](../../doc/api/core/operators/fromevent.md)
- [`fromEventPattern`](../../doc/api/core/operators/fromeventpattern.md)
- [`fromNodeCallback`](../../doc/api/core/operators/fromnodecallback.md)
- [`fromPromise`](../../doc/api/core/operators/frompromise.md)
- [`interval`](../../doc/api/core/operators/interval.md)
- [`just`](../../doc/api/core/operators/return.md)
- [`merge`](../../doc/api/core/operators/merge.md)
- [`mergeDelayError`](../../doc/api/core/operators/mergedelayerror.md)
- [`never`](../../doc/api/core/operators/never.md)
- [`of`](../../doc/api/core/operators/of.md)
- [`ofWithScheduler`](../../doc/api/core/operators/ofwithscheduler.md)
- [`range`](../../doc/api/core/operators/range.md)
- [`repeat`](../../doc/api/core/operators/repeat.md)
- [`return | returnValue`](../../doc/api/core/operators/return.md)
- [`throw | throwError | throwException`](../../doc/api/core/operators/throw.md)
- [`timer`](../../doc/api/core/operators/timer.md)
- [`zip`](../../doc/api/core/operators/zip.md)
- [`zipArray`](../../doc/api/core/operators/ziparray.md)

### `Observable Instance Methods`
- [`asObservable`](../../doc/api/core/operators/asobservable.md)
- [`catch | catchException`](../../doc/api/core/operators/catchproto.md)
- [`combineLatest`](../../doc/api/core/operators/combinelatest.md)
- [`concat`](../../doc/api/core/operators/concatproto.md)
- [`concatMap`](../../doc/api/core/operators/concatmap.md)
- [`connect`](../../doc/api/core/operators/connect.md)
- [`debounce`](../../doc/api/core/operators/debounce.md)  
- [`defaultIfEmpty`](../../doc/api/core/operators/defaultifempty.md)
- [`delay`](../../doc/api/core/operators/delay.md)
- [`dematerialize`](../../doc/api/core/operators/dematerialize.md)
- [`distinctUntilChanged`](../../doc/api/core/operators/distinctuntilchanged.md)
- [`do | doAction`](../../doc/api/core/operators/do.md)
- [`doOnNext`](../../doc/api/core/operators/doonnext.md)
- [`doOnError`](../../doc/api/core/operators/doonerror.md)
- [`doOnCompleted`](../../doc/api/core/operators/dooncompleted.md)
- [`filter`](../../doc/api/core/operators/where.md)
- [`finally | finallyAction`](../../doc/api/core/operators/finally.md)
- [`flatMap`](../../doc/api/core/operators/selectmany.md)
- [`flatMapLatest`](../../doc/api/core/operators/flatmaplatest.md)
- [`ignoreElements`](../../doc/api/core/operators/ignoreelements.md)
- [`map`](../../doc/api/core/operators/select.md)
- [`merge`](../../doc/api/core/operators/mergeproto.md)
- [`mergeObservable | mergeAll`](../../doc/api/core/operators/mergeall.md)
- [`multicast`](../../doc/api/core/operators/multicast.md)
- [`publish`](../../doc/api/core/operators/publish.md)
- [`publishLast`](../../doc/api/core/operators/publishlast.md)
- [`publishValue`](../../doc/api/core/operators/publishvalue.md)
- [`refCount`](../../doc/api/core/operators/refcount.md)
- [`repeat`](../../doc/api/core/operators/repeat.md)
- [`replay`](../../doc/api/core/operators/replay.md)
- [`retry`](../../doc/api/core/operators/retry.md)
- [`retryWhen`](../../doc/api/core/operators/retrywhen.md)
- [`sample`](../../doc/api/core/operators/sample.md)
- [`scan`](../../doc/api/core/operators/scan.md)
- [`select`](../../doc/api/core/operators/select.md)
- [`selectConcat`](../../doc/api/core/operators/concatmap.md)
- [`selectMany`](../../doc/api/core/operators/selectmany.md)
- [`selectSwitch`](../../doc/api/core/operators/flatmaplatest.md)
- [`singleInstance`](../../doc/api/core/operators/singleinstance.md)
- [`skip`](../../doc/api/core/operators/skip.md)
- [`skipLast`](../../doc/api/core/operators/skiplast.md)
- [`skipUntil`](../../doc/api/core/operators/skipuntil.md)
- [`skipWhile`](../../doc/api/core/operators/skipwhile.md)
- [`startWith`](../../doc/api/core/operators/startwith.md)
- [`subscribe | forEach`](../../doc/api/core/operators/subscribe.md)
- [`subscribeOnNext`](../../doc/api/core/operators/subscribeonnext.md)
- [`subscribeOnError`](../../doc/api/core/operators/subscribeonerror.md)
- [`subscribeOnCompleted`](../../doc/api/core/operators/subscribeoncompleted.md)
- [`switch | switchLatest`](../../doc/api/core/operators/switch.md)
- [`take`](../../doc/api/core/operators/take.md)
- [`takeLast`](../../doc/api/core/operators/takelast.md)
- [`takeUntil`](../../doc/api/core/operators/takeuntil.md)
- [`takeWhile`](../../doc/api/core/operators/takewhile.md)
- [`tap`](../../doc/api/core/operators/do.md)
- [`tapOnNext`](../../doc/api/core/operators/doonnext.md)
- [`tapOnError`](../../doc/api/core/operators/doonerror.md)
- [`tapOnCompleted`](../../doc/api/core/operators/dooncompleted.md)
- [`throttle`](../../doc/api/core/operators/throttle.md)
- [`throttleFirst`](../../doc/api/core/operators/throttlefirst.md)
- [`timeout`](../../doc/api/core/operators/timeout.md)
- [`timestamp`](../../doc/api/core/operators/timestamp.md)
- [`toArray`](../../doc/api/core/operators/toarray.md)
- [`transduce`](../../doc/api/core/operators/transduce.md)
- [`where`](../../doc/api/core/operators/where.md)
- [`withLatestFrom`](../../doc/api/core/operators/withlatestfrom.md)
- [`zip`](../../doc/api/core/operators/zipproto.md)

## Included Classes ##

### Core Objects
- [`Rx.Observer`](../../doc/api/core/observer.md)
- [`Rx.Notification`](../../doc/api/core/notification.md)

### Subjects

- [`Rx.AsyncSubject`](../../doc/api/subjects/asyncsubject.md)
- [`Rx.BehaviorSubject`](../../doc/api/subjects/behaviorsubject.md)
- [`Rx.ReplaySubject`](../../doc/api/subjects/replaysubject.md)
- [`Rx.Subject`](../../doc/api/subjects/subject.md)

### Schedulers

- [`Rx.Scheduler`](../../doc/api/schedulers/scheduler.md)

### Disposables

- [`Rx.CompositeDisposable`](../../doc/api/disposables/compositedisposable.md)
- [`Rx.Disposable`](../../doc/api/disposables/disposable.md)
- [`Rx.RefCountDisposable`](../../doc/api/disposables/refcountdisposable.md)
- [`Rx.SerialDisposable`](../../doc/api/disposables/serialdisposable.md)
- [`Rx.SingleAssignmentDisposable`](../../doc/api/disposables/singleassignmentdisposable.md)

## Contributing ##

There are lots of ways to contribute to the project, and we appreciate our [contributors](https://github.com/Reactive-Extensions/RxJS/wiki/Contributors).  If you wish to contribute, check out our [style guide]((https://github.com/Reactive-Extensions/RxJS/tree/master/doc/contributing)).

You can contribute by reviewing and sending feedback on code checkins, suggesting and trying out new features as they are implemented, submit bugs and help us verify fixes as they are checked in, as well as submit code fixes or code contributions of your own. Note that all code submissions will be rigorously reviewed and tested by the Rx Team, and only those that meet an extremely high bar for both quality and design/roadmap appropriateness will be merged into the source.

## License ##

Copyright (c) Microsoft Open Technologies, Inc.  All rights reserved.
Microsoft Open Technologies would like to thank its contributors, a list
of whom are at https://github.com/Reactive-Extensions/RxJS/wiki/Contributors.

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions
and limitations under the License.
