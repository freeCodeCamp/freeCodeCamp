import {appendContextPath, blockParams, createFrame, isEmpty, isFunction} from '../utils';

export default function(instance) {
  instance.registerHelper('with', function(context, options) {
    if (isFunction(context)) { context = context.call(this); }

    let fn = options.fn;

    if (!isEmpty(context)) {
      let data = options.data;
      if (options.data && options.ids) {
        data = createFrame(options.data);
        data.contextPath = appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
}
