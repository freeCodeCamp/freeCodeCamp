/*!
 * paypal-js v10.1.0 (2026-07-27T18:48:45.288Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"function"==typeof SuppressedError&&SuppressedError;var e="10.1.0",t="pending",r="resolved",n="rejected",o="data-loading-state";function a(e){var a,d;if(function(e){if("object"!=typeof e||null===e)throw new Error("Expected an options object");var t=e,r=t.environment,n=t.dataNamespace,o=t.dataSdkIntegrationSource;if("production"!==r&&"sandbox"!==r)throw new Error('The "environment" option is required and must be either "production" or "sandbox"');if(void 0!==n&&""===n.trim())throw new Error('The "dataNamespace" option cannot be an empty string');if(void 0!==o&&""===o.trim())throw new Error('The "dataSdkIntegrationSource" option cannot be an empty string')}(e),"undefined"==typeof window&&"undefined"==typeof document)return Promise.resolve(null);var c=e.environment,s=e.debug,u=e.dataNamespace,p=e.dataSdkIntegrationSource,l=null!=u?u:"paypal",v=i(l);if(null==v?void 0:v.version.startsWith("6"))return Promise.resolve(v);var m=new URL("/web-sdk/v6/core","production"===c?"https://www.paypal.com":"https://www.sandbox.paypal.com");s&&m.searchParams.append("debug","true");var w=null!==(d=document.querySelector('script[src*="'.concat(m.pathname,'"][').concat(o,'="').concat(t,'"]')))&&void 0!==d?d:function(e){var t=e.url,r=e.attributes,n=document.createElement("script");n.src=t;for(var o=0,a=Object.entries(r);o<a.length;o++){var i=a[o],d=i[0],c=i[1];void 0!==c&&n.setAttribute(d,c)}return document.head.appendChild(n),n}({url:m.toString(),attributes:(a={"data-namespace":u,"data-sdk-integration-source":p},a[o]=t,a)});return new Promise(function(e,t){w.addEventListener("load",function(){var a=i(l);return a?(w.setAttribute(o,r),e(a)):(w.setAttribute(o,n),t("The window.".concat(l," global variable is not available")))},{once:!0}),w.addEventListener("error",function(){var e=new Error('The script "'.concat(m.toString(),'" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));return w.setAttribute(o,n),t(e)},{once:!0})})}function i(e){return window[e]}export{a as loadCoreSdkScript,e as version};
