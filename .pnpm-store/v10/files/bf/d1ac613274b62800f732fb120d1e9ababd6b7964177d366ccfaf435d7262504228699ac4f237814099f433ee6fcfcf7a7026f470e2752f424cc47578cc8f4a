/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class KeyCodeStrMap {
    constructor() {
        this._keyCodeToStr = [];
        this._strToKeyCode = Object.create(null);
    }
    define(keyCode, str) {
        this._keyCodeToStr[keyCode] = str;
        this._strToKeyCode[str.toLowerCase()] = keyCode;
    }
    keyCodeToStr(keyCode) {
        return this._keyCodeToStr[keyCode];
    }
    strToKeyCode(str) {
        return this._strToKeyCode[str.toLowerCase()] || 0 /* KeyCode.Unknown */;
    }
}
const uiMap = new KeyCodeStrMap();
const userSettingsUSMap = new KeyCodeStrMap();
const userSettingsGeneralMap = new KeyCodeStrMap();
const EVENT_KEY_CODE_MAP = new Array(230);
const scanCodeStrToInt = Object.create(null);
const scanCodeLowerCaseStrToInt = Object.create(null);
/**
 * -1 if a ScanCode => KeyCode mapping depends on kb layout.
 */
const IMMUTABLE_CODE_TO_KEY_CODE = [];
for (let i = 0; i <= 193 /* ScanCode.MAX_VALUE */; i++) {
    IMMUTABLE_CODE_TO_KEY_CODE[i] = -1 /* KeyCode.DependsOnKbLayout */;
}
(function () {
    // See https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
    // See https://github.com/microsoft/node-native-keymap/blob/88c0b0e5/deps/chromium/keyboard_codes_win.h
    const empty = '';
    const mappings = [
        // immutable, scanCode, scanCodeStr, keyCode, keyCodeStr, eventKeyCode, vkey, usUserSettingsLabel, generalUserSettingsLabel
        [1, 0 /* ScanCode.None */, 'None', 0 /* KeyCode.Unknown */, 'unknown', 0, 'VK_UNKNOWN', empty, empty],
        [1, 1 /* ScanCode.Hyper */, 'Hyper', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 2 /* ScanCode.Super */, 'Super', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 3 /* ScanCode.Fn */, 'Fn', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 4 /* ScanCode.FnLock */, 'FnLock', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 5 /* ScanCode.Suspend */, 'Suspend', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 6 /* ScanCode.Resume */, 'Resume', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 7 /* ScanCode.Turbo */, 'Turbo', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 8 /* ScanCode.Sleep */, 'Sleep', 0 /* KeyCode.Unknown */, empty, 0, 'VK_SLEEP', empty, empty],
        [1, 9 /* ScanCode.WakeUp */, 'WakeUp', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [0, 10 /* ScanCode.KeyA */, 'KeyA', 31 /* KeyCode.KeyA */, 'A', 65, 'VK_A', empty, empty],
        [0, 11 /* ScanCode.KeyB */, 'KeyB', 32 /* KeyCode.KeyB */, 'B', 66, 'VK_B', empty, empty],
        [0, 12 /* ScanCode.KeyC */, 'KeyC', 33 /* KeyCode.KeyC */, 'C', 67, 'VK_C', empty, empty],
        [0, 13 /* ScanCode.KeyD */, 'KeyD', 34 /* KeyCode.KeyD */, 'D', 68, 'VK_D', empty, empty],
        [0, 14 /* ScanCode.KeyE */, 'KeyE', 35 /* KeyCode.KeyE */, 'E', 69, 'VK_E', empty, empty],
        [0, 15 /* ScanCode.KeyF */, 'KeyF', 36 /* KeyCode.KeyF */, 'F', 70, 'VK_F', empty, empty],
        [0, 16 /* ScanCode.KeyG */, 'KeyG', 37 /* KeyCode.KeyG */, 'G', 71, 'VK_G', empty, empty],
        [0, 17 /* ScanCode.KeyH */, 'KeyH', 38 /* KeyCode.KeyH */, 'H', 72, 'VK_H', empty, empty],
        [0, 18 /* ScanCode.KeyI */, 'KeyI', 39 /* KeyCode.KeyI */, 'I', 73, 'VK_I', empty, empty],
        [0, 19 /* ScanCode.KeyJ */, 'KeyJ', 40 /* KeyCode.KeyJ */, 'J', 74, 'VK_J', empty, empty],
        [0, 20 /* ScanCode.KeyK */, 'KeyK', 41 /* KeyCode.KeyK */, 'K', 75, 'VK_K', empty, empty],
        [0, 21 /* ScanCode.KeyL */, 'KeyL', 42 /* KeyCode.KeyL */, 'L', 76, 'VK_L', empty, empty],
        [0, 22 /* ScanCode.KeyM */, 'KeyM', 43 /* KeyCode.KeyM */, 'M', 77, 'VK_M', empty, empty],
        [0, 23 /* ScanCode.KeyN */, 'KeyN', 44 /* KeyCode.KeyN */, 'N', 78, 'VK_N', empty, empty],
        [0, 24 /* ScanCode.KeyO */, 'KeyO', 45 /* KeyCode.KeyO */, 'O', 79, 'VK_O', empty, empty],
        [0, 25 /* ScanCode.KeyP */, 'KeyP', 46 /* KeyCode.KeyP */, 'P', 80, 'VK_P', empty, empty],
        [0, 26 /* ScanCode.KeyQ */, 'KeyQ', 47 /* KeyCode.KeyQ */, 'Q', 81, 'VK_Q', empty, empty],
        [0, 27 /* ScanCode.KeyR */, 'KeyR', 48 /* KeyCode.KeyR */, 'R', 82, 'VK_R', empty, empty],
        [0, 28 /* ScanCode.KeyS */, 'KeyS', 49 /* KeyCode.KeyS */, 'S', 83, 'VK_S', empty, empty],
        [0, 29 /* ScanCode.KeyT */, 'KeyT', 50 /* KeyCode.KeyT */, 'T', 84, 'VK_T', empty, empty],
        [0, 30 /* ScanCode.KeyU */, 'KeyU', 51 /* KeyCode.KeyU */, 'U', 85, 'VK_U', empty, empty],
        [0, 31 /* ScanCode.KeyV */, 'KeyV', 52 /* KeyCode.KeyV */, 'V', 86, 'VK_V', empty, empty],
        [0, 32 /* ScanCode.KeyW */, 'KeyW', 53 /* KeyCode.KeyW */, 'W', 87, 'VK_W', empty, empty],
        [0, 33 /* ScanCode.KeyX */, 'KeyX', 54 /* KeyCode.KeyX */, 'X', 88, 'VK_X', empty, empty],
        [0, 34 /* ScanCode.KeyY */, 'KeyY', 55 /* KeyCode.KeyY */, 'Y', 89, 'VK_Y', empty, empty],
        [0, 35 /* ScanCode.KeyZ */, 'KeyZ', 56 /* KeyCode.KeyZ */, 'Z', 90, 'VK_Z', empty, empty],
        [0, 36 /* ScanCode.Digit1 */, 'Digit1', 22 /* KeyCode.Digit1 */, '1', 49, 'VK_1', empty, empty],
        [0, 37 /* ScanCode.Digit2 */, 'Digit2', 23 /* KeyCode.Digit2 */, '2', 50, 'VK_2', empty, empty],
        [0, 38 /* ScanCode.Digit3 */, 'Digit3', 24 /* KeyCode.Digit3 */, '3', 51, 'VK_3', empty, empty],
        [0, 39 /* ScanCode.Digit4 */, 'Digit4', 25 /* KeyCode.Digit4 */, '4', 52, 'VK_4', empty, empty],
        [0, 40 /* ScanCode.Digit5 */, 'Digit5', 26 /* KeyCode.Digit5 */, '5', 53, 'VK_5', empty, empty],
        [0, 41 /* ScanCode.Digit6 */, 'Digit6', 27 /* KeyCode.Digit6 */, '6', 54, 'VK_6', empty, empty],
        [0, 42 /* ScanCode.Digit7 */, 'Digit7', 28 /* KeyCode.Digit7 */, '7', 55, 'VK_7', empty, empty],
        [0, 43 /* ScanCode.Digit8 */, 'Digit8', 29 /* KeyCode.Digit8 */, '8', 56, 'VK_8', empty, empty],
        [0, 44 /* ScanCode.Digit9 */, 'Digit9', 30 /* KeyCode.Digit9 */, '9', 57, 'VK_9', empty, empty],
        [0, 45 /* ScanCode.Digit0 */, 'Digit0', 21 /* KeyCode.Digit0 */, '0', 48, 'VK_0', empty, empty],
        [1, 46 /* ScanCode.Enter */, 'Enter', 3 /* KeyCode.Enter */, 'Enter', 13, 'VK_RETURN', empty, empty],
        [1, 47 /* ScanCode.Escape */, 'Escape', 9 /* KeyCode.Escape */, 'Escape', 27, 'VK_ESCAPE', empty, empty],
        [1, 48 /* ScanCode.Backspace */, 'Backspace', 1 /* KeyCode.Backspace */, 'Backspace', 8, 'VK_BACK', empty, empty],
        [1, 49 /* ScanCode.Tab */, 'Tab', 2 /* KeyCode.Tab */, 'Tab', 9, 'VK_TAB', empty, empty],
        [1, 50 /* ScanCode.Space */, 'Space', 10 /* KeyCode.Space */, 'Space', 32, 'VK_SPACE', empty, empty],
        [0, 51 /* ScanCode.Minus */, 'Minus', 88 /* KeyCode.Minus */, '-', 189, 'VK_OEM_MINUS', '-', 'OEM_MINUS'],
        [0, 52 /* ScanCode.Equal */, 'Equal', 86 /* KeyCode.Equal */, '=', 187, 'VK_OEM_PLUS', '=', 'OEM_PLUS'],
        [0, 53 /* ScanCode.BracketLeft */, 'BracketLeft', 92 /* KeyCode.BracketLeft */, '[', 219, 'VK_OEM_4', '[', 'OEM_4'],
        [0, 54 /* ScanCode.BracketRight */, 'BracketRight', 94 /* KeyCode.BracketRight */, ']', 221, 'VK_OEM_6', ']', 'OEM_6'],
        [0, 55 /* ScanCode.Backslash */, 'Backslash', 93 /* KeyCode.Backslash */, '\\', 220, 'VK_OEM_5', '\\', 'OEM_5'],
        [0, 56 /* ScanCode.IntlHash */, 'IntlHash', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty], // has been dropped from the w3c spec
        [0, 57 /* ScanCode.Semicolon */, 'Semicolon', 85 /* KeyCode.Semicolon */, ';', 186, 'VK_OEM_1', ';', 'OEM_1'],
        [0, 58 /* ScanCode.Quote */, 'Quote', 95 /* KeyCode.Quote */, '\'', 222, 'VK_OEM_7', '\'', 'OEM_7'],
        [0, 59 /* ScanCode.Backquote */, 'Backquote', 91 /* KeyCode.Backquote */, '`', 192, 'VK_OEM_3', '`', 'OEM_3'],
        [0, 60 /* ScanCode.Comma */, 'Comma', 87 /* KeyCode.Comma */, ',', 188, 'VK_OEM_COMMA', ',', 'OEM_COMMA'],
        [0, 61 /* ScanCode.Period */, 'Period', 89 /* KeyCode.Period */, '.', 190, 'VK_OEM_PERIOD', '.', 'OEM_PERIOD'],
        [0, 62 /* ScanCode.Slash */, 'Slash', 90 /* KeyCode.Slash */, '/', 191, 'VK_OEM_2', '/', 'OEM_2'],
        [1, 63 /* ScanCode.CapsLock */, 'CapsLock', 8 /* KeyCode.CapsLock */, 'CapsLock', 20, 'VK_CAPITAL', empty, empty],
        [1, 64 /* ScanCode.F1 */, 'F1', 59 /* KeyCode.F1 */, 'F1', 112, 'VK_F1', empty, empty],
        [1, 65 /* ScanCode.F2 */, 'F2', 60 /* KeyCode.F2 */, 'F2', 113, 'VK_F2', empty, empty],
        [1, 66 /* ScanCode.F3 */, 'F3', 61 /* KeyCode.F3 */, 'F3', 114, 'VK_F3', empty, empty],
        [1, 67 /* ScanCode.F4 */, 'F4', 62 /* KeyCode.F4 */, 'F4', 115, 'VK_F4', empty, empty],
        [1, 68 /* ScanCode.F5 */, 'F5', 63 /* KeyCode.F5 */, 'F5', 116, 'VK_F5', empty, empty],
        [1, 69 /* ScanCode.F6 */, 'F6', 64 /* KeyCode.F6 */, 'F6', 117, 'VK_F6', empty, empty],
        [1, 70 /* ScanCode.F7 */, 'F7', 65 /* KeyCode.F7 */, 'F7', 118, 'VK_F7', empty, empty],
        [1, 71 /* ScanCode.F8 */, 'F8', 66 /* KeyCode.F8 */, 'F8', 119, 'VK_F8', empty, empty],
        [1, 72 /* ScanCode.F9 */, 'F9', 67 /* KeyCode.F9 */, 'F9', 120, 'VK_F9', empty, empty],
        [1, 73 /* ScanCode.F10 */, 'F10', 68 /* KeyCode.F10 */, 'F10', 121, 'VK_F10', empty, empty],
        [1, 74 /* ScanCode.F11 */, 'F11', 69 /* KeyCode.F11 */, 'F11', 122, 'VK_F11', empty, empty],
        [1, 75 /* ScanCode.F12 */, 'F12', 70 /* KeyCode.F12 */, 'F12', 123, 'VK_F12', empty, empty],
        [1, 76 /* ScanCode.PrintScreen */, 'PrintScreen', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 77 /* ScanCode.ScrollLock */, 'ScrollLock', 84 /* KeyCode.ScrollLock */, 'ScrollLock', 145, 'VK_SCROLL', empty, empty],
        [1, 78 /* ScanCode.Pause */, 'Pause', 7 /* KeyCode.PauseBreak */, 'PauseBreak', 19, 'VK_PAUSE', empty, empty],
        [1, 79 /* ScanCode.Insert */, 'Insert', 19 /* KeyCode.Insert */, 'Insert', 45, 'VK_INSERT', empty, empty],
        [1, 80 /* ScanCode.Home */, 'Home', 14 /* KeyCode.Home */, 'Home', 36, 'VK_HOME', empty, empty],
        [1, 81 /* ScanCode.PageUp */, 'PageUp', 11 /* KeyCode.PageUp */, 'PageUp', 33, 'VK_PRIOR', empty, empty],
        [1, 82 /* ScanCode.Delete */, 'Delete', 20 /* KeyCode.Delete */, 'Delete', 46, 'VK_DELETE', empty, empty],
        [1, 83 /* ScanCode.End */, 'End', 13 /* KeyCode.End */, 'End', 35, 'VK_END', empty, empty],
        [1, 84 /* ScanCode.PageDown */, 'PageDown', 12 /* KeyCode.PageDown */, 'PageDown', 34, 'VK_NEXT', empty, empty],
        [1, 85 /* ScanCode.ArrowRight */, 'ArrowRight', 17 /* KeyCode.RightArrow */, 'RightArrow', 39, 'VK_RIGHT', 'Right', empty],
        [1, 86 /* ScanCode.ArrowLeft */, 'ArrowLeft', 15 /* KeyCode.LeftArrow */, 'LeftArrow', 37, 'VK_LEFT', 'Left', empty],
        [1, 87 /* ScanCode.ArrowDown */, 'ArrowDown', 18 /* KeyCode.DownArrow */, 'DownArrow', 40, 'VK_DOWN', 'Down', empty],
        [1, 88 /* ScanCode.ArrowUp */, 'ArrowUp', 16 /* KeyCode.UpArrow */, 'UpArrow', 38, 'VK_UP', 'Up', empty],
        [1, 89 /* ScanCode.NumLock */, 'NumLock', 83 /* KeyCode.NumLock */, 'NumLock', 144, 'VK_NUMLOCK', empty, empty],
        [1, 90 /* ScanCode.NumpadDivide */, 'NumpadDivide', 113 /* KeyCode.NumpadDivide */, 'NumPad_Divide', 111, 'VK_DIVIDE', empty, empty],
        [1, 91 /* ScanCode.NumpadMultiply */, 'NumpadMultiply', 108 /* KeyCode.NumpadMultiply */, 'NumPad_Multiply', 106, 'VK_MULTIPLY', empty, empty],
        [1, 92 /* ScanCode.NumpadSubtract */, 'NumpadSubtract', 111 /* KeyCode.NumpadSubtract */, 'NumPad_Subtract', 109, 'VK_SUBTRACT', empty, empty],
        [1, 93 /* ScanCode.NumpadAdd */, 'NumpadAdd', 109 /* KeyCode.NumpadAdd */, 'NumPad_Add', 107, 'VK_ADD', empty, empty],
        [1, 94 /* ScanCode.NumpadEnter */, 'NumpadEnter', 3 /* KeyCode.Enter */, empty, 0, empty, empty, empty],
        [1, 95 /* ScanCode.Numpad1 */, 'Numpad1', 99 /* KeyCode.Numpad1 */, 'NumPad1', 97, 'VK_NUMPAD1', empty, empty],
        [1, 96 /* ScanCode.Numpad2 */, 'Numpad2', 100 /* KeyCode.Numpad2 */, 'NumPad2', 98, 'VK_NUMPAD2', empty, empty],
        [1, 97 /* ScanCode.Numpad3 */, 'Numpad3', 101 /* KeyCode.Numpad3 */, 'NumPad3', 99, 'VK_NUMPAD3', empty, empty],
        [1, 98 /* ScanCode.Numpad4 */, 'Numpad4', 102 /* KeyCode.Numpad4 */, 'NumPad4', 100, 'VK_NUMPAD4', empty, empty],
        [1, 99 /* ScanCode.Numpad5 */, 'Numpad5', 103 /* KeyCode.Numpad5 */, 'NumPad5', 101, 'VK_NUMPAD5', empty, empty],
        [1, 100 /* ScanCode.Numpad6 */, 'Numpad6', 104 /* KeyCode.Numpad6 */, 'NumPad6', 102, 'VK_NUMPAD6', empty, empty],
        [1, 101 /* ScanCode.Numpad7 */, 'Numpad7', 105 /* KeyCode.Numpad7 */, 'NumPad7', 103, 'VK_NUMPAD7', empty, empty],
        [1, 102 /* ScanCode.Numpad8 */, 'Numpad8', 106 /* KeyCode.Numpad8 */, 'NumPad8', 104, 'VK_NUMPAD8', empty, empty],
        [1, 103 /* ScanCode.Numpad9 */, 'Numpad9', 107 /* KeyCode.Numpad9 */, 'NumPad9', 105, 'VK_NUMPAD9', empty, empty],
        [1, 104 /* ScanCode.Numpad0 */, 'Numpad0', 98 /* KeyCode.Numpad0 */, 'NumPad0', 96, 'VK_NUMPAD0', empty, empty],
        [1, 105 /* ScanCode.NumpadDecimal */, 'NumpadDecimal', 112 /* KeyCode.NumpadDecimal */, 'NumPad_Decimal', 110, 'VK_DECIMAL', empty, empty],
        [0, 106 /* ScanCode.IntlBackslash */, 'IntlBackslash', 97 /* KeyCode.IntlBackslash */, 'OEM_102', 226, 'VK_OEM_102', empty, empty],
        [1, 107 /* ScanCode.ContextMenu */, 'ContextMenu', 58 /* KeyCode.ContextMenu */, 'ContextMenu', 93, empty, empty, empty],
        [1, 108 /* ScanCode.Power */, 'Power', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 109 /* ScanCode.NumpadEqual */, 'NumpadEqual', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 110 /* ScanCode.F13 */, 'F13', 71 /* KeyCode.F13 */, 'F13', 124, 'VK_F13', empty, empty],
        [1, 111 /* ScanCode.F14 */, 'F14', 72 /* KeyCode.F14 */, 'F14', 125, 'VK_F14', empty, empty],
        [1, 112 /* ScanCode.F15 */, 'F15', 73 /* KeyCode.F15 */, 'F15', 126, 'VK_F15', empty, empty],
        [1, 113 /* ScanCode.F16 */, 'F16', 74 /* KeyCode.F16 */, 'F16', 127, 'VK_F16', empty, empty],
        [1, 114 /* ScanCode.F17 */, 'F17', 75 /* KeyCode.F17 */, 'F17', 128, 'VK_F17', empty, empty],
        [1, 115 /* ScanCode.F18 */, 'F18', 76 /* KeyCode.F18 */, 'F18', 129, 'VK_F18', empty, empty],
        [1, 116 /* ScanCode.F19 */, 'F19', 77 /* KeyCode.F19 */, 'F19', 130, 'VK_F19', empty, empty],
        [1, 117 /* ScanCode.F20 */, 'F20', 78 /* KeyCode.F20 */, 'F20', 131, 'VK_F20', empty, empty],
        [1, 118 /* ScanCode.F21 */, 'F21', 79 /* KeyCode.F21 */, 'F21', 132, 'VK_F21', empty, empty],
        [1, 119 /* ScanCode.F22 */, 'F22', 80 /* KeyCode.F22 */, 'F22', 133, 'VK_F22', empty, empty],
        [1, 120 /* ScanCode.F23 */, 'F23', 81 /* KeyCode.F23 */, 'F23', 134, 'VK_F23', empty, empty],
        [1, 121 /* ScanCode.F24 */, 'F24', 82 /* KeyCode.F24 */, 'F24', 135, 'VK_F24', empty, empty],
        [1, 122 /* ScanCode.Open */, 'Open', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 123 /* ScanCode.Help */, 'Help', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 124 /* ScanCode.Select */, 'Select', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 125 /* ScanCode.Again */, 'Again', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 126 /* ScanCode.Undo */, 'Undo', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 127 /* ScanCode.Cut */, 'Cut', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 128 /* ScanCode.Copy */, 'Copy', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 129 /* ScanCode.Paste */, 'Paste', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 130 /* ScanCode.Find */, 'Find', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 131 /* ScanCode.AudioVolumeMute */, 'AudioVolumeMute', 117 /* KeyCode.AudioVolumeMute */, 'AudioVolumeMute', 173, 'VK_VOLUME_MUTE', empty, empty],
        [1, 132 /* ScanCode.AudioVolumeUp */, 'AudioVolumeUp', 118 /* KeyCode.AudioVolumeUp */, 'AudioVolumeUp', 175, 'VK_VOLUME_UP', empty, empty],
        [1, 133 /* ScanCode.AudioVolumeDown */, 'AudioVolumeDown', 119 /* KeyCode.AudioVolumeDown */, 'AudioVolumeDown', 174, 'VK_VOLUME_DOWN', empty, empty],
        [1, 134 /* ScanCode.NumpadComma */, 'NumpadComma', 110 /* KeyCode.NUMPAD_SEPARATOR */, 'NumPad_Separator', 108, 'VK_SEPARATOR', empty, empty],
        [0, 135 /* ScanCode.IntlRo */, 'IntlRo', 115 /* KeyCode.ABNT_C1 */, 'ABNT_C1', 193, 'VK_ABNT_C1', empty, empty],
        [1, 136 /* ScanCode.KanaMode */, 'KanaMode', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [0, 137 /* ScanCode.IntlYen */, 'IntlYen', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 138 /* ScanCode.Convert */, 'Convert', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 139 /* ScanCode.NonConvert */, 'NonConvert', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 140 /* ScanCode.Lang1 */, 'Lang1', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 141 /* ScanCode.Lang2 */, 'Lang2', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 142 /* ScanCode.Lang3 */, 'Lang3', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 143 /* ScanCode.Lang4 */, 'Lang4', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 144 /* ScanCode.Lang5 */, 'Lang5', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 145 /* ScanCode.Abort */, 'Abort', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 146 /* ScanCode.Props */, 'Props', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 147 /* ScanCode.NumpadParenLeft */, 'NumpadParenLeft', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 148 /* ScanCode.NumpadParenRight */, 'NumpadParenRight', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 149 /* ScanCode.NumpadBackspace */, 'NumpadBackspace', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 150 /* ScanCode.NumpadMemoryStore */, 'NumpadMemoryStore', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 151 /* ScanCode.NumpadMemoryRecall */, 'NumpadMemoryRecall', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 152 /* ScanCode.NumpadMemoryClear */, 'NumpadMemoryClear', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 153 /* ScanCode.NumpadMemoryAdd */, 'NumpadMemoryAdd', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 154 /* ScanCode.NumpadMemorySubtract */, 'NumpadMemorySubtract', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 155 /* ScanCode.NumpadClear */, 'NumpadClear', 131 /* KeyCode.Clear */, 'Clear', 12, 'VK_CLEAR', empty, empty],
        [1, 156 /* ScanCode.NumpadClearEntry */, 'NumpadClearEntry', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 0 /* ScanCode.None */, empty, 5 /* KeyCode.Ctrl */, 'Ctrl', 17, 'VK_CONTROL', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 4 /* KeyCode.Shift */, 'Shift', 16, 'VK_SHIFT', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 6 /* KeyCode.Alt */, 'Alt', 18, 'VK_MENU', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 57 /* KeyCode.Meta */, 'Meta', 91, 'VK_COMMAND', empty, empty],
        [1, 157 /* ScanCode.ControlLeft */, 'ControlLeft', 5 /* KeyCode.Ctrl */, empty, 0, 'VK_LCONTROL', empty, empty],
        [1, 158 /* ScanCode.ShiftLeft */, 'ShiftLeft', 4 /* KeyCode.Shift */, empty, 0, 'VK_LSHIFT', empty, empty],
        [1, 159 /* ScanCode.AltLeft */, 'AltLeft', 6 /* KeyCode.Alt */, empty, 0, 'VK_LMENU', empty, empty],
        [1, 160 /* ScanCode.MetaLeft */, 'MetaLeft', 57 /* KeyCode.Meta */, empty, 0, 'VK_LWIN', empty, empty],
        [1, 161 /* ScanCode.ControlRight */, 'ControlRight', 5 /* KeyCode.Ctrl */, empty, 0, 'VK_RCONTROL', empty, empty],
        [1, 162 /* ScanCode.ShiftRight */, 'ShiftRight', 4 /* KeyCode.Shift */, empty, 0, 'VK_RSHIFT', empty, empty],
        [1, 163 /* ScanCode.AltRight */, 'AltRight', 6 /* KeyCode.Alt */, empty, 0, 'VK_RMENU', empty, empty],
        [1, 164 /* ScanCode.MetaRight */, 'MetaRight', 57 /* KeyCode.Meta */, empty, 0, 'VK_RWIN', empty, empty],
        [1, 165 /* ScanCode.BrightnessUp */, 'BrightnessUp', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 166 /* ScanCode.BrightnessDown */, 'BrightnessDown', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 167 /* ScanCode.MediaPlay */, 'MediaPlay', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 168 /* ScanCode.MediaRecord */, 'MediaRecord', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 169 /* ScanCode.MediaFastForward */, 'MediaFastForward', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 170 /* ScanCode.MediaRewind */, 'MediaRewind', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 171 /* ScanCode.MediaTrackNext */, 'MediaTrackNext', 124 /* KeyCode.MediaTrackNext */, 'MediaTrackNext', 176, 'VK_MEDIA_NEXT_TRACK', empty, empty],
        [1, 172 /* ScanCode.MediaTrackPrevious */, 'MediaTrackPrevious', 125 /* KeyCode.MediaTrackPrevious */, 'MediaTrackPrevious', 177, 'VK_MEDIA_PREV_TRACK', empty, empty],
        [1, 173 /* ScanCode.MediaStop */, 'MediaStop', 126 /* KeyCode.MediaStop */, 'MediaStop', 178, 'VK_MEDIA_STOP', empty, empty],
        [1, 174 /* ScanCode.Eject */, 'Eject', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 175 /* ScanCode.MediaPlayPause */, 'MediaPlayPause', 127 /* KeyCode.MediaPlayPause */, 'MediaPlayPause', 179, 'VK_MEDIA_PLAY_PAUSE', empty, empty],
        [1, 176 /* ScanCode.MediaSelect */, 'MediaSelect', 128 /* KeyCode.LaunchMediaPlayer */, 'LaunchMediaPlayer', 181, 'VK_MEDIA_LAUNCH_MEDIA_SELECT', empty, empty],
        [1, 177 /* ScanCode.LaunchMail */, 'LaunchMail', 129 /* KeyCode.LaunchMail */, 'LaunchMail', 180, 'VK_MEDIA_LAUNCH_MAIL', empty, empty],
        [1, 178 /* ScanCode.LaunchApp2 */, 'LaunchApp2', 130 /* KeyCode.LaunchApp2 */, 'LaunchApp2', 183, 'VK_MEDIA_LAUNCH_APP2', empty, empty],
        [1, 179 /* ScanCode.LaunchApp1 */, 'LaunchApp1', 0 /* KeyCode.Unknown */, empty, 0, 'VK_MEDIA_LAUNCH_APP1', empty, empty],
        [1, 180 /* ScanCode.SelectTask */, 'SelectTask', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 181 /* ScanCode.LaunchScreenSaver */, 'LaunchScreenSaver', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 182 /* ScanCode.BrowserSearch */, 'BrowserSearch', 120 /* KeyCode.BrowserSearch */, 'BrowserSearch', 170, 'VK_BROWSER_SEARCH', empty, empty],
        [1, 183 /* ScanCode.BrowserHome */, 'BrowserHome', 121 /* KeyCode.BrowserHome */, 'BrowserHome', 172, 'VK_BROWSER_HOME', empty, empty],
        [1, 184 /* ScanCode.BrowserBack */, 'BrowserBack', 122 /* KeyCode.BrowserBack */, 'BrowserBack', 166, 'VK_BROWSER_BACK', empty, empty],
        [1, 185 /* ScanCode.BrowserForward */, 'BrowserForward', 123 /* KeyCode.BrowserForward */, 'BrowserForward', 167, 'VK_BROWSER_FORWARD', empty, empty],
        [1, 186 /* ScanCode.BrowserStop */, 'BrowserStop', 0 /* KeyCode.Unknown */, empty, 0, 'VK_BROWSER_STOP', empty, empty],
        [1, 187 /* ScanCode.BrowserRefresh */, 'BrowserRefresh', 0 /* KeyCode.Unknown */, empty, 0, 'VK_BROWSER_REFRESH', empty, empty],
        [1, 188 /* ScanCode.BrowserFavorites */, 'BrowserFavorites', 0 /* KeyCode.Unknown */, empty, 0, 'VK_BROWSER_FAVORITES', empty, empty],
        [1, 189 /* ScanCode.ZoomToggle */, 'ZoomToggle', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 190 /* ScanCode.MailReply */, 'MailReply', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 191 /* ScanCode.MailForward */, 'MailForward', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        [1, 192 /* ScanCode.MailSend */, 'MailSend', 0 /* KeyCode.Unknown */, empty, 0, empty, empty, empty],
        // See https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
        // If an Input Method Editor is processing key input and the event is keydown, return 229.
        [1, 0 /* ScanCode.None */, empty, 114 /* KeyCode.KEY_IN_COMPOSITION */, 'KeyInComposition', 229, empty, empty, empty],
        [1, 0 /* ScanCode.None */, empty, 116 /* KeyCode.ABNT_C2 */, 'ABNT_C2', 194, 'VK_ABNT_C2', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 96 /* KeyCode.OEM_8 */, 'OEM_8', 223, 'VK_OEM_8', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_KANA', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_HANGUL', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_JUNJA', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_FINAL', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_HANJA', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_KANJI', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_CONVERT', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_NONCONVERT', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_ACCEPT', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_MODECHANGE', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_SELECT', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_PRINT', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_EXECUTE', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_SNAPSHOT', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_HELP', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_APPS', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_PROCESSKEY', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_PACKET', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_DBE_SBCSCHAR', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_DBE_DBCSCHAR', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_ATTN', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_CRSEL', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_EXSEL', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_EREOF', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_PLAY', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_ZOOM', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_NONAME', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_PA1', empty, empty],
        [1, 0 /* ScanCode.None */, empty, 0 /* KeyCode.Unknown */, empty, 0, 'VK_OEM_CLEAR', empty, empty],
    ];
    const seenKeyCode = [];
    const seenScanCode = [];
    for (const mapping of mappings) {
        const [immutable, scanCode, scanCodeStr, keyCode, keyCodeStr, eventKeyCode, vkey, usUserSettingsLabel, generalUserSettingsLabel] = mapping;
        if (!seenScanCode[scanCode]) {
            seenScanCode[scanCode] = true;
            scanCodeStrToInt[scanCodeStr] = scanCode;
            scanCodeLowerCaseStrToInt[scanCodeStr.toLowerCase()] = scanCode;
            if (immutable) {
                IMMUTABLE_CODE_TO_KEY_CODE[scanCode] = keyCode;
            }
        }
        if (!seenKeyCode[keyCode]) {
            seenKeyCode[keyCode] = true;
            if (!keyCodeStr) {
                throw new Error(`String representation missing for key code ${keyCode} around scan code ${scanCodeStr}`);
            }
            uiMap.define(keyCode, keyCodeStr);
            userSettingsUSMap.define(keyCode, usUserSettingsLabel || keyCodeStr);
            userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel || usUserSettingsLabel || keyCodeStr);
        }
        if (eventKeyCode) {
            EVENT_KEY_CODE_MAP[eventKeyCode] = keyCode;
        }
    }
})();
var KeyCodeUtils;
(function (KeyCodeUtils) {
    function toString(keyCode) {
        return uiMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toString = toString;
    function fromString(key) {
        return uiMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromString = fromString;
    function toUserSettingsUS(keyCode) {
        return userSettingsUSMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;
    function toUserSettingsGeneral(keyCode) {
        return userSettingsGeneralMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;
    function fromUserSettings(key) {
        return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromUserSettings = fromUserSettings;
    function toElectronAccelerator(keyCode) {
        if (keyCode >= 98 /* KeyCode.Numpad0 */ && keyCode <= 113 /* KeyCode.NumpadDivide */) {
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
            case 16 /* KeyCode.UpArrow */:
                return 'Up';
            case 18 /* KeyCode.DownArrow */:
                return 'Down';
            case 15 /* KeyCode.LeftArrow */:
                return 'Left';
            case 17 /* KeyCode.RightArrow */:
                return 'Right';
        }
        return uiMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toElectronAccelerator = toElectronAccelerator;
})(KeyCodeUtils || (KeyCodeUtils = {}));
function KeyChord(firstPart, secondPart) {
    const chordPart = ((secondPart & 0x0000FFFF) << 16) >>> 0;
    return (firstPart | chordPart) >>> 0;
}

export { EVENT_KEY_CODE_MAP, IMMUTABLE_CODE_TO_KEY_CODE, KeyChord, KeyCodeUtils };
