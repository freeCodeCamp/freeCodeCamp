# propagate

[![Build Status](https://travis-ci.org/pgte/propagate.svg?branch=master)](https://travis-ci.org/pgte/propagate)

Propagate events from one event emitter into another

## Install

```bash
$ npm install propagate
```

## Propagate

```javascript
  var ee1 = new EventEmitter();
  var ee2 = new EventEmitter();
  propagate(ee1, ee2);

  ee2.on('event', function(a, b) {
    console.log('got propagated event', a, b);
  });

  ee1.emit('event', 'a', 'b');
```

## Unpropagate

You can unpropagate by ending the propagation like this:

```javascript
  var ee1 = new EventEmitter();
  var ee2 = new EventEmitter();
  var p = propagate(ee1, ee2);

  // ...

  p.end();
```

## Only propagate certain events:

```javascript
  var ee1 = new EventEmitter();
  var ee2 = new EventEmitter();
  var p = propagate(['event1', 'event2'], ee1, ee2);
```

## Propagate certain events as other events:

```javascript
  var ee1 = new EventEmitter();
  var ee2 = new EventEmitter();
  var p = propagate({
    'event1': 'other-event1',
    'event2': 'other-event2'
  }, ee1, ee2);
```

# License

MIT