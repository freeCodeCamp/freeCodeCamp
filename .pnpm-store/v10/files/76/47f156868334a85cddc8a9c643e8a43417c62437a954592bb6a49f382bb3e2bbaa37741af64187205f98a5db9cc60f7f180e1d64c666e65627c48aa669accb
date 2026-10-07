// @flow
import type {
  FilePath,
  Target as ITarget,
  Environment as IEnvironment,
  SourceLocation,
} from '@parcel/types';
import type {Target as TargetValue, ParcelOptions} from '../types';

import nullthrows from 'nullthrows';
import Environment from './Environment';
import {fromProjectPath} from '../projectPath';
import {fromInternalSourceLocation} from '../utils';

const inspect = Symbol.for('nodejs.util.inspect.custom');

const internalTargetToTarget: WeakMap<TargetValue, Target> = new WeakMap();
const _targetToInternalTarget: WeakMap<ITarget, TargetValue> = new WeakMap();
export function targetToInternalTarget(target: ITarget): TargetValue {
  return nullthrows(_targetToInternalTarget.get(target));
}

export default class Target implements ITarget {
  #target /*: TargetValue */;
  #options /*: ParcelOptions */;

  constructor(target: TargetValue, options: ParcelOptions): Target {
    let existing = internalTargetToTarget.get(target);
    if (existing != null) {
      return existing;
    }

    this.#target = target;
    this.#options = options;
    _targetToInternalTarget.set(this, target);
    internalTargetToTarget.set(target, this);
    return this;
  }

  get distEntry(): ?FilePath {
    return this.#target.distEntry;
  }

  get distDir(): FilePath {
    return fromProjectPath(this.#options.projectRoot, this.#target.distDir);
  }

  get env(): IEnvironment {
    return new Environment(this.#target.env, this.#options);
  }

  get name(): string {
    return this.#target.name;
  }

  get publicUrl(): string {
    return this.#target.publicUrl;
  }

  get loc(): ?SourceLocation {
    return fromInternalSourceLocation(
      this.#options.projectRoot,
      this.#target.loc,
    );
  }

  // $FlowFixMe[unsupported-syntax]
  [inspect](): string {
    return `Target(${this.name} - ${this.env[inspect]()})`;
  }
}
