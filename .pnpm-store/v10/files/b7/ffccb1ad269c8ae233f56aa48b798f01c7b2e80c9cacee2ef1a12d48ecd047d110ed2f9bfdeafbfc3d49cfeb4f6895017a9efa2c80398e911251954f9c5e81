function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

const testSymbol = Symbol("test");

export class Mocker {
  pick = (...args: any[]): any => {
    return args[getRandomInt(args.length)];
  };

  get string(): string {
    return Math.random().toString(36).substring(7);
  }
  get number(): number {
    return Math.random() * 100;
  }
  get bigint(): bigint {
    return BigInt(Math.floor(Math.random() * 10000));
  }
  get boolean(): boolean {
    return Math.random() < 0.5;
  }
  get date(): Date {
    return new Date(Math.floor(Date.now() * Math.random()));
  }
  get symbol(): symbol {
    return testSymbol;
  }
  get null(): null {
    return null;
  }
  get undefined(): undefined {
    return undefined;
  }
  get stringOptional(): string | undefined {
    return this.pick(this.string, this.undefined);
  }
  get stringNullable(): string | null {
    return this.pick(this.string, this.null);
  }
  get numberOptional(): number | undefined {
    return this.pick(this.number, this.undefined);
  }
  get numberNullable(): number | null {
    return this.pick(this.number, this.null);
  }
  get booleanOptional(): boolean | undefined {
    return this.pick(this.boolean, this.undefined);
  }
  get booleanNullable(): boolean | null {
    return this.pick(this.boolean, this.null);
  }
}
