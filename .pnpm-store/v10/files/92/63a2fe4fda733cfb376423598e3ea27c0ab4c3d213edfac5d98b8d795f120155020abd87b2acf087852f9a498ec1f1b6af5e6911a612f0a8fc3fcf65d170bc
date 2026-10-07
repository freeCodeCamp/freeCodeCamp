<a name="1.2.0"></a>
# [1.2.0](https://github.com/redux-observable/redux-observable/compare/v1.1.0...v1.2.0) (2019-09-17)


### Bug Fixes

* **build:** Internally, don't mix ES Module and CommonJS syntax for warning utilities so that Rollup builds don't require special handling of redux-observable. ([#663](https://github.com/redux-observable/redux-observable/issues/663)) ([376dc5b](https://github.com/redux-observable/redux-observable/commit/376dc5b))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/redux-observable/redux-observable/compare/v1.0.0...v1.1.0) (2019-03-26)


### Bug Fixes

* **createEpicMiddleware:** Don't share a scheduler queue with anyone else's RxJS code, fixes [#624](https://github.com/redux-observable/redux-observable/issues/624) ([#625](https://github.com/redux-observable/redux-observable/issues/625)) ([e5bae19](https://github.com/redux-observable/redux-observable/commit/e5bae19))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/redux-observable/redux-observable/compare/v1.0.0-beta.2...v1.0.0) (2018-06-21)

It's here! 1.0 brings support for RxJS v6 and Redux v4. To help migrate from pre-1.0 versions, we've written a migration guide to help you: https://redux-observable.js.org/MIGRATION.html

Is something missing from the migration guide? Let us know or make a PR!

### Bug Fixes

* **typings:** Epic type parameter for State (third type param) now defaults to any instead of void ([03e69cc](https://github.com/redux-observable/redux-observable/commit/03e69cc))



<a name="1.0.0-beta.2"></a>
# [1.0.0-beta.2](https://github.com/redux-observable/redux-observable/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2018-06-16)


### Features

* **adapters:** remove adapters support ([87a5f86](https://github.com/redux-observable/redux-observable/commit/87a5f86))


### BREAKING CHANGES

* **adapters:** Support for adapters has been removed. Adapters were previously used to transform the `action$` Observable into some other stream-library primitive; like Most.js, Bacon, RxJS v4, etc. While rarely used, if you would like this functionality the MIGRATION.md guide gives an example: https://redux-observable.js.org/MIGRATION.html#setting-up-the-middleware



<a name="1.0.0-beta.1"></a>
# [1.0.0-beta.1](https://github.com/redux-observable/redux-observable/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2018-06-04)


### Bug Fixes

* **combineEpics:** combineEpics no longer errors on React Native Android because of readonly `name`  prop setting ([7b4f208](https://github.com/redux-observable/redux-observable/commit/7b4f208))



<a name="1.0.0-beta.0"></a>
# [1.0.0-beta.0](https://github.com/redux-observable/redux-observable/compare/v1.0.0-alpha.3...v1.0.0-beta.0) (2018-06-01)


### Bug Fixes

* **state$:** initial state is no longer skipped by state$ ([2509605](https://github.com/redux-observable/redux-observable/commit/2509605))


### Features

* **rootEpic:** an error is now thrown if you provide your root Epic directly to . See 'https://redux-observable.js.org/MIGRATION.html#setting-up-the-middleware' ([4479ac8](https://github.com/redux-observable/redux-observable/commit/4479ac8))
* **state$:** remove previously deprecated store.dispatch/getState() from epics (NOT from your UI code) ([b352a98](https://github.com/redux-observable/redux-observable/commit/b352a98))


### BREAKING CHANGES

* **state$:** previously the second argument to your epics was a "lite" version of the redux store with store.dispatch() and store.getState(), however this has been replaced with a stream of a state$ in v1.0.0 of redux-observable and the old methods were deprecated with warnings in previous alpha versions. This release removes them entirely. See https://redux-observable.js.org/MIGRATION.html



<a name="1.0.0-alpha.3"></a>
# [1.0.0-alpha.3](https://github.com/redux-observable/redux-observable/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2018-06-01)


### Features

* **combineEpics:** verbose combineEpics returned function name ([#480](https://github.com/redux-observable/redux-observable/issues/480)) ([816a916](https://github.com/redux-observable/redux-observable/commit/816a916))
* **createEpicMiddleware:** schedule emitted actions and epic subscription on the queueScheduler, so that epic order matters less ([d3516bf](https://github.com/redux-observable/redux-observable/commit/d3516bf))
* **redux:** update to redux v4 ([#501](https://github.com/redux-observable/redux-observable/issues/501)) ([43c2033](https://github.com/redux-observable/redux-observable/commit/43c2033))
* **state$:** state$ now only emits subsequent values if the state shallowly is different (e.g. prevValue !== nextValue). It still emits the current state immediately on subscribe regardless, as it did before, similar to BehaviorSubject. Closes [#497](https://github.com/redux-observable/redux-observable/issues/497) ([4697047](https://github.com/redux-observable/redux-observable/commit/4697047))
* **typings:** Make output actions optional ([34a9e12](https://github.com/redux-observable/redux-observable/commit/34a9e12))
* **typings:** Output actions should extend input actions. ([d109077](https://github.com/redux-observable/redux-observable/commit/d109077))
* **typings:** Updating typings for more common use-cases. ([0b0efc0](https://github.com/redux-observable/redux-observable/commit/0b0efc0)), closes [#446](https://github.com/redux-observable/redux-observable/issues/446)


### BREAKING CHANGES

* **redux:** redux-observable now requires redux v4. The new version of redux is mostly the same, however it required us to change the `createEpicMiddleware` API. See https://redux-observable.js.org/MIGRATION.html
* **createEpicMiddleware:** You must now provide your rootEpic to `epicMiddleware.run(rootEpic)` instead of passing it to `createEpicMiddleware`. This fixes issues with redux v4 where it's no longer allowed to dispatch actions while middleware is still being setup. See https://redux-observable.js.org/MIGRATION.html
* **createEpicMiddleware:** `epicMiddleware.replaceEpic` has been removed. A the equivilant behavior can be accomplished by dispatching your own `END` action that your rootEpic is listening for with a `takeUntil`, then providing the next rootEpic to `epicMiddleware.run(nextRootEpic)`. See https://redux-observable.js.org/MIGRATION.html
* **createEpicMiddleware:** Actions your epics emit are now scheduled using the queueScheduler. This is a bit hard to explain (and understand) but as the name suggests, a queue is used. If the queue is empty, the action is emitted as usual, but if that action causes other actions to be emitted they will be queued up until the call stack of the first action returns. In a large majority of cases this will have no perceivable impact, but it may affect the order of any complex epic-to-epic communication you have. The benefit is that actions which are emitted by an epic on start up are not missed by epics which come after it. e.g. With `combineEpics(epic1, epic2)` previously if epic1 emitted on startup, epic2 would not receive that action because it had not yet been set up. See https://redux-observable.js.org/MIGRATION.html


<a name="1.0.0-alpha.2"></a>
# [1.0.0-alpha.2](https://github.com/redux-observable/redux-observable/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2018-04-09)


### Bug Fixes

* **deps:** gitbook-plugin-github is no longer listed as a normal dependency (it gets added automatically by gitbook even and I usually manually remove it, but it slipped in) ([fabcded](https://github.com/redux-observable/redux-observable/commit/fabcded))



<a name="1.0.0-alpha.1"></a>
# [1.0.0-alpha.1](https://github.com/redux-observable/redux-observable/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2018-04-05)


### Bug Fixes

* **typings:** Update type of Epic parameter from store to state$ ([#465](https://github.com/redux-observable/redux-observable/issues/465)) ([6e9430d](https://github.com/redux-observable/redux-observable/commit/6e9430d))



<a name="1.0.0-alpha.0"></a>
# [1.0.0-alpha.0](https://github.com/redux-observable/redux-observable/compare/v0.18.0...v1.0.0-alpha.0) (2018-04-04)

Early version alpha, breaking changes are still possible so use as your own risk and make sure to lockdown to exactly semver. Learn more about the migration: https://redux-observable.js.org/MIGRATION.html

### Features

* **createEpicMiddleware:** warn about reusing middleware ([e72661a](https://github.com/redux-observable/redux-observable/commit/e72661a)), closes [#389](https://github.com/redux-observable/redux-observable/issues/389)
* **state$:** The second argument of an Epic is now a stream of state$, not a store ([#410](https://github.com/redux-observable/redux-observable/issues/410)) ([2ff3f6e](https://github.com/redux-observable/redux-observable/commit/2ff3f6e)), closes [#56](https://github.com/redux-observable/redux-observable/issues/56)


<a name="0.19.0"></a>
# [0.19.0](https://github.com/redux-observable/redux-observable/compare/v0.18.0...v0.19.0) (2018-06-06)


### Bug Fixes

* **errors:** errors from reducers are no longer caught and logged, instead are rethrown. related [#263](https://github.com/redux-observable/redux-observable/issues/263)#issuecomment-395109222 ([f90f8ef](https://github.com/redux-observable/redux-observable/commit/f90f8ef)), closes [#issuecomment-395109222](https://github.com/redux-observable/redux-observable/issues/issuecomment-395109222)


### BREAKING CHANGES

* **errors:** For 0.19.0 errors from reducers are no longer caught and console.error logged, instead they are just rethrown as before. This was a temporary workaround for a bug in rxjs where it would silently swallow errors. That bug has been fixed in 5.5.6+, so it is highly recommended you use _at least_ rxjs@5.5.6+ with this version of redux-observable. However, redux-observable is close to reaching 1.0.0-final which will require rxjs v6 and redux v4, if you'd like to start upgrading to it now you can use redux-observable@next (as of this writing 1.0.0-beta.1)


<a name="0.18.0"></a>
# [0.18.0](https://github.com/redux-observable/redux-observable/compare/v0.17.0...v0.18.0) (2018-02-07)


### Bug Fixes

* **Reducer errors:** log exceptions thrown from `store.dispatch` inside the middleware  ([#379](https://github.com/redux-observable/redux-observable/issues/379)) ([56c1903](https://github.com/redux-observable/redux-observable/commit/56c1903)), closes [#263](https://github.com/redux-observable/redux-observable/issues/263)
* **typings:** make lettable ofType correctly narrow action type ([#385](https://github.com/redux-observable/redux-observable/issues/385)) ([45d09a7](https://github.com/redux-observable/redux-observable/commit/45d09a7)), closes [#382](https://github.com/redux-observable/redux-observable/issues/382)
* **typings:** More correct Epic and ofType type refinement for TypeScript users ([#392](https://github.com/redux-observable/redux-observable/issues/392)) ([#396](https://github.com/redux-observable/redux-observable/issues/396)) ([63b2acc](https://github.com/redux-observable/redux-observable/commit/63b2acc))
* **typings:** More correct ofType type refinement ([#376](https://github.com/redux-observable/redux-observable/issues/376)) ([e850c93](https://github.com/redux-observable/redux-observable/commit/e850c93)), closes [#375](https://github.com/redux-observable/redux-observable/issues/375)


### Features

* **dependencies:** Loosen peerDependencies ([#359](https://github.com/redux-observable/redux-observable/issues/359)) ([3140ac2](https://github.com/redux-observable/redux-observable/commit/3140ac2)), closes [#358](https://github.com/redux-observable/redux-observable/issues/358)
* **ofType:** `ofType()` TypeScript overload that permits narrowing the filtered actions type `action$.ofType<SomeNarrowAction>(someType);` ([#312](https://github.com/redux-observable/redux-observable/issues/312)) ([#370](https://github.com/redux-observable/redux-observable/issues/370)) ([5b62ac5](https://github.com/redux-observable/redux-observable/commit/5b62ac5))



<a name="0.17.0"></a>
# [0.17.0](https://github.com/redux-observable/redux-observable/compare/v0.16.0...v0.17.0) (2017-10-31)


### Bug Fixes

* **ofType:** don't depend on letProto as it has issues in UMD builds ([150c1d5](https://github.com/redux-observable/redux-observable/commit/150c1d5))
* **types:** Add type for EPIC_END action type ([#272](https://github.com/redux-observable/redux-observable/issues/272)) ([5e98f2e](https://github.com/redux-observable/redux-observable/commit/5e98f2e)), closes [#271](https://github.com/redux-observable/redux-observable/issues/271)


### Features

* **epics:** calling `store.dispatch()` directly inside your epics is now deprecated and will be removed in v1.0.0 ([#346](https://github.com/redux-observable/redux-observable/issues/346) [a1ba6a2](https://github.com/redux-observable/redux-observable/commit/a1ba6a2), [#336](https://github.com/redux-observable/redux-observable/issues/336) [76ecd33](https://github.com/redux-observable/redux-observable/commit/76ecd33))

The ability to call `store.dispatch()` inside your Epics was originally provided as an escape hatch, to be used rarely, if ever. Unfortunately in practice we've seen a large number of people using it extensively; there has even been popular tutorials teaching it as how you use redux-observable. Instead, Epics should emit actions through the Observable the Epic returns, using idiomatic RxJS.

#### Before

```js
const somethingEpic = (action$, store) =>
  action$.ofType(SOMETHING)
    .switchMap(() =>
      ajax('/something')
        .do(() => store.dispatch({ type: SOMETHING_ELSE }))
        .map(response => ({ type: SUCCESS, response }))
    );
```

#### After

```js
const somethingEpic = action$ =>
  action$.ofType(SOMETHING)
    .switchMap(() =>
      ajax('/something')
        .mergeMap(response => Observable.of(
          { type: SOMETHING_ELSE },
          { type: SUCCESS, response }
        ))
    );
```

`store.dispatch` will be removed from Epics in v1.0.0 of redux-observable. This is unrelated to usage of `store.dispatch` inside your UI components--you will continue to use it there

* **ofType:** Better support for redux-actions ([#348](https://github.com/redux-observable/redux-observable/issues/348)) ([c4d0ccf](https://github.com/redux-observable/redux-observable/commit/c4d0ccf))
* **ofType:** expose ofType as lettable operator ([#343](https://github.com/redux-observable/redux-observable/issues/343)) ([fb4a5af](https://github.com/redux-observable/redux-observable/commit/fb4a5af)), closes [#186](https://github.com/redux-observable/redux-observable/issues/186)



<a name="0.16.0"></a>
# [0.16.0](https://github.com/redux-observable/redux-observable/compare/v0.15.0...v0.16.0) (2017-08-16)


### Bug Fixes

* **types:** Constrain ActionsObservable type param ([#289](https://github.com/redux-observable/redux-observable/issues/289)) ([2144e7d](https://github.com/redux-observable/redux-observable/commit/2144e7d))



<a name="0.15.0"></a>
# [0.15.0](https://github.com/redux-observable/redux-observable/compare/v0.14.0...v0.15.0) (2017-08-08)


### Bug Fixes

* **typings:** Add dependencies to middleware options. ([#207](https://github.com/redux-observable/redux-observable/issues/207)) ([fb911a8](https://github.com/redux-observable/redux-observable/commit/fb911a8))
* **typings:** dependencies type can now be anything, not just a POJO ([70ded6d](https://github.com/redux-observable/redux-observable/commit/70ded6d))
* **typings:** lift now uses correct return type, instead of ([#208](https://github.com/redux-observable/redux-observable/issues/208)) ([b4690bf](https://github.com/redux-observable/redux-observable/commit/b4690bf)), closes [#187](https://github.com/redux-observable/redux-observable/issues/187)


### Features

* **typings:** make dependencies generic type ([#250](https://github.com/redux-observable/redux-observable/issues/250)) ([b690902](https://github.com/redux-observable/redux-observable/commit/b690902)), closes [#231](https://github.com/redux-observable/redux-observable/issues/231)



<a name="0.14.0"></a>
# [0.14.0](https://github.com/redux-observable/redux-observable/compare/v0.13.0...v0.14.0) (2017-03-02)


### Bug Fixes

* **typings:** Add custom epic overload to combineEpics ([#197](https://github.com/redux-observable/redux-observable/issues/197)) ([88c0bf9](https://github.com/redux-observable/redux-observable/commit/88c0bf9))


### Chores

* **rxjs:** update rxjs to v5 non-beta ([#191](https://github.com/redux-observable/redux-observable/issues/191)) ([857e8d0](https://github.com/redux-observable/redux-observable/commit/857e8d0))


### Features

* **build:** es modules ([#201](https://github.com/redux-observable/redux-observable/issues/201)) ([c4318ec](https://github.com/redux-observable/redux-observable/commit/c4318ec))
* **dependencies:** Added explicit dependencies option to createEpicMiddleware ([#193](https://github.com/redux-observable/redux-observable/issues/193)) ([7e2a479](https://github.com/redux-observable/redux-observable/commit/7e2a479)), closes [#163](https://github.com/redux-observable/redux-observable/issues/163)


### BREAKING CHANGES

* rxjs: RxJS v5 non-beta (e.g. 5.1.0) is now required. Upgrading from rxjs 5
beta to latest should be easy in most cases.



<a name="0.13.0"></a>
# [0.13.0](https://github.com/redux-observable/redux-observable/compare/v0.12.2...v0.13.0) (2017-01-20)


### Bug Fixes

* **typings:** adds store type to Epic ([#174](https://github.com/redux-observable/redux-observable/issues/174)) ([ca4b163](https://github.com/redux-observable/redux-observable/commit/ca4b163)), closes [#172](https://github.com/redux-observable/redux-observable/issues/172)
* **typings:** Enable second parameter for the createEpicMiddleware ([25ac601](https://github.com/redux-observable/redux-observable/commit/25ac601))


### BREAKING CHANGES

* typings: TypeScript users only, the type interface for Epics now requires a second generic argument, your store's state interface. `interface Epic<ActionShape, StateShape>`. If you don't to strictly type your state, you can pass `any`



<a name="0.12.2"></a>
## [0.12.2](https://github.com/redux-observable/redux-observable/compare/v0.12.1...v0.12.2) (2016-11-18)


### Features

* **ActionsObservable:** `ActionsObservable.from()` now correctly returns an ActionsObservable as expected ([#149](https://github.com/redux-observable/redux-observable/issues/149)) ([fd393a1](https://github.com/redux-observable/redux-observable/commit/fd393a1))
* **typings:** Adds type definitions for ActionsObservable.from/of ([0cba557](https://github.com/redux-observable/redux-observable/commit/0cba557))



<a name="0.12.1"></a>
## [0.12.1](https://github.com/redux-observable/redux-observable/compare/v0.12.0...v0.12.1) (2016-10-04)


### Bug Fixes

* **UMD:** bump webpack-rxjs-externals to correct UMD generation ([3535b3d](https://github.com/redux-observable/redux-observable/commit/3535b3d)), closes [#127](https://github.com/redux-observable/redux-observable/issues/127)



<a name="0.12.0"></a>
# [0.12.0](https://github.com/redux-observable/redux-observable/compare/v0.11.0...v0.12.0) (2016-09-22)


### Features

* **combineEpics:** combineEpics() now transparently passes along _any_ arguments, not just action$, store. ([ee3efbf](https://github.com/redux-observable/redux-observable/commit/ee3efbf))



<a name="0.11.0"></a>
# [0.11.0](https://github.com/redux-observable/redux-observable/compare/0.10.0...v0.11.0) (2016-09-15)


### Code Refactoring

* **thunkservables:** Removed support for thunkservables ([e55428f](https://github.com/redux-observable/redux-observable/commit/e55428f))


### Features

* **ActionsObservable.of:** Added support for ActionsObservable.of(...actions) as shorthand, mostly useful for testing Epics ([25f50d0](https://github.com/redux-observable/redux-observable/commit/25f50d0)), closes [#98](https://github.com/redux-observable/redux-observable/issues/98)


### BREAKING CHANGES

* thunkservables: Support for thunkservables has been removed, replaced by Epics. You may now use redux-thunk in tandem with redux-observable.  [Read more](http://redux-observable.js.org/docs/FAQ.html#why-were-thunkservables-removed)



<a name="0.10.0"></a>
# [0.10.0](https://github.com/redux-observable/redux-observable/compare/v0.9.1...v0.10.0) (2016-09-11)


### BREAKING CHANGE (maybe)

* **typings:** TypeScript users: Added generics to createEpicMiddleware so developer defines what redux Actions look like ([#105](https://github.com/redux-observable/redux-observable/issues/105)) ([7b4214f](https://github.com/redux-observable/redux-observable/commit/7b4214f)). Previously, the behavior was rather restrictive so while it's unlikely going to break anyone's code, it technically is a breaking change.




<a name="0.9.1"></a>
## [0.9.1](https://github.com/redux-observable/redux-observable/compare/v0.9.0...v0.9.1) (2016-08-17)


### Bug Fixes

* **typings:** add explicit return types inside ActionsObservable ([95b4ce4](https://github.com/redux-observable/redux-observable/commit/95b4ce4)), closes [#96](https://github.com/redux-observable/redux-observable/issues/96)



<a name="0.9.0"></a>
# [0.9.0](https://github.com/redux-observable/redux-observable/compare/v0.8.0...v0.9.0) (2016-08-01)


### Features

* **Adapters:** Adds support for Epic input/output adapters. This allows us to support RxJS v4 via [redux-observable-adapter-rxjs-v4](https://github.com/redux-observable/redux-observable-adapter-rxjs-v4) ([#85](https://github.com/redux-observable/redux-observable/issues/85)) ([a662cdf](https://github.com/redux-observable/redux-observable/commit/a662cdf))



<a name="0.8.0"></a>
# [0.8.0](https://github.com/redux-observable/redux-observable/compare/v0.7.2...v0.8.0) (2016-07-24)


### Features

* **replaceEpic:** Added middleware method to replace the root Epic. Useful for code splitting and hot reloading ([a8f458d](https://github.com/redux-observable/redux-observable/commit/a8f458d))
* **replaceEpic:** Dispatches an EPIC_END action when you replaceEpic() ([#75](https://github.com/redux-observable/redux-observable/issues/75)) ([fef6f80](https://github.com/redux-observable/redux-observable/commit/fef6f80))



<a name="0.7.2"></a>
## [0.7.2](https://github.com/redux-observable/redux-observable/compare/v0.7.1...v0.7.2) (2016-07-14)


### Bug Fixes

* **Typings:** Correct that createEpicMiddleware() only accepts a single Epic ([1d5e2ec](https://github.com/redux-observable/redux-observable/commit/1d5e2ec))



<a name="0.7.1"></a>
## [0.7.1](https://github.com/redux-observable/redux-observable/compare/v0.7.0...v0.7.1) (2016-07-14)


### Bug Fixes

* **TypeScript type definition:** Add combineEpics(), provide more accurate type info for others ([#70](https://github.com/redux-observable/redux-observable/issues/70)) ([20da88c](https://github.com/redux-observable/redux-observable/commit/20da88c)), closes [#69](https://github.com/redux-observable/redux-observable/issues/69)



<a name="0.7.0"></a>
# 0.7.0 (2016-07-13)

We have brand new docs! http://redux-observable.js.org/

### BREAKING CHANGES

* thunkservables: We are deprecating thunkservables in favor of the new
process managers called "Epics". See
http://redux-observable.js.org/docs/FAQ.html#why-were-thunkservables-deprecated
for more information on Epics.
* API renames: Creating the middleware is now done with
`createEpicMiddleware(rootEpic)` instead of `reduxObservable(rootEpic)` and `combineDelegators()` has been renamed as
`combineEpics()`
* middleware: dispatched actions will now occur _before_ the actions created by synchronous observable side effects.


<a name="0.6.0"></a>
# [0.6.0](https://github.com/redux-observable/redux-observable/compare/0.5.0...v0.6.0) (2016-05-26)


### Bug Fixes

* **package:** Add d.ts file to package. ([fe8f073](https://github.com/redux-observable/redux-observable/commit/fe8f073))


### Features

* **combineEpics:** add a method to combine different epics to make it easier to create a rootDelegator ([da2eeaf](https://github.com/redux-observable/redux-observable/commit/da2eeaf))
* **ofType:** now accepts multiple types to filter for ([9027d1c](https://github.com/redux-observable/redux-observable/commit/9027d1c))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/redux-observable/redux-observable/compare/0.4.0...v0.5.0) (2016-05-20)


### Features

* **middleware processor:** add argument to middleware to set up async processing for all actions pumped thr ([5a672be](https://github.com/redux-observable/redux-observable/commit/5a672be))
* **reduxObservable:** allow async streams to emit other async actions, ([94233f3](https://github.com/redux-observable/redux-observable/commit/94233f3)), closes [#8](https://github.com/redux-observable/redux-observable/issues/8)


### BREAKING CHANGES

* middleware processor: dispatched actions will now occur _before_ the actions created by synchronous observable side effects.



<a name="0.4.0"></a>
# [0.4.0](https://github.com/blesh/redux-observable/compare/0.3.0...v0.4.0) (2016-05-12)


### Bug Fixes

* **actions:** Wasn't actually emitting the correct actions to the actions Subject ([a1cf32e](https://github.com/blesh/redux-observable/commit/a1cf32e))

### Features

* **ofType:** add operator to provided actions observable ([174ceda](https://github.com/blesh/redux-observable/commit/174ceda))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/blesh/redux-observable/compare/0.2.0...v0.3.0) (2016-05-12)


### Bug Fixes

* **naming:** get rid of references to rxDucks missed during renaming ([04c54c6](https://github.com/blesh/redux-observable/commit/04c54c6))



<a name=""></a>
# [](//compare/0.1.0...vundefined) (2016-05-12)




<a name="0.1.0"></a>
# [0.1.0](https://github.com/blesh/rx-ducks-middleware/compare/0.0.2...v0.1.0) (2016-04-29)


### Features

* **async interop:** can dispatch functions that return promises, observable-like objects, and iterables ([d20c411](https://github.com/blesh/rx-ducks-middleware/commit/d20c411))
