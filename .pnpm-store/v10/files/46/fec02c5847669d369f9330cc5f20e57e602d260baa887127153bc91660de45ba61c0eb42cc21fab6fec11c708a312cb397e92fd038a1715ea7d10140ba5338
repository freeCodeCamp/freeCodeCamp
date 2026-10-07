'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.availableDocStyleParsers = undefined;exports.




captureDoc = captureDoc;var _doctrine = require('doctrine');var _doctrine2 = _interopRequireDefault(_doctrine);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };} /**
                                                                                                                                                                                                                * parse docs from the first node that has leading comments
                                                                                                                                                                                                                */function captureDoc(source, docStyleParsers) {var metadata = {};
  // 'some' short-circuits on first 'true'
  for (var _len = arguments.length, nodes = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {nodes[_key - 2] = arguments[_key];}nodes.some(function (n) {
    try {

      var leadingComments = void 0;

      // n.leadingComments is legacy `attachComments` behavior
      if ('leadingComments' in n) {
        leadingComments = n.leadingComments;
      } else if (n.range) {
        leadingComments = source.getCommentsBefore(n);
      }

      if (!leadingComments || leadingComments.length === 0) {return false;}

      for (var name in docStyleParsers) {
        var doc = docStyleParsers[name](leadingComments);
        if (doc) {
          metadata.doc = doc;
        }
      }

      return true;
    } catch (err) {
      return false;
    }
  });

  return metadata;
}

/**
   * parse JSDoc from leading comments
   * @param {object[]} comments
   * @return {{ doc: object }}
   */
function captureJsDoc(comments) {
  var doc = void 0;

  // capture XSDoc
  comments.forEach(function (comment) {
    // skip non-block comments
    if (comment.type !== 'Block') {return;}
    try {
      doc = _doctrine2['default'].parse(comment.value, { unwrap: true });
    } catch (err) {
      /* don't care, for now? maybe add to `errors?` */
    }
  });

  return doc;
}

/**
    * parse TomDoc section from comments
    */
function captureTomDoc(comments) {
  // collect lines up to first paragraph break
  var lines = [];
  for (var i = 0; i < comments.length; i++) {
    var comment = comments[i];
    if (comment.value.match(/^\s*$/)) {break;}
    lines.push(comment.value.trim());
  }

  // return doctrine-like object
  var statusMatch = lines.join(' ').match(/^(Public|Internal|Deprecated):\s*(.+)/);
  if (statusMatch) {
    return {
      description: statusMatch[2],
      tags: [{
        title: statusMatch[1].toLowerCase(),
        description: statusMatch[2] }] };


  }
}

var availableDocStyleParsers = exports.availableDocStyleParsers = {
  jsdoc: captureJsDoc,
  tomdoc: captureTomDoc };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRNYXAvZG9jLmpzIl0sIm5hbWVzIjpbImNhcHR1cmVEb2MiLCJzb3VyY2UiLCJkb2NTdHlsZVBhcnNlcnMiLCJtZXRhZGF0YSIsIm5vZGVzIiwic29tZSIsIm4iLCJsZWFkaW5nQ29tbWVudHMiLCJyYW5nZSIsImdldENvbW1lbnRzQmVmb3JlIiwibGVuZ3RoIiwibmFtZSIsImRvYyIsImVyciIsImNhcHR1cmVKc0RvYyIsImNvbW1lbnRzIiwiZm9yRWFjaCIsImNvbW1lbnQiLCJ0eXBlIiwiZG9jdHJpbmUiLCJwYXJzZSIsInZhbHVlIiwidW53cmFwIiwiY2FwdHVyZVRvbURvYyIsImxpbmVzIiwiaSIsIm1hdGNoIiwicHVzaCIsInRyaW0iLCJzdGF0dXNNYXRjaCIsImpvaW4iLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiYXZhaWxhYmxlRG9jU3R5bGVQYXJzZXJzIiwianNkb2MiLCJ0b21kb2MiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS2dCQSxVLEdBQUFBLFUsQ0FMaEIsb0MsbUpBRUE7O2tOQUdPLFNBQVNBLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCQyxlQUE1QixFQUF1RCxDQUM1RCxJQUFNQyxXQUFXLEVBQWpCO0FBRUE7QUFINEQsb0NBQVBDLEtBQU8sbUVBQVBBLEtBQU8sOEJBSTVEQSxNQUFNQyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2hCLFFBQUk7O0FBRUYsVUFBSUMsd0JBQUo7O0FBRUE7QUFDQSxVQUFJLHFCQUFxQkQsQ0FBekIsRUFBNEI7QUFDMUJDLDBCQUFrQkQsRUFBRUMsZUFBcEI7QUFDRCxPQUZELE1BRU8sSUFBSUQsRUFBRUUsS0FBTixFQUFhO0FBQ2xCRCwwQkFBa0JOLE9BQU9RLGlCQUFQLENBQXlCSCxDQUF6QixDQUFsQjtBQUNEOztBQUVELFVBQUksQ0FBQ0MsZUFBRCxJQUFvQkEsZ0JBQWdCRyxNQUFoQixLQUEyQixDQUFuRCxFQUFzRCxDQUFFLE9BQU8sS0FBUCxDQUFlOztBQUV2RSxXQUFLLElBQU1DLElBQVgsSUFBbUJULGVBQW5CLEVBQW9DO0FBQ2xDLFlBQU1VLE1BQU1WLGdCQUFnQlMsSUFBaEIsRUFBc0JKLGVBQXRCLENBQVo7QUFDQSxZQUFJSyxHQUFKLEVBQVM7QUFDUFQsbUJBQVNTLEdBQVQsR0FBZUEsR0FBZjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0QsS0FyQkQsQ0FxQkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1osYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQXpCRDs7QUEyQkEsU0FBT1YsUUFBUDtBQUNEOztBQUVEOzs7OztBQUtBLFNBQVNXLFlBQVQsQ0FBc0JDLFFBQXRCLEVBQWdDO0FBQzlCLE1BQUlILFlBQUo7O0FBRUE7QUFDQUcsV0FBU0MsT0FBVCxDQUFpQixVQUFDQyxPQUFELEVBQWE7QUFDNUI7QUFDQSxRQUFJQSxRQUFRQyxJQUFSLEtBQWlCLE9BQXJCLEVBQThCLENBQUUsT0FBUztBQUN6QyxRQUFJO0FBQ0ZOLFlBQU1PLHNCQUFTQyxLQUFULENBQWVILFFBQVFJLEtBQXZCLEVBQThCLEVBQUVDLFFBQVEsSUFBVixFQUE5QixDQUFOO0FBQ0QsS0FGRCxDQUVFLE9BQU9ULEdBQVAsRUFBWTtBQUNaO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFNBQU9ELEdBQVA7QUFDRDs7QUFFRDs7O0FBR0EsU0FBU1csYUFBVCxDQUF1QlIsUUFBdkIsRUFBaUM7QUFDL0I7QUFDQSxNQUFNUyxRQUFRLEVBQWQ7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVYsU0FBU0wsTUFBN0IsRUFBcUNlLEdBQXJDLEVBQTBDO0FBQ3hDLFFBQU1SLFVBQVVGLFNBQVNVLENBQVQsQ0FBaEI7QUFDQSxRQUFJUixRQUFRSSxLQUFSLENBQWNLLEtBQWQsQ0FBb0IsT0FBcEIsQ0FBSixFQUFrQyxDQUFFLE1BQVE7QUFDNUNGLFVBQU1HLElBQU4sQ0FBV1YsUUFBUUksS0FBUixDQUFjTyxJQUFkLEVBQVg7QUFDRDs7QUFFRDtBQUNBLE1BQU1DLGNBQWNMLE1BQU1NLElBQU4sQ0FBVyxHQUFYLEVBQWdCSixLQUFoQixDQUFzQix1Q0FBdEIsQ0FBcEI7QUFDQSxNQUFJRyxXQUFKLEVBQWlCO0FBQ2YsV0FBTztBQUNMRSxtQkFBYUYsWUFBWSxDQUFaLENBRFI7QUFFTEcsWUFBTSxDQUFDO0FBQ0xDLGVBQU9KLFlBQVksQ0FBWixFQUFlSyxXQUFmLEVBREY7QUFFTEgscUJBQWFGLFlBQVksQ0FBWixDQUZSLEVBQUQsQ0FGRCxFQUFQOzs7QUFPRDtBQUNGOztBQUVNLElBQU1NLDhEQUEyQjtBQUN0Q0MsU0FBT3RCLFlBRCtCO0FBRXRDdUIsVUFBUWQsYUFGOEIsRUFBakMiLCJmaWxlIjoiZG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvY3RyaW5lIGZyb20gJ2RvY3RyaW5lJztcblxuLyoqXG4gKiBwYXJzZSBkb2NzIGZyb20gdGhlIGZpcnN0IG5vZGUgdGhhdCBoYXMgbGVhZGluZyBjb21tZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZURvYyhzb3VyY2UsIGRvY1N0eWxlUGFyc2VycywgLi4ubm9kZXMpIHtcbiAgY29uc3QgbWV0YWRhdGEgPSB7fTtcblxuICAvLyAnc29tZScgc2hvcnQtY2lyY3VpdHMgb24gZmlyc3QgJ3RydWUnXG4gIG5vZGVzLnNvbWUoKG4pID0+IHtcbiAgICB0cnkge1xuXG4gICAgICBsZXQgbGVhZGluZ0NvbW1lbnRzO1xuXG4gICAgICAvLyBuLmxlYWRpbmdDb21tZW50cyBpcyBsZWdhY3kgYGF0dGFjaENvbW1lbnRzYCBiZWhhdmlvclxuICAgICAgaWYgKCdsZWFkaW5nQ29tbWVudHMnIGluIG4pIHtcbiAgICAgICAgbGVhZGluZ0NvbW1lbnRzID0gbi5sZWFkaW5nQ29tbWVudHM7XG4gICAgICB9IGVsc2UgaWYgKG4ucmFuZ2UpIHtcbiAgICAgICAgbGVhZGluZ0NvbW1lbnRzID0gc291cmNlLmdldENvbW1lbnRzQmVmb3JlKG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxlYWRpbmdDb21tZW50cyB8fCBsZWFkaW5nQ29tbWVudHMubGVuZ3RoID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZG9jU3R5bGVQYXJzZXJzKSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGRvY1N0eWxlUGFyc2Vyc1tuYW1lXShsZWFkaW5nQ29tbWVudHMpO1xuICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgbWV0YWRhdGEuZG9jID0gZG9jO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG1ldGFkYXRhO1xufVxuXG4vKipcbiAqIHBhcnNlIEpTRG9jIGZyb20gbGVhZGluZyBjb21tZW50c1xuICogQHBhcmFtIHtvYmplY3RbXX0gY29tbWVudHNcbiAqIEByZXR1cm4ge3sgZG9jOiBvYmplY3QgfX1cbiAqL1xuZnVuY3Rpb24gY2FwdHVyZUpzRG9jKGNvbW1lbnRzKSB7XG4gIGxldCBkb2M7XG5cbiAgLy8gY2FwdHVyZSBYU0RvY1xuICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgLy8gc2tpcCBub24tYmxvY2sgY29tbWVudHNcbiAgICBpZiAoY29tbWVudC50eXBlICE9PSAnQmxvY2snKSB7IHJldHVybjsgfVxuICAgIHRyeSB7XG4gICAgICBkb2MgPSBkb2N0cmluZS5wYXJzZShjb21tZW50LnZhbHVlLCB7IHVud3JhcDogdHJ1ZSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8qIGRvbid0IGNhcmUsIGZvciBub3c/IG1heWJlIGFkZCB0byBgZXJyb3JzP2AgKi9cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkb2M7XG59XG5cbi8qKlxuICAqIHBhcnNlIFRvbURvYyBzZWN0aW9uIGZyb20gY29tbWVudHNcbiAgKi9cbmZ1bmN0aW9uIGNhcHR1cmVUb21Eb2MoY29tbWVudHMpIHtcbiAgLy8gY29sbGVjdCBsaW5lcyB1cCB0byBmaXJzdCBwYXJhZ3JhcGggYnJlYWtcbiAgY29uc3QgbGluZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50c1tpXTtcbiAgICBpZiAoY29tbWVudC52YWx1ZS5tYXRjaCgvXlxccyokLykpIHsgYnJlYWs7IH1cbiAgICBsaW5lcy5wdXNoKGNvbW1lbnQudmFsdWUudHJpbSgpKTtcbiAgfVxuXG4gIC8vIHJldHVybiBkb2N0cmluZS1saWtlIG9iamVjdFxuICBjb25zdCBzdGF0dXNNYXRjaCA9IGxpbmVzLmpvaW4oJyAnKS5tYXRjaCgvXihQdWJsaWN8SW50ZXJuYWx8RGVwcmVjYXRlZCk6XFxzKiguKykvKTtcbiAgaWYgKHN0YXR1c01hdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBzdGF0dXNNYXRjaFsyXSxcbiAgICAgIHRhZ3M6IFt7XG4gICAgICAgIHRpdGxlOiBzdGF0dXNNYXRjaFsxXS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBkZXNjcmlwdGlvbjogc3RhdHVzTWF0Y2hbMl0sXG4gICAgICB9XSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdmFpbGFibGVEb2NTdHlsZVBhcnNlcnMgPSB7XG4gIGpzZG9jOiBjYXB0dXJlSnNEb2MsXG4gIHRvbWRvYzogY2FwdHVyZVRvbURvYyxcbn07XG4iXX0=