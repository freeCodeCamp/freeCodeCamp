import {extend} from '../utils';

export default function(instance) {
  instance.registerDecorator('inline', function(fn, props, container, options) {
    let ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function(context, options) {
        // Create a new partials stack frame prior to exec.
        let original = container.partials;
        container.partials = extend({}, original, props.partials);
        let ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
}
