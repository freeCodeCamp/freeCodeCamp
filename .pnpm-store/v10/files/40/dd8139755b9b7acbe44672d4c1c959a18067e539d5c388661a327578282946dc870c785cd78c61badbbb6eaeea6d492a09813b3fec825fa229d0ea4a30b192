"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnterKey = exports.isNumberKey = exports.isTabKey = exports.isBackspaceKey = exports.isSpaceKey = exports.isDownKey = exports.isUpKey = void 0;
const isUpKey = (key, keybindings = []) => 
// The up key
key.name === 'up' ||
    // Vim keybinding: hjkl keys map to left/down/up/right
    (keybindings.includes('vim') && key.name === 'k') ||
    // Emacs keybinding: Ctrl+P means "previous" in Emacs navigation conventions
    (keybindings.includes('emacs') && key.ctrl && key.name === 'p');
exports.isUpKey = isUpKey;
const isDownKey = (key, keybindings = []) => 
// The down key
key.name === 'down' ||
    // Vim keybinding: hjkl keys map to left/down/up/right
    (keybindings.includes('vim') && key.name === 'j') ||
    // Emacs keybinding: Ctrl+N means "next" in Emacs navigation conventions
    (keybindings.includes('emacs') && key.ctrl && key.name === 'n');
exports.isDownKey = isDownKey;
const isSpaceKey = (key) => key.name === 'space';
exports.isSpaceKey = isSpaceKey;
const isBackspaceKey = (key) => key.name === 'backspace';
exports.isBackspaceKey = isBackspaceKey;
const isTabKey = (key) => key.name === 'tab';
exports.isTabKey = isTabKey;
const isNumberKey = (key) => '1234567890'.includes(key.name);
exports.isNumberKey = isNumberKey;
const isEnterKey = (key) => key.name === 'enter' || key.name === 'return';
exports.isEnterKey = isEnterKey;
