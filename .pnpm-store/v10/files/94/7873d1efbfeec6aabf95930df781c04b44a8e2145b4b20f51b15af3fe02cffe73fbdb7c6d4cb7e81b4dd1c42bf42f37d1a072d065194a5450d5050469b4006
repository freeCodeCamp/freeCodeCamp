'use strict';

var keyboard = require('../system/keyboard.js');

/**
 * Mapping for a default US-104-QWERTY keyboard
 */ const defaultKeyMap = [
    // alphanumeric block - writing system
    ...'0123456789'.split('').map((c)=>({
            code: `Digit${c}`,
            key: c
        })),
    ...')!@#$%^&*('.split('').map((c, i)=>({
            code: `Digit${i}`,
            key: c,
            shiftKey: true
        })),
    ...'abcdefghijklmnopqrstuvwxyz'.split('').map((c)=>({
            code: `Key${c.toUpperCase()}`,
            key: c
        })),
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((c)=>({
            code: `Key${c}`,
            key: c,
            shiftKey: true
        })),
    {
        code: 'BracketLeft',
        key: '['
    },
    {
        code: 'BracketLeft',
        key: '{',
        shiftKey: true
    },
    {
        code: 'BracketRight',
        key: ']'
    },
    {
        code: 'BracketRight',
        key: '}',
        shiftKey: true
    },
    // alphanumeric block - functional
    {
        code: 'Space',
        key: ' '
    },
    {
        code: 'AltLeft',
        key: 'Alt',
        location: keyboard.DOM_KEY_LOCATION.LEFT
    },
    {
        code: 'AltRight',
        key: 'Alt',
        location: keyboard.DOM_KEY_LOCATION.RIGHT
    },
    {
        code: 'ShiftLeft',
        key: 'Shift',
        location: keyboard.DOM_KEY_LOCATION.LEFT
    },
    {
        code: 'ShiftRight',
        key: 'Shift',
        location: keyboard.DOM_KEY_LOCATION.RIGHT
    },
    {
        code: 'ControlLeft',
        key: 'Control',
        location: keyboard.DOM_KEY_LOCATION.LEFT
    },
    {
        code: 'ControlRight',
        key: 'Control',
        location: keyboard.DOM_KEY_LOCATION.RIGHT
    },
    {
        code: 'MetaLeft',
        key: 'Meta',
        location: keyboard.DOM_KEY_LOCATION.LEFT
    },
    {
        code: 'MetaRight',
        key: 'Meta',
        location: keyboard.DOM_KEY_LOCATION.RIGHT
    },
    {
        code: 'OSLeft',
        key: 'OS',
        location: keyboard.DOM_KEY_LOCATION.LEFT
    },
    {
        code: 'OSRight',
        key: 'OS',
        location: keyboard.DOM_KEY_LOCATION.RIGHT
    },
    {
        code: 'ContextMenu',
        key: 'ContextMenu'
    },
    {
        code: 'Tab',
        key: 'Tab'
    },
    {
        code: 'CapsLock',
        key: 'CapsLock'
    },
    {
        code: 'Backspace',
        key: 'Backspace'
    },
    {
        code: 'Enter',
        key: 'Enter'
    },
    // function
    {
        code: 'Escape',
        key: 'Escape'
    },
    // arrows
    {
        code: 'ArrowUp',
        key: 'ArrowUp'
    },
    {
        code: 'ArrowDown',
        key: 'ArrowDown'
    },
    {
        code: 'ArrowLeft',
        key: 'ArrowLeft'
    },
    {
        code: 'ArrowRight',
        key: 'ArrowRight'
    },
    // control pad
    {
        code: 'Home',
        key: 'Home'
    },
    {
        code: 'End',
        key: 'End'
    },
    {
        code: 'Delete',
        key: 'Delete'
    },
    {
        code: 'PageUp',
        key: 'PageUp'
    },
    {
        code: 'PageDown',
        key: 'PageDown'
    },
    // Special keys that are not part of a default US-layout but included for specific behavior
    {
        code: 'Fn',
        key: 'Fn'
    },
    {
        code: 'Symbol',
        key: 'Symbol'
    },
    {
        code: 'AltRight',
        key: 'AltGraph'
    }
];

exports.defaultKeyMap = defaultKeyMap;
