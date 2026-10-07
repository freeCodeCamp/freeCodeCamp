"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.defaultMergeProps = defaultMergeProps;
exports.wrapMergePropsFunc = wrapMergePropsFunc;
exports.mergePropsFactory = mergePropsFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _verifyPlainObject = _interopRequireDefault(require("../utils/verifyPlainObject"));

var _invalidArgFactory = require("./invalidArgFactory");

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  // @ts-ignore
  return (0, _extends2.default)({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, {
    displayName,
    areMergedPropsEqual
  }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : (0, _invalidArgFactory.createInvalidArgFactory)(mergeProps, 'mergeProps');
}