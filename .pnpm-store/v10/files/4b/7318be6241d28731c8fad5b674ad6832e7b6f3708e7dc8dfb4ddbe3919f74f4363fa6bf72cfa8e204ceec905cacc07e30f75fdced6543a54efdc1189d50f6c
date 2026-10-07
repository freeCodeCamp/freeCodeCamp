/* @minVersion 7.20.0 */

/**
  Enums are used in this file, but not assigned to vars to avoid non-hoistable values

  CONSTRUCTOR = 0;
  PUBLIC = 1;
  PRIVATE = 2;

  FIELD = 0;
  ACCESSOR = 1;
  METHOD = 2;
  GETTER = 3;
  SETTER = 4;

  STATIC = 5;

  CLASS = 10; // only used in assertValidReturnValue
*/

export function _apply_decs_2203_r(targetClass, memberDecs, classDecs) {
    function createAddInitializerMethod(initializers, decoratorFinishedRef) {
        return function addInitializer(initializer) {
            assertNotFinished(decoratorFinishedRef, "addInitializer");
            assertCallable(initializer, "An initializer");
            initializers.push(initializer);
        };
    }

    function memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, value) {
        var kindStr;

        switch (kind) {
            case 1 /* ACCESSOR */:
                kindStr = "accessor";
                break;
            case 2 /* METHOD */:
                kindStr = "method";
                break;
            case 3 /* GETTER */:
                kindStr = "getter";
                break;
            case 4 /* SETTER */:
                kindStr = "setter";
                break;
            default:
                kindStr = "field";
        }

        var ctx = { kind: kindStr, name: isPrivate ? "#" + name : name, static: isStatic, private: isPrivate };

        var decoratorFinishedRef = { v: false };

        if (kind !== 0 /* FIELD */) {
            ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef);
        }

        var get, set;
        if (kind === 0 /* FIELD */) {
            if (isPrivate) {
                get = desc.get;
                set = desc.set;
            } else {
                get = function() {
                    return this[name];
                };
                set = function(v) {
                    this[name] = v;
                };
            }
        } else if (kind === 2 /* METHOD */) {
            get = function() {
                return desc.value;
            };
        } else {
            // replace with values that will go through the final getter and setter
            if (kind === 1 /* ACCESSOR */ || kind === 3 /* GETTER */) {
                get = function() {
                    return desc.get.call(this);
                };
            }

            if (kind === 1 /* ACCESSOR */ || kind === 4 /* SETTER */) {
                set = function(v) {
                    desc.set.call(this, v);
                };
            }
        }
        ctx.access = get && set ? { get: get, set: set } : get ? { get: get } : { set: set };

        try {
            return dec(value, ctx);
        } finally {
            decoratorFinishedRef.v = true;
        }
    }

    function assertNotFinished(decoratorFinishedRef, fnName) {
        if (decoratorFinishedRef.v) {
            throw new Error("attempted to call " + fnName + " after decoration was finished");
        }
    }

    function assertCallable(fn, hint) {
        if (typeof fn !== "function") {
            throw new TypeError(hint + " must be a function");
        }
    }

    function assertValidReturnValue(kind, value) {
        var type = typeof value;

        if (kind === 1 /* ACCESSOR */) {
            if (type !== "object" || value === null) {
                throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
            }
            if (value.get !== undefined) {
                assertCallable(value.get, "accessor.get");
            }
            if (value.set !== undefined) {
                assertCallable(value.set, "accessor.set");
            }
            if (value.init !== undefined) {
                assertCallable(value.init, "accessor.init");
            }
        } else if (type !== "function") {
            var hint;
            if (kind === 0 /* FIELD */) {
                hint = "field";
            } else if (kind === 10 /* CLASS */) {
                hint = "class";
            } else {
                hint = "method";
            }
            throw new TypeError(hint + " decorators must return a function or void 0");
        }
    }

    function applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers) {
        var decs = decInfo[0];

        var desc, init, value;

        if (isPrivate) {
            if (kind === 0 /* FIELD */ || kind === 1 /* ACCESSOR */) {
                desc = { get: decInfo[3], set: decInfo[4] };
            } else if (kind === 3 /* GETTER */) {
                desc = { get: decInfo[3] };
            } else if (kind === 4 /* SETTER */) {
                desc = { set: decInfo[3] };
            } else {
                desc = { value: decInfo[3] };
            }
        } else if (kind !== 0 /* FIELD */) {
            desc = Object.getOwnPropertyDescriptor(base, name);
        }

        if (kind === 1 /* ACCESSOR */) {
            value = { get: desc.get, set: desc.set };
        } else if (kind === 2 /* METHOD */) {
            value = desc.value;
        } else if (kind === 3 /* GETTER */) {
            value = desc.get;
        } else if (kind === 4 /* SETTER */) {
            value = desc.set;
        }

        var newValue, get, set;

        if (typeof decs === "function") {
            newValue = memberDec(decs, name, desc, initializers, kind, isStatic, isPrivate, value);

            if (newValue !== void 0) {
                assertValidReturnValue(kind, newValue);

                if (kind === 0 /* FIELD */) {
                    init = newValue;
                } else if (kind === 1 /* ACCESSOR */) {
                    init = newValue.init;
                    get = newValue.get || value.get;
                    set = newValue.set || value.set;

                    value = { get: get, set: set };
                } else {
                    value = newValue;
                }
            }
        } else {
            for (var i = decs.length - 1; i >= 0; i--) {
                var dec = decs[i];

                newValue = memberDec(dec, name, desc, initializers, kind, isStatic, isPrivate, value);

                if (newValue !== void 0) {
                    assertValidReturnValue(kind, newValue);
                    var newInit;

                    if (kind === 0 /* FIELD */) {
                        newInit = newValue;
                    } else if (kind === 1 /* ACCESSOR */) {
                        newInit = newValue.init;
                        get = newValue.get || value.get;
                        set = newValue.set || value.set;

                        value = { get: get, set: set };
                    } else {
                        value = newValue;
                    }

                    if (newInit !== void 0) {
                        if (init === void 0) {
                            init = newInit;
                        } else if (typeof init === "function") {
                            init = [init, newInit];
                        } else {
                            init.push(newInit);
                        }
                    }
                }
            }
        }

        if (kind === 0 /* FIELD */ || kind === 1 /* ACCESSOR */) {
            if (init === void 0) {
                // If the initializer was void 0, sub in a dummy initializer
                init = function(instance, init) {
                    return init;
                };
            } else if (typeof init !== "function") {
                var ownInitializers = init;

                init = function(instance, init) {
                    var value = init;

                    for (var i = 0; i < ownInitializers.length; i++) value = ownInitializers[i].call(instance, value);

                    return value;
                };
            } else {
                var originalInitializer = init;

                init = function(instance, init) {
                    return originalInitializer.call(instance, init);
                };
            }

            ret.push(init);
        }

        if (kind !== 0 /* FIELD */) {
            if (kind === 1 /* ACCESSOR */) {
                desc.get = value.get;
                desc.set = value.set;
            } else if (kind === 2 /* METHOD */) {
                desc.value = value;
            } else if (kind === 3 /* GETTER */) {
                desc.get = value;
            } else if (kind === 4 /* SETTER */) {
                desc.set = value;
            }

            if (isPrivate) {
                if (kind === 1 /* ACCESSOR */) {
                    ret.push(function(instance, args) {
                        return value.get.call(instance, args);
                    });
                    ret.push(function(instance, args) {
                        return value.set.call(instance, args);
                    });
                } else if (kind === 2 /* METHOD */) {
                    ret.push(value);
                } else {
                    ret.push(function(instance, args) {
                        return value.call(instance, args);
                    });
                }
            } else {
                Object.defineProperty(base, name, desc);
            }
        }
    }

    function applyMemberDecs(Class, decInfos) {
        var ret = [];
        var protoInitializers;
        var staticInitializers;

        var existingProtoNonFields = new Map();
        var existingStaticNonFields = new Map();

        for (var i = 0; i < decInfos.length; i++) {
            var decInfo = decInfos[i];

            // skip computed property names
            if (!Array.isArray(decInfo)) continue;

            var kind = decInfo[1];
            var name = decInfo[2];
            var isPrivate = decInfo.length > 3;

            var isStatic = kind >= 5; /* STATIC */
            var base;
            var initializers;

            if (isStatic) {
                base = Class;
                kind = kind - 5 /* STATIC */;
                // initialize staticInitializers when we see a non-field static member
                if (kind !== 0 /* FIELD */) {
                    staticInitializers = staticInitializers || [];
                    initializers = staticInitializers;
                }
            } else {
                base = Class.prototype;
                // initialize protoInitializers when we see a non-field member
                if (kind !== 0 /* FIELD */) {
                    protoInitializers = protoInitializers || [];
                    initializers = protoInitializers;
                }
            }

            if (kind !== 0 /* FIELD */ && !isPrivate) {
                var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields;

                var existingKind = existingNonFields.get(name) || 0;

                if (existingKind === true || (existingKind === 3 /* GETTER */ && kind !== 4) /* SETTER */ || (existingKind === 4 /* SETTER */ && kind !== 3) /* GETTER */) {
                    throw new Error(
                        "Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "
                            + name
                    );
                } else if (!existingKind && kind > 2 /* METHOD */) {
                    existingNonFields.set(name, kind);
                } else {
                    existingNonFields.set(name, true);
                }
            }

            applyMemberDec(ret, base, decInfo, name, kind, isStatic, isPrivate, initializers);
        }

        pushInitializers(ret, protoInitializers);
        pushInitializers(ret, staticInitializers);
        return ret;
    }

    function pushInitializers(ret, initializers) {
        if (initializers) {
            ret.push(function(instance) {
                for (var i = 0; i < initializers.length; i++) initializers[i].call(instance);
                return instance;
            });
        }
    }

    function applyClassDecs(targetClass, classDecs) {
        if (classDecs.length > 0) {
            var initializers = [];
            var newClass = targetClass;
            var name = targetClass.name;

            for (var i = classDecs.length - 1; i >= 0; i--) {
                var decoratorFinishedRef = { v: false };

                try {
                    var nextNewClass = classDecs[i](newClass, { kind: "class", name: name, addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef) });
                } finally {
                    decoratorFinishedRef.v = true;
                }

                if (nextNewClass !== undefined) {
                    assertValidReturnValue(10, /* CLASS */ nextNewClass);
                    newClass = nextNewClass;
                }
            }

            return [newClass, function() {
                for (var i = 0; i < initializers.length; i++) initializers[i].call(newClass);
            }];
        }
        // The transformer will not emit assignment when there are no class decorators,
        // so we don't have to return an empty array here.
    }

    /**
    Basic usage:

    applyDecs(
      Class,
      [
        // member decorators
        [
          dec,                // dec or array of decs
          0,                  // kind of value being decorated
          'prop',             // name of public prop on class containing the value being decorated,
          '#p',               // the name of the private property (if is private, void 0 otherwise),
        ]
      ],
      [
        // class decorators
        dec1, dec2
      ]
    )
    ```

    Fully transpiled example:

    ```js
    @dec
    class Class {
      @dec
      a = 123;

      @dec
      #a = 123;

      @dec
      @dec2
      accessor b = 123;

      @dec
      accessor #b = 123;

      @dec
      c() { console.log('c'); }

      @dec
      #c() { console.log('privC'); }

      @dec
      get d() { console.log('d'); }

      @dec
      get #d() { console.log('privD'); }

      @dec
      set e(v) { console.log('e'); }

      @dec
      set #e(v) { console.log('privE'); }
    }


    // becomes
    let initializeInstance;
    let initializeClass;

    let initA;
    let initPrivA;

    let initB;
    let initPrivB, getPrivB, setPrivB;

    let privC;
    let privD;
    let privE;

    let Class;
    class _Class {
      static {
        let ret = applyDecs(
          this,
          [
            [dec, 0, 'a'],
            [dec, 0, 'a', (i) => i.#a, (i, v) => i.#a = v],
            [[dec, dec2], 1, 'b'],
            [dec, 1, 'b', (i) => i.#privBData, (i, v) => i.#privBData = v],
            [dec, 2, 'c'],
            [dec, 2, 'c', () => console.log('privC')],
            [dec, 3, 'd'],
            [dec, 3, 'd', () => console.log('privD')],
            [dec, 4, 'e'],
            [dec, 4, 'e', () => console.log('privE')],
          ],
          [
            dec
          ]
        )

        initA = ret[0];

        initPrivA = ret[1];

        initB = ret[2];

        initPrivB = ret[3];
        getPrivB = ret[4];
        setPrivB = ret[5];

        privC = ret[6];

        privD = ret[7];

        privE = ret[8];

        initializeInstance = ret[9];

        Class = ret[10]

        initializeClass = ret[11];
      }

      a = (initializeInstance(this), initA(this, 123));

      #a = initPrivA(this, 123);

      #bData = initB(this, 123);
      get b() { return this.#bData }
      set b(v) { this.#bData = v }

      #privBData = initPrivB(this, 123);
      get #b() { return getPrivB(this); }
      set #b(v) { setPrivB(this, v); }

      c() { console.log('c'); }

      #c(...args) { return privC(this, ...args) }

      get d() { console.log('d'); }

      get #d() { return privD(this); }

      set e(v) { console.log('e'); }

      set #e(v) { privE(this, v); }
    }

    initializeClass(Class);
   */

    _apply_decs_2203_r = function(targetClass, memberDecs, classDecs) {
        return {
            e: applyMemberDecs(targetClass, memberDecs),
            // Lazily apply class decorations so that member init locals can be properly bound.
            get c() {
                return applyClassDecs(targetClass, classDecs);
            }
        };
    };

    return _apply_decs_2203_r(targetClass, memberDecs, classDecs);
}

export { _apply_decs_2203_r as _ };
