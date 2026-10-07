"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.deleteUntouchedPages = deleteUntouchedPages;
exports.findChangedPages = findChangedPages;
var _isEqualWith2 = _interopRequireDefault(require("lodash/isEqualWith"));
var _actions = require("../redux/actions");
var _redux = require("../redux");
const {
  deletePage
} = _actions.actions;
function deleteUntouchedPages(currentPages, timeBeforeApisRan, shouldRunCreatePagesStatefully) {
  const deletedPages = [];

  // Delete pages that weren't updated when running createPages.
  currentPages.forEach(page => {
    if ((shouldRunCreatePagesStatefully || !page.isCreatedByStatefulCreatePages) && page.updatedAt < timeBeforeApisRan) {
      _redux.store.dispatch(deletePage(page));
      deletedPages.push(page.path, `/page-data${page.path}`);
    }
  });
  return deletedPages;
}
function findChangedPages(oldPages, currentPages) {
  const changedPages = [];
  const compareWithoutUpdated = (_left, _right, key) => key === `updatedAt` || undefined;
  currentPages.forEach((newPage, path) => {
    const oldPage = oldPages.get(path);
    if (!oldPage || !(0, _isEqualWith2.default)(newPage, oldPage, compareWithoutUpdated)) {
      changedPages.push(path);
    }
  });
  const deletedPages = [];
  oldPages.forEach((_page, key) => {
    if (!currentPages.has(key)) {
      deletedPages.push(key);
    }
  });
  return {
    changedPages,
    deletedPages
  };
}
//# sourceMappingURL=changed-pages.js.map