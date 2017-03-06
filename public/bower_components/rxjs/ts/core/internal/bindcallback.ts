module Rx {
    export module internals {
        export var bindCallback: (func: Function, thisArg: any, argCount: number) => Function;
    }
}

(function() {
    Rx.internals.bindCallback(() => {}, null, 100);
});
