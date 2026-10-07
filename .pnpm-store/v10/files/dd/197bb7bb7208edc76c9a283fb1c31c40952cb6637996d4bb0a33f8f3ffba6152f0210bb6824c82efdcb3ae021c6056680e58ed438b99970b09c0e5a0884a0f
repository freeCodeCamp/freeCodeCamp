'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports['default'] =


















childContext;var _hash = require('eslint-module-utils/hash');var optionsHash = '';var prevOptions = '';var settingsHash = '';var prevSettings = ''; // Replacer function helps us with serializing the parser nested within `languageOptions`.
function stringifyReplacerFn(_, value) {if (typeof value === 'function') {return String(value);}return value;} /**
                                                                                                                * don't hold full context object in memory, just grab what we need.
                                                                                                                * also calculate a cacheKey, where parts of the cacheKey hash are memoized
                                                                                                                */function childContext(path, context) {var settings = context.settings,parserOptions = context.parserOptions,parserPath = context.parserPath,languageOptions = context.languageOptions;if (JSON.stringify(settings) !== prevSettings) {settingsHash = (0, _hash.hashObject)({ settings: settings }).digest('hex');
    prevSettings = JSON.stringify(settings);
  }

  // We'll use either a combination of `parserOptions` and `parserPath` or `languageOptions`
  // to construct the cache key, depending on whether this is using a flat config or not.
  var optionsToken = void 0;
  if (!parserPath && languageOptions) {
    if (JSON.stringify(languageOptions, stringifyReplacerFn) !== prevOptions) {
      optionsHash = (0, _hash.hashObject)({ languageOptions: languageOptions }).digest('hex');
      prevOptions = JSON.stringify(languageOptions, stringifyReplacerFn);
    }
    // For languageOptions, we're just using the hashed options as the options token
    optionsToken = optionsHash;
  } else {
    if (JSON.stringify(parserOptions) !== prevOptions) {
      optionsHash = (0, _hash.hashObject)({ parserOptions: parserOptions }).digest('hex');
      prevOptions = JSON.stringify(parserOptions);
    }
    // When not using flat config, we use a combination of the hashed parserOptions
    // and parserPath as the token
    optionsToken = String(parserPath) + optionsHash;
  }

  return {
    cacheKey: optionsToken + settingsHash + String(path),
    settings: settings,
    parserOptions: parserOptions,
    parserPath: parserPath,
    path: path,
    languageOptions: languageOptions };

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRNYXAvY2hpbGRDb250ZXh0LmpzIl0sIm5hbWVzIjpbImNoaWxkQ29udGV4dCIsIm9wdGlvbnNIYXNoIiwicHJldk9wdGlvbnMiLCJzZXR0aW5nc0hhc2giLCJwcmV2U2V0dGluZ3MiLCJzdHJpbmdpZnlSZXBsYWNlckZuIiwiXyIsInZhbHVlIiwiU3RyaW5nIiwicGF0aCIsImNvbnRleHQiLCJzZXR0aW5ncyIsInBhcnNlck9wdGlvbnMiLCJwYXJzZXJQYXRoIiwibGFuZ3VhZ2VPcHRpb25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpZ2VzdCIsIm9wdGlvbnNUb2tlbiIsImNhY2hlS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ3QkEsWSxDQW5CeEIsZ0RBRUEsSUFBSUMsY0FBYyxFQUFsQixDQUNBLElBQUlDLGNBQWMsRUFBbEIsQ0FDQSxJQUFJQyxlQUFlLEVBQW5CLENBQ0EsSUFBSUMsZUFBZSxFQUFuQixDLENBRUE7QUFDQSxTQUFTQyxtQkFBVCxDQUE2QkMsQ0FBN0IsRUFBZ0NDLEtBQWhDLEVBQXVDLENBQ3JDLElBQUksT0FBT0EsS0FBUCxLQUFpQixVQUFyQixFQUFpQyxDQUMvQixPQUFPQyxPQUFPRCxLQUFQLENBQVAsQ0FDRCxDQUNELE9BQU9BLEtBQVAsQ0FDRCxDLENBRUQ7OztrSEFJZSxTQUFTUCxZQUFULENBQXNCUyxJQUF0QixFQUE0QkMsT0FBNUIsRUFBcUMsS0FDMUNDLFFBRDBDLEdBQ2VELE9BRGYsQ0FDMUNDLFFBRDBDLENBQ2hDQyxhQURnQyxHQUNlRixPQURmLENBQ2hDRSxhQURnQyxDQUNqQkMsVUFEaUIsR0FDZUgsT0FEZixDQUNqQkcsVUFEaUIsQ0FDTEMsZUFESyxHQUNlSixPQURmLENBQ0xJLGVBREssQ0FHbEQsSUFBSUMsS0FBS0MsU0FBTCxDQUFlTCxRQUFmLE1BQTZCUCxZQUFqQyxFQUErQyxDQUM3Q0QsZUFBZSxzQkFBVyxFQUFFUSxrQkFBRixFQUFYLEVBQXlCTSxNQUF6QixDQUFnQyxLQUFoQyxDQUFmO0FBQ0FiLG1CQUFlVyxLQUFLQyxTQUFMLENBQWVMLFFBQWYsQ0FBZjtBQUNEOztBQUVEO0FBQ0E7QUFDQSxNQUFJTyxxQkFBSjtBQUNBLE1BQUksQ0FBQ0wsVUFBRCxJQUFlQyxlQUFuQixFQUFvQztBQUNsQyxRQUFJQyxLQUFLQyxTQUFMLENBQWVGLGVBQWYsRUFBZ0NULG1CQUFoQyxNQUF5REgsV0FBN0QsRUFBMEU7QUFDeEVELG9CQUFjLHNCQUFXLEVBQUVhLGdDQUFGLEVBQVgsRUFBZ0NHLE1BQWhDLENBQXVDLEtBQXZDLENBQWQ7QUFDQWYsb0JBQWNhLEtBQUtDLFNBQUwsQ0FBZUYsZUFBZixFQUFnQ1QsbUJBQWhDLENBQWQ7QUFDRDtBQUNEO0FBQ0FhLG1CQUFlakIsV0FBZjtBQUNELEdBUEQsTUFPTztBQUNMLFFBQUljLEtBQUtDLFNBQUwsQ0FBZUosYUFBZixNQUFrQ1YsV0FBdEMsRUFBbUQ7QUFDakRELG9CQUFjLHNCQUFXLEVBQUVXLDRCQUFGLEVBQVgsRUFBOEJLLE1BQTlCLENBQXFDLEtBQXJDLENBQWQ7QUFDQWYsb0JBQWNhLEtBQUtDLFNBQUwsQ0FBZUosYUFBZixDQUFkO0FBQ0Q7QUFDRDtBQUNBO0FBQ0FNLG1CQUFlVixPQUFPSyxVQUFQLElBQXFCWixXQUFwQztBQUNEOztBQUVELFNBQU87QUFDTGtCLGNBQVVELGVBQWVmLFlBQWYsR0FBOEJLLE9BQU9DLElBQVAsQ0FEbkM7QUFFTEUsc0JBRks7QUFHTEMsZ0NBSEs7QUFJTEMsMEJBSks7QUFLTEosY0FMSztBQU1MSyxvQ0FOSyxFQUFQOztBQVFEIiwiZmlsZSI6ImNoaWxkQ29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2hPYmplY3QgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2hhc2gnO1xuXG5sZXQgb3B0aW9uc0hhc2ggPSAnJztcbmxldCBwcmV2T3B0aW9ucyA9ICcnO1xubGV0IHNldHRpbmdzSGFzaCA9ICcnO1xubGV0IHByZXZTZXR0aW5ncyA9ICcnO1xuXG4vLyBSZXBsYWNlciBmdW5jdGlvbiBoZWxwcyB1cyB3aXRoIHNlcmlhbGl6aW5nIHRoZSBwYXJzZXIgbmVzdGVkIHdpdGhpbiBgbGFuZ3VhZ2VPcHRpb25zYC5cbmZ1bmN0aW9uIHN0cmluZ2lmeVJlcGxhY2VyRm4oXywgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBkb24ndCBob2xkIGZ1bGwgY29udGV4dCBvYmplY3QgaW4gbWVtb3J5LCBqdXN0IGdyYWIgd2hhdCB3ZSBuZWVkLlxuICogYWxzbyBjYWxjdWxhdGUgYSBjYWNoZUtleSwgd2hlcmUgcGFydHMgb2YgdGhlIGNhY2hlS2V5IGhhc2ggYXJlIG1lbW9pemVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoaWxkQ29udGV4dChwYXRoLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgc2V0dGluZ3MsIHBhcnNlck9wdGlvbnMsIHBhcnNlclBhdGgsIGxhbmd1YWdlT3B0aW9ucyB9ID0gY29udGV4dDtcblxuICBpZiAoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpICE9PSBwcmV2U2V0dGluZ3MpIHtcbiAgICBzZXR0aW5nc0hhc2ggPSBoYXNoT2JqZWN0KHsgc2V0dGluZ3MgfSkuZGlnZXN0KCdoZXgnKTtcbiAgICBwcmV2U2V0dGluZ3MgPSBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XG4gIH1cblxuICAvLyBXZSdsbCB1c2UgZWl0aGVyIGEgY29tYmluYXRpb24gb2YgYHBhcnNlck9wdGlvbnNgIGFuZCBgcGFyc2VyUGF0aGAgb3IgYGxhbmd1YWdlT3B0aW9uc2BcbiAgLy8gdG8gY29uc3RydWN0IHRoZSBjYWNoZSBrZXksIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoaXMgaXMgdXNpbmcgYSBmbGF0IGNvbmZpZyBvciBub3QuXG4gIGxldCBvcHRpb25zVG9rZW47XG4gIGlmICghcGFyc2VyUGF0aCAmJiBsYW5ndWFnZU9wdGlvbnMpIHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkobGFuZ3VhZ2VPcHRpb25zLCBzdHJpbmdpZnlSZXBsYWNlckZuKSAhPT0gcHJldk9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnNIYXNoID0gaGFzaE9iamVjdCh7IGxhbmd1YWdlT3B0aW9ucyB9KS5kaWdlc3QoJ2hleCcpO1xuICAgICAgcHJldk9wdGlvbnMgPSBKU09OLnN0cmluZ2lmeShsYW5ndWFnZU9wdGlvbnMsIHN0cmluZ2lmeVJlcGxhY2VyRm4pO1xuICAgIH1cbiAgICAvLyBGb3IgbGFuZ3VhZ2VPcHRpb25zLCB3ZSdyZSBqdXN0IHVzaW5nIHRoZSBoYXNoZWQgb3B0aW9ucyBhcyB0aGUgb3B0aW9ucyB0b2tlblxuICAgIG9wdGlvbnNUb2tlbiA9IG9wdGlvbnNIYXNoO1xuICB9IGVsc2Uge1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShwYXJzZXJPcHRpb25zKSAhPT0gcHJldk9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnNIYXNoID0gaGFzaE9iamVjdCh7IHBhcnNlck9wdGlvbnMgfSkuZGlnZXN0KCdoZXgnKTtcbiAgICAgIHByZXZPcHRpb25zID0gSlNPTi5zdHJpbmdpZnkocGFyc2VyT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIFdoZW4gbm90IHVzaW5nIGZsYXQgY29uZmlnLCB3ZSB1c2UgYSBjb21iaW5hdGlvbiBvZiB0aGUgaGFzaGVkIHBhcnNlck9wdGlvbnNcbiAgICAvLyBhbmQgcGFyc2VyUGF0aCBhcyB0aGUgdG9rZW5cbiAgICBvcHRpb25zVG9rZW4gPSBTdHJpbmcocGFyc2VyUGF0aCkgKyBvcHRpb25zSGFzaDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2FjaGVLZXk6IG9wdGlvbnNUb2tlbiArIHNldHRpbmdzSGFzaCArIFN0cmluZyhwYXRoKSxcbiAgICBzZXR0aW5ncyxcbiAgICBwYXJzZXJPcHRpb25zLFxuICAgIHBhcnNlclBhdGgsXG4gICAgcGF0aCxcbiAgICBsYW5ndWFnZU9wdGlvbnMsXG4gIH07XG59XG4iXX0=