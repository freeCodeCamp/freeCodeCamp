import React from 'react';
/**
 * Modifies in-place and returns a React Component class such that it correctly uses
 * the React context API appropriate for the version of React being used.
 *
 * @see https://reactjs.org/docs/context.html
 *
 * @param {React.Component} Component React component to modify to use the correct
 *        context API
 * @param {Object} options Hash of options that define the shape and default values
 *        of the context to use with descendant components.
 * @param {Object} options.deprecatedAPI Hash of options that satisfy the legacy
 *        or deprecated pre React 16.* API
 * @param {Object} options.deprecatedAPI.contextTypes Context types describing the
 *        shape and type of the context that Component consumes, expressed as React
 *        prop types
 * @param {Object} options.deprecatedAPI.childContextTypes Context types describing the
 *        shape and type of the context that Component makes available to its descendants
 *        to consume, expressed as React prop types
 * @param {Object} options.newAPI Hash of options that satisfy the new context API,
 *        available from React 16.* onwards
 * @param {Object} options.newAPI.contextType Object describing the shape and default
 *        values of the context instance used provide context to descendant components
 * @returns {React.Component} Component that has now had the specified context applied
 */

function backwardsCompatibleContext(Component, _ref) {
  var _ref$deprecatedAPI = _ref.deprecatedAPI,
      contextTypes = _ref$deprecatedAPI.contextTypes,
      childContextTypes = _ref$deprecatedAPI.childContextTypes,
      contextType = _ref.newAPI.contextType;

  /**
   * React v16.* introduces a new context API and deprecates the previous, experimental one
   */
  if (typeof React.createContext === 'undefined') {
    /**
     * We apply the deprecated context if the new createContext method is not defined.
     * @note this uses the new context API for React v16.*, even though it is still
     * available until React v17.*
     */

    /**
     * The contextTypes and childContextTypes are the same as each react hotkeys component
     * that uses context, both consumes its most direct ancestor's context and modifies
     * the context of its descendants in order to recursively pass down the guid of the
     * most direct ancestor
     */
    Component.contextTypes = contextTypes;
    Component.childContextTypes = childContextTypes;

    Component.prototype.getChildContext = function () {
      return this._childContext;
    };
  } else {
    var context = React.createContext(contextType);
    Component.contextType = context;
    Component.prototype._originalRender = Component.prototype.render;
    /**
     * We unfortunately have to wrap the original render method of the Component to
     * dynamically add the context Provider component.
     *
     * No ill-effects have been discovered during testing, but if strange occurrences
     * or edge cases start to appear - this may be a great place to start looking.
     */

    Component.prototype.render = function () {
      var result = this._originalRender();

      if (result) {
        return React.createElement(context.Provider, {
          value: this._childContext
        }, result);
      } else {
        return null;
      }
    };
  }

  return Component;
}

export default backwardsCompatibleContext;