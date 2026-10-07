/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

const CONSTANTS = require('./YGEnums');
import type {
  Yoga$Edge,
  Yoga$FlexWrap,
  Yoga$Align,
  Yoga$FlexDirection,
  Yoga$Direction,
  Yoga$PositionType,
  Yoga$Overflow,
  Yoga$JustifyContent,
  Yoga$Display,
  Yoga$ExperimentalFeature,
} from './YGEnums';

class Layout {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;

  constructor(left, right, top, bottom, width, height) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
  }

  fromJS(expose) {
    expose(
      this.left,
      this.right,
      this.top,
      this.bottom,
      this.width,
      this.height,
    );
  }

  toString() {
    return `<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${
      this.width
    }:${this.height}>`;
  }
}

class Size {
  static fromJS({width, height}) {
    return new Size(width, height);
  }

  width: number;
  height: number;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  fromJS(expose) {
    expose(this.width, this.height);
  }

  toString() {
    return `<Size#${this.width}x${this.height}>`;
  }
}

class Value {
  unit: number;
  value: number;

  constructor(unit, value) {
    this.unit = unit;
    this.value = value;
  }

  fromJS(expose) {
    expose(this.unit, this.value);
  }

  toString() {
    switch (this.unit) {
      case CONSTANTS.UNIT_POINT:
        return String(this.value);
      case CONSTANTS.UNIT_PERCENT:
        return `${this.value}%`;
      case CONSTANTS.UNIT_AUTO:
        return 'auto';
      default: {
        return `${this.value}?`;
      }
    }
  }

  valueOf() {
    return this.value;
  }
}

export type Yoga$Config = {
  isExperimentalFeatureEnabled(feature: Yoga$ExperimentalFeature): boolean,
  setExperimentalFeatureEnabled(
    feature: Yoga$ExperimentalFeature,
    enabled: boolean,
  ): void,
  setPointScaleFactor(factor: number): void,
};

export type Yoga$Node = {
  calculateLayout(
    width?: number,
    height?: number,
    direction?: Yoga$Direction,
  ): void,
  copyStyle(node: Yoga$Node): void,
  free(): void,
  freeRecursive(): void,
  getAlignContent(): Yoga$Align,
  getAlignItems(): Yoga$Align,
  getAlignSelf(): Yoga$Align,
  getAspectRatio(): number,
  getBorder(edge: Yoga$Edge): number,
  getChild(index: number): Yoga$Node,
  getChildCount(): number,
  getComputedBorder(edge: Yoga$Edge): number,
  getComputedBottom(): number,
  getComputedHeight(): number,
  getComputedLayout(): Layout,
  getComputedLeft(): number,
  getComputedMargin(edge: Yoga$Edge): number,
  getComputedPadding(edge: Yoga$Edge): number,
  getComputedRight(): number,
  getComputedTop(): number,
  getComputedWidth(): number,
  getDisplay(): Yoga$Display,
  getFlexBasis(): number,
  getFlexDirection(): Yoga$FlexDirection,
  getFlexGrow(): number,
  getFlexShrink(): number,
  getFlexWrap(): Yoga$FlexWrap,
  getHeight(): Value,
  getJustifyContent(): Yoga$JustifyContent,
  getMargin(edge: Yoga$Edge): Value,
  getMaxHeight(): Value,
  getMaxWidth(): Value,
  getMinHeight(): Value,
  getMinWidth(): Value,
  getOverflow(): Yoga$Overflow,
  getPadding(edge: Yoga$Edge): Value,
  getParent(): ?Yoga$Node,
  getPosition(edge: Yoga$Edge): Value,
  getPositionType(): Yoga$PositionType,
  getWidth(): Value,
  insertChild(child: Yoga$Node, index: number): void,
  isDirty(): boolean,
  markDirty(): void,
  removeChild(child: Yoga$Node): void,
  reset(): void,
  setAlignContent(alignContent: Yoga$Align): void,
  setAlignItems(alignItems: Yoga$Align): void,
  setAlignSelf(alignSelf: Yoga$Align): void,
  setAspectRatio(aspectRatio: number): void,
  setBorder(edge: Yoga$Edge, borderWidth: number): void,
  setDisplay(display: Yoga$Display): void,
  setFlex(flex: number): void,
  setFlexBasis(flexBasis: number | string): void,
  setFlexBasisPercent(flexBasis: number): void,
  setFlexDirection(flexDirection: Yoga$FlexDirection): void,
  setFlexGrow(flexGrow: number): void,
  setFlexShrink(flexShrink: number): void,
  setFlexWrap(flexWrap: Yoga$FlexWrap): void,
  setHeight(height: number | string): void,
  setHeightAuto(): void,
  setHeightPercent(height: number): void,
  setJustifyContent(justifyContent: Yoga$JustifyContent): void,
  setMargin(edge: Yoga$Edge, margin: number): void,
  setMarginAuto(edge: Yoga$Edge): void,
  setMarginPercent(edge: Yoga$Edge, margin: number): void,
  setMaxHeight(maxHeight: number | string): void,
  setMaxHeightPercent(maxHeight: number): void,
  setMaxWidth(maxWidth: number | string): void,
  setMaxWidthPercent(maxWidth: number): void,
  setMeasureFunc(measureFunc: ?Function): void,
  setMinHeight(minHeight: number | string): void,
  setMinHeightPercent(minHeight: number): void,
  setMinWidth(minWidth: number | string): void,
  setMinWidthPercent(minWidth: number): void,
  setOverflow(overflow: Yoga$Overflow): void,
  setPadding(edge: Yoga$Edge, padding: number | string): void,
  setPaddingPercent(edge: Yoga$Edge, padding: number): void,
  setPosition(edge: Yoga$Edge, position: number | string): void,
  setPositionPercent(edge: Yoga$Edge, position: number): void,
  setPositionType(positionType: Yoga$PositionType): void,
  setWidth(width: number | string): void,
  setWidthAuto(): void,
  setWidthPercent(width: number): void,
  unsetMeasureFun(): void,
};

type Yoga = {
  Config: {
    create(): Yoga$Config,
    destroy(config: Yoga$Config): any,
  },
  Node: {
    create(): Yoga$Node,
    createDefault(): Yoga$Node,
    createWithConfig(config: Yoga$Config): Yoga$Node,
    destroy(node: Yoga$Node): any,
  },
  Layout: Layout,
  Size: Size,
  Value: Value,
  getInstanceCount(): number,
  ...typeof CONSTANTS,
};

module.exports = (bind: any, lib: any): Yoga => {
  function patch(prototype, name, fn) {
    let original = prototype[name];

    prototype[name] = function(...args) {
      return fn.call(this, original, ...args);
    };
  }

  for (let fnName of [
    'setPosition',
    'setMargin',
    'setFlexBasis',
    'setWidth',
    'setHeight',
    'setMinWidth',
    'setMinHeight',
    'setMaxWidth',
    'setMaxHeight',
    'setPadding',
  ]) {
    let methods = {
      [CONSTANTS.UNIT_POINT]: lib.Node.prototype[fnName],
      [CONSTANTS.UNIT_PERCENT]: lib.Node.prototype[`${fnName}Percent`],
      [CONSTANTS.UNIT_AUTO]: lib.Node.prototype[`${fnName}Auto`],
    };

    patch(lib.Node.prototype, fnName, function(original, ...args) {
      // We patch all these functions to add support for the following calls:
      // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

      let value = args.pop();
      let unit, asNumber;

      if (value === 'auto') {
        unit = CONSTANTS.UNIT_AUTO;
        asNumber = undefined;
      } else if (value instanceof Value) {
        unit = value.unit;
        asNumber = value.valueOf();
      } else {
        unit =
          typeof value === 'string' && value.endsWith('%')
            ? CONSTANTS.UNIT_PERCENT
            : CONSTANTS.UNIT_POINT;
        asNumber = parseFloat(value);
        if (!Number.isNaN(value) && Number.isNaN(asNumber)) {
          throw new Error(`Invalid value ${value} for ${fnName}`);
        }
      }

      if (!methods[unit])
        throw new Error(
          `Failed to execute "${fnName}": Unsupported unit '${value}'`,
        );

      if (asNumber !== undefined) {
        return methods[unit].call(this, ...args, asNumber);
      } else {
        return methods[unit].call(this, ...args);
      }
    });
  }

  patch(lib.Config.prototype, 'free', function() {
    // Since we handle the memory allocation ourselves (via lib.Config.create),
    // we also need to handle the deallocation
    lib.Config.destroy(this);
  });

  patch(lib.Node, 'create', function(_, config) {
    // We decide the constructor we want to call depending on the parameters
    return config
      ? lib.Node.createWithConfig(config)
      : lib.Node.createDefault();
  });

  patch(lib.Node.prototype, 'free', function() {
    // Since we handle the memory allocation ourselves (via lib.Node.create),
    // we also need to handle the deallocation
    lib.Node.destroy(this);
  });

  patch(lib.Node.prototype, 'freeRecursive', function() {
    for (let t = 0, T = this.getChildCount(); t < T; ++t) {
      this.getChild(0).freeRecursive();
    }
    this.free();
  });

  patch(lib.Node.prototype, 'setMeasureFunc', function(original, measureFunc) {
    // This patch is just a convenience patch, since it helps write more
    // idiomatic source code (such as .setMeasureFunc(null))
    // We also automatically convert the return value of the measureFunc
    // to a Size object, so that we can return anything that has .width and
    // .height properties
    if (measureFunc) {
      return original.call(this, (...args) =>
        Size.fromJS(measureFunc(...args)),
      );
    } else {
      return this.unsetMeasureFunc();
    }
  });

  patch(lib.Node.prototype, 'calculateLayout', function(
    original,
    width = NaN,
    height = NaN,
    direction = CONSTANTS.DIRECTION_LTR,
  ) {
    // Just a small patch to add support for the function default parameters
    return original.call(this, width, height, direction);
  });

  return {
    Config: lib.Config,
    Node: lib.Node,
    Layout: bind('Layout', Layout),
    Size: bind('Size', Size),
    Value: bind('Value', Value),
    getInstanceCount(...args) {
      return lib.getInstanceCount(...args);
    },
    ...CONSTANTS,
  };
};
