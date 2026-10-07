import { _ } from '@swc/helpers/esm/_instanceof.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_without_properties.js';
import '@swc/helpers/esm/_sliced_to_array.js';
import '@swc/helpers/esm/_to_consumable_array.js';
import '@swc/helpers/esm/_define_property.js';
import '@swc/helpers/esm/_extends.js';
import '@swc/helpers/esm/_object_destructuring_empty.js';
import '@swc/helpers/esm/_object_spread.js';
import '@swc/helpers/esm/_object_spread_props.js';
import '@swc/helpers/esm/_type_of.js';
import './index11.js';
import { isEqual } from './index24.js';
import { safelyRunOnBrowser } from './index25.js';

function getStateWithoutPage(state) {
    var _ref = state || {}; _ref.page; var rest = _$1(_ref, [
        "page"
    ]);
    return rest;
}
function createInfiniteHitsSessionStorageCache() {
    var key = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).key;
    var KEY = [
        'ais.infiniteHits',
        key
    ].filter(Boolean).join(':');
    return {
        read: function read(param) {
            var state = param.state;
            var sessionStorage = safelyRunOnBrowser(function(param) {
                var window = param.window;
                return window.sessionStorage;
            });
            if (!sessionStorage) {
                return null;
            }
            try {
                var cache = JSON.parse(// @ts-expect-error JSON.parse() requires a string, but it actually accepts null, too.
                sessionStorage.getItem(KEY));
                return cache && isEqual(cache.state, getStateWithoutPage(state)) ? cache.hits : null;
            } catch (error) {
                if (_(error, SyntaxError)) {
                    try {
                        sessionStorage.removeItem(KEY);
                    } catch (err) {
                    // do nothing
                    }
                }
                return null;
            }
        },
        write: function write(param) {
            var state = param.state, hits = param.hits;
            var sessionStorage = safelyRunOnBrowser(function(param) {
                var window = param.window;
                return window.sessionStorage;
            });
            if (!sessionStorage) {
                return;
            }
            try {
                sessionStorage.setItem(KEY, JSON.stringify({
                    state: getStateWithoutPage(state),
                    hits: hits
                }));
            } catch (error) {
            // do nothing
            }
        }
    };
}

export { createInfiniteHitsSessionStorageCache as default };
