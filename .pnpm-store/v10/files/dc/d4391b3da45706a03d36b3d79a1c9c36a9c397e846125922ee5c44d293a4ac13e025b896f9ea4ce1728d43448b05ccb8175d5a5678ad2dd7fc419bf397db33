// @flow
import type {
  ScopeHoistingPackager,
  OutputFormat,
} from './ScopeHoistingPackager';

export class GlobalOutputFormat implements OutputFormat {
  packager: ScopeHoistingPackager;

  constructor(packager: ScopeHoistingPackager) {
    this.packager = packager;
  }

  buildBundlePrelude(): [string, number] {
    let prelude = this.packager.bundle.env.supports('arrow-functions', true)
      ? '(() => {\n'
      : '(function () {\n';
    return [prelude, 1];
  }

  buildBundlePostlude(): [string, number] {
    return ['})();', 0];
  }
}
