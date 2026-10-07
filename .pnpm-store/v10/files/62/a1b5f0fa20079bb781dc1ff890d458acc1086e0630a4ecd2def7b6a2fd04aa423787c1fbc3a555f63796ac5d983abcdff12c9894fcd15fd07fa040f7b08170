"use strict";

exports.__esModule = true;
exports.mapStateToPropsFactory = mapStateToPropsFactory;

var _wrapMapToProps = require("./wrapMapToProps");

var _invalidArgFactory = require("./invalidArgFactory");

function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
  (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : (0, _invalidArgFactory.createInvalidArgFactory)(mapStateToProps, 'mapStateToProps');
}