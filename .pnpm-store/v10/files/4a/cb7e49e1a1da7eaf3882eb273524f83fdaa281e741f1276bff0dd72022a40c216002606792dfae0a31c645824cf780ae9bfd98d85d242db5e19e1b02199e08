import { getGlobalSingleton } from './carrier.js';
import { Scope } from './scope.js';

function getDefaultCurrentScope() {
  return getGlobalSingleton("defaultCurrentScope", () => new Scope());
}
function getDefaultIsolationScope() {
  return getGlobalSingleton("defaultIsolationScope", () => new Scope());
}

export { getDefaultCurrentScope, getDefaultIsolationScope };
//# sourceMappingURL=defaultScopes.js.map
