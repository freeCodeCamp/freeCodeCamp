'use strict';

var growthbook = require('@growthbook/growthbook');
var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

/** @deprecated */

const GrowthBookContext = /*#__PURE__*/React__namespace.createContext({});

/** @deprecated */
async function getGrowthBookSSRData(context) {
  // Server-side GrowthBook instance
  const gb = new growthbook.GrowthBook({
    ...context
  });

  // Load feature flags from network if needed
  if (context.clientKey) {
    await gb.init();
  }
  const data = {
    attributes: gb.getAttributes(),
    features: gb.getFeatures()
  };
  gb.destroy();
  return data;
}

/** @deprecated */
function useGrowthBookSSR(data) {
  const gb = useGrowthBook();

  // Only do this once to avoid infinite loops
  const isFirst = React__namespace.useRef(true);
  if (gb && isFirst.current) {
    gb.setFeatures(data.features);
    gb.setAttributes(data.attributes);
    isFirst.current = false;
  }
}
function useExperiment(exp) {
  const {
    growthbook
  } = React__namespace.useContext(GrowthBookContext);
  return growthbook.run(exp);
}
function useFeature(id) {
  const growthbook = useGrowthBook();
  return growthbook.evalFeature(id);
}
function useFeatureIsOn(id) {
  const growthbook = useGrowthBook();
  return growthbook.isOn(id);
}
function useFeatureValue(id, fallback) {
  const growthbook = useGrowthBook();
  return growthbook.getFeatureValue(id, fallback);
}
function useGrowthBook() {
  const {
    growthbook
  } = React__namespace.useContext(GrowthBookContext);
  if (!growthbook) {
    throw new Error("Missing or invalid GrowthBookProvider");
  }
  return growthbook;
}
function FeaturesReady({
  children,
  timeout,
  fallback
}) {
  const gb = useGrowthBook();
  const [hitTimeout, setHitTimeout] = React__namespace.useState(false);
  const ready = gb ? gb.ready : false;
  React__namespace.useEffect(() => {
    if (timeout && !ready) {
      const timer = setTimeout(() => {
        gb && gb.log("FeaturesReady timed out waiting for features to load", {
          timeout
        });
        setHitTimeout(true);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [timeout, ready, gb]);
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, ready || hitTimeout ? children : fallback || null);
}
function IfFeatureEnabled({
  children,
  feature
}) {
  return useFeature(feature).on ? /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, children) : null;
}
function FeatureString(props) {
  const value = useFeature(props.feature).value;
  if (value !== null) {
    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, value);
  }
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, props.default);
}
const withRunExperiment = Component => {
  const withRunExperimentWrapper = props => /*#__PURE__*/React__namespace.createElement(GrowthBookContext.Consumer, null, ({
    growthbook
  }) => {
    return /*#__PURE__*/React__namespace.createElement(Component, _extends({}, props, {
      runExperiment: exp => growthbook.run(exp)
    }));
  });
  return withRunExperimentWrapper;
};
withRunExperiment.displayName = "WithRunExperiment";
const GrowthBookProvider = ({
  children,
  growthbook
}) => {
  // Tell growthbook how to re-render our app (for dev mode integration)

  const [_, setRenderCount] = React__namespace.useState(0);
  React__namespace.useEffect(() => {
    if (!growthbook || !growthbook.setRenderer) return;
    growthbook.setRenderer(() => {
      setRenderCount(v => v + 1);
    });
    return () => {
      growthbook.setRenderer(() => {
        // do nothing
      });
    };
  }, [growthbook]);
  return /*#__PURE__*/React__namespace.createElement(GrowthBookContext.Provider, {
    value: {
      growthbook
    }
  }, children);
};

Object.defineProperty(exports, "BrowserCookieStickyBucketService", {
  enumerable: true,
  get: function () { return growthbook.BrowserCookieStickyBucketService; }
});
Object.defineProperty(exports, "ExpressCookieStickyBucketService", {
  enumerable: true,
  get: function () { return growthbook.ExpressCookieStickyBucketService; }
});
Object.defineProperty(exports, "GrowthBook", {
  enumerable: true,
  get: function () { return growthbook.GrowthBook; }
});
Object.defineProperty(exports, "LocalStorageStickyBucketService", {
  enumerable: true,
  get: function () { return growthbook.LocalStorageStickyBucketService; }
});
Object.defineProperty(exports, "RedisStickyBucketService", {
  enumerable: true,
  get: function () { return growthbook.RedisStickyBucketService; }
});
Object.defineProperty(exports, "StickyBucketService", {
  enumerable: true,
  get: function () { return growthbook.StickyBucketService; }
});
Object.defineProperty(exports, "clearCache", {
  enumerable: true,
  get: function () { return growthbook.clearCache; }
});
Object.defineProperty(exports, "configureCache", {
  enumerable: true,
  get: function () { return growthbook.configureCache; }
});
Object.defineProperty(exports, "getPolyfills", {
  enumerable: true,
  get: function () { return growthbook.getPolyfills; }
});
Object.defineProperty(exports, "helpers", {
  enumerable: true,
  get: function () { return growthbook.helpers; }
});
Object.defineProperty(exports, "prefetchPayload", {
  enumerable: true,
  get: function () { return growthbook.prefetchPayload; }
});
Object.defineProperty(exports, "setPolyfills", {
  enumerable: true,
  get: function () { return growthbook.setPolyfills; }
});
exports.FeatureString = FeatureString;
exports.FeaturesReady = FeaturesReady;
exports.GrowthBookContext = GrowthBookContext;
exports.GrowthBookProvider = GrowthBookProvider;
exports.IfFeatureEnabled = IfFeatureEnabled;
exports.getGrowthBookSSRData = getGrowthBookSSRData;
exports.useExperiment = useExperiment;
exports.useFeature = useFeature;
exports.useFeatureIsOn = useFeatureIsOn;
exports.useFeatureValue = useFeatureValue;
exports.useGrowthBook = useGrowthBook;
exports.useGrowthBookSSR = useGrowthBookSSR;
exports.withRunExperiment = withRunExperiment;
//# sourceMappingURL=index.js.map
