exports.get = function(belowFn) {
  var oldLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;

  var dummyObject = {};

  var v8Handler = Error.prepareStackTrace;
  Error.prepareStackTrace = function(dummyObject, v8StackTrace) {
    return v8StackTrace;
  };
  Error.captureStackTrace(dummyObject, belowFn || exports.get);

  var v8StackTrace = dummyObject.stack;
  Error.prepareStackTrace = v8Handler;
  Error.stackTraceLimit = oldLimit;

  return v8StackTrace;
};

exports.parse = function(err) {
  if (!err.stack) {
    return [];
  }

  var self = this;
  var lines = err.stack.split('\n').slice(1);

  return lines
    .map(function(line) {
      if (line.match(/^\s*[-]{4,}$/)) {
        return self._createParsedCallSite({
          fileName: line,
          lineNumber: null,
          functionName: null,
          typeName: null,
          methodName: null,
          columnNumber: null,
          'native': null,
        });
      }

      var lineMatch = line.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
      if (!lineMatch) {
        return;
      }

      var object = null;
      var method = null;
      var functionName = null;
      var typeName = null;
      var methodName = null;
      var isNative = (lineMatch[5] === 'native');

      if (lineMatch[1]) {
        functionName = lineMatch[1];
        var methodStart = functionName.lastIndexOf('.');
        if (functionName[methodStart-1] == '.')
          methodStart--;
        if (methodStart > 0) {
          object = functionName.substr(0, methodStart);
          method = functionName.substr(methodStart + 1);
          var objectEnd = object.indexOf('.Module');
          if (objectEnd > 0) {
            functionName = functionName.substr(objectEnd + 1);
            object = object.substr(0, objectEnd);
          }
        }
        typeName = null;
      }

      if (method) {
        typeName = object;
        methodName = method;
      }

      if (method === '<anonymous>') {
        methodName = null;
        functionName = null;
      }

      var properties = {
        fileName: lineMatch[2] || null,
        lineNumber: parseInt(lineMatch[3], 10) || null,
        functionName: functionName,
        typeName: typeName,
        methodName: methodName,
        columnNumber: parseInt(lineMatch[4], 10) || null,
        'native': isNative,
      };

      return self._createParsedCallSite(properties);
    })
    .filter(function(callSite) {
      return !!callSite;
    });
};

function CallSite(properties) {
  for (var property in properties) {
    this[property] = properties[property];
  }
}

var strProperties = [
  'this',
  'typeName',
  'functionName',
  'methodName',
  'fileName',
  'lineNumber',
  'columnNumber',
  'function',
  'evalOrigin'
];
var boolProperties = [
  'topLevel',
  'eval',
  'native',
  'constructor'
];
strProperties.forEach(function (property) {
  CallSite.prototype[property] = null;
  CallSite.prototype['get' + property[0].toUpperCase() + property.substr(1)] = function () {
    return this[property];
  }
});
boolProperties.forEach(function (property) {
  CallSite.prototype[property] = false;
  CallSite.prototype['is' + property[0].toUpperCase() + property.substr(1)] = function () {
    return this[property];
  }
});

exports._createParsedCallSite = function(properties) {
  return new CallSite(properties);
};
