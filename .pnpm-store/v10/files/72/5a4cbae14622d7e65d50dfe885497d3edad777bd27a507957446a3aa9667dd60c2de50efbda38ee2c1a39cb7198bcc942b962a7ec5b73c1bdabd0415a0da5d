"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;