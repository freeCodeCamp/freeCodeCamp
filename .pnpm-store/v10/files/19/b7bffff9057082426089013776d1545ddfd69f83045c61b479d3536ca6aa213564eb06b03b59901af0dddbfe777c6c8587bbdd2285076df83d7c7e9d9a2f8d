/**
Recursively split a string literal into two parts on the first occurence of the given string, returning an array literal of all the separate parts.
*/
export type Split<S extends string, D extends string> =
	string extends S ? string[] :
	S extends '' ? [] :
	S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] :
	[S];
