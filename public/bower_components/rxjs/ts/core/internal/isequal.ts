module Rx {
    export module internals {
        export var isEqual : (left: any, right: any) => boolean;
    }
}

(function() {
    var b : boolean = Rx.internals.isEqual(1, 1);
});
