import { Component } from 'preact';
import { shallowDiffers } from './util';

/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */
export function PureComponent(p, c) {
	this.props = p;
	this.context = c;
}
PureComponent.prototype = new Component();
// Some third-party libraries check if this property is present
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};
