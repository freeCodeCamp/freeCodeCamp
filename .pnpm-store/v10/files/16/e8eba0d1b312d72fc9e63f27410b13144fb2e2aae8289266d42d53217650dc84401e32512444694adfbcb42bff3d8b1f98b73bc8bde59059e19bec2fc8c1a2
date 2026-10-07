function _iterable_to_array_limit_loose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;

    var _arr = [];

    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }

    return _arr;
}
export { _iterable_to_array_limit_loose as _ };
