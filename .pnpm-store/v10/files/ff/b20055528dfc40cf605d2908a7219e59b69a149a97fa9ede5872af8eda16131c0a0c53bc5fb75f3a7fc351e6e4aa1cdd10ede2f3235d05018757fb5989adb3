function _checkInRHS(e) { if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? typeof e : "null")); return e; }
function _classPrivateGetter(s, r, a) { return a(_assertClassBrand(s, r)); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = {  default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var Puppeteer = function (exports, _PuppeteerURL, _LazyArg, _ARIAQueryHandler, _i2, _n, _t, _e, _s, _l, _o, _d, _p, _g, _Class4_brand, _i3, _n2, _t3, _e2, _s2, _l2, _mutex2, _onRelease) {
  'use strict';

  /**
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/
    TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
    1. Definitions.
       "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.
       "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.
       "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.
       "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.
       "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.
       "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.
       "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).
       "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.
       "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."
       "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.
    2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.
    3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.
    4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:
       (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and
       (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and
       (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and
       (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.
       You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.
    5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.
    6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.
    7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.
    8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.
    9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.
    END OF TERMS AND CONDITIONS
    APPENDIX: How to apply the Apache License to your work.
       To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.
    Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors
    Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
   */
  // node_modules/rxjs/node_modules/tslib/tslib.es6.mjs
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      
    } instanceof Array && function (d2, b2) {
      
    } || function (d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = {
        error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spreadArray(to, from2, pack) {
    if (arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from2));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () {
      return this;
    }, i;
    function awaitReturn(f) {
      return function (v) {
        return Promise.resolve(v).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g[n]) {
        i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
        if (f) i[n] = f(i[n]);
      }
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
      i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function (v) {
        return new Promise(function (resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v2) {
        resolve({
          value: v2,
          done: d
        });
      }, reject);
    }
  }

  // node_modules/rxjs/dist/esm5/internal/util/isFunction.js
  function isFunction(value) {
    return typeof value === "function";
  }

  // node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
  function createErrorClass(createImpl) {
    var _super = function (instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }

  // node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
  var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
      _super(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
        return i + 1 + ") " + err.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
    };
  });

  // node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }

  // node_modules/rxjs/dist/esm5/internal/Subscription.js
  var Subscription = function () {
    function Subscription2(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    Subscription2.prototype.unsubscribe = function () {
      var e_1, _a, e_2, _b;
      var errors;
      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;
        if (_parentage) {
          this._parentage = null;
          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = {
                error: e_1_1
              };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }
        var initialFinalizer = this.initialTeardown;
        if (isFunction(initialFinalizer)) {
          try {
            initialFinalizer();
          } catch (e) {
            errors = e instanceof UnsubscriptionError ? e.errors : [e];
          }
        }
        var _finalizers = this._finalizers;
        if (_finalizers) {
          this._finalizers = null;
          try {
            for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
              var finalizer = _finalizers_1_1.value;
              try {
                execFinalizer(finalizer);
              } catch (err) {
                errors = errors !== null && errors !== void 0 ? errors : [];
                if (err instanceof UnsubscriptionError) {
                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      }
    };
    Subscription2.prototype.add = function (teardown) {
      var _a;
      if (teardown && teardown !== this) {
        if (this.closed) {
          execFinalizer(teardown);
        } else {
          if (teardown instanceof Subscription2) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }
            teardown._addParent(this);
          }
          (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
        }
      }
    };
    Subscription2.prototype._hasParent = function (parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription2.prototype._addParent = function (parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription2.prototype._removeParent = function (parent) {
      var _parentage = this._parentage;
      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove(_parentage, parent);
      }
    };
    Subscription2.prototype.remove = function (teardown) {
      var _finalizers = this._finalizers;
      _finalizers && arrRemove(_finalizers, teardown);
      if (teardown instanceof Subscription2) {
        teardown._removeParent(this);
      }
    };
    Subscription2.EMPTY = function () {
      var empty = new Subscription2();
      empty.closed = true;
      return empty;
    }();
    return Subscription2;
  }();
  var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
  }
  function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }

  // node_modules/rxjs/dist/esm5/internal/config.js
  var config = {
    Promise: void 0
  };

  // node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
  var timeoutProvider = {
    setTimeout: function (handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
      return clearTimeout(handle);
    },
    delegate: void 0
  };

  // node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
  function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
      {
        throw err;
      }
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/noop.js
  function noop() {}
  function errorContext(cb) {
    {
      cb();
    }
  }

  // node_modules/rxjs/dist/esm5/internal/Subscriber.js
  var Subscriber = function (_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destination) {
      var _this = _super.call(this) || this;
      _this.isStopped = false;
      if (destination) {
        _this.destination = destination;
        if (isSubscription(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = EMPTY_OBSERVER;
      }
      return _this;
    }
    Subscriber2.create = function (next, error, complete) {
      return new SafeSubscriber(next, error, complete);
    };
    Subscriber2.prototype.next = function (value) {
      if (this.isStopped) ;else {
        this._next(value);
      }
    };
    Subscriber2.prototype.error = function (err) {
      if (this.isStopped) ;else {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber2.prototype.complete = function () {
      if (this.isStopped) ;else {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber2.prototype.unsubscribe = function () {
      if (!this.closed) {
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    Subscriber2.prototype._next = function (value) {
      this.destination.next(value);
    };
    Subscriber2.prototype._error = function (err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };
    Subscriber2.prototype._complete = function () {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return Subscriber2;
  }(Subscription);
  var ConsumerObserver = function () {
    function ConsumerObserver2(partialObserver) {
      this.partialObserver = partialObserver;
    }
    ConsumerObserver2.prototype.next = function (value) {
      var partialObserver = this.partialObserver;
      if (partialObserver.next) {
        try {
          partialObserver.next(value);
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    ConsumerObserver2.prototype.error = function (err) {
      var partialObserver = this.partialObserver;
      if (partialObserver.error) {
        try {
          partialObserver.error(err);
        } catch (error) {
          handleUnhandledError(error);
        }
      } else {
        handleUnhandledError(err);
      }
    };
    ConsumerObserver2.prototype.complete = function () {
      var partialObserver = this.partialObserver;
      if (partialObserver.complete) {
        try {
          partialObserver.complete();
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    return ConsumerObserver2;
  }();
  var SafeSubscriber = function (_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(observerOrNext, error, complete) {
      var _this = _super.call(this) || this;
      var partialObserver;
      if (isFunction(observerOrNext) || !observerOrNext) {
        partialObserver = {
          next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
          error: error !== null && error !== void 0 ? error : void 0,
          complete: complete !== null && complete !== void 0 ? complete : void 0
        };
      } else {
        {
          partialObserver = observerOrNext;
        }
      }
      _this.destination = new ConsumerObserver(partialObserver);
      return _this;
    }
    return SafeSubscriber2;
  }(Subscriber);
  function handleUnhandledError(error) {
    {
      reportUnhandledError(error);
    }
  }
  function defaultErrorHandler(err) {
    throw err;
  }
  var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop
  };

  // node_modules/rxjs/dist/esm5/internal/symbol/observable.js
  var observable = function () {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();

  // node_modules/rxjs/dist/esm5/internal/util/identity.js
  function identity(x) {
    return x;
  }

  // node_modules/rxjs/dist/esm5/internal/util/pipe.js
  function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
  }
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function (prev, fn) {
        return fn(prev);
      }, input);
    };
  }

  // node_modules/rxjs/dist/esm5/internal/Observable.js
  var Observable = function () {
    function Observable2(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable2.prototype.lift = function (operator) {
      var observable2 = new Observable2();
      observable2.source = this;
      observable2.operator = operator;
      return observable2;
    };
    Observable2.prototype.subscribe = function (observerOrNext, error, complete) {
      var _this = this;
      var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
      errorContext(function () {
        var _a = _this,
          operator = _a.operator,
          source = _a.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };
    Observable2.prototype._trySubscribe = function (sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };
    Observable2.prototype.forEach = function (next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function (resolve, reject) {
        var subscriber = new SafeSubscriber({
          next: function (value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
        _this.subscribe(subscriber);
      });
    };
    Observable2.prototype._subscribe = function (subscriber) {
      var _a;
      return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable2.prototype[observable] = function () {
      return this;
    };
    Observable2.prototype.pipe = function () {
      var operations = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      return pipeFromArray(operations)(this);
    };
    Observable2.prototype.toPromise = function (promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) {
          return value = x;
        }, function (err) {
          return reject(err);
        }, function () {
          return resolve(value);
        });
      });
    };
    Observable2.create = function (subscribe) {
      return new Observable2(subscribe);
    };
    return Observable2;
  }();
  function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
  }
  function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
    return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
  }

  // node_modules/rxjs/dist/esm5/internal/util/lift.js
  function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
    return function (source) {
      if (hasLift(source)) {
        return source.lift(function (liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }

  // node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  var OperatorSubscriber = function (_super) {
    __extends(OperatorSubscriber2, _super);
    function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
      var _this = _super.call(this, destination) || this;
      _this.onFinalize = onFinalize;
      _this.shouldUnsubscribe = shouldUnsubscribe;
      _this._next = onNext ? function (value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function (err) {
        try {
          onError(err);
        } catch (err2) {
          destination.error(err2);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function () {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }
    OperatorSubscriber2.prototype.unsubscribe = function () {
      var _a;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var closed_1 = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
      }
    };
    return OperatorSubscriber2;
  }(Subscriber);

  // node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
  var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
      _super(this);
      this.name = "ObjectUnsubscribedError";
      this.message = "object unsubscribed";
    };
  });

  // node_modules/rxjs/dist/esm5/internal/Subject.js
  var Subject = function (_super) {
    __extends(Subject2, _super);
    function Subject2() {
      var _this = _super.call(this) || this;
      _this.closed = false;
      _this.currentObservers = null;
      _this.observers = [];
      _this.isStopped = false;
      _this.hasError = false;
      _this.thrownError = null;
      return _this;
    }
    Subject2.prototype.lift = function (operator) {
      var subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    };
    Subject2.prototype._throwIfClosed = function () {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      }
    };
    Subject2.prototype.next = function (value) {
      var _this = this;
      errorContext(function () {
        var e_1, _a;
        _this._throwIfClosed();
        if (!_this.isStopped) {
          if (!_this.currentObservers) {
            _this.currentObservers = Array.from(_this.observers);
          }
          try {
            for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
              var observer = _c.value;
              observer.next(value);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
      });
    };
    Subject2.prototype.error = function (err) {
      var _this = this;
      errorContext(function () {
        _this._throwIfClosed();
        if (!_this.isStopped) {
          _this.hasError = _this.isStopped = true;
          _this.thrownError = err;
          var observers = _this.observers;
          while (observers.length) {
            observers.shift().error(err);
          }
        }
      });
    };
    Subject2.prototype.complete = function () {
      var _this = this;
      errorContext(function () {
        _this._throwIfClosed();
        if (!_this.isStopped) {
          _this.isStopped = true;
          var observers = _this.observers;
          while (observers.length) {
            observers.shift().complete();
          }
        }
      });
    };
    Subject2.prototype.unsubscribe = function () {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject2.prototype, "observed", {
      get: function () {
        var _a;
        return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
      },
      enumerable: false,
      configurable: true
    });
    Subject2.prototype._trySubscribe = function (subscriber) {
      this._throwIfClosed();
      return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject2.prototype._subscribe = function (subscriber) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(subscriber);
      return this._innerSubscribe(subscriber);
    };
    Subject2.prototype._innerSubscribe = function (subscriber) {
      var _this = this;
      var _a = this,
        hasError = _a.hasError,
        isStopped = _a.isStopped,
        observers = _a.observers;
      if (hasError || isStopped) {
        return EMPTY_SUBSCRIPTION;
      }
      this.currentObservers = null;
      observers.push(subscriber);
      return new Subscription(function () {
        _this.currentObservers = null;
        arrRemove(observers, subscriber);
      });
    };
    Subject2.prototype._checkFinalizedStatuses = function (subscriber) {
      var _a = this,
        hasError = _a.hasError,
        thrownError = _a.thrownError,
        isStopped = _a.isStopped;
      if (hasError) {
        subscriber.error(thrownError);
      } else if (isStopped) {
        subscriber.complete();
      }
    };
    Subject2.prototype.asObservable = function () {
      var observable2 = new Observable();
      observable2.source = this;
      return observable2;
    };
    Subject2.create = function (destination, source) {
      return new AnonymousSubject(destination, source);
    };
    return Subject2;
  }(Observable);
  var AnonymousSubject = function (_super) {
    __extends(AnonymousSubject2, _super);
    function AnonymousSubject2(destination, source) {
      var _this = _super.call(this) || this;
      _this.destination = destination;
      _this.source = source;
      return _this;
    }
    AnonymousSubject2.prototype.next = function (value) {
      var _a, _b;
      (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject2.prototype.error = function (err) {
      var _a, _b;
      (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject2.prototype.complete = function () {
      var _a, _b;
      (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject2.prototype._subscribe = function (subscriber) {
      var _a, _b;
      return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject2;
  }(Subject);

  // node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
  var dateTimestampProvider = {
    now: function () {
      return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: void 0
  };

  // node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
  var ReplaySubject = function (_super) {
    __extends(ReplaySubject2, _super);
    function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
      if (_bufferSize === void 0) {
        _bufferSize = Infinity;
      }
      if (_windowTime === void 0) {
        _windowTime = Infinity;
      }
      if (_timestampProvider === void 0) {
        _timestampProvider = dateTimestampProvider;
      }
      var _this = _super.call(this) || this;
      _this._bufferSize = _bufferSize;
      _this._windowTime = _windowTime;
      _this._timestampProvider = _timestampProvider;
      _this._buffer = [];
      _this._infiniteTimeWindow = true;
      _this._infiniteTimeWindow = _windowTime === Infinity;
      _this._bufferSize = Math.max(1, _bufferSize);
      _this._windowTime = Math.max(1, _windowTime);
      return _this;
    }
    ReplaySubject2.prototype.next = function (value) {
      var _a = this,
        isStopped = _a.isStopped,
        _buffer = _a._buffer,
        _infiniteTimeWindow = _a._infiniteTimeWindow,
        _timestampProvider = _a._timestampProvider,
        _windowTime = _a._windowTime;
      if (!isStopped) {
        _buffer.push(value);
        !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
      }
      this._trimBuffer();
      _super.prototype.next.call(this, value);
    };
    ReplaySubject2.prototype._subscribe = function (subscriber) {
      this._throwIfClosed();
      this._trimBuffer();
      var subscription = this._innerSubscribe(subscriber);
      var _a = this,
        _infiniteTimeWindow = _a._infiniteTimeWindow,
        _buffer = _a._buffer;
      var copy = _buffer.slice();
      for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
        subscriber.next(copy[i]);
      }
      this._checkFinalizedStatuses(subscriber);
      return subscription;
    };
    ReplaySubject2.prototype._trimBuffer = function () {
      var _a = this,
        _bufferSize = _a._bufferSize,
        _timestampProvider = _a._timestampProvider,
        _buffer = _a._buffer,
        _infiniteTimeWindow = _a._infiniteTimeWindow;
      var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
      _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
      if (!_infiniteTimeWindow) {
        var now = _timestampProvider.now();
        var last2 = 0;
        for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
          last2 = i;
        }
        last2 && _buffer.splice(0, last2 + 1);
      }
    };
    return ReplaySubject2;
  }(Subject);

  // node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
  var Action = function (_super) {
    __extends(Action2, _super);
    function Action2(scheduler, work) {
      return _super.call(this) || this;
    }
    Action2.prototype.schedule = function (state, delay2) {
      return this;
    };
    return Action2;
  }(Subscription);

  // node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
  var intervalProvider = {
    setInterval: function (handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
      return clearInterval(handle);
    },
    delegate: void 0
  };

  // node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
  var AsyncAction = function (_super) {
    __extends(AsyncAction2, _super);
    function AsyncAction2(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      _this.pending = false;
      return _this;
    }
    AsyncAction2.prototype.schedule = function (state, delay2) {
      var _a;
      if (delay2 === void 0) {
        delay2 = 0;
      }
      if (this.closed) {
        return this;
      }
      this.state = state;
      var id = this.id;
      var scheduler = this.scheduler;
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, delay2);
      }
      this.pending = true;
      this.delay = delay2;
      this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay2);
      return this;
    };
    AsyncAction2.prototype.requestAsyncId = function (scheduler, _id, delay2) {
      if (delay2 === void 0) {
        delay2 = 0;
      }
      return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay2);
    };
    AsyncAction2.prototype.recycleAsyncId = function (_scheduler, id, delay2) {
      if (delay2 === void 0) {
        delay2 = 0;
      }
      if (delay2 != null && this.delay === delay2 && this.pending === false) {
        return id;
      }
      if (id != null) {
        intervalProvider.clearInterval(id);
      }
      return void 0;
    };
    AsyncAction2.prototype.execute = function (state, delay2) {
      if (this.closed) {
        return new Error("executing a cancelled action");
      }
      this.pending = false;
      var error = this._execute(state, delay2);
      if (error) {
        return error;
      } else if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    AsyncAction2.prototype._execute = function (state, _delay) {
      var errored = false;
      var errorValue;
      try {
        this.work(state);
      } catch (e) {
        errored = true;
        errorValue = e ? e : new Error("Scheduled action threw falsy error");
      }
      if (errored) {
        this.unsubscribe();
        return errorValue;
      }
    };
    AsyncAction2.prototype.unsubscribe = function () {
      if (!this.closed) {
        var _a = this,
          id = _a.id,
          scheduler = _a.scheduler;
        var actions = scheduler.actions;
        this.work = this.state = this.scheduler = null;
        this.pending = false;
        arrRemove(actions, this);
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
        _super.prototype.unsubscribe.call(this);
      }
    };
    return AsyncAction2;
  }(Action);

  // node_modules/rxjs/dist/esm5/internal/Scheduler.js
  var Scheduler = function () {
    function Scheduler2(schedulerActionCtor, now) {
      if (now === void 0) {
        now = Scheduler2.now;
      }
      this.schedulerActionCtor = schedulerActionCtor;
      this.now = now;
    }
    Scheduler2.prototype.schedule = function (work, delay2, state) {
      if (delay2 === void 0) {
        delay2 = 0;
      }
      return new this.schedulerActionCtor(this, work).schedule(state, delay2);
    };
    Scheduler2.now = dateTimestampProvider.now;
    return Scheduler2;
  }();

  // node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
  var AsyncScheduler = function (_super) {
    __extends(AsyncScheduler2, _super);
    function AsyncScheduler2(SchedulerAction, now) {
      if (now === void 0) {
        now = Scheduler.now;
      }
      var _this = _super.call(this, SchedulerAction, now) || this;
      _this.actions = [];
      _this._active = false;
      return _this;
    }
    AsyncScheduler2.prototype.flush = function (action) {
      var actions = this.actions;
      if (this._active) {
        actions.push(action);
        return;
      }
      var error;
      this._active = true;
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (action = actions.shift());
      this._active = false;
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsyncScheduler2;
  }(Scheduler);

  // node_modules/rxjs/dist/esm5/internal/scheduler/async.js
  var asyncScheduler = new AsyncScheduler(AsyncAction);
  var async = asyncScheduler;

  // node_modules/rxjs/dist/esm5/internal/observable/empty.js
  var EMPTY = new Observable(function (subscriber) {
    return subscriber.complete();
  });

  // node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
  function isScheduler(value) {
    return value && isFunction(value.schedule);
  }

  // node_modules/rxjs/dist/esm5/internal/util/args.js
  function last(arr) {
    return arr[arr.length - 1];
  }
  function popScheduler(args) {
    return isScheduler(last(args)) ? args.pop() : void 0;
  }
  function popNumber(args, defaultValue) {
    return typeof last(args) === "number" ? args.pop() : defaultValue;
  }

  // node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
  var isArrayLike = function (x) {
    return x && typeof x.length === "number" && typeof x !== "function";
  };

  // node_modules/rxjs/dist/esm5/internal/util/isPromise.js
  function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
  function isInteropObservable(input) {
    return isFunction(input[observable]);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
  function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
  }

  // node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
  function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }

  // node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
  function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
      return "@@iterator";
    }
    return Symbol.iterator;
  }
  var iterator = getSymbolIterator();

  // node_modules/rxjs/dist/esm5/internal/util/isIterable.js
  function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
  }

  // node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
  function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
      var reader, _a, value, done;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;
          case 1:
            _b.trys.push([1,, 9, 10]);
            _b.label = 2;
          case 2:
            return [4, __await(reader.read())];
          case 3:
            _a = _b.sent(), value = _a.value, done = _a.done;
            if (!done) return [3, 5];
            return [4, __await(void 0)];
          case 4:
            return [2, _b.sent()];
          case 5:
            return [4, __await(value)];
          case 6:
            return [4, _b.sent()];
          case 7:
            _b.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            reader.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
  }

  // node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
  function innerFrom(input) {
    if (input instanceof Observable) {
      return input;
    }
    if (input != null) {
      if (isInteropObservable(input)) {
        return fromInteropObservable(input);
      }
      if (isArrayLike(input)) {
        return fromArrayLike(input);
      }
      if (isPromise(input)) {
        return fromPromise(input);
      }
      if (isAsyncIterable(input)) {
        return fromAsyncIterable(input);
      }
      if (isIterable(input)) {
        return fromIterable(input);
      }
      if (isReadableStreamLike(input)) {
        return fromReadableStreamLike(input);
      }
    }
    throw createInvalidObservableTypeError(input);
  }
  function fromInteropObservable(obj) {
    return new Observable(function (subscriber) {
      var obs = obj[observable]();
      if (isFunction(obs.subscribe)) {
        return obs.subscribe(subscriber);
      }
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function fromArrayLike(array) {
    return new Observable(function (subscriber) {
      for (var i = 0; i < array.length && !subscriber.closed; i++) {
        subscriber.next(array[i]);
      }
      subscriber.complete();
    });
  }
  function fromPromise(promise) {
    return new Observable(function (subscriber) {
      promise.then(function (value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function (err) {
        return subscriber.error(err);
      }).then(null, reportUnhandledError);
    });
  }
  function fromIterable(iterable) {
    return new Observable(function (subscriber) {
      var e_1, _a;
      try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
          var value = iterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      subscriber.complete();
    });
  }
  function fromAsyncIterable(asyncIterable) {
    return new Observable(function (subscriber) {
      process$1(asyncIterable, subscriber).catch(function (err) {
        return subscriber.error(err);
      });
    });
  }
  function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
  }
  function process$1(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
      var value, e_2_1;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 11]);
            asyncIterable_1 = __asyncValues(asyncIterable);
            _b.label = 1;
          case 1:
            return [4, asyncIterable_1.next()];
          case 2:
            if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
            value = asyncIterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return [2];
            }
            _b.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            e_2_1 = _b.sent();
            e_2 = {
              error: e_2_1
            };
            return [3, 11];
          case 6:
            _b.trys.push([6,, 9, 10]);
            if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
            return [4, _a.call(asyncIterable_1)];
          case 7:
            _b.sent();
            _b.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (e_2) throw e_2.error;
            return [7];
          case 10:
            return [7];
          case 11:
            subscriber.complete();
            return [2];
        }
      });
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
  function executeSchedule(parentSubscription, scheduler, work, delay2, repeat) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (repeat === void 0) {
      repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function () {
      work();
      if (repeat) {
        parentSubscription.add(this.schedule(null, delay2));
      } else {
        this.unsubscribe();
      }
    }, delay2);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
      return scheduleSubscription;
    }
  }

  // node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
  function observeOn(scheduler, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return operate(function (source, subscriber) {
      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        return executeSchedule(subscriber, scheduler, function () {
          return subscriber.next(value);
        }, delay2);
      }, function () {
        return executeSchedule(subscriber, scheduler, function () {
          return subscriber.complete();
        }, delay2);
      }, function (err) {
        return executeSchedule(subscriber, scheduler, function () {
          return subscriber.error(err);
        }, delay2);
      }));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
  function subscribeOn(scheduler, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return operate(function (source, subscriber) {
      subscriber.add(scheduler.schedule(function () {
        return source.subscribe(subscriber);
      }, delay2));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
  function scheduleObservable(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  // node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
  function schedulePromise(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  // node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
  function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
      var i = 0;
      return scheduler.schedule(function () {
        if (i === input.length) {
          subscriber.complete();
        } else {
          subscriber.next(input[i++]);
          if (!subscriber.closed) {
            this.schedule();
          }
        }
      });
    });
  }

  // node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
  function scheduleIterable(input, scheduler) {
    return new Observable(function (subscriber) {
      var iterator2;
      executeSchedule(subscriber, scheduler, function () {
        iterator2 = input[iterator]();
        executeSchedule(subscriber, scheduler, function () {
          var _a;
          var value;
          var done;
          try {
            _a = iterator2.next(), value = _a.value, done = _a.done;
          } catch (err) {
            subscriber.error(err);
            return;
          }
          if (done) {
            subscriber.complete();
          } else {
            subscriber.next(value);
          }
        }, 0, true);
      });
      return function () {
        return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
      };
    });
  }

  // node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
  function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
      throw new Error("Iterable cannot be null");
    }
    return new Observable(function (subscriber) {
      executeSchedule(subscriber, scheduler, function () {
        var iterator2 = input[Symbol.asyncIterator]();
        executeSchedule(subscriber, scheduler, function () {
          iterator2.next().then(function (result) {
            if (result.done) {
              subscriber.complete();
            } else {
              subscriber.next(result.value);
            }
          });
        }, 0, true);
      });
    });
  }

  // node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
  function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
  }

  // node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
  function scheduled(input, scheduler) {
    if (input != null) {
      if (isInteropObservable(input)) {
        return scheduleObservable(input, scheduler);
      }
      if (isArrayLike(input)) {
        return scheduleArray(input, scheduler);
      }
      if (isPromise(input)) {
        return schedulePromise(input, scheduler);
      }
      if (isAsyncIterable(input)) {
        return scheduleAsyncIterable(input, scheduler);
      }
      if (isIterable(input)) {
        return scheduleIterable(input, scheduler);
      }
      if (isReadableStreamLike(input)) {
        return scheduleReadableStreamLike(input, scheduler);
      }
    }
    throw createInvalidObservableTypeError(input);
  }

  // node_modules/rxjs/dist/esm5/internal/observable/from.js
  function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
  }

  // node_modules/rxjs/dist/esm5/internal/observable/of.js
  function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    return from(args, scheduler);
  }

  // node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
  var EmptyError = createErrorClass(function (_super) {
    return function EmptyErrorImpl() {
      _super(this);
      this.name = "EmptyError";
      this.message = "no elements in sequence";
    };
  });

  // node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
  function firstValueFrom(source, config2) {
    return new Promise(function (resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function (value) {
          resolve(value);
          subscriber.unsubscribe();
        },
        error: reject,
        complete: function () {
          {
            reject(new EmptyError());
          }
        }
      });
      source.subscribe(subscriber);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/isDate.js
  function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
  }

  // node_modules/rxjs/dist/esm5/internal/operators/map.js
  function map(project, thisArg) {
    return operate(function (source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        subscriber.next(project.call(thisArg, value, index++));
      }));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
  var isArray = Array.isArray;
  function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
  }
  function mapOneOrManyArgs(fn) {
    return map(function (args) {
      return callOrApply(fn, args);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
  function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
      if (isComplete && !buffer.length && !active) {
        subscriber.complete();
      }
    };
    var outerNext = function (value) {
      return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function (value) {
      expand && subscriber.next(value);
      active++;
      var innerComplete = false;
      innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
        onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
        if (expand) {
          outerNext(innerValue);
        } else {
          subscriber.next(innerValue);
        }
      }, function () {
        innerComplete = true;
      }, void 0, function () {
        if (innerComplete) {
          try {
            active--;
            var _loop_1 = function () {
              var bufferedValue = buffer.shift();
              if (innerSubScheduler) ;else {
                doInnerSub(bufferedValue);
              }
            };
            while (buffer.length && active < concurrent) {
              _loop_1();
            }
            checkComplete();
          } catch (err) {
            subscriber.error(err);
          }
        }
      }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
      isComplete = true;
      checkComplete();
    }));
    return function () {
      additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
  }

  // node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Infinity;
    }
    if (isFunction(resultSelector)) {
      return mergeMap(function (a, i) {
        return map(function (b, ii) {
          return resultSelector(a, b, i, ii);
        })(innerFrom(project(a, i)));
      }, concurrent);
    } else if (typeof resultSelector === "number") {
      concurrent = resultSelector;
    }
    return operate(function (source, subscriber) {
      return mergeInternals(source, subscriber, project, concurrent);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
  function mergeAll(concurrent) {
    if (concurrent === void 0) {
      concurrent = Infinity;
    }
    return mergeMap(identity, concurrent);
  }

  // node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
  function concatAll() {
    return mergeAll(1);
  }

  // node_modules/rxjs/dist/esm5/internal/observable/concat.js
  function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return concatAll()(from(args, popScheduler(args)));
  }

  // node_modules/rxjs/dist/esm5/internal/observable/defer.js
  function defer(observableFactory) {
    return new Observable(function (subscriber) {
      innerFrom(observableFactory()).subscribe(subscriber);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
  var nodeEventEmitterMethods = ["addListener", "removeListener"];
  var eventTargetMethods = ["addEventListener", "removeEventListener"];
  var jqueryMethods = ["on", "off"];
  function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
      resultSelector = options;
      options = void 0;
    }
    if (resultSelector) {
      return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function (methodName) {
        return function (handler) {
          return target[methodName](eventName, handler, options);
        };
      }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2),
      add = _a[0],
      remove = _a[1];
    if (!add) {
      if (isArrayLike(target)) {
        return mergeMap(function (subTarget) {
          return fromEvent(subTarget, eventName, options);
        })(innerFrom(target));
      }
    }
    if (!add) {
      throw new TypeError("Invalid event target");
    }
    return new Observable(function (subscriber) {
      var handler = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return subscriber.next(1 < args.length ? args : args[0]);
      };
      add(handler);
      return function () {
        return remove(handler);
      };
    });
  }
  function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) {
      return function (handler) {
        return target[methodName](eventName, handler);
      };
    };
  }
  function isNodeStyleEventEmitter(target) {
    return isFunction(target.addListener) && isFunction(target.removeListener);
  }
  function isJQueryStyleEventEmitter(target) {
    return isFunction(target.on) && isFunction(target.off);
  }
  function isEventTarget(target) {
    return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
  }

  // node_modules/rxjs/dist/esm5/internal/observable/timer.js
  function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) {
      dueTime = 0;
    }
    if (scheduler === void 0) {
      scheduler = async;
    }
    return new Observable(function (subscriber) {
      var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
      if (due < 0) {
        due = 0;
      }
      var n = 0;
      return scheduler.schedule(function () {
        if (!subscriber.closed) {
          subscriber.next(n++);
          {
            subscriber.complete();
          }
        }
      }, due);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/observable/merge.js
  function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    var concurrent = popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
  }

  // node_modules/rxjs/dist/esm5/internal/observable/never.js
  var NEVER = new Observable(noop);

  // node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js
  var isArray3 = Array.isArray;
  function argsOrArgArray(args) {
    return args.length === 1 && isArray3(args[0]) ? args[0] : args;
  }

  // node_modules/rxjs/dist/esm5/internal/operators/filter.js
  function filter(predicate, thisArg) {
    return operate(function (source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        return predicate.call(thisArg, value, index++) && subscriber.next(value);
      }));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/observable/race.js
  function race() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      sources[_i] = arguments[_i];
    }
    sources = argsOrArgArray(sources);
    return sources.length === 1 ? innerFrom(sources[0]) : new Observable(raceInit(sources));
  }
  function raceInit(sources) {
    return function (subscriber) {
      var subscriptions = [];
      var _loop_1 = function (i2) {
        subscriptions.push(innerFrom(sources[i2]).subscribe(createOperatorSubscriber(subscriber, function (value) {
          if (subscriptions) {
            for (var s = 0; s < subscriptions.length; s++) {
              s !== i2 && subscriptions[s].unsubscribe();
            }
            subscriptions = null;
          }
          subscriber.next(value);
        })));
      };
      for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
        _loop_1(i);
      }
    };
  }

  // node_modules/rxjs/dist/esm5/internal/operators/catchError.js
  function catchError(selector) {
    return operate(function (source, subscriber) {
      var innerSub = null;
      var syncUnsub = false;
      var handledResult;
      innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function (err) {
        handledResult = innerFrom(selector(err, catchError(selector)(source)));
        if (innerSub) {
          innerSub.unsubscribe();
          innerSub = null;
          handledResult.subscribe(subscriber);
        } else {
          syncUnsub = true;
        }
      }));
      if (syncUnsub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      }
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/defaultIfEmpty.js
  function defaultIfEmpty(defaultValue) {
    return operate(function (source, subscriber) {
      var hasValue = false;
      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        hasValue = true;
        subscriber.next(value);
      }, function () {
        if (!hasValue) {
          subscriber.next(defaultValue);
        }
        subscriber.complete();
      }));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/take.js
  function take(count) {
    return count <= 0 ? function () {
      return EMPTY;
    } : operate(function (source, subscriber) {
      var seen = 0;
      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        if (++seen <= count) {
          subscriber.next(value);
          if (count <= seen) {
            subscriber.complete();
          }
        }
      }));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js
  function ignoreElements() {
    return operate(function (source, subscriber) {
      source.subscribe(createOperatorSubscriber(subscriber, noop));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
  function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) {
      keySelector = identity;
    }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return operate(function (source, subscriber) {
      var previousKey;
      var first2 = true;
      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        var currentKey = keySelector(value);
        if (first2 || !comparator(previousKey, currentKey)) {
          first2 = false;
          previousKey = currentKey;
          subscriber.next(value);
        }
      }));
    });
  }
  function defaultCompare(a, b) {
    return a === b;
  }

  // node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js
  function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) {
      errorFactory = defaultErrorFactory;
    }
    return operate(function (source, subscriber) {
      var hasValue = false;
      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        hasValue = true;
        subscriber.next(value);
      }, function () {
        return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
      }));
    });
  }
  function defaultErrorFactory() {
    return new EmptyError();
  }

  // node_modules/rxjs/dist/esm5/internal/operators/first.js
  function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
      return source.pipe(predicate ? filter(function (v, i) {
        return predicate(v, i, source);
      }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () {
        return new EmptyError();
      }));
    };
  }

  // node_modules/rxjs/dist/esm5/internal/operators/mergeScan.js
  function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
      concurrent = Infinity;
    }
    return operate(function (source, subscriber) {
      var state = seed;
      return mergeInternals(source, subscriber, function (value, index) {
        return accumulator(state, value, index);
      }, concurrent, function (value) {
        state = value;
      }, false, void 0, function () {
        return state = null;
      });
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/raceWith.js
  function raceWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      otherSources[_i] = arguments[_i];
    }
    return !otherSources.length ? identity : operate(function (source, subscriber) {
      raceInit(__spreadArray([source], __read(otherSources)))(subscriber);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/retry.js
  function retry(configOrCount) {
    if (configOrCount === void 0) {
      configOrCount = Infinity;
    }
    var config2;
    if (configOrCount && typeof configOrCount === "object") {
      config2 = configOrCount;
    } else {
      config2 = {
        count: configOrCount
      };
    }
    var _a = config2.count,
      count = _a === void 0 ? Infinity : _a,
      delay2 = config2.delay,
      _b = config2.resetOnSuccess,
      resetOnSuccess = _b === void 0 ? false : _b;
    return count <= 0 ? identity : operate(function (source, subscriber) {
      var soFar = 0;
      var innerSub;
      var subscribeForRetry = function () {
        var syncUnsub = false;
        innerSub = source.subscribe(createOperatorSubscriber(subscriber, function (value) {
          if (resetOnSuccess) {
            soFar = 0;
          }
          subscriber.next(value);
        }, void 0, function (err) {
          if (soFar++ < count) {
            var resub_1 = function () {
              if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRetry();
              } else {
                syncUnsub = true;
              }
            };
            if (delay2 != null) {
              var notifier = typeof delay2 === "number" ? timer(delay2) : innerFrom(delay2(err, soFar));
              var notifierSubscriber_1 = createOperatorSubscriber(subscriber, function () {
                notifierSubscriber_1.unsubscribe();
                resub_1();
              }, function () {
                subscriber.complete();
              });
              notifier.subscribe(notifierSubscriber_1);
            } else {
              resub_1();
            }
          } else {
            subscriber.error(err);
          }
        }));
        if (syncUnsub) {
          innerSub.unsubscribe();
          innerSub = null;
          subscribeForRetry();
        }
      };
      subscribeForRetry();
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/startWith.js
  function startWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      values[_i] = arguments[_i];
    }
    var scheduler = popScheduler(values);
    return operate(function (source, subscriber) {
      (scheduler ? concat(values, source, scheduler) : concat(values, source)).subscribe(subscriber);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
  function switchMap(project, resultSelector) {
    return operate(function (source, subscriber) {
      var innerSubscriber = null;
      var index = 0;
      var isComplete = false;
      var checkComplete = function () {
        return isComplete && !innerSubscriber && subscriber.complete();
      };
      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
        var innerIndex = 0;
        var outerIndex = index++;
        innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function (innerValue) {
          return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
        }, function () {
          innerSubscriber = null;
          checkComplete();
        }));
      }, function () {
        isComplete = true;
        checkComplete();
      }));
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
  function takeUntil(notifier) {
    return operate(function (source, subscriber) {
      innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function () {
        return subscriber.complete();
      }, noop));
      !subscriber.closed && source.subscribe(subscriber);
    });
  }

  // node_modules/rxjs/dist/esm5/internal/operators/tap.js
  function tap(observerOrNext, error, complete) {
    var tapObserver = isFunction(observerOrNext) || error || complete ? {
      next: observerOrNext,
      error,
      complete
    } : observerOrNext;
    return tapObserver ? operate(function (source, subscriber) {
      var _a;
      (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      var isUnsub = true;
      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
        var _a2;
        (_a2 = tapObserver.next) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, value);
        subscriber.next(value);
      }, function () {
        var _a2;
        isUnsub = false;
        (_a2 = tapObserver.complete) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
        subscriber.complete();
      }, function (err) {
        var _a2;
        isUnsub = false;
        (_a2 = tapObserver.error) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, err);
        subscriber.error(err);
      }, function () {
        var _a2, _b;
        if (isUnsub) {
          (_a2 = tapObserver.unsubscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
        }
        (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
      }));
    }) : identity;
  }

  /**
  MIT License
   Copyright (c) 2021 Jason Miller
   Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
   */
  // node_modules/mitt/dist/mitt.mjs
  function mitt_default(n) {
    return {
      all: n = n || /* @__PURE__ */new Map(),
      on: function (t, e) {
        var i = n.get(t);
        i ? i.push(e) : n.set(t, [e]);
      },
      off: function (t, e) {
        var i = n.get(t);
        i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
      },
      emit: function (t, e) {
        var i = n.get(t);
        i && i.slice().map(function (n2) {
          n2(e);
        }), (i = n.get("*")) && i.slice().map(function (n2) {
          n2(t, e);
        });
      }
    };
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  Symbol.dispose ??= Symbol('dispose');
  Symbol.asyncDispose ??= Symbol('asyncDispose');
  /**
   * @internal
   */
  const disposeSymbol = Symbol.dispose;
  /**
   * @internal
   */
  const asyncDisposeSymbol = Symbol.asyncDispose;
  /**
   * @internal
   */
  var _disposed = /*#__PURE__*/new WeakMap();
  var _stack = /*#__PURE__*/new WeakMap();
  class DisposableStackPolyfill {
    constructor() {
      _classPrivateFieldInitSpec(this, _disposed, false);
      _classPrivateFieldInitSpec(this, _stack, []);
      _defineProperty(this, Symbol.toStringTag, 'DisposableStack');
    }
    /**
     * Returns a value indicating whether the stack has been disposed.
     */
    get disposed() {
      return _classPrivateFieldGet(_disposed, this);
    }
    /**
     * Alias for `[Symbol.dispose]()`.
     */
    dispose() {
      this[disposeSymbol]();
    }
    /**
     * Adds a disposable resource to the top of stack, returning the resource.
     * Has no effect if provided `null` or `undefined`.
     *
     * @param value - A `Disposable` object, `null`, or `undefined`.
     * `null` and `undefined` will not be added, but will be returned.
     * @returns The provided `value`.
     */
    use(value) {
      if (value && typeof value[disposeSymbol] === 'function') {
        _classPrivateFieldGet(_stack, this).push(value);
      }
      return value;
    }
    /**
     * Adds a non-disposable resource and a disposal callback to the top of the stack.
     *
     * @param value - A resource to be disposed.
     * @param onDispose - A callback invoked to dispose the provided value.
     * Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */
    adopt(value, onDispose) {
      _classPrivateFieldGet(_stack, this).push({
        [disposeSymbol]() {
          onDispose(value);
        }
      });
      return value;
    }
    /**
     * Add a disposal callback to the top of the stack to be invoked when stack is disposed.
     * @param onDispose - A callback to invoke when this object is disposed.
     */
    defer(onDispose) {
      _classPrivateFieldGet(_stack, this).push({
        [disposeSymbol]() {
          onDispose();
        }
      });
    }
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     * @returns The new `DisposableStack`.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move() {
      if (_classPrivateFieldGet(_disposed, this)) {
        throw new ReferenceError('A disposed stack can not use anything new');
      }
      const stack = new DisposableStackPolyfill();
      _classPrivateFieldSet(_stack, stack, _classPrivateFieldGet(_stack, this));
      _classPrivateFieldSet(_stack, this, []);
      _classPrivateFieldSet(_disposed, this, true);
      return stack;
    }
    /**
     * Disposes each resource in the stack in last-in-first-out (LIFO) manner.
     */
    [disposeSymbol]() {
      if (_classPrivateFieldGet(_disposed, this)) {
        return;
      }
      _classPrivateFieldSet(_disposed, this, true);
      const errors = [];
      for (const resource of _classPrivateFieldGet(_stack, this).reverse()) {
        try {
          resource[disposeSymbol]();
        } catch (e) {
          errors.push(e);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else if (errors.length > 1) {
        let suppressed = null;
        for (const error of errors) {
          if (suppressed === null) {
            suppressed = error;
          } else {
            suppressed = new SuppressedErrorPolyfill(error, suppressed);
          }
        }
        throw suppressed;
      }
    }
  }
  /**
   * @internal
   */
  const DisposableStack = globalThis.DisposableStack ?? DisposableStackPolyfill;
  /**
   * @internal
   */
  var _disposed2 = /*#__PURE__*/new WeakMap();
  var _stack2 = /*#__PURE__*/new WeakMap();
  class AsyncDisposableStackPolyfill {
    constructor() {
      _classPrivateFieldInitSpec(this, _disposed2, false);
      _classPrivateFieldInitSpec(this, _stack2, []);
      _defineProperty(this, Symbol.toStringTag, 'AsyncDisposableStack');
    }
    /**
     * Returns a value indicating whether the stack has been disposed.
     */
    get disposed() {
      return _classPrivateFieldGet(_disposed2, this);
    }
    /**
     * Alias for `[Symbol.asyncDispose]()`.
     */
    async disposeAsync() {
      await this[asyncDisposeSymbol]();
    }
    /**
     * Adds a AsyncDisposable resource to the top of stack, returning the resource.
     * Has no effect if provided `null` or `undefined`.
     *
     * @param value - A `AsyncDisposable` object, `null`, or `undefined`.
     * `null` and `undefined` will not be added, but will be returned.
     * @returns The provided `value`.
     */
    use(value) {
      if (value) {
        const asyncDispose = value[asyncDisposeSymbol];
        const dispose = value[disposeSymbol];
        if (typeof asyncDispose === 'function') {
          _classPrivateFieldGet(_stack2, this).push(value);
        } else if (typeof dispose === 'function') {
          _classPrivateFieldGet(_stack2, this).push({
            [asyncDisposeSymbol]: async () => {
              value[disposeSymbol]();
            }
          });
        }
      }
      return value;
    }
    /**
     * Adds a non-disposable resource and a disposal callback to the top of the stack.
     *
     * @param value - A resource to be disposed.
     * @param onDispose - A callback invoked to dispose the provided value.
     * Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */
    adopt(value, onDispose) {
      _classPrivateFieldGet(_stack2, this).push({
        [asyncDisposeSymbol]() {
          return onDispose(value);
        }
      });
      return value;
    }
    /**
     * Add a disposal callback to the top of the stack to be invoked when stack is disposed.
     * @param onDispose - A callback to invoke when this object is disposed.
     */
    defer(onDispose) {
      _classPrivateFieldGet(_stack2, this).push({
        [asyncDisposeSymbol]() {
          return onDispose();
        }
      });
    }
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     * @returns The new `AsyncDisposableStack`.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move() {
      if (_classPrivateFieldGet(_disposed2, this)) {
        throw new ReferenceError('A disposed stack can not use anything new');
      }
      const stack = new AsyncDisposableStackPolyfill();
      _classPrivateFieldSet(_stack2, stack, _classPrivateFieldGet(_stack2, this));
      _classPrivateFieldSet(_stack2, this, []);
      _classPrivateFieldSet(_disposed2, this, true);
      return stack;
    }
    /**
     * Disposes each resource in the stack in last-in-first-out (LIFO) manner.
     */
    async [asyncDisposeSymbol]() {
      if (_classPrivateFieldGet(_disposed2, this)) {
        return;
      }
      _classPrivateFieldSet(_disposed2, this, true);
      const errors = [];
      for (const resource of _classPrivateFieldGet(_stack2, this).reverse()) {
        try {
          await resource[asyncDisposeSymbol]();
        } catch (e) {
          errors.push(e);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else if (errors.length > 1) {
        let suppressed = null;
        for (const error of errors) {
          if (suppressed === null) {
            suppressed = error;
          } else {
            suppressed = new SuppressedErrorPolyfill(error, suppressed);
          }
        }
        throw suppressed;
      }
    }
  }
  /**
   * @internal
   */
  const AsyncDisposableStack = globalThis.AsyncDisposableStack ?? AsyncDisposableStackPolyfill;
  /**
   * @internal
   * Represents an error that occurs when multiple errors are thrown during
   * the disposal of resources. This class encapsulates the primary error and
   * any suppressed errors that occurred subsequently.
   */
  var _error = /*#__PURE__*/new WeakMap();
  var _suppressed = /*#__PURE__*/new WeakMap();
  class SuppressedErrorPolyfill extends Error {
    constructor(error, suppressed, message = 'An error was suppressed during disposal') {
      super(message);
      _classPrivateFieldInitSpec(this, _error, void 0);
      _classPrivateFieldInitSpec(this, _suppressed, void 0);
      this.name = 'SuppressedError';
      _classPrivateFieldSet(_error, this, error);
      _classPrivateFieldSet(_suppressed, this, suppressed);
    }
    /**
     * The primary error that occurred during disposal.
     */
    get error() {
      return _classPrivateFieldGet(_error, this);
    }
    /**
     * The suppressed error i.e. the error that was suppressed
     * because it occurred later in the flow after the original error.
     */
    get suppressed() {
      return _classPrivateFieldGet(_suppressed, this);
    }
  }
  /**
   * @internal
   */
  const SuppressedError$1 = globalThis.SuppressedError ?? SuppressedErrorPolyfill;

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  const isNode = !!(typeof process !== 'undefined' && process.version);
  /**
   * Holder for environment dependencies. These dependencies cannot
   * be used during the module instantiation.
   */
  const environment = {
    value: {
      get fs() {
        throw new Error('fs is not available in this environment');
      },
      get ScreenRecorder() {
        throw new Error('ScreenRecorder is not available in this environment');
      }
    }
  };

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Asserts that the given value is truthy.
   * @param value - some conditional statement
   * @param message - the error message to throw if the value is not truthy.
   *
   * @internal
   */
  const assert = (value, message) => {
    if (!value) {
      throw new Error(message);
    }
  };

  /**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  function stringToTypedArray(string, base64Encoded = false) {
    if (base64Encoded) {
      if ('fromBase64' in Uint8Array) {
        // @ts-expect-error fromBase64 is newer than the types we use.
        return Uint8Array.fromBase64(string);
      }
      // TODO: remove Buffer in v26 when it becomes LTS.
      if (typeof Buffer === 'function') {
        return Buffer.from(string, 'base64');
      }
      return Uint8Array.from(atob(string), m => {
        return m.codePointAt(0);
      });
    }
    return new TextEncoder().encode(string);
  }
  /**
   * @internal
   */
  function stringToBase64(str) {
    return typedArrayToBase64(new TextEncoder().encode(str));
  }
  /**
   * @internal
   */
  function typedArrayToBase64(typedArray) {
    // chunkSize should be less V8 limit on number of arguments!
    // https://github.com/v8/v8/blob/d3de848bea727518aee94dd2fd42ba0b62037a27/src/objects/code.h#L444
    const chunkSize = 65534;
    const chunks = [];
    for (let i = 0; i < typedArray.length; i += chunkSize) {
      const chunk = typedArray.subarray(i, i + chunkSize);
      chunks.push(String.fromCodePoint.apply(null, chunk));
    }
    const binaryString = chunks.join('');
    return btoa(binaryString);
  }
  /**
   * @internal
   */
  function mergeUint8Arrays(items) {
    let length = 0;
    for (const item of items) {
      length += item.length;
    }
    // Create a new array with total length and merge all source arrays.
    const result = new Uint8Array(length);
    let offset = 0;
    for (const item of items) {
      result.set(item, offset);
      offset += item.length;
    }
    return result;
  }

  /**
   * @license
   * Copyright 2025 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  // If moved update release-please config
  // x-release-please-start-version
  const packageVersion = '25.0.4';
  // x-release-please-end

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  let debugModule = null;
  /**
   * @internal
   */
  async function importDebug() {
    if (!debugModule) {
      debugModule = (await Promise.resolve().then(() => _interopRequireWildcard(require('debug')))).default;
    }
    return debugModule;
  }
  /**
   * A debug function that can be used in any environment.
   *
   * @remarks
   * If used in Node, it falls back to the
   * {@link https://www.npmjs.com/package/debug | debug module}. In the browser it
   * uses `console.log`.
   *
   * In Node, use the `DEBUG` environment variable to control logging:
   *
   * ```
   * DEBUG=* // logs all channels
   * DEBUG=foo // logs the `foo` channel
   * DEBUG=foo* // logs any channels starting with `foo`
   * ```
   *
   * In the browser, set `window.__PUPPETEER_DEBUG` to a string:
   *
   * ```
   * window.__PUPPETEER_DEBUG='*'; // logs all channels
   * window.__PUPPETEER_DEBUG='foo'; // logs the `foo` channel
   * window.__PUPPETEER_DEBUG='foo*'; // logs any channels starting with `foo`
   * ```
   *
   * @example
   *
   * ```
   * const log = debug('Page');
   *
   * log('new page created')
   * // logs "Page: new page created"
   * ```
   *
   * @param prefix - this will be prefixed to each log.
   * @returns a function that can be called to log to that debug channel.
   *
   * @internal
   */
  const debug = prefix => {
    if (isNode) {
      return async (...logArgs) => {
        if (captureLogs) {
          capturedLogs.push(prefix + logArgs);
        }
        (await importDebug())(prefix)(logArgs);
      };
    }
    return (...logArgs) => {
      const debugLevel = globalThis.__PUPPETEER_DEBUG;
      if (!debugLevel) {
        return;
      }
      const everythingShouldBeLogged = debugLevel === '*';
      const prefixMatchesDebugLevel = everythingShouldBeLogged || (
      /**
       * If the debug level is `foo*`, that means we match any prefix that
       * starts with `foo`. If the level is `foo`, we match only the prefix
       * `foo`.
       */
      debugLevel.endsWith('*') ? prefix.startsWith(debugLevel) : prefix === debugLevel);
      if (!prefixMatchesDebugLevel) {
        return;
      }
      console.log(`${prefix}:`, ...logArgs);
    };
  };
  /**
   * @internal
   */
  let capturedLogs = [];
  /**
   * @internal
   */
  let captureLogs = false;
  /**
   * @internal
   */
  function setLogCapture(value) {
    capturedLogs = [];
    captureLogs = value;
  }
  /**
   * @internal
   */
  function getCapturedLogs() {
    return capturedLogs;
  }

  /**
   * @license
   * Copyright 2018 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * The base class for all Puppeteer-specific errors
   *
   * @public
   */
  class PuppeteerError extends Error {
    /**
     * @internal
     */
    constructor(message, options) {
      super(message, options);
      this.name = this.constructor.name;
    }
    /**
     * @internal
     */
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
  }
  /**
   * TimeoutError is emitted whenever certain operations are terminated due to
   * timeout.
   *
   * @remarks
   * Example operations are {@link Page.waitForSelector | page.waitForSelector} or
   * {@link PuppeteerNode.launch | puppeteer.launch}.
   *
   * @public
   */
  class TimeoutError extends PuppeteerError {}
  /**
   * TouchError is thrown when an attempt is made to move or end a touch that does
   * not exist.
   * @public
   */
  class TouchError extends PuppeteerError {}
  /**
   * ProtocolError is emitted whenever there is an error from the protocol.
   *
   * @public
   */
  var _code = /*#__PURE__*/new WeakMap();
  var _originalMessage = /*#__PURE__*/new WeakMap();
  class ProtocolError extends PuppeteerError {
    constructor(...args) {
      super(...args);
      _classPrivateFieldInitSpec(this, _code, void 0);
      _classPrivateFieldInitSpec(this, _originalMessage, '');
    }
    set code(code) {
      _classPrivateFieldSet(_code, this, code);
    }
    /**
     * @readonly
     * @public
     */
    get code() {
      return _classPrivateFieldGet(_code, this);
    }
    set originalMessage(originalMessage) {
      _classPrivateFieldSet(_originalMessage, this, originalMessage);
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
      return _classPrivateFieldGet(_originalMessage, this);
    }
  }
  /**
   * Puppeteer will throw this error if a method is not
   * supported by the currently used protocol
   *
   * @public
   */
  class UnsupportedOperation extends PuppeteerError {}
  /**
   * @internal
   */
  class TargetCloseError extends ProtocolError {}
  /**
   * Thrown if underlying protocol connection has been closed.
   *
   * @public
   */
  class ConnectionClosedError extends ProtocolError {}

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   *
   * @remarks All A series paper format sizes in inches are calculated from centimeters
   * rounded mathematically to four decimal places.
   */
  const paperFormats = {
    letter: {
      cm: {
        width: 21.59,
        height: 27.94
      },
      in: {
        width: 8.5,
        height: 11
      }
    },
    legal: {
      cm: {
        width: 21.59,
        height: 35.56
      },
      in: {
        width: 8.5,
        height: 14
      }
    },
    tabloid: {
      cm: {
        width: 27.94,
        height: 43.18
      },
      in: {
        width: 11,
        height: 17
      }
    },
    ledger: {
      cm: {
        width: 43.18,
        height: 27.94
      },
      in: {
        width: 17,
        height: 11
      }
    },
    a0: {
      cm: {
        width: 84.1,
        height: 118.9
      },
      in: {
        width: 33.1102,
        height: 46.811
      }
    },
    a1: {
      cm: {
        width: 59.4,
        height: 84.1
      },
      in: {
        width: 23.3858,
        height: 33.1102
      }
    },
    a2: {
      cm: {
        width: 42,
        height: 59.4
      },
      in: {
        width: 16.5354,
        height: 23.3858
      }
    },
    a3: {
      cm: {
        width: 29.7,
        height: 42
      },
      in: {
        width: 11.6929,
        height: 16.5354
      }
    },
    a4: {
      cm: {
        width: 21,
        height: 29.7
      },
      in: {
        width: 8.2677,
        height: 11.6929
      }
    },
    a5: {
      cm: {
        width: 14.8,
        height: 21
      },
      in: {
        width: 5.8268,
        height: 8.2677
      }
    },
    a6: {
      cm: {
        width: 10.5,
        height: 14.8
      },
      in: {
        width: 4.1339,
        height: 5.8268
      }
    }
  };

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  const debugError = debug('puppeteer:error');
  /**
   * @internal
   */
  const DEFAULT_VIEWPORT = Object.freeze({
    width: 800,
    height: 600
  });
  /**
   * @internal
   */
  const SOURCE_URL = Symbol('Source URL for Puppeteer evaluation scripts');
  /**
   * @internal
   */
  var _functionName = /*#__PURE__*/new WeakMap();
  var _siteString = /*#__PURE__*/new WeakMap();
  class PuppeteerURL {
    constructor() {
      _classPrivateFieldInitSpec(this, _functionName, void 0);
      _classPrivateFieldInitSpec(this, _siteString, void 0);
    }
    static fromCallSite(functionName, site) {
      const url = new PuppeteerURL();
      _classPrivateFieldSet(_functionName, url, functionName);
      _classPrivateFieldSet(_siteString, url, site.toString());
      return url;
    }
    get functionName() {
      return _classPrivateFieldGet(_functionName, this);
    }
    get siteString() {
      return _classPrivateFieldGet(_siteString, this);
    }
    toString() {
      return `pptr:${[_classPrivateFieldGet(_functionName, this), encodeURIComponent(_classPrivateFieldGet(_siteString, this))].join(';')}`;
    }
  }
  /**
   * @internal
   */
  _PuppeteerURL = PuppeteerURL;
  _defineProperty(PuppeteerURL, "INTERNAL_URL", 'pptr:internal');
  _defineProperty(PuppeteerURL, "parse", url => {
    url = url.slice('pptr:'.length);
    const [functionName = '', siteString = ''] = url.split(';');
    const puppeteerUrl = new _PuppeteerURL();
    _classPrivateFieldSet(_functionName, puppeteerUrl, functionName);
    _classPrivateFieldSet(_siteString, puppeteerUrl, decodeURIComponent(siteString));
    return puppeteerUrl;
  });
  _defineProperty(PuppeteerURL, "isPuppeteerURL", url => {
    return url.startsWith('pptr:');
  });
  const withSourcePuppeteerURLIfNone = (functionName, object) => {
    if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
      return object;
    }
    const original = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => {
      // First element is the function.
      // Second element is the caller of this function.
      // Third element is the caller of the caller of this function
      // which is precisely what we want.
      return stack[2];
    };
    const site = new Error().stack;
    Error.prepareStackTrace = original;
    return Object.assign(object, {
      [SOURCE_URL]: PuppeteerURL.fromCallSite(functionName, site)
    });
  };
  /**
   * @internal
   */
  const getSourcePuppeteerURLIfAvailable = object => {
    if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
      return object[SOURCE_URL];
    }
    return undefined;
  };
  /**
   * @internal
   */
  const isString = obj => {
    return typeof obj === 'string' || obj instanceof String;
  };
  /**
   * @internal
   */
  const isNumber = obj => {
    return typeof obj === 'number' || obj instanceof Number;
  };
  /**
   * @internal
   */
  const isPlainObject = obj => {
    return typeof obj === 'object' && obj?.constructor === Object;
  };
  /**
   * @internal
   */
  const isRegExp = obj => {
    return typeof obj === 'object' && obj?.constructor === RegExp;
  };
  /**
   * @internal
   */
  const isDate = obj => {
    return typeof obj === 'object' && obj?.constructor === Date;
  };
  /**
   * @internal
   */
  function evaluationString(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  fun, ...args) {
    if (isString(fun)) {
      assert(args.length === 0, 'Cannot evaluate a string with arguments');
      return fun;
    }
    function serializeArgument(arg) {
      if (Object.is(arg, undefined)) {
        return 'undefined';
      }
      return JSON.stringify(arg);
    }
    return `(${fun})(${args.map(serializeArgument).join(',')})`;
  }
  /**
   * @internal
   */
  async function getReadableAsTypedArray(readable, path) {
    const buffers = [];
    const reader = readable.getReader();
    if (path) {
      const fileHandle = await environment.value.fs.promises.open(path, 'w+');
      try {
        while (true) {
          const {
            done,
            value
          } = await reader.read();
          if (done) {
            break;
          }
          buffers.push(value);
          await fileHandle.writeFile(value);
        }
      } finally {
        await fileHandle.close();
      }
    } else {
      while (true) {
        const {
          done,
          value
        } = await reader.read();
        if (done) {
          break;
        }
        buffers.push(value);
      }
    }
    try {
      const concat = mergeUint8Arrays(buffers);
      if (concat.length === 0) {
        return null;
      }
      return concat;
    } catch (error) {
      debugError(error);
      return null;
    }
  }
  /**
   * @internal
   */
  async function getReadableFromProtocolStream(client, handle) {
    return new ReadableStream({
      async pull(controller) {
        const {
          data,
          base64Encoded,
          eof
        } = await client.send('IO.read', {
          handle
        });
        controller.enqueue(stringToTypedArray(data, base64Encoded ?? false));
        if (eof) {
          await client.send('IO.close', {
            handle
          });
          controller.close();
        }
      }
    });
  }
  const VALID_DIALOG_TYPES = new Set(['alert', 'confirm', 'prompt', 'beforeunload']);
  /**
   * @internal
   */
  function validateDialogType(type) {
    let dialogType = null;
    if (VALID_DIALOG_TYPES.has(type)) {
      dialogType = type;
    }
    assert(dialogType, `Unknown javascript dialog type: ${type}`);
    return dialogType;
  }
  /**
   * @internal
   */
  function timeout(ms, cause) {
    return ms === 0 ? NEVER : timer(ms).pipe(map(() => {
      throw new TimeoutError(`Timed out after waiting ${ms}ms`, {
        cause
      });
    }));
  }
  /**
   * @internal
   */
  const UTILITY_WORLD_NAME = '__puppeteer_utility_world__' + packageVersion;
  /**
   * @internal
   */
  const SOURCE_URL_REGEX = /^[\x20\t]*\/\/[@#] sourceURL=\s{0,10}(\S*?)\s{0,10}$/m;
  /**
   * @internal
   */
  function getSourceUrlComment(url) {
    return `//# sourceURL=${url}`;
  }
  /**
   * @internal
   */
  const NETWORK_IDLE_TIME = 500;
  /**
   * @internal
   */
  function parsePDFOptions(options = {}, lengthUnit = 'in') {
    const defaults = {
      scale: 1,
      displayHeaderFooter: false,
      headerTemplate: '',
      footerTemplate: '',
      printBackground: false,
      landscape: false,
      pageRanges: '',
      preferCSSPageSize: false,
      omitBackground: false,
      outline: false,
      tagged: true,
      waitForFonts: true
    };
    let width = 8.5;
    let height = 11;
    if (options.format) {
      const format = paperFormats[options.format.toLowerCase()][lengthUnit];
      assert(format, 'Unknown paper format: ' + options.format);
      width = format.width;
      height = format.height;
    } else {
      width = convertPrintParameterToInches(options.width, lengthUnit) ?? width;
      height = convertPrintParameterToInches(options.height, lengthUnit) ?? height;
    }
    const margin = {
      top: convertPrintParameterToInches(options.margin?.top, lengthUnit) || 0,
      left: convertPrintParameterToInches(options.margin?.left, lengthUnit) || 0,
      bottom: convertPrintParameterToInches(options.margin?.bottom, lengthUnit) || 0,
      right: convertPrintParameterToInches(options.margin?.right, lengthUnit) || 0
    };
    // Quirk https://bugs.chromium.org/p/chromium/issues/detail?id=840455#c44
    if (options.outline) {
      options.tagged = true;
    }
    return {
      ...defaults,
      ...options,
      width,
      height,
      margin
    };
  }
  /**
   * @internal
   */
  const unitToPixels = {
    px: 1,
    in: 96,
    cm: 37.8,
    mm: 3.78
  };
  function convertPrintParameterToInches(parameter, lengthUnit = 'in') {
    if (typeof parameter === 'undefined') {
      return undefined;
    }
    let pixels;
    if (isNumber(parameter)) {
      // Treat numbers as pixel values to be aligned with phantom's paperSize.
      pixels = parameter;
    } else if (isString(parameter)) {
      const text = parameter;
      let unit = text.substring(text.length - 2).toLowerCase();
      let valueText = '';
      if (unit in unitToPixels) {
        valueText = text.substring(0, text.length - 2);
      } else {
        // In case of unknown unit try to parse the whole parameter as number of pixels.
        // This is consistent with phantom's paperSize behavior.
        unit = 'px';
        valueText = text;
      }
      const value = Number(valueText);
      assert(!isNaN(value), 'Failed to parse parameter value: ' + text);
      pixels = value * unitToPixels[unit];
    } else {
      throw new Error('page.pdf() Cannot handle parameter type: ' + typeof parameter);
    }
    return pixels / unitToPixels[lengthUnit];
  }
  /**
   * @internal
   */
  function fromEmitterEvent(emitter, eventName) {
    return new Observable(subscriber => {
      const listener = event => {
        subscriber.next(event);
      };
      emitter.on(eventName, listener);
      return () => {
        emitter.off(eventName, listener);
      };
    });
  }
  /**
   * @internal
   */
  function fromAbortSignal(signal, cause) {
    return signal ? fromEvent(signal, 'abort').pipe(map(() => {
      if (signal.reason instanceof Error) {
        signal.reason.cause = cause;
        throw signal.reason;
      }
      throw new Error(signal.reason, {
        cause
      });
    })) : NEVER;
  }
  /**
   * @internal
   */
  function filterAsync(predicate) {
    return mergeMap(value => {
      return from(Promise.resolve(predicate(value))).pipe(filter(isMatch => {
        return isMatch;
      }), map(() => {
        return value;
      }));
    });
  }

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * The EventEmitter class that many Puppeteer classes extend.
   *
   * @remarks
   *
   * This allows you to listen to events that Puppeteer classes fire and act
   * accordingly. Therefore you'll mostly use {@link EventEmitter.on | on} and
   * {@link EventEmitter.off | off} to bind
   * and unbind to event listeners.
   *
   * @public
   */
  var _emitter = /*#__PURE__*/new WeakMap();
  var _handlers = /*#__PURE__*/new WeakMap();
  class EventEmitter {
    /**
     * If you pass an emitter, the returned emitter will wrap the passed emitter.
     *
     * @internal
     */
    constructor(emitter = mitt_default(new Map())) {
      _classPrivateFieldInitSpec(this, _emitter, void 0);
      _classPrivateFieldInitSpec(this, _handlers, new Map());
      _classPrivateFieldSet(_emitter, this, emitter);
    }
    /**
     * Bind an event listener to fire when an event occurs.
     * @param type - the event type you'd like to listen to. Can be a string or symbol.
     * @param handler - the function to be called when the event occurs.
     * @returns `this` to enable you to chain method calls.
     */
    on(type, handler) {
      const handlers = _classPrivateFieldGet(_handlers, this).get(type);
      if (handlers === undefined) {
        _classPrivateFieldGet(_handlers, this).set(type, [handler]);
      } else {
        handlers.push(handler);
      }
      _classPrivateFieldGet(_emitter, this).on(type, handler);
      return this;
    }
    /**
     * Remove an event listener from firing.
     * @param type - the event type you'd like to stop listening to.
     * @param handler - the function that should be removed.
     * @returns `this` to enable you to chain method calls.
     */
    off(type, handler) {
      const handlers = _classPrivateFieldGet(_handlers, this).get(type) ?? [];
      if (handler === undefined) {
        for (const handler of handlers) {
          _classPrivateFieldGet(_emitter, this).off(type, handler);
        }
        _classPrivateFieldGet(_handlers, this).delete(type);
        return this;
      }
      const index = handlers.lastIndexOf(handler);
      if (index > -1) {
        _classPrivateFieldGet(_emitter, this).off(type, ...handlers.splice(index, 1));
      }
      return this;
    }
    /**
     * Emit an event and call any associated listeners.
     *
     * @param type - the event you'd like to emit
     * @param eventData - any data you'd like to emit with the event
     * @returns `true` if there are any listeners, `false` if there are not.
     */
    emit(type, event) {
      _classPrivateFieldGet(_emitter, this).emit(type, event);
      return this.listenerCount(type) > 0;
    }
    /**
     * Like `on` but the listener will only be fired once and then it will be removed.
     * @param type - the event you'd like to listen to
     * @param handler - the handler function to run when the event occurs
     * @returns `this` to enable you to chain method calls.
     */
    once(type, handler) {
      const onceHandler = eventData => {
        handler(eventData);
        this.off(type, onceHandler);
      };
      return this.on(type, onceHandler);
    }
    /**
     * Gets the number of listeners for a given event.
     *
     * @param type - the event to get the listener count for
     * @returns the number of listeners bound to the given event
     */
    listenerCount(type) {
      return _classPrivateFieldGet(_handlers, this).get(type)?.length || 0;
    }
    /**
     * Removes all listeners. If given an event argument, it will remove only
     * listeners for that event.
     *
     * @param type - the event to remove listeners for.
     * @returns `this` to enable you to chain method calls.
     */
    removeAllListeners(type) {
      if (type !== undefined) {
        return this.off(type);
      }
      this[disposeSymbol]();
      return this;
    }
    /**
     * @internal
     */
    [disposeSymbol]() {
      return void this[asyncDisposeSymbol]().catch(debugError);
    }
    /**
     * @internal
     */
    async [asyncDisposeSymbol]() {
      for (const [type, handlers] of _classPrivateFieldGet(_handlers, this)) {
        for (const handler of handlers) {
          _classPrivateFieldGet(_emitter, this).off(type, handler);
        }
      }
      _classPrivateFieldGet(_handlers, this).clear();
    }
  }

  /**
   * @internal
   */
  const WEB_PERMISSION_TO_PROTOCOL_PERMISSION = new Map([['accelerometer', 'sensors'], ['ambient-light-sensor', 'sensors'], ['background-sync', 'backgroundSync'], ['camera', 'videoCapture'], ['clipboard-read', 'clipboardReadWrite'], ['clipboard-sanitized-write', 'clipboardSanitizedWrite'], ['clipboard-write', 'clipboardReadWrite'], ['geolocation', 'geolocation'], ['gyroscope', 'sensors'], ['idle-detection', 'idleDetection'], ['keyboard-lock', 'keyboardLock'], ['magnetometer', 'sensors'], ['microphone', 'audioCapture'], ['midi', 'midi'], ['notifications', 'notifications'], ['payment-handler', 'paymentHandler'], ['persistent-storage', 'durableStorage'], ['pointer-lock', 'pointerLock'],
  // chrome-specific permissions we have.
  ['midi-sysex', 'midiSysex']]);
  /**
   * {@link Browser} represents a browser instance that is either:
   *
   * - connected to via {@link Puppeteer.connect} or
   * - launched by {@link PuppeteerNode.launch}.
   *
   * {@link Browser} {@link EventEmitter.emit | emits} various events which are
   * documented in the {@link BrowserEvent} enum.
   *
   * @example Using a {@link Browser} to create a {@link Page}:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.goto('https://example.com');
   * await browser.close();
   * ```
   *
   * @example Disconnecting from and reconnecting to a {@link Browser}:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * // Store the endpoint to be able to reconnect to the browser.
   * const browserWSEndpoint = browser.wsEndpoint();
   * // Disconnect puppeteer from the browser.
   * await browser.disconnect();
   *
   * // Use the endpoint to reestablish a connection
   * const browser2 = await puppeteer.connect({browserWSEndpoint});
   * // Close the browser.
   * await browser2.close();
   * ```
   *
   * @public
   */
  class Browser extends EventEmitter {
    /**
     * @internal
     */
    constructor() {
      super();
    }
    /**
     * Waits until a {@link Target | target} matching the given `predicate`
     * appears and returns it.
     *
     * This will look all open {@link BrowserContext | browser contexts}.
     *
     * @example Finding a target for a page opened via `window.open`:
     *
     * ```ts
     * await page.evaluate(() => window.open('https://www.example.com/'));
     * const newWindowTarget = await browser.waitForTarget(
     *   target => target.url() === 'https://www.example.com/',
     * );
     * ```
     */
    async waitForTarget(predicate, options = {}) {
      const {
        timeout: ms = 30000,
        signal
      } = options;
      return await firstValueFrom(merge(fromEmitterEvent(this, "targetcreated" /* BrowserEvent.TargetCreated */), fromEmitterEvent(this, "targetchanged" /* BrowserEvent.TargetChanged */), from(this.targets())).pipe(filterAsync(predicate), raceWith(fromAbortSignal(signal), timeout(ms))));
    }
    /**
     * Gets a list of all open {@link Page | pages} inside this {@link Browser}.
     *
     * If there are multiple {@link BrowserContext | browser contexts}, this
     * returns all {@link Page | pages} in all
     * {@link BrowserContext | browser contexts}.
     *
     * @param includeAll - experimental, setting to true includes all kinds of pages.
     *
     * @remarks Non-visible {@link Page | pages}, such as `"background_page"`,
     * will not be listed here. You can find them using {@link Target.page}.
     */
    async pages(includeAll = false) {
      const contextPages = await Promise.all(this.browserContexts().map(context => {
        return context.pages(includeAll);
      }));
      // Flatten array.
      return contextPages.reduce((acc, x) => {
        return acc.concat(x);
      }, []);
    }
    /**
     * Returns all cookies in the default {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.cookies | browser.defaultBrowserContext().cookies()}.
     */
    async cookies() {
      return await this.defaultBrowserContext().cookies();
    }
    /**
     * Sets cookies in the default {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.setCookie | browser.defaultBrowserContext().setCookie()}.
     */
    async setCookie(...cookies) {
      return await this.defaultBrowserContext().setCookie(...cookies);
    }
    /**
     * Removes cookies from the default {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.deleteCookie | browser.defaultBrowserContext().deleteCookie()}.
     */
    async deleteCookie(...cookies) {
      return await this.defaultBrowserContext().deleteCookie(...cookies);
    }
    /**
     * Deletes cookies matching the provided filters from the default
     * {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.deleteMatchingCookies |
     * browser.defaultBrowserContext().deleteMatchingCookies()}.
     */
    async deleteMatchingCookies(...filters) {
      return await this.defaultBrowserContext().deleteMatchingCookies(...filters);
    }
    /**
     * Sets the permission for a specific origin in the default
     * {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.setPermission |
     * browser.defaultBrowserContext().setPermission()}.
     *
     * @param origin - The origin to set the permission for.
     * @param permission - The permission descriptor.
     * @param state - The state of the permission.
     *
     * @public
     */
    async setPermission(origin, ...permissions) {
      return await this.defaultBrowserContext().setPermission(origin, ...permissions);
    }
    /** @internal */
    [disposeSymbol]() {
      return void this[asyncDisposeSymbol]().catch(debugError);
    }
    /** @internal */
    async [asyncDisposeSymbol]() {
      if (this.process()) {
        await this.close();
      } else {
        await this.disconnect();
      }
      await super[asyncDisposeSymbol]();
    }
  }

  /**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Creates and returns a deferred object along with the resolve/reject functions.
   *
   * If the deferred has not been resolved/rejected within the `timeout` period,
   * the deferred gets resolves with a timeout error. `timeout` has to be greater than 0 or
   * it is ignored.
   *
   * @internal
   */
  var _isResolved = /*#__PURE__*/new WeakMap();
  var _isRejected = /*#__PURE__*/new WeakMap();
  var _value = /*#__PURE__*/new WeakMap();
  var _resolve = /*#__PURE__*/new WeakMap();
  var _taskPromise = /*#__PURE__*/new WeakMap();
  var _timeoutId = /*#__PURE__*/new WeakMap();
  var _timeoutError = /*#__PURE__*/new WeakMap();
  var _Deferred_brand = /*#__PURE__*/new WeakSet();
  var _promise = /*#__PURE__*/new WeakMap();
  class Deferred {
    static create(opts) {
      return new Deferred(opts);
    }
    static async race(awaitables) {
      const deferredWithTimeout = new Set();
      try {
        const promises = awaitables.map(value => {
          if (value instanceof Deferred) {
            if (_classPrivateFieldGet(_timeoutId, value)) {
              deferredWithTimeout.add(value);
            }
            return value.valueOrThrow();
          }
          return value;
        });
        // eslint-disable-next-line no-restricted-syntax
        return await Promise.race(promises);
      } finally {
        for (const deferred of deferredWithTimeout) {
          // We need to stop the timeout else
          // Node.JS will keep running the event loop till the
          // timer executes
          deferred.reject(new Error('Timeout cleared'));
        }
      }
    }
    constructor(opts) {
      _classPrivateMethodInitSpec(this, _Deferred_brand);
      _classPrivateFieldInitSpec(this, _isResolved, false);
      _classPrivateFieldInitSpec(this, _isRejected, false);
      _classPrivateFieldInitSpec(this, _value, void 0);
      // SAFETY: This is ensured by #taskPromise.
      _classPrivateFieldInitSpec(this, _resolve, void 0);
      // TODO: Switch to Promise.withResolvers with Node 22
      _classPrivateFieldInitSpec(this, _taskPromise, new Promise(resolve => {
        _classPrivateFieldSet(_resolve, this, resolve);
      }));
      _classPrivateFieldInitSpec(this, _timeoutId, void 0);
      _classPrivateFieldInitSpec(this, _timeoutError, void 0);
      _classPrivateFieldInitSpec(this, _promise, void 0);
      if (opts && opts.timeout > 0) {
        _classPrivateFieldSet(_timeoutError, this, new TimeoutError(opts.message));
        _classPrivateFieldSet(_timeoutId, this, setTimeout(() => {
          this.reject(_classPrivateFieldGet(_timeoutError, this));
        }, opts.timeout));
      }
    }
    resolve(value) {
      if (_classPrivateFieldGet(_isRejected, this) || _classPrivateFieldGet(_isResolved, this)) {
        return;
      }
      _classPrivateFieldSet(_isResolved, this, true);
      _assertClassBrand(_Deferred_brand, this, _finish).call(this, value);
    }
    reject(error) {
      if (_classPrivateFieldGet(_isRejected, this) || _classPrivateFieldGet(_isResolved, this)) {
        return;
      }
      _classPrivateFieldSet(_isRejected, this, true);
      _assertClassBrand(_Deferred_brand, this, _finish).call(this, error);
    }
    resolved() {
      return _classPrivateFieldGet(_isResolved, this);
    }
    finished() {
      return _classPrivateFieldGet(_isResolved, this) || _classPrivateFieldGet(_isRejected, this);
    }
    value() {
      return _classPrivateFieldGet(_value, this);
    }
    valueOrThrow() {
      if (!_classPrivateFieldGet(_promise, this)) {
        _classPrivateFieldSet(_promise, this, (async () => {
          await _classPrivateFieldGet(_taskPromise, this);
          if (_classPrivateFieldGet(_isRejected, this)) {
            throw _classPrivateFieldGet(_value, this);
          }
          return _classPrivateFieldGet(_value, this);
        })());
      }
      return _classPrivateFieldGet(_promise, this);
    }
  }

  /**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  function _finish(value) {
    clearTimeout(_classPrivateFieldGet(_timeoutId, this));
    _classPrivateFieldSet(_value, this, value);
    _classPrivateFieldGet(_resolve, this).call(this);
  }
  var _locked = /*#__PURE__*/new WeakMap();
  var _acquirers = /*#__PURE__*/new WeakMap();
  class Mutex {
    constructor() {
      _classPrivateFieldInitSpec(this, _locked, false);
      _classPrivateFieldInitSpec(this, _acquirers, []);
    }
    // This is FIFO.
    async acquire(onRelease) {
      if (!_classPrivateFieldGet(_locked, this)) {
        _classPrivateFieldSet(_locked, this, true);
        return new Mutex.Guard(this, onRelease);
      }
      const deferred = Deferred.create();
      _classPrivateFieldGet(_acquirers, this).push(deferred.resolve.bind(deferred));
      await deferred.valueOrThrow();
      return new Mutex.Guard(this, onRelease);
    }
    release() {
      const resolve = _classPrivateFieldGet(_acquirers, this).shift();
      if (!resolve) {
        _classPrivateFieldSet(_locked, this, false);
        return;
      }
      resolve();
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * {@link BrowserContext} represents individual user contexts within a
   * {@link Browser | browser}.
   *
   * When a {@link Browser | browser} is launched, it has at least one default
   * {@link BrowserContext | browser context}. Others can be created
   * using {@link Browser.createBrowserContext}. Each context has isolated storage
   * (cookies/localStorage/etc.)
   *
   * {@link BrowserContext} {@link EventEmitter | emits} various events which are
   * documented in the {@link BrowserContextEvent} enum.
   *
   * If a {@link Page | page} opens another {@link Page | page}, e.g. using
   * `window.open`, the popup will belong to the parent {@link Page.browserContext
   * | page's browser context}.
   *
   * @example Creating a new {@link BrowserContext | browser context}:
   *
   * ```ts
   * // Create a new browser context
   * const context = await browser.createBrowserContext();
   * // Create a new page inside context.
   * const page = await context.newPage();
   * // ... do stuff with page ...
   * await page.goto('https://example.com');
   * // Dispose context once it's no longer needed.
   * await context.close();
   * ```
   *
   * @remarks
   *
   * In Chrome all non-default contexts are incognito,
   * and {@link Browser.defaultBrowserContext | default browser context}
   * might be incognito if you provide the `--incognito` argument when launching
   * the browser.
   *
   * @public
   */
  _defineProperty(Mutex, "Guard", (_mutex2 = /*#__PURE__*/new WeakMap(), _onRelease = /*#__PURE__*/new WeakMap(), class Guard {
    constructor(mutex, onRelease) {
      _classPrivateFieldInitSpec(this, _mutex2, void 0);
      _classPrivateFieldInitSpec(this, _onRelease, void 0);
      _classPrivateFieldSet(_mutex2, this, mutex);
      _classPrivateFieldSet(_onRelease, this, onRelease);
    }
    [disposeSymbol]() {
      _classPrivateFieldGet(_onRelease, this)?.call(this);
      return _classPrivateFieldGet(_mutex2, this).release();
    }
  }));
  var _pageScreenshotMutex = /*#__PURE__*/new WeakMap();
  var _screenshotOperationsCount = /*#__PURE__*/new WeakMap();
  class BrowserContext extends EventEmitter {
    /**
     * @internal
     */
    constructor() {
      super();
      /**
       * If defined, indicates an ongoing screenshot opereation.
       */
      _classPrivateFieldInitSpec(this, _pageScreenshotMutex, void 0);
      _classPrivateFieldInitSpec(this, _screenshotOperationsCount, 0);
    }
    /**
     * @internal
     */
    startScreenshot() {
      var _this$screenshotOpera, _this$screenshotOpera2;
      const mutex = _classPrivateFieldGet(_pageScreenshotMutex, this) || new Mutex();
      _classPrivateFieldSet(_pageScreenshotMutex, this, mutex);
      _classPrivateFieldSet(_screenshotOperationsCount, this, (_this$screenshotOpera = _classPrivateFieldGet(_screenshotOperationsCount, this), _this$screenshotOpera2 = _this$screenshotOpera++, _this$screenshotOpera)), _this$screenshotOpera2;
      return mutex.acquire(() => {
        var _this$screenshotOpera3, _this$screenshotOpera4;
        _classPrivateFieldSet(_screenshotOperationsCount, this, (_this$screenshotOpera3 = _classPrivateFieldGet(_screenshotOperationsCount, this), _this$screenshotOpera4 = _this$screenshotOpera3--, _this$screenshotOpera3)), _this$screenshotOpera4;
        if (_classPrivateFieldGet(_screenshotOperationsCount, this) === 0) {
          // Remove the mutex to indicate no ongoing screenshot operation.
          _classPrivateFieldSet(_pageScreenshotMutex, this, undefined);
        }
      });
    }
    /**
     * @internal
     */
    waitForScreenshotOperations() {
      return _classPrivateFieldGet(_pageScreenshotMutex, this)?.acquire();
    }
    /**
     * Waits until a {@link Target | target} matching the given `predicate`
     * appears and returns it.
     *
     * This will look all open {@link BrowserContext | browser contexts}.
     *
     * @example Finding a target for a page opened via `window.open`:
     *
     * ```ts
     * await page.evaluate(() => window.open('https://www.example.com/'));
     * const newWindowTarget = await browserContext.waitForTarget(
     *   target => target.url() === 'https://www.example.com/',
     * );
     * ```
     */
    async waitForTarget(predicate, options = {}) {
      const {
        timeout: ms = 30000
      } = options;
      return await firstValueFrom(merge(fromEmitterEvent(this, "targetcreated" /* BrowserContextEvent.TargetCreated */), fromEmitterEvent(this, "targetchanged" /* BrowserContextEvent.TargetChanged */), from(this.targets())).pipe(filterAsync(predicate), raceWith(timeout(ms))));
    }
    /**
     * Removes cookie in this browser context.
     *
     * @param cookies - Complete {@link Cookie | cookie} object to be removed.
     */
    async deleteCookie(...cookies) {
      return await this.setCookie(...cookies.map(cookie => {
        return {
          ...cookie,
          expires: 1
        };
      }));
    }
    /**
     * Deletes cookies matching the provided filters in this browser context.
     *
     * @param filters - {@link DeleteCookiesRequest}
     */
    async deleteMatchingCookies(...filters) {
      const cookies = await this.cookies();
      const cookiesToDelete = cookies.filter(cookie => {
        return filters.some(filter => {
          if (filter.name === cookie.name) {
            if (filter.domain !== undefined && filter.domain === cookie.domain) {
              return true;
            }
            if (filter.path !== undefined && filter.path === cookie.path) {
              return true;
            }
            if (filter.partitionKey !== undefined && cookie.partitionKey !== undefined) {
              if (typeof cookie.partitionKey !== 'object') {
                throw new Error('Unexpected string partition key');
              }
              if (typeof filter.partitionKey === 'string') {
                if (filter.partitionKey === cookie.partitionKey?.sourceOrigin) {
                  return true;
                }
              } else {
                if (filter.partitionKey.sourceOrigin === cookie.partitionKey?.sourceOrigin) {
                  return true;
                }
              }
            }
            if (filter.url !== undefined) {
              const url = new URL(filter.url);
              if (url.hostname === cookie.domain && url.pathname === cookie.path) {
                return true;
              }
            }
            return true;
          }
          return false;
        });
      });
      await this.deleteCookie(...cookiesToDelete);
    }
    /**
     * Whether this {@link BrowserContext | browser context} is closed.
     */
    get closed() {
      return !this.browser().browserContexts().includes(this);
    }
    /**
     * Identifier for this {@link BrowserContext | browser context}.
     */
    get id() {
      return undefined;
    }
    /** @internal */
    [disposeSymbol]() {
      return void this[asyncDisposeSymbol]().catch(debugError);
    }
    /** @internal */
    async [asyncDisposeSymbol]() {
      await this.close();
      await super[asyncDisposeSymbol]();
    }
  }

  /**
   * Events that the CDPSession class emits.
   *
   * @public
   */
  // eslint-disable-next-line @typescript-eslint/no-namespace
  exports.CDPSessionEvent = void 0;
  (function (CDPSessionEvent) {
    /** @internal */
    CDPSessionEvent.Disconnected = Symbol('CDPSession.Disconnected');
    /** @internal */
    CDPSessionEvent.Swapped = Symbol('CDPSession.Swapped');
    /**
     * Emitted when the session is ready to be configured during the auto-attach
     * process. Right after the event is handled, the session will be resumed.
     *
     * @internal
     */
    CDPSessionEvent.Ready = Symbol('CDPSession.Ready');
    CDPSessionEvent.SessionAttached = 'sessionattached';
    CDPSessionEvent.SessionDetached = 'sessiondetached';
  })(exports.CDPSessionEvent || (exports.CDPSessionEvent = {}));
  /**
   * The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.
   *
   * @remarks
   *
   * Protocol methods can be called with {@link CDPSession.send} method and protocol
   * events can be subscribed to with `CDPSession.on` method.
   *
   * Useful links: {@link https://chromedevtools.github.io/devtools-protocol/ | DevTools Protocol Viewer}
   * and {@link https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md | Getting Started with DevTools Protocol}.
   *
   * @example
   *
   * ```ts
   * const client = await page.createCDPSession();
   * await client.send('Animation.enable');
   * client.on('Animation.animationCreated', () =>
   *   console.log('Animation created!'),
   * );
   * const response = await client.send('Animation.getPlaybackRate');
   * console.log('playback rate is ' + response.playbackRate);
   * await client.send('Animation.setPlaybackRate', {
   *   playbackRate: response.playbackRate / 2,
   * });
   * ```
   *
   * @public
   */
  class CDPSession extends EventEmitter {
    /**
     * @internal
     */
    constructor() {
      super();
    }
    /**
     * Parent session in terms of CDP's auto-attach mechanism.
     *
     * @internal
     */
    parentSession() {
      return undefined;
    }
  }

  /**
   * @license
   * Copyright 2025 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Device request prompts let you respond to the page requesting for a device
   * through an API like WebBluetooth.
   *
   * @remarks
   * `DeviceRequestPrompt` instances are returned via the
   * {@link Page.waitForDevicePrompt} method.
   *
   * @example
   *
   * ```ts
   * const [devicePrompt] = Promise.all([
   *   page.waitForDevicePrompt(),
   *   page.click('#connect-bluetooth'),
   * ]);
   * await devicePrompt.select(
   *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
   * );
   * ```
   *
   * @public
   */
  class DeviceRequestPrompt {
    constructor() {
      /**
       * Current list of selectable devices.
       */
      _defineProperty(this, "devices", []);
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Dialog instances are dispatched by the {@link Page} via the `dialog` event.
   *
   * @remarks
   *
   * @example
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * page.on('dialog', async dialog => {
   *   console.log(dialog.message());
   *   await dialog.dismiss();
   *   await browser.close();
   * });
   * await page.evaluate(() => alert('1'));
   * ```
   *
   * @public
   */
  var _type = /*#__PURE__*/new WeakMap();
  var _message = /*#__PURE__*/new WeakMap();
  var _defaultValue = /*#__PURE__*/new WeakMap();
  class Dialog {
    /**
     * @internal
     */
    constructor(type, message, defaultValue = '') {
      _classPrivateFieldInitSpec(this, _type, void 0);
      _classPrivateFieldInitSpec(this, _message, void 0);
      _classPrivateFieldInitSpec(this, _defaultValue, void 0);
      /**
       * @internal
       */
      _defineProperty(this, "handled", false);
      _classPrivateFieldSet(_type, this, type);
      _classPrivateFieldSet(_message, this, message);
      _classPrivateFieldSet(_defaultValue, this, defaultValue);
    }
    /**
     * The type of the dialog.
     */
    type() {
      return _classPrivateFieldGet(_type, this);
    }
    /**
     * The message displayed in the dialog.
     */
    message() {
      return _classPrivateFieldGet(_message, this);
    }
    /**
     * The default value of the prompt, or an empty string if the dialog
     * is not a `prompt`.
     */
    defaultValue() {
      return _classPrivateFieldGet(_defaultValue, this);
    }
    /**
     * A promise that resolves when the dialog has been accepted.
     *
     * @param promptText - optional text that will be entered in the dialog
     * prompt. Has no effect if the dialog's type is not `prompt`.
     *
     */
    async accept(promptText) {
      assert(!this.handled, 'Cannot accept dialog which is already handled!');
      this.handled = true;
      await this.handle({
        accept: true,
        text: promptText
      });
    }
    /**
     * A promise which will resolve once the dialog has been dismissed
     */
    async dismiss() {
      assert(!this.handled, 'Cannot dismiss dialog which is already handled!');
      this.handled = true;
      await this.handle({
        accept: false
      });
    }
  }

  /**
   * @internal
   */
  class AsyncIterableUtil {
    static async *map(iterable, map) {
      for await (const value of iterable) {
        yield await map(value);
      }
    }
    static async *flatMap(iterable, map) {
      for await (const value of iterable) {
        yield* map(value);
      }
    }
    static async collect(iterable) {
      const result = [];
      for await (const value of iterable) {
        result.push(value);
      }
      return result;
    }
    static async first(iterable) {
      for await (const value of iterable) {
        return value;
      }
      return;
    }
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  const _isElementHandle = Symbol('_isElementHandle');

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  function isErrorLike(obj) {
    return typeof obj === 'object' && obj !== null && 'name' in obj && 'message' in obj;
  }
  /**
   * @internal
   */
  function isErrnoException(obj) {
    return isErrorLike(obj) && ('errno' in obj || 'code' in obj || 'path' in obj || 'syscall' in obj);
  }
  /**
   * @internal
   */
  function rewriteError$1(error, message, originalMessage) {
    error.message = message;
    error.originalMessage = originalMessage ?? error.originalMessage;
    return error;
  }
  /**
   * @internal
   */
  function createProtocolErrorMessage(object) {
    let message = object.error.message;
    // TODO: remove the type checks when we stop connecting to BiDi with a CDP
    // client.
    if (object.error && typeof object.error === 'object' && 'data' in object.error) {
      message += ` ${object.error.data}`;
    }
    return message;
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  const createdFunctions = new Map();
  /**
   * Creates a function from a string.
   *
   * @internal
   */
  const createFunction = functionValue => {
    let fn = createdFunctions.get(functionValue);
    if (fn) {
      return fn;
    }
    
    createdFunctions.set(functionValue, fn);
    return fn;
  };
  /**
   * @internal
   */
  function stringifyFunction(fn) {
    let value = fn.toString();
    if (value.match(/^(async )*function(\(|\s)/) || value.match(/^(async )*function\s*\*\s*/)) {
      return value;
    }
    const isArrow = value.startsWith('(') || value.match(/^async\s*\(/) || value.match(/^(async)*\s*(?:[$_\p{ID_Start}])(?:[$\u200C\u200D\p{ID_Continue}])*\s*=>/u);
    if (isArrow) {
      return value;
    }
    // This means we might have a function shorthand (e.g. `test(){}`). Let's
    // try prefixing.
    let prefix = 'function ';
    if (value.startsWith('async ')) {
      prefix = `async ${prefix}`;
      value = value.substring('async '.length);
    }
    return `${prefix}${value}`;
  }
  /**
   * Replaces `PLACEHOLDER`s with the given replacements.
   *
   * All replacements must be valid JS code.
   *
   * @example
   *
   * ```ts
   * interpolateFunction(() => PLACEHOLDER('test'), {test: 'void 0'});
   * // Equivalent to () => void 0
   * ```
   *
   * @internal
   */
  const interpolateFunction = (fn, replacements) => {
    let value = stringifyFunction(fn);
    for (const [name, jsValue] of Object.entries(replacements)) {
      value = value.replace(new RegExp(`PLACEHOLDER\\(\\s*(?:'${name}'|"${name}")\\s*\\)`, 'g'),
      // Wrapping this ensures tersers that accidentally inline PLACEHOLDER calls
      // are still valid. Without, we may get calls like ()=>{...}() which is
      // not valid.
      `(${jsValue})`);
    }
    return createFunction(value);
  };

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __addDisposableResource$c = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$c = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  const DEFAULT_BATCH_SIZE = 20;
  /**
   * This will transpose an iterator JSHandle into a fast, Puppeteer-side iterator
   * of JSHandles.
   *
   * @param size - The number of elements to transpose. This should be something
   * reasonable.
   */
  async function* fastTransposeIteratorHandle(iterator, size) {
    const env_1 = {
      stack: [],
      error: void 0,
      hasError: false
    };
    try {
      const array = __addDisposableResource$c(env_1, await iterator.evaluateHandle(async (iterator, size) => {
        const results = [];
        while (results.length < size) {
          const result = await iterator.next();
          if (result.done) {
            break;
          }
          results.push(result.value);
        }
        return results;
      }, size), false);
      const properties = await array.getProperties();
      const handles = properties.values();
      const stack = __addDisposableResource$c(env_1, new DisposableStack(), false);
      stack.defer(() => {
        for (const handle_1 of handles) {
          const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
          };
          try {
            const handle = __addDisposableResource$c(env_2, handle_1, false);
            handle[disposeSymbol]();
          } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
          } finally {
            __disposeResources$c(env_2);
          }
        }
      });
      yield* handles;
      return properties.size === 0;
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources$c(env_1);
    }
  }
  /**
   * This will transpose an iterator JSHandle in batches based on the default size
   * of {@link fastTransposeIteratorHandle}.
   */
  async function* transposeIteratorHandle(iterator) {
    let size = DEFAULT_BATCH_SIZE;
    while (!(yield* fastTransposeIteratorHandle(iterator, size))) {
      size <<= 1;
    }
  }
  /**
   * @internal
   */
  async function* transposeIterableHandle(handle) {
    const env_3 = {
      stack: [],
      error: void 0,
      hasError: false
    };
    try {
      const generatorHandle = __addDisposableResource$c(env_3, await handle.evaluateHandle(iterable => {
        return async function* () {
          yield* iterable;
        }();
      }), false);
      yield* transposeIteratorHandle(generatorHandle);
    } catch (e_3) {
      env_3.error = e_3;
      env_3.hasError = true;
    } finally {
      __disposeResources$c(env_3);
    }
  }

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _get = /*#__PURE__*/new WeakMap();
  class LazyArg {
    constructor(get) {
      _classPrivateFieldInitSpec(this, _get, void 0);
      _classPrivateFieldSet(_get, this, get);
    }
    async get(context) {
      return await _classPrivateFieldGet(_get, this).call(this, context);
    }
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  _LazyArg = LazyArg;
  _defineProperty(LazyArg, "create", get => {
    // We don't want to introduce LazyArg to the type system, otherwise we would
    // have to make it public.
    return new _LazyArg(get);
  });
  var __addDisposableResource$b = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$b = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  /**
   * @internal
   */
  class QueryHandler {
    static get _querySelector() {
      if (this.querySelector) {
        return this.querySelector;
      }
      if (!this.querySelectorAll) {
        throw new Error('Cannot create default `querySelector`.');
      }
      return this.querySelector = interpolateFunction(async (node, selector, PuppeteerUtil) => {
        const querySelectorAll = PLACEHOLDER('querySelectorAll');
        const results = querySelectorAll(node, selector, PuppeteerUtil);
        for await (const result of results) {
          return result;
        }
        return null;
      }, {
        querySelectorAll: stringifyFunction(this.querySelectorAll)
      });
    }
    static get _querySelectorAll() {
      if (this.querySelectorAll) {
        return this.querySelectorAll;
      }
      if (!this.querySelector) {
        throw new Error('Cannot create default `querySelectorAll`.');
      }
      return this.querySelectorAll = interpolateFunction(async function* (node, selector, PuppeteerUtil) {
        const querySelector = PLACEHOLDER('querySelector');
        const result = await querySelector(node, selector, PuppeteerUtil);
        if (result) {
          yield result;
        }
      }, {
        querySelector: stringifyFunction(this.querySelector)
      });
    }
    /**
     * Queries for multiple nodes given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll()}.
     */
    static async *queryAll(element, selector) {
      const env_1 = {
        stack: [],
        error: void 0,
        hasError: false
      };
      try {
        const handle = __addDisposableResource$b(env_1, await element.evaluateHandle(this._querySelectorAll, selector, LazyArg.create(context => {
          return context.puppeteerUtil;
        })), false);
        yield* transposeIterableHandle(handle);
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$b(env_1);
      }
    }
    /**
     * Queries for a single node given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector}.
     */
    static async queryOne(element, selector) {
      const env_2 = {
        stack: [],
        error: void 0,
        hasError: false
      };
      try {
        const result = __addDisposableResource$b(env_2, await element.evaluateHandle(this._querySelector, selector, LazyArg.create(context => {
          return context.puppeteerUtil;
        })), false);
        if (!(_isElementHandle in result)) {
          return null;
        }
        return result.move();
      } catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
      } finally {
        __disposeResources$b(env_2);
      }
    }
    /**
     * Waits until a single node appears for a given selector and
     * {@link ElementHandle}.
     *
     * This will always query the handle in the Puppeteer world and migrate the
     * result to the main world.
     */
    static async waitFor(elementOrFrame, selector, options) {
      const env_3 = {
        stack: [],
        error: void 0,
        hasError: false
      };
      try {
        let frame;
        const element = __addDisposableResource$b(env_3, await (async () => {
          if (!(_isElementHandle in elementOrFrame)) {
            frame = elementOrFrame;
            return;
          }
          frame = elementOrFrame.frame;
          return await frame.isolatedRealm().adoptHandle(elementOrFrame);
        })(), false);
        const {
          visible = false,
          hidden = false,
          timeout,
          signal
        } = options;
        const polling = visible || hidden ? "raf" /* PollingOptions.RAF */ : options.polling;
        try {
          const env_4 = {
            stack: [],
            error: void 0,
            hasError: false
          };
          try {
            signal?.throwIfAborted();
            const handle = __addDisposableResource$b(env_4, await frame.isolatedRealm().waitForFunction(async (PuppeteerUtil, query, selector, root, visible) => {
              const querySelector = PuppeteerUtil.createFunction(query);
              const node = await querySelector(root ?? document, selector, PuppeteerUtil);
              return PuppeteerUtil.checkVisibility(node, visible);
            }, {
              polling,
              root: element,
              timeout,
              signal
            }, LazyArg.create(context => {
              return context.puppeteerUtil;
            }), stringifyFunction(this._querySelector), selector, element, visible ? true : hidden ? false : undefined), false);
            if (signal?.aborted) {
              throw signal.reason;
            }
            if (!(_isElementHandle in handle)) {
              return null;
            }
            return await frame.mainRealm().transferHandle(handle);
          } catch (e_3) {
            env_4.error = e_3;
            env_4.hasError = true;
          } finally {
            __disposeResources$b(env_4);
          }
        } catch (error) {
          if (!isErrorLike(error)) {
            throw error;
          }
          if (error.name === 'AbortError') {
            throw error;
          }
          const waitForSelectorError = new (error instanceof TimeoutError ? TimeoutError : Error)(`Waiting for selector \`${selector}\` failed`);
          waitForSelectorError.cause = error;
          throw waitForSelectorError;
        }
      } catch (e_4) {
        env_3.error = e_4;
        env_3.hasError = true;
      } finally {
        __disposeResources$b(env_3);
      }
    }
  }

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  // Either one of these may be implemented, but at least one must be.
  _defineProperty(QueryHandler, "querySelectorAll", void 0);
  _defineProperty(QueryHandler, "querySelector", void 0);
  const isKnownAttribute = attribute => {
    return ['name', 'role'].includes(attribute);
  };
  /**
   * The selectors consist of an accessible name to query for and optionally
   * further aria attributes on the form `[<attribute>=<value>]`.
   * Currently, we only support the `name` and `role` attribute.
   * The following examples showcase how the syntax works wrt. querying:
   *
   * - 'title[role="heading"]' queries for elements with name 'title' and role 'heading'.
   * - '[role="image"]' queries for elements with role 'image' and any name.
   * - 'label' queries for elements with name 'label' and any role.
   * - '[name=""][role="button"]' queries for elements with no name and role 'button'.
   */
  const ATTRIBUTE_REGEXP = /\[\s*(?<attribute>\w+)\s*=\s*(?<quote>"|')(?<value>\\.|.*?(?=\k<quote>))\k<quote>\s*\]/g;
  const parseARIASelector = selector => {
    if (selector.length > 10_000) {
      throw new Error(`Selector ${selector} is too long`);
    }
    const queryOptions = {};
    const defaultName = selector.replace(ATTRIBUTE_REGEXP, (_, attribute, __, value) => {
      assert(isKnownAttribute(attribute), `Unknown aria attribute "${attribute}" in selector`);
      queryOptions[attribute] = value;
      return '';
    });
    if (defaultName && !queryOptions.name) {
      queryOptions.name = defaultName;
    }
    return queryOptions;
  };
  /**
   * @internal
   */
  class ARIAQueryHandler extends QueryHandler {
    static async *queryAll(element, selector) {
      const {
        name,
        role
      } = parseARIASelector(selector);
      yield* element.queryAXTree(name, role);
    }
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  _ARIAQueryHandler = ARIAQueryHandler;
  _defineProperty(ARIAQueryHandler, "querySelector", async (node, selector, {
    ariaQuerySelector
  }) => {
    return await ariaQuerySelector(node, selector);
  });
  _defineProperty(ARIAQueryHandler, "queryOne", async (element, selector) => {
    return (await AsyncIterableUtil.first(_ARIAQueryHandler.queryAll(element, selector))) ?? null;
  });
  class CSSQueryHandler extends QueryHandler {}

  /**
   * JavaScript code that provides the puppeteer utilities. See the
   * [README](https://github.com/puppeteer/puppeteer/blob/main/src/injected/README.md)
   * for injection for more information.
   *
   * @internal
   */
  _defineProperty(CSSQueryHandler, "querySelector", (element, selector, {
    cssQuerySelector
  }) => {
    return cssQuerySelector(element, selector);
  });
  _defineProperty(CSSQueryHandler, "querySelectorAll", (element, selector, {
    cssQuerySelectorAll
  }) => {
    return cssQuerySelectorAll(element, selector);
  });
  const source = "\"use strict\";var g=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var l=(t,e)=>{for(var r in e)g(t,r,{get:e[r],enumerable:!0})},G=(t,e,r,o)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let s of B(e))!Y.call(t,s)&&s!==r&&g(t,s,{get:()=>e[s],enumerable:!(o=X(e,s))||o.enumerable});return t};var J=t=>G(g({},\"__esModule\",{value:!0}),t);var pe={};l(pe,{default:()=>he});module.exports=J(pe);var N=class extends Error{constructor(e,r){super(e,r),this.name=this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}},p=class extends N{};var c=class t{static create(e){return new t(e)}static async race(e){let r=new Set;try{let o=e.map(s=>s instanceof t?(s.#s&&r.add(s),s.valueOrThrow()):s);return await Promise.race(o)}finally{for(let o of r)o.reject(new Error(\"Timeout cleared\"))}}#e=!1;#r=!1;#o;#t;#a=new Promise(e=>{this.#t=e});#s;#i;constructor(e){e&&e.timeout>0&&(this.#i=new p(e.message),this.#s=setTimeout(()=>{this.reject(this.#i)},e.timeout))}#l(e){clearTimeout(this.#s),this.#o=e,this.#t()}resolve(e){this.#r||this.#e||(this.#e=!0,this.#l(e))}reject(e){this.#r||this.#e||(this.#r=!0,this.#l(e))}resolved(){return this.#e}finished(){return this.#e||this.#r}value(){return this.#o}#n;valueOrThrow(){return this.#n||(this.#n=(async()=>{if(await this.#a,this.#r)throw this.#o;return this.#o})()),this.#n}};var L=new Map,W=t=>{let e=L.get(t);return e||(e=new Function(`return ${t}`)(),L.set(t,e),e)};var b={};l(b,{ariaQuerySelector:()=>z,ariaQuerySelectorAll:()=>x});var z=(t,e)=>globalThis.__ariaQuerySelector(t,e),x=async function*(t,e){yield*await globalThis.__ariaQuerySelectorAll(t,e)};var E={};l(E,{cssQuerySelector:()=>K,cssQuerySelectorAll:()=>Z});var K=(t,e)=>t.querySelector(e),Z=function(t,e){return t.querySelectorAll(e)};var A={};l(A,{customQuerySelectors:()=>P});var v=class{#e=new Map;register(e,r){if(!r.queryOne&&r.queryAll){let o=r.queryAll;r.queryOne=(s,i)=>{for(let n of o(s,i))return n;return null}}else if(r.queryOne&&!r.queryAll){let o=r.queryOne;r.queryAll=(s,i)=>{let n=o(s,i);return n?[n]:[]}}else if(!r.queryOne||!r.queryAll)throw new Error(\"At least one query method must be defined.\");this.#e.set(e,{querySelector:r.queryOne,querySelectorAll:r.queryAll})}unregister(e){this.#e.delete(e)}get(e){return this.#e.get(e)}clear(){this.#e.clear()}},P=new v;var R={};l(R,{pierceQuerySelector:()=>ee,pierceQuerySelectorAll:()=>te});var ee=(t,e)=>{let r=null,o=s=>{let i=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT);do{let n=i.currentNode;n.shadowRoot&&o(n.shadowRoot),!(n instanceof ShadowRoot)&&n!==s&&!r&&n.matches(e)&&(r=n)}while(!r&&i.nextNode())};return t instanceof Document&&(t=t.documentElement),o(t),r},te=(t,e)=>{let r=[],o=s=>{let i=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT);do{let n=i.currentNode;n.shadowRoot&&o(n.shadowRoot),!(n instanceof ShadowRoot)&&n!==s&&n.matches(e)&&r.push(n)}while(i.nextNode())};return t instanceof Document&&(t=t.documentElement),o(t),r};var u=(t,e)=>{if(!t)throw new Error(e)};var y=class{#e;#r;#o;#t;constructor(e,r){this.#e=e,this.#r=r}async start(){let e=this.#t=c.create(),r=await this.#e();if(r){e.resolve(r);return}this.#o=new MutationObserver(async()=>{let o=await this.#e();o&&(e.resolve(o),await this.stop())}),this.#o.observe(this.#r,{childList:!0,subtree:!0,attributes:!0})}async stop(){u(this.#t,\"Polling never started.\"),this.#t.finished()||this.#t.reject(new Error(\"Polling stopped\")),this.#o&&(this.#o.disconnect(),this.#o=void 0)}result(){return u(this.#t,\"Polling never started.\"),this.#t.valueOrThrow()}},w=class{#e;#r;constructor(e){this.#e=e}async start(){let e=this.#r=c.create(),r=await this.#e();if(r){e.resolve(r);return}let o=async()=>{if(e.finished())return;let s=await this.#e();if(!s){window.requestAnimationFrame(o);return}e.resolve(s),await this.stop()};window.requestAnimationFrame(o)}async stop(){u(this.#r,\"Polling never started.\"),this.#r.finished()||this.#r.reject(new Error(\"Polling stopped\"))}result(){return u(this.#r,\"Polling never started.\"),this.#r.valueOrThrow()}},T=class{#e;#r;#o;#t;constructor(e,r){this.#e=e,this.#r=r}async start(){let e=this.#t=c.create(),r=await this.#e();if(r){e.resolve(r);return}this.#o=setInterval(async()=>{let o=await this.#e();o&&(e.resolve(o),await this.stop())},this.#r)}async stop(){u(this.#t,\"Polling never started.\"),this.#t.finished()||this.#t.reject(new Error(\"Polling stopped\")),this.#o&&(clearInterval(this.#o),this.#o=void 0)}result(){return u(this.#t,\"Polling never started.\"),this.#t.valueOrThrow()}};var _={};l(_,{PCombinator:()=>H,pQuerySelector:()=>fe,pQuerySelectorAll:()=>$});var a=class{static async*map(e,r){for await(let o of e)yield await r(o)}static async*flatMap(e,r){for await(let o of e)yield*r(o)}static async collect(e){let r=[];for await(let o of e)r.push(o);return r}static async first(e){for await(let r of e)return r}};var C={};l(C,{textQuerySelectorAll:()=>m});var re=new Set([\"checkbox\",\"image\",\"radio\"]),oe=t=>t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&!re.has(t.type),se=new Set([\"SCRIPT\",\"STYLE\"]),f=t=>!se.has(t.nodeName)&&!document.head?.contains(t),I=new WeakMap,F=t=>{for(;t;)I.delete(t),t instanceof ShadowRoot?t=t.host:t=t.parentNode},j=new WeakSet,ne=new MutationObserver(t=>{for(let e of t)F(e.target)}),d=t=>{let e=I.get(t);if(e||(e={full:\"\",immediate:[]},!f(t)))return e;let r=\"\";if(oe(t))e.full=t.value,e.immediate.push(t.value),t.addEventListener(\"input\",o=>{F(o.target)},{once:!0,capture:!0});else{for(let o=t.firstChild;o;o=o.nextSibling){if(o.nodeType===Node.TEXT_NODE){e.full+=o.nodeValue??\"\",r+=o.nodeValue??\"\";continue}r&&e.immediate.push(r),r=\"\",o.nodeType===Node.ELEMENT_NODE&&(e.full+=d(o).full)}r&&e.immediate.push(r),t instanceof Element&&t.shadowRoot&&(e.full+=d(t.shadowRoot).full),j.has(t)||(ne.observe(t,{childList:!0,characterData:!0,subtree:!0}),j.add(t))}return I.set(t,e),e};var m=function*(t,e){let r=!1;for(let o of t.childNodes)if(o instanceof Element&&f(o)){let s;o.shadowRoot?s=m(o.shadowRoot,e):s=m(o,e);for(let i of s)yield i,r=!0}r||t instanceof Element&&f(t)&&d(t).full.includes(e)&&(yield t)};var k={};l(k,{checkVisibility:()=>le,pierce:()=>S,pierceAll:()=>O});var ie=[\"hidden\",\"collapse\"],le=(t,e)=>{if(!t)return e===!1;if(e===void 0)return t;let r=t.nodeType===Node.TEXT_NODE?t.parentElement:t,o=window.getComputedStyle(r),s=o&&!ie.includes(o.visibility)&&!ae(r);return e===s?t:!1};function ae(t){let e=t.getBoundingClientRect();return e.width===0||e.height===0}var ce=t=>\"shadowRoot\"in t&&t.shadowRoot instanceof ShadowRoot;function*S(t){ce(t)?yield t.shadowRoot:yield t}function*O(t){t=S(t).next().value,yield t;let e=[document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT)];for(let r of e){let o;for(;o=r.nextNode();)o.shadowRoot&&(yield o.shadowRoot,e.push(document.createTreeWalker(o.shadowRoot,NodeFilter.SHOW_ELEMENT)))}}var D={};l(D,{xpathQuerySelectorAll:()=>q});var q=function*(t,e,r=-1){let s=(t.ownerDocument||document).evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE),i=[],n;for(;(n=s.iterateNext())&&(i.push(n),!(r&&i.length===r)););for(let h=0;h<i.length;h++)n=i[h],yield n,i[h]=null};var ue=/[-\\w\\P{ASCII}*]/u,H=(r=>(r.Descendent=\">>>\",r.Child=\">>>>\",r))(H||{}),V=t=>\"querySelectorAll\"in t,Q=class{#e;#r=[];#o=void 0;elements;constructor(e,r){this.elements=[e],this.#e=r,this.#t()}async run(){for(typeof this.#o==\"string\"&&this.#o.trimStart()===\":scope\"&&this.#t();this.#o!==void 0;this.#t()){let e=this.#o;typeof e==\"string\"?e[0]&&ue.test(e[0])?this.elements=a.flatMap(this.elements,async function*(r){V(r)&&(yield*r.querySelectorAll(e))}):this.elements=a.flatMap(this.elements,async function*(r){if(!r.parentElement){if(!V(r))return;yield*r.querySelectorAll(e);return}let o=0;for(let s of r.parentElement.children)if(++o,s===r)break;yield*r.parentElement.querySelectorAll(`:scope>:nth-child(${o})${e}`)}):this.elements=a.flatMap(this.elements,async function*(r){switch(e.name){case\"text\":yield*m(r,e.value);break;case\"xpath\":yield*q(r,e.value);break;case\"aria\":yield*x(r,e.value);break;default:let o=P.get(e.name);if(!o)throw new Error(`Unknown selector type: ${e.name}`);yield*o.querySelectorAll(r,e.value)}})}}#t(){if(this.#r.length!==0){this.#o=this.#r.shift();return}if(this.#e.length===0){this.#o=void 0;return}let e=this.#e.shift();switch(e){case\">>>>\":{this.elements=a.flatMap(this.elements,S),this.#t();break}case\">>>\":{this.elements=a.flatMap(this.elements,O),this.#t();break}default:this.#r=e,this.#t();break}}},M=class{#e=new WeakMap;calculate(e,r=[]){if(e===null)return r;e instanceof ShadowRoot&&(e=e.host);let o=this.#e.get(e);if(o)return[...o,...r];let s=0;for(let n=e.previousSibling;n;n=n.previousSibling)++s;let i=this.calculate(e.parentNode,[s]);return this.#e.set(e,i),[...i,...r]}},U=(t,e)=>{if(t.length+e.length===0)return 0;let[r=-1,...o]=t,[s=-1,...i]=e;return r===s?U(o,i):r<s?-1:1},de=async function*(t){let e=new Set;for await(let o of t)e.add(o);let r=new M;yield*[...e.values()].map(o=>[o,r.calculate(o)]).sort(([,o],[,s])=>U(o,s)).map(([o])=>o)},$=function(t,e){let r=JSON.parse(e);if(r.some(o=>{let s=0;return o.some(i=>(typeof i==\"string\"?++s:s=0,s>1))}))throw new Error(\"Multiple deep combinators found in sequence.\");return de(a.flatMap(r,o=>{let s=new Q(t,o);return s.run(),s.elements}))},fe=async function(t,e){for await(let r of $(t,e))return r;return null};var me=Object.freeze({...b,...A,...R,..._,...C,...k,...D,...E,Deferred:c,createFunction:W,createTextContent:d,IntervalPoller:T,isSuitableNodeForTextMatching:f,MutationPoller:y,RAFPoller:w}),he=me;\n";

  /**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _updated = /*#__PURE__*/new WeakMap();
  var _amendments = /*#__PURE__*/new WeakMap();
  var _ScriptInjector_brand = /*#__PURE__*/new WeakSet();
  class ScriptInjector {
    constructor() {
      _classPrivateMethodInitSpec(this, _ScriptInjector_brand);
      _classPrivateFieldInitSpec(this, _updated, false);
      _classPrivateFieldInitSpec(this, _amendments, new Set());
    }
    // Appends a statement of the form `(PuppeteerUtil) => {...}`.
    append(statement) {
      _assertClassBrand(_ScriptInjector_brand, this, _update).call(this, () => {
        _classPrivateFieldGet(_amendments, this).add(statement);
      });
    }
    pop(statement) {
      _assertClassBrand(_ScriptInjector_brand, this, _update).call(this, () => {
        _classPrivateFieldGet(_amendments, this).delete(statement);
      });
    }
    inject(inject, force = false) {
      if (_classPrivateFieldGet(_updated, this) || force) {
        inject(_assertClassBrand(_ScriptInjector_brand, this, _get2).call(this));
      }
      _classPrivateFieldSet(_updated, this, false);
    }
  }
  /**
   * @internal
   */
  function _update(callback) {
    callback();
    _classPrivateFieldSet(_updated, this, true);
  }
  function _get2() {
    return `(() => {
      const module = {};
      ${source}
      ${[..._classPrivateFieldGet(_amendments, this)].map(statement => {
      return `(${statement})(module.exports.default);`;
    }).join('')}
      return module.exports.default;
    })()`;
  }
  const scriptInjector = new ScriptInjector();

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * The registry of {@link CustomQueryHandler | custom query handlers}.
   *
   * @example
   *
   * ```ts
   * Puppeteer.customQueryHandlers.register('lit', { … });
   * const aHandle = await page.$('lit/…');
   * ```
   *
   * @internal
   */
  var _handlers2 = /*#__PURE__*/new WeakMap();
  class CustomQueryHandlerRegistry {
    constructor() {
      _classPrivateFieldInitSpec(this, _handlers2, new Map());
    }
    get(name) {
      const handler = _classPrivateFieldGet(_handlers2, this).get(name);
      return handler ? handler[1] : undefined;
    }
    /**
     * Registers a {@link CustomQueryHandler | custom query handler}.
     *
     * @remarks
     * After registration, the handler can be used everywhere where a selector is
     * expected by prepending the selection string with `<name>/`. The name is
     * only allowed to consist of lower- and upper case latin letters.
     *
     * @example
     *
     * ```ts
     * Puppeteer.customQueryHandlers.register('lit', { … });
     * const aHandle = await page.$('lit/…');
     * ```
     *
     * @param name - Name to register under.
     * @param queryHandler - {@link CustomQueryHandler | Custom query handler} to
     * register.
     */
    register(name, handler) {
      var _Class;
      assert(!_classPrivateFieldGet(_handlers2, this).has(name), `Cannot register over existing handler: ${name}`);
      assert(/^[a-zA-Z]+$/.test(name), `Custom query handler names may only contain [a-zA-Z]`);
      assert(handler.queryAll || handler.queryOne, `At least one query method must be implemented.`);
      const Handler = (_Class = class Handler extends QueryHandler {}, _defineProperty(_Class, "querySelectorAll", interpolateFunction((node, selector, PuppeteerUtil) => {
        return PuppeteerUtil.customQuerySelectors.get(PLACEHOLDER('name')).querySelectorAll(node, selector);
      }, {
        name: JSON.stringify(name)
      })), _defineProperty(_Class, "querySelector", interpolateFunction((node, selector, PuppeteerUtil) => {
        return PuppeteerUtil.customQuerySelectors.get(PLACEHOLDER('name')).querySelector(node, selector);
      }, {
        name: JSON.stringify(name)
      })), _Class);
      const registerScript = interpolateFunction(PuppeteerUtil => {
        PuppeteerUtil.customQuerySelectors.register(PLACEHOLDER('name'), {
          queryAll: PLACEHOLDER('queryAll'),
          queryOne: PLACEHOLDER('queryOne')
        });
      }, {
        name: JSON.stringify(name),
        queryAll: handler.queryAll ? stringifyFunction(handler.queryAll) : String(undefined),
        queryOne: handler.queryOne ? stringifyFunction(handler.queryOne) : String(undefined)
      }).toString();
      _classPrivateFieldGet(_handlers2, this).set(name, [registerScript, Handler]);
      scriptInjector.append(registerScript);
    }
    /**
     * Unregisters the {@link CustomQueryHandler | custom query handler} for the
     * given name.
     *
     * @throws `Error` if there is no handler under the given name.
     */
    unregister(name) {
      const handler = _classPrivateFieldGet(_handlers2, this).get(name);
      if (!handler) {
        throw new Error(`Cannot unregister unknown handler: ${name}`);
      }
      scriptInjector.pop(handler[0]);
      _classPrivateFieldGet(_handlers2, this).delete(name);
    }
    /**
     * Gets the names of all {@link CustomQueryHandler | custom query handlers}.
     */
    names() {
      return [..._classPrivateFieldGet(_handlers2, this).keys()];
    }
    /**
     * Unregisters all custom query handlers.
     */
    clear() {
      for (const [registerScript] of _classPrivateFieldGet(_handlers2, this)) {
        scriptInjector.pop(registerScript);
      }
      _classPrivateFieldGet(_handlers2, this).clear();
    }
  }
  /**
   * @internal
   */
  const customQueryHandlers = new CustomQueryHandlerRegistry();

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  class PierceQueryHandler extends QueryHandler {}

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  _defineProperty(PierceQueryHandler, "querySelector", (element, selector, {
    pierceQuerySelector
  }) => {
    return pierceQuerySelector(element, selector);
  });
  _defineProperty(PierceQueryHandler, "querySelectorAll", (element, selector, {
    pierceQuerySelectorAll
  }) => {
    return pierceQuerySelectorAll(element, selector);
  });
  class PQueryHandler extends QueryHandler {}

  /**
  MIT License
   Copyright (c) 2020 Lea Verou
   Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
   */
  // node_modules/parsel-js/dist/parsel.js
  _defineProperty(PQueryHandler, "querySelectorAll", (element, selector, {
    pQuerySelectorAll
  }) => {
    return pQuerySelectorAll(element, selector);
  });
  _defineProperty(PQueryHandler, "querySelector", (element, selector, {
    pQuerySelector
  }) => {
    return pQuerySelector(element, selector);
  });
  var TOKENS = {
    attribute: /\[\s*(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)\s*(?:(?<operator>\W?=)\s*(?<value>.+?)\s*(\s(?<caseSensitive>[iIsS]))?\s*)?\]/gu,
    id: /#(?<name>[-\w\P{ASCII}]+)/gu,
    class: /\.(?<name>[-\w\P{ASCII}]+)/gu,
    comma: /\s*,\s*/g,
    combinator: /\s*[\s>+~]\s*/g,
    "pseudo-element": /::(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,
    "pseudo-class": /:(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,
    universal: /(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?\*/gu,
    type: /(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)/gu
    // this must be last
  };
  var TRIM_TOKENS = /* @__PURE__ */new Set(["combinator", "comma"]);
  var getArgumentPatternByType = type => {
    switch (type) {
      case "pseudo-element":
      case "pseudo-class":
        return new RegExp(TOKENS[type].source.replace("(?<argument>\xB6*)", "(?<argument>.*)"), "gu");
      default:
        return TOKENS[type];
    }
  };
  function gobbleParens(text, offset) {
    let nesting = 0;
    let result = "";
    for (; offset < text.length; offset++) {
      const char = text[offset];
      switch (char) {
        case "(":
          ++nesting;
          break;
        case ")":
          --nesting;
          break;
      }
      result += char;
      if (nesting === 0) {
        return result;
      }
    }
    return result;
  }
  function tokenizeBy(text, grammar = TOKENS) {
    if (!text) {
      return [];
    }
    const tokens = [text];
    for (const [type, pattern] of Object.entries(grammar)) {
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (typeof token !== "string") {
          continue;
        }
        pattern.lastIndex = 0;
        const match = pattern.exec(token);
        if (!match) {
          continue;
        }
        const from = match.index - 1;
        const args = [];
        const content = match[0];
        const before = token.slice(0, from + 1);
        if (before) {
          args.push(before);
        }
        args.push({
          ...match.groups,
          type,
          content
        });
        const after = token.slice(from + content.length + 1);
        if (after) {
          args.push(after);
        }
        tokens.splice(i, 1, ...args);
      }
    }
    let offset = 0;
    for (const token of tokens) {
      switch (typeof token) {
        case "string":
          throw new Error(`Unexpected sequence ${token} found at index ${offset}`);
        case "object":
          offset += token.content.length;
          token.pos = [offset - token.content.length, offset];
          if (TRIM_TOKENS.has(token.type)) {
            token.content = token.content.trim() || " ";
          }
          break;
      }
    }
    return tokens;
  }
  var STRING_PATTERN = /(['"])([^\\\n]*?)\1/g;
  var ESCAPE_PATTERN = /\\./g;
  function tokenize(selector, grammar = TOKENS) {
    selector = selector.trim();
    if (selector === "") {
      return [];
    }
    const replacements = [];
    selector = selector.replace(ESCAPE_PATTERN, (value, offset) => {
      replacements.push({
        value,
        offset
      });
      return "\uE000".repeat(value.length);
    });
    selector = selector.replace(STRING_PATTERN, (value, quote, content, offset) => {
      replacements.push({
        value,
        offset
      });
      return `${quote}${"\uE001".repeat(content.length)}${quote}`;
    });
    {
      let pos = 0;
      let offset;
      while ((offset = selector.indexOf("(", pos)) > -1) {
        const value = gobbleParens(selector, offset);
        replacements.push({
          value,
          offset
        });
        selector = `${selector.substring(0, offset)}(${"\xB6".repeat(value.length - 2)})${selector.substring(offset + value.length)}`;
        pos = offset + value.length;
      }
    }
    const tokens = tokenizeBy(selector, grammar);
    const changedTokens = /* @__PURE__ */new Set();
    for (const replacement of replacements.reverse()) {
      for (const token of tokens) {
        const {
          offset,
          value
        } = replacement;
        if (!(token.pos[0] <= offset && offset + value.length <= token.pos[1])) {
          continue;
        }
        const {
          content
        } = token;
        const tokenOffset = offset - token.pos[0];
        token.content = content.slice(0, tokenOffset) + value + content.slice(tokenOffset + value.length);
        if (token.content !== content) {
          changedTokens.add(token);
        }
      }
    }
    for (const token of changedTokens) {
      const pattern = getArgumentPatternByType(token.type);
      if (!pattern) {
        throw new Error(`Unknown token type: ${token.type}`);
      }
      pattern.lastIndex = 0;
      const match = pattern.exec(token.content);
      if (!match) {
        throw new Error(`Unable to parse content for ${token.type}: ${token.content}`);
      }
      Object.assign(token, match.groups);
    }
    return tokens;
  }
  function stringify(listOrNode) {
    if (Array.isArray(listOrNode)) {
      return listOrNode.map(token => token.content).join("");
    }
    switch (listOrNode.type) {
      case "list":
        return listOrNode.list.map(stringify).join(",");
      case "relative":
        return listOrNode.combinator + stringify(listOrNode.right);
      case "complex":
        return stringify(listOrNode.left) + listOrNode.combinator + stringify(listOrNode.right);
      case "compound":
        return listOrNode.list.map(stringify).join("");
      default:
        return listOrNode.content;
    }
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  TOKENS['nesting'] = /&/g;
  TOKENS['combinator'] = /\s*(>>>>?|[\s>+~])\s*/g;
  const ESCAPE_REGEXP = /\\[\s\S]/g;
  const unquote = text => {
    if (text.length <= 1) {
      return text;
    }
    if ((text[0] === '"' || text[0] === "'") && text.endsWith(text[0])) {
      text = text.slice(1, -1);
    }
    return text.replace(ESCAPE_REGEXP, match => {
      return match[1];
    });
  };
  /**
   * @internal
   */
  function parsePSelectors(selector) {
    let isPureCSS = true;
    let hasAria = false;
    let hasPseudoClasses = false;
    const tokens = tokenize(selector);
    if (tokens.length === 0) {
      return [[], isPureCSS, hasPseudoClasses, false];
    }
    let compoundSelector = [];
    let complexSelector = [compoundSelector];
    const selectors = [complexSelector];
    const storage = [];
    for (const token of tokens) {
      switch (token.type) {
        case 'combinator':
          switch (token.content) {
            case ">>>" /* PCombinator.Descendent */:
              isPureCSS = false;
              if (storage.length) {
                compoundSelector.push(stringify(storage));
                storage.splice(0);
              }
              compoundSelector = [];
              complexSelector.push(">>>" /* PCombinator.Descendent */);
              complexSelector.push(compoundSelector);
              continue;
            case ">>>>" /* PCombinator.Child */:
              isPureCSS = false;
              if (storage.length) {
                compoundSelector.push(stringify(storage));
                storage.splice(0);
              }
              compoundSelector = [];
              complexSelector.push(">>>>" /* PCombinator.Child */);
              complexSelector.push(compoundSelector);
              continue;
          }
          break;
        case 'pseudo-element':
          if (!token.name.startsWith('-p-')) {
            break;
          }
          isPureCSS = false;
          if (storage.length) {
            compoundSelector.push(stringify(storage));
            storage.splice(0);
          }
          const name = token.name.slice(3);
          if (name === 'aria') {
            hasAria = true;
          }
          compoundSelector.push({
            name,
            value: unquote(token.argument ?? '')
          });
          continue;
        case 'pseudo-class':
          hasPseudoClasses = true;
          break;
        case 'comma':
          if (storage.length) {
            compoundSelector.push(stringify(storage));
            storage.splice(0);
          }
          compoundSelector = [];
          complexSelector = [compoundSelector];
          selectors.push(complexSelector);
          continue;
      }
      storage.push(token);
    }
    if (storage.length) {
      compoundSelector.push(stringify(storage));
    }
    return [selectors, isPureCSS, hasPseudoClasses, hasAria];
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  class TextQueryHandler extends QueryHandler {}

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  _defineProperty(TextQueryHandler, "querySelectorAll", (element, selector, {
    textQuerySelectorAll
  }) => {
    return textQuerySelectorAll(element, selector);
  });
  class XPathQueryHandler extends QueryHandler {}

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  _defineProperty(XPathQueryHandler, "querySelectorAll", (element, selector, {
    xpathQuerySelectorAll
  }) => {
    return xpathQuerySelectorAll(element, selector);
  });
  _defineProperty(XPathQueryHandler, "querySelector", (element, selector, {
    xpathQuerySelectorAll
  }) => {
    for (const result of xpathQuerySelectorAll(element, selector, 1)) {
      return result;
    }
    return null;
  });
  const BUILTIN_QUERY_HANDLERS = {
    aria: ARIAQueryHandler,
    pierce: PierceQueryHandler,
    xpath: XPathQueryHandler,
    text: TextQueryHandler
  };
  const QUERY_SEPARATORS = ['=', '/'];
  /**
   * @internal
   */
  function getQueryHandlerAndSelector(selector) {
    for (const handlerMap of [customQueryHandlers.names().map(name => {
      return [name, customQueryHandlers.get(name)];
    }), Object.entries(BUILTIN_QUERY_HANDLERS)]) {
      for (const [name, QueryHandler] of handlerMap) {
        for (const separator of QUERY_SEPARATORS) {
          const prefix = `${name}${separator}`;
          if (selector.startsWith(prefix)) {
            selector = selector.slice(prefix.length);
            return {
              updatedSelector: selector,
              polling: name === 'aria' ? "raf" /* PollingOptions.RAF */ : "mutation" /* PollingOptions.MUTATION */,
              QueryHandler
            };
          }
        }
      }
    }
    try {
      const [pSelector, isPureCSS, hasPseudoClasses, hasAria] = parsePSelectors(selector);
      if (isPureCSS) {
        return {
          updatedSelector: selector,
          polling: hasPseudoClasses ? "raf" /* PollingOptions.RAF */ : "mutation" /* PollingOptions.MUTATION */,
          QueryHandler: CSSQueryHandler
        };
      }
      return {
        updatedSelector: JSON.stringify(pSelector),
        polling: hasAria ? "raf" /* PollingOptions.RAF */ : "mutation" /* PollingOptions.MUTATION */,
        QueryHandler: PQueryHandler
      };
    } catch {
      return {
        updatedSelector: selector,
        polling: "mutation" /* PollingOptions.MUTATION */,
        QueryHandler: CSSQueryHandler
      };
    }
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __addDisposableResource$a = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$a = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  const instances = new WeakSet();
  function moveable(Class, _) {
    let hasDispose = false;
    if (Class.prototype[disposeSymbol]) {
      const dispose = Class.prototype[disposeSymbol];
      Class.prototype[disposeSymbol] = function () {
        if (instances.has(this)) {
          instances.delete(this);
          return;
        }
        return dispose.call(this);
      };
      hasDispose = true;
    }
    if (Class.prototype[asyncDisposeSymbol]) {
      const asyncDispose = Class.prototype[asyncDisposeSymbol];
      Class.prototype[asyncDisposeSymbol] = function () {
        if (instances.has(this)) {
          instances.delete(this);
          return;
        }
        return asyncDispose.call(this);
      };
      hasDispose = true;
    }
    if (hasDispose) {
      Class.prototype.move = function () {
        instances.add(this);
        return this;
      };
    }
    return Class;
  }
  function throwIfDisposed(message = value => {
    return `Attempted to use disposed ${value.constructor.name}.`;
  }) {
    return (target, _) => {
      return function (...args) {
        if (this.disposed) {
          throw new Error(message(this));
        }
        return target.call(this, ...args);
      };
    };
  }
  /**
   * The decorator only invokes the target if the target has not been invoked with
   * the same arguments before. The decorated method throws an error if it's
   * invoked with a different number of elements: if you decorate a method, it
   * should have the same number of arguments
   *
   * @internal
   */
  function invokeAtMostOnceForArguments(target, _) {
    const cache = new WeakMap();
    let cacheDepth = -1;
    return function (...args) {
      if (cacheDepth === -1) {
        cacheDepth = args.length;
      }
      if (cacheDepth !== args.length) {
        throw new Error('Memoized method was called with the wrong number of arguments');
      }
      let freshArguments = false;
      let cacheIterator = cache;
      for (const arg of args) {
        if (cacheIterator.has(arg)) {
          cacheIterator = cacheIterator.get(arg);
        } else {
          freshArguments = true;
          cacheIterator.set(arg, new WeakMap());
          cacheIterator = cacheIterator.get(arg);
        }
      }
      if (!freshArguments) {
        return;
      }
      return target.call(this, ...args);
    };
  }
  function guarded(getKey = function () {
    return this;
  }) {
    return (target, _) => {
      const mutexes = new WeakMap();
      return async function (...args) {
        const env_1 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const key = getKey.call(this);
          let mutex = mutexes.get(key);
          if (!mutex) {
            mutex = new Mutex();
            mutexes.set(key, mutex);
          }
          const _ = __addDisposableResource$a(env_1, await mutex.acquire(), true);
          return await target.call(this, ...args);
        } catch (e_1) {
          env_1.error = e_1;
          env_1.hasError = true;
        } finally {
          const result_1 = __disposeResources$a(env_1);
          if (result_1) await result_1;
        }
      };
    };
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __runInitializers$6 = undefined && undefined.__runInitializers || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$6 = undefined && undefined.__esDecorate || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __addDisposableResource$9 = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$9 = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  /**
   * Represents a reference to a JavaScript object. Instances can be created using
   * {@link Page.evaluateHandle}.
   *
   * Handles prevent the referenced JavaScript object from being garbage-collected
   * unless the handle is purposely {@link JSHandle.dispose | disposed}. JSHandles
   * are auto-disposed when their associated frame is navigated away or the parent
   * context gets destroyed.
   *
   * Handles can be used as arguments for any evaluation function such as
   * {@link Page.$eval}, {@link Page.evaluate}, and {@link Page.evaluateHandle}.
   * They are resolved to their referenced object.
   *
   * @example
   *
   * ```ts
   * const windowHandle = await page.evaluateHandle(() => window);
   * ```
   *
   * @public
   */
  let JSHandle = ((_ref, _Class2) => {
    let _classDecorators = [moveable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getProperty_decorators;
    let _getProperties_decorators;
    _ref = (_getProperty_decorators = [throwIfDisposed()], _getProperties_decorators = [throwIfDisposed()], disposeSymbol);
    _Class2 = class {
      /**
       * @internal
       */
      constructor() {
        __runInitializers$6(this, _instanceExtraInitializers);
      }
      /**
       * Evaluates the given function with the current handle as its first argument.
       */
      async evaluate(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
        return await this.realm.evaluate(pageFunction, this, ...args);
      }
      /**
       * Evaluates the given function with the current handle as its first argument.
       *
       */
      async evaluateHandle(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
        return await this.realm.evaluateHandle(pageFunction, this, ...args);
      }
      /**
       * @internal
       */
      async getProperty(propertyName) {
        return await this.evaluateHandle((object, propertyName) => {
          return object[propertyName];
        }, propertyName);
      }
      /**
       * Gets a map of handles representing the properties of the current handle.
       *
       * @example
       *
       * ```ts
       * const listHandle = await page.evaluateHandle(() => document.body.children);
       * const properties = await listHandle.getProperties();
       * const children = [];
       * for (const property of properties.values()) {
       *   const element = property.asElement();
       *   if (element) {
       *     children.push(element);
       *   }
       * }
       * children; // holds elementHandles to all children of document.body
       * ```
       */
      async getProperties() {
        const propertyNames = await this.evaluate(object => {
          const enumerableProperties = [];
          const descriptors = Object.getOwnPropertyDescriptors(object);
          for (const propertyName in descriptors) {
            if (descriptors[propertyName]?.enumerable) {
              enumerableProperties.push(propertyName);
            }
          }
          return enumerableProperties;
        });
        const map = new Map();
        const results = await Promise.all(propertyNames.map(key => {
          return this.getProperty(key);
        }));
        for (const [key, value] of Object.entries(propertyNames)) {
          const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
          };
          try {
            const handle = __addDisposableResource$9(env_1, results[key], false);
            if (handle) {
              map.set(value, handle.move());
            }
          } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
          } finally {
            __disposeResources$9(env_1);
          }
        }
        return map;
      }
      /** @internal */
      [_ref]() {
        return void this[asyncDisposeSymbol]().catch(debugError);
      }
      /** @internal */
      [asyncDisposeSymbol]() {
        return this.dispose();
      }
    };
    _classThis = _Class2;
    (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
      __esDecorate$6(_Class2, null, _getProperty_decorators, {
        kind: "method",
        name: "getProperty",
        static: false,
        private: false,
        access: {
          has: obj => "getProperty" in obj,
          get: obj => obj.getProperty
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$6(_Class2, null, _getProperties_decorators, {
        kind: "method",
        name: "getProperties",
        static: false,
        private: false,
        access: {
          has: obj => "getProperties" in obj,
          get: obj => obj.getProperties
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$6(null, _classDescriptor = {
        value: _classThis
      }, _classDecorators, {
        kind: "class",
        name: _classThis.name,
        metadata: _metadata
      }, null, _classExtraInitializers);
      _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
      __runInitializers$6(_classThis, _classExtraInitializers);
    })();
    return _classThis;
  })();
  var __addDisposableResource$8 = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$8 = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  /**
   * All the events that a locator instance may emit.
   *
   * @public
   */
  exports.LocatorEvent = void 0;
  (function (LocatorEvent) {
    /**
     * Emitted every time before the locator performs an action on the located element(s).
     */
    LocatorEvent["Action"] = "action";
  })(exports.LocatorEvent || (exports.LocatorEvent = {}));
  /**
   * Locators describe a strategy of locating objects and performing an action on
   * them. If the action fails because the object is not ready for the action, the
   * whole operation is retried. Various preconditions for a successful action are
   * checked automatically.
   *
   * See {@link https://pptr.dev/guides/page-interactions#locators} for details.
   *
   * @public
   */
  var _ensureElementIsInTheViewport = /*#__PURE__*/new WeakMap();
  var _waitForEnabled = /*#__PURE__*/new WeakMap();
  var _waitForStableBoundingBox = /*#__PURE__*/new WeakMap();
  var _waitForEnabledIfNeeded = /*#__PURE__*/new WeakMap();
  var _waitForStableBoundingBoxIfNeeded = /*#__PURE__*/new WeakMap();
  var _ensureElementIsInTheViewportIfNeeded = /*#__PURE__*/new WeakMap();
  var _Locator_brand = /*#__PURE__*/new WeakSet();
  class Locator extends EventEmitter {
    constructor(...args) {
      super(...args);
      _classPrivateMethodInitSpec(this, _Locator_brand);
      /**
       * @internal
       */
      _defineProperty(this, "visibility", null);
      /**
       * @internal
       */
      _defineProperty(this, "_timeout", 30000);
      _classPrivateFieldInitSpec(this, _ensureElementIsInTheViewport, true);
      _classPrivateFieldInitSpec(this, _waitForEnabled, true);
      _classPrivateFieldInitSpec(this, _waitForStableBoundingBox, true);
      /**
       * @internal
       */
      _defineProperty(this, "operators", {
        conditions: (conditions, signal) => {
          return mergeMap(handle => {
            return merge(...conditions.map(condition => {
              return condition(handle, signal);
            })).pipe(defaultIfEmpty(handle));
          });
        },
        retryAndRaceWithSignalAndTimer: (signal, cause) => {
          const candidates = [];
          if (signal) {
            candidates.push(fromAbortSignal(signal, cause));
          }
          candidates.push(timeout(this._timeout, cause));
          return pipe(retry({
            delay: RETRY_DELAY
          }), raceWith(...candidates));
        }
      });
      /**
       * If the element has a "disabled" property, wait for the element to be
       * enabled.
       */
      _classPrivateFieldInitSpec(this, _waitForEnabledIfNeeded, (handle, signal) => {
        if (!_classPrivateFieldGet(_waitForEnabled, this)) {
          return EMPTY;
        }
        return from(handle.frame.waitForFunction(element => {
          if (!(element instanceof HTMLElement)) {
            return true;
          }
          const isNativeFormControl = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'OPTION', 'OPTGROUP'].includes(element.nodeName);
          return !isNativeFormControl || !element.hasAttribute('disabled');
        }, {
          timeout: this._timeout,
          signal
        }, handle)).pipe(ignoreElements());
      });
      /**
       * Compares the bounding box of the element for two consecutive animation
       * frames and waits till they are the same.
       */
      _classPrivateFieldInitSpec(this, _waitForStableBoundingBoxIfNeeded, handle => {
        if (!_classPrivateFieldGet(_waitForStableBoundingBox, this)) {
          return EMPTY;
        }
        return defer(() => {
          // Note we don't use waitForFunction because that relies on RAF.
          return from(handle.evaluate(element => {
            return new Promise(resolve => {
              window.requestAnimationFrame(() => {
                const rect1 = element.getBoundingClientRect();
                window.requestAnimationFrame(() => {
                  const rect2 = element.getBoundingClientRect();
                  resolve([{
                    x: rect1.x,
                    y: rect1.y,
                    width: rect1.width,
                    height: rect1.height
                  }, {
                    x: rect2.x,
                    y: rect2.y,
                    width: rect2.width,
                    height: rect2.height
                  }]);
                });
              });
            });
          }));
        }).pipe(first(([rect1, rect2]) => {
          return rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height;
        }), retry({
          delay: RETRY_DELAY
        }), ignoreElements());
      });
      /**
       * Checks if the element is in the viewport and auto-scrolls it if it is not.
       */
      _classPrivateFieldInitSpec(this, _ensureElementIsInTheViewportIfNeeded, handle => {
        if (!_classPrivateFieldGet(_ensureElementIsInTheViewport, this)) {
          return EMPTY;
        }
        return from(handle.isIntersectingViewport({
          threshold: 0
        })).pipe(filter(isIntersectingViewport => {
          return !isIntersectingViewport;
        }), mergeMap(() => {
          return from(handle.scrollIntoView());
        }), mergeMap(() => {
          return defer(() => {
            return from(handle.isIntersectingViewport({
              threshold: 0
            }));
          }).pipe(first(identity), retry({
            delay: RETRY_DELAY
          }), ignoreElements());
        }));
      });
    }
    /**
     * Creates a race between multiple locators trying to locate elements in
     * parallel but ensures that only a single element receives the action.
     *
     * @public
     */
    static race(locators) {
      return RaceLocator.create(locators);
    }
    // Determines when the locator will timeout for actions.
    get timeout() {
      return this._timeout;
    }
    /**
     * Creates a new locator instance by cloning the current locator and setting
     * the total timeout for the locator actions.
     *
     * Pass `0` to disable timeout.
     *
     * @defaultValue `Page.getDefaultTimeout()`
     */
    setTimeout(timeout) {
      const locator = this._clone();
      locator._timeout = timeout;
      return locator;
    }
    /**
     * Creates a new locator instance by cloning the current locator with the
     * visibility property changed to the specified value.
     */
    setVisibility(visibility) {
      const locator = this._clone();
      locator.visibility = visibility;
      return locator;
    }
    /**
     * Creates a new locator instance by cloning the current locator and
     * specifying whether to wait for input elements to become enabled before the
     * action. Applicable to `click` and `fill` actions.
     *
     * @defaultValue `true`
     */
    setWaitForEnabled(value) {
      const locator = this._clone();
      _classPrivateFieldSet(_waitForEnabled, locator, value);
      return locator;
    }
    /**
     * Creates a new locator instance by cloning the current locator and
     * specifying whether the locator should scroll the element into viewport if
     * it is not in the viewport already.
     *
     * @defaultValue `true`
     */
    setEnsureElementIsInTheViewport(value) {
      const locator = this._clone();
      _classPrivateFieldSet(_ensureElementIsInTheViewport, locator, value);
      return locator;
    }
    /**
     * Creates a new locator instance by cloning the current locator and
     * specifying whether the locator has to wait for the element's bounding box
     * to be same between two consecutive animation frames.
     *
     * @defaultValue `true`
     */
    setWaitForStableBoundingBox(value) {
      const locator = this._clone();
      _classPrivateFieldSet(_waitForStableBoundingBox, locator, value);
      return locator;
    }
    /**
     * @internal
     */
    copyOptions(locator) {
      this._timeout = locator._timeout;
      this.visibility = locator.visibility;
      _classPrivateFieldSet(_waitForEnabled, this, _classPrivateFieldGet(_waitForEnabled, locator));
      _classPrivateFieldSet(_ensureElementIsInTheViewport, this, _classPrivateFieldGet(_ensureElementIsInTheViewport, locator));
      _classPrivateFieldSet(_waitForStableBoundingBox, this, _classPrivateFieldGet(_waitForStableBoundingBox, locator));
      return this;
    }
    /**
     * Clones the locator.
     */
    clone() {
      return this._clone();
    }
    /**
     * Waits for the locator to get a handle from the page.
     *
     * @public
     */
    async waitHandle(options) {
      const cause = new Error('Locator.waitHandle');
      return await firstValueFrom(this._wait(options).pipe(this.operators.retryAndRaceWithSignalAndTimer(options?.signal, cause)));
    }
    /**
     * Waits for the locator to get the serialized value from the page.
     *
     * Note this requires the value to be JSON-serializable.
     *
     * @public
     */
    async wait(options) {
      const env_1 = {
        stack: [],
        error: void 0,
        hasError: false
      };
      try {
        const handle = __addDisposableResource$8(env_1, await this.waitHandle(options), false);
        return await handle.jsonValue();
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$8(env_1);
      }
    }
    /**
     * Maps the locator using the provided mapper.
     *
     * @public
     */
    map(mapper) {
      return new MappedLocator(this._clone(), handle => {
        // SAFETY: TypeScript cannot deduce the type.
        return handle.evaluateHandle(mapper);
      });
    }
    /**
     * Creates an expectation that is evaluated against located values.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @public
     */
    filter(predicate) {
      return new FilteredLocator(this._clone(), async (handle, signal) => {
        await handle.frame.waitForFunction(predicate, {
          signal,
          timeout: this._timeout
        }, handle);
        return true;
      });
    }
    /**
     * Creates an expectation that is evaluated against located handles.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @internal
     */
    filterHandle(predicate) {
      return new FilteredLocator(this._clone(), predicate);
    }
    /**
     * Maps the locator using the provided mapper.
     *
     * @internal
     */
    mapHandle(mapper) {
      return new MappedLocator(this._clone(), mapper);
    }
    /**
     * Clicks the located element.
     */
    click(options) {
      return firstValueFrom(_assertClassBrand(_Locator_brand, this, _click).call(this, options));
    }
    /**
     * Fills out the input identified by the locator using the provided value. The
     * type of the input is determined at runtime and the appropriate fill-out
     * method is chosen based on the type. `contenteditable`, select, textarea and
     * input elements are supported. For checkboxes, radio buttons and switches
     * specify a boolean value.
     */
    fill(value, options) {
      return firstValueFrom(_assertClassBrand(_Locator_brand, this, _fill).call(this, value, options));
    }
    /**
     * Hovers over the located element.
     */
    hover(options) {
      return firstValueFrom(_assertClassBrand(_Locator_brand, this, _hover).call(this, options));
    }
    /**
     * Scrolls the located element.
     */
    scroll(options) {
      return firstValueFrom(_assertClassBrand(_Locator_brand, this, _scroll).call(this, options));
    }
  }
  /**
   * @internal
   */
  function _click(options) {
    const signal = options?.signal;
    const cause = new Error('Locator.click');
    return this._wait(options).pipe(this.operators.conditions([_classPrivateFieldGet(_ensureElementIsInTheViewportIfNeeded, this), _classPrivateFieldGet(_waitForStableBoundingBoxIfNeeded, this), _classPrivateFieldGet(_waitForEnabledIfNeeded, this)], signal), tap(() => {
      return this.emit(exports.LocatorEvent.Action, undefined);
    }), mergeMap(handle => {
      return from(handle.click(options)).pipe(catchError(err => {
        void handle.dispose().catch(debugError);
        throw err;
      }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
  }
  function _fill(value, options) {
    const signal = options?.signal;
    const typingThreshold = options?.typingThreshold ?? 100;
    const cause = new Error('Locator.fill');
    return this._wait(options).pipe(this.operators.conditions([_classPrivateFieldGet(_ensureElementIsInTheViewportIfNeeded, this), _classPrivateFieldGet(_waitForStableBoundingBoxIfNeeded, this), _classPrivateFieldGet(_waitForEnabledIfNeeded, this)], signal), tap(() => {
      return this.emit(exports.LocatorEvent.Action, undefined);
    }), mergeMap(handle => {
      return from(handle.evaluate(el => {
        if (el instanceof HTMLSelectElement) {
          return 'select';
        }
        if (el instanceof HTMLTextAreaElement) {
          return 'typeable-input';
        }
        if (el instanceof HTMLInputElement) {
          switch (el.type) {
            case 'checkbox':
            case 'radio':
              return 'checkable-input';
            case 'text':
            case 'url':
            case 'tel':
            case 'search':
            case 'password':
            case 'number':
            case 'email':
              return 'typeable-input';
            default:
              return 'other-input';
          }
        }
        switch (el.getAttribute('role')) {
          case 'checkbox':
          case 'radio':
          case 'switch':
            return 'checkable-input';
        }
        if (el.isContentEditable) {
          return 'contenteditable';
        }
        return 'unknown';
      })).pipe(mergeMap(inputType => {
        const fillDirectly = () => {
          return from(handle.focus()).pipe(mergeMap(() => {
            return from(handle.evaluate((input, newValue) => {
              const element = input;
              const valString = String(newValue);
              const currentValue = element.isContentEditable ? element.innerText : element.value;
              if (currentValue === valString) {
                return;
              }
              if (element.isContentEditable) {
                element.innerText = valString;
              } else {
                element.value = valString;
              }
              element.dispatchEvent(new Event('input', {
                bubbles: true
              }));
              element.dispatchEvent(new Event('change', {
                bubbles: true
              }));
            }, value));
          }));
        };
        const toggleIfNeeded = () => {
          return from(handle.evaluate(toggleEl => {
            if (toggleEl.indeterminate || toggleEl.getAttribute('aria-checked') === 'mixed') {
              return 'mixed';
            }
            return toggleEl.checked || toggleEl.getAttribute('aria-checked') === 'true';
          })).pipe(mergeMap(currentState => {
            if (currentState === 'mixed' || currentState !== !!value) {
              return from(handle.click());
            }
            return of(undefined);
          }));
        };
        switch (inputType) {
          case 'checkable-input':
            return toggleIfNeeded();
          case 'select':
            return from(handle.select(value).then(noop));
          case 'contenteditable':
          case 'typeable-input':
            if (typeof value === 'string' && value.length < typingThreshold) {
              return from(handle.evaluate((input, newValue) => {
                const element = input;
                const valString = String(newValue);
                const currentValue = element.isContentEditable ? element.innerText : input.value;
                if (currentValue === valString) {
                  return '';
                }
                // Clear the input if the current value does not match the filled
                // out value.
                if (!valString.startsWith(currentValue) || !currentValue) {
                  if (element.isContentEditable) {
                    element.innerText = '';
                  } else {
                    input.value = '';
                  }
                  return valString;
                }
                // If the value is partially filled out, only type the rest. Move
                // cursor to the end of the common prefix.
                if (element.isContentEditable) {
                  element.innerText = '';
                  element.innerText = currentValue;
                } else {
                  input.value = '';
                  input.value = currentValue;
                }
                return valString.substring(currentValue.length);
              }, value)).pipe(mergeMap(textToType => {
                if (!textToType) {
                  return of(undefined);
                }
                return from(handle.type(textToType));
              }));
            }
            return fillDirectly();
          case 'other-input':
            return fillDirectly();
          case 'unknown':
            throw new Error(`Element cannot be filled out.`);
        }
      })).pipe(catchError(err => {
        void handle.dispose().catch(debugError);
        throw err;
      }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
  }
  function _hover(options) {
    const signal = options?.signal;
    const cause = new Error('Locator.hover');
    return this._wait(options).pipe(this.operators.conditions([_classPrivateFieldGet(_ensureElementIsInTheViewportIfNeeded, this), _classPrivateFieldGet(_waitForStableBoundingBoxIfNeeded, this)], signal), tap(() => {
      return this.emit(exports.LocatorEvent.Action, undefined);
    }), mergeMap(handle => {
      return from(handle.hover()).pipe(catchError(err => {
        void handle.dispose().catch(debugError);
        throw err;
      }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
  }
  function _scroll(options) {
    const signal = options?.signal;
    const cause = new Error('Locator.scroll');
    return this._wait(options).pipe(this.operators.conditions([_classPrivateFieldGet(_ensureElementIsInTheViewportIfNeeded, this), _classPrivateFieldGet(_waitForStableBoundingBoxIfNeeded, this)], signal), tap(() => {
      return this.emit(exports.LocatorEvent.Action, undefined);
    }), mergeMap(handle => {
      return from(handle.evaluate((el, scrollTop, scrollLeft) => {
        if (scrollTop !== undefined) {
          el.scrollTop = scrollTop;
        }
        if (scrollLeft !== undefined) {
          el.scrollLeft = scrollLeft;
        }
      }, options?.scrollTop, options?.scrollLeft)).pipe(catchError(err => {
        void handle.dispose().catch(debugError);
        throw err;
      }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
  }
  var _pageOrFrame = /*#__PURE__*/new WeakMap();
  var _func = /*#__PURE__*/new WeakMap();
  class FunctionLocator extends Locator {
    static create(pageOrFrame, func) {
      return new FunctionLocator(pageOrFrame, func).setTimeout('getDefaultTimeout' in pageOrFrame ? pageOrFrame.getDefaultTimeout() : pageOrFrame.page().getDefaultTimeout());
    }
    constructor(pageOrFrame, func) {
      super();
      _classPrivateFieldInitSpec(this, _pageOrFrame, void 0);
      _classPrivateFieldInitSpec(this, _func, void 0);
      _classPrivateFieldSet(_pageOrFrame, this, pageOrFrame);
      _classPrivateFieldSet(_func, this, func);
    }
    _clone() {
      return new FunctionLocator(_classPrivateFieldGet(_pageOrFrame, this), _classPrivateFieldGet(_func, this));
    }
    _wait(options) {
      const signal = options?.signal;
      return defer(() => {
        return from(_classPrivateFieldGet(_pageOrFrame, this).waitForFunction(_classPrivateFieldGet(_func, this), {
          timeout: this.timeout,
          signal
        }));
      }).pipe(throwIfEmpty());
    }
  }
  /**
   * @internal
   */
  var _delegate = /*#__PURE__*/new WeakMap();
  class DelegatedLocator extends Locator {
    constructor(delegate) {
      super();
      _classPrivateFieldInitSpec(this, _delegate, void 0);
      _classPrivateFieldSet(_delegate, this, delegate);
      this.copyOptions(_classPrivateFieldGet(_delegate, this));
    }
    get delegate() {
      return _classPrivateFieldGet(_delegate, this);
    }
    setTimeout(timeout) {
      const locator = super.setTimeout(timeout);
      _classPrivateFieldSet(_delegate, locator, _classPrivateFieldGet(_delegate, this).setTimeout(timeout));
      return locator;
    }
    setVisibility(visibility) {
      const locator = super.setVisibility(visibility);
      _classPrivateFieldSet(_delegate, locator, _classPrivateFieldGet(_delegate, locator).setVisibility(visibility));
      return locator;
    }
    setWaitForEnabled(value) {
      const locator = super.setWaitForEnabled(value);
      _classPrivateFieldSet(_delegate, locator, _classPrivateFieldGet(_delegate, this).setWaitForEnabled(value));
      return locator;
    }
    setEnsureElementIsInTheViewport(value) {
      const locator = super.setEnsureElementIsInTheViewport(value);
      _classPrivateFieldSet(_delegate, locator, _classPrivateFieldGet(_delegate, this).setEnsureElementIsInTheViewport(value));
      return locator;
    }
    setWaitForStableBoundingBox(value) {
      const locator = super.setWaitForStableBoundingBox(value);
      _classPrivateFieldSet(_delegate, locator, _classPrivateFieldGet(_delegate, this).setWaitForStableBoundingBox(value));
      return locator;
    }
  }
  /**
   * @internal
   */
  var _predicate = /*#__PURE__*/new WeakMap();
  class FilteredLocator extends DelegatedLocator {
    constructor(base, predicate) {
      super(base);
      _classPrivateFieldInitSpec(this, _predicate, void 0);
      _classPrivateFieldSet(_predicate, this, predicate);
    }
    _clone() {
      return new FilteredLocator(this.delegate.clone(), _classPrivateFieldGet(_predicate, this)).copyOptions(this);
    }
    _wait(options) {
      return this.delegate._wait(options).pipe(mergeMap(handle => {
        return from(Promise.resolve(_classPrivateFieldGet(_predicate, this).call(this, handle, options?.signal))).pipe(filter(value => {
          return value;
        }), map(() => {
          // SAFETY: It passed the predicate, so this is correct.
          return handle;
        }));
      }), throwIfEmpty());
    }
  }
  /**
   * @internal
   */
  var _mapper = /*#__PURE__*/new WeakMap();
  class MappedLocator extends DelegatedLocator {
    constructor(base, mapper) {
      super(base);
      _classPrivateFieldInitSpec(this, _mapper, void 0);
      _classPrivateFieldSet(_mapper, this, mapper);
    }
    _clone() {
      return new MappedLocator(this.delegate.clone(), _classPrivateFieldGet(_mapper, this)).copyOptions(this);
    }
    _wait(options) {
      return this.delegate._wait(options).pipe(mergeMap(handle => {
        return from(Promise.resolve(_classPrivateFieldGet(_mapper, this).call(this, handle, options?.signal)));
      }));
    }
  }
  /**
   * @internal
   */
  var _pageOrFrame2 = /*#__PURE__*/new WeakMap();
  var _selectorOrHandle = /*#__PURE__*/new WeakMap();
  var _waitForVisibilityIfNeeded = /*#__PURE__*/new WeakMap();
  class NodeLocator extends Locator {
    static create(pageOrFrame, selector) {
      return new NodeLocator(pageOrFrame, selector).setTimeout('getDefaultTimeout' in pageOrFrame ? pageOrFrame.getDefaultTimeout() : pageOrFrame.page().getDefaultTimeout());
    }
    static createFromHandle(pageOrFrame, handle) {
      return new NodeLocator(pageOrFrame, handle).setTimeout('getDefaultTimeout' in pageOrFrame ? pageOrFrame.getDefaultTimeout() : pageOrFrame.page().getDefaultTimeout());
    }
    constructor(pageOrFrame, selectorOrHandle) {
      super();
      _classPrivateFieldInitSpec(this, _pageOrFrame2, void 0);
      _classPrivateFieldInitSpec(this, _selectorOrHandle, void 0);
      /**
       * Waits for the element to become visible or hidden. visibility === 'visible'
       * means that the element has a computed style, the visibility property other
       * than 'hidden' or 'collapse' and non-empty bounding box. visibility ===
       * 'hidden' means the opposite of that.
       */
      _classPrivateFieldInitSpec(this, _waitForVisibilityIfNeeded, handle => {
        if (!this.visibility) {
          return EMPTY;
        }
        return (() => {
          switch (this.visibility) {
            case 'hidden':
              return defer(() => {
                return from(handle.isHidden());
              });
            case 'visible':
              return defer(() => {
                return from(handle.isVisible());
              });
          }
        })().pipe(first(identity), retry({
          delay: RETRY_DELAY
        }), ignoreElements());
      });
      _classPrivateFieldSet(_pageOrFrame2, this, pageOrFrame);
      _classPrivateFieldSet(_selectorOrHandle, this, selectorOrHandle);
    }
    _clone() {
      return new NodeLocator(_classPrivateFieldGet(_pageOrFrame2, this),
      // @ts-expect-error TSC does cannot parse private overloads.
      _classPrivateFieldGet(_selectorOrHandle, this)).copyOptions(this);
    }
    _wait(options) {
      const signal = options?.signal;
      return defer(() => {
        if (typeof _classPrivateFieldGet(_selectorOrHandle, this) === 'string') {
          return from(_classPrivateFieldGet(_pageOrFrame2, this).waitForSelector(_classPrivateFieldGet(_selectorOrHandle, this), {
            visible: false,
            timeout: this._timeout,
            signal
          }));
        } else {
          return of(_classPrivateFieldGet(_selectorOrHandle, this));
        }
      }).pipe(filter(value => {
        return value !== null;
      }), throwIfEmpty(), this.operators.conditions([_classPrivateFieldGet(_waitForVisibilityIfNeeded, this)], signal));
    }
  }
  function checkLocatorArray(locators) {
    for (const locator of locators) {
      if (!(locator instanceof Locator)) {
        throw new Error('Unknown locator for race candidate');
      }
    }
    return locators;
  }
  /**
   * @internal
   */
  var _locators = /*#__PURE__*/new WeakMap();
  class RaceLocator extends Locator {
    static create(locators) {
      const array = checkLocatorArray(locators);
      return new RaceLocator(array);
    }
    constructor(locators) {
      super();
      _classPrivateFieldInitSpec(this, _locators, void 0);
      _classPrivateFieldSet(_locators, this, locators);
    }
    _clone() {
      return new RaceLocator(_classPrivateFieldGet(_locators, this).map(locator => {
        return locator.clone();
      })).copyOptions(this);
    }
    _wait(options) {
      return race(..._classPrivateFieldGet(_locators, this).map(locator => {
        return locator._wait(options);
      }));
    }
  }
  /**
   * For observables coming from promises, a delay is needed, otherwise RxJS will
   * never yield in a permanent failure for a promise.
   *
   * We also don't want RxJS to do promise operations to often, so we bump the
   * delay up to 100ms.
   *
   * @internal
   */
  const RETRY_DELAY = 100;

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __runInitializers$5 = undefined && undefined.__runInitializers || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$5 = undefined && undefined.__esDecorate || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __addDisposableResource$7 = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$7 = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  var __setFunctionName$1 = undefined && undefined.__setFunctionName || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
      configurable: true,
      value: prefix ? "".concat(prefix, " ", name) : name
    });
  };
  /**
   * A given method will have it's `this` replaced with an isolated version of
   * `this` when decorated with this decorator.
   *
   * All changes of isolated `this` are reflected on the actual `this`.
   *
   * @internal
   */
  function bindIsolatedHandle(target, _) {
    return async function (...args) {
      // If the handle is already isolated, then we don't need to adopt it
      // again.
      if (this.realm === this.frame.isolatedRealm()) {
        return await target.call(this, ...args);
      }
      let adoptedThis;
      if (this['isolatedHandle']) {
        adoptedThis = this['isolatedHandle'];
      } else {
        this['isolatedHandle'] = adoptedThis = await this.frame.isolatedRealm().adoptHandle(this);
      }
      const result = await target.call(adoptedThis, ...args);
      // If the function returns `adoptedThis`, then we return `this`.
      if (result === adoptedThis) {
        return this;
      }
      // If the function returns a handle, transfer it into the current realm.
      if (result instanceof JSHandle) {
        return await this.realm.transferHandle(result);
      }
      // If the function returns an array of handlers, transfer them into the
      // current realm.
      if (Array.isArray(result)) {
        await Promise.all(result.map(async (item, index, result) => {
          if (item instanceof JSHandle) {
            result[index] = await this.realm.transferHandle(item);
          }
        }));
      }
      if (result instanceof Map) {
        await Promise.all([...result.entries()].map(async ([key, value]) => {
          if (value instanceof JSHandle) {
            result.set(key, await this.realm.transferHandle(value));
          }
        }));
      }
      return result;
    };
  }
  /**
   * ElementHandle represents an in-page DOM element.
   *
   * @remarks
   * ElementHandles can be created with the {@link Page.$} method.
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.goto('https://example.com');
   * const hrefElement = await page.$('a');
   * await hrefElement.click();
   * // ...
   * ```
   *
   * ElementHandle prevents the DOM element from being garbage-collected unless the
   * handle is {@link JSHandle.dispose | disposed}. ElementHandles are auto-disposed
   * when their associated frame is navigated away or the parent
   * context gets destroyed.
   *
   * ElementHandle instances can be used as arguments in {@link Page.$eval} and
   * {@link Page.evaluate} methods.
   *
   * If you're using TypeScript, ElementHandle takes a generic argument that
   * denotes the type of element the handle is holding within. For example, if you
   * have a handle to a `<select>` element, you can type it as
   * `ElementHandle<HTMLSelectElement>` and you get some nicer type checks.
   *
   * @public
   */
  let ElementHandle = ((_ElementHandle, _ElementHandle_brand) => {
    let _classSuper = JSHandle;
    let _instanceExtraInitializers = [];
    let _getProperty_decorators;
    let _getProperties_decorators;
    let _jsonValue_decorators;
    let _$_decorators;
    let _$$_decorators;
    let _private_$$_decorators;
    let _private_$$_descriptor;
    let _waitForSelector_decorators;
    let _isVisible_decorators;
    let _isHidden_decorators;
    let _toElement_decorators;
    let _clickablePoint_decorators;
    let _hover_decorators;
    let _click_decorators;
    let _drag_decorators;
    let _dragEnter_decorators;
    let _dragOver_decorators;
    let _drop_decorators;
    let _dragAndDrop_decorators;
    let _select_decorators;
    let _tap_decorators;
    let _touchStart_decorators;
    let _touchMove_decorators;
    let _touchEnd_decorators;
    let _focus_decorators;
    let _type_decorators;
    let _press_decorators;
    let _boundingBox_decorators;
    let _boxModel_decorators;
    let _screenshot_decorators;
    let _isIntersectingViewport_decorators;
    let _scrollIntoView_decorators;
    let _asLocator_decorators;
    return _ElementHandle_brand = /*#__PURE__*/new WeakSet(), _ElementHandle = class ElementHandle extends _classSuper {
      /**
       * @internal
       */
      constructor(_handle) {
        super();
        /**
         * Isolates {@link ElementHandle.$$} if needed.
         *
         * @internal
         */
        _classPrivateMethodInitSpec(this, _ElementHandle_brand);
        /**
         * @internal
         * Cached isolatedHandle to prevent
         * trying to adopt it multiple times
         */
        _defineProperty(this, "isolatedHandle", __runInitializers$5(this, _instanceExtraInitializers));
        /**
         * @internal
         */
        _defineProperty(this, "handle", void 0);
        this.handle = _handle;
        this[_isElementHandle] = true;
      }
      /**
       * @internal
       */
      get id() {
        return this.handle.id;
      }
      /**
       * @internal
       */
      get disposed() {
        return this.handle.disposed;
      }
      /**
       * @internal
       */
      async getProperty(propertyName) {
        return await this.handle.getProperty(propertyName);
      }
      /**
       * @internal
       */
      async getProperties() {
        return await this.handle.getProperties();
      }
      /**
       * @internal
       */
      async evaluate(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
        return await this.handle.evaluate(pageFunction, ...args);
      }
      /**
       * @internal
       */
      async evaluateHandle(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
        return await this.handle.evaluateHandle(pageFunction, ...args);
      }
      /**
       * @internal
       */
      async jsonValue() {
        return await this.handle.jsonValue();
      }
      /**
       * @internal
       */
      toString() {
        return this.handle.toString();
      }
      /**
       * @internal
       */
      remoteObject() {
        return this.handle.remoteObject();
      }
      /**
       * @internal
       */
      async dispose() {
        await Promise.all([this.handle.dispose(), this.isolatedHandle?.dispose()]);
      }
      /**
       * @internal
       */
      asElement() {
        return this;
      }
      /**
       * Queries the current element for an element matching the given selector.
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @returns A {@link ElementHandle | element handle} to the first element
       * matching the given selector. Otherwise, `null`.
       */
      async $(selector) {
        const {
          updatedSelector,
          QueryHandler
        } = getQueryHandlerAndSelector(selector);
        return await QueryHandler.queryOne(this, updatedSelector);
      }
      /**
       * Queries the current element for all elements matching the given selector.
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @returns An array of {@link ElementHandle | element handles} that point to
       * elements matching the given selector.
       */
      async $$(selector, options) {
        if (options?.isolate === false) {
          return await _assertClassBrand(_ElementHandle_brand, this, _$$impl).call(this, selector);
        }
        return await _classPrivateGetter(_ElementHandle_brand, this, _get_$$).call(this, selector);
      }
      /**
       * Runs the given function on the first element matching the given selector in
       * the current element.
       *
       * If the given function returns a promise, then this method will wait till
       * the promise resolves.
       *
       * @example
       *
       * ```ts
       * const tweetHandle = await page.$('.tweet');
       * expect(await tweetHandle.$eval('.like', node => node.innerText)).toBe(
       *   '100',
       * );
       * expect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe(
       *   '10',
       * );
       * ```
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @param pageFunction - The function to be evaluated in this element's page's
       * context. The first element matching the selector will be passed in as the
       * first argument.
       * @param args - Additional arguments to pass to `pageFunction`.
       * @returns A promise to the result of the function.
       */
      async $eval(selector, pageFunction, ...args) {
        const env_1 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
          const elementHandle = __addDisposableResource$7(env_1, await this.$(selector), false);
          if (!elementHandle) {
            throw new Error(`Error: failed to find element matching selector "${selector}"`);
          }
          return await elementHandle.evaluate(pageFunction, ...args);
        } catch (e_1) {
          env_1.error = e_1;
          env_1.hasError = true;
        } finally {
          __disposeResources$7(env_1);
        }
      }
      /**
       * Runs the given function on an array of elements matching the given selector
       * in the current element.
       *
       * If the given function returns a promise, then this method will wait till
       * the promise resolves.
       *
       * @example
       * HTML:
       *
       * ```html
       * <div class="feed">
       *   <div class="tweet">Hello!</div>
       *   <div class="tweet">Hi!</div>
       * </div>
       * ```
       *
       * JavaScript:
       *
       * ```ts
       * const feedHandle = await page.$('.feed');
       *
       * const listOfTweets = await feedHandle.$$eval('.tweet', nodes =>
       *   nodes.map(n => n.innerText),
       * );
       * ```
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @param pageFunction - The function to be evaluated in the element's page's
       * context. An array of elements matching the given selector will be passed to
       * the function as its first argument.
       * @param args - Additional arguments to pass to `pageFunction`.
       * @returns A promise to the result of the function.
       */
      async $$eval(selector, pageFunction, ...args) {
        const env_2 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
          const results = await this.$$(selector);
          const elements = __addDisposableResource$7(env_2, await this.evaluateHandle((_, ...elements) => {
            return elements;
          }, ...results), false);
          const [result] = await Promise.all([elements.evaluate(pageFunction, ...args), ...results.map(results => {
            return results.dispose();
          })]);
          return result;
        } catch (e_2) {
          env_2.error = e_2;
          env_2.hasError = true;
        } finally {
          __disposeResources$7(env_2);
        }
      }
      /**
       * Wait for an element matching the given selector to appear in the current
       * element.
       *
       * Unlike {@link Frame.waitForSelector}, this method does not work across
       * navigations or if the element is detached from DOM.
       *
       * @example
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       *
       * const browser = await puppeteer.launch();
       * const page = await browser.newPage();
       * let currentURL;
       * page
       *   .mainFrame()
       *   .waitForSelector('img')
       *   .then(() => console.log('First URL with image: ' + currentURL));
       *
       * for (currentURL of [
       *   'https://example.com',
       *   'https://google.com',
       *   'https://bbc.com',
       * ]) {
       *   await page.goto(currentURL);
       * }
       * await browser.close();
       * ```
       *
       * @param selector - The selector to query and wait for.
       * @param options - Options for customizing waiting behavior.
       * @returns An element matching the given selector.
       * @throws Throws if an element matching the given selector doesn't appear.
       */
      async waitForSelector(selector, options = {}) {
        const {
          updatedSelector,
          QueryHandler,
          polling
        } = getQueryHandlerAndSelector(selector);
        return await QueryHandler.waitFor(this, updatedSelector, {
          polling,
          ...options
        });
      }
      /**
       * An element is considered to be visible if all of the following is
       * true:
       *
       * - the element has
       *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle | computed styles}.
       *
       * - the element has a non-empty
       *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | bounding client rect}.
       *
       * - the element's {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility | visibility}
       *   is not `hidden` or `collapse`.
       */
      async isVisible() {
        return await _assertClassBrand(_ElementHandle_brand, this, _checkVisibility).call(this, true);
      }
      /**
       * An element is considered to be hidden if at least one of the following is true:
       *
       * - the element has no
       *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle | computed styles}.
       *
       * - the element has an empty
       *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | bounding client rect}.
       *
       * - the element's {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility | visibility}
       *   is `hidden` or `collapse`.
       */
      async isHidden() {
        return await _assertClassBrand(_ElementHandle_brand, this, _checkVisibility).call(this, false);
      }
      /**
       * Converts the current handle to the given element type.
       *
       * @example
       *
       * ```ts
       * const element: ElementHandle<Element> = await page.$(
       *   '.class-name-of-anchor',
       * );
       * // DO NOT DISPOSE `element`, this will be always be the same handle.
       * const anchor: ElementHandle<HTMLAnchorElement> =
       *   await element.toElement('a');
       * ```
       *
       * @param tagName - The tag name of the desired element type.
       * @throws An error if the handle does not match. **The handle will not be
       * automatically disposed.**
       */
      async toElement(tagName) {
        const isMatchingTagName = await this.evaluate((node, tagName) => {
          return node.nodeName === tagName.toUpperCase();
        }, tagName);
        if (!isMatchingTagName) {
          throw new Error(`Element is not a(n) \`${tagName}\` element`);
        }
        return this;
      }
      /**
       * Returns the middle point within an element unless a specific offset is provided.
       */
      async clickablePoint(offset) {
        const box = await _assertClassBrand(_ElementHandle_brand, this, _clickableBox).call(this);
        if (!box) {
          throw new Error('Node is either not clickable or not an Element');
        }
        if (offset !== undefined) {
          return {
            x: box.x + offset.x,
            y: box.y + offset.y
          };
        }
        return {
          x: box.x + box.width / 2,
          y: box.y + box.height / 2
        };
      }
      /**
       * This method scrolls element into view if needed, and then
       * uses {@link Page.mouse} to hover over the center of the element.
       * If the element is detached from DOM, the method throws an error.
       */
      async hover() {
        await this.scrollIntoViewIfNeeded();
        const {
          x,
          y
        } = await this.clickablePoint();
        await this.frame.page().mouse.move(x, y);
      }
      /**
       * This method scrolls element into view if needed, and then
       * uses {@link Page.mouse} to click in the center of the element.
       * If the element is detached from DOM, the method throws an error.
       */
      async click(options = {}) {
        await this.scrollIntoViewIfNeeded();
        const {
          x,
          y
        } = await this.clickablePoint(options.offset);
        try {
          await this.frame.page().mouse.click(x, y, options);
        } finally {
          if (options.debugHighlight) {
            await this.frame.page().evaluate((x, y) => {
              const highlight = document.createElement('div');
              highlight.innerHTML = `<style>
        @scope {
          :scope {
              position: fixed;
              left: ${x}px;
              top: ${y}px;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              animation: colorChange 10s 1 normal;
              animation-fill-mode: forwards;
          }

          @keyframes colorChange {
              from {
                  background-color: red;
              }
              to {
                  background-color: #FADADD00;
              }
          }
        }
      </style>`;
              highlight.addEventListener('animationend', () => {
                highlight.remove();
              }, {
                once: true
              });
              document.body.append(highlight);
            }, x, y);
          }
        }
      }
      /**
       * Drags an element over the given element or point.
       *
       * @returns DEPRECATED. When drag interception is enabled, the drag payload is
       * returned.
       */
      async drag(target) {
        await this.scrollIntoViewIfNeeded();
        const page = this.frame.page();
        if (page.isDragInterceptionEnabled()) {
          const source = await this.clickablePoint();
          if (target instanceof ElementHandle) {
            target = await target.clickablePoint();
          }
          return await page.mouse.drag(source, target);
        }
        try {
          if (!page._isDragging) {
            page._isDragging = true;
            await this.hover();
            await page.mouse.down();
          }
          if (target instanceof ElementHandle) {
            await target.hover();
          } else {
            await page.mouse.move(target.x, target.y);
          }
        } catch (error) {
          page._isDragging = false;
          throw error;
        }
      }
      /**
       * @deprecated Do not use. `dragenter` will automatically be performed during dragging.
       */
      async dragEnter(data = {
        items: [],
        dragOperationsMask: 1
      }) {
        const page = this.frame.page();
        await this.scrollIntoViewIfNeeded();
        const target = await this.clickablePoint();
        await page.mouse.dragEnter(target, data);
      }
      /**
       * @deprecated Do not use. `dragover` will automatically be performed during dragging.
       */
      async dragOver(data = {
        items: [],
        dragOperationsMask: 1
      }) {
        const page = this.frame.page();
        await this.scrollIntoViewIfNeeded();
        const target = await this.clickablePoint();
        await page.mouse.dragOver(target, data);
      }
      /**
       * @internal
       */
      async drop(dataOrElement = {
        items: [],
        dragOperationsMask: 1
      }) {
        const page = this.frame.page();
        if ('items' in dataOrElement) {
          await this.scrollIntoViewIfNeeded();
          const destination = await this.clickablePoint();
          await page.mouse.drop(destination, dataOrElement);
        } else {
          // Note if the rest errors, we still want dragging off because the errors
          // is most likely something implying the mouse is no longer dragging.
          await dataOrElement.drag(this);
          page._isDragging = false;
          await page.mouse.up();
        }
      }
      /**
       * @deprecated Use `ElementHandle.drop` instead.
       */
      async dragAndDrop(target, options) {
        const page = this.frame.page();
        assert(page.isDragInterceptionEnabled(), 'Drag Interception is not enabled!');
        await this.scrollIntoViewIfNeeded();
        const startPoint = await this.clickablePoint();
        const targetPoint = await target.clickablePoint();
        await page.mouse.dragAndDrop(startPoint, targetPoint, options);
      }
      /**
       * Triggers a `change` and `input` event once all the provided options have been
       * selected. If there's no `<select>` element matching `selector`, the method
       * throws an error.
       *
       * @example
       *
       * ```ts
       * handle.select('blue'); // single selection
       * handle.select('red', 'green', 'blue'); // multiple selections
       * ```
       *
       * @param values - Values of options to select. If the `<select>` has the
       * `multiple` attribute, all values are considered, otherwise only the first
       * one is taken into account.
       */
      async select(...values) {
        for (const value of values) {
          assert(isString(value), 'Values must be strings. Found value "' + value + '" of type "' + typeof value + '"');
        }
        return await this.evaluate((element, vals) => {
          const values = new Set(vals);
          if (!(element instanceof HTMLSelectElement)) {
            throw new Error('Element is not a <select> element.');
          }
          const selectedValues = new Set();
          if (!element.multiple) {
            for (const option of element.options) {
              option.selected = false;
            }
            for (const option of element.options) {
              if (values.has(option.value)) {
                option.selected = true;
                selectedValues.add(option.value);
                break;
              }
            }
          } else {
            for (const option of element.options) {
              option.selected = values.has(option.value);
              if (option.selected) {
                selectedValues.add(option.value);
              }
            }
          }
          element.dispatchEvent(new Event('input', {
            bubbles: true
          }));
          element.dispatchEvent(new Event('change', {
            bubbles: true
          }));
          return [...selectedValues.values()];
        }, values);
      }
      /**
       * This method scrolls element into view if needed, and then uses
       * {@link Touchscreen.tap} to tap in the center of the element.
       * If the element is detached from DOM, the method throws an error.
       */
      async tap() {
        await this.scrollIntoViewIfNeeded();
        const {
          x,
          y
        } = await this.clickablePoint();
        await this.frame.page().touchscreen.tap(x, y);
      }
      /**
       * This method scrolls the element into view if needed, and then
       * starts a touch in the center of the element.
       * @returns A {@link TouchHandle} representing the touch that was started
       */
      async touchStart() {
        await this.scrollIntoViewIfNeeded();
        const {
          x,
          y
        } = await this.clickablePoint();
        return await this.frame.page().touchscreen.touchStart(x, y);
      }
      /**
       * This method scrolls the element into view if needed, and then
       * moves the touch to the center of the element.
       * @param touch - An optional {@link TouchHandle}. If provided, this touch
       * will be moved. If not provided, the first active touch will be moved.
       */
      async touchMove(touch) {
        await this.scrollIntoViewIfNeeded();
        const {
          x,
          y
        } = await this.clickablePoint();
        if (touch) {
          return await touch.move(x, y);
        }
        await this.frame.page().touchscreen.touchMove(x, y);
      }
      async touchEnd() {
        await this.scrollIntoViewIfNeeded();
        await this.frame.page().touchscreen.touchEnd();
      }
      /**
       * Calls {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus | focus} on the element.
       */
      async focus() {
        await this.evaluate(element => {
          if (!(element instanceof HTMLElement)) {
            throw new Error('Cannot focus non-HTMLElement');
          }
          return element.focus();
        });
      }
      /**
       * Focuses the element, and then sends a `keydown`, `keypress`/`input`, and
       * `keyup` event for each character in the text.
       *
       * To press a special key, like `Control` or `ArrowDown`,
       * use {@link ElementHandle.press}.
       *
       * @example
       *
       * ```ts
       * await elementHandle.type('Hello'); // Types instantly
       * await elementHandle.type('World', {delay: 100}); // Types slower, like a user
       * ```
       *
       * @example
       * An example of typing into a text field and then submitting the form:
       *
       * ```ts
       * const elementHandle = await page.$('input');
       * await elementHandle.type('some text');
       * await elementHandle.press('Enter');
       * ```
       *
       * @param options - Delay in milliseconds. Defaults to 0.
       */
      async type(text, options) {
        await this.focus();
        await this.frame.page().keyboard.type(text, options);
      }
      /**
       * Focuses the element, and then uses {@link Keyboard.down} and {@link Keyboard.up}.
       *
       * @remarks
       * If `key` is a single character and no modifier keys besides `Shift`
       * are being held down, a `keypress`/`input` event will also be generated.
       * The `text` option can be specified to force an input event to be generated.
       *
       * **NOTE** Modifier keys DO affect `elementHandle.press`. Holding down `Shift`
       * will type the text in upper case.
       *
       * @param key - Name of key to press, such as `ArrowLeft`.
       * See {@link KeyInput} for a list of all key names.
       */
      async press(key, options) {
        await this.focus();
        await this.frame.page().keyboard.press(key, options);
      }
      /**
       * This method returns the bounding box of the element (relative to the main frame),
       * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
       * (example: `display: none`).
       */
      async boundingBox() {
        const box = await this.evaluate(element => {
          if (!(element instanceof Element)) {
            return null;
          }
          // Element is not visible.
          if (element.getClientRects().length === 0) {
            return null;
          }
          const rect = element.getBoundingClientRect();
          return {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
          };
        });
        if (!box) {
          return null;
        }
        const offset = await _assertClassBrand(_ElementHandle_brand, this, _getTopLeftCornerOfFrame).call(this);
        if (!offset) {
          return null;
        }
        return {
          x: box.x + offset.x,
          y: box.y + offset.y,
          height: box.height,
          width: box.width
        };
      }
      /**
       * This method returns boxes of the element,
       * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
       * (example: `display: none`).
       *
       * @remarks
       *
       * Boxes are represented as an array of points;
       * Each Point is an object `{x, y}`. Box points are sorted clock-wise.
       */
      async boxModel() {
        const model = await this.evaluate(element => {
          if (!(element instanceof Element)) {
            return null;
          }
          // Element is not visible.
          if (element.getClientRects().length === 0) {
            return null;
          }
          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);
          const offsets = {
            padding: {
              left: parseInt(style.paddingLeft, 10),
              top: parseInt(style.paddingTop, 10),
              right: parseInt(style.paddingRight, 10),
              bottom: parseInt(style.paddingBottom, 10)
            },
            margin: {
              left: -parseInt(style.marginLeft, 10),
              top: -parseInt(style.marginTop, 10),
              right: -parseInt(style.marginRight, 10),
              bottom: -parseInt(style.marginBottom, 10)
            },
            border: {
              left: parseInt(style.borderLeft, 10),
              top: parseInt(style.borderTop, 10),
              right: parseInt(style.borderRight, 10),
              bottom: parseInt(style.borderBottom, 10)
            }
          };
          const border = [{
            x: rect.left,
            y: rect.top
          }, {
            x: rect.left + rect.width,
            y: rect.top
          }, {
            x: rect.left + rect.width,
            y: rect.top + rect.height
          }, {
            x: rect.left,
            y: rect.top + rect.height
          }];
          const padding = transformQuadWithOffsets(border, offsets.border);
          const content = transformQuadWithOffsets(padding, offsets.padding);
          const margin = transformQuadWithOffsets(border, offsets.margin);
          return {
            content,
            padding,
            border,
            margin,
            width: rect.width,
            height: rect.height
          };
          function transformQuadWithOffsets(quad, offsets) {
            return [{
              x: quad[0].x + offsets.left,
              y: quad[0].y + offsets.top
            }, {
              x: quad[1].x - offsets.right,
              y: quad[1].y + offsets.top
            }, {
              x: quad[2].x - offsets.right,
              y: quad[2].y - offsets.bottom
            }, {
              x: quad[3].x + offsets.left,
              y: quad[3].y - offsets.bottom
            }];
          }
        });
        if (!model) {
          return null;
        }
        const offset = await _assertClassBrand(_ElementHandle_brand, this, _getTopLeftCornerOfFrame).call(this);
        if (!offset) {
          return null;
        }
        for (const attribute of ['content', 'padding', 'border', 'margin']) {
          for (const point of model[attribute]) {
            point.x += offset.x;
            point.y += offset.y;
          }
        }
        return model;
      }
      async screenshot(options = {}) {
        const {
          scrollIntoView = true,
          clip
        } = options;
        const page = this.frame.page();
        // Only scroll the element into view if the user wants it.
        if (scrollIntoView) {
          await this.scrollIntoViewIfNeeded();
        }
        const elementClip = await _assertClassBrand(_ElementHandle_brand, this, _nonEmptyVisibleBoundingBox).call(this);
        const [pageLeft, pageTop] = await this.evaluate(() => {
          if (!window.visualViewport) {
            throw new Error('window.visualViewport is not supported.');
          }
          return [window.visualViewport.pageLeft, window.visualViewport.pageTop];
        });
        elementClip.x += pageLeft;
        elementClip.y += pageTop;
        if (clip) {
          elementClip.x += clip.x;
          elementClip.y += clip.y;
          elementClip.height = clip.height;
          elementClip.width = clip.width;
        }
        return await page.screenshot({
          ...options,
          clip: elementClip
        });
      }
      /**
       * @internal
       */
      async assertConnectedElement() {
        const error = await this.evaluate(async element => {
          if (!element.isConnected) {
            return 'Node is detached from document';
          }
          if (element.nodeType !== Node.ELEMENT_NODE) {
            return 'Node is not of type HTMLElement';
          }
          return;
        });
        if (error) {
          throw new Error(error);
        }
      }
      /**
       * @internal
       */
      async scrollIntoViewIfNeeded() {
        if (await this.isIntersectingViewport({
          threshold: 1
        })) {
          return;
        }
        await this.scrollIntoView();
      }
      /**
       * Resolves to true if the element is visible in the current viewport. If an
       * element is an SVG, we check if the svg owner element is in the viewport
       * instead. See https://crbug.com/963246.
       *
       * @param options - Threshold for the intersection between 0 (no intersection) and 1
       * (full intersection). Defaults to 1.
       */
      async isIntersectingViewport(options = {}) {
        const env_5 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          await this.assertConnectedElement();
          // eslint-disable-next-line @puppeteer/use-using -- Returns `this`.
          const handle = await _assertClassBrand(_ElementHandle_brand, this, _asSVGElementHandle).call(this);
          const target = __addDisposableResource$7(env_5, handle && (await _assertClassBrand(_ElementHandle_brand, handle, _getOwnerSVGElement).call(handle)), false);
          return await (target ?? this).evaluate(async (element, threshold) => {
            const visibleRatio = await new Promise(resolve => {
              const observer = new IntersectionObserver(entries => {
                resolve(entries[0].intersectionRatio);
                observer.disconnect();
              });
              observer.observe(element);
            });
            return threshold === 1 ? visibleRatio === 1 : visibleRatio > threshold;
          }, options.threshold ?? 0);
        } catch (e_5) {
          env_5.error = e_5;
          env_5.hasError = true;
        } finally {
          __disposeResources$7(env_5);
        }
      }
      /**
       * Scrolls the element into view using either the automation protocol client
       * or by calling element.scrollIntoView.
       */
      async scrollIntoView() {
        await this.assertConnectedElement();
        await this.evaluate(async element => {
          element.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'instant'
          });
        });
      }
      /**
       * Creates a locator based on an ElementHandle. This would not allow
       * refreshing the element handle if it is stale but it allows re-using other
       * locator pre-conditions.
       */
      asLocator() {
        return NodeLocator.createFromHandle(this.frame, this);
      }
      /**
       * Returns true if an element is an SVGElement (included svg, path, rect
       * etc.).
       */
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _getProperty_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _getProperties_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _jsonValue_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _$_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _$$_decorators = [throwIfDisposed()];
      _private_$$_decorators = [bindIsolatedHandle];
      _waitForSelector_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _isVisible_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _isHidden_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _toElement_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _clickablePoint_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _hover_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _click_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _drag_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _dragEnter_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _dragOver_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _drop_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _dragAndDrop_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _select_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _tap_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _touchStart_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _touchMove_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _touchEnd_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _focus_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _type_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _press_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _boundingBox_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _boxModel_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _screenshot_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _isIntersectingViewport_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _scrollIntoView_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _asLocator_decorators = [throwIfDisposed()];
      __esDecorate$5(_ElementHandle, null, _getProperty_decorators, {
        kind: "method",
        name: "getProperty",
        static: false,
        private: false,
        access: {
          has: obj => "getProperty" in obj,
          get: obj => obj.getProperty
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _getProperties_decorators, {
        kind: "method",
        name: "getProperties",
        static: false,
        private: false,
        access: {
          has: obj => "getProperties" in obj,
          get: obj => obj.getProperties
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _jsonValue_decorators, {
        kind: "method",
        name: "jsonValue",
        static: false,
        private: false,
        access: {
          has: obj => "jsonValue" in obj,
          get: obj => obj.jsonValue
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _$_decorators, {
        kind: "method",
        name: "$",
        static: false,
        private: false,
        access: {
          has: obj => "$" in obj,
          get: obj => obj.$
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _$$_decorators, {
        kind: "method",
        name: "$$",
        static: false,
        private: false,
        access: {
          has: obj => "$$" in obj,
          get: obj => obj.$$
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, _private_$$_descriptor = {
        value: __setFunctionName$1(async function (selector) {
          return await _assertClassBrand(_ElementHandle_brand, this, _$$impl).call(this, selector);
        }, "#$$")
      }, _private_$$_decorators, {
        kind: "method",
        name: "#$$",
        static: false,
        private: true,
        access: {
          has: obj => _ElementHandle_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_ElementHandle_brand, obj, _get_$$)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _waitForSelector_decorators, {
        kind: "method",
        name: "waitForSelector",
        static: false,
        private: false,
        access: {
          has: obj => "waitForSelector" in obj,
          get: obj => obj.waitForSelector
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _isVisible_decorators, {
        kind: "method",
        name: "isVisible",
        static: false,
        private: false,
        access: {
          has: obj => "isVisible" in obj,
          get: obj => obj.isVisible
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _isHidden_decorators, {
        kind: "method",
        name: "isHidden",
        static: false,
        private: false,
        access: {
          has: obj => "isHidden" in obj,
          get: obj => obj.isHidden
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _toElement_decorators, {
        kind: "method",
        name: "toElement",
        static: false,
        private: false,
        access: {
          has: obj => "toElement" in obj,
          get: obj => obj.toElement
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _clickablePoint_decorators, {
        kind: "method",
        name: "clickablePoint",
        static: false,
        private: false,
        access: {
          has: obj => "clickablePoint" in obj,
          get: obj => obj.clickablePoint
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _hover_decorators, {
        kind: "method",
        name: "hover",
        static: false,
        private: false,
        access: {
          has: obj => "hover" in obj,
          get: obj => obj.hover
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _click_decorators, {
        kind: "method",
        name: "click",
        static: false,
        private: false,
        access: {
          has: obj => "click" in obj,
          get: obj => obj.click
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _drag_decorators, {
        kind: "method",
        name: "drag",
        static: false,
        private: false,
        access: {
          has: obj => "drag" in obj,
          get: obj => obj.drag
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _dragEnter_decorators, {
        kind: "method",
        name: "dragEnter",
        static: false,
        private: false,
        access: {
          has: obj => "dragEnter" in obj,
          get: obj => obj.dragEnter
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _dragOver_decorators, {
        kind: "method",
        name: "dragOver",
        static: false,
        private: false,
        access: {
          has: obj => "dragOver" in obj,
          get: obj => obj.dragOver
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _drop_decorators, {
        kind: "method",
        name: "drop",
        static: false,
        private: false,
        access: {
          has: obj => "drop" in obj,
          get: obj => obj.drop
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _dragAndDrop_decorators, {
        kind: "method",
        name: "dragAndDrop",
        static: false,
        private: false,
        access: {
          has: obj => "dragAndDrop" in obj,
          get: obj => obj.dragAndDrop
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _select_decorators, {
        kind: "method",
        name: "select",
        static: false,
        private: false,
        access: {
          has: obj => "select" in obj,
          get: obj => obj.select
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _tap_decorators, {
        kind: "method",
        name: "tap",
        static: false,
        private: false,
        access: {
          has: obj => "tap" in obj,
          get: obj => obj.tap
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _touchStart_decorators, {
        kind: "method",
        name: "touchStart",
        static: false,
        private: false,
        access: {
          has: obj => "touchStart" in obj,
          get: obj => obj.touchStart
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _touchMove_decorators, {
        kind: "method",
        name: "touchMove",
        static: false,
        private: false,
        access: {
          has: obj => "touchMove" in obj,
          get: obj => obj.touchMove
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _touchEnd_decorators, {
        kind: "method",
        name: "touchEnd",
        static: false,
        private: false,
        access: {
          has: obj => "touchEnd" in obj,
          get: obj => obj.touchEnd
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _focus_decorators, {
        kind: "method",
        name: "focus",
        static: false,
        private: false,
        access: {
          has: obj => "focus" in obj,
          get: obj => obj.focus
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _type_decorators, {
        kind: "method",
        name: "type",
        static: false,
        private: false,
        access: {
          has: obj => "type" in obj,
          get: obj => obj.type
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _press_decorators, {
        kind: "method",
        name: "press",
        static: false,
        private: false,
        access: {
          has: obj => "press" in obj,
          get: obj => obj.press
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _boundingBox_decorators, {
        kind: "method",
        name: "boundingBox",
        static: false,
        private: false,
        access: {
          has: obj => "boundingBox" in obj,
          get: obj => obj.boundingBox
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _boxModel_decorators, {
        kind: "method",
        name: "boxModel",
        static: false,
        private: false,
        access: {
          has: obj => "boxModel" in obj,
          get: obj => obj.boxModel
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _screenshot_decorators, {
        kind: "method",
        name: "screenshot",
        static: false,
        private: false,
        access: {
          has: obj => "screenshot" in obj,
          get: obj => obj.screenshot
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _isIntersectingViewport_decorators, {
        kind: "method",
        name: "isIntersectingViewport",
        static: false,
        private: false,
        access: {
          has: obj => "isIntersectingViewport" in obj,
          get: obj => obj.isIntersectingViewport
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _scrollIntoView_decorators, {
        kind: "method",
        name: "scrollIntoView",
        static: false,
        private: false,
        access: {
          has: obj => "scrollIntoView" in obj,
          get: obj => obj.scrollIntoView
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$5(_ElementHandle, null, _asLocator_decorators, {
        kind: "method",
        name: "asLocator",
        static: false,
        private: false,
        access: {
          has: obj => "asLocator" in obj,
          get: obj => obj.asLocator
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(_ElementHandle, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    })(), _ElementHandle;
    function _get_$$(_this2) {
      return _private_$$_descriptor.value;
    }
    /**
     * Implementation for {@link ElementHandle.$$}.
     *
     * @internal
     */
    async function _$$impl(selector) {
      const {
        updatedSelector,
        QueryHandler
      } = getQueryHandlerAndSelector(selector);
      return await AsyncIterableUtil.collect(QueryHandler.queryAll(this, updatedSelector));
    }
    async function _checkVisibility(visibility) {
      return await this.evaluate(async (element, PuppeteerUtil, visibility) => {
        return Boolean(PuppeteerUtil.checkVisibility(element, visibility));
      }, LazyArg.create(context => {
        return context.puppeteerUtil;
      }), visibility);
    }
    async function _clickableBox() {
      const boxes = await this.evaluate(element => {
        if (!(element instanceof Element)) {
          return null;
        }
        return [...element.getClientRects()].map(rect => {
          return {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
          };
        });
      });
      if (!boxes?.length) {
        return null;
      }
      await _assertClassBrand(_ElementHandle_brand, this, _intersectBoundingBoxesWithFrame).call(this, boxes);
      let frame = this.frame;
      let parentFrame;
      while (parentFrame = frame?.parentFrame()) {
        const env_3 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const handle = __addDisposableResource$7(env_3, await frame.frameElement(), false);
          if (!handle) {
            throw new Error('Unsupported frame type');
          }
          const parentBox = await handle.evaluate(element => {
            // Element is not visible.
            if (element.getClientRects().length === 0) {
              return null;
            }
            const rect = element.getBoundingClientRect();
            const style = window.getComputedStyle(element);
            return {
              left: rect.left + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10),
              top: rect.top + parseInt(style.paddingTop, 10) + parseInt(style.borderTopWidth, 10)
            };
          });
          if (!parentBox) {
            return null;
          }
          for (const box of boxes) {
            box.x += parentBox.left;
            box.y += parentBox.top;
          }
          await _assertClassBrand(_ElementHandle_brand, handle, _intersectBoundingBoxesWithFrame).call(handle, boxes);
          frame = parentFrame;
        } catch (e_3) {
          env_3.error = e_3;
          env_3.hasError = true;
        } finally {
          __disposeResources$7(env_3);
        }
      }
      const box = boxes.find(box => {
        return box.width >= 1 && box.height >= 1;
      });
      if (!box) {
        return null;
      }
      return {
        x: box.x,
        y: box.y,
        height: box.height,
        width: box.width
      };
    }
    async function _intersectBoundingBoxesWithFrame(boxes) {
      const {
        documentWidth,
        documentHeight
      } = await this.frame.isolatedRealm().evaluate(() => {
        return {
          documentWidth: document.documentElement.clientWidth,
          documentHeight: document.documentElement.clientHeight
        };
      });
      for (const box of boxes) {
        intersectBoundingBox(box, documentWidth, documentHeight);
      }
    }
    async function _getTopLeftCornerOfFrame() {
      const point = {
        x: 0,
        y: 0
      };
      let frame = this.frame;
      let parentFrame;
      while (parentFrame = frame?.parentFrame()) {
        const env_4 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const handle = __addDisposableResource$7(env_4, await frame.frameElement(), false);
          if (!handle) {
            throw new Error('Unsupported frame type');
          }
          const parentBox = await handle.evaluate(element => {
            // Element is not visible.
            if (element.getClientRects().length === 0) {
              return null;
            }
            const rect = element.getBoundingClientRect();
            const style = window.getComputedStyle(element);
            return {
              left: rect.left + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10),
              top: rect.top + parseInt(style.paddingTop, 10) + parseInt(style.borderTopWidth, 10)
            };
          });
          if (!parentBox) {
            return null;
          }
          point.x += parentBox.left;
          point.y += parentBox.top;
          frame = parentFrame;
        } catch (e_4) {
          env_4.error = e_4;
          env_4.hasError = true;
        } finally {
          __disposeResources$7(env_4);
        }
      }
      return point;
    }
    async function _nonEmptyVisibleBoundingBox() {
      const box = await this.boundingBox();
      assert(box, 'Node is either not visible or not an HTMLElement');
      assert(box.width !== 0, 'Node has 0 width.');
      assert(box.height !== 0, 'Node has 0 height.');
      return box;
    }
    async function _asSVGElementHandle() {
      if (await this.evaluate(element => {
        return element instanceof SVGElement;
      })) {
        return this;
      } else {
        return null;
      }
    }
    async function _getOwnerSVGElement() {
      // SVGSVGElement.ownerSVGElement === null.
      return await this.evaluateHandle(element => {
        if (element instanceof SVGSVGElement) {
          return element;
        }
        return element.ownerSVGElement;
      });
    }
  })();
  function intersectBoundingBox(box, width, height) {
    box.width = Math.max(box.x >= 0 ? Math.min(width - box.x, box.width) : Math.min(width, box.width + box.x), 0);
    box.height = Math.max(box.y >= 0 ? Math.min(height - box.y, box.height) : Math.min(height, box.height + box.y), 0);
    box.x = Math.max(box.x, 0);
    box.y = Math.max(box.y, 0);
  }

  /**
   * @license
   * Copyright 2026 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * {@link Extension} represents a browser extension installed in the browser.
   * It provides access to the extension's ID, name, and version, as well as
   * methods for interacting with the extension's background workers and pages.
   *
   * @example
   * To get all extensions installed in the browser:
   *
   * ```ts
   * const extensions = await browser.extensions();
   * for (const [id, extension] of extensions) {
   *   console.log(extension.name, id);
   * }
   * ```
   *
   * @experimental
   * @public
   */
  var _id2 = /*#__PURE__*/new WeakMap();
  var _version = /*#__PURE__*/new WeakMap();
  var _name = /*#__PURE__*/new WeakMap();
  var _path = /*#__PURE__*/new WeakMap();
  var _enabled = /*#__PURE__*/new WeakMap();
  class Extension {
    /**
     * @internal
     */
    constructor(id, version, name, path, enabled) {
      _classPrivateFieldInitSpec(this, _id2, void 0);
      _classPrivateFieldInitSpec(this, _version, void 0);
      _classPrivateFieldInitSpec(this, _name, void 0);
      _classPrivateFieldInitSpec(this, _path, void 0);
      _classPrivateFieldInitSpec(this, _enabled, void 0);
      if (!id || !version) {
        throw new Error('Extension ID and version are required');
      }
      _classPrivateFieldSet(_id2, this, id);
      _classPrivateFieldSet(_version, this, version);
      _classPrivateFieldSet(_name, this, name);
      _classPrivateFieldSet(_path, this, path);
      _classPrivateFieldSet(_enabled, this, enabled);
    }
    /**
     * Whether the extension is enabled.
     *
     * @public
     */
    get enabled() {
      return _classPrivateFieldGet(_enabled, this);
    }
    /**
     * The path in the file system where the extension is located.
     *
     * @public
     */
    get path() {
      return _classPrivateFieldGet(_path, this);
    }
    /**
     * The version of the extension as specified in its manifest.
     *
     * @public
     */
    get version() {
      return _classPrivateFieldGet(_version, this);
    }
    /**
     * The name of the extension as specified in its manifest.
     *
     * @public
     */
    get name() {
      return _classPrivateFieldGet(_name, this);
    }
    /**
     * The unique identifier of the extension.
     *
     * @public
     */
    get id() {
      return _classPrivateFieldGet(_id2, this);
    }
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __runInitializers$4 = undefined && undefined.__runInitializers || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$4 = undefined && undefined.__esDecorate || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __addDisposableResource$6 = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$6 = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  /**
   * We use symbols to prevent external parties listening to these events.
   * They are internal to Puppeteer.
   *
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/no-namespace
  exports.FrameEvent = void 0;
  (function (FrameEvent) {
    FrameEvent.FrameNavigated = Symbol('Frame.FrameNavigated');
    FrameEvent.FrameSwapped = Symbol('Frame.FrameSwapped');
    FrameEvent.LifecycleEvent = Symbol('Frame.LifecycleEvent');
    FrameEvent.FrameNavigatedWithinDocument = Symbol('Frame.FrameNavigatedWithinDocument');
    FrameEvent.FrameDetached = Symbol('Frame.FrameDetached');
    FrameEvent.FrameSwappedByActivation = Symbol('Frame.FrameSwappedByActivation');
  })(exports.FrameEvent || (exports.FrameEvent = {}));
  /**
   * @internal
   */
  const throwIfDetached = throwIfDisposed(frame => {
    return `Attempted to use detached Frame '${frame._id}'.`;
  });
  /**
   * Represents a DOM frame.
   *
   * To understand frames, you can think of frames as `<iframe>` elements. Just
   * like iframes, frames can be nested, and when JavaScript is executed in a
   * frame, the JavaScript does not affect frames inside the ambient frame the
   * JavaScript executes in.
   *
   * @example
   * At any point in time, {@link Page | pages} expose their current frame
   * tree via the {@link Page.mainFrame} and {@link Frame.childFrames} methods.
   *
   * @example
   * An example of dumping frame tree:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.goto('https://www.google.com/chrome/browser/canary.html');
   * dumpFrameTree(page.mainFrame(), '');
   * await browser.close();
   *
   * function dumpFrameTree(frame, indent) {
   *   console.log(indent + frame.url());
   *   for (const child of frame.childFrames()) {
   *     dumpFrameTree(child, indent + '  ');
   *   }
   * }
   * ```
   *
   * @example
   * An example of getting text from an iframe element:
   *
   * ```ts
   * const frames = page.frames();
   * let frame = null;
   * for (const currentFrame of frames) {
   *   const frameElement = await currentFrame.frameElement();
   *   const name = await frameElement.evaluate(el => el.getAttribute('name'));
   *   if (name === 'myframe') {
   *     frame = currentFrame;
   *     break;
   *   }
   * }
   * if (frame) {
   *   const text = await frame.$eval(
   *     '.selector',
   *     element => element.textContent,
   *   );
   *   console.log(text);
   * } else {
   *   console.error('Frame with name "myframe" not found.');
   * }
   * ```
   *
   * @remarks
   * Frame lifecycles are controlled by three events that are all dispatched on
   * the parent {@link Frame.page | page}:
   *
   * - {@link PageEvent.FrameAttached}
   * - {@link PageEvent.FrameNavigated}
   * - {@link PageEvent.FrameDetached}
   *
   * @public
   */
  let Frame = ((_Frame, _document, _Frame_brand) => {
    let _classSuper = EventEmitter;
    let _instanceExtraInitializers = [];
    let _frameElement_decorators;
    let _evaluateHandle_decorators;
    let _evaluate_decorators;
    let _locator_decorators;
    let _$_decorators;
    let _$$_decorators;
    let _$eval_decorators;
    let _$$eval_decorators;
    let _waitForSelector_decorators;
    let _waitForFunction_decorators;
    let _content_decorators;
    let _addScriptTag_decorators;
    let _addStyleTag_decorators;
    let _click_decorators;
    let _focus_decorators;
    let _hover_decorators;
    let _select_decorators;
    let _tap_decorators;
    let _type_decorators;
    let _title_decorators;
    return _document = /*#__PURE__*/new WeakMap(), _Frame_brand = /*#__PURE__*/new WeakSet(), _Frame = class Frame extends _classSuper {
      /**
       * @internal
       */
      constructor() {
        super();
        /**
         * @internal
         */
        _classPrivateMethodInitSpec(this, _Frame_brand);
        /**
         * @internal
         */
        _defineProperty(this, "_id", __runInitializers$4(this, _instanceExtraInitializers));
        /**
         * @internal
         */
        _defineProperty(this, "_parentId", void 0);
        /**
         * @internal
         */
        _defineProperty(this, "_name", void 0);
        /**
         * @internal
         */
        _defineProperty(this, "_hasStartedLoading", false);
        _classPrivateFieldInitSpec(this, _document, void 0);
      }
      /**
       * Used to clear the document handle that has been destroyed.
       *
       * @internal
       */
      clearDocumentHandle() {
        _classPrivateFieldSet(_document, this, undefined);
      }
      /**
       * @returns The frame element associated with this frame (if any).
       */
      async frameElement() {
        const env_1 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const parentFrame = this.parentFrame();
          if (!parentFrame) {
            return null;
          }
          const list = __addDisposableResource$6(env_1, await parentFrame.isolatedRealm().evaluateHandle(() => {
            return document.querySelectorAll('iframe,frame');
          }), false);
          for await (const iframe_1 of transposeIterableHandle(list)) {
            const env_2 = {
              stack: [],
              error: void 0,
              hasError: false
            };
            try {
              const iframe = __addDisposableResource$6(env_2, iframe_1, false);
              const frame = await iframe.contentFrame();
              if (frame?._id === this._id) {
                return await parentFrame.mainRealm().adoptHandle(iframe);
              }
            } catch (e_1) {
              env_2.error = e_1;
              env_2.hasError = true;
            } finally {
              __disposeResources$6(env_2);
            }
          }
          return null;
        } catch (e_2) {
          env_1.error = e_2;
          env_1.hasError = true;
        } finally {
          __disposeResources$6(env_1);
        }
      }
      /**
       * Behaves identically to {@link Page.evaluateHandle} except it's run within
       * the context of this frame.
       *
       * See {@link Page.evaluateHandle} for details.
       */
      async evaluateHandle(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
        return await this.mainRealm().evaluateHandle(pageFunction, ...args);
      }
      /**
       * Behaves identically to {@link Page.evaluate} except it's run within
       * the context of this frame.
       *
       * See {@link Page.evaluate} for details.
       */
      async evaluate(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
        return await this.mainRealm().evaluate(pageFunction, ...args);
      }
      /**
       * @internal
       */
      locator(input) {
        if (typeof input === 'string') {
          return NodeLocator.create(this, input);
        } else {
          return FunctionLocator.create(this, input);
        }
      }
      /**
       * Queries the frame for an element matching the given selector.
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       *
       * @returns A {@link ElementHandle | element handle} to the first element
       * matching the given selector. Otherwise, `null`.
       */
      async $(selector) {
        // eslint-disable-next-line @puppeteer/use-using -- This is cached.
        const document = await _assertClassBrand(_Frame_brand, this, _document2).call(this);
        return await document.$(selector);
      }
      /**
       * Queries the frame for all elements matching the given selector.
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       *
       * @returns An array of {@link ElementHandle | element handles} that point to
       * elements matching the given selector.
       */
      async $$(selector, options) {
        // eslint-disable-next-line @puppeteer/use-using -- This is cached.
        const document = await _assertClassBrand(_Frame_brand, this, _document2).call(this);
        return await document.$$(selector, options);
      }
      /**
       * Runs the given function on the first element matching the given selector in
       * the frame.
       *
       * If the given function returns a promise, then this method will wait till
       * the promise resolves.
       *
       * @example
       *
       * ```ts
       * const searchValue = await frame.$eval('#search', el => el.value);
       * ```
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @param pageFunction - The function to be evaluated in the frame's context.
       * The first element matching the selector will be passed to the function as
       * its first argument.
       * @param args - Additional arguments to pass to `pageFunction`.
       * @returns A promise to the result of the function.
       */
      async $eval(selector, pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
        // eslint-disable-next-line @puppeteer/use-using -- This is cached.
        const document = await _assertClassBrand(_Frame_brand, this, _document2).call(this);
        return await document.$eval(selector, pageFunction, ...args);
      }
      /**
       * Runs the given function on an array of elements matching the given selector
       * in the frame.
       *
       * If the given function returns a promise, then this method will wait till
       * the promise resolves.
       *
       * @example
       *
       * ```ts
       * const divsCounts = await frame.$$eval('div', divs => divs.length);
       * ```
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @param pageFunction - The function to be evaluated in the frame's context.
       * An array of elements matching the given selector will be passed to the
       * function as its first argument.
       * @param args - Additional arguments to pass to `pageFunction`.
       * @returns A promise to the result of the function.
       */
      async $$eval(selector, pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
        // eslint-disable-next-line @puppeteer/use-using -- This is cached.
        const document = await _assertClassBrand(_Frame_brand, this, _document2).call(this);
        return await document.$$eval(selector, pageFunction, ...args);
      }
      /**
       * Waits for an element matching the given selector to appear in the frame.
       *
       * This method works across navigations.
       *
       * @example
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       *
       * const browser = await puppeteer.launch();
       * const page = await browser.newPage();
       * let currentURL;
       * page
       *   .mainFrame()
       *   .waitForSelector('img')
       *   .then(() => console.log('First URL with image: ' + currentURL));
       *
       * for (currentURL of [
       *   'https://example.com',
       *   'https://google.com',
       *   'https://bbc.com',
       * ]) {
       *   await page.goto(currentURL);
       * }
       * await browser.close();
       * ```
       *
       * @param selector - The selector to query and wait for.
       * @param options - Options for customizing waiting behavior.
       * @returns An element matching the given selector.
       * @throws Throws if an element matching the given selector doesn't appear.
       */
      async waitForSelector(selector, options = {}) {
        const {
          updatedSelector,
          QueryHandler,
          polling
        } = getQueryHandlerAndSelector(selector);
        return await QueryHandler.waitFor(this, updatedSelector, {
          polling,
          ...options
        });
      }
      /**
       * @example
       * The `waitForFunction` can be used to observe viewport size change:
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       *
       * const browser = await puppeteer.launch();
       * const page = await browser.newPage();
       * const watchDog = page
       *   .mainFrame()
       *   .waitForFunction('window.innerWidth < 100');
       * page.setViewport({width: 50, height: 50});
       * await watchDog;
       * await browser.close();
       * ```
       *
       * To pass arguments from Node.js to the predicate of `page.waitForFunction` function:
       *
       * ```ts
       * const selector = '.foo';
       * await frame.waitForFunction(
       *   selector => !!document.querySelector(selector),
       *   {}, // empty options object
       *   selector,
       * );
       * ```
       *
       * @param pageFunction - the function to evaluate in the frame context.
       * @param options - options to configure the polling method, timeout and signal.
       * @param args - arguments to pass to the `pageFunction`.
       * @returns the promise which resolve when the `pageFunction` returns a truthy value.
       */
      async waitForFunction(pageFunction, options = {}, ...args) {
        return await this.mainRealm().waitForFunction(pageFunction, options, ...args);
      }
      /**
       * The full HTML contents of the frame, including the DOCTYPE.
       */
      async content() {
        return await this.evaluate(() => {
          let content = '';
          for (const node of document.childNodes) {
            switch (node) {
              case document.documentElement:
                content += document.documentElement.outerHTML;
                break;
              default:
                content += new XMLSerializer().serializeToString(node);
                break;
            }
          }
          return content;
        });
      }
      /**
       * @internal
       */
      async setFrameContent(content) {
        throw new Error("unsupported")
      }
      /**
       * The frame's `name` attribute as specified in the tag.
       *
       * @remarks
       * If the name is empty, it returns the `id` attribute instead.
       *
       * @remarks
       * This value is calculated once when the frame is created, and will not
       * update if the attribute is changed later.
       *
       * @deprecated Use
       *
       * ```ts
       * const element = await frame.frameElement();
       * const nameOrId = await element.evaluate(frame => frame.name ?? frame.id);
       * ```
       */
      name() {
        return this._name || '';
      }
      /**
       * Is`true` if the frame has been detached. Otherwise, `false`.
       *
       * @deprecated Use the `detached` getter.
       */
      isDetached() {
        return this.detached;
      }
      /**
       * @internal
       */
      get disposed() {
        return this.detached;
      }
      /**
       * Adds a `<script>` tag into the page with the desired url or content.
       *
       * @param options - Options for the script.
       * @returns An {@link ElementHandle | element handle} to the injected
       * `<script>` element.
       */
      async addScriptTag(options) {
        let {
          content = '',
          type
        } = options;
        const {
          path
        } = options;
        if (+!!options.url + +!!path + +!!content !== 1) {
          throw new Error('Exactly one of `url`, `path`, or `content` must be specified.');
        }
        if (path) {
          content = await environment.value.fs.promises.readFile(path, 'utf8');
          content += `//# sourceURL=${path.replace(/\n/g, '')}`;
        }
        type = type ?? 'text/javascript';
        return await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({
          url,
          id,
          type,
          content
        }) => {
          return await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = type;
            script.text = content;
            script.addEventListener('error', event => {
              reject(new Error(event.message ?? 'Could not load script'));
            }, {
              once: true
            });
            if (id) {
              script.id = id;
            }
            if (url) {
              throw new Error("unsupported")
              script.addEventListener('load', () => {
                resolve(script);
              }, {
                once: true
              });
              document.head.appendChild(script);
            } else {
              document.head.appendChild(script);
              resolve(script);
            }
          });
        }, {
          ...options,
          type,
          content
        }));
      }
      /**
       * @internal
       */
      async addStyleTag(options) {
        let {
          content = ''
        } = options;
        const {
          path
        } = options;
        if (+!!options.url + +!!path + +!!content !== 1) {
          throw new Error('Exactly one of `url`, `path`, or `content` must be specified.');
        }
        if (path) {
          content = await environment.value.fs.promises.readFile(path, 'utf8');
          content += '/*# sourceURL=' + path.replace(/\n/g, '') + '*/';
          options.content = content;
        }
        return await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({
          url,
          content
        }) => {
          return await new Promise((resolve, reject) => {
            let element;
            if (!url) {
              element = document.createElement('style');
              element.appendChild(document.createTextNode(content));
            } else {
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              throw new Error("unsupported")
              element = link;
            }
            element.addEventListener('load', () => {
              resolve(element);
            }, {
              once: true
            });
            element.addEventListener('error', event => {
              reject(new Error(event.message ?? 'Could not load style'));
            }, {
              once: true
            });
            document.head.appendChild(element);
            return element;
          });
        }, options));
      }
      /**
       * Clicks the first element found that matches `selector`.
       *
       * @remarks
       * If `click()` triggers a navigation event and there's a separate
       * `page.waitForNavigation()` promise to be resolved, you may end up with a
       * race condition that yields unexpected results. The correct pattern for
       * click and wait for navigation is the following:
       *
       * ```ts
       * const [response] = await Promise.all([
       *   page.waitForNavigation(waitOptions),
       *   frame.click(selector, clickOptions),
       * ]);
       * ```
       *
       * @param selector - The selector to query for.
       */
      async click(selector, options = {}) {
        const env_3 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const handle = __addDisposableResource$6(env_3, await this.$(selector), false);
          assert(handle, `No element found for selector: ${selector}`);
          await handle.click(options);
          await handle.dispose();
        } catch (e_3) {
          env_3.error = e_3;
          env_3.hasError = true;
        } finally {
          __disposeResources$6(env_3);
        }
      }
      /**
       * Focuses the first element that matches the `selector`.
       *
       * @param selector - The selector to query for.
       * @throws Throws if there's no element matching `selector`.
       */
      async focus(selector) {
        const env_4 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const handle = __addDisposableResource$6(env_4, await this.$(selector), false);
          assert(handle, `No element found for selector: ${selector}`);
          await handle.focus();
        } catch (e_4) {
          env_4.error = e_4;
          env_4.hasError = true;
        } finally {
          __disposeResources$6(env_4);
        }
      }
      /**
       * Hovers the pointer over the center of the first element that matches the
       * `selector`.
       *
       * @param selector - The selector to query for.
       * @throws Throws if there's no element matching `selector`.
       */
      async hover(selector) {
        const env_5 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const handle = __addDisposableResource$6(env_5, await this.$(selector), false);
          assert(handle, `No element found for selector: ${selector}`);
          await handle.hover();
        } catch (e_5) {
          env_5.error = e_5;
          env_5.hasError = true;
        } finally {
          __disposeResources$6(env_5);
        }
      }
      /**
       * Selects a set of value on the first `<select>` element that matches the
       * `selector`.
       *
       * @example
       *
       * ```ts
       * frame.select('select#colors', 'blue'); // single selection
       * frame.select('select#colors', 'red', 'green', 'blue'); // multiple selections
       * ```
       *
       * @param selector - The selector to query for.
       * @param values - The array of values to select. If the `<select>` has the
       * `multiple` attribute, all values are considered, otherwise only the first
       * one is taken into account.
       * @returns the list of values that were successfully selected.
       * @throws Throws if there's no `<select>` matching `selector`.
       */
      async select(selector, ...values) {
        const env_6 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const handle = __addDisposableResource$6(env_6, await this.$(selector), false);
          assert(handle, `No element found for selector: ${selector}`);
          return await handle.select(...values);
        } catch (e_6) {
          env_6.error = e_6;
          env_6.hasError = true;
        } finally {
          __disposeResources$6(env_6);
        }
      }
      /**
       * Taps the first element that matches the `selector`.
       *
       * @param selector - The selector to query for.
       * @throws Throws if there's no element matching `selector`.
       */
      async tap(selector) {
        const env_7 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const handle = __addDisposableResource$6(env_7, await this.$(selector), false);
          assert(handle, `No element found for selector: ${selector}`);
          await handle.tap();
        } catch (e_7) {
          env_7.error = e_7;
          env_7.hasError = true;
        } finally {
          __disposeResources$6(env_7);
        }
      }
      /**
       * Sends a `keydown`, `keypress`/`input`, and `keyup` event for each character
       * in the text.
       *
       * @remarks
       * To press a special key, like `Control` or `ArrowDown`, use
       * {@link Keyboard.press}.
       *
       * @example
       *
       * ```ts
       * await frame.type('#mytextarea', 'Hello'); // Types instantly
       * await frame.type('#mytextarea', 'World', {delay: 100}); // Types slower, like a user
       * ```
       *
       * @param selector - the selector for the element to type into. If there are
       * multiple the first will be used.
       * @param text - text to type into the element
       * @param options - takes one option, `delay`, which sets the time to wait
       * between key presses in milliseconds. Defaults to `0`.
       */
      async type(selector, text, options) {
        const env_8 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const handle = __addDisposableResource$6(env_8, await this.$(selector), false);
          assert(handle, `No element found for selector: ${selector}`);
          await handle.type(text, options);
        } catch (e_8) {
          env_8.error = e_8;
          env_8.hasError = true;
        } finally {
          __disposeResources$6(env_8);
        }
      }
      /**
       * The frame's title.
       */
      async title() {
        return await this.isolatedRealm().evaluate(() => {
          return document.title;
        });
      }
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _frameElement_decorators = [throwIfDetached];
      _evaluateHandle_decorators = [throwIfDetached];
      _evaluate_decorators = [throwIfDetached];
      _locator_decorators = [throwIfDetached];
      _$_decorators = [throwIfDetached];
      _$$_decorators = [throwIfDetached];
      _$eval_decorators = [throwIfDetached];
      _$$eval_decorators = [throwIfDetached];
      _waitForSelector_decorators = [throwIfDetached];
      _waitForFunction_decorators = [throwIfDetached];
      _content_decorators = [throwIfDetached];
      _addScriptTag_decorators = [throwIfDetached];
      _addStyleTag_decorators = [throwIfDetached];
      _click_decorators = [throwIfDetached];
      _focus_decorators = [throwIfDetached];
      _hover_decorators = [throwIfDetached];
      _select_decorators = [throwIfDetached];
      _tap_decorators = [throwIfDetached];
      _type_decorators = [throwIfDetached];
      _title_decorators = [throwIfDetached];
      __esDecorate$4(_Frame, null, _frameElement_decorators, {
        kind: "method",
        name: "frameElement",
        static: false,
        private: false,
        access: {
          has: obj => "frameElement" in obj,
          get: obj => obj.frameElement
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _evaluateHandle_decorators, {
        kind: "method",
        name: "evaluateHandle",
        static: false,
        private: false,
        access: {
          has: obj => "evaluateHandle" in obj,
          get: obj => obj.evaluateHandle
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _evaluate_decorators, {
        kind: "method",
        name: "evaluate",
        static: false,
        private: false,
        access: {
          has: obj => "evaluate" in obj,
          get: obj => obj.evaluate
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _locator_decorators, {
        kind: "method",
        name: "locator",
        static: false,
        private: false,
        access: {
          has: obj => "locator" in obj,
          get: obj => obj.locator
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _$_decorators, {
        kind: "method",
        name: "$",
        static: false,
        private: false,
        access: {
          has: obj => "$" in obj,
          get: obj => obj.$
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _$$_decorators, {
        kind: "method",
        name: "$$",
        static: false,
        private: false,
        access: {
          has: obj => "$$" in obj,
          get: obj => obj.$$
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _$eval_decorators, {
        kind: "method",
        name: "$eval",
        static: false,
        private: false,
        access: {
          has: obj => "$eval" in obj,
          get: obj => obj.$eval
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _$$eval_decorators, {
        kind: "method",
        name: "$$eval",
        static: false,
        private: false,
        access: {
          has: obj => "$$eval" in obj,
          get: obj => obj.$$eval
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _waitForSelector_decorators, {
        kind: "method",
        name: "waitForSelector",
        static: false,
        private: false,
        access: {
          has: obj => "waitForSelector" in obj,
          get: obj => obj.waitForSelector
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _waitForFunction_decorators, {
        kind: "method",
        name: "waitForFunction",
        static: false,
        private: false,
        access: {
          has: obj => "waitForFunction" in obj,
          get: obj => obj.waitForFunction
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _content_decorators, {
        kind: "method",
        name: "content",
        static: false,
        private: false,
        access: {
          has: obj => "content" in obj,
          get: obj => obj.content
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _addScriptTag_decorators, {
        kind: "method",
        name: "addScriptTag",
        static: false,
        private: false,
        access: {
          has: obj => "addScriptTag" in obj,
          get: obj => obj.addScriptTag
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _addStyleTag_decorators, {
        kind: "method",
        name: "addStyleTag",
        static: false,
        private: false,
        access: {
          has: obj => "addStyleTag" in obj,
          get: obj => obj.addStyleTag
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _click_decorators, {
        kind: "method",
        name: "click",
        static: false,
        private: false,
        access: {
          has: obj => "click" in obj,
          get: obj => obj.click
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _focus_decorators, {
        kind: "method",
        name: "focus",
        static: false,
        private: false,
        access: {
          has: obj => "focus" in obj,
          get: obj => obj.focus
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _hover_decorators, {
        kind: "method",
        name: "hover",
        static: false,
        private: false,
        access: {
          has: obj => "hover" in obj,
          get: obj => obj.hover
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _select_decorators, {
        kind: "method",
        name: "select",
        static: false,
        private: false,
        access: {
          has: obj => "select" in obj,
          get: obj => obj.select
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _tap_decorators, {
        kind: "method",
        name: "tap",
        static: false,
        private: false,
        access: {
          has: obj => "tap" in obj,
          get: obj => obj.tap
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _type_decorators, {
        kind: "method",
        name: "type",
        static: false,
        private: false,
        access: {
          has: obj => "type" in obj,
          get: obj => obj.type
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$4(_Frame, null, _title_decorators, {
        kind: "method",
        name: "title",
        static: false,
        private: false,
        access: {
          has: obj => "title" in obj,
          get: obj => obj.title
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(_Frame, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    })(), _Frame;
    function _document2() {
      if (!_classPrivateFieldGet(_document, this)) {
        _classPrivateFieldSet(_document, this, this.mainRealm().evaluateHandle(() => {
          return document;
        }));
      }
      return _classPrivateFieldGet(_document, this);
    }
  })();

  /**
   * The default cooperative request interception resolution priority
   *
   * @public
   */
  const DEFAULT_INTERCEPT_RESOLUTION_PRIORITY = 0;
  /**
   * Represents an HTTP request sent by a page.
   * @remarks
   *
   * Whenever the page sends a request, such as for a network resource, the
   * following events are emitted by Puppeteer's `page`:
   *
   * - `request`: emitted when the request is issued by the page.
   *
   * - `requestfinished` - emitted when the response body is downloaded and the
   *   request is complete.
   *
   * If request fails at some point, then instead of `requestfinished` event the
   * `requestfailed` event is emitted.
   *
   * All of these events provide an instance of `HTTPRequest` representing the
   * request that occurred:
   *
   * ```
   * page.on('request', request => ...)
   * ```
   *
   * NOTE: HTTP Error responses, such as 404 or 503, are still successful
   * responses from HTTP standpoint, so request will complete with
   * `requestfinished` event.
   *
   * If request gets a 'redirect' response, the request is successfully finished
   * with the `requestfinished` event, and a new request is issued to a
   * redirected url.
   *
   * @public
   */
  class HTTPRequest {
    /**
     * @internal
     */
    constructor() {
      /**
       * @internal
       */
      _defineProperty(this, "_interceptionId", void 0);
      /**
       * @internal
       */
      _defineProperty(this, "_failureText", null);
      /**
       * @internal
       */
      _defineProperty(this, "_response", null);
      /**
       * @internal
       */
      _defineProperty(this, "_fromMemoryCache", false);
      /**
       * @internal
       */
      _defineProperty(this, "_redirectChain", []);
      /**
       * @internal
       */
      _defineProperty(this, "interception", {
        enabled: false,
        handled: false,
        handlers: [],
        resolutionState: {
          action: exports.InterceptResolutionAction.None
        },
        requestOverrides: {},
        response: null,
        abortReason: null
      });
    }
    /**
     * The `ContinueRequestOverrides` that will be used
     * if the interception is allowed to continue (ie, `abort()` and
     * `respond()` aren't called).
     */
    continueRequestOverrides() {
      return this.interception.requestOverrides;
    }
    /**
     * The `ResponseForRequest` that gets used if the
     * interception is allowed to respond (ie, `abort()` is not called).
     */
    responseForRequest() {
      return this.interception.response;
    }
    /**
     * The most recent reason for aborting the request
     */
    abortErrorReason() {
      return this.interception.abortReason;
    }
    /**
     * An InterceptResolutionState object describing the current resolution
     * action and priority.
     *
     * InterceptResolutionState contains:
     * action: InterceptResolutionAction
     * priority?: number
     *
     * InterceptResolutionAction is one of: `abort`, `respond`, `continue`,
     * `disabled`, `none`, or `already-handled`.
     */
    interceptResolutionState() {
      if (!this.interception.enabled) {
        return {
          action: exports.InterceptResolutionAction.Disabled
        };
      }
      if (this.interception.handled) {
        return {
          action: exports.InterceptResolutionAction.AlreadyHandled
        };
      }
      return {
        ...this.interception.resolutionState
      };
    }
    /**
     * Is `true` if the intercept resolution has already been handled,
     * `false` otherwise.
     */
    isInterceptResolutionHandled() {
      return this.interception.handled;
    }
    /**
     * Adds an async request handler to the processing queue.
     * Deferred handlers are not guaranteed to execute in any particular order,
     * but they are guaranteed to resolve before the request interception
     * is finalized.
     */
    enqueueInterceptAction(pendingHandler) {
      this.interception.handlers.push(pendingHandler);
    }
    /**
     * Awaits pending interception handlers and then decides how to fulfill
     * the request interception.
     */
    async finalizeInterceptions() {
      await this.interception.handlers.reduce((promiseChain, interceptAction) => {
        return promiseChain.then(interceptAction);
      }, Promise.resolve());
      this.interception.handlers = [];
      const {
        action
      } = this.interceptResolutionState();
      switch (action) {
        case 'abort':
          return await this._abort(this.interception.abortReason);
        case 'respond':
          if (this.interception.response === null) {
            throw new Error('Response is missing for the interception');
          }
          return await this._respond(this.interception.response);
        case 'continue':
          return await this._continue(this.interception.requestOverrides);
      }
    }
    /**
     * @internal
     */
    verifyInterception() {
      assert(this.interception.enabled, 'Request Interception is not enabled!');
      assert(!this.interception.handled, 'Request is already handled!');
    }
    /**
     * Continues request with optional request overrides.
     *
     * @example
     *
     * ```ts
     * await page.setRequestInterception(true);
     * page.on('request', request => {
     *   // Override headers
     *   const headers = Object.assign({}, request.headers(), {
     *     foo: 'bar', // set "foo" header
     *     origin: undefined, // remove "origin" header
     *   });
     *   request.continue({headers});
     * });
     * ```
     *
     * @param overrides - optional overrides to apply to the request.
     * @param priority - If provided, intercept is resolved using cooperative
     * handling rules. Otherwise, intercept is resolved immediately.
     *
     * @remarks
     *
     * To use this, request interception should be enabled with
     * {@link Page.setRequestInterception}.
     *
     * Exception is immediately thrown if the request interception is not enabled.
     */
    async continue(overrides = {}, priority) {
      this.verifyInterception();
      if (!this.canBeIntercepted()) {
        return;
      }
      if (priority === undefined) {
        return await this._continue(overrides);
      }
      this.interception.requestOverrides = overrides;
      if (this.interception.resolutionState.priority === undefined || priority > this.interception.resolutionState.priority) {
        this.interception.resolutionState = {
          action: exports.InterceptResolutionAction.Continue,
          priority
        };
        return;
      }
      if (priority === this.interception.resolutionState.priority) {
        if (this.interception.resolutionState.action === 'abort' || this.interception.resolutionState.action === 'respond') {
          return;
        }
        this.interception.resolutionState.action = exports.InterceptResolutionAction.Continue;
      }
      return;
    }
    /**
     * Fulfills a request with the given response.
     *
     * @example
     * An example of fulfilling all requests with 404 responses:
     *
     * ```ts
     * await page.setRequestInterception(true);
     * page.on('request', request => {
     *   request.respond({
     *     status: 404,
     *     contentType: 'text/plain',
     *     body: 'Not Found!',
     *   });
     * });
     * ```
     *
     * NOTE: Mocking responses for dataURL requests is not supported.
     * Calling `request.respond` for a dataURL request is a noop.
     *
     * @param response - the response to fulfill the request with.
     * @param priority - If provided, intercept is resolved using
     * cooperative handling rules. Otherwise, intercept is resolved
     * immediately.
     *
     * @remarks
     *
     * To use this, request
     * interception should be enabled with {@link Page.setRequestInterception}.
     *
     * Exception is immediately thrown if the request interception is not enabled.
     */
    async respond(response, priority) {
      this.verifyInterception();
      if (!this.canBeIntercepted()) {
        return;
      }
      if (priority === undefined) {
        return await this._respond(response);
      }
      this.interception.response = response;
      if (this.interception.resolutionState.priority === undefined || priority > this.interception.resolutionState.priority) {
        this.interception.resolutionState = {
          action: exports.InterceptResolutionAction.Respond,
          priority
        };
        return;
      }
      if (priority === this.interception.resolutionState.priority) {
        if (this.interception.resolutionState.action === 'abort') {
          return;
        }
        this.interception.resolutionState.action = exports.InterceptResolutionAction.Respond;
      }
    }
    /**
     * Aborts a request.
     *
     * @param errorCode - optional error code to provide.
     * @param priority - If provided, intercept is resolved using
     * cooperative handling rules. Otherwise, intercept is resolved
     * immediately.
     *
     * @remarks
     *
     * To use this, request interception should be enabled with
     * {@link Page.setRequestInterception}. If it is not enabled, this method will
     * throw an exception immediately.
     */
    async abort(errorCode = 'failed', priority) {
      this.verifyInterception();
      if (!this.canBeIntercepted()) {
        return;
      }
      const errorReason = errorReasons[errorCode];
      assert(errorReason, 'Unknown error code: ' + errorCode);
      if (priority === undefined) {
        return await this._abort(errorReason);
      }
      this.interception.abortReason = errorReason;
      if (this.interception.resolutionState.priority === undefined || priority >= this.interception.resolutionState.priority) {
        this.interception.resolutionState = {
          action: exports.InterceptResolutionAction.Abort,
          priority
        };
        return;
      }
    }
    /**
     * @internal
     */
    static getResponse(body) {
      // Needed to get the correct byteLength
      const byteBody = isString(body) ? new TextEncoder().encode(body) : body;
      return {
        contentLength: byteBody.byteLength,
        base64: typedArrayToBase64(byteBody)
      };
    }
  }
  /**
   * @public
   */
  exports.InterceptResolutionAction = void 0;
  (function (InterceptResolutionAction) {
    InterceptResolutionAction["Abort"] = "abort";
    InterceptResolutionAction["Respond"] = "respond";
    InterceptResolutionAction["Continue"] = "continue";
    InterceptResolutionAction["Disabled"] = "disabled";
    InterceptResolutionAction["None"] = "none";
    InterceptResolutionAction["AlreadyHandled"] = "already-handled";
  })(exports.InterceptResolutionAction || (exports.InterceptResolutionAction = {}));
  /**
   * @internal
   */
  function headersArray(headers) {
    const result = [];
    for (const name in headers) {
      const value = headers[name];
      if (!Object.is(value, undefined)) {
        const values = Array.isArray(value) ? value : [value];
        result.push(...values.map(value => {
          return {
            name,
            value: value + ''
          };
        }));
      }
    }
    return result;
  }
  /**
   * @internal
   *
   * @remarks
   * List taken from {@link https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml}
   * with extra 306 and 418 codes.
   */
  const STATUS_TEXTS = {
    '100': 'Continue',
    '101': 'Switching Protocols',
    '102': 'Processing',
    '103': 'Early Hints',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '207': 'Multi-Status',
    '208': 'Already Reported',
    '226': 'IM Used',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '306': 'Switch Proxy',
    '307': 'Temporary Redirect',
    '308': 'Permanent Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Payload Too Large',
    '414': 'URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Range Not Satisfiable',
    '417': 'Expectation Failed',
    '418': "I'm a teapot",
    '421': 'Misdirected Request',
    '422': 'Unprocessable Entity',
    '423': 'Locked',
    '424': 'Failed Dependency',
    '425': 'Too Early',
    '426': 'Upgrade Required',
    '428': 'Precondition Required',
    '429': 'Too Many Requests',
    '431': 'Request Header Fields Too Large',
    '451': 'Unavailable For Legal Reasons',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    '506': 'Variant Also Negotiates',
    '507': 'Insufficient Storage',
    '508': 'Loop Detected',
    '510': 'Not Extended',
    '511': 'Network Authentication Required'
  };
  const errorReasons = {
    aborted: 'Aborted',
    accessdenied: 'AccessDenied',
    addressunreachable: 'AddressUnreachable',
    blockedbyclient: 'BlockedByClient',
    blockedbyresponse: 'BlockedByResponse',
    connectionaborted: 'ConnectionAborted',
    connectionclosed: 'ConnectionClosed',
    connectionfailed: 'ConnectionFailed',
    connectionrefused: 'ConnectionRefused',
    connectionreset: 'ConnectionReset',
    internetdisconnected: 'InternetDisconnected',
    namenotresolved: 'NameNotResolved',
    timedout: 'TimedOut',
    failed: 'Failed'
  };
  /**
   * @internal
   */
  function handleError(error) {
    // Firefox throws an invalid argument error with a message starting with
    // 'Expected "header" [...]'.
    if (error.originalMessage.includes('Invalid header') || error.originalMessage.includes('Unsafe header') || error.originalMessage.includes('Expected "header"') ||
    // WebDriver BiDi error for invalid values, for example, headers.
    error.originalMessage.includes('invalid argument')) {
      throw error;
    }
    // In certain cases, protocol will return error if the request was
    // already canceled or the page was closed. We should tolerate these
    // errors.
    debugError(error);
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * The HTTPResponse class represents responses which are received by the
   * {@link Page} class.
   *
   * @public
   */
  class HTTPResponse {
    /**
     * @internal
     */
    constructor() {}
    /**
     * True if the response was successful (status in the range 200-299).
     */
    ok() {
      // TODO: document === 0 case?
      const status = this.status();
      return status === 0 || status >= 200 && status <= 299;
    }
    /**
     * {@inheritDoc HTTPResponse.content}
     */
    async buffer() {
      const content = await this.content();
      return Buffer.from(content);
    }
    /**
     * Promise which resolves to a text (utf8) representation of response body.
     *
     * @remarks
     *
     * This method will throw if the content is not utf-8 string
     */
    async text() {
      const content = await this.content();
      return new TextDecoder('utf-8', {
        fatal: true
      }).decode(content);
    }
    /**
     * Promise which resolves to a JSON representation of response body.
     *
     * @remarks
     *
     * This method will throw if the response body is not parsable via
     * `JSON.parse`.
     */
    async json() {
      const content = await this.text();
      return JSON.parse(content);
    }
  }

  /**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  function createIncrementalIdGenerator() {
    let id = 0;
    return () => {
      if (id === Number.MAX_SAFE_INTEGER) {
        id = 0;
      }
      return ++id;
    };
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Keyboard provides an api for managing a virtual keyboard.
   * The high level api is {@link Keyboard."type"},
   * which takes raw characters and generates proper keydown, keypress/input,
   * and keyup events on your page.
   *
   * @remarks
   * For finer control, you can use {@link Keyboard.down},
   * {@link Keyboard.up}, and {@link Keyboard.sendCharacter}
   * to manually fire events as if they were generated from a real keyboard.
   *
   * On macOS, keyboard shortcuts like `⌘ A` -\> Select All do not work.
   * See {@link https://github.com/puppeteer/puppeteer/issues/1313 | #1313}.
   *
   * @example
   * An example of holding down `Shift` in order to select and delete some text:
   *
   * ```ts
   * await page.keyboard.type('Hello World!');
   * await page.keyboard.press('ArrowLeft');
   *
   * await page.keyboard.down('Shift');
   * for (let i = 0; i < ' World'.length; i++)
   *   await page.keyboard.press('ArrowLeft');
   * await page.keyboard.up('Shift');
   *
   * await page.keyboard.press('Backspace');
   * // Result text will end up saying 'Hello!'
   * ```
   *
   * @example
   * An example of pressing `A`
   *
   * ```ts
   * await page.keyboard.down('Shift');
   * await page.keyboard.press('KeyA');
   * await page.keyboard.up('Shift');
   * ```
   *
   * @public
   */
  class Keyboard {
    /**
     * @internal
     */
    constructor() {}
  }
  /**
   * Enum of valid mouse buttons.
   *
   * @public
   */
  const MouseButton = Object.freeze({
    Left: 'left',
    Right: 'right',
    Middle: 'middle',
    Back: 'back',
    Forward: 'forward'
  });
  /**
   * The Mouse class operates in main-frame CSS pixels
   * relative to the top-left corner of the viewport.
   *
   * @remarks
   * Every `page` object has its own Mouse, accessible with {@link Page.mouse}.
   *
   * @example
   *
   * ```ts
   * // Using ‘page.mouse’ to trace a 100x100 square.
   * await page.mouse.move(0, 0);
   * await page.mouse.down();
   * await page.mouse.move(0, 100);
   * await page.mouse.move(100, 100);
   * await page.mouse.move(100, 0);
   * await page.mouse.move(0, 0);
   * await page.mouse.up();
   * ```
   *
   * **Note**: The mouse events trigger synthetic `MouseEvent`s.
   * This means that it does not fully replicate the functionality of what a normal user
   * would be able to do with their mouse.
   *
   * For example, dragging and selecting text is not possible using `page.mouse`.
   * Instead, you can use the {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection | `DocumentOrShadowRoot.getSelection()`} functionality implemented in the platform.
   *
   * @example
   * For example, if you want to select all content between nodes:
   *
   * ```ts
   * await page.evaluate(
   *   (from, to) => {
   *     const selection = from.getRootNode().getSelection();
   *     const range = document.createRange();
   *     range.setStartBefore(from);
   *     range.setEndAfter(to);
   *     selection.removeAllRanges();
   *     selection.addRange(range);
   *   },
   *   fromJSHandle,
   *   toJSHandle,
   * );
   * ```
   *
   * If you then would want to copy-paste your selection, you can use the clipboard api:
   *
   * ```ts
   * // The clipboard api does not allow you to copy, unless the tab is focused.
   * await page.bringToFront();
   * await page.evaluate(() => {
   *   // Copy the selected content to the clipboard
   *   document.execCommand('copy');
   *   // Obtain the content of the clipboard as a string
   *   return navigator.clipboard.readText();
   * });
   * ```
   *
   * **Note**: If you want access to the clipboard API,
   * you have to give it permission to do so:
   *
   * ```ts
   * await browser
   *   .defaultBrowserContext()
   *   .overridePermissions('<your origin>', [
   *     'clipboard-read',
   *     'clipboard-write',
   *   ]);
   * ```
   *
   * @public
   */
  class Mouse {
    /**
     * @internal
     */
    constructor() {}
  }
  /**
   * The Touchscreen class exposes touchscreen events.
   * @public
   */
  class Touchscreen {
    /**
     * @internal
     */
    constructor() {
      /**
       * @internal
       */
      _defineProperty(this, "idGenerator", createIncrementalIdGenerator());
      /**
       * @internal
       */
      _defineProperty(this, "touches", []);
    }
    /**
     * @internal
     */
    removeHandle(handle) {
      const index = this.touches.indexOf(handle);
      if (index === -1) {
        return;
      }
      this.touches.splice(index, 1);
    }
    /**
     * Dispatches a `touchstart` and `touchend` event.
     * @param x - Horizontal position of the tap.
     * @param y - Vertical position of the tap.
     */
    async tap(x, y) {
      const touch = await this.touchStart(x, y);
      await touch.end();
    }
    /**
     * Dispatches a `touchMove` event on the first touch that is active.
     * @param x - Horizontal position of the move.
     * @param y - Vertical position of the move.
     *
     * @remarks
     *
     * Not every `touchMove` call results in a `touchmove` event being emitted,
     * depending on the browser's optimizations. For example, Chrome
     * {@link https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model | throttles}
     * touch move events.
     */
    async touchMove(x, y) {
      const touch = this.touches[0];
      if (!touch) {
        throw new TouchError('Must start a new Touch first');
      }
      return await touch.move(x, y);
    }
    /**
     * Dispatches a `touchend` event on the first touch that is active.
     */
    async touchEnd() {
      const touch = this.touches.shift();
      if (!touch) {
        throw new TouchError('Must start a new Touch first');
      }
      await touch.end();
    }
  }

  /**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  const DEFAULT_TIMEOUT = 30000;
  /**
   * @internal
   */
  var _defaultTimeout = /*#__PURE__*/new WeakMap();
  var _defaultNavigationTimeout = /*#__PURE__*/new WeakMap();
  class TimeoutSettings {
    constructor() {
      _classPrivateFieldInitSpec(this, _defaultTimeout, void 0);
      _classPrivateFieldInitSpec(this, _defaultNavigationTimeout, void 0);
      _classPrivateFieldSet(_defaultTimeout, this, null);
      _classPrivateFieldSet(_defaultNavigationTimeout, this, null);
    }
    setDefaultTimeout(timeout) {
      _classPrivateFieldSet(_defaultTimeout, this, timeout);
    }
    setDefaultNavigationTimeout(timeout) {
      _classPrivateFieldSet(_defaultNavigationTimeout, this, timeout);
    }
    navigationTimeout() {
      if (_classPrivateFieldGet(_defaultNavigationTimeout, this) !== null) {
        return _classPrivateFieldGet(_defaultNavigationTimeout, this);
      }
      if (_classPrivateFieldGet(_defaultTimeout, this) !== null) {
        return _classPrivateFieldGet(_defaultTimeout, this);
      }
      return DEFAULT_TIMEOUT;
    }
    timeout() {
      if (_classPrivateFieldGet(_defaultTimeout, this) !== null) {
        return _classPrivateFieldGet(_defaultTimeout, this);
      }
      return DEFAULT_TIMEOUT;
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __runInitializers$3 = undefined && undefined.__runInitializers || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$3 = undefined && undefined.__esDecorate || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __addDisposableResource$5 = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$5 = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  /**
   * @internal
   */
  function setDefaultScreenshotOptions(options) {
    options.optimizeForSpeed ??= false;
    options.type ??= 'png';
    options.fromSurface ??= true;
    options.fullPage ??= false;
    options.omitBackground ??= false;
    options.encoding ??= 'binary';
    options.captureBeyondViewport ??= true;
  }
  /**
   * Page provides methods to interact with a single tab or
   * {@link https://developer.chrome.com/extensions/background_pages | extension background page}
   * in the browser.
   *
   * :::note
   *
   * One Browser instance might have multiple Page instances.
   *
   * :::
   *
   * @example
   * This example creates a page, navigates it to a URL, and then saves a screenshot:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.goto('https://example.com');
   * await page.screenshot({path: 'screenshot.png'});
   * await browser.close();
   * ```
   *
   * The Page class extends from Puppeteer's {@link EventEmitter} class and will
   * emit various events which are documented in the {@link PageEvent} enum.
   *
   * @example
   * This example logs a message for a single page `load` event:
   *
   * ```ts
   * page.once('load', () => console.log('Page loaded!'));
   * ```
   *
   * To unsubscribe from events use the {@link EventEmitter.off} method:
   *
   * ```ts
   * function logRequest(interceptedRequest) {
   *   console.log('A request was made:', interceptedRequest.url());
   * }
   * page.on('request', logRequest);
   * // Sometime later...
   * page.off('request', logRequest);
   * ```
   *
   * @public
   */
  let Page = ((_ref2, _Page, _requestHandlers, _inflight$, _screencastSessionCount, _startScreencastPromise, _Page_brand) => {
    let _classSuper = EventEmitter;
    let _instanceExtraInitializers = [];
    let _screenshot_decorators;
    return _requestHandlers = /*#__PURE__*/new WeakMap(), _inflight$ = /*#__PURE__*/new WeakMap(), _screencastSessionCount = /*#__PURE__*/new WeakMap(), _startScreencastPromise = /*#__PURE__*/new WeakMap(), _Page_brand = /*#__PURE__*/new WeakSet(), _ref2 = (_screenshot_decorators = [guarded(function () {
      return this.browser();
    })], disposeSymbol), _Page = class Page extends _classSuper {
      /**
       * @internal
       */
      constructor() {
        super();
        /**
         * Gets the native, non-emulated dimensions of the viewport.
         */
        _classPrivateMethodInitSpec(this, _Page_brand);
        /**
         * @internal
         */
        _defineProperty(this, "_isDragging", (__runInitializers$3(this, _instanceExtraInitializers), false));
        /**
         * @internal
         */
        _defineProperty(this, "_timeoutSettings", new TimeoutSettings());
        /**
         * Internal API to get an implementation-specific identifier
         * for the tab. In Chrome, it is a tab target id. If unknown,
         * returns an empty string.
         *
         * @internal
         */
        _defineProperty(this, "_tabId", '');
        _classPrivateFieldInitSpec(this, _requestHandlers, new WeakMap());
        _classPrivateFieldInitSpec(this, _inflight$, new ReplaySubject(1));
        _classPrivateFieldInitSpec(this, _screencastSessionCount, 0);
        _classPrivateFieldInitSpec(this, _startScreencastPromise, void 0);
        fromEmitterEvent(this, "request" /* PageEvent.Request */).pipe(mergeMap(originalRequest => {
          return concat(of(1), merge(fromEmitterEvent(this, "requestfailed" /* PageEvent.RequestFailed */), fromEmitterEvent(this, "requestfinished" /* PageEvent.RequestFinished */), fromEmitterEvent(this, "response" /* PageEvent.Response */).pipe(map(response => {
            return response.request();
          }))).pipe(filter(request => {
            return request.id === originalRequest.id;
          }), take(1), map(() => {
            return -1;
          })));
        }), mergeScan((acc, addend) => {
          return of(acc + addend);
        }, 0), takeUntil(fromEmitterEvent(this, "close" /* PageEvent.Close */)), startWith(0)).subscribe(_classPrivateFieldGet(_inflight$, this));
      }
      /**
       * Listen to page events.
       *
       * @remarks
       * This method exists to define event typings and handle proper wireup of
       * cooperative request interception. Actual event listening and dispatching is
       * delegated to {@link EventEmitter}.
       *
       * @internal
       */
      on(type, handler) {
        if (type !== "request" /* PageEvent.Request */) {
          return super.on(type, handler);
        }
        let wrapper = _classPrivateFieldGet(_requestHandlers, this).get(handler);
        if (wrapper === undefined) {
          wrapper = event => {
            event.enqueueInterceptAction(() => {
              return handler(event);
            });
          };
          _classPrivateFieldGet(_requestHandlers, this).set(handler, wrapper);
        }
        return super.on(type, wrapper);
      }
      /**
       * @internal
       */
      off(type, handler) {
        if (type === "request" /* PageEvent.Request */) {
          handler = _classPrivateFieldGet(_requestHandlers, this).get(handler) || handler;
        }
        return super.off(type, handler);
      }
      /**
       * {@inheritDoc Accessibility}
       */
      get accessibility() {
        return this.mainFrame().accessibility;
      }
      locator(input) {
        if (typeof input === 'string') {
          return NodeLocator.create(this, input);
        } else {
          return FunctionLocator.create(this, input);
        }
      }
      /**
       * A shortcut for {@link Locator.race} that does not require static imports.
       *
       * @internal
       */
      locatorRace(locators) {
        return Locator.race(locators);
      }
      /**
       * Finds the first element that matches the selector. If no element matches
       * the selector, the return value resolves to `null`.
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       *
       * @remarks
       *
       * Shortcut for {@link Frame.$ | Page.mainFrame().$(selector) }.
       */
      async $(selector) {
        return await this.mainFrame().$(selector);
      }
      /**
       * Finds elements on the page that match the selector. If no elements
       * match the selector, the return value resolves to `[]`.
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       *
       * @remarks
       *
       * Shortcut for {@link Frame.$$ | Page.mainFrame().$$(selector) }.
       */
      async $$(selector, options) {
        return await this.mainFrame().$$(selector, options);
      }
      /**
       * @remarks
       *
       * The only difference between {@link Page.evaluate | page.evaluate} and
       * `page.evaluateHandle` is that `evaluateHandle` will return the value
       * wrapped in an in-page object.
       *
       * If the function passed to `page.evaluateHandle` returns a Promise, the
       * function will wait for the promise to resolve and return its value.
       *
       * You can pass a string instead of a function (although functions are
       * recommended as they are easier to debug and use with TypeScript):
       *
       * @example
       *
       * ```ts
       * const aHandle = await page.evaluateHandle('document');
       * ```
       *
       * @example
       * {@link JSHandle} instances can be passed as arguments to the `pageFunction`:
       *
       * ```ts
       * const aHandle = await page.evaluateHandle(() => document.body);
       * const resultHandle = await page.evaluateHandle(
       *   body => body.innerHTML,
       *   aHandle,
       * );
       * console.log(await resultHandle.jsonValue());
       * await resultHandle.dispose();
       * ```
       *
       * Most of the time this function returns a {@link JSHandle},
       * but if `pageFunction` returns a reference to an element,
       * you instead get an {@link ElementHandle} back:
       *
       * @example
       *
       * ```ts
       * const button = await page.evaluateHandle(() =>
       *   document.querySelector('button'),
       * );
       * // can call `click` because `button` is an `ElementHandle`
       * await button.click();
       * ```
       *
       * The TypeScript definitions assume that `evaluateHandle` returns
       * a `JSHandle`, but if you know it's going to return an
       * `ElementHandle`, pass it as the generic argument:
       *
       * ```ts
       * const button = await page.evaluateHandle<ElementHandle>(...);
       * ```
       *
       * @param pageFunction - a function that is run within the page
       * @param args - arguments to be passed to the pageFunction
       */
      async evaluateHandle(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
        return await this.mainFrame().evaluateHandle(pageFunction, ...args);
      }
      /**
       * This method finds the first element within the page that matches the selector
       * and passes the result as the first argument to the `pageFunction`.
       *
       * @remarks
       *
       * If no element is found matching `selector`, the method will throw an error.
       *
       * If `pageFunction` returns a promise `$eval` will wait for the promise to
       * resolve and then return its value.
       *
       * @example
       *
       * ```ts
       * const searchValue = await page.$eval('#search', el => el.value);
       * const preloadHref = await page.$eval('link[rel=preload]', el => el.href);
       * const html = await page.$eval('.main-container', el => el.outerHTML);
       * ```
       *
       * If you are using TypeScript, you may have to provide an explicit type to the
       * first argument of the `pageFunction`.
       * By default it is typed as `Element`, but you may need to provide a more
       * specific sub-type:
       *
       * @example
       *
       * ```ts
       * // if you don't provide HTMLInputElement here, TS will error
       * // as `value` is not on `Element`
       * const searchValue = await page.$eval(
       *   '#search',
       *   (el: HTMLInputElement) => el.value,
       * );
       * ```
       *
       * The compiler should be able to infer the return type
       * from the `pageFunction` you provide. If it is unable to, you can use the generic
       * type to tell the compiler what return type you expect from `$eval`:
       *
       * @example
       *
       * ```ts
       * // The compiler can infer the return type in this case, but if it can't
       * // or if you want to be more explicit, provide it as the generic type.
       * const searchValue = await page.$eval<string>(
       *   '#search',
       *   (el: HTMLInputElement) => el.value,
       * );
       * ```
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @param pageFunction - the function to be evaluated in the page context.
       * Will be passed the result of the element matching the selector as its
       * first argument.
       * @param args - any additional arguments to pass through to `pageFunction`.
       *
       * @returns The result of calling `pageFunction`. If it returns an element it
       * is wrapped in an {@link ElementHandle}, else the raw value itself is
       * returned.
       */
      async $eval(selector, pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
        return await this.mainFrame().$eval(selector, pageFunction, ...args);
      }
      /**
       * This method returns all elements matching the selector and passes the
       * resulting array as the first argument to the `pageFunction`.
       *
       * @remarks
       * If `pageFunction` returns a promise `$$eval` will wait for the promise to
       * resolve and then return its value.
       *
       * @example
       *
       * ```ts
       * // get the amount of divs on the page
       * const divCount = await page.$$eval('div', divs => divs.length);
       *
       * // get the text content of all the `.options` elements:
       * const options = await page.$$eval('div > span.options', options => {
       *   return options.map(option => option.textContent);
       * });
       * ```
       *
       * If you are using TypeScript, you may have to provide an explicit type to the
       * first argument of the `pageFunction`.
       * By default it is typed as `Element[]`, but you may need to provide a more
       * specific sub-type:
       *
       * @example
       *
       * ```ts
       * await page.$$eval('input', elements => {
       *   return elements.map(e => e.value);
       * });
       * ```
       *
       * The compiler should be able to infer the return type
       * from the `pageFunction` you provide. If it is unable to, you can use the generic
       * type to tell the compiler what return type you expect from `$$eval`:
       *
       * @example
       *
       * ```ts
       * const allInputValues = await page.$$eval('input', elements =>
       *   elements.map(e => e.textContent),
       * );
       * ```
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @param pageFunction - the function to be evaluated in the page context.
       * Will be passed an array of matching elements as its first argument.
       * @param args - any additional arguments to pass through to `pageFunction`.
       *
       * @returns The result of calling `pageFunction`. If it returns an element it
       * is wrapped in an {@link ElementHandle}, else the raw value itself is
       * returned.
       */
      async $$eval(selector, pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
        return await this.mainFrame().$$eval(selector, pageFunction, ...args);
      }
      /**
       * Adds a `<script>` tag into the page with the desired URL or content.
       *
       * @remarks
       * Shortcut for
       * {@link Frame.addScriptTag | page.mainFrame().addScriptTag(options)}.
       *
       * @param options - Options for the script.
       * @returns An {@link ElementHandle | element handle} to the injected
       * `<script>` element.
       */
      async addScriptTag(options) {
        return await this.mainFrame().addScriptTag(options);
      }
      async addStyleTag(options) {
        return await this.mainFrame().addStyleTag(options);
      }
      /**
       * The page's URL.
       *
       * @remarks
       *
       * Shortcut for {@link Frame.url | page.mainFrame().url()}.
       */
      url() {
        return this.mainFrame().url();
      }
      /**
       * The full HTML contents of the page, including the DOCTYPE.
       */
      async content() {
        return await this.mainFrame().content();
      }
      /**
       * Set the content of the page.
       *
       * @param html - HTML markup to assign to the page.
       * @param options - Parameters that has some properties.
       */
      async setContent(html, options) {
        await this.mainFrame().setContent(html, options);
      }
      /**
       * {@inheritDoc Frame.goto}
       */
      async goto(url, options) {
        return await this.mainFrame().goto(url, options);
      }
      /**
       * Waits for the page to navigate to a new URL or to reload. It is useful when
       * you run code that will indirectly cause the page to navigate.
       *
       * @example
       *
       * ```ts
       * const [response] = await Promise.all([
       *   page.waitForNavigation(), // The promise resolves after navigation has finished
       *   page.click('a.my-link'), // Clicking the link will indirectly cause a navigation
       * ]);
       * ```
       *
       * @remarks
       *
       * Usage of the
       * {@link https://developer.mozilla.org/en-US/docs/Web/API/History_API | History API}
       * to change the URL is considered a navigation.
       *
       * @param options - Navigation parameters which might have the following
       * properties:
       * @returns A `Promise` which resolves to the main resource response.
       *
       * - In case of multiple redirects, the navigation will resolve with the
       *   response of the last redirect.
       * - In case of navigation to a different anchor or navigation due to History
       *   API usage, the navigation will resolve with `null`.
       */
      async waitForNavigation(options = {}) {
        return await this.mainFrame().waitForNavigation(options);
      }
      /**
       * @param urlOrPredicate - A URL or predicate to wait for
       * @param options - Optional waiting parameters
       * @returns Promise which resolves to the matched request
       * @example
       *
       * ```ts
       * const firstRequest = await page.waitForRequest(
       *   'https://example.com/resource',
       * );
       * const finalRequest = await page.waitForRequest(
       *   request => request.url() === 'https://example.com',
       * );
       * return finalRequest.response()?.ok();
       * ```
       *
       * @remarks
       * Optional Waiting Parameters have:
       *
       * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds, pass
       *   `0` to disable the timeout. The default value can be changed by using the
       *   {@link Page.setDefaultTimeout} method.
       *
       * - `signal`: A signal object that allows you to cancel a waitForRequest call.
       */
      waitForRequest(urlOrPredicate, options = {}) {
        const {
          timeout: ms = this._timeoutSettings.timeout(),
          signal
        } = options;
        if (typeof urlOrPredicate === 'string') {
          const url = urlOrPredicate;
          urlOrPredicate = request => {
            return request.url() === url;
          };
        }
        const observable$ = fromEmitterEvent(this, "request" /* PageEvent.Request */).pipe(filterAsync(urlOrPredicate), raceWith(timeout(ms), fromAbortSignal(signal), fromEmitterEvent(this, "close" /* PageEvent.Close */).pipe(map(() => {
          throw new TargetCloseError('Page closed!');
        }))));
        return firstValueFrom(observable$);
      }
      /**
       * @param urlOrPredicate - A URL or predicate to wait for.
       * @param options - Optional waiting parameters
       * @returns Promise which resolves to the matched response.
       * @example
       *
       * ```ts
       * const firstResponse = await page.waitForResponse(
       *   'https://example.com/resource',
       * );
       * const finalResponse = await page.waitForResponse(
       *   response =>
       *     response.url() === 'https://example.com' && response.status() === 200,
       * );
       * const finalResponse = await page.waitForResponse(async response => {
       *   return (await response.text()).includes('<html>');
       * });
       * return finalResponse.ok();
       * ```
       *
       * @remarks
       * Optional Parameter have:
       *
       * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds,
       *   pass `0` to disable the timeout. The default value can be changed by using
       *   the {@link Page.setDefaultTimeout} method.
       *
       * - `signal`: A signal object that allows you to cancel a waitForResponse call.
       */
      waitForResponse(urlOrPredicate, options = {}) {
        const {
          timeout: ms = this._timeoutSettings.timeout(),
          signal
        } = options;
        if (typeof urlOrPredicate === 'string') {
          const url = urlOrPredicate;
          urlOrPredicate = response => {
            return response.url() === url;
          };
        }
        const observable$ = fromEmitterEvent(this, "response" /* PageEvent.Response */).pipe(filterAsync(urlOrPredicate), raceWith(timeout(ms), fromAbortSignal(signal), fromEmitterEvent(this, "close" /* PageEvent.Close */).pipe(map(() => {
          throw new TargetCloseError('Page closed!');
        }))));
        return firstValueFrom(observable$);
      }
      /**
       * Waits for the network to be idle.
       *
       * @remarks The function will always wait at least the
       * set {@link WaitForNetworkIdleOptions.idleTime | IdleTime}.
       *
       * @param options - Options to configure waiting behavior.
       * @returns A promise which resolves once the network is idle.
       */
      waitForNetworkIdle(options = {}) {
        return firstValueFrom(this.waitForNetworkIdle$(options));
      }
      /**
       * @internal
       */
      waitForNetworkIdle$(options = {}) {
        const {
          timeout: ms = this._timeoutSettings.timeout(),
          idleTime = NETWORK_IDLE_TIME,
          concurrency = 0,
          signal
        } = options;
        return _classPrivateFieldGet(_inflight$, this).pipe(map(inflight => {
          return inflight > concurrency;
        }), distinctUntilChanged(), switchMap(isInflightOverConcurrency => {
          if (isInflightOverConcurrency) {
            return EMPTY;
          }
          return timer(idleTime);
        }), map(() => {}), raceWith(timeout(ms), fromAbortSignal(signal), fromEmitterEvent(this, "close" /* PageEvent.Close */).pipe(map(() => {
          throw new TargetCloseError('Page closed!');
        }))));
      }
      /**
       * Waits for a frame matching the given conditions to appear.
       *
       * @example
       *
       * ```ts
       * const frame = await page.waitForFrame(async frame => {
       *   const frameElement = await frame.frameElement();
       *   if (!frameElement) {
       *     return false;
       *   }
       *   const name = await frameElement.evaluate(el => el.getAttribute('name'));
       *   return name === 'test';
       * });
       * ```
       */
      async waitForFrame(urlOrPredicate, options = {}) {
        const {
          timeout: ms = this.getDefaultTimeout(),
          signal
        } = options;
        const predicate = isString(urlOrPredicate) ? frame => {
          return urlOrPredicate === frame.url();
        } : urlOrPredicate;
        return await firstValueFrom(merge(fromEmitterEvent(this, "frameattached" /* PageEvent.FrameAttached */), fromEmitterEvent(this, "framenavigated" /* PageEvent.FrameNavigated */), from(this.frames())).pipe(filterAsync(predicate), first(), raceWith(timeout(ms), fromAbortSignal(signal), fromEmitterEvent(this, "close" /* PageEvent.Close */).pipe(map(() => {
          throw new TargetCloseError('Page closed.');
        })))));
      }
      /**
       * Emulates a given device's metrics and user agent.
       *
       * To aid emulation, Puppeteer provides a list of known devices that can be
       * via {@link KnownDevices}.
       *
       * @remarks
       * This method is a shortcut for calling two methods:
       * {@link Page.(setUserAgent:2) } and {@link Page.setViewport}.
       *
       * This method will resize the page. A lot of websites don't expect phones to
       * change size, so you should emulate before navigating to the page.
       *
       * @example
       *
       * ```ts
       * import {KnownDevices} from 'puppeteer';
       * const iPhone = KnownDevices['iPhone 15 Pro'];
       *
       * const browser = await puppeteer.launch();
       * const page = await browser.newPage();
       * await page.emulate(iPhone);
       * await page.goto('https://www.google.com');
       * // other actions...
       * await browser.close();
       * ```
       */
      async emulate(device) {
        await Promise.all([this.setUserAgent({
          userAgent: device.userAgent
        }), this.setViewport(device.viewport)]);
      }
      /**
       * Evaluates a function in the page's context and returns the result.
       *
       * If the function passed to `page.evaluate` returns a Promise, the
       * function will wait for the promise to resolve and return its value.
       *
       * @example
       *
       * ```ts
       * const result = await frame.evaluate(() => {
       *   return Promise.resolve(8 * 7);
       * });
       * console.log(result); // prints "56"
       * ```
       *
       * You can pass a string instead of a function (although functions are
       * recommended as they are easier to debug and use with TypeScript):
       *
       * @example
       *
       * ```ts
       * const aHandle = await page.evaluate('1 + 2');
       * ```
       *
       * To get the best TypeScript experience, you should pass in as the
       * generic the type of `pageFunction`:
       *
       * ```ts
       * const aHandle = await page.evaluate(() => 2);
       * ```
       *
       * @example
       *
       * {@link ElementHandle} instances (including {@link JSHandle}s) can be passed
       * as arguments to the `pageFunction`:
       *
       * ```ts
       * const bodyHandle = await page.$('body');
       * const html = await page.evaluate(body => body.innerHTML, bodyHandle);
       * await bodyHandle.dispose();
       * ```
       *
       * @param pageFunction - a function that is run within the page
       * @param args - arguments to be passed to the pageFunction
       *
       * @returns the return value of `pageFunction`.
       */
      async evaluate(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
        return await this.mainFrame().evaluate(pageFunction, ...args);
      }
      /**
       * @internal
       */
      async _maybeWriteTypedArrayToFile(path, typedArray) {
        if (!path) {
          return;
        }
        await environment.value.fs.promises.writeFile(path, typedArray);
      }
      /**
       * Captures a screencast of this {@link Page | page}.
       *
       * @example
       * Recording a {@link Page | page}:
       *
       * ```
       * import puppeteer from 'puppeteer';
       *
       * // Launch a browser
       * const browser = await puppeteer.launch();
       *
       * // Create a new page
       * const page = await browser.newPage();
       *
       * // Go to your site.
       * await page.goto("https://www.example.com");
       *
       * // Start recording.
       * const recorder = await page.screencast({path: 'recording.webm'});
       *
       * // Do something.
       *
       * // Stop recording.
       * await recorder.stop();
       *
       * browser.close();
       * ```
       *
       * @param options - Configures screencast behavior.
       *
       * @experimental
       *
       * @remarks
       *
       * By default, all recordings will be {@link https://www.webmproject.org/ | WebM} format using
       * the {@link https://www.webmproject.org/vp9/ | VP9} video codec, with a frame rate of 30 FPS.
       *
       * You must have {@link https://ffmpeg.org/ | ffmpeg} installed on your system.
       */
      async screencast(options = {}) {
        const ScreenRecorder = environment.value.ScreenRecorder;
        const [width, height, devicePixelRatio] = await _assertClassBrand(_Page_brand, this, _getNativePixelDimensions).call(this);
        let crop;
        if (options.crop) {
          const {
            x,
            y,
            width: cropWidth,
            height: cropHeight
          } = roundRectangle(normalizeRectangle(options.crop));
          if (x < 0 || y < 0) {
            throw new Error(`\`crop.x\` and \`crop.y\` must be greater than or equal to 0.`);
          }
          if (cropWidth <= 0 || cropHeight <= 0) {
            throw new Error(`\`crop.height\` and \`crop.width\` must be greater than or equal to 0.`);
          }
          const viewportWidth = width / devicePixelRatio;
          const viewportHeight = height / devicePixelRatio;
          if (x + cropWidth > viewportWidth) {
            throw new Error(`\`crop.width\` cannot be larger than the viewport width (${viewportWidth}).`);
          }
          if (y + cropHeight > viewportHeight) {
            throw new Error(`\`crop.height\` cannot be larger than the viewport height (${viewportHeight}).`);
          }
          crop = {
            x: x * devicePixelRatio,
            y: y * devicePixelRatio,
            width: cropWidth * devicePixelRatio,
            height: cropHeight * devicePixelRatio
          };
        }
        if (options.speed !== undefined && options.speed <= 0) {
          throw new Error(`\`speed\` must be greater than 0.`);
        }
        if (options.scale !== undefined && options.scale <= 0) {
          throw new Error(`\`scale\` must be greater than 0.`);
        }
        const recorder = new ScreenRecorder(this, width, height, {
          ...options,
          crop
        });
        try {
          await this._startScreencast();
        } catch (error) {
          void recorder.stop();
          throw error;
        }
        if (options.path) {
          const {
            createWriteStream
          } = environment.value.fs;
          const stream = createWriteStream(options.path, 'binary');
          recorder.pipe(stream);
        }
        return recorder;
      }
      /**
       * @internal
       */
      async _startScreencast() {
        var _this$screencastSessi;
        _classPrivateFieldSet(_screencastSessionCount, this, (_this$screencastSessi = _classPrivateFieldGet(_screencastSessionCount, this), ++_this$screencastSessi));
        if (!_classPrivateFieldGet(_startScreencastPromise, this)) {
          _classPrivateFieldSet(_startScreencastPromise, this, this.mainFrame().client.send('Page.startScreencast', {
            format: 'png'
          }).then(() => {
            // Wait for the first frame.
            return new Promise(resolve => {
              return this.mainFrame().client.once('Page.screencastFrame', () => {
                return resolve();
              });
            });
          }));
        }
        await _classPrivateFieldGet(_startScreencastPromise, this);
      }
      /**
       * @internal
       */
      async _stopScreencast() {
        var _this$screencastSessi2;
        _classPrivateFieldSet(_screencastSessionCount, this, (_this$screencastSessi2 = _classPrivateFieldGet(_screencastSessionCount, this), --_this$screencastSessi2));
        if (!_classPrivateFieldGet(_startScreencastPromise, this)) {
          return;
        }
        _classPrivateFieldSet(_startScreencastPromise, this, undefined);
        if (_classPrivateFieldGet(_screencastSessionCount, this) === 0) {
          await this.mainFrame().client.send('Page.stopScreencast');
        }
      }
      async screenshot(userOptions = {}) {
        const env_2 = {
          stack: [],
          error: void 0,
          hasError: false
        };
        try {
          const _guard = __addDisposableResource$5(env_2, await this.browserContext().startScreenshot(), false);
          const options = {
            ...userOptions,
            clip: userOptions.clip ? {
              ...userOptions.clip
            } : undefined
          };
          if (options.type === undefined && options.path !== undefined) {
            const filePath = options.path;
            // Note we cannot use Node.js here due to browser compatibility.
            const extension = filePath.slice(filePath.lastIndexOf('.') + 1).toLowerCase();
            switch (extension) {
              case 'png':
                options.type = 'png';
                break;
              case 'jpeg':
              case 'jpg':
                options.type = 'jpeg';
                break;
              case 'webp':
                options.type = 'webp';
                break;
            }
          }
          if (options.quality !== undefined) {
            if (options.quality < 0 || options.quality > 100) {
              throw new Error(`Expected 'quality' (${options.quality}) to be between 0 and 100, inclusive.`);
            }
            if (options.type === undefined || !['jpeg', 'webp'].includes(options.type)) {
              throw new Error(`${options.type ?? 'png'} screenshots do not support 'quality'.`);
            }
          }
          if (options.clip) {
            if (options.clip.width <= 0) {
              throw new Error("'width' in 'clip' must be positive.");
            }
            if (options.clip.height <= 0) {
              throw new Error("'height' in 'clip' must be positive.");
            }
          }
          setDefaultScreenshotOptions(options);
          const stack = __addDisposableResource$5(env_2, new AsyncDisposableStack(), true);
          if (options.clip) {
            if (options.fullPage) {
              throw new Error("'clip' and 'fullPage' are mutually exclusive");
            }
            options.clip = roundRectangle(normalizeRectangle(options.clip));
          } else {
            if (options.fullPage) {
              // If `captureBeyondViewport` is `false`, then we set the viewport to
              // capture the full page. Note this may be affected by on-page CSS and
              // JavaScript.
              if (!options.captureBeyondViewport) {
                const scrollDimensions = await this.mainFrame().isolatedRealm().evaluate(() => {
                  const element = document.documentElement;
                  return {
                    width: element.scrollWidth,
                    height: element.scrollHeight
                  };
                });
                const viewport = this.viewport();
                await this.setViewport({
                  ...viewport,
                  ...scrollDimensions
                });
                stack.defer(async () => {
                  await this.setViewport(viewport).catch(debugError);
                });
              }
            } else {
              options.captureBeyondViewport = false;
            }
          }
          const data = await this._screenshot(options);
          if (options.encoding === 'base64') {
            return data;
          }
          const typedArray = stringToTypedArray(data, true);
          await this._maybeWriteTypedArrayToFile(options.path, typedArray);
          return typedArray;
        } catch (e_2) {
          env_2.error = e_2;
          env_2.hasError = true;
        } finally {
          const result_1 = __disposeResources$5(env_2);
          if (result_1) await result_1;
        }
      }
      /**
       * The page's title
       *
       * @remarks
       *
       * Shortcut for {@link Frame.title | page.mainFrame().title()}.
       */
      async title() {
        return await this.mainFrame().title();
      }
      /**
       * This method fetches an element with `selector`, scrolls it into view if
       * needed, and then uses {@link Page.mouse} to click in the center of the
       * element. If there's no element matching `selector`, the method throws an
       * error.
       *
       * @remarks
       *
       * Bear in mind that if `click()` triggers a navigation event and
       * there's a separate `page.waitForNavigation()` promise to be resolved, you
       * may end up with a race condition that yields unexpected results. The
       * correct pattern for click and wait for navigation is the following:
       *
       * ```ts
       * const [response] = await Promise.all([
       *   page.waitForNavigation(waitOptions),
       *   page.click(selector, clickOptions),
       * ]);
       * ```
       *
       * Shortcut for {@link Frame.click | page.mainFrame().click(selector[, options]) }.
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}. If there are
       * multiple elements satisfying the `selector`, the first will be clicked
       * @param options - `Object`
       * @returns Promise which resolves when the element matching `selector` is
       * successfully clicked. The Promise will be rejected if there is no element
       * matching `selector`.
       */
      click(selector, options) {
        return this.mainFrame().click(selector, options);
      }
      /**
       * This method fetches an element with `selector` and focuses it. If
       * there's no element matching `selector`, the method throws an error.
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * If there are multiple elements satisfying the selector, the first
       * will be focused.
       * @returns Promise which resolves when the element matching selector
       * is successfully focused. The promise will be rejected if there is
       * no element matching selector.
       *
       * @remarks
       *
       * Shortcut for
       * {@link Frame.focus | page.mainFrame().focus(selector)}.
       */
      focus(selector) {
        return this.mainFrame().focus(selector);
      }
      /**
       * This method fetches an element with `selector`, scrolls it into view if
       * needed, and then uses {@link Page.mouse}
       * to hover over the center of the element.
       * If there's no element matching `selector`, the method throws an error.
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}. If there are
       * multiple elements satisfying the `selector`, the first will be hovered.
       * @returns Promise which resolves when the element matching `selector` is
       * successfully hovered. Promise gets rejected if there's no element matching
       * `selector`.
       *
       * @remarks
       *
       * Shortcut for {@link Page.hover | page.mainFrame().hover(selector)}.
       */
      hover(selector) {
        return this.mainFrame().hover(selector);
      }
      /**
       * Triggers a `change` and `input` event once all the provided options have been
       * selected. If there's no `<select>` element matching `selector`, the method
       * throws an error.
       *
       * @example
       *
       * ```ts
       * page.select('select#colors', 'blue'); // single selection
       * page.select('select#colors', 'red', 'green', 'blue'); // multiple selections
       * ```
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @param values - Values of options to select. If the `<select>` has the
       * `multiple` attribute, all values are considered, otherwise only the first one
       * is taken into account.
       * @returns
       *
       * @remarks
       *
       * Shortcut for {@link Frame.select | page.mainFrame().select()}
       */
      select(selector, ...values) {
        return this.mainFrame().select(selector, ...values);
      }
      /**
       * This method fetches an element with `selector`, scrolls it into view if
       * needed, and then uses {@link Page.touchscreen}
       * to tap in the center of the element.
       * If there's no element matching `selector`, the method throws an error.
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}. If there are multiple elements satisfying the
       * selector, the first will be tapped.
       *
       * @remarks
       *
       * Shortcut for {@link Frame.tap | page.mainFrame().tap(selector)}.
       */
      tap(selector) {
        return this.mainFrame().tap(selector);
      }
      /**
       * Sends a `keydown`, `keypress/input`, and `keyup` event for each character
       * in the text.
       *
       * To press a special key, like `Control` or `ArrowDown`, use {@link Keyboard.press}.
       * @example
       *
       * ```ts
       * await page.type('#mytextarea', 'Hello');
       * // Types instantly
       * await page.type('#mytextarea', 'World', {delay: 100});
       * // Types slower, like a user
       * ```
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @param text - A text to type into a focused element.
       * @param options - have property `delay` which is the Time to wait between
       * key presses in milliseconds. Defaults to `0`.
       * @returns
       */
      type(selector, text, options) {
        return this.mainFrame().type(selector, text, options);
      }
      /**
       * Wait for the `selector` to appear in page. If at the moment of calling the
       * method the `selector` already exists, the method will return immediately. If
       * the `selector` doesn't appear after the `timeout` milliseconds of waiting, the
       * function will throw.
       *
       * @example
       * This method works across navigations:
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       *
       * const browser = await puppeteer.launch();
       * const page = await browser.newPage();
       * let currentURL;
       * page
       *   .waitForSelector('img')
       *   .then(() => console.log('First URL with image: ' + currentURL));
       * for (currentURL of [
       *   'https://example.com',
       *   'https://google.com',
       *   'https://bbc.com',
       * ]) {
       *   await page.goto(currentURL);
       * }
       * await browser.close();
       * ```
       *
       * @param selector -
       * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
       * to query the page for.
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
       * can be passed as-is and a
       * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
       * allows querying by
       * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
       * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
       * and
       * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
       * and
       * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
       * Alternatively, you can specify the selector type using a
       * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
       * @param options - Optional waiting parameters
       * @returns Promise which resolves when element specified by selector string
       * is added to DOM. Resolves to `null` if waiting for hidden: `true` and
       * selector is not found in DOM.
       *
       * @remarks
       * The optional Parameter in Arguments `options` are:
       *
       * - `visible`: A boolean wait for element to be present in DOM and to be
       *   visible, i.e. to not have `display: none` or `visibility: hidden` CSS
       *   properties. Defaults to `false`.
       *
       * - `hidden`: Wait for element to not be found in the DOM or to be hidden,
       *   i.e. have `display: none` or `visibility: hidden` CSS properties. Defaults to
       *   `false`.
       *
       * - `timeout`: maximum time to wait for in milliseconds. Defaults to `30000`
       *   (30 seconds). Pass `0` to disable timeout. The default value can be changed
       *   by using the {@link Page.setDefaultTimeout} method.
       *
       * - `signal`: A signal object that allows you to cancel a waitForSelector call.
       */
      async waitForSelector(selector, options = {}) {
        return await this.mainFrame().waitForSelector(selector, options);
      }
      /**
       * Waits for the provided function, `pageFunction`, to return a truthy value when
       * evaluated in the page's context.
       *
       * @example
       * {@link Page.waitForFunction} can be used to observe a viewport size change:
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       *
       * const browser = await puppeteer.launch();
       * const page = await browser.newPage();
       * const watchDog = page.waitForFunction('window.innerWidth < 100');
       * await page.setViewport({width: 50, height: 50});
       * await watchDog;
       * await browser.close();
       * ```
       *
       * @example
       * Arguments can be passed from Node.js to `pageFunction`:
       *
       * ```ts
       * const selector = '.foo';
       * await page.waitForFunction(
       *   selector => !!document.querySelector(selector),
       *   {},
       *   selector,
       * );
       * ```
       *
       * @example
       * The provided `pageFunction` can be asynchronous:
       *
       * ```ts
       * const username = 'github-username';
       * await page.waitForFunction(
       *   async username => {
       *     const githubResponse = await fetch(
       *       `https://api.github.com/users/${username}`,
       *     );
       *     const githubUser = await githubResponse.json();
       *     // show the avatar
       *     const img = document.createElement('img');
       *     img.src = githubUser.avatar_url;
       *     // wait 3 seconds
       *     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
       *     img.remove();
       *   },
       *   {},
       *   username,
       * );
       * ```
       *
       * @param pageFunction - Function to be evaluated in browser context until it returns a
       * truthy value.
       * @param options - Options for configuring waiting behavior.
       */
      waitForFunction(pageFunction, options, ...args) {
        return this.mainFrame().waitForFunction(pageFunction, options, ...args);
      }
      /** @internal */
      [_ref2]() {
        return void this[asyncDisposeSymbol]().catch(debugError);
      }
      /** @internal */
      async [asyncDisposeSymbol]() {
        await this.close();
        await super[asyncDisposeSymbol]();
      }
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate$3(_Page, null, _screenshot_decorators, {
        kind: "method",
        name: "screenshot",
        static: false,
        private: false,
        access: {
          has: obj => "screenshot" in obj,
          get: obj => obj.screenshot
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(_Page, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    })(), _Page;
    async function _getNativePixelDimensions() {
      const env_1 = {
        stack: [],
        error: void 0,
        hasError: false
      };
      try {
        const viewport = this.viewport();
        const stack = __addDisposableResource$5(env_1, new DisposableStack(), false);
        if (viewport && viewport.deviceScaleFactor !== 0) {
          await this.setViewport({
            ...viewport,
            deviceScaleFactor: 0
          });
          stack.defer(() => {
            void this.setViewport(viewport).catch(debugError);
          });
        }
        return await this.mainFrame().isolatedRealm().evaluate(() => {
          return [window.visualViewport.width * window.devicePixelRatio, window.visualViewport.height * window.devicePixelRatio, window.devicePixelRatio];
        });
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$5(env_1);
      }
    }
  })();
  /**
   * @internal
   */
  const supportedMetrics$1 = new Set(['Timestamp', 'Documents', 'Frames', 'JSEventListeners', 'Nodes', 'LayoutCount', 'RecalcStyleCount', 'LayoutDuration', 'RecalcStyleDuration', 'ScriptDuration', 'TaskDuration', 'JSHeapUsedSize', 'JSHeapTotalSize']);
  /** @see https://w3c.github.io/webdriver-bidi/#normalize-rect */
  function normalizeRectangle(clip) {
    return {
      ...clip,
      ...(clip.width < 0 ? {
        x: clip.x + clip.width,
        width: -clip.width
      } : {
        x: clip.x,
        width: clip.width
      }),
      ...(clip.height < 0 ? {
        y: clip.y + clip.height,
        height: -clip.height
      } : {
        y: clip.y,
        height: clip.height
      })
    };
  }
  function roundRectangle(clip) {
    const x = Math.round(clip.x);
    const y = Math.round(clip.y);
    const width = Math.round(clip.width + clip.x - x);
    const height = Math.round(clip.height + clip.y - y);
    return {
      ...clip,
      x,
      y,
      width,
      height
    };
  }

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _world = /*#__PURE__*/new WeakMap();
  var _polling = /*#__PURE__*/new WeakMap();
  var _root = /*#__PURE__*/new WeakMap();
  var _fn = /*#__PURE__*/new WeakMap();
  var _args = /*#__PURE__*/new WeakMap();
  var _timeout = /*#__PURE__*/new WeakMap();
  var _genericError = /*#__PURE__*/new WeakMap();
  var _timeoutError2 = /*#__PURE__*/new WeakMap();
  var _result = /*#__PURE__*/new WeakMap();
  var _poller = /*#__PURE__*/new WeakMap();
  var _signal = /*#__PURE__*/new WeakMap();
  var _reruns = /*#__PURE__*/new WeakMap();
  var _onAbortSignal = /*#__PURE__*/new WeakMap();
  class WaitTask {
    constructor(world, options, fn, ...args) {
      _classPrivateFieldInitSpec(this, _world, void 0);
      _classPrivateFieldInitSpec(this, _polling, void 0);
      _classPrivateFieldInitSpec(this, _root, void 0);
      _classPrivateFieldInitSpec(this, _fn, void 0);
      _classPrivateFieldInitSpec(this, _args, void 0);
      _classPrivateFieldInitSpec(this, _timeout, void 0);
      _classPrivateFieldInitSpec(this, _genericError, new Error('Waiting failed'));
      _classPrivateFieldInitSpec(this, _timeoutError2, void 0);
      _classPrivateFieldInitSpec(this, _result, Deferred.create());
      _classPrivateFieldInitSpec(this, _poller, void 0);
      _classPrivateFieldInitSpec(this, _signal, void 0);
      _classPrivateFieldInitSpec(this, _reruns, []);
      _classPrivateFieldInitSpec(this, _onAbortSignal, () => {
        void this.terminate(_classPrivateFieldGet(_signal, this)?.reason);
      });
      _classPrivateFieldSet(_world, this, world);
      _classPrivateFieldSet(_polling, this, options.polling);
      _classPrivateFieldSet(_root, this, options.root);
      _classPrivateFieldSet(_signal, this, options.signal);
      _classPrivateFieldGet(_signal, this)?.addEventListener('abort', _classPrivateFieldGet(_onAbortSignal, this), {
        once: true
      });
      switch (typeof fn) {
        case 'string':
          _classPrivateFieldSet(_fn, this, `() => {return (${fn});}`);
          break;
        default:
          _classPrivateFieldSet(_fn, this, stringifyFunction(fn));
          break;
      }
      _classPrivateFieldSet(_args, this, args);
      _classPrivateFieldGet(_world, this).taskManager.add(this);
      if (options.timeout) {
        _classPrivateFieldSet(_timeoutError2, this, new TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`));
        _classPrivateFieldSet(_timeout, this, setTimeout(() => {
          void this.terminate(_classPrivateFieldGet(_timeoutError2, this));
        }, options.timeout));
      }
      void this.rerun();
    }
    get result() {
      return _classPrivateFieldGet(_result, this).valueOrThrow();
    }
    async rerun() {
      for (const prev of _classPrivateFieldGet(_reruns, this)) {
        prev.abort();
      }
      _classPrivateFieldGet(_reruns, this).length = 0;
      const controller = new AbortController();
      _classPrivateFieldGet(_reruns, this).push(controller);
      try {
        switch (_classPrivateFieldGet(_polling, this)) {
          case 'raf':
            _classPrivateFieldSet(_poller, this, await _classPrivateFieldGet(_world, this).evaluateHandle(({
              RAFPoller,
              createFunction
            }, fn, ...args) => {
              const fun = createFunction(fn);
              return new RAFPoller(() => {
                return fun(...args);
              });
            }, LazyArg.create(context => {
              return context.puppeteerUtil;
            }), _classPrivateFieldGet(_fn, this), ..._classPrivateFieldGet(_args, this)));
            break;
          case 'mutation':
            _classPrivateFieldSet(_poller, this, await _classPrivateFieldGet(_world, this).evaluateHandle(({
              MutationPoller,
              createFunction
            }, root, fn, ...args) => {
              const fun = createFunction(fn);
              return new MutationPoller(() => {
                return fun(...args);
              }, root || document);
            }, LazyArg.create(context => {
              return context.puppeteerUtil;
            }), _classPrivateFieldGet(_root, this), _classPrivateFieldGet(_fn, this), ..._classPrivateFieldGet(_args, this)));
            break;
          default:
            _classPrivateFieldSet(_poller, this, await _classPrivateFieldGet(_world, this).evaluateHandle(({
              IntervalPoller,
              createFunction
            }, ms, fn, ...args) => {
              const fun = createFunction(fn);
              return new IntervalPoller(() => {
                return fun(...args);
              }, ms);
            }, LazyArg.create(context => {
              return context.puppeteerUtil;
            }), _classPrivateFieldGet(_polling, this), _classPrivateFieldGet(_fn, this), ..._classPrivateFieldGet(_args, this)));
            break;
        }
        await _classPrivateFieldGet(_poller, this).evaluate(poller => {
          void poller.start();
        });
        const result = await _classPrivateFieldGet(_poller, this).evaluateHandle(poller => {
          return poller.result();
        });
        _classPrivateFieldGet(_result, this).resolve(result);
        await this.terminate();
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }
        const badError = this.getBadError(error);
        if (badError) {
          _classPrivateFieldGet(_genericError, this).cause = badError;
          await this.terminate(_classPrivateFieldGet(_genericError, this));
        }
      }
    }
    async terminate(error) {
      _classPrivateFieldGet(_world, this).taskManager.delete(this);
      _classPrivateFieldGet(_signal, this)?.removeEventListener('abort', _classPrivateFieldGet(_onAbortSignal, this));
      clearTimeout(_classPrivateFieldGet(_timeout, this));
      if (error && !_classPrivateFieldGet(_result, this).finished()) {
        _classPrivateFieldGet(_result, this).reject(error);
      }
      if (_classPrivateFieldGet(_poller, this)) {
        try {
          await _classPrivateFieldGet(_poller, this).evaluate(async poller => {
            await poller.stop();
          });
          if (_classPrivateFieldGet(_poller, this)) {
            await _classPrivateFieldGet(_poller, this).dispose();
            _classPrivateFieldSet(_poller, this, undefined);
          }
        } catch {
          // Ignore errors since they most likely come from low-level cleanup.
        }
      }
    }
    /**
     * Not all errors lead to termination. They usually imply we need to rerun the task.
     */
    getBadError(error) {
      if (isErrorLike(error)) {
        // When frame is detached the task should have been terminated by the IsolatedWorld.
        // This can fail if we were adding this task while the frame was detached,
        // so we terminate here instead.
        if (error.message.includes('Execution context is not available in detached frame')) {
          return new Error('Waiting failed: Frame detached');
        }
        // When the page is navigated, the promise is rejected.
        // We will try again in the new execution context.
        if (error.message.includes('Execution context was destroyed')) {
          return;
        }
        // We could have tried to evaluate in a context which was already
        // destroyed.
        if (error.message.includes('Cannot find context with specified id')) {
          return;
        }
        // Errors coming from WebDriver BiDi. TODO: Adjust messages after
        // https://github.com/w3c/webdriver-bidi/issues/540 is resolved.
        if (error.message.includes('DiscardedBrowsingContextError')) {
          return;
        }
        return error;
      }
      return new Error('WaitTask failed with an error', {
        cause: error
      });
    }
  }
  /**
   * @internal
   */
  var _tasks = /*#__PURE__*/new WeakMap();
  class TaskManager {
    constructor() {
      _classPrivateFieldInitSpec(this, _tasks, new Set());
    }
    add(task) {
      _classPrivateFieldGet(_tasks, this).add(task);
    }
    delete(task) {
      _classPrivateFieldGet(_tasks, this).delete(task);
    }
    terminateAll(error) {
      for (const task of _classPrivateFieldGet(_tasks, this)) {
        void task.terminate(error);
      }
      _classPrivateFieldGet(_tasks, this).clear();
    }
    async rerunAll() {
      await Promise.all([..._classPrivateFieldGet(_tasks, this)].map(task => {
        return task.rerun();
      }));
    }
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @public
   */
  var _disposed3 = /*#__PURE__*/new WeakMap();
  class Realm {
    /** @internal */
    constructor(timeoutSettings) {
      /** @internal */
      _defineProperty(this, "timeoutSettings", void 0);
      /** @internal */
      _defineProperty(this, "taskManager", new TaskManager());
      _classPrivateFieldInitSpec(this, _disposed3, false);
      this.timeoutSettings = timeoutSettings;
    }
    /**
     * Waits for a function to return a truthy value when evaluated in
     * the realm's context.
     *
     * Arguments can be passed from Node.js to `pageFunction`.
     *
     * @example
     *
     * ```ts
     * const selector = '.foo';
     * await realm.waitForFunction(
     *   selector => !!document.querySelector(selector),
     *   {},
     *   selector,
     * );
     * ```
     *
     * @param pageFunction - A function to evaluate in the realm.
     * @param options - Options for polling and timeouts.
     * @param args - Arguments to pass to the function.
     * @returns A promise that resolves when the function returns a truthy
     * value.
     * @public
     */
    async waitForFunction(pageFunction, options = {}, ...args) {
      const {
        polling = 'raf',
        timeout = this.timeoutSettings.timeout(),
        root,
        signal
      } = options;
      if (typeof polling === 'number' && polling < 0) {
        throw new Error('Cannot poll with non-positive interval');
      }
      const waitTask = new WaitTask(this, {
        polling,
        root,
        timeout,
        signal
      }, pageFunction, ...args);
      return await waitTask.result;
    }
    /** @internal */
    get disposed() {
      return _classPrivateFieldGet(_disposed3, this);
    }
    /** @internal */
    dispose() {
      _classPrivateFieldSet(_disposed3, this, true);
      this.taskManager.terminateAll(new Error('waitForFunction failed: frame got detached.'));
    }
    /** @internal */
    [disposeSymbol]() {
      this.dispose();
    }
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @public
   */
  exports.TargetType = void 0;
  (function (TargetType) {
    TargetType["PAGE"] = "page";
    TargetType["BACKGROUND_PAGE"] = "background_page";
    TargetType["SERVICE_WORKER"] = "service_worker";
    TargetType["SHARED_WORKER"] = "shared_worker";
    TargetType["BROWSER"] = "browser";
    TargetType["WEBVIEW"] = "webview";
    TargetType["OTHER"] = "other";
    /**
     * @internal
     */
    TargetType["TAB"] = "tab";
  })(exports.TargetType || (exports.TargetType = {}));
  /**
   * Target represents a
   * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
   * In CDP a target is something that can be debugged such a frame, a page or a
   * worker.
   * @public
   */
  class Target {
    /**
     * @internal
     */
    constructor() {}
    /**
     * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
     */
    async worker() {
      return null;
    }
    /**
     * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
     * returns `null`.
     */
    async page() {
      return null;
    }
  }

  /**
   * @license
   * Copyright 2018 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @public
   */
  exports.WebWorkerEvent = void 0;
  (function (WebWorkerEvent) {
    /**
     * Emitted when the worker calls a console API.
     */
    WebWorkerEvent["Console"] = "console";
    /**
     * Emitted when the worker throws an exception.
     */
    WebWorkerEvent["Error"] = "error";
  })(exports.WebWorkerEvent || (exports.WebWorkerEvent = {}));
  /**
   * This class represents a
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}.
   *
   * @remarks
   * The events `workercreated` and `workerdestroyed` are emitted on the page
   * object to signal the worker lifecycle.
   *
   * @example
   *
   * ```ts
   * page.on('workercreated', worker =>
   *   console.log('Worker created: ' + worker.url()),
   * );
   * page.on('workerdestroyed', worker =>
   *   console.log('Worker destroyed: ' + worker.url()),
   * );
   *
   * console.log('Current workers:');
   * for (const worker of page.workers()) {
   *   console.log('  ' + worker.url());
   * }
   * ```
   *
   * @public
   */
  var _url = /*#__PURE__*/new WeakMap();
  class WebWorker extends EventEmitter {
    /**
     * @internal
     */
    constructor(url) {
      super();
      /**
       * @internal
       */
      _defineProperty(this, "timeoutSettings", new TimeoutSettings());
      _classPrivateFieldInitSpec(this, _url, void 0);
      _classPrivateFieldSet(_url, this, url);
    }
    /**
     * The URL of this web worker.
     */
    url() {
      return _classPrivateFieldGet(_url, this);
    }
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * As a rule of thumb, if the return value of the given function is more
     * complicated than a JSON object (e.g. most classes), then
     * {@link WebWorker.evaluate | evaluate} will _likely_ return some truncated
     * value (or `{}`). This is because we are not returning the actual return
     * value, but a deserialized version as a result of transferring the return
     * value through a protocol to Puppeteer.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns The result of `func`.
     */
    async evaluate(func, ...args) {
      func = withSourcePuppeteerURLIfNone(this.evaluate.name, func);
      return await this.mainRealm().evaluate(func, ...args);
    }
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns A {@link JSHandle | handle} to the return value of `func`.
     */
    async evaluateHandle(func, ...args) {
      func = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, func);
      return await this.mainRealm().evaluateHandle(func, ...args);
    }
    async close() {
      throw new UnsupportedOperation('WebWorker.close() is not supported');
    }
  }

  /**
   * @license
   * Copyright 2018 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __addDisposableResource$4 = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$4 = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  /**
   * The Accessibility class provides methods for inspecting the browser's
   * accessibility tree. The accessibility tree is used by assistive technology
   * such as {@link https://en.wikipedia.org/wiki/Screen_reader | screen readers} or
   * {@link https://en.wikipedia.org/wiki/Switch_access | switches}.
   *
   * @remarks
   *
   * Accessibility is a very platform-specific thing. On different platforms,
   * there are different screen readers that might have wildly different output.
   *
   * Blink - Chrome's rendering engine - has a concept of "accessibility tree",
   * which is then translated into different platform-specific APIs. Accessibility
   * namespace gives users access to the Blink Accessibility Tree.
   *
   * Most of the accessibility tree gets filtered out when converting from Blink
   * AX Tree to Platform-specific AX-Tree or by assistive technologies themselves.
   * By default, Puppeteer tries to approximate this filtering, exposing only
   * the "interesting" nodes of the tree.
   *
   * @public
   */
  var _realm = /*#__PURE__*/new WeakMap();
  var _frameId = /*#__PURE__*/new WeakMap();
  class Accessibility {
    /**
     * @internal
     */
    constructor(realm, frameId = '') {
      _classPrivateFieldInitSpec(this, _realm, void 0);
      _classPrivateFieldInitSpec(this, _frameId, void 0);
      _classPrivateFieldSet(_realm, this, realm);
      _classPrivateFieldSet(_frameId, this, frameId);
    }
    /**
     * Captures the current state of the accessibility tree.
     * The returned object represents the root accessible node of the page.
     *
     * @remarks
     *
     * **NOTE** The Chrome accessibility tree contains nodes that go unused on
     * most platforms and by most screen readers. Puppeteer will discard them as
     * well for an easier to process tree, unless `interestingOnly` is set to
     * `false`.
     *
     * @example
     * An example of dumping the entire accessibility tree:
     *
     * ```ts
     * const snapshot = await page.accessibility.snapshot();
     * console.log(snapshot);
     * ```
     *
     * @example
     * An example of logging the focused node's name:
     *
     * ```ts
     * const snapshot = await page.accessibility.snapshot();
     * const node = findFocusedNode(snapshot);
     * console.log(node && node.name);
     *
     * function findFocusedNode(node) {
     *   if (node.focused) return node;
     *   for (const child of node.children || []) {
     *     const foundNode = findFocusedNode(child);
     *     return foundNode;
     *   }
     *   return null;
     * }
     * ```
     *
     * @returns An AXNode object representing the snapshot.
     */
    async snapshot(options = {}) {
      const {
        interestingOnly = true,
        root = null,
        includeIframes = false
      } = options;
      const {
        nodes
      } = await _classPrivateFieldGet(_realm, this).environment.client.send('Accessibility.getFullAXTree', {
        frameId: _classPrivateFieldGet(_frameId, this)
      });
      let backendNodeId;
      if (root) {
        const {
          node
        } = await _classPrivateFieldGet(_realm, this).environment.client.send('DOM.describeNode', {
          objectId: root.id
        });
        backendNodeId = node.backendNodeId;
      }
      const defaultRoot = AXNode.createTree(_classPrivateFieldGet(_realm, this), nodes);
      const populateIframes = async root => {
        if (root.payload.role?.value === 'Iframe') {
          const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
          };
          try {
            if (!root.payload.backendDOMNodeId) {
              return;
            }
            const handle = __addDisposableResource$4(env_1, await _classPrivateFieldGet(_realm, this).adoptBackendNode(root.payload.backendDOMNodeId), false);
            if (!handle || !('contentFrame' in handle)) {
              return;
            }
            const frame = await handle.contentFrame();
            if (!frame) {
              return;
            }
            try {
              const iframeSnapshot = await frame.accessibility.snapshot(options);
              root.iframeSnapshot = iframeSnapshot ?? undefined;
            } catch (error) {
              // Frames can get detached at any time resulting in errors.
              debugError(error);
            }
          } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
          } finally {
            __disposeResources$4(env_1);
          }
        }
        for (const child of root.children) {
          await populateIframes(child);
        }
      };
      let needle = defaultRoot;
      if (!defaultRoot) {
        return null;
      }
      if (includeIframes) {
        await populateIframes(defaultRoot);
      }
      if (backendNodeId) {
        needle = defaultRoot.find(node => {
          return node.payload.backendDOMNodeId === backendNodeId;
        });
      }
      if (!needle) {
        return null;
      }
      if (!interestingOnly) {
        return this.serializeTree(needle)[0] ?? null;
      }
      const interestingNodes = new Set();
      this.collectInterestingNodes(interestingNodes, defaultRoot, false);
      return this.serializeTree(needle, interestingNodes)[0] ?? null;
    }
    serializeTree(node, interestingNodes) {
      const children = [];
      for (const child of node.children) {
        children.push(...this.serializeTree(child, interestingNodes));
      }
      if (interestingNodes && !interestingNodes.has(node)) {
        return children;
      }
      const serializedNode = node.serialize();
      if (children.length) {
        serializedNode.children = children;
      }
      if (node.iframeSnapshot) {
        if (!serializedNode.children) {
          serializedNode.children = [];
        }
        serializedNode.children.push(node.iframeSnapshot);
      }
      return [serializedNode];
    }
    collectInterestingNodes(collection, node, insideControl) {
      if (node.isInteresting(insideControl) || node.iframeSnapshot) {
        collection.add(node);
      }
      if (node.isLeafNode()) {
        return;
      }
      insideControl = insideControl || node.isControl();
      for (const child of node.children) {
        this.collectInterestingNodes(collection, child, insideControl);
      }
    }
  }
  var _richlyEditable = /*#__PURE__*/new WeakMap();
  var _editable = /*#__PURE__*/new WeakMap();
  var _focusable = /*#__PURE__*/new WeakMap();
  var _hidden = /*#__PURE__*/new WeakMap();
  var _busy = /*#__PURE__*/new WeakMap();
  var _modal = /*#__PURE__*/new WeakMap();
  var _hasErrormessage = /*#__PURE__*/new WeakMap();
  var _hasDetails = /*#__PURE__*/new WeakMap();
  var _name2 = /*#__PURE__*/new WeakMap();
  var _role = /*#__PURE__*/new WeakMap();
  var _description = /*#__PURE__*/new WeakMap();
  var _roledescription = /*#__PURE__*/new WeakMap();
  var _live = /*#__PURE__*/new WeakMap();
  var _ignored = /*#__PURE__*/new WeakMap();
  var _cachedHasFocusableChild = /*#__PURE__*/new WeakMap();
  var _realm2 = /*#__PURE__*/new WeakMap();
  var _AXNode_brand = /*#__PURE__*/new WeakSet();
  class AXNode {
    constructor(realm, payload) {
      _classPrivateMethodInitSpec(this, _AXNode_brand);
      _defineProperty(this, "payload", void 0);
      _defineProperty(this, "children", []);
      _defineProperty(this, "iframeSnapshot", void 0);
      _classPrivateFieldInitSpec(this, _richlyEditable, false);
      _classPrivateFieldInitSpec(this, _editable, false);
      _classPrivateFieldInitSpec(this, _focusable, false);
      _classPrivateFieldInitSpec(this, _hidden, false);
      _classPrivateFieldInitSpec(this, _busy, false);
      _classPrivateFieldInitSpec(this, _modal, false);
      _classPrivateFieldInitSpec(this, _hasErrormessage, false);
      _classPrivateFieldInitSpec(this, _hasDetails, false);
      _classPrivateFieldInitSpec(this, _name2, void 0);
      _classPrivateFieldInitSpec(this, _role, void 0);
      _classPrivateFieldInitSpec(this, _description, void 0);
      _classPrivateFieldInitSpec(this, _roledescription, void 0);
      _classPrivateFieldInitSpec(this, _live, void 0);
      _classPrivateFieldInitSpec(this, _ignored, void 0);
      _classPrivateFieldInitSpec(this, _cachedHasFocusableChild, void 0);
      _classPrivateFieldInitSpec(this, _realm2, void 0);
      this.payload = payload;
      _classPrivateFieldSet(_role, this, this.payload.role ? this.payload.role.value : 'Unknown');
      _classPrivateFieldSet(_ignored, this, this.payload.ignored);
      _classPrivateFieldSet(_name2, this, this.payload.name ? this.payload.name.value : '');
      _classPrivateFieldSet(_description, this, this.payload.description ? this.payload.description.value : undefined);
      _classPrivateFieldSet(_realm2, this, realm);
      for (const property of this.payload.properties || []) {
        if (property.name === 'editable') {
          _classPrivateFieldSet(_richlyEditable, this, property.value.value === 'richtext');
          _classPrivateFieldSet(_editable, this, true);
        }
        if (property.name === 'focusable') {
          _classPrivateFieldSet(_focusable, this, property.value.value);
        }
        if (property.name === 'hidden') {
          _classPrivateFieldSet(_hidden, this, property.value.value);
        }
        if (property.name === 'busy') {
          _classPrivateFieldSet(_busy, this, property.value.value);
        }
        if (property.name === 'live') {
          _classPrivateFieldSet(_live, this, property.value.value);
        }
        if (property.name === 'modal') {
          _classPrivateFieldSet(_modal, this, property.value.value);
        }
        if (property.name === 'roledescription') {
          _classPrivateFieldSet(_roledescription, this, property.value.value);
        }
        if (property.name === 'errormessage') {
          _classPrivateFieldSet(_hasErrormessage, this, true);
        }
        if (property.name === 'details') {
          _classPrivateFieldSet(_hasDetails, this, true);
        }
      }
    }
    find(predicate) {
      if (predicate(this)) {
        return this;
      }
      for (const child of this.children) {
        const result = child.find(predicate);
        if (result) {
          return result;
        }
      }
      return null;
    }
    isLeafNode() {
      if (!this.children.length) {
        return true;
      }
      // These types of objects may have children that we use as internal
      // implementation details, but we want to expose them as leaves to platform
      // accessibility APIs because screen readers might be confused if they find
      // any children.
      if (_assertClassBrand(_AXNode_brand, this, _isPlainTextField).call(this) || _assertClassBrand(_AXNode_brand, this, _isTextOnlyObject).call(this)) {
        return true;
      }
      // Roles whose children are only presentational according to the ARIA and
      // HTML5 Specs should be hidden from screen readers.
      // (Note that whilst ARIA buttons can have only presentational children, HTML5
      // buttons are allowed to have content.)
      switch (_classPrivateFieldGet(_role, this)) {
        case 'doc-cover':
        case 'graphics-symbol':
        case 'img':
        case 'image':
        case 'Meter':
        case 'scrollbar':
        case 'slider':
        case 'separator':
        case 'progressbar':
          return true;
      }
      if (_assertClassBrand(_AXNode_brand, this, _hasFocusableChild).call(this)) {
        return false;
      }
      if (_classPrivateFieldGet(_role, this) === 'heading' && _classPrivateFieldGet(_name2, this)) {
        return true;
      }
      return false;
    }
    isControl() {
      switch (_classPrivateFieldGet(_role, this)) {
        case 'button':
        case 'checkbox':
        case 'ColorWell':
        case 'combobox':
        case 'DisclosureTriangle':
        case 'listbox':
        case 'menu':
        case 'menubar':
        case 'menuitem':
        case 'menuitemcheckbox':
        case 'menuitemradio':
        case 'radio':
        case 'scrollbar':
        case 'searchbox':
        case 'slider':
        case 'spinbutton':
        case 'switch':
        case 'tab':
        case 'textbox':
        case 'tree':
        case 'treeitem':
          return true;
        default:
          return false;
      }
    }
    isLandmark() {
      switch (_classPrivateFieldGet(_role, this)) {
        case 'banner':
        case 'complementary':
        case 'contentinfo':
        case 'form':
        case 'main':
        case 'navigation':
        case 'region':
        case 'search':
          return true;
        default:
          return false;
      }
    }
    isInteresting(insideControl) {
      const role = _classPrivateFieldGet(_role, this);
      if (role === 'Ignored' || _classPrivateFieldGet(_hidden, this) || _classPrivateFieldGet(_ignored, this)) {
        return false;
      }
      if (this.isLandmark()) {
        return true;
      }
      if (_classPrivateFieldGet(_focusable, this) || _classPrivateFieldGet(_richlyEditable, this) || _classPrivateFieldGet(_busy, this) || _classPrivateFieldGet(_live, this) && _classPrivateFieldGet(_live, this) !== 'off' || _classPrivateFieldGet(_modal, this) || _classPrivateFieldGet(_hasErrormessage, this) || _classPrivateFieldGet(_hasDetails, this) || _classPrivateFieldGet(_roledescription, this)) {
        return true;
      }
      // If it's not focusable but has a control role, then it's interesting.
      if (this.isControl()) {
        return true;
      }
      // A non focusable child of a control is not interesting
      if (insideControl) {
        return false;
      }
      return this.isLeafNode() && (!!_classPrivateFieldGet(_name2, this) || !!_classPrivateFieldGet(_description, this));
    }
    serialize() {
      const properties = new Map();
      for (const property of this.payload.properties || []) {
        properties.set(property.name.toLowerCase(), property.value.value);
      }
      if (this.payload.name) {
        properties.set('name', this.payload.name.value);
      }
      if (this.payload.value) {
        properties.set('value', this.payload.value.value);
      }
      if (this.payload.description) {
        properties.set('description', this.payload.description.value);
      }
      const node = {
        role: _classPrivateFieldGet(_role, this),
        elementHandle: async () => {
          const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
          };
          try {
            if (!this.payload.backendDOMNodeId) {
              return null;
            }
            const handle = __addDisposableResource$4(env_2, await _classPrivateFieldGet(_realm2, this).adoptBackendNode(this.payload.backendDOMNodeId), false);
            // Since Text nodes are not elements, we want to
            // return a handle to the parent element for them.
            return await handle.evaluateHandle(node => {
              return node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
            });
          } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
          } finally {
            __disposeResources$4(env_2);
          }
        },
        backendNodeId: this.payload.backendDOMNodeId,
        // LoaderId is an experimental mechanism to establish unique IDs across
        // navigations.
        loaderId: _classPrivateFieldGet(_realm2, this).environment._loaderId
      };
      const userStringProperties = ['name', 'value', 'description', 'keyshortcuts', 'roledescription', 'valuetext', 'url'];
      const getUserStringPropertyValue = key => {
        return properties.get(key);
      };
      for (const userStringProperty of userStringProperties) {
        if (!properties.has(userStringProperty)) {
          continue;
        }
        node[userStringProperty] = getUserStringPropertyValue(userStringProperty);
      }
      const booleanProperties = ['disabled', 'expanded', 'focused', 'modal', 'multiline', 'multiselectable', 'readonly', 'required', 'selected', 'busy', 'atomic'];
      const getBooleanPropertyValue = key => {
        return !!properties.get(key);
      };
      for (const booleanProperty of booleanProperties) {
        // RootWebArea's treat focus differently than other nodes. They report whether
        // their frame has focus, not whether focus is specifically on the root
        // node.
        if (booleanProperty === 'focused' && _classPrivateFieldGet(_role, this) === 'RootWebArea') {
          continue;
        }
        if (!properties.has(booleanProperty)) {
          continue;
        }
        node[booleanProperty] = getBooleanPropertyValue(booleanProperty);
      }
      const tristateProperties = ['checked', 'pressed'];
      for (const tristateProperty of tristateProperties) {
        if (!properties.has(tristateProperty)) {
          continue;
        }
        const value = properties.get(tristateProperty);
        node[tristateProperty] = value === 'mixed' ? 'mixed' : value === 'true' ? true : false;
      }
      const numericalProperties = ['level', 'valuemax', 'valuemin'];
      const getNumericalPropertyValue = key => {
        return properties.get(key);
      };
      for (const numericalProperty of numericalProperties) {
        if (!properties.has(numericalProperty)) {
          continue;
        }
        node[numericalProperty] = getNumericalPropertyValue(numericalProperty);
      }
      const tokenProperties = ['autocomplete', 'haspopup', 'invalid', 'orientation', 'live', 'relevant', 'errormessage', 'details'];
      const getTokenPropertyValue = key => {
        return properties.get(key);
      };
      for (const tokenProperty of tokenProperties) {
        const value = getTokenPropertyValue(tokenProperty);
        if (!value || value === 'false') {
          continue;
        }
        node[tokenProperty] = getTokenPropertyValue(tokenProperty);
      }
      return node;
    }
    static createTree(realm, payloads) {
      const nodeById = new Map();
      for (const payload of payloads) {
        nodeById.set(payload.nodeId, new AXNode(realm, payload));
      }
      for (const node of nodeById.values()) {
        for (const childId of node.payload.childIds || []) {
          const child = nodeById.get(childId);
          if (child) {
            node.children.push(child);
          }
        }
      }
      return nodeById.values().next().value ?? null;
    }
  }
  function _isPlainTextField() {
    if (_classPrivateFieldGet(_richlyEditable, this)) {
      return false;
    }
    if (_classPrivateFieldGet(_editable, this)) {
      return true;
    }
    return _classPrivateFieldGet(_role, this) === 'textbox' || _classPrivateFieldGet(_role, this) === 'searchbox';
  }
  function _isTextOnlyObject() {
    const role = _classPrivateFieldGet(_role, this);
    return role === 'LineBreak' || role === 'text' || role === 'InlineTextBox' || role === 'StaticText';
  }
  function _hasFocusableChild() {
    if (_classPrivateFieldGet(_cachedHasFocusableChild, this) === undefined) {
      _classPrivateFieldSet(_cachedHasFocusableChild, this, false);
      for (const child of this.children) {
        if (_classPrivateFieldGet(_focusable, child) || _assertClassBrand(_AXNode_brand, child, _hasFocusableChild).call(child)) {
          _classPrivateFieldSet(_cachedHasFocusableChild, this, true);
          break;
        }
      }
    }
    return _classPrivateFieldGet(_cachedHasFocusableChild, this);
  }
  var __addDisposableResource$3 = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$3 = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  /**
   * @internal
   */
  var _name3 = /*#__PURE__*/new WeakMap();
  var _fn2 = /*#__PURE__*/new WeakMap();
  var _initSource = /*#__PURE__*/new WeakMap();
  class Binding {
    constructor(name, fn, initSource) {
      _classPrivateFieldInitSpec(this, _name3, void 0);
      _classPrivateFieldInitSpec(this, _fn2, void 0);
      _classPrivateFieldInitSpec(this, _initSource, void 0);
      _classPrivateFieldSet(_name3, this, name);
      _classPrivateFieldSet(_fn2, this, fn);
      _classPrivateFieldSet(_initSource, this, initSource);
    }
    get name() {
      return _classPrivateFieldGet(_name3, this);
    }
    get initSource() {
      return _classPrivateFieldGet(_initSource, this);
    }
    /**
     * @param context - Context to run the binding in; the context should have
     * the binding added to it beforehand.
     * @param id - ID of the call. This should come from the CDP
     * `onBindingCalled` response.
     * @param args - Plain arguments from CDP.
     */
    async run(context, id, args, isTrivial) {
      const stack = new DisposableStack();
      try {
        if (!isTrivial) {
          const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
          };
          try {
            // Getting non-trivial arguments.
            const handles = __addDisposableResource$3(env_1, await context.evaluateHandle((name, seq) => {
              // @ts-expect-error Code is evaluated in a different context.
              return globalThis[name].args.get(seq);
            }, _classPrivateFieldGet(_name3, this), id), false);
            const properties = await handles.getProperties();
            for (const [index, handle] of properties) {
              // This is not straight-forward since some arguments can stringify, but
              // aren't plain objects so add subtypes when the use-case arises.
              if (index in args) {
                switch (handle.remoteObject().subtype) {
                  case 'node':
                    args[+index] = handle;
                    break;
                  default:
                    stack.use(handle);
                }
              } else {
                stack.use(handle);
              }
            }
          } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
          } finally {
            __disposeResources$3(env_1);
          }
        }
        await context.evaluate((name, seq, result) => {
          // @ts-expect-error Code is evaluated in a different context.
          const callbacks = globalThis[name].callbacks;
          callbacks.get(seq).resolve(result);
          callbacks.delete(seq);
        }, _classPrivateFieldGet(_name3, this), id, await _classPrivateFieldGet(_fn2, this).call(this, ...args));
        for (const arg of args) {
          if (arg instanceof JSHandle) {
            stack.use(arg);
          }
        }
      } catch (error) {
        if (isErrorLike(error)) {
          await context.evaluate((name, seq, message, stack) => {
            const error = new Error(message);
            error.stack = stack;
            // @ts-expect-error Code is evaluated in a different context.
            const callbacks = globalThis[name].callbacks;
            callbacks.get(seq).reject(error);
            callbacks.delete(seq);
          }, _classPrivateFieldGet(_name3, this), id, error.message, error.stack).catch(debugError);
        } else {
          await context.evaluate((name, seq, error) => {
            // @ts-expect-error Code is evaluated in a different context.
            const callbacks = globalThis[name].callbacks;
            callbacks.get(seq).reject(error);
            callbacks.delete(seq);
          }, _classPrivateFieldGet(_name3, this), id, error).catch(debugError);
        }
      }
    }
  }

  /**
   * @internal
   */
  var _connection = /*#__PURE__*/new WeakMap();
  class CdpBluetoothEmulation {
    constructor(connection) {
      _classPrivateFieldInitSpec(this, _connection, void 0);
      _classPrivateFieldSet(_connection, this, connection);
    }
    async emulateAdapter(state, leSupported = true) {
      // Bluetooth spec requires overriding the existing adapter (step 6). From the CDP
      // perspective, it means disabling the emulation first.
      // https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateAdapter-command
      await _classPrivateFieldGet(_connection, this).send('BluetoothEmulation.disable');
      await _classPrivateFieldGet(_connection, this).send('BluetoothEmulation.enable', {
        state,
        leSupported
      });
    }
    async disableEmulation() {
      await _classPrivateFieldGet(_connection, this).send('BluetoothEmulation.disable');
    }
    async simulatePreconnectedPeripheral(preconnectedPeripheral) {
      await _classPrivateFieldGet(_connection, this).send('BluetoothEmulation.simulatePreconnectedPeripheral', preconnectedPeripheral);
    }
  }

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * ConsoleMessage objects are dispatched by page via the 'console' event.
   * @public
   */
  var _type2 = /*#__PURE__*/new WeakMap();
  var _text = /*#__PURE__*/new WeakMap();
  var _args2 = /*#__PURE__*/new WeakMap();
  var _stackTraceLocations = /*#__PURE__*/new WeakMap();
  var _frame = /*#__PURE__*/new WeakMap();
  var _rawStackTrace = /*#__PURE__*/new WeakMap();
  var _targetId = /*#__PURE__*/new WeakMap();
  class ConsoleMessage {
    /**
     * @internal
     */
    constructor(type, text, args, stackTraceLocations, frame, rawStackTrace, targetId) {
      _classPrivateFieldInitSpec(this, _type2, void 0);
      _classPrivateFieldInitSpec(this, _text, void 0);
      _classPrivateFieldInitSpec(this, _args2, void 0);
      _classPrivateFieldInitSpec(this, _stackTraceLocations, void 0);
      _classPrivateFieldInitSpec(this, _frame, void 0);
      _classPrivateFieldInitSpec(this, _rawStackTrace, void 0);
      _classPrivateFieldInitSpec(this, _targetId, void 0);
      _classPrivateFieldSet(_type2, this, type);
      _classPrivateFieldSet(_text, this, text);
      _classPrivateFieldSet(_args2, this, args);
      _classPrivateFieldSet(_stackTraceLocations, this, stackTraceLocations);
      _classPrivateFieldSet(_frame, this, frame);
      _classPrivateFieldSet(_rawStackTrace, this, rawStackTrace);
      _classPrivateFieldSet(_targetId, this, targetId);
    }
    /**
     * The type of the console message.
     */
    type() {
      return _classPrivateFieldGet(_type2, this);
    }
    /**
     * The text of the console message.
     */
    text() {
      return _classPrivateFieldGet(_text, this);
    }
    /**
     * An array of arguments passed to the console.
     */
    args() {
      return _classPrivateFieldGet(_args2, this);
    }
    /**
     * The location of the console message.
     */
    location() {
      return _classPrivateFieldGet(_stackTraceLocations, this)[0] ?? (_classPrivateFieldGet(_frame, this) ? {
        url: _classPrivateFieldGet(_frame, this).url()
      } : {});
    }
    /**
     * The array of locations on the stack of the console message.
     */
    stackTrace() {
      return _classPrivateFieldGet(_stackTraceLocations, this);
    }
    /**
     * The underlying protocol stack trace if available.
     *
     * @internal
     */
    _rawStackTrace() {
      return _classPrivateFieldGet(_rawStackTrace, this);
    }
    /**
     * The targetId from which this console message originated.
     *
     * @internal
     */
    _targetId() {
      return _classPrivateFieldGet(_targetId, this);
    }
  }

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * File choosers let you react to the page requesting for a file.
   *
   * @remarks
   * `FileChooser` instances are returned via the {@link Page.waitForFileChooser} method.
   *
   * In browsers, only one file chooser can be opened at a time.
   * All file choosers must be accepted or canceled. Not doing so will prevent
   * subsequent file choosers from appearing.
   *
   * @example
   *
   * ```ts
   * const [fileChooser] = await Promise.all([
   *   page.waitForFileChooser(),
   *   page.click('#upload-file-button'), // some button that triggers file selection
   * ]);
   * await fileChooser.accept(['/tmp/myfile.pdf']);
   * ```
   *
   * @public
   */
  var _element = /*#__PURE__*/new WeakMap();
  var _multiple = /*#__PURE__*/new WeakMap();
  var _handled = /*#__PURE__*/new WeakMap();
  class FileChooser {
    /**
     * @internal
     */
    constructor(element, multiple) {
      _classPrivateFieldInitSpec(this, _element, void 0);
      _classPrivateFieldInitSpec(this, _multiple, void 0);
      _classPrivateFieldInitSpec(this, _handled, false);
      _classPrivateFieldSet(_element, this, element);
      _classPrivateFieldSet(_multiple, this, multiple);
    }
    /**
     * Whether file chooser allow for
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple | multiple}
     * file selection.
     */
    isMultiple() {
      return _classPrivateFieldGet(_multiple, this);
    }
    /**
     * Accept the file chooser request with the given file paths.
     *
     * @remarks This will not validate whether the file paths exists. Also, if a
     * path is relative, then it is resolved against the
     * {@link https://nodejs.org/api/process.html#process_process_cwd | current working directory}.
     * For locals script connecting to remote chrome environments, paths must be
     * absolute.
     */
    async accept(paths) {
      assert(!_classPrivateFieldGet(_handled, this), 'Cannot accept FileChooser which is already handled!');
      _classPrivateFieldSet(_handled, this, true);
      await _classPrivateFieldGet(_element, this).uploadFile(...paths);
    }
    /**
     * Closes the file chooser without selecting any files.
     */
    async cancel() {
      assert(!_classPrivateFieldGet(_handled, this), 'Cannot cancel FileChooser which is already handled!');
      _classPrivateFieldSet(_handled, this, true);
      // XXX: These events should converted to trusted events. Perhaps do this
      // in `DOM.setFileInputFiles`?
      await _classPrivateFieldGet(_element, this).evaluate(element => {
        element.dispatchEvent(new Event('cancel', {
          bubbles: true
        }));
      });
    }
  }

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * We use symbols to prevent any external parties listening to these events.
   * They are internal to Puppeteer.
   *
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/no-namespace
  exports.NetworkManagerEvent = void 0;
  (function (NetworkManagerEvent) {
    NetworkManagerEvent.Request = Symbol('NetworkManager.Request');
    NetworkManagerEvent.RequestServedFromCache = Symbol('NetworkManager.RequestServedFromCache');
    NetworkManagerEvent.Response = Symbol('NetworkManager.Response');
    NetworkManagerEvent.RequestFailed = Symbol('NetworkManager.RequestFailed');
    NetworkManagerEvent.RequestFinished = Symbol('NetworkManager.RequestFinished');
  })(exports.NetworkManagerEvent || (exports.NetworkManagerEvent = {}));

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Manages callbacks and their IDs for the protocol request/response communication.
   *
   * @internal
   */
  var _callbacks = /*#__PURE__*/new WeakMap();
  var _idGenerator = /*#__PURE__*/new WeakMap();
  class CallbackRegistry {
    constructor(idGenerator) {
      _classPrivateFieldInitSpec(this, _callbacks, new Map());
      _classPrivateFieldInitSpec(this, _idGenerator, void 0);
      _classPrivateFieldSet(_idGenerator, this, idGenerator);
    }
    has(id) {
      return _classPrivateFieldGet(_callbacks, this).has(id);
    }
    create(label, timeout, request) {
      const callback = new Callback(_classPrivateFieldGet(_idGenerator, this).call(this), label, timeout);
      _classPrivateFieldGet(_callbacks, this).set(callback.id, callback);
      try {
        request(callback.id);
      } catch (error) {
        // We still throw sync errors synchronously and clean up the scheduled
        // callback.
        callback.promise.catch(debugError).finally(() => {
          _classPrivateFieldGet(_callbacks, this).delete(callback.id);
        });
        callback.reject(error);
        throw error;
      }
      // Must only have sync code up until here.
      return callback.promise.finally(() => {
        _classPrivateFieldGet(_callbacks, this).delete(callback.id);
      });
    }
    reject(id, message, originalMessage) {
      const callback = _classPrivateFieldGet(_callbacks, this).get(id);
      if (!callback) {
        return;
      }
      this._reject(callback, message, originalMessage);
    }
    rejectRaw(id, error) {
      const callback = _classPrivateFieldGet(_callbacks, this).get(id);
      if (!callback) {
        return;
      }
      callback.reject(error);
    }
    _reject(callback, errorMessage, originalMessage) {
      let error;
      let message;
      if (errorMessage instanceof ProtocolError) {
        error = errorMessage;
        error.cause = callback.error;
        message = errorMessage.message;
      } else {
        error = callback.error;
        message = errorMessage;
      }
      callback.reject(rewriteError$1(error, `Protocol error (${callback.label}): ${message}`, originalMessage));
    }
    resolve(id, value) {
      const callback = _classPrivateFieldGet(_callbacks, this).get(id);
      if (!callback) {
        return;
      }
      callback.resolve(value);
    }
    clear() {
      for (const callback of _classPrivateFieldGet(_callbacks, this).values()) {
        // TODO: probably we can accept error messages as params.
        this._reject(callback, new TargetCloseError('Target closed'));
      }
      _classPrivateFieldGet(_callbacks, this).clear();
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
      const result = [];
      for (const callback of _classPrivateFieldGet(_callbacks, this).values()) {
        result.push(new Error(`${callback.label} timed out. Trace: ${callback.error.stack}`));
      }
      return result;
    }
  }
  /**
   * @internal
   */
  var _id3 = /*#__PURE__*/new WeakMap();
  var _error2 = /*#__PURE__*/new WeakMap();
  var _deferred = /*#__PURE__*/new WeakMap();
  var _timer = /*#__PURE__*/new WeakMap();
  var _label = /*#__PURE__*/new WeakMap();
  class Callback {
    constructor(id, label, timeout) {
      _classPrivateFieldInitSpec(this, _id3, void 0);
      _classPrivateFieldInitSpec(this, _error2, new ProtocolError());
      _classPrivateFieldInitSpec(this, _deferred, Deferred.create());
      _classPrivateFieldInitSpec(this, _timer, void 0);
      _classPrivateFieldInitSpec(this, _label, void 0);
      _classPrivateFieldSet(_id3, this, id);
      _classPrivateFieldSet(_label, this, label);
      if (timeout) {
        _classPrivateFieldSet(_timer, this, setTimeout(() => {
          _classPrivateFieldGet(_deferred, this).reject(rewriteError$1(_classPrivateFieldGet(_error2, this), `${label} timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.`));
        }, timeout));
      }
    }
    resolve(value) {
      clearTimeout(_classPrivateFieldGet(_timer, this));
      _classPrivateFieldGet(_deferred, this).resolve(value);
    }
    reject(error) {
      clearTimeout(_classPrivateFieldGet(_timer, this));
      _classPrivateFieldGet(_deferred, this).reject(error);
    }
    get id() {
      return _classPrivateFieldGet(_id3, this);
    }
    get promise() {
      return _classPrivateFieldGet(_deferred, this).valueOrThrow();
    }
    get error() {
      return _classPrivateFieldGet(_error2, this);
    }
    get label() {
      return _classPrivateFieldGet(_label, this);
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _sessionId = /*#__PURE__*/new WeakMap();
  var _targetType = /*#__PURE__*/new WeakMap();
  var _callbacks2 = /*#__PURE__*/new WeakMap();
  var _connection2 = /*#__PURE__*/new WeakMap();
  var _parentSessionId = /*#__PURE__*/new WeakMap();
  var _target = /*#__PURE__*/new WeakMap();
  var _rawErrors = /*#__PURE__*/new WeakMap();
  var _detached = /*#__PURE__*/new WeakMap();
  class CdpCDPSession extends CDPSession {
    /**
     * @internal
     */
    constructor(connection, targetType, sessionId, parentSessionId, rawErrors) {
      super();
      _classPrivateFieldInitSpec(this, _sessionId, void 0);
      _classPrivateFieldInitSpec(this, _targetType, void 0);
      _classPrivateFieldInitSpec(this, _callbacks2, void 0);
      _classPrivateFieldInitSpec(this, _connection2, void 0);
      _classPrivateFieldInitSpec(this, _parentSessionId, void 0);
      _classPrivateFieldInitSpec(this, _target, void 0);
      _classPrivateFieldInitSpec(this, _rawErrors, false);
      _classPrivateFieldInitSpec(this, _detached, false);
      _classPrivateFieldSet(_connection2, this, connection);
      _classPrivateFieldSet(_targetType, this, targetType);
      _classPrivateFieldSet(_callbacks2, this, new CallbackRegistry(connection._idGenerator));
      _classPrivateFieldSet(_sessionId, this, sessionId);
      _classPrivateFieldSet(_parentSessionId, this, parentSessionId);
      _classPrivateFieldSet(_rawErrors, this, rawErrors);
    }
    /**
     * Sets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    setTarget(target) {
      _classPrivateFieldSet(_target, this, target);
    }
    /**
     * Gets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    target() {
      assert(_classPrivateFieldGet(_target, this), 'Target must exist');
      return _classPrivateFieldGet(_target, this);
    }
    connection() {
      return _classPrivateFieldGet(_connection2, this);
    }
    get detached() {
      return _classPrivateFieldGet(_connection2, this)._closed || _classPrivateFieldGet(_detached, this);
    }
    parentSession() {
      if (!_classPrivateFieldGet(_parentSessionId, this)) {
        // In some cases, e.g., DevTools pages there is no parent session. In this
        // case, we treat the current session as the parent session.
        return this;
      }
      const parent = _classPrivateFieldGet(_connection2, this)?.session(_classPrivateFieldGet(_parentSessionId, this));
      return parent ?? undefined;
    }
    send(method, params, options) {
      if (this.detached) {
        return Promise.reject(new TargetCloseError(`Protocol error (${method}): Session closed. Most likely the ${_classPrivateFieldGet(_targetType, this)} has been closed.`));
      }
      return _classPrivateFieldGet(_connection2, this)._rawSend(_classPrivateFieldGet(_callbacks2, this), method, params, _classPrivateFieldGet(_sessionId, this), options).catch(error => {
        if (error instanceof Error && error.message.includes('Session with given id not found')) {
          this.onClosed();
          throw new TargetCloseError(`Protocol error (${method}): Session with given id not found.`);
        }
        throw error;
      });
    }
    /**
     * @internal
     */
    onMessage(object) {
      if (object.id) {
        if (object.error) {
          if (_classPrivateFieldGet(_rawErrors, this)) {
            _classPrivateFieldGet(_callbacks2, this).rejectRaw(object.id, object.error);
          } else {
            _classPrivateFieldGet(_callbacks2, this).reject(object.id, createProtocolErrorMessage(object), object.error.message);
          }
        } else {
          _classPrivateFieldGet(_callbacks2, this).resolve(object.id, object.result);
        }
      } else {
        assert(!object.id);
        this.emit(object.method, object.params);
      }
    }
    /**
     * Detaches the cdpSession from the target. Once detached, the cdpSession object
     * won't emit any events and can't be used to send messages.
     */
    async detach() {
      if (this.detached) {
        throw new Error(`Session already detached. Most likely the ${_classPrivateFieldGet(_targetType, this)} has been closed.`);
      }
      await _classPrivateFieldGet(_connection2, this).send('Target.detachFromTarget', {
        sessionId: _classPrivateFieldGet(_sessionId, this)
      });
      _classPrivateFieldSet(_detached, this, true);
    }
    /**
     * @internal
     */
    onClosed() {
      _classPrivateFieldGet(_callbacks2, this).clear();
      _classPrivateFieldSet(_detached, this, true);
      this.emit(exports.CDPSessionEvent.Disconnected, undefined);
    }
    /**
     * Returns the session's id.
     */
    id() {
      return _classPrivateFieldGet(_sessionId, this);
    }
    /**
     * @internal
     */
    hasCallback(id) {
      return _classPrivateFieldGet(_callbacks2, this).has(id);
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
      return _classPrivateFieldGet(_callbacks2, this).getPendingProtocolErrors();
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  const debugProtocolSend = debug('puppeteer:protocol:SEND ►');
  const debugProtocolReceive = debug('puppeteer:protocol:RECV ◀');
  /**
   * @public
   */
  var _url2 = /*#__PURE__*/new WeakMap();
  var _transport = /*#__PURE__*/new WeakMap();
  var _delay2 = /*#__PURE__*/new WeakMap();
  var _timeout2 = /*#__PURE__*/new WeakMap();
  var _sessions = /*#__PURE__*/new WeakMap();
  var _closed = /*#__PURE__*/new WeakMap();
  var _manuallyAttached = /*#__PURE__*/new WeakMap();
  var _rejectEmulateNetworkConditionsCalls = /*#__PURE__*/new WeakMap();
  var _callbacks3 = /*#__PURE__*/new WeakMap();
  var _rawErrors2 = /*#__PURE__*/new WeakMap();
  var _idGenerator2 = /*#__PURE__*/new WeakMap();
  var _Connection_brand = /*#__PURE__*/new WeakSet();
  class Connection extends EventEmitter {
    constructor(url, transport, delay = 0, timeout, rawErrors = false, idGenerator = createIncrementalIdGenerator()) {
      super();
      _classPrivateMethodInitSpec(this, _Connection_brand);
      _classPrivateFieldInitSpec(this, _url2, void 0);
      _classPrivateFieldInitSpec(this, _transport, void 0);
      _classPrivateFieldInitSpec(this, _delay2, void 0);
      _classPrivateFieldInitSpec(this, _timeout2, void 0);
      _classPrivateFieldInitSpec(this, _sessions, new Map());
      _classPrivateFieldInitSpec(this, _closed, false);
      _classPrivateFieldInitSpec(this, _manuallyAttached, new Set());
      _classPrivateFieldInitSpec(this, _rejectEmulateNetworkConditionsCalls, false);
      _classPrivateFieldInitSpec(this, _callbacks3, void 0);
      _classPrivateFieldInitSpec(this, _rawErrors2, false);
      _classPrivateFieldInitSpec(this, _idGenerator2, void 0);
      _classPrivateFieldSet(_rawErrors2, this, rawErrors);
      _classPrivateFieldSet(_idGenerator2, this, idGenerator);
      _classPrivateFieldSet(_callbacks3, this, new CallbackRegistry(idGenerator));
      _classPrivateFieldSet(_url2, this, url);
      _classPrivateFieldSet(_delay2, this, delay);
      _classPrivateFieldSet(_timeout2, this, timeout ?? 180_000);
      _classPrivateFieldSet(_transport, this, transport);
      _classPrivateFieldGet(_transport, this).onmessage = this.onMessage.bind(this);
      _classPrivateFieldGet(_transport, this).onclose = _assertClassBrand(_Connection_brand, this, _onClose).bind(this);
    }
    static fromSession(session) {
      return session.connection();
    }
    /**
     * @internal
     */
    get delay() {
      return _classPrivateFieldGet(_delay2, this);
    }
    get timeout() {
      return _classPrivateFieldGet(_timeout2, this);
    }
    /**
     * @internal
     */
    get rejectEmulateNetworkConditionsCalls() {
      return _classPrivateFieldGet(_rejectEmulateNetworkConditionsCalls, this);
    }
    set rejectEmulateNetworkConditionsCalls(value) {
      _classPrivateFieldSet(_rejectEmulateNetworkConditionsCalls, this, value);
    }
    /**
     * @internal
     */
    get _closed() {
      return _classPrivateFieldGet(_closed, this);
    }
    /**
     * @internal
     */
    get _idGenerator() {
      return _classPrivateFieldGet(_idGenerator2, this);
    }
    /**
     * @internal
     */
    get _sessions() {
      return _classPrivateFieldGet(_sessions, this);
    }
    /**
     * @internal
     */
    _session(sessionId) {
      return _classPrivateFieldGet(_sessions, this).get(sessionId) || null;
    }
    /**
     * @param sessionId - The session id
     * @returns The current CDP session if it exists
     */
    session(sessionId) {
      return this._session(sessionId);
    }
    url() {
      return _classPrivateFieldGet(_url2, this);
    }
    send(method, params, options) {
      // There is only ever 1 param arg passed, but the Protocol defines it as an
      // array of 0 or 1 items See this comment:
      // https://github.com/ChromeDevTools/devtools-protocol/pull/113#issuecomment-412603285
      // which explains why the protocol defines the params this way for better
      // type-inference.
      // So now we check if there are any params or not and deal with them accordingly.
      return this._rawSend(_classPrivateFieldGet(_callbacks3, this), method, params, undefined, options);
    }
    /**
     * @internal
     */
    _rawSend(callbacks, method, params, sessionId, options) {
      if (_classPrivateFieldGet(_closed, this)) {
        return Promise.reject(new ConnectionClosedError('Connection closed.'));
      }
      if (method === 'Network.emulateNetworkConditions' && this.rejectEmulateNetworkConditionsCalls) {
        return Promise.reject(new Error('Cannot reset network conditions: rule-based emulation is enabled.'));
      }
      return callbacks.create(method, options?.timeout ?? _classPrivateFieldGet(_timeout2, this), id => {
        const stringifiedMessage = JSON.stringify({
          method,
          params,
          id,
          sessionId
        });
        debugProtocolSend(stringifiedMessage);
        _classPrivateFieldGet(_transport, this).send(stringifiedMessage);
      });
    }
    /**
     * @internal
     */
    async closeBrowser() {
      await this.send('Browser.close');
    }
    /**
     * @internal
     */
    async onMessage(message) {
      if (_classPrivateFieldGet(_delay2, this)) {
        await new Promise(r => {
          return setTimeout(r, _classPrivateFieldGet(_delay2, this));
        });
      }
      debugProtocolReceive(message);
      const object = JSON.parse(message);
      if (object.method === 'Target.attachedToTarget') {
        const sessionId = object.params.sessionId;
        const session = new CdpCDPSession(this, object.params.targetInfo.type, sessionId, object.sessionId, _classPrivateFieldGet(_rawErrors2, this));
        _classPrivateFieldGet(_sessions, this).set(sessionId, session);
        this.emit(exports.CDPSessionEvent.SessionAttached, session);
        const parentSession = _classPrivateFieldGet(_sessions, this).get(object.sessionId);
        if (parentSession) {
          parentSession.emit(exports.CDPSessionEvent.SessionAttached, session);
        }
      } else if (object.method === 'Target.detachedFromTarget') {
        const session = _classPrivateFieldGet(_sessions, this).get(object.params.sessionId);
        if (session) {
          session.onClosed();
          _classPrivateFieldGet(_sessions, this).delete(object.params.sessionId);
          this.emit(exports.CDPSessionEvent.SessionDetached, session);
          const parentSession = _classPrivateFieldGet(_sessions, this).get(object.sessionId);
          if (parentSession) {
            parentSession.emit(exports.CDPSessionEvent.SessionDetached, session);
          }
        }
      }
      if (object.sessionId) {
        const session = _classPrivateFieldGet(_sessions, this).get(object.sessionId);
        if (session) {
          session.onMessage(object);
        }
      } else if (object.id) {
        if (_classPrivateFieldGet(_callbacks3, this).has(object.id)) {
          if (object.error) {
            if (_classPrivateFieldGet(_rawErrors2, this)) {
              _classPrivateFieldGet(_callbacks3, this).rejectRaw(object.id, object.error);
            } else {
              _classPrivateFieldGet(_callbacks3, this).reject(object.id, createProtocolErrorMessage(object), object.error.message);
            }
          } else {
            _classPrivateFieldGet(_callbacks3, this).resolve(object.id, object.result);
          }
        } else {
          for (const session of _classPrivateFieldGet(_sessions, this).values()) {
            if (session.hasCallback(object.id)) {
              session.onMessage(object);
              break;
            }
          }
        }
      } else {
        this.emit(object.method, object.params);
      }
    }
    dispose() {
      _assertClassBrand(_Connection_brand, this, _onClose).call(this);
      _classPrivateFieldGet(_transport, this).close();
    }
    /**
     * @internal
     */
    isAutoAttached(targetId) {
      return !_classPrivateFieldGet(_manuallyAttached, this).has(targetId);
    }
    /**
     * @internal
     */
    async _createSession(targetInfo, isAutoAttachEmulated = true) {
      if (!isAutoAttachEmulated) {
        _classPrivateFieldGet(_manuallyAttached, this).add(targetInfo.targetId);
      }
      const {
        sessionId
      } = await this.send('Target.attachToTarget', {
        targetId: targetInfo.targetId,
        flatten: true
      });
      _classPrivateFieldGet(_manuallyAttached, this).delete(targetInfo.targetId);
      const session = _classPrivateFieldGet(_sessions, this).get(sessionId);
      if (!session) {
        throw new Error('CDPSession creation failed.');
      }
      return session;
    }
    /**
     * @param targetInfo - The target info
     * @returns The CDP session that is created
     */
    async createSession(targetInfo) {
      return await this._createSession(targetInfo, false);
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
      const result = [];
      result.push(..._classPrivateFieldGet(_callbacks3, this).getPendingProtocolErrors());
      for (const session of _classPrivateFieldGet(_sessions, this).values()) {
        result.push(...session.getPendingProtocolErrors());
      }
      return result;
    }
  }
  /**
   * @internal
   */
  function _onClose() {
    if (_classPrivateFieldGet(_closed, this)) {
      return;
    }
    _classPrivateFieldSet(_closed, this, true);
    _classPrivateFieldGet(_transport, this).onmessage = undefined;
    _classPrivateFieldGet(_transport, this).onclose = undefined;
    _classPrivateFieldGet(_callbacks3, this).clear();
    for (const session of _classPrivateFieldGet(_sessions, this).values()) {
      session.onClosed();
    }
    _classPrivateFieldGet(_sessions, this).clear();
    this.emit(exports.CDPSessionEvent.Disconnected, undefined);
  }
  function isTargetClosedError(error) {
    return error instanceof TargetCloseError;
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * The Coverage class provides methods to gather information about parts of
   * JavaScript and CSS that were used by the page.
   *
   * @remarks
   * To output coverage in a form consumable by {@link https://github.com/istanbuljs | Istanbul},
   * see {@link https://github.com/istanbuljs/puppeteer-to-istanbul | puppeteer-to-istanbul}.
   *
   * @example
   * An example of using JavaScript and CSS coverage to get percentage of initially
   * executed code:
   *
   * ```ts
   * // Enable both JavaScript and CSS coverage
   * await Promise.all([
   *   page.coverage.startJSCoverage(),
   *   page.coverage.startCSSCoverage(),
   * ]);
   * // Navigate to page
   * await page.goto('https://example.com');
   * // Disable both JavaScript and CSS coverage
   * const [jsCoverage, cssCoverage] = await Promise.all([
   *   page.coverage.stopJSCoverage(),
   *   page.coverage.stopCSSCoverage(),
   * ]);
   * let totalBytes = 0;
   * let usedBytes = 0;
   * const coverage = [...jsCoverage, ...cssCoverage];
   * for (const entry of coverage) {
   *   totalBytes += entry.text.length;
   *   for (const range of entry.ranges) usedBytes += range.end - range.start - 1;
   * }
   * console.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);
   * ```
   *
   * @public
   */
  var _jsCoverage = /*#__PURE__*/new WeakMap();
  var _cssCoverage = /*#__PURE__*/new WeakMap();
  class Coverage {
    /**
     * @internal
     */
    constructor(client) {
      _classPrivateFieldInitSpec(this, _jsCoverage, void 0);
      _classPrivateFieldInitSpec(this, _cssCoverage, void 0);
      _classPrivateFieldSet(_jsCoverage, this, new JSCoverage(client));
      _classPrivateFieldSet(_cssCoverage, this, new CSSCoverage(client));
    }
    /**
     * @internal
     */
    updateClient(client) {
      _classPrivateFieldGet(_jsCoverage, this).updateClient(client);
      _classPrivateFieldGet(_cssCoverage, this).updateClient(client);
    }
    /**
     * @param options - Set of configurable options for coverage defaults to
     * `resetOnNavigation : true, reportAnonymousScripts : false,`
     * `includeRawScriptCoverage : false, useBlockCoverage : true`
     * @returns Promise that resolves when coverage is started.
     *
     * @remarks
     * Anonymous scripts are ones that don't have an associated url. These are
     * scripts that are dynamically created on the page using `eval` or
     * `new Function`. If `reportAnonymousScripts` is set to `true`, anonymous
     * scripts URL will start with `debugger://VM` (unless a magic //# sourceURL
     * comment is present, in which case that will the be URL).
     */
    async startJSCoverage(options = {}) {
      return await _classPrivateFieldGet(_jsCoverage, this).start(options);
    }
    /**
     * Promise that resolves to the array of coverage reports for
     * all scripts.
     *
     * @remarks
     * JavaScript Coverage doesn't include anonymous scripts by default.
     * However, scripts with sourceURLs are reported.
     */
    async stopJSCoverage() {
      return await _classPrivateFieldGet(_jsCoverage, this).stop();
    }
    /**
     * @param options - Set of configurable options for coverage, defaults to
     * `resetOnNavigation : true`
     * @returns Promise that resolves when coverage is started.
     */
    async startCSSCoverage(options = {}) {
      return await _classPrivateFieldGet(_cssCoverage, this).start(options);
    }
    /**
     * Promise that resolves to the array of coverage reports
     * for all stylesheets.
     *
     * @remarks
     * CSS Coverage doesn't include dynamically injected style tags
     * without sourceURLs.
     */
    async stopCSSCoverage() {
      return await _classPrivateFieldGet(_cssCoverage, this).stop();
    }
  }
  /**
   * @public
   */
  var _client2 = /*#__PURE__*/new WeakMap();
  var _enabled2 = /*#__PURE__*/new WeakMap();
  var _scriptURLs = /*#__PURE__*/new WeakMap();
  var _scriptSources = /*#__PURE__*/new WeakMap();
  var _subscriptions = /*#__PURE__*/new WeakMap();
  var _resetOnNavigation = /*#__PURE__*/new WeakMap();
  var _reportAnonymousScripts = /*#__PURE__*/new WeakMap();
  var _includeRawScriptCoverage = /*#__PURE__*/new WeakMap();
  var _JSCoverage_brand = /*#__PURE__*/new WeakSet();
  class JSCoverage {
    /**
     * @internal
     */
    constructor(client) {
      _classPrivateMethodInitSpec(this, _JSCoverage_brand);
      _classPrivateFieldInitSpec(this, _client2, void 0);
      _classPrivateFieldInitSpec(this, _enabled2, false);
      _classPrivateFieldInitSpec(this, _scriptURLs, new Map());
      _classPrivateFieldInitSpec(this, _scriptSources, new Map());
      _classPrivateFieldInitSpec(this, _subscriptions, void 0);
      _classPrivateFieldInitSpec(this, _resetOnNavigation, false);
      _classPrivateFieldInitSpec(this, _reportAnonymousScripts, false);
      _classPrivateFieldInitSpec(this, _includeRawScriptCoverage, false);
      _classPrivateFieldSet(_client2, this, client);
    }
    /**
     * @internal
     */
    updateClient(client) {
      _classPrivateFieldSet(_client2, this, client);
    }
    async start(options = {}) {
      assert(!_classPrivateFieldGet(_enabled2, this), 'JSCoverage is already enabled');
      const {
        resetOnNavigation = true,
        reportAnonymousScripts = false,
        includeRawScriptCoverage = false,
        useBlockCoverage = true
      } = options;
      _classPrivateFieldSet(_resetOnNavigation, this, resetOnNavigation);
      _classPrivateFieldSet(_reportAnonymousScripts, this, reportAnonymousScripts);
      _classPrivateFieldSet(_includeRawScriptCoverage, this, includeRawScriptCoverage);
      _classPrivateFieldSet(_enabled2, this, true);
      _classPrivateFieldGet(_scriptURLs, this).clear();
      _classPrivateFieldGet(_scriptSources, this).clear();
      _classPrivateFieldSet(_subscriptions, this, new DisposableStack());
      const clientEmitter = _classPrivateFieldGet(_subscriptions, this).use(new EventEmitter(_classPrivateFieldGet(_client2, this)));
      clientEmitter.on('Debugger.scriptParsed', _assertClassBrand(_JSCoverage_brand, this, _onScriptParsed).bind(this));
      clientEmitter.on('Runtime.executionContextsCleared', _assertClassBrand(_JSCoverage_brand, this, _onExecutionContextsCleared).bind(this));
      await Promise.all([_classPrivateFieldGet(_client2, this).send('Profiler.enable'), _classPrivateFieldGet(_client2, this).send('Profiler.startPreciseCoverage', {
        callCount: _classPrivateFieldGet(_includeRawScriptCoverage, this),
        detailed: useBlockCoverage
      }), _classPrivateFieldGet(_client2, this).send('Debugger.enable'), _classPrivateFieldGet(_client2, this).send('Debugger.setSkipAllPauses', {
        skip: true
      })]);
    }
    async stop() {
      assert(_classPrivateFieldGet(_enabled2, this), 'JSCoverage is not enabled');
      _classPrivateFieldSet(_enabled2, this, false);
      const result = await Promise.all([_classPrivateFieldGet(_client2, this).send('Profiler.takePreciseCoverage'), _classPrivateFieldGet(_client2, this).send('Profiler.stopPreciseCoverage'), _classPrivateFieldGet(_client2, this).send('Profiler.disable'), _classPrivateFieldGet(_client2, this).send('Debugger.disable')]);
      _classPrivateFieldGet(_subscriptions, this)?.dispose();
      const coverage = [];
      const profileResponse = result[0];
      for (const entry of profileResponse.result) {
        let url = _classPrivateFieldGet(_scriptURLs, this).get(entry.scriptId);
        if (!url && _classPrivateFieldGet(_reportAnonymousScripts, this)) {
          url = 'debugger://VM' + entry.scriptId;
        }
        const text = _classPrivateFieldGet(_scriptSources, this).get(entry.scriptId);
        if (text === undefined || url === undefined) {
          continue;
        }
        const flattenRanges = [];
        for (const func of entry.functions) {
          flattenRanges.push(...func.ranges);
        }
        const ranges = convertToDisjointRanges(flattenRanges);
        if (!_classPrivateFieldGet(_includeRawScriptCoverage, this)) {
          coverage.push({
            url,
            ranges,
            text
          });
        } else {
          coverage.push({
            url,
            ranges,
            text,
            rawScriptCoverage: entry
          });
        }
      }
      return coverage;
    }
  }
  /**
   * @public
   */
  function _onExecutionContextsCleared() {
    if (!_classPrivateFieldGet(_resetOnNavigation, this)) {
      return;
    }
    _classPrivateFieldGet(_scriptURLs, this).clear();
    _classPrivateFieldGet(_scriptSources, this).clear();
  }
  async function _onScriptParsed(event) {
    // Ignore puppeteer-injected scripts
    if (PuppeteerURL.isPuppeteerURL(event.url)) {
      return;
    }
    // Ignore other anonymous scripts unless the reportAnonymousScripts option is true.
    if (!event.url && !_classPrivateFieldGet(_reportAnonymousScripts, this)) {
      return;
    }
    try {
      const response = await _classPrivateFieldGet(_client2, this).send('Debugger.getScriptSource', {
        scriptId: event.scriptId
      });
      _classPrivateFieldGet(_scriptURLs, this).set(event.scriptId, event.url);
      _classPrivateFieldGet(_scriptSources, this).set(event.scriptId, response.scriptSource);
    } catch (error) {
      // This might happen if the page has already navigated away.
      debugError(error);
    }
  }
  var _client3 = /*#__PURE__*/new WeakMap();
  var _enabled3 = /*#__PURE__*/new WeakMap();
  var _stylesheetURLs = /*#__PURE__*/new WeakMap();
  var _stylesheetSources = /*#__PURE__*/new WeakMap();
  var _eventListeners = /*#__PURE__*/new WeakMap();
  var _resetOnNavigation2 = /*#__PURE__*/new WeakMap();
  var _CSSCoverage_brand = /*#__PURE__*/new WeakSet();
  class CSSCoverage {
    constructor(client) {
      _classPrivateMethodInitSpec(this, _CSSCoverage_brand);
      _classPrivateFieldInitSpec(this, _client3, void 0);
      _classPrivateFieldInitSpec(this, _enabled3, false);
      _classPrivateFieldInitSpec(this, _stylesheetURLs, new Map());
      _classPrivateFieldInitSpec(this, _stylesheetSources, new Map());
      _classPrivateFieldInitSpec(this, _eventListeners, void 0);
      _classPrivateFieldInitSpec(this, _resetOnNavigation2, false);
      _classPrivateFieldSet(_client3, this, client);
    }
    /**
     * @internal
     */
    updateClient(client) {
      _classPrivateFieldSet(_client3, this, client);
    }
    async start(options = {}) {
      assert(!_classPrivateFieldGet(_enabled3, this), 'CSSCoverage is already enabled');
      const {
        resetOnNavigation = true
      } = options;
      _classPrivateFieldSet(_resetOnNavigation2, this, resetOnNavigation);
      _classPrivateFieldSet(_enabled3, this, true);
      _classPrivateFieldGet(_stylesheetURLs, this).clear();
      _classPrivateFieldGet(_stylesheetSources, this).clear();
      _classPrivateFieldSet(_eventListeners, this, new DisposableStack());
      const clientEmitter = _classPrivateFieldGet(_eventListeners, this).use(new EventEmitter(_classPrivateFieldGet(_client3, this)));
      clientEmitter.on('CSS.styleSheetAdded', _assertClassBrand(_CSSCoverage_brand, this, _onStyleSheet).bind(this));
      clientEmitter.on('Runtime.executionContextsCleared', _assertClassBrand(_CSSCoverage_brand, this, _onExecutionContextsCleared2).bind(this));
      await Promise.all([_classPrivateFieldGet(_client3, this).send('DOM.enable'), _classPrivateFieldGet(_client3, this).send('CSS.enable'), _classPrivateFieldGet(_client3, this).send('CSS.startRuleUsageTracking')]);
    }
    async stop() {
      assert(_classPrivateFieldGet(_enabled3, this), 'CSSCoverage is not enabled');
      _classPrivateFieldSet(_enabled3, this, false);
      const ruleTrackingResponse = await _classPrivateFieldGet(_client3, this).send('CSS.stopRuleUsageTracking');
      await Promise.all([_classPrivateFieldGet(_client3, this).send('CSS.disable'), _classPrivateFieldGet(_client3, this).send('DOM.disable')]);
      _classPrivateFieldGet(_eventListeners, this)?.dispose();
      // aggregate by styleSheetId
      const styleSheetIdToCoverage = new Map();
      for (const entry of ruleTrackingResponse.ruleUsage) {
        let ranges = styleSheetIdToCoverage.get(entry.styleSheetId);
        if (!ranges) {
          ranges = [];
          styleSheetIdToCoverage.set(entry.styleSheetId, ranges);
        }
        ranges.push({
          startOffset: entry.startOffset,
          endOffset: entry.endOffset,
          count: entry.used ? 1 : 0
        });
      }
      const coverage = [];
      for (const styleSheetId of _classPrivateFieldGet(_stylesheetURLs, this).keys()) {
        const url = _classPrivateFieldGet(_stylesheetURLs, this).get(styleSheetId);
        assert(typeof url !== 'undefined', `Stylesheet URL is undefined (styleSheetId=${styleSheetId})`);
        const text = _classPrivateFieldGet(_stylesheetSources, this).get(styleSheetId);
        assert(typeof text !== 'undefined', `Stylesheet text is undefined (styleSheetId=${styleSheetId})`);
        const ranges = convertToDisjointRanges(styleSheetIdToCoverage.get(styleSheetId) || []);
        coverage.push({
          url,
          ranges,
          text
        });
      }
      return coverage;
    }
  }
  function _onExecutionContextsCleared2() {
    if (!_classPrivateFieldGet(_resetOnNavigation2, this)) {
      return;
    }
    _classPrivateFieldGet(_stylesheetURLs, this).clear();
    _classPrivateFieldGet(_stylesheetSources, this).clear();
  }
  async function _onStyleSheet(event) {
    const header = event.header;
    // Ignore anonymous scripts
    if (!header.sourceURL) {
      return;
    }
    try {
      const response = await _classPrivateFieldGet(_client3, this).send('CSS.getStyleSheetText', {
        styleSheetId: header.styleSheetId
      });
      _classPrivateFieldGet(_stylesheetURLs, this).set(header.styleSheetId, header.sourceURL);
      _classPrivateFieldGet(_stylesheetSources, this).set(header.styleSheetId, response.text);
    } catch (error) {
      // This might happen if the page has already navigated away.
      debugError(error);
    }
  }
  function convertToDisjointRanges(nestedRanges) {
    const points = [];
    for (const range of nestedRanges) {
      points.push({
        offset: range.startOffset,
        type: 0,
        range
      });
      points.push({
        offset: range.endOffset,
        type: 1,
        range
      });
    }
    // Sort points to form a valid parenthesis sequence.
    points.sort((a, b) => {
      // Sort with increasing offsets.
      if (a.offset !== b.offset) {
        return a.offset - b.offset;
      }
      // All "end" points should go before "start" points.
      if (a.type !== b.type) {
        return b.type - a.type;
      }
      const aLength = a.range.endOffset - a.range.startOffset;
      const bLength = b.range.endOffset - b.range.startOffset;
      // For two "start" points, the one with longer range goes first.
      if (a.type === 0) {
        return bLength - aLength;
      }
      // For two "end" points, the one with shorter range goes first.
      return aLength - bLength;
    });
    const hitCountStack = [];
    const results = [];
    let lastOffset = 0;
    // Run scanning line to intersect all ranges.
    for (const point of points) {
      if (hitCountStack.length && lastOffset < point.offset && hitCountStack[hitCountStack.length - 1] > 0) {
        const lastResult = results[results.length - 1];
        if (lastResult && lastResult.end === lastOffset) {
          lastResult.end = point.offset;
        } else {
          results.push({
            start: lastOffset,
            end: point.offset
          });
        }
      }
      lastOffset = point.offset;
      if (point.type === 0) {
        hitCountStack.push(point.range.count);
      } else {
        hitCountStack.pop();
      }
    }
    // Filter out empty ranges.
    return results.filter(range => {
      return range.end - range.start > 0;
    });
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _client4 = /*#__PURE__*/new WeakMap();
  class CdpDialog extends Dialog {
    constructor(client, type, message, defaultValue = '') {
      super(type, message, defaultValue);
      _classPrivateFieldInitSpec(this, _client4, void 0);
      _classPrivateFieldSet(_client4, this, client);
    }
    async handle(options) {
      await _classPrivateFieldGet(_client4, this).send('Page.handleJavaScriptDialog', {
        accept: options.accept,
        promptText: options.text
      });
    }
  }
  var __runInitializers$2 = undefined && undefined.__runInitializers || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$2 = undefined && undefined.__esDecorate || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __setFunctionName = undefined && undefined.__setFunctionName || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
      configurable: true,
      value: prefix ? "".concat(prefix, " ", name) : name
    });
  };
  /**
   * @internal
   */
  var _state = /*#__PURE__*/new WeakMap();
  var _clientProvider = /*#__PURE__*/new WeakMap();
  var _updater = /*#__PURE__*/new WeakMap();
  class EmulatedState {
    constructor(initialState, clientProvider, updater) {
      _classPrivateFieldInitSpec(this, _state, void 0);
      _classPrivateFieldInitSpec(this, _clientProvider, void 0);
      _classPrivateFieldInitSpec(this, _updater, void 0);
      _classPrivateFieldSet(_state, this, initialState);
      _classPrivateFieldSet(_clientProvider, this, clientProvider);
      _classPrivateFieldSet(_updater, this, updater);
      _classPrivateFieldGet(_clientProvider, this).registerState(this);
    }
    async setState(state) {
      _classPrivateFieldSet(_state, this, state);
      await this.sync();
    }
    get state() {
      return _classPrivateFieldGet(_state, this);
    }
    async sync() {
      await Promise.all(_classPrivateFieldGet(_clientProvider, this).clients().map(client => {
        return _classPrivateFieldGet(_updater, this).call(this, client, _classPrivateFieldGet(_state, this));
      }));
    }
  }
  /**
   * @internal
   */
  let EmulationManager = ((_EmulationManager, _client5, _emulatingMobile, _hasTouch, _states, _viewportState, _idleOverridesState, _timezoneState, _visionDeficiencyState, _cpuThrottlingState, _mediaFeaturesState, _mediaTypeState, _geoLocationState, _defaultBackgroundColorState, _javascriptEnabledState, _focusState, _secondaryClients, _EmulationManager_brand) => {
    let _instanceExtraInitializers = [];
    let _private_applyViewport_decorators;
    let _private_applyViewport_descriptor;
    let _private_emulateIdleState_decorators;
    let _private_emulateIdleState_descriptor;
    let _private_emulateTimezone_decorators;
    let _private_emulateTimezone_descriptor;
    let _private_emulateVisionDeficiency_decorators;
    let _private_emulateVisionDeficiency_descriptor;
    let _private_emulateCpuThrottling_decorators;
    let _private_emulateCpuThrottling_descriptor;
    let _private_emulateMediaFeatures_decorators;
    let _private_emulateMediaFeatures_descriptor;
    let _private_emulateMediaType_decorators;
    let _private_emulateMediaType_descriptor;
    let _private_setGeolocation_decorators;
    let _private_setGeolocation_descriptor;
    let _private_setDefaultBackgroundColor_decorators;
    let _private_setDefaultBackgroundColor_descriptor;
    let _private_setJavaScriptEnabled_decorators;
    let _private_setJavaScriptEnabled_descriptor;
    let _private_emulateFocus_decorators;
    let _private_emulateFocus_descriptor;
    return _client5 = /*#__PURE__*/new WeakMap(), _emulatingMobile = /*#__PURE__*/new WeakMap(), _hasTouch = /*#__PURE__*/new WeakMap(), _states = /*#__PURE__*/new WeakMap(), _viewportState = /*#__PURE__*/new WeakMap(), _idleOverridesState = /*#__PURE__*/new WeakMap(), _timezoneState = /*#__PURE__*/new WeakMap(), _visionDeficiencyState = /*#__PURE__*/new WeakMap(), _cpuThrottlingState = /*#__PURE__*/new WeakMap(), _mediaFeaturesState = /*#__PURE__*/new WeakMap(), _mediaTypeState = /*#__PURE__*/new WeakMap(), _geoLocationState = /*#__PURE__*/new WeakMap(), _defaultBackgroundColorState = /*#__PURE__*/new WeakMap(), _javascriptEnabledState = /*#__PURE__*/new WeakMap(), _focusState = /*#__PURE__*/new WeakMap(), _secondaryClients = /*#__PURE__*/new WeakMap(), _EmulationManager_brand = /*#__PURE__*/new WeakSet(), _EmulationManager = class EmulationManager {
      constructor(client) {
        _classPrivateMethodInitSpec(this, _EmulationManager_brand);
        _classPrivateFieldInitSpec(this, _client5, __runInitializers$2(this, _instanceExtraInitializers));
        _classPrivateFieldInitSpec(this, _emulatingMobile, false);
        _classPrivateFieldInitSpec(this, _hasTouch, false);
        _classPrivateFieldInitSpec(this, _states, []);
        _classPrivateFieldInitSpec(this, _viewportState, new EmulatedState({
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_applyViewport)));
        _classPrivateFieldInitSpec(this, _idleOverridesState, new EmulatedState({
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_emulateIdleState)));
        _classPrivateFieldInitSpec(this, _timezoneState, new EmulatedState({
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_emulateTimezone)));
        _classPrivateFieldInitSpec(this, _visionDeficiencyState, new EmulatedState({
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_emulateVisionDeficiency)));
        _classPrivateFieldInitSpec(this, _cpuThrottlingState, new EmulatedState({
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_emulateCpuThrottling)));
        _classPrivateFieldInitSpec(this, _mediaFeaturesState, new EmulatedState({
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_emulateMediaFeatures)));
        _classPrivateFieldInitSpec(this, _mediaTypeState, new EmulatedState({
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_emulateMediaType)));
        _classPrivateFieldInitSpec(this, _geoLocationState, new EmulatedState({
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_setGeolocation)));
        _classPrivateFieldInitSpec(this, _defaultBackgroundColorState, new EmulatedState({
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_setDefaultBackgroundColor)));
        _classPrivateFieldInitSpec(this, _javascriptEnabledState, new EmulatedState({
          javaScriptEnabled: true,
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_setJavaScriptEnabled)));
        _classPrivateFieldInitSpec(this, _focusState, new EmulatedState({
          enabled: true,
          active: false
        }, this, _classPrivateGetter(_EmulationManager_brand, this, _get_emulateFocus)));
        _classPrivateFieldInitSpec(this, _secondaryClients, new Set());
        _classPrivateFieldSet(_client5, this, client);
      }
      updateClient(client) {
        _classPrivateFieldSet(_client5, this, client);
        _classPrivateFieldGet(_secondaryClients, this).delete(client);
      }
      registerState(state) {
        _classPrivateFieldGet(_states, this).push(state);
      }
      clients() {
        return [_classPrivateFieldGet(_client5, this), ...Array.from(_classPrivateFieldGet(_secondaryClients, this))];
      }
      async registerSpeculativeSession(client) {
        _classPrivateFieldGet(_secondaryClients, this).add(client);
        client.once(exports.CDPSessionEvent.Disconnected, () => {
          _classPrivateFieldGet(_secondaryClients, this).delete(client);
        });
        // We don't await here because we want to register all state changes before
        // the target is unpaused.
        void Promise.all(_classPrivateFieldGet(_states, this).map(s => {
          return s.sync().catch(debugError);
        }));
      }
      get javascriptEnabled() {
        return _classPrivateFieldGet(_javascriptEnabledState, this).state.javaScriptEnabled;
      }
      async emulateViewport(viewport) {
        const currentState = _classPrivateFieldGet(_viewportState, this).state;
        if (!viewport && !currentState.active) {
          return false;
        }
        await _classPrivateFieldGet(_viewportState, this).setState(viewport ? {
          viewport,
          active: true
        } : {
          active: false
        });
        const mobile = viewport?.isMobile || false;
        const hasTouch = viewport?.hasTouch || false;
        const reloadNeeded = _classPrivateFieldGet(_emulatingMobile, this) !== mobile || _classPrivateFieldGet(_hasTouch, this) !== hasTouch;
        _classPrivateFieldSet(_emulatingMobile, this, mobile);
        _classPrivateFieldSet(_hasTouch, this, hasTouch);
        return reloadNeeded;
      }
      async emulateIdleState(overrides) {
        await _classPrivateFieldGet(_idleOverridesState, this).setState({
          active: true,
          overrides
        });
      }
      async emulateTimezone(timezoneId) {
        await _classPrivateFieldGet(_timezoneState, this).setState({
          timezoneId,
          active: true
        });
      }
      async emulateVisionDeficiency(type) {
        const visionDeficiencies = new Set(['none', 'achromatopsia', 'blurredVision', 'deuteranopia', 'protanopia', 'reducedContrast', 'tritanopia']);
        assert(!type || visionDeficiencies.has(type), `Unsupported vision deficiency: ${type}`);
        await _classPrivateFieldGet(_visionDeficiencyState, this).setState({
          active: true,
          visionDeficiency: type
        });
      }
      async emulateCPUThrottling(factor) {
        assert(factor === null || factor >= 1, 'Throttling rate should be greater or equal to 1');
        await _classPrivateFieldGet(_cpuThrottlingState, this).setState({
          active: true,
          factor: factor ?? undefined
        });
      }
      async emulateMediaFeatures(features) {
        if (Array.isArray(features)) {
          for (const mediaFeature of features) {
            const name = mediaFeature.name;
            assert(/^(?:prefers-(?:color-scheme|reduced-motion)|color-gamut)$/.test(name), 'Unsupported media feature: ' + name);
          }
        }
        await _classPrivateFieldGet(_mediaFeaturesState, this).setState({
          active: true,
          mediaFeatures: features
        });
      }
      async emulateMediaType(type) {
        assert(type === 'screen' || type === 'print' || (type ?? undefined) === undefined, 'Unsupported media type: ' + type);
        await _classPrivateFieldGet(_mediaTypeState, this).setState({
          type,
          active: true
        });
      }
      async setGeolocation(options) {
        const {
          longitude,
          latitude,
          accuracy = 0
        } = options;
        if (longitude < -180 || longitude > 180) {
          throw new Error(`Invalid longitude "${longitude}": precondition -180 <= LONGITUDE <= 180 failed.`);
        }
        if (latitude < -90 || latitude > 90) {
          throw new Error(`Invalid latitude "${latitude}": precondition -90 <= LATITUDE <= 90 failed.`);
        }
        if (accuracy < 0) {
          throw new Error(`Invalid accuracy "${accuracy}": precondition 0 <= ACCURACY failed.`);
        }
        await _classPrivateFieldGet(_geoLocationState, this).setState({
          active: true,
          geoLocation: {
            longitude,
            latitude,
            accuracy
          }
        });
      }
      /**
       * Resets default white background
       */
      async resetDefaultBackgroundColor() {
        await _classPrivateFieldGet(_defaultBackgroundColorState, this).setState({
          active: true,
          color: undefined
        });
      }
      /**
       * Hides default white background
       */
      async setTransparentBackgroundColor() {
        await _classPrivateFieldGet(_defaultBackgroundColorState, this).setState({
          active: true,
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          }
        });
      }
      async setJavaScriptEnabled(enabled) {
        await _classPrivateFieldGet(_javascriptEnabledState, this).setState({
          active: true,
          javaScriptEnabled: enabled
        });
      }
      async emulateFocus(enabled) {
        await _classPrivateFieldGet(_focusState, this).setState({
          active: true,
          enabled
        });
      }
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
      _private_applyViewport_decorators = [invokeAtMostOnceForArguments];
      _private_emulateIdleState_decorators = [invokeAtMostOnceForArguments];
      _private_emulateTimezone_decorators = [invokeAtMostOnceForArguments];
      _private_emulateVisionDeficiency_decorators = [invokeAtMostOnceForArguments];
      _private_emulateCpuThrottling_decorators = [invokeAtMostOnceForArguments];
      _private_emulateMediaFeatures_decorators = [invokeAtMostOnceForArguments];
      _private_emulateMediaType_decorators = [invokeAtMostOnceForArguments];
      _private_setGeolocation_decorators = [invokeAtMostOnceForArguments];
      _private_setDefaultBackgroundColor_decorators = [invokeAtMostOnceForArguments];
      _private_setJavaScriptEnabled_decorators = [invokeAtMostOnceForArguments];
      _private_emulateFocus_decorators = [invokeAtMostOnceForArguments];
      __esDecorate$2(_EmulationManager, _private_applyViewport_descriptor = {
        value: __setFunctionName(async function (client, viewportState) {
          if (!viewportState.viewport) {
            await Promise.all([client.send('Emulation.clearDeviceMetricsOverride'), client.send('Emulation.setTouchEmulationEnabled', {
              enabled: false
            })]).catch(debugError);
            return;
          }
          const {
            viewport
          } = viewportState;
          const mobile = viewport.isMobile || false;
          const width = viewport.width;
          const height = viewport.height;
          const deviceScaleFactor = viewport.deviceScaleFactor ?? 1;
          const screenOrientation = viewport.isLandscape ? {
            angle: 90,
            type: 'landscapePrimary'
          } : {
            angle: 0,
            type: 'portraitPrimary'
          };
          const hasTouch = viewport.hasTouch || false;
          await Promise.all([client.send('Emulation.setDeviceMetricsOverride', {
            mobile,
            width,
            height,
            deviceScaleFactor,
            screenOrientation
          }).catch(err => {
            if (err.message.includes('Target does not support metrics override')) {
              debugError(err);
              return;
            }
            throw err;
          }), client.send('Emulation.setTouchEmulationEnabled', {
            enabled: hasTouch
          })]);
        }, "#applyViewport")
      }, _private_applyViewport_decorators, {
        kind: "method",
        name: "#applyViewport",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_applyViewport)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_emulateIdleState_descriptor = {
        value: __setFunctionName(async function (client, idleStateState) {
          if (!idleStateState.active) {
            return;
          }
          if (idleStateState.overrides) {
            await client.send('Emulation.setIdleOverride', {
              isUserActive: idleStateState.overrides.isUserActive,
              isScreenUnlocked: idleStateState.overrides.isScreenUnlocked
            });
          } else {
            await client.send('Emulation.clearIdleOverride');
          }
        }, "#emulateIdleState")
      }, _private_emulateIdleState_decorators, {
        kind: "method",
        name: "#emulateIdleState",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_emulateIdleState)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_emulateTimezone_descriptor = {
        value: __setFunctionName(async function (client, timezoneState) {
          if (!timezoneState.active) {
            return;
          }
          try {
            await client.send('Emulation.setTimezoneOverride', {
              timezoneId: timezoneState.timezoneId || ''
            });
          } catch (error) {
            if (isErrorLike(error) && error.message.includes('Invalid timezone')) {
              throw new Error(`Invalid timezone ID: ${timezoneState.timezoneId}`);
            }
            throw error;
          }
        }, "#emulateTimezone")
      }, _private_emulateTimezone_decorators, {
        kind: "method",
        name: "#emulateTimezone",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_emulateTimezone)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_emulateVisionDeficiency_descriptor = {
        value: __setFunctionName(async function (client, visionDeficiency) {
          if (!visionDeficiency.active) {
            return;
          }
          await client.send('Emulation.setEmulatedVisionDeficiency', {
            type: visionDeficiency.visionDeficiency || 'none'
          });
        }, "#emulateVisionDeficiency")
      }, _private_emulateVisionDeficiency_decorators, {
        kind: "method",
        name: "#emulateVisionDeficiency",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_emulateVisionDeficiency)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_emulateCpuThrottling_descriptor = {
        value: __setFunctionName(async function (client, state) {
          if (!state.active) {
            return;
          }
          await client.send('Emulation.setCPUThrottlingRate', {
            rate: state.factor ?? 1
          });
        }, "#emulateCpuThrottling")
      }, _private_emulateCpuThrottling_decorators, {
        kind: "method",
        name: "#emulateCpuThrottling",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_emulateCpuThrottling)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_emulateMediaFeatures_descriptor = {
        value: __setFunctionName(async function (client, state) {
          if (!state.active) {
            return;
          }
          await client.send('Emulation.setEmulatedMedia', {
            features: state.mediaFeatures
          });
        }, "#emulateMediaFeatures")
      }, _private_emulateMediaFeatures_decorators, {
        kind: "method",
        name: "#emulateMediaFeatures",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_emulateMediaFeatures)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_emulateMediaType_descriptor = {
        value: __setFunctionName(async function (client, state) {
          if (!state.active) {
            return;
          }
          await client.send('Emulation.setEmulatedMedia', {
            media: state.type || ''
          });
        }, "#emulateMediaType")
      }, _private_emulateMediaType_decorators, {
        kind: "method",
        name: "#emulateMediaType",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_emulateMediaType)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_setGeolocation_descriptor = {
        value: __setFunctionName(async function (client, state) {
          if (!state.active) {
            return;
          }
          await client.send('Emulation.setGeolocationOverride', state.geoLocation ? {
            longitude: state.geoLocation.longitude,
            latitude: state.geoLocation.latitude,
            accuracy: state.geoLocation.accuracy
          } : undefined);
        }, "#setGeolocation")
      }, _private_setGeolocation_decorators, {
        kind: "method",
        name: "#setGeolocation",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_setGeolocation)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_setDefaultBackgroundColor_descriptor = {
        value: __setFunctionName(async function (client, state) {
          if (!state.active) {
            return;
          }
          await client.send('Emulation.setDefaultBackgroundColorOverride', {
            color: state.color
          });
        }, "#setDefaultBackgroundColor")
      }, _private_setDefaultBackgroundColor_decorators, {
        kind: "method",
        name: "#setDefaultBackgroundColor",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_setDefaultBackgroundColor)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_setJavaScriptEnabled_descriptor = {
        value: __setFunctionName(async function (client, state) {
          if (!state.active) {
            return;
          }
          await client.send('Emulation.setScriptExecutionDisabled', {
            value: !state.javaScriptEnabled
          });
        }, "#setJavaScriptEnabled")
      }, _private_setJavaScriptEnabled_decorators, {
        kind: "method",
        name: "#setJavaScriptEnabled",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_setJavaScriptEnabled)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$2(_EmulationManager, _private_emulateFocus_descriptor = {
        value: __setFunctionName(async function (client, state) {
          if (!state.active) {
            return;
          }
          await client.send('Emulation.setFocusEmulationEnabled', {
            enabled: state.enabled
          });
        }, "#emulateFocus")
      }, _private_emulateFocus_decorators, {
        kind: "method",
        name: "#emulateFocus",
        static: false,
        private: true,
        access: {
          has: obj => _EmulationManager_brand.has(_checkInRHS(obj)),
          get: obj => _classPrivateGetter(_EmulationManager_brand, obj, _get_emulateFocus)
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(_EmulationManager, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    })(), _EmulationManager;
    function _get_applyViewport(_this3) {
      return _private_applyViewport_descriptor.value;
    }
    function _get_emulateIdleState(_this4) {
      return _private_emulateIdleState_descriptor.value;
    }
    function _get_emulateTimezone(_this5) {
      return _private_emulateTimezone_descriptor.value;
    }
    function _get_emulateVisionDeficiency(_this6) {
      return _private_emulateVisionDeficiency_descriptor.value;
    }
    function _get_emulateCpuThrottling(_this7) {
      return _private_emulateCpuThrottling_descriptor.value;
    }
    function _get_emulateMediaFeatures(_this8) {
      return _private_emulateMediaFeatures_descriptor.value;
    }
    function _get_emulateMediaType(_this9) {
      return _private_emulateMediaType_descriptor.value;
    }
    function _get_setGeolocation(_this0) {
      return _private_setGeolocation_descriptor.value;
    }
    function _get_setDefaultBackgroundColor(_this1) {
      return _private_setDefaultBackgroundColor_descriptor.value;
    }
    function _get_setJavaScriptEnabled(_this10) {
      return _private_setJavaScriptEnabled_descriptor.value;
    }
    function _get_emulateFocus(_this11) {
      return _private_emulateFocus_descriptor.value;
    }
  })();

  /**
   * @license
   * Copyright 2026 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _code2 = /*#__PURE__*/new WeakMap();
  var _details = /*#__PURE__*/new WeakMap();
  class CdpIssue {
    constructor(issue) {
      _classPrivateFieldInitSpec(this, _code2, void 0);
      _classPrivateFieldInitSpec(this, _details, void 0);
      _classPrivateFieldSet(_code2, this, issue.code);
      _classPrivateFieldSet(_details, this, issue.details);
    }
    get code() {
      return _classPrivateFieldGet(_code2, this);
    }
    get details() {
      return _classPrivateFieldGet(_details, this);
    }
  }

  /**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _id4 = /*#__PURE__*/new WeakMap();
  var _source = /*#__PURE__*/new WeakMap();
  var _frameToId = /*#__PURE__*/new WeakMap();
  class CdpPreloadScript {
    constructor(mainFrame, id, source) {
      /**
       * This is the ID of the preload script returned by
       * Page.addScriptToEvaluateOnNewDocument in the main frame.
       *
       * Sub-frames would get a different CDP ID because
       * addScriptToEvaluateOnNewDocument is called for each subframe. But
       * users only see this ID and subframe IDs are internal to Puppeteer.
       */
      _classPrivateFieldInitSpec(this, _id4, void 0);
      _classPrivateFieldInitSpec(this, _source, void 0);
      _classPrivateFieldInitSpec(this, _frameToId, new WeakMap());
      _classPrivateFieldSet(_id4, this, id);
      _classPrivateFieldSet(_source, this, source);
      _classPrivateFieldGet(_frameToId, this).set(mainFrame, id);
    }
    get id() {
      return _classPrivateFieldGet(_id4, this);
    }
    get source() {
      return _classPrivateFieldGet(_source, this);
    }
    getIdForFrame(frame) {
      return _classPrivateFieldGet(_frameToId, this).get(frame);
    }
    setIdForFrame(frame, identifier) {
      _classPrivateFieldGet(_frameToId, this).set(frame, identifier);
    }
  }

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _client6 = /*#__PURE__*/new WeakMap();
  var _timeoutSettings = /*#__PURE__*/new WeakMap();
  var _id5 = /*#__PURE__*/new WeakMap();
  var _handled2 = /*#__PURE__*/new WeakMap();
  var _updateDevicesHandle = /*#__PURE__*/new WeakMap();
  var _waitForDevicePromises = /*#__PURE__*/new WeakMap();
  var _CdpDeviceRequestPrompt_brand = /*#__PURE__*/new WeakSet();
  class CdpDeviceRequestPrompt extends DeviceRequestPrompt {
    constructor(client, timeoutSettings, firstEvent) {
      super();
      _classPrivateMethodInitSpec(this, _CdpDeviceRequestPrompt_brand);
      _classPrivateFieldInitSpec(this, _client6, void 0);
      _classPrivateFieldInitSpec(this, _timeoutSettings, void 0);
      _classPrivateFieldInitSpec(this, _id5, void 0);
      _classPrivateFieldInitSpec(this, _handled2, false);
      _classPrivateFieldInitSpec(this, _updateDevicesHandle, _assertClassBrand(_CdpDeviceRequestPrompt_brand, this, _updateDevices).bind(this));
      _classPrivateFieldInitSpec(this, _waitForDevicePromises, new Set());
      _classPrivateFieldSet(_client6, this, client);
      _classPrivateFieldSet(_timeoutSettings, this, timeoutSettings);
      _classPrivateFieldSet(_id5, this, firstEvent.id);
      _classPrivateFieldGet(_client6, this).on('DeviceAccess.deviceRequestPrompted', _classPrivateFieldGet(_updateDevicesHandle, this));
      _classPrivateFieldGet(_client6, this).on('Target.detachedFromTarget', () => {
        _classPrivateFieldSet(_client6, this, null);
      });
      _assertClassBrand(_CdpDeviceRequestPrompt_brand, this, _updateDevices).call(this, firstEvent);
    }
    async waitForDevice(filter, options = {}) {
      for (const device of this.devices) {
        if (filter(device)) {
          return device;
        }
      }
      const {
        timeout = _classPrivateFieldGet(_timeoutSettings, this).timeout()
      } = options;
      const deferred = Deferred.create({
        message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${timeout}ms exceeded`,
        timeout
      });
      if (options.signal) {
        options.signal.addEventListener('abort', () => {
          deferred.reject(options.signal?.reason);
        }, {
          once: true
        });
      }
      const handle = {
        filter,
        promise: deferred
      };
      _classPrivateFieldGet(_waitForDevicePromises, this).add(handle);
      try {
        return await deferred.valueOrThrow();
      } finally {
        _classPrivateFieldGet(_waitForDevicePromises, this).delete(handle);
      }
    }
    async select(device) {
      assert(_classPrivateFieldGet(_client6, this) !== null, 'Cannot select device through detached session!');
      assert(this.devices.includes(device), 'Cannot select unknown device!');
      assert(!_classPrivateFieldGet(_handled2, this), 'Cannot select DeviceRequestPrompt which is already handled!');
      _classPrivateFieldGet(_client6, this).off('DeviceAccess.deviceRequestPrompted', _classPrivateFieldGet(_updateDevicesHandle, this));
      _classPrivateFieldSet(_handled2, this, true);
      return await _classPrivateFieldGet(_client6, this).send('DeviceAccess.selectPrompt', {
        id: _classPrivateFieldGet(_id5, this),
        deviceId: device.id
      });
    }
    async cancel() {
      assert(_classPrivateFieldGet(_client6, this) !== null, 'Cannot cancel prompt through detached session!');
      assert(!_classPrivateFieldGet(_handled2, this), 'Cannot cancel DeviceRequestPrompt which is already handled!');
      _classPrivateFieldGet(_client6, this).off('DeviceAccess.deviceRequestPrompted', _classPrivateFieldGet(_updateDevicesHandle, this));
      _classPrivateFieldSet(_handled2, this, true);
      return await _classPrivateFieldGet(_client6, this).send('DeviceAccess.cancelPrompt', {
        id: _classPrivateFieldGet(_id5, this)
      });
    }
  }
  /**
   * @internal
   */
  function _updateDevices(event) {
    if (event.id !== _classPrivateFieldGet(_id5, this)) {
      return;
    }
    for (const rawDevice of event.devices) {
      if (this.devices.some(device => {
        return device.id === rawDevice.id;
      })) {
        continue;
      }
      const newDevice = {
        id: rawDevice.id,
        name: rawDevice.name
      };
      this.devices.push(newDevice);
      for (const waitForDevicePromise of _classPrivateFieldGet(_waitForDevicePromises, this)) {
        if (waitForDevicePromise.filter(newDevice)) {
          waitForDevicePromise.promise.resolve(newDevice);
        }
      }
    }
  }
  var _client7 = /*#__PURE__*/new WeakMap();
  var _timeoutSettings2 = /*#__PURE__*/new WeakMap();
  var _deviceRequestPromptDeferreds = /*#__PURE__*/new WeakMap();
  var _CdpDeviceRequestPromptManager_brand = /*#__PURE__*/new WeakSet();
  class CdpDeviceRequestPromptManager {
    constructor(client, timeoutSettings) {
      _classPrivateMethodInitSpec(this, _CdpDeviceRequestPromptManager_brand);
      _classPrivateFieldInitSpec(this, _client7, void 0);
      _classPrivateFieldInitSpec(this, _timeoutSettings2, void 0);
      _classPrivateFieldInitSpec(this, _deviceRequestPromptDeferreds, new Set());
      _classPrivateFieldSet(_client7, this, client);
      _classPrivateFieldSet(_timeoutSettings2, this, timeoutSettings);
      _classPrivateFieldGet(_client7, this).on('DeviceAccess.deviceRequestPrompted', event => {
        _assertClassBrand(_CdpDeviceRequestPromptManager_brand, this, _onDeviceRequestPrompted).call(this, event);
      });
      _classPrivateFieldGet(_client7, this).on('Target.detachedFromTarget', () => {
        _classPrivateFieldSet(_client7, this, null);
      });
    }
    async waitForDevicePrompt(options = {}) {
      assert(_classPrivateFieldGet(_client7, this) !== null, 'Cannot wait for device prompt through detached session!');
      const needsEnable = _classPrivateFieldGet(_deviceRequestPromptDeferreds, this).size === 0;
      let enablePromise;
      if (needsEnable) {
        enablePromise = _classPrivateFieldGet(_client7, this).send('DeviceAccess.enable');
      }
      const {
        timeout = _classPrivateFieldGet(_timeoutSettings2, this).timeout()
      } = options;
      const deferred = Deferred.create({
        message: `Waiting for \`DeviceRequestPrompt\` failed: ${timeout}ms exceeded`,
        timeout
      });
      if (options.signal) {
        options.signal.addEventListener('abort', () => {
          deferred.reject(options.signal?.reason);
        }, {
          once: true
        });
      }
      _classPrivateFieldGet(_deviceRequestPromptDeferreds, this).add(deferred);
      try {
        const [result] = await Promise.all([deferred.valueOrThrow(), enablePromise]);
        return result;
      } finally {
        _classPrivateFieldGet(_deviceRequestPromptDeferreds, this).delete(deferred);
      }
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  function _onDeviceRequestPrompted(event) {
    if (!_classPrivateFieldGet(_deviceRequestPromptDeferreds, this).size) {
      return;
    }
    assert(_classPrivateFieldGet(_client7, this) !== null);
    const devicePrompt = new CdpDeviceRequestPrompt(_classPrivateFieldGet(_client7, this), _classPrivateFieldGet(_timeoutSettings2, this), event);
    for (const promise of _classPrivateFieldGet(_deviceRequestPromptDeferreds, this)) {
      promise.resolve(devicePrompt);
    }
    _classPrivateFieldGet(_deviceRequestPromptDeferreds, this).clear();
  }
  function createConsoleMessage(event, values, targetId) {
    const textTokens = [];
    // eslint-disable-next-line max-len -- The comment is long.
    // eslint-disable-next-line @puppeteer/use-using -- These are not owned by this function.
    for (const arg of values) {
      textTokens.push(valueFromJSHandle(arg));
    }
    const stackTraceLocations = [];
    if (event.stackTrace) {
      for (const callFrame of event.stackTrace.callFrames) {
        stackTraceLocations.push({
          url: callFrame.url,
          lineNumber: callFrame.lineNumber,
          columnNumber: callFrame.columnNumber
        });
      }
    }
    return new ConsoleMessage(convertConsoleMessageLevel(event.type), textTokens.join(' '), values, stackTraceLocations, undefined, event.stackTrace, targetId);
  }
  /**
   * @internal
   */
  function createEvaluationError(details) {
    let name;
    let message;
    if (!details.exception) {
      name = 'Error';
      message = details.text;
    } else if ((details.exception.type !== 'object' || details.exception.subtype !== 'error') && !details.exception.objectId) {
      return valueFromPrimitiveRemoteObject(details.exception);
    } else {
      const detail = getErrorDetails(details);
      name = detail.name;
      message = detail.message;
    }
    const messageHeight = message.split('\n').length;
    const error = new Error(message);
    error.name = name;
    const stackLines = error.stack.split('\n');
    const messageLines = stackLines.splice(0, messageHeight);
    // The first line is this function which we ignore.
    stackLines.shift();
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
      for (const frame of details.stackTrace.callFrames.reverse()) {
        if (PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== PuppeteerURL.INTERNAL_URL) {
          const url = PuppeteerURL.parse(frame.url);
          stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
        } else {
          stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
        }
        if (stackLines.length >= Error.stackTraceLimit) {
          break;
        }
      }
    }
    error.stack = [...messageLines, ...stackLines].join('\n');
    return error;
  }
  const getErrorDetails = details => {
    let name = '';
    let message;
    const lines = details.exception?.description?.split('\n    at ') ?? [];
    const size = Math.min(details.stackTrace?.callFrames.length ?? 0, lines.length - 1);
    lines.splice(-size, size);
    if (details.exception?.className) {
      name = details.exception.className;
    }
    message = lines.join('\n');
    if (name && message.startsWith(`${name}: `)) {
      message = message.slice(name.length + 2);
    }
    return {
      message,
      name
    };
  };
  /**
   * @internal
   */
  function createClientError(details) {
    let name;
    let message;
    if (!details.exception) {
      name = 'Error';
      message = details.text;
    } else if ((details.exception.type !== 'object' || details.exception.subtype !== 'error') && !details.exception.objectId) {
      return valueFromPrimitiveRemoteObject(details.exception);
    } else {
      const detail = getErrorDetails(details);
      name = detail.name;
      message = detail.message;
    }
    const error = new Error(message);
    error.name = name;
    const messageHeight = error.message.split('\n').length;
    const messageLines = error.stack.split('\n').splice(0, messageHeight);
    const stackLines = [];
    if (details.stackTrace) {
      for (const frame of details.stackTrace.callFrames) {
        // Note we need to add `1` because the values are 0-indexed.
        stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
        if (stackLines.length >= Error.stackTraceLimit) {
          break;
        }
      }
    }
    error.stack = [...messageLines, ...stackLines].join('\n');
    return error;
  }
  /**
   * @internal
   */
  function valueFromJSHandle(handle) {
    const remoteObject = handle.remoteObject();
    if (remoteObject.objectId) {
      return valueFromRemoteObjectReference(handle);
    } else {
      return valueFromPrimitiveRemoteObject(remoteObject);
    }
  }
  /**
   * @internal
   */
  function valueFromRemoteObjectReference(handle) {
    const remoteObject = handle.remoteObject();
    assert(remoteObject.objectId, 'Cannot extract value when no objectId is given');
    const description = remoteObject.description ?? '';
    if (remoteObject.subtype === 'error' && description) {
      const newlineIdx = description.indexOf('\n');
      if (newlineIdx === -1) {
        return description;
      }
      return description.slice(0, newlineIdx);
    }
    return `[${remoteObject.subtype || remoteObject.type} ${remoteObject.className}]`;
  }
  /**
   * @internal
   */
  function valueFromPrimitiveRemoteObject(remoteObject) {
    assert(!remoteObject.objectId, 'Cannot extract value when objectId is given');
    if (remoteObject.unserializableValue) {
      if (remoteObject.type === 'bigint') {
        return BigInt(remoteObject.unserializableValue.replace('n', ''));
      }
      switch (remoteObject.unserializableValue) {
        case '-0':
          return -0;
        case 'NaN':
          return NaN;
        case 'Infinity':
          return Infinity;
        case '-Infinity':
          return -Infinity;
        default:
          throw new Error('Unsupported unserializable value: ' + remoteObject.unserializableValue);
      }
    }
    return remoteObject.value;
  }
  /**
   * @internal
   */
  function addPageBinding(type, name, prefix) {
    // Depending on the frame loading state either Runtime.evaluate or
    // Page.addScriptToEvaluateOnNewDocument might succeed. Let's check that we
    // don't re-wrap Puppeteer's binding.
    // @ts-expect-error: In a different context.
    if (globalThis[name]) {
      return;
    }
    // We replace the CDP binding with a Puppeteer binding.
    Object.assign(globalThis, {
      [name](...args) {
        // This is the Puppeteer binding.
        // @ts-expect-error: In a different context.
        const callPuppeteer = globalThis[name];
        callPuppeteer.args ??= new Map();
        callPuppeteer.callbacks ??= new Map();
        const seq = (callPuppeteer.lastSeq ?? 0) + 1;
        callPuppeteer.lastSeq = seq;
        callPuppeteer.args.set(seq, args);
        // @ts-expect-error: In a different context.
        // Needs to be the same as CDP_BINDING_PREFIX.
        globalThis[prefix + name](JSON.stringify({
          type,
          name,
          seq,
          args,
          isTrivial: !args.some(value => {
            return value instanceof Node;
          })
        }));
        return new Promise((resolve, reject) => {
          callPuppeteer.callbacks.set(seq, {
            resolve(value) {
              callPuppeteer.args.delete(seq);
              resolve(value);
            },
            reject(value) {
              callPuppeteer.args.delete(seq);
              reject(value);
            }
          });
        });
      }
    });
  }
  /**
   * @internal
   */
  const CDP_BINDING_PREFIX = 'puppeteer_';
  /**
   * @internal
   */
  function pageBindingInitString(type, name) {
    return evaluationString(addPageBinding, type, name, CDP_BINDING_PREFIX);
  }
  /**
   * @internal
   */
  function convertConsoleMessageLevel(method) {
    switch (method) {
      case 'warning':
        return 'warn';
      default:
        return method;
    }
  }

  /**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _disposed4 = /*#__PURE__*/new WeakMap();
  var _remoteObject = /*#__PURE__*/new WeakMap();
  var _world2 = /*#__PURE__*/new WeakMap();
  class CdpJSHandle extends JSHandle {
    constructor(world, remoteObject) {
      super();
      _classPrivateFieldInitSpec(this, _disposed4, false);
      _classPrivateFieldInitSpec(this, _remoteObject, void 0);
      _classPrivateFieldInitSpec(this, _world2, void 0);
      _classPrivateFieldSet(_world2, this, world);
      _classPrivateFieldSet(_remoteObject, this, remoteObject);
    }
    get disposed() {
      return _classPrivateFieldGet(_disposed4, this);
    }
    get realm() {
      return _classPrivateFieldGet(_world2, this);
    }
    get client() {
      return this.realm.environment.client;
    }
    async jsonValue() {
      if (!_classPrivateFieldGet(_remoteObject, this).objectId) {
        return valueFromPrimitiveRemoteObject(_classPrivateFieldGet(_remoteObject, this));
      }
      const value = await this.evaluate(object => {
        return object;
      });
      if (value === undefined) {
        throw new Error('Could not serialize referenced object');
      }
      return value;
    }
    /**
     * Either `null` or the handle itself if the handle is an
     * instance of {@link ElementHandle}.
     */
    asElement() {
      return null;
    }
    async dispose() {
      if (_classPrivateFieldGet(_disposed4, this)) {
        return;
      }
      _classPrivateFieldSet(_disposed4, this, true);
      await releaseObject(this.client, _classPrivateFieldGet(_remoteObject, this));
    }
    toString() {
      if (!_classPrivateFieldGet(_remoteObject, this).objectId) {
        return 'JSHandle:' + valueFromPrimitiveRemoteObject(_classPrivateFieldGet(_remoteObject, this));
      }
      const type = _classPrivateFieldGet(_remoteObject, this).subtype || _classPrivateFieldGet(_remoteObject, this).type;
      return 'JSHandle@' + type;
    }
    get id() {
      return _classPrivateFieldGet(_remoteObject, this).objectId;
    }
    remoteObject() {
      return _classPrivateFieldGet(_remoteObject, this);
    }
    async getProperties() {
      // We use Runtime.getProperties rather than iterative version for
      // improved performance as it allows getting everything at once.
      const response = await this.client.send('Runtime.getProperties', {
        objectId: _classPrivateFieldGet(_remoteObject, this).objectId,
        ownProperties: true
      });
      const result = new Map();
      for (const property of response.result) {
        if (!property.enumerable || !property.value) {
          continue;
        }
        result.set(property.name, _classPrivateFieldGet(_world2, this).createCdpHandle(property.value));
      }
      return result;
    }
  }
  /**
   * @internal
   */
  async function releaseObject(client, remoteObject) {
    if (!remoteObject.objectId) {
      return;
    }
    await client.send('Runtime.releaseObject', {
      objectId: remoteObject.objectId
    }).catch(error => {
      // Exceptions might happen in case of a page been navigated or closed.
      // Swallow these since they are harmless and we don't leak anything in this case.
      debugError(error);
    });
  }

  /**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __runInitializers$1 = undefined && undefined.__runInitializers || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$1 = undefined && undefined.__esDecorate || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  const NON_ELEMENT_NODE_ROLES = new Set(['StaticText', 'InlineTextBox']);
  /**
   * The CdpElementHandle extends ElementHandle now to keep compatibility
   * with `instanceof` because of that we need to have methods for
   * CdpJSHandle to in this implementation as well.
   *
   * @internal
   */
  let CdpElementHandle = ((_CdpElementHandle, _backendNodeId, _CdpElementHandle_brand) => {
    let _classSuper = ElementHandle;
    let _instanceExtraInitializers = [];
    let _contentFrame_decorators;
    let _scrollIntoView_decorators;
    let _uploadFile_decorators;
    let _autofill_decorators;
    return _backendNodeId = /*#__PURE__*/new WeakMap(), _CdpElementHandle_brand = /*#__PURE__*/new WeakSet(), _CdpElementHandle = class CdpElementHandle extends _classSuper {
      constructor(world, remoteObject) {
        super(new CdpJSHandle(world, remoteObject));
        _classPrivateMethodInitSpec(this, _CdpElementHandle_brand);
        _classPrivateFieldInitSpec(this, _backendNodeId, __runInitializers$1(this, _instanceExtraInitializers));
      }
      get realm() {
        return this.handle.realm;
      }
      get client() {
        return this.handle.client;
      }
      remoteObject() {
        return this.handle.remoteObject();
      }
      get frame() {
        return this.realm.environment;
      }
      async contentFrame() {
        const nodeInfo = await this.client.send('DOM.describeNode', {
          objectId: this.id
        });
        if (typeof nodeInfo.node.frameId !== 'string') {
          return null;
        }
        return _classPrivateGetter(_CdpElementHandle_brand, this, _get_frameManager).frame(nodeInfo.node.frameId);
      }
      async scrollIntoView() {
        await this.assertConnectedElement();
        try {
          await this.client.send('DOM.scrollIntoViewIfNeeded', {
            objectId: this.id
          });
        } catch (error) {
          debugError(error);
          // Fallback to Element.scrollIntoView if DOM.scrollIntoViewIfNeeded is not supported
          await super.scrollIntoView();
        }
      }
      async uploadFile(...files) {
        const isMultiple = await this.evaluate(element => {
          return element.multiple;
        });
        assert(files.length <= 1 || isMultiple, 'Multiple file uploads only work with <input type=file multiple>');
        // Locate all files and confirm that they exist.
        const path = environment.value.path;
        if (path) {
          files = files.map(filePath => {
            if (path.win32.isAbsolute(filePath) || path.posix.isAbsolute(filePath)) {
              return filePath;
            } else {
              return path.resolve(filePath);
            }
          });
        }
        /**
         * The zero-length array is a special case, it seems that
         * DOM.setFileInputFiles does not actually update the files in that case, so
         * the solution is to eval the element value to a new FileList directly.
         */
        if (files.length === 0) {
          // XXX: These events should converted to trusted events. Perhaps do this
          // in `DOM.setFileInputFiles`?
          await this.evaluate(element => {
            element.files = new DataTransfer().files;
            // Dispatch events for this case because it should behave akin to a user action.
            element.dispatchEvent(new Event('input', {
              bubbles: true,
              composed: true
            }));
            element.dispatchEvent(new Event('change', {
              bubbles: true
            }));
          });
          return;
        }
        const {
          node: {
            backendNodeId
          }
        } = await this.client.send('DOM.describeNode', {
          objectId: this.id
        });
        await this.client.send('DOM.setFileInputFiles', {
          objectId: this.id,
          files,
          backendNodeId
        });
      }
      async autofill(data) {
        const nodeInfo = await this.client.send('DOM.describeNode', {
          objectId: this.handle.id
        });
        const fieldId = nodeInfo.node.backendNodeId;
        const frameId = this.frame._id;
        await this.client.send('Autofill.trigger', {
          fieldId,
          frameId,
          card: data.creditCard,
          address: data.address
        });
      }
      async *queryAXTree(name, role) {
        const {
          nodes
        } = await this.client.send('Accessibility.queryAXTree', {
          objectId: this.id,
          accessibleName: name,
          role
        });
        const results = nodes.filter(node => {
          if (node.ignored) {
            return false;
          }
          if (!node.role) {
            return false;
          }
          if (NON_ELEMENT_NODE_ROLES.has(node.role.value)) {
            return false;
          }
          return true;
        });
        return yield* AsyncIterableUtil.map(results, node => {
          return this.realm.adoptBackendNode(node.backendDOMNodeId);
        });
      }
      async backendNodeId() {
        if (_classPrivateFieldGet(_backendNodeId, this)) {
          return _classPrivateFieldGet(_backendNodeId, this);
        }
        const {
          node
        } = await this.client.send('DOM.describeNode', {
          objectId: this.handle.id
        });
        _classPrivateFieldSet(_backendNodeId, this, node.backendNodeId);
        return _classPrivateFieldGet(_backendNodeId, this);
      }
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _contentFrame_decorators = [throwIfDisposed()];
      _scrollIntoView_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _uploadFile_decorators = [throwIfDisposed(), bindIsolatedHandle];
      _autofill_decorators = [throwIfDisposed()];
      __esDecorate$1(_CdpElementHandle, null, _contentFrame_decorators, {
        kind: "method",
        name: "contentFrame",
        static: false,
        private: false,
        access: {
          has: obj => "contentFrame" in obj,
          get: obj => obj.contentFrame
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$1(_CdpElementHandle, null, _scrollIntoView_decorators, {
        kind: "method",
        name: "scrollIntoView",
        static: false,
        private: false,
        access: {
          has: obj => "scrollIntoView" in obj,
          get: obj => obj.scrollIntoView
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$1(_CdpElementHandle, null, _uploadFile_decorators, {
        kind: "method",
        name: "uploadFile",
        static: false,
        private: false,
        access: {
          has: obj => "uploadFile" in obj,
          get: obj => obj.uploadFile
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate$1(_CdpElementHandle, null, _autofill_decorators, {
        kind: "method",
        name: "autofill",
        static: false,
        private: false,
        access: {
          has: obj => "autofill" in obj,
          get: obj => obj.autofill
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(_CdpElementHandle, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    })(), _CdpElementHandle;
    function _get_frameManager(_this12) {
      return _this12.frame._frameManager;
    }
  })();

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __addDisposableResource$2 = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$2 = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  const ariaQuerySelectorBinding = new Binding('__ariaQuerySelector', ARIAQueryHandler.queryOne, '');
  const ariaQuerySelectorAllBinding = new Binding('__ariaQuerySelectorAll', async (element, selector) => {
    const results = ARIAQueryHandler.queryAll(element, selector);
    return await element.realm.evaluateHandle((...elements) => {
      return elements;
    }, ...(await AsyncIterableUtil.collect(results)));
  }, '');
  /**
   * @internal
   */
  var _client8 = /*#__PURE__*/new WeakMap();
  var _world3 = /*#__PURE__*/new WeakMap();
  var _id6 = /*#__PURE__*/new WeakMap();
  var _name4 = /*#__PURE__*/new WeakMap();
  var _disposables = /*#__PURE__*/new WeakMap();
  var _bindings = /*#__PURE__*/new WeakMap();
  var _mutex = /*#__PURE__*/new WeakMap();
  var _ExecutionContext_brand = /*#__PURE__*/new WeakSet();
  var _bindingsInstalled = /*#__PURE__*/new WeakMap();
  var _puppeteerUtil = /*#__PURE__*/new WeakMap();
  class ExecutionContext extends EventEmitter {
    constructor(client, contextPayload, world) {
      super();
      _classPrivateMethodInitSpec(this, _ExecutionContext_brand);
      _classPrivateFieldInitSpec(this, _client8, void 0);
      _classPrivateFieldInitSpec(this, _world3, void 0);
      _classPrivateFieldInitSpec(this, _id6, void 0);
      _classPrivateFieldInitSpec(this, _name4, void 0);
      _classPrivateFieldInitSpec(this, _disposables, new DisposableStack());
      // Contains mapping from functions that should be bound to Puppeteer functions.
      _classPrivateFieldInitSpec(this, _bindings, new Map());
      // If multiple waitFor are set up asynchronously, we need to wait for the
      // first one to set up the binding in the page before running the others.
      _classPrivateFieldInitSpec(this, _mutex, new Mutex());
      _classPrivateFieldInitSpec(this, _bindingsInstalled, false);
      _classPrivateFieldInitSpec(this, _puppeteerUtil, void 0);
      _classPrivateFieldSet(_client8, this, client);
      _classPrivateFieldSet(_world3, this, world);
      _classPrivateFieldSet(_id6, this, contextPayload.id);
      if (contextPayload.name) {
        _classPrivateFieldSet(_name4, this, contextPayload.name);
      }
      const clientEmitter = _classPrivateFieldGet(_disposables, this).use(new EventEmitter(_classPrivateFieldGet(_client8, this)));
      clientEmitter.on('Runtime.bindingCalled', _assertClassBrand(_ExecutionContext_brand, this, _onBindingCalled).bind(this));
      clientEmitter.on('Runtime.executionContextDestroyed', async event => {
        if (event.executionContextId === _classPrivateFieldGet(_id6, this)) {
          this[disposeSymbol]();
        }
      });
      clientEmitter.on('Runtime.executionContextsCleared', async () => {
        this[disposeSymbol]();
      });
      clientEmitter.on('Runtime.consoleAPICalled', _assertClassBrand(_ExecutionContext_brand, this, _onConsoleAPI).bind(this));
      clientEmitter.on(exports.CDPSessionEvent.Disconnected, () => {
        this[disposeSymbol]();
      });
    }
    get id() {
      return _classPrivateFieldGet(_id6, this);
    }
    get puppeteerUtil() {
      let promise = Promise.resolve();
      if (!_classPrivateFieldGet(_bindingsInstalled, this)) {
        promise = Promise.all([_assertClassBrand(_ExecutionContext_brand, this, _addBindingWithoutThrowing).call(this, ariaQuerySelectorBinding), _assertClassBrand(_ExecutionContext_brand, this, _addBindingWithoutThrowing).call(this, ariaQuerySelectorAllBinding)]);
        _classPrivateFieldSet(_bindingsInstalled, this, true);
      }
      scriptInjector.inject(script => {
        if (_classPrivateFieldGet(_puppeteerUtil, this)) {
          void _classPrivateFieldGet(_puppeteerUtil, this).then(handle => {
            void handle.dispose();
          });
        }
        _classPrivateFieldSet(_puppeteerUtil, this, promise.then(() => {
          return this.evaluateHandle(script);
        }));
      }, !_classPrivateFieldGet(_puppeteerUtil, this));
      return _classPrivateFieldGet(_puppeteerUtil, this);
    }
    /**
     * Evaluates the given function.
     *
     * @example
     *
     * ```ts
     * const executionContext = await page.mainFrame().executionContext();
     * const result = await executionContext.evaluate(() => Promise.resolve(8 * 7))* ;
     * console.log(result); // prints "56"
     * ```
     *
     * @example
     * A string can also be passed in instead of a function:
     *
     * ```ts
     * console.log(await executionContext.evaluate('1 + 2')); // prints "3"
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const oneHandle = await executionContext.evaluateHandle(() => 1);
     * const twoHandle = await executionContext.evaluateHandle(() => 2);
     * const result = await executionContext.evaluate(
     *   (a, b) => a + b,
     *   oneHandle,
     *   twoHandle,
     * );
     * await oneHandle.dispose();
     * await twoHandle.dispose();
     * console.log(result); // prints '3'.
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns The result of evaluating the function. If the result is an object,
     * a vanilla object containing the serializable properties of the result is
     * returned.
     */
    async evaluate(pageFunction, ...args) {
      return await _assertClassBrand(_ExecutionContext_brand, this, _evaluate).call(this, true, pageFunction, ...args);
    }
    /**
     * Evaluates the given function.
     *
     * Unlike {@link ExecutionContext.evaluate | evaluate}, this method returns a
     * handle to the result of the function.
     *
     * This method may be better suited if the object cannot be serialized (e.g.
     * `Map`) and requires further manipulation.
     *
     * @example
     *
     * ```ts
     * const context = await page.mainFrame().executionContext();
     * const handle: JSHandle<typeof globalThis> = await context.evaluateHandle(
     *   () => Promise.resolve(self),
     * );
     * ```
     *
     * @example
     * A string can also be passed in instead of a function.
     *
     * ```ts
     * const handle: JSHandle<number> = await context.evaluateHandle('1 + 2');
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const bodyHandle: ElementHandle<HTMLBodyElement> =
     *   await context.evaluateHandle(() => {
     *     return document.body;
     *   });
     * const stringHandle: JSHandle<string> = await context.evaluateHandle(
     *   body => body.innerHTML,
     *   body,
     * );
     * console.log(await stringHandle.jsonValue()); // prints body's innerHTML
     * // Always dispose your garbage! :)
     * await bodyHandle.dispose();
     * await stringHandle.dispose();
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns A {@link JSHandle | handle} to the result of evaluating the
     * function. If the result is a `Node`, then this will return an
     * {@link ElementHandle | element handle}.
     */
    async evaluateHandle(pageFunction, ...args) {
      return await _assertClassBrand(_ExecutionContext_brand, this, _evaluate).call(this, false, pageFunction, ...args);
    }
    [disposeSymbol]() {
      _classPrivateFieldGet(_disposables, this).dispose();
      this.emit('disposed', undefined);
      super[disposeSymbol]();
    }
  }
  async function _addBinding(binding) {
    const env_1 = {
      stack: [],
      error: void 0,
      hasError: false
    };
    try {
      if (_classPrivateFieldGet(_bindings, this).has(binding.name)) {
        return;
      }
      const _ = __addDisposableResource$2(env_1, await _classPrivateFieldGet(_mutex, this).acquire(), false);
      try {
        await _classPrivateFieldGet(_client8, this).send('Runtime.addBinding', _classPrivateFieldGet(_name4, this) ? {
          name: CDP_BINDING_PREFIX + binding.name,
          executionContextName: _classPrivateFieldGet(_name4, this)
        } : {
          name: CDP_BINDING_PREFIX + binding.name,
          executionContextId: _classPrivateFieldGet(_id6, this)
        });
        await this.evaluate(addPageBinding, 'internal', binding.name, CDP_BINDING_PREFIX);
        _classPrivateFieldGet(_bindings, this).set(binding.name, binding);
      } catch (error) {
        // We could have tried to evaluate in a context which was already
        // destroyed. This happens, for example, if the page is navigated while
        // we are trying to add the binding
        if (error instanceof Error) {
          // Destroyed context.
          if (error.message.includes('Execution context was destroyed')) {
            return;
          }
          // Missing context.
          if (error.message.includes('Cannot find context with specified id')) {
            return;
          }
        }
        debugError(error);
      }
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources$2(env_1);
    }
  }
  async function _onBindingCalled(event) {
    if (event.executionContextId !== _classPrivateFieldGet(_id6, this)) {
      return;
    }
    let payload;
    try {
      payload = JSON.parse(event.payload);
    } catch {
      // The binding was either called by something in the page or it was
      // called before our wrapper was initialized.
      return;
    }
    const {
      type,
      name,
      seq,
      args,
      isTrivial
    } = payload;
    if (type !== 'internal') {
      this.emit('bindingcalled', event);
      return;
    }
    if (!_classPrivateFieldGet(_bindings, this).has(name)) {
      this.emit('bindingcalled', event);
      return;
    }
    try {
      const binding = _classPrivateFieldGet(_bindings, this).get(name);
      await binding?.run(this, seq, args, isTrivial);
    } catch (err) {
      debugError(err);
    }
  }
  function _onConsoleAPI(event) {
    if (event.executionContextId !== _classPrivateFieldGet(_id6, this)) {
      return;
    }
    this.emit('consoleapicalled', event);
  }
  async function _addBindingWithoutThrowing(binding) {
    try {
      await _assertClassBrand(_ExecutionContext_brand, this, _addBinding).call(this, binding);
    } catch (err) {
      // If the binding cannot be added, the context is broken. We cannot
      // recover so we ignore the error.
      debugError(err);
    }
  }
  async function _evaluate(returnByValue, pageFunction, ...args) {
    const sourceUrlComment = getSourceUrlComment(getSourcePuppeteerURLIfAvailable(pageFunction)?.toString() ?? PuppeteerURL.INTERNAL_URL);
    if (isString(pageFunction)) {
      const contextId = _classPrivateFieldGet(_id6, this);
      const expression = pageFunction;
      const expressionWithSourceUrl = SOURCE_URL_REGEX.test(expression) ? expression : `${expression}\n${sourceUrlComment}\n`;
      const {
        exceptionDetails,
        result: remoteObject
      } = await _classPrivateFieldGet(_client8, this).send('Runtime.evaluate', {
        expression: expressionWithSourceUrl,
        contextId,
        returnByValue,
        awaitPromise: true,
        userGesture: true
      }).catch(rewriteError);
      if (exceptionDetails) {
        throw createEvaluationError(exceptionDetails);
      }
      if (returnByValue) {
        return valueFromPrimitiveRemoteObject(remoteObject);
      }
      return _classPrivateFieldGet(_world3, this).createCdpHandle(remoteObject);
    }
    const functionDeclaration = stringifyFunction(pageFunction);
    const functionDeclarationWithSourceUrl = SOURCE_URL_REGEX.test(functionDeclaration) ? functionDeclaration : `${functionDeclaration}\n${sourceUrlComment}\n`;
    let callFunctionOnPromise;
    try {
      callFunctionOnPromise = _classPrivateFieldGet(_client8, this).send('Runtime.callFunctionOn', {
        functionDeclaration: functionDeclarationWithSourceUrl,
        executionContextId: _classPrivateFieldGet(_id6, this),
        // LazyArgs are used only internally and should not affect the order
        // evaluate calls for the public APIs.
        arguments: args.some(arg => {
          return arg instanceof LazyArg;
        }) ? await Promise.all(args.map(arg => {
          return convertArgumentAsync(this, arg);
        })) : args.map(arg => {
          return convertArgument(this, arg);
        }),
        returnByValue,
        awaitPromise: true,
        userGesture: true
      });
    } catch (error) {
      if (error instanceof TypeError && error.message.startsWith('Converting circular structure to JSON')) {
        error.message += ' Recursive objects are not allowed.';
      }
      throw error;
    }
    const {
      exceptionDetails,
      result: remoteObject
    } = await callFunctionOnPromise.catch(rewriteError);
    if (exceptionDetails) {
      throw createEvaluationError(exceptionDetails);
    }
    if (returnByValue) {
      return valueFromPrimitiveRemoteObject(remoteObject);
    }
    return _classPrivateFieldGet(_world3, this).createCdpHandle(remoteObject);
    async function convertArgumentAsync(context, arg) {
      if (arg instanceof LazyArg) {
        arg = await arg.get(context);
      }
      return convertArgument(context, arg);
    }
    function convertArgument(context, arg) {
      if (typeof arg === 'bigint') {
        return {
          unserializableValue: `${arg.toString()}n`
        };
      }
      if (Object.is(arg, -0)) {
        return {
          unserializableValue: '-0'
        };
      }
      if (Object.is(arg, Infinity)) {
        return {
          unserializableValue: 'Infinity'
        };
      }
      if (Object.is(arg, -Infinity)) {
        return {
          unserializableValue: '-Infinity'
        };
      }
      if (Object.is(arg, NaN)) {
        return {
          unserializableValue: 'NaN'
        };
      }
      const objectHandle = arg && (arg instanceof CdpJSHandle || arg instanceof CdpElementHandle) ? arg : null;
      if (objectHandle) {
        if (objectHandle.realm !== _classPrivateFieldGet(_world3, context)) {
          throw new Error('JSHandles can be evaluated only in the context they were created!');
        }
        if (objectHandle.disposed) {
          throw new Error('JSHandle is disposed!');
        }
        if (objectHandle.remoteObject().unserializableValue) {
          return {
            unserializableValue: objectHandle.remoteObject().unserializableValue
          };
        }
        if (!objectHandle.remoteObject().objectId) {
          return {
            value: objectHandle.remoteObject().value
          };
        }
        return {
          objectId: objectHandle.remoteObject().objectId
        };
      }
      return {
        value: arg
      };
    }
  }
  const rewriteError = error => {
    if (error.message.includes('Object reference chain is too long')) {
      return {
        result: {
          type: 'undefined'
        }
      };
    }
    if (error.message.includes("Object couldn't be returned by value")) {
      return {
        result: {
          type: 'undefined'
        }
      };
    }
    if (error.message.endsWith('Cannot find context with specified id') || error.message.endsWith('Inspected target navigated or closed')) {
      throw new Error('Execution context was destroyed, most likely because of a navigation.');
    }
    throw error;
  };

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * We use symbols to prevent external parties listening to these events.
   * They are internal to Puppeteer.
   *
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/no-namespace
  exports.FrameManagerEvent = void 0;
  (function (FrameManagerEvent) {
    FrameManagerEvent.FrameAttached = Symbol('FrameManager.FrameAttached');
    FrameManagerEvent.FrameNavigated = Symbol('FrameManager.FrameNavigated');
    FrameManagerEvent.FrameDetached = Symbol('FrameManager.FrameDetached');
    FrameManagerEvent.FrameSwapped = Symbol('FrameManager.FrameSwapped');
    FrameManagerEvent.LifecycleEvent = Symbol('FrameManager.LifecycleEvent');
    FrameManagerEvent.FrameNavigatedWithinDocument = Symbol('FrameManager.FrameNavigatedWithinDocument');
    FrameManagerEvent.ConsoleApiCalled = Symbol('FrameManager.ConsoleApiCalled');
    FrameManagerEvent.BindingCalled = Symbol('FrameManager.BindingCalled');
  })(exports.FrameManagerEvent || (exports.FrameManagerEvent = {}));

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * A unique key for {@link IsolatedWorldChart} to denote the default world.
   * Execution contexts are automatically created in the default world.
   *
   * @internal
   */
  const MAIN_WORLD = Symbol('mainWorld');
  /**
   * A unique key for {@link IsolatedWorldChart} to denote the puppeteer world.
   * This world contains all puppeteer-internal bindings/code.
   *
   * @internal
   */
  const PUPPETEER_WORLD = Symbol('puppeteerWorld');

  /**
   * @internal
   */
  var _world4 = /*#__PURE__*/new WeakMap();
  var _client9 = /*#__PURE__*/new WeakMap();
  var _id7 = /*#__PURE__*/new WeakMap();
  var _targetType2 = /*#__PURE__*/new WeakMap();
  var _emitter2 = /*#__PURE__*/new WeakMap();
  class CdpWebWorker extends WebWorker {
    get internalEmitter() {
      return _classPrivateFieldGet(_emitter2, this);
    }
    constructor(client, url, targetId, targetType, exceptionThrown, networkManager) {
      super(url);
      _classPrivateFieldInitSpec(this, _world4, void 0);
      _classPrivateFieldInitSpec(this, _client9, void 0);
      _classPrivateFieldInitSpec(this, _id7, void 0);
      _classPrivateFieldInitSpec(this, _targetType2, void 0);
      _classPrivateFieldInitSpec(this, _emitter2, void 0);
      _classPrivateFieldSet(_id7, this, targetId);
      _classPrivateFieldSet(_client9, this, client);
      _classPrivateFieldSet(_targetType2, this, targetType);
      _classPrivateFieldSet(_world4, this, new IsolatedWorld(this, new TimeoutSettings(), MAIN_WORLD));
      _classPrivateFieldSet(_emitter2, this, new EventEmitter());
      _classPrivateFieldGet(_client9, this).once('Runtime.executionContextCreated', async event => {
        _classPrivateFieldGet(_world4, this).setContext(new ExecutionContext(client, event.context, _classPrivateFieldGet(_world4, this)));
      });
      _classPrivateFieldGet(_world4, this).emitter.on('consoleapicalled', async event => {
        try {
          const values = event.args.map(arg => {
            return _classPrivateFieldGet(_world4, this).createCdpHandle(arg);
          });
          const noInternalListeners = _classPrivateFieldGet(_emitter2, this).listenerCount(exports.WebWorkerEvent.Console) === 0;
          const noWorkerListeners = this.listenerCount(exports.WebWorkerEvent.Console) === 0;
          if (noInternalListeners && noWorkerListeners) {
            // eslint-disable-next-line max-len -- The comment is long.
            // eslint-disable-next-line @puppeteer/use-using -- These are not owned by this function.
            for (const value of values) {
              void value.dispose().catch(debugError);
            }
            return;
          }
          const consoleMessages = createConsoleMessage(event, values, _classPrivateFieldGet(_id7, this));
          _classPrivateFieldGet(_emitter2, this).emit(exports.WebWorkerEvent.Console, consoleMessages);
          if (!noWorkerListeners) {
            this.emit(exports.WebWorkerEvent.Console, consoleMessages);
          }
        } catch (err) {
          debugError(err);
        }
      });
      _classPrivateFieldGet(_client9, this).on('Runtime.exceptionThrown', exceptionThrown);
      _classPrivateFieldGet(_client9, this).once(exports.CDPSessionEvent.Disconnected, () => {
        _classPrivateFieldGet(_world4, this).dispose();
      });
      // This might fail if the target is closed before we receive all execution contexts.
      networkManager?.addClient(_classPrivateFieldGet(_client9, this)).catch(debugError);
      _classPrivateFieldGet(_client9, this).send('Runtime.enable').catch(debugError);
    }
    mainRealm() {
      return _classPrivateFieldGet(_world4, this);
    }
    get client() {
      return _classPrivateFieldGet(_client9, this);
    }
    async close() {
      switch (_classPrivateFieldGet(_targetType2, this)) {
        case exports.TargetType.SERVICE_WORKER:
          {
            // For service workers we need to close the target and detach to allow
            // the worker to stop.
            await this.client.connection()?.send('Target.closeTarget', {
              targetId: _classPrivateFieldGet(_id7, this)
            });
            await this.client.connection()?.send('Target.detachFromTarget', {
              sessionId: this.client.id()
            });
            break;
          }
        case exports.TargetType.SHARED_WORKER:
          {
            await this.client.connection()?.send('Target.closeTarget', {
              targetId: _classPrivateFieldGet(_id7, this)
            });
            break;
          }
        default:
          await this.evaluate(() => {
            self.close();
          });
      }
    }
  }

  /**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _context = /*#__PURE__*/new WeakMap();
  var _emitter3 = /*#__PURE__*/new WeakMap();
  var _worldId = /*#__PURE__*/new WeakMap();
  var _origin = /*#__PURE__*/new WeakMap();
  var _frameOrWorker = /*#__PURE__*/new WeakMap();
  var _IsolatedWorld_brand = /*#__PURE__*/new WeakSet();
  class IsolatedWorld extends Realm {
    constructor(frameOrWorker, timeoutSettings, worldId) {
      super(timeoutSettings);
      _classPrivateMethodInitSpec(this, _IsolatedWorld_brand);
      _classPrivateFieldInitSpec(this, _context, void 0);
      _classPrivateFieldInitSpec(this, _emitter3, new EventEmitter());
      _classPrivateFieldInitSpec(this, _worldId, void 0);
      _classPrivateFieldInitSpec(this, _origin, void 0);
      _classPrivateFieldInitSpec(this, _frameOrWorker, void 0);
      _classPrivateFieldSet(_frameOrWorker, this, frameOrWorker);
      _classPrivateFieldSet(_worldId, this, worldId);
    }
    get environment() {
      return _classPrivateFieldGet(_frameOrWorker, this);
    }
    get client() {
      return _classPrivateFieldGet(_frameOrWorker, this).client;
    }
    get emitter() {
      return _classPrivateFieldGet(_emitter3, this);
    }
    setContext(context) {
      _classPrivateFieldGet(_context, this)?.[disposeSymbol]();
      context.once('disposed', _assertClassBrand(_IsolatedWorld_brand, this, _onContextDisposed).bind(this));
      context.on('consoleapicalled', _assertClassBrand(_IsolatedWorld_brand, this, _onContextConsoleApiCalled).bind(this));
      context.on('bindingcalled', _assertClassBrand(_IsolatedWorld_brand, this, _onContextBindingCalled).bind(this));
      _classPrivateFieldSet(_context, this, context);
      _classPrivateFieldGet(_emitter3, this).emit('context', context);
      void this.taskManager.rerunAll();
    }
    hasContext() {
      return !!_classPrivateFieldGet(_context, this);
    }
    get context() {
      return _classPrivateFieldGet(_context, this);
    }
    async evaluateHandle(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
      // This code needs to schedule evaluateHandle call synchronously (at
      // least when the context is there) so we cannot unconditionally
      // await.
      let context = _assertClassBrand(_IsolatedWorld_brand, this, _executionContext).call(this);
      if (!context) {
        context = await _assertClassBrand(_IsolatedWorld_brand, this, _waitForExecutionContext).call(this);
      }
      return await context.evaluateHandle(pageFunction, ...args);
    }
    async evaluate(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
      // This code needs to schedule evaluate call synchronously (at
      // least when the context is there) so we cannot unconditionally
      // await.
      let context = _assertClassBrand(_IsolatedWorld_brand, this, _executionContext).call(this);
      if (!context) {
        context = await _assertClassBrand(_IsolatedWorld_brand, this, _waitForExecutionContext).call(this);
      }
      return await context.evaluate(pageFunction, ...args);
    }
    async adoptBackendNode(backendNodeId) {
      // This code needs to schedule resolveNode call synchronously (at
      // least when the context is there) so we cannot unconditionally
      // await.
      let context = _assertClassBrand(_IsolatedWorld_brand, this, _executionContext).call(this);
      if (!context) {
        context = await _assertClassBrand(_IsolatedWorld_brand, this, _waitForExecutionContext).call(this);
      }
      const {
        object
      } = await this.client.send('DOM.resolveNode', {
        backendNodeId: backendNodeId,
        executionContextId: context.id
      });
      return this.createCdpHandle(object);
    }
    async adoptHandle(handle) {
      if (handle.realm === this) {
        // If the context has already adopted this handle, clone it so downstream
        // disposal doesn't become an issue.
        return await handle.evaluateHandle(value => {
          return value;
        });
      }
      const nodeInfo = await this.client.send('DOM.describeNode', {
        objectId: handle.id
      });
      return await this.adoptBackendNode(nodeInfo.node.backendNodeId);
    }
    async transferHandle(handle) {
      if (handle.realm === this) {
        return handle;
      }
      // Implies it's a primitive value, probably.
      if (handle.remoteObject().objectId === undefined) {
        return handle;
      }
      const info = await this.client.send('DOM.describeNode', {
        objectId: handle.remoteObject().objectId
      });
      const newHandle = await this.adoptBackendNode(info.node.backendNodeId);
      await handle.dispose();
      return newHandle;
    }
    /**
     * @internal
     */
    createCdpHandle(remoteObject) {
      if (remoteObject.subtype === 'node') {
        return new CdpElementHandle(this, remoteObject);
      }
      return new CdpJSHandle(this, remoteObject);
    }
    [disposeSymbol]() {
      _classPrivateFieldGet(_context, this)?.[disposeSymbol]();
      _classPrivateFieldGet(_emitter3, this).emit('disposed', undefined);
      _classPrivateFieldGet(_emitter3, this).removeAllListeners();
      super[disposeSymbol]();
    }
    get origin() {
      return _classPrivateFieldGet(_origin, this);
    }
    set origin(origin) {
      _classPrivateFieldSet(_origin, this, origin);
    }
    setWorldId(worldId) {
      _classPrivateFieldSet(_worldId, this, worldId);
    }
    async extension() {
      if (_classPrivateFieldGet(_frameOrWorker, this) instanceof CdpWebWorker) {
        throw new Error('Unable to get extension from Realm');
      }
      if (_classPrivateFieldGet(_worldId, this) === MAIN_WORLD) {
        return null;
      }
      if (typeof _classPrivateFieldGet(_worldId, this) === 'string') {
        const extensions = await _classPrivateFieldGet(_frameOrWorker, this)._frameManager.page().browser().extensions();
        return extensions.get(_classPrivateFieldGet(_worldId, this)) ?? null;
      }
      return null;
    }
  }

  /**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  function _onContextDisposed() {
    _classPrivateFieldSet(_context, this, undefined);
    if ('clearDocumentHandle' in _classPrivateFieldGet(_frameOrWorker, this)) {
      _classPrivateFieldGet(_frameOrWorker, this).clearDocumentHandle();
    }
  }
  function _onContextConsoleApiCalled(event) {
    _classPrivateFieldGet(_emitter3, this).emit('consoleapicalled', event);
  }
  function _onContextBindingCalled(event) {
    _classPrivateFieldGet(_emitter3, this).emit('bindingcalled', event);
  }
  function _executionContext() {
    if (this.disposed) {
      throw new Error(`Execution context is not available in detached frame or worker "${this.environment.url()}" (are you trying to evaluate?)`);
    }
    return _classPrivateFieldGet(_context, this);
  }
  /**
   * Waits for the next context to be set on the isolated world.
   */
  async function _waitForExecutionContext() {
    const error = new Error('Execution context was destroyed');
    const result = await firstValueFrom(fromEmitterEvent(_classPrivateFieldGet(_emitter3, this), 'context').pipe(raceWith(fromEmitterEvent(_classPrivateFieldGet(_emitter3, this), 'disposed').pipe(map(() => {
      // The message has to match the CDP message expected by the WaitTask class.
      throw error;
    })), timeout(this.timeoutSettings.timeout()))));
    return result;
  }
  const puppeteerToProtocolLifecycle = new Map([['load', 'load'], ['domcontentloaded', 'DOMContentLoaded'], ['networkidle0', 'networkIdle'], ['networkidle2', 'networkAlmostIdle']]);
  /**
   * @internal
   */
  var _expectedLifecycle = /*#__PURE__*/new WeakMap();
  var _frame2 = /*#__PURE__*/new WeakMap();
  var _timeout3 = /*#__PURE__*/new WeakMap();
  var _navigationRequest = /*#__PURE__*/new WeakMap();
  var _subscriptions2 = /*#__PURE__*/new WeakMap();
  var _initialLoaderId = /*#__PURE__*/new WeakMap();
  var _terminationDeferred = /*#__PURE__*/new WeakMap();
  var _sameDocumentNavigationDeferred = /*#__PURE__*/new WeakMap();
  var _lifecycleDeferred = /*#__PURE__*/new WeakMap();
  var _newDocumentNavigationDeferred = /*#__PURE__*/new WeakMap();
  var _error3 = /*#__PURE__*/new WeakMap();
  var _hasSameDocumentNavigation = /*#__PURE__*/new WeakMap();
  var _swapped = /*#__PURE__*/new WeakMap();
  var _navigationResponseReceived = /*#__PURE__*/new WeakMap();
  var _LifecycleWatcher_brand = /*#__PURE__*/new WeakSet();
  class LifecycleWatcher {
    constructor(networkManager, _frame3, waitUntil, timeout, signal) {
      _classPrivateMethodInitSpec(this, _LifecycleWatcher_brand);
      _classPrivateFieldInitSpec(this, _expectedLifecycle, void 0);
      _classPrivateFieldInitSpec(this, _frame2, void 0);
      _classPrivateFieldInitSpec(this, _timeout3, void 0);
      _classPrivateFieldInitSpec(this, _navigationRequest, null);
      _classPrivateFieldInitSpec(this, _subscriptions2, new DisposableStack());
      _classPrivateFieldInitSpec(this, _initialLoaderId, void 0);
      _classPrivateFieldInitSpec(this, _terminationDeferred, void 0);
      _classPrivateFieldInitSpec(this, _sameDocumentNavigationDeferred, Deferred.create());
      _classPrivateFieldInitSpec(this, _lifecycleDeferred, Deferred.create());
      _classPrivateFieldInitSpec(this, _newDocumentNavigationDeferred, Deferred.create());
      _classPrivateFieldInitSpec(this, _error3, new Error('LifecycleWatcher terminated'));
      _classPrivateFieldInitSpec(this, _hasSameDocumentNavigation, void 0);
      _classPrivateFieldInitSpec(this, _swapped, void 0);
      _classPrivateFieldInitSpec(this, _navigationResponseReceived, void 0);
      if (Array.isArray(waitUntil)) {
        waitUntil = waitUntil.slice();
      } else if (typeof waitUntil === 'string') {
        waitUntil = [waitUntil];
      }
      _classPrivateFieldSet(_initialLoaderId, this, _frame3._loaderId);
      _classPrivateFieldSet(_expectedLifecycle, this, waitUntil.map(value => {
        const protocolEvent = puppeteerToProtocolLifecycle.get(value);
        assert(protocolEvent, 'Unknown value for options.waitUntil: ' + value);
        return protocolEvent;
      }));
      signal?.addEventListener('abort', () => {
        if (signal.reason instanceof Error) {
          signal.reason.cause = _classPrivateFieldGet(_error3, this);
        }
        _classPrivateFieldGet(_terminationDeferred, this).reject(signal.reason);
      });
      _classPrivateFieldSet(_frame2, this, _frame3);
      _classPrivateFieldSet(_timeout3, this, timeout);
      const frameManagerEmitter = _classPrivateFieldGet(_subscriptions2, this).use(new EventEmitter(_frame3._frameManager));
      frameManagerEmitter.on(exports.FrameManagerEvent.LifecycleEvent, _assertClassBrand(_LifecycleWatcher_brand, this, _checkLifecycleComplete).bind(this));
      const frameEmitter = _classPrivateFieldGet(_subscriptions2, this).use(new EventEmitter(_frame3));
      frameEmitter.on(exports.FrameEvent.FrameNavigatedWithinDocument, _assertClassBrand(_LifecycleWatcher_brand, this, _navigatedWithinDocument).bind(this));
      frameEmitter.on(exports.FrameEvent.FrameNavigated, _assertClassBrand(_LifecycleWatcher_brand, this, _navigated).bind(this));
      frameEmitter.on(exports.FrameEvent.FrameSwapped, _assertClassBrand(_LifecycleWatcher_brand, this, _frameSwapped).bind(this));
      frameEmitter.on(exports.FrameEvent.FrameSwappedByActivation, _assertClassBrand(_LifecycleWatcher_brand, this, _frameSwapped).bind(this));
      frameEmitter.on(exports.FrameEvent.FrameDetached, _assertClassBrand(_LifecycleWatcher_brand, this, _onFrameDetached).bind(this));
      const networkManagerEmitter = _classPrivateFieldGet(_subscriptions2, this).use(new EventEmitter(networkManager));
      networkManagerEmitter.on(exports.NetworkManagerEvent.Request, _assertClassBrand(_LifecycleWatcher_brand, this, _onRequest).bind(this));
      networkManagerEmitter.on(exports.NetworkManagerEvent.Response, _assertClassBrand(_LifecycleWatcher_brand, this, _onResponse).bind(this));
      networkManagerEmitter.on(exports.NetworkManagerEvent.RequestFailed, _assertClassBrand(_LifecycleWatcher_brand, this, _onRequestFailed).bind(this));
      _classPrivateFieldSet(_terminationDeferred, this, Deferred.create({
        timeout: _classPrivateFieldGet(_timeout3, this),
        message: `Navigation timeout of ${_classPrivateFieldGet(_timeout3, this)} ms exceeded`
      }));
      _assertClassBrand(_LifecycleWatcher_brand, this, _checkLifecycleComplete).call(this);
    }
    async navigationResponse() {
      // Continue with a possibly null response.
      await _classPrivateFieldGet(_navigationResponseReceived, this)?.valueOrThrow();
      return _classPrivateFieldGet(_navigationRequest, this) ? _classPrivateFieldGet(_navigationRequest, this).response() : null;
    }
    sameDocumentNavigationPromise() {
      return _classPrivateFieldGet(_sameDocumentNavigationDeferred, this).valueOrThrow();
    }
    newDocumentNavigationPromise() {
      return _classPrivateFieldGet(_newDocumentNavigationDeferred, this).valueOrThrow();
    }
    lifecyclePromise() {
      return _classPrivateFieldGet(_lifecycleDeferred, this).valueOrThrow();
    }
    terminationPromise() {
      return _classPrivateFieldGet(_terminationDeferred, this).valueOrThrow();
    }
    dispose() {
      _classPrivateFieldGet(_subscriptions2, this).dispose();
      _classPrivateFieldGet(_error3, this).cause = new Error('LifecycleWatcher disposed');
      _classPrivateFieldGet(_terminationDeferred, this).resolve(_classPrivateFieldGet(_error3, this));
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  function _onRequest(request) {
    if (request.frame() !== _classPrivateFieldGet(_frame2, this) || !request.isNavigationRequest()) {
      return;
    }
    _classPrivateFieldSet(_navigationRequest, this, request);
    // Resolve previous navigation response in case there are multiple
    // navigation requests reported by the backend. This generally should not
    // happen by it looks like it's possible.
    _classPrivateFieldGet(_navigationResponseReceived, this)?.resolve();
    _classPrivateFieldSet(_navigationResponseReceived, this, Deferred.create());
    if (request.response() !== null) {
      _classPrivateFieldGet(_navigationResponseReceived, this)?.resolve();
    }
  }
  function _onRequestFailed(request) {
    if (_classPrivateFieldGet(_navigationRequest, this)?.id !== request.id) {
      return;
    }
    _classPrivateFieldGet(_navigationResponseReceived, this)?.resolve();
  }
  function _onResponse(response) {
    if (_classPrivateFieldGet(_navigationRequest, this)?.id !== response.request().id) {
      return;
    }
    _classPrivateFieldGet(_navigationResponseReceived, this)?.resolve();
  }
  function _onFrameDetached(frame) {
    if (_classPrivateFieldGet(_frame2, this) === frame) {
      _classPrivateFieldGet(_error3, this).message = 'Navigating frame was detached';
      _classPrivateFieldGet(_terminationDeferred, this).resolve(_classPrivateFieldGet(_error3, this));
      return;
    }
    _assertClassBrand(_LifecycleWatcher_brand, this, _checkLifecycleComplete).call(this);
  }
  function _navigatedWithinDocument() {
    _classPrivateFieldSet(_hasSameDocumentNavigation, this, true);
    _assertClassBrand(_LifecycleWatcher_brand, this, _checkLifecycleComplete).call(this);
  }
  function _navigated(navigationType) {
    if (navigationType === 'BackForwardCacheRestore') {
      return _assertClassBrand(_LifecycleWatcher_brand, this, _frameSwapped).call(this);
    }
    _assertClassBrand(_LifecycleWatcher_brand, this, _checkLifecycleComplete).call(this);
  }
  function _frameSwapped() {
    _classPrivateFieldSet(_swapped, this, true);
    _assertClassBrand(_LifecycleWatcher_brand, this, _checkLifecycleComplete).call(this);
  }
  function _checkLifecycleComplete() {
    // We expect navigation to commit.
    if (!checkLifecycle(_classPrivateFieldGet(_frame2, this), _classPrivateFieldGet(_expectedLifecycle, this))) {
      return;
    }
    _classPrivateFieldGet(_lifecycleDeferred, this).resolve();
    if (_classPrivateFieldGet(_hasSameDocumentNavigation, this)) {
      _classPrivateFieldGet(_sameDocumentNavigationDeferred, this).resolve(undefined);
    }
    if (_classPrivateFieldGet(_swapped, this) || _classPrivateFieldGet(_frame2, this)._loaderId !== _classPrivateFieldGet(_initialLoaderId, this)) {
      _classPrivateFieldGet(_newDocumentNavigationDeferred, this).resolve(undefined);
    }
    function checkLifecycle(frame, expectedLifecycle) {
      for (const event of expectedLifecycle) {
        if (!frame._lifecycleEvents.has(event)) {
          return false;
        }
      }
      for (const child of frame.childFrames()) {
        if (child._hasStartedLoading && !checkLifecycle(child, expectedLifecycle)) {
          return false;
        }
      }
      return true;
    }
  }
  var __runInitializers = undefined && undefined.__runInitializers || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate = undefined && undefined.__esDecorate || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind,
      key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? {
        get: descriptor.get,
        set: descriptor.set
      } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  /**
   * @internal
   */
  let CdpFrame = ((_ref3, _CdpFrame, _url3, _detached2, _client0, _CdpFrame_brand) => {
    let _classSuper = Frame;
    let _instanceExtraInitializers = [];
    let _goto_decorators;
    let _waitForNavigation_decorators;
    let _setContent_decorators;
    let _addPreloadScript_decorators;
    let _addExposedFunctionBinding_decorators;
    let _removeExposedFunctionBinding_decorators;
    let _waitForDevicePrompt_decorators;
    return _url3 = /*#__PURE__*/new WeakMap(), _detached2 = /*#__PURE__*/new WeakMap(), _client0 = /*#__PURE__*/new WeakMap(), _CdpFrame_brand = /*#__PURE__*/new WeakSet(), _ref3 = (_goto_decorators = [throwIfDetached], _waitForNavigation_decorators = [throwIfDetached], _setContent_decorators = [throwIfDetached], _addPreloadScript_decorators = [throwIfDetached], _addExposedFunctionBinding_decorators = [throwIfDetached], _removeExposedFunctionBinding_decorators = [throwIfDetached], _waitForDevicePrompt_decorators = [throwIfDetached], disposeSymbol), _CdpFrame = class CdpFrame extends _classSuper {
      constructor(frameManager, frameId, parentFrameId, client) {
        super();
        _classPrivateMethodInitSpec(this, _CdpFrame_brand);
        _classPrivateFieldInitSpec(this, _url3, (__runInitializers(this, _instanceExtraInitializers), ''));
        _classPrivateFieldInitSpec(this, _detached2, false);
        _classPrivateFieldInitSpec(this, _client0, void 0);
        _defineProperty(this, "_frameManager", void 0);
        _defineProperty(this, "_loaderId", '');
        _defineProperty(this, "_lifecycleEvents", new Set());
        _defineProperty(this, "_id", void 0);
        _defineProperty(this, "_parentId", void 0);
        _defineProperty(this, "accessibility", void 0);
        _defineProperty(this, "worlds", void 0);
        _defineProperty(this, "extensionWorlds", {});
        this._frameManager = frameManager;
        _classPrivateFieldSet(_url3, this, '');
        this._id = frameId;
        this._parentId = parentFrameId;
        _classPrivateFieldSet(_detached2, this, false);
        _classPrivateFieldSet(_client0, this, client);
        this._loaderId = '';
        this.worlds = {
          [MAIN_WORLD]: new IsolatedWorld(this, this._frameManager.timeoutSettings, MAIN_WORLD),
          [PUPPETEER_WORLD]: new IsolatedWorld(this, this._frameManager.timeoutSettings, PUPPETEER_WORLD)
        };
        this.accessibility = new Accessibility(this.worlds[MAIN_WORLD], frameId);
        this.on(exports.FrameEvent.FrameSwappedByActivation, () => {
          // Emulate loading process for swapped frames.
          this._onLoadingStarted();
          this._onLoadingStopped();
        });
        this.registerWorldListeners(this.worlds[MAIN_WORLD]);
      }
      /**
       * @internal
       */
      registerWorldListeners(world) {
        world.emitter.on('consoleapicalled', event => {
          this._frameManager.emit(exports.FrameManagerEvent.ConsoleApiCalled, [world, event]);
        });
        world.emitter.on('bindingcalled', event => {
          this._frameManager.emit(exports.FrameManagerEvent.BindingCalled, [world, event]);
        });
      }
      /**
       * This is used internally in DevTools.
       *
       * @internal
       */
      _client() {
        return _classPrivateFieldGet(_client0, this);
      }
      /**
       * Updates the frame ID with the new ID. This happens when the main frame is
       * replaced by a different frame.
       */
      updateId(id) {
        this._id = id;
      }
      updateClient(client) {
        _classPrivateFieldSet(_client0, this, client);
      }
      page() {
        return this._frameManager.page();
      }
      async goto(url, options = {}) {
        if (!this.page()._isUrlAllowed(url)) {
          throw new Error(`Navigation to ${url} is blocked by blocklist/allowlist rules`);
        }
        const {
          referer = this._frameManager.networkManager.extraHTTPHeaders()['referer'],
          referrerPolicy = this._frameManager.networkManager.extraHTTPHeaders()['referer-policy'],
          waitUntil = ['load'],
          timeout = this._frameManager.timeoutSettings.navigationTimeout()
        } = options;
        let ensureNewDocumentNavigation = false;
        const watcher = new LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout);
        let error = await Deferred.race([navigate(_classPrivateFieldGet(_client0, this), url, referer, referrerPolicy ? referrerPolicyToProtocol(referrerPolicy) : undefined, this._id), watcher.terminationPromise()]);
        if (!error) {
          error = await Deferred.race([watcher.terminationPromise(), ensureNewDocumentNavigation ? watcher.newDocumentNavigationPromise() : watcher.sameDocumentNavigationPromise()]);
        }
        try {
          if (error) {
            throw error;
          }
          return await watcher.navigationResponse();
        } finally {
          watcher.dispose();
        }
        async function navigate(client, url, referrer, referrerPolicy, frameId) {
          try {
            const response = await client.send('Page.navigate', {
              url,
              referrer,
              frameId,
              referrerPolicy
            });
            ensureNewDocumentNavigation = !!response.loaderId;
            if (response.errorText === 'net::ERR_HTTP_RESPONSE_CODE_FAILURE') {
              return null;
            }
            return response.errorText ? new Error(`${response.errorText} at ${url}`) : null;
          } catch (error) {
            if (isErrorLike(error)) {
              return error;
            }
            throw error;
          }
        }
      }
      async waitForNavigation(options = {}) {
        const {
          waitUntil = ['load'],
          timeout = this._frameManager.timeoutSettings.navigationTimeout(),
          signal
        } = options;
        const watcher = new LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout, signal);
        const error = await Deferred.race([watcher.terminationPromise(), ...(options.ignoreSameDocumentNavigation ? [] : [watcher.sameDocumentNavigationPromise()]), watcher.newDocumentNavigationPromise()]);
        try {
          if (error) {
            throw error;
          }
          const result = await Deferred.race([watcher.terminationPromise(), watcher.navigationResponse()]);
          if (result instanceof Error) {
            throw error;
          }
          return result || null;
        } finally {
          watcher.dispose();
        }
      }
      get client() {
        return _classPrivateFieldGet(_client0, this);
      }
      mainRealm() {
        return this.worlds[MAIN_WORLD];
      }
      isolatedRealm() {
        return this.worlds[PUPPETEER_WORLD];
      }
      async setContent(html, options = {}) {
        const {
          waitUntil = ['load'],
          timeout = this._frameManager.timeoutSettings.navigationTimeout()
        } = options;
        // We rely upon the fact that document.open() will reset frame lifecycle with "init"
        // lifecycle event. @see https://crrev.com/608658
        await this.setFrameContent(html);
        const watcher = new LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout);
        const error = await Deferred.race([watcher.terminationPromise(), watcher.lifecyclePromise()]);
        watcher.dispose();
        if (error) {
          throw error;
        }
      }
      url() {
        return _classPrivateFieldGet(_url3, this);
      }
      parentFrame() {
        return this._frameManager._frameTree.parentFrame(this._id) || null;
      }
      childFrames() {
        return this._frameManager._frameTree.childFrames(this._id);
      }
      async addPreloadScript(preloadScript) {
        const parentFrame = this.parentFrame();
        if (parentFrame && _classPrivateFieldGet(_client0, this) === parentFrame.client) {
          return;
        }
        if (preloadScript.getIdForFrame(this)) {
          return;
        }
        const {
          identifier
        } = await _classPrivateFieldGet(_client0, this).send('Page.addScriptToEvaluateOnNewDocument', {
          source: preloadScript.source
        });
        preloadScript.setIdForFrame(this, identifier);
      }
      async addExposedFunctionBinding(binding) {
        // If a frame has not started loading, it might never start. Rely on
        // addScriptToEvaluateOnNewDocument in that case.
        if (this !== this._frameManager.mainFrame() && !this._hasStartedLoading) {
          return;
        }
        await Promise.all([_classPrivateFieldGet(_client0, this).send('Runtime.addBinding', {
          name: CDP_BINDING_PREFIX + binding.name
        }), this.evaluate(binding.initSource).catch(debugError)]);
      }
      async removeExposedFunctionBinding(binding) {
        // If a frame has not started loading, it might never start. Rely on
        // addScriptToEvaluateOnNewDocument in that case.
        if (this !== this._frameManager.mainFrame() && !this._hasStartedLoading) {
          return;
        }
        await Promise.all([_classPrivateFieldGet(_client0, this).send('Runtime.removeBinding', {
          name: CDP_BINDING_PREFIX + binding.name
        }), this.evaluate(name => {
          // Removes the dangling Puppeteer binding wrapper.
          // @ts-expect-error: In a different context.
          globalThis[name] = undefined;
        }, binding.name).catch(debugError)]);
      }
      async waitForDevicePrompt(options = {}) {
        return await _assertClassBrand(_CdpFrame_brand, this, _deviceRequestPromptManager).call(this).waitForDevicePrompt(options);
      }
      _navigated(framePayload) {
        this._name = framePayload.name;
        _classPrivateFieldSet(_url3, this, `${framePayload.url}${framePayload.urlFragment || ''}`);
      }
      _navigatedWithinDocument(url) {
        _classPrivateFieldSet(_url3, this, url);
      }
      _onLifecycleEvent(loaderId, name) {
        if (name === 'init') {
          this._loaderId = loaderId;
          this._lifecycleEvents.clear();
        }
        this._lifecycleEvents.add(name);
      }
      _onLoadingStopped() {
        this._lifecycleEvents.add('DOMContentLoaded');
        this._lifecycleEvents.add('load');
      }
      _onLoadingStarted() {
        this._hasStartedLoading = true;
      }
      get detached() {
        return _classPrivateFieldGet(_detached2, this);
      }
      [_ref3]() {
        if (_classPrivateFieldGet(_detached2, this)) {
          return;
        }
        _classPrivateFieldSet(_detached2, this, true);
        this.worlds[MAIN_WORLD][disposeSymbol]();
        this.worlds[PUPPETEER_WORLD][disposeSymbol]();
        for (const extensionWorld of Object.values(this.extensionWorlds)) {
          extensionWorld[disposeSymbol]();
        }
        super[disposeSymbol]();
      }
      exposeFunction() {
        throw new UnsupportedOperation();
      }
      async frameElement() {
        const parent = this.parentFrame();
        if (!parent) {
          return null;
        }
        const {
          backendNodeId
        } = await parent.client.send('DOM.getFrameOwner', {
          frameId: this._id
        });
        return await parent.mainRealm().adoptBackendNode(backendNodeId);
      }
      /**
       * @public
       */
      extensionRealms() {
        return Object.values(this.extensionWorlds);
      }
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate(_CdpFrame, null, _goto_decorators, {
        kind: "method",
        name: "goto",
        static: false,
        private: false,
        access: {
          has: obj => "goto" in obj,
          get: obj => obj.goto
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate(_CdpFrame, null, _waitForNavigation_decorators, {
        kind: "method",
        name: "waitForNavigation",
        static: false,
        private: false,
        access: {
          has: obj => "waitForNavigation" in obj,
          get: obj => obj.waitForNavigation
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate(_CdpFrame, null, _setContent_decorators, {
        kind: "method",
        name: "setContent",
        static: false,
        private: false,
        access: {
          has: obj => "setContent" in obj,
          get: obj => obj.setContent
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate(_CdpFrame, null, _addPreloadScript_decorators, {
        kind: "method",
        name: "addPreloadScript",
        static: false,
        private: false,
        access: {
          has: obj => "addPreloadScript" in obj,
          get: obj => obj.addPreloadScript
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate(_CdpFrame, null, _addExposedFunctionBinding_decorators, {
        kind: "method",
        name: "addExposedFunctionBinding",
        static: false,
        private: false,
        access: {
          has: obj => "addExposedFunctionBinding" in obj,
          get: obj => obj.addExposedFunctionBinding
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate(_CdpFrame, null, _removeExposedFunctionBinding_decorators, {
        kind: "method",
        name: "removeExposedFunctionBinding",
        static: false,
        private: false,
        access: {
          has: obj => "removeExposedFunctionBinding" in obj,
          get: obj => obj.removeExposedFunctionBinding
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      __esDecorate(_CdpFrame, null, _waitForDevicePrompt_decorators, {
        kind: "method",
        name: "waitForDevicePrompt",
        static: false,
        private: false,
        access: {
          has: obj => "waitForDevicePrompt" in obj,
          get: obj => obj.waitForDevicePrompt
        },
        metadata: _metadata
      }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(_CdpFrame, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    })(), _CdpFrame;
    function _deviceRequestPromptManager() {
      return this._frameManager._deviceRequestPromptManager(_classPrivateFieldGet(_client0, this));
    }
  })();
  /**
   * @internal
   */
  function referrerPolicyToProtocol(referrerPolicy) {
    // See
    // https://chromedevtools.github.io/devtools-protocol/tot/Page/#type-ReferrerPolicy
    // We need to conver from Web-facing phase to CDP's camelCase.
    return referrerPolicy.replaceAll(/-./g, match => {
      return match[1].toUpperCase();
    });
  }

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Keeps track of the page frame tree and it's is managed by
   * {@link FrameManager}. FrameTree uses frame IDs to reference frame and it
   * means that referenced frames might not be in the tree anymore. Thus, the tree
   * structure is eventually consistent.
   * @internal
   */
  var _frames = /*#__PURE__*/new WeakMap();
  var _parentIds = /*#__PURE__*/new WeakMap();
  var _childIds = /*#__PURE__*/new WeakMap();
  var _mainFrame = /*#__PURE__*/new WeakMap();
  var _isMainFrameStale = /*#__PURE__*/new WeakMap();
  var _waitRequests = /*#__PURE__*/new WeakMap();
  class FrameTree {
    constructor() {
      _classPrivateFieldInitSpec(this, _frames, new Map());
      // frameID -> parentFrameID
      _classPrivateFieldInitSpec(this, _parentIds, new Map());
      // frameID -> childFrameIDs
      _classPrivateFieldInitSpec(this, _childIds, new Map());
      _classPrivateFieldInitSpec(this, _mainFrame, void 0);
      _classPrivateFieldInitSpec(this, _isMainFrameStale, false);
      _classPrivateFieldInitSpec(this, _waitRequests, new Map());
    }
    getMainFrame() {
      return _classPrivateFieldGet(_mainFrame, this);
    }
    getById(frameId) {
      return _classPrivateFieldGet(_frames, this).get(frameId);
    }
    /**
     * Returns a promise that is resolved once the frame with
     * the given ID is added to the tree.
     */
    waitForFrame(frameId) {
      const frame = this.getById(frameId);
      if (frame) {
        return Promise.resolve(frame);
      }
      const deferred = Deferred.create();
      const callbacks = _classPrivateFieldGet(_waitRequests, this).get(frameId) || new Set();
      callbacks.add(deferred);
      return deferred.valueOrThrow();
    }
    frames() {
      return Array.from(_classPrivateFieldGet(_frames, this).values());
    }
    addFrame(frame) {
      _classPrivateFieldGet(_frames, this).set(frame._id, frame);
      if (frame._parentId) {
        _classPrivateFieldGet(_parentIds, this).set(frame._id, frame._parentId);
        if (!_classPrivateFieldGet(_childIds, this).has(frame._parentId)) {
          _classPrivateFieldGet(_childIds, this).set(frame._parentId, new Set());
        }
        _classPrivateFieldGet(_childIds, this).get(frame._parentId).add(frame._id);
      } else if (!_classPrivateFieldGet(_mainFrame, this) || _classPrivateFieldGet(_isMainFrameStale, this)) {
        _classPrivateFieldSet(_mainFrame, this, frame);
        _classPrivateFieldSet(_isMainFrameStale, this, false);
      }
      _classPrivateFieldGet(_waitRequests, this).get(frame._id)?.forEach(request => {
        return request.resolve(frame);
      });
    }
    removeFrame(frame) {
      _classPrivateFieldGet(_frames, this).delete(frame._id);
      _classPrivateFieldGet(_parentIds, this).delete(frame._id);
      if (frame._parentId) {
        _classPrivateFieldGet(_childIds, this).get(frame._parentId)?.delete(frame._id);
      } else {
        _classPrivateFieldSet(_isMainFrameStale, this, true);
      }
    }
    childFrames(frameId) {
      const childIds = _classPrivateFieldGet(_childIds, this).get(frameId);
      if (!childIds) {
        return [];
      }
      return Array.from(childIds).map(id => {
        return this.getById(id);
      }).filter(frame => {
        return frame !== undefined;
      });
    }
    parentFrame(frameId) {
      const parentId = _classPrivateFieldGet(_parentIds, this).get(frameId);
      return parentId ? this.getById(parentId) : undefined;
    }
  }

  /**
   * @internal
   */
  var _client1 = /*#__PURE__*/new WeakMap();
  var _isNavigationRequest = /*#__PURE__*/new WeakMap();
  var _url4 = /*#__PURE__*/new WeakMap();
  var _resourceType = /*#__PURE__*/new WeakMap();
  var _method = /*#__PURE__*/new WeakMap();
  var _hasPostData = /*#__PURE__*/new WeakMap();
  var _postData = /*#__PURE__*/new WeakMap();
  var _headers = /*#__PURE__*/new WeakMap();
  var _frame4 = /*#__PURE__*/new WeakMap();
  var _initiator = /*#__PURE__*/new WeakMap();
  class CdpHTTPRequest extends HTTPRequest {
    get client() {
      return _classPrivateFieldGet(_client1, this);
    }
    set client(newClient) {
      _classPrivateFieldSet(_client1, this, newClient);
    }
    constructor(client, frame, interceptionId, allowInterception, data, redirectChain) {
      super();
      _defineProperty(this, "id", void 0);
      _classPrivateFieldInitSpec(this, _client1, void 0);
      _classPrivateFieldInitSpec(this, _isNavigationRequest, void 0);
      _classPrivateFieldInitSpec(this, _url4, void 0);
      _classPrivateFieldInitSpec(this, _resourceType, void 0);
      _classPrivateFieldInitSpec(this, _method, void 0);
      _classPrivateFieldInitSpec(this, _hasPostData, false);
      _classPrivateFieldInitSpec(this, _postData, void 0);
      _classPrivateFieldInitSpec(this, _headers, {});
      _classPrivateFieldInitSpec(this, _frame4, void 0);
      _classPrivateFieldInitSpec(this, _initiator, void 0);
      _classPrivateFieldSet(_client1, this, client);
      this.id = data.requestId;
      _classPrivateFieldSet(_isNavigationRequest, this, data.requestId === data.loaderId && data.type === 'Document');
      this._interceptionId = interceptionId;
      _classPrivateFieldSet(_url4, this, data.request.url + (data.request.urlFragment ?? ''));
      _classPrivateFieldSet(_resourceType, this, (data.type || 'other').toLowerCase());
      _classPrivateFieldSet(_method, this, data.request.method);
      if (data.request.postDataEntries && data.request.postDataEntries.length > 0) {
        _classPrivateFieldSet(_postData, this, new TextDecoder().decode(mergeUint8Arrays(data.request.postDataEntries.map(entry => {
          return entry.bytes ? stringToTypedArray(entry.bytes, true) : null;
        }).filter(entry => {
          return entry !== null;
        }))));
      } else {
        _classPrivateFieldSet(_postData, this, data.request.postData);
      }
      _classPrivateFieldSet(_hasPostData, this, data.request.hasPostData ?? false);
      _classPrivateFieldSet(_frame4, this, frame);
      this._redirectChain = redirectChain;
      _classPrivateFieldSet(_initiator, this, data.initiator);
      this.interception.enabled = allowInterception;
      this.updateHeaders(data.request.headers);
    }
    updateHeaders(headers) {
      for (const [key, value] of Object.entries(headers)) {
        _classPrivateFieldGet(_headers, this)[key.toLowerCase()] = value;
      }
    }
    url() {
      return _classPrivateFieldGet(_url4, this);
    }
    resourceType() {
      return _classPrivateFieldGet(_resourceType, this);
    }
    method() {
      return _classPrivateFieldGet(_method, this);
    }
    postData() {
      return _classPrivateFieldGet(_postData, this);
    }
    hasPostData() {
      return _classPrivateFieldGet(_hasPostData, this);
    }
    async fetchPostData() {
      try {
        const result = await _classPrivateFieldGet(_client1, this).send('Network.getRequestPostData', {
          requestId: this.id
        });
        return result.postData;
      } catch (err) {
        debugError(err);
        return;
      }
    }
    headers() {
      // Callers should not be allowed to mutate internal structure.
      return structuredClone(_classPrivateFieldGet(_headers, this));
    }
    response() {
      return this._response;
    }
    frame() {
      return _classPrivateFieldGet(_frame4, this);
    }
    isNavigationRequest() {
      return _classPrivateFieldGet(_isNavigationRequest, this);
    }
    initiator() {
      return _classPrivateFieldGet(_initiator, this);
    }
    redirectChain() {
      return this._redirectChain.slice();
    }
    failure() {
      if (!this._failureText) {
        return null;
      }
      return {
        errorText: this._failureText
      };
    }
    canBeIntercepted() {
      return !this.url().startsWith('data:') && !this._fromMemoryCache;
    }
    /**
     * @internal
     */
    async _continue(overrides = {}) {
      const {
        url,
        method,
        postData,
        headers
      } = overrides;
      this.interception.handled = true;
      const postDataBinaryBase64 = postData ? stringToBase64(postData) : undefined;
      if (this._interceptionId === undefined) {
        throw new Error('HTTPRequest is missing _interceptionId needed for Fetch.continueRequest');
      }
      await _classPrivateFieldGet(_client1, this).send('Fetch.continueRequest', {
        requestId: this._interceptionId,
        url,
        method,
        postData: postDataBinaryBase64,
        headers: headers ? headersArray(headers) : undefined
      }).catch(error => {
        this.interception.handled = false;
        return handleError(error);
      });
    }
    async _respond(response) {
      this.interception.handled = true;
      let parsedBody;
      if (response.body) {
        parsedBody = HTTPRequest.getResponse(response.body);
      }
      const responseHeaders = {};
      if (response.headers) {
        for (const header of Object.keys(response.headers)) {
          const value = response.headers[header];
          responseHeaders[header.toLowerCase()] = Array.isArray(value) ? value.map(item => {
            return String(item);
          }) : String(value);
        }
      }
      if (response.contentType) {
        responseHeaders['content-type'] = response.contentType;
      }
      if (parsedBody?.contentLength && !('content-length' in responseHeaders)) {
        responseHeaders['content-length'] = String(parsedBody.contentLength);
      }
      const status = response.status || 200;
      if (this._interceptionId === undefined) {
        throw new Error('HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest');
      }
      await _classPrivateFieldGet(_client1, this).send('Fetch.fulfillRequest', {
        requestId: this._interceptionId,
        responseCode: status,
        responsePhrase: STATUS_TEXTS[status],
        responseHeaders: headersArray(responseHeaders),
        body: parsedBody?.base64
      }).catch(error => {
        this.interception.handled = false;
        return handleError(error);
      });
    }
    async _abort(errorReason) {
      this.interception.handled = true;
      if (this._interceptionId === undefined) {
        throw new Error('HTTPRequest is missing _interceptionId needed for Fetch.failRequest');
      }
      await _classPrivateFieldGet(_client1, this).send('Fetch.failRequest', {
        requestId: this._interceptionId,
        errorReason: errorReason || 'Failed'
      }).catch(handleError);
    }
  }

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * The SecurityDetails class represents the security details of a
   * response that was received over a secure connection.
   *
   * @public
   */
  var _subjectName = /*#__PURE__*/new WeakMap();
  var _issuer = /*#__PURE__*/new WeakMap();
  var _validFrom = /*#__PURE__*/new WeakMap();
  var _validTo = /*#__PURE__*/new WeakMap();
  var _protocol = /*#__PURE__*/new WeakMap();
  var _sanList = /*#__PURE__*/new WeakMap();
  class SecurityDetails {
    /**
     * @internal
     */
    constructor(securityPayload) {
      _classPrivateFieldInitSpec(this, _subjectName, void 0);
      _classPrivateFieldInitSpec(this, _issuer, void 0);
      _classPrivateFieldInitSpec(this, _validFrom, void 0);
      _classPrivateFieldInitSpec(this, _validTo, void 0);
      _classPrivateFieldInitSpec(this, _protocol, void 0);
      _classPrivateFieldInitSpec(this, _sanList, void 0);
      _classPrivateFieldSet(_subjectName, this, securityPayload.subjectName);
      _classPrivateFieldSet(_issuer, this, securityPayload.issuer);
      _classPrivateFieldSet(_validFrom, this, securityPayload.validFrom);
      _classPrivateFieldSet(_validTo, this, securityPayload.validTo);
      _classPrivateFieldSet(_protocol, this, securityPayload.protocol);
      _classPrivateFieldSet(_sanList, this, securityPayload.sanList);
    }
    /**
     * The name of the issuer of the certificate.
     */
    issuer() {
      return _classPrivateFieldGet(_issuer, this);
    }
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the start of the certificate's validity.
     */
    validFrom() {
      return _classPrivateFieldGet(_validFrom, this);
    }
    /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the end of the certificate's validity.
     */
    validTo() {
      return _classPrivateFieldGet(_validTo, this);
    }
    /**
     * The security protocol being used, e.g. "TLS 1.2".
     */
    protocol() {
      return _classPrivateFieldGet(_protocol, this);
    }
    /**
     * The name of the subject to which the certificate was issued.
     */
    subjectName() {
      return _classPrivateFieldGet(_subjectName, this);
    }
    /**
     * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
     */
    subjectAlternativeNames() {
      return _classPrivateFieldGet(_sanList, this);
    }
  }

  /**
   * @license
   * Copyright 2025 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Normalizes HTTP header values by handling multiline values.
   * Multiline header values are joined with commas according to HTTP/1.1 spec.
   *
   * @internal
   */
  function normalizeHeaderValue(header) {
    if (!header.includes('\n')) {
      return header;
    }
    return header.split('\n').map(v => {
      return v.trim();
    }).filter(Boolean).join(', ');
  }

  /**
   * @internal
   */
  var _request = /*#__PURE__*/new WeakMap();
  var _contentPromise = /*#__PURE__*/new WeakMap();
  var _bodyLoadedDeferred = /*#__PURE__*/new WeakMap();
  var _remoteAddress = /*#__PURE__*/new WeakMap();
  var _status = /*#__PURE__*/new WeakMap();
  var _statusText = /*#__PURE__*/new WeakMap();
  var _fromDiskCache = /*#__PURE__*/new WeakMap();
  var _fromServiceWorker = /*#__PURE__*/new WeakMap();
  var _headers2 = /*#__PURE__*/new WeakMap();
  var _securityDetails = /*#__PURE__*/new WeakMap();
  var _timing = /*#__PURE__*/new WeakMap();
  var _CdpHTTPResponse_brand = /*#__PURE__*/new WeakSet();
  class CdpHTTPResponse extends HTTPResponse {
    constructor(request, responsePayload, _extraInfo) {
      super();
      _classPrivateMethodInitSpec(this, _CdpHTTPResponse_brand);
      _classPrivateFieldInitSpec(this, _request, void 0);
      _classPrivateFieldInitSpec(this, _contentPromise, null);
      _classPrivateFieldInitSpec(this, _bodyLoadedDeferred, Deferred.create());
      _classPrivateFieldInitSpec(this, _remoteAddress, void 0);
      _classPrivateFieldInitSpec(this, _status, void 0);
      _classPrivateFieldInitSpec(this, _statusText, void 0);
      _classPrivateFieldInitSpec(this, _fromDiskCache, void 0);
      _classPrivateFieldInitSpec(this, _fromServiceWorker, void 0);
      _classPrivateFieldInitSpec(this, _headers2, {});
      _classPrivateFieldInitSpec(this, _securityDetails, void 0);
      _classPrivateFieldInitSpec(this, _timing, void 0);
      _classPrivateFieldSet(_request, this, request);
      _classPrivateFieldSet(_remoteAddress, this, {
        ip: responsePayload.remoteIPAddress,
        port: responsePayload.remotePort
      });
      _classPrivateFieldSet(_statusText, this, _assertClassBrand(_CdpHTTPResponse_brand, this, _parseStatusTextFromExtraInfo).call(this, _extraInfo) || responsePayload.statusText);
      _classPrivateFieldSet(_fromDiskCache, this, !!responsePayload.fromDiskCache);
      _classPrivateFieldSet(_fromServiceWorker, this, !!responsePayload.fromServiceWorker);
      _classPrivateFieldSet(_status, this, _extraInfo ? _extraInfo.statusCode : responsePayload.status);
      const headers = _extraInfo ? _extraInfo.headers : responsePayload.headers;
      for (const [key, value] of Object.entries(headers)) {
        _classPrivateFieldGet(_headers2, this)[key.toLowerCase()] = normalizeHeaderValue(value);
      }
      _classPrivateFieldSet(_securityDetails, this, responsePayload.securityDetails ? new SecurityDetails(responsePayload.securityDetails) : null);
      _classPrivateFieldSet(_timing, this, responsePayload.timing || null);
    }
    _resolveBody(err) {
      if (err) {
        return _classPrivateFieldGet(_bodyLoadedDeferred, this).reject(err);
      }
      return _classPrivateFieldGet(_bodyLoadedDeferred, this).resolve();
    }
    remoteAddress() {
      return _classPrivateFieldGet(_remoteAddress, this);
    }
    url() {
      return _classPrivateFieldGet(_request, this).url();
    }
    status() {
      return _classPrivateFieldGet(_status, this);
    }
    statusText() {
      return _classPrivateFieldGet(_statusText, this);
    }
    headers() {
      return _classPrivateFieldGet(_headers2, this);
    }
    securityDetails() {
      return _classPrivateFieldGet(_securityDetails, this);
    }
    timing() {
      return _classPrivateFieldGet(_timing, this);
    }
    content() {
      if (!_classPrivateFieldGet(_contentPromise, this)) {
        _classPrivateFieldSet(_contentPromise, this, _classPrivateFieldGet(_bodyLoadedDeferred, this).valueOrThrow().then(async () => {
          try {
            // Use CDPSession from corresponding request to retrieve body, as it's client
            // might have been updated (e.g. for an adopted OOPIF).
            const response = await _classPrivateFieldGet(_request, this).client.send('Network.getResponseBody', {
              requestId: _classPrivateFieldGet(_request, this).id
            });
            return stringToTypedArray(response.body, response.base64Encoded);
          } catch (error) {
            if (error instanceof ProtocolError && error.originalMessage === 'No resource with given identifier found') {
              throw new ProtocolError('Could not load response body for this request. This might happen if the request is a preflight request.');
            }
            throw error;
          }
        }));
      }
      return _classPrivateFieldGet(_contentPromise, this);
    }
    request() {
      return _classPrivateFieldGet(_request, this);
    }
    fromCache() {
      return _classPrivateFieldGet(_fromDiskCache, this) || _classPrivateFieldGet(_request, this)._fromMemoryCache;
    }
    fromServiceWorker() {
      return _classPrivateFieldGet(_fromServiceWorker, this);
    }
    frame() {
      return _classPrivateFieldGet(_request, this).frame();
    }
  }

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Helper class to track network events by request ID
   *
   * @internal
   */
  function _parseStatusTextFromExtraInfo(extraInfo) {
    if (!extraInfo || !extraInfo.headersText) {
      return;
    }
    const firstLine = extraInfo.headersText.split('\r', 1)[0];
    if (!firstLine || firstLine.length > 1_000) {
      return;
    }
    const match = firstLine.match(/[^ ]* [^ ]* (.*)/);
    if (!match) {
      return;
    }
    const statusText = match[1];
    if (!statusText) {
      return;
    }
    return statusText;
  }
  var _requestWillBeSentMap = /*#__PURE__*/new WeakMap();
  var _requestPausedMap = /*#__PURE__*/new WeakMap();
  var _httpRequestsMap = /*#__PURE__*/new WeakMap();
  var _requestWillBeSentExtraInfoMap = /*#__PURE__*/new WeakMap();
  var _responseReceivedExtraInfoMap = /*#__PURE__*/new WeakMap();
  var _queuedRedirectInfoMap = /*#__PURE__*/new WeakMap();
  var _queuedEventGroupMap = /*#__PURE__*/new WeakMap();
  class NetworkEventManager {
    constructor() {
      /**
       * There are four possible orders of events:
       * A. `_onRequestWillBeSent`
       * B. `_onRequestWillBeSent`, `_onRequestPaused`
       * C. `_onRequestPaused`, `_onRequestWillBeSent`
       * D. `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
       * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`
       * (see crbug.com/1196004)
       *
       * For `_onRequest` we need the event from `_onRequestWillBeSent` and
       * optionally the `interceptionId` from `_onRequestPaused`.
       *
       * If request interception is disabled, call `_onRequest` once per call to
       * `_onRequestWillBeSent`.
       * If request interception is enabled, call `_onRequest` once per call to
       * `_onRequestPaused` (once per `interceptionId`).
       *
       * Events are stored to allow for subsequent events to call `_onRequest`.
       *
       * Note that (chains of) redirect requests have the same `requestId` (!) as
       * the original request. We have to anticipate series of events like these:
       * A. `_onRequestWillBeSent`,
       * `_onRequestWillBeSent`, ...
       * B. `_onRequestWillBeSent`, `_onRequestPaused`,
       * `_onRequestWillBeSent`, `_onRequestPaused`, ...
       * C. `_onRequestWillBeSent`, `_onRequestPaused`,
       * `_onRequestPaused`, `_onRequestWillBeSent`, ...
       * D. `_onRequestPaused`, `_onRequestWillBeSent`,
       * `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
       * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`, ...
       * (see crbug.com/1196004)
       */
      _classPrivateFieldInitSpec(this, _requestWillBeSentMap, new Map());
      _classPrivateFieldInitSpec(this, _requestPausedMap, new Map());
      _classPrivateFieldInitSpec(this, _httpRequestsMap, new Map());
      _classPrivateFieldInitSpec(this, _requestWillBeSentExtraInfoMap, new Map());
      /*
       * The below maps are used to reconcile Network.responseReceivedExtraInfo
       * events with their corresponding request. Each response and redirect
       * response gets an ExtraInfo event, and we don't know which will come first.
       * This means that we have to store a Response or an ExtraInfo for each
       * response, and emit the event when we get both of them. In addition, to
       * handle redirects, we have to make them Arrays to represent the chain of
       * events.
       */
      _classPrivateFieldInitSpec(this, _responseReceivedExtraInfoMap, new Map());
      _classPrivateFieldInitSpec(this, _queuedRedirectInfoMap, new Map());
      _classPrivateFieldInitSpec(this, _queuedEventGroupMap, new Map());
    }
    forget(networkRequestId) {
      _classPrivateFieldGet(_requestWillBeSentMap, this).delete(networkRequestId);
      _classPrivateFieldGet(_requestPausedMap, this).delete(networkRequestId);
      _classPrivateFieldGet(_requestWillBeSentExtraInfoMap, this).delete(networkRequestId);
      _classPrivateFieldGet(_queuedEventGroupMap, this).delete(networkRequestId);
      _classPrivateFieldGet(_queuedRedirectInfoMap, this).delete(networkRequestId);
      _classPrivateFieldGet(_responseReceivedExtraInfoMap, this).delete(networkRequestId);
    }
    requestExtraInfo(networkRequestId) {
      if (!_classPrivateFieldGet(_requestWillBeSentExtraInfoMap, this).has(networkRequestId)) {
        _classPrivateFieldGet(_requestWillBeSentExtraInfoMap, this).set(networkRequestId, []);
      }
      return _classPrivateFieldGet(_requestWillBeSentExtraInfoMap, this).get(networkRequestId);
    }
    responseExtraInfo(networkRequestId) {
      if (!_classPrivateFieldGet(_responseReceivedExtraInfoMap, this).has(networkRequestId)) {
        _classPrivateFieldGet(_responseReceivedExtraInfoMap, this).set(networkRequestId, []);
      }
      return _classPrivateFieldGet(_responseReceivedExtraInfoMap, this).get(networkRequestId);
    }
    queuedRedirectInfo(fetchRequestId) {
      if (!_classPrivateFieldGet(_queuedRedirectInfoMap, this).has(fetchRequestId)) {
        _classPrivateFieldGet(_queuedRedirectInfoMap, this).set(fetchRequestId, []);
      }
      return _classPrivateFieldGet(_queuedRedirectInfoMap, this).get(fetchRequestId);
    }
    queueRedirectInfo(fetchRequestId, redirectInfo) {
      this.queuedRedirectInfo(fetchRequestId).push(redirectInfo);
    }
    takeQueuedRedirectInfo(fetchRequestId) {
      return this.queuedRedirectInfo(fetchRequestId).shift();
    }
    inFlightRequestsCount() {
      let inFlightRequestCounter = 0;
      for (const request of _classPrivateFieldGet(_httpRequestsMap, this).values()) {
        if (!request.response()) {
          inFlightRequestCounter++;
        }
      }
      return inFlightRequestCounter;
    }
    storeRequestWillBeSent(networkRequestId, event) {
      _classPrivateFieldGet(_requestWillBeSentMap, this).set(networkRequestId, event);
    }
    getRequestWillBeSent(networkRequestId) {
      return _classPrivateFieldGet(_requestWillBeSentMap, this).get(networkRequestId);
    }
    forgetRequestWillBeSent(networkRequestId) {
      _classPrivateFieldGet(_requestWillBeSentMap, this).delete(networkRequestId);
    }
    getRequestPaused(networkRequestId) {
      return _classPrivateFieldGet(_requestPausedMap, this).get(networkRequestId);
    }
    forgetRequestPaused(networkRequestId) {
      _classPrivateFieldGet(_requestPausedMap, this).delete(networkRequestId);
    }
    storeRequestPaused(networkRequestId, event) {
      _classPrivateFieldGet(_requestPausedMap, this).set(networkRequestId, event);
    }
    getRequest(networkRequestId) {
      return _classPrivateFieldGet(_httpRequestsMap, this).get(networkRequestId);
    }
    storeRequest(networkRequestId, request) {
      _classPrivateFieldGet(_httpRequestsMap, this).set(networkRequestId, request);
    }
    forgetRequest(networkRequestId) {
      _classPrivateFieldGet(_httpRequestsMap, this).delete(networkRequestId);
    }
    getQueuedEventGroup(networkRequestId) {
      return _classPrivateFieldGet(_queuedEventGroupMap, this).get(networkRequestId);
    }
    queueEventGroup(networkRequestId, event) {
      _classPrivateFieldGet(_queuedEventGroupMap, this).set(networkRequestId, event);
    }
    forgetQueuedEventGroup(networkRequestId) {
      _classPrivateFieldGet(_queuedEventGroupMap, this).delete(networkRequestId);
    }
    printState() {
      function replacer(_key, value) {
        if (value instanceof Map) {
          return {
            dataType: 'Map',
            value: Array.from(value.entries()) // or with spread: value: [...value]
          };
        } else if (value instanceof CdpHTTPRequest) {
          return {
            dataType: 'CdpHTTPRequest',
            value: `${value.id}: ${value.url()}`
          };
        }
        {
          return value;
        }
      }
      console.log('httpRequestsMap', JSON.stringify(_classPrivateFieldGet(_httpRequestsMap, this), replacer, 2));
      console.log('requestWillBeSentMap', JSON.stringify(_classPrivateFieldGet(_requestWillBeSentMap, this), replacer, 2));
      console.log('requestWillBeSentMap', JSON.stringify(_classPrivateFieldGet(_responseReceivedExtraInfoMap, this), replacer, 2));
      console.log('requestWillBeSentMap', JSON.stringify(_classPrivateFieldGet(_requestPausedMap, this), replacer, 2));
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _frameManager = /*#__PURE__*/new WeakMap();
  var _networkEventManager = /*#__PURE__*/new WeakMap();
  var _extraHTTPHeaders = /*#__PURE__*/new WeakMap();
  var _credentials = /*#__PURE__*/new WeakMap();
  var _attemptedAuthentications = /*#__PURE__*/new WeakMap();
  var _userRequestInterceptionEnabled = /*#__PURE__*/new WeakMap();
  var _protocolRequestInterceptionEnabled = /*#__PURE__*/new WeakMap();
  var _userCacheDisabled = /*#__PURE__*/new WeakMap();
  var _emulatedNetworkConditions = /*#__PURE__*/new WeakMap();
  var _userAgent = /*#__PURE__*/new WeakMap();
  var _userAgentMetadata = /*#__PURE__*/new WeakMap();
  var _platform = /*#__PURE__*/new WeakMap();
  var _handlers3 = /*#__PURE__*/new WeakMap();
  var _clients = /*#__PURE__*/new WeakMap();
  var _networkEnabled = /*#__PURE__*/new WeakMap();
  var _NetworkManager_brand = /*#__PURE__*/new WeakSet();
  class NetworkManager extends EventEmitter {
    constructor(frameManager, networkEnabled) {
      super();
      _classPrivateMethodInitSpec(this, _NetworkManager_brand);
      _classPrivateFieldInitSpec(this, _frameManager, void 0);
      _classPrivateFieldInitSpec(this, _networkEventManager, new NetworkEventManager());
      _classPrivateFieldInitSpec(this, _extraHTTPHeaders, void 0);
      _classPrivateFieldInitSpec(this, _credentials, null);
      _classPrivateFieldInitSpec(this, _attemptedAuthentications, new Set());
      _classPrivateFieldInitSpec(this, _userRequestInterceptionEnabled, false);
      _classPrivateFieldInitSpec(this, _protocolRequestInterceptionEnabled, void 0);
      _classPrivateFieldInitSpec(this, _userCacheDisabled, void 0);
      _classPrivateFieldInitSpec(this, _emulatedNetworkConditions, void 0);
      _classPrivateFieldInitSpec(this, _userAgent, void 0);
      _classPrivateFieldInitSpec(this, _userAgentMetadata, void 0);
      _classPrivateFieldInitSpec(this, _platform, void 0);
      _classPrivateFieldInitSpec(this, _handlers3, [['Fetch.requestPaused', _assertClassBrand(_NetworkManager_brand, this, _onRequestPaused)], ['Fetch.authRequired', _assertClassBrand(_NetworkManager_brand, this, _onAuthRequired)], ['Network.requestWillBeSent', _assertClassBrand(_NetworkManager_brand, this, _onRequestWillBeSent)], ['Network.requestWillBeSentExtraInfo', _assertClassBrand(_NetworkManager_brand, this, _onRequestWillBeSentExtraInfo)], ['Network.requestServedFromCache', _assertClassBrand(_NetworkManager_brand, this, _onRequestServedFromCache)], ['Network.responseReceived', _assertClassBrand(_NetworkManager_brand, this, _onResponseReceived)], ['Network.loadingFinished', _assertClassBrand(_NetworkManager_brand, this, _onLoadingFinished)], ['Network.loadingFailed', _assertClassBrand(_NetworkManager_brand, this, _onLoadingFailed)], ['Network.responseReceivedExtraInfo', _assertClassBrand(_NetworkManager_brand, this, _onResponseReceivedExtraInfo)], [exports.CDPSessionEvent.Disconnected, _assertClassBrand(_NetworkManager_brand, this, _removeClient)]]);
      _classPrivateFieldInitSpec(this, _clients, new Map());
      _classPrivateFieldInitSpec(this, _networkEnabled, true);
      _classPrivateFieldSet(_frameManager, this, frameManager);
      _classPrivateFieldSet(_networkEnabled, this, networkEnabled ?? true);
    }
    async addClient(client) {
      if (!_classPrivateFieldGet(_networkEnabled, this) || _classPrivateFieldGet(_clients, this).has(client)) {
        return;
      }
      const subscriptions = new DisposableStack();
      _classPrivateFieldGet(_clients, this).set(client, subscriptions);
      const clientEmitter = subscriptions.use(new EventEmitter(client));
      for (const [event, handler] of _classPrivateFieldGet(_handlers3, this)) {
        clientEmitter.on(event, arg => {
          return handler.bind(this)(client, arg);
        });
      }
      try {
        await Promise.all([client.send('Network.enable'), _assertClassBrand(_NetworkManager_brand, this, _applyExtraHTTPHeaders).call(this, client), _assertClassBrand(_NetworkManager_brand, this, _applyNetworkConditions).call(this, client), _assertClassBrand(_NetworkManager_brand, this, _applyProtocolCacheDisabled).call(this, client), _assertClassBrand(_NetworkManager_brand, this, _applyProtocolRequestInterception).call(this, client), _assertClassBrand(_NetworkManager_brand, this, _applyUserAgent).call(this, client)]);
      } catch (error) {
        if (_assertClassBrand(_NetworkManager_brand, this, _canIgnoreError).call(this, error)) {
          return;
        }
        throw error;
      }
    }
    async authenticate(credentials) {
      _classPrivateFieldSet(_credentials, this, credentials);
      const enabled = _classPrivateFieldGet(_userRequestInterceptionEnabled, this) || !!_classPrivateFieldGet(_credentials, this);
      if (enabled === _classPrivateFieldGet(_protocolRequestInterceptionEnabled, this)) {
        return;
      }
      _classPrivateFieldSet(_protocolRequestInterceptionEnabled, this, enabled);
      await _assertClassBrand(_NetworkManager_brand, this, _applyToAllClients).call(this, _assertClassBrand(_NetworkManager_brand, this, _applyProtocolRequestInterception).bind(this));
    }
    async setExtraHTTPHeaders(headers) {
      const extraHTTPHeaders = {};
      for (const [key, value] of Object.entries(headers)) {
        assert(isString(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
        extraHTTPHeaders[key.toLowerCase()] = value;
      }
      _classPrivateFieldSet(_extraHTTPHeaders, this, extraHTTPHeaders);
      await _assertClassBrand(_NetworkManager_brand, this, _applyToAllClients).call(this, _assertClassBrand(_NetworkManager_brand, this, _applyExtraHTTPHeaders).bind(this));
    }
    extraHTTPHeaders() {
      return Object.assign({}, _classPrivateFieldGet(_extraHTTPHeaders, this));
    }
    inFlightRequestsCount() {
      return _classPrivateFieldGet(_networkEventManager, this).inFlightRequestsCount();
    }
    async setOfflineMode(value) {
      if (!_classPrivateFieldGet(_emulatedNetworkConditions, this)) {
        _classPrivateFieldSet(_emulatedNetworkConditions, this, {
          offline: false,
          upload: -1,
          download: -1,
          latency: 0
        });
      }
      _classPrivateFieldGet(_emulatedNetworkConditions, this).offline = value;
      await _assertClassBrand(_NetworkManager_brand, this, _applyToAllClients).call(this, _assertClassBrand(_NetworkManager_brand, this, _applyNetworkConditions).bind(this));
    }
    async emulateNetworkConditions(networkConditions) {
      if (!_classPrivateFieldGet(_emulatedNetworkConditions, this)) {
        _classPrivateFieldSet(_emulatedNetworkConditions, this, {
          offline: networkConditions?.offline ?? false,
          upload: -1,
          download: -1,
          latency: 0
        });
      }
      _classPrivateFieldGet(_emulatedNetworkConditions, this).upload = networkConditions ? networkConditions.upload : -1;
      _classPrivateFieldGet(_emulatedNetworkConditions, this).download = networkConditions ? networkConditions.download : -1;
      _classPrivateFieldGet(_emulatedNetworkConditions, this).latency = networkConditions ? networkConditions.latency : 0;
      _classPrivateFieldGet(_emulatedNetworkConditions, this).offline = networkConditions?.offline ?? false;
      await _assertClassBrand(_NetworkManager_brand, this, _applyToAllClients).call(this, _assertClassBrand(_NetworkManager_brand, this, _applyNetworkConditions).bind(this));
    }
    async setUserAgent(userAgent, userAgentMetadata, platform) {
      _classPrivateFieldSet(_userAgent, this, userAgent);
      _classPrivateFieldSet(_userAgentMetadata, this, userAgentMetadata);
      _classPrivateFieldSet(_platform, this, platform);
      await _assertClassBrand(_NetworkManager_brand, this, _applyToAllClients).call(this, _assertClassBrand(_NetworkManager_brand, this, _applyUserAgent).bind(this));
    }
    async setCacheEnabled(enabled) {
      _classPrivateFieldSet(_userCacheDisabled, this, !enabled);
      await _assertClassBrand(_NetworkManager_brand, this, _applyToAllClients).call(this, _assertClassBrand(_NetworkManager_brand, this, _applyProtocolCacheDisabled).bind(this));
    }
    async setRequestInterception(value) {
      _classPrivateFieldSet(_userRequestInterceptionEnabled, this, value);
      const enabled = _classPrivateFieldGet(_userRequestInterceptionEnabled, this) || !!_classPrivateFieldGet(_credentials, this);
      if (enabled === _classPrivateFieldGet(_protocolRequestInterceptionEnabled, this)) {
        return;
      }
      _classPrivateFieldSet(_protocolRequestInterceptionEnabled, this, enabled);
      await _assertClassBrand(_NetworkManager_brand, this, _applyToAllClients).call(this, _assertClassBrand(_NetworkManager_brand, this, _applyProtocolRequestInterception).bind(this));
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  function _canIgnoreError(error) {
    return isErrorLike(error) && (isTargetClosedError(error) || error.message.includes('Not supported') || error.message.includes("wasn't found"));
  }
  async function _removeClient(client) {
    _classPrivateFieldGet(_clients, this).get(client)?.dispose();
    _classPrivateFieldGet(_clients, this).delete(client);
  }
  async function _applyExtraHTTPHeaders(client) {
    if (_classPrivateFieldGet(_extraHTTPHeaders, this) === undefined) {
      return;
    }
    try {
      await client.send('Network.setExtraHTTPHeaders', {
        headers: _classPrivateFieldGet(_extraHTTPHeaders, this)
      });
    } catch (error) {
      if (_assertClassBrand(_NetworkManager_brand, this, _canIgnoreError).call(this, error)) {
        return;
      }
      throw error;
    }
  }
  async function _applyToAllClients(fn) {
    await Promise.all(Array.from(_classPrivateFieldGet(_clients, this).keys()).map(client => {
      return fn(client);
    }));
  }
  async function _applyNetworkConditions(client) {
    if (_classPrivateFieldGet(_emulatedNetworkConditions, this) === undefined) {
      return;
    }
    try {
      await client.send('Network.emulateNetworkConditions', {
        offline: _classPrivateFieldGet(_emulatedNetworkConditions, this).offline,
        latency: _classPrivateFieldGet(_emulatedNetworkConditions, this).latency,
        uploadThroughput: _classPrivateFieldGet(_emulatedNetworkConditions, this).upload,
        downloadThroughput: _classPrivateFieldGet(_emulatedNetworkConditions, this).download
      });
    } catch (error) {
      if (_assertClassBrand(_NetworkManager_brand, this, _canIgnoreError).call(this, error)) {
        return;
      }
      throw error;
    }
  }
  async function _applyUserAgent(client) {
    if (_classPrivateFieldGet(_userAgent, this) === undefined) {
      return;
    }
    try {
      await client.send('Network.setUserAgentOverride', {
        userAgent: _classPrivateFieldGet(_userAgent, this),
        userAgentMetadata: _classPrivateFieldGet(_userAgentMetadata, this),
        platform: _classPrivateFieldGet(_platform, this)
      });
    } catch (error) {
      if (_assertClassBrand(_NetworkManager_brand, this, _canIgnoreError).call(this, error)) {
        return;
      }
      throw error;
    }
  }
  async function _applyProtocolRequestInterception(client) {
    if (_classPrivateFieldGet(_protocolRequestInterceptionEnabled, this) === undefined) {
      return;
    }
    if (_classPrivateFieldGet(_userCacheDisabled, this) === undefined) {
      _classPrivateFieldSet(_userCacheDisabled, this, false);
    }
    try {
      if (_classPrivateFieldGet(_protocolRequestInterceptionEnabled, this)) {
        await Promise.all([_assertClassBrand(_NetworkManager_brand, this, _applyProtocolCacheDisabled).call(this, client), client.send('Fetch.enable', {
          handleAuthRequests: true,
          patterns: [{
            urlPattern: '*'
          }]
        })]);
      } else {
        await Promise.all([_assertClassBrand(_NetworkManager_brand, this, _applyProtocolCacheDisabled).call(this, client), client.send('Fetch.disable')]);
      }
    } catch (error) {
      if (_assertClassBrand(_NetworkManager_brand, this, _canIgnoreError).call(this, error)) {
        return;
      }
      throw error;
    }
  }
  async function _applyProtocolCacheDisabled(client) {
    if (_classPrivateFieldGet(_userCacheDisabled, this) === undefined) {
      return;
    }
    try {
      await client.send('Network.setCacheDisabled', {
        cacheDisabled: _classPrivateFieldGet(_userCacheDisabled, this)
      });
    } catch (error) {
      if (_assertClassBrand(_NetworkManager_brand, this, _canIgnoreError).call(this, error)) {
        return;
      }
      throw error;
    }
  }
  function _onRequestWillBeSent(client, event) {
    // Request interception doesn't happen for data URLs with Network Service.
    if (_classPrivateFieldGet(_userRequestInterceptionEnabled, this) && !event.request.url.startsWith('data:')) {
      const {
        requestId: networkRequestId
      } = event;
      _classPrivateFieldGet(_networkEventManager, this).storeRequestWillBeSent(networkRequestId, event);
      /**
       * CDP may have sent a Fetch.requestPaused event already. Check for it.
       */
      const requestPausedEvent = _classPrivateFieldGet(_networkEventManager, this).getRequestPaused(networkRequestId);
      if (requestPausedEvent) {
        const {
          requestId: fetchRequestId
        } = requestPausedEvent;
        _assertClassBrand(_NetworkManager_brand, this, _patchRequestEventHeaders).call(this, event, requestPausedEvent);
        _assertClassBrand(_NetworkManager_brand, this, _onRequest2).call(this, client, event, fetchRequestId);
        _classPrivateFieldGet(_networkEventManager, this).forgetRequestPaused(networkRequestId);
      }
      return;
    }
    _assertClassBrand(_NetworkManager_brand, this, _onRequest2).call(this, client, event, undefined);
  }
  function _onAuthRequired(client, event) {
    let response = 'Default';
    if (_classPrivateFieldGet(_attemptedAuthentications, this).has(event.requestId)) {
      response = 'CancelAuth';
    } else if (_classPrivateFieldGet(_credentials, this)) {
      response = 'ProvideCredentials';
      _classPrivateFieldGet(_attemptedAuthentications, this).add(event.requestId);
    }
    const {
      username,
      password
    } = _classPrivateFieldGet(_credentials, this) || {
      username: undefined,
      password: undefined
    };
    client.send('Fetch.continueWithAuth', {
      requestId: event.requestId,
      authChallengeResponse: {
        response,
        username,
        password
      }
    }).catch(debugError);
  }
  /**
   * CDP may send a Fetch.requestPaused without or before a
   * Network.requestWillBeSent
   *
   * CDP may send multiple Fetch.requestPaused
   * for the same Network.requestWillBeSent.
   */
  function _onRequestPaused(client, event) {
    if (!_classPrivateFieldGet(_userRequestInterceptionEnabled, this) && _classPrivateFieldGet(_protocolRequestInterceptionEnabled, this)) {
      client.send('Fetch.continueRequest', {
        requestId: event.requestId
      }).catch(debugError);
    }
    const {
      networkId: networkRequestId,
      requestId: fetchRequestId
    } = event;
    if (!networkRequestId) {
      _assertClassBrand(_NetworkManager_brand, this, _onRequestWithoutNetworkInstrumentation).call(this, client, event);
      return;
    }
    const requestWillBeSentEvent = (() => {
      const requestWillBeSentEvent = _classPrivateFieldGet(_networkEventManager, this).getRequestWillBeSent(networkRequestId);
      // redirect requests have the same `requestId`,
      if (requestWillBeSentEvent && (requestWillBeSentEvent.request.url !== event.request.url || requestWillBeSentEvent.request.method !== event.request.method)) {
        _classPrivateFieldGet(_networkEventManager, this).forgetRequestWillBeSent(networkRequestId);
        return;
      }
      return requestWillBeSentEvent;
    })();
    if (requestWillBeSentEvent) {
      _assertClassBrand(_NetworkManager_brand, this, _patchRequestEventHeaders).call(this, requestWillBeSentEvent, event);
      _assertClassBrand(_NetworkManager_brand, this, _onRequest2).call(this, client, requestWillBeSentEvent, fetchRequestId);
    } else {
      _classPrivateFieldGet(_networkEventManager, this).storeRequestPaused(networkRequestId, event);
    }
  }
  function _patchRequestEventHeaders(requestWillBeSentEvent, requestPausedEvent) {
    requestWillBeSentEvent.request.headers = {
      ...requestWillBeSentEvent.request.headers,
      // includes extra headers, like: Accept, Origin
      ...requestPausedEvent.request.headers
    };
  }
  function _onRequestWithoutNetworkInstrumentation(client, event) {
    // If an event has no networkId it should not have any network events. We
    // still want to dispatch it for the interception by the user.
    const frame = event.frameId ? _classPrivateFieldGet(_frameManager, this).frame(event.frameId) : null;
    const request = new CdpHTTPRequest(client, frame, event.requestId, _classPrivateFieldGet(_userRequestInterceptionEnabled, this), event, []);
    this.emit(exports.NetworkManagerEvent.Request, request);
    void request.finalizeInterceptions();
  }
  function _onRequest2(client, event, fetchRequestId, fromMemoryCache = false) {
    let redirectChain = [];
    if (event.redirectResponse) {
      // We want to emit a response and requestfinished for the
      // redirectResponse, but we can't do so unless we have a
      // responseExtraInfo ready to pair it up with. If we don't have any
      // responseExtraInfos saved in our queue, they we have to wait until
      // the next one to emit response and requestfinished, *and* we should
      // also wait to emit this Request too because it should come after the
      // response/requestfinished.
      let redirectResponseExtraInfo = null;
      if (event.redirectHasExtraInfo) {
        redirectResponseExtraInfo = _classPrivateFieldGet(_networkEventManager, this).responseExtraInfo(event.requestId).shift();
        if (!redirectResponseExtraInfo) {
          _classPrivateFieldGet(_networkEventManager, this).queueRedirectInfo(event.requestId, {
            event,
            fetchRequestId
          });
          return;
        }
      }
      const request = _classPrivateFieldGet(_networkEventManager, this).getRequest(event.requestId);
      // If we connect late to the target, we could have missed the
      // requestWillBeSent event.
      if (request) {
        _assertClassBrand(_NetworkManager_brand, this, _handleRequestRedirect).call(this, client, request, event.redirectResponse, redirectResponseExtraInfo);
        redirectChain = request._redirectChain;
        const extraInfo = _classPrivateFieldGet(_networkEventManager, this).requestExtraInfo(event.requestId).shift();
        if (extraInfo) {
          request.updateHeaders(extraInfo.headers);
        }
      }
    }
    const frame = event.frameId ? _classPrivateFieldGet(_frameManager, this).frame(event.frameId) : null;
    const request = new CdpHTTPRequest(client, frame, fetchRequestId, _classPrivateFieldGet(_userRequestInterceptionEnabled, this), event, redirectChain);
    const extraInfo = _classPrivateFieldGet(_networkEventManager, this).requestExtraInfo(event.requestId).shift();
    if (extraInfo) {
      request.updateHeaders(extraInfo.headers);
    }
    request._fromMemoryCache = fromMemoryCache;
    _classPrivateFieldGet(_networkEventManager, this).storeRequest(event.requestId, request);
    this.emit(exports.NetworkManagerEvent.Request, request);
    void request.finalizeInterceptions();
  }
  function _onRequestWillBeSentExtraInfo(_client, event) {
    const request = _classPrivateFieldGet(_networkEventManager, this).getRequest(event.requestId);
    if (request) {
      request.updateHeaders(event.headers);
    } else {
      _classPrivateFieldGet(_networkEventManager, this).requestExtraInfo(event.requestId).push(event);
    }
  }
  function _onRequestServedFromCache(client, event) {
    const requestWillBeSentEvent = _classPrivateFieldGet(_networkEventManager, this).getRequestWillBeSent(event.requestId);
    let request = _classPrivateFieldGet(_networkEventManager, this).getRequest(event.requestId);
    // Requests served from memory cannot be intercepted.
    if (request) {
      request._fromMemoryCache = true;
    }
    // If request ended up being served from cache, we need to convert
    // requestWillBeSentEvent to a HTTP request.
    if (!request && requestWillBeSentEvent) {
      _assertClassBrand(_NetworkManager_brand, this, _onRequest2).call(this, client, requestWillBeSentEvent, undefined, true);
      request = _classPrivateFieldGet(_networkEventManager, this).getRequest(event.requestId);
    }
    if (!request) {
      debugError(new Error(`Request ${event.requestId} was served from cache but we could not find the corresponding request object`));
      return;
    }
    this.emit(exports.NetworkManagerEvent.RequestServedFromCache, request);
  }
  function _handleRequestRedirect(_client, request, responsePayload, extraInfo) {
    const response = new CdpHTTPResponse(request, responsePayload, extraInfo);
    request._response = response;
    request._redirectChain.push(request);
    response._resolveBody(new Error('Response body is unavailable for redirect responses'));
    _assertClassBrand(_NetworkManager_brand, this, _forgetRequest).call(this, request, false);
    this.emit(exports.NetworkManagerEvent.Response, response);
    this.emit(exports.NetworkManagerEvent.RequestFinished, request);
  }
  function _emitResponseEvent(_client, responseReceived, extraInfo) {
    const request = _classPrivateFieldGet(_networkEventManager, this).getRequest(responseReceived.requestId);
    // FileUpload sends a response without a matching request.
    if (!request) {
      return;
    }
    const extraInfos = _classPrivateFieldGet(_networkEventManager, this).responseExtraInfo(responseReceived.requestId);
    if (extraInfos.length) {
      debugError(new Error('Unexpected extraInfo events for request ' + responseReceived.requestId));
    }
    // Chromium sends wrong extraInfo events for responses served from cache.
    // See https://github.com/puppeteer/puppeteer/issues/9965 and
    // https://crbug.com/1340398.
    if (responseReceived.response.fromDiskCache) {
      extraInfo = null;
    }
    const response = new CdpHTTPResponse(request, responseReceived.response, extraInfo);
    request._response = response;
    this.emit(exports.NetworkManagerEvent.Response, response);
  }
  function _onResponseReceived(client, event) {
    const request = _classPrivateFieldGet(_networkEventManager, this).getRequest(event.requestId);
    let extraInfo = null;
    if (request && !request._fromMemoryCache && event.hasExtraInfo) {
      extraInfo = _classPrivateFieldGet(_networkEventManager, this).responseExtraInfo(event.requestId).shift();
      if (!extraInfo) {
        // Wait until we get the corresponding ExtraInfo event.
        _classPrivateFieldGet(_networkEventManager, this).queueEventGroup(event.requestId, {
          responseReceivedEvent: event
        });
        return;
      }
    }
    _assertClassBrand(_NetworkManager_brand, this, _emitResponseEvent).call(this, client, event, extraInfo);
  }
  function _onResponseReceivedExtraInfo(client, event) {
    // We may have skipped a redirect response/request pair due to waiting for
    // this ExtraInfo event. If so, continue that work now that we have the
    // request.
    const redirectInfo = _classPrivateFieldGet(_networkEventManager, this).takeQueuedRedirectInfo(event.requestId);
    if (redirectInfo) {
      _classPrivateFieldGet(_networkEventManager, this).responseExtraInfo(event.requestId).push(event);
      _assertClassBrand(_NetworkManager_brand, this, _onRequest2).call(this, client, redirectInfo.event, redirectInfo.fetchRequestId);
      return;
    }
    // We may have skipped response and loading events because we didn't have
    // this ExtraInfo event yet. If so, emit those events now.
    const queuedEvents = _classPrivateFieldGet(_networkEventManager, this).getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
      _classPrivateFieldGet(_networkEventManager, this).forgetQueuedEventGroup(event.requestId);
      _assertClassBrand(_NetworkManager_brand, this, _emitResponseEvent).call(this, client, queuedEvents.responseReceivedEvent, event);
      if (queuedEvents.loadingFinishedEvent) {
        _assertClassBrand(_NetworkManager_brand, this, _emitLoadingFinished).call(this, client, queuedEvents.loadingFinishedEvent);
      }
      if (queuedEvents.loadingFailedEvent) {
        _assertClassBrand(_NetworkManager_brand, this, _emitLoadingFailed).call(this, client, queuedEvents.loadingFailedEvent);
      }
      return;
    }
    // Wait until we get another event that can use this ExtraInfo event.
    _classPrivateFieldGet(_networkEventManager, this).responseExtraInfo(event.requestId).push(event);
  }
  function _forgetRequest(request, events) {
    const requestId = request.id;
    const interceptionId = request._interceptionId;
    _classPrivateFieldGet(_networkEventManager, this).forgetRequest(requestId);
    if (interceptionId !== undefined) {
      _classPrivateFieldGet(_attemptedAuthentications, this).delete(interceptionId);
    }
    if (events) {
      _classPrivateFieldGet(_networkEventManager, this).forget(requestId);
    }
  }
  function _onLoadingFinished(client, event) {
    // If the response event for this request is still waiting on a
    // corresponding ExtraInfo event, then wait to emit this event too.
    const queuedEvents = _classPrivateFieldGet(_networkEventManager, this).getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
      queuedEvents.loadingFinishedEvent = event;
    } else {
      _assertClassBrand(_NetworkManager_brand, this, _emitLoadingFinished).call(this, client, event);
    }
  }
  function _emitLoadingFinished(client, event) {
    const request = _classPrivateFieldGet(_networkEventManager, this).getRequest(event.requestId);
    // For certain requestIds we never receive requestWillBeSent event.
    // @see https://crbug.com/750469
    if (!request) {
      return;
    }
    _assertClassBrand(_NetworkManager_brand, this, _adoptCdpSessionIfNeeded).call(this, client, request);
    // Under certain conditions we never get the Network.responseReceived
    // event from protocol. @see https://crbug.com/883475
    if (request.response()) {
      request.response()?._resolveBody();
    }
    _assertClassBrand(_NetworkManager_brand, this, _forgetRequest).call(this, request, true);
    this.emit(exports.NetworkManagerEvent.RequestFinished, request);
  }
  function _onLoadingFailed(client, event) {
    // If the response event for this request is still waiting on a
    // corresponding ExtraInfo event, then wait to emit this event too.
    const queuedEvents = _classPrivateFieldGet(_networkEventManager, this).getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
      queuedEvents.loadingFailedEvent = event;
    } else {
      _assertClassBrand(_NetworkManager_brand, this, _emitLoadingFailed).call(this, client, event);
    }
  }
  function _emitLoadingFailed(client, event) {
    const request = _classPrivateFieldGet(_networkEventManager, this).getRequest(event.requestId);
    // For certain requestIds we never receive requestWillBeSent event.
    // @see https://crbug.com/750469
    if (!request) {
      return;
    }
    _assertClassBrand(_NetworkManager_brand, this, _adoptCdpSessionIfNeeded).call(this, client, request);
    request._failureText = event.errorText;
    const response = request.response();
    if (response) {
      response._resolveBody();
    }
    _assertClassBrand(_NetworkManager_brand, this, _forgetRequest).call(this, request, true);
    this.emit(exports.NetworkManagerEvent.RequestFailed, request);
  }
  function _adoptCdpSessionIfNeeded(client, request) {
    // Document requests for OOPIFs start in the parent frame but are
    // adopted by their child frame, meaning their loadingFinished and
    // loadingFailed events are fired on the child session. In this case
    // we reassign the request CDPSession to ensure all subsequent
    // actions use the correct session (e.g. retrieving response body in
    // HTTPResponse). The same applies to main worker script requests.
    if (client !== request.client) {
      request.client = client;
    }
  }
  const TIME_FOR_WAITING_FOR_SWAP = 100; // ms.
  const CHROME_EXTENSION_PREFIX = 'chrome-extension://';
  /**
   * A frame manager manages the frames for a given {@link Page | page}.
   *
   * @internal
   */
  var _page = /*#__PURE__*/new WeakMap();
  var _networkManager = /*#__PURE__*/new WeakMap();
  var _timeoutSettings3 = /*#__PURE__*/new WeakMap();
  var _isolatedWorlds = /*#__PURE__*/new WeakMap();
  var _client10 = /*#__PURE__*/new WeakMap();
  var _scriptsToEvaluateOnNewDocument = /*#__PURE__*/new WeakMap();
  var _bindings2 = /*#__PURE__*/new WeakMap();
  var _frameNavigatedReceived = /*#__PURE__*/new WeakMap();
  var _deviceRequestPromptManagerMap = /*#__PURE__*/new WeakMap();
  var _frameTreeHandled = /*#__PURE__*/new WeakMap();
  var _FrameManager_brand = /*#__PURE__*/new WeakSet();
  class FrameManager extends EventEmitter {
    get timeoutSettings() {
      return _classPrivateFieldGet(_timeoutSettings3, this);
    }
    get networkManager() {
      return _classPrivateFieldGet(_networkManager, this);
    }
    get client() {
      return _classPrivateFieldGet(_client10, this);
    }
    constructor(client, page, timeoutSettings) {
      super();
      /**
       * Called when the frame's client is disconnected. We don't know if the
       * disconnect means that the frame is removed or if it will be replaced by a
       * new frame. Therefore, we wait for a swap event.
       */
      _classPrivateMethodInitSpec(this, _FrameManager_brand);
      _classPrivateFieldInitSpec(this, _page, void 0);
      _classPrivateFieldInitSpec(this, _networkManager, void 0);
      _classPrivateFieldInitSpec(this, _timeoutSettings3, void 0);
      _classPrivateFieldInitSpec(this, _isolatedWorlds, new Set());
      _classPrivateFieldInitSpec(this, _client10, void 0);
      _classPrivateFieldInitSpec(this, _scriptsToEvaluateOnNewDocument, new Map());
      _classPrivateFieldInitSpec(this, _bindings2, new Set());
      _defineProperty(this, "_frameTree", new FrameTree());
      /**
       * Set of frame IDs stored to indicate if a frame has received a
       * frameNavigated event so that frame tree responses could be ignored as the
       * frameNavigated event usually contains the latest information.
       */
      _classPrivateFieldInitSpec(this, _frameNavigatedReceived, new Set());
      _classPrivateFieldInitSpec(this, _deviceRequestPromptManagerMap, new WeakMap());
      _classPrivateFieldInitSpec(this, _frameTreeHandled, void 0);
      _classPrivateFieldSet(_client10, this, client);
      _classPrivateFieldSet(_page, this, page);
      _classPrivateFieldSet(_networkManager, this, new NetworkManager(this, page.browser().isNetworkEnabled()));
      _classPrivateFieldSet(_timeoutSettings3, this, timeoutSettings);
      this.setupEventListeners(_classPrivateFieldGet(_client10, this));
      client.once(exports.CDPSessionEvent.Disconnected, () => {
        _assertClassBrand(_FrameManager_brand, this, _onClientDisconnect).call(this).catch(debugError);
      });
    }
    /**
     * When the main frame is replaced by another main frame,
     * we maintain the main frame object identity while updating
     * its frame tree and ID.
     */
    async swapFrameTree(client) {
      _classPrivateFieldSet(_client10, this, client);
      const frame = this._frameTree.getMainFrame();
      if (frame) {
        _classPrivateFieldGet(_frameNavigatedReceived, this).add(_classPrivateFieldGet(_client10, this).target()._targetId);
        this._frameTree.removeFrame(frame);
        frame.updateId(_classPrivateFieldGet(_client10, this).target()._targetId);
        this._frameTree.addFrame(frame);
        frame.updateClient(client);
      }
      this.setupEventListeners(client);
      client.once(exports.CDPSessionEvent.Disconnected, () => {
        _assertClassBrand(_FrameManager_brand, this, _onClientDisconnect).call(this).catch(debugError);
      });
      await this.initialize(client, frame);
      await _classPrivateFieldGet(_networkManager, this).addClient(client);
      if (frame) {
        frame.emit(exports.FrameEvent.FrameSwappedByActivation, undefined);
      }
    }
    async registerSpeculativeSession(client) {
      await _classPrivateFieldGet(_networkManager, this).addClient(client);
    }
    setupEventListeners(session) {
      session.on('Page.frameAttached', async event => {
        await _classPrivateFieldGet(_frameTreeHandled, this)?.valueOrThrow();
        _assertClassBrand(_FrameManager_brand, this, _onFrameAttached).call(this, session, event.frameId, event.parentFrameId);
      });
      session.on('Page.frameNavigated', async event => {
        _classPrivateFieldGet(_frameNavigatedReceived, this).add(event.frame.id);
        await _classPrivateFieldGet(_frameTreeHandled, this)?.valueOrThrow();
        void _assertClassBrand(_FrameManager_brand, this, _onFrameNavigated).call(this, event.frame, event.type);
      });
      session.on('Page.navigatedWithinDocument', async event => {
        await _classPrivateFieldGet(_frameTreeHandled, this)?.valueOrThrow();
        _assertClassBrand(_FrameManager_brand, this, _onFrameNavigatedWithinDocument).call(this, event.frameId, event.url);
      });
      session.on('Page.frameDetached', async event => {
        await _classPrivateFieldGet(_frameTreeHandled, this)?.valueOrThrow();
        _assertClassBrand(_FrameManager_brand, this, _onFrameDetached2).call(this, event.frameId, event.reason);
      });
      session.on('Page.frameStartedLoading', async event => {
        await _classPrivateFieldGet(_frameTreeHandled, this)?.valueOrThrow();
        _assertClassBrand(_FrameManager_brand, this, _onFrameStartedLoading).call(this, event.frameId);
      });
      session.on('Page.frameStoppedLoading', async event => {
        await _classPrivateFieldGet(_frameTreeHandled, this)?.valueOrThrow();
        _assertClassBrand(_FrameManager_brand, this, _onFrameStoppedLoading).call(this, event.frameId);
      });
      session.on('Runtime.executionContextCreated', async event => {
        await _classPrivateFieldGet(_frameTreeHandled, this)?.valueOrThrow();
        _assertClassBrand(_FrameManager_brand, this, _onExecutionContextCreated).call(this, event.context, session);
      });
      session.on('Page.lifecycleEvent', async event => {
        await _classPrivateFieldGet(_frameTreeHandled, this)?.valueOrThrow();
        _assertClassBrand(_FrameManager_brand, this, _onLifecycleEvent).call(this, event);
      });
      session.on('Audits.issueAdded', event => {
        _classPrivateFieldGet(_page, this).emit("issue" /* PageEvent.Issue */, new CdpIssue(event.issue));
      });
    }
    async initialize(client, frame) {
      try {
        _classPrivateFieldGet(_frameTreeHandled, this)?.resolve();
        _classPrivateFieldSet(_frameTreeHandled, this, Deferred.create());
        // We need to schedule all these commands while the target is paused,
        // therefore, it needs to happen synchronously. At the same time we
        // should not start processing execution context and frame events before
        // we received the initial information about the frame tree.
        await Promise.all([_classPrivateFieldGet(_networkManager, this).addClient(client), client.send('Page.enable'), client.send('Page.getFrameTree').then(({
          frameTree
        }) => {
          _assertClassBrand(_FrameManager_brand, this, _handleFrameTree).call(this, client, frameTree);
          _classPrivateFieldGet(_frameTreeHandled, this)?.resolve();
        }), client.send('Page.setLifecycleEventsEnabled', {
          enabled: true
        }), client.send('Runtime.enable').then(() => {
          return _assertClassBrand(_FrameManager_brand, this, _createIsolatedWorld).call(this, client, UTILITY_WORLD_NAME);
        }), ...(frame ? Array.from(_classPrivateFieldGet(_scriptsToEvaluateOnNewDocument, this).values()) : []).map(script => {
          return frame?.addPreloadScript(script);
        }), ...(frame ? Array.from(_classPrivateFieldGet(_bindings2, this).values()) : []).map(binding => {
          return frame?.addExposedFunctionBinding(binding);
        }), _classPrivateFieldGet(_page, this).browser().isIssuesEnabled() && client.send('Audits.enable')]);
      } catch (error) {
        _classPrivateFieldGet(_frameTreeHandled, this)?.resolve();
        // The target might have been closed before the initialization finished.
        if (isErrorLike(error) && isTargetClosedError(error)) {
          return;
        }
        throw error;
      }
    }
    page() {
      return _classPrivateFieldGet(_page, this);
    }
    mainFrame() {
      const mainFrame = this._frameTree.getMainFrame();
      assert(mainFrame, 'Requesting main frame too early!');
      return mainFrame;
    }
    frames() {
      return Array.from(this._frameTree.frames());
    }
    frame(frameId) {
      return this._frameTree.getById(frameId) || null;
    }
    async addExposedFunctionBinding(binding) {
      _classPrivateFieldGet(_bindings2, this).add(binding);
      await Promise.all(this.frames().map(async frame => {
        return await frame.addExposedFunctionBinding(binding);
      }));
    }
    async removeExposedFunctionBinding(binding) {
      _classPrivateFieldGet(_bindings2, this).delete(binding);
      await Promise.all(this.frames().map(async frame => {
        return await frame.removeExposedFunctionBinding(binding);
      }));
    }
    async evaluateOnNewDocument(source) {
      const {
        identifier
      } = await this.mainFrame()._client().send('Page.addScriptToEvaluateOnNewDocument', {
        source
      });
      const preloadScript = new CdpPreloadScript(this.mainFrame(), identifier, source);
      _classPrivateFieldGet(_scriptsToEvaluateOnNewDocument, this).set(identifier, preloadScript);
      await Promise.all(this.frames().map(async frame => {
        return await frame.addPreloadScript(preloadScript);
      }));
      return {
        identifier
      };
    }
    async removeScriptToEvaluateOnNewDocument(identifier) {
      const preloadScript = _classPrivateFieldGet(_scriptsToEvaluateOnNewDocument, this).get(identifier);
      if (!preloadScript) {
        throw new Error(`Script to evaluate on new document with id ${identifier} not found`);
      }
      _classPrivateFieldGet(_scriptsToEvaluateOnNewDocument, this).delete(identifier);
      await Promise.all(this.frames().map(frame => {
        const identifier = preloadScript.getIdForFrame(frame);
        if (!identifier) {
          return;
        }
        return frame._client().send('Page.removeScriptToEvaluateOnNewDocument', {
          identifier
        }).catch(debugError);
      }));
    }
    onAttachedToTarget(target) {
      if (target._getTargetInfo().type !== 'iframe') {
        return;
      }
      const frame = this.frame(target._getTargetInfo().targetId);
      if (frame) {
        frame.updateClient(target._session());
      }
      this.setupEventListeners(target._session());
      void this.initialize(target._session(), frame).catch(debugError);
    }
    _deviceRequestPromptManager(client) {
      let manager = _classPrivateFieldGet(_deviceRequestPromptManagerMap, this).get(client);
      if (manager === undefined) {
        manager = new CdpDeviceRequestPromptManager(client, _classPrivateFieldGet(_timeoutSettings3, this));
        _classPrivateFieldGet(_deviceRequestPromptManagerMap, this).set(client, manager);
      }
      return manager;
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  async function _onClientDisconnect() {
    const mainFrame = this._frameTree.getMainFrame();
    if (!mainFrame) {
      return;
    }
    if (!_classPrivateFieldGet(_page, this).browser().connected) {
      // If the browser is not connected we know
      // that activation will not happen
      _assertClassBrand(_FrameManager_brand, this, _removeFramesRecursively).call(this, mainFrame);
      return;
    }
    for (const child of mainFrame.childFrames()) {
      _assertClassBrand(_FrameManager_brand, this, _removeFramesRecursively).call(this, child);
    }
    const swapped = Deferred.create({
      timeout: TIME_FOR_WAITING_FOR_SWAP,
      message: 'Frame was not swapped'
    });
    mainFrame.once(exports.FrameEvent.FrameSwappedByActivation, () => {
      swapped.resolve();
    });
    try {
      await swapped.valueOrThrow();
    } catch {
      _assertClassBrand(_FrameManager_brand, this, _removeFramesRecursively).call(this, mainFrame);
    }
  }
  function _onLifecycleEvent(event) {
    const frame = this.frame(event.frameId);
    if (!frame) {
      return;
    }
    frame._onLifecycleEvent(event.loaderId, event.name);
    this.emit(exports.FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(exports.FrameEvent.LifecycleEvent, undefined);
  }
  function _onFrameStartedLoading(frameId) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._onLoadingStarted();
  }
  function _onFrameStoppedLoading(frameId) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._onLoadingStopped();
    this.emit(exports.FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(exports.FrameEvent.LifecycleEvent, undefined);
  }
  function _handleFrameTree(session, frameTree) {
    if (frameTree.frame.parentId) {
      _assertClassBrand(_FrameManager_brand, this, _onFrameAttached).call(this, session, frameTree.frame.id, frameTree.frame.parentId);
    }
    if (!_classPrivateFieldGet(_frameNavigatedReceived, this).has(frameTree.frame.id)) {
      void _assertClassBrand(_FrameManager_brand, this, _onFrameNavigated).call(this, frameTree.frame, 'Navigation');
    } else {
      _classPrivateFieldGet(_frameNavigatedReceived, this).delete(frameTree.frame.id);
    }
    if (!frameTree.childFrames) {
      return;
    }
    for (const child of frameTree.childFrames) {
      _assertClassBrand(_FrameManager_brand, this, _handleFrameTree).call(this, session, child);
    }
  }
  function _onFrameAttached(session, frameId, parentFrameId) {
    let frame = this.frame(frameId);
    if (frame) {
      const parentFrame = this.frame(parentFrameId);
      if (session && parentFrame && frame.client !== parentFrame?.client) {
        // If an OOP iframes becomes a normal iframe
        // again it is first attached to the parent frame before the
        // target is removed.
        frame.updateClient(session);
      }
      return;
    }
    frame = new CdpFrame(this, frameId, parentFrameId, session);
    this._frameTree.addFrame(frame);
    this.emit(exports.FrameManagerEvent.FrameAttached, frame);
  }
  async function _onFrameNavigated(framePayload, navigationType) {
    const frameId = framePayload.id;
    const isMainFrame = !framePayload.parentId;
    let frame = this._frameTree.getById(frameId);
    // Detach all child frames first.
    if (frame) {
      for (const child of frame.childFrames()) {
        _assertClassBrand(_FrameManager_brand, this, _removeFramesRecursively).call(this, child);
      }
    }
    // Update or create main frame.
    if (isMainFrame) {
      if (frame) {
        // Update frame id to retain frame identity on cross-process navigation.
        this._frameTree.removeFrame(frame);
        frame._id = frameId;
      } else {
        // Initial main frame navigation.
        frame = new CdpFrame(this, frameId, undefined, _classPrivateFieldGet(_client10, this));
      }
      this._frameTree.addFrame(frame);
    }
    frame = await this._frameTree.waitForFrame(frameId);
    frame._navigated(framePayload);
    this.emit(exports.FrameManagerEvent.FrameNavigated, frame);
    frame.emit(exports.FrameEvent.FrameNavigated, navigationType);
  }
  async function _createIsolatedWorld(session, name) {
    const key = `${session.id()}:${name}`;
    if (_classPrivateFieldGet(_isolatedWorlds, this).has(key)) {
      return;
    }
    await session.send('Page.addScriptToEvaluateOnNewDocument', {
      source: `//# sourceURL=${PuppeteerURL.INTERNAL_URL}`,
      worldName: name
    });
    await Promise.all(this.frames().filter(frame => {
      return frame.client === session;
    }).map(frame => {
      // Frames might be removed before we send this, so we don't want to
      // throw an error.
      return session.send('Page.createIsolatedWorld', {
        frameId: frame._id,
        worldName: name,
        grantUniveralAccess: true
      }).catch(debugError);
    }));
    _classPrivateFieldGet(_isolatedWorlds, this).add(key);
  }
  function _onFrameNavigatedWithinDocument(frameId, url) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._navigatedWithinDocument(url);
    this.emit(exports.FrameManagerEvent.FrameNavigatedWithinDocument, frame);
    frame.emit(exports.FrameEvent.FrameNavigatedWithinDocument, undefined);
    this.emit(exports.FrameManagerEvent.FrameNavigated, frame);
    frame.emit(exports.FrameEvent.FrameNavigated, 'Navigation');
  }
  function _onFrameDetached2(frameId, reason) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    switch (reason) {
      case 'remove':
        // Only remove the frame if the reason for the detached event is
        // an actual removement of the frame.
        // For frames that become OOP iframes, the reason would be 'swap'.
        _assertClassBrand(_FrameManager_brand, this, _removeFramesRecursively).call(this, frame);
        break;
      case 'swap':
        this.emit(exports.FrameManagerEvent.FrameSwapped, frame);
        frame.emit(exports.FrameEvent.FrameSwapped, undefined);
        break;
    }
  }
  function _isExtensionOrigin(origin) {
    return origin.startsWith(CHROME_EXTENSION_PREFIX);
  }
  function _extractExtensionId(origin) {
    if (!origin || !_assertClassBrand(_FrameManager_brand, this, _isExtensionOrigin).call(this, origin)) {
      return null;
    }
    const pathPart = origin.substring(CHROME_EXTENSION_PREFIX.length);
    const slashIndex = pathPart.indexOf('/');
    // if there's no / it means that pathPart is now the extensionId, otherwise
    // we take everything until the first /
    return slashIndex === -1 ? pathPart : pathPart.substring(0, slashIndex);
  }
  function _onExecutionContextCreated(contextPayload, session) {
    const auxData = contextPayload.auxData;
    const origin = contextPayload.origin;
    const frameId = auxData && auxData.frameId;
    const frame = typeof frameId === 'string' ? this.frame(frameId) : undefined;
    let world;
    if (frame) {
      // Only care about execution contexts created for the current session.
      if (frame.client !== session) {
        return;
      }
      if (contextPayload.auxData && contextPayload.auxData['isDefault']) {
        world = frame.worlds[MAIN_WORLD];
      } else if (contextPayload.name === UTILITY_WORLD_NAME) {
        // In case of multiple sessions to the same target, there's a race between
        // connections so we might end up creating multiple isolated worlds.
        // We can use either.
        world = frame.worlds[PUPPETEER_WORLD];
      } else if (_assertClassBrand(_FrameManager_brand, this, _isExtensionOrigin).call(this, origin)) {
        const extId = _assertClassBrand(_FrameManager_brand, this, _extractExtensionId).call(this, origin);
        if (!extId) {
          debugError('Error while parsing extension id');
          return;
        }
        if (frame.extensionWorlds[extId]) {
          world = frame.extensionWorlds[extId];
        } else {
          world = new IsolatedWorld(frame, this.timeoutSettings, extId);
          frame.extensionWorlds[extId] = world;
          frame.registerWorldListeners(world);
          world.origin = origin;
          world.setWorldId(extId);
        }
      }
    }
    // If there is no world, the context is not meant to be handled by us.
    if (!world) {
      return;
    }
    const context = new ExecutionContext(frame?.client || _classPrivateFieldGet(_client10, this), contextPayload, world);
    world.setContext(context);
  }
  function _removeFramesRecursively(frame) {
    for (const child of frame.childFrames()) {
      _assertClassBrand(_FrameManager_brand, this, _removeFramesRecursively).call(this, child);
    }
    this._frameTree.removeFrame(frame);
    this.emit(exports.FrameManagerEvent.FrameDetached, frame);
    frame.emit(exports.FrameEvent.FrameDetached, frame);
    // Needs to be last to ensure events
    // sent before handlers are cleared.
    frame[disposeSymbol]();
  }
  const _keyDefinitions = {
    '0': {
      keyCode: 48,
      key: '0',
      code: 'Digit0'
    },
    '1': {
      keyCode: 49,
      key: '1',
      code: 'Digit1'
    },
    '2': {
      keyCode: 50,
      key: '2',
      code: 'Digit2'
    },
    '3': {
      keyCode: 51,
      key: '3',
      code: 'Digit3'
    },
    '4': {
      keyCode: 52,
      key: '4',
      code: 'Digit4'
    },
    '5': {
      keyCode: 53,
      key: '5',
      code: 'Digit5'
    },
    '6': {
      keyCode: 54,
      key: '6',
      code: 'Digit6'
    },
    '7': {
      keyCode: 55,
      key: '7',
      code: 'Digit7'
    },
    '8': {
      keyCode: 56,
      key: '8',
      code: 'Digit8'
    },
    '9': {
      keyCode: 57,
      key: '9',
      code: 'Digit9'
    },
    Power: {
      key: 'Power',
      code: 'Power'
    },
    Eject: {
      key: 'Eject',
      code: 'Eject'
    },
    Abort: {
      keyCode: 3,
      code: 'Abort',
      key: 'Cancel'
    },
    Help: {
      keyCode: 6,
      code: 'Help',
      key: 'Help'
    },
    Backspace: {
      keyCode: 8,
      code: 'Backspace',
      key: 'Backspace'
    },
    Tab: {
      keyCode: 9,
      code: 'Tab',
      key: 'Tab'
    },
    Numpad5: {
      keyCode: 12,
      shiftKeyCode: 101,
      key: 'Clear',
      code: 'Numpad5',
      shiftKey: '5',
      location: 3
    },
    NumpadEnter: {
      keyCode: 13,
      code: 'NumpadEnter',
      key: 'Enter',
      text: '\r',
      location: 3
    },
    Enter: {
      keyCode: 13,
      code: 'Enter',
      key: 'Enter',
      text: '\r'
    },
    '\r': {
      keyCode: 13,
      code: 'Enter',
      key: 'Enter',
      text: '\r'
    },
    '\n': {
      keyCode: 13,
      code: 'Enter',
      key: 'Enter',
      text: '\r'
    },
    ShiftLeft: {
      keyCode: 16,
      code: 'ShiftLeft',
      key: 'Shift',
      location: 1
    },
    ShiftRight: {
      keyCode: 16,
      code: 'ShiftRight',
      key: 'Shift',
      location: 2
    },
    ControlLeft: {
      keyCode: 17,
      code: 'ControlLeft',
      key: 'Control',
      location: 1
    },
    ControlRight: {
      keyCode: 17,
      code: 'ControlRight',
      key: 'Control',
      location: 2
    },
    AltLeft: {
      keyCode: 18,
      code: 'AltLeft',
      key: 'Alt',
      location: 1
    },
    AltRight: {
      keyCode: 18,
      code: 'AltRight',
      key: 'Alt',
      location: 2
    },
    Pause: {
      keyCode: 19,
      code: 'Pause',
      key: 'Pause'
    },
    CapsLock: {
      keyCode: 20,
      code: 'CapsLock',
      key: 'CapsLock'
    },
    Escape: {
      keyCode: 27,
      code: 'Escape',
      key: 'Escape'
    },
    Convert: {
      keyCode: 28,
      code: 'Convert',
      key: 'Convert'
    },
    NonConvert: {
      keyCode: 29,
      code: 'NonConvert',
      key: 'NonConvert'
    },
    Space: {
      keyCode: 32,
      code: 'Space',
      key: ' '
    },
    Numpad9: {
      keyCode: 33,
      shiftKeyCode: 105,
      key: 'PageUp',
      code: 'Numpad9',
      shiftKey: '9',
      location: 3
    },
    PageUp: {
      keyCode: 33,
      code: 'PageUp',
      key: 'PageUp'
    },
    Numpad3: {
      keyCode: 34,
      shiftKeyCode: 99,
      key: 'PageDown',
      code: 'Numpad3',
      shiftKey: '3',
      location: 3
    },
    PageDown: {
      keyCode: 34,
      code: 'PageDown',
      key: 'PageDown'
    },
    End: {
      keyCode: 35,
      code: 'End',
      key: 'End'
    },
    Numpad1: {
      keyCode: 35,
      shiftKeyCode: 97,
      key: 'End',
      code: 'Numpad1',
      shiftKey: '1',
      location: 3
    },
    Home: {
      keyCode: 36,
      code: 'Home',
      key: 'Home'
    },
    Numpad7: {
      keyCode: 36,
      shiftKeyCode: 103,
      key: 'Home',
      code: 'Numpad7',
      shiftKey: '7',
      location: 3
    },
    ArrowLeft: {
      keyCode: 37,
      code: 'ArrowLeft',
      key: 'ArrowLeft'
    },
    Numpad4: {
      keyCode: 37,
      shiftKeyCode: 100,
      key: 'ArrowLeft',
      code: 'Numpad4',
      shiftKey: '4',
      location: 3
    },
    Numpad8: {
      keyCode: 38,
      shiftKeyCode: 104,
      key: 'ArrowUp',
      code: 'Numpad8',
      shiftKey: '8',
      location: 3
    },
    ArrowUp: {
      keyCode: 38,
      code: 'ArrowUp',
      key: 'ArrowUp'
    },
    ArrowRight: {
      keyCode: 39,
      code: 'ArrowRight',
      key: 'ArrowRight'
    },
    Numpad6: {
      keyCode: 39,
      shiftKeyCode: 102,
      key: 'ArrowRight',
      code: 'Numpad6',
      shiftKey: '6',
      location: 3
    },
    Numpad2: {
      keyCode: 40,
      shiftKeyCode: 98,
      key: 'ArrowDown',
      code: 'Numpad2',
      shiftKey: '2',
      location: 3
    },
    ArrowDown: {
      keyCode: 40,
      code: 'ArrowDown',
      key: 'ArrowDown'
    },
    Select: {
      keyCode: 41,
      code: 'Select',
      key: 'Select'
    },
    Open: {
      keyCode: 43,
      code: 'Open',
      key: 'Execute'
    },
    PrintScreen: {
      keyCode: 44,
      code: 'PrintScreen',
      key: 'PrintScreen'
    },
    Insert: {
      keyCode: 45,
      code: 'Insert',
      key: 'Insert'
    },
    Numpad0: {
      keyCode: 45,
      shiftKeyCode: 96,
      key: 'Insert',
      code: 'Numpad0',
      shiftKey: '0',
      location: 3
    },
    Delete: {
      keyCode: 46,
      code: 'Delete',
      key: 'Delete'
    },
    NumpadDecimal: {
      keyCode: 46,
      shiftKeyCode: 110,
      code: 'NumpadDecimal',
      key: '\u0000',
      shiftKey: '.',
      location: 3
    },
    Digit0: {
      keyCode: 48,
      code: 'Digit0',
      shiftKey: ')',
      key: '0'
    },
    Digit1: {
      keyCode: 49,
      code: 'Digit1',
      shiftKey: '!',
      key: '1'
    },
    Digit2: {
      keyCode: 50,
      code: 'Digit2',
      shiftKey: '@',
      key: '2'
    },
    Digit3: {
      keyCode: 51,
      code: 'Digit3',
      shiftKey: '#',
      key: '3'
    },
    Digit4: {
      keyCode: 52,
      code: 'Digit4',
      shiftKey: '$',
      key: '4'
    },
    Digit5: {
      keyCode: 53,
      code: 'Digit5',
      shiftKey: '%',
      key: '5'
    },
    Digit6: {
      keyCode: 54,
      code: 'Digit6',
      shiftKey: '^',
      key: '6'
    },
    Digit7: {
      keyCode: 55,
      code: 'Digit7',
      shiftKey: '&',
      key: '7'
    },
    Digit8: {
      keyCode: 56,
      code: 'Digit8',
      shiftKey: '*',
      key: '8'
    },
    Digit9: {
      keyCode: 57,
      code: 'Digit9',
      shiftKey: '(',
      key: '9'
    },
    KeyA: {
      keyCode: 65,
      code: 'KeyA',
      shiftKey: 'A',
      key: 'a'
    },
    KeyB: {
      keyCode: 66,
      code: 'KeyB',
      shiftKey: 'B',
      key: 'b'
    },
    KeyC: {
      keyCode: 67,
      code: 'KeyC',
      shiftKey: 'C',
      key: 'c'
    },
    KeyD: {
      keyCode: 68,
      code: 'KeyD',
      shiftKey: 'D',
      key: 'd'
    },
    KeyE: {
      keyCode: 69,
      code: 'KeyE',
      shiftKey: 'E',
      key: 'e'
    },
    KeyF: {
      keyCode: 70,
      code: 'KeyF',
      shiftKey: 'F',
      key: 'f'
    },
    KeyG: {
      keyCode: 71,
      code: 'KeyG',
      shiftKey: 'G',
      key: 'g'
    },
    KeyH: {
      keyCode: 72,
      code: 'KeyH',
      shiftKey: 'H',
      key: 'h'
    },
    KeyI: {
      keyCode: 73,
      code: 'KeyI',
      shiftKey: 'I',
      key: 'i'
    },
    KeyJ: {
      keyCode: 74,
      code: 'KeyJ',
      shiftKey: 'J',
      key: 'j'
    },
    KeyK: {
      keyCode: 75,
      code: 'KeyK',
      shiftKey: 'K',
      key: 'k'
    },
    KeyL: {
      keyCode: 76,
      code: 'KeyL',
      shiftKey: 'L',
      key: 'l'
    },
    KeyM: {
      keyCode: 77,
      code: 'KeyM',
      shiftKey: 'M',
      key: 'm'
    },
    KeyN: {
      keyCode: 78,
      code: 'KeyN',
      shiftKey: 'N',
      key: 'n'
    },
    KeyO: {
      keyCode: 79,
      code: 'KeyO',
      shiftKey: 'O',
      key: 'o'
    },
    KeyP: {
      keyCode: 80,
      code: 'KeyP',
      shiftKey: 'P',
      key: 'p'
    },
    KeyQ: {
      keyCode: 81,
      code: 'KeyQ',
      shiftKey: 'Q',
      key: 'q'
    },
    KeyR: {
      keyCode: 82,
      code: 'KeyR',
      shiftKey: 'R',
      key: 'r'
    },
    KeyS: {
      keyCode: 83,
      code: 'KeyS',
      shiftKey: 'S',
      key: 's'
    },
    KeyT: {
      keyCode: 84,
      code: 'KeyT',
      shiftKey: 'T',
      key: 't'
    },
    KeyU: {
      keyCode: 85,
      code: 'KeyU',
      shiftKey: 'U',
      key: 'u'
    },
    KeyV: {
      keyCode: 86,
      code: 'KeyV',
      shiftKey: 'V',
      key: 'v'
    },
    KeyW: {
      keyCode: 87,
      code: 'KeyW',
      shiftKey: 'W',
      key: 'w'
    },
    KeyX: {
      keyCode: 88,
      code: 'KeyX',
      shiftKey: 'X',
      key: 'x'
    },
    KeyY: {
      keyCode: 89,
      code: 'KeyY',
      shiftKey: 'Y',
      key: 'y'
    },
    KeyZ: {
      keyCode: 90,
      code: 'KeyZ',
      shiftKey: 'Z',
      key: 'z'
    },
    MetaLeft: {
      keyCode: 91,
      code: 'MetaLeft',
      key: 'Meta',
      location: 1
    },
    MetaRight: {
      keyCode: 92,
      code: 'MetaRight',
      key: 'Meta',
      location: 2
    },
    ContextMenu: {
      keyCode: 93,
      code: 'ContextMenu',
      key: 'ContextMenu'
    },
    NumpadMultiply: {
      keyCode: 106,
      code: 'NumpadMultiply',
      key: '*',
      location: 3
    },
    NumpadAdd: {
      keyCode: 107,
      code: 'NumpadAdd',
      key: '+',
      location: 3
    },
    NumpadSubtract: {
      keyCode: 109,
      code: 'NumpadSubtract',
      key: '-',
      location: 3
    },
    NumpadDivide: {
      keyCode: 111,
      code: 'NumpadDivide',
      key: '/',
      location: 3
    },
    F1: {
      keyCode: 112,
      code: 'F1',
      key: 'F1'
    },
    F2: {
      keyCode: 113,
      code: 'F2',
      key: 'F2'
    },
    F3: {
      keyCode: 114,
      code: 'F3',
      key: 'F3'
    },
    F4: {
      keyCode: 115,
      code: 'F4',
      key: 'F4'
    },
    F5: {
      keyCode: 116,
      code: 'F5',
      key: 'F5'
    },
    F6: {
      keyCode: 117,
      code: 'F6',
      key: 'F6'
    },
    F7: {
      keyCode: 118,
      code: 'F7',
      key: 'F7'
    },
    F8: {
      keyCode: 119,
      code: 'F8',
      key: 'F8'
    },
    F9: {
      keyCode: 120,
      code: 'F9',
      key: 'F9'
    },
    F10: {
      keyCode: 121,
      code: 'F10',
      key: 'F10'
    },
    F11: {
      keyCode: 122,
      code: 'F11',
      key: 'F11'
    },
    F12: {
      keyCode: 123,
      code: 'F12',
      key: 'F12'
    },
    F13: {
      keyCode: 124,
      code: 'F13',
      key: 'F13'
    },
    F14: {
      keyCode: 125,
      code: 'F14',
      key: 'F14'
    },
    F15: {
      keyCode: 126,
      code: 'F15',
      key: 'F15'
    },
    F16: {
      keyCode: 127,
      code: 'F16',
      key: 'F16'
    },
    F17: {
      keyCode: 128,
      code: 'F17',
      key: 'F17'
    },
    F18: {
      keyCode: 129,
      code: 'F18',
      key: 'F18'
    },
    F19: {
      keyCode: 130,
      code: 'F19',
      key: 'F19'
    },
    F20: {
      keyCode: 131,
      code: 'F20',
      key: 'F20'
    },
    F21: {
      keyCode: 132,
      code: 'F21',
      key: 'F21'
    },
    F22: {
      keyCode: 133,
      code: 'F22',
      key: 'F22'
    },
    F23: {
      keyCode: 134,
      code: 'F23',
      key: 'F23'
    },
    F24: {
      keyCode: 135,
      code: 'F24',
      key: 'F24'
    },
    NumLock: {
      keyCode: 144,
      code: 'NumLock',
      key: 'NumLock'
    },
    ScrollLock: {
      keyCode: 145,
      code: 'ScrollLock',
      key: 'ScrollLock'
    },
    AudioVolumeMute: {
      keyCode: 173,
      code: 'AudioVolumeMute',
      key: 'AudioVolumeMute'
    },
    AudioVolumeDown: {
      keyCode: 174,
      code: 'AudioVolumeDown',
      key: 'AudioVolumeDown'
    },
    AudioVolumeUp: {
      keyCode: 175,
      code: 'AudioVolumeUp',
      key: 'AudioVolumeUp'
    },
    MediaTrackNext: {
      keyCode: 176,
      code: 'MediaTrackNext',
      key: 'MediaTrackNext'
    },
    MediaTrackPrevious: {
      keyCode: 177,
      code: 'MediaTrackPrevious',
      key: 'MediaTrackPrevious'
    },
    MediaStop: {
      keyCode: 178,
      code: 'MediaStop',
      key: 'MediaStop'
    },
    MediaPlayPause: {
      keyCode: 179,
      code: 'MediaPlayPause',
      key: 'MediaPlayPause'
    },
    Semicolon: {
      keyCode: 186,
      code: 'Semicolon',
      shiftKey: ':',
      key: ';'
    },
    Equal: {
      keyCode: 187,
      code: 'Equal',
      shiftKey: '+',
      key: '='
    },
    NumpadEqual: {
      keyCode: 187,
      code: 'NumpadEqual',
      key: '=',
      location: 3
    },
    Comma: {
      keyCode: 188,
      code: 'Comma',
      shiftKey: '<',
      key: ','
    },
    Minus: {
      keyCode: 189,
      code: 'Minus',
      shiftKey: '_',
      key: '-'
    },
    Period: {
      keyCode: 190,
      code: 'Period',
      shiftKey: '>',
      key: '.'
    },
    Slash: {
      keyCode: 191,
      code: 'Slash',
      shiftKey: '?',
      key: '/'
    },
    Backquote: {
      keyCode: 192,
      code: 'Backquote',
      shiftKey: '~',
      key: '`'
    },
    BracketLeft: {
      keyCode: 219,
      code: 'BracketLeft',
      shiftKey: '{',
      key: '['
    },
    Backslash: {
      keyCode: 220,
      code: 'Backslash',
      shiftKey: '|',
      key: '\\'
    },
    BracketRight: {
      keyCode: 221,
      code: 'BracketRight',
      shiftKey: '}',
      key: ']'
    },
    Quote: {
      keyCode: 222,
      code: 'Quote',
      shiftKey: '"',
      key: "'"
    },
    AltGraph: {
      keyCode: 225,
      code: 'AltGraph',
      key: 'AltGraph'
    },
    Props: {
      keyCode: 247,
      code: 'Props',
      key: 'CrSel'
    },
    Cancel: {
      keyCode: 3,
      key: 'Cancel',
      code: 'Abort'
    },
    Clear: {
      keyCode: 12,
      key: 'Clear',
      code: 'Numpad5',
      location: 3
    },
    Shift: {
      keyCode: 16,
      key: 'Shift',
      code: 'ShiftLeft',
      location: 1
    },
    Control: {
      keyCode: 17,
      key: 'Control',
      code: 'ControlLeft',
      location: 1
    },
    Alt: {
      keyCode: 18,
      key: 'Alt',
      code: 'AltLeft',
      location: 1
    },
    Accept: {
      keyCode: 30,
      key: 'Accept'
    },
    ModeChange: {
      keyCode: 31,
      key: 'ModeChange'
    },
    ' ': {
      keyCode: 32,
      key: ' ',
      code: 'Space'
    },
    Print: {
      keyCode: 42,
      key: 'Print'
    },
    Execute: {
      keyCode: 43,
      key: 'Execute',
      code: 'Open'
    },
    '\u0000': {
      keyCode: 46,
      key: '\u0000',
      code: 'NumpadDecimal',
      location: 3
    },
    a: {
      keyCode: 65,
      key: 'a',
      code: 'KeyA'
    },
    b: {
      keyCode: 66,
      key: 'b',
      code: 'KeyB'
    },
    c: {
      keyCode: 67,
      key: 'c',
      code: 'KeyC'
    },
    d: {
      keyCode: 68,
      key: 'd',
      code: 'KeyD'
    },
    e: {
      keyCode: 69,
      key: 'e',
      code: 'KeyE'
    },
    f: {
      keyCode: 70,
      key: 'f',
      code: 'KeyF'
    },
    g: {
      keyCode: 71,
      key: 'g',
      code: 'KeyG'
    },
    h: {
      keyCode: 72,
      key: 'h',
      code: 'KeyH'
    },
    i: {
      keyCode: 73,
      key: 'i',
      code: 'KeyI'
    },
    j: {
      keyCode: 74,
      key: 'j',
      code: 'KeyJ'
    },
    k: {
      keyCode: 75,
      key: 'k',
      code: 'KeyK'
    },
    l: {
      keyCode: 76,
      key: 'l',
      code: 'KeyL'
    },
    m: {
      keyCode: 77,
      key: 'm',
      code: 'KeyM'
    },
    n: {
      keyCode: 78,
      key: 'n',
      code: 'KeyN'
    },
    o: {
      keyCode: 79,
      key: 'o',
      code: 'KeyO'
    },
    p: {
      keyCode: 80,
      key: 'p',
      code: 'KeyP'
    },
    q: {
      keyCode: 81,
      key: 'q',
      code: 'KeyQ'
    },
    r: {
      keyCode: 82,
      key: 'r',
      code: 'KeyR'
    },
    s: {
      keyCode: 83,
      key: 's',
      code: 'KeyS'
    },
    t: {
      keyCode: 84,
      key: 't',
      code: 'KeyT'
    },
    u: {
      keyCode: 85,
      key: 'u',
      code: 'KeyU'
    },
    v: {
      keyCode: 86,
      key: 'v',
      code: 'KeyV'
    },
    w: {
      keyCode: 87,
      key: 'w',
      code: 'KeyW'
    },
    x: {
      keyCode: 88,
      key: 'x',
      code: 'KeyX'
    },
    y: {
      keyCode: 89,
      key: 'y',
      code: 'KeyY'
    },
    z: {
      keyCode: 90,
      key: 'z',
      code: 'KeyZ'
    },
    Meta: {
      keyCode: 91,
      key: 'Meta',
      code: 'MetaLeft',
      location: 1
    },
    '*': {
      keyCode: 106,
      key: '*',
      code: 'NumpadMultiply',
      location: 3
    },
    '+': {
      keyCode: 107,
      key: '+',
      code: 'NumpadAdd',
      location: 3
    },
    '-': {
      keyCode: 109,
      key: '-',
      code: 'NumpadSubtract',
      location: 3
    },
    '/': {
      keyCode: 111,
      key: '/',
      code: 'NumpadDivide',
      location: 3
    },
    ';': {
      keyCode: 186,
      key: ';',
      code: 'Semicolon'
    },
    '=': {
      keyCode: 187,
      key: '=',
      code: 'Equal'
    },
    ',': {
      keyCode: 188,
      key: ',',
      code: 'Comma'
    },
    '.': {
      keyCode: 190,
      key: '.',
      code: 'Period'
    },
    '`': {
      keyCode: 192,
      key: '`',
      code: 'Backquote'
    },
    '[': {
      keyCode: 219,
      key: '[',
      code: 'BracketLeft'
    },
    '\\': {
      keyCode: 220,
      key: '\\',
      code: 'Backslash'
    },
    ']': {
      keyCode: 221,
      key: ']',
      code: 'BracketRight'
    },
    "'": {
      keyCode: 222,
      key: "'",
      code: 'Quote'
    },
    Attn: {
      keyCode: 246,
      key: 'Attn'
    },
    CrSel: {
      keyCode: 247,
      key: 'CrSel',
      code: 'Props'
    },
    ExSel: {
      keyCode: 248,
      key: 'ExSel'
    },
    EraseEof: {
      keyCode: 249,
      key: 'EraseEof'
    },
    Play: {
      keyCode: 250,
      key: 'Play'
    },
    ZoomOut: {
      keyCode: 251,
      key: 'ZoomOut'
    },
    ')': {
      keyCode: 48,
      key: ')',
      code: 'Digit0'
    },
    '!': {
      keyCode: 49,
      key: '!',
      code: 'Digit1'
    },
    '@': {
      keyCode: 50,
      key: '@',
      code: 'Digit2'
    },
    '#': {
      keyCode: 51,
      key: '#',
      code: 'Digit3'
    },
    $: {
      keyCode: 52,
      key: '$',
      code: 'Digit4'
    },
    '%': {
      keyCode: 53,
      key: '%',
      code: 'Digit5'
    },
    '^': {
      keyCode: 54,
      key: '^',
      code: 'Digit6'
    },
    '&': {
      keyCode: 55,
      key: '&',
      code: 'Digit7'
    },
    '(': {
      keyCode: 57,
      key: '(',
      code: 'Digit9'
    },
    A: {
      keyCode: 65,
      key: 'A',
      code: 'KeyA'
    },
    B: {
      keyCode: 66,
      key: 'B',
      code: 'KeyB'
    },
    C: {
      keyCode: 67,
      key: 'C',
      code: 'KeyC'
    },
    D: {
      keyCode: 68,
      key: 'D',
      code: 'KeyD'
    },
    E: {
      keyCode: 69,
      key: 'E',
      code: 'KeyE'
    },
    F: {
      keyCode: 70,
      key: 'F',
      code: 'KeyF'
    },
    G: {
      keyCode: 71,
      key: 'G',
      code: 'KeyG'
    },
    H: {
      keyCode: 72,
      key: 'H',
      code: 'KeyH'
    },
    I: {
      keyCode: 73,
      key: 'I',
      code: 'KeyI'
    },
    J: {
      keyCode: 74,
      key: 'J',
      code: 'KeyJ'
    },
    K: {
      keyCode: 75,
      key: 'K',
      code: 'KeyK'
    },
    L: {
      keyCode: 76,
      key: 'L',
      code: 'KeyL'
    },
    M: {
      keyCode: 77,
      key: 'M',
      code: 'KeyM'
    },
    N: {
      keyCode: 78,
      key: 'N',
      code: 'KeyN'
    },
    O: {
      keyCode: 79,
      key: 'O',
      code: 'KeyO'
    },
    P: {
      keyCode: 80,
      key: 'P',
      code: 'KeyP'
    },
    Q: {
      keyCode: 81,
      key: 'Q',
      code: 'KeyQ'
    },
    R: {
      keyCode: 82,
      key: 'R',
      code: 'KeyR'
    },
    S: {
      keyCode: 83,
      key: 'S',
      code: 'KeyS'
    },
    T: {
      keyCode: 84,
      key: 'T',
      code: 'KeyT'
    },
    U: {
      keyCode: 85,
      key: 'U',
      code: 'KeyU'
    },
    V: {
      keyCode: 86,
      key: 'V',
      code: 'KeyV'
    },
    W: {
      keyCode: 87,
      key: 'W',
      code: 'KeyW'
    },
    X: {
      keyCode: 88,
      key: 'X',
      code: 'KeyX'
    },
    Y: {
      keyCode: 89,
      key: 'Y',
      code: 'KeyY'
    },
    Z: {
      keyCode: 90,
      key: 'Z',
      code: 'KeyZ'
    },
    ':': {
      keyCode: 186,
      key: ':',
      code: 'Semicolon'
    },
    '<': {
      keyCode: 188,
      key: '<',
      code: 'Comma'
    },
    _: {
      keyCode: 189,
      key: '_',
      code: 'Minus'
    },
    '>': {
      keyCode: 190,
      key: '>',
      code: 'Period'
    },
    '?': {
      keyCode: 191,
      key: '?',
      code: 'Slash'
    },
    '~': {
      keyCode: 192,
      key: '~',
      code: 'Backquote'
    },
    '{': {
      keyCode: 219,
      key: '{',
      code: 'BracketLeft'
    },
    '|': {
      keyCode: 220,
      key: '|',
      code: 'Backslash'
    },
    '}': {
      keyCode: 221,
      key: '}',
      code: 'BracketRight'
    },
    '"': {
      keyCode: 222,
      key: '"',
      code: 'Quote'
    },
    SoftLeft: {
      key: 'SoftLeft',
      code: 'SoftLeft',
      location: 4
    },
    SoftRight: {
      key: 'SoftRight',
      code: 'SoftRight',
      location: 4
    },
    Camera: {
      keyCode: 44,
      key: 'Camera',
      code: 'Camera',
      location: 4
    },
    Call: {
      key: 'Call',
      code: 'Call',
      location: 4
    },
    EndCall: {
      keyCode: 95,
      key: 'EndCall',
      code: 'EndCall',
      location: 4
    },
    VolumeDown: {
      keyCode: 182,
      key: 'VolumeDown',
      code: 'VolumeDown',
      location: 4
    },
    VolumeUp: {
      keyCode: 183,
      key: 'VolumeUp',
      code: 'VolumeUp',
      location: 4
    }
  };

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  var _client11 = /*#__PURE__*/new WeakMap();
  var _pressedKeys = /*#__PURE__*/new WeakMap();
  var _CdpKeyboard_brand = /*#__PURE__*/new WeakSet();
  class CdpKeyboard extends Keyboard {
    constructor(client) {
      super();
      _classPrivateMethodInitSpec(this, _CdpKeyboard_brand);
      _classPrivateFieldInitSpec(this, _client11, void 0);
      _classPrivateFieldInitSpec(this, _pressedKeys, new Set());
      _defineProperty(this, "_modifiers", 0);
      _classPrivateFieldSet(_client11, this, client);
    }
    updateClient(client) {
      _classPrivateFieldSet(_client11, this, client);
    }
    async down(key, options = {
      text: undefined,
      commands: []
    }) {
      const description = _assertClassBrand(_CdpKeyboard_brand, this, _keyDescriptionForString).call(this, key);
      const autoRepeat = _classPrivateFieldGet(_pressedKeys, this).has(description.code);
      _classPrivateFieldGet(_pressedKeys, this).add(description.code);
      this._modifiers |= _assertClassBrand(_CdpKeyboard_brand, this, _modifierBit).call(this, description.key);
      const text = options.text === undefined ? description.text : options.text;
      await _classPrivateFieldGet(_client11, this).send('Input.dispatchKeyEvent', {
        type: text ? 'keyDown' : 'rawKeyDown',
        modifiers: this._modifiers,
        windowsVirtualKeyCode: description.keyCode,
        code: description.code,
        key: description.key,
        text: text,
        unmodifiedText: text,
        autoRepeat,
        location: description.location,
        isKeypad: description.location === 3,
        commands: options.commands
      });
    }
    async up(key) {
      const description = _assertClassBrand(_CdpKeyboard_brand, this, _keyDescriptionForString).call(this, key);
      this._modifiers &= ~_assertClassBrand(_CdpKeyboard_brand, this, _modifierBit).call(this, description.key);
      _classPrivateFieldGet(_pressedKeys, this).delete(description.code);
      await _classPrivateFieldGet(_client11, this).send('Input.dispatchKeyEvent', {
        type: 'keyUp',
        modifiers: this._modifiers,
        key: description.key,
        windowsVirtualKeyCode: description.keyCode,
        code: description.code,
        location: description.location
      });
    }
    async sendCharacter(char) {
      await _classPrivateFieldGet(_client11, this).send('Input.insertText', {
        text: char
      });
    }
    charIsKey(char) {
      return !!_keyDefinitions[char];
    }
    async type(text, options = {}) {
      const delay = options.delay || undefined;
      for (const char of text) {
        if (this.charIsKey(char)) {
          await this.press(char, {
            delay
          });
        } else {
          if (delay) {
            await new Promise(f => {
              return setTimeout(f, delay);
            });
          }
          await this.sendCharacter(char);
        }
      }
    }
    async press(key, options = {}) {
      const {
        delay = null
      } = options;
      await this.down(key, options);
      if (delay) {
        await new Promise(f => {
          return setTimeout(f, options.delay);
        });
      }
      await this.up(key);
    }
  }
  function _modifierBit(key) {
    if (key === 'Alt') {
      return 1;
    }
    if (key === 'Control') {
      return 2;
    }
    if (key === 'Meta') {
      return 4;
    }
    if (key === 'Shift') {
      return 8;
    }
    return 0;
  }
  function _keyDescriptionForString(keyString) {
    const shift = this._modifiers & 8;
    const description = {
      key: '',
      keyCode: 0,
      code: '',
      text: '',
      location: 0
    };
    const definition = _keyDefinitions[keyString];
    assert(definition, `Unknown key: "${keyString}"`);
    if (definition.key) {
      description.key = definition.key;
    }
    if (shift && definition.shiftKey) {
      description.key = definition.shiftKey;
    }
    if (definition.keyCode) {
      description.keyCode = definition.keyCode;
    }
    if (shift && definition.shiftKeyCode) {
      description.keyCode = definition.shiftKeyCode;
    }
    if (definition.code) {
      description.code = definition.code;
    }
    if (definition.location) {
      description.location = definition.location;
    }
    if (description.key.length === 1) {
      description.text = description.key;
    }
    if (definition.text) {
      description.text = definition.text;
    }
    if (shift && definition.shiftText) {
      description.text = definition.shiftText;
    }
    // if any modifiers besides shift are pressed, no text should be sent
    if (this._modifiers & -9) {
      description.text = '';
    }
    return description;
  }
  const getFlag = button => {
    switch (button) {
      case MouseButton.Left:
        return 1 /* MouseButtonFlag.Left */;
      case MouseButton.Right:
        return 2 /* MouseButtonFlag.Right */;
      case MouseButton.Middle:
        return 4 /* MouseButtonFlag.Middle */;
      case MouseButton.Back:
        return 8 /* MouseButtonFlag.Back */;
      case MouseButton.Forward:
        return 16 /* MouseButtonFlag.Forward */;
    }
  };
  /**
   * This should match
   * https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:content/browser/renderer_host/input/web_input_event_builders_mac.mm;drc=a61b95c63b0b75c1cfe872d9c8cdf927c226046e;bpv=1;bpt=1;l=221.
   */
  const getButtonFromPressedButtons = buttons => {
    if (buttons & 1 /* MouseButtonFlag.Left */) {
      return MouseButton.Left;
    } else if (buttons & 2 /* MouseButtonFlag.Right */) {
      return MouseButton.Right;
    } else if (buttons & 4 /* MouseButtonFlag.Middle */) {
      return MouseButton.Middle;
    } else if (buttons & 8 /* MouseButtonFlag.Back */) {
      return MouseButton.Back;
    } else if (buttons & 16 /* MouseButtonFlag.Forward */) {
      return MouseButton.Forward;
    }
    return 'none';
  };
  /**
   * @internal
   */
  var _client12 = /*#__PURE__*/new WeakMap();
  var _keyboard = /*#__PURE__*/new WeakMap();
  var _state2 = /*#__PURE__*/new WeakMap();
  var _CdpMouse_brand = /*#__PURE__*/new WeakSet();
  var _transactions = /*#__PURE__*/new WeakMap();
  class CdpMouse extends Mouse {
    constructor(client, keyboard) {
      super();
      _classPrivateMethodInitSpec(this, _CdpMouse_brand);
      _classPrivateFieldInitSpec(this, _client12, void 0);
      _classPrivateFieldInitSpec(this, _keyboard, void 0);
      _classPrivateFieldInitSpec(this, _state2, {
        position: {
          x: 0,
          y: 0
        },
        buttons: 0 /* MouseButtonFlag.None */
      });
      // Transactions can run in parallel, so we store each of thme in this array.
      _classPrivateFieldInitSpec(this, _transactions, []);
      _classPrivateFieldSet(_client12, this, client);
      _classPrivateFieldSet(_keyboard, this, keyboard);
    }
    updateClient(client) {
      _classPrivateFieldSet(_client12, this, client);
    }
    async reset() {
      const actions = [];
      for (const [flag, button] of [[1 /* MouseButtonFlag.Left */, MouseButton.Left], [4 /* MouseButtonFlag.Middle */, MouseButton.Middle], [2 /* MouseButtonFlag.Right */, MouseButton.Right], [16 /* MouseButtonFlag.Forward */, MouseButton.Forward], [8 /* MouseButtonFlag.Back */, MouseButton.Back]]) {
        if (_classPrivateGetter(_CdpMouse_brand, this, _get_state).buttons & flag) {
          actions.push(this.up({
            button: button
          }));
        }
      }
      if (_classPrivateGetter(_CdpMouse_brand, this, _get_state).position.x !== 0 || _classPrivateGetter(_CdpMouse_brand, this, _get_state).position.y !== 0) {
        actions.push(this.move(0, 0));
      }
      await Promise.all(actions);
    }
    async move(x, y, options = {}) {
      const {
        steps = 1
      } = options;
      const from = _classPrivateGetter(_CdpMouse_brand, this, _get_state).position;
      const to = {
        x,
        y
      };
      for (let i = 1; i <= steps; i++) {
        await _assertClassBrand(_CdpMouse_brand, this, _withTransaction).call(this, updateState => {
          updateState({
            position: {
              x: from.x + (to.x - from.x) * (i / steps),
              y: from.y + (to.y - from.y) * (i / steps)
            }
          });
          const {
            buttons,
            position
          } = _classPrivateGetter(_CdpMouse_brand, this, _get_state);
          return _classPrivateFieldGet(_client12, this).send('Input.dispatchMouseEvent', {
            type: 'mouseMoved',
            modifiers: _classPrivateFieldGet(_keyboard, this)._modifiers,
            buttons,
            button: getButtonFromPressedButtons(buttons),
            ...position
          });
        });
      }
    }
    async down(options = {}) {
      const {
        button = MouseButton.Left,
        clickCount = 1
      } = options;
      const flag = getFlag(button);
      if (!flag) {
        throw new Error(`Unsupported mouse button: ${button}`);
      }
      if (_classPrivateGetter(_CdpMouse_brand, this, _get_state).buttons & flag) {
        throw new Error(`'${button}' is already pressed.`);
      }
      await _assertClassBrand(_CdpMouse_brand, this, _withTransaction).call(this, updateState => {
        updateState({
          buttons: _classPrivateGetter(_CdpMouse_brand, this, _get_state).buttons | flag
        });
        const {
          buttons,
          position
        } = _classPrivateGetter(_CdpMouse_brand, this, _get_state);
        return _classPrivateFieldGet(_client12, this).send('Input.dispatchMouseEvent', {
          type: 'mousePressed',
          modifiers: _classPrivateFieldGet(_keyboard, this)._modifiers,
          clickCount,
          buttons,
          button,
          ...position
        });
      });
    }
    async up(options = {}) {
      const {
        button = MouseButton.Left,
        clickCount = 1
      } = options;
      const flag = getFlag(button);
      if (!flag) {
        throw new Error(`Unsupported mouse button: ${button}`);
      }
      if (!(_classPrivateGetter(_CdpMouse_brand, this, _get_state).buttons & flag)) {
        throw new Error(`'${button}' is not pressed.`);
      }
      await _assertClassBrand(_CdpMouse_brand, this, _withTransaction).call(this, updateState => {
        updateState({
          buttons: _classPrivateGetter(_CdpMouse_brand, this, _get_state).buttons & ~flag
        });
        const {
          buttons,
          position
        } = _classPrivateGetter(_CdpMouse_brand, this, _get_state);
        return _classPrivateFieldGet(_client12, this).send('Input.dispatchMouseEvent', {
          type: 'mouseReleased',
          modifiers: _classPrivateFieldGet(_keyboard, this)._modifiers,
          clickCount,
          buttons,
          button,
          ...position
        });
      });
    }
    async click(x, y, options = {}) {
      const {
        delay,
        count = 1
      } = options;
      if (count < 1) {
        throw new Error('Click must occur a positive number of times.');
      }
      const actions = [this.move(x, y)];
      for (let i = 1; i < count; ++i) {
        actions.push(this.down({
          ...options,
          clickCount: i
        }), this.up({
          ...options,
          clickCount: i
        }));
      }
      actions.push(this.down({
        ...options,
        clickCount: count
      }));
      if (typeof delay === 'number') {
        await Promise.all(actions);
        actions.length = 0;
        await new Promise(resolve => {
          setTimeout(resolve, delay);
        });
      }
      actions.push(this.up({
        ...options,
        clickCount: count
      }));
      await Promise.all(actions);
    }
    async wheel(options = {}) {
      const {
        deltaX = 0,
        deltaY = 0
      } = options;
      const {
        position,
        buttons
      } = _classPrivateGetter(_CdpMouse_brand, this, _get_state);
      await _classPrivateFieldGet(_client12, this).send('Input.dispatchMouseEvent', {
        type: 'mouseWheel',
        pointerType: 'mouse',
        modifiers: _classPrivateFieldGet(_keyboard, this)._modifiers,
        deltaY,
        deltaX,
        buttons,
        ...position
      });
    }
    async drag(start, target) {
      const promise = new Promise(resolve => {
        _classPrivateFieldGet(_client12, this).once('Input.dragIntercepted', event => {
          return resolve(event.data);
        });
      });
      await this.move(start.x, start.y);
      await this.down();
      await this.move(target.x, target.y);
      return await promise;
    }
    async dragEnter(target, data) {
      await _classPrivateFieldGet(_client12, this).send('Input.dispatchDragEvent', {
        type: 'dragEnter',
        x: target.x,
        y: target.y,
        modifiers: _classPrivateFieldGet(_keyboard, this)._modifiers,
        data
      });
    }
    async dragOver(target, data) {
      await _classPrivateFieldGet(_client12, this).send('Input.dispatchDragEvent', {
        type: 'dragOver',
        x: target.x,
        y: target.y,
        modifiers: _classPrivateFieldGet(_keyboard, this)._modifiers,
        data
      });
    }
    async drop(target, data) {
      await _classPrivateFieldGet(_client12, this).send('Input.dispatchDragEvent', {
        type: 'drop',
        x: target.x,
        y: target.y,
        modifiers: _classPrivateFieldGet(_keyboard, this)._modifiers,
        data
      });
    }
    async dragAndDrop(start, target, options = {}) {
      const {
        delay = null
      } = options;
      const data = await this.drag(start, target);
      await this.dragEnter(target, data);
      await this.dragOver(target, data);
      if (delay) {
        await new Promise(resolve => {
          return setTimeout(resolve, delay);
        });
      }
      await this.drop(target, data);
      await this.up();
    }
  }
  /**
   * @internal
   */
  function _get_state(_this13) {
    return Object.assign({
      ..._classPrivateFieldGet(_state2, _this13)
    }, ..._classPrivateFieldGet(_transactions, _this13));
  }
  function _createTransaction() {
    const transaction = {};
    _classPrivateFieldGet(_transactions, this).push(transaction);
    const popTransaction = () => {
      _classPrivateFieldGet(_transactions, this).splice(_classPrivateFieldGet(_transactions, this).indexOf(transaction), 1);
    };
    return {
      update: updates => {
        Object.assign(transaction, updates);
      },
      commit: () => {
        _classPrivateFieldSet(_state2, this, {
          ..._classPrivateFieldGet(_state2, this),
          ...transaction
        });
        popTransaction();
      },
      rollback: popTransaction
    };
  }
  /**
   * This is a shortcut for a typical update, commit/rollback lifecycle based on
   * the error of the action.
   */
  async function _withTransaction(action) {
    const {
      update,
      commit,
      rollback
    } = _assertClassBrand(_CdpMouse_brand, this, _createTransaction).call(this);
    try {
      await action(update);
      commit();
    } catch (error) {
      rollback();
      throw error;
    }
  }
  var _started = /*#__PURE__*/new WeakMap();
  var _touchScreen = /*#__PURE__*/new WeakMap();
  var _touchPoint = /*#__PURE__*/new WeakMap();
  var _client13 = /*#__PURE__*/new WeakMap();
  var _keyboard2 = /*#__PURE__*/new WeakMap();
  class CdpTouchHandle {
    constructor(client, touchScreen, keyboard, touchPoint) {
      _classPrivateFieldInitSpec(this, _started, false);
      _classPrivateFieldInitSpec(this, _touchScreen, void 0);
      _classPrivateFieldInitSpec(this, _touchPoint, void 0);
      _classPrivateFieldInitSpec(this, _client13, void 0);
      _classPrivateFieldInitSpec(this, _keyboard2, void 0);
      _classPrivateFieldSet(_client13, this, client);
      _classPrivateFieldSet(_touchScreen, this, touchScreen);
      _classPrivateFieldSet(_keyboard2, this, keyboard);
      _classPrivateFieldSet(_touchPoint, this, touchPoint);
    }
    updateClient(client) {
      _classPrivateFieldSet(_client13, this, client);
    }
    async start() {
      if (_classPrivateFieldGet(_started, this)) {
        throw new TouchError('Touch has already started');
      }
      await _classPrivateFieldGet(_client13, this).send('Input.dispatchTouchEvent', {
        type: 'touchStart',
        touchPoints: [_classPrivateFieldGet(_touchPoint, this)],
        modifiers: _classPrivateFieldGet(_keyboard2, this)._modifiers
      });
      _classPrivateFieldSet(_started, this, true);
    }
    move(x, y) {
      _classPrivateFieldGet(_touchPoint, this).x = Math.round(x);
      _classPrivateFieldGet(_touchPoint, this).y = Math.round(y);
      return _classPrivateFieldGet(_client13, this).send('Input.dispatchTouchEvent', {
        type: 'touchMove',
        touchPoints: [_classPrivateFieldGet(_touchPoint, this)],
        modifiers: _classPrivateFieldGet(_keyboard2, this)._modifiers
      });
    }
    async end() {
      await _classPrivateFieldGet(_client13, this).send('Input.dispatchTouchEvent', {
        type: 'touchEnd',
        touchPoints: [_classPrivateFieldGet(_touchPoint, this)],
        modifiers: _classPrivateFieldGet(_keyboard2, this)._modifiers
      });
      _classPrivateFieldGet(_touchScreen, this).removeHandle(this);
    }
  }
  /**
   * @internal
   */
  var _client14 = /*#__PURE__*/new WeakMap();
  var _keyboard3 = /*#__PURE__*/new WeakMap();
  class CdpTouchscreen extends Touchscreen {
    constructor(client, keyboard) {
      super();
      _classPrivateFieldInitSpec(this, _client14, void 0);
      _classPrivateFieldInitSpec(this, _keyboard3, void 0);
      _classPrivateFieldSet(_client14, this, client);
      _classPrivateFieldSet(_keyboard3, this, keyboard);
    }
    updateClient(client) {
      _classPrivateFieldSet(_client14, this, client);
      this.touches.forEach(t => {
        t.updateClient(client);
      });
    }
    async touchStart(x, y) {
      const id = this.idGenerator();
      const touchPoint = {
        x: Math.round(x),
        y: Math.round(y),
        radiusX: 0.5,
        radiusY: 0.5,
        force: 0.5,
        id
      };
      const touch = new CdpTouchHandle(_classPrivateFieldGet(_client14, this), this, _classPrivateFieldGet(_keyboard3, this), touchPoint);
      await touch.start();
      this.touches.push(touch);
      return touch;
    }
  }

  /**
   * The Tracing class exposes the tracing audit interface.
   * @remarks
   * You can use `tracing.start` and `tracing.stop` to create a trace file
   * which can be opened in Chrome DevTools or {@link https://chromedevtools.github.io/timeline-viewer/ | timeline viewer}.
   *
   * @example
   *
   * ```ts
   * await page.tracing.start({path: 'trace.json'});
   * await page.goto('https://www.google.com');
   * await page.tracing.stop();
   * ```
   *
   * @public
   */
  var _client15 = /*#__PURE__*/new WeakMap();
  var _recording = /*#__PURE__*/new WeakMap();
  var _path2 = /*#__PURE__*/new WeakMap();
  class Tracing {
    /**
     * @internal
     */
    constructor(client) {
      _classPrivateFieldInitSpec(this, _client15, void 0);
      _classPrivateFieldInitSpec(this, _recording, false);
      _classPrivateFieldInitSpec(this, _path2, void 0);
      _classPrivateFieldSet(_client15, this, client);
    }
    /**
     * @internal
     */
    updateClient(client) {
      _classPrivateFieldSet(_client15, this, client);
    }
    /**
     * Starts a trace for the current page.
     * @remarks
     * Only one trace can be active at a time per browser.
     *
     * @param options - Optional `TracingOptions`.
     */
    async start(options = {}) {
      assert(!_classPrivateFieldGet(_recording, this), 'Cannot start recording trace while already recording trace.');
      const defaultCategories = ['-*', 'devtools.timeline', 'v8.execute', 'disabled-by-default-devtools.timeline', 'disabled-by-default-devtools.timeline.frame', 'toplevel', 'blink.console', 'blink.user_timing', 'latencyInfo', 'disabled-by-default-devtools.timeline.stack', 'disabled-by-default-v8.cpu_profiler'];
      const {
        path,
        screenshots = false,
        categories = defaultCategories
      } = options;
      if (screenshots) {
        categories.push('disabled-by-default-devtools.screenshot');
      }
      const excludedCategories = categories.filter(cat => {
        return cat.startsWith('-');
      }).map(cat => {
        return cat.slice(1);
      });
      const includedCategories = categories.filter(cat => {
        return !cat.startsWith('-');
      });
      _classPrivateFieldSet(_path2, this, path);
      _classPrivateFieldSet(_recording, this, true);
      await _classPrivateFieldGet(_client15, this).send('Tracing.start', {
        transferMode: 'ReturnAsStream',
        traceConfig: {
          excludedCategories,
          includedCategories
        }
      });
    }
    /**
     * Stops a trace started with the `start` method.
     * @returns Promise which resolves to buffer with trace data.
     */
    async stop() {
      const contentDeferred = Deferred.create();
      _classPrivateFieldGet(_client15, this).once('Tracing.tracingComplete', async event => {
        try {
          assert(event.stream, 'Missing "stream"');
          const readable = await getReadableFromProtocolStream(_classPrivateFieldGet(_client15, this), event.stream);
          const typedArray = await getReadableAsTypedArray(readable, _classPrivateFieldGet(_path2, this));
          contentDeferred.resolve(typedArray ?? undefined);
        } catch (error) {
          if (isErrorLike(error)) {
            contentDeferred.reject(error);
          } else {
            contentDeferred.reject(new Error(`Unknown error: ${error}`));
          }
        }
      });
      await _classPrivateFieldGet(_client15, this).send('Tracing.end');
      _classPrivateFieldSet(_recording, this, false);
      return await contentDeferred.valueOrThrow();
    }
  }

  /**
   * @license
   * Copyright 2026 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Represents a registered WebMCP tool available on the page.
   *
   * @public
   */
  var _webmcp = /*#__PURE__*/new WeakMap();
  var _backendNodeId2 = /*#__PURE__*/new WeakMap();
  var _formElement = /*#__PURE__*/new WeakMap();
  class WebMCPTool extends EventEmitter {
    /**
     * @internal
     */
    constructor(webmcp, tool, frame) {
      super();
      _classPrivateFieldInitSpec(this, _webmcp, void 0);
      _classPrivateFieldInitSpec(this, _backendNodeId2, void 0);
      _classPrivateFieldInitSpec(this, _formElement, void 0);
      /**
       * Tool name.
       */
      _defineProperty(this, "name", void 0);
      /**
       * Tool description.
       */
      _defineProperty(this, "description", void 0);
      /**
       * Schema for the tool's input parameters.
       */
      _defineProperty(this, "inputSchema", void 0);
      /**
       * Optional annotations for the tool.
       */
      _defineProperty(this, "annotations", void 0);
      /**
       * Frame the tool was defined for.
       */
      _defineProperty(this, "frame", void 0);
      /**
       * Source location that defined the tool (if available).
       */
      _defineProperty(this, "location", void 0);
      /**
       * @internal
       */
      _defineProperty(this, "rawStackTrace", void 0);
      _classPrivateFieldSet(_webmcp, this, webmcp);
      this.name = tool.name;
      this.description = tool.description;
      this.inputSchema = tool.inputSchema;
      this.annotations = tool.annotations;
      this.frame = frame;
      _classPrivateFieldSet(_backendNodeId2, this, tool.backendNodeId);
      if (tool.stackTrace?.callFrames.length) {
        this.location = {
          url: tool.stackTrace.callFrames[0].url,
          lineNumber: tool.stackTrace.callFrames[0].lineNumber,
          columnNumber: tool.stackTrace.callFrames[0].columnNumber
        };
      }
      this.rawStackTrace = tool.stackTrace;
    }
    /**
     * The corresponding ElementHandle when tool was registered via a form.
     */
    get formElement() {
      return (async () => {
        if (_classPrivateFieldGet(_formElement, this) && !_classPrivateFieldGet(_formElement, this).disposed) {
          return _classPrivateFieldGet(_formElement, this);
        }
        if (!_classPrivateFieldGet(_backendNodeId2, this)) {
          return undefined;
        }
        _classPrivateFieldSet(_formElement, this, await this.frame.worlds[MAIN_WORLD].adoptBackendNode(_classPrivateFieldGet(_backendNodeId2, this)));
        return _classPrivateFieldGet(_formElement, this);
      })();
    }
    /**
     * Executes tool with input parameters, matching tool's `inputSchema`.
     */
    async execute(input = {}) {
      const {
        invocationId
      } = await _classPrivateFieldGet(_webmcp, this).invokeTool(this, input);
      return await new Promise(resolve => {
        const handler = event => {
          if (event.id === invocationId) {
            _classPrivateFieldGet(_webmcp, this).off('toolresponded', handler);
            resolve(event);
          }
        };
        _classPrivateFieldGet(_webmcp, this).on('toolresponded', handler);
      });
    }
  }
  /**
   * @public
   */
  class WebMCPToolCall {
    /**
     * @internal
     */
    constructor(invocationId, tool, input) {
      /**
       * Tool invocation identifier.
       */
      _defineProperty(this, "id", void 0);
      /**
       * Tool that was called.
       */
      _defineProperty(this, "tool", void 0);
      /**
       * The input parameters used for the call.
       */
      _defineProperty(this, "input", void 0);
      this.id = invocationId;
      this.tool = tool;
      try {
        this.input = JSON.parse(input);
      } catch (error) {
        this.input = {};
        debugError(error);
      }
    }
  }
  /**
   * The experimental WebMCP class provides an API for the WebMCP API.
   *
   * See the
   * {@link https://pptr.dev/guides/webmcp|WebMCP guide}
   * for more details.
   *
   * @example
   *
   * ```ts
   * await page.goto('https://www.example.com');
   * const tools = page.webmcp.tools();
   * for (const tool of tools) {
   *   console.log(`Tool found: ${tool.name} - ${tool.description}`);
   * }
   * ```
   *
   * @experimental
   * @public
   */
  var _client16 = /*#__PURE__*/new WeakMap();
  var _frameManager2 = /*#__PURE__*/new WeakMap();
  var _tools = /*#__PURE__*/new WeakMap();
  var _pendingCalls = /*#__PURE__*/new WeakMap();
  var _onToolsAdded = /*#__PURE__*/new WeakMap();
  var _onToolsRemoved = /*#__PURE__*/new WeakMap();
  var _onToolInvoked = /*#__PURE__*/new WeakMap();
  var _onToolResponded = /*#__PURE__*/new WeakMap();
  var _onFrameNavigated2 = /*#__PURE__*/new WeakMap();
  var _WebMCP_brand = /*#__PURE__*/new WeakSet();
  class WebMCP extends EventEmitter {
    /**
     * @internal
     */
    constructor(client, frameManager) {
      super();
      _classPrivateMethodInitSpec(this, _WebMCP_brand);
      _classPrivateFieldInitSpec(this, _client16, void 0);
      _classPrivateFieldInitSpec(this, _frameManager2, void 0);
      _classPrivateFieldInitSpec(this, _tools, new Map());
      _classPrivateFieldInitSpec(this, _pendingCalls, new Map());
      _classPrivateFieldInitSpec(this, _onToolsAdded, event => {
        const tools = [];
        for (const tool of event.tools) {
          const frame = _classPrivateFieldGet(_frameManager2, this).frame(tool.frameId);
          if (!frame) {
            continue;
          }
          const frameTools = _classPrivateFieldGet(_tools, this).get(tool.frameId) ?? new Map();
          if (!_classPrivateFieldGet(_tools, this).has(tool.frameId)) {
            _classPrivateFieldGet(_tools, this).set(tool.frameId, frameTools);
          }
          const addedTool = new WebMCPTool(this, tool, frame);
          frameTools.set(tool.name, addedTool);
          tools.push(addedTool);
        }
        this.emit('toolsadded', {
          tools
        });
      });
      _classPrivateFieldInitSpec(this, _onToolsRemoved, event => {
        const tools = [];
        event.tools.forEach(tool => {
          const removedTool = _classPrivateFieldGet(_tools, this).get(tool.frameId)?.get(tool.name);
          if (removedTool) {
            tools.push(removedTool);
          }
          _classPrivateFieldGet(_tools, this).get(tool.frameId)?.delete(tool.name);
        });
        this.emit('toolsremoved', {
          tools
        });
      });
      _classPrivateFieldInitSpec(this, _onToolInvoked, event => {
        const tool = _classPrivateFieldGet(_tools, this).get(event.frameId)?.get(event.toolName);
        if (!tool) {
          return;
        }
        const call = new WebMCPToolCall(event.invocationId, tool, event.input);
        _classPrivateFieldGet(_pendingCalls, this).set(call.id, call);
        tool.emit('toolinvoked', call);
        this.emit('toolinvoked', call);
      });
      _classPrivateFieldInitSpec(this, _onToolResponded, event => {
        const call = _classPrivateFieldGet(_pendingCalls, this).get(event.invocationId);
        if (call) {
          _classPrivateFieldGet(_pendingCalls, this).delete(event.invocationId);
        }
        const response = {
          id: event.invocationId,
          call: call,
          status: event.status,
          output: event.output,
          errorText: event.errorText,
          exception: event.exception
        };
        this.emit('toolresponded', response);
      });
      _classPrivateFieldInitSpec(this, _onFrameNavigated2, frame => {
        _classPrivateFieldGet(_pendingCalls, this).clear();
        const frameTools = _classPrivateFieldGet(_tools, this).get(frame._id);
        if (!frameTools) {
          return;
        }
        const tools = Array.from(frameTools.values());
        _classPrivateFieldGet(_tools, this).delete(frame._id);
        if (tools.length) {
          this.emit('toolsremoved', {
            tools
          });
        }
      });
      _classPrivateFieldSet(_client16, this, client);
      _classPrivateFieldSet(_frameManager2, this, frameManager);
      _classPrivateFieldGet(_frameManager2, this).on(exports.FrameManagerEvent.FrameNavigated, _classPrivateFieldGet(_onFrameNavigated2, this));
      _assertClassBrand(_WebMCP_brand, this, _bindListeners).call(this);
    }
    /**
     * @internal
     */
    async initialize() {
      return await _classPrivateFieldGet(_client16, this).send('WebMCP.enable').catch(debugError);
    }
    /**
     * @internal
     */
    async invokeTool(tool, input) {
      // @ts-expect-error WebMCP is not yet in the Protocol types.
      return await _classPrivateFieldGet(_client16, this).send('WebMCP.invokeTool', {
        frameId: tool.frame._id,
        toolName: tool.name,
        input
      });
    }
    /**
     * Gets all WebMCP tools defined by the page.
     */
    tools() {
      return Array.from(_classPrivateFieldGet(_tools, this).values()).flatMap(toolMap => {
        return Array.from(toolMap.values());
      });
    }
    /**
     * @internal
     */
    updateClient(client) {
      _classPrivateFieldGet(_client16, this).off('WebMCP.toolsAdded', _classPrivateFieldGet(_onToolsAdded, this));
      _classPrivateFieldGet(_client16, this).off('WebMCP.toolsRemoved', _classPrivateFieldGet(_onToolsRemoved, this));
      _classPrivateFieldGet(_client16, this).off('WebMCP.toolInvoked', _classPrivateFieldGet(_onToolInvoked, this));
      // @ts-expect-error M148 has non-final status type, update expected in M149
      _classPrivateFieldGet(_client16, this).off('WebMCP.toolResponded', _classPrivateFieldGet(_onToolResponded, this));
      _classPrivateFieldSet(_client16, this, client);
      _assertClassBrand(_WebMCP_brand, this, _bindListeners).call(this);
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  function _bindListeners() {
    _classPrivateFieldGet(_client16, this).on('WebMCP.toolsAdded', _classPrivateFieldGet(_onToolsAdded, this));
    _classPrivateFieldGet(_client16, this).on('WebMCP.toolsRemoved', _classPrivateFieldGet(_onToolsRemoved, this));
    _classPrivateFieldGet(_client16, this).on('WebMCP.toolInvoked', _classPrivateFieldGet(_onToolInvoked, this));
    // @ts-expect-error M148 has non-final status type, update expected in M149
    _classPrivateFieldGet(_client16, this).on('WebMCP.toolResponded', _classPrivateFieldGet(_onToolResponded, this));
  }
  var __addDisposableResource$1 = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources$1 = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  /**
   * @internal
   */
  function convertSameSiteFromPuppeteerToCdp(sameSite) {
    switch (sameSite) {
      case 'Strict':
      case 'Lax':
      case 'None':
        return sameSite;
      default:
        return undefined;
    }
  }
  /**
   * @internal
   */
  var _closed2 = /*#__PURE__*/new WeakMap();
  var _targetManager = /*#__PURE__*/new WeakMap();
  var _cdpBluetoothEmulation = /*#__PURE__*/new WeakMap();
  var _primaryTargetClient = /*#__PURE__*/new WeakMap();
  var _primaryTarget = /*#__PURE__*/new WeakMap();
  var _tabTargetClient = /*#__PURE__*/new WeakMap();
  var _tabTarget = /*#__PURE__*/new WeakMap();
  var _keyboard4 = /*#__PURE__*/new WeakMap();
  var _mouse = /*#__PURE__*/new WeakMap();
  var _touchscreen = /*#__PURE__*/new WeakMap();
  var _frameManager3 = /*#__PURE__*/new WeakMap();
  var _emulationManager = /*#__PURE__*/new WeakMap();
  var _tracing = /*#__PURE__*/new WeakMap();
  var _webmcp2 = /*#__PURE__*/new WeakMap();
  var _bindings3 = /*#__PURE__*/new WeakMap();
  var _exposedFunctions = /*#__PURE__*/new WeakMap();
  var _coverage = /*#__PURE__*/new WeakMap();
  var _viewport = /*#__PURE__*/new WeakMap();
  var _workers = /*#__PURE__*/new WeakMap();
  var _fileChooserDeferreds = /*#__PURE__*/new WeakMap();
  var _sessionCloseDeferred = /*#__PURE__*/new WeakMap();
  var _serviceWorkerBypassed = /*#__PURE__*/new WeakMap();
  var _userDragInterceptionEnabled = /*#__PURE__*/new WeakMap();
  var _CdpPage_brand = /*#__PURE__*/new WeakSet();
  var _onDetachedFromTarget = /*#__PURE__*/new WeakMap();
  var _onAttachedToTarget = /*#__PURE__*/new WeakMap();
  class CdpPage extends Page {
    static async _create(client, target, defaultViewport) {
      const page = new CdpPage(client, target);
      await _assertClassBrand(_CdpPage_brand, page, _initialize).call(page);
      if (defaultViewport) {
        try {
          await page.setViewport(defaultViewport);
        } catch (err) {
          if (isErrorLike(err) && isTargetClosedError(err)) {
            debugError(err);
          } else {
            throw err;
          }
        }
      }
      return page;
    }
    constructor(client, _target2) {
      super();
      _classPrivateMethodInitSpec(this, _CdpPage_brand);
      _classPrivateFieldInitSpec(this, _closed2, false);
      _classPrivateFieldInitSpec(this, _targetManager, void 0);
      _classPrivateFieldInitSpec(this, _cdpBluetoothEmulation, void 0);
      _classPrivateFieldInitSpec(this, _primaryTargetClient, void 0);
      _classPrivateFieldInitSpec(this, _primaryTarget, void 0);
      _classPrivateFieldInitSpec(this, _tabTargetClient, void 0);
      _classPrivateFieldInitSpec(this, _tabTarget, void 0);
      _classPrivateFieldInitSpec(this, _keyboard4, void 0);
      _classPrivateFieldInitSpec(this, _mouse, void 0);
      _classPrivateFieldInitSpec(this, _touchscreen, void 0);
      _classPrivateFieldInitSpec(this, _frameManager3, void 0);
      _classPrivateFieldInitSpec(this, _emulationManager, void 0);
      _classPrivateFieldInitSpec(this, _tracing, void 0);
      _classPrivateFieldInitSpec(this, _webmcp2, void 0);
      _classPrivateFieldInitSpec(this, _bindings3, new Map());
      _classPrivateFieldInitSpec(this, _exposedFunctions, new Map());
      _classPrivateFieldInitSpec(this, _coverage, void 0);
      _classPrivateFieldInitSpec(this, _viewport, void 0);
      _classPrivateFieldInitSpec(this, _workers, new Map());
      _classPrivateFieldInitSpec(this, _fileChooserDeferreds, new Set());
      _classPrivateFieldInitSpec(this, _sessionCloseDeferred, Deferred.create());
      _classPrivateFieldInitSpec(this, _serviceWorkerBypassed, false);
      _classPrivateFieldInitSpec(this, _userDragInterceptionEnabled, false);
      _classPrivateFieldInitSpec(this, _onDetachedFromTarget, target => {
        const sessionId = target._session()?.id();
        const worker = _classPrivateFieldGet(_workers, this).get(sessionId);
        if (!worker) {
          return;
        }
        _classPrivateFieldGet(_workers, this).delete(sessionId);
        this.emit("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker);
      });
      _classPrivateFieldInitSpec(this, _onAttachedToTarget, session => {
        assert(session instanceof CdpCDPSession);
        _classPrivateFieldGet(_frameManager3, this).onAttachedToTarget(session.target());
        if (session.target()._getTargetInfo().type === 'worker') {
          const worker = new CdpWebWorker(session, session.target().url(), session.target()._targetId, session.target().type(), _assertClassBrand(_CdpPage_brand, this, _handleException).bind(this), _classPrivateFieldGet(_frameManager3, this).networkManager);
          _classPrivateFieldGet(_workers, this).set(session.id(), worker);
          worker.internalEmitter.on(exports.WebWorkerEvent.Console, message => {
            const noListenersForConsoleOnPage = this.listenerCount("console" /* PageEvent.Console */) === 0;
            const noListenersForConsoleOnWorker = worker.listenerCount(exports.WebWorkerEvent.Console) === 0;
            if (noListenersForConsoleOnPage && noListenersForConsoleOnWorker) {
              // eslint-disable-next-line max-len -- The comment is long.
              // eslint-disable-next-line @puppeteer/use-using -- These are not owned by this function.
              for (const arg of message.args()) {
                void arg.dispose().catch(debugError);
              }
              return;
            }
            if (!noListenersForConsoleOnPage) {
              this.emit("console" /* PageEvent.Console */, message);
            }
          });
          this.emit("workercreated" /* PageEvent.WorkerCreated */, worker);
        }
        session.on(exports.CDPSessionEvent.Ready, _classPrivateFieldGet(_onAttachedToTarget, this));
      });
      _classPrivateFieldSet(_primaryTargetClient, this, client);
      _classPrivateFieldSet(_tabTargetClient, this, client.parentSession());
      assert(_classPrivateFieldGet(_tabTargetClient, this), 'Tab target session is not defined.');
      _classPrivateFieldSet(_tabTarget, this, _classPrivateFieldGet(_tabTargetClient, this).target());
      assert(_classPrivateFieldGet(_tabTarget, this), 'Tab target is not defined.');
      this._tabId = _classPrivateFieldGet(_tabTarget, this)._getTargetInfo().targetId;
      _classPrivateFieldSet(_primaryTarget, this, _target2);
      _classPrivateFieldSet(_targetManager, this, _target2._targetManager());
      _classPrivateFieldSet(_keyboard4, this, new CdpKeyboard(client));
      _classPrivateFieldSet(_mouse, this, new CdpMouse(client, _classPrivateFieldGet(_keyboard4, this)));
      _classPrivateFieldSet(_touchscreen, this, new CdpTouchscreen(client, _classPrivateFieldGet(_keyboard4, this)));
      _classPrivateFieldSet(_frameManager3, this, new FrameManager(client, this, this._timeoutSettings));
      _classPrivateFieldSet(_emulationManager, this, new EmulationManager(client));
      _classPrivateFieldSet(_tracing, this, new Tracing(client));
      _classPrivateFieldSet(_webmcp2, this, new WebMCP(client, _classPrivateFieldGet(_frameManager3, this)));
      _classPrivateFieldSet(_coverage, this, new Coverage(client));
      _classPrivateFieldSet(_viewport, this, null);
      // Use browser context's connection, as current Bluetooth emulation in Chromium is
      // implemented on the browser context level, and not tight to the specific tab.
      _classPrivateFieldSet(_cdpBluetoothEmulation, this, new CdpBluetoothEmulation(_classPrivateFieldGet(_primaryTargetClient, this).connection()));
      const frameManagerEmitter = new EventEmitter(_classPrivateFieldGet(_frameManager3, this));
      frameManagerEmitter.on(exports.FrameManagerEvent.FrameAttached, frame => {
        this.emit("frameattached" /* PageEvent.FrameAttached */, frame);
      });
      frameManagerEmitter.on(exports.FrameManagerEvent.FrameDetached, frame => {
        this.emit("framedetached" /* PageEvent.FrameDetached */, frame);
      });
      frameManagerEmitter.on(exports.FrameManagerEvent.FrameNavigated, frame => {
        this.emit("framenavigated" /* PageEvent.FrameNavigated */, frame);
      });
      frameManagerEmitter.on(exports.FrameManagerEvent.ConsoleApiCalled, ([world, event]) => {
        _assertClassBrand(_CdpPage_brand, this, _onConsoleAPI2).call(this, world, event);
      });
      frameManagerEmitter.on(exports.FrameManagerEvent.BindingCalled, ([world, event]) => {
        void _assertClassBrand(_CdpPage_brand, this, _onBindingCalled2).call(this, world, event);
      });
      const networkManagerEmitter = new EventEmitter(_classPrivateFieldGet(_frameManager3, this).networkManager);
      networkManagerEmitter.on(exports.NetworkManagerEvent.Request, request => {
        this.emit("request" /* PageEvent.Request */, request);
      });
      networkManagerEmitter.on(exports.NetworkManagerEvent.RequestServedFromCache, request => {
        this.emit("requestservedfromcache" /* PageEvent.RequestServedFromCache */, request);
      });
      networkManagerEmitter.on(exports.NetworkManagerEvent.Response, response => {
        this.emit("response" /* PageEvent.Response */, response);
      });
      networkManagerEmitter.on(exports.NetworkManagerEvent.RequestFailed, request => {
        this.emit("requestfailed" /* PageEvent.RequestFailed */, request);
      });
      networkManagerEmitter.on(exports.NetworkManagerEvent.RequestFinished, request => {
        this.emit("requestfinished" /* PageEvent.RequestFinished */, request);
      });
      _classPrivateFieldGet(_tabTargetClient, this).on(exports.CDPSessionEvent.Swapped, _assertClassBrand(_CdpPage_brand, this, _onActivation).bind(this));
      _classPrivateFieldGet(_tabTargetClient, this).on(exports.CDPSessionEvent.Ready, _assertClassBrand(_CdpPage_brand, this, _onSecondaryTarget).bind(this));
      _classPrivateFieldGet(_targetManager, this).on("targetGone" /* TargetManagerEvent.TargetGone */, _classPrivateFieldGet(_onDetachedFromTarget, this));
      _classPrivateFieldGet(_tabTarget, this)._isClosedDeferred.valueOrThrow().then(() => {
        _classPrivateFieldGet(_targetManager, this).off("targetGone" /* TargetManagerEvent.TargetGone */, _classPrivateFieldGet(_onDetachedFromTarget, this));
        this.emit("close" /* PageEvent.Close */, undefined);
        _classPrivateFieldSet(_closed2, this, true);
      }).catch(debugError);
      _assertClassBrand(_CdpPage_brand, this, _setupPrimaryTargetListeners).call(this);
      _assertClassBrand(_CdpPage_brand, this, _attachExistingTargets).call(this);
    }
    async resize(params) {
      const windowId = await this.windowId();
      await _classPrivateFieldGet(_primaryTargetClient, this).send('Browser.setContentsSize', {
        windowId: Number(windowId),
        width: params.contentWidth,
        height: params.contentHeight
      });
    }
    async windowId() {
      const {
        windowId
      } = await _classPrivateFieldGet(_primaryTargetClient, this).send('Browser.getWindowForTarget');
      return windowId.toString();
    }
    _client() {
      return _classPrivateFieldGet(_primaryTargetClient, this);
    }
    _isUrlAllowed(url) {
      return _classPrivateFieldGet(_targetManager, this).isUrlAllowed(url);
    }
    isServiceWorkerBypassed() {
      return _classPrivateFieldGet(_serviceWorkerBypassed, this);
    }
    isDragInterceptionEnabled() {
      return _classPrivateFieldGet(_userDragInterceptionEnabled, this);
    }
    isJavaScriptEnabled() {
      return _classPrivateFieldGet(_emulationManager, this).javascriptEnabled;
    }
    async openDevTools() {
      const pageTargetId = this.target()._targetId;
      const browser = this.browser();
      const devtoolsTargetId = await browser._hasDevToolsTarget(this.target()._targetId);
      if (devtoolsTargetId) {
        return await browser._getDevToolsTargetPage(devtoolsTargetId);
      }
      const devtoolsPage = await browser._createDevToolsPage(pageTargetId);
      return devtoolsPage;
    }
    async hasDevTools() {
      const browser = this.browser();
      const targetId = await browser._hasDevToolsTarget(this.target()._targetId);
      return Boolean(targetId);
    }
    async waitForFileChooser(options = {}) {
      const needsEnable = _classPrivateFieldGet(_fileChooserDeferreds, this).size === 0;
      const {
        timeout = this._timeoutSettings.timeout()
      } = options;
      const deferred = Deferred.create({
        message: `Waiting for \`FileChooser\` failed: ${timeout}ms exceeded`,
        timeout
      });
      if (options.signal) {
        options.signal.addEventListener('abort', () => {
          deferred.reject(options.signal?.reason);
        }, {
          once: true
        });
      }
      _classPrivateFieldGet(_fileChooserDeferreds, this).add(deferred);
      let enablePromise;
      if (needsEnable) {
        enablePromise = _classPrivateFieldGet(_primaryTargetClient, this).send('Page.setInterceptFileChooserDialog', {
          enabled: true
        });
      }
      try {
        const [result] = await Promise.all([deferred.valueOrThrow(), enablePromise]);
        return result;
      } catch (error) {
        _classPrivateFieldGet(_fileChooserDeferreds, this).delete(deferred);
        throw error;
      }
    }
    async setGeolocation(options) {
      return await _classPrivateFieldGet(_emulationManager, this).setGeolocation(options);
    }
    target() {
      return _classPrivateFieldGet(_primaryTarget, this);
    }
    browser() {
      return _classPrivateFieldGet(_primaryTarget, this).browser();
    }
    browserContext() {
      return _classPrivateFieldGet(_primaryTarget, this).browserContext();
    }
    mainFrame() {
      return _classPrivateFieldGet(_frameManager3, this).mainFrame();
    }
    get keyboard() {
      return _classPrivateFieldGet(_keyboard4, this);
    }
    get touchscreen() {
      return _classPrivateFieldGet(_touchscreen, this);
    }
    get coverage() {
      return _classPrivateFieldGet(_coverage, this);
    }
    get tracing() {
      return _classPrivateFieldGet(_tracing, this);
    }
    get webmcp() {
      return _classPrivateFieldGet(_webmcp2, this);
    }
    frames() {
      return _classPrivateFieldGet(_frameManager3, this).frames();
    }
    workers() {
      return Array.from(_classPrivateFieldGet(_workers, this).values());
    }
    async setRequestInterception(value) {
      return await _classPrivateFieldGet(_frameManager3, this).networkManager.setRequestInterception(value);
    }
    async setBypassServiceWorker(bypass) {
      _classPrivateFieldSet(_serviceWorkerBypassed, this, bypass);
      return await _classPrivateFieldGet(_primaryTargetClient, this).send('Network.setBypassServiceWorker', {
        bypass
      });
    }
    async setDragInterception(enabled) {
      _classPrivateFieldSet(_userDragInterceptionEnabled, this, enabled);
      return await _classPrivateFieldGet(_primaryTargetClient, this).send('Input.setInterceptDrags', {
        enabled
      });
    }
    async setOfflineMode(enabled) {
      return await _classPrivateFieldGet(_frameManager3, this).networkManager.setOfflineMode(enabled);
    }
    async emulateNetworkConditions(networkConditions) {
      return await _classPrivateFieldGet(_frameManager3, this).networkManager.emulateNetworkConditions(networkConditions);
    }
    async emulateFocusedPage(enabled) {
      return await _classPrivateFieldGet(_emulationManager, this).emulateFocus(enabled);
    }
    setDefaultNavigationTimeout(timeout) {
      this._timeoutSettings.setDefaultNavigationTimeout(timeout);
    }
    setDefaultTimeout(timeout) {
      this._timeoutSettings.setDefaultTimeout(timeout);
    }
    getDefaultTimeout() {
      return this._timeoutSettings.timeout();
    }
    getDefaultNavigationTimeout() {
      return this._timeoutSettings.navigationTimeout();
    }
    async queryObjects(prototypeHandle) {
      assert(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
      assert(prototypeHandle.id, 'Prototype JSHandle must not be referencing primitive value');
      const response = await this.mainFrame().client.send('Runtime.queryObjects', {
        prototypeObjectId: prototypeHandle.id
      });
      return this.mainFrame().mainRealm().createCdpHandle(response.objects);
    }
    async cookies(...urls) {
      const originalCookies = (await _classPrivateFieldGet(_primaryTargetClient, this).send('Network.getCookies', {
        urls: urls.length ? urls : [this.url()]
      })).cookies;
      const unsupportedCookieAttributes = ['sourcePort'];
      const filterUnsupportedAttributes = cookie => {
        for (const attr of unsupportedCookieAttributes) {
          delete cookie[attr];
        }
        return cookie;
      };
      return originalCookies.map(filterUnsupportedAttributes).map(cookie => {
        return {
          ...cookie,
          // TODO: a breaking change is needed in Puppeteer types to support other
          // partition keys.
          partitionKey: cookie.partitionKey ? cookie.partitionKey.topLevelSite : undefined
        };
      });
    }
    async deleteCookie(...cookies) {
      const pageURL = this.url();
      for (const cookie of cookies) {
        const item = {
          ...cookie,
          partitionKey: convertCookiesPartitionKeyFromPuppeteerToCdp(cookie.partitionKey)
        };
        if (!cookie.url && pageURL.startsWith('http')) {
          item.url = pageURL;
        }
        await _classPrivateFieldGet(_primaryTargetClient, this).send('Network.deleteCookies', item);
        if (pageURL.startsWith('http') && !item.partitionKey) {
          const url = new URL(pageURL);
          // Delete also cookies from the page's partition.
          await _classPrivateFieldGet(_primaryTargetClient, this).send('Network.deleteCookies', {
            ...item,
            partitionKey: {
              topLevelSite: url.origin.replace(`:${url.port}`, ''),
              hasCrossSiteAncestor: false
            }
          });
        }
      }
    }
    async setCookie(...cookies) {
      const pageURL = this.url();
      const startsWithHTTP = pageURL.startsWith('http');
      const items = cookies.map(cookie => {
        const item = Object.assign({}, cookie);
        if (!item.url && startsWithHTTP) {
          item.url = pageURL;
        }
        assert(item.url !== 'about:blank', `Blank page can not have cookie "${item.name}"`);
        assert(!String.prototype.startsWith.call(item.url || '', 'data:'), `Data URL page can not have cookie "${item.name}"`);
        return item;
      });
      await this.deleteCookie(...items);
      if (items.length) {
        await _classPrivateFieldGet(_primaryTargetClient, this).send('Network.setCookies', {
          cookies: items.map(cookieParam => {
            return {
              ...cookieParam,
              partitionKey: convertCookiesPartitionKeyFromPuppeteerToCdp(cookieParam.partitionKey),
              sameSite: convertSameSiteFromPuppeteerToCdp(cookieParam.sameSite)
            };
          })
        });
      }
    }
    async exposeFunction(name,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    pptrFunction) {
      if (_classPrivateFieldGet(_bindings3, this).has(name)) {
        throw new Error(`Failed to add page binding with name ${name}: window['${name}'] already exists!`);
      }
      const source = pageBindingInitString('exposedFun', name);
      let binding;
      switch (typeof pptrFunction) {
        case 'function':
          binding = new Binding(name, pptrFunction, source);
          break;
        default:
          binding = new Binding(name, pptrFunction.default, source);
          break;
      }
      _classPrivateFieldGet(_bindings3, this).set(name, binding);
      const [{
        identifier
      }] = await Promise.all([_classPrivateFieldGet(_frameManager3, this).evaluateOnNewDocument(source), _classPrivateFieldGet(_frameManager3, this).addExposedFunctionBinding(binding)]);
      _classPrivateFieldGet(_exposedFunctions, this).set(name, identifier);
    }
    async removeExposedFunction(name) {
      const exposedFunctionId = _classPrivateFieldGet(_exposedFunctions, this).get(name);
      if (!exposedFunctionId) {
        throw new Error(`Function with name "${name}" does not exist`);
      }
      // #bindings must be updated together with #exposedFunctions.
      const binding = _classPrivateFieldGet(_bindings3, this).get(name);
      _classPrivateFieldGet(_exposedFunctions, this).delete(name);
      _classPrivateFieldGet(_bindings3, this).delete(name);
      await Promise.all([_classPrivateFieldGet(_frameManager3, this).removeScriptToEvaluateOnNewDocument(exposedFunctionId), _classPrivateFieldGet(_frameManager3, this).removeExposedFunctionBinding(binding)]);
    }
    async authenticate(credentials) {
      return await _classPrivateFieldGet(_frameManager3, this).networkManager.authenticate(credentials);
    }
    async setExtraHTTPHeaders(headers) {
      return await _classPrivateFieldGet(_frameManager3, this).networkManager.setExtraHTTPHeaders(headers);
    }
    async setUserAgent(userAgentOrOptions, userAgentMetadata) {
      if (typeof userAgentOrOptions === 'string') {
        return await _classPrivateFieldGet(_frameManager3, this).networkManager.setUserAgent(userAgentOrOptions, userAgentMetadata);
      } else {
        const userAgent = userAgentOrOptions.userAgent ?? (await this.browser().userAgent());
        return await _classPrivateFieldGet(_frameManager3, this).networkManager.setUserAgent(userAgent, userAgentOrOptions.userAgentMetadata, userAgentOrOptions.platform);
      }
    }
    async metrics() {
      const response = await _classPrivateFieldGet(_primaryTargetClient, this).send('Performance.getMetrics');
      return _assertClassBrand(_CdpPage_brand, this, _buildMetricsObject).call(this, response.metrics);
    }
    async captureHeapSnapshot(options) {
      const {
        createWriteStream
      } = environment.value.fs;
      const stream = createWriteStream(options.path);
      const streamPromise = new Promise((resolve, reject) => {
        stream.on('error', reject);
        stream.on('finish', resolve);
      });
      const client = _classPrivateFieldGet(_primaryTargetClient, this);
      await client.send('HeapProfiler.enable');
      await client.send('HeapProfiler.collectGarbage');
      const handler = event => {
        stream.write(event.chunk);
      };
      client.on('HeapProfiler.addHeapSnapshotChunk', handler);
      try {
        await client.send('HeapProfiler.takeHeapSnapshot', {
          reportProgress: false
        });
      } finally {
        client.off('HeapProfiler.addHeapSnapshotChunk', handler);
        await client.send('HeapProfiler.disable');
      }
      stream.end();
      await streamPromise;
    }
    async reload(options) {
      const [result] = await Promise.all([this.waitForNavigation({
        ...options,
        ignoreSameDocumentNavigation: true
      }), _classPrivateFieldGet(_primaryTargetClient, this).send('Page.reload', {
        ignoreCache: options?.ignoreCache ?? false
      })]);
      return result;
    }
    async createCDPSession() {
      return await this.target().createCDPSession();
    }
    async goBack(options = {}) {
      return await _assertClassBrand(_CdpPage_brand, this, _go).call(this, -1, options);
    }
    async goForward(options = {}) {
      return await _assertClassBrand(_CdpPage_brand, this, _go).call(this, 1, options);
    }
    async bringToFront() {
      await _classPrivateFieldGet(_primaryTargetClient, this).send('Page.bringToFront');
    }
    async setJavaScriptEnabled(enabled) {
      return await _classPrivateFieldGet(_emulationManager, this).setJavaScriptEnabled(enabled);
    }
    async setBypassCSP(enabled) {
      await _classPrivateFieldGet(_primaryTargetClient, this).send('Page.setBypassCSP', {
        enabled
      });
    }
    async triggerExtensionAction(extension) {
      return await extension.triggerAction(this);
    }
    async emulateMediaType(type) {
      return await _classPrivateFieldGet(_emulationManager, this).emulateMediaType(type);
    }
    async emulateCPUThrottling(factor) {
      return await _classPrivateFieldGet(_emulationManager, this).emulateCPUThrottling(factor);
    }
    async emulateMediaFeatures(features) {
      return await _classPrivateFieldGet(_emulationManager, this).emulateMediaFeatures(features);
    }
    async emulateTimezone(timezoneId) {
      return await _classPrivateFieldGet(_emulationManager, this).emulateTimezone(timezoneId);
    }
    async emulateIdleState(overrides) {
      return await _classPrivateFieldGet(_emulationManager, this).emulateIdleState(overrides);
    }
    async emulateVisionDeficiency(type) {
      return await _classPrivateFieldGet(_emulationManager, this).emulateVisionDeficiency(type);
    }
    async setViewport(viewport) {
      const needsReload = await _classPrivateFieldGet(_emulationManager, this).emulateViewport(viewport);
      _classPrivateFieldSet(_viewport, this, viewport);
      if (needsReload) {
        await this.reload();
      }
    }
    viewport() {
      return _classPrivateFieldGet(_viewport, this);
    }
    async evaluateOnNewDocument(pageFunction, ...args) {
      const source = evaluationString(pageFunction, ...args);
      return await _classPrivateFieldGet(_frameManager3, this).evaluateOnNewDocument(source);
    }
    async removeScriptToEvaluateOnNewDocument(identifier) {
      return await _classPrivateFieldGet(_frameManager3, this).removeScriptToEvaluateOnNewDocument(identifier);
    }
    async setCacheEnabled(enabled = true) {
      await _classPrivateFieldGet(_frameManager3, this).networkManager.setCacheEnabled(enabled);
    }
    async _screenshot(options) {
      const env_2 = {
        stack: [],
        error: void 0,
        hasError: false
      };
      try {
        const {
          fromSurface,
          omitBackground,
          optimizeForSpeed,
          quality,
          clip: userClip,
          type,
          captureBeyondViewport
        } = options;
        const stack = __addDisposableResource$1(env_2, new AsyncDisposableStack(), true);
        if (omitBackground && (type === 'png' || type === 'webp')) {
          await _classPrivateFieldGet(_emulationManager, this).setTransparentBackgroundColor();
          stack.defer(async () => {
            await _classPrivateFieldGet(_emulationManager, this).resetDefaultBackgroundColor().catch(debugError);
          });
        }
        let clip = userClip;
        if (clip && !captureBeyondViewport) {
          const viewport = await this.mainFrame().isolatedRealm().evaluate(() => {
            const {
              height,
              pageLeft: x,
              pageTop: y,
              width
            } = window.visualViewport;
            return {
              x,
              y,
              height,
              width
            };
          });
          clip = getIntersectionRect(clip, viewport);
        }
        const {
          data
        } = await _classPrivateFieldGet(_primaryTargetClient, this).send('Page.captureScreenshot', {
          format: type,
          optimizeForSpeed,
          fromSurface,
          ...(quality !== undefined ? {
            quality: Math.round(quality)
          } : {}),
          ...(clip ? {
            clip: {
              ...clip,
              scale: clip.scale ?? 1
            }
          } : {}),
          captureBeyondViewport
        });
        return data;
      } catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
      } finally {
        const result_1 = __disposeResources$1(env_2);
        if (result_1) await result_1;
      }
    }
    async createPDFStream(options = {}) {
      const {
        timeout: ms = this._timeoutSettings.timeout()
      } = options;
      const {
        landscape,
        displayHeaderFooter,
        headerTemplate,
        footerTemplate,
        printBackground,
        scale,
        width: paperWidth,
        height: paperHeight,
        margin,
        pageRanges,
        preferCSSPageSize,
        omitBackground,
        tagged: generateTaggedPDF,
        outline: generateDocumentOutline,
        waitForFonts
      } = parsePDFOptions(options);
      if (omitBackground) {
        await _classPrivateFieldGet(_emulationManager, this).setTransparentBackgroundColor();
      }
      if (waitForFonts) {
        await firstValueFrom(from(this.mainFrame().isolatedRealm().evaluate(() => {
          return document.fonts.ready;
        })).pipe(raceWith(timeout(ms))));
      }
      const printCommandPromise = _classPrivateFieldGet(_primaryTargetClient, this).send('Page.printToPDF', {
        transferMode: 'ReturnAsStream',
        landscape,
        displayHeaderFooter,
        headerTemplate,
        footerTemplate,
        printBackground,
        scale,
        paperWidth,
        paperHeight,
        marginTop: margin.top,
        marginBottom: margin.bottom,
        marginLeft: margin.left,
        marginRight: margin.right,
        pageRanges,
        preferCSSPageSize,
        generateTaggedPDF,
        generateDocumentOutline
      });
      const result = await firstValueFrom(from(printCommandPromise).pipe(raceWith(timeout(ms))));
      if (omitBackground) {
        await _classPrivateFieldGet(_emulationManager, this).resetDefaultBackgroundColor();
      }
      assert(result.stream, '`stream` is missing from `Page.printToPDF');
      return await getReadableFromProtocolStream(_classPrivateFieldGet(_primaryTargetClient, this), result.stream);
    }
    async pdf(options = {}) {
      const {
        path = undefined
      } = options;
      const readable = await this.createPDFStream(options);
      const typedArray = await getReadableAsTypedArray(readable, path);
      assert(typedArray, 'Could not create typed array');
      return typedArray;
    }
    async close(options = {
      runBeforeUnload: undefined
    }) {
      const env_3 = {
        stack: [],
        error: void 0,
        hasError: false
      };
      try {
        const _guard = __addDisposableResource$1(env_3, await this.browserContext().waitForScreenshotOperations(), false);
        const connection = _classPrivateFieldGet(_primaryTargetClient, this).connection();
        assert(connection, 'Connection closed. Most likely the page has been closed.');
        const runBeforeUnload = !!options.runBeforeUnload;
        if (runBeforeUnload) {
          await _classPrivateFieldGet(_primaryTargetClient, this).send('Page.close');
        } else {
          await connection.send('Target.closeTarget', {
            targetId: _classPrivateFieldGet(_primaryTarget, this)._targetId
          });
          await _classPrivateFieldGet(_tabTarget, this)._isClosedDeferred.valueOrThrow();
        }
      } catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
      } finally {
        __disposeResources$1(env_3);
      }
    }
    isClosed() {
      return _classPrivateFieldGet(_closed2, this);
    }
    get mouse() {
      return _classPrivateFieldGet(_mouse, this);
    }
    /**
     * This method is typically coupled with an action that triggers a device
     * request from an api such as WebBluetooth.
     *
     * :::caution
     *
     * This must be called before the device request is made. It will not return a
     * currently active device prompt.
     *
     * :::
     *
     * @example
     *
     * ```ts
     * const [devicePrompt] = Promise.all([
     *   page.waitForDevicePrompt(),
     *   page.click('#connect-bluetooth'),
     * ]);
     * await devicePrompt.select(
     *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
     * );
     * ```
     */
    async waitForDevicePrompt(options = {}) {
      return await this.mainFrame().waitForDevicePrompt(options);
    }
    get bluetooth() {
      return _classPrivateFieldGet(_cdpBluetoothEmulation, this);
    }
    extensionRealms() {
      return this.mainFrame().extensionRealms();
    }
  }
  function _attachExistingTargets() {
    const queue = [];
    for (const childTarget of _classPrivateFieldGet(_targetManager, this).getChildTargets(_classPrivateFieldGet(_primaryTarget, this))) {
      queue.push(childTarget);
    }
    let idx = 0;
    while (idx < queue.length) {
      const next = queue[idx];
      idx++;
      const session = next._session();
      if (session) {
        _classPrivateFieldGet(_onAttachedToTarget, this).call(this, session);
      }
      for (const childTarget of _classPrivateFieldGet(_targetManager, this).getChildTargets(next)) {
        queue.push(childTarget);
      }
    }
  }
  async function _onActivation(newSession) {
    // TODO: Remove assert once we have separate Event type for CdpCDPSession.
    assert(newSession instanceof CdpCDPSession, 'CDPSession is not instance of CdpCDPSession');
    _classPrivateFieldSet(_primaryTargetClient, this, newSession);
    _classPrivateFieldSet(_primaryTarget, this, newSession.target());
    assert(_classPrivateFieldGet(_primaryTarget, this), 'Missing target on swap');
    _classPrivateFieldGet(_keyboard4, this).updateClient(newSession);
    _classPrivateFieldGet(_mouse, this).updateClient(newSession);
    _classPrivateFieldGet(_touchscreen, this).updateClient(newSession);
    _classPrivateFieldGet(_emulationManager, this).updateClient(newSession);
    _classPrivateFieldGet(_tracing, this).updateClient(newSession);
    _classPrivateFieldGet(_webmcp2, this).updateClient(newSession);
    _classPrivateFieldGet(_coverage, this).updateClient(newSession);
    await _classPrivateFieldGet(_frameManager3, this).swapFrameTree(newSession);
    _assertClassBrand(_CdpPage_brand, this, _setupPrimaryTargetListeners).call(this);
  }
  async function _onSecondaryTarget(session) {
    assert(session instanceof CdpCDPSession);
    if (session.target()._subtype() !== 'prerender') {
      return;
    }
    _classPrivateFieldGet(_frameManager3, this).registerSpeculativeSession(session).catch(debugError);
    _classPrivateFieldGet(_emulationManager, this).registerSpeculativeSession(session).catch(debugError);
  }
  /**
   * Sets up listeners for the primary target. The primary target can change
   * during a navigation to a prerended page.
   */
  function _setupPrimaryTargetListeners() {
    const clientEmitter = new EventEmitter(_classPrivateFieldGet(_primaryTargetClient, this));
    clientEmitter.on(exports.CDPSessionEvent.Ready, _classPrivateFieldGet(_onAttachedToTarget, this));
    clientEmitter.on(exports.CDPSessionEvent.Disconnected, () => {
      _classPrivateFieldGet(_sessionCloseDeferred, this).reject(new TargetCloseError('Target closed'));
    });
    clientEmitter.on('Page.domContentEventFired', () => {
      this.emit("domcontentloaded" /* PageEvent.DOMContentLoaded */, undefined);
    });
    clientEmitter.on('Page.loadEventFired', () => {
      this.emit("load" /* PageEvent.Load */, undefined);
    });
    clientEmitter.on('Page.javascriptDialogOpening', _assertClassBrand(_CdpPage_brand, this, _onDialog).bind(this));
    clientEmitter.on('Runtime.exceptionThrown', _assertClassBrand(_CdpPage_brand, this, _handleException).bind(this));
    clientEmitter.on('Inspector.targetCrashed', _assertClassBrand(_CdpPage_brand, this, _onTargetCrashed).bind(this));
    clientEmitter.on('Performance.metrics', _assertClassBrand(_CdpPage_brand, this, _emitMetrics).bind(this));
    clientEmitter.on('Log.entryAdded', _assertClassBrand(_CdpPage_brand, this, _onLogEntryAdded).bind(this));
    clientEmitter.on('Page.fileChooserOpened', _assertClassBrand(_CdpPage_brand, this, _onFileChooser).bind(this));
  }
  async function _initialize() {
    try {
      await Promise.all([_classPrivateFieldGet(_frameManager3, this).initialize(_classPrivateFieldGet(_primaryTargetClient, this)), _classPrivateFieldGet(_primaryTargetClient, this).send('Performance.enable'), _classPrivateFieldGet(_primaryTargetClient, this).send('Log.enable'), _classPrivateFieldGet(_webmcp2, this).initialize()]);
    } catch (err) {
      if (isErrorLike(err) && isTargetClosedError(err)) {
        debugError(err);
      } else {
        throw err;
      }
    }
  }
  async function _onFileChooser(event) {
    const env_1 = {
      stack: [],
      error: void 0,
      hasError: false
    };
    try {
      if (!_classPrivateFieldGet(_fileChooserDeferreds, this).size) {
        return;
      }
      const frame = _classPrivateFieldGet(_frameManager3, this).frame(event.frameId);
      assert(frame, 'This should never happen.');
      // This is guaranteed to be an HTMLInputElement handle by the event.
      const handle = __addDisposableResource$1(env_1, await frame.worlds[MAIN_WORLD].adoptBackendNode(event.backendNodeId), false);
      const fileChooser = new FileChooser(handle.move(), event.mode !== 'selectSingle');
      for (const promise of _classPrivateFieldGet(_fileChooserDeferreds, this)) {
        promise.resolve(fileChooser);
      }
      _classPrivateFieldGet(_fileChooserDeferreds, this).clear();
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources$1(env_1);
    }
  }
  function _onTargetCrashed() {
    this.emit("error" /* PageEvent.Error */, new Error('Page crashed!'));
  }
  function _onLogEntryAdded(event) {
    const {
      level,
      text,
      args,
      source,
      url,
      lineNumber,
      stackTrace
    } = event.entry;
    if (args) {
      args.map(arg => {
        void releaseObject(_classPrivateFieldGet(_primaryTargetClient, this), arg);
      });
    }
    if (source !== 'worker') {
      this.emit("console" /* PageEvent.Console */, new ConsoleMessage(convertConsoleMessageLevel(level), text, [], [{
        url,
        lineNumber
      }], undefined, stackTrace, _classPrivateFieldGet(_primaryTarget, this)._targetId));
    }
  }
  function _emitMetrics(event) {
    this.emit("metrics" /* PageEvent.Metrics */, {
      title: event.title,
      metrics: _assertClassBrand(_CdpPage_brand, this, _buildMetricsObject).call(this, event.metrics)
    });
  }
  function _buildMetricsObject(metrics) {
    const result = {};
    for (const metric of metrics || []) {
      if (supportedMetrics.has(metric.name)) {
        result[metric.name] = metric.value;
      }
    }
    return result;
  }
  function _handleException(exception) {
    this.emit("pageerror" /* PageEvent.PageError */, createClientError(exception.exceptionDetails));
  }
  function _onConsoleAPI2(world, event, values) {
    if (!values) {
      values = event.args.map(arg => {
        return world.createCdpHandle(arg);
      });
    }
    const hasPageConsoleListeners = this.listenerCount("console" /* PageEvent.Console */) > 0;
    const hasWorkerConsoleListeners = world.environment instanceof WebWorker && world.environment.listenerCount(exports.WebWorkerEvent.Console) > 0;
    if (!hasPageConsoleListeners) {
      if (!hasWorkerConsoleListeners) {
        // eslint-disable-next-line max-len -- The comment is long.
        // eslint-disable-next-line @puppeteer/use-using -- These are not owned by this function.
        for (const value of values) {
          void value.dispose().catch(debugError);
        }
      }
      return;
    }
    let targetId;
    if (world.environment.client instanceof CdpCDPSession) {
      targetId = world.environment.client.target()._targetId;
    }
    this.emit("console" /* PageEvent.Console */, createConsoleMessage(event, values, targetId));
  }
  async function _onBindingCalled2(world, event) {
    let payload;
    try {
      payload = JSON.parse(event.payload);
    } catch {
      // The binding was either called by something in the page or it was
      // called before our wrapper was initialized.
      return;
    }
    const {
      type,
      name,
      seq,
      args,
      isTrivial
    } = payload;
    if (type !== 'exposedFun') {
      return;
    }
    const context = world.context;
    if (!context) {
      return;
    }
    const binding = _classPrivateFieldGet(_bindings3, this).get(name);
    await binding?.run(context, seq, args, isTrivial);
  }
  function _onDialog(event) {
    const type = validateDialogType(event.type);
    const dialog = new CdpDialog(_classPrivateFieldGet(_primaryTargetClient, this), type, event.message, event.defaultPrompt);
    this.emit("dialog" /* PageEvent.Dialog */, dialog);
  }
  async function _go(delta, options) {
    const history = await _classPrivateFieldGet(_primaryTargetClient, this).send('Page.getNavigationHistory');
    const entry = history.entries[history.currentIndex + delta];
    if (!entry) {
      throw new Error('History entry to navigate to not found.');
    }
    const result = await Promise.all([this.waitForNavigation(options), _classPrivateFieldGet(_primaryTargetClient, this).send('Page.navigateToHistoryEntry', {
      entryId: entry.id
    })]);
    return result[0];
  }
  const supportedMetrics = new Set(['Timestamp', 'Documents', 'Frames', 'JSEventListeners', 'Nodes', 'LayoutCount', 'RecalcStyleCount', 'LayoutDuration', 'RecalcStyleDuration', 'ScriptDuration', 'TaskDuration', 'JSHeapUsedSize', 'JSHeapTotalSize']);
  /** @see https://w3c.github.io/webdriver-bidi/#rectangle-intersection */
  function getIntersectionRect(clip, viewport) {
    // Note these will already be normalized.
    const x = Math.max(clip.x, viewport.x);
    const y = Math.max(clip.y, viewport.y);
    return {
      x,
      y,
      width: Math.max(Math.min(clip.x + clip.width, viewport.x + viewport.width) - x, 0),
      height: Math.max(Math.min(clip.y + clip.height, viewport.y + viewport.height) - y, 0)
    };
  }
  /**
   * @internal
   */
  function convertCookiesPartitionKeyFromPuppeteerToCdp(partitionKey) {
    if (partitionKey === undefined) {
      return undefined;
    }
    if (typeof partitionKey === 'string') {
      return {
        topLevelSite: partitionKey,
        hasCrossSiteAncestor: false
      };
    }
    return {
      topLevelSite: partitionKey.sourceOrigin,
      hasCrossSiteAncestor: partitionKey.hasCrossSiteAncestor ?? false
    };
  }

  /**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  var __addDisposableResource = undefined && undefined.__addDisposableResource || function (env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function () {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env.stack.push({
        value: value,
        dispose: dispose,
        async: async
      });
    } else if (async) {
      env.stack.push({
        async: true
      });
    }
    return value;
  };
  var __disposeResources = undefined && undefined.__disposeResources || function (SuppressedError) {
    return function (env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r,
        s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
                fail(e);
                return next();
              });
            } else s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  /**
   * @internal
   */
  var _connection3 = /*#__PURE__*/new WeakMap();
  var _browser = /*#__PURE__*/new WeakMap();
  var _id8 = /*#__PURE__*/new WeakMap();
  class CdpBrowserContext extends BrowserContext {
    constructor(connection, browser, contextId) {
      super();
      _classPrivateFieldInitSpec(this, _connection3, void 0);
      _classPrivateFieldInitSpec(this, _browser, void 0);
      _classPrivateFieldInitSpec(this, _id8, void 0);
      _classPrivateFieldSet(_connection3, this, connection);
      _classPrivateFieldSet(_browser, this, browser);
      _classPrivateFieldSet(_id8, this, contextId);
    }
    get id() {
      return _classPrivateFieldGet(_id8, this);
    }
    targets() {
      return _classPrivateFieldGet(_browser, this).targets().filter(target => {
        return target.browserContext() === this;
      });
    }
    async pages(includeAll = false) {
      const pages = await Promise.all(this.targets().filter(target => {
        return target.type() === 'page' || (target.type() === 'other' || includeAll) && _classPrivateFieldGet(_browser, this)._getIsPageTargetCallback()?.(target);
      }).map(target => {
        return target.page();
      }));
      return pages.filter(page => {
        return !!page;
      });
    }
    async overridePermissions(origin, permissions) {
      const protocolPermissions = permissions.map(permission => {
        const protocolPermission = WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
        if (!protocolPermission) {
          throw new Error('Unknown permission: ' + permission);
        }
        return protocolPermission;
      });
      await _classPrivateFieldGet(_connection3, this).send('Browser.grantPermissions', {
        origin,
        browserContextId: _classPrivateFieldGet(_id8, this) || undefined,
        permissions: protocolPermissions
      });
    }
    async setPermission(origin, ...permissions) {
      await Promise.all(permissions.map(async permission => {
        const protocolPermission = {
          name: permission.permission.name,
          userVisibleOnly: permission.permission.userVisibleOnly,
          sysex: permission.permission.sysex,
          allowWithoutSanitization: permission.permission.allowWithoutSanitization,
          panTiltZoom: permission.permission.panTiltZoom
        };
        await _classPrivateFieldGet(_connection3, this).send('Browser.setPermission', {
          origin: origin === '*' ? undefined : origin,
          browserContextId: _classPrivateFieldGet(_id8, this) || undefined,
          permission: protocolPermission,
          setting: permission.state
        });
      }));
    }
    async clearPermissionOverrides() {
      await _classPrivateFieldGet(_connection3, this).send('Browser.resetPermissions', {
        browserContextId: _classPrivateFieldGet(_id8, this) || undefined
      });
    }
    async newPage(options) {
      const env_1 = {
        stack: [],
        error: void 0,
        hasError: false
      };
      try {
        const _guard = __addDisposableResource(env_1, await this.waitForScreenshotOperations(), false);
        return await _classPrivateFieldGet(_browser, this)._createPageInContext(_classPrivateFieldGet(_id8, this), options);
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources(env_1);
      }
    }
    browser() {
      return _classPrivateFieldGet(_browser, this);
    }
    async close() {
      assert(_classPrivateFieldGet(_id8, this), 'Default BrowserContext cannot be closed!');
      await _classPrivateFieldGet(_browser, this)._disposeContext(_classPrivateFieldGet(_id8, this));
    }
    async cookies() {
      const {
        cookies
      } = await _classPrivateFieldGet(_connection3, this).send('Storage.getCookies', {
        browserContextId: _classPrivateFieldGet(_id8, this)
      });
      return cookies.map(cookie => {
        return {
          ...cookie,
          partitionKey: cookie.partitionKey ? {
            sourceOrigin: cookie.partitionKey.topLevelSite,
            hasCrossSiteAncestor: cookie.partitionKey.hasCrossSiteAncestor
          } : undefined
        };
      });
    }
    async setCookie(...cookies) {
      return await _classPrivateFieldGet(_connection3, this).send('Storage.setCookies', {
        browserContextId: _classPrivateFieldGet(_id8, this),
        cookies: cookies.map(cookie => {
          return {
            ...cookie,
            partitionKey: convertCookiesPartitionKeyFromPuppeteerToCdp(cookie.partitionKey),
            sameSite: convertSameSiteFromPuppeteerToCdp(cookie.sameSite)
          };
        })
      });
    }
    async setDownloadBehavior(downloadBehavior) {
      await _classPrivateFieldGet(_connection3, this).send('Browser.setDownloadBehavior', {
        behavior: downloadBehavior.policy,
        downloadPath: downloadBehavior.downloadPath,
        browserContextId: _classPrivateFieldGet(_id8, this)
      });
    }
  }
  var _browser2 = /*#__PURE__*/new WeakMap();
  var _CdpExtension_brand = /*#__PURE__*/new WeakSet();
  class CdpExtension extends Extension {
    /*
     * @internal
     */
    constructor(id, version, name, path, enabled, browser) {
      super(id, version, name, path, enabled);
      _classPrivateMethodInitSpec(this, _CdpExtension_brand);
      // needed to access the CDPSession to trigger an extension action.
      _classPrivateFieldInitSpec(this, _browser2, void 0);
      _classPrivateFieldSet(_browser2, this, browser);
    }
    async workers() {
      const targets = _classPrivateFieldGet(_browser2, this).targets();
      const extensionWorkers = targets.filter(target => {
        const targetUrl = target.url();
        return target.type() === 'service_worker' && targetUrl.startsWith('chrome-extension://' + this.id);
      });
      const workers = [];
      for (const target of extensionWorkers) {
        try {
          const worker = await target.worker();
          if (worker) {
            workers.push(worker);
          }
        } catch (err) {
          if (_assertClassBrand(_CdpExtension_brand, this, _canIgnoreError2).call(this, err)) {
            debugError(err);
            continue;
          }
          throw err;
        }
      }
      return workers;
    }
    async pages() {
      const targets = _classPrivateFieldGet(_browser2, this).targets();
      const extensionPages = targets.filter(target => {
        const targetUrl = target.url();
        return (target.type() === 'page' || target.type() === 'background_page') && targetUrl.startsWith('chrome-extension://' + this.id);
      });
      const pages = await Promise.all(extensionPages.map(async target => {
        try {
          return await target.asPage();
        } catch (err) {
          if (_assertClassBrand(_CdpExtension_brand, this, _canIgnoreError2).call(this, err)) {
            debugError(err);
            return null;
          }
          throw err;
        }
      }));
      return pages.filter(page => {
        return page !== null;
      });
    }
    async triggerAction(page) {
      await _classPrivateFieldGet(_browser2, this)._connection.send('Extensions.triggerAction', {
        id: this.id,
        targetId: page._tabId
      });
    }
  }

  /**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  function _canIgnoreError2(error) {
    return isErrorLike(error) && (isTargetClosedError(error) || error.message.includes('No target with given id found'));
  }
  exports.InitializationStatus = void 0;
  (function (InitializationStatus) {
    InitializationStatus["SUCCESS"] = "success";
    InitializationStatus["ABORTED"] = "aborted";
  })(exports.InitializationStatus || (exports.InitializationStatus = {}));
  /**
   * @internal
   */
  var _browserContext = /*#__PURE__*/new WeakMap();
  var _session = /*#__PURE__*/new WeakMap();
  var _targetInfo = /*#__PURE__*/new WeakMap();
  var _targetManager2 = /*#__PURE__*/new WeakMap();
  var _sessionFactory = /*#__PURE__*/new WeakMap();
  var _childTargets = /*#__PURE__*/new WeakMap();
  class CdpTarget extends Target {
    /**
     * To initialize the target for use, call initialize.
     *
     * @internal
     */
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory) {
      super();
      _classPrivateFieldInitSpec(this, _browserContext, void 0);
      _classPrivateFieldInitSpec(this, _session, void 0);
      _classPrivateFieldInitSpec(this, _targetInfo, void 0);
      _classPrivateFieldInitSpec(this, _targetManager2, void 0);
      _classPrivateFieldInitSpec(this, _sessionFactory, void 0);
      _classPrivateFieldInitSpec(this, _childTargets, new Set());
      _defineProperty(this, "_initializedDeferred", Deferred.create());
      _defineProperty(this, "_isClosedDeferred", Deferred.create());
      _defineProperty(this, "_targetId", void 0);
      _defineProperty(this, "_asPagePromise", void 0);
      /** @internal */
      _defineProperty(this, "pagePromise", void 0);
      _classPrivateFieldSet(_session, this, session);
      _classPrivateFieldSet(_targetManager2, this, targetManager);
      _classPrivateFieldSet(_targetInfo, this, targetInfo);
      _classPrivateFieldSet(_browserContext, this, browserContext);
      this._targetId = targetInfo.targetId;
      _classPrivateFieldSet(_sessionFactory, this, sessionFactory);
      if (_classPrivateFieldGet(_session, this)) {
        _classPrivateFieldGet(_session, this).setTarget(this);
      }
    }
    async asPage() {
      if (this.pagePromise) {
        const page = await this.pagePromise;
        if (page) {
          return page;
        }
      }
      if (!this._asPagePromise) {
        const session = this._session();
        this._asPagePromise = (session ? Promise.resolve(session) : this._sessionFactory()(/* isAutoAttachEmulated=*/false)).then(client => {
          return CdpPage._create(client, this, null);
        });
      }
      return (await this._asPagePromise) ?? null;
    }
    _subtype() {
      return _classPrivateFieldGet(_targetInfo, this).subtype;
    }
    _session() {
      return _classPrivateFieldGet(_session, this);
    }
    _addChildTarget(target) {
      _classPrivateFieldGet(_childTargets, this).add(target);
    }
    _removeChildTarget(target) {
      _classPrivateFieldGet(_childTargets, this).delete(target);
    }
    _childTargets() {
      return _classPrivateFieldGet(_childTargets, this);
    }
    _sessionFactory() {
      if (!_classPrivateFieldGet(_sessionFactory, this)) {
        throw new Error('sessionFactory is not initialized');
      }
      return _classPrivateFieldGet(_sessionFactory, this);
    }
    createCDPSession() {
      if (!_classPrivateFieldGet(_sessionFactory, this)) {
        throw new Error('sessionFactory is not initialized');
      }
      return _classPrivateFieldGet(_sessionFactory, this).call(this, false).then(session => {
        session.setTarget(this);
        return session;
      });
    }
    url() {
      return _classPrivateFieldGet(_targetInfo, this).url;
    }
    type() {
      const type = _classPrivateFieldGet(_targetInfo, this).type;
      switch (type) {
        case 'page':
          return exports.TargetType.PAGE;
        case 'background_page':
          return exports.TargetType.BACKGROUND_PAGE;
        case 'service_worker':
          return exports.TargetType.SERVICE_WORKER;
        case 'shared_worker':
          return exports.TargetType.SHARED_WORKER;
        case 'browser':
          return exports.TargetType.BROWSER;
        case 'webview':
          return exports.TargetType.WEBVIEW;
        case 'tab':
          return exports.TargetType.TAB;
        default:
          return exports.TargetType.OTHER;
      }
    }
    _targetManager() {
      if (!_classPrivateFieldGet(_targetManager2, this)) {
        throw new Error('targetManager is not initialized');
      }
      return _classPrivateFieldGet(_targetManager2, this);
    }
    _getTargetInfo() {
      return _classPrivateFieldGet(_targetInfo, this);
    }
    browser() {
      if (!_classPrivateFieldGet(_browserContext, this)) {
        throw new Error('browserContext is not initialized');
      }
      return _classPrivateFieldGet(_browserContext, this).browser();
    }
    browserContext() {
      if (!_classPrivateFieldGet(_browserContext, this)) {
        throw new Error('browserContext is not initialized');
      }
      return _classPrivateFieldGet(_browserContext, this);
    }
    opener() {
      const {
        openerId
      } = _classPrivateFieldGet(_targetInfo, this);
      if (!openerId) {
        return;
      }
      return this.browser().targets().find(target => {
        return target._targetId === openerId;
      });
    }
    _targetInfoChanged(targetInfo) {
      _classPrivateFieldSet(_targetInfo, this, targetInfo);
      this._checkIfInitialized();
    }
    _initialize() {
      this._initializedDeferred.resolve(exports.InitializationStatus.SUCCESS);
    }
    _isTargetExposed() {
      return this.type() !== exports.TargetType.TAB && !this._subtype();
    }
    _checkIfInitialized() {
      if (!this._initializedDeferred.resolved()) {
        this._initializedDeferred.resolve(exports.InitializationStatus.SUCCESS);
      }
    }
  }
  /**
   * @internal
   */
  var _defaultViewport = /*#__PURE__*/new WeakMap();
  class PageTarget extends CdpTarget {
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory, defaultViewport) {
      super(targetInfo, session, browserContext, targetManager, sessionFactory);
      _classPrivateFieldInitSpec(this, _defaultViewport, void 0);
      _classPrivateFieldSet(_defaultViewport, this, defaultViewport ?? undefined);
    }
    _initialize() {
      this._initializedDeferred.valueOrThrow().then(async result => {
        if (result === exports.InitializationStatus.ABORTED) {
          return;
        }
        const opener = this.opener();
        if (!(opener instanceof PageTarget)) {
          return;
        }
        if (!opener || !opener.pagePromise || this.type() !== 'page') {
          return true;
        }
        const openerPage = await opener.pagePromise;
        if (!openerPage.listenerCount("popup" /* PageEvent.Popup */)) {
          return true;
        }
        const popupPage = await this.page();
        openerPage.emit("popup" /* PageEvent.Popup */, popupPage);
        return true;
      }).catch(debugError);
      this._checkIfInitialized();
    }
    async page() {
      if (!this.pagePromise) {
        const session = this._session();
        this.pagePromise = (session ? Promise.resolve(session) : this._sessionFactory()(/* isAutoAttachEmulated=*/false)).then(client => {
          return CdpPage._create(client, this, _classPrivateFieldGet(_defaultViewport, this) ?? null);
        });
      }
      return (await this.pagePromise) ?? null;
    }
    _checkIfInitialized() {
      if (this._initializedDeferred.resolved()) {
        return;
      }
      if (this._getTargetInfo().url !== '') {
        this._initializedDeferred.resolve(exports.InitializationStatus.SUCCESS);
      }
    }
  }
  /**
   * @internal
   */
  class DevToolsTarget extends PageTarget {}
  /**
   * @internal
   */
  var _workerPromise = /*#__PURE__*/new WeakMap();
  class WorkerTarget extends CdpTarget {
    constructor(...args) {
      super(...args);
      _classPrivateFieldInitSpec(this, _workerPromise, void 0);
    }
    async worker() {
      if (!_classPrivateFieldGet(_workerPromise, this)) {
        const session = this._session();
        _classPrivateFieldSet(_workerPromise, this, (session ? Promise.resolve(session) : this._sessionFactory()(/* isAutoAttachEmulated=*/false)).then(client => {
          return new CdpWebWorker(client, this._getTargetInfo().url, this._targetId, this.type(), () => {} /* exceptionThrown */, undefined /* networkManager */);
        }));
      }
      return await _classPrivateFieldGet(_workerPromise, this);
    }
  }
  /**
   * @internal
   */
  class OtherTarget extends CdpTarget {}

  /**
  Copyright 2020 Intel Corporation
    Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  */
  // node_modules/urlpattern-polyfill/dist/urlpattern.js
  var Pe = Object.defineProperty;
  var a = (e, t) => Pe(e, "name", {
    value: t,
    configurable: true
  });
  var P = class P {
    constructor(t, r, n, c, l, f) {
      _defineProperty(this, "type", 3);
      _defineProperty(this, "name", "");
      _defineProperty(this, "prefix", "");
      _defineProperty(this, "value", "");
      _defineProperty(this, "suffix", "");
      _defineProperty(this, "modifier", 3);
      this.type = t, this.name = r, this.prefix = n, this.value = c, this.suffix = l, this.modifier = f;
    }
    hasCustomName() {
      return this.name !== "" && typeof this.name != "number";
    }
  };
  a(P, "Part");
  var Re = /[$_\p{ID_Start}]/u;
  var Ee = /[$_\u200C\u200D\p{ID_Continue}]/u;
  var v = ".*";
  function Oe(e, t) {
    return (t ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(e);
  }
  a(Oe, "isASCII");
  function D(e, t = false) {
    let r = [],
      n = 0;
    for (; n < e.length;) {
      let c = e[n],
        l = a(function (f) {
          if (!t) throw new TypeError(f);
          r.push({
            type: "INVALID_CHAR",
            index: n,
            value: e[n++]
          });
        }, "ErrorOrInvalid");
      if (c === "*") {
        r.push({
          type: "ASTERISK",
          index: n,
          value: e[n++]
        });
        continue;
      }
      if (c === "+" || c === "?") {
        r.push({
          type: "OTHER_MODIFIER",
          index: n,
          value: e[n++]
        });
        continue;
      }
      if (c === "\\") {
        r.push({
          type: "ESCAPED_CHAR",
          index: n++,
          value: e[n++]
        });
        continue;
      }
      if (c === "{") {
        r.push({
          type: "OPEN",
          index: n,
          value: e[n++]
        });
        continue;
      }
      if (c === "}") {
        r.push({
          type: "CLOSE",
          index: n,
          value: e[n++]
        });
        continue;
      }
      if (c === ":") {
        let f = "",
          s = n + 1;
        for (; s < e.length;) {
          let i = e.substr(s, 1);
          if (s === n + 1 && Re.test(i) || s !== n + 1 && Ee.test(i)) {
            f += e[s++];
            continue;
          }
          break;
        }
        if (!f) {
          l(`Missing parameter name at ${n}`);
          continue;
        }
        r.push({
          type: "NAME",
          index: n,
          value: f
        }), n = s;
        continue;
      }
      if (c === "(") {
        let f = 1,
          s = "",
          i = n + 1,
          o = false;
        if (e[i] === "?") {
          l(`Pattern cannot start with "?" at ${i}`);
          continue;
        }
        for (; i < e.length;) {
          if (!Oe(e[i], false)) {
            l(`Invalid character '${e[i]}' at ${i}.`), o = true;
            break;
          }
          if (e[i] === "\\") {
            s += e[i++] + e[i++];
            continue;
          }
          if (e[i] === ")") {
            if (f--, f === 0) {
              i++;
              break;
            }
          } else if (e[i] === "(" && (f++, e[i + 1] !== "?")) {
            l(`Capturing groups are not allowed at ${i}`), o = true;
            break;
          }
          s += e[i++];
        }
        if (o) continue;
        if (f) {
          l(`Unbalanced pattern at ${n}`);
          continue;
        }
        if (!s) {
          l(`Missing pattern at ${n}`);
          continue;
        }
        r.push({
          type: "REGEX",
          index: n,
          value: s
        }), n = i;
        continue;
      }
      r.push({
        type: "CHAR",
        index: n,
        value: e[n++]
      });
    }
    return r.push({
      type: "END",
      index: n,
      value: ""
    }), r;
  }
  a(D, "lexer");
  function F(e, t = {}) {
    let r = D(e);
    t.delimiter ??= "/#?", t.prefixes ??= "./";
    let n = `[^${x(t.delimiter)}]+?`,
      c = [],
      l = 0,
      f = 0,
      i = /* @__PURE__ */new Set(),
      o = a(u => {
        if (f < r.length && r[f].type === u) return r[f++].value;
      }, "tryConsume"),
      h = a(() => o("OTHER_MODIFIER") ?? o("ASTERISK"), "tryConsumeModifier"),
      p = a(u => {
        let d = o(u);
        if (d !== void 0) return d;
        let {
          type: g,
          index: y
        } = r[f];
        throw new TypeError(`Unexpected ${g} at ${y}, expected ${u}`);
      }, "mustConsume"),
      A = a(() => {
        let u = "",
          d;
        for (; d = o("CHAR") ?? o("ESCAPED_CHAR");) u += d;
        return u;
      }, "consumeText"),
      xe = a(u => u, "DefaultEncodePart"),
      N = t.encodePart || xe,
      H = "",
      $ = a(u => {
        H += u;
      }, "appendToPendingFixedValue"),
      M = a(() => {
        H.length && (c.push(new P(3, "", "", N(H), "", 3)), H = "");
      }, "maybeAddPartFromPendingFixedValue"),
      X = a((u, d, g, y, Z) => {
        let m = 3;
        switch (Z) {
          case "?":
            m = 1;
            break;
          case "*":
            m = 0;
            break;
          case "+":
            m = 2;
            break;
        }
        if (!d && !g && m === 3) {
          $(u);
          return;
        }
        if (M(), !d && !g) {
          if (!u) return;
          c.push(new P(3, "", "", N(u), "", m));
          return;
        }
        let S;
        g ? g === "*" ? S = v : S = g : S = n;
        let k = 2;
        S === n ? (k = 1, S = "") : S === v && (k = 0, S = "");
        let E;
        if (d ? E = d : g && (E = l++), i.has(E)) throw new TypeError(`Duplicate name '${E}'.`);
        i.add(E), c.push(new P(k, E, N(u), S, N(y), m));
      }, "addPart");
    for (; f < r.length;) {
      let u = o("CHAR"),
        d = o("NAME"),
        g = o("REGEX");
      if (!d && !g && (g = o("ASTERISK")), d || g) {
        let m = u ?? "";
        t.prefixes.indexOf(m) === -1 && ($(m), m = ""), M();
        let S = h();
        X(m, d, g, "", S);
        continue;
      }
      let y = u ?? o("ESCAPED_CHAR");
      if (y) {
        $(y);
        continue;
      }
      if (o("OPEN")) {
        let m = A(),
          S = o("NAME"),
          k = o("REGEX");
        !S && !k && (k = o("ASTERISK"));
        let E = A();
        p("CLOSE");
        let be = h();
        X(m, S, k, E, be);
        continue;
      }
      M(), p("END");
    }
    return c;
  }
  a(F, "parse");
  function x(e) {
    return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
  }
  a(x, "escapeString");
  function B(e) {
    return e && e.ignoreCase ? "ui" : "u";
  }
  a(B, "flags");
  function q(e, t, r) {
    return W(F(e, r), t, r);
  }
  a(q, "stringToRegexp");
  function T(e) {
    switch (e) {
      case 0:
        return "*";
      case 1:
        return "?";
      case 2:
        return "+";
      case 3:
        return "";
    }
  }
  a(T, "modifierToString");
  function W(e, t, r = {}) {
    r.delimiter ??= "/#?", r.prefixes ??= "./", r.sensitive ??= false, r.strict ??= false, r.end ??= true, r.start ??= true, r.endsWith = "";
    let n = r.start ? "^" : "";
    for (let s of e) {
      if (s.type === 3) {
        s.modifier === 3 ? n += x(s.value) : n += `(?:${x(s.value)})${T(s.modifier)}`;
        continue;
      }
      t && t.push(s.name);
      let i = `[^${x(r.delimiter)}]+?`,
        o = s.value;
      if (s.type === 1 ? o = i : s.type === 0 && (o = v), !s.prefix.length && !s.suffix.length) {
        s.modifier === 3 || s.modifier === 1 ? n += `(${o})${T(s.modifier)}` : n += `((?:${o})${T(s.modifier)})`;
        continue;
      }
      if (s.modifier === 3 || s.modifier === 1) {
        n += `(?:${x(s.prefix)}(${o})${x(s.suffix)})`, n += T(s.modifier);
        continue;
      }
      n += `(?:${x(s.prefix)}`, n += `((?:${o})(?:`, n += x(s.suffix), n += x(s.prefix), n += `(?:${o}))*)${x(s.suffix)})`, s.modifier === 0 && (n += "?");
    }
    let c = `[${x(r.endsWith)}]|$`,
      l = `[${x(r.delimiter)}]`;
    if (r.end) return r.strict || (n += `${l}?`), r.endsWith.length ? n += `(?=${c})` : n += "$", new RegExp(n, B(r));
    r.strict || (n += `(?:${l}(?=${c}))?`);
    let f = false;
    if (e.length) {
      let s = e[e.length - 1];
      s.type === 3 && s.modifier === 3 && (f = r.delimiter.indexOf(s) > -1);
    }
    return f || (n += `(?=${l}|${c})`), new RegExp(n, B(r));
  }
  a(W, "partsToRegexp");
  var b = {
    delimiter: "",
    prefixes: "",
    sensitive: true,
    strict: true
  };
  var J = {
    delimiter: ".",
    prefixes: "",
    sensitive: true,
    strict: true
  };
  var Q = {
    delimiter: "/",
    prefixes: "/",
    sensitive: true,
    strict: true
  };
  function ee(e, t) {
    return e.length ? e[0] === "/" ? true : !t || e.length < 2 ? false : (e[0] == "\\" || e[0] == "{") && e[1] == "/" : false;
  }
  a(ee, "isAbsolutePathname");
  function te(e, t) {
    return e.startsWith(t) ? e.substring(t.length, e.length) : e;
  }
  a(te, "maybeStripPrefix");
  function ke(e, t) {
    return e.endsWith(t) ? e.substr(0, e.length - t.length) : e;
  }
  a(ke, "maybeStripSuffix");
  function _(e) {
    return !e || e.length < 2 ? false : e[0] === "[" || (e[0] === "\\" || e[0] === "{") && e[1] === "[";
  }
  a(_, "treatAsIPv6Hostname");
  var re = ["ftp", "file", "http", "https", "ws", "wss"];
  function U(e) {
    if (!e) return true;
    for (let t of re) if (e.test(t)) return true;
    return false;
  }
  a(U, "isSpecialScheme");
  function ne(e, t) {
    if (e = te(e, "#"), t || e === "") return e;
    let r = new URL("https://example.com");
    return r.hash = e, r.hash ? r.hash.substring(1, r.hash.length) : "";
  }
  a(ne, "canonicalizeHash");
  function se(e, t) {
    if (e = te(e, "?"), t || e === "") return e;
    let r = new URL("https://example.com");
    return r.search = e, r.search ? r.search.substring(1, r.search.length) : "";
  }
  a(se, "canonicalizeSearch");
  function ie(e, t) {
    return t || e === "" ? e : _(e) ? K(e) : j(e);
  }
  a(ie, "canonicalizeHostname");
  function ae(e, t) {
    if (t || e === "") return e;
    let r = new URL("https://example.com");
    return r.password = e, r.password;
  }
  a(ae, "canonicalizePassword");
  function oe(e, t) {
    if (t || e === "") return e;
    let r = new URL("https://example.com");
    return r.username = e, r.username;
  }
  a(oe, "canonicalizeUsername");
  function ce(e, t, r) {
    if (r || e === "") return e;
    if (t && !re.includes(t)) return new URL(`${t}:${e}`).pathname;
    let n = e[0] == "/";
    return e = new URL(n ? e : "/-" + e, "https://example.com").pathname, n || (e = e.substring(2, e.length)), e;
  }
  a(ce, "canonicalizePathname");
  function le(e, t, r) {
    return z(t) === e && (e = ""), r || e === "" ? e : G(e);
  }
  a(le, "canonicalizePort");
  function fe(e, t) {
    return e = ke(e, ":"), t || e === "" ? e : w(e);
  }
  a(fe, "canonicalizeProtocol");
  function z(e) {
    switch (e) {
      case "ws":
      case "http":
        return "80";
      case "wws":
      case "https":
        return "443";
      case "ftp":
        return "21";
      default:
        return "";
    }
  }
  a(z, "defaultPortForProtocol");
  function w(e) {
    if (e === "") return e;
    if (/^[-+.A-Za-z0-9]*$/.test(e)) return e.toLowerCase();
    throw new TypeError(`Invalid protocol '${e}'.`);
  }
  a(w, "protocolEncodeCallback");
  function he(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.username = e, t.username;
  }
  a(he, "usernameEncodeCallback");
  function ue(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.password = e, t.password;
  }
  a(ue, "passwordEncodeCallback");
  function j(e) {
    if (e === "") return e;
    if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e)) throw new TypeError(`Invalid hostname '${e}'`);
    let t = new URL("https://example.com");
    return t.hostname = e, t.hostname;
  }
  a(j, "hostnameEncodeCallback");
  function K(e) {
    if (e === "") return e;
    if (/[^0-9a-fA-F[\]:]/g.test(e)) throw new TypeError(`Invalid IPv6 hostname '${e}'`);
    return e.toLowerCase();
  }
  a(K, "ipv6HostnameEncodeCallback");
  function G(e) {
    if (e === "" || /^[0-9]*$/.test(e) && parseInt(e) <= 65535) return e;
    throw new TypeError(`Invalid port '${e}'.`);
  }
  a(G, "portEncodeCallback");
  function de(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.pathname = e[0] !== "/" ? "/-" + e : e, e[0] !== "/" ? t.pathname.substring(2, t.pathname.length) : t.pathname;
  }
  a(de, "standardURLPathnameEncodeCallback");
  function pe(e) {
    return e === "" ? e : new URL(`data:${e}`).pathname;
  }
  a(pe, "pathURLPathnameEncodeCallback");
  function ge(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.search = e, t.search.substring(1, t.search.length);
  }
  a(ge, "searchEncodeCallback");
  function me(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.hash = e, t.hash.substring(1, t.hash.length);
  }
  a(me, "hashEncodeCallback");
  var C = (_i2 = /*#__PURE__*/new WeakMap(), _n = /*#__PURE__*/new WeakMap(), _t = /*#__PURE__*/new WeakMap(), _e = /*#__PURE__*/new WeakMap(), _s = /*#__PURE__*/new WeakMap(), _l = /*#__PURE__*/new WeakMap(), _o = /*#__PURE__*/new WeakMap(), _d = /*#__PURE__*/new WeakMap(), _p = /*#__PURE__*/new WeakMap(), _g = /*#__PURE__*/new WeakMap(), _Class4_brand = /*#__PURE__*/new WeakSet(), class C {
    constructor(_t2) {
      _classPrivateMethodInitSpec(this, _Class4_brand);
      _classPrivateFieldInitSpec(this, _i2, void 0);
      _classPrivateFieldInitSpec(this, _n, []);
      _classPrivateFieldInitSpec(this, _t, {});
      _classPrivateFieldInitSpec(this, _e, 0);
      _classPrivateFieldInitSpec(this, _s, 1);
      _classPrivateFieldInitSpec(this, _l, 0);
      _classPrivateFieldInitSpec(this, _o, 0);
      _classPrivateFieldInitSpec(this, _d, 0);
      _classPrivateFieldInitSpec(this, _p, 0);
      _classPrivateFieldInitSpec(this, _g, false);
      _classPrivateFieldSet(_i2, this, _t2);
    }
    get result() {
      return _classPrivateFieldGet(_t, this);
    }
    parse() {
      for (_classPrivateFieldSet(_n, this, D(_classPrivateFieldGet(_i2, this), true)); _classPrivateFieldGet(_e, this) < _classPrivateFieldGet(_n, this).length; _classPrivateFieldSet(_e, this, _classPrivateFieldGet(_e, this) + _classPrivateFieldGet(_s, this))) {
        if (_classPrivateFieldSet(_s, this, 1), _classPrivateFieldGet(_n, this)[_classPrivateFieldGet(_e, this)].type === "END") {
          if (_classPrivateFieldGet(_o, this) === 0) {
            _assertClassBrand(_Class4_brand, this, _b2).call(this), _assertClassBrand(_Class4_brand, this, _f).call(this) ? _assertClassBrand(_Class4_brand, this, _r).call(this, 9, 1) : _assertClassBrand(_Class4_brand, this, _h).call(this) ? _assertClassBrand(_Class4_brand, this, _r).call(this, 8, 1) : _assertClassBrand(_Class4_brand, this, _r).call(this, 7, 0);
            continue;
          } else if (_classPrivateFieldGet(_o, this) === 2) {
            _assertClassBrand(_Class4_brand, this, _u).call(this, 5);
            continue;
          }
          _assertClassBrand(_Class4_brand, this, _r).call(this, 10, 0);
          break;
        }
        if (_classPrivateFieldGet(_d, this) > 0) if (_assertClassBrand(_Class4_brand, this, _A).call(this)) _classPrivateFieldSet(_d, this, _classPrivateFieldGet(_d, this) - 1);else continue;
        if (_assertClassBrand(_Class4_brand, this, _T).call(this)) {
          _classPrivateFieldSet(_d, this, _classPrivateFieldGet(_d, this) + 1);
          continue;
        }
        switch (_classPrivateFieldGet(_o, this)) {
          case 0:
            _assertClassBrand(_Class4_brand, this, _P).call(this) && _assertClassBrand(_Class4_brand, this, _u).call(this, 1);
            break;
          case 1:
            if (_assertClassBrand(_Class4_brand, this, _P).call(this)) {
              _assertClassBrand(_Class4_brand, this, _C).call(this);
              let t = 7,
                r = 1;
              _assertClassBrand(_Class4_brand, this, _E).call(this) ? (t = 2, r = 3) : _classPrivateFieldGet(_g, this) && (t = 2), _assertClassBrand(_Class4_brand, this, _r).call(this, t, r);
            }
            break;
          case 2:
            _assertClassBrand(_Class4_brand, this, _S).call(this) ? _assertClassBrand(_Class4_brand, this, _u).call(this, 3) : (_assertClassBrand(_Class4_brand, this, _x).call(this) || _assertClassBrand(_Class4_brand, this, _h).call(this) || _assertClassBrand(_Class4_brand, this, _f).call(this)) && _assertClassBrand(_Class4_brand, this, _u).call(this, 5);
            break;
          case 3:
            _assertClassBrand(_Class4_brand, this, _O).call(this) ? _assertClassBrand(_Class4_brand, this, _r).call(this, 4, 1) : _assertClassBrand(_Class4_brand, this, _S).call(this) && _assertClassBrand(_Class4_brand, this, _r).call(this, 5, 1);
            break;
          case 4:
            _assertClassBrand(_Class4_brand, this, _S).call(this) && _assertClassBrand(_Class4_brand, this, _r).call(this, 5, 1);
            break;
          case 5:
            _assertClassBrand(_Class4_brand, this, _y).call(this) ? _classPrivateFieldSet(_p, this, _classPrivateFieldGet(_p, this) + 1) : _assertClassBrand(_Class4_brand, this, _w).call(this) && _classPrivateFieldSet(_p, this, _classPrivateFieldGet(_p, this) - 1), _assertClassBrand(_Class4_brand, this, _k).call(this) && !_classPrivateFieldGet(_p, this) ? _assertClassBrand(_Class4_brand, this, _r).call(this, 6, 1) : _assertClassBrand(_Class4_brand, this, _x).call(this) ? _assertClassBrand(_Class4_brand, this, _r).call(this, 7, 0) : _assertClassBrand(_Class4_brand, this, _h).call(this) ? _assertClassBrand(_Class4_brand, this, _r).call(this, 8, 1) : _assertClassBrand(_Class4_brand, this, _f).call(this) && _assertClassBrand(_Class4_brand, this, _r).call(this, 9, 1);
            break;
          case 6:
            _assertClassBrand(_Class4_brand, this, _x).call(this) ? _assertClassBrand(_Class4_brand, this, _r).call(this, 7, 0) : _assertClassBrand(_Class4_brand, this, _h).call(this) ? _assertClassBrand(_Class4_brand, this, _r).call(this, 8, 1) : _assertClassBrand(_Class4_brand, this, _f).call(this) && _assertClassBrand(_Class4_brand, this, _r).call(this, 9, 1);
            break;
          case 7:
            _assertClassBrand(_Class4_brand, this, _h).call(this) ? _assertClassBrand(_Class4_brand, this, _r).call(this, 8, 1) : _assertClassBrand(_Class4_brand, this, _f).call(this) && _assertClassBrand(_Class4_brand, this, _r).call(this, 9, 1);
            break;
          case 8:
            _assertClassBrand(_Class4_brand, this, _f).call(this) && _assertClassBrand(_Class4_brand, this, _r).call(this, 9, 1);
            break;
        }
      }
      _classPrivateFieldGet(_t, this).hostname !== void 0 && _classPrivateFieldGet(_t, this).port === void 0 && (_classPrivateFieldGet(_t, this).port = "");
    }
  });
  function _r(t, r) {
    switch (_classPrivateFieldGet(_o, this)) {
      case 0:
        break;
      case 1:
        _classPrivateFieldGet(_t, this).protocol = _assertClassBrand(_Class4_brand, this, _c2).call(this);
        break;
      case 2:
        break;
      case 3:
        _classPrivateFieldGet(_t, this).username = _assertClassBrand(_Class4_brand, this, _c2).call(this);
        break;
      case 4:
        _classPrivateFieldGet(_t, this).password = _assertClassBrand(_Class4_brand, this, _c2).call(this);
        break;
      case 5:
        _classPrivateFieldGet(_t, this).hostname = _assertClassBrand(_Class4_brand, this, _c2).call(this);
        break;
      case 6:
        _classPrivateFieldGet(_t, this).port = _assertClassBrand(_Class4_brand, this, _c2).call(this);
        break;
      case 7:
        _classPrivateFieldGet(_t, this).pathname = _assertClassBrand(_Class4_brand, this, _c2).call(this);
        break;
      case 8:
        _classPrivateFieldGet(_t, this).search = _assertClassBrand(_Class4_brand, this, _c2).call(this);
        break;
      case 9:
        _classPrivateFieldGet(_t, this).hash = _assertClassBrand(_Class4_brand, this, _c2).call(this);
        break;
    }
    _classPrivateFieldGet(_o, this) !== 0 && t !== 10 && ([1, 2, 3, 4].includes(_classPrivateFieldGet(_o, this)) && [6, 7, 8, 9].includes(t) && (_classPrivateFieldGet(_t, this).hostname ??= ""), [1, 2, 3, 4, 5, 6].includes(_classPrivateFieldGet(_o, this)) && [8, 9].includes(t) && (_classPrivateFieldGet(_t, this).pathname ??= _classPrivateFieldGet(_g, this) ? "/" : ""), [1, 2, 3, 4, 5, 6, 7].includes(_classPrivateFieldGet(_o, this)) && t === 9 && (_classPrivateFieldGet(_t, this).search ??= "")), _assertClassBrand(_Class4_brand, this, _R).call(this, t, r);
  }
  function _R(t, r) {
    _classPrivateFieldSet(_o, this, t), _classPrivateFieldSet(_l, this, _classPrivateFieldGet(_e, this) + r), _classPrivateFieldSet(_e, this, _classPrivateFieldGet(_e, this) + r), _classPrivateFieldSet(_s, this, 0);
  }
  function _b2() {
    _classPrivateFieldSet(_e, this, _classPrivateFieldGet(_l, this)), _classPrivateFieldSet(_s, this, 0);
  }
  function _u(t) {
    _assertClassBrand(_Class4_brand, this, _b2).call(this), _classPrivateFieldSet(_o, this, t);
  }
  function _m(t) {
    return t < 0 && (t = _classPrivateFieldGet(_n, this).length - t), t < _classPrivateFieldGet(_n, this).length ? _classPrivateFieldGet(_n, this)[t] : _classPrivateFieldGet(_n, this)[_classPrivateFieldGet(_n, this).length - 1];
  }
  function _a3(t, r) {
    let n = _assertClassBrand(_Class4_brand, this, _m).call(this, t);
    return n.value === r && (n.type === "CHAR" || n.type === "ESCAPED_CHAR" || n.type === "INVALID_CHAR");
  }
  function _P() {
    return _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this), ":");
  }
  function _E() {
    return _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this) + 1, "/") && _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this) + 2, "/");
  }
  function _S() {
    return _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this), "@");
  }
  function _O() {
    return _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this), ":");
  }
  function _k() {
    return _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this), ":");
  }
  function _x() {
    return _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this), "/");
  }
  function _h() {
    if (_assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this), "?")) return true;
    if (_classPrivateFieldGet(_n, this)[_classPrivateFieldGet(_e, this)].value !== "?") return false;
    let t = _assertClassBrand(_Class4_brand, this, _m).call(this, _classPrivateFieldGet(_e, this) - 1);
    return t.type !== "NAME" && t.type !== "REGEX" && t.type !== "CLOSE" && t.type !== "ASTERISK";
  }
  function _f() {
    return _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this), "#");
  }
  function _T() {
    return _classPrivateFieldGet(_n, this)[_classPrivateFieldGet(_e, this)].type == "OPEN";
  }
  function _A() {
    return _classPrivateFieldGet(_n, this)[_classPrivateFieldGet(_e, this)].type == "CLOSE";
  }
  function _y() {
    return _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this), "[");
  }
  function _w() {
    return _assertClassBrand(_Class4_brand, this, _a3).call(this, _classPrivateFieldGet(_e, this), "]");
  }
  function _c2() {
    let t = _classPrivateFieldGet(_n, this)[_classPrivateFieldGet(_e, this)],
      r = _assertClassBrand(_Class4_brand, this, _m).call(this, _classPrivateFieldGet(_l, this)).index;
    return _classPrivateFieldGet(_i2, this).substring(r, t.index);
  }
  function _C() {
    let t = {};
    Object.assign(t, b), t.encodePart = w;
    let r = q(_assertClassBrand(_Class4_brand, this, _c2).call(this), void 0, t);
    _classPrivateFieldSet(_g, this, U(r));
  }
  a(C, "Parser");
  var V = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"];
  var O = "*";
  function Se(e, t) {
    if (typeof e != "string") throw new TypeError("parameter 1 is not of type 'string'.");
    let r = new URL(e, t);
    return {
      protocol: r.protocol.substring(0, r.protocol.length - 1),
      username: r.username,
      password: r.password,
      hostname: r.hostname,
      port: r.port,
      pathname: r.pathname,
      search: r.search !== "" ? r.search.substring(1, r.search.length) : void 0,
      hash: r.hash !== "" ? r.hash.substring(1, r.hash.length) : void 0
    };
  }
  a(Se, "extractValues");
  function R(e, t) {
    return t ? I(e) : e;
  }
  a(R, "processBaseURLString");
  function L(e, t, r) {
    let n;
    if (typeof t.baseURL == "string") try {
      n = new URL(t.baseURL), t.protocol === void 0 && (e.protocol = R(n.protocol.substring(0, n.protocol.length - 1), r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && (e.username = R(n.username, r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && t.password === void 0 && (e.password = R(n.password, r)), t.protocol === void 0 && t.hostname === void 0 && (e.hostname = R(n.hostname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && (e.port = R(n.port, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && (e.pathname = R(n.pathname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && (e.search = R(n.search.substring(1, n.search.length), r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && t.hash === void 0 && (e.hash = R(n.hash.substring(1, n.hash.length), r));
    } catch {
      throw new TypeError(`invalid baseURL '${t.baseURL}'.`);
    }
    if (typeof t.protocol == "string" && (e.protocol = fe(t.protocol, r)), typeof t.username == "string" && (e.username = oe(t.username, r)), typeof t.password == "string" && (e.password = ae(t.password, r)), typeof t.hostname == "string" && (e.hostname = ie(t.hostname, r)), typeof t.port == "string" && (e.port = le(t.port, e.protocol, r)), typeof t.pathname == "string") {
      if (e.pathname = t.pathname, n && !ee(e.pathname, r)) {
        let c = n.pathname.lastIndexOf("/");
        c >= 0 && (e.pathname = R(n.pathname.substring(0, c + 1), r) + e.pathname);
      }
      e.pathname = ce(e.pathname, e.protocol, r);
    }
    return typeof t.search == "string" && (e.search = se(t.search, r)), typeof t.hash == "string" && (e.hash = ne(t.hash, r)), e;
  }
  a(L, "applyInit");
  function I(e) {
    return e.replace(/([+*?:{}()\\])/g, "\\$1");
  }
  a(I, "escapePatternString");
  function Te(e) {
    return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
  }
  a(Te, "escapeRegexpString");
  function Ae(e, t) {
    t.delimiter ??= "/#?", t.prefixes ??= "./", t.sensitive ??= false, t.strict ??= false, t.end ??= true, t.start ??= true, t.endsWith = "";
    let r = ".*",
      n = `[^${Te(t.delimiter)}]+?`,
      c = /[$_\u200C\u200D\p{ID_Continue}]/u,
      l = "";
    for (let f = 0; f < e.length; ++f) {
      let s = e[f];
      if (s.type === 3) {
        if (s.modifier === 3) {
          l += I(s.value);
          continue;
        }
        l += `{${I(s.value)}}${T(s.modifier)}`;
        continue;
      }
      let i = s.hasCustomName(),
        o = !!s.suffix.length || !!s.prefix.length && (s.prefix.length !== 1 || !t.prefixes.includes(s.prefix)),
        h = f > 0 ? e[f - 1] : null,
        p = f < e.length - 1 ? e[f + 1] : null;
      if (!o && i && s.type === 1 && s.modifier === 3 && p && !p.prefix.length && !p.suffix.length) if (p.type === 3) {
        let A = p.value.length > 0 ? p.value[0] : "";
        o = c.test(A);
      } else o = !p.hasCustomName();
      if (!o && !s.prefix.length && h && h.type === 3) {
        let A = h.value[h.value.length - 1];
        o = t.prefixes.includes(A);
      }
      o && (l += "{"), l += I(s.prefix), i && (l += `:${s.name}`), s.type === 2 ? l += `(${s.value})` : s.type === 1 ? i || (l += `(${n})`) : s.type === 0 && (!i && (!h || h.type === 3 || h.modifier !== 3 || o || s.prefix !== "") ? l += "*" : l += `(${r})`), s.type === 1 && i && s.suffix.length && c.test(s.suffix[0]) && (l += "\\"), l += I(s.suffix), o && (l += "}"), s.modifier !== 3 && (l += T(s.modifier));
    }
    return l;
  }
  a(Ae, "partsToPattern");
  var Y = (_i3 = /*#__PURE__*/new WeakMap(), _n2 = /*#__PURE__*/new WeakMap(), _t3 = /*#__PURE__*/new WeakMap(), _e2 = /*#__PURE__*/new WeakMap(), _s2 = /*#__PURE__*/new WeakMap(), _l2 = /*#__PURE__*/new WeakMap(), class Y {
    constructor(t = {}, r, n) {
      _classPrivateFieldInitSpec(this, _i3, void 0);
      _classPrivateFieldInitSpec(this, _n2, {});
      _classPrivateFieldInitSpec(this, _t3, {});
      _classPrivateFieldInitSpec(this, _e2, {});
      _classPrivateFieldInitSpec(this, _s2, {});
      _classPrivateFieldInitSpec(this, _l2, false);
      try {
        let c;
        if (typeof r == "string" ? c = r : n = r, typeof t == "string") {
          let i = new C(t);
          if (i.parse(), t = i.result, c === void 0 && typeof t.protocol != "string") throw new TypeError("A base URL must be provided for a relative constructor string.");
          t.baseURL = c;
        } else {
          if (!t || typeof t != "object") throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
          if (c) throw new TypeError("parameter 1 is not of type 'string'.");
        }
        typeof n > "u" && (n = {
          ignoreCase: false
        });
        let l = {
            ignoreCase: n.ignoreCase === true
          },
          f = {
            pathname: O,
            protocol: O,
            username: O,
            password: O,
            hostname: O,
            port: O,
            search: O,
            hash: O
          };
        _classPrivateFieldSet(_i3, this, L(f, t, true)), z(_classPrivateFieldGet(_i3, this).protocol) === _classPrivateFieldGet(_i3, this).port && (_classPrivateFieldGet(_i3, this).port = "");
        let s;
        for (s of V) {
          if (!(s in _classPrivateFieldGet(_i3, this))) continue;
          let i = {},
            o = _classPrivateFieldGet(_i3, this)[s];
          switch (_classPrivateFieldGet(_t3, this)[s] = [], s) {
            case "protocol":
              Object.assign(i, b), i.encodePart = w;
              break;
            case "username":
              Object.assign(i, b), i.encodePart = he;
              break;
            case "password":
              Object.assign(i, b), i.encodePart = ue;
              break;
            case "hostname":
              Object.assign(i, J), _(o) ? i.encodePart = K : i.encodePart = j;
              break;
            case "port":
              Object.assign(i, b), i.encodePart = G;
              break;
            case "pathname":
              U(_classPrivateFieldGet(_n2, this).protocol) ? (Object.assign(i, Q, l), i.encodePart = de) : (Object.assign(i, b, l), i.encodePart = pe);
              break;
            case "search":
              Object.assign(i, b, l), i.encodePart = ge;
              break;
            case "hash":
              Object.assign(i, b, l), i.encodePart = me;
              break;
          }
          try {
            _classPrivateFieldGet(_s2, this)[s] = F(o, i), _classPrivateFieldGet(_n2, this)[s] = W(_classPrivateFieldGet(_s2, this)[s], _classPrivateFieldGet(_t3, this)[s], i), _classPrivateFieldGet(_e2, this)[s] = Ae(_classPrivateFieldGet(_s2, this)[s], i), _classPrivateFieldSet(_l2, this, _classPrivateFieldGet(_l2, this) || _classPrivateFieldGet(_s2, this)[s].some(h => h.type === 2));
          } catch {
            throw new TypeError(`invalid ${s} pattern '${_classPrivateFieldGet(_i3, this)[s]}'.`);
          }
        }
      } catch (c) {
        throw new TypeError(`Failed to construct 'URLPattern': ${c.message}`);
      }
    }
    get [Symbol.toStringTag]() {
      return "URLPattern";
    }
    test(t = {}, r) {
      let n = {
        pathname: "",
        protocol: "",
        username: "",
        password: "",
        hostname: "",
        port: "",
        search: "",
        hash: ""
      };
      if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
      if (typeof t > "u") return false;
      try {
        typeof t == "object" ? n = L(n, t, false) : n = L(n, Se(t, r), false);
      } catch {
        return false;
      }
      let c;
      for (c of V) if (!_classPrivateFieldGet(_n2, this)[c].exec(n[c])) return false;
      return true;
    }
    exec(t = {}, r) {
      let n = {
        pathname: "",
        protocol: "",
        username: "",
        password: "",
        hostname: "",
        port: "",
        search: "",
        hash: ""
      };
      if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
      if (typeof t > "u") return;
      try {
        typeof t == "object" ? n = L(n, t, false) : n = L(n, Se(t, r), false);
      } catch {
        return null;
      }
      let c = {};
      r ? c.inputs = [t, r] : c.inputs = [t];
      let l;
      for (l of V) {
        let f = _classPrivateFieldGet(_n2, this)[l].exec(n[l]);
        if (!f) return null;
        let s = {};
        for (let [i, o] of _classPrivateFieldGet(_t3, this)[l].entries()) if (typeof o == "string" || typeof o == "number") {
          let h = f[i + 1];
          s[o] = h;
        }
        c[l] = {
          input: n[l] ?? "",
          groups: s
        };
      }
      return c;
    }
    static compareComponent(t, r, n) {
      let c = a((i, o) => {
          for (let h of ["type", "modifier", "prefix", "value", "suffix"]) {
            if (i[h] < o[h]) return -1;
            if (i[h] === o[h]) continue;
            return 1;
          }
          return 0;
        }, "comparePart"),
        l = new P(3, "", "", "", "", 3),
        f = new P(0, "", "", "", "", 3),
        s = a((i, o) => {
          let h = 0;
          for (; h < Math.min(i.length, o.length); ++h) {
            let p = c(i[h], o[h]);
            if (p) return p;
          }
          return i.length === o.length ? 0 : c(i[h] ?? l, o[h] ?? l);
        }, "comparePartList");
      return !_classPrivateFieldGet(_e2, r)[t] && !_classPrivateFieldGet(_e2, n)[t] ? 0 : _classPrivateFieldGet(_e2, r)[t] && !_classPrivateFieldGet(_e2, n)[t] ? s(_classPrivateFieldGet(_s2, r)[t], [f]) : !_classPrivateFieldGet(_e2, r)[t] && _classPrivateFieldGet(_e2, n)[t] ? s([f], _classPrivateFieldGet(_s2, n)[t]) : s(_classPrivateFieldGet(_s2, r)[t], _classPrivateFieldGet(_s2, n)[t]);
    }
    get protocol() {
      return _classPrivateFieldGet(_e2, this).protocol;
    }
    get username() {
      return _classPrivateFieldGet(_e2, this).username;
    }
    get password() {
      return _classPrivateFieldGet(_e2, this).password;
    }
    get hostname() {
      return _classPrivateFieldGet(_e2, this).hostname;
    }
    get port() {
      return _classPrivateFieldGet(_e2, this).port;
    }
    get pathname() {
      return _classPrivateFieldGet(_e2, this).pathname;
    }
    get search() {
      return _classPrivateFieldGet(_e2, this).search;
    }
    get hash() {
      return _classPrivateFieldGet(_e2, this).hash;
    }
    get hasRegExpGroups() {
      return _classPrivateFieldGet(_l2, this);
    }
  });
  a(Y, "URLPattern");

  // node_modules/urlpattern-polyfill/index.js
  if (!globalThis.URLPattern) {
    globalThis.URLPattern = Y;
  }

  /**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  function isPageTargetBecomingPrimary(target, newTargetInfo) {
    return Boolean(target._subtype()) && !newTargetInfo.subtype;
  }
  /**
   * TargetManager encapsulates all interactions with CDP targets and is
   * responsible for coordinating the configuration of targets with the rest of
   * Puppeteer. Code outside of this class should not subscribe `Target.*` events
   * and only use the TargetManager events.
   *
   * TargetManager uses the CDP's auto-attach mechanism to intercept
   * new targets and allow the rest of Puppeteer to configure listeners while
   * the target is paused.
   *
   * @internal
   */
  var _connection4 = /*#__PURE__*/new WeakMap();
  var _discoveredTargetsByTargetId = /*#__PURE__*/new WeakMap();
  var _attachedTargetsByTargetId = /*#__PURE__*/new WeakMap();
  var _attachedTargetsBySessionId = /*#__PURE__*/new WeakMap();
  var _ignoredTargets = /*#__PURE__*/new WeakMap();
  var _targetFilterCallback = /*#__PURE__*/new WeakMap();
  var _targetFactory = /*#__PURE__*/new WeakMap();
  var _attachedToTargetListenersBySession = /*#__PURE__*/new WeakMap();
  var _detachedFromTargetListenersBySession = /*#__PURE__*/new WeakMap();
  var _initializeDeferred = /*#__PURE__*/new WeakMap();
  var _waitForInitiallyDiscoveredTargets = /*#__PURE__*/new WeakMap();
  var _discoveryFilter = /*#__PURE__*/new WeakMap();
  var _targetsIdsForInit = /*#__PURE__*/new WeakMap();
  var _initialAttachDone = /*#__PURE__*/new WeakMap();
  var _blocklist = /*#__PURE__*/new WeakMap();
  var _allowlist = /*#__PURE__*/new WeakMap();
  var _TargetManager_brand = /*#__PURE__*/new WeakSet();
  var _silentDetach = /*#__PURE__*/new WeakMap();
  var _getParentTarget = /*#__PURE__*/new WeakMap();
  var _onSessionDetached = /*#__PURE__*/new WeakMap();
  var _onTargetCreated = /*#__PURE__*/new WeakMap();
  var _onTargetDestroyed = /*#__PURE__*/new WeakMap();
  var _onTargetInfoChanged = /*#__PURE__*/new WeakMap();
  var _onAttachedToTarget2 = /*#__PURE__*/new WeakMap();
  var _onDetachedFromTarget2 = /*#__PURE__*/new WeakMap();
  var _maybeSetupNetworkConditions = /*#__PURE__*/new WeakMap();
  class TargetManager extends EventEmitter {
    constructor(connection, targetFactory, targetFilterCallback, waitForInitiallyDiscoveredTargets = true, blocklist, allowlist) {
      super();
      _classPrivateMethodInitSpec(this, _TargetManager_brand);
      _classPrivateFieldInitSpec(this, _connection4, void 0);
      /**
       * Keeps track of the following events: 'Target.targetCreated',
       * 'Target.targetDestroyed', 'Target.targetInfoChanged'.
       *
       * A target becomes discovered when 'Target.targetCreated' is received.
       * A target is removed from this map once 'Target.targetDestroyed' is
       * received.
       *
       * `targetFilterCallback` has no effect on this map.
       */
      _classPrivateFieldInitSpec(this, _discoveredTargetsByTargetId, new Map());
      /**
       * A target is added to this map once TargetManager has created
       * a Target and attached at least once to it.
       */
      _classPrivateFieldInitSpec(this, _attachedTargetsByTargetId, new Map());
      /**
       * Tracks which sessions attach to which target.
       */
      _classPrivateFieldInitSpec(this, _attachedTargetsBySessionId, new Map());
      /**
       * If a target was filtered out by `targetFilterCallback`, we still receive
       * events about it from CDP, but we don't forward them to the rest of Puppeteer.
       */
      _classPrivateFieldInitSpec(this, _ignoredTargets, new Set());
      _classPrivateFieldInitSpec(this, _targetFilterCallback, void 0);
      _classPrivateFieldInitSpec(this, _targetFactory, void 0);
      _classPrivateFieldInitSpec(this, _attachedToTargetListenersBySession, new WeakMap());
      _classPrivateFieldInitSpec(this, _detachedFromTargetListenersBySession, new WeakMap());
      _classPrivateFieldInitSpec(this, _initializeDeferred, Deferred.create());
      _classPrivateFieldInitSpec(this, _waitForInitiallyDiscoveredTargets, true);
      _classPrivateFieldInitSpec(this, _discoveryFilter, [{}]);
      // IDs of tab targets detected while running the initial Target.setAutoAttach
      // request. These are the targets whose initialization we want to await for
      // before resolving puppeteer.connect() or launch() to avoid flakiness.
      // Whenever a sub-target whose parent is a tab target is attached, we remove
      // the tab target from this list. Once the list is empty, we resolve the
      // initializeDeferred.
      _classPrivateFieldInitSpec(this, _targetsIdsForInit, new Set());
      // This is false until the connection-level Target.setAutoAttach request is
      // done. It indicates whethere we are running the initial auto-attach step or
      // if we are handling targets after that.
      _classPrivateFieldInitSpec(this, _initialAttachDone, false);
      _classPrivateFieldInitSpec(this, _blocklist, []);
      _classPrivateFieldInitSpec(this, _allowlist, []);
      _classPrivateFieldInitSpec(this, _silentDetach, async (session, parentSession) => {
        await session.send('Runtime.runIfWaitingForDebugger').catch(debugError);
        // We don't use `session.detach()` because that dispatches all commands on
        // the connection instead of the parent session.
        await parentSession.send('Target.detachFromTarget', {
          sessionId: session.id()
        }).catch(debugError);
      });
      _classPrivateFieldInitSpec(this, _getParentTarget, parentSession => {
        return parentSession instanceof CdpCDPSession ? parentSession.target() : null;
      });
      _classPrivateFieldInitSpec(this, _onSessionDetached, session => {
        _assertClassBrand(_TargetManager_brand, this, _removeAttachmentListeners).call(this, session);
      });
      _classPrivateFieldInitSpec(this, _onTargetCreated, async event => {
        _classPrivateFieldGet(_discoveredTargetsByTargetId, this).set(event.targetInfo.targetId, event.targetInfo);
        this.emit("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */, event.targetInfo);
        // The connection is already attached to the browser target implicitly,
        // therefore, no new CDPSession is created and we have special handling
        // here.
        if (event.targetInfo.type === 'browser' && event.targetInfo.attached) {
          if (_classPrivateFieldGet(_attachedTargetsByTargetId, this).has(event.targetInfo.targetId)) {
            return;
          }
          const target = _classPrivateFieldGet(_targetFactory, this).call(this, event.targetInfo, undefined);
          target._initialize();
          _classPrivateFieldGet(_attachedTargetsByTargetId, this).set(event.targetInfo.targetId, target);
        }
      });
      _classPrivateFieldInitSpec(this, _onTargetDestroyed, event => {
        const targetInfo = _classPrivateFieldGet(_discoveredTargetsByTargetId, this).get(event.targetId);
        _classPrivateFieldGet(_discoveredTargetsByTargetId, this).delete(event.targetId);
        _assertClassBrand(_TargetManager_brand, this, _finishInitializationIfReady).call(this, event.targetId);
        if (targetInfo?.type === 'service_worker') {
          // Special case for service workers: report TargetGone event when
          // the worker is destroyed.
          const target = _classPrivateFieldGet(_attachedTargetsByTargetId, this).get(event.targetId);
          if (target) {
            this.emit("targetGone" /* TargetManagerEvent.TargetGone */, target);
            _classPrivateFieldGet(_attachedTargetsByTargetId, this).delete(event.targetId);
          }
        }
      });
      _classPrivateFieldInitSpec(this, _onTargetInfoChanged, event => {
        _classPrivateFieldGet(_discoveredTargetsByTargetId, this).set(event.targetInfo.targetId, event.targetInfo);
        if (_classPrivateFieldGet(_ignoredTargets, this).has(event.targetInfo.targetId) || !event.targetInfo.attached) {
          return;
        }
        const target = _classPrivateFieldGet(_attachedTargetsByTargetId, this).get(event.targetInfo.targetId);
        if (!target) {
          return;
        }
        const previousURL = target.url();
        const wasInitialized = target._initializedDeferred.value() === exports.InitializationStatus.SUCCESS;
        if (isPageTargetBecomingPrimary(target, event.targetInfo)) {
          const session = target._session();
          assert(session, 'Target that is being activated is missing a CDPSession.');
          session.parentSession()?.emit(exports.CDPSessionEvent.Swapped, session);
        }
        target._targetInfoChanged(event.targetInfo);
        if (wasInitialized && previousURL !== target.url()) {
          this.emit("targetChanged" /* TargetManagerEvent.TargetChanged */, {
            target,
            wasInitialized,
            previousURL
          });
        }
      });
      _classPrivateFieldInitSpec(this, _onAttachedToTarget2, async (parentSession, event) => {
        const targetInfo = event.targetInfo;
        const session = _classPrivateFieldGet(_connection4, this)._session(event.sessionId);
        if (!session) {
          throw new Error(`Session ${event.sessionId} was not created.`);
        }
        if (!_classPrivateFieldGet(_connection4, this).isAutoAttached(targetInfo.targetId)) {
          return;
        }
        // If we connect to a browser that is already open,
        // immediately detach from any tab that is on the blocklist.
        if (!_classPrivateFieldGet(_initialAttachDone, this) && !this.isUrlAllowed(targetInfo.url)) {
          await _classPrivateFieldGet(_silentDetach, this).call(this, session, parentSession);
          return;
        }
        // Special case for service workers: being attached to service workers will
        // prevent them from ever being destroyed. Therefore, we silently detach
        // from service workers unless the connection was manually created via
        // `page.worker()`. To determine this, we use
        // `this.#connection.isAutoAttached(targetInfo.targetId)`. In the future, we
        // should determine if a target is auto-attached or not with the help of
        // CDP.
        if (targetInfo.type === 'service_worker') {
          await _classPrivateFieldGet(_silentDetach, this).call(this, session, parentSession);
          if (_classPrivateFieldGet(_attachedTargetsByTargetId, this).has(targetInfo.targetId) || _classPrivateFieldGet(_ignoredTargets, this).has(targetInfo.targetId) || !_classPrivateFieldGet(_discoveredTargetsByTargetId, this).has(targetInfo.targetId)) {
            return;
          }
          const target = _classPrivateFieldGet(_targetFactory, this).call(this, targetInfo);
          target._initialize();
          _classPrivateFieldGet(_attachedTargetsByTargetId, this).set(targetInfo.targetId, target);
          this.emit("targetAvailable" /* TargetManagerEvent.TargetAvailable */, target);
          return;
        }
        let target = _classPrivateFieldGet(_attachedTargetsByTargetId, this).get(targetInfo.targetId);
        const isExistingTarget = target !== undefined;
        if (!target) {
          target = _classPrivateFieldGet(_targetFactory, this).call(this, targetInfo, session, parentSession instanceof CdpCDPSession ? parentSession : undefined);
        }
        const parentTarget = _classPrivateFieldGet(_getParentTarget, this).call(this, parentSession);
        if (_classPrivateFieldGet(_targetFilterCallback, this) && !_classPrivateFieldGet(_targetFilterCallback, this).call(this, target)) {
          _classPrivateFieldGet(_ignoredTargets, this).add(targetInfo.targetId);
          if (parentTarget?.type() === 'tab') {
            _assertClassBrand(_TargetManager_brand, this, _finishInitializationIfReady).call(this, parentTarget._targetId);
          }
          await _classPrivateFieldGet(_silentDetach, this).call(this, session, parentSession);
          return;
        }
        if (_classPrivateFieldGet(_waitForInitiallyDiscoveredTargets, this) && event.targetInfo.type === 'tab' && !_classPrivateFieldGet(_initialAttachDone, this)) {
          _classPrivateFieldGet(_targetsIdsForInit, this).add(event.targetInfo.targetId);
        }
        _assertClassBrand(_TargetManager_brand, this, _setupAttachmentListeners).call(this, session);
        if (isExistingTarget) {
          session.setTarget(target);
          _classPrivateFieldGet(_attachedTargetsBySessionId, this).set(session.id(), target);
        } else {
          target._initialize();
          _classPrivateFieldGet(_attachedTargetsByTargetId, this).set(targetInfo.targetId, target);
          _classPrivateFieldGet(_attachedTargetsBySessionId, this).set(session.id(), target);
        }
        parentTarget?._addChildTarget(target);
        parentSession.emit(exports.CDPSessionEvent.Ready, session);
        if (!isExistingTarget) {
          this.emit("targetAvailable" /* TargetManagerEvent.TargetAvailable */, target);
        }
        if (parentTarget?.type() === 'tab') {
          _assertClassBrand(_TargetManager_brand, this, _finishInitializationIfReady).call(this, parentTarget._targetId);
        }
        // TODO: the browser might be shutting down here. What do we do with the
        // error?
        await Promise.all([session.send('Target.setAutoAttach', {
          waitForDebuggerOnStart: true,
          flatten: true,
          autoAttach: true,
          filter: _classPrivateFieldGet(_discoveryFilter, this)
        }), _classPrivateFieldGet(_maybeSetupNetworkConditions, this).call(this, session), session.send('Runtime.runIfWaitingForDebugger')]).catch(debugError);
      });
      _classPrivateFieldInitSpec(this, _onDetachedFromTarget2, (parentSession, event) => {
        const target = _classPrivateFieldGet(_attachedTargetsBySessionId, this).get(event.sessionId);
        _classPrivateFieldGet(_attachedTargetsBySessionId, this).delete(event.sessionId);
        if (!target) {
          return;
        }
        if (parentSession instanceof CdpCDPSession) {
          parentSession.target()._removeChildTarget(target);
        }
        _classPrivateFieldGet(_attachedTargetsByTargetId, this).delete(target._targetId);
        this.emit("targetGone" /* TargetManagerEvent.TargetGone */, target);
      });
      /**
       * Helper to validate URL against blocklist patterns
       */
      _defineProperty(this, "isUrlAllowed", url => {
        if (_classPrivateFieldGet(_blocklist, this).length === 0 && _classPrivateFieldGet(_allowlist, this).length === 0) {
          return true;
        }
        // Always allow internal or setup pages
        if (!url || url === 'about:blank') {
          return true;
        }
        for (const item of _classPrivateFieldGet(_blocklist, this)) {
          if (item.pattern.test(url)) {
            return false;
          }
        }
        if (_classPrivateFieldGet(_allowlist, this).length > 0) {
          for (const item of _classPrivateFieldGet(_allowlist, this)) {
            if (item.pattern.test(url)) {
              return true;
            }
          }
          return false;
        }
        return true;
      });
      _classPrivateFieldInitSpec(this, _maybeSetupNetworkConditions, async session => {
        if (_classPrivateFieldGet(_blocklist, this).length === 0 && _classPrivateFieldGet(_allowlist, this).length === 0) {
          return;
        }
        const matchedNetworkConditions = [];
        for (const item of _classPrivateFieldGet(_blocklist, this)) {
          matchedNetworkConditions.push({
            urlPattern: item.rule,
            offline: true,
            latency: 0,
            downloadThroughput: -1,
            uploadThroughput: -1
          });
        }
        if (_classPrivateFieldGet(_allowlist, this).length > 0) {
          for (const item of _classPrivateFieldGet(_allowlist, this)) {
            matchedNetworkConditions.push({
              urlPattern: item.rule,
              offline: false,
              latency: 0,
              downloadThroughput: -1,
              uploadThroughput: -1
            });
          }
          matchedNetworkConditions.push({
            urlPattern: '',
            offline: true,
            latency: 0,
            downloadThroughput: -1,
            uploadThroughput: -1
          });
        }
        await session.send('Network.emulateNetworkConditionsByRule', {
          // @ts-expect-error offline cannot be undefined before M149.
          offline: _classPrivateFieldGet(_blocklist, this).length > 0 ? true : undefined,
          matchedNetworkConditions
        });
      });
      if (blocklist && allowlist) {
        throw new Error('Cannot specify both blockList and allowList');
      }
      _classPrivateFieldSet(_connection4, this, connection);
      _classPrivateFieldSet(_targetFilterCallback, this, targetFilterCallback);
      _classPrivateFieldSet(_targetFactory, this, targetFactory);
      _classPrivateFieldSet(_waitForInitiallyDiscoveredTargets, this, waitForInitiallyDiscoveredTargets);
      _classPrivateFieldSet(_blocklist, this, _assertClassBrand(_TargetManager_brand, this, _mapPatterns).call(this, blocklist));
      _classPrivateFieldSet(_allowlist, this, _assertClassBrand(_TargetManager_brand, this, _mapPatterns).call(this, allowlist));
      _classPrivateFieldGet(_connection4, this).on('Target.targetCreated', _classPrivateFieldGet(_onTargetCreated, this));
      _classPrivateFieldGet(_connection4, this).on('Target.targetDestroyed', _classPrivateFieldGet(_onTargetDestroyed, this));
      _classPrivateFieldGet(_connection4, this).on('Target.targetInfoChanged', _classPrivateFieldGet(_onTargetInfoChanged, this));
      _classPrivateFieldGet(_connection4, this).on(exports.CDPSessionEvent.SessionDetached, _classPrivateFieldGet(_onSessionDetached, this));
      _assertClassBrand(_TargetManager_brand, this, _setupAttachmentListeners).call(this, _classPrivateFieldGet(_connection4, this));
    }
    async initialize() {
      await _classPrivateFieldGet(_connection4, this).send('Target.setDiscoverTargets', {
        discover: true,
        filter: _classPrivateFieldGet(_discoveryFilter, this)
      });
      await _classPrivateFieldGet(_connection4, this).send('Target.setAutoAttach', {
        waitForDebuggerOnStart: true,
        flatten: true,
        autoAttach: true,
        filter: [{
          type: 'page',
          exclude: true
        }, ..._classPrivateFieldGet(_discoveryFilter, this)]
      });
      _classPrivateFieldSet(_initialAttachDone, this, true);
      _assertClassBrand(_TargetManager_brand, this, _finishInitializationIfReady).call(this);
      await _classPrivateFieldGet(_initializeDeferred, this).valueOrThrow();
    }
    addToIgnoreTarget(targetId) {
      _classPrivateFieldGet(_ignoredTargets, this).add(targetId);
    }
    getChildTargets(target) {
      return target._childTargets();
    }
    dispose() {
      _classPrivateFieldGet(_connection4, this).off('Target.targetCreated', _classPrivateFieldGet(_onTargetCreated, this));
      _classPrivateFieldGet(_connection4, this).off('Target.targetDestroyed', _classPrivateFieldGet(_onTargetDestroyed, this));
      _classPrivateFieldGet(_connection4, this).off('Target.targetInfoChanged', _classPrivateFieldGet(_onTargetInfoChanged, this));
      _classPrivateFieldGet(_connection4, this).off(exports.CDPSessionEvent.SessionDetached, _classPrivateFieldGet(_onSessionDetached, this));
      _assertClassBrand(_TargetManager_brand, this, _removeAttachmentListeners).call(this, _classPrivateFieldGet(_connection4, this));
    }
    getAvailableTargets() {
      return _classPrivateFieldGet(_attachedTargetsByTargetId, this);
    }
    getDiscoveredTargetInfos() {
      return _classPrivateFieldGet(_discoveredTargetsByTargetId, this);
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  function _setupAttachmentListeners(session) {
    const listener = event => {
      void _classPrivateFieldGet(_onAttachedToTarget2, this).call(this, session, event);
    };
    assert(!_classPrivateFieldGet(_attachedToTargetListenersBySession, this).has(session));
    _classPrivateFieldGet(_attachedToTargetListenersBySession, this).set(session, listener);
    session.on('Target.attachedToTarget', listener);
    const detachedListener = event => {
      return _classPrivateFieldGet(_onDetachedFromTarget2, this).call(this, session, event);
    };
    assert(!_classPrivateFieldGet(_detachedFromTargetListenersBySession, this).has(session));
    _classPrivateFieldGet(_detachedFromTargetListenersBySession, this).set(session, detachedListener);
    session.on('Target.detachedFromTarget', detachedListener);
  }
  function _removeAttachmentListeners(session) {
    const listener = _classPrivateFieldGet(_attachedToTargetListenersBySession, this).get(session);
    if (listener) {
      session.off('Target.attachedToTarget', listener);
      _classPrivateFieldGet(_attachedToTargetListenersBySession, this).delete(session);
    }
    const detachedListener = _classPrivateFieldGet(_detachedFromTargetListenersBySession, this).get(session);
    if (detachedListener) {
      session.off('Target.detachedFromTarget', detachedListener);
      _classPrivateFieldGet(_detachedFromTargetListenersBySession, this).delete(session);
    }
  }
  function _finishInitializationIfReady(targetId) {
    if (targetId !== undefined) {
      _classPrivateFieldGet(_targetsIdsForInit, this).delete(targetId);
    }
    // If we are still initializing it might be that we have not learned about
    // some targets yet.
    if (!_classPrivateFieldGet(_initialAttachDone, this)) {
      return;
    }
    if (_classPrivateFieldGet(_targetsIdsForInit, this).size === 0) {
      _classPrivateFieldGet(_initializeDeferred, this).resolve();
    }
  }
  function _mapPatterns(rules) {
    const result = [];
    for (const rule of rules ?? []) {
      result.push({
        pattern: new Y(rule),
        rule
      });
    }
    return result;
  }
  function isDevToolsPageTarget(url) {
    return url.startsWith('devtools://devtools/bundled/devtools_app.html');
  }
  /**
   * @internal
   */
  var _defaultViewport2 = /*#__PURE__*/new WeakMap();
  var _process = /*#__PURE__*/new WeakMap();
  var _connection5 = /*#__PURE__*/new WeakMap();
  var _closeCallback = /*#__PURE__*/new WeakMap();
  var _targetFilterCallback2 = /*#__PURE__*/new WeakMap();
  var _isPageTargetCallback = /*#__PURE__*/new WeakMap();
  var _defaultContext = /*#__PURE__*/new WeakMap();
  var _contexts = /*#__PURE__*/new WeakMap();
  var _networkEnabled2 = /*#__PURE__*/new WeakMap();
  var _issuesEnabled = /*#__PURE__*/new WeakMap();
  var _targetManager3 = /*#__PURE__*/new WeakMap();
  var _handleDevToolsAsPage = /*#__PURE__*/new WeakMap();
  var _extensions = /*#__PURE__*/new WeakMap();
  var _emitDisconnected = /*#__PURE__*/new WeakMap();
  var _CdpBrowser_brand = /*#__PURE__*/new WeakSet();
  var _createTarget = /*#__PURE__*/new WeakMap();
  var _onAttachedToTarget3 = /*#__PURE__*/new WeakMap();
  var _onDetachedFromTarget3 = /*#__PURE__*/new WeakMap();
  var _onTargetChanged = /*#__PURE__*/new WeakMap();
  var _onTargetDiscovered = /*#__PURE__*/new WeakMap();
  class CdpBrowser extends Browser {
    static async _create(connection, contextIds, acceptInsecureCerts, defaultViewport, downloadBehavior, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true, networkEnabled = true, issuesEnabled = true, handleDevToolsAsPage = false, blocklist, allowlist) {
      const browser = new CdpBrowser(connection, contextIds, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets, networkEnabled, issuesEnabled, handleDevToolsAsPage, blocklist, allowlist);
      if (allowlist) {
        const version = await _assertClassBrand(_CdpBrowser_brand, browser, _getVersion).call(browser);
        const majorVersion = parseInt(version.product.match(/\d+/)?.[0] ?? '0', 10);
        if (majorVersion < 149) {
          throw new Error('The allowlist option require Chrome 149 or greater.');
        }
      }
      if (acceptInsecureCerts) {
        await connection.send('Security.setIgnoreCertificateErrors', {
          ignore: true
        });
      }
      await browser._attach(downloadBehavior);
      return browser;
    }
    constructor(connection, contextIds, defaultViewport, process, closeCallback, targetFilterCallback, _isPageTargetCallback2, waitForInitiallyDiscoveredTargets = true, networkEnabled = true, issuesEnabled = true, handleDevToolsAsPage = false, blocklist, allowlist) {
      super();
      _classPrivateMethodInitSpec(this, _CdpBrowser_brand);
      _defineProperty(this, "protocol", 'cdp');
      _classPrivateFieldInitSpec(this, _defaultViewport2, void 0);
      _classPrivateFieldInitSpec(this, _process, void 0);
      _classPrivateFieldInitSpec(this, _connection5, void 0);
      _classPrivateFieldInitSpec(this, _closeCallback, void 0);
      _classPrivateFieldInitSpec(this, _targetFilterCallback2, void 0);
      _classPrivateFieldInitSpec(this, _isPageTargetCallback, void 0);
      _classPrivateFieldInitSpec(this, _defaultContext, void 0);
      _classPrivateFieldInitSpec(this, _contexts, new Map());
      _classPrivateFieldInitSpec(this, _networkEnabled2, true);
      _classPrivateFieldInitSpec(this, _issuesEnabled, true);
      _classPrivateFieldInitSpec(this, _targetManager3, void 0);
      _classPrivateFieldInitSpec(this, _handleDevToolsAsPage, false);
      _classPrivateFieldInitSpec(this, _extensions, new Map());
      _classPrivateFieldInitSpec(this, _emitDisconnected, () => {
        this.emit("disconnected" /* BrowserEvent.Disconnected */, undefined);
      });
      _classPrivateFieldInitSpec(this, _createTarget, (targetInfo, session) => {
        const {
          browserContextId
        } = targetInfo;
        const context = browserContextId && _classPrivateFieldGet(_contexts, this).has(browserContextId) ? _classPrivateFieldGet(_contexts, this).get(browserContextId) : _classPrivateFieldGet(_defaultContext, this);
        if (!context) {
          throw new Error('Missing browser context');
        }
        const createSession = isAutoAttachEmulated => {
          return _classPrivateFieldGet(_connection5, this)._createSession(targetInfo, isAutoAttachEmulated);
        };
        const otherTarget = new OtherTarget(targetInfo, session, context, _classPrivateFieldGet(_targetManager3, this), createSession);
        if (targetInfo.url && isDevToolsPageTarget(targetInfo.url)) {
          return new DevToolsTarget(targetInfo, session, context, _classPrivateFieldGet(_targetManager3, this), createSession, _classPrivateFieldGet(_defaultViewport2, this) ?? null);
        }
        if (_classPrivateFieldGet(_isPageTargetCallback, this).call(this, otherTarget)) {
          return new PageTarget(targetInfo, session, context, _classPrivateFieldGet(_targetManager3, this), createSession, _classPrivateFieldGet(_defaultViewport2, this) ?? null);
        }
        if (targetInfo.type === 'service_worker' || targetInfo.type === 'shared_worker') {
          return new WorkerTarget(targetInfo, session, context, _classPrivateFieldGet(_targetManager3, this), createSession);
        }
        return otherTarget;
      });
      _classPrivateFieldInitSpec(this, _onAttachedToTarget3, async target => {
        if (target._isTargetExposed() && (await target._initializedDeferred.valueOrThrow()) === exports.InitializationStatus.SUCCESS) {
          this.emit("targetcreated" /* BrowserEvent.TargetCreated */, target);
          target.browserContext().emit("targetcreated" /* BrowserContextEvent.TargetCreated */, target);
        }
      });
      _classPrivateFieldInitSpec(this, _onDetachedFromTarget3, async target => {
        target._initializedDeferred.resolve(exports.InitializationStatus.ABORTED);
        target._isClosedDeferred.resolve();
        if (target._isTargetExposed() && (await target._initializedDeferred.valueOrThrow()) === exports.InitializationStatus.SUCCESS) {
          this.emit("targetdestroyed" /* BrowserEvent.TargetDestroyed */, target);
          target.browserContext().emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target);
        }
      });
      _classPrivateFieldInitSpec(this, _onTargetChanged, ({
        target
      }) => {
        this.emit("targetchanged" /* BrowserEvent.TargetChanged */, target);
        target.browserContext().emit("targetchanged" /* BrowserContextEvent.TargetChanged */, target);
      });
      _classPrivateFieldInitSpec(this, _onTargetDiscovered, targetInfo => {
        this.emit("targetdiscovered" /* BrowserEvent.TargetDiscovered */, targetInfo);
      });
      _classPrivateFieldSet(_networkEnabled2, this, networkEnabled);
      _classPrivateFieldSet(_issuesEnabled, this, issuesEnabled);
      _classPrivateFieldSet(_defaultViewport2, this, defaultViewport);
      _classPrivateFieldSet(_process, this, process);
      _classPrivateFieldSet(_connection5, this, connection);
      _classPrivateFieldSet(_closeCallback, this, closeCallback || (() => {}));
      _classPrivateFieldSet(_targetFilterCallback2, this, targetFilterCallback || (() => {
        return true;
      }));
      _classPrivateFieldSet(_handleDevToolsAsPage, this, handleDevToolsAsPage);
      _assertClassBrand(_CdpBrowser_brand, this, _setIsPageTargetCallback).call(this, _isPageTargetCallback2);
      connection.rejectEmulateNetworkConditionsCalls = Boolean(blocklist && blocklist.length > 0 || allowlist && allowlist.length > 0);
      _classPrivateFieldSet(_targetManager3, this, new TargetManager(connection, _classPrivateFieldGet(_createTarget, this), _classPrivateFieldGet(_targetFilterCallback2, this), waitForInitiallyDiscoveredTargets, blocklist, allowlist));
      _classPrivateFieldSet(_defaultContext, this, new CdpBrowserContext(_classPrivateFieldGet(_connection5, this), this));
      for (const contextId of contextIds) {
        _classPrivateFieldGet(_contexts, this).set(contextId, new CdpBrowserContext(_classPrivateFieldGet(_connection5, this), this, contextId));
      }
    }
    async _attach(downloadBehavior) {
      _classPrivateFieldGet(_connection5, this).on(exports.CDPSessionEvent.Disconnected, _classPrivateFieldGet(_emitDisconnected, this));
      if (downloadBehavior) {
        await _classPrivateFieldGet(_defaultContext, this).setDownloadBehavior(downloadBehavior);
      }
      _classPrivateFieldGet(_targetManager3, this).on("targetAvailable" /* TargetManagerEvent.TargetAvailable */, _classPrivateFieldGet(_onAttachedToTarget3, this));
      _classPrivateFieldGet(_targetManager3, this).on("targetGone" /* TargetManagerEvent.TargetGone */, _classPrivateFieldGet(_onDetachedFromTarget3, this));
      _classPrivateFieldGet(_targetManager3, this).on("targetChanged" /* TargetManagerEvent.TargetChanged */, _classPrivateFieldGet(_onTargetChanged, this));
      _classPrivateFieldGet(_targetManager3, this).on("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */, _classPrivateFieldGet(_onTargetDiscovered, this));
      await _classPrivateFieldGet(_targetManager3, this).initialize();
    }
    _detach() {
      _classPrivateFieldGet(_connection5, this).off(exports.CDPSessionEvent.Disconnected, _classPrivateFieldGet(_emitDisconnected, this));
      _classPrivateFieldGet(_targetManager3, this).off("targetAvailable" /* TargetManagerEvent.TargetAvailable */, _classPrivateFieldGet(_onAttachedToTarget3, this));
      _classPrivateFieldGet(_targetManager3, this).off("targetGone" /* TargetManagerEvent.TargetGone */, _classPrivateFieldGet(_onDetachedFromTarget3, this));
      _classPrivateFieldGet(_targetManager3, this).off("targetChanged" /* TargetManagerEvent.TargetChanged */, _classPrivateFieldGet(_onTargetChanged, this));
      _classPrivateFieldGet(_targetManager3, this).off("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */, _classPrivateFieldGet(_onTargetDiscovered, this));
    }
    process() {
      return _classPrivateFieldGet(_process, this) ?? null;
    }
    _targetManager() {
      return _classPrivateFieldGet(_targetManager3, this);
    }
    _getIsPageTargetCallback() {
      return _classPrivateFieldGet(_isPageTargetCallback, this);
    }
    async createBrowserContext(options = {}) {
      const {
        proxyServer,
        proxyBypassList,
        downloadBehavior
      } = options;
      const {
        browserContextId
      } = await _classPrivateFieldGet(_connection5, this).send('Target.createBrowserContext', {
        proxyServer,
        proxyBypassList: proxyBypassList && proxyBypassList.join(',')
      });
      const context = new CdpBrowserContext(_classPrivateFieldGet(_connection5, this), this, browserContextId);
      if (downloadBehavior) {
        await context.setDownloadBehavior(downloadBehavior);
      }
      _classPrivateFieldGet(_contexts, this).set(browserContextId, context);
      return context;
    }
    browserContexts() {
      return [_classPrivateFieldGet(_defaultContext, this), ...Array.from(_classPrivateFieldGet(_contexts, this).values())];
    }
    defaultBrowserContext() {
      return _classPrivateFieldGet(_defaultContext, this);
    }
    async _disposeContext(contextId) {
      if (!contextId) {
        return;
      }
      await _classPrivateFieldGet(_connection5, this).send('Target.disposeBrowserContext', {
        browserContextId: contextId
      });
      _classPrivateFieldGet(_contexts, this).delete(contextId);
    }
    wsEndpoint() {
      return _classPrivateFieldGet(_connection5, this).url();
    }
    async newPage(options) {
      return await _classPrivateFieldGet(_defaultContext, this).newPage(options);
    }
    async _createPageInContext(contextId, options) {
      const hasTargets = this.targets().filter(t => {
        return t.browserContext().id === contextId;
      }).length > 0;
      const windowBounds = options?.type === 'window' ? options.windowBounds : undefined;
      const {
        targetId
      } = await _classPrivateFieldGet(_connection5, this).send('Target.createTarget', {
        url: 'about:blank',
        browserContextId: contextId || undefined,
        left: windowBounds?.left,
        top: windowBounds?.top,
        width: windowBounds?.width,
        height: windowBounds?.height,
        windowState: windowBounds?.windowState,
        // Works around crbug.com/454825274.
        newWindow: hasTargets && options?.type === 'window' ? true : undefined,
        background: options?.background
      });
      const target = await this.waitForTarget(t => {
        return t._targetId === targetId;
      });
      if (!target) {
        throw new Error(`Missing target for page (id = ${targetId})`);
      }
      const initialized = (await target._initializedDeferred.valueOrThrow()) === exports.InitializationStatus.SUCCESS;
      if (!initialized) {
        throw new Error(`Failed to create target for page (id = ${targetId})`);
      }
      const page = await target.page();
      if (!page) {
        throw new Error(`Failed to create a page for context (id = ${contextId})`);
      }
      return page;
    }
    async _createDevToolsPage(pageTargetId) {
      const openDevToolsResponse = await _classPrivateFieldGet(_connection5, this).send('Target.openDevTools', {
        targetId: pageTargetId
      });
      return await this._getDevToolsTargetPage(openDevToolsResponse.targetId);
    }
    async _getDevToolsTargetPage(devtoolsTargetId) {
      const target = await this.waitForTarget(t => {
        return t._targetId === devtoolsTargetId;
      });
      if (!target) {
        throw new Error(`Missing target for DevTools page (id = ${devtoolsTargetId})`);
      }
      const initialized = (await target._initializedDeferred.valueOrThrow()) === exports.InitializationStatus.SUCCESS;
      if (!initialized) {
        throw new Error(`Failed to create target for DevTools page (id = ${devtoolsTargetId})`);
      }
      const page = await target.page();
      if (!page) {
        throw new Error(`Failed to create a DevTools Page for target (id = ${devtoolsTargetId})`);
      }
      return page;
    }
    async _hasDevToolsTarget(pageTargetId) {
      const response = await _classPrivateFieldGet(_connection5, this).send('Target.getDevToolsTarget', {
        targetId: pageTargetId
      });
      return response.targetId;
    }
    async installExtension(path) {
      const {
        id
      } = await _classPrivateFieldGet(_connection5, this).send('Extensions.loadUnpacked', {
        path
      });
      _classPrivateFieldGet(_extensions, this).delete(id);
      return id;
    }
    async uninstallExtension(id) {
      await _classPrivateFieldGet(_connection5, this).send('Extensions.uninstall', {
        id
      });
      // Currently sending the Extensions.uninstall command does not trigger
      // the Target.targetDestroyed event for service workers. This causes
      // flakiness in the extension tests.
      // TODO(nroscino): Remove this once the event is correctly emitted.
      const targetDestroyedPromises = [];
      for (const [targetId, targetInfo] of this._targetManager().getDiscoveredTargetInfos().entries()) {
        if (targetInfo.url.includes(id) && targetInfo.type === 'service_worker') {
          this._targetManager().addToIgnoreTarget(targetId);
          targetDestroyedPromises.push(new Promise(resolve => {
            return setTimeout(() => {
              _classPrivateFieldGet(_connection5, this).emit('Target.targetDestroyed', {
                targetId: targetId
              });
              resolve(null);
            }, 0);
          }));
        }
      }
      await Promise.all(targetDestroyedPromises);
      _classPrivateFieldGet(_extensions, this).delete(id);
    }
    async screens() {
      const {
        screenInfos
      } = await _classPrivateFieldGet(_connection5, this).send('Emulation.getScreenInfos');
      return screenInfos;
    }
    async addScreen(params) {
      const {
        screenInfo
      } = await _classPrivateFieldGet(_connection5, this).send('Emulation.addScreen', params);
      return screenInfo;
    }
    async removeScreen(screenId) {
      return await _classPrivateFieldGet(_connection5, this).send('Emulation.removeScreen', {
        screenId
      });
    }
    async getWindowBounds(windowId) {
      const {
        bounds
      } = await _classPrivateFieldGet(_connection5, this).send('Browser.getWindowBounds', {
        windowId: Number(windowId)
      });
      return bounds;
    }
    async setWindowBounds(windowId, windowBounds) {
      await _classPrivateFieldGet(_connection5, this).send('Browser.setWindowBounds', {
        windowId: Number(windowId),
        bounds: windowBounds
      });
    }
    targets() {
      return Array.from(_classPrivateFieldGet(_targetManager3, this).getAvailableTargets().values()).filter(target => {
        return target._isTargetExposed() && target._initializedDeferred.value() === exports.InitializationStatus.SUCCESS;
      });
    }
    target() {
      const browserTarget = this.targets().find(target => {
        return target.type() === 'browser';
      });
      if (!browserTarget) {
        throw new Error('Browser target is not found');
      }
      return browserTarget;
    }
    async version() {
      const version = await _assertClassBrand(_CdpBrowser_brand, this, _getVersion).call(this);
      return version.product;
    }
    async userAgent() {
      const version = await _assertClassBrand(_CdpBrowser_brand, this, _getVersion).call(this);
      return version.userAgent;
    }
    async close() {
      await _classPrivateFieldGet(_closeCallback, this).call(null);
      await this.disconnect();
    }
    disconnect() {
      _classPrivateFieldGet(_targetManager3, this).dispose();
      _classPrivateFieldGet(_connection5, this).dispose();
      this._detach();
      return Promise.resolve();
    }
    /**
     * @internal
     */
    get _connection() {
      return _classPrivateFieldGet(_connection5, this);
    }
    get connected() {
      return !_classPrivateFieldGet(_connection5, this)._closed;
    }
    get debugInfo() {
      return {
        pendingProtocolErrors: _classPrivateFieldGet(_connection5, this).getPendingProtocolErrors()
      };
    }
    isNetworkEnabled() {
      return _classPrivateFieldGet(_networkEnabled2, this);
    }
    async extensions() {
      const response = await _classPrivateFieldGet(_connection5, this).send('Extensions.getExtensions');
      const extensionsMap = new Map();
      for (const currExtension of response.extensions) {
        if (_classPrivateFieldGet(_extensions, this).has(currExtension.id)) {
          extensionsMap.set(currExtension.id, _classPrivateFieldGet(_extensions, this).get(currExtension.id));
        } else {
          const newExtension = new CdpExtension(currExtension.id, currExtension.version, currExtension.name, currExtension.path, currExtension.enabled, this);
          extensionsMap.set(currExtension.id, newExtension);
        }
      }
      _classPrivateFieldSet(_extensions, this, extensionsMap);
      return _classPrivateFieldGet(_extensions, this);
    }
    isIssuesEnabled() {
      return _classPrivateFieldGet(_issuesEnabled, this);
    }
  }

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Users should never call this directly; it's called when calling
   * `puppeteer.connect` with `protocol: 'cdp'`.
   *
   * @internal
   */
  function _setIsPageTargetCallback(isPageTargetCallback) {
    _classPrivateFieldSet(_isPageTargetCallback, this, isPageTargetCallback || (target => {
      return target.type() === 'page' || target.type() === 'background_page' || target.type() === 'webview' || _classPrivateFieldGet(_handleDevToolsAsPage, this) && target.type() === 'other' && isDevToolsPageTarget(target.url());
    }));
  }
  function _getVersion() {
    return _classPrivateFieldGet(_connection5, this).send('Browser.getVersion');
  }
  async function _connectToCdpBrowser(connectionTransport, url, options) {
    const {
      acceptInsecureCerts = false,
      networkEnabled = true,
      issuesEnabled = true,
      defaultViewport = DEFAULT_VIEWPORT,
      downloadBehavior,
      targetFilter,
      _isPageTarget: isPageTarget,
      slowMo = 0,
      protocolTimeout,
      handleDevToolsAsPage,
      idGenerator = createIncrementalIdGenerator(),
      blocklist,
      allowlist
    } = options;
    const connection = new Connection(url, connectionTransport, slowMo, protocolTimeout, /* rawErrors */false, idGenerator);
    const {
      browserContextIds
    } = await connection.send('Target.getBrowserContexts');
    const browser = await CdpBrowser._create(connection, browserContextIds, acceptInsecureCerts, defaultViewport, downloadBehavior, undefined, () => {
      return connection.send('Browser.close').catch(debugError);
    }, targetFilter, isPageTarget, undefined, networkEnabled, issuesEnabled, handleDevToolsAsPage, blocklist, allowlist);
    return browser;
  }
  const tabTargetInfo = {
    targetId: 'tabTargetId',
    type: 'tab',
    title: 'tab',
    url: 'about:blank',
    attached: false,
    canAccessOpener: false
  };
  const pageTargetInfo = {
    targetId: 'pageTargetId',
    type: 'page',
    title: 'page',
    url: 'about:blank',
    attached: false,
    canAccessOpener: false
  };
  /**
   * Experimental ExtensionTransport allows establishing a connection via
   * chrome.debugger API if Puppeteer runs in an extension. Since Chrome
   * DevTools Protocol is restricted for extensions, the transport
   * implements missing commands and events.
   *
   * @experimental
   * @public
   */
  var _tabId = /*#__PURE__*/new WeakMap();
  var _debuggerEventHandler = /*#__PURE__*/new WeakMap();
  var _ExtensionTransport_brand = /*#__PURE__*/new WeakSet();
  class ExtensionTransport {
    static async connectTab(tabId) {
      await chrome.debugger.attach({
        tabId
      }, '1.3');
      return new ExtensionTransport(tabId);
    }
    /**
     * @internal
     */
    constructor(tabId) {
      _classPrivateMethodInitSpec(this, _ExtensionTransport_brand);
      _defineProperty(this, "onmessage", void 0);
      _defineProperty(this, "onclose", void 0);
      _classPrivateFieldInitSpec(this, _tabId, void 0);
      _classPrivateFieldInitSpec(this, _debuggerEventHandler, (source, method, params) => {
        if (source.tabId !== _classPrivateFieldGet(_tabId, this)) {
          return;
        }
        _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
          // @ts-expect-error sessionId is not in stable yet.
          sessionId: source.sessionId ?? 'pageTargetSessionId',
          method: method,
          params: params
        });
      });
      _classPrivateFieldSet(_tabId, this, tabId);
      chrome.debugger.onEvent.addListener(_classPrivateFieldGet(_debuggerEventHandler, this));
    }
    send(message) {
      const parsed = JSON.parse(message);
      switch (parsed.method) {
        case 'Browser.getVersion':
          {
            _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
              id: parsed.id,
              sessionId: parsed.sessionId,
              method: parsed.method,
              result: {
                protocolVersion: '1.3',
                product: 'chrome',
                revision: 'unknown',
                userAgent: 'chrome',
                jsVersion: 'unknown'
              }
            });
            return;
          }
        case 'Target.getBrowserContexts':
          {
            _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
              id: parsed.id,
              sessionId: parsed.sessionId,
              method: parsed.method,
              result: {
                browserContextIds: []
              }
            });
            return;
          }
        case 'Target.setDiscoverTargets':
          {
            _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
              method: 'Target.targetCreated',
              params: {
                targetInfo: tabTargetInfo
              }
            });
            _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
              method: 'Target.targetCreated',
              params: {
                targetInfo: pageTargetInfo
              }
            });
            _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
              id: parsed.id,
              sessionId: parsed.sessionId,
              method: parsed.method,
              result: {}
            });
            return;
          }
        case 'Target.setAutoAttach':
          {
            if (parsed.sessionId === 'tabTargetSessionId') {
              _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
                method: 'Target.attachedToTarget',
                sessionId: 'tabTargetSessionId',
                params: {
                  targetInfo: pageTargetInfo,
                  sessionId: 'pageTargetSessionId'
                }
              });
              _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
                id: parsed.id,
                sessionId: parsed.sessionId,
                method: parsed.method,
                result: {}
              });
              return;
            } else if (!parsed.sessionId) {
              _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
                method: 'Target.attachedToTarget',
                params: {
                  targetInfo: tabTargetInfo,
                  sessionId: 'tabTargetSessionId'
                }
              });
              _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
                id: parsed.id,
                sessionId: parsed.sessionId,
                method: parsed.method,
                result: {}
              });
              return;
            }
          }
      }
      if (parsed.sessionId === 'pageTargetSessionId') {
        delete parsed.sessionId;
      }
      chrome.debugger.sendCommand({
        tabId: _classPrivateFieldGet(_tabId, this),
        sessionId: parsed.sessionId
      }, parsed.method, parsed.params).then(response => {
        _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
          id: parsed.id,
          sessionId: parsed.sessionId ?? 'pageTargetSessionId',
          method: parsed.method,
          result: response
        });
      }).catch(err => {
        _assertClassBrand(_ExtensionTransport_brand, this, _dispatchResponse).call(this, {
          id: parsed.id,
          sessionId: parsed.sessionId ?? 'pageTargetSessionId',
          method: parsed.method,
          error: {
            code: err?.code,
            data: err?.data,
            message: err?.message ?? 'CDP error had no message'
          }
        });
      });
    }
    close() {
      chrome.debugger.onEvent.removeListener(_classPrivateFieldGet(_debuggerEventHandler, this));
      void chrome.debugger.detach({
        tabId: _classPrivateFieldGet(_tabId, this)
      });
    }
  }

  /**
   * @license
   * Copyright 2021 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * A list of pre-defined network conditions to be used with
   * {@link Page.emulateNetworkConditions}.
   *
   * @example
   *
   * ```ts
   * import {PredefinedNetworkConditions} from 'puppeteer';
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 3G']);
   * await page.goto('https://www.google.com');
   * await page.emulateNetworkConditions(PredefinedNetworkConditions['Fast 3G']);
   * await page.goto('https://www.google.com');
   * // alias to Fast 3G.
   * await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 4G']);
   * await page.goto('https://www.google.com');
   * await page.emulateNetworkConditions(PredefinedNetworkConditions['Fast 4G']);
   * await page.goto('https://www.google.com');
   * // other actions...
   * await browser.close();
   * ```
   *
   * @public
   */
  function _dispatchResponse(message) {
    // Dispatch in a new task like other transports.
    setTimeout(() => {
      this.onmessage?.(JSON.stringify(message));
    }, 0);
  }
  const PredefinedNetworkConditions = Object.freeze({
    // Generally aligned with DevTools
    // https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/core/sdk/NetworkManager.ts;l=398;drc=225e1240f522ca684473f541ae6dae6cd766dd33.
    'Slow 3G': {
      // ~500Kbps down
      download: 500 * 1000 / 8 * 0.8,
      // ~500Kbps up
      upload: 500 * 1000 / 8 * 0.8,
      // 400ms RTT
      latency: 400 * 5
    },
    'Fast 3G': {
      // ~1.6 Mbps down
      download: 1.6 * 1000 * 1000 / 8 * 0.9,
      // ~0.75 Mbps up
      upload: 750 * 1000 / 8 * 0.9,
      // 150ms RTT
      latency: 150 * 3.75
    },
    // alias to Fast 3G to align with Lighthouse (crbug.com/342406608)
    // and DevTools (crbug.com/342406608),
    'Slow 4G': {
      // ~1.6 Mbps down
      download: 1.6 * 1000 * 1000 / 8 * 0.9,
      // ~0.75 Mbps up
      upload: 750 * 1000 / 8 * 0.9,
      // 150ms RTT
      latency: 150 * 3.75
    },
    'Fast 4G': {
      // 9 Mbps down
      download: 9 * 1000 * 1000 / 8 * 0.9,
      // 1.5 Mbps up
      upload: 1.5 * 1000 * 1000 / 8 * 0.9,
      // 60ms RTT
      latency: 60 * 2.75
    }
  });

  /**
   * @internal
   */
  var _ws = /*#__PURE__*/new WeakMap();
  class BrowserWebSocketTransport {
    static create(url) {
      return new Promise((resolve, reject) => {
        const ws = new WebSocket(url);
        ws.addEventListener('open', () => {
          return resolve(new BrowserWebSocketTransport(ws));
        });
        ws.addEventListener('error', reject);
      });
    }
    constructor(ws) {
      _classPrivateFieldInitSpec(this, _ws, void 0);
      _defineProperty(this, "onmessage", void 0);
      _defineProperty(this, "onclose", void 0);
      _classPrivateFieldSet(_ws, this, ws);
      _classPrivateFieldGet(_ws, this).addEventListener('message', event => {
        if (this.onmessage) {
          this.onmessage.call(null, event.data);
        }
      });
      _classPrivateFieldGet(_ws, this).addEventListener('close', () => {
        if (this.onclose) {
          this.onclose.call(null);
        }
      });
      // Silently log all errors - we don't know what to do with them.
      _classPrivateFieldGet(_ws, this).addEventListener('error', debugError);
    }
    send(message) {
      _classPrivateFieldGet(_ws, this).send(message);
    }
    close() {
      _classPrivateFieldGet(_ws, this).close();
    }
  }
  var BrowserWebSocketTransport$1 = /*#__PURE__*/Object.freeze({
    
    BrowserWebSocketTransport: BrowserWebSocketTransport
  });

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  const knownDevices = [{
    name: 'Blackberry PlayBook',
    userAgent: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+',
    viewport: {
      width: 600,
      height: 1024,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Blackberry PlayBook landscape',
    userAgent: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+',
    viewport: {
      width: 1024,
      height: 600,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'BlackBerry Z30',
    userAgent: 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+',
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'BlackBerry Z30 landscape',
    userAgent: 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+',
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Galaxy Note 3',
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Galaxy Note 3 landscape',
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Galaxy Note II',
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Galaxy Note II landscape',
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Galaxy S III',
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Galaxy S III landscape',
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Galaxy S5',
    userAgent: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Galaxy S5 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Galaxy S8',
    userAgent: 'Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36',
    viewport: {
      width: 360,
      height: 740,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Galaxy S8 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36',
    viewport: {
      width: 740,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Galaxy S9+',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36',
    viewport: {
      width: 320,
      height: 658,
      deviceScaleFactor: 4.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Galaxy S9+ landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36',
    viewport: {
      width: 658,
      height: 320,
      deviceScaleFactor: 4.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Galaxy Tab S4',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36',
    viewport: {
      width: 712,
      height: 1138,
      deviceScaleFactor: 2.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Galaxy Tab S4 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36',
    viewport: {
      width: 1138,
      height: 712,
      deviceScaleFactor: 2.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPad',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    viewport: {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPad landscape',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    viewport: {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPad (gen 6)',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPad (gen 6) landscape',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPad (gen 7)',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 810,
      height: 1080,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPad (gen 7) landscape',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1080,
      height: 810,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPad Mini',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    viewport: {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPad Mini landscape',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    viewport: {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPad Pro',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    viewport: {
      width: 1024,
      height: 1366,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPad Pro landscape',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    viewport: {
      width: 1366,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPad Pro 11',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 834,
      height: 1194,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPad Pro 11 landscape',
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1194,
      height: 834,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 4',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
    viewport: {
      width: 320,
      height: 480,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 4 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
    viewport: {
      width: 480,
      height: 320,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 5',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    viewport: {
      width: 320,
      height: 568,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 5 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    viewport: {
      width: 568,
      height: 320,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 6',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 6 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 667,
      height: 375,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 6 Plus',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 414,
      height: 736,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 6 Plus landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 736,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 7',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 7 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 667,
      height: 375,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 7 Plus',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 414,
      height: 736,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 7 Plus landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 736,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 8',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 8 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 667,
      height: 375,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 8 Plus',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 414,
      height: 736,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 8 Plus landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 736,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone SE',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    viewport: {
      width: 320,
      height: 568,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone SE landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    viewport: {
      width: 568,
      height: 320,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone X',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone X landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone XR',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 414,
      height: 896,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone XR landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 896,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 11',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 414,
      height: 828,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 11 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 828,
      height: 414,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 11 Pro',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 11 Pro landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 11 Pro Max',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 414,
      height: 896,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 11 Pro Max landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 896,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 12',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 12 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 12 Pro',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 12 Pro landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 12 Pro Max',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 428,
      height: 926,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 12 Pro Max landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 926,
      height: 428,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 12 Mini',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 12 Mini landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 13',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 13 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 13 Pro',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 13 Pro landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 13 Pro Max',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 428,
      height: 926,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 13 Pro Max landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 926,
      height: 428,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 13 Mini',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 13 Mini landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 14',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 390,
      height: 663,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 14 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 750,
      height: 340,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 14 Plus',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 428,
      height: 745,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 14 Plus landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 832,
      height: 378,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 14 Pro',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 393,
      height: 659,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 14 Pro landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 734,
      height: 343,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 14 Pro Max',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 430,
      height: 739,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 14 Pro Max landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 814,
      height: 380,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 15',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 393,
      height: 659,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 15 landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 734,
      height: 343,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 15 Plus',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 430,
      height: 739,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 15 Plus landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 814,
      height: 380,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 15 Pro',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 393,
      height: 659,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 15 Pro landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 734,
      height: 343,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'iPhone 15 Pro Max',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 430,
      height: 739,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'iPhone 15 Pro Max landscape',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 814,
      height: 380,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'JioPhone 2',
    userAgent: 'Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5',
    viewport: {
      width: 240,
      height: 320,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'JioPhone 2 landscape',
    userAgent: 'Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5',
    viewport: {
      width: 320,
      height: 240,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Kindle Fire HDX',
    userAgent: 'Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true',
    viewport: {
      width: 800,
      height: 1280,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Kindle Fire HDX landscape',
    userAgent: 'Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true',
    viewport: {
      width: 1280,
      height: 800,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'LG Optimus L70',
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 384,
      height: 640,
      deviceScaleFactor: 1.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'LG Optimus L70 landscape',
    userAgent: 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 640,
      height: 384,
      deviceScaleFactor: 1.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Microsoft Lumia 550',
    userAgent: 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263',
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Microsoft Lumia 950',
    userAgent: 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263',
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 4,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Microsoft Lumia 950 landscape',
    userAgent: 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263',
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 4,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Nexus 10',
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 800,
      height: 1280,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Nexus 10 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 1280,
      height: 800,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Nexus 4',
    userAgent: 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 384,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Nexus 4 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 640,
      height: 384,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Nexus 5',
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Nexus 5 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Nexus 5X',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 412,
      height: 732,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Nexus 5X landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 732,
      height: 412,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Nexus 6',
    userAgent: 'Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 412,
      height: 732,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Nexus 6 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 732,
      height: 412,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Nexus 6P',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 412,
      height: 732,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Nexus 6P landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 732,
      height: 412,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Nexus 7',
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 600,
      height: 960,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Nexus 7 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 960,
      height: 600,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Nokia Lumia 520',
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)',
    viewport: {
      width: 320,
      height: 533,
      deviceScaleFactor: 1.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Nokia Lumia 520 landscape',
    userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)',
    viewport: {
      width: 533,
      height: 320,
      deviceScaleFactor: 1.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Nokia N9',
    userAgent: 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13',
    viewport: {
      width: 480,
      height: 854,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Nokia N9 landscape',
    userAgent: 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13',
    viewport: {
      width: 854,
      height: 480,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Pixel 2',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 411,
      height: 731,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Pixel 2 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 731,
      height: 411,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Pixel 2 XL',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 411,
      height: 823,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Pixel 2 XL landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 823,
      height: 411,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Pixel 3',
    userAgent: 'Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36',
    viewport: {
      width: 393,
      height: 786,
      deviceScaleFactor: 2.75,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Pixel 3 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36',
    viewport: {
      width: 786,
      height: 393,
      deviceScaleFactor: 2.75,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Pixel 4',
    userAgent: 'Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36',
    viewport: {
      width: 353,
      height: 745,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Pixel 4 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36',
    viewport: {
      width: 745,
      height: 353,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Pixel 4a (5G)',
    userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36',
    viewport: {
      width: 353,
      height: 745,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Pixel 4a (5G) landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36',
    viewport: {
      width: 745,
      height: 353,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Pixel 5',
    userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36',
    viewport: {
      width: 393,
      height: 851,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Pixel 5 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36',
    viewport: {
      width: 851,
      height: 393,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }, {
    name: 'Moto G4',
    userAgent: 'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36',
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  }, {
    name: 'Moto G4 landscape',
    userAgent: 'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36',
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }];
  const knownDevicesByName = {};
  for (const device of knownDevices) {
    knownDevicesByName[device.name] = device;
  }
  /**
   * A list of devices to be used with {@link Page.emulate}.
   *
   * @example
   *
   * ```ts
   * import {KnownDevices} from 'puppeteer';
   * const iPhone = KnownDevices['iPhone 15 Pro'];
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.emulate(iPhone);
   * await page.goto('https://www.google.com');
   * // other actions...
   * await browser.close();
   * ```
   *
   * @public
   */
  const KnownDevices = Object.freeze(knownDevicesByName);

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * Users should never call this directly; it's called when calling `puppeteer.connect`
   * with `protocol: 'webDriverBiDi'`. This method attaches Puppeteer to an existing browser
   * instance. First it tries to connect to the browser using pure BiDi. If the protocol is
   * not supported, connects to the browser using BiDi over CDP.
   *
   * @internal
   */
  async function _connectToBiDiBrowser(connectionTransport, url, options) {
    const {
      acceptInsecureCerts = false,
      networkEnabled = true,
      issuesEnabled = true,
      defaultViewport = DEFAULT_VIEWPORT
    } = options;
    const {
      bidiConnection,
      cdpConnection,
      closeCallback
    } = await getBiDiConnection(connectionTransport, url, options);
    const BiDi = await Promise.resolve().then(() => _interopRequireWildcard(require(/* webpackIgnore: true */'./bidi/bidi.js')));
    const bidiBrowser = await BiDi.BidiBrowser.create({
      connection: bidiConnection,
      cdpConnection,
      closeCallback,
      process: undefined,
      defaultViewport: defaultViewport,
      acceptInsecureCerts: acceptInsecureCerts,
      networkEnabled,
      issuesEnabled,
      capabilities: options.capabilities
    });
    return bidiBrowser;
  }
  /**
   * Returns a BiDiConnection established to the endpoint specified by the options and a
   * callback closing the browser. Callback depends on whether the connection is pure BiDi
   * or BiDi over CDP.
   * The method tries to connect to the browser using pure BiDi protocol, and falls back
   * to BiDi over CDP.
   */
  async function getBiDiConnection(connectionTransport, url, options) {
    const BiDi = await Promise.resolve().then(() => _interopRequireWildcard(require(/* webpackIgnore: true */'./bidi/bidi.js')));
    const {
      slowMo = 0,
      protocolTimeout,
      idGenerator = createIncrementalIdGenerator()
    } = options;
    // Try pure BiDi first.
    const pureBidiConnection = new BiDi.BidiConnection(url, connectionTransport, idGenerator, slowMo, protocolTimeout);
    try {
      const result = await pureBidiConnection.send('session.status', {});
      if ('type' in result && result.type === 'success') {
        // The `browserWSEndpoint` points to an endpoint supporting pure WebDriver BiDi.
        return {
          bidiConnection: pureBidiConnection,
          closeCallback: async () => {
            await pureBidiConnection.send('browser.close', {}).catch(debugError);
          }
        };
      }
    } catch (e) {
      if (!(e instanceof ProtocolError)) {
        // Unexpected exception not related to BiDi / CDP. Rethrow.
        throw e;
      }
    }
    // Unbind the connection to avoid memory leaks.
    pureBidiConnection.unbind();
    // Fall back to CDP over BiDi reusing the WS connection.
    const cdpConnection = new Connection(url, connectionTransport, slowMo, protocolTimeout, /* rawErrors= */true, idGenerator);
    const version = await cdpConnection.send('Browser.getVersion');
    if (version.product.toLowerCase().includes('firefox')) {
      throw new UnsupportedOperation('Firefox is not supported in BiDi over CDP mode.');
    }
    const bidiOverCdpConnection = await BiDi.connectBidiOverCdp(cdpConnection);
    return {
      cdpConnection,
      bidiConnection: bidiOverCdpConnection,
      closeCallback: async () => {
        // In case of BiDi over CDP, we need to close browser via CDP.
        await cdpConnection.send('Browser.close').catch(debugError);
      }
    };
  }

  /**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  const getWebSocketTransportClass = async () => {
    return isNode ? (await Promise.resolve().then(() => _interopRequireWildcard(require('./node/NodeWebSocketTransport.js')))).NodeWebSocketTransport : (await Promise.resolve().then(function () {
      return BrowserWebSocketTransport$1;
    })).BrowserWebSocketTransport;
  };
  /**
   * Users should never call this directly; it's called when calling
   * `puppeteer.connect`. This method attaches Puppeteer to an existing browser instance.
   *
   * @internal
   */
  function assertSupportedUrlRestrictions(options) {
    if (options.blocklist && options.allowlist) {
      throw new Error('Cannot specify both blocklist and allowlist');
    }
    if (options.protocol === 'webDriverBiDi' && (options.blocklist || options.allowlist)) {
      throw new Error('blocklist and allowlist are only supported with the CDP protocol');
    }
  }
  async function _connectToBrowser(options) {
    assertSupportedUrlRestrictions(options);
    const {
      connectionTransport,
      endpointUrl
    } = await getConnectionTransport(options);
    if (options.protocol === 'webDriverBiDi') {
      const bidiBrowser = await _connectToBiDiBrowser(connectionTransport, endpointUrl, options);
      return bidiBrowser;
    } else {
      const cdpBrowser = await _connectToCdpBrowser(connectionTransport, endpointUrl, options);
      return cdpBrowser;
    }
  }
  /**
   * Establishes a websocket connection by given options and returns both transport and
   * endpoint url the transport is connected to.
   */
  async function getConnectionTransport(options) {
    const {
      browserWSEndpoint,
      browserURL,
      channel,
      transport,
      headers = {}
    } = options;
    assert(Number(!!browserWSEndpoint) + Number(!!browserURL) + Number(!!transport) + Number(!!channel) === 1, 'Exactly one of browserWSEndpoint, browserURL, transport or channel must be passed to puppeteer.connect');
    if (transport) {
      return {
        connectionTransport: transport,
        endpointUrl: ''
      };
    } else if (browserWSEndpoint) {
      const WebSocketClass = await getWebSocketTransportClass();
      const connectionTransport = await WebSocketClass.create(browserWSEndpoint, headers);
      return {
        connectionTransport: connectionTransport,
        endpointUrl: browserWSEndpoint
      };
    } else if (browserURL) {
      const connectionURL = await getWSEndpoint(browserURL);
      const WebSocketClass = await getWebSocketTransportClass();
      const connectionTransport = await WebSocketClass.create(connectionURL);
      return {
        connectionTransport: connectionTransport,
        endpointUrl: connectionURL
      };
    } else if (options.channel && isNode) {
      const {
        detectBrowserPlatform,
        resolveDefaultUserDataDir,
        Browser
      } = await Promise.resolve().then(() => _interopRequireWildcard(require('@puppeteer/browsers')));
      const platform = detectBrowserPlatform();
      if (!platform) {
        throw new Error('Could not detect required browser platform');
      }
      const {
        convertPuppeteerChannelToBrowsersChannel
      } = await Promise.resolve().then(() => _interopRequireWildcard(require('./node/LaunchOptions.js')));
      const {
        join
      } = await Promise.resolve().then(() => _interopRequireWildcard(require('node:path')));
      const userDataDir = resolveDefaultUserDataDir(Browser.CHROME, platform, convertPuppeteerChannelToBrowsersChannel(options.channel));
      const portPath = join(userDataDir, 'DevToolsActivePort');
      try {
        const fileContent = await environment.value.fs.promises.readFile(portPath, 'ascii');
        const [rawPort, rawPath] = fileContent.split('\n').map(line => {
          return line.trim();
        }).filter(line => {
          return !!line;
        });
        if (!rawPort || !rawPath) {
          throw new Error(`Invalid DevToolsActivePort '${fileContent}' found`);
        }
        const port = parseInt(rawPort, 10);
        if (isNaN(port) || port <= 0 || port > 65535) {
          throw new Error(`Invalid port '${rawPort}' found`);
        }
        const browserWSEndpoint = `ws://localhost:${port}${rawPath}`;
        const WebSocketClass = await getWebSocketTransportClass();
        const connectionTransport = await WebSocketClass.create(browserWSEndpoint, headers);
        return {
          connectionTransport: connectionTransport,
          endpointUrl: browserWSEndpoint
        };
      } catch (error) {
        throw new Error(`Could not find DevToolsActivePort for ${options.channel} at ${portPath}`, {
          cause: error
        });
      }
    }
    throw new Error('Invalid connection options');
  }
  async function getWSEndpoint(browserURL) {
    const endpointURL = new URL('/json/version', browserURL);
    try {
      const result = await globalThis.fetch(endpointURL.toString(), {
        method: 'GET'
      });
      if (!result.ok) {
        throw new Error(`HTTP ${result.statusText}`);
      }
      const data = await result.json();
      return data.webSocketDebuggerUrl;
    } catch (error) {
      if (isErrorLike(error)) {
        error.message = `Failed to fetch browser webSocket URL from ${endpointURL}: ` + error.message;
      }
      throw error;
    }
  }

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * The main Puppeteer class.
   *
   * IMPORTANT: if you are using Puppeteer in a Node environment, you will get an
   * instance of {@link PuppeteerNode} when you import or require `puppeteer`.
   * That class extends `Puppeteer`, so has all the methods documented below as
   * well as all that are defined on {@link PuppeteerNode}.
   *
   * @public
   */
  class Puppeteer {
    /**
     * Registers a {@link CustomQueryHandler | custom query handler}.
     *
     * @remarks
     * After registration, the handler can be used everywhere where a selector is
     * expected by prepending the selection string with `<name>/`. The name is only
     * allowed to consist of lower- and upper case latin letters.
     *
     * @example
     *
     * ```
     * import {Puppeteer}, puppeteer from 'puppeteer';
     *
     * Puppeteer.registerCustomQueryHandler('text', { … });
     * const aHandle = await page.$('text/…');
     * ```
     *
     * @param name - The name that the custom query handler will be registered
     * under.
     * @param queryHandler - The {@link CustomQueryHandler | custom query handler}
     * to register.
     *
     * @public
     */
    static registerCustomQueryHandler(name, queryHandler) {
      return this.customQueryHandlers.register(name, queryHandler);
    }
    /**
     * Unregisters a custom query handler for a given name.
     */
    static unregisterCustomQueryHandler(name) {
      return this.customQueryHandlers.unregister(name);
    }
    /**
     * Gets the names of all custom query handlers.
     */
    static customQueryHandlerNames() {
      return this.customQueryHandlers.names();
    }
    /**
     * Unregisters all custom query handlers.
     */
    static clearCustomQueryHandlers() {
      return this.customQueryHandlers.clear();
    }
    /**
     * @internal
     */

    /**
     * @internal
     */
    constructor(settings) {
      _defineProperty(this, "_isPuppeteerCore", void 0);
      /**
       * @internal
       */
      _defineProperty(this, "_changedBrowsers", false);
      this._isPuppeteerCore = settings.isPuppeteerCore;
      this.connect = this.connect.bind(this);
    }
    /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @remarks
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */
    connect(options) {
      return _connectToBrowser(options);
    }
  }

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  /**
   * Operations for {@link CustomQueryHandler | custom query handlers}. See
   * {@link CustomQueryHandlerRegistry}.
   *
   * @internal
   */
  _defineProperty(Puppeteer, "customQueryHandlers", customQueryHandlers);
  var _chain = /*#__PURE__*/new WeakMap();
  class TaskQueue {
    constructor() {
      _classPrivateFieldInitSpec(this, _chain, void 0);
      _classPrivateFieldSet(_chain, this, Promise.resolve());
    }
    postTask(task) {
      const result = _classPrivateFieldGet(_chain, this).then(task);
      _classPrivateFieldSet(_chain, this, result.then(() => {
        return undefined;
      }, () => {
        return undefined;
      }));
      return result;
    }
  }

  /**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @internal
   */
  const PUPPETEER_REVISIONS = Object.freeze({
    chrome: '148.0.7778.167',
    'chrome-headless-shell': '148.0.7778.167',
    firefox: 'stable_150.0.3'
  });

  /**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   */
  /**
   * @public
   */
  const puppeteer = new Puppeteer({
    isPuppeteerCore: true
  });
  const {
    /**
     * @public
     */
    connect
  } = puppeteer;
  exports.ARIAQueryHandler = ARIAQueryHandler;
  exports.Accessibility = Accessibility;
  exports.AsyncDisposableStack = AsyncDisposableStack;
  exports.AsyncDisposableStackPolyfill = AsyncDisposableStackPolyfill;
  exports.AsyncIterableUtil = AsyncIterableUtil;
  exports.Binding = Binding;
  exports.Browser = Browser;
  exports.BrowserContext = BrowserContext;
  exports.BrowserWebSocketTransport = BrowserWebSocketTransport;
  exports.CDPSession = CDPSession;
  exports.CDP_BINDING_PREFIX = CDP_BINDING_PREFIX;
  exports.CSSCoverage = CSSCoverage;
  exports.Callback = Callback;
  exports.CallbackRegistry = CallbackRegistry;
  exports.CdpBluetoothEmulation = CdpBluetoothEmulation;
  exports.CdpBrowser = CdpBrowser;
  exports.CdpBrowserContext = CdpBrowserContext;
  exports.CdpCDPSession = CdpCDPSession;
  exports.CdpDeviceRequestPrompt = CdpDeviceRequestPrompt;
  exports.CdpDeviceRequestPromptManager = CdpDeviceRequestPromptManager;
  exports.CdpDialog = CdpDialog;
  exports.CdpElementHandle = CdpElementHandle;
  exports.CdpFrame = CdpFrame;
  exports.CdpHTTPRequest = CdpHTTPRequest;
  exports.CdpHTTPResponse = CdpHTTPResponse;
  exports.CdpJSHandle = CdpJSHandle;
  exports.CdpKeyboard = CdpKeyboard;
  exports.CdpMouse = CdpMouse;
  exports.CdpPage = CdpPage;
  exports.CdpPreloadScript = CdpPreloadScript;
  exports.CdpTarget = CdpTarget;
  exports.CdpTouchHandle = CdpTouchHandle;
  exports.CdpTouchscreen = CdpTouchscreen;
  exports.CdpWebWorker = CdpWebWorker;
  exports.Connection = Connection;
  exports.ConnectionClosedError = ConnectionClosedError;
  exports.ConsoleMessage = ConsoleMessage;
  exports.Coverage = Coverage;
  exports.CustomQueryHandlerRegistry = CustomQueryHandlerRegistry;
  exports.DEFAULT_INTERCEPT_RESOLUTION_PRIORITY = DEFAULT_INTERCEPT_RESOLUTION_PRIORITY;
  exports.DEFAULT_VIEWPORT = DEFAULT_VIEWPORT;
  exports.Deferred = Deferred;
  exports.DelegatedLocator = DelegatedLocator;
  exports.DevToolsTarget = DevToolsTarget;
  exports.DeviceRequestPrompt = DeviceRequestPrompt;
  exports.Dialog = Dialog;
  exports.DisposableStack = DisposableStack;
  exports.DisposableStackPolyfill = DisposableStackPolyfill;
  exports.ElementHandle = ElementHandle;
  exports.EmulatedState = EmulatedState;
  exports.EmulationManager = EmulationManager;
  exports.EventEmitter = EventEmitter;
  exports.ExecutionContext = ExecutionContext;
  exports.Extension = Extension;
  exports.ExtensionTransport = ExtensionTransport;
  exports.FileChooser = FileChooser;
  exports.FilteredLocator = FilteredLocator;
  exports.Frame = Frame;
  exports.FrameManager = FrameManager;
  exports.FrameTree = FrameTree;
  exports.FunctionLocator = FunctionLocator;
  exports.HTTPRequest = HTTPRequest;
  exports.HTTPResponse = HTTPResponse;
  exports.IsolatedWorld = IsolatedWorld;
  exports.JSCoverage = JSCoverage;
  exports.JSHandle = JSHandle;
  exports.Keyboard = Keyboard;
  exports.KnownDevices = KnownDevices;
  exports.LazyArg = LazyArg;
  exports.LifecycleWatcher = LifecycleWatcher;
  exports.Locator = Locator;
  exports.MAIN_WORLD = MAIN_WORLD;
  exports.MappedLocator = MappedLocator;
  exports.Mouse = Mouse;
  exports.MouseButton = MouseButton;
  exports.Mutex = Mutex;
  exports.NETWORK_IDLE_TIME = NETWORK_IDLE_TIME;
  exports.NetworkEventManager = NetworkEventManager;
  exports.NetworkManager = NetworkManager;
  exports.NodeLocator = NodeLocator;
  exports.OtherTarget = OtherTarget;
  exports.PQueryHandler = PQueryHandler;
  exports.PUPPETEER_REVISIONS = PUPPETEER_REVISIONS;
  exports.PUPPETEER_WORLD = PUPPETEER_WORLD;
  exports.Page = Page;
  exports.PageTarget = PageTarget;
  exports.PierceQueryHandler = PierceQueryHandler;
  exports.PredefinedNetworkConditions = PredefinedNetworkConditions;
  exports.ProtocolError = ProtocolError;
  exports.Puppeteer = Puppeteer;
  exports.PuppeteerError = PuppeteerError;
  exports.PuppeteerURL = PuppeteerURL;
  exports.QueryHandler = QueryHandler;
  exports.RETRY_DELAY = RETRY_DELAY;
  exports.RaceLocator = RaceLocator;
  exports.Realm = Realm;
  exports.SOURCE_URL_REGEX = SOURCE_URL_REGEX;
  exports.STATUS_TEXTS = STATUS_TEXTS;
  exports.ScriptInjector = ScriptInjector;
  exports.SecurityDetails = SecurityDetails;
  exports.SuppressedError = SuppressedError$1;
  exports.Target = Target;
  exports.TargetCloseError = TargetCloseError;
  exports.TargetManager = TargetManager;
  exports.TaskManager = TaskManager;
  exports.TaskQueue = TaskQueue;
  exports.TextQueryHandler = TextQueryHandler;
  exports.TimeoutError = TimeoutError;
  exports.TimeoutSettings = TimeoutSettings;
  exports.TouchError = TouchError;
  exports.Touchscreen = Touchscreen;
  exports.Tracing = Tracing;
  exports.UTILITY_WORLD_NAME = UTILITY_WORLD_NAME;
  exports.UnsupportedOperation = UnsupportedOperation;
  exports.WEB_PERMISSION_TO_PROTOCOL_PERMISSION = WEB_PERMISSION_TO_PROTOCOL_PERMISSION;
  exports.WaitTask = WaitTask;
  exports.WebMCP = WebMCP;
  exports.WebMCPTool = WebMCPTool;
  exports.WebMCPToolCall = WebMCPToolCall;
  exports.WebWorker = WebWorker;
  exports.WorkerTarget = WorkerTarget;
  exports.XPathQueryHandler = XPathQueryHandler;
  exports._connectToCdpBrowser = _connectToCdpBrowser;
  exports._keyDefinitions = _keyDefinitions;
  exports.addPageBinding = addPageBinding;
  exports.assert = assert;
  exports.asyncDisposeSymbol = asyncDisposeSymbol;
  exports.bindIsolatedHandle = bindIsolatedHandle;
  exports.connect = connect;
  exports.convertConsoleMessageLevel = convertConsoleMessageLevel;
  exports.convertCookiesPartitionKeyFromPuppeteerToCdp = convertCookiesPartitionKeyFromPuppeteerToCdp;
  exports.convertSameSiteFromPuppeteerToCdp = convertSameSiteFromPuppeteerToCdp;
  exports.createClientError = createClientError;
  exports.createConsoleMessage = createConsoleMessage;
  exports.createEvaluationError = createEvaluationError;
  exports.createIncrementalIdGenerator = createIncrementalIdGenerator;
  exports.createProtocolErrorMessage = createProtocolErrorMessage;
  exports.customQueryHandlers = customQueryHandlers;
  exports.debug = debug;
  exports.debugError = debugError;
  exports.default = puppeteer;
  exports.disposeSymbol = disposeSymbol;
  exports.evaluationString = evaluationString;
  exports.filterAsync = filterAsync;
  exports.fromAbortSignal = fromAbortSignal;
  exports.fromEmitterEvent = fromEmitterEvent;
  exports.getCapturedLogs = getCapturedLogs;
  exports.getQueryHandlerAndSelector = getQueryHandlerAndSelector;
  exports.getReadableAsTypedArray = getReadableAsTypedArray;
  exports.getReadableFromProtocolStream = getReadableFromProtocolStream;
  exports.getSourcePuppeteerURLIfAvailable = getSourcePuppeteerURLIfAvailable;
  exports.getSourceUrlComment = getSourceUrlComment;
  exports.handleError = handleError;
  exports.headersArray = headersArray;
  exports.importDebug = importDebug;
  exports.isDate = isDate;
  exports.isErrnoException = isErrnoException;
  exports.isErrorLike = isErrorLike;
  exports.isNumber = isNumber;
  exports.isPlainObject = isPlainObject;
  exports.isRegExp = isRegExp;
  exports.isString = isString;
  exports.isTargetClosedError = isTargetClosedError;
  exports.normalizeHeaderValue = normalizeHeaderValue;
  exports.pageBindingInitString = pageBindingInitString;
  exports.paperFormats = paperFormats;
  exports.parsePDFOptions = parsePDFOptions;
  exports.parsePSelectors = parsePSelectors;
  exports.referrerPolicyToProtocol = referrerPolicyToProtocol;
  exports.releaseObject = releaseObject;
  exports.rewriteError = rewriteError$1;
  exports.scriptInjector = scriptInjector;
  exports.setDefaultScreenshotOptions = setDefaultScreenshotOptions;
  exports.setLogCapture = setLogCapture;
  exports.supportedMetrics = supportedMetrics$1;
  exports.throwIfDetached = throwIfDetached;
  exports.timeout = timeout;
  exports.transposeIterableHandle = transposeIterableHandle;
  exports.unitToPixels = unitToPixels;
  exports.validateDialogType = validateDialogType;
  exports.valueFromJSHandle = valueFromJSHandle;
  exports.valueFromPrimitiveRemoteObject = valueFromPrimitiveRemoteObject;
  exports.valueFromRemoteObjectReference = valueFromRemoteObjectReference;
  exports.withSourcePuppeteerURLIfNone = withSourcePuppeteerURLIfNone;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
}({});
