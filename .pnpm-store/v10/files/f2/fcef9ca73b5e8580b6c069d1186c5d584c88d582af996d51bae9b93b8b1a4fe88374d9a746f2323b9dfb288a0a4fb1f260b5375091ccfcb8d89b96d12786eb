import { GrowthBook } from '@growthbook/growthbook';
export { BrowserCookieStickyBucketService, ExpressCookieStickyBucketService, GrowthBook, LocalStorageStickyBucketService, RedisStickyBucketService, StickyBucketService, clearCache, configureCache, getPolyfills, helpers, prefetchPayload, setPolyfills } from '@growthbook/growthbook';
import * as React from 'react';

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

const GrowthBookContext = /*#__PURE__*/React.createContext({});

/** @deprecated */
async function getGrowthBookSSRData(context) {
  // Server-side GrowthBook instance
  const gb = new GrowthBook({
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
  const isFirst = React.useRef(true);
  if (gb && isFirst.current) {
    gb.setFeatures(data.features);
    gb.setAttributes(data.attributes);
    isFirst.current = false;
  }
}
function useExperiment(exp) {
  const {
    growthbook
  } = React.useContext(GrowthBookContext);
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
  } = React.useContext(GrowthBookContext);
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
  const [hitTimeout, setHitTimeout] = React.useState(false);
  const ready = gb ? gb.ready : false;
  React.useEffect(() => {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, ready || hitTimeout ? children : fallback || null);
}
function IfFeatureEnabled({
  children,
  feature
}) {
  return useFeature(feature).on ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : null;
}
function FeatureString(props) {
  const value = useFeature(props.feature).value;
  if (value !== null) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, value);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.default);
}
const withRunExperiment = Component => {
  const withRunExperimentWrapper = props => /*#__PURE__*/React.createElement(GrowthBookContext.Consumer, null, ({
    growthbook
  }) => {
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
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

  const [_, setRenderCount] = React.useState(0);
  React.useEffect(() => {
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
  return /*#__PURE__*/React.createElement(GrowthBookContext.Provider, {
    value: {
      growthbook
    }
  }, children);
};

export { FeatureString, FeaturesReady, GrowthBookContext, GrowthBookProvider, IfFeatureEnabled, getGrowthBookSSRData, useExperiment, useFeature, useFeatureIsOn, useFeatureValue, useGrowthBook, useGrowthBookSSR, withRunExperiment };
//# sourceMappingURL=index.js.map
