/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Virtual Key Codes, the value does not hold any inherent meaning.
 * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
 * But these are "more general", as they should work across browsers & OS`s.
 */
export const enum KeyCode {
	DependsOnKbLayout = -1,

	/**
	 * Placed first to cover the 0 value of the enum.
	 */
	Unknown = 0,

	Backspace,
	Tab,
	Enter,
	Shift,
	Ctrl,
	Alt,
	PauseBreak,
	CapsLock,
	Escape,
	Space,
	PageUp,
	PageDown,
	End,
	Home,
	LeftArrow,
	UpArrow,
	RightArrow,
	DownArrow,
	Insert,
	Delete,

	Digit0,
	Digit1,
	Digit2,
	Digit3,
	Digit4,
	Digit5,
	Digit6,
	Digit7,
	Digit8,
	Digit9,

	KeyA,
	KeyB,
	KeyC,
	KeyD,
	KeyE,
	KeyF,
	KeyG,
	KeyH,
	KeyI,
	KeyJ,
	KeyK,
	KeyL,
	KeyM,
	KeyN,
	KeyO,
	KeyP,
	KeyQ,
	KeyR,
	KeyS,
	KeyT,
	KeyU,
	KeyV,
	KeyW,
	KeyX,
	KeyY,
	KeyZ,

	Meta,
	ContextMenu,

	F1,
	F2,
	F3,
	F4,
	F5,
	F6,
	F7,
	F8,
	F9,
	F10,
	F11,
	F12,
	F13,
	F14,
	F15,
	F16,
	F17,
	F18,
	F19,
	F20,
	F21,
	F22,
	F23,
	F24,

	NumLock,
	ScrollLock,

	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the ';:' key
	 */
	Semicolon,
	/**
	 * For any country/region, the '+' key
	 * For the US standard keyboard, the '=+' key
	 */
	Equal,
	/**
	 * For any country/region, the ',' key
	 * For the US standard keyboard, the ',<' key
	 */
	Comma,
	/**
	 * For any country/region, the '-' key
	 * For the US standard keyboard, the '-_' key
	 */
	Minus,
	/**
	 * For any country/region, the '.' key
	 * For the US standard keyboard, the '.>' key
	 */
	Period,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '/?' key
	 */
	Slash,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '`~' key
	 */
	Backquote,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '[{' key
	 */
	BracketLeft,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '\|' key
	 */
	Backslash,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the ']}' key
	 */
	BracketRight,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the ''"' key
	 */
	Quote,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 */
	OEM_8,
	/**
	 * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
	 */
	IntlBackslash,

	Numpad0, // VK_NUMPAD0, 0x60, Numeric keypad 0 key
	Numpad1, // VK_NUMPAD1, 0x61, Numeric keypad 1 key
	Numpad2, // VK_NUMPAD2, 0x62, Numeric keypad 2 key
	Numpad3, // VK_NUMPAD3, 0x63, Numeric keypad 3 key
	Numpad4, // VK_NUMPAD4, 0x64, Numeric keypad 4 key
	Numpad5, // VK_NUMPAD5, 0x65, Numeric keypad 5 key
	Numpad6, // VK_NUMPAD6, 0x66, Numeric keypad 6 key
	Numpad7, // VK_NUMPAD7, 0x67, Numeric keypad 7 key
	Numpad8, // VK_NUMPAD8, 0x68, Numeric keypad 8 key
	Numpad9, // VK_NUMPAD9, 0x69, Numeric keypad 9 key

	NumpadMultiply,	// VK_MULTIPLY, 0x6A, Multiply key
	NumpadAdd,		// VK_ADD, 0x6B, Add key
	NUMPAD_SEPARATOR,	// VK_SEPARATOR, 0x6C, Separator key
	NumpadSubtract,	// VK_SUBTRACT, 0x6D, Subtract key
	NumpadDecimal,	// VK_DECIMAL, 0x6E, Decimal key
	NumpadDivide,	// VK_DIVIDE, 0x6F,

	/**
	 * Cover all key codes when IME is processing input.
	 */
	KEY_IN_COMPOSITION,

	ABNT_C1, // Brazilian (ABNT) Keyboard
	ABNT_C2, // Brazilian (ABNT) Keyboard

	AudioVolumeMute,
	AudioVolumeUp,
	AudioVolumeDown,

	BrowserSearch,
	BrowserHome,
	BrowserBack,
	BrowserForward,

	MediaTrackNext,
	MediaTrackPrevious,
	MediaStop,
	MediaPlayPause,
	LaunchMediaPlayer,
	LaunchMail,
	LaunchApp2,

	/**
	 * VK_CLEAR, 0x0C, CLEAR key
	 */
	Clear,

	/**
	 * Placed last to cover the length of the enum.
	 * Please do not depend on this value!
	 */
	MAX_VALUE
}

/**
 * keyboardEvent.code
 */
export const enum ScanCode {
	DependsOnKbLayout = -1,
	None,
	Hyper,
	Super,
	Fn,
	FnLock,
	Suspend,
	Resume,
	Turbo,
	Sleep,
	WakeUp,
	KeyA,
	KeyB,
	KeyC,
	KeyD,
	KeyE,
	KeyF,
	KeyG,
	KeyH,
	KeyI,
	KeyJ,
	KeyK,
	KeyL,
	KeyM,
	KeyN,
	KeyO,
	KeyP,
	KeyQ,
	KeyR,
	KeyS,
	KeyT,
	KeyU,
	KeyV,
	KeyW,
	KeyX,
	KeyY,
	KeyZ,
	Digit1,
	Digit2,
	Digit3,
	Digit4,
	Digit5,
	Digit6,
	Digit7,
	Digit8,
	Digit9,
	Digit0,
	Enter,
	Escape,
	Backspace,
	Tab,
	Space,
	Minus,
	Equal,
	BracketLeft,
	BracketRight,
	Backslash,
	IntlHash,
	Semicolon,
	Quote,
	Backquote,
	Comma,
	Period,
	Slash,
	CapsLock,
	F1,
	F2,
	F3,
	F4,
	F5,
	F6,
	F7,
	F8,
	F9,
	F10,
	F11,
	F12,
	PrintScreen,
	ScrollLock,
	Pause,
	Insert,
	Home,
	PageUp,
	Delete,
	End,
	PageDown,
	ArrowRight,
	ArrowLeft,
	ArrowDown,
	ArrowUp,
	NumLock,
	NumpadDivide,
	NumpadMultiply,
	NumpadSubtract,
	NumpadAdd,
	NumpadEnter,
	Numpad1,
	Numpad2,
	Numpad3,
	Numpad4,
	Numpad5,
	Numpad6,
	Numpad7,
	Numpad8,
	Numpad9,
	Numpad0,
	NumpadDecimal,
	IntlBackslash,
	ContextMenu,
	Power,
	NumpadEqual,
	F13,
	F14,
	F15,
	F16,
	F17,
	F18,
	F19,
	F20,
	F21,
	F22,
	F23,
	F24,
	Open,
	Help,
	Select,
	Again,
	Undo,
	Cut,
	Copy,
	Paste,
	Find,
	AudioVolumeMute,
	AudioVolumeUp,
	AudioVolumeDown,
	NumpadComma,
	IntlRo,
	KanaMode,
	IntlYen,
	Convert,
	NonConvert,
	Lang1,
	Lang2,
	Lang3,
	Lang4,
	Lang5,
	Abort,
	Props,
	NumpadParenLeft,
	NumpadParenRight,
	NumpadBackspace,
	NumpadMemoryStore,
	NumpadMemoryRecall,
	NumpadMemoryClear,
	NumpadMemoryAdd,
	NumpadMemorySubtract,
	NumpadClear,
	NumpadClearEntry,
	ControlLeft,
	ShiftLeft,
	AltLeft,
	MetaLeft,
	ControlRight,
	ShiftRight,
	AltRight,
	MetaRight,
	BrightnessUp,
	BrightnessDown,
	MediaPlay,
	MediaRecord,
	MediaFastForward,
	MediaRewind,
	MediaTrackNext,
	MediaTrackPrevious,
	MediaStop,
	Eject,
	MediaPlayPause,
	MediaSelect,
	LaunchMail,
	LaunchApp2,
	LaunchApp1,
	SelectTask,
	LaunchScreenSaver,
	BrowserSearch,
	BrowserHome,
	BrowserBack,
	BrowserForward,
	BrowserStop,
	BrowserRefresh,
	BrowserFavorites,
	ZoomToggle,
	MailReply,
	MailForward,
	MailSend,

	MAX_VALUE
}

class KeyCodeStrMap {

	public _keyCodeToStr: string[];
	public _strToKeyCode: { [str: string]: KeyCode };

	constructor() {
		this._keyCodeToStr = [];
		this._strToKeyCode = Object.create(null);
	}

	define(keyCode: KeyCode, str: string): void {
		this._keyCodeToStr[keyCode] = str;
		this._strToKeyCode[str.toLowerCase()] = keyCode;
	}

	keyCodeToStr(keyCode: KeyCode): string {
		return this._keyCodeToStr[keyCode];
	}

	strToKeyCode(str: string): KeyCode {
		return this._strToKeyCode[str.toLowerCase()] || KeyCode.Unknown;
	}
}

const uiMap = new KeyCodeStrMap();
const userSettingsUSMap = new KeyCodeStrMap();
const userSettingsGeneralMap = new KeyCodeStrMap();
export const EVENT_KEY_CODE_MAP: { [keyCode: number]: KeyCode } = new Array(230);
export const NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE: { [nativeKeyCode: string]: KeyCode } = {};
const scanCodeIntToStr: string[] = [];
const scanCodeStrToInt: { [code: string]: number } = Object.create(null);
const scanCodeLowerCaseStrToInt: { [code: string]: number } = Object.create(null);

export const ScanCodeUtils = {
	lowerCaseToEnum: (scanCode: string) => scanCodeLowerCaseStrToInt[scanCode] || ScanCode.None,
	toEnum: (scanCode: string) => scanCodeStrToInt[scanCode] || ScanCode.None,
	toString: (scanCode: ScanCode) => scanCodeIntToStr[scanCode] || 'None'
};


export namespace KeyCodeUtils {
	export function toString(keyCode: KeyCode): string {
		return uiMap.keyCodeToStr(keyCode);
	}
	export function fromString(key: string): KeyCode {
		return uiMap.strToKeyCode(key);
	}

	export function toUserSettingsUS(keyCode: KeyCode): string {
		return userSettingsUSMap.keyCodeToStr(keyCode);
	}
	export function toUserSettingsGeneral(keyCode: KeyCode): string {
		return userSettingsGeneralMap.keyCodeToStr(keyCode);
	}
	export function fromUserSettings(key: string): KeyCode {
		return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
	}

	export function toElectronAccelerator(keyCode: KeyCode): string | null {
		if (keyCode >= KeyCode.Numpad0 && keyCode <= KeyCode.NumpadDivide) {
			// [Electron Accelerators] Electron is able to parse numpad keys, but unfortunately it
			// renders them just as regular keys in menus. For example, num0 is rendered as "0",
			// numdiv is rendered as "/", numsub is rendered as "-".
			//
			// This can lead to incredible confusion, as it makes numpad based keybindings indistinguishable
			// from keybindings based on regular keys.
			//
			// We therefore need to fall back to custom rendering for numpad keys.
			return null;
		}

		switch (keyCode) {
			case KeyCode.UpArrow:
				return 'Up';
			case KeyCode.DownArrow:
				return 'Down';
			case KeyCode.LeftArrow:
				return 'Left';
			case KeyCode.RightArrow:
				return 'Right';
		}

		return uiMap.keyCodeToStr(keyCode);
	}
}

export const enum KeyMod {
	CtrlCmd = (1 << 11) >>> 0,
	Shift = (1 << 10) >>> 0,
	Alt = (1 << 9) >>> 0,
	WinCtrl = (1 << 8) >>> 0,
}

export function KeyChord(firstPart: number, secondPart: number): number {
	const chordPart = ((secondPart & 0x0000FFFF) << 16) >>> 0;
	return (firstPart | chordPart) >>> 0;
}
