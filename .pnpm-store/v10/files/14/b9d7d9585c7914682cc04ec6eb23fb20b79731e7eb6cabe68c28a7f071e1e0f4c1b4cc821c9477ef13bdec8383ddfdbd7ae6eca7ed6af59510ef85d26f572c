"use client";

import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { createContext, useContext, useState, useId, useRef, useCallback, useEffect, createElement, forwardRef } from 'react';
import { createStitches } from '@stitches/core';
import { dequal } from 'dequal';
import { normalizePath, addPackageJSONIfNeeded, loadSandpackClient, extractErrorDetails } from '@codesandbox/sandpack-client';
import { closeBracketsKeymap, closeBrackets } from '@codemirror/autocomplete';
import { defaultKeymap, historyKeymap, history, indentMore, indentLess, deleteGroupBackward } from '@codemirror/commands';
import { HighlightStyle, syntaxHighlighting, bracketMatching } from '@codemirror/language';
import { EditorState, StateEffect, EditorSelection, Annotation } from '@codemirror/state';
import { EditorView, ViewPlugin, Decoration, keymap, highlightSpecialChars, highlightActiveLine, lineNumbers } from '@codemirror/view';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { css as css$1 } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { tags, highlightTree } from '@lezer/highlight';
import Anser from 'anser';
import { escapeCarriageReturn } from 'escape-carriage';
import LZString from 'lz-string';
import cleanSet from 'clean-set';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var SVG = function (props) { return (jsx("svg", __assign({ fill: "currentColor", height: "16", viewBox: "0 0 16 16", width: "16", xmlns: "http://www.w3.org/2000/svg" }, props))); };
var SignInIcon = function () { return (jsxs(SVG, { viewBox: "0 0 48 48", children: [jsx("title", { children: "Sign in" }), jsx("path", { d: "M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z" })] })); };
var SignOutIcon = function () { return (jsxs(SVG, { viewBox: "0 0 48 48", children: [jsx("title", { children: "Sign out" }), jsx("path", { d: "M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z" })] })); };
var RestartIcon = function () { return (jsxs(SVG, { fill: "none", stroke: "currentColor", children: [jsx("title", { children: "Restart script" }), jsx("path", { d: "M8 2C4.68629 2 2 4.68629 2 8C2 10.0946 3.07333 11.9385 4.7 13.0118", strokeLinecap: "round" }), jsx("path", { d: "M14.0005 7.9998C14.0005 5.82095 12.8391 3.91335 11.1016 2.8623", strokeLinecap: "round" }), jsx("path", { d: "M14.0003 2.3335H11.167C10.8908 2.3335 10.667 2.55735 10.667 2.8335V5.66683", strokeLinecap: "round" }), jsx("path", { d: "M1.99967 13.6665L4.83301 13.6665C5.10915 13.6665 5.33301 13.4426 5.33301 13.1665L5.33301 10.3332", strokeLinecap: "round" }), jsx("path", { d: "M10 10L12 12L10 14", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M14.667 14L12.667 14", strokeLinecap: "round", strokeLinejoin: "round" })] })); };
var RunIcon = function () { return (jsxs(SVG, { children: [jsx("title", { children: "Run sandbox" }), jsx("path", { d: "M11.0792 8.1078C11.2793 8.25007 11.27 8.55012 11.0616 8.67981L6.02535 11.8135C5.79638 11.956 5.5 11.7913 5.5 11.5216L5.5 8.40703L5.5 4.80661C5.5 4.52735 5.81537 4.36463 6.04296 4.52647L11.0792 8.1078Z" })] })); };
var BackwardIcon = function () { return (jsxs(SVG, { children: [jsx("title", { children: "Click to go back" }), jsx("path", { d: "M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64644C10.1583 3.45118 9.84171 3.45118 9.64645 3.64644L10.3536 4.35355ZM6.07072 7.92929L5.71716 7.57573L6.07072 7.92929ZM10.3536 11.6464L6.42427 7.71716L5.71716 8.42426L9.64645 12.3536L10.3536 11.6464ZM6.42427 8.28284L10.3536 4.35355L9.64645 3.64644L5.71716 7.57573L6.42427 8.28284ZM6.42427 7.71716C6.58048 7.87337 6.58048 8.12663 6.42427 8.28284L5.71716 7.57573C5.48285 7.81005 5.48285 8.18995 5.71716 8.42426L6.42427 7.71716Z" })] })); };
var ForwardIcon = function () { return (jsxs(SVG, { children: [jsx("title", { children: "Click to go forward" }), jsx("path", { d: "M6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L6.35355 3.64645ZM5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L5.64645 11.6464ZM9.92929 8.07071L10.2828 8.42426L9.92929 8.07071ZM5.64645 4.35355L9.57574 8.28284L10.2828 7.57574L6.35355 3.64645L5.64645 4.35355ZM9.57574 7.71716L5.64645 11.6464L6.35355 12.3536L10.2828 8.42426L9.57574 7.71716ZM9.57574 8.28284C9.41952 8.12663 9.41953 7.87337 9.57574 7.71716L10.2828 8.42426C10.5172 8.18995 10.5172 7.81005 10.2828 7.57574L9.57574 8.28284Z" })] })); };
var RefreshIcon = function () { return (jsxs(SVG, { children: [jsx("title", { children: "Refresh preview" }), jsx("path", { clipRule: "evenodd", d: "M3.83325 7.99992C3.83325 5.69867 5.69853 3.83325 7.99934 3.83325C9.81246 3.83325 11.3563 4.99195 11.9285 6.61097C11.9396 6.6425 11.9536 6.67221 11.97 6.69992H8.80005C8.52391 6.69992 8.30005 6.92378 8.30005 7.19992C8.30005 7.47606 8.52391 7.69992 8.80005 7.69992H12.5667C12.8981 7.69992 13.1667 7.43129 13.1667 7.09992V3.33325C13.1667 3.05711 12.9429 2.83325 12.6667 2.83325C12.3906 2.83325 12.1667 3.05711 12.1667 3.33325V4.94608C11.2268 3.66522 9.7106 2.83325 7.99934 2.83325C5.14613 2.83325 2.83325 5.14651 2.83325 7.99992C2.83325 10.8533 5.14613 13.1666 7.99934 13.1666C9.91218 13.1666 11.5815 12.1266 12.474 10.5836C12.6123 10.3446 12.5306 10.0387 12.2915 9.90044C12.0525 9.76218 11.7466 9.84387 11.6084 10.0829C10.8873 11.3296 9.54072 12.1666 7.99934 12.1666C5.69853 12.1666 3.83325 10.3012 3.83325 7.99992Z", fillRule: "evenodd" })] })); };
var CleanIcon = function () { return (jsxs(SVG, { fill: "none", stroke: "currentColor", children: [jsx("title", { children: "Clean" }), jsx("circle", { cx: "7.99998", cy: "8.00004", r: "4.66667", strokeLinecap: "round" }), jsx("path", { d: "M4.66669 4.66663L11.3334 11.3333" })] })); };
var ExportIcon = function () { return (jsxs(SVG, { fill: "none", stroke: "currentColor", children: [jsx("title", { children: "Open on CodeSandbox" }), jsx("path", { d: "M6.66665 3.33337H4.33331C3.78103 3.33337 3.33331 3.78109 3.33331 4.33337V11.6667C3.33331 12.219 3.78103 12.6667 4.33331 12.6667H11.6666C12.2189 12.6667 12.6666 12.219 12.6666 11.6667V9.33337", strokeLinecap: "round" }), jsx("path", { d: "M10 3.33337H12.5667C12.6219 3.33337 12.6667 3.37815 12.6667 3.43337V6.00004", strokeLinecap: "round" }), jsx("path", { d: "M7.33331 8.66668L12.5333 3.46667", strokeLinecap: "round" })] })); };
var DirectoryIconOpen = function () { return (jsxs(SVG, { children: [jsx("title", { children: "Directory" }), jsx("path", { d: "M12.5526 12.6667H3.66675C3.2922 12.6667 2.96575 12.4608 2.79442 12.156L3.81072 8.0908C3.92201 7.64563 4.32199 7.33333 4.78086 7.33333H13.386C14.0365 7.33333 14.5139 7.94472 14.3561 8.57587L13.5228 11.9092C13.4115 12.3544 13.0115 12.6667 12.5526 12.6667Z", fill: "currentColor" }), jsx("path", { d: "M13.3334 6.63333V6.33333C13.3334 5.78105 12.8857 5.33333 12.3334 5.33333H8.30286C8.10543 5.33333 7.91242 5.2749 7.74816 5.16538L6.25201 4.16795C6.08774 4.05844 5.89473 4 5.69731 4H3.66675C3.11446 4 2.66675 4.44772 2.66675 5L2.66675 11.6667C2.66675 12.219 3.11446 12.6667 3.66675 12.6667H12.5526C13.0115 12.6667 13.4115 12.3544 13.5228 11.9092L14.3561 8.57587C14.5139 7.94472 14.0365 7.33333 13.386 7.33333H4.78086C4.32199 7.33333 3.92201 7.64563 3.81072 8.0908L2.75008 12.3333", fill: "none", stroke: "currentColor", strokeLinecap: "round" })] })); };
var DirectoryIconClosed = function () { return (jsxs(SVG, { children: [jsx("title", { children: "Directory" }), jsx("path", { d: "M12.3334 12.6667H3.66675C3.11446 12.6667 2.66675 12.219 2.66675 11.6667V5C2.66675 4.44772 3.11446 4 3.66675 4H5.69731C5.89473 4 6.08774 4.05844 6.25201 4.16795L7.74816 5.16538C7.91242 5.2749 8.10543 5.33333 8.30286 5.33333H12.3334C12.8857 5.33333 13.3334 5.78105 13.3334 6.33333V11.6667C13.3334 12.219 12.8857 12.6667 12.3334 12.6667Z", fill: "currentColor", stroke: "currentColor", strokeLinecap: "round" })] })); };
var FileIcon = function () { return (jsxs(SVG, { fill: "currentColor", children: [jsx("title", { children: "File" }), jsx("path", { clipRule: "evenodd", d: "M4.5 4.33325C4.5 4.05711 4.72386 3.83325 5 3.83325H8.16675V6.56659C8.16675 6.89795 8.43538 7.16658 8.76675 7.16658H11.5V12.3333C11.5 12.6094 11.2761 12.8333 11 12.8333H5C4.72386 12.8333 4.5 12.6094 4.5 12.3333V4.33325ZM12.5 6.67568C12.5001 6.67265 12.5001 6.66962 12.5001 6.66658C12.5001 6.66355 12.5001 6.66052 12.5 6.65749V6.41413C12.5 6.01631 12.342 5.63478 12.0607 5.35347L9.97978 3.27259C9.69848 2.99129 9.31694 2.83325 8.91912 2.83325H8.66675H5C4.17157 2.83325 3.5 3.50483 3.5 4.33325V12.3333C3.5 13.1617 4.17157 13.8333 5 13.8333H11C11.8284 13.8333 12.5 13.1617 12.5 12.3333V6.67568ZM9.16675 3.89888C9.20518 3.92078 9.24085 3.94787 9.27267 3.9797L11.3536 6.06058C11.3854 6.09243 11.4125 6.12813 11.4344 6.16658H9.16675V3.89888Z", fillRule: "evenodd" })] })); };
var CloseIcon = function () { return (jsxs(SVG, { stroke: "currentColor", children: [jsx("title", { children: "Close file" }), jsx("path", { d: "M12 4L4 12", strokeLinecap: "round" }), jsx("path", { d: "M4 4L12 12", strokeLinecap: "round" })] })); };
var ConsoleIcon = function () { return (jsxs(SVG, { children: [jsx("title", { children: "Open browser console" }), jsx("path", { d: "M5.65871 3.62037C5.44905 3.44066 5.1334 3.46494 4.95368 3.6746C4.77397 3.88427 4.79825 4.19992 5.00792 4.37963L5.65871 3.62037ZM5.00792 11.6204C4.79825 11.8001 4.77397 12.1157 4.95368 12.3254C5.1334 12.5351 5.44905 12.5593 5.65871 12.3796L5.00792 11.6204ZM9.9114 7.92407L10.2368 7.54445L9.9114 7.92407ZM5.00792 4.37963L9.586 8.3037L10.2368 7.54445L5.65871 3.62037L5.00792 4.37963ZM9.586 7.6963L5.00792 11.6204L5.65871 12.3796L10.2368 8.45555L9.586 7.6963ZM9.586 8.3037C9.39976 8.14407 9.39976 7.85594 9.586 7.6963L10.2368 8.45555C10.5162 8.2161 10.5162 7.7839 10.2368 7.54445L9.586 8.3037Z" }), jsx("path", { d: "M10 11.5C9.72386 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.72386 12.5 10 12.5V11.5ZM14.6667 12.5C14.9428 12.5 15.1667 12.2761 15.1667 12C15.1667 11.7239 14.9428 11.5 14.6667 11.5V12.5ZM10 12.5H14.6667V11.5H10V12.5Z" })] })); };

var _a$a;
/**
 * @category Theme
 */
var defaultLight = {
    colors: {
        surface1: "#ffffff",
        surface2: "#EFEFEF",
        surface3: "#F3F3F3",
        disabled: "#C5C5C5",
        base: "#323232",
        clickable: "#808080",
        hover: "#4D4D4D",
        accent: "#3973E0",
        error: "#EA3323",
        errorSurface: "#FCF1F0",
        warning: "#6A4516",
        warningSurface: "#FEF2C0",
    },
    syntax: {
        plain: "#151515",
        comment: { color: "#999", fontStyle: "italic" },
        keyword: "#7C5AE3",
        tag: "#0971F1",
        punctuation: "#3B3B3B",
        definition: "#85A600",
        property: "#3B3B3B",
        static: "#3B3B3B",
        string: "#2E6BD0",
    },
    font: {
        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
        size: "13px",
        lineHeight: "20px",
    },
};
/**
 * @category Theme
 */
var defaultDark = {
    colors: {
        surface1: "#151515",
        surface2: "#252525",
        surface3: "#2F2F2F",
        disabled: "#4D4D4D",
        base: "#808080",
        clickable: "#999999",
        hover: "#C5C5C5",
        accent: "#E5E5E5",
        error: "#FFB4A6",
        errorSurface: "#690000",
        warning: "#E7C400",
        warningSurface: "#3A3000",
    },
    syntax: {
        plain: "#FFFFFF",
        comment: { color: "#757575", fontStyle: "italic" },
        keyword: "#77B7D7",
        tag: "#DFAB5C",
        punctuation: "#ffffff",
        definition: "#86D9CA",
        property: "#77B7D7",
        static: "#C64640",
        string: "#977CDC",
    },
    font: {
        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
        size: "13px",
        lineHeight: "20px",
    },
};
/**
 * @category Theme
 */
var SANDPACK_THEMES = {
    light: defaultLight,
    dark: defaultDark,
    auto: typeof window !== "undefined"
        ? ((_a$a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a$a === void 0 ? void 0 : _a$a.call(window, "(prefers-color-scheme: dark)").matches)
            ? defaultDark
            : defaultLight
        : defaultLight,
};

var getFileName = function (filePath) {
    var lastIndexOfSlash = filePath.lastIndexOf("/");
    return filePath.slice(lastIndexOfSlash + 1);
};
var calculateNearestUniquePath = function (currentPath, otherPaths) {
    var currentPathParts = (currentPath[0] === "/" ? currentPath.slice(1) : currentPath).split("/");
    var resultPathParts = [];
    // If path is on root, there are no parts to loop through
    if (currentPathParts.length === 1) {
        resultPathParts.unshift(currentPathParts[0]);
    }
    else {
        // Loop over all other paths to find a unique path
        for (var fileIndex = 0; fileIndex < otherPaths.length; fileIndex++) {
            // We go over each part of the path from end to start to find the closest unique directory
            var otherPathParts = otherPaths[fileIndex].split("/");
            for (var partsFromEnd = 1; partsFromEnd <= currentPathParts.length; partsFromEnd++) {
                var currentPathPart = currentPathParts[currentPathParts.length - partsFromEnd];
                var otherPathPart = otherPathParts[otherPathParts.length - partsFromEnd];
                // If this part hasn't been added to the result path, we add it here
                if (resultPathParts.length < partsFromEnd) {
                    resultPathParts.unshift(currentPathPart);
                }
                // If this part is different between the current path and other path we break
                // as from this moment the current path is unique compared to this other path
                if (currentPathPart !== otherPathPart) {
                    break;
                }
            }
        }
    }
    // Add `..` if this is a relative path
    if (resultPathParts.length < currentPathParts.length) {
        resultPathParts.unshift("..");
    }
    // Join the result path parts into a path string
    return resultPathParts.join("/");
};
// Checks both rgb and hex colors for contrast and returns true if the color is in the dark spectrum
var isDarkColor = function (color) {
    var r = 0;
    var g = 0;
    var b = 0;
    if (color.startsWith("#")) {
        if (color.length < 7) {
            return true;
        }
        r = parseInt(color.substr(1, 2), 16);
        g = parseInt(color.substr(3, 2), 16);
        b = parseInt(color.substr(5, 2), 16);
    }
    else {
        var rgbValues = color
            .replace("rgb(", "")
            .replace("rgba(", "")
            .replace(")", "")
            .split(",");
        if (rgbValues.length < 3) {
            return true;
        }
        r = parseInt(rgbValues[0], 10);
        g = parseInt(rgbValues[1], 10);
        b = parseInt(rgbValues[2], 10);
    }
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq < 128;
};
// Minimal cuid-like id
var lastCount = 0;
var generateRandomId = function () {
    var random = +(Date.now().toString(10).substr(0, 4) + lastCount++);
    return random.toString(16);
};

var _a$9;
/**
 * @category Theme
 */
var THEME_PREFIX = "sp";
/**
 * @category Theme
 */
// prettier-ignore
var createTheme = (_a$9 = createStitches({
        prefix: THEME_PREFIX,
    }), _a$9.createTheme), css = _a$9.css, getCssText = _a$9.getCssText, keyframes = _a$9.keyframes;
var defaultVariables = {
    space: new Array(11).fill(" ").reduce(function (acc, _, index) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[index + 1] = "".concat((index + 1) * 4, "px"), _a));
    }, {}),
    border: { radius: "4px" },
    layout: { height: "300px", headerHeight: "40px" },
    transitions: { default: "150ms ease" },
    zIndices: {
        base: "1",
        overlay: "2",
        top: "3",
    },
};
/**
 * @category Theme
 */
var standardizeStitchesTheme = function (theme) {
    // Flat values
    var syntaxEntries = Object.entries(theme.syntax);
    var syntax = syntaxEntries.reduce(function (tokenAcc, _a) {
        var _b;
        var tokenName = _a[0], tokenValue = _a[1];
        // Single property
        var newValues = (_b = {}, _b["color-".concat(tokenName)] = tokenValue, _b);
        // Multiples properties
        if (typeof tokenValue === "object") {
            newValues = Object.entries(tokenValue).reduce(function (valueAcc, _a) {
                var _b;
                var styleProp = _a[0], styleValue = _a[1];
                return __assign(__assign({}, valueAcc), (_b = {}, _b["".concat(styleProp, "-").concat(tokenName)] = styleValue, _b));
            }, {});
        }
        return __assign(__assign({}, tokenAcc), newValues);
    }, {});
    return __assign(__assign({}, defaultVariables), { colors: theme.colors, font: theme.font, syntax: syntax });
};
/**
 * @category Theme
 */
var standardizeTheme = function (inputTheme) {
    var _a, _b, _c, _d, _e;
    if (inputTheme === void 0) { inputTheme = "light"; }
    var defaultLightThemeKey = "default";
    /**
     * Set a local theme: dark or light
     */
    if (typeof inputTheme === "string") {
        var predefinedTheme = SANDPACK_THEMES[inputTheme];
        if (!predefinedTheme) {
            throw new Error("[sandpack-react]: invalid theme '".concat(inputTheme, "' provided."));
        }
        return {
            theme: predefinedTheme,
            id: inputTheme,
            mode: isDarkColor(predefinedTheme.colors.surface1) ? "dark" : "light",
        };
    }
    /**
     * Fullfill the colors key, in case it's missing any key
     */
    var mode = isDarkColor((_b = (_a = inputTheme === null || inputTheme === void 0 ? void 0 : inputTheme.colors) === null || _a === void 0 ? void 0 : _a.surface1) !== null && _b !== void 0 ? _b : defaultLight.colors.surface1)
        ? "dark"
        : "light";
    /**
     * Figure out what's the properly default colors it should be
     * error, warning and success colors have different values between dark and light
     */
    var baseTheme = mode === "dark" ? defaultDark : defaultLight;
    var colorsByMode = __assign(__assign({}, baseTheme.colors), ((_c = inputTheme === null || inputTheme === void 0 ? void 0 : inputTheme.colors) !== null && _c !== void 0 ? _c : {}));
    var syntaxByMode = __assign(__assign({}, baseTheme.syntax), ((_d = inputTheme === null || inputTheme === void 0 ? void 0 : inputTheme.syntax) !== null && _d !== void 0 ? _d : {}));
    var fontByMode = __assign(__assign({}, baseTheme.font), ((_e = inputTheme === null || inputTheme === void 0 ? void 0 : inputTheme.font) !== null && _e !== void 0 ? _e : {}));
    var theme = {
        colors: colorsByMode,
        syntax: syntaxByMode,
        font: fontByMode,
    };
    var id = inputTheme
        ? simpleHashFunction(JSON.stringify(theme))
        : defaultLightThemeKey;
    return {
        theme: theme,
        id: "sp-".concat(id),
        mode: mode,
    };
};
var simpleHashFunction = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; hash &= hash) {
        hash = 31 * hash + str.charCodeAt(i++);
    }
    return Math.abs(hash);
};
/**
 * The fake `css` function used to match the real `css` function usage
 * We use this for the unstyled bundle which do not need real class names
 * `css` is a factory which return a className generator, but also it be used in scenarios which `toString` will be invoked
 * so we also need to add the `toString` method to it.
 */
var fakeCss = function () { return ""; };
fakeCss.toString = fakeCss;

/**
 * <ClassNamesContext classes={{
 *     "sp-wrapper": "custom-wrapper",
 *     "sp-layout": "custom-layout",
 *     "sp-tab-button": "custom-tab",
 *  }}>
 *  ...
 * </ClassNamesContext>
 */
var ClassNamesContext = createContext({});
var ClassNamesProvider = function (_a) {
    var children = _a.children, classes = _a.classes;
    return (jsx(ClassNamesContext.Provider, { value: classes || {}, children: children }));
};
var useClassNames = function () {
    var contextClassNames = useContext(ClassNamesContext);
    return function sandpackClassNames(customClassName, 
    /* eslint-disable @typescript-eslint/no-explicit-any */
    allClassNames) {
        if (allClassNames === void 0) { allClassNames = []; }
        var custom = "".concat(THEME_PREFIX, "-").concat(customClassName);
        return joinClassNames.apply(void 0, __spreadArray(__spreadArray([], allClassNames, false), [custom, contextClassNames[custom]], false));
    };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var joinClassNames = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(Boolean).join(" ");
};

var wrapperClassName$3 = css({
    all: "initial",
    fontSize: "$font$size",
    fontFamily: "$font$body",
    display: "block",
    boxSizing: "border-box",
    textRendering: "optimizeLegibility",
    WebkitTapHighlightColor: "transparent",
    WebkitFontSmoothing: "subpixel-antialiased",
    variants: {
        variant: {
            dark: { colorScheme: "dark" },
            light: { colorScheme: "light" },
        },
    },
    "@media screen and (min-resolution: 2dppx)": {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    },
    "*": { boxSizing: "border-box" },
    ".sp-wrapper:focus": { outline: "0" },
});
var SandpackThemeContext = React.createContext({
    theme: defaultLight,
    id: "light",
    mode: "light",
});
/**
 * @category Theme
 */
var SandpackThemeProvider = function (_a) {
    var themeFromProps = _a.theme, children = _a.children, className = _a.className, props = __rest(_a, ["theme", "children", "className"]);
    var _b = React.useState(themeFromProps), prefferedTheme = _b[0], setPreferredTheme = _b[1];
    var _c = standardizeTheme(prefferedTheme), theme = _c.theme, id = _c.id, mode = _c.mode;
    var classNames = useClassNames();
    var themeClassName = React.useMemo(function () {
        return createTheme(id, standardizeStitchesTheme(theme));
    }, [theme, id]);
    React.useEffect(function () {
        if (themeFromProps !== "auto") {
            setPreferredTheme(themeFromProps);
            return;
        }
        var colorSchemeChange = function (_a) {
            var matches = _a.matches;
            setPreferredTheme(matches ? "dark" : "light");
        };
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", colorSchemeChange);
        return function () {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", colorSchemeChange);
        };
    }, [themeFromProps]);
    return (jsx(SandpackThemeContext.Provider, { value: { theme: theme, id: id, mode: mode }, children: jsx("div", __assign({ className: classNames("wrapper", [
                themeClassName,
                wrapperClassName$3({ variant: mode }),
                className,
            ]) }, props, { children: children })) }));
};
var SandpackThemeConsumer = SandpackThemeContext.Consumer;

var commonFiles = {
    "/styles.css": {
        code: "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}",
    },
};

/**
 * @hidden
 */
var ASTRO_TEMPLATE = {
    files: {
        "/src/styles.css": commonFiles["/styles.css"],
        "/src/pages/index.astro": {
            code: "---\nimport \"../styles.css\";\nconst data = \"world\";\n---\n\n<h1>Hello {data}</h1>\n\n<style>\n  h1 {\n    font-size: 1.5rem;\n  }\n</style>",
        },
        ".env": {
            code: "ASTRO_TELEMETRY_DISABLED=\"1\"",
        },
        "/package.json": {
            code: JSON.stringify({
                dependencies: {
                    astro: "^1.6.12",
                    "esbuild-wasm": "^0.15.16",
                },
                scripts: {
                    dev: "astro dev",
                    start: "astro dev",
                    build: "astro build",
                    preview: "astro preview",
                    astro: "astro",
                },
            }),
        },
    },
    main: "/src/pages/index.astro",
    environment: "node",
};

var NEXTJS_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/pages/_app.js": {
            code: "import '../styles.css'\n\nexport default function MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />\n}",
        }, "/pages/index.js": {
            code: "export default function Home({ data }) {\n  return (\n    <div>\n      <h1>Hello {data}</h1>\n    </div>\n  );\n}\n  \nexport function getServerSideProps() {\n  return {\n    props: { data: \"world\" },\n  }\n}\n",
        }, "/next.config.js": {
            code: "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  swcMinify: true,\n}\n\nmodule.exports = nextConfig\n",
        }, "/package.json": {
            code: JSON.stringify({
                name: "my-app",
                version: "0.1.0",
                private: true,
                scripts: {
                    dev: "NEXT_TELEMETRY_DISABLED=1 next dev",
                    build: "next build",
                    start: "next start",
                    lint: "next lint",
                },
                dependencies: {
                    next: "12.1.6",
                    react: "18.2.0",
                    "react-dom": "18.2.0",
                    "@next/swc-wasm-nodejs": "12.1.6",
                },
            }),
        } }),
    main: "/pages/index.js",
    environment: "node",
};

var NODE_TEMPLATE = {
    files: {
        "/index.js": {
            code: "const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/html');\n  res.end('Hello world');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});",
        },
        "/package.json": {
            code: JSON.stringify({
                dependencies: {},
                scripts: { start: "node index.js" },
                main: "index.js",
            }),
        },
    },
    main: "/index.js",
    environment: "node",
};

var VITE_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/index.js": {
            code: "import \"./styles.css\";\n\ndocument.getElementById(\"app\").innerHTML = `\n<h1>Hello world</h1>\n`;\n",
        }, "/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/index.js\"></script>\n  </body>\n</html>\n",
        }, "/package.json": {
            code: JSON.stringify({
                scripts: {
                    dev: "vite",
                    build: "vite build",
                    preview: "vite preview",
                },
                devDependencies: {
                    vite: "4.1.4",
                    "esbuild-wasm": "0.17.12",
                },
            }),
        } }),
    main: "/index.js",
    environment: "node",
};

var VITE_PREACT_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/App.jsx": {
            code: "export default function App() {\n  const data = \"world\"\n\n  return <h1>Hello {data}</h1>\n}\n",
        }, "/index.jsx": {
            code: "import { render } from \"preact\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = document.getElementById(\"root\");\nrender(<App />, root);\n",
        }, "/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/index.jsx\"></script>\n  </body>\n</html>\n",
        }, "/package.json": {
            code: JSON.stringify({
                scripts: {
                    dev: "vite",
                    build: "vite build",
                    preview: "vite preview",
                },
                dependencies: {
                    preact: "^10.16.0",
                },
                devDependencies: {
                    "@preact/preset-vite": "^2.5.0",
                    vite: "4.1.4",
                    "esbuild-wasm": "0.17.12",
                },
            }),
        }, "/vite.config.js": {
            code: "import { defineConfig } from \"vite\";\nimport preact from '@preact/preset-vite'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [preact()],\n});\n",
        } }),
    main: "/App.jsx",
    environment: "node",
};

var VITE_PREACT_TS_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/App.tsx": {
            code: "export default function App() {\n  const data: string = \"world\"\n\n  return <h1>Hello {data}</h1>\n}\n",
        }, "/index.tsx": {
            code: "import { render } from \"preact\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = document.getElementById(\"root\") as HTMLElement;\nrender(<App />, root);\n",
        }, "/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/index.tsx\"></script>\n  </body>\n</html>\n",
        }, "/tsconfig.json": {
            code: JSON.stringify({
                compilerOptions: {
                    target: "ESNext",
                    useDefineForClassFields: true,
                    lib: ["DOM", "DOM.Iterable", "ESNext"],
                    allowJs: false,
                    skipLibCheck: true,
                    esModuleInterop: false,
                    allowSyntheticDefaultImports: true,
                    strict: true,
                    forceConsistentCasingInFileNames: true,
                    module: "ESNext",
                    moduleResolution: "Node",
                    resolveJsonModule: true,
                    isolatedModules: true,
                    noEmit: true,
                    jsx: "react-jsx",
                    jsxImportSource: "preact",
                },
                include: ["src"],
                references: [{ path: "./tsconfig.node.json" }],
            }, null, 2),
        }, "/tsconfig.node.json": {
            code: JSON.stringify({
                compilerOptions: {
                    composite: true,
                    module: "ESNext",
                    moduleResolution: "Node",
                    allowSyntheticDefaultImports: true,
                },
                include: ["vite.config.ts"],
            }, null, 2),
        }, "/package.json": {
            code: JSON.stringify({
                scripts: {
                    dev: "vite",
                    build: "tsc && vite build",
                    preview: "vite preview",
                },
                dependencies: {
                    preact: "^10.16.0",
                },
                devDependencies: {
                    "@preact/preset-vite": "^2.5.0",
                    typescript: "^4.9.5",
                    vite: "4.1.4",
                    "esbuild-wasm": "^0.17.12",
                },
            }, null, 2),
        }, "/vite-env.d.ts": {
            code: '/// <reference types="vite/client" />',
        }, "/vite.config.ts": {
            code: "import { defineConfig } from 'vite'\nimport preact from '@preact/preset-vite'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [preact()],\n})\n",
        } }),
    main: "/App.tsx",
    environment: "node",
};

var VITE_REACT_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/App.jsx": {
            code: "export default function App() {\n  const data = \"world\"\n\n  return <h1>Hello {data}</h1>\n}\n",
        }, "/index.jsx": {
            code: "import { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = createRoot(document.getElementById(\"root\"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);",
        }, "/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/index.jsx\"></script>\n  </body>\n</html>\n",
        }, "/package.json": {
            code: JSON.stringify({
                scripts: {
                    dev: "vite",
                    build: "vite build",
                    preview: "vite preview",
                },
                dependencies: {
                    react: "^18.2.0",
                    "react-dom": "^18.2.0",
                },
                devDependencies: {
                    "@vitejs/plugin-react": "3.1.0",
                    vite: "4.1.4",
                    "esbuild-wasm": "0.17.12",
                },
            }),
        }, "/vite.config.js": {
            code: "import { defineConfig } from \"vite\";\nimport react from \"@vitejs/plugin-react\";\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n});\n",
        } }),
    main: "/App.jsx",
    environment: "node",
};

var VITE_REACT_TS_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/App.tsx": {
            code: "export default function App() {\n  const data: string = \"world\"\n\n  return <h1>Hello {data}</h1>\n}\n",
        }, "/index.tsx": {
            code: "import { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\nimport React from \"react\";\n\nconst root = createRoot(document.getElementById(\"root\") as HTMLElement);\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n",
        }, "/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/index.tsx\"></script>\n  </body>\n</html>\n",
        }, "/tsconfig.json": {
            code: JSON.stringify({
                compilerOptions: {
                    target: "ESNext",
                    useDefineForClassFields: true,
                    lib: ["DOM", "DOM.Iterable", "ESNext"],
                    allowJs: false,
                    skipLibCheck: true,
                    esModuleInterop: false,
                    allowSyntheticDefaultImports: true,
                    strict: true,
                    forceConsistentCasingInFileNames: true,
                    module: "ESNext",
                    moduleResolution: "Node",
                    resolveJsonModule: true,
                    isolatedModules: true,
                    noEmit: true,
                    jsx: "react-jsx",
                },
                include: ["src"],
                references: [{ path: "./tsconfig.node.json" }],
            }, null, 2),
        }, "/tsconfig.node.json": {
            code: JSON.stringify({
                compilerOptions: {
                    composite: true,
                    module: "ESNext",
                    moduleResolution: "Node",
                    allowSyntheticDefaultImports: true,
                },
                include: ["vite.config.ts"],
            }, null, 2),
        }, "/package.json": {
            code: JSON.stringify({
                scripts: {
                    dev: "vite",
                    build: "tsc && vite build",
                    preview: "vite preview",
                },
                dependencies: {
                    react: "^19.0.0",
                    "react-dom": "^19.0.0",
                },
                devDependencies: {
                    "@types/react": "^19.0.8",
                    "@types/react-dom": "^19.0.3",
                    "@vitejs/plugin-react": "^4.3.4",
                    typescript: "^4.9.5",
                    vite: "4.2.0",
                    "esbuild-wasm": "^0.17.12",
                },
            }, null, 2),
        }, "/vite-env.d.ts": {
            code: '/// <reference types="vite/client" />',
        }, "/vite.config.ts": {
            code: "import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n})\n",
        } }),
    main: "/App.tsx",
    environment: "node",
};

var VITE_SVELTE_TEMPLATE = {
    files: {
        "/src/styles.css": commonFiles["/styles.css"],
        "/src/App.svelte": {
            code: "<script>\nconst data = \"world\";\n</script>\n\n<h1>Hello {data}</h1>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>",
        },
        "/src/main.js": {
            code: "import App from './App.svelte'\nimport \"./styles.css\"\n\nconst app = new App({\n  target: document.getElementById('app'),\n})\n\nexport default app",
        },
        "/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/src/main.js\"></script>\n  </body>\n</html>\n",
        },
        "/vite.config.js": {
            code: "import { defineConfig } from 'vite'\nimport { svelte } from '@sveltejs/vite-plugin-svelte'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [svelte()],\n})",
        },
        "/package.json": {
            code: JSON.stringify({
                type: "module",
                scripts: {
                    dev: "vite",
                },
                devDependencies: {
                    "@sveltejs/vite-plugin-svelte": "^2.0.2",
                    svelte: "^3.55.1",
                    vite: "4.0.4",
                    "esbuild-wasm": "^0.17.12",
                },
            }),
        },
    },
    main: "/src/App.svelte",
    environment: "node",
};

var VITE_SVELTE_TS_TEMPLATE = {
    files: {
        "/src/styles.css": commonFiles["/styles.css"],
        "/src/App.svelte": {
            code: "<script lang=\"ts\">\nconst data: string = \"world\";\n</script>\n\n<h1>Hello {data}</h1>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>",
        },
        "/src/main.ts": {
            code: "import App from './App.svelte'\nimport \"./styles.css\"\n\nconst app = new App({\n  target: document.getElementById('app'),\n})\n\nexport default app",
        },
        "/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/src/main.ts\"></script>\n  </body>\n</html>\n",
        },
        "/vite-env.d.ts": {
            code: "/// <reference types=\"svelte\" />\n/// <reference types=\"vite/client\" />",
        },
        "svelte.config.js": {
            code: "import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'\n\nexport default {\n  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess\n  // for more information about preprocessors\n  preprocess: vitePreprocess(),\n}\n",
        },
        "/vite.config.ts": {
            code: "import { defineConfig } from 'vite'\nimport { svelte } from '@sveltejs/vite-plugin-svelte'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [svelte()],\n})",
        },
        "tsconfig.json": {
            code: JSON.stringify({
                extends: "@tsconfig/svelte/tsconfig.json",
                compilerOptions: {
                    target: "ESNext",
                    useDefineForClassFields: true,
                    module: "ESNext",
                    resolveJsonModule: true,
                    allowJs: true,
                    checkJs: true,
                    isolatedModules: true,
                },
                include: [
                    "src/**/*.d.ts",
                    "src/**/*.ts",
                    "src/**/*.js",
                    "src/**/*.svelte",
                ],
                references: [{ path: "./tsconfig.node.json" }],
            }, null, 2),
        },
        "tsconfig.node.json": {
            code: JSON.stringify({
                compilerOptions: {
                    composite: true,
                    module: "ESNext",
                    moduleResolution: "Node",
                },
                include: ["vite.config.ts"],
            }, null, 2),
        },
        "/package.json": {
            code: JSON.stringify({
                type: "module",
                scripts: {
                    dev: "vite",
                },
                devDependencies: {
                    "@sveltejs/vite-plugin-svelte": "^2.0.2",
                    "@tsconfig/svelte": "^3.0.0",
                    svelte: "^3.55.1",
                    "svelte-check": "^2.10.3",
                    tslib: "^2.5.0",
                    vite: "4.1.4",
                    "esbuild-wasm": "^0.17.12",
                },
            }, null, 2),
        },
    },
    main: "/src/App.svelte",
    environment: "node",
};

var VITE_VUE_TEMPLATE = {
    files: {
        "/src/styles.css": commonFiles["/styles.css"],
        "/src/App.vue": {
            code: "<script setup>\nimport { ref } from \"vue\";\n\nconst data = ref(\"world\");\n</script>\n\n<template>\n  <h1>Hello {{ data }}</h1>\n</template>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>",
        },
        "/src/main.js": {
            code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\"\n            \ncreateApp(App).mount('#app')            \n",
        },
        "/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/src/main.js\"></script>\n  </body>\n</html>\n",
        },
        "/vite.config.js": {
            code: "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [vue()]\n})\n",
        },
        "/package.json": {
            code: JSON.stringify({
                scripts: {
                    dev: "vite",
                    build: "vite build",
                    preview: "vite preview",
                },
                dependencies: {
                    vue: "^3.2.45",
                },
                devDependencies: {
                    "@vitejs/plugin-vue": "3.2.0",
                    vite: "4.1.4",
                    "esbuild-wasm": "0.17.12",
                },
            }),
        },
    },
    main: "/src/App.vue",
    environment: "node",
};

var VITE_VUE_TS_TEMPLATE = {
    files: {
        "/src/styles.css": commonFiles["/styles.css"],
        "/src/App.vue": {
            code: "<script setup lang=\"ts\">\nimport { ref } from \"vue\";\n\nconst data = ref<string>(\"world\");\n</script>\n\n<template>\n  <h1>Hello {{ data }}</h1>\n</template>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>",
        },
        "/src/main.ts": {
            code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\"\n\ncreateApp(App).mount('#app')\n",
        },
        "/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/src/main.ts\"></script>\n  </body>\n</html>\n",
        },
        "/vite-env.d.ts": {
            code: '/// <reference types="vite/client" />',
        },
        "/vite.config.ts": {
            code: "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [vue()]\n})\n",
        },
        "tsconfig.json": {
            code: JSON.stringify({
                compilerOptions: {
                    target: "ESNext",
                    useDefineForClassFields: true,
                    module: "ESNext",
                    moduleResolution: "Node",
                    strict: true,
                    jsx: "preserve",
                    resolveJsonModule: true,
                    isolatedModules: true,
                    esModuleInterop: true,
                    lib: ["ESNext", "DOM"],
                    skipLibCheck: true,
                    noEmit: true,
                },
                include: [
                    "src/**/*.ts",
                    "src/**/*.d.ts",
                    "src/**/*.tsx",
                    "src/**/*.vue",
                ],
                references: [{ path: "./tsconfig.node.json" }],
            }, null, 2),
        },
        "tsconfig.node.json": {
            code: JSON.stringify({
                compilerOptions: {
                    composite: true,
                    module: "ESNext",
                    moduleResolution: "Node",
                    allowSyntheticDefaultImports: true,
                },
                include: ["vite.config.ts"],
            }, null, 2),
        },
        "/package.json": {
            code: JSON.stringify({
                scripts: {
                    dev: "vite",
                    build: "tsc && vite build",
                    preview: "vite preview",
                },
                dependencies: {
                    vue: "^3.2.47",
                },
                devDependencies: {
                    "@vitejs/plugin-vue": "^4.0.0",
                    vite: "4.1.4",
                    "vue-tsc": "^1.2.0",
                    typescript: "^4.9.5",
                    "esbuild-wasm": "^0.17.12",
                },
            }, null, 2),
        },
    },
    main: "/src/App.vue",
    environment: "node",
};

var ANGULAR_TEMPLATE = {
    files: {
        "/src/app/app.component.css": commonFiles["/styles.css"],
        "/src/app/app.component.html": {
            code: "<div>\n<h1>{{ helloWorld }}</h1>\n</div>     \n",
        },
        "/src/app/app.component.ts": {
            code: "import { Component } from \"@angular/core\";\n\n@Component({\n  selector: \"app-root\",\n  templateUrl: \"./app.component.html\",\n  styleUrls: [\"./app.component.css\"]\n})\nexport class AppComponent {\n  helloWorld = \"Hello world\";\n}           \n",
        },
        "/src/app/app.module.ts": {
            code: "import { BrowserModule } from \"@angular/platform-browser\";\nimport { NgModule } from \"@angular/core\";\n      \nimport { AppComponent } from \"./app.component\";\n      \n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}       \n",
        },
        "/src/index.html": {
            code: "<!doctype html>\n<html lang=\"en\">\n      \n<head>\n  <meta charset=\"utf-8\">\n  <title>Angular</title>\n  <base href=\"/\">\n      \n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n</head>\n      \n<body>\n   <app-root></app-root>\n</body>\n      \n</html>\n",
        },
        "/src/main.ts": {
            code: "import { enableProdMode } from \"@angular/core\";\nimport { platformBrowserDynamic } from \"@angular/platform-browser-dynamic\";\n      \nimport { AppModule } from \"./app/app.module\";      \n\nplatformBrowserDynamic()\n  .bootstrapModule(AppModule)\n  .catch(err => console.log(err));\n      \n",
        },
        "/src/polyfills.ts": {
            code: "import \"core-js/proposals/reflect-metadata\";   \n      import \"zone.js/dist/zone\";\n",
        },
        "/package.json": {
            code: JSON.stringify({
                dependencies: {
                    "@angular/core": "^11.2.0",
                    "@angular/platform-browser": "^11.2.0",
                    "@angular/platform-browser-dynamic": "^11.2.0",
                    "@angular/common": "^11.2.0",
                    "@angular/compiler": "^11.2.0",
                    "zone.js": "0.11.3",
                    "core-js": "3.8.3",
                    rxjs: "6.6.3",
                },
                main: "/src/main.ts",
            }),
        },
    },
    main: "/src/app/app.component.ts",
    environment: "angular-cli",
};

var REACT_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/App.js": {
            code: "export default function App() {\n  return <h1>Hello world</h1>\n}\n",
        }, "/index.js": {
            code: "import React, { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = createRoot(document.getElementById(\"root\"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);",
        }, "/public/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n  </body>\n</html>",
        }, "/package.json": {
            code: JSON.stringify({
                dependencies: {
                    react: "^19.0.0",
                    "react-dom": "^19.0.0",
                    "react-scripts": "^5.0.0",
                },
                main: "/index.js",
            }),
        } }),
    main: "/App.js",
    environment: "create-react-app",
};

var REACT_TYPESCRIPT_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "tsconfig.json": {
            code: "{\n  \"include\": [\n    \"./**/*\"\n  ],\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"lib\": [ \"dom\", \"es2015\" ],\n    \"jsx\": \"react-jsx\"\n  }\n}",
        }, "/App.tsx": {
            code: "export default function App(): JSX.Element {\n  return <h1>Hello world</h1>\n}\n",
        }, "/index.tsx": {
            code: "import React, { StrictMode } from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport \"./styles.css\";\n\nimport App from \"./App\";\n\nconst root = createRoot(document.getElementById(\"root\"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);",
        }, "/public/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n  </body>\n</html>",
        }, "/package.json": {
            code: JSON.stringify({
                dependencies: {
                    react: "^19.0.0",
                    "react-dom": "^19.0.0",
                    "react-scripts": "^4.0.0",
                },
                devDependencies: {
                    "@types/react": "^19.0.0",
                    "@types/react-dom": "^19.0.0",
                    typescript: "^4.0.0",
                },
                main: "/index.tsx",
            }),
        } }),
    main: "/App.tsx",
    environment: "create-react-app",
};

var SOLID_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/App.tsx": {
            code: "import { Component } from \"solid-js\";\n\nconst App: Component = () => {\n  return <h1>Hello world</h1>\n};\n\nexport default App;",
        }, "/index.tsx": {
            code: "import { render } from \"solid-js/web\";\nimport App from \"./App\";\n\nimport \"./styles.css\";\n\nrender(() => <App />, document.getElementById(\"app\"));",
        }, "/index.html": {
            code: "<html>\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset=\"UTF-8\" />\n</head>\n<body>\n  <div id=\"app\"></div>\n  <script src=\"src/index.tsx\"></script>\n</body>\n</html>",
        }, "/package.json": {
            code: JSON.stringify({
                dependencies: {
                    "solid-js": "1.3.15",
                },
                main: "/index.tsx",
            }),
        } }),
    main: "/App.tsx",
    environment: "solid",
};

var SVELTE_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/App.svelte": {
            code: "<style>\n  h1 {\n    font-size: 1.5rem;\n  }\n</style>\n\n<script>\n  let name = 'world';\n</script>\n\n<main>\n  <h1>Hello {name}</h1>\n</main>",
        }, "/index.js": {
            code: "import App from \"./App.svelte\";\nimport \"./styles.css\";\n\nconst app = new App({\n  target: document.body\n});\n\nexport default app;\n      ",
        }, "/public/index.html": {
            code: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n\n    <title>Svelte app</title>\n\n    <link rel=\"stylesheet\" href=\"public/bundle.css\" />\n  </head>\n\n  <body>\n    <script src=\"bundle.js\"></script>\n  </body>\n</html>",
        }, "/package.json": {
            code: JSON.stringify({
                dependencies: {
                    svelte: "^3.0.0",
                },
                main: "/index.js",
            }),
        } }),
    main: "/App.svelte",
    environment: "svelte",
};

var TEST_TYPESCRIPT_TEMPLATE = {
    files: {
        "tsconfig.json": {
            code: "{\n  \"include\": [\n    \"./**/*\"\n  ],\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"lib\": [ \"dom\", \"es2015\" ],\n    \"jsx\": \"react-jsx\"\n  }\n}",
        },
        "/add.ts": {
            code: "export const add = (a: number, b: number): number => a + b;",
        },
        "/add.test.ts": {
            code: "import { add } from './add';\n\ndescribe('add', () => {\n  test('Commutative Law of Addition', () => {\n    expect(add(1, 2)).toBe(add(2, 1));\n  });\n});",
        },
        "package.json": {
            code: JSON.stringify({
                dependencies: {},
                devDependencies: { typescript: "^4.0.0" },
                main: "/add.ts",
            }),
        },
    },
    main: "/add.test.ts",
    environment: "parcel",
    mode: "tests",
};

var VANILLA_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/index.js": {
            code: "import \"./styles.css\";\n\ndocument.getElementById(\"app\").innerHTML = `\n<h1>Hello world</h1>\n`;\n",
        }, "/index.html": {
            code: "<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset=\"UTF-8\" />\n</head>\n\n<body>\n  <div id=\"app\"></div>\n\n  <script src=\"index.js\">\n  </script>\n</body>\n\n</html>",
        }, "/package.json": {
            code: JSON.stringify({
                dependencies: {},
                main: "/index.js",
            }),
        } }),
    main: "/index.js",
    environment: "parcel",
};

var VANILLA_TYPESCRIPT_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "tsconfig.json": {
            code: "{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"module\": \"commonjs\",\n    \"jsx\": \"preserve\",\n    \"esModuleInterop\": true,\n    \"sourceMap\": true,\n    \"allowJs\": true,\n    \"lib\": [\n      \"es6\",\n      \"dom\"\n    ],\n    \"rootDir\": \"src\",\n    \"moduleResolution\": \"node\"\n  }\n}",
        }, "/index.ts": {
            code: "import \"./styles.css\";\n\ndocument.getElementById(\"app\").innerHTML = `\n<h1>Hello world</h1>\n`;\n",
        }, "/index.html": {
            code: "<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset=\"UTF-8\" />\n</head>\n\n<body>\n  <div id=\"app\"></div>\n\n  <script src=\"index.ts\">\n  </script>\n</body>\n\n</html>",
        }, "/package.json": {
            code: JSON.stringify({
                dependencies: {},
                devDependencies: {
                    typescript: "^4.0.0",
                },
                main: "/index.ts",
            }),
        } }),
    main: "/index.ts",
    environment: "parcel",
};

var VUE_TEMPLATE = {
    files: {
        "/src/styles.css": commonFiles["/styles.css"],
        "/src/App.vue": {
            code: "<template>\n  <h1>Hello {{ msg }}</h1>\n</template>\n\n<script setup>\nimport { ref } from 'vue';\nconst msg = ref('world');\n</script>",
        },
        "/src/main.js": {
            code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\";\n\ncreateApp(App).mount('#app')\n",
        },
        "/public/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\" />\n    <title>codesandbox</title>\n  </head>\n  <body>\n    <noscript>\n      <strong\n        >We're sorry but codesandbox doesn't work properly without JavaScript\n        enabled. Please enable it to continue.</strong\n      >\n    </noscript>\n    <div id=\"app\"></div>\n    <!-- built files will be auto injected -->\n  </body>\n</html>\n",
        },
        "/package.json": {
            code: JSON.stringify({
                name: "vue3",
                version: "0.1.0",
                private: true,
                main: "/src/main.js",
                scripts: {
                    serve: "vue-cli-service serve",
                    build: "vue-cli-service build",
                },
                dependencies: {
                    "core-js": "^3.26.1",
                    vue: "^3.2.45",
                },
                devDependencies: {
                    "@vue/cli-plugin-babel": "^5.0.8",
                    "@vue/cli-service": "^5.0.8",
                },
            }),
        },
    },
    main: "/src/App.vue",
    environment: "vue-cli",
};

var VUE_TS_TEMPLATE = {
    files: {
        "/src/styles.css": commonFiles["/styles.css"],
        "/src/App.vue": {
            code: "<template>\n  <h1>Hello {{ msg }}</h1>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\nconst msg = ref<string>('world');\n</script>",
        },
        "/src/main.ts": {
            code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\";\n\ncreateApp(App).mount('#app')\n",
        },
        "/src/shims-vue.d.ts": "/* eslint-disable */\ndeclare module \"*.vue\" {\n  import type { DefineComponent } from \"vue\";\n  const component: DefineComponent<{}, {}, any>;\n  export default component;\n}",
        "/public/index.html": {
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\" />\n    <title>codesandbox</title>\n  </head>\n  <body>\n    <noscript>\n      <strong\n        >We're sorry but codesandbox doesn't work properly without JavaScript\n        enabled. Please enable it to continue.</strong\n      >\n    </noscript>\n    <div id=\"app\"></div>\n    <!-- built files will be auto injected -->\n  </body>\n</html>\n",
        },
        "/package.json": {
            code: JSON.stringify({
                name: "vue3-ts",
                version: "0.1.0",
                private: true,
                main: "/src/main.ts",
                scripts: {
                    serve: "vue-cli-service serve",
                    build: "vue-cli-service build",
                },
                dependencies: {
                    "core-js": "^3.26.1",
                    vue: "^3.2.45",
                },
                devDependencies: {
                    "@vue/cli-plugin-babel": "^5.0.8",
                    "@vue/cli-plugin-typescript": "^5.0.8",
                    "@vue/cli-service": "^5.0.8",
                    typescript: "^4.9.3",
                },
            }),
        },
        "/tsconfig.json": {
            code: JSON.stringify({
                compilerOptions: {
                    target: "esnext",
                    module: "esnext",
                    strict: true,
                    jsx: "preserve",
                    moduleResolution: "node",
                    experimentalDecorators: true,
                    skipLibCheck: true,
                    esModuleInterop: true,
                    allowSyntheticDefaultImports: true,
                    forceConsistentCasingInFileNames: true,
                    useDefineForClassFields: true,
                    sourceMap: false,
                    baseUrl: ".",
                    types: ["webpack-env"],
                    paths: {
                        "@/*": ["src/*"],
                    },
                    lib: ["esnext", "dom", "dom.iterable", "scripthost"],
                },
                include: [
                    "src/**/*.ts",
                    "src/**/*.tsx",
                    "src/**/*.vue",
                    "tests/**/*.ts",
                    "tests/**/*.tsx",
                ],
                exclude: ["node_modules"],
            }),
        },
    },
    main: "/src/App.vue",
    environment: "vue-cli",
};

var STATIC_TEMPLATE = {
    files: __assign(__assign({}, commonFiles), { "/index.html": {
            code: "<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset=\"UTF-8\" />\n  <link rel=\"stylesheet\" href=\"/styles.css\" />\n</head>\n\n<body>\n  <h1>Hello world</h1>\n</body>\n\n</html>",
        }, "/package.json": {
            code: JSON.stringify({
                dependencies: {},
                main: "/index.html",
            }),
        } }),
    main: "/index.html",
    environment: "static",
};

var SANDBOX_TEMPLATES = {
    static: STATIC_TEMPLATE,
    angular: ANGULAR_TEMPLATE,
    react: REACT_TEMPLATE,
    "react-ts": REACT_TYPESCRIPT_TEMPLATE,
    solid: SOLID_TEMPLATE,
    svelte: SVELTE_TEMPLATE,
    "test-ts": TEST_TYPESCRIPT_TEMPLATE,
    "vanilla-ts": VANILLA_TYPESCRIPT_TEMPLATE,
    vanilla: VANILLA_TEMPLATE,
    vue: VUE_TEMPLATE,
    "vue-ts": VUE_TS_TEMPLATE,
    node: NODE_TEMPLATE,
    nextjs: NEXTJS_TEMPLATE,
    vite: VITE_TEMPLATE,
    "vite-react": VITE_REACT_TEMPLATE,
    "vite-react-ts": VITE_REACT_TS_TEMPLATE,
    "vite-preact": VITE_PREACT_TEMPLATE,
    "vite-preact-ts": VITE_PREACT_TS_TEMPLATE,
    "vite-vue": VITE_VUE_TEMPLATE,
    "vite-vue-ts": VITE_VUE_TS_TEMPLATE,
    "vite-svelte": VITE_SVELTE_TEMPLATE,
    "vite-svelte-ts": VITE_SVELTE_TS_TEMPLATE,
    astro: ASTRO_TEMPLATE,
};

/**
 * Creates a standard sandpack state given the setup,
 * options, and files props. Using this function is
 * the reliable way to ensure a consistent and predictable
 * sandpack-content throughout application
 */
var getSandpackStateFromProps = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var normalizedFilesPath = normalizePath(props.files);
    // Merge predefined template with custom setup
    var projectSetup = combineTemplateFilesToSetup({
        template: props.template,
        customSetup: props.customSetup,
        files: normalizedFilesPath,
    });
    // visibleFiles and activeFile override the setup flags
    var visibleFiles = normalizePath((_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.visibleFiles) !== null && _b !== void 0 ? _b : []);
    var activeFile = ((_c = props.options) === null || _c === void 0 ? void 0 : _c.activeFile)
        ? resolveFile((_d = props.options) === null || _d === void 0 ? void 0 : _d.activeFile, projectSetup.files)
        : undefined;
    if (visibleFiles.length === 0 && normalizedFilesPath) {
        // extract open and active files from the custom input files
        Object.keys(normalizedFilesPath).forEach(function (filePath) {
            var file = normalizedFilesPath[filePath];
            if (typeof file === "string") {
                visibleFiles.push(filePath);
                return;
            }
            if (!activeFile && file.active) {
                activeFile = filePath;
                if (file.hidden === true) {
                    // active file needs to be available even if someone sets it as hidden by accident
                    visibleFiles.push(filePath);
                }
            }
            if (!file.hidden) {
                visibleFiles.push(filePath);
            }
        });
    }
    if (visibleFiles.length === 0) {
        // If no files are received, use the project setup / template
        visibleFiles = [projectSetup.main];
    }
    // Make sure it resolves the entry file
    if (projectSetup.entry && !projectSetup.files[projectSetup.entry]) {
        /* eslint-disable */
        // @ts-ignore
        projectSetup.entry = resolveFile(projectSetup.entry, projectSetup.files);
        /* eslint-enable */
    }
    if (!activeFile && projectSetup.main) {
        activeFile = projectSetup.main;
    }
    // If no activeFile is specified, use the first open file
    if (!activeFile || !projectSetup.files[activeFile]) {
        activeFile = visibleFiles[0];
    }
    // If for whatever reason the active path was not set as open, set it
    if (!visibleFiles.includes(activeFile)) {
        visibleFiles.push(activeFile);
    }
    var files = addPackageJSONIfNeeded(projectSetup.files, (_e = projectSetup.dependencies) !== null && _e !== void 0 ? _e : {}, (_f = projectSetup.devDependencies) !== null && _f !== void 0 ? _f : {}, projectSetup.entry);
    var existOpenPath = visibleFiles.filter(function (path) { return files[path]; });
    return {
        visibleFiles: existOpenPath,
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
        activeFile: activeFile,
        files: files,
        environment: projectSetup.environment,
        shouldUpdatePreview: true,
    };
};
/**
 * Given a file tree and a file, it uses a couple of rules
 * to tweak the filename to match with one of the inside of file tree
 *
 * - Adds the leading slash;
 * - Tries to find the same filename with different extensions (js only);
 * - Returns `null` if it doesn't satisfy any rule
 */
var resolveFile = function (path, files) {
    var normalizedFilesPath = normalizePath(files);
    var normalizedPath = normalizePath(path);
    if (normalizedPath in normalizedFilesPath) {
        return normalizedPath;
    }
    if (!path) {
        return null;
    }
    var resolvedPath = null;
    var index = 0;
    var strategies = [".js", ".jsx", ".ts", ".tsx"];
    while (!resolvedPath && index < strategies.length) {
        var removeExtension = normalizedPath.split(".")[0];
        var attemptPath = "".concat(removeExtension).concat(strategies[index]);
        if (normalizedFilesPath[attemptPath] !== undefined) {
            resolvedPath = attemptPath;
        }
        index++;
    }
    return resolvedPath;
};
/**
 * The template is predefined (eg: react, vue, vanilla)
 * The setup can overwrite anything from the template
 * (eg: files, dependencies, environment, etc.)
 */
var combineTemplateFilesToSetup = function (_a) {
    var files = _a.files, template = _a.template, customSetup = _a.customSetup;
    if (!template) {
        // If not input, default to vanilla
        if (!customSetup) {
            var defaultTemplate = SANDBOX_TEMPLATES.vanilla;
            return __assign(__assign({}, defaultTemplate), { files: __assign(__assign({}, defaultTemplate.files), convertedFilesToBundlerFiles(files)) });
        }
        if (!files || Object.keys(files).length === 0) {
            throw new Error("[sandpack-react]: without a template, you must pass at least one file");
        }
        // If not template specified, use the setup entirely
        return __assign(__assign({}, customSetup), { files: convertedFilesToBundlerFiles(files) });
    }
    var baseTemplate = SANDBOX_TEMPLATES[template];
    if (!baseTemplate) {
        throw new Error("[sandpack-react]: invalid template \"".concat(template, "\" provided"));
    }
    // If no setup and not files, the template is used entirely
    if (!customSetup && !files) {
        return baseTemplate;
    }
    // Merge the setup on top of the template
    return {
        /**
         * The input setup might have files in the simple form Record<string, string>
         * so we convert them to the sandbox template format
         */
        files: convertedFilesToBundlerFiles(__assign(__assign({}, baseTemplate.files), files)),
        /**
         * Merge template dependencies and user custom dependencies.
         * As a rule, the custom dependencies must overwrite the template ones.
         */
        dependencies: __assign(__assign({}, baseTemplate.dependencies), customSetup === null || customSetup === void 0 ? void 0 : customSetup.dependencies),
        devDependencies: __assign(__assign({}, baseTemplate.devDependencies), customSetup === null || customSetup === void 0 ? void 0 : customSetup.devDependencies),
        entry: normalizePath(customSetup === null || customSetup === void 0 ? void 0 : customSetup.entry),
        main: baseTemplate.main,
        environment: (customSetup === null || customSetup === void 0 ? void 0 : customSetup.environment) || baseTemplate.environment,
    };
};
/**
 * Transform an regular object, which contain files to
 * an object that sandpack-client can understand
 *
 * From: Record<string, string>
 * To: Record<string, { code: string }>
 */
var convertedFilesToBundlerFiles = function (files) {
    if (!files)
        return {};
    return Object.keys(files).reduce(function (acc, key) {
        if (typeof files[key] === "string") {
            acc[key] = { code: files[key] };
        }
        else {
            acc[key] = files[key];
        }
        return acc;
    }, {});
};

var useAppState = function (props, files) {
    var _a = useState({
        editorState: "pristine",
    }), state = _a[0], setState = _a[1];
    var originalStateFromProps = getSandpackStateFromProps(props);
    var editorState = dequal(originalStateFromProps.files, files)
        ? "pristine"
        : "dirty";
    if (editorState !== state.editorState) {
        setState(function (prev) { return (__assign(__assign({}, prev), { editorState: editorState })); });
    }
    return state;
};

var useSandpackId = function () {
    if (typeof useId === "function") {
        /* eslint-disable-next-line */
        return useId();
    }
    else {
        return generateRandomId();
    }
};
/**
 * This is a hard constraint to make URLs shorter.
 * For example, this id will be used to mount SW in the iframe
 * so, to keep the URL valid, this must be an 9 character long string
 */
var MAX_ID_LENGTH = 9;
var sandpackClientVersion = "2.19.8";
var useAsyncSandpackId = function (files) {
    if (typeof useId === "function") {
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        var reactDomId_1 = useId();
        return function () { return __awaiter(void 0, void 0, void 0, function () {
            var allCode, sha;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allCode = Object.entries(files)
                            .map(function (path, code) { return path + "|" + code; })
                            .join("|||");
                        return [4 /*yield*/, generateShortId(allCode + reactDomId_1 + sandpackClientVersion)];
                    case 1:
                        sha = _a.sent();
                        return [2 /*return*/, ensureLength(sha.replace(/:/g, "sp").replace(/[^a-zA-Z]/g, ""), MAX_ID_LENGTH)];
                }
            });
        }); };
    }
    else {
        return function () { return ensureLength(generateRandomId(), MAX_ID_LENGTH); };
    }
};
function ensureLength(str, length) {
    if (str.length > length) {
        return str.slice(0, length);
    }
    else {
        return str.padEnd(length, "s");
    }
}
function generateShortId(input) {
    return __awaiter(this, void 0, void 0, function () {
        var encoder, data, hashBuffer, hashArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    encoder = new TextEncoder();
                    data = encoder.encode(input);
                    return [4 /*yield*/, crypto.subtle.digest("SHA-256", data)];
                case 1:
                    hashBuffer = _a.sent();
                    hashArray = Array.from(new Uint8Array(hashBuffer));
                    return [2 /*return*/, btoa(String.fromCharCode.apply(String, hashArray))];
            }
        });
    });
}

var BUNDLER_TIMEOUT = 40000;
var useClient = function (_a, filesState) {
    var _b, _c, _d;
    var options = _a.options, customSetup = _a.customSetup, teamId = _a.teamId, sandboxId = _a.sandboxId;
    options !== null && options !== void 0 ? options : (options = {});
    customSetup !== null && customSetup !== void 0 ? customSetup : (customSetup = {});
    var initModeFromProps = (options === null || options === void 0 ? void 0 : options.initMode) || "lazy";
    var _e = useState({
        startRoute: options === null || options === void 0 ? void 0 : options.startRoute,
        bundlerState: undefined,
        error: null,
        initMode: initModeFromProps,
        reactDevTools: undefined,
        status: ((_b = options === null || options === void 0 ? void 0 : options.autorun) !== null && _b !== void 0 ? _b : true) ? "initial" : "idle",
    }), state = _e[0], setState = _e[1];
    var intersectionObserverCallback = useRef();
    var intersectionObserver = useRef(null);
    var lazyAnchorRef = useRef(null);
    var registeredIframes = useRef({});
    var clients = useRef({});
    var timeoutHook = useRef(null);
    var unsubscribeClientListeners = useRef({});
    var unsubscribe = useRef();
    var queuedListeners = useRef({ global: {} });
    var debounceHook = useRef();
    var prevEnvironment = useRef(filesState.environment);
    var asyncSandpackId = useAsyncSandpackId(filesState.files);
    /**
     * Callbacks
     */
    var createClient = useCallback(function (iframe, clientId, clientPropsOverride) { return __awaiter(void 0, void 0, void 0, function () {
        var timeOut, shouldSetTimeout, getStableServiceWorkerId, client, _a, _b, globalListeners;
        var _c;
        var _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    // Clean up any existing clients that
                    // have been created with the given id
                    if (clients.current[clientId]) {
                        clients.current[clientId].destroy();
                    }
                    options !== null && options !== void 0 ? options : (options = {});
                    customSetup !== null && customSetup !== void 0 ? customSetup : (customSetup = {});
                    timeOut = (_d = options === null || options === void 0 ? void 0 : options.bundlerTimeOut) !== null && _d !== void 0 ? _d : BUNDLER_TIMEOUT;
                    if (timeoutHook.current) {
                        clearTimeout(timeoutHook.current);
                    }
                    shouldSetTimeout = typeof unsubscribe.current !== "function";
                    if (shouldSetTimeout) {
                        timeoutHook.current = setTimeout(function () {
                            unregisterAllClients();
                            setState(function (prev) { return (__assign(__assign({}, prev), { status: "timeout" })); });
                        }, timeOut);
                    }
                    getStableServiceWorkerId = function () { return __awaiter(void 0, void 0, void 0, function () {
                        var key, fixedId;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(options === null || options === void 0 ? void 0 : options.experimental_enableStableServiceWorkerId)) return [3 /*break*/, 3];
                                    key = "SANDPACK_INTERNAL:URL-CONSISTENT-ID";
                                    fixedId = localStorage.getItem(key);
                                    if (!!fixedId) return [3 /*break*/, 2];
                                    return [4 /*yield*/, asyncSandpackId()];
                                case 1:
                                    fixedId = _a.sent();
                                    localStorage.setItem(key, fixedId);
                                    _a.label = 2;
                                case 2: return [2 /*return*/, fixedId];
                                case 3: return [4 /*yield*/, asyncSandpackId()];
                                case 4: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); };
                    _a = loadSandpackClient;
                    _b = [iframe,
                        {
                            files: filesState.files,
                            template: filesState.environment,
                        }];
                    _c = {
                        externalResources: options.externalResources,
                        bundlerURL: options.bundlerURL,
                        startRoute: (_e = clientPropsOverride === null || clientPropsOverride === void 0 ? void 0 : clientPropsOverride.startRoute) !== null && _e !== void 0 ? _e : options.startRoute,
                        fileResolver: options.fileResolver,
                        skipEval: (_f = options.skipEval) !== null && _f !== void 0 ? _f : false,
                        logLevel: options.logLevel,
                        showOpenInCodeSandbox: false,
                        showErrorScreen: true,
                        showLoadingScreen: false,
                        reactDevTools: state.reactDevTools,
                        customNpmRegistries: customSetup === null || customSetup === void 0 ? void 0 : customSetup.npmRegistries,
                        teamId: teamId,
                        experimental_enableServiceWorker: !!(options === null || options === void 0 ? void 0 : options.experimental_enableServiceWorker)
                    };
                    return [4 /*yield*/, getStableServiceWorkerId()];
                case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([(_c.experimental_stableServiceWorkerId = _g.sent(),
                            _c.sandboxId = sandboxId,
                            _c)]))];
                case 2:
                    client = _g.sent();
                    if (typeof unsubscribe.current !== "function") {
                        unsubscribe.current = client.listen(handleMessage);
                    }
                    unsubscribeClientListeners.current[clientId] =
                        unsubscribeClientListeners.current[clientId] || {};
                    /**
                     * Register any potential listeners that subscribed before sandpack ran
                     */
                    if (queuedListeners.current[clientId]) {
                        Object.keys(queuedListeners.current[clientId]).forEach(function (listenerId) {
                            var listener = queuedListeners.current[clientId][listenerId];
                            var unsubscribe = client.listen(listener);
                            unsubscribeClientListeners.current[clientId][listenerId] =
                                unsubscribe;
                        });
                        // Clear the queued listeners after they were registered
                        queuedListeners.current[clientId] = {};
                    }
                    globalListeners = Object.entries(queuedListeners.current.global);
                    globalListeners.forEach(function (_a) {
                        var listenerId = _a[0], listener = _a[1];
                        var unsubscribe = client.listen(listener);
                        unsubscribeClientListeners.current[clientId][listenerId] = unsubscribe;
                        /**
                         * Important: Do not clean the global queue
                         * Instead of cleaning the queue, keep it there for the
                         * following clients that might be created
                         */
                    });
                    clients.current[clientId] = client;
                    return [2 /*return*/];
            }
        });
    }); }, [filesState.environment, filesState.files, state.reactDevTools]);
    var unregisterAllClients = useCallback(function () {
        Object.keys(clients.current).map(unregisterBundler);
        if (typeof unsubscribe.current === "function") {
            unsubscribe.current();
            unsubscribe.current = undefined;
        }
    }, []);
    var runSandpack = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(Object.entries(registeredIframes.current).map(function (_a) {
                        var clientId = _a[0], _b = _a[1], iframe = _b.iframe, _c = _b.clientPropsOverride, clientPropsOverride = _c === void 0 ? {} : _c;
                        return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0: return [4 /*yield*/, createClient(iframe, clientId, clientPropsOverride)];
                                    case 1:
                                        _d.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }))];
                case 1:
                    _a.sent();
                    setState(function (prev) { return (__assign(__assign({}, prev), { error: null, status: "running" })); });
                    return [2 /*return*/];
            }
        });
    }); }, [createClient]);
    intersectionObserverCallback.current = function (entries) {
        if (entries.some(function (entry) { return entry.isIntersecting; })) {
            runSandpack();
        }
        else {
            unregisterAllClients();
        }
    };
    var initializeSandpackIframe = useCallback(function () {
        var _a, _b, _c;
        var autorun = (_a = options === null || options === void 0 ? void 0 : options.autorun) !== null && _a !== void 0 ? _a : true;
        if (!autorun) {
            return;
        }
        var observerOptions = (_b = options === null || options === void 0 ? void 0 : options.initModeObserverOptions) !== null && _b !== void 0 ? _b : {
            rootMargin: "1000px 0px",
        };
        if (intersectionObserver.current && lazyAnchorRef.current) {
            (_c = intersectionObserver.current) === null || _c === void 0 ? void 0 : _c.unobserve(lazyAnchorRef.current);
        }
        if (lazyAnchorRef.current && state.initMode === "lazy") {
            // If any component registered a lazy anchor ref component, use that for the intersection observer
            intersectionObserver.current = new IntersectionObserver(function (entries) {
                var _a, _b;
                if (entries.some(function (entry) { return entry.isIntersecting; })) {
                    // Trigger it once
                    if (entries.some(function (entry) { return entry.isIntersecting; }) &&
                        lazyAnchorRef.current) {
                        (_a = intersectionObserverCallback.current) === null || _a === void 0 ? void 0 : _a.call(intersectionObserverCallback, entries);
                        (_b = intersectionObserver.current) === null || _b === void 0 ? void 0 : _b.unobserve(lazyAnchorRef.current);
                    }
                }
            }, observerOptions);
            intersectionObserver.current.observe(lazyAnchorRef.current);
        }
        else if (lazyAnchorRef.current && state.initMode === "user-visible") {
            intersectionObserver.current = new IntersectionObserver(function (entries) {
                var _a;
                (_a = intersectionObserverCallback.current) === null || _a === void 0 ? void 0 : _a.call(intersectionObserverCallback, entries);
            }, observerOptions);
            intersectionObserver.current.observe(lazyAnchorRef.current);
        }
        else {
            runSandpack();
        }
    }, [
        options === null || options === void 0 ? void 0 : options.autorun,
        options === null || options === void 0 ? void 0 : options.initModeObserverOptions,
        runSandpack,
        state.initMode,
        unregisterAllClients,
    ]);
    var registerBundler = useCallback(function (iframe, clientId, clientPropsOverride) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Store the iframe info so it can be
                    // used later to manually run sandpack
                    registeredIframes.current[clientId] = {
                        iframe: iframe,
                        clientPropsOverride: clientPropsOverride,
                    };
                    if (!(state.status === "running")) return [3 /*break*/, 2];
                    return [4 /*yield*/, createClient(iframe, clientId, clientPropsOverride)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [createClient, state.status]);
    var unregisterBundler = function (clientId) {
        var _a, _b;
        var client = clients.current[clientId];
        if (client) {
            client.destroy();
            (_a = client.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.location.replace("about:blank");
            client.iframe.removeAttribute("src");
            delete clients.current[clientId];
        }
        else {
            delete registeredIframes.current[clientId];
        }
        if (timeoutHook.current) {
            clearTimeout(timeoutHook.current);
        }
        var unsubscribeQueuedClients = Object.values((_b = unsubscribeClientListeners.current[clientId]) !== null && _b !== void 0 ? _b : {});
        // Unsubscribing all listener registered
        unsubscribeQueuedClients.forEach(function (listenerOfClient) {
            var listenerFunctions = Object.values(listenerOfClient);
            listenerFunctions.forEach(function (unsubscribe) { return unsubscribe(); });
        });
        // Keep running if it still have clients
        var status = Object.keys(clients.current).length > 0 ? "running" : "idle";
        setState(function (prev) { return (__assign(__assign({}, prev), { status: status })); });
    };
    var handleMessage = function (msg) {
        if (msg.type === "start") {
            setState(function (prev) { return (__assign(__assign({}, prev), { error: null })); });
        }
        else if (msg.type === "state") {
            setState(function (prev) { return (__assign(__assign({}, prev), { bundlerState: msg.state })); });
        }
        else if ((msg.type === "done" && !msg.compilatonError) ||
            msg.type === "connected") {
            if (timeoutHook.current) {
                clearTimeout(timeoutHook.current);
            }
            setState(function (prev) { return (__assign(__assign({}, prev), { error: null })); });
        }
        else if (msg.type === "action" && msg.action === "show-error") {
            if (timeoutHook.current) {
                clearTimeout(timeoutHook.current);
            }
            setState(function (prev) { return (__assign(__assign({}, prev), { error: extractErrorDetails(msg) })); });
        }
        else if (msg.type === "action" &&
            msg.action === "notification" &&
            msg.notificationType === "error") {
            setState(function (prev) { return (__assign(__assign({}, prev), { error: { message: msg.title } })); });
        }
    };
    var registerReactDevTools = function (value) {
        setState(function (prev) { return (__assign(__assign({}, prev), { reactDevTools: value })); });
    };
    var recompileMode = (_c = options === null || options === void 0 ? void 0 : options.recompileMode) !== null && _c !== void 0 ? _c : "delayed";
    var recompileDelay = (_d = options === null || options === void 0 ? void 0 : options.recompileDelay) !== null && _d !== void 0 ? _d : 200;
    var dispatchMessage = function (message, clientId) {
        if (state.status !== "running") {
            console.warn("[sandpack-react]: dispatch cannot be called while in idle mode");
            return;
        }
        if (clientId) {
            clients.current[clientId].dispatch(message);
        }
        else {
            Object.values(clients.current).forEach(function (client) {
                client.dispatch(message);
            });
        }
    };
    var addListener = function (listener, clientId) {
        if (clientId) {
            if (clients.current[clientId]) {
                var unsubscribeListener = clients.current[clientId].listen(listener);
                return unsubscribeListener;
            }
            else {
                /**
                 * When listeners are added before the client is instantiated, they are stored with an unique id
                 * When the client is eventually instantiated, the listeners are registered on the spot
                 * Their unsubscribe functions are stored in unsubscribeClientListeners for future cleanup
                 */
                var listenerId_1 = generateRandomId();
                queuedListeners.current[clientId] =
                    queuedListeners.current[clientId] || {};
                unsubscribeClientListeners.current[clientId] =
                    unsubscribeClientListeners.current[clientId] || {};
                queuedListeners.current[clientId][listenerId_1] = listener;
                var unsubscribeListener = function () {
                    if (queuedListeners.current[clientId][listenerId_1]) {
                        /**
                         * Unsubscribe was called before the client was instantiated
                         * common example - a component with autorun=false that unmounted
                         */
                        delete queuedListeners.current[clientId][listenerId_1];
                    }
                    else if (unsubscribeClientListeners.current[clientId][listenerId_1]) {
                        /**
                         * unsubscribe was called for a listener that got added before the client was instantiated
                         * call the unsubscribe function and remove it from memory
                         */
                        unsubscribeClientListeners.current[clientId][listenerId_1]();
                        delete unsubscribeClientListeners.current[clientId][listenerId_1];
                    }
                };
                return unsubscribeListener;
            }
        }
        else {
            // Push to the **global** queue
            var listenerId_2 = generateRandomId();
            queuedListeners.current.global[listenerId_2] = listener;
            // Add to the current clients
            var clientsList = Object.values(clients.current);
            var currentClientUnsubscribeListeners_1 = clientsList.map(function (client) {
                return client.listen(listener);
            });
            var unsubscribeListener = function () {
                // Unsubscribing from the clients already created
                currentClientUnsubscribeListeners_1.forEach(function (unsubscribe) {
                    return unsubscribe();
                });
                delete queuedListeners.current.global[listenerId_2];
                // Unsubscribe in case it was added later from `global`
                Object.values(unsubscribeClientListeners.current).forEach(function (client) {
                    var _a;
                    (_a = client === null || client === void 0 ? void 0 : client[listenerId_2]) === null || _a === void 0 ? void 0 : _a.call(client);
                });
            };
            return unsubscribeListener;
        }
    };
    /**
     * Effects
     */
    useEffect(function watchFileChanges() {
        if (state.status !== "running" || !filesState.shouldUpdatePreview) {
            return;
        }
        /**
         * When the environment changes, Sandpack needs to make sure
         * to create a new client and the proper bundler
         */
        if (prevEnvironment.current !== filesState.environment) {
            prevEnvironment.current = filesState.environment;
            Object.entries(clients.current).forEach(function (_a) {
                var key = _a[0], client = _a[1];
                registerBundler(client.iframe, key);
            });
        }
        if (recompileMode === "immediate") {
            Object.values(clients.current).forEach(function (client) {
                /**
                 * Avoid concurrency
                 */
                if (client.status === "done") {
                    client.updateSandbox({
                        files: filesState.files,
                        template: filesState.environment,
                    });
                }
            });
        }
        if (recompileMode === "delayed") {
            if (typeof window === "undefined")
                return;
            window.clearTimeout(debounceHook.current);
            debounceHook.current = window.setTimeout(function () {
                Object.values(clients.current).forEach(function (client) {
                    /**
                     * Avoid concurrency
                     */
                    if (client.status === "done") {
                        client.updateSandbox({
                            files: filesState.files,
                            template: filesState.environment,
                        });
                    }
                });
            }, recompileDelay);
        }
        return function () {
            window.clearTimeout(debounceHook.current);
        };
    }, [
        filesState.files,
        filesState.environment,
        filesState.shouldUpdatePreview,
        recompileDelay,
        recompileMode,
        registerBundler,
        state.status,
    ]);
    useEffect(function watchInitMode() {
        if (initModeFromProps !== state.initMode) {
            setState(function (prev) { return (__assign(__assign({}, prev), { initMode: initModeFromProps })); });
            initializeSandpackIframe();
        }
    }, [initModeFromProps, initializeSandpackIframe, state.initMode]);
    useEffect(function () {
        return function unmountClient() {
            if (typeof unsubscribe.current === "function") {
                unsubscribe.current();
            }
            if (timeoutHook.current) {
                clearTimeout(timeoutHook.current);
            }
            if (debounceHook.current) {
                clearTimeout(debounceHook.current);
            }
            if (intersectionObserver.current) {
                intersectionObserver.current.disconnect();
            }
        };
    }, []);
    return [
        state,
        {
            clients: clients.current,
            initializeSandpackIframe: initializeSandpackIframe,
            runSandpack: runSandpack,
            registerBundler: registerBundler,
            unregisterBundler: unregisterBundler,
            registerReactDevTools: registerReactDevTools,
            addListener: addListener,
            dispatchMessage: dispatchMessage,
            lazyAnchorRef: lazyAnchorRef,
            unsubscribeClientListenersRef: unsubscribeClientListeners,
            queuedListenersRef: queuedListeners,
        },
    ];
};

var useFiles = function (props) {
    var originalStateFromProps = getSandpackStateFromProps(props);
    var _a = useState(originalStateFromProps), state = _a[0], setState = _a[1];
    var isMountedRef = useRef(false);
    useEffect(function () {
        if (isMountedRef.current) {
            setState(getSandpackStateFromProps(props));
        }
        else {
            isMountedRef.current = true;
        }
    }, [props.files, props.customSetup, props.template]);
    var updateFile = function (pathOrFiles, code, shouldUpdatePreview) {
        if (shouldUpdatePreview === void 0) { shouldUpdatePreview = true; }
        setState(function (prev) {
            var _a;
            var files = prev.files;
            if (typeof pathOrFiles === "string" && typeof code === "string") {
                files = __assign(__assign({}, files), (_a = {}, _a[pathOrFiles] = __assign(__assign({}, files[pathOrFiles]), { code: code }), _a));
            }
            else if (typeof pathOrFiles === "object") {
                files = __assign(__assign({}, files), convertedFilesToBundlerFiles(pathOrFiles));
            }
            return __assign(__assign({}, prev), { files: normalizePath(files), shouldUpdatePreview: shouldUpdatePreview });
        });
    };
    var operations = {
        openFile: function (path) {
            setState(function (_a) {
                var visibleFiles = _a.visibleFiles, rest = __rest(_a, ["visibleFiles"]);
                var newPaths = visibleFiles.includes(path)
                    ? visibleFiles
                    : __spreadArray(__spreadArray([], visibleFiles, true), [path], false);
                return __assign(__assign({}, rest), { activeFile: path, visibleFiles: newPaths });
            });
        },
        resetFile: function (path) {
            setState(function (prevState) {
                var _a;
                return (__assign(__assign({}, prevState), { files: __assign(__assign({}, prevState.files), (_a = {}, _a[path] = originalStateFromProps.files[path], _a)) }));
            });
        },
        resetAllFiles: function () {
            setState(function (prev) { return (__assign(__assign({}, prev), { files: originalStateFromProps.files })); });
        },
        setActiveFile: function (activeFile) {
            if (state.files[activeFile]) {
                setState(function (prev) { return (__assign(__assign({}, prev), { activeFile: activeFile })); });
            }
        },
        updateCurrentFile: function (code, shouldUpdatePreview) {
            if (shouldUpdatePreview === void 0) { shouldUpdatePreview = true; }
            updateFile(state.activeFile, code, shouldUpdatePreview);
        },
        updateFile: updateFile,
        addFile: updateFile,
        closeFile: function (path) {
            if (state.visibleFiles.length === 1) {
                return;
            }
            setState(function (_a) {
                var visibleFiles = _a.visibleFiles, activeFile = _a.activeFile, prev = __rest(_a, ["visibleFiles", "activeFile"]);
                var indexOfRemovedPath = visibleFiles.indexOf(path);
                var newPaths = visibleFiles.filter(function (openPath) { return openPath !== path; });
                return __assign(__assign({}, prev), { activeFile: path === activeFile
                        ? indexOfRemovedPath === 0
                            ? visibleFiles[1]
                            : visibleFiles[indexOfRemovedPath - 1]
                        : activeFile, visibleFiles: newPaths });
            });
        },
        deleteFile: function (path, shouldUpdatePreview) {
            if (shouldUpdatePreview === void 0) { shouldUpdatePreview = true; }
            setState(function (_a) {
                var visibleFiles = _a.visibleFiles, files = _a.files, activeFile = _a.activeFile, rest = __rest(_a, ["visibleFiles", "files", "activeFile"]);
                var newFiles = __assign({}, files);
                delete newFiles[path];
                var remainingVisibleFiles = visibleFiles.filter(function (openPath) { return openPath !== path; });
                var deletedLastVisibleFile = remainingVisibleFiles.length === 0;
                if (deletedLastVisibleFile) {
                    var nextFile = Object.keys(files)[Object.keys(files).length - 1];
                    return __assign(__assign({}, rest), { visibleFiles: [nextFile], activeFile: nextFile, files: newFiles, shouldUpdatePreview: shouldUpdatePreview });
                }
                return __assign(__assign({}, rest), { visibleFiles: remainingVisibleFiles, activeFile: path === activeFile
                        ? remainingVisibleFiles[remainingVisibleFiles.length - 1]
                        : activeFile, files: newFiles, shouldUpdatePreview: shouldUpdatePreview });
            });
        },
    };
    return [
        __assign(__assign({}, state), { visibleFilesFromProps: originalStateFromProps.visibleFiles }),
        operations,
    ];
};

var Sandpack$1 = React.createContext(null);
var SandpackProvider = function (props) {
    var _a, _b, _c;
    var children = props.children, options = props.options, style = props.style, className = props.className, theme = props.theme;
    var _d = useFiles(props), fileState = _d[0], fileOperations = _d[1];
    var _e = useClient(props, fileState), clientState = _e[0], _f = _e[1], dispatchMessage = _f.dispatchMessage, addListener = _f.addListener, clientOperations = __rest(_f, ["dispatchMessage", "addListener"]);
    var appState = useAppState(props, fileState.files);
    React.useEffect(function () {
        clientOperations.initializeSandpackIframe();
    }, []);
    return (jsx(Sandpack$1.Provider, { value: __assign(__assign(__assign(__assign(__assign(__assign({}, fileState), clientState), appState), fileOperations), clientOperations), { autoReload: (_b = (_a = props.options) === null || _a === void 0 ? void 0 : _a.autoReload) !== null && _b !== void 0 ? _b : true, teamId: props === null || props === void 0 ? void 0 : props.teamId, exportOptions: (_c = props === null || props === void 0 ? void 0 : props.customSetup) === null || _c === void 0 ? void 0 : _c.exportOptions, listen: addListener, dispatch: dispatchMessage }), children: jsx(ClassNamesProvider, { classes: options === null || options === void 0 ? void 0 : options.classes, children: jsx(SandpackThemeProvider, { className: className, style: style, theme: theme, children: children }) }) }));
};
/**
 * @category Provider
 */
var SandpackConsumer = Sandpack$1.Consumer;

/**
 * @category Hooks
 */
function useSandpack() {
    var sandpack = React.useContext(Sandpack$1);
    if (sandpack === null) {
        throw new Error("[sandpack-react]: \"useSandpack\" must be wrapped by a \"SandpackProvider\"");
    }
    var dispatch = sandpack.dispatch, listen = sandpack.listen, rest = __rest(sandpack, ["dispatch", "listen"]);
    return {
        sandpack: __assign({}, rest),
        dispatch: dispatch,
        listen: listen,
    };
}

/**
 * This returns the current state of the active file
 * and a method to update its content.
 *
 * @category Hooks
 */
var useActiveCode = function () {
    var _a, _b, _c;
    var sandpack = useSandpack().sandpack;
    return {
        code: (_a = sandpack.files[sandpack.activeFile]) === null || _a === void 0 ? void 0 : _a.code,
        readOnly: (_c = (_b = sandpack.files[sandpack.activeFile]) === null || _b === void 0 ? void 0 : _b.readOnly) !== null && _c !== void 0 ? _c : false,
        updateCode: sandpack.updateCurrentFile,
    };
};

var _a$8, _b$2, _c;
var iconStandaloneClassName = css({
    svg: { margin: "auto" },
});
var buttonClassName = css((_a$8 = {
        appearance: "none",
        outline: "none",
        display: "flex",
        alignItems: "center",
        fontSize: "inherit",
        fontFamily: "inherit",
        backgroundColor: "transparent",
        transition: "color $default, background $default",
        cursor: "pointer",
        color: "$colors$clickable",
        border: 0,
        textDecoration: "none",
        "&:disabled": { color: "$colors$disabled" },
        "&:hover:not(:disabled,[data-active='true'])": { color: "$colors$hover" },
        '&[data-active="true"]': { color: "$colors$accent" },
        svg: {
            minWidth: "$space$4",
            width: "$space$4",
            height: "$space$4",
        }
    },
    _a$8["&.".concat(iconStandaloneClassName)] = {
        padding: "$space$1",
        height: "$space$7",
        display: "flex",
    },
    // If there's a children besides the icon
    _a$8["&.".concat(iconStandaloneClassName, "&:not(:has(span))")] = {
        width: "$space$7",
    },
    _a$8["&.".concat(iconStandaloneClassName, "&:has(svg + span)")] = {
        paddingRight: "$space$3",
        paddingLeft: "$space$2",
        gap: "$space$1",
    },
    _a$8));
var roundedButtonClassName = css({
    backgroundColor: "$colors$surface2",
    borderRadius: "99999px",
    border: "1px solid $colors$surface3",
    '&[data-active="true"]': {
        color: "$colors$surface1",
        background: "$colors$accent",
    },
    "&:hover:not(:disabled,[data-active='true'])": {
        backgroundColor: "$colors$surface3",
    },
});
var iconClassName = css({ padding: 0 });
var fadeIn = keyframes({
    "0%": {
        opacity: 0,
    },
    "100%": {
        opacity: 1,
    },
});
var absoluteClassName = css({
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    top: "0",
    margin: "0",
    overflow: "auto",
    height: "100%",
    zIndex: "$top",
});
var errorClassName = css((_b$2 = {
        whiteSpace: "pre-wrap",
        padding: "$space$10",
        backgroundColor: "$colors$surface1",
        display: "flex",
        gap: "$space$2",
        flexDirection: "column"
    },
    _b$2[".".concat(buttonClassName)] = {
        width: "auto",
        gap: "$space$2",
        padding: "0 $space$3 0 $space$2",
        marginTop: "$space$1",
    },
    _b$2.variants = {
        solidBg: {
            true: {
                backgroundColor: "$colors$errorSurface",
            },
        },
    },
    _b$2));
var errorBundlerClassName = css((_c = {
        padding: "$space$10",
        backgroundColor: "$colors$surface1"
    },
    _c[".".concat(buttonClassName)] = {
        marginTop: "$space$6",
        width: "auto",
        gap: "$space$2",
        padding: "0 $space$3 0 $space$2",
    },
    _c));
var errorMessageClassName = css({
    animation: "".concat(fadeIn, " 150ms ease"),
    color: "$colors$error",
    display: "flex",
    flexDirection: "column",
    gap: "$space$3",
    variants: {
        errorCode: { true: { fontFamily: "$font$mono" } },
    },
    a: {
        color: "inherit",
    },
    p: {
        margin: 0,
    },
});

var _a$7;
var tabsClassName = css({
    borderBottom: "1px solid $colors$surface2",
    background: "$colors$surface1",
});
var tabsScrollableClassName = css({
    padding: "0 $space$2",
    overflow: "auto",
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "stretch",
    minHeight: "40px",
    marginBottom: "-1px",
});
var tabContainer = css({
    display: "flex",
    alignItems: "center",
    outline: "none",
    position: "relative",
    paddingRight: "20px",
    margin: "1px 0",
    "&:has(button:focus)": {
        outline: "$colors$accent auto 1px",
    },
});
var closeButtonClassName = css({
    padding: "0 $space$1 0 $space$1",
    borderRadius: "$border$radius",
    marginLeft: "$space$1",
    width: "$space$5",
    visibility: "hidden",
    cursor: "pointer",
    position: "absolute",
    right: "0px",
    svg: {
        width: "$space$3",
        height: "$space$3",
        display: "block",
        position: "relative",
        top: 1,
    },
});
var tabButton = css((_a$7 = {
        padding: "0 $space$2",
        height: "$layout$headerHeight",
        whiteSpace: "nowrap",
        "&:focus": {
            outline: "none",
        }
    },
    _a$7["&:hover ~ .".concat(closeButtonClassName)] = { visibility: "visible" },
    _a$7));
/**
 * FileTabs is a list of all open files, the active file, and its state.
 */
var FileTabs = function (_a) {
    var closableTabs = _a.closableTabs, className = _a.className, activeFileUniqueId = _a.activeFileUniqueId, props = __rest(_a, ["closableTabs", "className", "activeFileUniqueId"]);
    var sandpack = useSandpack().sandpack;
    var classNames = useClassNames();
    var activeFile = sandpack.activeFile, visibleFiles = sandpack.visibleFiles, setActiveFile = sandpack.setActiveFile;
    var _b = React.useState(null), hoveredIndex = _b[0], setIsHoveredIndex = _b[1];
    var getTriggerText = function (currentPath) {
        var documentFileName = getFileName(currentPath);
        var pathsWithDuplicateFileNames = visibleFiles.reduce(function (prev, curr) {
            if (curr === currentPath) {
                return prev;
            }
            var fileName = getFileName(curr);
            if (fileName === documentFileName) {
                prev.push(curr);
                return prev;
            }
            return prev;
        }, []);
        if (pathsWithDuplicateFileNames.length === 0) {
            return documentFileName;
        }
        else {
            return calculateNearestUniquePath(currentPath, pathsWithDuplicateFileNames);
        }
    };
    var onKeyDown = function (_a) {
        var _b, _c, _d, _e;
        var e = _a.e, index = _a.index;
        var target = e.currentTarget;
        switch (e.key) {
            case "ArrowLeft":
                {
                    var leftSibling = target.previousElementSibling;
                    if (leftSibling) {
                        (_b = leftSibling.querySelector("button")) === null || _b === void 0 ? void 0 : _b.focus();
                        setActiveFile(visibleFiles[index - 1]);
                    }
                }
                break;
            case "ArrowRight":
                {
                    var rightSibling = target.nextElementSibling;
                    if (rightSibling) {
                        (_c = rightSibling.querySelector("button")) === null || _c === void 0 ? void 0 : _c.focus();
                        setActiveFile(visibleFiles[index + 1]);
                    }
                }
                break;
            case "Home": {
                var parent_1 = target.parentElement;
                var firstChild = parent_1.firstElementChild;
                (_d = firstChild.querySelector("button")) === null || _d === void 0 ? void 0 : _d.focus();
                setActiveFile(visibleFiles[0]);
                break;
            }
            case "End": {
                var parent_2 = target.parentElement;
                var lastChild = parent_2.lastElementChild;
                (_e = lastChild.querySelector("button")) === null || _e === void 0 ? void 0 : _e.focus();
                setActiveFile(visibleFiles[-1]);
                break;
            }
        }
    };
    return (jsx("div", __assign({ className: classNames("tabs", [tabsClassName, className]), translate: "no" }, props, { children: jsx("div", { "aria-label": "Select active file", className: classNames("tabs-scrollable-container", [
                tabsScrollableClassName,
            ]), role: "tablist", children: visibleFiles.map(function (filePath, index) { return (jsxs("div", { "aria-controls": "".concat(filePath, "-").concat(activeFileUniqueId, "-tab-panel"), "aria-selected": filePath === activeFile, className: classNames("tab-container", [tabContainer]), onKeyDown: function (e) { return onKeyDown({ e: e, index: index }); }, onMouseEnter: function () { return setIsHoveredIndex(index); }, onMouseLeave: function () { return setIsHoveredIndex(null); }, role: "tab", children: [jsx("button", { className: classNames("tab-button", [buttonClassName, tabButton]), "data-active": filePath === activeFile, id: "".concat(filePath, "-").concat(activeFileUniqueId, "-tab"), onClick: function () { return setActiveFile(filePath); }, tabIndex: filePath === activeFile ? 0 : -1, title: filePath, type: "button", children: getTriggerText(filePath) }), closableTabs && visibleFiles.length > 1 && (jsx("span", { className: classNames("close-button", [closeButtonClassName]), onClick: function (ev) {
                            ev.stopPropagation();
                            sandpack.closeFile(filePath);
                        }, style: {
                            visibility: filePath === activeFile || hoveredIndex === index
                                ? "visible"
                                : "hidden",
                        }, tabIndex: filePath === activeFile ? 0 : -1, children: jsx(CloseIcon, {}) }))] }, filePath)); }) }) })));
};

var RoundedButton = function (_a) {
    var onClick = _a.onClick, className = _a.className, children = _a.children;
    var classNames = useClassNames();
    return (jsx("button", { className: classNames("button", [
            classNames("icon-standalone"),
            buttonClassName,
            iconStandaloneClassName,
            roundedButtonClassName,
            className,
        ]), onClick: onClick, type: "button", children: children }));
};

var runButtonClassName = css({
    position: "absolute",
    bottom: "$space$2",
    right: "$space$2",
    paddingRight: "$space$3",
});
var RunButton$1 = function (_a) {
    _a.className; var onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    var sandpack = useSandpack().sandpack;
    return (jsxs(RoundedButton, __assign({ className: runButtonClassName.toString(), onClick: function (event) {
            sandpack.runSandpack();
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
        } }, props, { children: [jsx(RunIcon, {}), jsx("span", { children: "Run" })] })));
};

var _a$6;
var stackClassName = css((_a$6 = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
        backgroundColor: "$colors$surface1",
        gap: 1
    },
    _a$6["&:has(.".concat(THEME_PREFIX, "-stack)")] = {
        backgroundColor: "$colors$surface2",
    },
    _a$6));
var SandpackStack = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classNames = useClassNames();
    return (jsx("div", __assign({ className: classNames("stack", [stackClassName, className]) }, props)));
};

/**
 * @category Hooks
 */
var useSandpackTheme = function () {
    var _a = React.useContext(SandpackThemeContext), theme = _a.theme, id = _a.id, mode = _a.mode;
    return { theme: theme, themeId: id, themeMode: mode };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
var shallowEqual = function (a, b) {
    if (a.length !== b.length)
        return false;
    var result = true;
    for (var index = 0; index < a.length; index++) {
        if (a[index] !== b[index]) {
            result = false;
            break;
        }
    }
    return result;
};

var getCodeMirrorPosition = function (doc, _a) {
    var line = _a.line, column = _a.column;
    return doc.line(line).from + (column !== null && column !== void 0 ? column : 0) - 1;
};
var getEditorTheme = function () {
    return EditorView.theme({
        "&": {
            backgroundColor: "var(--".concat(THEME_PREFIX, "-colors-surface1)"),
            color: "var(--".concat(THEME_PREFIX, "-syntax-color-plain)"),
            height: "100%",
        },
        ".cm-matchingBracket, .cm-nonmatchingBracket, &.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
            color: "inherit",
            backgroundColor: "rgba(128,128,128,.25)",
            backgroundBlendMode: "difference",
        },
        "&.cm-editor.cm-focused": {
            outline: "none",
        },
        "& .cm-activeLine": {
            backgroundColor: "transparent",
        },
        "&.cm-editor.cm-focused .cm-activeLine": {
            backgroundColor: "var(--".concat(THEME_PREFIX, "-colors-surface3)"),
            borderRadius: "var(--".concat(THEME_PREFIX, "-border-radius)"),
        },
        ".cm-errorLine": {
            backgroundColor: "var(--".concat(THEME_PREFIX, "-colors-errorSurface)"),
            borderRadius: "var(--".concat(THEME_PREFIX, "-border-radius)"),
        },
        ".cm-content": {
            caretColor: "var(--".concat(THEME_PREFIX, "-colors-accent)"),
            padding: "0 var(--".concat(THEME_PREFIX, "-space-4)"),
        },
        ".cm-scroller": {
            fontFamily: "var(--".concat(THEME_PREFIX, "-font-mono)"),
            lineHeight: "var(--".concat(THEME_PREFIX, "-font-lineHeight)"),
        },
        ".cm-gutters": {
            backgroundColor: "var(--".concat(THEME_PREFIX, "-colors-surface1)"),
            color: "var(--".concat(THEME_PREFIX, "-colors-disabled)"),
            border: "none",
            paddingLeft: "var(--".concat(THEME_PREFIX, "-space-1)"),
        },
        ".cm-gutter.cm-lineNumbers": {
            fontSize: ".6em",
        },
        ".cm-lineNumbers .cm-gutterElement": {
            lineHeight: "var(--".concat(THEME_PREFIX, "-font-lineHeight)"),
            minWidth: "var(--".concat(THEME_PREFIX, "-space-5)"),
        },
        ".cm-content .cm-line": { paddingLeft: "var(--".concat(THEME_PREFIX, "-space-1)") },
        ".cm-content.cm-readonly .cm-line": { paddingLeft: 0 },
    });
};
var classNameToken = function (name) {
    return "".concat(THEME_PREFIX, "-syntax-").concat(name);
};
var styleTokens = function () {
    var syntaxHighLightTokens = [
        "string",
        "plain",
        "comment",
        "keyword",
        "definition",
        "punctuation",
        "property",
        "tag",
        "static",
    ];
    return syntaxHighLightTokens.reduce(function (acc, token) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[".".concat(classNameToken(token))] = {
            color: "$syntax$color$".concat(token),
            fontStyle: "$syntax$fontStyle$".concat(token),
        }, _a));
    }, {});
};
var getSyntaxHighlight = function (theme) {
    return HighlightStyle.define([
        { tag: tags.link, textDecoration: "underline" },
        { tag: tags.emphasis, fontStyle: "italic" },
        { tag: tags.strong, fontWeight: "bold" },
        {
            tag: tags.keyword,
            class: classNameToken("keyword"),
        },
        {
            tag: [tags.atom, tags.number, tags.bool],
            class: classNameToken("static"),
        },
        {
            tag: tags.variableName,
            class: classNameToken("plain"),
        },
        {
            // Standard tags, e.g <h1 />
            tag: tags.standard(tags.tagName),
            class: classNameToken("tag"),
        },
        {
            tag: [
                // Highlight function call
                tags.function(tags.variableName),
                // Highlight function definition differently (eg: functional component def in React)
                tags.definition(tags.function(tags.variableName)),
                // "Custom tags", meaning React component
                tags.tagName,
            ],
            class: classNameToken("definition"),
        },
        {
            tag: tags.propertyName,
            class: classNameToken("property"),
        },
        {
            tag: [tags.literal, tags.inserted],
            class: classNameToken(theme.syntax.string ? "string" : "static"),
        },
        {
            tag: tags.punctuation,
            class: classNameToken("punctuation"),
        },
        {
            tag: [tags.comment, tags.quote],
            class: classNameToken("comment"),
        },
    ]);
};
var getLanguageFromFile = function (filePath, fileType, additionalLanguages) {
    if (!filePath && !fileType)
        return "javascript";
    var extension = fileType;
    if (!extension && filePath) {
        var extensionDotIndex = filePath.lastIndexOf(".");
        extension = filePath.slice(extensionDotIndex + 1);
    }
    for (var _i = 0, additionalLanguages_1 = additionalLanguages; _i < additionalLanguages_1.length; _i++) {
        var additionalLanguage = additionalLanguages_1[_i];
        if (extension === additionalLanguage.name ||
            additionalLanguage.extensions.includes(extension || "")) {
            return additionalLanguage.name;
        }
    }
    switch (extension) {
        case "ts":
        case "tsx":
            return "typescript";
        case "html":
        case "svelte":
        case "vue":
        case "astro":
            return "html";
        case "css":
        case "less":
        case "scss":
            return "css";
        case "js":
        case "jsx":
        case "json":
        default:
            return "javascript";
    }
};
var getCodeMirrorLanguage = function (extension, additionalLanguages) {
    var options = {
        javascript: javascript({ jsx: true, typescript: false }),
        typescript: javascript({ jsx: true, typescript: true }),
        html: html(),
        css: css$1(),
    };
    for (var _i = 0, additionalLanguages_2 = additionalLanguages; _i < additionalLanguages_2.length; _i++) {
        var additionalLanguage = additionalLanguages_2[_i];
        if (extension === additionalLanguage.name) {
            return additionalLanguage.language;
        }
    }
    return options[extension];
};
var useCombinedRefs = function () {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return React.useCallback(function (element) {
        return refs.forEach(function (ref) {
            if (!ref) {
                return;
            }
            // Ref can have two types - a function or an object. We treat each case.
            if (typeof ref === "function") {
                return ref(element);
            }
            // As per https://github.com/facebook/react/issues/13029
            // it should be fine to set current this way.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref.current = element;
        });
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs);
};

function highlightDecorators(positions) {
    return ViewPlugin.fromClass(/** @class */ (function () {
        function class_1(view) {
            this.decorations = this.getDecoration(view);
        }
        class_1.prototype.update = function (update) {
            return;
        };
        class_1.prototype.getDecoration = function (view) {
            if (!positions)
                return Decoration.none;
            var rangesDecorators = positions.map(function (item) {
                var _a, _b, _c;
                var lineDeco = Decoration.line({
                    attributes: { class: (_a = item.className) !== null && _a !== void 0 ? _a : "" },
                });
                var markDeco = Decoration.mark({
                    class: (_b = item.className) !== null && _b !== void 0 ? _b : "",
                    attributes: (_c = item.elementAttributes) !== null && _c !== void 0 ? _c : undefined,
                });
                var positionLineStart = getCodeMirrorPosition(view.state.doc, {
                    line: item.line,
                    column: item.startColumn,
                }) + 1;
                if (item.startColumn && item.endColumn) {
                    var positionLineEnd = getCodeMirrorPosition(view.state.doc, {
                        line: item.line,
                        column: item.endColumn,
                    }) + 1;
                    return markDeco.range(positionLineStart, positionLineEnd);
                }
                return lineDeco.range(positionLineStart);
            });
            return Decoration.set(rangesDecorators);
        };
        return class_1;
    }()), {
        decorations: function (v) { return v.decorations; },
    });
}

function highlightInlineError() {
    return activeLineHighlighter;
}
var lineDeco = Decoration.line({ attributes: { class: "cm-errorLine" } });
var activeLineHighlighter = ViewPlugin.fromClass(/** @class */ (function () {
    function class_1() {
        this.decorations = Decoration.none;
    }
    class_1.prototype.update = function (update) {
        var _this = this;
        update.transactions.forEach(function (trans) {
            // @ts-ignore
            var errorValue = trans.annotation("show-error");
            if (errorValue !== undefined) {
                var position = getCodeMirrorPosition(update.view.state.doc, {
                    line: errorValue,
                }) + 1;
                _this.decorations = Decoration.set([lineDeco.range(position)]);
                // @ts-ignore
            }
            else if (trans.annotation("remove-errors")) {
                _this.decorations = Decoration.none;
            }
        });
    };
    return class_1;
}()), {
    decorations: function (v) { return v.decorations; },
});

var _a$5, _b$1;
var placeholderClassName = css({
    margin: "0",
    display: "block",
    fontFamily: "$font$mono",
    fontSize: "$font$size",
    color: "$syntax$color$plain",
    lineHeight: "$font$lineHeight",
});
var tokensClassName = css(styleTokens());
var editorClassName = css((_a$5 = {
        flex: 1,
        position: "relative",
        overflow: "auto",
        background: "$colors$surface1",
        ".cm-scroller": {
            padding: "$space$4 0",
        }
    },
    _a$5[".".concat(placeholderClassName)] = {
        padding: "$space$4 0",
    },
    /**
     * For iOS: prevent browser zoom when clicking on sandbox.
     * Does NOT apply to code blocks.
     */
    _a$5["@media screen and (max-width: 768px)"] = {
        "@supports (-webkit-overflow-scrolling: touch)": {
            ".cm-content": { fontSize: "16px" },
        },
    },
    _a$5));
var cmClassName = css({
    margin: "0",
    outline: "none",
    height: "100%",
});
var readOnlyClassName = css((_b$1 = {
        fontFamily: "$font$mono",
        fontSize: "0.8em",
        position: "absolute",
        right: "$space$2",
        bottom: "$space$2",
        zIndex: "$top",
        color: "$colors$clickable",
        backgroundColor: "$colors$surface2",
        borderRadius: "99999px",
        padding: "calc($space$1 / 2) $space$2"
    },
    _b$1["& + .".concat(buttonClassName)] = {
        right: "calc($space$11 * 2)",
    },
    _b$1));

var useSyntaxHighlight = function (_a) {
    var langSupport = _a.langSupport, highlightTheme = _a.highlightTheme, _b = _a.code, code = _b === void 0 ? "" : _b;
    var tree = langSupport.language.parser.parse(code);
    var offSet = 0;
    var codeElementsRender = [];
    var addElement = function (to, className) {
        if (to > offSet) {
            var children = code.slice(offSet, to);
            codeElementsRender.push(className
                ? createElement("span", {
                    children: children,
                    className: className,
                    key: "".concat(to).concat(offSet),
                })
                : children);
            offSet = to;
        }
    };
    highlightTree(tree, highlightTheme, function (from, to, className) {
        addElement(from, "");
        addElement(to, className);
    });
    /**
     * The language parse doesn't look consistent.
     * The final syntax highlight used by CodeMirror
     * includes an end empty line, and the parse here doesn't,
     * so let's add it manually.
     */
    if (offSet < code.length && (code === null || code === void 0 ? void 0 : code.includes("\n"))) {
        codeElementsRender.push("\n\n");
    }
    return codeElementsRender;
};

var CodeMirror = React.forwardRef(function (_a, ref) {
    var _b = _a.code, code = _b === void 0 ? "" : _b, filePath = _a.filePath, fileType = _a.fileType, onCodeUpdate = _a.onCodeUpdate, _c = _a.showLineNumbers, showLineNumbers = _c === void 0 ? false : _c, _d = _a.showInlineErrors, showInlineErrors = _d === void 0 ? false : _d, _e = _a.wrapContent, wrapContent = _e === void 0 ? false : _e, _f = _a.editorState, editorState = _f === void 0 ? "pristine" : _f, _g = _a.readOnly, readOnly = _g === void 0 ? false : _g, _h = _a.showReadOnly, showReadOnly = _h === void 0 ? true : _h, decorators = _a.decorators, _j = _a.initMode, initMode = _j === void 0 ? "lazy" : _j, _k = _a.extensions, extensions = _k === void 0 ? [] : _k, _l = _a.extensionsKeymap, extensionsKeymap = _l === void 0 ? [] : _l, _m = _a.additionalLanguages, additionalLanguages = _m === void 0 ? [] : _m;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var wrapper = React.useRef(null);
    var combinedRef = useCombinedRefs(wrapper, ref);
    var cmView = React.useRef();
    var _o = useSandpackTheme(), theme = _o.theme, themeId = _o.themeId;
    var _p = React.useState(code), internalCode = _p[0], setInternalCode = _p[1];
    var _q = React.useState(initMode === "immediate"), shouldInitEditor = _q[0], setShouldInitEditor = _q[1];
    var classNames = useClassNames();
    var _r = useSandpack(), listen = _r.listen, autoReload = _r.sandpack.autoReload;
    var prevExtension = React.useRef([]);
    var prevExtensionKeymap = React.useRef([]);
    var isIntersecting = useIntersectionObserver(wrapper, {
        rootMargin: "600px 0px",
        threshold: 0.2,
    }).isIntersecting;
    React.useImperativeHandle(ref, function () { return ({
        getCodemirror: function () { return cmView.current; },
    }); });
    React.useEffect(function () {
        var mode = initMode === "lazy" || initMode === "user-visible";
        if (mode && isIntersecting) {
            setShouldInitEditor(true);
        }
    }, [initMode, isIntersecting]);
    var languageExtension = getLanguageFromFile(filePath, fileType, additionalLanguages);
    var langSupport = getCodeMirrorLanguage(languageExtension, additionalLanguages);
    var highlightTheme = getSyntaxHighlight(theme);
    var syntaxHighlightRender = useSyntaxHighlight({
        langSupport: langSupport,
        highlightTheme: highlightTheme,
        code: code,
    });
    // decorators need to be sorted by `line`, otherwise it will throw error
    // see https://github.com/codesandbox/sandpack/issues/383
    var sortedDecorators = React.useMemo(function () {
        return decorators
            ? decorators.sort(function (d1, d2) { return d1.line - d2.line; })
            : decorators;
    }, [decorators]);
    var useStaticReadOnly = readOnly && ((decorators === null || decorators === void 0 ? void 0 : decorators.length) === 0 || decorators === undefined);
    React.useEffect(function () {
        if (!wrapper.current || !shouldInitEditor || useStaticReadOnly) {
            return;
        }
        var parentDiv = wrapper.current;
        var existingPlaceholder = parentDiv.querySelector(".sp-pre-placeholder");
        if (existingPlaceholder) {
            parentDiv.removeChild(existingPlaceholder);
        }
        var view = new EditorView({
            doc: code,
            extensions: [],
            parent: parentDiv,
        });
        view.contentDOM.setAttribute("data-gramm", "false");
        view.contentDOM.setAttribute("data-lt-active", "false");
        view.contentDOM.setAttribute("aria-label", filePath ? "Code Editor for ".concat(getFileName(filePath)) : "Code Editor");
        view.contentDOM.setAttribute("tabIndex", "-1");
        cmView.current = view;
        return function () {
            var _a;
            (_a = cmView.current) === null || _a === void 0 ? void 0 : _a.destroy();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldInitEditor, readOnly, useStaticReadOnly]);
    React.useEffect(function () {
        if (useStaticReadOnly) {
            return;
        }
        if (cmView.current) {
            var customCommandsKeymap = [
                {
                    key: "Tab",
                    run: function (view) {
                        var _a, _b;
                        indentMore(view);
                        var customKey = extensionsKeymap.find(function (_a) {
                            var key = _a.key;
                            return key === "Tab";
                        });
                        return (_b = (_a = customKey === null || customKey === void 0 ? void 0 : customKey.run) === null || _a === void 0 ? void 0 : _a.call(customKey, view)) !== null && _b !== void 0 ? _b : true;
                    },
                },
                {
                    key: "Shift-Tab",
                    run: function (view) {
                        var _a, _b;
                        indentLess({ state: view.state, dispatch: view.dispatch });
                        var customKey = extensionsKeymap.find(function (_a) {
                            var key = _a.key;
                            return key === "Shift-Tab";
                        });
                        return (_b = (_a = customKey === null || customKey === void 0 ? void 0 : customKey.run) === null || _a === void 0 ? void 0 : _a.call(customKey, view)) !== null && _b !== void 0 ? _b : true;
                    },
                },
                {
                    key: "Escape",
                    run: function () {
                        if (readOnly)
                            return true;
                        if (wrapper.current) {
                            wrapper.current.focus();
                        }
                        return true;
                    },
                },
                {
                    key: "mod-Backspace",
                    run: deleteGroupBackward,
                },
            ];
            var extensionList = __spreadArray(__spreadArray([
                highlightSpecialChars(),
                history(),
                closeBrackets()
            ], extensions, true), [
                keymap.of(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], closeBracketsKeymap, true), defaultKeymap, true), historyKeymap, true), customCommandsKeymap, true), extensionsKeymap, true)),
                langSupport,
                getEditorTheme(),
                syntaxHighlighting(highlightTheme),
                EditorView.updateListener.of(function (update) {
                    if (update.docChanged) {
                        var newCode = update.state.doc.toString();
                        setInternalCode(newCode);
                        onCodeUpdate === null || onCodeUpdate === void 0 ? void 0 : onCodeUpdate(newCode);
                    }
                }),
            ], false);
            if (readOnly) {
                extensionList.push(EditorState.readOnly.of(true));
                extensionList.push(EditorView.editable.of(false));
            }
            else {
                extensionList.push(bracketMatching());
                extensionList.push(highlightActiveLine());
            }
            if (sortedDecorators) {
                extensionList.push(highlightDecorators(sortedDecorators));
            }
            if (wrapContent) {
                extensionList.push(EditorView.lineWrapping);
            }
            if (showLineNumbers) {
                extensionList.push(lineNumbers());
            }
            if (showInlineErrors) {
                extensionList.push(highlightInlineError());
            }
            // Add new hightlight decorators
            cmView.current.dispatch({
                effects: StateEffect.reconfigure.of(extensionList),
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        shouldInitEditor,
        sortedDecorators,
        showLineNumbers,
        wrapContent,
        themeId,
        readOnly,
        useStaticReadOnly,
        autoReload,
    ]);
    React.useEffect(function applyExtensions() {
        var view = cmView.current;
        var dependenciesAreDiff = !shallowEqual(extensions, prevExtension.current) ||
            !shallowEqual(extensionsKeymap, prevExtensionKeymap.current);
        if (view && dependenciesAreDiff) {
            view.dispatch({
                effects: StateEffect.appendConfig.of(extensions),
            });
            view.dispatch({
                effects: StateEffect.appendConfig.of(keymap.of(__spreadArray([], extensionsKeymap, true))),
            });
            prevExtension.current = extensions;
            prevExtensionKeymap.current = extensionsKeymap;
        }
    }, [extensions, extensionsKeymap]);
    React.useEffect(function () {
        // When the user clicks on a tab button on a larger screen
        // Avoid autofocus on mobile as it leads to a bad experience and an unexpected layout shift
        if (cmView.current &&
            editorState === "dirty" &&
            window.matchMedia("(min-width: 768px)").matches) {
            cmView.current.contentDOM.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Update editor when code passed as prop from outside sandpack changes
    React.useEffect(function () {
        if (cmView.current && typeof code === "string" && code !== internalCode) {
            var view = cmView.current;
            var selection = view.state.selection.ranges.some(function (_a) {
                var to = _a.to, from = _a.from;
                return to > code.length || from > code.length;
            })
                ? EditorSelection.cursor(code.length)
                : view.state.selection;
            var changes = { from: 0, to: view.state.doc.length, insert: code };
            view.dispatch({ changes: changes, selection: selection });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code]);
    React.useEffect(function messageToInlineError() {
        if (!showInlineErrors)
            return;
        var unsubscribe = listen(function (message) {
            var view = cmView.current;
            if (message.type === "success") {
                view === null || view === void 0 ? void 0 : view.dispatch({
                    // @ts-ignore
                    annotations: [new Annotation("remove-errors", true)],
                });
            }
            else if (message.type === "action" &&
                message.action === "show-error" &&
                message.path === filePath &&
                message.line) {
                view === null || view === void 0 ? void 0 : view.dispatch({
                    // @ts-ignore
                    annotations: [new Annotation("show-error", message.line)],
                });
            }
        });
        return function () { return unsubscribe(); };
    }, [listen, showInlineErrors]);
    var handleContainerKeyDown = function (evt) {
        if (evt.key === "Enter" && cmView.current) {
            evt.preventDefault();
            cmView.current.contentDOM.focus();
        }
    };
    var gutterLineOffset = function () {
        // padding-left
        var offset = 4;
        if (showLineNumbers) {
            // line-number-gutter-width + gutter-padding
            offset += 6;
        }
        // line-padding
        if (!readOnly) {
            offset += 1;
        }
        return "var(--".concat(THEME_PREFIX, "-space-").concat(offset, ")");
    };
    if (useStaticReadOnly) {
        return (jsxs(Fragment, { children: [jsx("pre", { ref: combinedRef, className: classNames("cm", [
                        classNames(editorState),
                        classNames(languageExtension),
                        cmClassName,
                        tokensClassName,
                    ]), translate: "no", children: jsx("code", { className: classNames("pre-placeholder", [placeholderClassName]), style: { marginLeft: gutterLineOffset() }, children: syntaxHighlightRender }) }), readOnly && showReadOnly && (jsx("span", __assign({ className: classNames("read-only", [readOnlyClassName]) }, ({}), { children: "Read-only" })))] }));
    }
    return (jsx("div", { ref: combinedRef, "aria-autocomplete": "list", "aria-label": filePath ? "Code Editor for ".concat(getFileName(filePath)) : "Code Editor", "aria-multiline": "true", className: classNames("cm", [
            classNames(editorState),
            classNames(languageExtension),
            cmClassName,
            tokensClassName,
        ]), onKeyDown: handleContainerKeyDown, role: "textbox", tabIndex: 0, translate: "no", suppressHydrationWarning: true, children: jsx("pre", { className: classNames("pre-placeholder", [placeholderClassName]), style: { marginLeft: gutterLineOffset() }, children: syntaxHighlightRender }) }));
});

var SandpackCodeEditor = forwardRef(function (_a, ref) {
    var showTabs = _a.showTabs, _b = _a.showLineNumbers, showLineNumbers = _b === void 0 ? false : _b, _c = _a.showInlineErrors, showInlineErrors = _c === void 0 ? false : _c, _d = _a.showRunButton, showRunButton = _d === void 0 ? true : _d, _e = _a.wrapContent, wrapContent = _e === void 0 ? false : _e, _f = _a.closableTabs, closableTabs = _f === void 0 ? false : _f, initMode = _a.initMode, extensions = _a.extensions, extensionsKeymap = _a.extensionsKeymap, readOnly = _a.readOnly, showReadOnly = _a.showReadOnly, additionalLanguages = _a.additionalLanguages, className = _a.className, props = __rest(_a, ["showTabs", "showLineNumbers", "showInlineErrors", "showRunButton", "wrapContent", "closableTabs", "initMode", "extensions", "extensionsKeymap", "readOnly", "showReadOnly", "additionalLanguages", "className"]);
    var sandpack = useSandpack().sandpack;
    var _g = useActiveCode(), code = _g.code, updateCode = _g.updateCode, readOnlyFile = _g.readOnly;
    var activeFile = sandpack.activeFile, status = sandpack.status, editorState = sandpack.editorState;
    var shouldShowTabs = showTabs !== null && showTabs !== void 0 ? showTabs : sandpack.visibleFiles.length > 1;
    var classNames = useClassNames();
    var handleCodeUpdate = function (newCode, shouldUpdatePreview) {
        if (shouldUpdatePreview === void 0) { shouldUpdatePreview = true; }
        updateCode(newCode, shouldUpdatePreview);
    };
    var activeFileUniqueId = useSandpackId();
    return (jsxs(SandpackStack, __assign({ className: classNames("editor", [className]) }, props, { children: [shouldShowTabs && (jsx(FileTabs, { activeFileUniqueId: activeFileUniqueId, closableTabs: closableTabs })), jsxs("div", { "aria-labelledby": "".concat(activeFile, "-").concat(activeFileUniqueId, "-tab"), className: classNames("code-editor", [editorClassName]), id: "".concat(activeFile, "-").concat(activeFileUniqueId, "-tab-panel"), role: "tabpanel", children: [jsx(CodeMirror, { ref: ref, additionalLanguages: additionalLanguages, code: code, editorState: editorState, extensions: extensions, extensionsKeymap: extensionsKeymap, filePath: activeFile, initMode: initMode || sandpack.initMode, onCodeUpdate: function (newCode) { var _a; return handleCodeUpdate(newCode, (_a = sandpack.autoReload) !== null && _a !== void 0 ? _a : true); }, readOnly: readOnly || readOnlyFile, showInlineErrors: showInlineErrors, showLineNumbers: showLineNumbers, showReadOnly: showReadOnly, wrapContent: wrapContent }, activeFile), showRunButton && (!sandpack.autoReload || status === "idle") ? (jsx(RunButton$1, {})) : null] })] })));
});

var SandpackCodeViewer = React.forwardRef(function (_a, ref) {
    var showTabs = _a.showTabs, showLineNumbers = _a.showLineNumbers, decorators = _a.decorators, propCode = _a.code, initMode = _a.initMode, wrapContent = _a.wrapContent, additionalLanguages = _a.additionalLanguages, props = __rest(_a, ["showTabs", "showLineNumbers", "decorators", "code", "initMode", "wrapContent", "additionalLanguages"]);
    var sandpack = useSandpack().sandpack;
    var code = useActiveCode().code;
    var classNames = useClassNames();
    var shouldShowTabs = showTabs !== null && showTabs !== void 0 ? showTabs : sandpack.visibleFiles.length > 1;
    var activeFileUniqueId = useSandpackId();
    return (jsxs(SandpackStack, __assign({ className: classNames("editor-viewer") }, props, { children: [shouldShowTabs ? (jsx(FileTabs, { activeFileUniqueId: activeFileUniqueId })) : null, jsx("div", { "aria-labelledby": "".concat(sandpack.activeFile, "-").concat(activeFileUniqueId, "-tab"), className: classNames("code-editor", [editorClassName]), id: "".concat(sandpack.activeFile, "-").concat(activeFileUniqueId, "-tab-panel"), role: "tabpanel", children: jsx(CodeMirror, { ref: ref, additionalLanguages: additionalLanguages, code: propCode !== null && propCode !== void 0 ? propCode : code, decorators: decorators, filePath: sandpack.activeFile, initMode: initMode || sandpack.initMode, showLineNumbers: showLineNumbers, showReadOnly: false, wrapContent: wrapContent, readOnly: true }) }), sandpack.status === "idle" ? jsx(RunButton$1, {}) : null] })));
});

var _a$4, _b;
var layoutClassName = css((_a$4 = {
        border: "1px solid $colors$surface2",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "stretch",
        borderRadius: "$border$radius",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "$colors$surface2",
        gap: 1
    },
    _a$4["> .".concat(stackClassName)] = {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "0",
        height: "$layout$height",
        overflow: "hidden",
        "@media print": {
            height: "auto",
            display: "block",
        },
        "@media screen and (max-width: 768px)": (_b = {},
            _b["&:not(.".concat(THEME_PREFIX, "-preview, .").concat(THEME_PREFIX, "-editor, .").concat(THEME_PREFIX, "-preset-column)")] = {
                height: "calc($layout$height / 2)",
            },
            /* triggers the layout break at the 768px breakpoint, not when the component is less then 700px */
            _b.minWidth = "100%;",
            _b),
    },
    _a$4["> .".concat(THEME_PREFIX, "-file-explorer")] = {
        flex: 0.2,
        minWidth: 200,
        "@media screen and (max-width: 768px)": {
            flex: 1,
        },
    },
    _a$4));
var SandpackLayout = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var sandpack = useSandpack().sandpack;
    var classNames = useClassNames();
    var combinedRef = useCombinedRefs(sandpack.lazyAnchorRef, ref);
    return (jsx("div", __assign({ ref: combinedRef, className: classNames("layout", [layoutClassName, className]) }, props, { children: children })));
});

/**
 * @category Hooks
 */
var useErrorMessage = function () {
    var _a;
    var sandpack = useSandpack().sandpack;
    var error = sandpack.error;
    return (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : null;
};

var FADE_ANIMATION_DURATION = 200;
/**
 * @category Hooks
 */
var useLoadingOverlayState = function (clientId, externalLoading) {
    var _a = useSandpack(), sandpack = _a.sandpack, listen = _a.listen;
    var _b = React.useState("LOADING"), state = _b[0], setState = _b[1];
    /**
     * Sandpack listener
     */
    React.useEffect(function () {
        var unsubscribe = listen(function (message) {
            if (message.type === "start" && message.firstLoad === true) {
                setState("LOADING");
            }
            if (message.type === "done") {
                setState(function (prev) {
                    return prev === "LOADING" ? "PRE_FADING" : "HIDDEN";
                });
            }
        }, clientId);
        return function () {
            unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clientId, sandpack.status === "idle"]);
    /**
     * Fading transient state
     */
    React.useEffect(function () {
        var fadeTimeout;
        if (state === "PRE_FADING" && !externalLoading) {
            setState("FADING");
        }
        else if (state === "FADING") {
            fadeTimeout = setTimeout(function () { return setState("HIDDEN"); }, FADE_ANIMATION_DURATION);
        }
        return function () {
            clearTimeout(fadeTimeout);
        };
    }, [state, externalLoading]);
    if (sandpack.status === "timeout") {
        return "TIMEOUT";
    }
    if (sandpack.status !== "running") {
        return "HIDDEN";
    }
    return state;
};

/**
 * @category Hooks
 */
var useSandpackNavigation = function (clientId) {
    var dispatch = useSandpack().dispatch;
    return {
        refresh: function () { return dispatch({ type: "refresh" }, clientId); },
        back: function () { return dispatch({ type: "urlback" }, clientId); },
        forward: function () { return dispatch({ type: "urlforward" }, clientId); },
    };
};

function getTranspiledCode(sandpack) {
    var _a, _b;
    var activeFile = sandpack.activeFile, bundlerState = sandpack.bundlerState;
    if (bundlerState == null) {
        return null;
    }
    var tModule = bundlerState.transpiledModules[activeFile + ":"];
    return (_b = (_a = tModule === null || tModule === void 0 ? void 0 : tModule.source) === null || _a === void 0 ? void 0 : _a.compiledCode) !== null && _b !== void 0 ? _b : null;
}
/**
 * @category Hooks
 */
var useTranspiledCode = function () {
    var sandpack = useSandpack().sandpack;
    if (sandpack.status !== "running") {
        return null;
    }
    return getTranspiledCode(sandpack);
};

/**
 * It registers a new sandpack client and returns its instance,
 * listeners, and dispatch function. Using it when creating a custom
 * component to interact directly with the client is recommended.
 * For other cases, use `useSandpack` instead.
 *
 * @category Hooks
 */
var useSandpackClient = function (clientPropsOverride) {
    var _a = useSandpack(), sandpack = _a.sandpack, listen = _a.listen, dispatch = _a.dispatch;
    var iframeRef = React.useRef(null);
    var clientId = React.useRef(generateRandomId());
    React.useEffect(function () {
        var iframeElement = iframeRef.current;
        var clientIdValue = clientId.current;
        if (iframeElement !== null) {
            sandpack.registerBundler(iframeElement, clientIdValue, clientPropsOverride);
        }
        return function () { return sandpack.unregisterBundler(clientIdValue); };
    }, []);
    var getClient = function () {
        return sandpack.clients[clientId.current] || null;
    };
    return {
        sandpack: sandpack,
        getClient: getClient,
        clientId: clientId.current,
        iframe: iframeRef,
        listen: function (listener) {
            return listen(listener, clientId.current);
        },
        dispatch: function (message) { return dispatch(message, clientId.current); },
    };
};

/**
 * @category Hooks
 */
var useSandpackShell = function (clientId) {
    var dispatch = useSandpack().dispatch;
    return {
        restart: function () { return dispatch({ type: "shell/restart" }, clientId); },
        openPreview: function () { return dispatch({ type: "shell/openPreview" }, clientId); },
    };
};

var mapProgressMessage = function (originalMessage, firstTotalPending) {
    var _a;
    switch (originalMessage.state) {
        case "downloading_manifest":
            return "[1/3] Downloading manifest";
        case "downloaded_module":
            return "[2/3] Downloaded ".concat(originalMessage.name, " (").concat(firstTotalPending - originalMessage.totalPending, "/").concat(firstTotalPending, ")");
        case "starting_command":
            return "[3/3] Starting command";
        case "command_running":
            return "[3/3] Running \"".concat((_a = originalMessage.command) === null || _a === void 0 ? void 0 : _a.trim(), "\"");
    }
};
var useSandpackPreviewProgress = function (props) {
    var _a = React.useState(false), isReady = _a[0], setIsReady = _a[1];
    var _b = React.useState(), totalDependencies = _b[0], setTotalDependencies = _b[1];
    var _c = React.useState(null), loadingMessage = _c[0], setLoadingMessage = _c[1];
    var timeout = props === null || props === void 0 ? void 0 : props.timeout;
    var clientId = props === null || props === void 0 ? void 0 : props.clientId;
    var listen = useSandpack().listen;
    React.useEffect(function () {
        var timer;
        var unsubscribe = listen(function (message) {
            if (message.type === "start" && message.firstLoad) {
                setIsReady(false);
            }
            if (timeout) {
                timer = setTimeout(function () {
                    setLoadingMessage(null);
                }, timeout);
            }
            if (message.type === "dependencies") {
                setLoadingMessage(function () {
                    switch (message.data.state) {
                        case "downloading_manifest":
                            return "[1/3] Downloading manifest";
                        case "downloaded_module":
                            return "[2/3] Downloaded ".concat(message.data.name, " (").concat(message.data.progress, "/").concat(message.data.total, ")");
                        case "starting":
                            return "[3/3] Starting";
                    }
                    return null;
                });
            }
            else if (message.type === "shell/progress" && !isReady) {
                if (!totalDependencies && message.data.state === "downloaded_module") {
                    setTotalDependencies(message.data.totalPending);
                }
                if (totalDependencies !== undefined) {
                    setLoadingMessage(mapProgressMessage(message.data, totalDependencies));
                }
            }
            if (message.type === "done" && message.compilatonError === false) {
                setLoadingMessage(null);
                setIsReady(true);
                clearTimeout(timer);
            }
        }, clientId);
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
            unsubscribe();
        };
    }, [clientId, isReady, totalDependencies, timeout]);
    return loadingMessage;
};

var MAX_MESSAGE_COUNT$1 = 400 * 2;
var useSandpackShellStdout = function (_a) {
    var clientId = _a.clientId, _b = _a.maxMessageCount, maxMessageCount = _b === void 0 ? MAX_MESSAGE_COUNT$1 : _b; _a.resetOnPreviewRestart;
    var _d = React.useState([]), logs = _d[0], setLogs = _d[1];
    var listen = useSandpack().listen;
    React.useEffect(function () {
        var unsubscribe = listen(function (message) {
            if (message.type === "start") {
                setLogs([]);
            }
            else if (message.type === "stdout" &&
                message.payload.data &&
                Boolean(message.payload.data.trim())) {
                setLogs(function (prev) {
                    var messages = __spreadArray(__spreadArray([], prev, true), [
                        { data: message.payload.data, id: generateRandomId() },
                    ], false);
                    while (messages.length > maxMessageCount) {
                        messages.shift();
                    }
                    return messages;
                });
            }
        }, clientId);
        return unsubscribe;
    }, [maxMessageCount, clientId]);
    return { logs: logs, reset: function () { return setLogs([]); } };
};

var mapBundlerErrors = function (originalMessage) {
    var errorMessage = originalMessage.replace("[sandpack-client]: ", "");
    if (/process.exit/.test(errorMessage)) {
        var exitCode = errorMessage.match(/process.exit\((\d+)\)/);
        if (!exitCode)
            return errorMessage;
        // Crash
        if (Number(exitCode[1]) === 0) {
            return "Server is not running, would you like to start it again?";
        }
        return "Server has crashed with status code ".concat(exitCode[1], ", would you like to restart the server?");
    }
    return errorMessage;
};
var ErrorOverlay = function (props) {
    var children = props.children, className = props.className, otherProps = __rest(props, ["children", "className"]);
    var errorMessage = useErrorMessage();
    var restart = useSandpackShell().restart;
    var classNames = useClassNames();
    var _a = useSandpack().sandpack, runSandpack = _a.runSandpack, teamId = _a.teamId;
    var dispatch = useSandpack().dispatch;
    if (!errorMessage && !children) {
        return null;
    }
    var isSandpackBundlerError = errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.startsWith("[sandpack-client]");
    var privateDependencyError = errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.includes("NPM_REGISTRY_UNAUTHENTICATED_REQUEST");
    var onSignIn = function () {
        if (teamId) {
            dispatch({ type: "sign-in", teamId: teamId });
        }
    };
    if (privateDependencyError) {
        return (jsxs("div", __assign({ className: classNames("overlay", [
                classNames("error"),
                absoluteClassName,
                errorBundlerClassName,
                className,
            ]) }, props, { children: [jsx("p", { className: classNames("error-message", [errorMessageClassName]), children: jsx("strong", { children: "Unable to fetch required dependency." }) }), jsx("div", { className: classNames("error-message", [errorMessageClassName]), children: jsxs("p", { children: ["Authentication required. Please sign in to your account (make sure to allow pop-ups to this page) and try again. If the issue persists, contact", " ", jsx("a", { href: "mailto:hello@codesandbox.io?subject=Sandpack Timeout Error", children: "support" }), " ", "for further assistance."] }) }), jsx("div", { children: jsxs("button", { className: classNames("button", [
                            buttonClassName,
                            iconStandaloneClassName,
                            roundedButtonClassName,
                        ]), onClick: onSignIn, children: [jsx(SignInIcon, {}), jsx("span", { children: "Sign in" })] }) })] })));
    }
    if (isSandpackBundlerError && errorMessage) {
        return (jsx("div", __assign({ className: classNames("overlay", [
                classNames("error"),
                absoluteClassName,
                errorBundlerClassName,
                className,
            ]) }, otherProps, { children: jsxs("div", { className: classNames("error-message", [errorMessageClassName]), children: [jsx("p", { className: classNames("error-title", [css({ fontWeight: "bold" })]), children: "Couldn't connect to server" }), jsx("p", { children: mapBundlerErrors(errorMessage) }), jsx("div", { children: jsxs("button", { className: classNames("button", [
                                classNames("icon-standalone"),
                                buttonClassName,
                                iconStandaloneClassName,
                                roundedButtonClassName,
                            ]), onClick: function () {
                                restart();
                                runSandpack();
                            }, title: "Restart script", type: "button", children: [jsx(RestartIcon, {}), " ", jsx("span", { children: "Restart" })] }) })] }) })));
    }
    return (jsxs("div", __assign({ className: classNames("overlay", [
            classNames("error"),
            absoluteClassName,
            errorClassName({ solidBg: true }),
            className,
        ]), translate: "no" }, otherProps, { children: [jsx("p", { className: classNames("error-message", [errorMessageClassName]), children: jsx("strong", { children: "Something went wrong" }) }), jsx("p", { className: classNames("error-message", [
                    errorMessageClassName({ errorCode: true }),
                ]), children: errorMessage || children })] })));
};

/**
 * Stole from https://github.com/nteract/ansi-to-react/blob/master/src/index.ts
 */
/**
 * Converts ANSI strings into JSON output.
 * @name ansiToJSON
 * @function
 * @param {String} input The input string.
 * @param {boolean} use_classes If `true`, HTML classes will be appended
 *                              to the HTML output.
 * @return {Array} The parsed input.
 */
function ansiToJSON(input, use_classes) {
    if (use_classes === void 0) { use_classes = false; }
    input = escapeCarriageReturn(fixBackspace(input));
    return Anser.ansiToJson(input, {
        json: true,
        remove_empty: true,
        use_classes: use_classes,
    });
}
/**
 * Create a class string.
 * @name createClass
 * @function
 * @param {AnserJsonEntry} bundle
 * @return {String} class name(s)
 */
function createClass(bundle) {
    var classNames = "";
    if (bundle.bg) {
        classNames += "".concat(bundle.bg, "-bg ");
    }
    if (bundle.fg) {
        classNames += "".concat(bundle.fg, "-fg ");
    }
    if (bundle.decoration) {
        classNames += "ansi-".concat(bundle.decoration, " ");
    }
    if (classNames === "") {
        return null;
    }
    classNames = classNames.substring(0, classNames.length - 1);
    return classNames;
}
/**
 * Create the style attribute.
 * @name createStyle
 * @function
 * @param {AnserJsonEntry} bundle
 * @return {Object} returns the style object
 */
function createStyle(bundle) {
    var style = {};
    if (bundle.bg) {
        style.backgroundColor = "rgb(".concat(bundle.bg, ")");
    }
    if (bundle.fg) {
        style.color = "rgb(".concat(bundle.fg, ")");
    }
    switch (bundle.decoration) {
        case "bold":
            style.fontWeight = "bold";
            break;
        case "dim":
            style.opacity = "0.5";
            break;
        case "italic":
            style.fontStyle = "italic";
            break;
        case "hidden":
            style.visibility = "hidden";
            break;
        case "strikethrough":
            style.textDecoration = "line-through";
            break;
        case "underline":
            style.textDecoration = "underline";
            break;
        case "blink":
            style.textDecoration = "blink";
            break;
    }
    return style;
}
/**
 * Converts an Anser bundle into a React Node.
 * @param linkify whether links should be converting into clickable anchor tags.
 * @param useClasses should render the span with a class instead of style.
 * @param bundle Anser output.
 * @param key
 */
function convertBundleIntoReact(linkify, useClasses, bundle, key) {
    var style = useClasses ? null : createStyle(bundle);
    var className = useClasses ? createClass(bundle) : null;
    if (!linkify) {
        return React.createElement("span", { style: style, key: key, className: className }, bundle.content);
    }
    var content = [];
    var linkRegex = /(\s|^)(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g;
    var index = 0;
    var match;
    while ((match = linkRegex.exec(bundle.content)) !== null) {
        var pre = match[1], url = match[2];
        var startIndex = match.index + pre.length;
        if (startIndex > index) {
            content.push(bundle.content.substring(index, startIndex));
        }
        // Make sure the href we generate from the link is fully qualified. We assume http
        // if it starts with a www because many sites don't support https
        var href = url.startsWith("www.") ? "http://".concat(url) : url;
        content.push(React.createElement("a", {
            key: index,
            href: href,
            target: "_blank",
        }, "".concat(url)));
        index = linkRegex.lastIndex;
    }
    if (index < bundle.content.length) {
        content.push(bundle.content.substring(index));
    }
    return React.createElement("span", { style: style, key: key, className: className }, content);
}
function Ansi(props) {
    var className = props.className, useClasses = props.useClasses, children = props.children, linkify = props.linkify;
    return React.createElement("code", { className: className }, ansiToJSON(children !== null && children !== void 0 ? children : "", useClasses !== null && useClasses !== void 0 ? useClasses : false).map(convertBundleIntoReact.bind(null, linkify !== null && linkify !== void 0 ? linkify : false, useClasses !== null && useClasses !== void 0 ? useClasses : false)));
}
// This is copied from the Jupyter Classic source code
// notebook/static/base/js/utils.js to handle \b in a way
// that is **compatible with Jupyter classic**.   One can
// argue that this behavior is questionable:
//   https://stackoverflow.com/questions/55440152/multiple-b-doesnt-work-as-expected-in-jupyter#
function fixBackspace(txt) {
    var tmp = txt;
    do {
        txt = tmp;
        // Cancel out anything-but-newline followed by backspace
        // eslint-disable-next-line no-control-regex
        tmp = txt.replace(/[^\n]\x08/gm, "");
    } while (tmp.length < txt.length);
    return txt;
}

var StdoutList = function (_a) {
    var data = _a.data;
    var classNames = useClassNames();
    return (jsx(Fragment, { children: data.map(function (_a) {
            var data = _a.data, id = _a.id;
            return (jsx("div", { className: classNames("console-item", [consoleItemClassName$1]), children: jsx(Ansi, { children: data }) }, id));
        }) }));
};
var consoleItemClassName$1 = css({
    width: "100%",
    padding: "$space$3 $space$2",
    fontSize: ".85em",
    position: "relative",
    whiteSpace: "pre",
    "&:not(:first-child):after": {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: "$colors$surface3",
    },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var getParameters = function (parameters) {
    return LZString.compressToBase64(JSON.stringify(parameters))
        .replace(/\+/g, "-") // Convert '+' to '-'
        .replace(/\//g, "_") // Convert '/' to '_'
        .replace(/=+$/, "");
}; /* Remove ending '='*/
var CSB_URL = "https://codesandbox.io/api/v1/sandboxes/define";
var getFileParameters = function (files, environment) {
    var normalizedFiles = Object.keys(files).reduce(function (prev, next) {
        var _a;
        var fileName = next.replace("/", "");
        var value = {
            content: files[next].code,
            isBinary: false,
        };
        return __assign(__assign({}, prev), (_a = {}, _a[fileName] = value, _a));
    }, {});
    return getParameters(__assign({ files: normalizedFiles }, (environment ? { template: environment } : null)));
};
var UnstyledOpenInCodeSandboxButton = function (props) {
    var sandpack = useSandpack().sandpack;
    if (sandpack.exportOptions) {
        return jsx(ExportToWorkspaceButton, __assign({ state: sandpack }, props));
    }
    return jsx(RegularExportButton, __assign({ state: sandpack }, props));
};
var ExportToWorkspaceButton = function (_a) {
    var children = _a.children, state = _a.state, props = __rest(_a, ["children", "state"]);
    var submit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var normalizedFiles, response, data;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!((_a = state.exportOptions) === null || _a === void 0 ? void 0 : _a.apiToken)) {
                        throw new Error("Missing `apiToken` property");
                    }
                    normalizedFiles = Object.keys(state.files).reduce(function (prev, next) {
                        var _a;
                        var fileName = next.replace("/", "");
                        return __assign(__assign({}, prev), (_a = {}, _a[fileName] = state.files[next], _a));
                    }, {});
                    return [4 /*yield*/, fetch("https://api.codesandbox.io/sandbox", {
                            method: "POST",
                            body: JSON.stringify({
                                template: state.environment,
                                files: normalizedFiles,
                                privacy: state.exportOptions.privacy === "public" ? 0 : 2,
                            }),
                            headers: {
                                Authorization: "Bearer ".concat(state.exportOptions.apiToken),
                                "Content-Type": "application/json",
                                "X-CSB-API-Version": "2023-07-01",
                            },
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _b.sent();
                    window.open("https://codesandbox.io/p/sandbox/".concat(data.data.alias, "?file=/").concat(state.activeFile, "&utm-source=storybook-addon"), "_blank");
                    return [2 /*return*/];
            }
        });
    }); };
    return (jsx("button", __assign({ onClick: submit, title: "Export to workspace in CodeSandbox", type: "button" }, props, { children: children })));
};
var RegularExportButton = function (_a) {
    var _b, _c, _d;
    var children = _a.children, state = _a.state, props = __rest(_a, ["children", "state"]);
    var formRef = React.useRef(null);
    var _e = React.useState(), paramsValues = _e[0], setParamsValues = _e[1];
    React.useEffect(function debounce() {
        var timer = setTimeout(function () {
            var params = getFileParameters(state.files, state.environment);
            var searchParams = new URLSearchParams({
                parameters: params,
                query: new URLSearchParams({
                    file: state.activeFile,
                    utm_medium: "sandpack",
                }).toString(),
            });
            setParamsValues(searchParams);
        }, 600);
        return function () {
            clearTimeout(timer);
        };
    }, [state.activeFile, state.environment, state.files]);
    /**
     * This is a safe limit to avoid too long requests (401),
     * as all parameters are attached in the URL
     */
    if (((_d = (_c = (_b = paramsValues === null || paramsValues === void 0 ? void 0 : paramsValues.get) === null || _b === void 0 ? void 0 : _b.call(paramsValues, "parameters")) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 1500) {
        return (jsxs("button", __assign({ onClick: function () { var _a; return (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit(); }, title: "Open in CodeSandbox", type: "button" }, props, { children: [jsxs("form", { ref: formRef, action: CSB_URL, method: "POST", style: { visibility: "hidden" }, target: "_blank", children: [jsx("input", { name: "environment", type: "hidden", value: state.environment === "node" ? "server" : state.environment }), Array.from(paramsValues, function (_a) {
                            var key = _a[0], value = _a[1];
                            return (jsx("input", { name: key, type: "hidden", value: value }, key));
                        })] }), children] })));
    }
    return (jsx("a", __assign({ href: "".concat(CSB_URL, "?").concat(paramsValues === null || paramsValues === void 0 ? void 0 : paramsValues.toString(), "&environment=").concat(state.environment === "node" ? "server" : state.environment), rel: "noreferrer noopener", target: "_blank", title: "Open in CodeSandbox" }, props, { children: children })));
};

var OpenInCodeSandboxButton = function () {
    var classNames = useClassNames();
    return (jsxs(UnstyledOpenInCodeSandboxButton, { className: classNames("button", [
            classNames("icon-standalone"),
            buttonClassName,
            iconStandaloneClassName,
            roundedButtonClassName,
        ]), children: [jsx(ExportIcon, {}), jsx("span", { children: "Open Sandbox" })] }));
};

var _a$3;
var cubeClassName = css({
    transform: "translate(-4px, 9px) scale(0.13, 0.13)",
    "*": { position: "absolute", width: "96px", height: "96px" },
});
var wrapperClassName$2 = css((_a$3 = {
        position: "absolute",
        right: "$space$2",
        bottom: "$space$2",
        zIndex: "$top",
        width: "32px",
        height: "32px",
        borderRadius: "$border$radius"
    },
    _a$3[".".concat(cubeClassName)] = { display: "flex" },
    _a$3[".sp-button.".concat(buttonClassName)] = { display: "none" },
    _a$3["&:hover .sp-button.".concat(buttonClassName)] = { display: "flex" },
    _a$3["&:hover .sp-button.".concat(buttonClassName, " > span")] = { display: "none" },
    _a$3["&:hover .".concat(cubeClassName)] = { display: "none" },
    _a$3));
var cubeRotate = keyframes({
    "0%": {
        transform: "rotateX(-25.5deg) rotateY(45deg)",
    },
    "100%": {
        transform: "rotateX(-25.5deg) rotateY(405deg)",
    },
});
var sidesClassNames = css({
    animation: "".concat(cubeRotate, " 1s linear infinite"),
    animationFillMode: "forwards",
    transformStyle: "preserve-3d",
    transform: "rotateX(-25.5deg) rotateY(45deg)",
    "*": {
        border: "10px solid $colors$clickable",
        borderRadius: "8px",
        background: "$colors$surface1",
    },
    ".top": {
        transform: "rotateX(90deg) translateZ(44px)",
        transformOrigin: "50% 50%",
    },
    ".bottom": {
        transform: "rotateX(-90deg) translateZ(44px)",
        transformOrigin: "50% 50%",
    },
    ".front": {
        transform: "rotateY(0deg) translateZ(44px)",
        transformOrigin: "50% 50%",
    },
    ".back": {
        transform: "rotateY(-180deg) translateZ(44px)",
        transformOrigin: "50% 50%",
    },
    ".left": {
        transform: "rotateY(-90deg) translateZ(44px)",
        transformOrigin: "50% 50%",
    },
    ".right": {
        transform: "rotateY(90deg) translateZ(44px)",
        transformOrigin: "50% 50%",
    },
});
var Loading = function (_a) {
    var className = _a.className, showOpenInCodeSandbox = _a.showOpenInCodeSandbox, props = __rest(_a, ["className", "showOpenInCodeSandbox"]);
    var classNames = useClassNames();
    return (jsxs("div", __assign({ className: classNames("cube-wrapper", [wrapperClassName$2, className]), title: "Open in CodeSandbox" }, props, { children: [showOpenInCodeSandbox && jsx(OpenInCodeSandboxButton, {}), jsx("div", { className: classNames("cube", [cubeClassName]), children: jsxs("div", { className: classNames("sides", [sidesClassNames]), children: [jsx("div", { className: "top" }), jsx("div", { className: "right" }), jsx("div", { className: "bottom" }), jsx("div", { className: "left" }), jsx("div", { className: "front" }), jsx("div", { className: "back" })] }) })] })));
};

var loadingClassName = css({
    backgroundColor: "$colors$surface1",
});
var LoadingOverlay = function (_a) {
    var clientId = _a.clientId, loading = _a.loading, className = _a.className, style = _a.style, showOpenInCodeSandbox = _a.showOpenInCodeSandbox, props = __rest(_a, ["clientId", "loading", "className", "style", "showOpenInCodeSandbox"]);
    var classNames = useClassNames();
    var _b = useSandpack().sandpack, runSandpack = _b.runSandpack, environment = _b.environment;
    var _c = React.useState(false), shouldShowStdout = _c[0], setShouldShowStdout = _c[1];
    var loadingOverlayState = useLoadingOverlayState(clientId, loading);
    var progressMessage = useSandpackPreviewProgress({ clientId: clientId });
    var stdoutData = useSandpackShellStdout({ clientId: clientId }).logs;
    React.useEffect(function () {
        var timer;
        if (progressMessage === null || progressMessage === void 0 ? void 0 : progressMessage.includes("Running")) {
            timer = setTimeout(function () {
                setShouldShowStdout(true);
            }, 3000);
        }
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [progressMessage]);
    if (loadingOverlayState === "HIDDEN") {
        return null;
    }
    if (loadingOverlayState === "TIMEOUT") {
        return (jsx("div", __assign({ className: classNames("overlay", [
                classNames("error"),
                absoluteClassName,
                errorClassName,
                errorBundlerClassName,
                className,
            ]) }, props, { children: jsxs("div", { className: classNames("error-message", [errorMessageClassName]), children: [jsx("p", { className: classNames("error-title", [css({ fontWeight: "bold" })]), children: "Couldn't connect to server" }), jsx("div", { className: classNames("error-message", [errorMessageClassName]), children: jsxs("p", { children: ["This means sandpack cannot connect to the runtime or your network is having some issues. Please check the network tab in your browser and try again. If the problem persists, report it via", " ", jsx("a", { href: "mailto:hello@codesandbox.io?subject=Sandpack Timeout Error", children: "email" }), " ", "or submit an issue on", " ", jsx("a", { href: "https://github.com/codesandbox/sandpack/issues", rel: "noreferrer noopener", target: "_blank", children: "GitHub." })] }) }), jsxs("p", { className: classNames("error-message", [
                            errorMessageClassName({ errorCode: true }),
                        ]), children: ["ENV: ", environment, jsx("br", {}), "ERROR: TIME_OUT"] }), jsx("div", { children: jsxs("button", { className: classNames("button", [
                                classNames("icon-standalone"),
                                buttonClassName,
                                iconStandaloneClassName,
                                roundedButtonClassName,
                            ]), onClick: runSandpack, title: "Restart script", type: "button", children: [jsx(RestartIcon, {}), " ", jsx("span", { children: "Try again" })] }) })] }) })));
    }
    var stillLoading = loadingOverlayState === "LOADING" || loadingOverlayState === "PRE_FADING";
    return (jsxs(Fragment, { children: [jsxs("div", __assign({ className: classNames("overlay", [
                    classNames("loading"),
                    absoluteClassName,
                    loadingClassName,
                    className,
                ]), style: __assign(__assign({}, style), { opacity: stillLoading ? 1 : 0, transition: "opacity ".concat(FADE_ANIMATION_DURATION, "ms ease-out") }) }, props, { children: [shouldShowStdout && (jsx("div", { className: stdoutPreview.toString(), children: jsx(StdoutList, { data: stdoutData }) })), jsx(Loading, { showOpenInCodeSandbox: showOpenInCodeSandbox })] })), progressMessage && (jsx("div", { className: progressClassName$1.toString(), children: jsx("p", { children: progressMessage }) }))] }));
};
var stdoutPreview = css({
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "$space$8",
    overflow: "auto",
    opacity: 0.5,
    overflowX: "hidden",
});
var progressClassName$1 = css({
    position: "absolute",
    left: "$space$5",
    bottom: "$space$4",
    zIndex: "$top",
    color: "$colors$clickable",
    animation: "".concat(fadeIn, " 150ms ease"),
    fontFamily: "$font$mono",
    fontSize: ".8em",
    width: "75%",
    p: {
        whiteSpace: "nowrap",
        margin: 0,
        textOverflow: "ellipsis",
        overflow: "hidden",
    },
});

var DependenciesProgress = function (_a) {
    var clientId = _a.clientId;
    var progressMessage = useSandpackPreviewProgress({
        timeout: 3000,
        clientId: clientId,
    });
    if (!progressMessage) {
        return null;
    }
    return (jsx("div", { className: progressClassName.toString(), children: jsx("p", { children: progressMessage }) }));
};
var progressClassName = css({
    position: "absolute",
    left: "$space$5",
    bottom: "$space$4",
    zIndex: "$top",
    color: "$colors$clickable",
    animation: "".concat(fadeIn, " 150ms ease"),
    fontFamily: "$font$mono",
    fontSize: ".8em",
    width: "75%",
    p: {
        whiteSpace: "nowrap",
        margin: 0,
        textOverflow: "ellipsis",
        overflow: "hidden",
    },
});

var explorerClassName = css({
    borderRadius: "0",
    width: "100%",
    padding: 0,
    marginBottom: "$space$2",
    span: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    svg: {
        marginRight: "$space$1",
    },
});
var File = function (_a) {
    var selectFile = _a.selectFile, path = _a.path, active = _a.active, onClick = _a.onClick, depth = _a.depth, isDirOpen = _a.isDirOpen;
    var classNames = useClassNames();
    var onClickButton = function (event) {
        if (selectFile) {
            selectFile(path);
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    var fileName = path.split("/").filter(Boolean).pop();
    var getIcon = function () {
        if (selectFile)
            return jsx(FileIcon, {});
        return isDirOpen ? jsx(DirectoryIconOpen, {}) : jsx(DirectoryIconClosed, {});
    };
    return (jsxs("button", { className: classNames("button", [
            classNames("explorer"),
            buttonClassName,
            explorerClassName,
        ]), "data-active": active, onClick: onClickButton, style: { paddingLeft: 18 * depth + "px" }, title: fileName, type: "button", children: [getIcon(), jsx("span", { children: fileName })] }));
};

var Directory = function (_a) {
    var prefixedPath = _a.prefixedPath, files = _a.files, selectFile = _a.selectFile, activeFile = _a.activeFile, depth = _a.depth, autoHiddenFiles = _a.autoHiddenFiles, visibleFiles = _a.visibleFiles, initialCollapsedFolder = _a.initialCollapsedFolder;
    var _b = React.useState(!(initialCollapsedFolder === null || initialCollapsedFolder === void 0 ? void 0 : initialCollapsedFolder.includes(prefixedPath))), open = _b[0], setOpen = _b[1];
    var toggle = function () { return setOpen(function (prev) { return !prev; }); };
    return (jsxs("div", { children: [jsx(File, { depth: depth, isDirOpen: open, onClick: toggle, path: prefixedPath + "/" }), open && (jsx(ModuleList, { activeFile: activeFile, autoHiddenFiles: autoHiddenFiles, depth: depth + 1, files: files, initialCollapsedFolder: initialCollapsedFolder, prefixedPath: prefixedPath, selectFile: selectFile, visibleFiles: visibleFiles }))] }, prefixedPath));
};

var fromPropsToModules = function (_a) {
    var autoHiddenFiles = _a.autoHiddenFiles, visibleFiles = _a.visibleFiles, files = _a.files, prefixedPath = _a.prefixedPath;
    var hasVisibleFilesOption = visibleFiles.length > 0;
    /**
     * When visibleFiles or activeFile are set, the hidden and active flags on the files prop are ignored.
     */
    var filterByHiddenProperty = autoHiddenFiles && !hasVisibleFilesOption;
    var filterByVisibleFilesOption = autoHiddenFiles && !!hasVisibleFilesOption;
    var fileListWithoutPrefix = Object.keys(files)
        .filter(function (filePath) {
        var _a;
        var isValidatedPath = filePath.startsWith(prefixedPath);
        if (filterByVisibleFilesOption) {
            return isValidatedPath && visibleFiles.includes(filePath);
        }
        if (filterByHiddenProperty) {
            return isValidatedPath && !((_a = files[filePath]) === null || _a === void 0 ? void 0 : _a.hidden);
        }
        return isValidatedPath;
    })
        .map(function (file) { return file.substring(prefixedPath.length); });
    var directories = new Set(fileListWithoutPrefix
        .filter(function (file) { return file.includes("/"); })
        .map(function (file) { return "".concat(prefixedPath).concat(file.split("/")[0], "/"); }));
    var modules = fileListWithoutPrefix
        .filter(function (file) { return !file.includes("/"); })
        .map(function (file) { return "".concat(prefixedPath).concat(file); });
    return { directories: Array.from(directories), modules: modules };
};

var ModuleList = function (_a) {
    var _b = _a.depth, depth = _b === void 0 ? 0 : _b, activeFile = _a.activeFile, selectFile = _a.selectFile, prefixedPath = _a.prefixedPath, files = _a.files, autoHiddenFiles = _a.autoHiddenFiles, visibleFiles = _a.visibleFiles, initialCollapsedFolder = _a.initialCollapsedFolder;
    var _c = fromPropsToModules({
        visibleFiles: visibleFiles,
        autoHiddenFiles: autoHiddenFiles,
        prefixedPath: prefixedPath,
        files: files,
    }), directories = _c.directories, modules = _c.modules;
    return (jsxs("div", { children: [directories.map(function (dir) { return (jsx(Directory, { activeFile: activeFile, autoHiddenFiles: autoHiddenFiles, depth: depth, files: files, initialCollapsedFolder: initialCollapsedFolder, prefixedPath: dir, selectFile: selectFile, visibleFiles: visibleFiles }, dir)); }), modules.map(function (file) { return (jsx(File, { active: activeFile === file, depth: depth, path: file, selectFile: selectFile }, file)); })] }));
};

var fileExplorerClassName = css({
    padding: "$space$3",
    overflow: "auto",
    height: "100%",
});
var SandpackFileExplorer = function (_a) {
    var className = _a.className, _b = _a.autoHiddenFiles, autoHiddenFiles = _b === void 0 ? false : _b, _c = _a.initialCollapsedFolder, initialCollapsedFolder = _c === void 0 ? [] : _c, props = __rest(_a, ["className", "autoHiddenFiles", "initialCollapsedFolder"]);
    var _d = useSandpack(), _e = _d.sandpack, status = _e.status, updateFile = _e.updateFile, deleteFile = _e.deleteFile, activeFile = _e.activeFile, files = _e.files, openFile = _e.openFile, visibleFilesFromProps = _e.visibleFilesFromProps, listen = _d.listen;
    var classNames = useClassNames();
    React.useEffect(function watchFSFilesChanges() {
        if (status !== "running")
            return;
        var unsubscribe = listen(function (message) {
            if (message.type === "fs/change") {
                updateFile(message.path, message.content, false);
            }
            if (message.type === "fs/remove") {
                deleteFile(message.path, false);
            }
        });
        return unsubscribe;
    }, [status]);
    var orderedFiles = Object.keys(files)
        .sort()
        .reduce(function (obj, key) {
        obj[key] = files[key];
        return obj;
    }, {});
    return (jsx("div", __assign({ className: classNames("file-explorer", [stackClassName, className]) }, props, { children: jsx("div", { className: classNames("file-explorer-list", [fileExplorerClassName]), children: jsx(ModuleList, { activeFile: activeFile, autoHiddenFiles: autoHiddenFiles, files: orderedFiles, initialCollapsedFolder: initialCollapsedFolder, prefixedPath: "/", selectFile: openFile, visibleFiles: visibleFilesFromProps }) }) })));
};

var splitUrl = function (url) {
    var match = url.match(/(https?:\/\/.*?)\//);
    if (match && match[1]) {
        return [match[1], url.replace(match[1], "")];
    }
    return [url, "/"];
};

var navigatorClassName = css({
    display: "flex",
    alignItems: "center",
    height: "$layout$headerHeight",
    borderBottom: "1px solid $colors$surface2",
    padding: "$space$3 $space$2",
    background: "$colors$surface1",
});
var inputClassName = css({
    backgroundColor: "$colors$surface2",
    color: "$colors$clickable",
    padding: "$space$1 $space$3",
    borderRadius: "99999px",
    border: "1px solid $colors$surface2",
    height: "24px",
    lineHeight: "24px",
    fontSize: "inherit",
    outline: "none",
    flex: 1,
    marginLeft: "$space$4",
    width: "0",
    transition: "background $transitions$default",
    "&:hover": {
        backgroundColor: "$colors$surface3",
    },
    "&:focus": {
        backgroundColor: "$surface1",
        border: "1px solid $colors$accent",
        color: "$colors$base",
    },
});
var Navigator = function (_a) {
    var _b;
    var clientId = _a.clientId, onURLChange = _a.onURLChange, className = _a.className, startRoute = _a.startRoute, props = __rest(_a, ["clientId", "onURLChange", "className", "startRoute"]);
    var _c = React.useState(""), baseUrl = _c[0], setBaseUrl = _c[1];
    var _d = useSandpack(), sandpack = _d.sandpack, dispatch = _d.dispatch, listen = _d.listen;
    var _e = React.useState((_b = startRoute !== null && startRoute !== void 0 ? startRoute : sandpack.startRoute) !== null && _b !== void 0 ? _b : "/"), relativeUrl = _e[0], setRelativeUrl = _e[1];
    var _f = React.useState(false), backEnabled = _f[0], setBackEnabled = _f[1];
    var _g = React.useState(false), forwardEnabled = _g[0], setForwardEnabled = _g[1];
    var classNames = useClassNames();
    React.useEffect(function () {
        var unsub = listen(function (message) {
            if (message.type === "urlchange") {
                var url = message.url, back = message.back, forward = message.forward;
                var _a = splitUrl(url), newBaseUrl = _a[0], newRelativeUrl = _a[1];
                setBaseUrl(newBaseUrl);
                setRelativeUrl(newRelativeUrl);
                setBackEnabled(back);
                setForwardEnabled(forward);
            }
        }, clientId);
        return function () { return unsub(); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleInputChange = function (e) {
        var path = e.target.value.startsWith("/")
            ? e.target.value
            : "/".concat(e.target.value);
        setRelativeUrl(path);
    };
    var handleKeyDown = function (e) {
        if (e.code === "Enter") {
            //  Enter
            e.preventDefault();
            e.stopPropagation();
            if (typeof onURLChange === "function") {
                onURLChange(baseUrl + e.currentTarget.value);
            }
        }
    };
    var handleRefresh = function () {
        dispatch({ type: "refresh" });
    };
    var handleBack = function () {
        dispatch({ type: "urlback" });
    };
    var handleForward = function () {
        dispatch({ type: "urlforward" });
    };
    var buttonsClassNames = classNames("button", [
        classNames("icon"),
        buttonClassName,
        iconClassName,
        css({
            minWidth: "$space$6",
            justifyContent: "center",
        }),
    ]);
    return (jsxs("div", __assign({ className: classNames("navigator", [navigatorClassName, className]) }, props, { children: [jsx("button", { "aria-label": "Go back one page", className: buttonsClassNames, disabled: !backEnabled, onClick: handleBack, type: "button", children: jsx(BackwardIcon, {}) }), jsx("button", { "aria-label": "Go forward one page", className: buttonsClassNames, disabled: !forwardEnabled, onClick: handleForward, type: "button", children: jsx(ForwardIcon, {}) }), jsx("button", { "aria-label": "Refresh page", className: buttonsClassNames, onClick: handleRefresh, type: "button", children: jsx(RefreshIcon, {}) }), jsx("input", { "aria-label": "Current Sandpack URL", className: classNames("input", [inputClassName]), name: "Current Sandpack URL", onChange: handleInputChange, onKeyDown: handleKeyDown, type: "text", value: relativeUrl })] })));
};

var _a$2;
var previewClassName = css((_a$2 = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "white",
        overflow: "auto",
        position: "relative"
    },
    _a$2[".".concat(THEME_PREFIX, "-bridge-frame")] = {
        border: 0,
        position: "absolute",
        left: "$space$2",
        bottom: "$space$2",
        zIndex: "$top",
        height: 12,
        width: "30%",
        mixBlendMode: "multiply",
        pointerEvents: "none",
    },
    _a$2));
var previewIframe = css({
    border: "0",
    outline: "0",
    width: "100%",
    height: "100%",
    minHeight: "160px",
    maxHeight: "2000px",
    flex: 1,
});
var previewActionsClassName$1 = css({
    display: "flex",
    position: "absolute",
    bottom: "$space$2",
    right: "$space$2",
    zIndex: "$overlay",
    gap: "$space$2",
});
var SandpackPreview = React.forwardRef(function (_a, ref) {
    var _b = _a.showNavigator, showNavigator = _b === void 0 ? false : _b, _c = _a.showRefreshButton, showRefreshButton = _c === void 0 ? true : _c, _d = _a.showOpenInCodeSandbox, showOpenInCodeSandbox = _d === void 0 ? true : _d, _e = _a.showSandpackErrorOverlay, showSandpackErrorOverlay = _e === void 0 ? true : _e; _a.showOpenNewtab; var _g = _a.showRestartButton, showRestartButton = _g === void 0 ? true : _g, _h = _a.actionsChildren, actionsChildren = _h === void 0 ? jsx(Fragment, {}) : _h, children = _a.children, className = _a.className, _j = _a.startRoute, startRoute = _j === void 0 ? "/" : _j, props = __rest(_a, ["showNavigator", "showRefreshButton", "showOpenInCodeSandbox", "showSandpackErrorOverlay", "showOpenNewtab", "showRestartButton", "actionsChildren", "children", "className", "startRoute"]);
    var _k = useSandpackClient({ startRoute: startRoute }), sandpack = _k.sandpack, listen = _k.listen, iframe = _k.iframe, getClient = _k.getClient, clientId = _k.clientId, dispatch = _k.dispatch;
    var _l = React.useState(null), iframeComputedHeight = _l[0], setComputedAutoHeight = _l[1];
    var status = sandpack.status;
    var refresh = useSandpackNavigation(clientId).refresh;
    var restart = useSandpackShell(clientId).restart;
    var classNames = useClassNames();
    React.useEffect(function () {
        var unsubscribe = listen(function (message) {
            if (message.type === "resize") {
                setComputedAutoHeight(message.height);
            }
        });
        return unsubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useImperativeHandle(ref, function () { return ({
        clientId: clientId,
        getClient: getClient,
    }); }, [getClient, clientId]);
    var handleNewURL = function (newUrl) {
        if (!iframe.current) {
            return;
        }
        iframe.current.src = newUrl;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    };
    return (jsxs(SandpackStack, __assign({ className: classNames("preview", [className]) }, props, { children: [showNavigator && (jsx(Navigator, { clientId: clientId, onURLChange: handleNewURL, startRoute: startRoute })), jsxs("div", { className: classNames("preview-container", [previewClassName]), children: [jsx("iframe", { ref: iframe, className: classNames("preview-iframe", [previewIframe]), style: {
                            // set height based on the content only in auto mode
                            // and when the computed height was returned by the bundler
                            height: iframeComputedHeight ? iframeComputedHeight : undefined,
                        }, title: "Sandpack Preview" }), jsxs("div", { className: classNames("preview-actions", [previewActionsClassName$1]), children: [actionsChildren, showRestartButton && sandpack.environment === "node" && (jsx(RoundedButton, { onClick: restart, children: jsx(RestartIcon, {}) })), !showNavigator && showRefreshButton && status === "running" && (jsx(RoundedButton, { onClick: refresh, children: jsx(RefreshIcon, {}) })), sandpack.teamId && (jsx("button", { className: classNames("button", [
                                    classNames("icon-standalone"),
                                    buttonClassName,
                                    iconStandaloneClassName,
                                    roundedButtonClassName,
                                ]), onClick: function () { return dispatch({ type: "sign-out" }); }, title: "Sign out", type: "button", children: jsx(SignOutIcon, {}) })), showOpenInCodeSandbox && jsx(OpenInCodeSandboxButton, {})] }), jsx(LoadingOverlay, { clientId: clientId, showOpenInCodeSandbox: showOpenInCodeSandbox }), showSandpackErrorOverlay && jsx(ErrorOverlay, {}), children] })] })));
});

var _a$1;
var transpiledCodeClassName = css((_a$1 = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
        overflow: "auto",
        minHeight: "160px",
        flex: 1
    },
    _a$1[".".concat(THEME_PREFIX, "-stack")] = {
        height: "100%",
    },
    _a$1));
var SandpackTranspiledCode = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var sandpack = useSandpack().sandpack;
    var transpiledCode = useTranspiledCode();
    var classNames = useClassNames();
    var hiddenIframeRef = React.useRef(null);
    React.useEffect(function () {
        var hiddenIframe = hiddenIframeRef.current;
        if (hiddenIframe) {
            sandpack.registerBundler(hiddenIframe, "hidden");
        }
        return function () {
            sandpack.unregisterBundler("hidden");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (jsxs("div", __assign({ className: classNames("transpiled-code", [
            stackClassName,
            transpiledCodeClassName,
            className,
        ]) }, props, { children: [jsx(SandpackCodeViewer, __assign({ code: transpiledCode !== null && transpiledCode !== void 0 ? transpiledCode : "", initMode: sandpack.initMode }, props)), jsx("iframe", { ref: hiddenIframeRef, style: { display: "none" }, title: "transpiled sandpack code" }), jsx(ErrorOverlay, {}), jsx(LoadingOverlay, { clientId: "hidden", showOpenInCodeSandbox: false })] })));
};

var wrapperClassName$1 = css({
    justifyContent: "space-between",
    borderBottom: "1px solid $colors$surface2",
    padding: "0 $space$2",
    fontFamily: "$font$mono",
    height: "$layout$headerHeight",
    minHeight: "$layout$headerHeight",
    overflowX: "auto",
    whiteSpace: "nowrap",
});
var flexClassName$1 = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "$space$2",
});
var Header$1 = function (_a) {
    var status = _a.status, suiteOnly = _a.suiteOnly, setSuiteOnly = _a.setSuiteOnly, setVerbose = _a.setVerbose, verbose = _a.verbose, watchMode = _a.watchMode, setWatchMode = _a.setWatchMode, showSuitesOnly = _a.showSuitesOnly, showWatchButton = _a.showWatchButton, showVerboseButton = _a.showVerboseButton, hideTestsAndSupressLogs = _a.hideTestsAndSupressLogs;
    var classNames = useClassNames();
    var buttonsClassName = classNames("test-header-button", [
        buttonClassName,
        roundedButtonClassName,
        css({ padding: "$space$1 $space$3" }),
    ]);
    return (jsxs("div", { className: classNames("test-header", [wrapperClassName$1, flexClassName$1]), children: [jsx("div", { className: classNames("test-header-wrapper", [flexClassName$1]), children: jsxs("p", { className: classNames("test-header-title", [
                        css({
                            lineHeight: 1,
                            margin: 0,
                            color: "$colors$base",
                            fontSize: "$font$size",
                            display: "flex",
                            alignItems: "center",
                            gap: "$space$2",
                        }),
                    ]), children: [jsx(ConsoleIcon, {}), "Tests"] }) }), jsxs("div", { className: classNames("test-header-actions", [flexClassName$1]), children: [showSuitesOnly && (jsx("button", { className: buttonsClassName, "data-active": suiteOnly, disabled: status === "initialising", onClick: setSuiteOnly, type: "button", children: "Suite only" })), showVerboseButton && (jsx("button", { className: buttonsClassName, "data-active": verbose, disabled: status === "initialising" || hideTestsAndSupressLogs, onClick: setVerbose, type: "button", children: "Verbose" })), showWatchButton && (jsx("button", { className: buttonsClassName, "data-active": watchMode, disabled: status === "initialising", onClick: setWatchMode, type: "button", children: "Watch" }))] })] }));
};

var RunButton = function (_a) {
    var onClick = _a.onClick;
    return (jsx(RoundedButton, { onClick: onClick, title: "Run tests", children: jsx(RunIcon, {}) }));
};

var setTestTheme = function (isDark) { return ({
    "--test-pass": isDark ? "#18df16" : "#15c213",
    "--test-fail": isDark ? "#df162b" : "#c21325",
    "--test-skip": isDark ? "#eace2b" : "#c2a813",
    "--test-run": isDark ? "#eace2b" : "#c2a813",
    "--test-title": isDark ? "#3fbabe" : "#256c6f",
}); };
var color = css({
    variants: {
        status: {
            pass: { color: "var(--test-pass)" },
            fail: { color: "var(--test-fail)" },
            skip: { color: "var(--test-skip)" },
            title: { color: "var(--test-title)" },
        },
    },
});
var passTextClassName = color({ status: "pass" });
var failTextClassName = color({ status: "fail" });
var skipTextClassName = color({ status: "skip" });
var titleTextClassName = color({ status: "title" });
var background = css({
    variants: {
        status: {
            pass: { background: "var(--test-pass)", color: "$colors$surface1" },
            fail: { background: "var(--test-fail)", color: "$colors$surface1" },
            run: { background: "var(--test-run)", color: "$colors$surface1" },
        },
    },
});
var runBackgroundClassName = background({ status: "run" });
var passBackgroundClassName = background({ status: "pass" });
var failBackgroundClassName = background({ status: "fail" });

var testContainerClassName = css({
    marginLeft: "$space$4",
});
var containerClassName$4 = css({
    marginBottom: "$space$2",
    color: "$colors$clickable",
});
var testClassName = css({
    marginBottom: "$space$2",
    color: "$colors$hover",
});
var durationClassName = css({
    marginLeft: "$space$2",
});
var gapRightClassName = css({
    marginRight: "$space$2",
});
var Tests = function (_a) {
    var tests = _a.tests; _a.style;
    var classNames = useClassNames();
    return (jsx("div", { className: classNames("test", [testContainerClassName]), children: tests.map(function (test) { return (jsxs("div", { className: classNames("test-result", [containerClassName$4]), children: [test.status === "pass" && (jsx("span", { className: classNames("test-pass-text", [
                        passTextClassName,
                        gapRightClassName,
                    ]), children: "\u2713" })), test.status === "fail" && (jsx("span", { className: classNames("test-fail-text", [
                        failTextClassName,
                        gapRightClassName,
                    ]), children: "\u2715" })), test.status === "idle" && (jsx("span", { className: classNames("test-idle-text", [
                        skipTextClassName,
                        gapRightClassName,
                    ]), children: "\u25CB" })), jsx("span", { className: classNames("test-name-text", [testClassName]), children: test.name }), test.duration !== undefined && (jsxs("span", { className: classNames("test-duration-text", [durationClassName]), children: ["(", test.duration, " ms)"] }))] }, test.name)); }) }));
};

var getTests = function (block) {
    var _a;
    var _b, _c;
    return (_a = Object.values((_b = block.tests) !== null && _b !== void 0 ? _b : {})).concat.apply(_a, Object.values((_c = block.describes) !== null && _c !== void 0 ? _c : {}).map(getTests));
};
var getFailingTests = function (block) {
    return getTests(block).filter(function (t) { return t.status === "fail"; });
};
var getAllTestResults = function (specs) {
    return specs.map(getSpecTestResults).reduce(function (acc, stats) {
        return {
            pass: acc.pass + stats.pass,
            fail: acc.fail + stats.fail,
            skip: acc.skip + stats.skip,
            total: acc.total + stats.total,
        };
    }, { pass: 0, skip: 0, fail: 0, total: 0 });
};
var getSpecTestResults = function (spec) {
    return getTests(spec).reduce(function (acc, test) {
        return {
            pass: test.status === "pass" ? acc.pass + 1 : acc.pass,
            fail: test.status === "fail" ? acc.fail + 1 : acc.fail,
            skip: test.status === "idle" || test.status === "running"
                ? acc.skip + 1
                : acc.skip,
            total: acc.total + 1,
        };
    }, { pass: 0, fail: 0, skip: 0, total: 0 });
};
var getAllSuiteResults = function (specs) {
    return specs
        .filter(function (spec) {
        var _a, _b;
        return Object.values((_a = spec.describes) !== null && _a !== void 0 ? _a : {}).length > 0 ||
            Object.values((_b = spec.tests) !== null && _b !== void 0 ? _b : {}).length > 0;
    })
        .map(getSpecTestResults)
        .reduce(function (acc, stats) {
        return {
            pass: acc.pass + (stats.fail === 0 ? 1 : 0),
            fail: acc.fail + (stats.fail > 0 ? 1 : 0),
            total: acc.total + 1,
        };
    }, { pass: 0, fail: 0, total: 0 });
};
var getDuration = function (specs) {
    return flatMap(specs, getTests).reduce(function (acc, test) { return acc + (test.duration || 0); }, 0);
};
var isEmpty = function (block) {
    var _a, _b;
    return Object.values((_a = block.describes) !== null && _a !== void 0 ? _a : {}).length === 0 &&
        Object.values((_b = block.tests) !== null && _b !== void 0 ? _b : {}).length === 0;
};
var splitTail = function (as) {
    var lastIndex = as.length - 1;
    var head = as.slice(0, lastIndex);
    var tail = as[lastIndex];
    return [head, tail];
};
var flatMap = function (as, f) {
    return as.map(f).reduce(function (acc, next) { return acc.concat(next); }, []);
};
var set = function (path, value) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (object) {
        return cleanSet(object, path, value);
    };
};

var nameClassName = css({
    color: "$colors$hover",
    marginBottom: "$space$2",
});
var containerClassName$3 = css({
    marginLeft: "$space$4",
});
var Describes = function (_a) {
    var describes = _a.describes;
    var classNames = useClassNames();
    return (jsx(Fragment, { children: describes.map(function (describe) {
            var _a, _b;
            if (isEmpty(describe)) {
                return null;
            }
            var tests = Object.values((_a = describe.tests) !== null && _a !== void 0 ? _a : {});
            var describes = Object.values((_b = describe.describes) !== null && _b !== void 0 ? _b : {});
            return (jsxs("div", { className: classNames("test-describe", [containerClassName$3]), children: [jsx("div", { className: classNames("test-name", [nameClassName]), children: describe.name }), jsx(Tests, { tests: tests }), jsx(Describes, { describes: describes })] }, describe.name));
        }) }));
};

var containerClassName$2 = css({
    color: "$colors$hover",
    fontSize: "$font$size",
    padding: "$space$2",
    whiteSpace: "pre-wrap",
});
var FormattedError = function (_a) {
    var error = _a.error, path = _a.path;
    var classNames = useClassNames();
    return (jsx("div", { className: classNames("test-error", [containerClassName$2]), dangerouslySetInnerHTML: { __html: formatDiffMessage(error, path) } }));
};
var escapeHtml = function (unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};
var formatDiffMessage = function (error, path) {
    var _a, _b;
    var finalMessage = "";
    if (error.matcherResult) {
        finalMessage = "<span>".concat(escapeHtml((_a = error.message) !== null && _a !== void 0 ? _a : "")
            .replace(/(expected)/m, "<span class=\"".concat(passTextClassName, "\">$1</span>"))
            .replace(/(received)/m, "<span class=\"".concat(failTextClassName, "\">$1</span>"))
            .replace(/(Difference:)/m, "<span>$1</span>")
            .replace(/(Expected:)(.*)/m, "<span>$1</span><span class=\"".concat(passTextClassName, "\">$2</span>"))
            .replace(/(Received:)(.*)/m, "<span>$1</span><span class=\"".concat(failTextClassName, "\">$2</span>"))
            .replace(/^(-.*)/gm, "<span class=\"".concat(failTextClassName, "\">$1</span>"))
            .replace(/^(\+.*)/gm, "<span class=\"".concat(passTextClassName, "\">$1</span>")), "</span>");
    }
    else {
        finalMessage = escapeHtml((_b = error.message) !== null && _b !== void 0 ? _b : "");
    }
    if (error.mappedErrors &&
        error.mappedErrors[0] &&
        error.mappedErrors[0].fileName.endsWith(path) &&
        error.mappedErrors[0]._originalScriptCode) {
        var mappedError = error.mappedErrors[0];
        var _originalScriptCode = mappedError._originalScriptCode || [];
        var widestNumber_1 = Math.max.apply(Math, _originalScriptCode.map(function (code) { return (code.lineNumber + "").length; })) + 2;
        var margin_1 = Array.from({ length: widestNumber_1 }).map(function () { return " "; });
        finalMessage += "<br />";
        finalMessage += "<br />";
        finalMessage += "<div>";
        _originalScriptCode
            .filter(function (s) { return s.content.trim(); })
            .forEach(function (code) {
            var currentLineMargin = (code.lineNumber + "").length;
            var newMargin = __spreadArray([], margin_1, true);
            newMargin.length -= currentLineMargin;
            if (code.highlight) {
                newMargin.length -= 2;
            }
            var toBeIndex = code.content.indexOf(".to");
            var toBeMargin = Array.from({ length: margin_1.length + toBeIndex - (widestNumber_1 - 1) }, function () { return " "; });
            var content = escapeHtml(code.content)
                .replace(/(describe|test|it)(\()(&#039;|&quot;|`)(.*)(&#039;|&quot;|`)/m, "<span>$1$2$3</span><span class=\"".concat(titleTextClassName, "\">$4</span><span>$5</span>"))
                .replace(/(expect\()(.*)(\)\..*)(to[\w\d]*)(\()(.*)(\))/m, "<span>$1</span><span class=\"".concat(failTextClassName, "\">$2</span><span>$3</span><span style=\"text-decoration: underline; font-weight: 900\">$4</span><span>$5</span><span class=\"").concat(passTextClassName, "\">$6</span><span>$7</span>"));
            finalMessage +=
                "<div ".concat(code.highlight ? "style=\"font-weight:200;\"" : "", ">") +
                    (code.highlight
                        ? "<span class=\"".concat(failTextClassName, "\">></span> ")
                        : "") +
                    newMargin.join("") +
                    escapeHtml("" + code.lineNumber) +
                    " | " +
                    content +
                    "</div>" +
                    (code.highlight
                        ? "<div>" +
                            margin_1.join("") +
                            " | " +
                            toBeMargin.join("") +
                            "<span class=\"".concat(failTextClassName, "\">^</span>") +
                            "</div>"
                        : "");
        });
        finalMessage += "</div>";
    }
    return finalMessage.replace(/(?:\r\n|\r|\n)/g, "<br />");
};

var fileContainer = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "$space$2",
});
var gapBottomClassName$1 = css({
    marginBottom: "$space$2",
});
var failTestClassName = css({
    fontWeight: "bold",
});
var labelClassName$1 = css({
    borderRadius: "calc($border$radius / 2)",
});
var specLabelClassName = css({
    padding: "$space$1 $space$2",
    fontFamily: "$font$mono",
    textTransform: "uppercase",
    marginRight: "$space$2",
});
var filePathButtonClassName = css({
    fontFamily: "$font$mono",
    cursor: "pointer",
    display: "inline-block",
});
var filePathClassName = css({
    color: "$colors$clickable",
    textDecorationStyle: "dotted",
    textDecorationLine: "underline",
});
var fileNameClassName = css({
    color: "$colors$hover",
    fontWeight: "bold",
    textDecorationStyle: "dotted",
    textDecorationLine: "underline",
});
var Specs = function (_a) {
    var specs = _a.specs, openSpec = _a.openSpec, status = _a.status, verbose = _a.verbose, hideTestsAndSupressLogs = _a.hideTestsAndSupressLogs;
    var classNames = useClassNames();
    return (jsx(Fragment, { children: specs.map(function (spec) {
            if (spec.error) {
                return (jsxs("div", { className: classNames("test-spec", [gapBottomClassName$1]), children: [jsx(SpecLabel, { className: classNames("test-spec-error", [
                                labelClassName$1,
                                failBackgroundClassName,
                            ]), children: "Error" }), jsx(FilePath, { onClick: function () { return openSpec(spec.name); }, path: spec.name }), jsx(FormattedError, { error: spec.error, path: spec.name })] }, spec.name));
            }
            if (isEmpty(spec)) {
                return null;
            }
            var tests = Object.values(spec.tests);
            var describes = Object.values(spec.describes);
            var stats = getSpecTestResults(spec);
            return (jsxs("div", { className: classNames("test-spec-name", [gapBottomClassName$1]), children: [jsxs("div", { className: classNames("test-spec-name-container", [
                            fileContainer,
                        ]), children: [status === "complete" ? (stats.fail > 0 ? (jsx(SpecLabel, { className: classNames("test-spec-complete", [
                                    labelClassName$1,
                                    failBackgroundClassName,
                                ]), children: "Fail" })) : (jsx(SpecLabel, { className: classNames("test-spec-pass", [
                                    labelClassName$1,
                                    passBackgroundClassName,
                                ]), children: "Pass" }))) : (jsx(SpecLabel, { className: classNames("test-spec-run", [
                                    labelClassName$1,
                                    runBackgroundClassName,
                                ]), children: "Run" })), jsx(FilePath, { onClick: function () {
                                    if (!hideTestsAndSupressLogs) {
                                        openSpec(spec.name);
                                    }
                                }, path: spec.name })] }), verbose && !hideTestsAndSupressLogs && jsx(Tests, { tests: tests }), verbose && !hideTestsAndSupressLogs && (jsx(Describes, { describes: describes })), !hideTestsAndSupressLogs &&
                        getFailingTests(spec).map(function (test) {
                            return (jsxs("div", { className: classNames("test-spec-error", [
                                    gapBottomClassName$1,
                                ]), children: [jsxs("div", { className: classNames("test-spec-error-text", [
                                            failTestClassName,
                                            failTextClassName,
                                        ]), children: ["\u25CF ", test.blocks.join(" › "), " \u203A ", test.name] }), test.errors.map(function (e) { return (jsx(FormattedError, { error: e, path: test.path }, "failing-".concat(test.name, "-error"))); })] }, "failing-".concat(test.name)));
                        })] }, spec.name));
        }) }));
};
var SpecLabel = function (_a) {
    var children = _a.children, className = _a.className;
    var classNames = useClassNames();
    return (jsx("span", { className: classNames("test-spec-label", [specLabelClassName, className]), children: children }));
};
var FilePath = function (_a) {
    var onClick = _a.onClick, path = _a.path;
    var parts = path.split("/");
    var basePath = parts.slice(0, parts.length - 1).join("/") + "/";
    var fileName = parts[parts.length - 1];
    var classNames = useClassNames();
    return (jsxs("button", { className: classNames("test-filename", [
            buttonClassName,
            filePathButtonClassName,
        ]), onClick: onClick, type: "button", children: [jsx("span", { className: classNames("test-filename-base", [filePathClassName]), children: basePath }), jsx("span", { className: classNames("test-filename-file", [fileNameClassName]), children: fileName })] }));
};

var gapBottomClassName = css({
    marginBottom: "$space$2",
});
var labelClassName = css({
    fontWeight: "bold",
    color: "$colors$hover",
    whiteSpace: "pre-wrap",
});
var containerClassName$1 = css({
    fontWeight: "bold",
    color: "$colors$clickable",
});
var Summary = function (_a) {
    var suites = _a.suites, tests = _a.tests, duration = _a.duration;
    var widestLabel = "Test suites: ";
    var withMargin = function (label) {
        var difference = widestLabel.length - label.length;
        var margin = Array.from({ length: difference }, function () { return " "; }).join("");
        return label + margin;
    };
    var classNames = useClassNames();
    return (jsxs("div", { className: classNames("test-summary", [containerClassName$1]), children: [jsxs("div", { className: classNames("test-summary", [gapBottomClassName]), children: [jsx("span", { className: classNames("test-summary-suites-label", [labelClassName]), children: widestLabel }), suites.fail > 0 && (jsxs("span", { className: classNames("test-summary-suites-fail", [
                            failTextClassName,
                        ]), children: [suites.fail, " failed,", " "] })), suites.pass > 0 && (jsxs("span", { className: classNames("test-summary-suites-pass", [
                            passTextClassName,
                        ]), children: [suites.pass, " passed,", " "] })), jsxs("span", { children: [suites.total, " total"] })] }), jsxs("div", { className: classNames("test-summary", [gapBottomClassName]), children: [jsx("span", { className: classNames("test-summary-label", [labelClassName]), children: withMargin("Tests:") }), tests.fail > 0 && (jsxs("span", { className: classNames("test-summary-fail", [failTextClassName]), children: [tests.fail, " failed,", " "] })), tests.skip > 0 && (jsxs("span", { className: classNames("test-summary-skip", [skipTextClassName]), children: [tests.skip, " skipped,", " "] })), tests.pass > 0 && (jsxs("span", { className: classNames("test-summary-pass", [passTextClassName]), children: [tests.pass, " passed,", " "] })), jsxs("span", { children: [tests.total, " total"] })] }), jsxs("div", { className: classNames("test-summary-curation", [labelClassName]), children: [withMargin("Time:"), duration / 1000, "s"] })] }));
};

var previewActionsClassName = css({
    display: "flex",
    position: "absolute",
    bottom: "$space$2",
    right: "$space$2",
    zIndex: "$overlay",
    "> *": { marginLeft: "$space$2" },
});
var INITIAL_STATE = {
    specs: {},
    status: "initialising",
    verbose: false,
    watchMode: true,
    suiteOnly: false,
    specsCount: 0,
};
var SandpackTests = function (_a) {
    var _b = _a.verbose, verbose = _b === void 0 ? false : _b, _c = _a.watchMode, watchMode = _c === void 0 ? true : _c, style = _a.style, className = _a.className, onComplete = _a.onComplete, actionsChildren = _a.actionsChildren, _d = _a.showVerboseButton, showVerboseButton = _d === void 0 ? true : _d, _e = _a.showWatchButton, showWatchButton = _e === void 0 ? true : _e, _f = _a.hideTestsAndSupressLogs, hideTestsAndSupressLogs = _f === void 0 ? false : _f, props = __rest(_a, ["verbose", "watchMode", "style", "className", "onComplete", "actionsChildren", "showVerboseButton", "showWatchButton", "hideTestsAndSupressLogs"]);
    var theme = useSandpackTheme();
    var _g = useSandpackClient(), getClient = _g.getClient, iframe = _g.iframe, listen = _g.listen, sandpack = _g.sandpack;
    var _h = React.useState(__assign(__assign({}, INITIAL_STATE), { verbose: verbose, watchMode: watchMode })), state = _h[0], setState = _h[1];
    var runAllTests = React.useCallback(function () {
        setState(function (oldState) { return (__assign(__assign({}, oldState), { status: "running", specs: {} })); });
        var client = getClient();
        if (client) {
            client.dispatch({ type: "run-all-tests" });
        }
    }, [getClient]);
    var runSpec = React.useCallback(function () {
        setState(function (oldState) { return (__assign(__assign({}, oldState), { status: "running", specs: {} })); });
        var client = getClient();
        if (client) {
            client.dispatch({ type: "run-tests", path: sandpack.activeFile });
        }
    }, [getClient, sandpack.activeFile]);
    var testFileRegex = /.*\.(test|spec)\.[tj]sx?$/;
    var isSpecOpen = sandpack.activeFile.match(testFileRegex) !== null;
    React.useEffect(function () {
        var currentDescribeBlocks = [];
        var currentSpec = "";
        var unsubscribe = listen(function (data) {
            // Note: short-circuit if message isn't for the currently active spec when `suiteOnly` is true
            if (state.suiteOnly &&
                (("path" in data && data.path !== sandpack.activeFile) ||
                    ("test" in data &&
                        "path" in data.test &&
                        data.test.path !== sandpack.activeFile))) {
                return;
            }
            if (data.type === "action" &&
                data.action === "clear-errors" &&
                data.source === "jest") {
                currentSpec = data.path;
                return;
            }
            if (data.type === "test") {
                if (data.event === "initialize_tests") {
                    currentDescribeBlocks = [];
                    currentSpec = "";
                    if (state.watchMode) {
                        return runAllTests();
                    }
                    else {
                        return setState(function (oldState) { return (__assign(__assign({}, oldState), { status: "idle", specs: {} })); });
                    }
                }
                if (data.event === "test_count") {
                    return setState(function (oldState) { return (__assign(__assign({}, oldState), { specsCount: data.count })); });
                }
                if (data.event === "total_test_start") {
                    currentDescribeBlocks = [];
                    return setState(function (oldState) { return (__assign(__assign({}, oldState), { status: "running" })); });
                }
                if (data.event === "total_test_end") {
                    return setState(function (oldState) {
                        if (onComplete !== undefined) {
                            onComplete(oldState.specs);
                        }
                        return __assign(__assign({}, oldState), { status: "complete" });
                    });
                }
                if (data.event === "add_file") {
                    return setState(set(["specs", data.path], {
                        describes: {},
                        tests: {},
                        name: data.path,
                    }));
                }
                if (data.event === "remove_file") {
                    return setState(function (oldState) {
                        var specs = Object.entries(oldState.specs).reduce(function (acc, _a) {
                            var _b;
                            var key = _a[0], value = _a[1];
                            if (key === data.path) {
                                return acc;
                            }
                            else {
                                return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
                            }
                        }, {});
                        return __assign(__assign({}, oldState), { specs: specs });
                    });
                }
                if (data.event === "file_error") {
                    return setState(set(["specs", data.path, "error"], data.error));
                }
                if (data.event === "describe_start") {
                    currentDescribeBlocks.push(data.blockName);
                    var _a = splitTail(currentDescribeBlocks), describePath = _a[0], currentDescribe = _a[1];
                    var spec = currentSpec;
                    if (currentDescribe === undefined) {
                        return;
                    }
                    return setState(set(__spreadArray(__spreadArray([
                        "specs",
                        spec,
                        "describes"
                    ], flatMap(describePath, function (name) { return [name, "describes"]; }), true), [
                        currentDescribe,
                    ], false), {
                        name: data.blockName,
                        tests: {},
                        describes: {},
                    }));
                }
                if (data.event === "describe_end") {
                    currentDescribeBlocks.pop();
                    return;
                }
                if (data.event === "add_test") {
                    var _b = splitTail(currentDescribeBlocks), describePath = _b[0], currentDescribe = _b[1];
                    var test_1 = {
                        status: "idle",
                        errors: [],
                        name: data.testName,
                        blocks: __spreadArray([], currentDescribeBlocks, true),
                        path: data.path,
                    };
                    if (currentDescribe === undefined) {
                        return setState(set(["specs", data.path, "tests", data.testName], test_1));
                    }
                    else {
                        return setState(set(__spreadArray(__spreadArray([
                            "specs",
                            data.path,
                            "describes"
                        ], flatMap(describePath, function (name) { return [name, "describes"]; }), true), [
                            currentDescribe,
                            "tests",
                            data.testName,
                        ], false), test_1));
                    }
                }
                if (data.event === "test_start") {
                    var test_2 = data.test;
                    var _c = splitTail(test_2.blocks), describePath = _c[0], currentDescribe = _c[1];
                    var startedTest = {
                        status: "running",
                        name: test_2.name,
                        blocks: test_2.blocks,
                        path: test_2.path,
                        errors: [],
                    };
                    if (currentDescribe === undefined) {
                        return setState(set(["specs", test_2.path, "tests", test_2.name], startedTest));
                    }
                    else {
                        return setState(set(__spreadArray(__spreadArray([
                            "specs",
                            test_2.path,
                            "describes"
                        ], flatMap(describePath, function (name) { return [name, "describes"]; }), true), [
                            currentDescribe,
                            "tests",
                            test_2.name,
                        ], false), startedTest));
                    }
                }
                if (data.event === "test_end") {
                    var test_3 = data.test;
                    var _d = splitTail(test_3.blocks), describePath = _d[0], currentDescribe = _d[1];
                    var endedTest = {
                        status: test_3.status,
                        errors: test_3.errors,
                        duration: test_3.duration,
                        name: test_3.name,
                        blocks: test_3.blocks,
                        path: test_3.path,
                    };
                    if (currentDescribe === undefined) {
                        return setState(set(["specs", test_3.path, "tests", test_3.name], endedTest));
                    }
                    else {
                        return setState(set(__spreadArray(__spreadArray([
                            "specs",
                            test_3.path,
                            "describes"
                        ], flatMap(describePath, function (name) { return [name, "describes"]; }), true), [
                            currentDescribe,
                            "tests",
                            test_3.name,
                        ], false), endedTest));
                    }
                }
            }
        });
        return unsubscribe;
    }, [state.suiteOnly, state.watchMode, sandpack.activeFile]);
    React.useEffect(function watchMode() {
        var unsunscribe = listen(function (_a) {
            var type = _a.type;
            if (type === "done" && state.watchMode) {
                if (isSpecOpen) {
                    runSpec();
                }
                else {
                    runAllTests();
                }
            }
        });
        return unsunscribe;
    }, [runSpec, runAllTests, state.watchMode, isSpecOpen]);
    var openSpec = function (file) {
        sandpack.setActiveFile(file);
    };
    var specs = Object.values(state.specs);
    var duration = getDuration(specs);
    var testResults = getAllTestResults(specs);
    var suiteResults = getAllSuiteResults(specs);
    var classNames = useClassNames();
    return (jsxs(SandpackStack, __assign({ className: classNames("tests", [className]), style: __assign(__assign({}, setTestTheme(theme.themeMode === "dark")), style) }, props, { children: [jsx("iframe", { ref: iframe, style: { display: "none" }, title: "Sandpack Tests" }), jsx(Header$1, { hideTestsAndSupressLogs: hideTestsAndSupressLogs, setSuiteOnly: function () {
                    return setState(function (s) { return (__assign(__assign({}, s), { suiteOnly: !s.suiteOnly })); });
                }, setVerbose: function () {
                    return setState(function (s) { return (__assign(__assign({}, s), { verbose: !s.verbose })); });
                }, setWatchMode: function () {
                    setState(function (s) { return (__assign(__assign({}, s), { watchMode: !s.watchMode })); });
                }, showSuitesOnly: state.specsCount > 1, showVerboseButton: showVerboseButton, showWatchButton: showWatchButton, status: state.status, suiteOnly: state.suiteOnly, verbose: state.verbose, watchMode: state.watchMode }), state.status === "running" || state.status === "initialising" ? (jsx(Loading, { showOpenInCodeSandbox: false })) : (jsxs("div", { className: previewActionsClassName.toString(), children: [actionsChildren, jsx(RunButton, { onClick: state.suiteOnly ? runSpec : runAllTests })] })), jsx("div", { className: containerClassName.toString(), children: specs.length === 0 && state.status === "complete" ? (jsxs("div", { className: fileErrorContainerClassName.toString(), children: [jsx("p", { children: "No test files found." }), jsxs("p", { children: ["Test match:", " ", jsx("span", { className: failTextClassName.toString(), children: testFileRegex.toString() })] })] })) : (jsxs(Fragment, { children: [jsx(Specs, { hideTestsAndSupressLogs: hideTestsAndSupressLogs, openSpec: openSpec, specs: specs, status: state.status, verbose: state.verbose }), state.status === "complete" && testResults.total > 0 && (jsx(Summary, { duration: duration, suites: suiteResults, tests: testResults }))] })) })] })));
};
var containerClassName = css({
    padding: "$space$4",
    height: "100%",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    fontFamily: "$font$mono",
});
var fileErrorContainerClassName = css({
    fontWeight: "bold",
    color: "$colors$base",
});

var SYNTAX_ERROR_PATTERN = ["SyntaxError: ", "Error in sandbox:"];
var CLEAR_LOG = {
    id: "random",
    method: "clear",
    data: ["Console was cleared"],
};
var TRANSFORMED_TYPE_KEY = "@t";
var TRANSFORMED_TYPE_KEY_ALTERNATE = "#@t";
var CIRCULAR_REF_KEY = "@r";
var MAX_LENGTH_STRING = 10000;
var MAX_NEST_LEVEL = 2;
var MAX_KEYS = 400;
var MAX_MESSAGE_COUNT = MAX_KEYS * 2;

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Const
var GLOBAL = (function getGlobal() {
    if (typeof globalThis !== "undefined")
        return globalThis; // modern standard
    if (typeof window !== "undefined")
        return window; // browser
    if (typeof global !== "undefined")
        return global; // Node.js
    // eslint-disable-next-line no-restricted-globals
    if (typeof self !== "undefined")
        return self; // Web Worker
    throw Error("Unable to locate global object");
})();
var ARRAY_BUFFER_SUPPORTED = typeof ArrayBuffer === "function";
var MAP_SUPPORTED = typeof Map === "function";
var SET_SUPPORTED = typeof Set === "function";
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["infinity"] = 0] = "infinity";
    Arithmetic[Arithmetic["minusInfinity"] = 1] = "minusInfinity";
    Arithmetic[Arithmetic["minusZero"] = 2] = "minusZero";
})(Arithmetic || (Arithmetic = {}));
var transformers = {
    Arithmetic: function (data) {
        if (data === Arithmetic.infinity)
            return Infinity;
        if (data === Arithmetic.minusInfinity)
            return -Infinity;
        if (data === Arithmetic.minusZero)
            return -0;
        return data;
    },
    HTMLElement: function (data) {
        var sandbox = document.implementation.createHTMLDocument("sandbox");
        try {
            var element = sandbox.createElement(data.tagName);
            element.innerHTML = data.innerHTML;
            for (var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++) {
                var attribute = _a[_i];
                try {
                    element.setAttribute(attribute, data.attributes[attribute]);
                }
                catch (_b) {
                    //
                }
            }
            return element;
        }
        catch (e) {
            return data;
        }
    },
    Function: function (data) {
        var tempFun = function () { };
        Object.defineProperty(tempFun, "toString", {
            value: function () { return "function ".concat(data.name, "() {").concat(data.body, "}"); },
        });
        return tempFun;
    },
    "[[NaN]]": function () {
        return NaN;
    },
    "[[undefined]]": function () {
        return void 0;
    },
    "[[Date]]": function (val) {
        var date = new Date();
        date.setTime(val);
        return date;
    },
    "[[RegExp]]": function (val) {
        return new RegExp(val.src, val.flags);
    },
    "[[Error]]": function (val) {
        var Ctor = GLOBAL[val.name] || Error;
        var err = new Ctor(val.message);
        err.stack = val.stack;
        return err;
    },
    "[[ArrayBuffer]]": function (val) {
        if (ARRAY_BUFFER_SUPPORTED) {
            var buffer = new ArrayBuffer(val.length);
            var view = new Int8Array(buffer);
            view.set(val);
            return buffer;
        }
        return val;
    },
    "[[TypedArray]]": function (val) {
        return typeof GLOBAL[val.ctorName] === "function"
            ? new GLOBAL[val.ctorName](val.arr)
            : val.arr;
    },
    "[[Map]]": function (val) {
        if (MAP_SUPPORTED) {
            // NOTE: new Map(iterable) is not supported by all browsers
            var map = new Map();
            for (var i = 0; i < val.length; i += 2)
                map.set(val[i], val[i + 1]);
            return map;
        }
        var kvArr = [];
        // @ts-ignore
        for (var j = 0; j < val.length; j += 2)
            kvArr.push([val[i], val[i + 1]]);
        return kvArr;
    },
    "[[Set]]": function (val) {
        if (SET_SUPPORTED) {
            // NOTE: new Set(iterable) is not supported by all browsers
            var set = new Set();
            for (var i = 0; i < val.length; i++)
                set.add(val[i]);
            return set;
        }
        return val;
    },
};

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
var formatSymbols = function (message) {
    var _a;
    if (typeof message === "string" ||
        typeof message === "number" ||
        message === null) {
        return message;
    }
    else if (Array.isArray(message)) {
        return message.map(formatSymbols);
    }
    else if (typeof message == "object" && TRANSFORMED_TYPE_KEY in message) {
        var type = message[TRANSFORMED_TYPE_KEY];
        var transform = transformers[type];
        return transform(message.data);
    }
    else if (typeof message == "object" &&
        TRANSFORMED_TYPE_KEY_ALTERNATE in message) {
        var type = message[TRANSFORMED_TYPE_KEY_ALTERNATE];
        var transform = transformers[type];
        return transform(message.data);
    }
    else if (typeof message == "object" &&
        ((_a = message.constructor) === null || _a === void 0 ? void 0 : _a.name) === "NodeList") {
        var NodeList_1 = {};
        Object.entries(message).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            // @ts-ignore
            NodeList_1[key] = formatSymbols(value);
        });
        return NodeList_1;
    }
    return message;
};
var arrayToString = function (output, references, level) {
    var mergeArray = output.reduce(function (acc, curr, index) {
        return "".concat(acc).concat(index ? ", " : "").concat(fromConsoleToString(curr, references, level));
    }, "");
    return "[".concat(mergeArray, "]");
};
var objectToString = function (output, references, level) {
    var constructorName = output.constructor.name !== "Object" ? "".concat(output.constructor.name, " ") : "";
    if (level > MAX_NEST_LEVEL) {
        return constructorName;
    }
    var entries = Object.entries(output);
    var formattedObject = Object.entries(output).reduce(function (acc, _a, index) {
        var key = _a[0], value = _a[1];
        var comma = index === 0 ? "" : ", ";
        var breakLine = entries.length > 10 ? "\n  " : "";
        var formatted = fromConsoleToString(value, references, level);
        if (index === MAX_KEYS) {
            return acc + breakLine + "...";
        }
        else if (index > MAX_KEYS) {
            return acc;
        }
        return acc + "".concat(comma).concat(breakLine).concat(key, ": ") + formatted;
    }, "");
    return "".concat(constructorName, "{ ").concat(formattedObject).concat(entries.length > 10 ? "\n" : " ", "}");
};
var fromConsoleToString = function (message, references, level) {
    var _a;
    if (level === void 0) { level = 0; }
    try {
        var output_1 = formatSymbols(message);
        if (Array.isArray(output_1)) {
            return arrayToString(output_1, references, level + 1);
        }
        switch (typeof output_1) {
            case "string":
                return "\"".concat(output_1, "\"").slice(0, MAX_LENGTH_STRING);
            case "number":
            case "function":
            case "symbol":
                return output_1.toString();
            case "boolean":
                return String(output_1);
            case "undefined":
                return "undefined";
            case "object":
            default:
                if (output_1 instanceof RegExp ||
                    output_1 instanceof Error ||
                    output_1 instanceof Date) {
                    return output_1.toString();
                }
                if (output_1 === null) {
                    return String(null);
                }
                if (output_1 instanceof HTMLElement) {
                    return output_1.outerHTML.slice(0, MAX_LENGTH_STRING);
                }
                if (Object.entries(output_1).length === 0) {
                    return "{}";
                }
                if (CIRCULAR_REF_KEY in output_1) {
                    if (level > MAX_NEST_LEVEL) {
                        return "Unable to print information";
                    }
                    var newMessage = references[output_1[CIRCULAR_REF_KEY]];
                    return fromConsoleToString(newMessage, references, level + 1);
                }
                if (((_a = output_1.constructor) === null || _a === void 0 ? void 0 : _a.name) === "NodeList") {
                    var length_1 = output_1.length;
                    var nodes = new Array(length_1).fill(null).map(function (_, index) {
                        return fromConsoleToString(output_1[index], references);
                    });
                    return "NodeList(".concat(output_1.length, ")[").concat(nodes, "]");
                }
                return objectToString(output_1, references, level + 1);
        }
    }
    catch (_b) {
        return "Unable to print information";
    }
};

var getType = function (message) {
    switch (message) {
        case "warn":
            return "warning";
        case "clear":
            return "clear";
        case "error":
            return "error";
        case "log":
        case "info":
        default:
            return "info";
    }
};

var _a;
var ConsoleList = function (_a) {
    var data = _a.data;
    var classNames = useClassNames();
    return (jsx(Fragment, { children: data.map(function (_a, logIndex, references) {
            var data = _a.data, id = _a.id, method = _a.method;
            if (!data)
                return null;
            if (Array.isArray(data)) {
                return (jsx(React.Fragment, { children: data.map(function (msg, msgIndex) {
                        var fixReferences = references.slice(logIndex, references.length);
                        return (jsx("div", { className: classNames("console-item", [
                                consoleItemClassName({ variant: getType(method) }),
                            ]), children: jsx(CodeMirror, { code: method === "clear"
                                    ? msg
                                    : fromConsoleToString(msg, fixReferences), fileType: "js", initMode: "user-visible", showReadOnly: false, readOnly: true, wrapContent: true }) }, "".concat(id, "-").concat(msgIndex)));
                    }) }, id));
            }
            return null;
        }) }));
};
var consoleItemClassName = css((_a = {
        width: "100%",
        padding: "$space$3 $space$2",
        fontSize: ".8em",
        position: "relative",
        "&:not(:first-child):after": {
            content: "",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: "$colors$surface3",
        },
        /**
         * Editor reset
         */
        ".sp-cm": {
            padding: 0,
        },
        ".cm-editor": {
            background: "none",
        },
        ".cm-content": {
            padding: 0,
        }
    },
    _a[".".concat(THEME_PREFIX, "-pre-placeholder")] = {
        margin: "0 !important",
        fontSize: "1em",
    },
    _a.variants = {
        variant: {
            error: {
                color: "$colors$error",
                background: "$colors$errorSurface",
                "&:not(:first-child):after": {
                    background: "$colors$error",
                    opacity: 0.07,
                },
            },
            warning: {
                color: "$colors$warning",
                background: "$colors$warningSurface",
                "&:not(:first-child):after": {
                    background: "$colors$warning",
                    opacity: 0.07,
                },
            },
            clear: {
                fontStyle: "italic",
            },
            info: {},
        },
    },
    _a));

var wrapperClassName = css({
    justifyContent: "space-between",
    borderBottom: "1px solid $colors$surface2",
    padding: "0 $space$2",
    fontFamily: "$font$mono",
    height: "$layout$headerHeight",
    minHeight: "$layout$headerHeight",
    overflowX: "auto",
    whiteSpace: "nowrap",
});
var flexClassName = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "$space$2",
});
var Header = function (_a) {
    var currentTab = _a.currentTab, setCurrentTab = _a.setCurrentTab, node = _a.node;
    var classNames = useClassNames();
    var buttonsClassName = classNames("console-header-button", [
        buttonClassName,
        roundedButtonClassName,
        css({ padding: "$space$1 $space$3" }),
    ]);
    return (jsxs("div", { className: classNames("console-header", [
            wrapperClassName,
            flexClassName,
        ]), children: [jsxs("p", { className: classNames("console-header-title", [
                    css({
                        lineHeight: 1,
                        margin: 0,
                        color: "$colors$base",
                        fontSize: "$font$size",
                        display: "flex",
                        alignItems: "center",
                        gap: "$space$2",
                    }),
                ]), children: [jsx(ConsoleIcon, {}), jsx("span", { children: "Terminal" })] }), node && (jsxs("div", { className: classNames("console-header-actions", [flexClassName]), children: [jsx("button", { className: buttonsClassName, "data-active": currentTab === "server", onClick: function () { return setCurrentTab("server"); }, type: "button", children: "Server" }), jsx("button", { className: buttonsClassName, "data-active": currentTab === "client", onClick: function () { return setCurrentTab("client"); }, type: "button", children: "Client" })] }))] }));
};

/**
 * It provides an interface to consume the logs from a sandpack client.
 *
 * @category Hooks
 */
var useSandpackConsole = function (_a) {
    var clientId = _a.clientId, _b = _a.maxMessageCount, maxMessageCount = _b === void 0 ? MAX_MESSAGE_COUNT : _b, _c = _a.showSyntaxError, showSyntaxError = _c === void 0 ? false : _c, _d = _a.resetOnPreviewRestart, resetOnPreviewRestart = _d === void 0 ? false : _d;
    var _e = React.useState([]), logs = _e[0], setLogs = _e[1];
    var listen = useSandpack().listen;
    React.useEffect(function () {
        var unsubscribe = listen(function (message) {
            if (resetOnPreviewRestart && message.type === "start") {
                setLogs([]);
            }
            else if (message.type === "console" && message.codesandbox) {
                var payloadLog = Array.isArray(message.log)
                    ? message.log
                    : [message.log];
                if (payloadLog.find(function (_a) {
                    var method = _a.method;
                    return method === "clear";
                })) {
                    return setLogs([CLEAR_LOG]);
                }
                var logsMessages_1 = showSyntaxError
                    ? payloadLog
                    : payloadLog.filter(function (messageItem) {
                        var _a, _b, _c;
                        var messagesWithoutSyntaxErrors = (_c = (_b = (_a = messageItem === null || messageItem === void 0 ? void 0 : messageItem.data) === null || _a === void 0 ? void 0 : _a.filter) === null || _b === void 0 ? void 0 : _b.call(_a, function (dataItem) {
                            if (typeof dataItem !== "string")
                                return true;
                            var matches = SYNTAX_ERROR_PATTERN.filter(function (lookFor) {
                                return dataItem.startsWith(lookFor);
                            });
                            return matches.length === 0;
                        })) !== null && _c !== void 0 ? _c : [];
                        return messagesWithoutSyntaxErrors.length > 0;
                    });
                if (!logsMessages_1)
                    return;
                setLogs(function (prev) {
                    var messages = __spreadArray(__spreadArray([], prev, true), logsMessages_1, true).filter(function (value, index, self) {
                        return index === self.findIndex(function (s) { return s.id === value.id; });
                    });
                    while (messages.length > maxMessageCount) {
                        messages.shift();
                    }
                    return messages;
                });
            }
        }, clientId);
        return unsubscribe;
    }, [showSyntaxError, maxMessageCount, clientId, resetOnPreviewRestart]);
    return { logs: logs, reset: function () { return setLogs([]); } };
};

/**
 * `SandpackConsole` is a Sandpack devtool that allows printing
 * the console logs from a Sandpack client. It is designed to be
 * a light version of a browser console, which means that it's
 * limited to a set of common use cases you may encounter when coding.
 */
var SandpackConsole = React.forwardRef(function (_a, ref) {
    var _b;
    var _c = _a.showHeader, showHeader = _c === void 0 ? true : _c, _d = _a.showSyntaxError, showSyntaxError = _d === void 0 ? false : _d, maxMessageCount = _a.maxMessageCount, onLogsChange = _a.onLogsChange, className = _a.className; _a.showSetupProgress; var _f = _a.showResetConsoleButton, showResetConsoleButton = _f === void 0 ? true : _f, _g = _a.showRestartButton, showRestartButton = _g === void 0 ? true : _g, _h = _a.resetOnPreviewRestart, resetOnPreviewRestart = _h === void 0 ? false : _h, _j = _a.actionsChildren, actionsChildren = _j === void 0 ? jsx(Fragment, {}) : _j, _k = _a.standalone, standalone = _k === void 0 ? false : _k, props = __rest(_a, ["showHeader", "showSyntaxError", "maxMessageCount", "onLogsChange", "className", "showSetupProgress", "showResetConsoleButton", "showRestartButton", "resetOnPreviewRestart", "actionsChildren", "standalone"]);
    var environment = useSandpack().sandpack.environment;
    var _l = useSandpackClient(), iframe = _l.iframe, internalClientId = _l.clientId;
    var restart = useSandpackShell().restart;
    var _m = React.useState(environment === "node" ? "server" : "client"), currentTab = _m[0], setCurrentTab = _m[1];
    var clientId = standalone ? internalClientId : undefined;
    var _o = useSandpackConsole({
        maxMessageCount: maxMessageCount,
        showSyntaxError: showSyntaxError,
        resetOnPreviewRestart: resetOnPreviewRestart,
        clientId: clientId,
    }), consoleData = _o.logs, resetConsole = _o.reset;
    var _p = useSandpackShellStdout({
        maxMessageCount: maxMessageCount,
        resetOnPreviewRestart: resetOnPreviewRestart,
        clientId: clientId,
    }), stdoutData = _p.logs, resetStdout = _p.reset;
    var wrapperRef = React.useRef(null);
    React.useEffect(function () {
        onLogsChange === null || onLogsChange === void 0 ? void 0 : onLogsChange(consoleData);
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
        }
    }, [onLogsChange, consoleData, stdoutData, currentTab]);
    var isServerTab = currentTab === "server";
    var isNodeEnvironment = environment === "node";
    React.useImperativeHandle(ref, function () { return ({
        reset: function () {
            resetConsole();
            resetStdout();
        },
    }); });
    var classNames = useClassNames();
    return (jsxs(SandpackStack, __assign({ className: classNames("console", [
            css((_b = {
                    height: "100%",
                    background: "$surface1",
                    iframe: { display: "none" }
                },
                _b[".".concat(THEME_PREFIX, "-bridge-frame")] = {
                    display: "block",
                    border: 0,
                    position: "absolute",
                    left: "$space$2",
                    bottom: "$space$2",
                    zIndex: "$top",
                    height: 12,
                    width: "30%",
                    mixBlendMode: "multiply",
                    pointerEvents: "none",
                },
                _b)),
            className,
        ]) }, props, { children: [showHeader && isNodeEnvironment && (jsx(Header, { currentTab: currentTab, node: isNodeEnvironment, setCurrentTab: setCurrentTab })), jsx("div", { ref: wrapperRef, className: classNames("console-list", [
                    css({ overflow: "auto", scrollBehavior: "smooth" }),
                ]), children: isServerTab ? (jsx(StdoutList, { data: stdoutData })) : (jsx(ConsoleList, { data: consoleData })) }), jsxs("div", { className: classNames("console-actions", [
                    css({
                        position: "absolute",
                        bottom: "$space$2",
                        right: "$space$2",
                        display: "flex",
                        gap: "$space$2",
                    }),
                ]), children: [actionsChildren, showRestartButton && isServerTab && (jsx(RoundedButton, { onClick: function () {
                            restart();
                            resetConsole();
                            resetStdout();
                        }, children: jsx(RestartIcon, {}) })), showResetConsoleButton && (jsx(RoundedButton, { onClick: function () {
                            if (currentTab === "client") {
                                resetConsole();
                            }
                            else {
                                resetStdout();
                            }
                        }, children: jsx(CleanIcon, {}) }))] }), standalone && (jsxs(Fragment, { children: [jsx(DependenciesProgress, { clientId: clientId }), jsx("iframe", { ref: iframe })] }))] })));
});

var Sandpack = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var options = _a.options, template = _a.template, customSetup = _a.customSetup, files = _a.files, theme = _a.theme, props = __rest(_a, ["options", "template", "customSetup", "files", "theme"]);
    options !== null && options !== void 0 ? options : (options = {});
    (_b = options.resizablePanels) !== null && _b !== void 0 ? _b : (options.resizablePanels = true);
    (_c = options.editorWidthPercentage) !== null && _c !== void 0 ? _c : (options.editorWidthPercentage = 50);
    (_d = options.showConsole) !== null && _d !== void 0 ? _d : (options.showConsole = false);
    var rtlLayout = (_e = options === null || options === void 0 ? void 0 : options.rtl) !== null && _e !== void 0 ? _e : false;
    var codeEditorOptions = {
        showTabs: options.showTabs,
        showLineNumbers: options.showLineNumbers,
        showInlineErrors: options.showInlineErrors,
        wrapContent: options.wrapContent,
        closableTabs: options.closableTabs,
        initMode: options.initMode,
        extensions: (_f = options.codeEditor) === null || _f === void 0 ? void 0 : _f.extensions,
        extensionsKeymap: (_g = options.codeEditor) === null || _g === void 0 ? void 0 : _g.extensionsKeymap,
        readOnly: options.readOnly,
        showReadOnly: options.showReadOnly,
        additionalLanguages: (_h = options.codeEditor) === null || _h === void 0 ? void 0 : _h.additionalLanguages,
    };
    var providerOptions = {
        /**
         * TS-why: Type 'string | number | symbol' is not assignable to type 'string'
         */
        activeFile: options.activeFile,
        visibleFiles: options.visibleFiles,
        recompileMode: options.recompileMode,
        recompileDelay: options.recompileDelay,
        autorun: options.autorun,
        autoReload: options.autoReload,
        bundlerURL: options.bundlerURL,
        startRoute: options.startRoute,
        skipEval: options.skipEval,
        fileResolver: options.fileResolver,
        initMode: options.initMode,
        initModeObserverOptions: options.initModeObserverOptions,
        externalResources: options.externalResources,
        logLevel: options.logLevel,
        classes: options.classes,
        experimental_enableServiceWorker: options.experimental_enableServiceWorker,
        experimental_enableStableServiceWorkerId: options.experimental_enableStableServiceWorkerId,
    };
    /**
     * Console
     */
    var _k = React.useState(options.showConsole), consoleVisibility = _k[0], setConsoleVisibility = _k[1];
    var _l = React.useState(0), counter = _l[0], setCounter = _l[1];
    var hasRightColumn = options.showConsole || options.showConsoleButton;
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    var templateFiles = (_j = SANDBOX_TEMPLATES[template]) !== null && _j !== void 0 ? _j : {};
    var mode = ((options === null || options === void 0 ? void 0 : options.layout)
        ? options === null || options === void 0 ? void 0 : options.layout
        : "mode" in templateFiles
            ? templateFiles.mode
            : "preview");
    var actionsChildren = options.showConsoleButton ? (jsx(ConsoleCounterButton, { counter: counter, onClick: function () { return setConsoleVisibility(function (prev) { return !prev; }); } })) : undefined;
    /**
     * Resizable
     */
    /* eslint-disable @typescript-eslint/no-explicit-any */
    var dragEventTargetRef = React.useRef(null);
    var _m = React.useState(options.editorWidthPercentage), horizontalSize = _m[0], setHorizontalSize = _m[1];
    var _o = React.useState(70), verticalSize = _o[0], setVerticalSize = _o[1];
    var RightColumn = hasRightColumn ? SandpackStack : React.Fragment;
    var rightColumnStyle = {
        flexGrow: 100 - horizontalSize,
        flexShrink: 100 - horizontalSize,
        flexBasis: 0,
        width: 100 - horizontalSize + "%",
        gap: consoleVisibility ? 1 : 0,
        height: options.editorHeight, // use the original editor height
    };
    var topRowStyle = hasRightColumn
        ? {
            flexGrow: verticalSize,
            flexShrink: verticalSize,
            flexBasis: 0,
            overflow: "hidden",
        }
        : rightColumnStyle;
    var onDragMove = function (event) {
        if (!dragEventTargetRef.current)
            return;
        var container = dragEventTargetRef.current.parentElement;
        if (!container)
            return;
        var direction = dragEventTargetRef.current.dataset.direction;
        var isHorizontal = direction === "horizontal";
        var _a = container.getBoundingClientRect(), left = _a.left, top = _a.top, height = _a.height, width = _a.width;
        var offset = isHorizontal
            ? ((event.clientX - left) / width) * 100
            : ((event.clientY - top) / height) * 100;
        var boundaries = Math.min(Math.max(offset, 25), 75);
        if (isHorizontal) {
            setHorizontalSize(rtlLayout ? 100 - boundaries : boundaries);
        }
        else {
            setVerticalSize(boundaries);
        }
        container.querySelectorAll(".".concat(THEME_PREFIX, "-stack")).forEach(function (item) {
            item.style.pointerEvents = "none";
        });
    };
    var stopDragging = function () {
        var _a;
        var container = (_a = dragEventTargetRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        if (!container)
            return;
        container.querySelectorAll(".".concat(THEME_PREFIX, "-stack")).forEach(function (item) {
            item.style.pointerEvents = "";
        });
        dragEventTargetRef.current = null;
    };
    React.useEffect(function () {
        if (!(options === null || options === void 0 ? void 0 : options.resizablePanels))
            return;
        document.body.addEventListener("mousemove", onDragMove);
        document.body.addEventListener("mouseup", stopDragging);
        return function () {
            document.body.removeEventListener("mousemove", onDragMove);
            document.body.removeEventListener("mouseup", stopDragging);
        };
    }, [options]);
    React.useEffect(function () {
        var _a;
        setConsoleVisibility((_a = options === null || options === void 0 ? void 0 : options.showConsole) !== null && _a !== void 0 ? _a : false);
    }, [options.showConsole]);
    var rightColumnProps = hasRightColumn
        ? { className: THEME_PREFIX + "-preset-column", style: rightColumnStyle }
        : {};
    var classNames = useClassNames();
    return (jsx(SandpackProvider, __assign({ customSetup: customSetup, files: files, options: providerOptions, template: template, theme: theme }, props, { children: jsxs(SandpackLayout, { className: rtlLayout ? classNames("rtl-layout", [rtlLayoutClassName]) : "", children: [jsx(SandpackCodeEditor, __assign({}, codeEditorOptions, { style: {
                        height: options.editorHeight,
                        flexGrow: horizontalSize,
                        flexShrink: horizontalSize,
                        flexBasis: 0,
                        overflow: "hidden",
                    } })), options.resizablePanels && (jsx("div", { className: classNames("resize-handler", [
                        dragHandler({ direction: "horizontal" }),
                    ]), "data-direction": "horizontal", onMouseDown: function (event) {
                        dragEventTargetRef.current = event.target;
                    }, style: {
                        left: "calc(".concat(rtlLayout ? 100 - horizontalSize : horizontalSize, "% - 5px)"),
                    } })), jsxs(RightColumn, __assign({}, rightColumnProps, { children: [mode === "preview" && (jsx(SandpackPreview, { actionsChildren: actionsChildren, showNavigator: options.showNavigator, showRefreshButton: options.showRefreshButton, style: topRowStyle })), mode === "tests" && (jsx(SandpackTests, { actionsChildren: actionsChildren, style: topRowStyle })), mode === "console" && (jsx(SandpackConsole, { actionsChildren: actionsChildren, style: topRowStyle, standalone: true })), (options.showConsoleButton || consoleVisibility) && (jsxs(Fragment, { children: [options.resizablePanels && consoleVisibility && (jsx("div", { className: classNames("resize-handler", [
                                        dragHandler({ direction: "vertical" }),
                                    ]), "data-direction": "vertical", onMouseDown: function (event) {
                                        dragEventTargetRef.current = event.target;
                                    }, style: { top: "calc(".concat(verticalSize, "% - 5px)") } })), jsx("div", { className: classNames("console-wrapper", [consoleWrapper]), style: {
                                        flexGrow: consoleVisibility ? 100 - verticalSize : 0,
                                        flexShrink: consoleVisibility ? 100 - verticalSize : 0,
                                        flexBasis: 0,
                                    }, children: jsx(SandpackConsole, { onLogsChange: function (logs) { return setCounter(logs.length); }, showHeader: false }) })] }))] }))] }) }), template));
};
var dragHandler = css({
    position: "absolute",
    zIndex: "$top",
    variants: {
        direction: {
            vertical: {
                right: 0,
                left: 0,
                height: 10,
                cursor: "ns-resize",
            },
            horizontal: {
                top: 0,
                bottom: 0,
                width: 10,
                cursor: "ew-resize",
            },
        },
    },
    "@media screen and (max-width: 768px)": {
        display: "none",
    },
});
var ConsoleCounterButton = function (_a) {
    var onClick = _a.onClick, counter = _a.counter;
    return (jsxs(RoundedButton, { className: buttonCounter.toString(), onClick: onClick, children: [jsx(ConsoleIcon, {}), counter > 0 && jsx("strong", { children: counter })] }));
};
var buttonCounter = css({
    position: "relative",
    strong: {
        background: "$colors$clickable",
        color: "$colors$surface1",
        minWidth: 12,
        height: 12,
        padding: "0 2px",
        borderRadius: 12,
        fontSize: 8,
        lineHeight: "12px",
        position: "absolute",
        top: 0,
        right: 0,
        fontWeight: "normal",
    },
});
var consoleWrapper = css({
    width: "100%",
    overflow: "hidden",
});
var rtlLayoutClassName = css({
    flexDirection: "row-reverse",
    "@media screen and (max-width: 768px)": {
        flexFlow: "wrap-reverse !important",
        flexDirection: "initial",
    },
});

export { ANGULAR_TEMPLATE, ASTRO_TEMPLATE, BackwardIcon, CleanIcon, CloseIcon, CodeMirror as CodeEditor, ConsoleIcon, DependenciesProgress, DirectoryIconClosed, DirectoryIconOpen, ErrorOverlay, ExportIcon, FADE_ANIMATION_DURATION, FileIcon, FileTabs, ForwardIcon, LoadingOverlay, Navigator, OpenInCodeSandboxButton, REACT_TEMPLATE, REACT_TYPESCRIPT_TEMPLATE, RefreshIcon, RestartIcon, RoundedButton, RunButton$1 as RunButton, RunIcon, SANDBOX_TEMPLATES, SANDPACK_THEMES, SOLID_TEMPLATE, SVELTE_TEMPLATE, Sandpack, SandpackCodeEditor, SandpackCodeViewer, SandpackConsole, SandpackConsumer, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider, Sandpack$1 as SandpackReactContext, SandpackStack, SandpackTests, SandpackThemeConsumer, SandpackThemeContext, SandpackThemeProvider, SandpackTranspiledCode, SignInIcon, SignOutIcon, TEST_TYPESCRIPT_TEMPLATE, UnstyledOpenInCodeSandboxButton, VANILLA_TEMPLATE, VANILLA_TYPESCRIPT_TEMPLATE, VUE_TEMPLATE, defaultDark, defaultLight, getCssText as getSandpackCssText, layoutClassName, stackClassName, tabButton, useActiveCode, useClassNames, useErrorMessage, useLoadingOverlayState, useSandpack, useSandpackClient, useSandpackConsole, useSandpackNavigation, useSandpackPreviewProgress, useSandpackShell, useSandpackShellStdout, useSandpackTheme, useTranspiledCode };
