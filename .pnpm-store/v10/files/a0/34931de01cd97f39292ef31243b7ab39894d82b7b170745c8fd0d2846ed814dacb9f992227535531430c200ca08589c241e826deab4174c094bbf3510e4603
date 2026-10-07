declare namespace SLOT {
	type InternalSlot = string; // `[[${string}]]`; // TODO: restrict this to require the brackets
}

declare const SLOT: {
	assert(O: object, slot: SLOT.InternalSlot): void;
	get(O: object, slot: SLOT.InternalSlot): unknown;
	set(O: object, slot: SLOT.InternalSlot, value?: unknown): void;
	has(O: object, slot: SLOT.InternalSlot): boolean;
}

export = SLOT;
