import type compat from './compat'
import type getModulesListForTargetVersion from './get-modules-list-for-target-version';
import type { ModuleName, Target, TargetVersion } from './shared'

type CompatData = {
  [module: ModuleName]: {
    [target in Target]?: TargetVersion
  }
};

declare const ExportedCompatObject: typeof compat & {
  compat: typeof compat,

  /** The subset of modules which available in the passed `core-js` version */
  getModulesListForTargetVersion: typeof getModulesListForTargetVersion,

  /** Full list compatibility data */
  data: CompatData,

  /** map of modules by `core-js` entry points */
  entries: {[entry_point: string]: readonly ModuleName[]},

  /** Full list of modules */
  modules: readonly ModuleName[]
}

export = ExportedCompatObject
