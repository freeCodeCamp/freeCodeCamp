<p align="center">
  <a href="https://xstate.js.org">
  <br />
  <img src="https://i.imgur.com/FshbFOv.png" alt="XState" width="100"/>
  <br />
    <sub><strong>JavaScript state machines and statecharts</strong></sub>
  <br />
  <br />
  </a>
</p>

[![npm version](https://badge.fury.io/js/xstate.svg)](https://badge.fury.io/js/xstate)
[![Statecharts gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/statecharts/statecharts)
<img src="https://opencollective.com/xstate/tiers/backer/badge.svg?label=sponsors&color=brightgreen" />

JavaScript and TypeScript [finite state machines](https://en.wikipedia.org/wiki/Finite-state_machine) and [statecharts](https://www.sciencedirect.com/science/article/pii/0167642387900359/pdf) for the modern web.

📖 [Read the documentation](https://xstate.js.org/docs)
📑 Adheres to the [SCXML specification](https://www.w3.org/TR/scxml/).

## Packages

- 🤖 `xstate` - Core finite state machine and statecharts library + interpreter
- [🔬 `@xstate/fsm`](https://github.com/statelyai/xstate/tree/main/packages/xstate-fsm) - Minimal finite state machine library
- [📉 `@xstate/graph`](https://github.com/statelyai/xstate/tree/main/packages/xstate-graph) - Graph traversal utilities for XState
- [⚛️ `@xstate/react`](https://github.com/statelyai/xstate/tree/main/packages/xstate-react) - React hooks and utilities for using XState in React applications
- [✅ `@xstate/test`](https://github.com/statelyai/xstate/tree/main/packages/xstate-test) - Model-based testing utilities for XState

## Super quick start

```bash
npm install xstate
```

```js
import { createMachine, interpret } from 'xstate';

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } }
  }
});

// Machine instance with internal state
const toggleService = interpret(toggleMachine)
  .onTransition((state) => console.log(state.value))
  .start();
// => 'inactive'

toggleService.send('TOGGLE');
// => 'active'

toggleService.send('TOGGLE');
// => 'inactive'
```

- [Visualizer](#visualizer)
- [Why? (info about statecharts)](#why)
- [Installation](https://xstate.js.org/docs/guides/installation.html)
- [Finite State Machines](#finite-state-machines)
- [Hierarchical (Nested) State Machines](#hierarchical--nested--state-machines)
- [Parallel State Machines](#parallel-state-machines)
- [History States](#history-states)

## Visualizer

**[Visualize, simulate, and share your statecharts in XState Viz!](https://stately.ai/viz)**

<a href="https://stately.ai/viz" title="xstate visualizer"><img src="https://i.imgur.com/3pEB0B3.png" alt="xstate visualizer" width="300" /></a>

## Why?

Statecharts are a formalism for modeling stateful, reactive systems. This is useful for declaratively describing the _behavior_ of your application, from the individual components to the overall application logic.

Read [📽 the slides](http://slides.com/davidkhourshid/finite-state-machines) ([🎥 video](https://www.youtube.com/watch?v=VU1NKX6Qkxc)) or check out these resources for learning about the importance of finite state machines and statecharts in user interfaces:

- [Statecharts - A Visual Formalism for Complex Systems](https://www.sciencedirect.com/science/article/pii/0167642387900359/pdf) by David Harel
- [The World of Statecharts](https://statecharts.github.io/) by Erik Mogensen
- [Pure UI](https://rauchg.com/2015/pure-ui) by Guillermo Rauch
- [Pure UI Control](https://medium.com/@asolove/pure-ui-control-ac8d1be97a8d) by Adam Solove
- [Stately Discord](https://discord.gg/xstate) chat about anything related to statecharts and XState
- [GitHub Discussions](https://github.com/statelyai/xstate/discussions)

## Finite State Machines

<img src="https://imgur.com/rqqmkJh.png" alt="Light Machine" width="300" />

```js
import { createMachine } from 'xstate';

const lightMachine = createMachine({
  id: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        TIMER: 'yellow'
      }
    },
    yellow: {
      on: {
        TIMER: 'red'
      }
    },
    red: {
      on: {
        TIMER: 'green'
      }
    }
  }
});

const currentState = 'green';

const nextState = lightMachine.transition(currentState, 'TIMER').value;

// => 'yellow'
```

## Hierarchical (Nested) State Machines

<img src="https://imgur.com/GDZAeB9.png" alt="Hierarchical Light Machine" width="300" />

```js
import { createMachine } from 'xstate';

const pedestrianStates = {
  initial: 'walk',
  states: {
    walk: {
      on: {
        PED_TIMER: 'wait'
      }
    },
    wait: {
      on: {
        PED_TIMER: 'stop'
      }
    },
    stop: {}
  }
};

const lightMachine = createMachine({
  id: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        TIMER: 'yellow'
      }
    },
    yellow: {
      on: {
        TIMER: 'red'
      }
    },
    red: {
      on: {
        TIMER: 'green'
      },
      ...pedestrianStates
    }
  }
});

const currentState = 'yellow';

const nextState = lightMachine.transition(currentState, 'TIMER').value;
// => {
//   red: 'walk'
// }

lightMachine.transition('red.walk', 'PED_TIMER').value;
// => {
//   red: 'wait'
// }
```

**Object notation for hierarchical states:**

```js
// ...
const waitState = lightMachine.transition({ red: 'walk' }, 'PED_TIMER').value;

// => { red: 'wait' }

lightMachine.transition(waitState, 'PED_TIMER').value;

// => { red: 'stop' }

lightMachine.transition({ red: 'stop' }, 'TIMER').value;

// => 'green'
```

## Parallel State Machines

<img src="https://imgur.com/GKd4HwR.png" width="300" alt="Parallel state machine" />

```js
const wordMachine = createMachine({
  id: 'word',
  type: 'parallel',
  states: {
    bold: {
      initial: 'off',
      states: {
        on: {
          on: { TOGGLE_BOLD: 'off' }
        },
        off: {
          on: { TOGGLE_BOLD: 'on' }
        }
      }
    },
    underline: {
      initial: 'off',
      states: {
        on: {
          on: { TOGGLE_UNDERLINE: 'off' }
        },
        off: {
          on: { TOGGLE_UNDERLINE: 'on' }
        }
      }
    },
    italics: {
      initial: 'off',
      states: {
        on: {
          on: { TOGGLE_ITALICS: 'off' }
        },
        off: {
          on: { TOGGLE_ITALICS: 'on' }
        }
      }
    },
    list: {
      initial: 'none',
      states: {
        none: {
          on: { BULLETS: 'bullets', NUMBERS: 'numbers' }
        },
        bullets: {
          on: { NONE: 'none', NUMBERS: 'numbers' }
        },
        numbers: {
          on: { BULLETS: 'bullets', NONE: 'none' }
        }
      }
    }
  }
});

const boldState = wordMachine.transition('bold.off', 'TOGGLE_BOLD').value;

// {
//   bold: 'on',
//   italics: 'off',
//   underline: 'off',
//   list: 'none'
// }

const nextState = wordMachine.transition(
  {
    bold: 'off',
    italics: 'off',
    underline: 'on',
    list: 'bullets'
  },
  'TOGGLE_ITALICS'
).value;

// {
//   bold: 'off',
//   italics: 'on',
//   underline: 'on',
//   list: 'bullets'
// }
```

## History States

<img src="https://imgur.com/I4QsQsz.png" width="300" alt="Machine with history state" />

```js
const paymentMachine = createMachine({
  id: 'payment',
  initial: 'method',
  states: {
    method: {
      initial: 'cash',
      states: {
        cash: { on: { SWITCH_CHECK: 'check' } },
        check: { on: { SWITCH_CASH: 'cash' } },
        hist: { type: 'history' }
      },
      on: { NEXT: 'review' }
    },
    review: {
      on: { PREVIOUS: 'method.hist' }
    }
  }
});

const checkState = paymentMachine.transition('method.cash', 'SWITCH_CHECK');

// => State {
//   value: { method: 'check' },
//   history: State { ... }
// }

const reviewState = paymentMachine.transition(checkState, 'NEXT');

// => State {
//   value: 'review',
//   history: State { ... }
// }

const previousState = paymentMachine.transition(reviewState, 'PREVIOUS').value;

// => { method: 'check' }
```

## Sponsors

Huge thanks to the following companies for sponsoring `xstate`. You can sponsor further `xstate` development [on OpenCollective](https://opencollective.com/xstate).

<a href="https://tipe.io" title="Tipe.io"><img src="https://cdn.tipe.io/tipe/tipe-logo.svg?w=240" style="background:#613DEF" /></a>
<a href="https://webflow.com" title="Webflow"><img src="https://uploads-ssl.webflow.com/583347ca8f6c7ee058111b3b/5b03bde0971fdd75d75b5591_webflow.png" height="100" /></a>
