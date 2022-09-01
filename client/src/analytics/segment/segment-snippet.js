function SegmentSnippet() {
  var analytics = [];

  if (analytics.initialize) {
    return;
  }
  if (analytics.invoked) {
    window.console &&
      console.error &&
      console.error('Segment snippet included twice.');
    return;
  }
  analytics.invoked = !0;
  analytics.methods = [
    'trackSubmit',
    'trackClick',
    'trackLink',
    'trackForm',
    'pageview',
    'identify',
    'reset',
    'group',
    'track',
    'ready',
    'alias',
    'debug',
    'page',
    'once',
    'off',
    'on',
    'addSourceMiddleware',
    'addIntegrationMiddleware',
    'setAnonymousId',
    'addDestinationMiddleware'
  ];
  analytics.factory = function (t) {
    return function () {
      var e = Array.prototype.slice.call(arguments);
      e.unshift(t);
      analytics.push(e);
      return analytics;
    };
  };
  for (var t = 0; t < analytics.methods.length; t++) {
    var e = analytics.methods[t];
    analytics[e] = analytics.factory(e);
  }
  analytics.load = function (t, e) {
    var n = document.createElement('script');
    n.type = 'text/javascript';
    n.async = !0;
    n.src =
      'https://cdn.segment.com/analytics.js/v1/' + t + '/analytics.min.js';
    var a = document.getElementsByTagName('script')[0];
    a.parentNode.insertBefore(n, a);
    analytics._loadOptions = e;
  };
  analytics.SNIPPET_VERSION = '4.1.0';
  // analytics.load("SEGMENT_ANALYTICS_KEY"); - don't load here and let the component decide to load or not
  // analytics.page(); - don't call the page, each app should call it when it loads a page by itself

  return { ...analytics };
}

export default SegmentSnippet();
