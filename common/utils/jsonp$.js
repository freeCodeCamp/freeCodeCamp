import { AnonymousObservable, Disposable } from 'rx';

const root = typeof window !== 'undefined' ? window : {};
const trash = 'document' in root && root.document.createElement('div');

function destroy(element) {
  trash.appendChild(element);
  trash.innerHTML = '';
}

export function jsonp$(options) {
  let id = 0;
  if (typeof options === 'string') {
    options = { url: options };
  }

  return new AnonymousObservable(function(o) {
    const settings = Object.assign(
      {},
      {
        jsonp: 'JSONPCallback',
        async: true,
        jsonpCallback: 'rxjsjsonpCallbackscallback_' + (id++).toString(36)
      },
      options
    );

    let script = root.document.createElement('script');
    script.type = 'text/javascript';
    script.async = settings.async;
    script.src = settings.url.replace(settings.jsonp, settings.jsonpCallback);

    root[settings.jsonpCallback] = function(data) {
      root[settings.jsonpCallback].called = true;
      root[settings.jsonpCallback].data = data;
    };

    const handler = function(e) {
      if (e.type === 'load' && !root[settings.jsonpCallback].called) {
        e = { type: 'error' };
      }
      const status = e.type === 'error' ? 400 : 200;
      const data = root[settings.jsonpCallback].data;

      if (status === 200) {
        o.onNext({
          status: status,
          responseType: 'jsonp',
          response: data,
          originalEvent: e
        });

        o.onCompleted();
      } else {
        o.onError({
          type: 'error',
          status: status,
          originalEvent: e
        });
      }
    };

    script.onload = script.onreadystatechanged = script.onerror = handler;

    const head = root.document.getElementsByTagName('head')[0] ||
      root.document.documentElement;

    head.insertBefore(script, head.firstChild);

    return Disposable.create(() => {
      script.onload = script.onreadystatechanged = script.onerror = null;

      destroy(script);
      script = null;
    });
  });
}
