// @flow strict-local

import type {
  Transformer as TransformerOpts,
  Resolver as ResolverOpts,
  Bundler as BundlerOpts,
  Namer as NamerOpts,
  Runtime as RuntimeOpts,
  Packager as PackagerOpts,
  Optimizer as OptimizerOpts,
  Compressor as CompressorOpts,
  Reporter as ReporterOpts,
  Validator as ValidatorOpts,
} from '@parcel/types';

const CONFIG = Symbol.for('parcel-plugin-config');

export class Transformer {
  constructor<T>(opts: TransformerOpts<T>) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Resolver {
  constructor(opts: ResolverOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Bundler {
  constructor<T>(opts: BundlerOpts<T>) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Namer {
  constructor<T>(opts: NamerOpts<T>) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Runtime {
  constructor<T>(opts: RuntimeOpts<T>) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Validator {
  constructor(opts: ValidatorOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Packager {
  constructor<T, U>(opts: PackagerOpts<T, U>) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Optimizer {
  constructor<T, U>(opts: OptimizerOpts<T, U>) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Compressor {
  constructor(opts: CompressorOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}

export class Reporter {
  constructor(opts: ReporterOpts) {
    // $FlowFixMe
    this[CONFIG] = opts;
  }
}
