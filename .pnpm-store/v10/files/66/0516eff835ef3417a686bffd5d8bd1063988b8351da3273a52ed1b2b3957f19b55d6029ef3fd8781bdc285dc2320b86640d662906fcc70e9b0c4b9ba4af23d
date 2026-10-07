'use strict';

var React = require('react');
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/components/FontAwesomeIcon.tsx

// src/utils/camelize.ts
function _isNumerical(object) {
  object = object - 0;
  return object === object;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[_-]+(.)?/g, (_, chr) => {
    return chr ? chr.toUpperCase() : "";
  });
  return string.charAt(0).toLowerCase() + string.slice(1);
}
var createGradientStops = (stop, index) => React__default.default.createElement("stop", {
  key: `${index}-${stop.offset}`,
  offset: stop.offset,
  stopColor: stop.color,
  ...stop.opacity !== void 0 && { stopOpacity: stop.opacity }
});

// src/converter.ts
function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
var styleCache = /* @__PURE__ */ new Map();
var STYLE_CACHE_LIMIT = 1e3;
function styleToObject(style) {
  if (styleCache.has(style)) {
    return styleCache.get(style);
  }
  const result = {};
  let start = 0;
  const len = style.length;
  while (start < len) {
    const semicolonIndex = style.indexOf(";", start);
    const end = semicolonIndex === -1 ? len : semicolonIndex;
    const pair = style.slice(start, end).trim();
    if (pair) {
      const colonIndex = pair.indexOf(":");
      if (colonIndex > 0) {
        const rawProp = pair.slice(0, colonIndex).trim();
        const value = pair.slice(colonIndex + 1).trim();
        if (rawProp && value) {
          const prop = camelize(rawProp);
          result[prop.startsWith("webkit") ? capitalize(prop) : prop] = value;
        }
      }
    }
    start = end + 1;
  }
  if (styleCache.size === STYLE_CACHE_LIMIT) {
    const oldestKey = styleCache.keys().next().value;
    if (oldestKey) {
      styleCache.delete(oldestKey);
    }
  }
  styleCache.set(style, result);
  return result;
}
function convert(createElement, element, extraProps = {}) {
  if (typeof element === "string") {
    return element;
  }
  const children = (element.children || []).map((child) => {
    let element2 = child;
    if (("fill" in extraProps || extraProps.gradientFill) && child.tag === "path" && "fill" in child.attributes) {
      element2 = {
        ...child,
        attributes: {
          ...child.attributes,
          fill: void 0
        }
      };
    }
    return convert(createElement, element2);
  });
  const elementAttributes = element.attributes || {};
  const attrs = {};
  for (const [key, val] of Object.entries(elementAttributes)) {
    switch (true) {
      case key === "class": {
        attrs.className = val;
        break;
      }
      case key === "style": {
        attrs.style = styleToObject(String(val));
        break;
      }
      case key.startsWith("aria-"):
      case key.startsWith("data-"): {
        attrs[key.toLowerCase()] = val;
        break;
      }
      default: {
        attrs[camelize(key)] = val;
      }
    }
  }
  const {
    style: existingStyle,
    role: existingRole,
    "aria-label": ariaLabel,
    gradientFill,
    ...remaining
  } = extraProps;
  if (existingStyle) {
    attrs.style = attrs.style ? { ...attrs.style, ...existingStyle } : existingStyle;
  }
  if (existingRole) {
    attrs.role = existingRole;
  }
  if (ariaLabel) {
    attrs["aria-label"] = ariaLabel;
    attrs["aria-hidden"] = "false";
  }
  if (gradientFill) {
    attrs.fill = `url(#${gradientFill.id})`;
    const {
      type: gradientType,
      stops: gradientStops = [],
      ...gradientProps
    } = gradientFill;
    children.unshift(
      createElement(
        gradientType === "linear" ? "linearGradient" : "radialGradient",
        {
          ...gradientProps,
          id: gradientFill.id
        },
        gradientStops.map(createGradientStops)
      )
    );
  }
  return createElement(element.tag, { ...attrs, ...remaining }, ...children);
}
var makeReactConverter = convert.bind(null, React__default.default.createElement);
var useAccessibilityId = (id, hasAccessibleProps) => {
  const generatedId = React.useId();
  return id || (hasAccessibleProps ? generatedId : void 0);
};

// src/logger.ts
var Logger = class {
  constructor(scope = "react-fontawesome") {
    this.enabled = false;
    let IS_DEV = false;
    try {
      IS_DEV = typeof process !== "undefined" && process.env?.NODE_ENV === "development";
    } catch {
    }
    this.scope = scope;
    this.enabled = IS_DEV;
  }
  /**
   * Logs messages to the console if not in production.
   * @param args - The message and/or data to log.
   */
  log(...args) {
    if (!this.enabled) return;
    console.log(`[${this.scope}]`, ...args);
  }
  /**
   * Logs warnings to the console if not in production.
   * @param args - The warning message and/or data to log.
   */
  warn(...args) {
    if (!this.enabled) return;
    console.warn(`[${this.scope}]`, ...args);
  }
  /**
   * Logs errors to the console if not in production.
   * @param args - The error message and/or data to log.
   */
  error(...args) {
    if (!this.enabled) return;
    console.error(`[${this.scope}]`, ...args);
  }
};
typeof process !== "undefined" && process.env?.FA_VERSION || "7.0.0";
var SVG_CORE_VERSION = (
  // @ts-expect-error TS2872 - Expression is always truthy - This is true when v7 of SVGCore is used, but not when v6 is used.
  // This is the point of this check - if the property exists on config, we have v7, otherwise we have v6.
  // TS is checking this against the dev dependencies which uses v7, so it reports a false error here.
  ("searchPseudoElementsFullScan" in fontawesomeSvgCore.config && typeof fontawesomeSvgCore.config.searchPseudoElementsFullScan === "boolean" ? "7.0.0" : "6.0.0")
);
var IS_VERSION_7_OR_LATER = Number.parseInt(SVG_CORE_VERSION) >= 7;
var getIsVersion7OrLater = () => IS_VERSION_7_OR_LATER;
var DEFAULT_CLASSNAME_PREFIX = "fa";
var ANIMATION_CLASSES = {
  beat: "fa-beat",
  fade: "fa-fade",
  beatFade: "fa-beat-fade",
  bounce: "fa-bounce",
  shake: "fa-shake",
  spin: "fa-spin",
  spinPulse: "fa-spin-pulse",
  spinReverse: "fa-spin-reverse",
  pulse: "fa-pulse"
};
var PULL_CLASSES = {
  left: "fa-pull-left",
  right: "fa-pull-right"
};
var ROTATE_CLASSES = {
  "90": "fa-rotate-90",
  "180": "fa-rotate-180",
  "270": "fa-rotate-270"
};
var SIZE_CLASSES = {
  "2xs": "fa-2xs",
  xs: "fa-xs",
  sm: "fa-sm",
  lg: "fa-lg",
  xl: "fa-xl",
  "2xl": "fa-2xl",
  "1x": "fa-1x",
  "2x": "fa-2x",
  "3x": "fa-3x",
  "4x": "fa-4x",
  "5x": "fa-5x",
  "6x": "fa-6x",
  "7x": "fa-7x",
  "8x": "fa-8x",
  "9x": "fa-9x",
  "10x": "fa-10x"
};
var STYLE_CLASSES = {
  border: "fa-border",
  /** @deprecated */
  fixedWidth: "fa-fw",
  flip: "fa-flip",
  flipHorizontal: "fa-flip-horizontal",
  flipVertical: "fa-flip-vertical",
  inverse: "fa-inverse",
  rotateBy: "fa-rotate-by",
  swapOpacity: "fa-swap-opacity",
  widthAuto: "fa-width-auto"
};
var LAYER_CLASSES = {
  default: "fa-layers"
};

// src/utils/get-class-list-from-props.ts
function withPrefix(cls) {
  const prefix = fontawesomeSvgCore.config.cssPrefix || fontawesomeSvgCore.config.familyPrefix || DEFAULT_CLASSNAME_PREFIX;
  return prefix === DEFAULT_CLASSNAME_PREFIX ? cls : cls.replace(
    new RegExp(String.raw`(?<=^|\s)${DEFAULT_CLASSNAME_PREFIX}-`, "g"),
    `${prefix}-`
  );
}
function getClassListFromProps(props) {
  const {
    beat,
    fade,
    beatFade,
    bounce,
    shake,
    spin,
    spinPulse,
    spinReverse,
    pulse,
    fixedWidth,
    inverse,
    border,
    flip,
    size,
    rotation,
    pull,
    swapOpacity,
    rotateBy,
    widthAuto,
    className
  } = props;
  const result = [];
  if (className) result.push(...className.split(" "));
  if (beat) result.push(ANIMATION_CLASSES.beat);
  if (fade) result.push(ANIMATION_CLASSES.fade);
  if (beatFade) result.push(ANIMATION_CLASSES.beatFade);
  if (bounce) result.push(ANIMATION_CLASSES.bounce);
  if (shake) result.push(ANIMATION_CLASSES.shake);
  if (spin) result.push(ANIMATION_CLASSES.spin);
  if (spinReverse) result.push(ANIMATION_CLASSES.spinReverse);
  if (spinPulse) result.push(ANIMATION_CLASSES.spinPulse);
  if (pulse) result.push(ANIMATION_CLASSES.pulse);
  if (fixedWidth) result.push(STYLE_CLASSES.fixedWidth);
  if (inverse) result.push(STYLE_CLASSES.inverse);
  if (border) result.push(STYLE_CLASSES.border);
  if (flip === true) result.push(STYLE_CLASSES.flip);
  if (flip === "horizontal" || flip === "both") {
    result.push(STYLE_CLASSES.flipHorizontal);
  }
  if (flip === "vertical" || flip === "both") {
    result.push(STYLE_CLASSES.flipVertical);
  }
  if (size !== void 0 && size !== null) result.push(SIZE_CLASSES[size]);
  if (rotation !== void 0 && rotation !== null && rotation !== 0) {
    result.push(ROTATE_CLASSES[rotation]);
  }
  if (pull !== void 0 && pull !== null) result.push(PULL_CLASSES[pull]);
  if (swapOpacity) result.push(STYLE_CLASSES.swapOpacity);
  if (!getIsVersion7OrLater()) return result;
  if (rotateBy) result.push(STYLE_CLASSES.rotateBy);
  if (widthAuto) result.push(STYLE_CLASSES.widthAuto);
  const prefix = fontawesomeSvgCore.config.cssPrefix || fontawesomeSvgCore.config.familyPrefix || DEFAULT_CLASSNAME_PREFIX;
  return prefix === DEFAULT_CLASSNAME_PREFIX ? result : (
    // TODO: see if we can achieve custom prefix support without iterating
    // eslint-disable-next-line unicorn/no-array-callback-reference
    result.map(withPrefix)
  );
}
var isIconDefinition = (icon) => typeof icon === "object" && "icon" in icon && !!icon.icon;
function normalizeIconArgs(icon) {
  if (!icon) {
    return void 0;
  }
  if (isIconDefinition(icon)) {
    return icon;
  }
  return fontawesomeSvgCore.parse.icon(icon);
}

// src/utils/typed-object-keys.ts
function typedObjectKeys(obj) {
  return Object.keys(obj);
}

// src/components/FontAwesomeIcon.tsx
var logger = new Logger("FontAwesomeIcon");
var DEFAULT_PROPS = {
  border: false,
  className: "",
  mask: void 0,
  maskId: void 0,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: void 0,
  listItem: false,
  pull: void 0,
  pulse: false,
  rotation: void 0,
  rotateBy: false,
  size: void 0,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: "",
  titleId: void 0,
  transform: void 0,
  swapOpacity: false,
  widthAuto: false
};
var DEFAULT_PROP_KEYS = new Set(Object.keys(DEFAULT_PROPS));
var FontAwesomeIcon = React__default.default.forwardRef((props, ref) => {
  const allProps = { ...DEFAULT_PROPS, ...props };
  const {
    icon: iconArgs,
    mask: maskArgs,
    symbol,
    title,
    titleId: titleIdFromProps,
    maskId: maskIdFromProps,
    transform
  } = allProps;
  const maskId = useAccessibilityId(maskIdFromProps, Boolean(maskArgs));
  const titleId = useAccessibilityId(titleIdFromProps, Boolean(title));
  const iconLookup = normalizeIconArgs(iconArgs);
  if (!iconLookup) {
    logger.error("Icon lookup is undefined", iconArgs);
    return null;
  }
  const classList = getClassListFromProps(allProps);
  const transformProps = typeof transform === "string" ? fontawesomeSvgCore.parse.transform(transform) : transform;
  const normalizedMaskArgs = normalizeIconArgs(maskArgs);
  const renderedIcon = fontawesomeSvgCore.icon(iconLookup, {
    ...classList.length > 0 && { classes: classList },
    ...transformProps && { transform: transformProps },
    ...normalizedMaskArgs && { mask: normalizedMaskArgs },
    symbol,
    title,
    titleId,
    maskId
  });
  if (!renderedIcon) {
    logger.error("Could not find icon", iconLookup);
    return null;
  }
  const { abstract } = renderedIcon;
  const extraProps = { ref };
  for (const key of typedObjectKeys(allProps)) {
    if (DEFAULT_PROP_KEYS.has(key)) {
      continue;
    }
    extraProps[key] = allProps[key];
  }
  return makeReactConverter(abstract[0], extraProps);
});
FontAwesomeIcon.displayName = "FontAwesomeIcon";
var DEFAULT_CLASSNAMES = `${LAYER_CLASSES.default} ${STYLE_CLASSES.fixedWidth}`;
var FontAwesomeLayers = ({
  children,
  className,
  size,
  ...attributes
}) => {
  const prefixedDefaultClasses = withPrefix(DEFAULT_CLASSNAMES);
  const classes = className ? `${prefixedDefaultClasses} ${className}` : prefixedDefaultClasses;
  const element = /* @__PURE__ */ jsxRuntime.jsx("span", { ...attributes, className: classes, children });
  if (size) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: withPrefix(`fa-${size}`), children: element });
  }
  return element;
};
var LayersText = ({
  text,
  className,
  inverse,
  transform,
  style,
  ...attributes
}) => {
  const textAbstractElement = React.useMemo(() => {
    const textObject = fontawesomeSvgCore.text(text, {
      classes: [
        ...className?.split(" ") || [],
        ...inverse ? [STYLE_CLASSES.inverse] : []
      ],
      transform: typeof transform === "string" ? fontawesomeSvgCore.parse.transform(transform) : transform
    });
    return textObject.abstract[0];
  }, [text, transform, className, inverse]);
  return makeReactConverter(textAbstractElement, { ...attributes, style });
};
var LayersCounter = ({
  count,
  className,
  style,
  ...attributes
}) => {
  const counterAbstractElement = React.useMemo(
    () => fontawesomeSvgCore.counter(count, {
      classes: className?.split(" ")
    }).abstract[0],
    [count, className]
  );
  return makeReactConverter(counterAbstractElement, { ...attributes, style });
};

exports.FontAwesomeIcon = FontAwesomeIcon;
exports.FontAwesomeLayers = FontAwesomeLayers;
exports.LayersCounter = LayersCounter;
exports.LayersText = LayersText;
