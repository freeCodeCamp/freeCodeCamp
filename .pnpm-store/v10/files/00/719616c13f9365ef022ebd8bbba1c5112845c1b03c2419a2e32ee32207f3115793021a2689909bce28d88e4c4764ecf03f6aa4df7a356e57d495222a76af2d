type Unscopableable = string & {
    [K in keyof typeof Array.prototype]:
      typeof Array.prototype[K] extends Function ? K : never
  }[keyof typeof Array.prototype];

declare function shimUnscopables(method: Unscopableable): void;

export = shimUnscopables;