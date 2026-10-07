# Sister

{"gitdown": "badge", "name": "travis"}
{"gitdown": "badge", "name": "npm-version"}

Foundation for your emitter implementation.

[I have observed](#similar-libraries) that there is a tendency to write your own implementation of event emitter. I have written a starter pack for those wishing to improve upon existing variations of event emitter implementation.

Please [submit your implementation](https://github.com/gajus/sister/issues) to the index when you are done.

## In All Seriousness

Sister is 0.5kb event emitter that does three things: `on`, `off` and `trigger`. It [performs well](http://jsperf.com/sister-event) (~18,313,548 operations/sec in browser). If you need something more advanced, consider one of the existing, mature [alternatives](#similar-libraries).

## Node

Download using NPM:

```sh
npm install sister --save
```

## Browser

Download using Bower:

```sh
bower install sister --save
```

In browser, use `gajus.Sister` `window` object.

## Methods

- [emitter.<b>on</b>(event, handler)](#emitter-on)
- [emitter.<b>off</b>(listener)](#emitter-off)
- [emitter.<b>trigger</b>(event, data)](#emitter-trigger)

## Parameters

* `emitter` Instance of the `Sister()` object.
* `event` Name of the event.
* `handler` A function to execute when the event is triggered.
* `listener` Event listener.

<a name="emitter-on"></a>
#### `emitter.on(event, handler)`

- Add `handler` for `event`.
- Return `listener`.

<a name="emitter-off"></a>
#### `emitter.off(listener)`

- Remove `listener`.

<a name="emitter-trigger"></a>
#### `emitter.trigger(event, data)`

- Invoke `event` listeners (in sequence) with the supplied argument.
- Return `emitter`.

## Usage

```js
var Sister = require('sister'),
    emitter = Sister(),
    listener;

listener = emitter.on('foo', console.log);
emitter.trigger('foo', 'bar');
emitter.off(listener);
emitter.trigger('foo', 'baz');
```

This example will print "bar" in the `console.log`.

## Similar Libraries

There are several existing alternatives that you might want to consider before starting to write your own implementation of an event emitter.

| Repository | Stars | Forks | Commits | Last Commit |
| --- | --- | --- | --- | --- |
|[asyncly/EventEmitter2](https://github.com/asyncly/EventEmitter2)| 846 | 92 | 321 | 2014-06-12 |
|[Wolfy87/EventEmitter](https://github.com/Wolfy87/EventEmitter)| 711 | 102 | 628 | 2014-09-30 |
|[RobertWHurst/LucidJS](https://github.com/RobertWHurst/LucidJS)| 375 | 15 | 141 | 2014-09-26 |
|[jeromeetienne/microevent.js](https://github.com/jeromeetienne/microevent.js)| 284 | 57 | 17 | 2014-07-23 |
|[uxder/Radio](https://github.com/uxder/Radio)| 242 | 20 | 47 | 2013-06-14 |
|[component/emitter](https://github.com/component/emitter)| 150 | 52 | 69 | 2014-08-29 |
|[necolas/emitter.js](https://github.com/necolas/emitter.js)| 75 | 3 | 51 | 2014-05-16 |
|[mkuklis/asEvented](https://github.com/mkuklis/asEvented)| 74 | 13 | 80 | 2014-01-10 |
|[FredyC/promised-land](https://github.com/FredyC/promised-land)| 67 | 1 | 25 | 2014-09-05 |
|[postaljs/monologue.js](https://github.com/postaljs/monologue.js)| 66 | 6 | 32 | 2014-06-20 |
|[scottcorgan/tiny-emitter](https://github.com/scottcorgan/tiny-emitter)| 66 | 2 | 24 | 2014-09-16 |
|[primus/EventEmitter3](https://github.com/primus/EventEmitter3)| 57 | 7 | 76 | 2014-10-10 |
|[segmentio/wildcards](https://github.com/segmentio/wildcards)| 56 | 2 | 21 | 2014-04-10 |
|[facebook/emitter](https://github.com/facebook/emitter)| 50 | 12 | 6 | 2014-02-20 |
|[Gozala/events](https://github.com/Gozala/events)| 39 | 11 | 45 | 2014-08-29 |
|[danielstjules/pattern-emitter](https://github.com/danielstjules/pattern-emitter)| 38 | 3 | 38 | 2014-04-25 |
|[hrsh7th/js-co-on](https://github.com/hrsh7th/js-co-on)| 31 | 0 | 12 | 2014-07-01 |
|[cpsubrian/node-eventflow](https://github.com/cpsubrian/node-eventflow)| 22 | 5 | 44 | 2013-07-16 |
|[medikoo/event-emitter](https://github.com/medikoo/event-emitter)| 20 | 1 | 155 | 2014-08-22 |
|[component/channel](https://github.com/component/channel)| 19 | 1 | 20 | 2014-02-13 |
|[mixu/microee](https://github.com/mixu/microee)| 15 | 0 | 21 | 2014-02-27 |
|[qawemlilo/emitter](https://github.com/qawemlilo/emitter)| 14 | 2 | 26 | 2013-12-10 |
|[substack/node-ordered-emitter](https://github.com/substack/node-ordered-emitter)| 13 | 2 | 21 | 2013-07-11 |
|[godmodelabs/fwd](https://github.com/godmodelabs/fwd)| 12 | 1 | 23 | 2013-03-12 |
|[ericz/EventEmitter](https://github.com/ericz/EventEmitter)| 11 | 7 | 3 | 2013-02-08 |
|[fent/pauseable.js](https://github.com/fent/pauseable.js)| 11 | 3 | 20 | 2014-07-29 |
|[defunctzombie/dom-events](https://github.com/defunctzombie/dom-events)| 10 | 1 | 16 | 2013-11-20 |
|[bredele/emitter-queue](https://github.com/bredele/emitter-queue)| 10 | 0 | 14 | 2014-04-07 |
|[postaljs/monopost.js](https://github.com/postaljs/monopost.js)| 9 | 2 | 10 | 2013-02-04 |
|[addyosmani/polymer-eventemitter](https://github.com/addyosmani/polymer-eventemitter)| 9 | 0 | 15 | 2014-01-24 |
|[busterjs/bane](https://github.com/busterjs/bane)| 8 | 1 | 33 | 2013-11-23 |
|[fnando/emitter](https://github.com/fnando/emitter)| 8 | 1 | 16 | 2014-10-01 |
|[sakabako/paperboy](https://github.com/sakabako/paperboy)| 7 | 1 | 59 | 2014-10-01 |
|[Nicolab/node-ipc-events](https://github.com/Nicolab/node-ipc-events)| 7 | 0 | 4 | 2014-07-02 |
|[fent/node-eventyoshi](https://github.com/fent/node-eventyoshi)| 7 | 0 | 35 | 2014-07-29 |
|[yields/delegate-events](https://github.com/yields/delegate-events)| 7 | 0 | 2 | 2013-11-06 |
|[feross/re-emitter](https://github.com/feross/re-emitter)| 6 | 1 | 15 | 2014-07-23 |
|[dmotz/stream-snitch](https://github.com/dmotz/stream-snitch)| 6 | 0 | 13 | 2014-09-07 |
|[jhermsmeier/emitter.js](https://github.com/jhermsmeier/emitter.js)| 6 | 0 | 52 | 2014-05-19 |
|[hapijs/kilt](https://github.com/hapijs/kilt)| 5 | 1 | 17 | 2014-09-29 |
|[1000ch/EventEmitter](https://github.com/1000ch/EventEmitter)| 5 | 0 | 23 | 2014-02-25 |
|[Raynos/eventemitter-light](https://github.com/Raynos/eventemitter-light)| 5 | 0 | 20 | 2012-08-04 |
|[mcollina/patrun-emitter](https://github.com/mcollina/patrun-emitter)| 5 | 0 | 26 | 2014-05-26 |
|[pgte/propagate](https://github.com/pgte/propagate)| 5 | 0 | 12 | 2014-01-30 |
|[jonnywyatt/eventsWithPromises](https://github.com/jonnywyatt/eventsWithPromises)| 4 | 2 | 21 | 2014-08-26 |
|[oleics/node-caevents](https://github.com/oleics/node-caevents)| 4 | 2 | 9 | 2012-04-09 |
|[lelandtseng/EventEmitter](https://github.com/lelandtseng/EventEmitter)| 4 | 1 | 17 | 2013-10-19 |
|[petkaantonov/FastEmitter](https://github.com/petkaantonov/FastEmitter)| 4 | 1 | 29 | 2013-10-22 |
|[Alex-ray/concierge](https://github.com/Alex-ray/concierge)| 4 | 0 | 33 | 2014-05-12 |
|[derekr/paganate](https://github.com/derekr/paganate)| 4 | 0 | 13 | 2014-04-17 |
|[gdi2290/angular-event-emitter](https://github.com/gdi2290/angular-event-emitter)| 4 | 0 | 31 | 2014-07-19 |
|[maxponte/EventEmitter](https://github.com/maxponte/EventEmitter)| 4 | 0 | 7 | 2014-08-08 |
|[iwillwen/node_emitter](https://github.com/iwillwen/node_emitter)| 3 | 2 | 2 | 2012-03-10 |
|[IndigoUnited/js-events-emitter](https://github.com/IndigoUnited/js-events-emitter)| 3 | 1 | 73 | 2014-04-18 |
|[kamicane/emi](https://github.com/kamicane/emi)| 3 | 1 | 2 | 2012-03-06 |
|[olav/ee.js](https://github.com/olav/ee.js)| 3 | 1 | 21 | 2014-02-13 |
|[vesln/evts](https://github.com/vesln/evts)| 3 | 1 | 14 | 2013-12-15 |
|[fent/node-newsemitter](https://github.com/fent/node-newsemitter)| 3 | 0 | 10 | 2014-07-29 |
|[yields/buffer-events](https://github.com/yields/buffer-events)| 3 | 0 | 4 | 2014-06-27 |
|[aconbere/evented](https://github.com/aconbere/evented)| 2 | 2 | 10 | 2010-10-27 |
|[shokai/event_emitter.js](https://github.com/shokai/event_emitter.js)| 2 | 2 | 39 | 2013-05-17 |
|[aluarosi/event0.js](https://github.com/aluarosi/event0.js)| 2 | 1 | 10 | 2014-03-17 |
|[benjreinhart/node-event-emitter](https://github.com/benjreinhart/node-event-emitter)| 2 | 1 | 5 | 2014-03-29 |
|[madimp/deferredEventEmitter](https://github.com/madimp/deferredEventEmitter)| 2 | 1 | 6 | 2012-05-13 |
|[pierrec/node-ev](https://github.com/pierrec/node-ev)| 2 | 1 | 13 | 2012-06-25 |
|[alexborisov/abNanoEvent](https://github.com/alexborisov/abNanoEvent)| 2 | 0 | 5 | 2013-11-12 |
|[apily/emitter](https://github.com/apily/emitter)| 2 | 0 | 27 | 2014-06-19 |
|[eldargab/hooks-emitter](https://github.com/eldargab/hooks-emitter)| 2 | 0 | 5 | 2013-03-27 |
|[ericelliott/clctr](https://github.com/ericelliott/clctr)| 2 | 0 | 8 | 2013-08-06 |
|[henrytseng/event-aggregator](https://github.com/henrytseng/event-aggregator)| 2 | 0 | 14 | 2014-03-05 |
|[ksdlck/Emitterarchy](https://github.com/ksdlck/Emitterarchy)| 2 | 0 | 7 | 2012-01-18 |
|[pgte/boxed-emitter](https://github.com/pgte/boxed-emitter)| 2 | 0 | 11 | 2012-12-31 |
|[rubenv/angular-tiny-eventemitter](https://github.com/rubenv/angular-tiny-eventemitter)| 2 | 0 | 5 | 2014-07-25 |
|[ryanve/energy](https://github.com/ryanve/energy)| 2 | 0 | 36 | 2014-05-10 |
|[steerapi/ti-event-emitter](https://github.com/steerapi/ti-event-emitter)| 2 | 0 | 5 | 2011-12-29 |
|[tarunc/CollectionEventEmitter2](https://github.com/tarunc/CollectionEventEmitter2)| 2 | 0 | 2 | 2013-07-04 |
|[vinayakcs/eventEmitter](https://github.com/vinayakcs/eventEmitter)| 2 | 0 | 11 | 2014-08-25 |
|[anthonyshort/emitter-manager](https://github.com/anthonyshort/emitter-manager)| 1 | 2 | 12 | 2013-07-31 |
|[joaquimserafim/tiny-eventemitter](https://github.com/joaquimserafim/tiny-eventemitter)| 1 | 2 | 7 | 2014-03-26 |
|[B-Vladi/EventEmitter](https://github.com/B-Vladi/EventEmitter)| 1 | 1 | 111 | 2014-10-19 |
|[MatthewMueller/aemitter](https://github.com/MatthewMueller/aemitter)| 1 | 1 | 8 | 2014-05-24 |
|[chrisdickinson/estate](https://github.com/chrisdickinson/estate)| 1 | 1 | 7 | 2013-08-28 |
|[mccalltd/EventEmitter](https://github.com/mccalltd/EventEmitter)| 1 | 1 | 49 | 2014-01-04 |
|[UsabilityDynamics/node-object-emitter](https://github.com/UsabilityDynamics/node-object-emitter)| 1 | 0 | 39 | 2014-08-30 |
|[asbjornenge/nanoemitter](https://github.com/asbjornenge/nanoemitter)| 1 | 0 | 10 | 2014-05-12 |
|[buunguyen/evtify](https://github.com/buunguyen/evtify)| 1 | 0 | 8 | 2014-03-09 |
|[cballou/jquery-eventemitter](https://github.com/cballou/jquery-eventemitter)| 1 | 0 | 6 | 2014-02-10 |
|[enricomarino/events](https://github.com/enricomarino/events)| 1 | 0 | 4 | 2011-10-31 |
|[erykpiast/angular-event-emitter](https://github.com/erykpiast/angular-event-emitter)| 1 | 0 | 7 | 2014-08-26 |
|[floatdrop/after-event](https://github.com/floatdrop/after-event)| 1 | 0 | 9 | 2014-10-20 |
|[gummesson/evmit](https://github.com/gummesson/evmit)| 1 | 0 | 2 | 2014-04-26 |
|[hden/Bacon.EventEmitter](https://github.com/hden/Bacon.EventEmitter)| 1 | 0 | 5 | 2013-04-02 |
|[jaridmargolin/event-emitter.js](https://github.com/jaridmargolin/event-emitter.js)| 1 | 0 | 6 | 2014-08-20 |
|[jdarling/hyjack](https://github.com/jdarling/hyjack)| 1 | 0 | 28 | 2014-09-10 |
|[jharding/boomerang](https://github.com/jharding/boomerang)| 1 | 0 | 13 | 2013-07-09 |
|[jimgswang/EventEmitter](https://github.com/jimgswang/EventEmitter)| 1 | 0 | 44 | 2014-07-24 |
|[jkroso/dom-emitter](https://github.com/jkroso/dom-emitter)| 1 | 0 | 48 | 2013-08-29 |
|[jls/emitJS](https://github.com/jls/emitJS)| 1 | 0 | 9 | 2011-10-25 |
|[ksdlck/Emitting](https://github.com/ksdlck/Emitting)| 1 | 0 | 14 | 2012-01-19 |
|[maxhoffmann/emitter](https://github.com/maxhoffmann/emitter)| 1 | 0 | 40 | 2014-08-20 |
|[npmcomponent/littlebitselectronics-EventEmitter2](https://github.com/npmcomponent/littlebitselectronics-EventEmitter2)| 1 | 0 | 290 | 2013-08-13 |
|[nrn/nee](https://github.com/nrn/nee)| 1 | 0 | 4 | 2014-09-03 |
|[pete-otaqui/EventEmitter](https://github.com/pete-otaqui/EventEmitter)| 1 | 0 | 7 | 2011-05-24 |
|[pgte/switch-emitter](https://github.com/pgte/switch-emitter)| 1 | 0 | 9 | 2013-01-17 |
|[plediii/HevEmitter](https://github.com/plediii/HevEmitter)| 1 | 0 | 92 | 2014-09-30 |
|[rosylilly/EventEmitter.js](https://github.com/rosylilly/EventEmitter.js)| 1 | 0 | 5 | 2011-08-26 |
|[sjmulder/event-registrar](https://github.com/sjmulder/event-registrar)| 1 | 0 | 3 | 2012-07-20 |
|[smagch/sprite](https://github.com/smagch/sprite)| 1 | 0 | 10 | 2013-05-13 |
|[steelsojka/leafyjs](https://github.com/steelsojka/leafyjs)| 1 | 0 | 23 | 2014-06-08 |
|[xwcoder/EventEmitter](https://github.com/xwcoder/EventEmitter)| 1 | 0 | 3 | 2014-09-14 |
|[Livefyre/event-emitter](https://github.com/Livefyre/event-emitter)| 0 | 1 | 29 | 2014-09-24 |
|[evilharlequin/matter](https://github.com/evilharlequin/matter)| 0 | 1 | 3 | 2014-07-25 |
|[ricardobeat/emmy](https://github.com/ricardobeat/emmy)| 0 | 1 | 9 | 2014-10-02 |
|[thibauts/eventemitter](https://github.com/thibauts/eventemitter)| 0 | 1 | 4 | 2014-06-25 |
|[AndreasMadsen/emitterpoint](https://github.com/AndreasMadsen/emitterpoint)| 0 | 0 | 1 | 2013-08-27 |
|[Havvy/after-events](https://github.com/Havvy/after-events)| 0 | 0 | 1 | 2014-01-17 |
|[Kl0tl/events-emitter](https://github.com/Kl0tl/events-emitter)| 0 | 0 | 4 | 2014-01-12 |
|[LingyuCoder/EventEmitter](https://github.com/LingyuCoder/EventEmitter)| 0 | 0 | 7 | 2014-09-28 |
|[RangerMauve/mqtt-emitter](https://github.com/RangerMauve/mqtt-emitter)| 0 | 0 | 8 | 2014-09-07 |
|[Raynos/cached-events](https://github.com/Raynos/cached-events)| 0 | 0 | 1 | 2012-08-25 |
|[Raynos/multi-event](https://github.com/Raynos/multi-event)| 0 | 0 | 5 | 2012-08-10 |
|[STRML/forward-emitter](https://github.com/STRML/forward-emitter)| 0 | 0 | 2 | 2014-06-30 |
|[SoftwareDevPro/EventEmitter.coffee](https://github.com/SoftwareDevPro/EventEmitter.coffee)| 0 | 0 | 3 | 2013-11-28 |
|[Tom32i/event-emitter.js](https://github.com/Tom32i/event-emitter.js)| 0 | 0 | 9 | 2014-06-03 |
|[Wizcorp/events](https://github.com/Wizcorp/events)| 0 | 0 | 5 | 2014-03-10 |
|[alanshaw/funce-emitter](https://github.com/alanshaw/funce-emitter)| 0 | 0 | 10 | 2014-05-07 |
|[anchorjs/events](https://github.com/anchorjs/events)| 0 | 0 | 28 | 2013-06-20 |
|[bendrucker/emit-then](https://github.com/bendrucker/emit-then)| 0 | 0 | 26 | 2014-10-11 |
|[bevacqua/contra.emitter](https://github.com/bevacqua/contra.emitter)| 0 | 0 | 7 | 2014-09-21 |
|[beyo/events](https://github.com/beyo/events)| 0 | 0 | 10 | 2014-05-15 |
|[bmullan91/evt-emitter](https://github.com/bmullan91/evt-emitter)| 0 | 0 | 14 | 2014-10-19 |
|[browser-modules/event-emitter](https://github.com/browser-modules/event-emitter)| 0 | 0 | 4 | 2014-07-20 |
|[brycebaril/eenano](https://github.com/brycebaril/eenano)| 0 | 0 | 2 | 2014-08-16 |
|[btknorr/emitter-all](https://github.com/btknorr/emitter-all)| 0 | 0 | 14 | 2013-04-05 |
|[canvace/EventEmitter](https://github.com/canvace/EventEmitter)| 0 | 0 | 7 | 2013-10-26 |
|[chrisdickinson/every](https://github.com/chrisdickinson/every)| 0 | 0 | 4 | 2013-02-19 |
|[chuckpreslar/broadcaster](https://github.com/chuckpreslar/broadcaster)| 0 | 0 | 22 | 2013-07-06 |
|[cookfront/EventEmitter](https://github.com/cookfront/EventEmitter)| 0 | 0 | 1 | 2014-07-19 |
|[coolbloke1324/emitter](https://github.com/coolbloke1324/emitter)| 0 | 0 | 3 | 2014-03-26 |
|[coverslide/mkee](https://github.com/coverslide/mkee)| 0 | 0 | 8 | 2013-04-14 |
|[cybrown/SimpleEventEmitter](https://github.com/cybrown/SimpleEventEmitter)| 0 | 0 | 3 | 2013-07-08 |
|[darlanalves/EventEmitter](https://github.com/darlanalves/EventEmitter)| 0 | 0 | 13 | 2014-10-11 |
|[devangpaliwal/eventemitter](https://github.com/devangpaliwal/eventemitter)| 0 | 0 | 2 | 2013-07-28 |
|[dfcreative/emmy](https://github.com/dfcreative/emmy)| 0 | 0 | 81 | 2014-10-15 |
|[dimik/EventEmitter](https://github.com/dimik/EventEmitter)| 0 | 0 | 8 | 2013-09-28 |
|[edubskiy/events.emitter.js](https://github.com/edubskiy/events.emitter.js)| 0 | 0 | 2 | 2013-06-23 |
|[ericgj/logged-emitter](https://github.com/ericgj/logged-emitter)| 0 | 0 | 2 | 2013-05-22 |
|[esatterwhite/node-pattern-emitter](https://github.com/esatterwhite/node-pattern-emitter)| 0 | 0 | 24 | 2014-05-08 |
|[eventEmitter/ee-event-emitter](https://github.com/eventEmitter/ee-event-emitter)| 0 | 0 | 7 | 2014-08-24 |
|[exfm/event-emitter](https://github.com/exfm/event-emitter)| 0 | 0 | 2 | 2012-09-07 |
|[fabiosantoscode/clientjs-event-emitter](https://github.com/fabiosantoscode/clientjs-event-emitter)| 0 | 0 | 2 | 2013-01-22 |
|[fnobi/EventEmitter](https://github.com/fnobi/EventEmitter)| 0 | 0 | 15 | 2014-08-12 |
|[fskreuz/MiniEvent](https://github.com/fskreuz/MiniEvent)| 0 | 0 | 3 | 2013-09-04 |
|[gaborsar/MicroEventEmitter](https://github.com/gaborsar/MicroEventEmitter)| 0 | 0 | 6 | 2014-06-25 |
|[hachr/EventEmitter](https://github.com/hachr/EventEmitter)| 0 | 0 | 2 | 2014-05-21 |
|[jamesvsnowden/emitter](https://github.com/jamesvsnowden/emitter)| 0 | 0 | 9 | 2013-06-02 |
|[jbrumwell/jqevents](https://github.com/jbrumwell/jqevents)| 0 | 0 | 4 | 2012-12-05 |
|[jdpanderson/OrderedEventEmitter](https://github.com/jdpanderson/OrderedEventEmitter)| 0 | 0 | 3 | 2014-02-16 |
|[jillix/emitter](https://github.com/jillix/emitter)| 0 | 0 | 21 | 2014-08-13 |
|[joechee/EventEmitter-async](https://github.com/joechee/EventEmitter-async)| 0 | 0 | 2 | 2014-09-27 |
|[kaerus-component/emitter](https://github.com/kaerus-component/emitter)| 0 | 0 | 23 | 2014-05-10 |
|[kalachevmax/semantic.events](https://github.com/kalachevmax/semantic.events)| 0 | 0 | 1 | 2014-06-22 |
|[kallaspriit/EventEmitter](https://github.com/kallaspriit/EventEmitter)| 0 | 0 | 2 | 2013-08-08 |
|[lakenen/eemitter](https://github.com/lakenen/eemitter)| 0 | 0 | 8 | 2014-06-26 |
|[madbook/easy-events](https://github.com/madbook/easy-events)| 0 | 0 | 2 | 2014-01-23 |
|[marcello3d/node-listenable](https://github.com/marcello3d/node-listenable)| 0 | 0 | 1 | 2013-10-25 |
|[mateuspv/Events](https://github.com/mateuspv/Events)| 0 | 0 | 9 | 2014-05-21 |
|[mercmobily/EventEmitterCollector](https://github.com/mercmobily/EventEmitterCollector)| 0 | 0 | 12 | 2013-11-23 |
|[mescoda/EventEmitter](https://github.com/mescoda/EventEmitter)| 0 | 0 | 25 | 2014-03-18 |
|[michaelrhodes/event-relay](https://github.com/michaelrhodes/event-relay)| 0 | 0 | 5 | 2013-11-13 |
|[mpotra/events-async](https://github.com/mpotra/events-async)| 0 | 0 | 5 | 2014-05-11 |
|[mvantil/FutureEventEmitter](https://github.com/mvantil/FutureEventEmitter)| 0 | 0 | 3 | 2013-03-30 |
|[nathanfaucett/event_emitter](https://github.com/nathanfaucett/event_emitter)| 0 | 0 | 28 | 2014-10-19 |
|[nathanmacinnes/edifice](https://github.com/nathanmacinnes/edifice)| 0 | 0 | 2 | 2014-04-28 |
|[neocoder/emmi](https://github.com/neocoder/emmi)| 0 | 0 | 1 | 2013-08-23 |
|[nib-health-funds/forward-events](https://github.com/nib-health-funds/forward-events)| 0 | 0 | 3 | 2014-07-14 |
|[niyazpk/EventEmitter](https://github.com/niyazpk/EventEmitter)| 0 | 0 | 16 | 2014-02-08 |
|[oliverroick/SuperSimpleEvents](https://github.com/oliverroick/SuperSimpleEvents)| 0 | 0 | 20 | 2014-10-12 |
|[pfraces-wip/pubsub](https://github.com/pfraces-wip/pubsub)| 0 | 0 | 6 | 2013-02-15 |
|[primus/emits](https://github.com/primus/emits)| 0 | 0 | 13 | 2014-10-06 |
|[radubrehar/zemitter](https://github.com/radubrehar/zemitter)| 0 | 0 | 11 | 2014-09-08 |
|[redrockethq/jetpack](https://github.com/redrockethq/jetpack)| 0 | 0 | 4 | 2014-04-04 |
|[renra/event_emitter_js](https://github.com/renra/event_emitter_js)| 0 | 0 | 1 | 2014-03-13 |
|[reu/event-emitter.js](https://github.com/reu/event-emitter.js)| 0 | 0 | 4 | 2013-06-17 |
|[richRemer/scoped-event-emitter](https://github.com/richRemer/scoped-event-emitter)| 0 | 0 | 4 | 2014-09-01 |
|[roderickObrist/event-emitter](https://github.com/roderickObrist/event-emitter)| 0 | 0 | 1 | 2014-03-19 |
|[rpstewart/EventEmitter](https://github.com/rpstewart/EventEmitter)| 0 | 0 | 8 | 2012-11-06 |
|[sergeyt/fogbus.io](https://github.com/sergeyt/fogbus.io)| 0 | 0 | 23 | 2014-07-16 |
|[shiroyasha/Shiro-EventEmitter](https://github.com/shiroyasha/Shiro-EventEmitter)| 0 | 0 | 7 | 2013-05-10 |
|[skerit/hawkevents](https://github.com/skerit/hawkevents)| 0 | 0 | 2 | 2014-06-18 |
|[sosnowski/event-emitter-ng](https://github.com/sosnowski/event-emitter-ng)| 0 | 0 | 8 | 2013-02-11 |
|[stayradiated/signals](https://github.com/stayradiated/signals)| 0 | 0 | 32 | 2014-03-23 |
|[supershabam/pevents](https://github.com/supershabam/pevents)| 0 | 0 | 29 | 2013-12-04 |
|[thechriswalker/TriggerHappy](https://github.com/thechriswalker/TriggerHappy)| 0 | 0 | 1 | 2012-09-28 |
|[theotheu/eventEmitter](https://github.com/theotheu/eventEmitter)| 0 | 0 | 1 | 2014-09-16 |
|[thiagoneves/event-emitter](https://github.com/thiagoneves/event-emitter)| 0 | 0 | 3 | 2014-07-22 |
|[thomaswelton/bower-event-emitter](https://github.com/thomaswelton/bower-event-emitter)| 0 | 0 | 16 | 2013-10-24 |
|[tim-smart/node-superemitter](https://github.com/tim-smart/node-superemitter)| 0 | 0 | 6 | 2014-06-19 |
|[tomasperezv/event-emitter](https://github.com/tomasperezv/event-emitter)| 0 | 0 | 2 | 2013-10-20 |
|[tunderdomb/EventStation](https://github.com/tunderdomb/EventStation)| 0 | 0 | 2 | 2014-06-16 |
|[tvsudhir/EventEmitter](https://github.com/tvsudhir/EventEmitter)| 0 | 0 | 11 | 2014-07-30 |
|[yomotsu/PeriodicEventEmitter](https://github.com/yomotsu/PeriodicEventEmitter)| 0 | 0 | 1 | 2014-08-11 |
|[zaphod1984/eventEmitterDemux](https://github.com/zaphod1984/eventEmitterDemux)| 0 | 0 | 8 | 2014-02-19 |
