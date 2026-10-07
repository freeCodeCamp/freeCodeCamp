"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.mapDispatchToPropsFactory = mapDispatchToPropsFactory;

var _bindActionCreators = _interopRequireDefault(require("../utils/bindActionCreators"));

var _wrapMapToProps = require("./wrapMapToProps");

var _invalidArgFactory = require("./invalidArgFactory");

function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(dispatch => // @ts-ignore
  (0, _bindActionCreators.default)(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(dispatch => ({
    dispatch
  })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
  (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : (0, _invalidArgFactory.createInvalidArgFactory)(mapDispatchToProps, 'mapDispatchToProps');
}