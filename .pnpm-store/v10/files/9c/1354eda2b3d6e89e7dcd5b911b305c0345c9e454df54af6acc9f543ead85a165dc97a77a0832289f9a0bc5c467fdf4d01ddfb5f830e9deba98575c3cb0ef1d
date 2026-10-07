# automation-events

**A module which provides an implementation of an automation event list.**

[![version](https://img.shields.io/npm/v/automation-events.svg?style=flat-square)](https://www.npmjs.com/package/automation-events)

This module provides an implementation of an automation event list to manage the internal state of an [AudioParam](https://webaudio.github.io/web-audio-api/#AudioParam) as defined by the [Web Audio API](https://webaudio.github.io/web-audio-api).

## Usage

The `automation-events` module is available on [npm](https://www.npmjs.com/package/automation-events) and can be
installed as usual.

```shell
npm install automation-events
```

### AutomationEventList

It exports an `AutomationEventList` class which can be imported and used like this:

```js
import { AutomationEventList } from 'automation-events';

const automationEventList = new AutomationEventList(1);

automationEventList.add({ startTime: 10, type: 'setValue', value: 0 });

// It will return 1 for a time >= 0 and <10.
console.log(automationEventList.getValue(5));

// It will return 0 for a time >= 10.
console.log(automationEventList.getValue(10));
```

#### add(automationEvent)

This function can be used to add an automation event to the list. All automation events can also be created with utility functions as described below.

#### getValue(time)

This function returns the value at the given time.

#### flush(time)

This function will remove all events from the AutomationEventList which are unnecessary to compute values at a time which is greater or equal to the given time.

### utility functions

The `automation-events` package also exports utility functions to create all events that can be scheduled on an `AudioParam`.

#### createCancelAndHoldAutomationEvent()

```js
import { createCancelAndHoldAutomationEvent } from 'automation-events';

createCancelAndHoldAutomationEvent(10);
// { cancelTime: 10, type: 'cancelAndHold' }
```

#### createCancelScheduledValuesAutomationEvent()

```js
import { createCancelScheduledValuesAutomationEvent } from 'automation-events';

createCancelScheduledValuesAutomationEvent(5);
// { cancelTime: 5, type: 'cancelScheduledValues' }
```

#### createExponentialRampToValueAutomationEvent()

```js
import { createExponentialRampToValueAutomationEvent } from 'automation-events';

createExponentialRampToValueAutomationEvent(2, 10);
// { endTime: 10, type: 'exponentialRampToValue', value: 2 }
```

#### createLinearRampToValueAutomationEvent()

```js
import { createLinearRampToValueAutomationEvent } from 'automation-events';

createLinearRampToValueAutomationEvent(-1, 4);
// { endTime: 4, type: 'linearRampToValue', value: -1 };
```

#### createSetTargetAutomationEvent()

```js
import { createSetTargetAutomationEvent } from 'automation-events';

createSetTargetAutomationEvent(0.5, 1, 0.1);
// { startTime: 1, target: 0.5, timeConstant: 0.1, type: 'setTarget' }
```

#### createSetValueAutomationEvent()

```js
import { createSetValueAutomationEvent } from 'automation-events';

createSetValueAutomationEvent(1, 8);
// { startTime: 8, type: 'setValue', value: 1 }
```

#### createSetValueCurveAutomationEvent()

```js
import { createSetValueCurveAutomationEvent } from 'automation-events';

const values = new Float32Array([1, 0, -1]);

createSetValueCurveAutomationEvent(values, 0, 5);
// { duration: 5, startTime: 0, type: 'setValueCurve', values }
```
