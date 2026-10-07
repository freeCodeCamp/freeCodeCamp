export interface HookOptions {
  internals?: boolean;
}

export type OnRequireFn = <T>(exports: T, name: string, basedir?: string) => T;

export class Hook {
  constructor(modules: string[] | null, options: HookOptions | null, onrequire: OnRequireFn);
  constructor(modules: string[] | null, onrequire: OnRequireFn);
  constructor(onrequire: OnRequireFn);
  unhook(): void;
}
