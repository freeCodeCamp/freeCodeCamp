import Exception from '../exception';

export default function(instance) {
  instance.registerHelper('helperMissing', function(/* [args, ]options */) {
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new Exception('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
}
