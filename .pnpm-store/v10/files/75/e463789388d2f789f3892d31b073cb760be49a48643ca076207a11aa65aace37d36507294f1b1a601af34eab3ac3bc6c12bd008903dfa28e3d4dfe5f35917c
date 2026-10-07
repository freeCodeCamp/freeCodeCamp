/**
Matches a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

@category Class
*/
export type Class<T, Arguments extends unknown[] = any[]> = {
	prototype: Pick<T, keyof T>;
	new(...arguments_: Arguments): T;
};

/**
Matches a [`class` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

@category Class
*/
export type Constructor<T, Arguments extends unknown[] = any[]> = new(...arguments_: Arguments) => T;

/**
Matches an [`abstract class`](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members).

@category Class

@privateRemarks
We cannot use a `type` here because TypeScript throws: 'abstract' modifier cannot appear on a type member. (1070)
*/
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface AbstractClass<T, Arguments extends unknown[] = any[]> extends AbstractConstructor<T, Arguments> {
	prototype: Pick<T, keyof T>;
}

/**
Matches an [`abstract class`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html#abstract-construct-signatures) constructor.

@category Class
*/
export type AbstractConstructor<T, Arguments extends unknown[] = any[]> = abstract new(...arguments_: Arguments) => T;

export {};
