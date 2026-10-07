/**
 * @fileoverview Utility functions for propWrapperFunctions setting
 */

'use strict';

const iterFrom = require('es-iterator-helpers/Iterator.from');
const map = require('es-iterator-helpers/Iterator.prototype.map');

/** TODO: type {(string | { name: string, linkAttribute: string })[]} */
/** @type {any} */
const DEFAULT_LINK_COMPONENTS = ['a'];
const DEFAULT_LINK_ATTRIBUTE = 'href';

/** TODO: type {(string | { name: string, formAttribute: string })[]} */
/** @type {any} */
const DEFAULT_FORM_COMPONENTS = ['form'];
const DEFAULT_FORM_ATTRIBUTE = 'action';

function getFormComponents(context) {
  const settings = context.settings || {};
  const formComponents = /** @type {typeof DEFAULT_FORM_COMPONENTS} */ (
    DEFAULT_FORM_COMPONENTS.concat(settings.formComponents || [])
  );
  return new Map(map(iterFrom(formComponents), (value) => {
    if (typeof value === 'string') {
      return [value, [DEFAULT_FORM_ATTRIBUTE]];
    }
    return [value.name, [].concat(value.formAttribute)];
  }));
}

function getLinkComponents(context) {
  const settings = context.settings || {};
  const linkComponents = /** @type {typeof DEFAULT_LINK_COMPONENTS} */ (
    DEFAULT_LINK_COMPONENTS.concat(settings.linkComponents || [])
  );
  return new Map(map(iterFrom(linkComponents), (value) => {
    if (typeof value === 'string') {
      return [value, [DEFAULT_LINK_ATTRIBUTE]];
    }
    return [value.name, [].concat(value.linkAttribute)];
  }));
}

module.exports = {
  getFormComponents,
  getLinkComponents,
};
