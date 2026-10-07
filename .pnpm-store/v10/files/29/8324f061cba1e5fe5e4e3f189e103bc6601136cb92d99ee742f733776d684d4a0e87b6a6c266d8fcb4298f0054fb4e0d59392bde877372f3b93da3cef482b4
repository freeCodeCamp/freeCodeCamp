'use strict';

function getScopeParam(scope, scopeSeparator) {
  if (scope === undefined) {
    return null;
  }

  if (Array.isArray(scope)) {
    return {
      scope: scope.join(scopeSeparator),
    };
  }

  return {
    scope,
  };
}

module.exports = class GrantTypeParams {
  #params = null;
  #baseParams = null;
  #options = null;

  static forGrantType(grantType, options, params) {
    const baseParams = {
      grant_type: grantType,
    };

    return new GrantTypeParams(options, baseParams, params);
  }

  constructor(options, baseParams, params) {
    this.#options = { ...options };
    this.#params = { ...params };
    this.#baseParams = { ...baseParams };
  }

  toObject() {
    const scopeParams = getScopeParam(this.#params.scope, this.#options.scopeSeparator);

    return Object.assign(this.#baseParams, this.#params, scopeParams);
  }
};
