function createDocumentationLink(param) {
    var name = param.name, _param_connector = param.connector, connector = _param_connector === void 0 ? false : _param_connector;
    return [
        'https://www.algolia.com/doc/api-reference/widgets/',
        name,
        '/js/',
        connector ? '#connector' : ''
    ].join('');
}
function createDocumentationMessageGenerator() {
    for(var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++){
        widgets[_key] = arguments[_key];
    }
    var links = widgets.map(function(widget) {
        return createDocumentationLink(widget);
    }).join(', ');
    return function(message) {
        return [
            message,
            "See documentation: ".concat(links)
        ].filter(Boolean).join('\n\n');
    };
}

export { createDocumentationLink, createDocumentationMessageGenerator };
