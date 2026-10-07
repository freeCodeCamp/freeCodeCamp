function cx() {
    for(var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++){
        classNames[_key] = arguments[_key];
    }
    return classNames.reduce(function(acc, className) {
        if (Array.isArray(className)) {
            return acc.concat(className);
        }
        return acc.concat([
            className
        ]);
    }, []).filter(Boolean).join(' ');
}

export { cx };
