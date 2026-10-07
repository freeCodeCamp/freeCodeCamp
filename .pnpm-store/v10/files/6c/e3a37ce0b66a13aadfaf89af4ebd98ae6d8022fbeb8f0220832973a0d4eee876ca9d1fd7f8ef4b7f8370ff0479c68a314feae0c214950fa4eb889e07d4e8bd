import {loadScript, initStripe, LoadStripe} from './shared';

// Execute our own script injection after a tick to give users time to do their
// own script injection.
const stripePromise = Promise.resolve().then(() => loadScript(null));

let loadCalled = false;

stripePromise.catch((err: Error) => {
  if (!loadCalled) {
    console.warn(err);
  }
});

export const loadStripe: LoadStripe = (...args) => {
  loadCalled = true;
  const startTime = Date.now();

  return stripePromise.then((maybeStripe) =>
    initStripe(maybeStripe, args, startTime)
  );
};
