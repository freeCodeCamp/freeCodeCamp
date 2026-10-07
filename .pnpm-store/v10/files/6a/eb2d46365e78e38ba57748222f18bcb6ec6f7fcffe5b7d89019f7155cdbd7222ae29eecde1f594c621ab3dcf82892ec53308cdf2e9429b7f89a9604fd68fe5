import { IS_NON_DIMENSIONAL } from '../constants';
import options from '../options';

function setStyle(style, key, value) {
	if (key[0] === '-') {
		style.setProperty(key, value == null ? '' : value);
	} else if (value == null) {
		style[key] = '';
	} else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) {
		style[key] = value;
	} else {
		style[key] = value + 'px';
	}
}

// A logical clock to solve issues like https://github.com/preactjs/preact/issues/3927.
// When the DOM performs an event it leaves micro-ticks in between bubbling up which means that
// an event can trigger on a newly reated DOM-node while the event bubbles up.
//
// Originally inspired by Vue
// (https://github.com/vuejs/core/blob/caeb8a68811a1b0f79/packages/runtime-dom/src/modules/events.ts#L90-L101),
// but modified to use a logical clock instead of Date.now() in case event handlers get attached
// and events get dispatched during the same millisecond.
//
// The clock is incremented after each new event dispatch. This allows 1 000 000 new events
// per second for over 280 years before the value reaches Number.MAX_SAFE_INTEGER (2**53 - 1).
let eventClock = 0;

/**
 * Set a property value on a DOM node
 * @param {PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {string} namespace Whether or not this DOM node is an SVG node or not
 */
export function setProperty(dom, name, value, oldValue, namespace) {
	let useCapture;

	o: if (name === 'style') {
		if (typeof value == 'string') {
			dom.style.cssText = value;
		} else {
			if (typeof oldValue == 'string') {
				dom.style.cssText = oldValue = '';
			}

			if (oldValue) {
				for (name in oldValue) {
					if (!(value && name in value)) {
						setStyle(dom.style, name, '');
					}
				}
			}

			if (value) {
				for (name in value) {
					if (!oldValue || value[name] !== oldValue[name]) {
						setStyle(dom.style, name, value[name]);
					}
				}
			}
		}
	}
	// Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
	else if (name[0] === 'o' && name[1] === 'n') {
		useCapture =
			name !== (name = name.replace(/(PointerCapture)$|Capture$/i, '$1'));

		// Infer correct casing for DOM built-in events:
		if (
			name.toLowerCase() in dom ||
			name === 'onFocusOut' ||
			name === 'onFocusIn'
		)
			name = name.toLowerCase().slice(2);
		else name = name.slice(2);

		if (!dom._listeners) dom._listeners = {};
		dom._listeners[name + useCapture] = value;

		if (value) {
			if (!oldValue) {
				value._attached = eventClock;
				dom.addEventListener(
					name,
					useCapture ? eventProxyCapture : eventProxy,
					useCapture
				);
			} else {
				value._attached = oldValue._attached;
			}
		} else {
			dom.removeEventListener(
				name,
				useCapture ? eventProxyCapture : eventProxy,
				useCapture
			);
		}
	} else {
		if (namespace == 'http://www.w3.org/2000/svg') {
			// Normalize incorrect prop usage for SVG:
			// - xlink:href / xlinkHref --> href (xlink:href was removed from SVG and isn't needed)
			// - className --> class
			name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
		} else if (
			name != 'width' &&
			name != 'height' &&
			name != 'href' &&
			name != 'list' &&
			name != 'form' &&
			// Default value in browsers is `-1` and an empty string is
			// cast to `0` instead
			name != 'tabIndex' &&
			name != 'download' &&
			name != 'rowSpan' &&
			name != 'colSpan' &&
			name != 'role' &&
			name != 'popover' &&
			name in dom
		) {
			try {
				dom[name] = value == null ? '' : value;
				// labelled break is 1b smaller here than a return statement (sorry)
				break o;
			} catch (e) {}
		}

		// aria- and data- attributes have no boolean representation.
		// A `false` value is different from the attribute not being
		// present, so we can't remove it. For non-boolean aria
		// attributes we could treat false as a removal, but the
		// amount of exceptions would cost too many bytes. On top of
		// that other frameworks generally stringify `false`.

		if (typeof value == 'function') {
			// never serialize functions as attribute values
		} else if (value != null && (value !== false || name[4] === '-')) {
			dom.setAttribute(name, name == 'popover' && value == true ? '' : value);
		} else {
			dom.removeAttribute(name);
		}
	}
}

/**
 * Create an event proxy function.
 * @param {boolean} useCapture Is the event handler for the capture phase.
 * @private
 */
function createEventProxy(useCapture) {
	/**
	 * Proxy an event to hooked event handlers
	 * @param {PreactEvent} e The event object from the browser
	 * @private
	 */
	return function (e) {
		if (this._listeners) {
			const eventHandler = this._listeners[e.type + useCapture];
			if (e._dispatched == null) {
				e._dispatched = eventClock++;

				// When `e._dispatched` is smaller than the time when the targeted event
				// handler was attached we know we have bubbled up to an element that was added
				// during patching the DOM.
			} else if (e._dispatched < eventHandler._attached) {
				return;
			}
			return eventHandler(options.event ? options.event(e) : e);
		}
	};
}

const eventProxy = createEventProxy(false);
const eventProxyCapture = createEventProxy(true);
