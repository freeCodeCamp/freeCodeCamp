"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebPlatformFunctions_js_1 = require("./platform/WebPlatformFunctions.js");
const stripe_core_js_1 = require("./stripe.core.js");
const Stripe = (0, stripe_core_js_1.createStripe)(new WebPlatformFunctions_js_1.WebPlatformFunctions());
module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Stripe;
