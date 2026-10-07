'use strict';var _builder = require('../exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _importDeclaration = require('../importDeclaration');var _importDeclaration2 = _interopRequireDefault(_importDeclaration);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Helpful warnings',
      description: 'Forbid use of exported name as identifier of default export.',
      url: (0, _docsUrl2['default'])('no-named-as-default') },

    schema: [] },


  create: function () {function create(context) {
      function checkDefault(nameKey, defaultSpecifier) {
        /**
                                                         * For ImportDefaultSpecifier we're interested in the "local" name (`foo` for `import {bar as foo} ...`)
                                                         * For ExportDefaultSpecifier we're interested in the "exported" name (`foo` for `export {bar as foo} ...`)
                                                         */
        var analyzedName = defaultSpecifier[nameKey].name;

        // #566: default is a valid specifier
        if (analyzedName === 'default') {return;}

        var declaration = (0, _importDeclaration2['default'])(context, defaultSpecifier);
        /** @type {import('../exportMap').default | null} */
        var importedModule = _builder2['default'].get(declaration.source.value, context);
        if (importedModule == null) {return;}

        if (importedModule.errors.length > 0) {
          importedModule.reportErrors(context, declaration);
          return;
        }

        if (!importedModule.hasDefault) {
          // The rule is triggered for default imports/exports, so if the imported module has no default
          // this means we're dealing with incorrect source code anyway
          return;
        }

        if (!importedModule.has(analyzedName)) {
          // The name used locally for the default import was not even used in the imported module.
          return;
        }

        /**
           * FIXME: We can verify if a default and a named export are pointing to the same symbol only
           * if they are both `reexports`. In case one of the symbols is not a re-export, but defined
           * in the file, the ExportMap structure has no info about what actually is being exported --
           * the value in the `namespace` Map is an empty object.
           *
           * To solve this, it would require not relying on the ExportMap, but on some other way of
           * accessing the imported module and its exported values.
           *
           * Additionally, although `ExportMap.get` is a unified way to get info from both `reexports`
           * and `namespace` maps, it does not return valid output we need here, and I think this is
           * related to the "cycle safeguards" in the `get` function.
           */

        if (importedModule.reexports.has(analyzedName) && importedModule.reexports.has('default')) {
          var thingImportedWithNamedImport = importedModule.reexports.get(analyzedName).getImport();
          var thingImportedWithDefaultImport = importedModule.reexports.get('default').getImport();

          // Case: both imports point to the same file and they both refer to the same symbol in this file.
          if (
          thingImportedWithNamedImport.path === thingImportedWithDefaultImport.path &&
          thingImportedWithNamedImport.local === thingImportedWithDefaultImport.local)
          {
            // #1594: the imported module exports the same thing via a default export and a named export
            return;
          }
        }

        context.report(
        defaultSpecifier, 'Using exported name \'' + String(
        defaultSpecifier[nameKey].name) + '\' as identifier for default ' + (nameKey === 'local' ? 'import' : 'export') + '.');


      }

      return {
        ImportDefaultSpecifier: checkDefault.bind(null, 'local'),
        ExportDefaultSpecifier: checkDefault.bind(null, 'exported') };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1uYW1lZC1hcy1kZWZhdWx0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwiY3JlYXRlIiwiY29udGV4dCIsImNoZWNrRGVmYXVsdCIsIm5hbWVLZXkiLCJkZWZhdWx0U3BlY2lmaWVyIiwiYW5hbHl6ZWROYW1lIiwibmFtZSIsImRlY2xhcmF0aW9uIiwiaW1wb3J0ZWRNb2R1bGUiLCJFeHBvcnRNYXBCdWlsZGVyIiwiZ2V0Iiwic291cmNlIiwidmFsdWUiLCJlcnJvcnMiLCJsZW5ndGgiLCJyZXBvcnRFcnJvcnMiLCJoYXNEZWZhdWx0IiwiaGFzIiwicmVleHBvcnRzIiwidGhpbmdJbXBvcnRlZFdpdGhOYW1lZEltcG9ydCIsImdldEltcG9ydCIsInRoaW5nSW1wb3J0ZWRXaXRoRGVmYXVsdEltcG9ydCIsInBhdGgiLCJsb2NhbCIsInJlcG9ydCIsIkltcG9ydERlZmF1bHRTcGVjaWZpZXIiLCJiaW5kIiwiRXhwb3J0RGVmYXVsdFNwZWNpZmllciJdLCJtYXBwaW5ncyI6ImFBQUEsK0M7QUFDQSx5RDtBQUNBLHFDOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxTQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsa0JBRE47QUFFSkMsbUJBQWEsOERBRlQ7QUFHSkMsV0FBSywwQkFBUSxxQkFBUixDQUhELEVBRkY7O0FBT0pDLFlBQVEsRUFQSixFQURTOzs7QUFXZkMsUUFYZSwrQkFXUkMsT0FYUSxFQVdDO0FBQ2QsZUFBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0JDLGdCQUEvQixFQUFpRDtBQUMvQzs7OztBQUlBLFlBQU1DLGVBQWVELGlCQUFpQkQsT0FBakIsRUFBMEJHLElBQS9DOztBQUVBO0FBQ0EsWUFBSUQsaUJBQWlCLFNBQXJCLEVBQWdDLENBQUUsT0FBUzs7QUFFM0MsWUFBTUUsY0FBYyxvQ0FBa0JOLE9BQWxCLEVBQTJCRyxnQkFBM0IsQ0FBcEI7QUFDQTtBQUNBLFlBQU1JLGlCQUFpQkMscUJBQWlCQyxHQUFqQixDQUFxQkgsWUFBWUksTUFBWixDQUFtQkMsS0FBeEMsRUFBK0NYLE9BQS9DLENBQXZCO0FBQ0EsWUFBSU8sa0JBQWtCLElBQXRCLEVBQTRCLENBQUUsT0FBUzs7QUFFdkMsWUFBSUEsZUFBZUssTUFBZixDQUFzQkMsTUFBdEIsR0FBK0IsQ0FBbkMsRUFBc0M7QUFDcENOLHlCQUFlTyxZQUFmLENBQTRCZCxPQUE1QixFQUFxQ00sV0FBckM7QUFDQTtBQUNEOztBQUVELFlBQUksQ0FBQ0MsZUFBZVEsVUFBcEIsRUFBZ0M7QUFDOUI7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDUixlQUFlUyxHQUFmLENBQW1CWixZQUFuQixDQUFMLEVBQXVDO0FBQ3JDO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUFjQSxZQUFJRyxlQUFlVSxTQUFmLENBQXlCRCxHQUF6QixDQUE2QlosWUFBN0IsS0FBOENHLGVBQWVVLFNBQWYsQ0FBeUJELEdBQXpCLENBQTZCLFNBQTdCLENBQWxELEVBQTJGO0FBQ3pGLGNBQU1FLCtCQUErQlgsZUFBZVUsU0FBZixDQUF5QlIsR0FBekIsQ0FBNkJMLFlBQTdCLEVBQTJDZSxTQUEzQyxFQUFyQztBQUNBLGNBQU1DLGlDQUFpQ2IsZUFBZVUsU0FBZixDQUF5QlIsR0FBekIsQ0FBNkIsU0FBN0IsRUFBd0NVLFNBQXhDLEVBQXZDOztBQUVBO0FBQ0E7QUFDRUQsdUNBQTZCRyxJQUE3QixLQUFzQ0QsK0JBQStCQyxJQUFyRTtBQUNHSCx1Q0FBNkJJLEtBQTdCLEtBQXVDRiwrQkFBK0JFLEtBRjNFO0FBR0U7QUFDQTtBQUNBO0FBQ0Q7QUFDRjs7QUFFRHRCLGdCQUFRdUIsTUFBUjtBQUNFcEIsd0JBREY7QUFFMEJBLHlCQUFpQkQsT0FBakIsRUFBMEJHLElBRnBELHVDQUV1RkgsWUFBWSxPQUFaLHNCQUZ2Rjs7O0FBS0Q7O0FBRUQsYUFBTztBQUNMc0IsZ0NBQXdCdkIsYUFBYXdCLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0IsT0FBeEIsQ0FEbkI7QUFFTEMsZ0NBQXdCekIsYUFBYXdCLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0IsVUFBeEIsQ0FGbkIsRUFBUDs7QUFJRCxLQWxGYyxtQkFBakIiLCJmaWxlIjoibm8tbmFtZWQtYXMtZGVmYXVsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHBvcnRNYXBCdWlsZGVyIGZyb20gJy4uL2V4cG9ydE1hcC9idWlsZGVyJztcbmltcG9ydCBpbXBvcnREZWNsYXJhdGlvbiBmcm9tICcuLi9pbXBvcnREZWNsYXJhdGlvbic7XG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAncHJvYmxlbScsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdIZWxwZnVsIHdhcm5pbmdzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yYmlkIHVzZSBvZiBleHBvcnRlZCBuYW1lIGFzIGlkZW50aWZpZXIgb2YgZGVmYXVsdCBleHBvcnQuJyxcbiAgICAgIHVybDogZG9jc1VybCgnbm8tbmFtZWQtYXMtZGVmYXVsdCcpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRGVmYXVsdChuYW1lS2V5LCBkZWZhdWx0U3BlY2lmaWVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIEZvciBJbXBvcnREZWZhdWx0U3BlY2lmaWVyIHdlJ3JlIGludGVyZXN0ZWQgaW4gdGhlIFwibG9jYWxcIiBuYW1lIChgZm9vYCBmb3IgYGltcG9ydCB7YmFyIGFzIGZvb30gLi4uYClcbiAgICAgICAqIEZvciBFeHBvcnREZWZhdWx0U3BlY2lmaWVyIHdlJ3JlIGludGVyZXN0ZWQgaW4gdGhlIFwiZXhwb3J0ZWRcIiBuYW1lIChgZm9vYCBmb3IgYGV4cG9ydCB7YmFyIGFzIGZvb30gLi4uYClcbiAgICAgICAqL1xuICAgICAgY29uc3QgYW5hbHl6ZWROYW1lID0gZGVmYXVsdFNwZWNpZmllcltuYW1lS2V5XS5uYW1lO1xuXG4gICAgICAvLyAjNTY2OiBkZWZhdWx0IGlzIGEgdmFsaWQgc3BlY2lmaWVyXG4gICAgICBpZiAoYW5hbHl6ZWROYW1lID09PSAnZGVmYXVsdCcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gaW1wb3J0RGVjbGFyYXRpb24oY29udGV4dCwgZGVmYXVsdFNwZWNpZmllcik7XG4gICAgICAvKiogQHR5cGUge2ltcG9ydCgnLi4vZXhwb3J0TWFwJykuZGVmYXVsdCB8IG51bGx9ICovXG4gICAgICBjb25zdCBpbXBvcnRlZE1vZHVsZSA9IEV4cG9ydE1hcEJ1aWxkZXIuZ2V0KGRlY2xhcmF0aW9uLnNvdXJjZS52YWx1ZSwgY29udGV4dCk7XG4gICAgICBpZiAoaW1wb3J0ZWRNb2R1bGUgPT0gbnVsbCkgeyByZXR1cm47IH1cblxuICAgICAgaWYgKGltcG9ydGVkTW9kdWxlLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGltcG9ydGVkTW9kdWxlLnJlcG9ydEVycm9ycyhjb250ZXh0LCBkZWNsYXJhdGlvbik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpbXBvcnRlZE1vZHVsZS5oYXNEZWZhdWx0KSB7XG4gICAgICAgIC8vIFRoZSBydWxlIGlzIHRyaWdnZXJlZCBmb3IgZGVmYXVsdCBpbXBvcnRzL2V4cG9ydHMsIHNvIGlmIHRoZSBpbXBvcnRlZCBtb2R1bGUgaGFzIG5vIGRlZmF1bHRcbiAgICAgICAgLy8gdGhpcyBtZWFucyB3ZSdyZSBkZWFsaW5nIHdpdGggaW5jb3JyZWN0IHNvdXJjZSBjb2RlIGFueXdheVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghaW1wb3J0ZWRNb2R1bGUuaGFzKGFuYWx5emVkTmFtZSkpIHtcbiAgICAgICAgLy8gVGhlIG5hbWUgdXNlZCBsb2NhbGx5IGZvciB0aGUgZGVmYXVsdCBpbXBvcnQgd2FzIG5vdCBldmVuIHVzZWQgaW4gdGhlIGltcG9ydGVkIG1vZHVsZS5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZJWE1FOiBXZSBjYW4gdmVyaWZ5IGlmIGEgZGVmYXVsdCBhbmQgYSBuYW1lZCBleHBvcnQgYXJlIHBvaW50aW5nIHRvIHRoZSBzYW1lIHN5bWJvbCBvbmx5XG4gICAgICAgKiBpZiB0aGV5IGFyZSBib3RoIGByZWV4cG9ydHNgLiBJbiBjYXNlIG9uZSBvZiB0aGUgc3ltYm9scyBpcyBub3QgYSByZS1leHBvcnQsIGJ1dCBkZWZpbmVkXG4gICAgICAgKiBpbiB0aGUgZmlsZSwgdGhlIEV4cG9ydE1hcCBzdHJ1Y3R1cmUgaGFzIG5vIGluZm8gYWJvdXQgd2hhdCBhY3R1YWxseSBpcyBiZWluZyBleHBvcnRlZCAtLVxuICAgICAgICogdGhlIHZhbHVlIGluIHRoZSBgbmFtZXNwYWNlYCBNYXAgaXMgYW4gZW1wdHkgb2JqZWN0LlxuICAgICAgICpcbiAgICAgICAqIFRvIHNvbHZlIHRoaXMsIGl0IHdvdWxkIHJlcXVpcmUgbm90IHJlbHlpbmcgb24gdGhlIEV4cG9ydE1hcCwgYnV0IG9uIHNvbWUgb3RoZXIgd2F5IG9mXG4gICAgICAgKiBhY2Nlc3NpbmcgdGhlIGltcG9ydGVkIG1vZHVsZSBhbmQgaXRzIGV4cG9ydGVkIHZhbHVlcy5cbiAgICAgICAqXG4gICAgICAgKiBBZGRpdGlvbmFsbHksIGFsdGhvdWdoIGBFeHBvcnRNYXAuZ2V0YCBpcyBhIHVuaWZpZWQgd2F5IHRvIGdldCBpbmZvIGZyb20gYm90aCBgcmVleHBvcnRzYFxuICAgICAgICogYW5kIGBuYW1lc3BhY2VgIG1hcHMsIGl0IGRvZXMgbm90IHJldHVybiB2YWxpZCBvdXRwdXQgd2UgbmVlZCBoZXJlLCBhbmQgSSB0aGluayB0aGlzIGlzXG4gICAgICAgKiByZWxhdGVkIHRvIHRoZSBcImN5Y2xlIHNhZmVndWFyZHNcIiBpbiB0aGUgYGdldGAgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuICAgICAgaWYgKGltcG9ydGVkTW9kdWxlLnJlZXhwb3J0cy5oYXMoYW5hbHl6ZWROYW1lKSAmJiBpbXBvcnRlZE1vZHVsZS5yZWV4cG9ydHMuaGFzKCdkZWZhdWx0JykpIHtcbiAgICAgICAgY29uc3QgdGhpbmdJbXBvcnRlZFdpdGhOYW1lZEltcG9ydCA9IGltcG9ydGVkTW9kdWxlLnJlZXhwb3J0cy5nZXQoYW5hbHl6ZWROYW1lKS5nZXRJbXBvcnQoKTtcbiAgICAgICAgY29uc3QgdGhpbmdJbXBvcnRlZFdpdGhEZWZhdWx0SW1wb3J0ID0gaW1wb3J0ZWRNb2R1bGUucmVleHBvcnRzLmdldCgnZGVmYXVsdCcpLmdldEltcG9ydCgpO1xuXG4gICAgICAgIC8vIENhc2U6IGJvdGggaW1wb3J0cyBwb2ludCB0byB0aGUgc2FtZSBmaWxlIGFuZCB0aGV5IGJvdGggcmVmZXIgdG8gdGhlIHNhbWUgc3ltYm9sIGluIHRoaXMgZmlsZS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaW5nSW1wb3J0ZWRXaXRoTmFtZWRJbXBvcnQucGF0aCA9PT0gdGhpbmdJbXBvcnRlZFdpdGhEZWZhdWx0SW1wb3J0LnBhdGhcbiAgICAgICAgICAmJiB0aGluZ0ltcG9ydGVkV2l0aE5hbWVkSW1wb3J0LmxvY2FsID09PSB0aGluZ0ltcG9ydGVkV2l0aERlZmF1bHRJbXBvcnQubG9jYWxcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gIzE1OTQ6IHRoZSBpbXBvcnRlZCBtb2R1bGUgZXhwb3J0cyB0aGUgc2FtZSB0aGluZyB2aWEgYSBkZWZhdWx0IGV4cG9ydCBhbmQgYSBuYW1lZCBleHBvcnRcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29udGV4dC5yZXBvcnQoXG4gICAgICAgIGRlZmF1bHRTcGVjaWZpZXIsXG4gICAgICAgIGBVc2luZyBleHBvcnRlZCBuYW1lICcke2RlZmF1bHRTcGVjaWZpZXJbbmFtZUtleV0ubmFtZX0nIGFzIGlkZW50aWZpZXIgZm9yIGRlZmF1bHQgJHtuYW1lS2V5ID09PSAnbG9jYWwnID8gYGltcG9ydGAgOiBgZXhwb3J0YH0uYCxcbiAgICAgICk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgSW1wb3J0RGVmYXVsdFNwZWNpZmllcjogY2hlY2tEZWZhdWx0LmJpbmQobnVsbCwgJ2xvY2FsJyksXG4gICAgICBFeHBvcnREZWZhdWx0U3BlY2lmaWVyOiBjaGVja0RlZmF1bHQuYmluZChudWxsLCAnZXhwb3J0ZWQnKSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==