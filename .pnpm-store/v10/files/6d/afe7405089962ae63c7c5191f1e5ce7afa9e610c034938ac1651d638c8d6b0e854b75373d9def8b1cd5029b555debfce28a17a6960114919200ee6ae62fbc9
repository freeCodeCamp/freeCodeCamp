import withHotKeysIgnoreOverride from './withHotKeysIgnoreOverride';
/**
 * Wraps a React component in a HotKeysIgnored component, which passes down the
 * callbacks and options necessary for React Hotkeys to work as a single prop value,
 * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
 * the wrapped component (e.g. div, span, input, etc) in order for the key events
 * to be recorded.
 */

function withIgnoreKeys(Component) {
  var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    only: [],
    except: []
  };
  return withHotKeysIgnoreOverride(Component, hotKeysIgnoreOptions, 'ignoreEvent');
}

export default withIgnoreKeys;