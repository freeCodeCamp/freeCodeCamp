import MagicString from 'magic-string';

interface AutomockOptions {
	/**
	* @default "__vitest_mocker__"
	*/
	globalThisAccessor?: string;
	id?: string;
}
declare function automockModule(code: string, mockType: "automock" | "autospy", parse: (code: string) => any, options?: AutomockOptions): MagicString;

export { automockModule };
export type { AutomockOptions };
