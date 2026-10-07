export type Position = {
	line: number;
	column: number;
	pos: number;
};

export type Mapping =
	| {
			value: Position;
			valueEnd: Position;
	  }
	| {
			value: Position;
			valueEnd: Position;
			key?: Position;
			keyEnd?: Position;
	  };

export function parse(
	json: string,
	reviver?: (key: any, value: any) => any,
	options?: {
		tabWidth?: number;
		dialect?: "JSON5" | "JSON";
	}
): {
	data: any;
	pointers: Record<string, Mapping>;
};
